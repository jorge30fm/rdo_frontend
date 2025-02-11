"use client";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { ShoppingCartMenu } from "@/components";
import { Box, IconButton, Badge } from "@mui/material";
import colors from "@/theme/colors";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/GlobalRedux/store";

const CartIcon = () => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [isClient, setIsClient] = useState(false);

	// ✅ Ensure this only runs on the client to prevent hydration mismatches
	useEffect(() => {
		setIsClient(true);
	}, []);

	// ✅ Default to 0 during SSR, then get the real value on the client
	const numberOfItems = useSelector((state: RootState) => state.cart.totalQuantity) || 0;

	const handleCartOpen = () => {
		setIsCartOpen(true);
	};

	return (
		<Box display="flex" alignItems="center" justifyContent="center">
			<IconButton onClick={handleCartOpen}>
				<Badge badgeContent={isClient ? numberOfItems : 0} color="error">
					<ShoppingCartIcon sx={{ color: colors.accent }} />
				</Badge>
			</IconButton>

			{/* ✅ Only render `ShoppingCartMenu` on the client */}
			{isClient && (
				<ShoppingCartMenu isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
			)}
		</Box>
	);
};

export default CartIcon;