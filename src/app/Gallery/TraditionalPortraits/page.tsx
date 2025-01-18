import { GalleryLayout } from "@/layouts";

const galleryContent = {
	title: "Traditional Portraits",
	subtitle:
		"A collection of traditional portraits, explore our shop or contact us for a custom order.",
	buttonText: "Book Now",
	buttonHref: "/Contact",
	images: [
		{ src: "/images/portraitsAI/childPortrait.jpeg", alt: "Child Portrait" },
		{ src: "/images/portraitsAI/couplePortrait.jpeg", alt: "couple Portrait" },
		{ src: "/images/portraitsAI/familyPortrait.jpeg", alt: "Family Portrait" },
		{
			src: "/images/portraitsAI/oldWomanPortrait.jpeg	",
			alt: "Old Woman Portrait",
		},
		{
			src: "/images/portraitsAI/cubanGirlPortrait.jpeg",
			alt: "Cuban Girl Portrait",
		},
		{
			src: "/images/portraitsAI/cubanManPortrait.jpeg",
			alt: "Cuban Man Portrait",
		},
		{ src: "/images/portraitsAI/family2.jpeg", alt: "Family Portrait" },
	],
};

const TraditionalPortraitGallery = () => {
	return (
		<div>
			<GalleryLayout {...galleryContent} />
		</div>
	);
};
export default TraditionalPortraitGallery;
