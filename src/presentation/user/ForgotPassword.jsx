import React from "react";
import { forgotPasswordFormArray } from "../../description/forms/formsData.description";
import EDStack from "../../shared/EDStack";
import { Link } from "react-router-dom";
import forgotPasswordContainer from "../../container/user/forgotPassword.container";
import { KeyboardBackspace } from "@mui/icons-material";
import EDForm from "../../shared/form/EDForm";
import { FORMS } from "../../utils/constant";

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
          <EDStack direction="row" justifyContent="space-between">
            <Link className="text-link" to="/login">
              <KeyboardBackspace />
            </Link>
          </EDStack>
          <EDForm
            {...{
              handleChange,
              handleSubmit,
              resetForm,
              sxObject,
              isSubForm: false,
              formArr: forgotPasswordFormArray,
              formName: FORMS.FORGOT_PASSWORD_FORM,
              path,
              isAPILoading,
            }}
          />
        </EDStack>
      </EDStack>
    </EDStack>
  );
};

export default ForgotPassword;
