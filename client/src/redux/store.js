import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import authReducer from "./Slices/authSlice";
import wishlistReducer from "./Slices/wishlistSlice";


export default configureStore({
    reducer: {
        cart: cartReducer,
        auth:authReducer,
        wishlist:wishlistReducer
    },
})