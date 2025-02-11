"use client";
import { Button } from "@mui/material";
import Link from "next/link";
import colors from "@/theme/colors";

interface LinkButtonProps {
	href: string;
	text: string;
	variant?: "text" | "outlined" | "contained";
	color?: "light" | "dark" | "accent";
    size?: "small" | "medium" | "large";
    endIcon?: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({
	href,
	text,
	variant = "outlined",
	color = "dark",
    size = "medium",
    endIcon= null
}) => {
	// Define color styles dynamically
	const colorStyles = {
		contained: {
			color: {
				light: colors.dark,
				dark: colors.main,
				accent: colors.main,
			}[color],
			backgroundColor: {
				light: colors.main,
				dark: colors.dark,
				accent: colors.accent,
			}[color],
			borderColor: {
				light: colors.main,
				dark: colors.dark,
				accent: colors.accent,
			}[color],
			hover: {
				backgroundColor: {
					light: colors.dark,
					dark: colors.accent,
					accent: colors.dark,
				}[color],
				borderColor: {
					light: colors.dark,
					dark: colors.accent,
					accent: colors.dark,
				}[color],
				color: {
					light: colors.main,
					dark: colors.main,
					accent: colors.main,
				}[color],
			},
		},
		outlined: {
			color: {
				light: colors.main,
				dark: colors.dark,
				accent: colors.accent,
			}[color],
			borderColor: {
				light: colors.main,
				dark: colors.dark,
				accent: colors.accent,
			}[color],
			backgroundColor: "transparent",
			hover: {
				backgroundColor: {
					light: `rgba(${parseInt(colors.main.slice(1, 3), 16)}, ${parseInt(
						colors.main.slice(3, 5),
						16
					)}, ${parseInt(colors.main.slice(5, 7), 16)}, 0.2)`, // Adjust opacity
					dark: colors.dark,
					accent: colors.accent,
				}[color],
				borderColor: {
					light: colors.main,
					dark: colors.dark,
					accent: colors.accent,
				}[color],
				color: {
					light: colors.main,
					dark: colors.main,
					accent: colors.main,
				}[color],
			},
		},
	};

	const styles = colorStyles[variant as "contained" | "outlined"];

	return (
		<Link
			href={href}
			passHref
		>
			<Button
				variant={variant}
                size={size}
				sx={{
					color: styles.color,
					backgroundColor: styles.backgroundColor,
					borderColor: styles.borderColor,
					"&:hover": {
						backgroundColor: styles.hover.backgroundColor,
						borderColor: styles.hover.borderColor,
						color: styles.hover.color,
					},
				}}
                endIcon={endIcon}
			>
				{text}
			</Button>
		</Link>
	);
};

export default LinkButton;
