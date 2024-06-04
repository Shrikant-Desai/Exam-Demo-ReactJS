import axios from "axios";
import { EXAM_DEMO_BASE_ENDPOINT } from "./baseURLs";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { showAPIToastMessage } from "../javascript";
import { API_STATUS_UNAUTHORIZED } from "../constant";
import { Navigate } from "react-router-dom";

const apiInstance = axios.create({
  baseURL: EXAM_DEMO_BASE_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

apiInstance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("authToken"));
    if (token) {
      config.headers["access-token"] = token;
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
      if (response.data.statusCode === API_STATUS_UNAUTHORIZED) {
        localStorage.removeItem("authToken");
        localStorage.removeItem("loginDetails");
        <Navigate to="/signin" />;
        if (isToastMessage) {
          showAPIToastMessage(response);
        }
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
