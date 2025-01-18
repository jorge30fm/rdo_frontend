import { AppDispatch } from "@/GlobalRedux/store";
import {
  setSelectedFilters,
  removeSelectedFilterOption,
} from "@/GlobalRedux/features/filtersSlice";

/**
 * Handles filter changes by adding or removing filter options.
 * Also triggers a fetch for products based on updated filters.
 * 
 * @param {AppDispatch} dispatch - The Redux dispatch function.
 * @param {Array<{ filterBy: string; options: string[] }>} selectedFilters - Current selected filters.
 * @param {string} filterBy - The filter category being changed.
 * @param {string} option - The specific filter option being toggled.
 * @param {string} search - The current search query.
 */
export const handleFilterChange = (
  dispatch: AppDispatch,
  selectedFilters: { filterBy: string; options: string[] }[],
  filterBy: string,
  option: string,
) => {
  // Check if the filter category already exists and contains the option
  const existingFilter = selectedFilters.find(
    (selFilter) => selFilter.filterBy === filterBy
  );

  if (existingFilter && existingFilter.options.includes(option)) {
    // Remove the option if it is already selected
    dispatch(removeSelectedFilterOption({ filterBy, option }));
  } else {
    // Add the option to the selected filters
    dispatch(setSelectedFilters({ filterBy, options: [option] }));
  }

  
};