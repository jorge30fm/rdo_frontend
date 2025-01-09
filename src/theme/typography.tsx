import { TypographyOptions } from "@mui/material/styles/createTypography";
import colors from "./colors";

export const createTypography = (): TypographyOptions => {
	return {
		fontFamily: '"Space Grotesk", "Archivo Black", sans-serif',
		fontWeightLight: 400,
		fontWeightRegular: 600,
		fontWeightMedium: 600,
		h1: {
			fontSize: "4rem",
			fontWeight: 400,
			fontFamily: '"Archivo Black", sans-serif',
			lineHeight: "1.2em",
			letterSpacing: "-0.02em",
			textTransform: "uppercase",
			color: colors.dark,
			"@media (max-width: 1200px)": {
				fontSize: "3.5rem", // Adjust for medium screens
			},
			"@media (max-width: 900px)": {
				fontSize: "2.5rem", // Adjust for smaller screens
			},
		},
		h2: {
			fontSize: "2.75rem",
			fontWeight: 400,
			fontFamily: '"Archivo Black", sans-serif',
			lineHeight: "1.2em",
			letterSpacing: "-0.02em",
			textTransform: "uppercase",
			color: colors.dark,
			"@media (max-width: 1200px)": {
				fontSize: "2.5rem",
			},
			"@media (max-width: 900px)": {
				fontSize: "1.5rem",
			},
		},
		body1: {
			fontSize: "1rem",
			fontWeight: 600,
			fontFamily: '"Space Grotesk", sans-serif',
			lineHeight: "1.5em",
			letterSpacing: "0em",
			textTransform: "none",
			color: colors.dark,
			"@media (max-width: 900px)": {
				fontSize: "0.875rem", // Adjust for smaller screens
			},
		},
		// Add similar responsive styles for other typography variants as needed
	};
};
