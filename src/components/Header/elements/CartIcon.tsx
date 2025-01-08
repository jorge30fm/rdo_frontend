import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box, IconButton } from "@mui/material";
import colors from "../../../theme/colors";
const CartIcon = () => {
	return (
		<Box>
			<IconButton>
				<ShoppingCartIcon sx={{ color: colors.accent }} />
			</IconButton>
		</Box>
	);
};
export default CartIcon;
