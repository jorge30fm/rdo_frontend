import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
	apiVersion: "2024-12-18.acacia",
});

export async function POST(request: NextRequest) {
	try {
		const { amount } = await request.json();

		const paymentIntent = await stripe.paymentIntents.create({
			amount,
			currency: "usd",
			automatic_payment_methods: { enabled: true },
		})
		

		return NextResponse.json({ paymentIntent, clientSecret: paymentIntent.client_secret });
	} catch (error) {
		console.error("Error creating payment intent:", (error as Error).message);
		return NextResponse.json(
			{
				error: "Failed to create payment intent",
				details: (error as Error).message,
			},
			{ status: 500 }
		);
	}
}
