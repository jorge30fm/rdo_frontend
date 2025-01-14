"use client";

import { Box, Button, Typography } from "@mui/material";
import { InputField, Textarea } from "@/components/forms/formElements";
import colors from "@/theme/colors";

interface LivePaintingRequestFormProps {
  light?: boolean; // Add color prop
}

const LivePaintingRequestForm: React.FC<LivePaintingRequestFormProps> = ({
  light = false, // Default to dark theme
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Live Painting Request Submitted");
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
        Live Painting Request
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
      <InputField
        id="eventDate"
        label="Event Date"
        type="date"
        required
        sx={{ backgroundColor: light ? colors.main : "inherit" }}
      />
      <InputField
        id="eventLocation"
        label="Event Location"
        sx={{ backgroundColor: light ? colors.main : "inherit" }}
      />
      <Textarea
        id="eventDetails"
        label="Event Details"
        rows={6}
        required
        sx={{ backgroundColor: light ? colors.main : "inherit" }}
      />
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

export default LivePaintingRequestForm;