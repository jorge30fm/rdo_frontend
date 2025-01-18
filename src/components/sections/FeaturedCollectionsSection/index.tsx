import { Box, Typography } from "@mui/material";
import { FeaturedCollectionCard, LinkButton } from "@/components";
import { ArrowForward } from "@mui/icons-material";

const collections = [
	{
		title: "Portraits",
		text: "Capture the essence of your loved ones with a custom portrait.",
		href: "/Shop/products",
		image: "/images/roldanOriginals/girl.jpg",
	},
	{
		title: "Landscapes",
		text: "Immerse yourself in serene and vibrant scenery.",
		href: "/Shop/products",
		image: "/images/roldanOriginals/nature.jpg",
	},
	{
		title: "Nature",
		text: "Connect with the beauty of the natural world",
		href: "/Shop/products",
		image: "/images/roldanOriginals/horse.jpg",
	},
	{
		title: "Cultural",
		text: "Celebrate heritage and storytelling through art",
		href: "/Shop/products",
		image: "/images/roldanOriginals/tobaco.jpg",
	},
];

const FeaturedCollectionsSection = () => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				gap: "2rem",
				flexWrap: "wrap",
				padding: "2rem",
			}}
		>
			<Typography
				variant="h2"
				align="center"
				sx={{ margin: "2rem 0" }}
			>
				Featured Collections
			</Typography>
			<Box
				sx={{
					display: "flex",
					justifyContent: "center",

					gap: "2rem",
					flexWrap: "wrap",
					padding: "2rem",
				}}
			>
				{collections.map((collection, index) => (
					<FeaturedCollectionCard
						key={index}
						{...collection}
					/>
				))}
			</Box>
			<Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
				<LinkButton
					href="/Shop/products"
					text="View All Collections"
					variant="outlined"
					color="dark"
					endIcon={<ArrowForward />}
				/>
			</Box>
		</Box>
	);
};
export default FeaturedCollectionsSection;
