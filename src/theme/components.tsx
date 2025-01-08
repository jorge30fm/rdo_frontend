import { Components, Theme } from "@mui/material";
import colors from "@/theme/colors"; // Assuming you have this colors file

const createComponents = (): Components<Omit<Theme, "components">> => {
	return {
		MuiTextField: {
			defaultProps: {
				variant: "filled",
				size: "small",
				InputLabelProps: {
					shrink: true, // Move shrink to InputLabelProps
				},
			},
			styleOverrides: {
				root: {
					"& .MuiFilledInput-root": {
						
						borderRadius: 0, // Set border radius to 0
					
						
					},
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					// Add any other OutlinedInput overrides here
				},
				input: {
					// Add input-specific styles here
				},
			},
		},
		MuiFilledInput: {
			styleOverrides: {
				root: {
				
					borderRadius: 0, // Set border radius to 0
					
				
				},
			},
		},
		MuiInputBase: {
			styleOverrides: {
				// Add InputBase-specific styles here
			},
		},
		MuiButton: {
			styleOverrides: {
				root: {
					borderRadius: 0, // Remove border radius
				},
				contained: {
					backgroundColor: colors.dark, // Use colors.dark for filled variant
					color: colors.main, // Use colors.main for text color
					"&:hover": {
						backgroundColor: colors.accent, // Change background on hover
						opacity: 1, // Adjust hover opacity
					},
				},
			},
		},
	};
};

export default createComponents;