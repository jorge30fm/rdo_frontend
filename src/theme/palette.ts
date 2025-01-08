import { PaletteOptions } from "@mui/material/styles";

const colors = {
	main: "#FDF7ED",
	secondary: "#F9F2E8",
	accent: "#926446",
	dark: "#272527",
	textLight: "#FDF7ED",
	textDark: "#272527",
};

const palette: PaletteOptions = {
	primary: {
		main: colors.accent,
		light: colors.secondary,
		dark: colors.dark,
		contrastText: colors.textLight,
	},
	secondary: {
		main: colors.secondary,
		light: colors.main,
		dark: colors.dark,
		contrastText: colors.textDark,
	},
	background: {
		default: colors.main,
		paper: colors.secondary,
	},
	text: {
		primary: colors.textDark,
		secondary: colors.textLight,
	},
	action: {
		hover: colors.accent,
		disabled: colors.secondary,
		selected: colors.accent,
	},
	error: {
		main: "#d32f2f", // Customize as needed
		light: "#ef5350",
		dark: "#c62828",
		contrastText: colors.textLight,
	},
	warning: {
		main: "#ffa000", // Customize as needed
		light: "#ffb300",
		dark: "#ff8f00",
		contrastText: colors.textDark,
	},
	info: {
		main: "#0288d1", // Customize as needed
		light: "#03a9f4",
		dark: "#01579b",
		contrastText: colors.textLight,
	},
	success: {
		main: "#388e3c", // Customize as needed
		light: "#4caf50",
		dark: "#2e7d32",
		contrastText: colors.textLight,
	},
	divider: colors.dark,
};

export default palette;