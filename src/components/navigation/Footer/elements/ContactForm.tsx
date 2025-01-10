import { TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)({
	"& .MuiInputBase-input": {
		fontSize: ".875rem", // Adjust the font size of the user input
	},
	"& .MuiInputLabel-root": {
		fontSize: ".875rem", // Adjust the font size of the label
	},
});

const ContactForm = () => {
	return (
		<form
			style={{
				display: "flex",
				flexDirection: "column",
				gap: 10,
				fontSize: ".875rem",
			}}
		>
			<StyledTextField
				id="name"
				label="Name"
				variant="filled"
				fullWidth
				required
			/>
			<StyledTextField
				id="email"
				label="Email"
				variant="filled"
				fullWidth
				required
			/>
			<StyledTextField
				id="message"
				label="Message"
				variant="filled"
				fullWidth
				multiline
				minRows={3}
				required
			/>
			<Button
				type="submit"
				variant="contained"
				color="primary"
				fullWidth
			>
				Submit
			</Button>
		</form>
	);
};

export default ContactForm;