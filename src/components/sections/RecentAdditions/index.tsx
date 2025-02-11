"use client";
import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { ProductCard } from "@/components";
import { fetchRecentProducts } from "@/api/products";

interface Product {
	id: number;
	product_images: { image: string }[];
	name: string;
	price: number;
}

const RecentAdditions = () => {
	const [recentAdditions, setRecentAdditions] = useState<Product[]>([]);

	useEffect(() => {
		fetchRecentProducts().then((data) => {
			setRecentAdditions(data);
		});
	}, []);

	return (
		<Box sx={{ py: 8 }}>
			<Typography
				variant="h2"
				textAlign="center"
				sx={{ mb: 4 }}
			>
				Recent Additions
			</Typography>
			<Box
				sx={{
					display: "flex",
					gap: 4,
					flexWrap: "wrap",
					justifyContent: "center",
				}}
			>
				{recentAdditions.map((product, index) => (
					<ProductCard
						key={index}
						id={product.id}
						image={product.product_images[0].image}
						name={product.name}
						price={product.price}
						buttonType={"details"}
					/>
				))}
			</Box>
		</Box>
	);
};
export default RecentAdditions;
