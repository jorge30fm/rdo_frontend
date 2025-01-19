"use client";

import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addItemToCart } from "@/GlobalRedux/features/shoppingCartSlice";
import colors from "@/theme/colors";

interface Product {
    id: number | string;
    name: string;
    price: number;
	quantity: number;
	image: string; // Optional: URL or path to the product image
}

const AddToCartButton = ({ product }: { product: Product }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(
            addItemToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image, // Add the image property
				stockQuantity: product.quantity
            })
        );
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