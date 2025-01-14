"use client";

import { Box, Button, Typography, IconButton } from "@mui/material";
import {
	InputField,
	SelectField,
	Textarea,
} from "@/components/forms/formElements";
import { useState, useRef } from "react";
import colors from "@/theme/colors";
import CloseIcon from "@mui/icons-material/Close";

interface CommissionRequestFormProps {
	light?: boolean; // Add color prop
}

const CommissionRequestForm: React.FC<CommissionRequestFormProps> = ({
	light = false, // Default to colors.main
}) => {
	const [fileName, setFileName] = useState<string>(""); // State to store the file name
	const fileInputRef = useRef<HTMLInputElement>(null); // Ref for the file input element

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Commission Painting Request Submitted");
	};

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files && event.target.files.length > 0) {
			setFileName(event.target.files[0].name); // Set the selected file name
		}
	};

	const handleRemoveFile = () => {
		setFileName(""); // Clear the file name
		if (fileInputRef.current) {
			fileInputRef.current.value = ""; // Reset the file input element
		}
	};

	const paintingSizes = ["Small (8x10)", "Medium (16x20)", "Large (24x36)"];
	const paintingStyles = ["Realism", "Abstract", "Portrait", "Landscape"];
	const commissionType = [
		"Pet Portrait",
		"After the Wedding",
		"Family Portrait",
		"Custom Painting",
	];

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
				Commission Painting Request
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
			<InputField
				id="phone"
				label="Phone Number"
				type="tel"
				required
				sx={{ backgroundColor: light ? colors.main : "inherit" }}
			/>
			<SelectField
				id="size"
				label="Preferred Size"
				options={paintingSizes}
				sx={{ backgroundColor: light ? colors.main : "inherit" }}
			/>
			<SelectField
				id="style"
				label="Preferred Style"
				options={paintingStyles}
				sx={{ backgroundColor: light ? colors.main : "inherit" }}
			/>
			<SelectField
				id="commissionType"
				label="Commission Type"
				options={commissionType}
				sx={{ backgroundColor: light ? colors.main : "inherit" }}
			/>
			<Textarea
				id="details"
				label="Painting Details"
				rows={6}
				required
				sx={{ backgroundColor: light ? colors.main : "inherit" }}
			/>

			{/* Image Upload */}
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					width: "100%",
				}}
			>
				<Typography
					variant="body1"
					sx={{ mb: 1, color: light ? colors.main : colors.dark }}
				>
					Reference Image (optional)
				</Typography>
				<Box
					sx={{
						display: "flex",
						gap: 1,
						alignItems: { xs: "flex-start", sm: "center" },
						justifyContent: { xs: "flex-start", sm: "space-between" },
						width: "100%",
						flexDirection: { xs: "column", sm: "row" },
					}}
				>
					<label htmlFor="reference">
						<Box
							component="span"
							sx={{
								minWidth: "107px",
								display: "inline-block",
								padding: "7px 14px",
								border: "1px solid",
								borderColor: light ? colors.main : colors.accent,
								borderRadius: 0,
								cursor: "pointer",
								color: light ? colors.dark : colors.accent,
								textAlign: "center",
								fontSize: "0.875rem",
								backgroundColor: light ? colors.main : "transparent",
								"&:hover": {
									backgroundColor: light ? colors.dark : colors.accent,
									color: colors.main,
								},
							}}
						>
							Choose File
						</Box>
					</label>
					<input
						type="file"
						id="reference"
						ref={fileInputRef} // Attach the ref to the file input
						onChange={handleFileChange}
						style={{ display: "none" }}
					/>
					{/* Display the file name if it exists */}
					{fileName && (
						<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
							<Typography
								variant="body2"
								sx={{ mt: 1, color: light ? colors.main : colors.dark }}
							>
								Selected File: {fileName}
							</Typography>
							<IconButton
								onClick={handleRemoveFile}
								size="small"
								sx={{ mt: 1 }}
							>
								<CloseIcon sx={{ color: light ? colors.main : colors.dark }} />
							</IconButton>
						</Box>
					)}
				</Box>
			</Box>

			<Button
				type="submit"
				variant="contained"
				fullWidth
				sx={{ marginTop: 2 }}
			>
				Submit Request
			</Button>
		</Box>
	);
};

export default CommissionRequestForm;
