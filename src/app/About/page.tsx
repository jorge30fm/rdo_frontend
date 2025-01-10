import { Hero } from "@/components";

const heroContent = {
	title: "Roldan Vaguez Ortiz",
	image: "/images/sectionImages/manPainting.jpeg",
};
const About = () => {
	return (
		<div>
			<Hero {...heroContent} />
		</div>
	);
};
export default About;
