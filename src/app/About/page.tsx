import { Hero, CarouselReviews, SplitFeatureSection } from "@/components";
import { Box } from "@mui/material";
import colors from "@/theme/colors";

const heroContent = {
	title: "Roldan Vaguez Ortiz",
	image: "/images/sectionImages/manPainting.jpeg",
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
const aboutMeSectionContent = {
	title: "About Me",
	content:
		"With over a decade of experience, I’ve dedicated my life to capturing the raw beauty of life through art. From a young boy sketching in the streets of Havana to a recognized painter in the global art scene, my journey has been one of passion and discovery. My work celebrates culture, nature, and the essence of human connection.",
	buttonText: "Let's Collaborate",
	buttonHref: "/Contact",
	imageSrc: "/images/sectionImages/RoldanPlaceHolder.jpeg",
	imageAlt: "Roldan painting a portrait",
};
const artisticStyleSectionContent = {	
	title: "Artistic Style",
	content:
		"My art is a reflection of my life, my experiences, and my emotions. I draw inspiration from the world around me, from the vibrant colors of the Caribbean to the rich history of my Cuban heritage. My work is a celebration of life, love, and the beauty of the human spirit.",
	buttonText: "View Portfolio",
	buttonHref: "/Gallery/CommissionArt",
	imageSrc: "/images/sectionImages/paintingTools.jpeg",
	imageAlt: "Roldan painting a portrait",
	imagePosition: "right" as const,
};

const About = () => {
	return (
		<div>
			<Hero {...heroContent} />
			<SplitFeatureSection {...aboutMeSectionContent} />
			<SplitFeatureSection {...artisticStyleSectionContent} />
			<Box sx={{ background: colors.secondary, py: "4rem" }}>
				<CarouselReviews
					title={reviews.title}
					items={reviews.items}
				/>
			</Box>
		</div>
	);
};
export default About;
