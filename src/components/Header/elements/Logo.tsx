import { Typography, Button, Box } from "@mui/material";
import Link from "next/link";

const Logo = () => {
	return (
		<Link
			href="/"
			passHref
		>
			<Button>
				<Box
					component="img"
					src="/logo.svg"
					alt="Roldan Vaguez Studio Logo"
					sx={{
						height: "40px", // Adjust to your preferred size
						cursor: "pointer",
					}}
				/>
				<Typography
					variant="h4"
					sx={{
						textDecoration: "none", // Removes the underline
						cursor: "pointer", // Adds a pointer cursor for better UX
					}}
				>
					Roldan Vaguez Studio
				</Typography>
			</Button>
		</Link>
	);
};

export default Logo;
