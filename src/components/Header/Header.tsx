"use client";
import { Navigation, Logo, CartIcon, SearchBar } from "./elements";
import { Box } from "@mui/material";

const Header = () => {
	const handleSearchChange = () => {
		// TODO
		console.log("search changed");
	};

	const handleSearchSubmit = () => {
		// TODO
		console.log("search submitted");
	};

	return (
		<header
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				gap: 2,
				padding: "1rem",
				background: "rgba(0, 0, 0, 0.1)",
			}}
		>
			<Box sx={{ flexGrow: 1 }}>
				<Logo />
			</Box>
			<Box sx={{ display: "flex", gap: 2 }}>
				<Navigation />
				<Box
					sx={{
						display: "flex",
						gap: 2,
					}}
				>
					<SearchBar
						variant="navigation"
						onSearchChange={handleSearchChange}
						onSearchSubmit={handleSearchSubmit}
					/>
					<CartIcon />
				</Box>
			</Box>
		</header>
	);
};
export default Header;
