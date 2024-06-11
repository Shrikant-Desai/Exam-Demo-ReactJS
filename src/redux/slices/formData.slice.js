import { createSlice } from "@reduxjs/toolkit";

const dynamicFormDataSlice = createSlice({
  name: "DynamicFormData",
  initialState: {},
  reducers: {
    createFormDataState: (state, action) => {
      if (!state[action.payload]) {
        state[action.payload] = [];
      }
    },
    deleteFormDataState: (state, action) => {
      return state[action.payload];
    },
    addData: (state, action) => {
      state[action?.payload?.name] = [
        ...state?.[action.payload.name],
        { id: Date.now(), ...action.payload.data },
      ];
    },
    updateData: (state, action) => {
      state[action.payload.name] = state[action.payload.name].map((data) =>
        data.id === action.payload.data.id ? action.payload.data : data
      );
    },
    deleteData: (state, action) => {
      state[action.payload.name] = state?.[action.payload.name].filter(
        (data) => data.id !== action.payload.data
      );
    },
  },
});

export const {
  createFormDataState,
  deleteFormDataState,
  addData,
  updateData,
  deleteData,
} = dynamicFormDataSlice.actions;
export default dynamicFormDataSlice.reducer;
