import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    const storedData = localStorage.getItem("shoppingCart");
    return storedData
        ? JSON.parse(storedData)
        : { items: [], totalQuantity: 0, totalPrice: 0 };
};

const saveToLocalStorage = (state: ShoppingCartState) => {
    localStorage.setItem("shoppingCart", JSON.stringify(state));
};

// Initial State
const initialState: ShoppingCartState = loadFromLocalStorage();

const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState,
    reducers: {
        // Add item to the cart
        addItemToCart(state, action: PayloadAction<Omit<CartItem, "quantity">>) {
            const existingItem = state.items.find(
                (item) => item.id === action.payload.id
            );

            if (existingItem && existingItem.stockQuantity > existingItem.quantity) {
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
    clearCart,
} = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;