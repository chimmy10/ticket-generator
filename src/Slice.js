import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	fullName: "",
	email: "",
	github: "@",
	image: null,
	submit: false,
	imagePreview: null,
	emailError: "",
	githubError: "",
	imageError: "",
};

const ticketSlice = createSlice({
	name: "ticket",
	initialState,
	reducers: {
		setFullName(state, action) {
			// Capitalize the first letter of each word in the payload
			const capitalizedFullName = action.payload
				.split(" ") // Split the string into an array of words
				.map(
					(word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitalize the first letter and make the rest lowercase
				)
				.join(" "); // Join the words back into a string

			// Set the fullName in the state
			state.fullName = capitalizedFullName;
		},
		setEmail(state, action) {
			const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

			// Check if the email is valid
			if (!emailRegex.test(action.payload)) {
				state.emailError = "Please enter a valid email address"; // Set error if invalid
			} else {
				state.emailError = ""; // Clear error if valid
			}

			state.email = action.payload; // Update the email
		},
		setGithub(state, action) {
			if (action.payload.includes(" ")) {
				state.githubError = "Please no space allowed";
			} else {
				state.githubError = "";
			}

			state.github = action.payload;
		},
		setImage(state, action) {
			state.image = action.payload;
		},
		setImagePreview(state, action) {
			state.imagePreview = action.payload;
		},
		setImageError(state, action) {
			// state.imageError =
			// 	"File size exceeds 500KB. Please choose a smaller image.";
			state.imageError = action.payload;
		},
		removeImage(state) {
			state.image = null;
		},
		submitted(state) {
			if (
				state.emailError ||
				state.githubError ||
				state.imageError ||
				!state.fullName ||
				!state.github ||
				!state.email
			) {
				state.submit = false;
			} else {
				state.submit = true;
			}
		},
	},
});

export const {
	setFullName,
	setGithub,
	setEmail,
	setImage,
	setImagePreview,
	removeImage,
	setImageError,
	submitted,
} = ticketSlice.actions;

export default ticketSlice.reducer;
