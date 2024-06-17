import { setFormErrors } from "../redux/slices/form.slice";
import { EXAM_FORM_ERRORS } from "./constant";

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

export const validateFormField = (data, fieldArr, formDataState) => {
  let errMsg;
  if (fieldArr?.fieldName === "confirmpassword") {
    if (!data && fieldArr?.isRequired) {
      errMsg = `${fieldArr.labelProps.value} is required`;
    } else if (data !== formDataState?.password) {
      errMsg = `${fieldArr.labelProps.value} does not match`;
    } else {
      errMsg = "";
    }
  } else if (fieldArr?.type === "checkbox") {
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
                item,
                formState
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

const showDupPos = (arr) => {
  const repeated = {};
  arr?.forEach((ele, index) => {
    if (ele) {
      if (arr?.indexOf(ele) !== arr?.lastIndexOf(ele)) {
        if (!repeated[ele]) {
          repeated[ele] = [index];
        } else {
          repeated[ele]?.push(index);
        }
      }
    }
  });
  const values = Object.values(repeated)?.flat(Infinity);
  return values;
};

export const validateExamField = (value, arr, i, isFormSubmit) => {
  const isRepeat = isFormSubmit
    ? false
    : arr?.some((item, index) => item.question === value && index !== i);

  let errMsg;
  if (!value) {
    errMsg = EXAM_FORM_ERRORS.QUESTION_ERROR;
  } else if (isRepeat) {
    errMsg = EXAM_FORM_ERRORS.QUESTION_EXIST;
  } else {
    errMsg = "";
  }
  return errMsg;
};

export const emptyValidation = (value, name) => {
  name = name === "subjectName" ? "Subject Name" : name;
  name = name === "description" ? "Description" : name;

  let errMsg;
  if (!value) {
    errMsg = `${name} is Required.`;
  } else {
    errMsg = "";
  }
  return errMsg;
};

export const setOptionsErrors = (arr, isFormSubmit) => {
  const dupIndexArr = showDupPos(arr?.options);
  let errObject = arr.options.reduce((accum, item, index) => {
    if (item) {
      if (dupIndexArr.includes(index)) {
        accum = {
          ...accum,
          [`${index}Option_Error`]: EXAM_FORM_ERRORS.SAME_OPTION_ERROR,
        };
      } else {
        accum = {
          ...accum,
          [`${index}Option_Error`]: "",
        };
      }
    } else if (isFormSubmit) {
      accum = {
        ...accum,
        [`${index}Option_Error`]: EXAM_FORM_ERRORS.OPTION_ERROR,
      };
    }

    return accum;
  }, {});
  // console.log("in setoption", errObject);
  return errObject;
};

export const validateFullQuestion = (question, questionsArr, i) => {
  let isCurrentQuestionValid = true;
  const errObjectForOptions = setOptionsErrors(question, true);
  const questionError = validateExamField(
    question.question,
    questionsArr,
    i,
    false
  );

  // Check if an answer is selected
  const answerError = question.answerIndex === "" ? "Select an answer" : "";

  if (
    questionError ||
    Object.values(errObjectForOptions).some((err) => err) ||
    answerError
  ) {
    isCurrentQuestionValid = false;
  }

  return {
    isCurrentQuestionValid,
    errObjectForOptions,
    questionError,
    answerError,
  };
};
