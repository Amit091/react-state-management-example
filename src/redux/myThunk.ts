// myThunks.ts

import { createAsyncThunk } from "@reduxjs/toolkit";
import { setData, setLoading, setError } from "./thunkSlice";

// Mock API call
const fetchDataFromApi = async () => {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  return data;
};

export const fetchData = createAsyncThunk(
  "thunk/fetchData",
  async (_, { dispatch }) => {
    try {
      dispatch(setLoading(true));
      const data = await fetchDataFromApi();
      dispatch(setData(data));
    } catch (error) {
      dispatch(setError((error as Error).message));
    }
  }
);
