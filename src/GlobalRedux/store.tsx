"use client";

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/GlobalRedux/features/cartSlice";
import productsReducer from "@/GlobalRedux/features/productsSlice";
import filtersReducer from "@/GlobalRedux/features/filtersSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
	reducer: {
		cart: cartReducer, // Add cart reducer here
		products: productsReducer,
		filters: filtersReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
