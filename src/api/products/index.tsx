const BASE_URL = "http://127.0.0.1:8000";

/**
 * Builds a query string from the given parameters.
 * @param {Record<string, string | string[]>} params - The parameters to be converted into a query string.
 * @returns {string} - The constructed query string.
 */
const buildQueryString = (params: Record<string, string | string[]>) => {
	const urlParams = new URLSearchParams();

	Object.entries(params).forEach(([key, value]) => {
		if (Array.isArray(value)) {
			// Add multiple entries for duplicate parameters
			value.forEach((val) => urlParams.append(key, val));
		} else {
			// Add single entry for non-array values
			urlParams.append(key, value);
		}
	});

	return urlParams.toString();
};

/**
 * Fetches products based on the provided filters and search query.
 * @param {Array<{ filterBy: string; options: string[] }>} filters - The selected filters.
 * @param {string} search - The search query string.
 * @returns {Promise<any>} - The fetched products data.
 */
const fetchProducts = async (
	filters: { filterBy: string; options: string[] }[] = [],
	search: string = ""
) => {
	try {
		// Transform selected filters into query parameters
		const transformedFilters = filters.reduce((acc, filter) => {
			if (filter.options.length > 0) {
				acc[filter.filterBy] = filter.options;
			}
			return acc;
		}, {} as Record<string, string | string[]>);

		// Add search query to the parameters
		if (search.trim()) {
			transformedFilters["search"] = search.trim();
		}

		// Build query string
		const queryString = buildQueryString(transformedFilters);

		// Construct the full URL with query parameters
		const url = `${BASE_URL}/shop/products/${
			queryString ? `?${queryString}` : ""
		}`;
		console.log(url);

		// Make the API call
		const response = await fetch(url, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching products:", error);
		throw error;
	}
};

/**
 * Fetches the details of a specific product.
 * @param {string} productId - The ID of the product to fetch details for.
 * @returns {Promise<any>} - The fetched product details.
 */
const fetchProductDetails = (productId: string) => {
	return fetch(`${BASE_URL}/shop/products/${productId}/`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	}).then((response) => {
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		return response.json();
	});
};

/**
 * Fetches all available categories.
 * @returns {Promise<any>} - The fetched categories data.
 */
const fetchCategories = async () => {
	try {
		const response = await fetch(`${BASE_URL}/shop/categories/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("Error fetching categories:", error);
		throw error;
	}
};

export { fetchProducts, fetchProductDetails, fetchCategories };
