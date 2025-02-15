"use client";
import { Box } from "@mui/material";
import { NavButton } from "./index";

const navigation = [
	{ text: "About", href: "/About" },
	{
		text: "Gallery",
		href: "/Gallery",
		menuOptions: [
			{ text: "Live Wedding Paintings", href: "/Gallery/LiveWeddingPaintings" },
			{ text: "After the Wedding", href: "/Gallery/AfterTheWedding" },
			{ text: "Traditional Portraits", href: "/Gallery/TraditionalPortraits" },
			{ text: "Commission Art", href: "/Gallery/CommissionArt" },
			{ text: "Pet Portraits", href: "/Gallery/PetPortraits" },
		],
	},
	{
		text: "Commissions",
		href: "/Commissions",
	},
	{ text: "Live Paintings", href: "/LivePaintings" },
	{ text: "Shop", href: "/Shop" },
	{ text: "Contact", href: "/Contact" },
];

const Navigation = ({
	direction = "row",
	dense = false
}: {
	direction?: "row" | "column";
	dense?: boolean;
}) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: direction,
				gap: dense ? 0 : 2,
				justifyContent: "center",
			}}
		>
			{navigation.map((navItem, index) => (
				<NavButton
					key={index}
					text={navItem.text}
					href={navItem.href}
					menuOptions={navItem.menuOptions }
				/>
			))}
		</Box>
	);
};

export default Navigation;
