"use client";

import React from "react";
import {
	Drawer,
	Box,
	Typography,
	IconButton,
	Button,
	Divider,
	List,
	ListItem,
	ListItemText,
	ListItemAvatar,
	Avatar,
	TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import {
	clearCart,
	updateCartItemQuantity,
	removeItemFromCart,
} from "@/GlobalRedux/features/shoppingCartSlice";
import { RootState } from "@/GlobalRedux/store";
import { useRouter } from "next/navigation";
import colors from "@/theme/colors";

interface ShoppingCartMenuProps {
	isOpen: boolean;
	onClose: () => void;
}

const ShoppingCartMenu: React.FC<ShoppingCartMenuProps> = ({
	isOpen,
	onClose,
}) => {
	const dispatch = useDispatch();
	const router = useRouter();
	const cartItems = useSelector((state: RootState) => state.cart.items);
	const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);

	const handleRemoveItem = (id: string | number) => {
		dispatch(removeItemFromCart(id));
	};

	const handleQuantityChange = (id: string | number, quantity: number) => {
		const product = cartItems.find((item) => item.id === id);
		if (product && quantity > 0 && quantity <= product.stockQuantity) {
            dispatch(updateCartItemQuantity({ id, quantity }));
        }
	};

	const handleCheckout = () => {
		onClose();
		router.push("/checkout");
	};

	return (
		<Drawer
			anchor="right"
			open={isOpen}
			onClose={onClose}
			sx={{
				"& .MuiDrawer-paper": {
					minWidth: "300px",
					backgroundColor: colors.secondary,
					padding: 2,
				},
			}}
		>
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
			>
				<Typography
					variant="h6"
					sx={{ fontWeight: "bold" }}
				>
					Shopping Cart
				</Typography>
				<IconButton onClick={onClose}>
					<CloseIcon />
				</IconButton>
			</Box>

			<Divider sx={{ marginY: 2 }} />

			<List>
				{cartItems.length > 0 ? (
					cartItems.map((item) => (
						<ListItem
							key={item.id}
							sx={{
								display: "flex",
								justifyContent: "space-between",
								alignItems: "center",
								gap: 1,
							}}
						>
							<ListItemAvatar>
								<Avatar
									src={item.image}
									alt={item.name}
									sx={{ width: 56, height: 56, borderRadius: 1 }}
								/>
							</ListItemAvatar>
							<ListItemText
								primary={item.name}
								secondary={`$${(item.price ?? 0).toFixed(2)}`}
								sx={{
									"& .MuiTypography-body2": { color: colors.accent }, // Secondary text color
									"& .MuiTypography-body1": { color: "#333" }, // Primary text color
								}}
							/>
							<Box
								display="flex"
								alignItems="center"
								gap={1}
							>
								<TextField
									type="number"
									variant="outlined"
									size="small"
									value={item.quantity}
									onChange={(e) =>
										handleQuantityChange(item.id, parseInt(e.target.value, 10))
									}
									slotProps={{ htmlInput: { min: 1 } }}
									sx={{ width: 55 }}
								/>
								<IconButton
									color="error"
									onClick={() => handleRemoveItem(item.id)}
								>
									<DeleteIcon />
								</IconButton>
							</Box>
						</ListItem>
					))
				) : (
					<Typography
						variant="body1"
						textAlign="center"
					>
						Your cart is empty.
					</Typography>
				)}
			</List>

			<Divider sx={{ marginY: 2 }} />

			{cartItems.length > 0 && (
				<Box
					display="flex"
					flexDirection="column"
					gap={2}
				>
					<Typography
						variant="subtitle1"
						sx={{ textAlign: "right", fontWeight: "bold" }}
					>
						Total: ${totalPrice.toFixed(2)}
					</Typography>
					<Button
						variant="contained"
						color="primary"
						fullWidth
						onClick={handleCheckout}
					>
						Proceed to Checkout
					</Button>
					<Button
						variant="outlined"
						color="error"
						fullWidth
						onClick={() => dispatch(clearCart())}
					>
						Clear Cart
					</Button>
				</Box>
			)}
		</Drawer>
	);
};

export default ShoppingCartMenu;
