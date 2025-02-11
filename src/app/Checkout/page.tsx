"use client";

import { CheckoutForm } from "@/components";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import colors from "@/theme/colors";
import { RootState } from "@/GlobalRedux/store";
import { useDispatch, useSelector } from "react-redux";
import { removeItemFromCart } from "@/GlobalRedux/features/shoppingCartSlice";
import { useEffect, useState } from "react";
import CartSummary from "@/components/pages/Shop/CheckoutCartSummary";

if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
	throw new Error("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined");
}

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const CheckoutPage = () => {
	const dispatch = useDispatch();

	interface CartItem {
		id: string | number;
		name: string;
		price: number;
		quantity: number;
	}

	const [cartSummaryData, setCartSummaryData] = useState<{
		cartItems: CartItem[];
		totalPrice: number;
	}>({
		cartItems: [],
		totalPrice: 0,
	});

	// Ensure `cartItems` & `totalPrice` always have a default value
	const cartItems = useSelector((state: RootState) => state.cart.items) || [];
	const totalPrice =
		useSelector((state: RootState) => state.cart.totalPrice) || 0;
	// Move `amount` into a useState to prevent SSR mismatches

	const [amount, setAmount] = useState<number>(totalPrice + 5.99);
	// Ensure `amount` updates on the client
	useEffect(() => {
		setAmount(totalPrice + 5.99);
	}, [totalPrice]);

	const handleRemoveItem = (id: string | number) => {
		dispatch(removeItemFromCart(id));
	};
	const [purchasedItems, setPurchasedItems] = useState<CartItem[]>([]);

	const addPurchasedItems = () => {
		setPurchasedItems(cartItems);
	};

	const calculatePurchaseTotal = (items: CartItem[]) => {
		return items.reduce((acc: number, item: CartItem) => {
			return acc + item.price * item.quantity;
		}, 0);
	};
	const purchaseTotal = calculatePurchaseTotal(purchasedItems);

	useEffect(() => {
		if (purchasedItems.length > 0) {
			setCartSummaryData({
				cartItems: purchasedItems,
				totalPrice: purchaseTotal,
			});
		} else if (cartItems.length > 0) {
			setCartSummaryData({
				cartItems,
				totalPrice,
			});
		}
	}, [purchasedItems, cartItems, purchaseTotal, totalPrice]);

	return (
		<Box sx={{ padding: 4 }}>
			<Typography variant="h2">Checkout</Typography>
			<Grid
				container
				spacing={2}
			>
				<Grid size={{ xs: 12, md: 6 }}>
					<Elements
						stripe={stripePromise}
						options={{
							mode: "payment",
							amount: amount * 100,
							currency: "usd",
							appearance: {
								theme: "stripe",
								variables: {
									colorPrimary: colors.accent,
									borderRadius: "0px",
								},
							},
						}}
					>
						<CheckoutForm
							amount={amount}
							addPurchasedItems={addPurchasedItems}
						/>
					</Elements>
				</Grid>
				<Grid size={{ xs: 12, md: 6 }}>
					<CartSummary
						{...cartSummaryData}
						onRemoveItem={handleRemoveItem}
					/>
				</Grid>
			</Grid>
		</Box>
	);
};

export default CheckoutPage;
