import React from "react";
import EDStack from "../../shared/EDStack";
import { resetPasswordArray } from "../../description/forms/formsData.description";

import { Link } from "react-router-dom";
import resetPasswordContainer from "../../container/user/resetPassword.container";
import { KeyboardBackspace } from "@mui/icons-material";
import EDForm from "../../shared/form/EDForm";
import { FORMS } from "../../utils/constant";

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
            <EDForm
              {...{
                handleChange,
                handleSubmit,
                resetForm,
                sxObject,
                isSubForm: false,
                formArr: resetPasswordArray,
                formName: FORMS.RESET_PASSWORD_FORM,
                path,
                isAPILoading,
              }}
            />
            <EDStack direction="row" justifyContent="space-between">
              <Link className="text-link" to={-1}>
                <KeyboardBackspace />
              </Link>
            </EDStack>
          </EDStack>
        </EDStack>
      </EDStack>
    );
  }
};

export default ResetPassword;
