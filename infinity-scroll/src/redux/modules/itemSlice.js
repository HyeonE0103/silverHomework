import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const __getDogList = createAsyncThunk(
  "getDogList",
  async (_, thunkAPI) => {
    const API_KEY = process.env.REACT_APP_KEY;
    console.log(API_KEY);
    const url =
      "https://api.thedogapi.com/v1/images/search?limit=8&has_breeds=1";
    try {
      const response = await axios.get(url, {
        headers: {
          "x-api-key": API_KEY,
        },
      });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);

const itemSlice = createSlice({
  name: "dogList",
  initialState,
  reducers: {},
  extraReducers: {
    [__getDogList.pending]: (state) => {
      state.isLoading = true;
    },
    [__getDogList.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.data = action.payload;
      state.data = state.data.concat(action.payload);
    },
    [__getDogList.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const {} = itemSlice.actions;
export default itemSlice.reducer;
