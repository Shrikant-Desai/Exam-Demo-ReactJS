import React from "react";
import { loginFormArray } from "../../description/forms/formsData.description";
import EDStack from "../../shared/EDStack";
import { Link } from "react-router-dom";
import EDGrid from "../../shared/EDGrid";
import EDForm from "../../shared/form/EDForm";
import { FORMS } from "../../utils/constant";
import loginContainer from "../../container/user/login.container";

const Login = () => {
  const {
    handleChange,
    handleSubmit,
    resetForm,
    sxObject,
    path,
    isAPILoading,
  } = loginContainer();
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
            formArr: loginFormArray,
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

export default Login;
