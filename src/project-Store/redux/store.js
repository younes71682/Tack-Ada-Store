import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./basketSlice";

const store = configureStore({
    reducer: {
        shopping: basketSlice
    }
})

export default store