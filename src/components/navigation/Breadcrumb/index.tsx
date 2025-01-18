"use client";

import React from "react";
import { Breadcrumbs, Typography, Box } from "@mui/material";
import Link from "next/link";
import colors from "@/theme/colors";

interface BreadcrumbItem {
	label: string;
	href?: string; // Optional: if no href, render as plain text
}

interface BreadcrumbProps {
	items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
	return (
		<Box sx={{ padding: "1rem 0" }}>
			<Breadcrumbs
				aria-label="breadcrumb"
				separator={
					<Typography sx={{ color: colors.dark, fontWeight: "bold", px: 0.5 }}>
						/
					</Typography>
				}
			>
				{items.map((item, index) => {
					const isLast = index === items.length - 1;

					if (isLast || !item.href) {
						// Render plain text for the last item or items without href
						return (
							<Typography
								key={index}
								color={colors.accent}
								sx={{ fontWeight: "bold" }}
							>
								{item.label}
							</Typography>
						);
					}

					// Render clickable links
					return (
						<Link
							key={index}
							href={item.href}
							passHref
							style={{
								textDecoration: "none",
								color: colors.dark,
								fontWeight: "normal",
							}}
						>
							{item.label}
						</Link>
					);
				})}
			</Breadcrumbs>
		</Box>
	);
};

export default Breadcrumb;
