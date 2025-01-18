import { Button } from "@mui/material";
import colors from "@/theme/colors";

//TODO: refine the product type
interface Product {
	id: number | string;
	name: string;
}

const AddToCartButton = ({ product }: { product: Product }) => {
	//TODO: Implement addToCart functionality as a custom hook

	// const { id, title, price } = product;
	// const { addToCart } = useCart();

	const handleClick = () => {
		// addToCart(product);
		console.log(product);
	};
	return (
		<Button
			variant="outlined"
			sx={{
				color: colors.dark,
				borderColor: colors.dark,
				"&:hover": {
					backgroundColor: colors.dark,
					color: colors.main,
				},
			}}
			onClick={handleClick}
		>
			Add to Cart
		</Button>
	);
};
export default AddToCartButton;
