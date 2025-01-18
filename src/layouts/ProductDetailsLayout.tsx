"use client";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import colors from "@/theme/colors";
import { AddToCartButton } from "@/components";

interface ProductProps {
	id: number | string;
	product_images: { image: string }[];
	name: string;
	price?: number;
	size?: string;
	description?: string;
	material?: string;
}

const ProductDetailsLayout = ({
	id,
	product_images,
	name,
	price,
	size,
	description,
	material,
}: ProductProps) => {
	return (
		<Box sx={{ display: "flex", gap: 8, py: 4, px: 18 }}>
			<Image
				src={product_images[0].image}
				alt={name}
				width={500}
				height={500}
				quality={75}
				priority
				style={{
					objectFit: "cover",
				}}
			/>
			{/* product details */}
			<Box
				sx={{ padding: 2, gap: 2, display: "flex", flexDirection: "column" }}
			>
				<Typography
					variant="h4"
					fontSize={{ xs: "1rem", md: "1.5rem" }}
					sx={{
						fontWeight: "bold",
						color: colors.dark,
						textTransform: "uppercase",
					}}
				>
					{name}
				</Typography>
				<Typography
					variant="h5"
					fontSize={{ xs: "1rem", md: "1.5rem" }}
					sx={{ color: colors.accent, fontWeight: 900 }}
				>
					${price}
				</Typography>

				<Typography
					variant="body1"
					fontSize={{ xs: "0.75rem", md: "1rem" }}
					sx={{ color: colors.dark }}
				>
					{material}
				</Typography>
				<Typography
					variant="body1"
					fontSize={{ xs: "0.75rem", md: "1rem" }}
					sx={{ color: colors.dark }}
				>
					{size}
				</Typography>
				<Typography
					variant="body1"
					fontSize={{ xs: "0.75rem", md: "1rem" }}
					sx={{ color: colors.dark }}
				>
					{description}
				</Typography>

				<AddToCartButton product={{ name, id }} />
			</Box>
		</Box>
	);
};
export default ProductDetailsLayout;
