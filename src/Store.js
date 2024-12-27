import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./Slice";

export const store = configureStore({
	reducer: {
		ticket: ticketReducer,
	},
});
