import { Hero } from "@/components";

const heroContent = {
	title: "Let’s Create Something Beautiful Together",
	text: "Whether you’re looking to commission a custom piece, book live wedding painting, or have general inquiries, we’re here to help",
	image: "/images/sectionImages/paintingTools.jpeg",
	buttons: [
		{
			text: "Explore Our Work",
			href: "/Shop",
			variant: "contained" as const,
		},
	],
};
const Contact = () => {
	return (
		<div>
			<Hero {...heroContent} />
		</div>
	);
};
export default Contact;
