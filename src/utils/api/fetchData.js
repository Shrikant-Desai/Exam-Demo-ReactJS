import axios from "axios";
import { EXAM_DEMO_URL } from "./baseURLs";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { showAPIToastMessage } from "../javascript";

const apiInstance = axios.create({
  baseURL: EXAM_DEMO_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

export const fetchDataThunkFunc = createAsyncThunk(
  "fetchAPI",
  async ({ url, method, bodyData, isToastMessage }) => {
    try {
      const response = await apiInstance({
        url: url,
        method: method,
        data: bodyData,
      });
      if (isToastMessage) {
        showAPIToastMessage(response);
      }
      return response;
    } catch (error) {
      console.log(error.AxiosError);
    }
  }
);

const fetchDataSlice = createSlice({
  name: "fetchDataSlice",
  initialState: {},
  reducers: {
    clearFetchData: (state, action) => {
      return {};
    },
  },
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

export const { clearFetchData } = fetchDataSlice.actions;

export default fetchDataSlice.reducer;
