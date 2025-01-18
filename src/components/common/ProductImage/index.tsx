"use client";
import Link from "next/link";
import Image from "next/image";
import { Box } from "@mui/material";

interface ProductImageProps {
	image: string;
	name: string;
	productId: string | number;
}

const ProductImage: React.FC<ProductImageProps> = ({
	image,
	name,
	productId,
}) => {
	return (
		<Link
			href={`/Shop/products/${productId}`}
			passHref
		>
			<Box
				style={{
					display: "block", // Ensures the link wraps the image
					position: "relative",
					overflow: "hidden", // To handle image scaling within bounds
				}}
			>
				<Image
					src={image}
					alt={name}
					width={200}
					height={200}
					loading="lazy"
					quality={75}
					style={{
						objectFit: "cover",
						transition: "transform 0.3s ease", // Smooth scaling effect
					}}
					// Add hover effects dynamically
					onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
					onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
				/>
			</Box>
		</Link>
	);
};

export default ProductImage;
