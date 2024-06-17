import React from "react";
import EDGrid from "../../shared/EDGrid";
import { Link } from "react-router-dom";
import EDStack from "../../shared/EDStack";
import signUpContainer from "../../container/user/signup.container";
import { signUpFormArray } from "../../description/forms/formsData.description";
import EDForm from "../../shared/form/EDForm";
import { FORMS } from "../../utils/constant";

const SignUp = () => {
  const {
    handleChange,
    handleSubmit,
    resetForm,
    sxObject,
    path,
    isAPILoading,
  } = signUpContainer();

  return (
    <>
      <EDStack
        direction="column"
        sx={{ p: 4 }}
        justifyContent="center"
        alignItems="flex-start"
      >
        <EDForm
          {...{
            handleChange,
            handleSubmit,
            resetForm,
            sxObject,
            isSubForm: false,
            formArr: signUpFormArray,
            formName: FORMS.SIGNUP_FORM,
            path,
            isAPILoading,
          }}
        />
        <EDGrid container direction="row" justifyContent="space-around">
          <EDGrid item>
            <Link className="text-link" to="/login">
              Sign In
            </Link>
          </EDGrid>
        </EDGrid>
      </EDStack>
    </>
  );
};

export default SignUp;
