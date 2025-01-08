"use client";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Navigation, Logo } from "../Header/elements";
import { ContactForm, Socials } from "./elements";

const Footer = () => {
	return (
		<footer
			style={{
				display: "flex",
				flexDirection: "column",
				padding: "1rem 4rem  2rem 4rem",
				gap: 10,
				
			}}
		>
			<Grid
				container
				sx={{ width: "100%" }}
			>
				<Grid
					size={4}
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Logo />
					<Socials />
				</Grid>
				<Grid
					size={4}
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "flex-start",
					}}
				>
					<Navigation
						direction="column"
						dense={true}
					/>
				</Grid>
				<Grid
					size={4}
					sx={{ display: "flex", justifyContent: "flex-end" }}
				>
					<Box sx={{ width: 300 }}>
						<ContactForm />
					</Box>
				</Grid>
			</Grid>
			<Box>
				<Typography
					sx={{
						fontSize: ".75rem",
						color: "rgba(0,0,0,0.5)",
						textAlign: "center",
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
