import { Wishlist } from "./../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  [x: string]: any;
  cart: Wishlist[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<Wishlist>) => {
      state.cart.push(action.payload);
    },
    deleteCart: (state, action: PayloadAction<Wishlist>) => {
      state.cart = state.cart.filter((cart) => cart.id !== action.payload.id);
    },
  },
});

export const { addCart, deleteCart } = cartSlice.actions;
export const selectCart = (state: { cart: CartState }) => state.cart;
export default cartSlice.reducer;
