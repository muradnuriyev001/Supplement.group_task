import { createSlice } from "@reduxjs/toolkit";

interface FilterState {
  title: string;
  price: number;
  rating: number;
  language: string;
  player: string;
  platform: string;
}

const initialState: FilterState = {
  title: "",
  price: 200,
  rating: 100,
  language: "All",
  player: "All",
  platform: "All",
};

const bookFilterSlice = createSlice({
  name: "bookFilter",
  initialState: initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload;
    },
    setPriceFilter: (state, action) => {
      state.price = action.payload;
    },
    setRatingFilter: (state, action) => {
      state.rating = action.payload;
    },
    setLanguageFilter: (state, action) => {
      state.language = action.payload;
    },
    setPlayerFilter: (state, action) => {
      state.player = action.payload;
    },
    setPlatformFilter: (state, action) => {
      state.platform = action.payload;
    },
  },
});

export const {
  setTitleFilter,
  setPriceFilter,
  setRatingFilter,
  setLanguageFilter,
  setPlayerFilter,
  setPlatformFilter,
} = bookFilterSlice.actions;

export const selectTitleFilter = (state: { bookFilter: FilterState }) =>
  state.bookFilter;

export const selectPriceFilter = (state: { bookFilter: FilterState }) =>
  state.bookFilter;

export const selectRatingFilter = (state: { bookFilter: FilterState }) =>
  state.bookFilter;

export const selectLanguageFilter = (state: { bookFilter: FilterState }) =>
  state.bookFilter;

export const selectPlayersFilter = (state: { bookFilter: FilterState }) =>
  state.bookFilter;

export const selectPlatformFilter = (state: { bookFilter: FilterState }) =>
  state.bookFilter;

export default bookFilterSlice.reducer;
