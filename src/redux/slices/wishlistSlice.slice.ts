import { Wishlist } from "./../../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WishlistState {
  [x: string]: any; //For HeaderList.tsx, length error in const bookNowLength = bookNow.length;
  wishlist: Wishlist[];
}

const initialState: WishlistState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlist: (state, action: PayloadAction<Wishlist>) => {
      state.wishlist.push(action.payload);
    },
    deleteWishlist: (state, action: PayloadAction<Wishlist>) => {
      state.wishlist = state.wishlist.filter(
        (wish) => wish.id !== action.payload.id
      );
    },
  },
});

export const { addWishlist, deleteWishlist } = wishlistSlice.actions;
export const selectWishlist = (state: { wishlist: WishlistState }) =>
  state.wishlist;
export default wishlistSlice.reducer;
