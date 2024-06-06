import React from "react";

import FormMainComp from "../form/FormMainComp";
import EDStack from "../../shared/EDStack";
import { resetPasswordArray } from "../../description/formsData.description";

import { Link } from "react-router-dom";
import resetPasswordContainer from "../../container/user/resetPassword.container";

const ResetPassword = () => {
  const {
    handleChange,
    handleSubmit,
    resetForm,
    sxObject,
    path,
    isLogin,
    isAPILoading,
  } = resetPasswordContainer();

  if (isLogin) {
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
                formArr: resetPasswordArray,
                formName: "Forgot Password",
                path,
                isAPILoading,
              }}
            />
            <EDStack direction="row" justifyContent="space-between">
              <Link className="text-link" to="/dashboard">
                Go back
              </Link>
            </EDStack>
          </EDStack>
        </EDStack>
      </EDStack>
    );
  }
};

export default ResetPassword;
