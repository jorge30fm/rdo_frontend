"use client";

import { Box, Button, Typography } from "@mui/material";
import { InputField, Textarea } from "@/components/forms/formElements";
import colors from "@/theme/colors";

const GeneralInquiryForm = ({ light=false }: { light: boolean }) => {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("General Inquiry Submitted");
	};

	return (
		<Box
			component="form"
			onSubmit={handleSubmit}
			sx={{ maxWidth: "600px", mx: "auto", p: 4 }}
		>
			<Typography
				variant="h4"
				sx={{ mb: 2, color: light ? colors.main : colors.dark }}
			>
				General Inquiry
			</Typography>
			<InputField
				id="name"
				label="Full Name"
				required
				sx={{ backgroundColor: light ? colors.main : "inherit" }}
			/>
			<InputField
				id="email"
				label="Email Address"
				type="email"
				required
				sx={{ backgroundColor: light ? colors.main : "inherit" }}
			/>
			<Textarea
				id="message"
				label="Your Message"
				rows={6}
				required
				sx={{ backgroundColor: light ? colors.main : "inherit" }}
			/>
			<Button
				type="submit"
				variant="contained"
				fullWidth
			>
				Submit Inquiry
			</Button>
		</Box>
	);
};

export default GeneralInquiryForm;
