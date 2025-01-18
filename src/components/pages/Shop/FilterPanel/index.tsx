"use client";
//react imports
import React from "react";
//componets
import {
	Box,
	Typography,
	Checkbox,
	FormControlLabel,
	IconButton,
	Drawer,
	Button,
} from "@mui/material";
//icons
import CloseIcon from "@mui/icons-material/Close";
import SearchBar from "@/components/navigation/Header/elements/SearchBar";
import { ArrowDropDown } from "@mui/icons-material";
//theme
import colors from "@/theme/colors";

//Type definitions
interface FilterOption {
	filterBy: string;
	options: string[];
}
interface DrawerContentProps {
	filters: FilterOption[];
	selectedFilters: { filterBy: string; options: string[] }[];
	handleFilterChange: (filterBy: string, option: string) => void;
	onSearchChange: (value: string) => void;
	onSearchSubmit: () => void;
}
interface FilterPanelProps {
	filters: FilterOption[];
	selectedFilters: { filterBy: string; options: string[] }[];
	handleFilterChange: (filterBy: string, option: string) => void;
	onSearchChange: (value: string) => void;
	onSearchSubmit: () => void;
}

//Drawer content
const DrawerContent: React.FC<DrawerContentProps> = ({
	filters,
	selectedFilters,
	handleFilterChange,
	onSearchChange,
	onSearchSubmit,
}) => {
	return (
		<Box
			sx={{
				width: "100%",
				backgroundColor: colors.secondary,
				padding: 2,
				border: "none",
				display: "flex",
				flexDirection: "column",
				gap: 2,
				minHeight: "100%",
			}}
		>
			{/* Header */}
			<Typography
				variant="h6"
				sx={{
					color: colors.dark,
					fontWeight: "bold",
				}}
			>
				Filters
			</Typography>

			{/* Search Bar */}
			<SearchBar
				onSearchChange={onSearchChange}
				onSearchSubmit={onSearchSubmit}
			/>

			{/* Filter Categories */}
			{filters.map((filter, index) => (
				<Box key={index}>
					<Typography
						variant="subtitle1"
						sx={{
							color: colors.accent,
							fontWeight: "bold",
							marginBottom: 1,
							textTransform: "capitalize",
						}}
					>
						{filter.filterBy}
					</Typography>
					{/* Options */}
					<Box
						display="flex"
						flexDirection="column"
					>
						{filter.options.map((option, idx) => (
							<FormControlLabel
								key={idx}
								control={
									<Checkbox
										checked={selectedFilters.some(
											(selFilter) =>
												selFilter.filterBy === filter.filterBy &&
												selFilter.options.includes(option)
										)}
										onChange={() => handleFilterChange(filter.filterBy, option)}
										sx={{
											color: colors.dark,
											"&.Mui-checked": {
												color: colors.accent,
											},
										}}
									/>
								}
								label={option}
								sx={{ color: colors.dark }}
							/>
						))}
					</Box>
				</Box>
			))}
		</Box>
	);
};

const FilterPanel: React.FC<FilterPanelProps> = ({
	filters,
	selectedFilters,
	handleFilterChange,
	onSearchChange,
	onSearchSubmit,
}) => {
	return (
		<Box
			sx={{
				minWidth: 300,
				backgroundColor: colors.secondary,
				height: "100vh",
			}}
		>
			<DrawerContent
				filters={filters}
				selectedFilters={selectedFilters}
				handleFilterChange={handleFilterChange}
				onSearchChange={onSearchChange}
				onSearchSubmit={onSearchSubmit}

			/>
		</Box>
	);
};


export const MobileFilterPanel: React.FC<FilterPanelProps> = ({
	filters,
	selectedFilters,
	handleFilterChange,
	onSearchChange,
	onSearchSubmit,
	
}) => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<>
			<Button
				variant="outlined"
				onClick={handleOpen}
				size="small"
				sx={{ textTransform: "capitalize" }}
				endIcon={<ArrowDropDown />}
			>
				Filters
			</Button>

			<Drawer
				anchor="bottom"
				open={open}
				onClose={handleClose}
				sx={{ "& .MuiDrawer-paper": { borderRadius: "16px 16px 0px 0px" } }}
			>
				<Box sx={{ height: "80vh" }}>
					<Box
						sx={{
							display: "flex",
							justifyContent: "flex-end",
							alignItems: "center",
							padding: 2,
							backgroundColor: colors.secondary,
						}}
					>
						<IconButton onClick={handleClose}>
							<CloseIcon />
						</IconButton>
					</Box>
					<Box sx={{ px: 4 }}>
						<DrawerContent
							filters={filters}
							selectedFilters={selectedFilters}
							handleFilterChange={handleFilterChange}
							onSearchChange={onSearchChange}
							onSearchSubmit={onSearchSubmit}
							
						/>
					</Box>
				</Box>
			</Drawer>
		</>
	);
};

export default FilterPanel;
