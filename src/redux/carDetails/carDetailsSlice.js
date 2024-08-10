import { createSlice } from "@reduxjs/toolkit";
import { fetchCarDetailsById } from "./carDetailsOperations";

const INITIAL_STATE = {
  carDetails: null,
  isLoading: false,
  isError: false,
};

const carDetailsSlice = createSlice({
  name: "carDetails",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(fetchCarDetailsById.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCarDetailsById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carDetails = action.payload;
      })
      .addCase(fetchCarDetailsById.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      }),
});

// export const {} = carDetailsSlice.actions;

export const carDetailsReducer = carDetailsSlice.reducer;
