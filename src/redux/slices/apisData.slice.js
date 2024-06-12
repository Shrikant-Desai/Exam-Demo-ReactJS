import { createSlice } from "@reduxjs/toolkit";

const apiDataSlice = createSlice({
  name: "APIsData",
  initialState: {},
  reducers: {
    addAPIData: (state, action) => {
      state[action?.payload?.name] = { ...action.payload.data };
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

export const { addAPIData, updateData, deleteData } = apiDataSlice.actions;
export default apiDataSlice.reducer;
