"use client";

import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import colors from "@/theme/colors";
import { alpha } from "@mui/material";

interface NavButtonProps {
	text: string;
	href: string; // Navigation target
}

const NavButton = ({ text, href }: NavButtonProps) => {
	const pathname = usePathname() || "/"; // Default to "/" if pathname is empty

	const isActive =
		(href === "/" && pathname === "/") || // Explicit match for the home page
		(href !== "/" && pathname.startsWith(href)); // Match other routes correctly

	return (
		<Box>
			<Link
				href={href}
				passHref
			>
				<Button
					sx={{
						backgroundColor: isActive ? colors.dark : "transparent",
						borderRadius: 0,
						fontWeight: isActive ? "bold" : "normal",
						"&:hover": {
							backgroundColor: isActive ? colors.dark : alpha(colors.dark, 0.5),
							color: "white",
						},
					}}
				>
					<Typography variant="body2" sx={{ color: isActive ? colors.main : colors.dark }}>
						{text}
					</Typography>
				</Button>
			</Link>
		</Box>
	);
};

export default NavButton;
