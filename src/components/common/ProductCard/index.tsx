import { Box, Typography, Button } from "@mui/material";

const ProductCard = () => {
	return (
		<Box>
			<Typography variant="h4">Product Name</Typography>
			<Typography variant="h6">Price</Typography>
			<Button>Add to Cart</Button>
		</Box>
	);
};
export default ProductCard;
