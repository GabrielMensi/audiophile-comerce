import { configureStore } from "@reduxjs/toolkit";

//Reducers
import cartReducer from "../reducers/cart/cartSlice";
import userReducer from "../reducers/user/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});