import { GalleryLayout } from "@/layouts";

const galleryContent = {
	title: "Traditional Portraits",
	subtitle:
		"A collection of traditional portraits, explore our shop or contact us for a custom order.",
	buttonText: "Book Now",
	buttonHref: "/Contact",
	images: [
		{ src: "/images/portraitsAI/dogPortrait.jpeg", alt: "Dog Portrait" },
		{ src: "/images/roldanOriginals/horse.jpg", alt: "Horse" },
		{ src: "/images/roldanOriginals/horse2.jpg", alt: "Horse" },
	],
};

const PetPortraitsGallery = () => {
	return (
		<div>
			<GalleryLayout {...galleryContent} />
		</div>
	);
};
export default PetPortraitsGallery;
