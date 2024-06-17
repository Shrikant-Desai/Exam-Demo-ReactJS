import React from "react";
import { signInFormArray } from "../../description/forms/formsData.description";
import EDStack from "../../shared/EDStack";
import { Link } from "react-router-dom";
import EDGrid from "../../shared/EDGrid";
import signInContainer from "../../container/user/signin.container";
import EDForm from "../../shared/form/EDForm";
import { FORMS } from "../../utils/constant";

const SignIn = () => {
  const {
    handleChange,
    handleSubmit,
    resetForm,
    sxObject,
    path,
    isAPILoading,
  } = signInContainer();
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
            formArr: signInFormArray,
            formName: FORMS.LOGIN_FORM,
            path,
            isAPILoading,
          }}
        />
        <EDGrid container direction="row" justifyContent="space-around">
          <EDGrid item>
            <Link className="text-link" to="/signup">
              New User ? SignUp Here
            </Link>
          </EDGrid>
          <EDGrid item>
            <Link className="text-link" to="/forgot-password">
              Forgot Password
            </Link>
          </EDGrid>
        </EDGrid>
      </EDStack>
    </>
  );
};

export default SignIn;
