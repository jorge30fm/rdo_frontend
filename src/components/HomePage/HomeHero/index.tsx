import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { alpha } from "@mui/material";
import colors from "@/theme/colors";
import Link from "next/link";

interface HomeHeroProps {
	title: string;
	subtitle: string;
	text: string;
	image: string;
}

const HomeHero = ({ title, subtitle, text, image }: HomeHeroProps) => {
	return (
		<Box
			sx={{
				position: "relative",
				width: "100vw",
				minHeight: "90vh",
				overflow: "hidden",
				display: "flex", 
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			{/* Fullscreen background image */}
			<Box
				sx={{
					position: "absolute",
					width: "100%",
					height: "100%",
					top: 0,
					left: 0,
					opacity: 0.5,
				}}
			>
				<Image
					src={image}
					alt="Background Image"
					fill
					priority
					sizes="100vw"
					style={{
						objectFit: "cover",
					}}
				/>
			</Box>

			{/* Overlay */}
			{/* Overlay */}
			<Box
				sx={{
					position: "absolute",
					width: "100%",
					height: "100%",
					top: 0,
					left: 0,
					background: `linear-gradient(180deg, ${alpha(
						colors.accent,
						1
					)}, rgba(44,30,21,1))`,
					zIndex: 1,
					opacity: 0.5,
				}}
			/>

			{/* Centered content */}
			<Box
				sx={{
					position: "relative",
					zIndex: 2, // Ensure content is above the overlay
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					textAlign: "center",
					color: colors.main,
					p: 4,
					gap: 4,
				}}
			>
				<Typography
					variant="h1"
					sx={{
						color: colors.dark,
						//add a shadow to the text
						textShadow: `2px 2px 4px ${colors.accent}`,
					}}
				>
					{title}
				</Typography>
				<Typography
					variant="h2"
					sx={{
						color: alpha(colors.main, 0.8),
						fontStyle: "italic",
					}}
				>
					{subtitle}
				</Typography>
				<Typography
					variant="body1"
					sx={{
						maxWidth: "800px",
						mt: 2,
						color: colors.main,
						fontSize: {xs:"1rem", md:"1.25rem"},
					}}
				>
					{text}
				</Typography>
				<Box
					sx={{
						display: "flex",
						flexDirection: { xs: "column", sm: "row" },
						gap: { xs: 2, sm: 4 },
						mt: 4,
					}}
				>
					<Link
						href="/Shop"
						passHref
					>
						<Button
							variant="contained"
							color="primary"
							size="large"
							sx={{
								px: 4,
							}}
						>
							Find Art For You
						</Button>
					</Link>
					<Link
						href="/Contact"
						passHref
					>
						<Button
							variant="outlined"
							sx={{ color: colors.main, px: 4, borderColor: colors.main }}
							size="large"
						>
							INQUIRE
						</Button>
					</Link>
				</Box>
			</Box>
		</Box>
	);
};

export default HomeHero;
