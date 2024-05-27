import { configureStore } from "@reduxjs/toolkit";
import dynamicFormReducer from "./slices/form.slice";
import dynamicFormDataReducer from "./slices/formData.slice";
import fetchData from "../utils/api/fetchData";

export const store = configureStore({
  reducer: {
    dynamicForm: dynamicFormReducer,
    dynamicFormData: dynamicFormDataReducer,
    fetchData: fetchData,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
