import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import authReducer from "./Slices/authSlice";
import wishlistReducer from "./Slices/wishlistSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const cartPersistConfig = {
  key: "cart",
  storage,
};

const wishlistPersistConfig = {
  key: "wishlist",
  storage,
};

const authReducerPersistConfig = {
  key: "auth",
  storage: storage, // Do not use storage for authReducer
  blacklist: ["user"], // Exclude 'user' field from being persisted
};

const reducer = combineReducers({
  cart: persistReducer(cartPersistConfig, cartReducer),
  auth: persistReducer(authReducerPersistConfig, authReducer),
  wishlist: persistReducer(wishlistPersistConfig, wishlistReducer),
});

const persistendReducer = persistReducer(
  { key: "root", version: 1, storage },
  reducer
);

export default configureStore({
  reducer: persistendReducer,
});
