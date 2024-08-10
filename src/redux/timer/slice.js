import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  timer: 5,
};

const timerSlice = createSlice({
  name: "timer",
  initialState: INITIAL_STATE,
  reducers: {
    decrementTime(state) {
      state.timer -= 1;
    },
  },
});

export const { decrementTime } = timerSlice.actions;

export const timerReducer = timerSlice.reducer;
