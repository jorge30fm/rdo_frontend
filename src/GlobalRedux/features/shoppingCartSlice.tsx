import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchProductDetails } from "../../api/products";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Interfaces
interface CartItem {
	id: string | number;
	name: string;
	price: number;
	quantity: number;
	stockQuantity: number;
	image: string; // Optional: URL or path to the product image
}

interface ShoppingCartState {
	items: CartItem[];
	totalQuantity: number;
	totalPrice: number;
}

// Helper Functions for Local Storage
const loadFromLocalStorage = (): ShoppingCartState => {
	if (typeof window === "undefined") {
        return { items: [], totalQuantity: 0, totalPrice: 0 }; // Prevent SSR errors
    }

	try {
		const storedData = localStorage.getItem("shoppingCart");
		if (storedData) {
			const parsedData: ShoppingCartState = JSON.parse(storedData);
			return parsedData;
		}
	} catch (error) {
		console.error(
			"Error loading shopping cart data from local storage:",
			error
		);
	}

	// Return the default state if there's an error or no data in local storage
	return { items: [], totalQuantity: 0, totalPrice: 0 };
};

const saveToLocalStorage = (state: ShoppingCartState) => {
	try {
		localStorage.setItem("shoppingCart", JSON.stringify(state));
	} catch (error) {
		console.error("Error saving shopping cart data to local storage:", error);
	}
};

// Function to fetch up-to-date items
const getUpToDateItems = async (items: CartItem[]): Promise<CartItem[]> => {
	const updatedItems = await Promise.all(
		items.map(async (item) => {
			try {
				const product = await fetchProductDetails(item.id.toString());
				return {
					id: product.id,
					name: product.name,
					price: product.price,
					quantity: item.quantity,
					stockQuantity: product.quantity,
					image: product.product_images[0]?.image || "",
				};
			} catch (error) {
				console.error(
					`Failed to fetch details for product ID ${item.id}:`,
					error
				);
				return item; // Return the original item if fetching fails
			}
		})
	);

	return updatedItems;
};

// Initial State
const initialState: ShoppingCartState = loadFromLocalStorage();

export const addItemToCartAsync = createAsyncThunk(
	"shoppingCart/addItemToCartAsync",
	async (productId: string | number, { dispatch, getState }) => {
		try {
			const product = await fetchProductDetails(productId.toString());
			const state = getState() as RootState;
			const existingItem = state.cart.items.find(
				(item) => item.id === productId
			);

			// If item exists in cart, check stock before adding
			if (existingItem) {
				if (existingItem.quantity >= product.quantity) {
					alert("Not enough stock available");
					return;
				}
				dispatch(
					updateCartItemQuantity({
						id: productId,
						quantity: existingItem.quantity + 1,
					})
				);
			} else {
				// Add item with updated stock
				dispatch(
					addItemToCart({
						id: product.id,
						name: product.name,
						price: product.price,
						stockQuantity: product.quantity,
						image: product.product_images[0]?.image || "",
					})
				);
			}
		} catch (error) {
			console.error("Error fetching updated product stock:", error);
		}
	}
);

const shoppingCartSlice = createSlice({
	name: "shoppingCart",
	initialState,
	reducers: {
		// Add item to the cart
		addItemToCart: (
			state,
			action: PayloadAction<Omit<CartItem, "quantity">>
		) => {
			const existingItem = state.items.find(
				(item) => item.id === action.payload.id
			);

			if (existingItem) {
				existingItem.quantity += 1;
			} else {
				state.items.push({ ...action.payload, quantity: 1 });
			}

			state.totalQuantity += 1;
			state.totalPrice += action.payload.price;
			saveToLocalStorage(state);
		},

		// Remove item from the cart
		removeItemFromCart(state, action: PayloadAction<string | number>) {
			const itemId = action.payload;
			const existingItem = state.items.find((item) => item.id === itemId);

			if (existingItem) {
				state.totalQuantity -= existingItem.quantity;
				state.totalPrice -= existingItem.price * existingItem.quantity;
				state.items = state.items.filter((item) => item.id !== itemId);

				saveToLocalStorage(state);
			}
		},

		// Update item quantity in the cart
		updateCartItemQuantity(
			state,
			action: PayloadAction<{ id: string | number; quantity: number }>
		) {
			const { id, quantity } = action.payload;
			const existingItem = state.items.find((item) => item.id === id);

			if (existingItem) {
				const quantityDifference = quantity - existingItem.quantity;
				state.totalQuantity += quantityDifference;
				state.totalPrice += quantityDifference * existingItem.price;

				existingItem.quantity = quantity;

				saveToLocalStorage(state);
			}
		},

		// Update the cart with up-to-date items
		updateCart(state, action: PayloadAction<CartItem[]>) {
			state.items = action.payload;
			state.totalQuantity = action.payload.reduce(
				(acc, item) => acc + item.quantity,
				0
			);
			state.totalPrice = action.payload.reduce(
				(acc, item) => acc + item.price * item.quantity,
				0
			);

			saveToLocalStorage(state);
		},

		// Clear the cart
		clearCart(state) {
			state.items = [];
			state.totalQuantity = 0;
			state.totalPrice = 0;

			saveToLocalStorage(state);
		},
	},
});

export const {
	addItemToCart,
	removeItemFromCart,
	updateCartItemQuantity,
	updateCart,
	clearCart,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;

// Thunk to update the cart after loading from local storage
export const fetchAndUpdateCart =
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	() => async (dispatch: any, getState: any) => {
		const state: ShoppingCartState = getState().cart;
		const updatedItems = await getUpToDateItems(state.items);
		dispatch(updateCart(updatedItems));
	};
