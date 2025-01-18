import { AppDispatch } from "@/GlobalRedux/store";
import { setSearch } from "@/GlobalRedux/features/filtersSlice";

/**
 * Updates the search query in Redux state.
 * @param {string} query - The search query entered by the user.
 * @param {AppDispatch} dispatch - The Redux dispatch function.
 */
export const updateSearchQuery = (query: string, dispatch: AppDispatch) => {
	dispatch(setSearch(query));
};

/**
 * Submits the search query and fetches products based on the current state.
 * @param {AppDispatch} dispatch - The Redux dispatch function.
 * @param {string} search - Current search query from Redux state.
 * @param {Array<{ filterBy: string; options: string[] }>} selectedFilters - Current selected filters.
 */

