"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
	id: string; // Unique identifier for the product
	name: string;
	price: number;
	quantity: number;
	image: string; // Optional: for displaying in the cart
}

interface CartState {
	items: CartItem[];
	totalQuantity: number;
	totalPrice: number;
}

const initialState: CartState = {
	items: [],
	totalQuantity: 0,
	totalPrice: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		// Add item to the cart
		addToCart: (state, action: PayloadAction<CartItem>) => {
			const existingItem = state.items.find(
				(item) => item.id === action.payload.id
			);
			if (existingItem) {
				existingItem.quantity += action.payload.quantity;
			} else {
				state.items.push(action.payload);
			}
			state.totalQuantity += action.payload.quantity;
			state.totalPrice += action.payload.price * action.payload.quantity;
		},

		// Remove item from the cart
		removeFromCart: (state, action: PayloadAction<string>) => {
			const itemIndex = state.items.findIndex((item) => item.id === action.payload);
			if (itemIndex !== -1) {
				const item = state.items[itemIndex];
				state.totalQuantity -= item.quantity;
				state.totalPrice -= item.price * item.quantity;
				state.items.splice(itemIndex, 1);
			}
		},

		// Update item quantity
		updateQuantity: (
			state,
			action: PayloadAction<{ id: string; quantity: number }>
		) => {
			const { id, quantity } = action.payload;
			const existingItem = state.items.find((item) => item.id === id);
			if (existingItem && quantity > 0) {
				state.totalQuantity += quantity - existingItem.quantity;
				state.totalPrice += (quantity - existingItem.quantity) * existingItem.price;
				existingItem.quantity = quantity;
			}
		},

		// Clear the cart
		clearCart: (state) => {
			state.items = [];
			state.totalQuantity = 0;
			state.totalPrice = 0;
		},
	},
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;