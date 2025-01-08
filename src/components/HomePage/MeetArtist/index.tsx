import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface MeetArtistSectionProps {
	text: string;
	image: string;
}

const MeetArtistSection = ({ text, image }: MeetArtistSectionProps) => {
	return (
		<Grid
			container
			sx={{ minHeight: "80vh", display: "flex", alignItems: "center" }}
			spacing={8}
		>
			<Grid size={7}>
				<Box
					display="flex"
					flexDirection="column"
					gap={4}
					p={8}
					justifyContent={"center"}
				>
					<Typography variant="h1">Meet the Artist</Typography>
					<Typography>{text}</Typography>
				</Box>
				<Box
					sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
				>
					<Button
						endIcon={<ArrowForwardIcon />}
						sx={{ margin: "0 0 0 8px", px: 4 }}
					>
						Learn About Roldan
					</Button>
				</Box>
			</Grid>
			<Grid
				size={5}
				sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
			>
				<Box
					sx={{
						backgroundColor: "#EEE5D6",
						width: "350px",
						height: "40px",
						mr: "40px",
						borderRadius: "1rem  1rem 0 0",
					}}
				/>
				<Box sx={{ display: "flex", alignItems: "center" }}>
					<Image
						src={image}
						alt="artist"
						width={400}
						height={400}
						loading="lazy" // Ensure lazy loading for below-the-fold images
						quality={75}
					/>
					<Box
						sx={{
							backgroundColor: "#EEE5D6",
							width: "40px",
							height: "350px",
							borderRadius: "0 1rem 1rem 0",
						}}
					/>
				</Box>
			</Grid>
		</Grid>
	);
};
export default MeetArtistSection;
