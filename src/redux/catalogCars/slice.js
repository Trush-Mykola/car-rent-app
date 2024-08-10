import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCars } from "./operations";

const INITIAL_STATE = {
  cars: [],
  displayedCars: [],
  favoritesCars: [],
  carsPerPage: 4,
  loadMoreVisible: true,
  isLoading: false,
  isError: null,
};

const catalogCarSlice = createSlice({
  name: "catalog",
  initialState: INITIAL_STATE,
  reducers: {
    setLoadMoreCars(state) {
      const nextItems = state.cars.slice(state.displayedCars.length, state.displayedCars.length + state.carsPerPage);
      state.displayedCars = [...state.displayedCars, ...nextItems];
      if (state.displayedCars.length >= state.cars.length) {
        state.loadMoreVisible = false;
      }
    },
    setFavoritesCars(state, action) {
      state.favoritesCars = action.payload;
    },
    removeFavoriteCar: (state, action) => {
      state.favoritesCars = state.favoritesCars.filter((car) => car._id !== action.payload._id);
    },
    getFavoritesCars(state) {
      return state.favoritesCars;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllCars.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = action.payload;
        state.displayedCars = state.cars.slice(0, state.carsPerPage);
        state.loadMoreVisible = state.cars.length > state.carsPerPage;
      })
      .addCase(fetchAllCars.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      }),
});

export const { setFavoritesCars, setLoadMoreCars, removeFavoriteCar, getFavoritesCars } = catalogCarSlice.actions;

export const catalogCarReducer = catalogCarSlice.reducer;
