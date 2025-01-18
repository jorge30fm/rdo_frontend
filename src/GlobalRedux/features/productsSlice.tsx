import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { fetchProducts } from "@/api/products"; // Update the import path as necessary

interface Product {
	id: number;
	name: string;
	price: number;
	description: string;
	product_images: { image: string }[];
	size: string;
	material: string;
	created_at: string;
	updated_at: string;
	categories: string[];
	tags: string[];
	keywords: string;
}

interface ProductState {
	products: Product[];
	filters: [{
        filterBy: string;
        options: string[];
    }];
	search: string;
	loading: boolean;
	error: string | null;
}

const initialState: ProductState = {
	products: [],
	filters: [{ filterBy: "", options: [] }],
	search: "",
	loading: false,
	error: null,
};

// Async thunk for fetching products
export const fetchProductsThunk = createAsyncThunk(
	"products/fetchProducts",
	async function (
		{
			filters = [],
			search = "",
		}: { filters?: { filterBy: string; options: string[] }[]; search?: string },
		{ rejectWithValue }
	) {
		try {
			const products = await fetchProducts(filters, search);
			return products;
		} catch (error: unknown) {
			if (error instanceof Error) {
				return rejectWithValue(error.message);
			}
			return rejectWithValue("An unknown error occurred");
		}
	}
);

// Async thunk for fetching categories
export const fetchCategoriesThunk = createAsyncThunk(
	"products/fetchCategories",
	async (_, { rejectWithValue }) => {
		try {
			const response = await fetch("http://127.0.0.1:8000/shop/categories/");
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const data = await response.json();
			return data.map((category: { name: string }) => category.name);
		} catch (error: unknown) {
			if (error instanceof Error) {
				return rejectWithValue(error.message);
			}
			return rejectWithValue("An unknown error occurred");
		}
	}
);

const productSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		setFilters(
			state,
            action: PayloadAction<{filterBy: string; options: string[]}>
        		) {
                    const index = state.filters.findIndex(
                        (filter) => filter.filterBy === action.payload.filterBy
                    );
                    if (index !== -1) {
                        state.filters[index] = action.payload;
                    } else {
                        state.filters.push(action.payload);
                    }
			
		},
		setSearch(state, action: PayloadAction<string>) {
			state.search = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProductsThunk.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				fetchProductsThunk.fulfilled,
				(state, action: PayloadAction<Product[]>) => {
					state.loading = false;
					state.products = action.payload;
				}
			)
			.addCase(fetchProductsThunk.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			})
			.addCase(fetchCategoriesThunk.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				fetchCategoriesThunk.fulfilled,
				(state, action: PayloadAction<string[]>) => {
					state.loading = false;

					// Add categories filter to the filters array
					const categoryFilter = {
						filterBy: "category",
						options: action.payload, // Options are the array of categories
					};

					const index = state.filters.findIndex(
						(filter) => filter.filterBy === "category"
					);

					if (index !== -1) {
						// Update existing categories filter
						state.filters[index] = categoryFilter;
					} else {
						// Add new categories filter
						state.filters.push(categoryFilter);
					}
				}
			)
			.addCase(fetchCategoriesThunk.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export const { setFilters, setSearch } = productSlice.actions;

export default productSlice.reducer;
