import { HomeHero } from "@/components";

const heroContent = {
	title: "Roldan Vaguez Studio",
	subtitle: "Where Art Comes Alive",
	text: "Discover stunning original paintings, commission bespoke artwork tailored to your vision, or elevate your next event with live painting experiences. Bring the beauty of creativity into your life.",
	image: "/images/brushesAndCanvas.jpeg",
};

export default function Home() {
	return (
		<div>
			<HomeHero {...heroContent} />
		</div>
	);
}
