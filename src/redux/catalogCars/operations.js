import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCars } from "../../services/api";

export const fetchAllCars = createAsyncThunk("getAllCars", async (_, thunkApi) => {
  try {
    const data = await getAllCars();
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.massage);
  }
});

export const fetchCarById = createAsyncThunk("getAllCars", async (carId, thunkApi) => {
  try {
    const data = await getAllCars();
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.massage);
  }
});
