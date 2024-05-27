import axios from "axios";
import { EXAM_DEMO_URL } from "./baseURLs";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiInstance = axios.create({
  baseURL: EXAM_DEMO_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchDataThunkFunc = createAsyncThunk(
  "fetchAPI",
  async ({ url, method, bodyData }) => {
    try {
      console.log("url: " + url, method, bodyData);
      const response = await apiInstance({
        url: url,
        method: method,
        data: bodyData,
      });
      console.log("response", response);
      return response;
    } catch (error) {
      console.log(error.AxiosError);
    }
  }
);

const fetchDataSlice = createSlice({
  name: "fetchDataSlice",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchDataThunkFunc.pending,
      (state) => (state = { ...state, loading: true })
    );

    builder.addCase(
      fetchDataThunkFunc.fulfilled,
      (state, action) =>
        (state = {
          ...state,
          loading: false,
          response: action.payload,
          data: action.payload?.data,
        })
    );
    builder.addCase(
      fetchDataThunkFunc.rejected,
      (state, action) =>
        (state = {
          ...state,
          loading: false,
          error: action.error.message,
        })
    );
  },
});

export default fetchDataSlice.reducer;
