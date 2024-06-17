import React from "react";
import newPasswordContainer from "../../container/user/newPassword.container";
import EDStack from "../../shared/EDStack";
import { newPasswordArray } from "../../description/forms/formsData.description";
import EDForm from "../../shared/form/EDForm";

const NewPassword = () => {
  const {
    handleChange,
    handleSubmit,
    resetForm,
    sxObject,
    path,
    isAPILoading,
  } = newPasswordContainer();

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
          <EDForm
            {...{
              handleChange,
              handleSubmit,
              resetForm,
              sxObject,
              isSubForm: false,
              formArr: newPasswordArray,
              formName: "Set Password",
              path,
              isAPILoading,
            }}
          />
        </EDStack>
      </EDStack>
    </EDStack>
  );
};

export default NewPassword;
