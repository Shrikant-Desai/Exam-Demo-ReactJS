import { createSlice } from "@reduxjs/toolkit";

const examFormSlice = createSlice({
  name: "ExamFormSlice",
  initialState: {},
  reducers: {
    addExamFormData: (state, action) => {
      return { ...state, [action?.payload?.name]: action.payload.data };
    },

    deleteExamFormData: (state, action) => {
      return {};
    },
  },
});

export const { addExamFormData, deleteExamFormData } = examFormSlice.actions;
export default examFormSlice.reducer;
