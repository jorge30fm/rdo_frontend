"use client";
import { Button, Box } from "@mui/material";
import React, { useState } from "react";
import {
	LivePaintingForm,
	CommissionForm,
	GeneralInquiryForm,
} from "@/components";

import colors from "@/theme/colors";

const FormToggleButton = ({
	form,
	activeForm,
	handleFormChange,
	light = false,
}: {
	form: string;
	activeForm: string;
	handleFormChange: (form: string) => void;
	light: boolean;
}) => {
	return (
		<Button
			onClick={() => handleFormChange(form)}
			variant={activeForm === form ? "contained" : "outlined"}
			sx={{
				color: light
					? activeForm === form
						? colors.dark
						: colors.main
					: activeForm === form
					? colors.main
					: colors.dark,
				backgroundColor: light
					? activeForm === form
						? colors.main
						: "transparent"
					: activeForm === form
					? colors.dark
					: "transparent",
				borderColor: light ? colors.main : colors.dark,
				width: "200px",
				"&:hover": {
					backgroundColor: light ? colors.main : colors.accent,
					color: light ? colors.dark : colors.main,
					borderColor: light ? colors.main : colors.accent,
				},
				transition: "all 0.3s ease",
			}}
		>
			{form}
		</Button>
	);
};

const buttonList = [
	{
		text: "Commission Inquiry",
	},
	{
		text: "Live Painting Inquiry",
	},
	{
		text: "General Inquiry",
	},
];

interface ContactToggleSwitchProps {
	light?: boolean;
	defaultActiveForm?: string; // New prop for the default active form
}

const ContactToggleSwitch: React.FC<ContactToggleSwitchProps> = ({
	light = false,
	defaultActiveForm = "General Inquiry", // New prop for the default active form
}) => {
	const [activeForm, setActiveForm] = useState<string>(defaultActiveForm); // New state for the active form	

	const handleFormChange = (form: string) => {
		setActiveForm(form);
	};
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				gap: 2,
				justifyContent: "center",
				alignItems: "center",
				flexWrap: "wrap",
				paddingTop: 4,
			}}
		>
			{buttonList.map((button, index) => (
				<FormToggleButton
					key={index}
					form={button.text}
					activeForm={activeForm}
					handleFormChange={handleFormChange}
					light={light}
				/>
			))}

			{activeForm === "Commission Inquiry" && <CommissionForm light={light} />}
			{activeForm === "Live Painting Inquiry" && (
				<LivePaintingForm light={light} />
			)}
			{activeForm === "General Inquiry" && <GeneralInquiryForm light={light} />}
		</Box>
	);
};

export default ContactToggleSwitch;
