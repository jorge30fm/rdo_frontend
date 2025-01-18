"use client";
import {
	Hero,
	MeetArtistSection,
	RecentAdditions,
	AccentBackgroundSection,
	FeaturedCollectionsSection,
	CarouselReviews,
} from "@/components";
import { Box } from "@mui/material";

import colors from "@/theme/colors";
const heroContent = {
	title: "Roldan Vaguez Studio",
	subtitle: "Where Art Comes Alive",
	text: "Discover stunning original paintings, commission bespoke artwork tailored to your vision, or elevate your next event with live painting experiences. Bring the beauty of creativity into your life.",
	image: "/images/sectionImages/brushesAndCanvas.jpeg",
	buttons: [
		{
			text: "Find Art For You",
			href: "/Shop",
			variant: "contained" as const,
		},
		{
			text: "Inquire",
			href: "/Contact",
			variant: "outlined" as const,
		},
	],
};

const meetArtistContent = {
	text: "With over a decade of experience, I’ve dedicated my life to capturing the raw beauty of life through art. From a young boy sketching in the streets of Havana to a recognized painter in the global art scene, my journey has been one of passion and discovery. My work celebrates culture, nature, and the essence of human connection.",
	image: "/images/roldanOriginals/roldan.jpg",
};

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

export default function Home() {
	


	return (
		<Box>
			<Hero {...heroContent} />
			<MeetArtistSection {...meetArtistContent} />
			<Box sx={{ backgroundColor: colors.secondary, padding: "2rem" }}>
				<RecentAdditions />
			</Box>
			<AccentBackgroundSection
				image="/images/sectionImages/manPainting4.jpeg"
				title="Live Event Painting"
				text="Experience the magic of live event painting, where every brushstroke captures the beauty and essence of your most cherished moments. Whether it's a wedding, a milestone celebration, or a corporate gathering, I bring your event to life on canvas as it unfolds. Each painting becomes a timeless keepsake, imbued with the emotions and atmosphere of the day. This unique service not only provides you with a stunning piece of art but also adds an unforgettable live art performance for your guests to enjoy."
				buttonText="Learn More"
				href="/LivePaintings"
				position="right"
			/>
			<Box sx={{ padding: "2rem" }}>
				<FeaturedCollectionsSection />
			</Box>
			<Box sx={{ background: colors.secondary, py: "4rem" }}>
				<CarouselReviews
					title={reviews.title}
					items={reviews.items}
				/>
			</Box>
		</Box>
	);
}
