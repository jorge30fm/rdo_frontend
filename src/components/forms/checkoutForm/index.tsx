"use client";

import {
	Box,
	Typography,
	Button,
	Stepper,
	Step,
	StepLabel,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import {
	useStripe,
	useElements,
	PaymentElement,
	AddressElement,
} from "@stripe/react-stripe-js";
import convertToSubcurrency from "@/utils/convertToSubcurrency";
import { useEffect, useState } from "react";
import styles from "./checkoutForm.module.css";
import { Stripe } from "@stripe/stripe-js";
import { RootState } from "@/GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import { createOrder, updateOrder } from "@/api/orders";
import { updateProductQuantity, checkIfIsInStock } from "@/api/products";
import { clearCart } from "@/GlobalRedux/features/shoppingCartSlice";
interface ShippingAddress {
	line1: string;
	line2?: string;
	city: string;
	state: string;
	postal_code: string;
	country: string;
}

interface OrderItem {
	product: number;
	quantity: number;
	price: number;
}

interface OrderData {
	client_name: string;
	client_email: string;
	client_phone: string;
	shipping_address: ShippingAddress;
	total_price: number;
	total_quantity: number;
	payment_status: string;
	status: string;
	items: OrderItem[];
	order_number: string;
}

interface ClientDetailsProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	handleShippingInfoChange: (e: any) => void;
	handleNext: () => void;
	errorMessage: string | undefined;
	email: string | undefined;
	disabled: boolean;
}
interface PaymentSectionProps {
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	handleBack: () => void;
	amount: number;
	clientSecret: string;
	stripe: Stripe | null;
	loading: boolean;
	errorMessage: string | undefined;
}

const ClientDetails = ({
	handleShippingInfoChange,
	handleNext,
	errorMessage,
	email,
	disabled,
}: ClientDetailsProps) => {
	const areItemsInCart = useSelector(
		(state: RootState) => state.cart.items.length === 0
	);

	return (
		<Box>
			<label
				htmlFor="email"
				className={styles["label"]}
			>
				Email
			</label>
			<input
				className={styles["StripeElement"]}
				type="email"
				name="email"
				value={email}
				onChange={(e) => handleShippingInfoChange(e)}
			/>
			<AddressElement
				onChange={(e) => handleShippingInfoChange(e)}
				id={"address"}
				options={{
					mode: "shipping",
					allowedCountries: ["US", "CA", "MX"],
					fields: {
						phone: "always",
					},
				}}
			/>
			<Typography
				color="error"
				sx={{ whiteSpace: "pre-line" }} // ✅ Ensures new lines are displayed
			>
				{errorMessage}
			</Typography>

			<Button
				variant="contained"
				sx={{ mt: 2 }}
				onClick={handleNext}
				disabled={areItemsInCart || disabled}
			>
				Next
			</Button>
		</Box>
	);
};

const PaymentSection = ({
	handleSubmit,
	handleBack,
	amount,
	clientSecret,
	stripe,
	loading,
	errorMessage,
}: PaymentSectionProps) => {
	return (
		<Box
			component="form"
			onSubmit={handleSubmit}
		>
			<Typography
				variant="h5"
				gutterBottom
			>
				Payment Information
			</Typography>
			{clientSecret && (
				<PaymentElement
					options={{
						layout: {
							type: "accordion",
							defaultCollapsed: false,
							radios: false,
							spacedAccordionItems: true,
						},
						wallets: { applePay: "auto", googlePay: "auto" },
					}}
				/>
			)}
			{errorMessage && (
				<Typography
					color="error"
					sx={{ whiteSpace: "pre" }} // ✅ Ensures new lines are displayed
				>
					{errorMessage}
				</Typography>
			)}
			<Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
				<Button
					variant="outlined"
					onClick={handleBack}
				>
					Back
				</Button>
				<Button
					type="submit"
					disabled={!stripe || loading}
					variant="contained"
				>
					{loading ? "Processing..." : `Pay $${amount}`}
				</Button>
			</Box>
		</Box>
	);
};
const Confirmation = ({
	confirmationNumber,
	shippingAddress,
	clientEmail,
}: {
	confirmationNumber: string;
	shippingAddress: ShippingAddress;
	clientEmail: string;
}) => {
	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			gap={2}
		>
			<Typography
				variant="h5"
				gutterBottom
			>
				Order Confirmed!
			</Typography>
			<Typography
				variant="h6"
				gutterBottom
			>
				Confirmation Number: {confirmationNumber}
			</Typography>

			<Typography
				variant="body1"
				gutterBottom
			>
				A confirmation email has been sent to {clientEmail}. Please keep this
				number for your records....
			</Typography>
			<Typography
				variant="body1"
				gutterBottom
			>
				A tracking number will be emailed once the order has been shipped.
			</Typography>
			<Typography
				variant="h6"
				gutterBottom
				sx={{ width: "100%", textAlign: "left", mt: 2, fontSize: "1.175rem" }}
			>
				<span style={{ fontWeight: 800 }}>Shipping Address: {""}</span>
				{`${shippingAddress.line1}
				${shippingAddress.line2 ? `, ${shippingAddress.line2}` : ""}, 
				${shippingAddress.city}, ${shippingAddress.state}, 
				${shippingAddress.postal_code}, ${shippingAddress.country}`}
			</Typography>
			<Typography
				variant="body1"
				gutterBottom
				mt={2}
			>
				Thank you for shopping at Roldan&apos;s Studio and supporting small
				businesses.
			</Typography>
			<Button
				variant="contained"
				sx={{ mt: 2 }}
				onClick={() => {
					// Handle any post-purchase actions like returning to the home page
				}}
			>
				Continue shopping
			</Button>
		</Box>
	);
};

