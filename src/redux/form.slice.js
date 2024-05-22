import { createSlice } from "@reduxjs/toolkit";
import { FORM_DATA, FORM_ERRORS } from "../utils/constant";

export const makeStatesFromPath = (state, path, data) => {
  const pathSegments = path?.split("/").filter((segment) => segment !== "");
  let currentState = state;

  for (const segment of pathSegments) {
    if (!currentState[segment]) {
      currentState[segment] = {};
    }
    currentState = currentState[segment];
  }

  Object.assign(currentState, data);
  return currentState;
};

const formSlice = createSlice({
  name: "dynamicFormSlice",
  initialState: {},
  reducers: {
    createFormState: (state, action) => {
      const currentState = makeStatesFromPath(state, action.payload.path, {});
      state = { ...currentState };
    },
    deleteFormState: (state, action) => {
      delete state[action.payload];
    },
    setFormData: (state, action) => {
      makeStatesFromPath(state[FORM_DATA], action.payload.path, {
        ...action.payload.data,
      });
    },
    setFormErrors: (state, action) => {
      makeStatesFromPath(state[FORM_ERRORS], action.payload.path, {
        ...action.payload.data,
      });
    },
    resetFormStates: (state, action) => {
      state["Data"][action.payload.path] = {};
      state["Errors"][action.payload.path] = {};
    },
    setIsFormValid: (state, action) => {
      state[action.payload.name] = {
        ...state[action.payload.name],
        isFormValid: action?.payload.data,
      };
    },
    setUpdateId: (state, action) => {
      state[action.payload.name].updateId = action?.payload?.data;
    },
  },
});

export const {
  createFormState,
  deleteFormState,
  setFormData,
  setFormErrors,
  resetFormStates,
  setIsFormValid,
  setUpdateId,
} = formSlice.actions;

export default formSlice.reducer;
