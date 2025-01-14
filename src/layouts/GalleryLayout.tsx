"use client";

import React from "react";
import { Box, Typography, useMediaQuery, Theme } from "@mui/material";
import { LinkButton } from "@/components";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import colors from "@/theme/colors";
import {
	FormWithImageBackground,
	ContactToggleSwitch,
	CarouselReviews,
} from "@/components";

const reviews = {
	title: "What People Are Saying",
	items: [
		{
			reviewType: "Live Painting",
			review:
				"Roldan painted at our wedding, and it was the most magical experience. Our guests were in awe of his talent, and we now have a beautiful painting to remember our special day forever.",
			name: "Sara & Michael",
			image: "/images/wedding/brideAndGroom.jpeg",
			subjectLine: "A Magical Experience",
		},
		{
			reviewType: "Commissioned Art",
			review:
				"Roldan created a custom painting for our home, and it exceeded all our expectations. His attention to detail and ability to capture the essence of our vision was truly remarkable.",
			name: "Megan & David",
			image: "/images/portraitsAi/dogPortrait.jpeg",
			subjectLine: "A Magical Experience",
		},
		{
			reviewType: "Original Art",
			review:
				"We purchased an original painting from Roldan, and it has become the centerpiece of our living room. His use of color and texture is breathtaking, and we love the energy it brings to our space.",
			name: "Sophia & James",
			image: "/images/roldanOriginals/girl2.jpg",
			subjectLine: "A Magical Experience",
		},
	],
};

interface GalleryLayoutProps {
	title: string;
	subtitle?: string;
	buttonText: string;
	buttonHref: string;
	images: { src: string; alt: string }[];
}

const GalleryLayout: React.FC<GalleryLayoutProps> = ({
	title,
	subtitle,
	buttonText,
	buttonHref,
	images,
}) => {
	const isMobile = useMediaQuery((theme: Theme) =>
		theme.breakpoints.down("sm")
	);
	const isTablet = useMediaQuery((theme: Theme) =>
		theme.breakpoints.down("md")
	);
	const isLiveWeddingGallery = (title: string) => {
		if (title === "Live Wedding Paintings") {
			return "Live Painting Inquiry";
		} else {
			return "Commission Inquiry";
		}
	};

	const contactSectionContent = {
		title: "Ready to Get Started?",
		text: "Fill out the form to request a commission, inquire about live painting, or ask a question.",
		form: (
			<ContactToggleSwitch
				light
				defaultActiveForm={isLiveWeddingGallery(title)}
			/>
		),
		imageSrc: "/images/sectionImages/paintOnCanvas.jpeg",
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 4,
				py: 6,

				color: "white",
				backgroundColor: colors.secondary,
			}}
		>
			{/* Text Section */}
			<Box
				sx={{
					textAlign: "center",
				}}
			>
				<Typography
					variant="h1"
					sx={{ fontWeight: "bold", mb: 2 }}
				>
					{title}
				</Typography>
				{subtitle && (
					<Typography
						variant="h5"
						sx={{ color: colors.dark, mb: 4 }}
					>
						{subtitle}
					</Typography>
				)}
				<LinkButton
					href={buttonHref}
					text={buttonText}
					variant="contained"
					size="large"
					color="dark"
				/>
			</Box>

			{/* Masonry Grid Section */}
			<Box
				sx={{
					width: "100%",
					maxWidth: "1200px",
					backgroundColor: colors.main,
					px: 2,
				}}
			>
				<ImageList
					variant="masonry"
					cols={isMobile ? 2 : isTablet ? 3 : 4}
					gap={8}
				>
					{images.map((image, index) => (
						<ImageListItem
							key={index}
							sx={{
								overflow: "hidden",
								borderRadius: 2,
							}}
						>
							<img
								src={`${image.src}`}
								alt={image.alt}
								loading="lazy"
								style={{
									display: "block",
									width: "100%", // Ensure the image fills the width of its container
									height: "auto", // Maintain aspect ratio
								}}
							/>
						</ImageListItem>
					))}
				</ImageList>
			</Box>
			<FormWithImageBackground {...contactSectionContent} />

			<Box sx={{ background: colors.secondary, py: "4rem", maxWidth: "100vw" }}>
				<CarouselReviews
					title={reviews.title}
					items={reviews.items}
				/>
			</Box>
		</Box>
	);
};

export default GalleryLayout;
