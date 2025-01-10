import { Box, Typography } from "@mui/material";
import { ProductCard } from "@/components";

const recentAdditionsContent = [
	{
		id: 1,
		image: "/images/roldanOriginals/girl2.jpg",
		title: "Floral Reverie",
		price: 250,
		buttonType: "details" as const,
	},
	{
		id: 2,
		image: "/images/roldanOriginals/child.jpg",
		title: "Radiant Innocence",
		price: 250,
		buttonType: "details" as const,
	},
	{
		id: 3,
		image: "/images/roldanOriginals/horse.jpg",
		title: "Unbridled Spirit",
		price: 250,
		buttonType: "details" as const,
	},
	{
		id: 4,
		image: "/images/roldanOriginals/nature.jpg",
		title: "Nature's Embrace",
		price: 250,
		buttonType: "details" as const,
	},
];

const RecentAdditions = () => {
	return (
		<Box sx={{py:8}}>
			<Typography
				variant="h2"
				textAlign="center"
				sx={{mb:4}}
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
				{recentAdditionsContent.map((product, index) => (
					<ProductCard
						key={index}
						{...product}
					/>
				))}
			</Box>
		</Box>
	);
};
export default RecentAdditions;
