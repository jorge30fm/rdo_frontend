import {Components, Theme } from "@mui/material";

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
					
				},
			},
		},
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					
				},
				input: {
					
				},
			},
		},
		MuiFilledInput: {
			styleOverrides: {
				
			},
		},
		MuiInputBase: {
			styleOverrides: {
				
			},
		},
		MuiButton: {
			styleOverrides: {
				
			},
		},
	};
};

export default createComponents;
