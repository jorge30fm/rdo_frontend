"use client";

import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addItemToCartAsync } from "@/GlobalRedux/features/shoppingCartSlice";
import colors from "@/theme/colors";
import { AppDispatch } from "@/GlobalRedux/store";

interface Product {
	id: number | string;
	name: string;
	price: number;
	quantity: number;
	image: string; // Optional: URL or path to the product image
}

const AddToCartButton = ({ product }: { product: Product }) => {
	const dispatch = useDispatch<AppDispatch>();

	const handleClick = () => {
		dispatch(addItemToCartAsync(product.id));
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
