"use client";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Navigation, Logo } from "../Header/elements";
import { ContactForm, Socials } from "./elements";
import colors from "@/theme/colors";

const Footer = () => {
	return (
		<footer
			style={{
				display: "flex",
				flexDirection: "column",
				padding: "1rem 4rem  2rem 4rem",
				gap: 10,
				
				background: colors.main,
			}}
		>
			<Grid
				container
				sx={{ width: "100%" }}
				spacing={2}
			>
				{/* logo and socials */}
				<Grid
					size={{xs: 12 , md: 4}}
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Logo />
					<Socials />
				</Grid>
				{/* navigation */}
				<Grid
					size={{xs: 12 , md: 4}}
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "flex-start",
						marginTop: {xs: "1rem", md: 0},
						marginBottom: {xs: "1rem", md: 0},
					}}
				>
					<Navigation
						direction="column"
						dense={true}
					/>
				</Grid>
				{/* contactForm */}
				<Grid
					size={{xs: 12 , md: 4}}
					sx={{ display: "flex", justifyContent: {xs: "center", md: "flex-end"} }}
				>
					<Box sx={{ width: 300 }}>
						<ContactForm />
					</Box>
				</Grid>
			</Grid>
			<Box>
				<Typography
					variant="body2"
					sx={{
						fontSize: ".75rem",
						color: "rgba(0,0,0,0.5)",
						textAlign: "center",
						mt: 2,
					}}
				>
					All artwork is the sole property of Roldan Vaguez Ortiz and is held
					under copyright.
				</Typography>
				<Typography
					variant="body2"
					sx={{
						fontSize: ".75rem",
						color: "rgba(0,0,0,0.5)",
						textAlign: "center",
					}}
				>
					The images, artwork and contents of this website may not be copied or
					used without the written permission of Roldan Vaguez Ortiz.
				</Typography>
				<Typography
					variant="body2"
					sx={{
						fontSize: ".75rem",
						color: "rgba(0,0,0,0.5)",
						textAlign: "center",
						mt: 2,
					}}
				>
					{" "}
					Brand and website by JORGE MONTEAGUDO
				</Typography>
			</Box>
		</footer>
	);
};
export default Footer;
