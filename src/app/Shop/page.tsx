import { Hero } from "@/components";

const heroContent ={
	title: "Discover Art That Inspires",
	text: "Explore original artwork and prints by Roldan Valdez. Find the perfect piece to elevate your space or gift to someone special.",
	image: "/images/roldanOriginals/girl2.jpg",
	buttons: [{
		text: "Shop Now",
		href: "/shop",
		variant: "contained" as const
	}]
}

const Shop = () => {
	return (
		<div>
			<Hero {...heroContent} />
			
		</div>
	);
};
export default Shop;
