import { HomeHero, MeetArtistSection } from "@/components";

const heroContent = {
	title: "Roldan Vaguez Studio",
	subtitle: "Where Art Comes Alive",
	text: "Discover stunning original paintings, commission bespoke artwork tailored to your vision, or elevate your next event with live painting experiences. Bring the beauty of creativity into your life.",
	image: "/images/brushesAndCanvas.jpeg",
};

const meetArtistContent = {
	text: "With over a decade of experience, I’ve dedicated my life to capturing the raw beauty of life through art. From a young boy sketching in the streets of Havana to a recognized painter in the global art scene, my journey has been one of passion and discovery. My work celebrates culture, nature, and the essence of human connection.",
	image: "/images/roldan.jpg",
};

export default function Home() {
	return (
		<div>
			<HomeHero {...heroContent} />
			<MeetArtistSection {...meetArtistContent} />
		</div>
	);
}
