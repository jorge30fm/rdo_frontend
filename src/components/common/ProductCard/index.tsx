"use client";
import { Box, Typography, Button } from "@mui/material";
import colors from "@/theme/colors";
import Image from "next/image";
import Link from "next/link";

import { AddToCartButton } from "@/components";

//TODO: Handle Add to Cart functionality

interface ProductCardProps {
	id: number | string;
	image: string;
	title: string;
	price?: number;
	size?: string;
	description?: string;
	material?: string;
	buttonType?: "addToCart" | "details" | "none"; // Define button options
	buttonHref?: string; // Link for the details button
}

const ProductCard = ({
	id,
	image,
	title,
	price,
	size,
	description,
	material,
	buttonType = "none", // Default to no button
}: ProductCardProps) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				maxWidth: 275,
			}}
		>
			<Image
				src={image}
				alt={title}
				width={275}
				height={275}
				loading="lazy" // Ensure lazy loading for below-the-fold images
				quality={75}
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
					sx={{ fontWeight: "bold", color: colors.dark }}
				>
					{title}
				</Typography>

				{/* Optional Size */}
				{size && (
					<Typography
						variant="body2"
						sx={{ color: colors.dark }}
					>
						Size: {size}
					</Typography>
				)}

				{/* Optional Description */}
				{description && (
					<Typography
						variant="body2"
						sx={{ color: colors.dark, fontStyle: "italic" }}
					>
						{description}
					</Typography>
				)}

				{/* Optional Material */}
				{material && (
					<Typography
						variant="body2"
						sx={{ color: colors.dark }}
					>
						Material: {material}
					</Typography>
				)}
				{/* Optional Price */}
				{price && (
					<Typography
						variant="body1"
						sx={{ fontWeight: 500, color: colors.dark }}
					>
						${price}
					</Typography>
				)}

				{/* Render Button */}
				{buttonType !== "none" && (
					<Box>
						{buttonType === "addToCart" && (
							<AddToCartButton product={{ id, title }} />
						)}
						{buttonType === "details" && (
							<Link
								href={`Shop/${id}`}
								passHref
							>
								<Button
									variant="outlined"
									sx={{
										color: colors.dark,
										borderColor: colors.dark,
										"&:hover": {
											backgroundColor: colors.dark,
											color: colors.main,
										},
									}}
								>
									View Details
								</Button>
							</Link>
						)}
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default ProductCard;
