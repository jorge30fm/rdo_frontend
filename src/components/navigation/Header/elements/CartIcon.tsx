import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {ShoppingCartMenu} from "@/components";	
import { Box, IconButton } from "@mui/material";
import colors from "@/theme/colors";
import {useState } from "react";


const CartIcon = () => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const handleCartOpen = () => {
		setIsCartOpen(true);
	}

	return (
		<Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
			<IconButton onClick={handleCartOpen}>
				<ShoppingCartIcon sx={{ color: colors.accent }} />
			</IconButton>
			<ShoppingCartMenu
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
            />
		</Box>
	);
};
export default CartIcon;



