// components/FormElements.tsx
"use client";

import { TextField, MenuItem } from "@mui/material";

export const InputField = ({
	id,
	label,
	type = "text",
	required = false,
	fullWidth = true,
	...props
}: {
	id: string;
	label: string;
	type?: string;
	required?: boolean;
	fullWidth?: boolean;
	[propName: string]: unknown;
}) => (
	<TextField
		id={id}
		label={label}
		type={type}
		required={required}
		fullWidth={fullWidth}
		margin="normal"
		{...props}
	/>
);

export const SelectField = ({
	id,
	label,
	options,
	required = false,
	fullWidth = true,
	...props
}: {
	id: string;
	label: string;
	options: string[];
	rows?: number;
	required?: boolean;
	fullWidth?: boolean;
	[propName: string]: unknown;
}) => (
	<TextField
		id={id}
		label={label}
		select
		required={required}
		fullWidth={fullWidth}
		margin="normal"
		{...props}
	>
		{options.map((option: string, index: number) => (
			<MenuItem
				key={index}
				value={option}
			>
				{option}
			</MenuItem>
		))}
	</TextField>
);

export const Textarea = ({
	id,
	label,
	rows = 4,
	required = false,
	fullWidth = true,
	...props
}: {
	id: string;
	label: string;
	rows?: number;
	required?: boolean;
	fullWidth?: boolean;
	[propName: string]: unknown;
}) => (
	<TextField
		id={id}
		label={label}
		multiline
		rows={rows}
		required={required}
		fullWidth={fullWidth}
		margin="normal"
		{...props}
	/>
);
