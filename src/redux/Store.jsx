import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./slices/CardSlice";

 export const Store = configureStore({
    reducer: {
        cart: CardSlice
    }
});