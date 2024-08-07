import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "./basketSlice";

const stroe = configureStore({
    reducer: {
        shopping: basketSlice
    }
})

export default stroe