import { Menu, MenuItem, Typography } from "@mui/material";
import Link from "next/link";
import { FC } from "react";
import colors from "@/theme/colors";
import { alpha } from "@mui/material";

interface NavMenuProps {
	open: boolean;
	anchorEl: HTMLElement | null;
	closeMenu: () => void;
	items: { href: string; text: string }[];
}

const NavMenu: FC<NavMenuProps> = ({ open, anchorEl, closeMenu, items }) => {
	return (
		<Menu
			open={open}
			anchorEl={anchorEl}
			onClose={closeMenu}
			sx={{
				"& .MuiPaper-root": {
					backgroundColor: colors.main,
					borderRadius: 0,
					border: `1px solid ${colors.dark}`,
				},
			}}
		>
			{items.map((item, index) => (
				<Link
					href={item.href}
					key={index}
					passHref
					style={{ textDecoration: "none" }}
				>
					<MenuItem
						key={index}
						sx={{ "&:hover": { backgroundColor: "rgba(0,0,0,.1)" } }}
					>
						<Typography
							variant="body2"
							sx={{
								color: alpha(colors.dark, 0.7),
								"&:hover": { color: colors.dark },
							}}
						>
							{item.text}
						</Typography>
					</MenuItem>
				</Link>
			))}
		</Menu>
	);
};
export default NavMenu;
