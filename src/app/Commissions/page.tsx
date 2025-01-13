import { Hero, CarouselReviews } from "@/components";
import { Box } from "@mui/material";
import colors from "@/theme/colors";

const heroContent = {
	title: "BRING YOUR VISION TO LIFE",
	subtitle: "Custom Paintings Tailored to Your Story",
	text: "Whether it’s a cherished memory, a special occasion, or an abstract idea, Roldan Valdez Studio transforms your vision into a timeless masterpiece. With expertise in acrylic and live painting, every commissioned piece is crafted with care and artistic precision to create something uniquely yours.",
	image: "/images/sectionImages/paintingStudio.jpeg",
	buttons: [
		{
			text: "Request a Commission",
			href: "/Contact",
			variant: "contained" as const,
		},
	],
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
const Commissions = () => {
	return (
		<div>
			<Hero {...heroContent} />
			<Box sx={{ background: colors.secondary, py: "4rem" }}>
				<CarouselReviews
					title={reviews.title}
					items={reviews.items}
				/>
			</Box>
		</div>
	);
};
export default Commissions;
