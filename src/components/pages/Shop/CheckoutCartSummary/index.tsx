"use client";
import React, { useEffect } from "react";
import {
	Box,
	Typography,
	IconButton,
	Divider,
	List,
	ListItem,
	ListItemText,
	ListItemAvatar,
	Avatar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import colors from "@/theme/colors";

interface CartItem {
	id: string | number;
	name: string;
	price: number;
	quantity: number;
	image?: string;
}

interface CartSummaryProps {
	cartItems: CartItem[];
	totalPrice: number;
	shippingCost?: number; // Optional, default set in component
	onRemoveItem: (id: string | number) => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({
	cartItems,
	totalPrice,
	shippingCost = 5.99,
	onRemoveItem,
}) => {
	const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
	const grandTotal = totalPrice + (totalQuantity > 0 ? shippingCost : 0);
	const [isClient, setIsClient] = React.useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	if (!isClient) {
		return "Loading...";
	}
	return (
		<Box sx={{ backgroundColor: colors.main, padding: "16px" }}>
			{/* Header */}
			<Typography
				variant="h5"
				sx={{ fontWeight: "bold", mb: 2, color: colors.accent }}
			>
				Shopping Cart
			</Typography>

			{/* Items List */}
			<List>
				{cartItems.map((item) => (
					<ListItem
						key={item.id}
						sx={{
							display: "flex",
							gap: 2,
							justifyContent: "space-between",
							alignItems: "center",
							py: 1,
							borderBottom: `1px solid ${colors.accent}`,
						}}
					>
						{/* Product Image */}
						<ListItemAvatar>
							<Avatar
								src={item.image}
								alt={item.name}
								sx={{
									width: 64,
									height: 64,
									borderRadius: "4px",
									border: `1px solid ${colors.accent}`,
								}}
							/>
						</ListItemAvatar>

						{/* Product Info */}
						<ListItemText
							primary={item.name}
							secondary={`Price: $${item.price.toFixed(2)}`}
							sx={{
								"& .MuiTypography-body2": {
									color: colors.accent,
									fontWeight: 300,
								},
							}}
						/>

						{/* Quantity and Remove */}
						<Box
							display="flex"
							alignItems="center"
							gap={2}
						>
							<Typography
								variant="body2"
								sx={{ fontWeight: 300, color: "#333" }}
							>
								Qty: {item.quantity}
							</Typography>
							<IconButton
								color="error"
								onClick={() => onRemoveItem(item.id)}
							>
								<DeleteIcon />
							</IconButton>
						</Box>
					</ListItem>
				))}
			</List>

			{/* Summary Section */}
			<Box sx={{ mt: 2 }}>
				<Typography
					variant="body1"
					sx={{
						display: "flex",
						justifyContent: "space-between",
						mb: 1,
						fontWeight: 300,
					}}
				>
					<span>Subtotal:</span>
					<span>${totalPrice.toFixed(2)}</span>
				</Typography>
				<Typography
					variant="body1"
					sx={{
						display: "flex",
						justifyContent: "space-between",
						mb: 1,
						fontWeight: 300,
						color: colors.accent,
					}}
				>
					<span>Shipping:</span>
					<span>${shippingCost.toFixed(2)}</span>
				</Typography>
				<Divider sx={{ my: 1 }} />
				<Typography
					variant="h6"
					sx={{
						display: "flex",
						fontSize: "1.125rem",
						justifyContent: "space-between",
						fontWeight: 300,
						color: "#333",
					}}
				>
					<span>Total:</span>
					<span>${grandTotal.toFixed(2)}</span>
				</Typography>
			</Box>
		</Box>
	);
};

export default CartSummary;
