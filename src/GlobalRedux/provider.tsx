"use client";

import { Provider } from "react-redux";
import store from "./store";
import ThemeRegistry from "@/theme/themeRegistry";


export const Providers = ({ children }: { children: React.ReactNode }) => {
	return <Provider store={store}>
		<ThemeRegistry>
		{children}
		</ThemeRegistry>
		</Provider>;
};
