import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import { alpha } from "@mui/material";
import colors from "@/theme/colors";

interface HomeHeroProps {
	title: string;
	subtitle: string;
	text: string;
	image: string;
}

const HomeHero = ({ title, subtitle, text, image }: HomeHeroProps) => {
	return (
		<Grid
			container
			sx={{ backgroundColor: colors.secondary }}
		>
			{/* image takes half the space */}
			<Grid size={5}>
				<Box sx={{ "& img": { transform: "scaleX(-1)" } }}>
					<Image
						src={image}
						alt={title}
						layout="responsive"
						width={500}
						height={500}
					/>
				</Box>
			</Grid>
			<Grid size={7}>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						height: "100%",
						p: 8,
						gap: 4,
					}}
				>
					<Typography variant="h1">{title}</Typography>
					<Typography
						variant="h2"
						sx={{
							color: alpha(colors.dark, 0.5),
							// text italics
							fontStyle: "italic",
						}}
					>
						{subtitle}
					</Typography>
					<Typography
						variant="body1"
						sx={{ fontSize: "1.25rem" }}
					>
						{text}
					</Typography>
					<Box
						sx={{
							width: "100%",
							display: "flex",
							justifyContent: "flex-end",
							gap: 4,
						}}
					>
						<Button
							variant="contained"
							color="primary"
							size="large"
						>
							Find Art For You
						</Button>
						<Button
							variant="outlined"
							color="primary"
							size="large"
						>
							INQUIRE
						</Button>
					</Box>
				</Box>
			</Grid>
		</Grid>
	);
};
export default HomeHero;
