import { setFormErrors } from "../redux/slices/form.slice";

const checkSingleField = (value, fieldArr) => {
  if (!value && fieldArr?.isRequired) {
    return `${fieldArr.labelProps.value} is required`;
  } else if (value && fieldArr?.rulesData.length > 0) {
    return testRegex(value, fieldArr);
  } else {
    return "";
  }
};

const testRegex = (value, fieldArr) => {
  for (let i = 0; i < fieldArr?.rulesData?.length; i++) {
    if (!fieldArr?.rulesData[i]?.regEx.test(value)) {
      return fieldArr.rulesData[i]?.errorMessage;
    } else {
      return "";
    }
  }
};

export const validateFormField = (data, fieldArr) => {
  let errMsg;
  if (fieldArr?.type === "checkbox") {
    errMsg = checkSingleField(data?.length, fieldArr);
  } else {
    errMsg = checkSingleField(data, fieldArr);
  }
  return errMsg;
};

export const validateForm = (formState, formArr, path, dispatch) => {
  let isFormValid;
  let mainFormDataObject = {};
  const validateNestedForm = (
    formState,
    formArr,
    path,
    dispatch,
    formStateName
  ) => {
    const data = formArr?.reduce((accum, item) => {
      if (item.type === "subForm") {
        const newPath = path + "/" + item.path;
        const newFormState = formState?.[item.path];
        return validateNestedForm(
          newFormState,
          item.subFormArr,
          newPath,
          dispatch,
          item.path
        );
      }
      if (item.fieldName) {
        accum = {
          ...accum,
          errors: {
            ...accum?.errors,
            ...{
              [`${item?.fieldName}Error`]: validateFormField(
                formState?.[item?.fieldName],
                item
              ),
            },
          },
        };
        accum = {
          ...accum,
          data: {
            ...accum?.data,
            ...{
              ...accum?.data?.formState,
              [item.fieldName]: formState?.[item?.fieldName],
            },
          },
        };
        dispatch(
          setFormErrors({
            path: path,
            data: accum.errors,
          })
        );
      }
      return accum;
    }, {});
    if (data) {
      mainFormDataObject = {
        ...mainFormDataObject,
        data: {
          ...mainFormDataObject?.data,
          [formStateName]: { ...data.data },
        },
      };
      mainFormDataObject = {
        ...mainFormDataObject,
        errors: {
          ...mainFormDataObject?.errors,
          [formStateName]: { ...data.errors },
        },
      };
    }
  };

  validateNestedForm(formState, formArr, path, dispatch);
  isFormValid = Object.values(mainFormDataObject.errors).every(
    (formErrObject) =>
      Object.values(formErrObject).every((errMsg) => errMsg === "")
  );

  return { isFormValid, mainFormDataObject };
};
