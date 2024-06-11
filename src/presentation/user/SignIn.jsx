import React from "react";
import { signInFormArray } from "../../description/formsData.description";
import FormMainComp from "../../shared/form/FormMainComp";
import EDStack from "../../shared/EDStack";
import { Link } from "react-router-dom";
import EDGrid from "../../shared/EDGrid";
import signInContainer from "../../container/user/signin.container";

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
        <FormMainComp
          {...{
            handleChange,
            handleSubmit,
            resetForm,
            sxObject,
            isSubForm: false,
            formArr: signInFormArray,
            formName: "Sign In",
            path,
            isAPILoading,
          }}
        />
        <EDGrid container direction="row" justifyContent="space-around">
          <EDGrid item>
            <Link className="text-link" to="/signup">
              Sign Up Here
            </Link>
          </EDGrid>
          <EDGrid item>
            <Link className="text-link" to="/forgot-password">
              Forgot Password?
            </Link>
          </EDGrid>
        </EDGrid>
      </EDStack>
    </>
  );
};

export default SignIn;
