import { Box, Typography, IconButton } from "@mui/material";
//import twitter, instagram, linked in and youtube icons from mui icons
import { Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import XIcon from "@mui/icons-material/X";

const Socials = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: 2,
				alignItems: "center",
			}}
		>
			<Box
				display="flex"
				gap={2}
			>
				<IconButton>
					<XIcon />
				</IconButton>
				<IconButton>
					<Instagram />
				</IconButton>
				<IconButton>
					<YouTube />
				</IconButton>
				<IconButton>
					<LinkedIn />
				</IconButton>
			</Box>
			<Typography variant="body1"> Winston Salem, NC</Typography>
			<Typography
				variant="body1"
				component="a"
				href="mailto:roldan@gmail.com"
			>
				roldan@gmail.com
			</Typography>
		</Box>
	);
};

export default Socials;
