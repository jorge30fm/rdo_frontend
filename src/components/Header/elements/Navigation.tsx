"use client";
import { Box } from "@mui/material";
import { NavButton } from "./index";

const navigation = [
	{ text: "Home", href: "/" },

	{ text: "About", href: "/About" },

	{ text: "Gallery", href: "/Gallery" },
	{ text: "Commissions", href: "/Commissions" },
	{ text: "Live Paintings", href: "/LivePaintings" },
	{ text: "Shop", href: "/Shop" },
	{ text: "Contact", href: "/Contact" },
];

const Navigation = () => {
	return (
		<Box
			sx={{
				display: "flex",
				gap: 1,
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
