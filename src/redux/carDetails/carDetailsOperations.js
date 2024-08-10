import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCarDetailsById } from "../../services/api";

export const fetchCarDetailsById = createAsyncThunk("carDetails/getCarDetailsById", async (carId, thunkApi) => {
  try {
    const data = await getCarDetailsById(carId);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.massage);
  }
});
