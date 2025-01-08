import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

interface NavButtonProps {
	text: string;
	href: string; // Add an `href` prop for navigation
}

const NavButton = ({ text, href }: NavButtonProps) => {
	return (
		<Box>
			<Link
				href={href}
				passHref
			>
				<Button>
					<Typography sx={{ fontWeight: 500 }}>{text}</Typography>
				</Button>
			</Link>
		</Box>
	);
};

export default NavButton;
