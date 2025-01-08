"use client";

import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
import { NextAppDirEmotionCacheProvider } from "./EmotionCache";
import CssBaseline from "@mui/material/CssBaseline";
import { createTypography } from "./typography";
import createComponents from "./components";

const themeOptions: ThemeOptions = {
	typography: createTypography(),
	components: createComponents(),
};

const theme = createTheme(themeOptions);

export default function ThemeRegistry({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<NextAppDirEmotionCacheProvider options={{ key: "mui", prepend: true }}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</NextAppDirEmotionCacheProvider>
	);
}