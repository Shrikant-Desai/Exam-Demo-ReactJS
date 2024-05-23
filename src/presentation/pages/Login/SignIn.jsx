import React from "react";
import { signInFormArray } from "../../../description/loginforms.description";
import FormMainComp from "../../Form/FormMainComp";
import EDBox from "../../../shared/EDBox";
import { ReduxFormActions } from "../../../container/reduxFormActions.container";
import EDStack from "../../../shared/EDStack";

const SignIn = () => {
  const path = "SignInForm";

  const { handleChange, handleSubmit, resetForm } = ReduxFormActions({ path });
  const sxObject = {
    sxMainForm: {
      width: 400,
      height: "100%",

      padding: "40px",
      borderRadius: "10px",
      boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
    },
    sxFormname: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "black",
      textAlign: "center",
      marginBottom: "20px",
    },
    //sx to center a box in mui

    sxSignInForm: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px",
    },
  };
  return (
    <>
      <EDBox sx={{ ...sxObject.sxSignInForm }}>
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
          }}
        />
      </EDBox>
    </>
  );
};

export default SignIn;
