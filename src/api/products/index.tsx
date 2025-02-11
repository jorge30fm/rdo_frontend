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

/**
 * Fetches the four most recently uploaded products.
 * @returns {Promise<any>} - The fetched recent products data.
 */
const fetchRecentProducts = async () => {
	try {
		// Construct the URL for fetching recent products
		const url = `${BASE_URL}/shop/products/?recent=true`;

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
		console.error("Error fetching recent products:", error);
		throw error;
	}
};

/**
 * Updates the quantity of a specific product in the database.
 * @param {string} productId - The ID of the product to update.
 * @param {number} newQuantity - The new quantity value.
 * @returns {Promise<any>} - The updated product data.
 */
const updateProductQuantity = async (
	productId: string,
	newQuantity: number
) => {
	try {
		const response = await fetch(`${BASE_URL}/shop/products/${productId}/`, {
			method: "PATCH", // ✅ Use PATCH to update only specific fields
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ quantity: newQuantity }),
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(
				`Failed to update product quantity. Status: ${response.status}. ${errorText}`
			);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("❌ Error updating product quantity:", error);
		return null;
	}
};

const checkIfIsInStock = async (
	productId: string | number,
	quantity: number
) => {
	try {
		const response = await fetch(
			`${BASE_URL}/shop/products/${productId}/stock/?quantity=${quantity}`
		);
		const data = await response.json();
		if (!response.ok) {
			throw new Error(data.error || `Error: ${response.status}`);
		}
		return data;
	} catch (error) {
		console.error("Error checking product stock:", error);
		return null;
	}
};

export {
	fetchProducts,
	fetchProductDetails,
	fetchCategories,
	fetchRecentProducts,
	updateProductQuantity,
	checkIfIsInStock,
};
