import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interfaces
interface FilterState {
	filters: { filterBy: string; options: string[] }[];
	selectedFilters: { filterBy: string; options: string[] }[];
	search: string;
	loading: boolean;
	error: string | null;
}

// Initial State
const initialState: FilterState = {
	filters: [{ filterBy: "category", options: [] }], // Placeholder for categories
	selectedFilters: [],
	search: "",
	loading: false,
	error: null,
};

// Async Thunk for Fetching Categories
export const fetchCategoriesThunk = createAsyncThunk(
	"filters/fetchCategories",
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

// Slice
const filtersSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		// Set or update selected filters
		setSelectedFilters(
			state,
			action: PayloadAction<{ filterBy: string; options: string[] }>
		) {
			const index = state.selectedFilters.findIndex(
				(filter) => filter.filterBy === action.payload.filterBy
			);

			if (index !== -1) {
				// Merge options to avoid duplication
				state.selectedFilters[index].options = Array.from(
					new Set([
						...state.selectedFilters[index].options,
						...action.payload.options,
					])
				);
			} else {
				state.selectedFilters.push(action.payload);
			}
		},
		// Remove specific options from selected filters
		removeSelectedFilterOption(
			state,
			action: PayloadAction<{ filterBy: string; option: string }>
		) {
			const index = state.selectedFilters.findIndex(
				(filter) => filter.filterBy === action.payload.filterBy
			);

			if (index !== -1) {
				state.selectedFilters[index].options = state.selectedFilters[
					index
				].options.filter((opt) => opt !== action.payload.option);

				// Remove the filter entirely if no options are left
				if (state.selectedFilters[index].options.length === 0) {
					state.selectedFilters.splice(index, 1);
				}
			}
		},
		// Update search value
		setSearch(state, action: PayloadAction<string>) {
			state.search = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCategoriesThunk.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(
				fetchCategoriesThunk.fulfilled,
				(state, action: PayloadAction<string[]>) => {
					state.loading = false;
					const categoryFilter = {
						filterBy: "category",
						options: action.payload,
					};

					const index = state.filters.findIndex(
						(filter) => filter.filterBy === "category"
					);

					if (index !== -1) {
						state.filters[index] = categoryFilter;
					} else {
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

// Exports
export const { setSelectedFilters, removeSelectedFilterOption, setSearch } =
	filtersSlice.actions;

export default filtersSlice.reducer;
