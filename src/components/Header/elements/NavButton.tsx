"use client";

import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import colors from "@/theme/colors";
import { alpha } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { NavMenu } from "./index";
import { useState } from "react";

interface NavButtonProps {
	text: string;
	href: string; // Navigation target
	menuOptions?: { text: string; href: string }[]; // Optional menu options
}

const NavButton = ({ text, href, menuOptions }: NavButtonProps) => {
	const pathname = usePathname() || "/"; // Default to "/" if pathname is empty
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const isMenuOpen = Boolean(anchorEl);

	const isActive =
		(href === "/" && pathname === "/") || // Explicit match for the home page
		(href !== "/" && pathname.startsWith(href)); // Match other routes correctly

	const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	return (
		<Box>
			{menuOptions ? (
				<Button
					sx={{
						backgroundColor: isActive ? colors.dark : "transparent",
						borderRadius: 0,
						fontWeight: isActive ? "bold" : "normal",
						"&:hover": {
							backgroundColor: isActive ? colors.dark : alpha(colors.dark, 0.5),
							color: colors.main,
						},
					}}
					onClick={handleMenuOpen}
				>
					<Typography
						variant="body2"
						sx={{ color: isActive ? colors.main : colors.dark }}
					>
						{text}
					</Typography>
					{isMenuOpen ? (
						<ArrowDropUpIcon
							sx={{ color: isActive ? colors.main : colors.dark }}
						/>
					) : (
						<ArrowDropDownIcon
							sx={{ color: isActive ? colors.main : colors.dark }}
						/>
					)}
				</Button>
			) : (
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
								backgroundColor: isActive
									? colors.dark
									: alpha(colors.dark, 0.5),
								color: "white",
							},
						}}
					>
						<Typography
							variant="body2"
							sx={{ color: isActive ? colors.main : colors.dark }}
						>
							{text}
						</Typography>
					</Button>
				</Link>
			)}
			<NavMenu
				open={isMenuOpen}
				anchorEl={anchorEl}
				closeMenu={handleMenuClose}
				items={menuOptions || []}
			/>
		</Box>
	);
};

export default NavButton;
