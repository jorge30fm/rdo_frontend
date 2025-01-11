import { ProductDetailsLayout } from "@/layouts";
const product = {
	id: 1,
	image: "/images/roldanOriginals/girl2.jpg",
	title: "Floral Reverie",
	price: 250,
	size: `12" x 12" in`,
	description: "A beautiful floral painting that will brighten any room.",
	material: "Oil on canvas",
};

const ProductDetails = () => {
	return (
		<div>
			<ProductDetailsLayout {...product} />
		</div>
	);
};
export default ProductDetails;
