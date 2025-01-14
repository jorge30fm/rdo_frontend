import { GalleryLayout } from "@/layouts";

const galleryContent = {
	title: "Commission Art",
	subtitle:
		"Have an idea for a painting? I can create a custom painting for you.",
	buttonText: "Book Now",
	buttonHref: "/Contact",
	images: [
		{ src: "/images/roldanOriginals/child.jpg", alt: "Child" },
		{ src: "/images/roldanOriginals/child2.jpg", alt: "Child" },
		{ src: "/images/roldanOriginals/girl.jpg", alt: "Girl" },
		{ src: "/images/roldanOriginals/girl2.jpg", alt: "Girl" },
		{ src: "/images/roldanOriginals/horse.jpg", alt: "Horse" },
		{ src: "/images/roldanOriginals/horse2.jpg", alt: "Horse" },
		{ src: "/images/roldanOriginals/nature.jpg", alt: "Landscape" },
		{ src: "/images/roldanOriginals/tobaco.jpg", alt: "Landscape" },
	],
};

const CommissionGallery = () => {
	return (
		<div>
			<GalleryLayout {...galleryContent} />
		</div>
	);
};
export default CommissionGallery;
