import { GalleryLayout } from "@/layouts";

const galleryContent = {
	title: "After the wedding paintings",
	subtitle: "Did I miss your wedding? No worries! I can create a custom painting from your wedding photos.",
	buttonText: "Book Now",
	buttonHref: "/Contact",
	images: [
		{ src: "/images/wedding/coupleInAltar.jpeg", alt: "Couple in Altar" },
		{ src: "/images/wedding/firstDance.jpeg", alt: "First Dance" },
		{ src: "/images/wedding/firstLook.jpeg", alt: "First Look" },
		{ src: "/images/wedding/coupleInAltar.jpeg", alt: "Couple in Altar" },
		{ src: "/images/wedding/intimateDance.jpeg", alt: "intimate Dance" },
		{ src: "/images/wedding/brideAndGroom.jpeg", alt: "Bride and Groom" },
		{ src: "/images/wedding/smilingCoupleWedding.jpeg", alt: "Smiling couple" },
		{ src: "/images/wedding/weddingDance.jpeg", alt: "Wedding dance" },
		{ src: "/images/wedding/brideAndGroom.jpeg", alt: "Bride and Groom" },
		{ src: "/images/wedding/firstDance.jpeg", alt: "First Dance" },
		{ src: "/images/wedding/kissWedding.jpeg", alt: "Kiss Wedding" },
		{ src: "/images/wedding/smilingCoupleWedding.jpeg", alt: "Smiling couple" },
		{ src: "/images/wedding/intimateDance.jpeg", alt: "intimate Dance" },
		{ src: "/images/wedding/kissWedding.jpeg", alt: "Kiss Wedding" },
		{ src: "/images/wedding/coupleInAltar.jpeg", alt: "Couple in Altar" },
		{ src: "/images/wedding/firstLook.jpeg", alt: "First Look" },
		{ src: "/images/wedding/brideAndGroom.jpeg", alt: "Bride and Groom" },
		{ src: "/images/wedding/firstDance.jpeg", alt: "First Dance" },
		{ src: "/images/wedding/weddingDance.jpeg", alt: "Wedding dance" },
		{ src: "/images/wedding/firstLook.jpeg", alt: "First Look" },
		{ src: "/images/wedding/intimateDance.jpeg", alt: "intimate Dance" },
		{ src: "/images/wedding/smilingCoupleWedding.jpeg", alt: "Smiling couple" },
		{ src: "/images/wedding/kissWedding.jpeg", alt: "Kiss Wedding" },
		{ src: "/images/wedding/weddingDance.jpeg", alt: "Wedding dance" },
	],
};

const AfterTheWeddingGallery = () => {
	return (
		<div>
			<GalleryLayout {...galleryContent} />
			
		</div>
	);
};
export default AfterTheWeddingGallery;
