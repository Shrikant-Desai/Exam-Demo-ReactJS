import { createSlice } from "@reduxjs/toolkit";

const examFormSlice = createSlice({
  name: "DynamicFormData",
  initialState: {},
  reducers: {
    addExamFormData: (state, action) => {
      return { ...state, [action?.payload?.name]: action.payload.data };
    },

    deleteData: (state, action) => {
      return {};
    },
  },
});

export const { addExamFormData, deleteData } = examFormSlice.actions;
export default examFormSlice.reducer;
