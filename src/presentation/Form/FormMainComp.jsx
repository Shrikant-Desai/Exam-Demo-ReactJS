import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GenerateForm from "./GenerateForm";
import { FORM_DATA, FORM_ERRORS } from "../../utils/constant";
import { getStateValue } from "../../utils/javascript";
import { createFormState, deleteFormState } from "../../redux/form.slice";
import EDTypography from "../../shared/EDTypography";
import EDStack from "../../shared/EDStack";
import EDBox from "../../shared/EDBox";
import EDGrid from "../../shared/EDGrid";

const FormMainComp = ({
  formArr,
  path,
  formName,
  className,
  isSubForm,
  handleChange,
  resetForm,
  handleSubmit,
}) => {
  const dispatch = useDispatch();
  const pathArr = path.split("/");

  const mainForm = useSelector((state) => state.dynamicForm);
  const mainFormData = mainForm?.[FORM_DATA];
  const mainFormErrors = mainForm?.[FORM_ERRORS];
  const formDataState = getStateValue(mainFormData, pathArr);
  const formErrorsState = getStateValue(mainFormErrors, pathArr);

  useEffect(() => {
    if (formArr) {
      dispatch(
        createFormState({
          path: `${FORM_DATA}/${path}`,
        })
      );
      dispatch(
        createFormState({
          path: `${FORM_ERRORS}/${path}`,
        })
      );
    }
    return () => {
      dispatch(deleteFormState(path));
    };
  }, []);

  const newHandleChange = (e, path) => {
    handleChange(e, path, formArr, formErrorsState, formDataState, dispatch);
  };

  const newResetForm = () => {
    resetForm(path, dispatch);
  };

  const generateForm = (
    <EDGrid
      container
      spacing={3}
      className
      direction={"column"}
      justifyContent={"flex-start"}
      alignItems={"flex-center"}
    >
      <EDTypography value={formName} align="center" />
      <GenerateForm
        {...{
          path,
          formArr,
          handleSubmit,
          formDataState,
          formErrors: formErrorsState,
          handleChange: newHandleChange,
          resetForm: newResetForm,
        }}
      />
    </EDGrid>
  );
  return (
    <EDStack className={className} justifyContent="flex-" direction="column">
      <EDBox className="mainFormCard">
        {isSubForm ? (
          <EDBox>{generateForm} </EDBox>
        ) : (
          <form
            onSubmit={(e) =>
              handleSubmit(e, formArr, path, formDataState, dispatch)
            }
            name={path}
          >
            {generateForm}
          </form>
        )}
      </EDBox>
    </EDStack>
  );
};

export default FormMainComp;
