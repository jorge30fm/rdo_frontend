import {
	Hero,
	CarouselReviews,
	SplitFeatureSection,
	CallToAction,
	TimelineCarousel,
	LivePaintingForm,
	FormWithImageBackground
} from "@/components";
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
const artisticStyleSectionContent = {
	title: "Artistic Style",
	content:
		"Our live wedding paintings are created in a vibrant acrylic style, blending elegance with emotion. Warm, earthy tones and soft brushstrokes give each painting a timeless and heartfelt atmosphere. Every detail, from the venue to the smallest expressions, is brought to life on canvas with care and precision.",
	buttonText: "View Portfolio",

	buttonHref: "/Gallery",
	imageSrc: "/images/sectionImages/paintingTools.jpeg",
	imageAlt: "Roldan painting a portrait",
	imagePosition: "right" as const,
};

const investmentSectionContent = {
	title: "Investment",
	content:" Live wedding paintings start at $1,500 and include a consultation, on-site painting, and a finished piece to take home. Additional services, such as custom framing or larger canvas sizes, are available upon request. Each painting is a one-of-a-kind creation that captures the essence of your day in a unique and personal way.",
		buttonText: "View Portfolio",

	buttonHref: "/Gallery",
	imageSrc: "/images/wedding/brideAndGroom.jpeg",
	imageAlt: "Roldan painting a portrait",
};

const FAQ = [
	{
		q: "How does the live painting process work?",
		a: `On the day of your wedding, I will arrive early to set up my easel and canvas in a prime location. As the ceremony and reception unfold, I will capture the magic of your day in real-time, painting the scene as it happens. Guests are welcome to watch the painting take shape and even participate in the process. By the end of the night, you will have a beautiful, finished painting to take home and cherish forever.`,
	},
	{
		q: "How long does it take to complete a live painting?",
		a: `Most live paintings take between 4-6 hours to complete, depending on the size and complexity of the piece. I will work efficiently to capture the essence of your day while ensuring that every detail is perfect.`,
	},
	{
		q: "What size canvas do you use for live paintings?",
		a: `I typically work on a 24x36 inch canvas for live paintings, but I can accommodate larger sizes upon request. If you have a specific size in mind, please let me know, and I will do my best to accommodate your needs.`,
	},
	{
		q: "Can I request specific details or elements in the painting?",
		a: `Absolutely! I want your live painting to be a true reflection of your day, so I welcome any input or requests you may have. Whether you want to include a special detail, like your pet or a favorite flower, or capture a specific moment, like your first dance or the cutting of the cake, I will work with you to ensure that your painting is everything you dreamed of and more.`,
	},
	{
		q: "How do I book a live painting for my wedding?",
		a: `Booking a live painting for your wedding is easy! Simply fill out the contact form on my website, and I will get back to you as soon as possible to discuss the details of your event. I can't wait to be a part of your special day and create a beautiful painting that you will treasure for a lifetime.`,
	},
];

const frequentlyAskedQuestions = {
	title: "Frequently Asked Questions",
	content: (
		<div>
			{FAQ.map((item, index) => (
				<div key={index}>
					<h3 style={{ fontWeight: 600 }}>{item.q}</h3>
					<p style={{ fontWeight: 300 }}>{item.a}</p>
				</div>
			))}
		</div>
	),
	buttonText: "Get in touch ",
	buttonHref: "/Contact",
	imageSrc: "/images/sectionImages/paintingTools.jpeg",
	imageAlt: "Roldan painting a portrait",
};
const theProcessSection = {
	title: "The Process",
	items: [{
		index: 1,
		keyword: "Consultation",
		description: "We'll discuss your vision, style, and preferences to ensure your painting captures the essence of your day.",
		image: "/images/sectionImages/clientMeeting.jpeg"

	},
{
		index: 2,
		keyword: "Event Day",
		description: "I'll arrive early to set up my easel and canvas, then paint the scene as it unfolds, capturing the magic of your day.",
		image: "/images/sectionImages/paintOnCanvas.jpeg"


},
{
		index: 3,
		keyword: "Completion",
		description: "I'll put the finishing touches on your painting, ensuring every detail is perfect before delivering it to you.",
		image: "/images/wedding/kissWedding.jpeg"

}]
}
const contactSectionContent = {
	title: "Inquire Today",
	text: "Ready to turn your wedding into a masterpiece? Fill out the form below to request a live painting for your special day.",
	form: <LivePaintingForm light />,
	imageSrc: "/images/wedding/firstLook.jpeg",
};

const LivePaintings = () => {
	return (
		<div>
			<Hero {...heroContent} />
			<TimelineCarousel
				title="The Process"
				items={theProcessSection.items}
			/>
			<SplitFeatureSection {...artisticStyleSectionContent} />
			<SplitFeatureSection {...investmentSectionContent} />
			<CallToAction
				title="Ready to Capture Your Love Story?"
				description="Book your live painter today and turn your wedding into a masterpiece."
				buttonText="Book Now"
				buttonHref="/Contact"
				backgroundImage="/images/wedding/intimateDance.jpeg"
			/>
			<SplitFeatureSection {...frequentlyAskedQuestions} />
			<Box sx={{ background: colors.secondary, py: "4rem" }}>
				<CarouselReviews
					title={reviews.title}
					items={reviews.items}
				/>
			</Box>
			<FormWithImageBackground {...contactSectionContent} />
			
		</div>
	);
};
export default LivePaintings;
