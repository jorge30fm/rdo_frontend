"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import colors from "@/theme/colors";
import { gradients } from "@/theme/colors";

// Define types for the arrows
interface ArrowProps {
	onClick?: () => void;
}

// Next arrow component
const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
	<Box
		onClick={onClick}
		sx={{
			position: "absolute",
			top: "50%",
			right: { xs: "-20px", md: "-20px" },
			transform: "translateY(-50%)",
			zIndex: 10,
			cursor: "pointer",
			color: colors.main,
			fontSize: "2rem",
		}}
	>
		<ArrowForwardIosIcon sx={{ fontSize: { xs: "1em", md: "1.5em" } }} />
	</Box>
);

// Previous arrow component
const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
	<Box
		onClick={onClick}
		sx={{
			position: "absolute",
			top: "50%",
			left: { xs: "-20px", md: "-20px" },
			transform: "translateY(-50%)",
			zIndex: 10,
			cursor: "pointer",
			color: colors.main,
			fontSize: "2rem",
		}}
	>
		<ArrowBackIosNewIcon sx={{ fontSize: { xs: "1em", md: "1.5em" } }} />
	</Box>
);

// Define the props for CarouselCard
interface CarouselCardProps {
	reviewType: string;
	subjectLine: string;
	review: string;
	name: string;
	image: string;
}

// Carousel card component
const CarouselCard: React.FC<CarouselCardProps> = ({
	reviewType,
	subjectLine,
	review,
	name,
	image,
}) => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: { xs: "column", md: "row" },
				justifyContent: "space-between",
				gap: 4,
				p: { xs: 2, md: 6 },
				textAlign: { xs: "center", md: "left" },
			}}
		>
			{/* Text Section */}

			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: { xs: "center", md: "flex-start" },
					alignItems: "flex-start"
				}}
			>
				{/* review type */}
				<Typography
					variant="body2"
					sx={{
						color: colors.main,
						textAlign: "left",
                        mt: 2,
                        textTransform: "uppercase",
					}}
				>
					{reviewType}
				</Typography>
				<Typography
					variant="h5"
					sx={{
						fontSize: "1.25rem",
						textAlign: "left",
						mb: 1,
						mt: 2,
						color: colors.main,
					}}
				>
					{/* subject line in quotes */}
					{'"' + subjectLine + '"'}
				</Typography>
				<Typography
					variant="body1"
					sx={{
						color: colors.main,
						textAlign: "left",
                        fontWeight: "light",
					}}
				>
					{'"' + review + '"'}
				</Typography>
				<Typography
					variant="body1"
					sx={{
						color: colors.main,
						textAlign: { xs: "center", md: "left" },
						mt: 2,
					}}
				>
					{name}
				</Typography>
			</Box>

			{/* Image Section */}
			<Box
				sx={{
					flex: { xs: "0 0 100%", md: "0 0 50%" },
					display: "flex",
					justifyContent: { xs: "center", md: "flex-end" },
					alignItems: "center",
				}}
			>
				<Box
					component="img"
					src={image}
					sx={{
						maxWidth: "100%",
						maxHeight: 300,
						objectFit: "contain",
						borderRadius: 2,
						boxShadow: 2,
					}}
				/>
			</Box>
		</Box>
	);
};

// Define the props for CarouselReviews
interface CarouselReviewsProps {
	title?: string;
	items: CarouselCardProps[];
}

// Carousel reviews component
const CarouselReviews: React.FC<CarouselReviewsProps> = ({ title, items }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 4,
				p: 0,
			}}
		>
			{/* Title */}
			{title && (
				<Typography
					variant="h2"
					sx={{
						fontWeight: "bold",
						textAlign: "center",
						mb: 2,
						color: colors.dark,
					}}
				>
					{title}
				</Typography>
			)}

			{/* Carousel */}
			<Box
				sx={{
					width: "80%",
					background: gradients.accent,
					borderRadius: "14px",
					position: "relative",
					padding: "0px 40px",
				}}
			>
				<Slider {...settings}>
					{items.map((item, index) => (
						<CarouselCard
							key={index}
							{...item}
						/>
					))}
				</Slider>
			</Box>
		</Box>
	);
};

export default CarouselReviews;
