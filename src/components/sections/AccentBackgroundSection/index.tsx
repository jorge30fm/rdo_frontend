"use client";

import { Box, Typography, useMediaQuery, Theme } from "@mui/material";
import { LinkButton } from "@/components";
import Image from "next/image";
import { gradients } from "@/theme/colors";
import colors from "@/theme/colors";

interface AccentBackgroundSectionProps {
	image: string;
	title: string;
	text: string;
	buttonText: string;
	href: string;
	position?: "left" | "right"; // New prop to control the image position
}

const AccentBackgroundSection = ({
	image,
	title,
	text,
	buttonText,
	href,
	position = "left", // Default position is left
}: AccentBackgroundSectionProps) => {
	const isMobile = useMediaQuery((theme: Theme) =>
		theme.breakpoints.down("sm")
	);
	const isTablet = useMediaQuery((theme: Theme) =>
		theme.breakpoints.down("md")
	);

	const isImageRight = position === "right";

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection:
					isMobile || isTablet
						? "column"
						: isImageRight
						? "row-reverse"
						: "row",
				background: gradients.accent,
				color: "textLight",
				alignItems: "center",
				padding: isMobile ? "2rem" : "0",
				gap: isMobile ? "2rem" : "0",
			}}
		>
			{/* Image Section */}
			<Box
				sx={{
					width: isMobile ? "100%" : "auto",
					height: isMobile || isTablet ? "auto" : "550px",
					position: "relative",
					p: isTablet ? "2rem" : "0",
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Image
					src={image}
					alt={title}
					width={isMobile ? 200 : isTablet ? 300 : 550}
					height={isMobile ? 200 : isTablet ? 300 : 550}
					loading="lazy" // Ensure lazy loading for below-the-fold images
					quality={75}
					style={{
						objectFit: "cover",
					}}
				/>
			</Box>

			{/* Text Section */}
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					padding: isMobile ? "1rem" : isTablet ? "2rem" : "6rem",
					gap: 4,
					textAlign: isMobile ? "center" : "left",
					width: isMobile ? "100%" : "auto",
				}}
			>
				<Typography
					variant="h2"
					color={colors.main}
				>
					{title}
				</Typography>
				<Typography
					variant="body1"
					color={colors.main}
				>
					{text}
				</Typography>
				<Box
					sx={{
						display: "flex",
						gap: 2,
						justifyContent: isMobile ? "center" : "flex-end",
					}}
				>
					<LinkButton
						href={href}
						text={buttonText}
						color="dark"
						variant="contained"
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default AccentBackgroundSection;
