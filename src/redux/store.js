import { configureStore } from "@reduxjs/toolkit";
import dynamicFormReducer from "./form.slice";
import dynamicFormDataReducer from "./formData.slice";

export const store = configureStore({
  reducer: {
    dynamicForm: dynamicFormReducer,
    dynamicFormData: dynamicFormDataReducer,
  },
});
