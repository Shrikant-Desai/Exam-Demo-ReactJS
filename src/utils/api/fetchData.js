import axios from "axios";
import { EXAM_DEMO_BASE_ENDPOINT } from "./baseURLs";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { showAPIToastMessage } from "../javascript";
import {
  API_ERRORS,
  API_STATUS_SESSION_END,
  LOCAL_AUTH_TOKEN,
  LOCAL_LOGIN_DETAILS,
} from "../constant";

const apiInstance = axios.create({
  baseURL: EXAM_DEMO_BASE_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
  },
});

apiInstance.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem(LOCAL_AUTH_TOKEN));
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
  async ({ url, method, bodyData, isToastMessage, navigate, signal }) => {
    try {
      const response = await apiInstance({
        url: url,
        method: method,
        data: bodyData,
        signal,
      });

      if (isToastMessage) {
        showAPIToastMessage(response);
      }
      if (response.data.statusCode === API_STATUS_SESSION_END) {
        navigate("/login");
        localStorage.removeItem(LOCAL_AUTH_TOKEN);
        localStorage.removeItem(LOCAL_LOGIN_DETAILS);
        showAPIToastMessage(response);
      }
      return response;
    } catch (error) {
      if (error.name === API_ERRORS.ABORT_ERROR) {
        console.log(API_ERRORS.REQUEST_CANCELED, error.message);
      } else {
        console.error(API_ERRORS.REQUEST_FAILDED, error);
      }
    }
  }
);

const fetchDataSlice = createSlice({
  name: "fetchDataSlice",
  initialState: {},
  reducers: {
    clearFetchData: () => {
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
