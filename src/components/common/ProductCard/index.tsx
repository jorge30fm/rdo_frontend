"use client";
import { Box, Typography } from "@mui/material";
import colors from "@/theme/colors";

import { AddToCartButton, LinkButton, ProductImage } from "@/components";

//TODO: Handle Add to Cart functionality

interface ProductCardProps {
	id: number | string;
	//array of objects
	image:  string;
	name: string;
	price?: number;
	quantity?: number;
	size?: string;
	description?: string;
	material?: string;
	buttonType?: "addToCart" | "details" | "none"; // Define button options
	buttonHref?: string; // Link for the details button
}

const ProductCard = ({
	id,
	image,
	name,
	quantity,
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
				justifyContent: "space-between",
				maxWidth: 200,
				minHeight: "370px",
				bakground: "green",
				flexGrow: 1,
			}}
		>
			
			<ProductImage
				image={image}
				name={name}
				productId={id}
			/>
			{/* product details */}
			<Box
				sx={{
					py: 2,
					gap: 2,
					display: "flex",
					flexDirection: "column",
					flexGrow: 1,
					justifyContent: "space-between",
				}}
			>
				<Typography
					variant="h4"
					fontSize={{ xs: "1rem" }}
					sx={{ fontWeight: "bold", color: colors.dark }}
				>
					{name}
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
						{buttonType === "addToCart" && price && (
							<AddToCartButton product={{ id, name, price, image, quantity: quantity ?? 1 }} />
						)}
						{buttonType === "details" && (
							<LinkButton
								variant="outlined"
								text="View Details"
								color="dark"
								href={`Shop/products/${id}`}
							/>
						)}
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default ProductCard;
