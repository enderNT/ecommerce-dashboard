import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers/userSlice";

export const STORE = configureStore({
    reducer: {
        user: counterSlice.reducer
    }
})