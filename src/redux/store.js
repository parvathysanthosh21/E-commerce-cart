import { configureStore } from "@reduxjs/toolkit";
import wishListSlice from "./slice/wishListSlice";

const store = configureStore({
    reducer:{
        wishListReducer:wishListSlice
    }
})

export default store