const BASE_URL = "http://127.0.0.1:8000";

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

export const createOrder = async (orderData: OrderData) => {
	try {
		const response = await fetch(`${BASE_URL}/shop/orders/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(orderData),
		});
		if (!response.ok) {
			throw new Error(
				`HTTP error! status: ${response.status} - ${response.statusText}`
			);
		}
		const data = await response.json();

		return data;
	} catch (error) {
		console.error("Error creating order:", error);
		return null;
	}
};


interface OrderUpdateData {
	payment_status?: string;
	status?: string;
}

export const updateOrder = async (orderNumber: string, updateData: OrderUpdateData) => {
	try {
		const response = await fetch(`${BASE_URL}/shop/orders/${orderNumber}/`, {
			method: "PATCH", // ✅ Use PATCH to update specific fields
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updateData),
		});

		if (!response.ok) {
			const errorText = await response.text();
			throw new Error(`Failed to update order. Status: ${response.status}. ${errorText}`);
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error("❌ Error updating order:", error);
		return null;
	}
};