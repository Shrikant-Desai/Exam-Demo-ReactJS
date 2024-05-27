import React from "react";
import {
  forgotPasswordForm,
  signInFormArray,
} from "../../description/userModuleForms.description";
import FormMainComp from "../form/FormMainComp";
import { ReduxFormActions } from "../../container/reduxFormActions.container";
import EDStack from "../../shared/EDStack";
import { Link } from "react-router-dom";
import ForgotPasswordContainer from "../../container/user/forgotPassword.container";

const ForgotPassword = () => {
  const { handleChange, handleSubmit, resetForm, sxObject, path } =
    ForgotPasswordContainer();

  return (
    <EDStack
      sx={{
        height: "100vh",
      }}
      justifyContent="center"
      alignItems="center"
    >
      <EDStack
        sx={{
          boxShadow: 3,
          borderRadius: 3,
          //   backgroundColor: "rgba(255, 255, 255,0.5)",
          backdropFilter: `blur(10px)`,
        }}
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <EDStack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          sx={{ p: 4 }}
        >
          <FormMainComp
            {...{
              handleChange,
              handleSubmit,
              resetForm,
              sxObject,
              isSubForm: false,
              formArr: forgotPasswordForm,
              formName: "Forgot Password",
              path,
            }}
          />
          <EDStack direction="row" justifyContent="space-between">
            <Link className="text-link" to="/">
              Go back
            </Link>
          </EDStack>
        </EDStack>
      </EDStack>
    </EDStack>
  );
};

export default ForgotPassword;
