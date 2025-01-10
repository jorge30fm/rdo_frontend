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

	const toggleDrawer = (open: boolean) => {
		setIsDrawerOpen(open);
	};

	// TODO:
	const handleSearchChange = () => {
		console.log("search changed");
	};
	// TODO:
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
			{/* Show Menu Icon on the left in mobile */}
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					gap: 2,
				}}
			>
				{isMobile && (
					<IconButton
						onClick={() => toggleDrawer(true)}
						sx={{ zIndex: 2 }}
					>
						<MenuIcon />
					</IconButton>
				)}

				{/* Center Logo in mobile view */}
				<Box
					sx={{
						flexGrow: isMobile ? 1 : 0,
						display: "flex",
						justifyContent: isMobile ? "center" : "flex-start",
					}}
				>
					<Logo />
				</Box>
			</Box>

			{/* CartIcon always on the right */}
			<Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
				{isMobile ? (
					<>
						<Drawer
							anchor="left"
							open={isDrawerOpen}
							onClose={() => toggleDrawer(false)}
							PaperProps={{
								sx: {
									backgroundColor: colors.main,
									color: colors.textDark,
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
					</>
				) : (
					<>
						<Navigation direction="row" />
					</>
				)}
				<Box display={"flex"}>
					{/* do not show searchbar  on mobile */}
					{!isMobile && (
						<SearchBar
							variant="navigation"
							onSearchChange={handleSearchChange}
							onSearchSubmit={handleSearchSubmit}
						/>
					)}
					<CartIcon />
				</Box>
			</Box>
		</header>
	);
};

export default Header;
