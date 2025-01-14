"use client";

import { Box, Typography, useMediaQuery, Theme } from "@mui/material";
import React from "react";
import Image from "next/image";
import { gradients } from "@/theme/colors";
import colors from "@/theme/colors";

interface FormWithImageBackgroundProps {
	imageSrc: string; // Background image
	title: string; // Title for the text section
	text: string; // Text for the text section
	form: React.JSX.Element; // Form component passed as a prop
}

const FormWithImageBackground: React.FC<FormWithImageBackgroundProps> = ({
	imageSrc,
	title,
	text,
	form,
}) => {
	const isMobile = useMediaQuery((theme: Theme) =>
		theme.breakpoints.down("sm")
	);

	return (
		<Box
			sx={{
				position: "relative",
				width: "100%",

				overflow: "hidden",
				display: "flex",
				flexDirection: isMobile ? "column" : "row",
			}}
		>
			{/* Background Image */}
			<Box
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					zIndex: 0,
				}}
			>
				<Image
					src={imageSrc}
					alt="Background"
					fill
					style={{ objectFit: "cover" }}
				/>
			</Box>

			{/* Gradient Overlay */}
			<Box
				sx={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					background: gradients.accent,
					opacity: 0.8,
					zIndex: 1,
				}}
			/>

			{/* Content */}
			<Box
				sx={{
					position: "relative",
					zIndex: 2,
					width: "100%",
					display: "flex",
					flexDirection: isMobile ? "column" : "row",
					alignItems: "center",
					justifyContent: "space-between",
				
                    
				}}
			>
				{/* Text Section */}
				<Box
					sx={{
						flex: 1,
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: isMobile ? "center" : "flex-start",
						textAlign: isMobile ? "center" : "left",
						color: "white",
						padding: { xs: 6, md: 6 },
                        gap:8
					}}
				>
					<Typography
						variant="h2"
						sx={{
							fontWeight: "bold",
							marginBottom: 2,
                            color: colors.main
						}}
					>
						{title}
					</Typography>
					<Typography
						variant="body1"
						sx={{
							fontSize: { xs: "1rem", md: "1.25rem" },
							lineHeight: 1.5,
                            color: colors.main
						}}
					>
						{text}
					</Typography>
				</Box>

				{/* Form Section */}
				<Box
					sx={{
						flex: 1,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
                        py: 2,
					}}
				>
					{form}
				</Box>
			</Box>
		</Box>
	);
};

export default FormWithImageBackground;
