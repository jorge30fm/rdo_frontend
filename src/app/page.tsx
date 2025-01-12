import {
	Hero,
	MeetArtistSection,
	RecentAdditions,
	AccentBackgroundSection,
} from "@/components";

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

export default function Home() {
	return (
		<div>
			<Hero {...heroContent} />
			<MeetArtistSection {...meetArtistContent} />
			<RecentAdditions />
			<AccentBackgroundSection
				image="/images/sectionImages/manPainting4.jpeg"
				title="Live Event Painting"
				text="Experience the magic of live event painting, where every brushstroke captures the beauty and essence of your most cherished moments. Whether it's a wedding, a milestone celebration, or a corporate gathering, I bring your event to life on canvas as it unfolds. Each painting becomes a timeless keepsake, imbued with the emotions and atmosphere of the day. This unique service not only provides you with a stunning piece of art but also adds an unforgettable live art performance for your guests to enjoy."
				buttonText="Book Your Event"
				href="/LivePaintings"
				position="right"
			/>
		</div>
	);
}
