import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { API_STATUS_SUCCESS } from "./constant";

export const getStateValue = (state, pathArr) => {
  let currentState = state;
  return pathArr.reduce((accum, item) => {
    if (currentState?.[item]) {
      currentState = currentState[item];
    } else {
      currentState = {};
    }
    accum = { ...currentState };
    return accum;
  }, {});
};

export const getFieldArr = (formArray, currentFormName, fieldValue) => {
  let data;
  const getFieldFromNestedArray = (formArray, currentFormName, fieldValue) => {
    formArray.map((item) => {
      if (item.type === "subForm") {
        getFieldFromNestedArray(item.subFormArr, currentFormName, fieldValue);
      } else {
        if (item.fieldName === fieldValue) {
          data = item;
        }
      }
      return item;
    });
  };
  getFieldFromNestedArray(formArray, currentFormName, fieldValue);
  return data;
};

export const showAPIToastMessage = (apiData) => {
  if (apiData?.data?.statusCode === API_STATUS_SUCCESS) {
    toast.success(apiData?.data?.message, { autoClose: 500 });
  } else {
    toast.error(apiData?.data?.message, { autoClose: 1000 });
  }
};

function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

export function stringAvatar(name) {
  return name
    ? {
        sx: {
          bgcolor: stringToColor(name),
        },
        children: `${name.split(" ")[0][0].toUpperCase()}`,
      }
    : "";
}
