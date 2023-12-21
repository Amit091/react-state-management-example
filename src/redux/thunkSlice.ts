// mySlice.ts
import axios from "axios";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "./store"; // Assuming you have a store file

interface IData {
  id: number;
  username: string;
  name: string;
  email: string;
  address: object;
}

interface MyState {
  data: IData[];
  loading: boolean;
  error: string | null;
}

const initialState: MyState = {
  data: [],
  loading: false,
  error: null,
};

const thunkSlice = createSlice({
  name: "thunk",
  initialState,
  reducers: {
    fetchDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action: PayloadAction<IData[]>) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchDataFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } =
  thunkSlice.actions;

export const selectData = (state: RootState) => state.thunk.data;
export const selectLoading = (state: RootState) => state.thunk.loading;
export const selectError = (state: RootState) => state.thunk.error;

export const fetchApiData = (): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchDataStart());
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(fetchDataSuccess(response.data));
  } catch (error) {
    dispatch(fetchDataFailure((error as Error).message));
  }
};

export default thunkSlice.reducer;
