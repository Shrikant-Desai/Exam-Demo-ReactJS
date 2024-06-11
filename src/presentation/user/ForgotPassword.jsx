import React from "react";
import { forgotPasswordForm } from "../../description/formsData.description";
import FormMainComp from "../../shared/form/FormMainComp";
import EDStack from "../../shared/EDStack";
import { Link } from "react-router-dom";
import forgotPasswordContainer from "../../container/user/forgotPassword.container";

const ForgotPassword = () => {
  const {
    handleChange,
    handleSubmit,
    resetForm,
    sxObject,
    path,
    isAPILoading,
  } = forgotPasswordContainer();

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
              isAPILoading,
            }}
          />
          <EDStack direction="row" justifyContent="space-between">
            <Link className="text-link" to="/signin">
              Go back
            </Link>
          </EDStack>
        </EDStack>
      </EDStack>
    </EDStack>
  );
};

export default ForgotPassword;
