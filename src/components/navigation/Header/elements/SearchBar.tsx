"use client";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Box, TextField, InputAdornment, InputBase } from "@mui/material";

import { styled, alpha } from "@mui/material/styles";

// Styled components
const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 1),
	"&:hover": {
		border: `1px solid ${theme.palette.primary.main}`,
	},
	display: "flex",
	alignItems: "center",

	width: "100%",
	[theme.breakpoints.up("sm")]: {
		width: "auto",
	},
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "inherit",
	fontSize: ".875rem",
	width: "100%",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),

		[theme.breakpoints.up("sm")]: {
			width: "12ch",
			"&:focus": {
				width: "20ch",
			},
		},
	},
}));

interface SearchBarProps {
	variant?: string;
	onSearchChange: (value: string) => void;
	onSearchSubmit: () => void;
}

const SearchBar = React.forwardRef<HTMLElement, SearchBarProps>(
	(
		{
			variant = "default",

			onSearchChange,
			onSearchSubmit,
		},
		ref
	) => {
		const [navigationSearch, setNavigationSearch] = React.useState("");

		const handleNavSearchChange = (
			e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
		) => {
			setNavigationSearch(e.target.value);
			onSearchChange(e.target.value);
		};

		const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
			if (e.key === "Enter") {
				onSearchSubmit();
			}
		};

		if (variant === "navigation") {
			return (
				<Search>
					<SearchIconWrapper>
						<SearchIcon fontSize="small" />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder="Search…"
						inputProps={{ "aria-label": "search" }}
						value={navigationSearch}
						onChange={handleNavSearchChange}
						onKeyDown={handleSubmit}
					/>
				</Search>
			);
		}

		return (
			<Box
				sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2 }}
				ref={ref}
			>
				<TextField
					variant="outlined"
					onChange={(e) => handleNavSearchChange(e)}
					onKeyDown={handleSubmit}
					name="search"
					size="small"
					label="Search"
					placeholder="Search..."
					InputLabelProps={{ style: { fontSize: ".875rem" } }}
					sx={{
						"& .MuiOutlinedInput-root": {
							backgroundColor: "white",
							paddingRight: 0,
							borderRadius: "4px",
						},
					}}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon
									fontSize="small"
									sx={{ color: "rgba(0, 0, 0, 0.54)" }}
								/>
							</InputAdornment>
						),
					}}
				/>
			</Box>
		);
	}
);

SearchBar.displayName = "SearchBar";

export default SearchBar;