const CheckoutForm = ({
	amount,
	addPurchasedItems,
}: {
	amount: number;
	addPurchasedItems: () => void;
}) => {
	const dispatch = useDispatch();
	const stripe = useStripe();
	const elements = useElements();

	const [isClient, setIsClient] = useState(false);
	const [clientSecret, setClientSecret] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const [activeStep, setActiveStep] = useState(0); // Track the current step (0 = Client Details, 1 = Payment)
	const [errorMessage, setErrorMessage] = useState<string>();

	// ✅ Generate order number only on the client to prevent SSR mismatches
	const [orderNumber, setOrderNumber] = useState<string>("");
	const [confirmationNumber, setConfirmationNumber] = useState<string>("");

	useEffect(() => {
		setIsClient(true);
		setOrderNumber(Math.floor(100000 + Math.random() * 900000).toString());
	}, []);

	const [shippingInfo, setShippingInfo] = useState({
		email: "",
		address: {
			line1: "",
			line2: "",
			city: "",
			state: "",
			postal_code: "",
			country: "",
		},
		name: "",
		phone: "",
	});

	const orderItems = useSelector((state: RootState) => state.cart.items);
	const totalQuantity = useSelector(
		(state: RootState) => state.cart.totalQuantity
	);

	useEffect(() => {
		fetch("/api/create-payment-intent", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ amount: convertToSubcurrency(amount) }),
		})
			.then((res) => {
				if (!res.ok) {
					throw new Error("Failed to fetch client secret");
				}

				return res.json();
			})
			.then((data) => {
				setClientSecret(data.clientSecret);
			})
			.catch((error) => {
				console.error("Error fetching payment intent:", error);
			});
	}, [amount, isClient]);

	if (!clientSecret || !stripe || !elements) return <CircularProgress />;

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleShippingInfoChange = (e: any) => {
		if (e.elementType && e.elementType === "address") {
			setShippingInfo((prevInfo) => ({
				...prevInfo,
				phone: e.value.phone,
				address: {
					...prevInfo.address,
					line1: e.value.address.line1,
					line2: e.value.address.line2,
					city: e.value.address.city,
					state: e.value.address.state,
					postal_code: e.value.address.postal_code,
					country: e.value.address.country,
				},
				name: e.value.name,
			}));
		} else {
			setShippingInfo((prevInfo) => ({
				...prevInfo,
				email: e.target.value,
			}));
		}
	};
	const checkCompleteShippingInfo = () => {
		if (
			shippingInfo.email &&
			shippingInfo.address.line1 &&
			shippingInfo.address.city &&
			shippingInfo.address.state &&
			shippingInfo.address.postal_code &&
			shippingInfo.address.country &&
			shippingInfo.name &&
			shippingInfo.phone
		) {
			return true;
		}
		return false;
	};

	//active step chaneg handlers
	const handleNext = () => {
		if (activeStep === 0 && !checkCompleteShippingInfo()) {
			setErrorMessage("Please fill out all fields");
			return;
		}
		setErrorMessage(undefined);
		setActiveStep((prevStep) => prevStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevStep) => prevStep - 1);
	};

	const createOrderDetails = () => {
		const order: OrderData = {
			total_price: amount,
			total_quantity: totalQuantity,
			order_number: orderNumber,
			payment_status: "Pending",
			shipping_address: {
				line1: shippingInfo.address.line1,
				line2: shippingInfo.address.line2,
				city: shippingInfo.address.city,
				state: shippingInfo.address.state,
				postal_code: shippingInfo.address.postal_code,
				country: shippingInfo.address.country,
			},
			client_name: shippingInfo.name,
			client_email: shippingInfo.email,
			client_phone: shippingInfo.phone,
			items: orderItems.map((item) => ({
				product: Number(item.id),
				quantity: item.quantity,
				price: item.price,
			})),
			status: "Pending",
		};
		return order;
	};

	const postPaymentCleanup = () => {
		//update inventory
		orderItems.forEach(async (item) => {
			await updateProductQuantity(
				item.id.toString(),
				item.stockQuantity - item.quantity
			);
		});
		// Clear cart
		addPurchasedItems();
		dispatch(clearCart());
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		if (!stripe || !elements) {
			setErrorMessage("Stripe is not initialized.");
			setLoading(false);
			return;
		}

		try {
			// ✅ Step 1: Check stock
			const returnedDataCheckStock = await Promise.all(
				orderItems.map(async (item) => {
					try {
						return await checkIfIsInStock(item.id, item.quantity);
					} catch (error) {
						console.error(`Error checking stock for ${item.id}:`, error);
						//exit and do not proceed to payment if an error occurs
						setErrorMessage(
							"An error occurred while checking stock. Please try again."
						);
						setLoading(false);
						return null;
					}
				})
			);
			console.log("returnedDataCheckStock", returnedDataCheckStock);

			// ✅ Remove null/failed responses
			const validStockResponses = returnedDataCheckStock.filter(Boolean);

			//check if any of the returnedDataCheckStock has an in_stock:False property
			const outOfStockItems = validStockResponses.filter(
				(item) => item && !item.in_stock
			);

			if (outOfStockItems.length > 0) {
				//for each item that is out of stock display the name of the item and the message, there are two options, out of stock or request exceeds available stock, group them together accordingly
				const outOfStockMessages = outOfStockItems.reduce(
					(acc: string[], item) => {
						if (item && item.message) {
							acc.push(item.message);
						}
						return acc;
					},
					[]
				);
				setErrorMessage(
					`Sorry for the invonvenience, we encountered the following issues:\n${outOfStockMessages
						.map((msg) => `\t${msg}`) // ✅ Adds a tab before each message
						.join("\n")}
						\nPlease adjust your order and try again.`
				);
				setLoading(false);
				return;
			}

			// ✅ Step 2: Create the Order
			const order = createOrderDetails();
			const createdOrder = await createOrder(order);
			if (!createdOrder) {
				setErrorMessage("Failed to create order. Please try again.");
				setLoading(false);
				return;
			}

			// ✅ Step 3: Process Payment
			const { error: submitError } = await elements.submit();
			if (submitError) {
				setErrorMessage(submitError.message);
				setLoading(false);
				return;
			}

			const confirmPayment = await stripe.confirmPayment({
				elements,
				clientSecret,
				redirect: "if_required",
				confirmParams: {
					return_url: `${window.location.origin}/payment-success?amount=${order.total_price}`,
				},
			});

			if (confirmPayment.error) {
				setErrorMessage(confirmPayment.error.message);
				setLoading(false);
				return;
			}

			// ✅ Step 4: If successful, update order status
			if (confirmPayment.paymentIntent?.status === "succeeded") {
				const updatedOrder = await updateOrder(order.order_number, {
					payment_status: "Completed",
					status: "Processing",
				});
				if (!updatedOrder)
					throw new Error("Failed to update order after payment.");

				setConfirmationNumber(order.order_number);
				setActiveStep(2);
				postPaymentCleanup();
			} else {
				setErrorMessage("Payment failed");
			}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			setErrorMessage(error.message || "An unexpected error occurred.");
		} finally {
			setLoading(false);
		}
	};

	// Step Content
	const renderStepContent = () => {
		switch (activeStep) {
			case 0: // Step 1: Client Details
				return (
					<ClientDetails
						handleShippingInfoChange={handleShippingInfoChange}
						handleNext={handleNext}
						errorMessage={errorMessage}
						email={shippingInfo.email}
						disabled={!checkCompleteShippingInfo()}
					/>
				);
			case 1: // Step 2: Payment
				return (
					<PaymentSection
						handleSubmit={handleSubmit}
						handleBack={handleBack}
						amount={amount}
						clientSecret={clientSecret}
						stripe={stripe}
						loading={loading}
						errorMessage={errorMessage}
					/>
				);
			case 2: // Step 3: Confirmation
				return (
					<Confirmation
						confirmationNumber={confirmationNumber}
						shippingAddress={shippingInfo.address}
						clientEmail={shippingInfo.email}
					/>
				);
			default:
				return null;
		}
	};

	return (
		<Box
			sx={{
				width: "100%",
				mx: "auto",
				p: 4,
				display: "flex",
				flexDirection: "column",
				gap: 4,
			}}
		>
			{/* Stepper */}
			<Stepper activeStep={activeStep}>
				<Step>
					<StepLabel>Shipping Information</StepLabel>
				</Step>
				<Step>
					<StepLabel>Payment</StepLabel>
				</Step>
				<Step>
					<StepLabel>Confirmation</StepLabel>
				</Step>
			</Stepper>

			{/* Step Content */}
			{renderStepContent()}
		</Box>
	);
};

export default CheckoutForm;
