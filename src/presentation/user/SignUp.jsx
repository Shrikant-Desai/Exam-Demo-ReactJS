import React from "react";
import FormMainComp from "../form/FormMainComp";
import EDGrid from "../../shared/EDGrid";
import { Link } from "react-router-dom";
import EDStack from "../../shared/EDStack";
import signUpContainer from "../../container/user/signup.container";
import { signUpFormArray } from "../../description/formsData.description";

const SignUp = () => {
  const { handleChange, handleSubmit, resetForm, sxObject, path } =
    signUpContainer();

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
            formArr: signUpFormArray,
            formName: "Sign Up",
            path,
          }}
        />
        <EDGrid container direction="row" justifyContent="space-around">
          <EDGrid item>
            <Link className="text-link" to="/signin">
              Sign In
            </Link>
          </EDGrid>
        </EDGrid>
      </EDStack>
    </>
  );
};

export default SignUp;
