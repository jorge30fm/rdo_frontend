import { Box, Typography } from "@mui/material";
import colors from "@/theme/colors";
import { LinkButton } from "@/components";

interface FeaturedCollectionCardProps {
	title: string;
	text: string;
	href: string;
	image: string;
}

const FeaturedCollectionCard: React.FC<FeaturedCollectionCardProps> = ({
	title,
	text,
	href,
	image,
}) => {
	return (
		
			<Box
				sx={{
					position: "relative", // Ensure proper positioning for pseudo-elements
					width: 275,
					height: 275,
					overflow: "hidden", // Prevent blur effect from spilling outside the box
					boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", // Add shadow for depth
					//on hover increase size
					"&:hover": {
						transform: "scale(1.05)",
						transition: "transform 0.5s",
					},
				}}
			>
				{/* Blurred background */}
				<Box
					sx={{
						position: "absolute",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%",
						backgroundImage: `url(${image})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
						filter: "blur(2px)", // Apply blur effect
						transform: "scale(1.1)", // Slightly scale up to hide blur edges
						zIndex: 0,
					}}
				/>

				{/* Foreground content */}
				<Box
					sx={{
						position: "relative",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: "1rem",
						padding: "1rem",
						justifyContent: "center",
						height: "100%",
						width: "100%",
						zIndex: 1, // Ensure content is above the blurred background
						backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
						color: colors.main,
					}}
				>
					<Typography
						variant="h4"
						align="center"
						sx={{
							fontSize: "1.5rem",
							color: colors.main,
						}}
					>
						{title}
					</Typography>
					<Typography
						variant="body1"
						align="center"
						sx={{ color: colors.main }}
					>
						{text}{" "}
					</Typography>
					<LinkButton
						href={href}
						text="Shop Now"
						variant="outlined"
						color="light"
					/>
				</Box>
			</Box>
	
	);
};

export default FeaturedCollectionCard;
