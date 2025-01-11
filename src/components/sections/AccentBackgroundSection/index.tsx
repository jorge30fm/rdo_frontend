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
}

const AccentBackgroundSection = ({
	image,
	title,
	text,
	buttonText,
	href,
}: AccentBackgroundSectionProps) => {
	const isMobile = useMediaQuery((theme: Theme) =>
		theme.breakpoints.down("sm")
	);
	const isTablet = useMediaQuery((theme: Theme) =>
		theme.breakpoints.down("md")
	);
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: isMobile || isTablet ? "column" : "row",
				background: gradients.accent,
				color: "textLight",
				alignItems: isMobile || isTablet ? "center" : "center",
				padding: isMobile ? "2rem" : "0",
				gap: isMobile ? "2rem" : "0",
			}}
		>
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
						color="light"
						variant="contained"
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default AccentBackgroundSection;
