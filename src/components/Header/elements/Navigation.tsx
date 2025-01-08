"use client";
import { Box } from "@mui/material";
import { NavButton } from "./index";

const navigation = [
	{ text: "About", href: "/About" },
	{ text: "Gallery", href: "/Gallery" },
	{ text: "Commissions", href: "/Commissions" },
	{ text: "Live Paintings", href: "/LivePaintings" },
	{ text: "Shop", href: "/Shop" },
	{ text: "Contact", href: "/Contact" },
];

const Navigation = ({
	direction = "row",
}: {
	direction?: "row" | "column";
}) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: direction,
				gap: 2,
				justifyContent: "center",
			}}
		>
			{navigation.map((navItem, index) => (
				<NavButton
					key={index}
					text={navItem.text}
					href={navItem.href}
				/>
			))}
		</Box>
	);
};

export default Navigation;
