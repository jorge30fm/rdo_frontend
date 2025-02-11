"use client";
import { usePathname } from "next/navigation";
import { ProductDetailsLayout } from "@/layouts";
import { Breadcrumb } from "@/components";
import { Box } from "@mui/material";
import { fetchProductDetails } from "@/api/products";
import { useState, useEffect } from "react";

// const product = {
// 	id: 1,
// 	image: "/images/roldanOriginals/girl2.jpg",
// 	name: "Floral Reverie",
// 	price: 250,
// 	size: `12" x 12" in`,
// 	description: "A beautiful floral painting that will brighten any room.",
// 	material: "Oil on canvas",
// };

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
	quantity: number;
	categories: string[];
	tags: string[];
	keywords: string;
}

const ProductDetails = () => {
	const [product, setProduct] = useState({} as Product);

	const breadcrumbs = [
		{ label: "Home", href: "/" },
		{ label: "Shop", href: "/Shop" },
		{ label: "Products", href: "/Shop/products" },
		{ label: product.name }, // No href for the current page
	];
	const pathname = usePathname();

	const productId = pathname.split("/").pop();

	useEffect(() => {
		if (productId) {
			fetchProductDetails(productId).then((product) => {
				setProduct(product);
			});
		}
	}, [productId]);

	return (
		<div>
			{/* breadcrumbs */}

			<Box sx={{ px: 8 }}>
				<Breadcrumb items={breadcrumbs} />
			</Box>
			{/* Product Details */}

			{
				product.id && (
					<ProductDetailsLayout {...product} />
				)
				

			}
		</div>
	);
};
export default ProductDetails;
