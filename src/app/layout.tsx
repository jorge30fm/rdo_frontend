/* eslint-disable @next/next/no-page-custom-font */

import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "../GlobalRedux/provider";

import { MainLayout } from "@/layouts";
import colors from "@/theme/colors";

export const metadata: Metadata = {
	title: "Roldan Vaguez Studio",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link
					href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600&family=Archivo+Black&display=swap"
					rel="stylesheet"
				/>
				<link
					rel="icon"
					type="image/svg+xml"
					href="/Logo2.svg"
				/>
			</head>

			<body
				style={{
					backgroundColor: colors.main,
					color: colors.textDark,
				}}
			>
				<Providers>
					<MainLayout>{children}</MainLayout>
				</Providers>
			</body>
		</html>
	);
}
