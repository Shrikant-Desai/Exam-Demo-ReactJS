import { configureStore } from "@reduxjs/toolkit";
import dynamicFormReducer from "./slices/form.slice";
import dynamicFormDataReducer from "./slices/formData.slice";
import fetchData from "../utils/api/fetchData";
import examFormDataReducer from "./slices/examForm.slice";
import apiDataReducer from "./slices/apisData.slice";
export const store = configureStore({
  reducer: {
    dynamicForm: dynamicFormReducer,
    dynamicFormData: dynamicFormDataReducer,
    fetchData: fetchData,
    examFormData: examFormDataReducer,
    apisData: apiDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
