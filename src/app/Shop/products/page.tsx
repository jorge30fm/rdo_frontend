"use client";
// react imports
import React, { useEffect, useCallback, memo } from "react";
// components
import { Box, useMediaQuery, Theme } from "@mui/material";
import {
	CarouselReviews,
	CallToAction,
	Breadcrumb,
	ProductCard,
	FilterPanel,
} from "@/components";
import { MobileFilterPanel } from "@/components/pages/Shop/FilterPanel";
// theme
import colors from "@/theme/colors";
import { alpha } from "@mui/material";
// redux
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsThunk } from "@/GlobalRedux/features/productsSlice";
import { fetchCategoriesThunk } from "@/GlobalRedux/features/filtersSlice";
import { RootState } from "@/GlobalRedux/store";
import { AppDispatch } from "@/GlobalRedux/store";
// utils
import { handleFilterChange } from "@/utils/filterFunctions";
import { updateSearchQuery } from "@/utils/searchFunctions";
import { debounce } from "lodash";

//  ----------------------------------------------------------------------------//

// Static Data
const reviews = {
	title: "What People Are Saying",
	items: [
		{
			reviewType: "Live Painting",
			review:
				"Roldan painted at our wedding, and it was the most magical experience. Our guests were in awe of his talent, and we now have a beautiful painting to remember our special day forever.",
			name: "Sara & Michael",
			image: "/images/wedding/brideAndGroom.jpeg",
			subjectLine: "A Magical Experience",
		},
		{
			reviewType: "Commissioned Art",
			review:
				"Roldan created a custom painting for our home, and it exceeded all our expectations. His attention to detail and ability to capture the essence of our vision was truly remarkable.",
			name: "Megan & David",
			image: "/images/portraitsAi/dogPortrait.jpeg",
			subjectLine: "A Magical Experience",
		},
		{
			reviewType: "Original Art",
			review:
				"We purchased an original painting from Roldan, and it has become the centerpiece of our living room. His use of color and texture is breathtaking, and we love the energy it brings to our space.",
			name: "Sophia & James",
			image: "/images/roldanOriginals/girl2.jpg",
			subjectLine: "A Magical Experience",
		},
	],
};
const callToActionContent = {
	title: "Looking for Something Unique?",
	description: "Commission a custom piece tailored to your vision.",
	buttonText: "Looking for Something Unique?",
	buttonHref: "/Contact",
	backgroundImage: "/images/roldanOriginals/nature.jpg",
};
const breadcrumbs = [
	{ label: "Home", href: "/" },
	{ label: "Shop", href: "/Shop" },
	{ label: "Products", href: "/Shop/products" },
];

// Type declarations
interface Product {
	id: number;
	name: string;
	price: number;
	product_images: { image: string }[];
	size: string;
	material: string;
	created_at: string;
	updated_at: string;
	categories: string[];
	tags: string[];
	keywords: string;
}

// Component
const ProductsPage = memo(function ProductsPage() {
	//state
	const [searchValue, setSearchValue] = React.useState("");
	const isMobile = useMediaQuery((theme: Theme) =>
		theme.breakpoints.down("sm")
	);

	// Global Redux
	const dispatch: AppDispatch = useDispatch();
	// Fetch categories on page load
	useEffect(() => {
		dispatch(fetchCategoriesThunk());
	}, [dispatch]);

	// Initialising the selected filters and search query
	const selectedFilters = useSelector(
		(state: RootState) => state.filters.selectedFilters
	);
	const search = useSelector((state: RootState) => state.filters.search);

	// Fetch products on page load
	useEffect(() => {
		dispatch(fetchProductsThunk({ filters: selectedFilters, search }));
	}, [dispatch, selectedFilters, search]);

	// Redux State
	const products = useSelector((state: RootState) => state.products.products);
	const filters = useSelector((state: RootState) => state.filters.filters);

	// Handlers
	const onFilterChange = useCallback(
		(filterBy: string, option: string) => {
			handleFilterChange(dispatch, selectedFilters, filterBy, option);
		},
		[dispatch, selectedFilters]
	);

	const handleSearchInputChange = useCallback((value: string) => {
		setSearchValue(value);
	}, []);

	const handleSearchFormSubmit = useCallback(() => {
		updateSearchQuery(searchValue, dispatch);
	}, [dispatch, searchValue]);

	useEffect(() => {
		console.log(search);
	}, [search]);


	const debouncedUpdateSearch = useCallback(
		debounce(function (value: string) {
			updateSearchQuery(value, dispatch);
		}, 500),
		[dispatch]
	);

    useEffect(() => {
        // Trigger debounced function whenever searchValue changes
        debouncedUpdateSearch(searchValue);
    }, [searchValue, debouncedUpdateSearch]);

	return (
		<Box>
			{/* Breadcrumb Section */}
			<Box sx={{ px: 8 }}>
				<Breadcrumb items={breadcrumbs} />
			</Box>

			{/* Main Content */}
			<Box
				sx={{
					display: "flex",
					justifyContent: "flex-start",
					alignItems: "flex-start",
					flexDirection: "row",
					minHeight: "100vh",
					background: colors.secondary,
				}}
			>
				{/* Desktop Filter Panel */}
				{!isMobile && filters && (
					<FilterPanel
						filters={filters}
						selectedFilters={selectedFilters}
						handleFilterChange={onFilterChange}
						onSearchChange={handleSearchInputChange}
						onSearchSubmit={handleSearchFormSubmit}
					/>
				)}

				{/* Products Section */}
				<Box
					sx={{
						display: "flex",
						justifyContent: { xs: "center", md: "flex-start" },
						alignItems: "flex-start",
						flexWrap: "wrap",
						gap: 3,
						p: { xs: 2, md: 4 },
						background: colors.secondary,
						minHeight: "100vh",
						overflowY: "scroll",
						borderLeft: `1px solid ${alpha(colors.accent, 0.2)}`,
					}}
				>
					{/* Mobile Filter Panel */}
					{isMobile && filters && (
						<Box
							sx={{
								width: "100%",
								display: "flex",
								justifyContent: "flex-end",
							}}
						>
							<MobileFilterPanel
								filters={filters}
								selectedFilters={selectedFilters}
								handleFilterChange={onFilterChange}
								onSearchChange={handleSearchInputChange}
								onSearchSubmit={handleSearchFormSubmit}
							/>
						</Box>
					)}

					{/* Product Cards */}
					{products &&
						products.map((product: Product) => (
							<ProductCard
								key={product.id}
								id={product.id}
								image={product.product_images[0]?.image || ""}
								name={product.name}
								price={product.price}
								buttonType="addToCart"
							/>
						))}
				</Box>
			</Box>

			{/* Call to Action */}
			<CallToAction {...callToActionContent} />

			{/* Reviews Section */}
			<Box sx={{ background: colors.secondary, py: "4rem" }}>
				<CarouselReviews
					title={reviews.title}
					items={reviews.items}
				/>
			</Box>
		</Box>
	);
});

export default ProductsPage;
