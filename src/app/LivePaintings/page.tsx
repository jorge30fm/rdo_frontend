import { Hero, CarouselReviews } from "@/components";
import { Box } from "@mui/material";
import colors from "@/theme/colors";

const heroContent = {
    title: "Capture Your Love Story in Real-Time",
    text: "Turn your wedding into a masterpiece with live painting that preserves the magic of your big day.",
    image: "/images/wedding/firstDance.jpeg",
    buttons: [
        {
            text: "book your live painter today",
            href: "/Contact",
            variant: "contained" as const
        },
    ],

}
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
const LivePaintings = () => {
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
}
export default LivePaintings;