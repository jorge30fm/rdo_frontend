"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import colors from "@/theme/colors";
import { LinkButton } from "@/components";

interface SplitFeatureSectionProps {
	title: string;
	content: React.ReactNode; // Allow JSX or string
	buttonText: string;
	buttonHref: string;
	imageSrc: string;
	imageAlt: string;
	imagePosition?: "left" | "right"; // Prop to toggle the position
}

const SplitFeatureSection: React.FC<SplitFeatureSectionProps> = ({
	title,
	content,
	buttonText,
	buttonHref,
	imageSrc,
	imageAlt,
	imagePosition = "left", // Default position is "left"
}) => {
	const isImageLeft = imagePosition === "left";

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: {
					xs: "column",
					md: isImageLeft ? "row" : "row-reverse",
				},
				alignItems: "stretch",
				justifyContent: "space-between",
				overflow: "hidden",
				backgroundColor: colors.secondary,
				borderRadius: 0,
				py: "4rem",
			}}
		>
			{/* Image Side */}
			<Box
				sx={{
					position: "relative",
					width: { xs: "100%", md: "40%" },
					aspectRatio: "5 / 6", // Maintain proportional aspect ratio
					overflow: "hidden",
					borderTopRightRadius: isImageLeft ? { xs: 0, md: "2rem" } : 0,
					borderBottomRightRadius: isImageLeft ? { xs: 0, md: "2rem" } : 0,
					borderTopLeftRadius: !isImageLeft ? { xs: 0, md: "2rem" } : 0,
					borderBottomLeftRadius: !isImageLeft ? { xs: 0, md: "2rem" } : 0,
				}}
			>
				<Image
					src={imageSrc}
					alt={imageAlt}
					layout="fill"
					objectFit="cover"
					objectPosition="top"
				/>
			</Box>

			{/* Content Side */}
			<Box
				sx={{
					width: { xs: "100%", md: "60%" },
					display: "flex",
					flexDirection: "column",
					alignItems: { xs: "center", md: "flex-start" },
					justifyContent: "center",
					textAlign: { xs: "center", md: "left" },
					padding: { xs: "2rem", md: "4rem" },
					gap: 2,
					maxHeight: "100%", // Prevent content from exceeding the image's height
					overflowY: "auto", // Make content scrollable if it overflows
				}}
			>
				<Typography
					variant="h2"
					sx={{ fontWeight: "bold", mb: 2 }}
				>
					{title}
				</Typography>
				<Box
					sx={{
						color: colors.textDark,
						mb: 3,
					}}
				>
					{content}
				</Box>
				<Box
					sx={{
						display: "flex",
						justifyContent: "flex-end",
						width: "100%",
					}}
				>
					<LinkButton
						href={buttonHref}
						text={buttonText}
						color="dark"
						variant="contained"
						size="large"
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default SplitFeatureSection;
