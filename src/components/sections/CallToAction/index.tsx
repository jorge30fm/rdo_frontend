"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import colors, { gradients } from "@/theme/colors";
import { LinkButton } from "@/components";

interface CallToActionProps {
	title: string;
	buttonText: string;
	buttonHref: string;
	backgroundImage: string;
	description?: string; // Optional body text
	sideContent?: React.ReactNode; // Optional JSX or image
}

const CallToAction: React.FC<CallToActionProps> = ({
	title,
	buttonText,
	buttonHref,
	backgroundImage,
	description,
	sideContent,
}) => {
	return (
		<Box
			sx={{
				position: "relative",
				width: "100%",
				minHeight: "400px",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				overflow: "hidden",
				textAlign: "center",
			}}
		>
			{/* Background Image */}
			<Box
				sx={{
					position: "absolute",
					width: "100%",
					height: "100%",
					top: 0,
					left: 0,
					zIndex: 0,
				}}
			>
				<Image
					src={backgroundImage}
					alt="Call to Action Background"
					fill
					style={{
						objectFit: "cover",
						objectPosition: "center",
					}}
				/>
			</Box>

			{/* Gradient Overlay */}
			<Box
				sx={{
					position: "absolute",
					width: "100%",
					height: "100%",
					top: 0,
					left: 0,
					background: gradients.accent,
					zIndex: 1,
					opacity: 0.8,
				}}
			/>

			{/* Content */}
			<Box
				sx={{
					position: "relative",
					zIndex: 2,
					display: "flex",
					flexDirection: { xs: "column", md: "row" },
					alignItems: "center",
					justifyContent: "center",
					gap: 4,
					px: { xs: 2, md: 6 },
					py: { xs: 4, md: 8 },
					color: colors.main,
				}}
			>
				{/* Text Content */}
				<Box
					sx={{
						maxWidth: sideContent ? "600px" : "100%",
						display: "flex",
						flexDirection: "column",
						alignItems: { xs: "center", md: "flex-start" },
						textAlign: { xs: "center", md: "left" },
						gap: 4,
					}}
				>
					<Typography
						variant="h1"
						sx={{
							fontWeight: "bold",
							textAlign: "center",
							color: colors.main,
							textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
						}}
					>
						{title}
					</Typography>
					{description && (
						<Typography
							variant="body1"
							sx={{
								width: "100%",
								fontSize: { xs: "1rem", md: "1.25rem" },
								textAlign: "center",
								color: colors.main,
							}}
						>
							{description}
						</Typography>
					)}
					<Box
						sx={{
							display: "flex",
							justifyContent: { xs: "center", md: "center" },
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

				{/* Optional Side Content */}
				{sideContent && (
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							maxWidth: "300px",
							height: "auto",
						}}
					>
						{typeof sideContent === "string" ? (
							<Image
								src={sideContent}
								alt="Side Content"
								width={300}
								height={300}
								style={{objectFit:"contain"}}
							/>
						) : (
							sideContent
						)}
					</Box>
				)}
			</Box>
		</Box>
	);
};

export default CallToAction;
