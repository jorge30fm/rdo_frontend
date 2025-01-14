import {
	Hero,
	CarouselReviews,
	SplitFeatureSection,
	TimelineCarousel,
	FormWithImageBackground,
	CommissionForm,
} from "@/components";
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
const FAQ = [
	{
		q: "How do I request a commission?",
		a: "Simply fill out the form on our Contact page, and we’ll get back to you within 24 hours to discuss your vision and provide a quote.",
	},
	{
		q: "How long does it take to complete a commission?",
		a: "Each commission is unique, and the timeline will depend on the size, complexity, and medium of the piece. We’ll provide an estimated completion date during the consultation process.",
	},
	{
		q: "Can I request a specific size or style for my commission?",
		a: "Absolutely! We work closely with our clients to bring their vision to life, including size, style, color palette, and subject matter. Your input is essential to creating a piece that resonates with you.",
	},
	{
		q: "What is the cost of a commissioned painting?",
		a: "Pricing varies based on the size, medium, and complexity of the piece. We provide a detailed quote after the initial consultation, so you know exactly what to expect.",
	},
	{
		q: "Do you offer framing services for commissioned pieces?",
		a: "Yes, we work with professional framers to provide custom framing options for your commissioned piece. We’ll help you choose the perfect frame to complement your artwork.",
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
	buttonText: "Request a Commission",
	buttonHref: "/Contact",
	imageSrc: "/images/sectionImages/paintOnCanvas.jpeg",
	imageAlt: "Roldan painting a portrait",
};

const theProcessSectionContent = {
	title: "The Process",
	items: [
		{
			index: 1,
			description:
				"During the consultation, we’ll discuss your vision, preferred style, size, and budget for the commission. We’ll provide a quote and estimated timeline for the project.",
			image: "/images/sectionImages/clientMeeting.jpeg",
			keyword: "Consultation",
		},
		{
			index: 2,
			description:
				"Once the project is approved, we’ll begin creating your custom piece. You’ll receive regular updates on the progress and have the opportunity to provide feedback along the way.",
			image: "/images/sectionImages/paintOnCanvas.jpeg",
			keyword: "Creation",
		},
		{
			index: 3,
			description:
				"Once the piece is complete, we’ll send you a high-resolution image for approval. If you’re satisfied with the final result, we’ll arrange for delivery or pickup of the artwork.",
			image: "/images/sectionImages/paintingTools.jpeg",
			keyword: "Completion",
		},
	],
};

const contactSectionContent = {
	title: "Request a Commission",
	text: "Ready to bring your vision to life? Fill out the form below to request a commission, and we’ll be in touch to discuss your project.",
	form: <CommissionForm light />,
	imageSrc: "/images/sectionImages/paintOnCanvas.jpeg",
};
const Commissions = () => {
	return (
		<div>
			<Hero {...heroContent} />
			<TimelineCarousel {...theProcessSectionContent} />
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
export default Commissions;
