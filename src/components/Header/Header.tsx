"use client";
import { Navigation, Logo, CartIcon, SearchBar } from "./elements";
import { Box, IconButton, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import colors from "@/theme/colors";

const Header = () => {
	const theme = useTheme();
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
	console.log(isMobile);

	const toggleDrawer = (open: boolean) => {
		setIsDrawerOpen(open);
	};

	const handleSearchChange = () => {
		console.log("search changed");
	};

	const handleSearchSubmit = () => {
		console.log("search submitted");
	};

	return (
		<header
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "1rem",
			}}
		>
			<Box sx={{ flexGrow: 1 }}>
				<Logo />
			</Box>
			{isMobile ? (
				<Box sx={{ display: "flex", gap: 2 }}>
					<CartIcon />
					<IconButton onClick={() => toggleDrawer(true)}>
						<MenuIcon />
					</IconButton>
					<Drawer
						anchor="right"
						open={isDrawerOpen}
						onClose={() => toggleDrawer(false)}
						PaperProps={{
							sx: {
								backgroundColor: colors.main, // Set your desired background color
								color: colors.textDark, // Optional: Set text color for better contrast
							},
						}}
					>
						<Box
							sx={{
								width: 250,
								display: "flex",
								flexDirection: "column",
								gap: 2,
								padding: "1rem",
							}}
						>
							<Box sx={{ display: "flex", justifyContent: "flex-end" }}>
								<IconButton onClick={() => toggleDrawer(false)}>
									<CloseIcon />
								</IconButton>
							</Box>
							<SearchBar
								variant="navigation"
								onSearchChange={handleSearchChange}
								onSearchSubmit={handleSearchSubmit}
							/>
							<Navigation direction="column" />
						</Box>
					</Drawer>
				</Box>
			) : (
				<Box sx={{ display: "flex", gap: 2 }}>
					<Navigation direction="row" />
					<Box sx={{ display: "flex", gap: 2 }}>
						<SearchBar
							variant="navigation"
							onSearchChange={handleSearchChange}
							onSearchSubmit={handleSearchSubmit}
						/>
						<CartIcon />
					</Box>
				</Box>
			)}
		</header>
	);
};

export default Header;
