"use client";
import { Box, Typography, useMediaQuery, Theme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import LinkButton from "@/components/common/LinkButton";
interface MeetArtistSectionProps {
	text: string;
	image: string;
}

const MeetArtistSection = ({ text, image }: MeetArtistSectionProps) => {
	const isMobile = useMediaQuery((theme: Theme) =>
		theme.breakpoints.down("md")
	);
	return (
		<Grid
			container
			sx={{ minHeight: "80vh", display: "flex", alignItems: "center" }}
		>
			<Grid size={{ xs: 12, md: 7 }}>
				<Box
					display="flex"
					flexDirection="column"
					gap={4}
					p={{ xs: 4, md: 8 }}
					justifyContent={"center"}
				>
					<Typography variant="h1" textAlign={{xs: "center", md: "left"}}>Meet the Artist</Typography>
					<Typography variant="body1" textAlign={{xs: "center", md: "left"}}>{text}</Typography>
				</Box>
				<Box
					sx={{
						width: "100%",
						display: "flex",
						justifyContent: { xs: "center", md: "flex-end" },
					}}
				>
					<LinkButton href="/About" text="Learn About Roldan" endIcon={<ArrowForwardIcon/>}/>
					
					
				</Box>
			</Grid>
			<Grid
				size={{ xs: 12, md: 5 }}
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					mt: { xs: 4, md: 0 },
				}}
			>
				<Box
					sx={{
						backgroundColor: "#EEE5D6",
						width: { xs: 250, md: 350 },
						height: { xs: "30px", md: "40px" },
						mr: { xs: "30px", md: "40px" },
						borderRadius: "1rem  1rem 0 0",
					}}
				/>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<Image
						src={image}
						alt="artist"
						width={isMobile ? 300 : 400}
						height={isMobile ? 300 : 400}
						loading="lazy" // Ensure lazy loading for below-the-fold images
						quality={75}
					/>
					<Box
						sx={{
							backgroundColor: "#EEE5D6",
							width: { xs: "30px", md: "40px" },
							height: { xs: 250, md: 350 },
							borderRadius: "0 1rem 1rem 0",
						}}
					/>
				</Box>
			</Grid>
		</Grid>
	);
};
export default MeetArtistSection;
