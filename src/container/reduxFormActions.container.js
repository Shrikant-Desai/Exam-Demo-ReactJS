import { validateForm, validateFormField } from "../utils/validation";

import { getFieldArr } from "../utils/javascript";
import { useSelector } from "react-redux";
import {
  resetFormStates,
  setFormData,
  setFormErrors,
  setIsFormValid,
  setUpdateId,
} from "../redux/slices/form.slice";
import {
  addData,
  createFormDataState,
  deleteData,
  updateData,
} from "../redux/slices/formData.slice";

export const ReduxFormActions = (props) => {
  const mainForm = useSelector((state) => state.dynamicForm);
  let isFormSuccess;
  if (props?.path) {
    isFormSuccess = mainForm?.[props?.path]?.isFormValid;
  }

  const handleChange = (
    e,
    path,
    formArray,
    formErrorsState,
    formDataState,
    dispatch
  ) => {
    const currentFormName = path.split("/").pop();

    const currentFormData = formDataState?.[currentFormName];
    const currentFormErrors = formErrorsState?.[currentFormName];

    const fieldArr = getFieldArr(formArray, currentFormName, e.target.name);
    let newValue;
    if (e.target.type === "checkbox") {
      const { name, value, checked } = e.target;
      const checkboxArr = currentFormData?.[name] || [];

      newValue = checked
        ? [...checkboxArr, value]
        : checkboxArr.filter((e) => e !== value);
    } else {
      newValue = e.target.value;
    }

    const newFormData = {
      ...currentFormData,
      [e.target.name]: newValue,
    };

    dispatch(
      setFormData({
        path: path,
        data: newFormData,
      })
    );

    checkFieldErrors(e, newValue, fieldArr, currentFormErrors, dispatch, path);
  };

  const checkFieldErrors = (
    e,
    newValue,
    fieldArr,
    currentFormErrors,
    dispatch,
    path
  ) => {
    const errMsg = {
      [`${e.target.name}Error`]: validateFormField(newValue, fieldArr),
    };

    const errObject = { ...currentFormErrors, ...errMsg };
    dispatch(
      setFormErrors({
        path: path,
        data: errObject,
      })
    );

    const isFieldValid = Object.values(errObject).every((errMsg) => !errMsg);
    return { isFieldValid, errObject };
  };

  const checkFormErrors = (formArr, path, formDataState, dispatch) => {
    const { isFormValid, mainFormDataObject } = validateForm(
      formDataState,
      formArr,
      path,
      dispatch
    );
    return { isFormValid, mainFormDataObject };
  };
  const resetForm = (path, dispatch) => {
    dispatch(
      resetFormStates({
        path: path,
        data: {},
      })
    );
  };
  const handleSubmit = (e, formArr, path, formDataState, dispatch) => {
    e.preventDefault();
    const { isFormValid, mainFormDataObject } = checkFormErrors(
      formArr,
      path,
      formDataState,
      dispatch
    );
    if (isFormValid) {
      console.log("Submitted Data", mainFormDataObject.data);
      dispatch(createFormDataState(path));
      const isUpdate = mainForm?.[path]?.updateId;

      if (isUpdate) {
        dispatch(
          updateData({
            name: path,
            data: formDataState,
          })
        );
        dispatch(
          setUpdateId({
            name: path,
            data: false,
          })
        );
      } else {
        dispatch(
          addData({
            name: path,
            data: formDataState,
          })
        );
      }
      resetForm(path, dispatch);
    } else {
      console.error("There was an error", mainFormDataObject.errors);
    }
    dispatch(
      setIsFormValid({
        name: path,
        data: isFormValid,
      })
    );
  };
  const setDataIntoForm = (formDataArr, formName, id, dispatch) => {
    const formEditData = formDataArr.find((item) => item.id === id);
    dispatch(
      setFormData({
        path: formName,
        data: formEditData,
      })
    );
  };

  const handleDelete = (formName, id, dispatch) => {
    if (window.confirm("Are you sure you want to delete this data")) {
      dispatch(deleteData({ name: formName, data: id }));
      resetForm(formName, dispatch);
    }
  };

  return {
    handleChange,
    handleSubmit,
    resetForm,
    handleDelete,
    setDataIntoForm,
    isFormSuccess,
  };
};
