import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducers";

export const STORE = configureStore({
    reducer: counterSlice.reducer
})