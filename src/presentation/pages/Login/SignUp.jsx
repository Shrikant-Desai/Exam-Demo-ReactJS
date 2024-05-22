import React from "react";
import { signUpFormArray } from "../../../description/loginforms.description";
import FormMainComp from "../../Form/FormMainComp";
import { ReduxFormActions } from "../../../container/reduxFormActions.container";
import EDBox from "../../../shared/EDBox";
import { styled } from "@mui/material";

const SignUp = () => {
  const path = "SignUpForm";

  const { handleChange, handleSubmit, resetForm } = ReduxFormActions({ path });

  const CustomForm = styled(FormMainComp)`
    .mainFormCard {
      background-color: blue;
    }
  `;
  return (
    <>
      <EDBox sx={{ ml: 3 }}>
        <CustomForm
          formArr={signUpFormArray}
          formName="Sign Up"
          isSubForm={false}
          {...{
            handleChange,
            handleSubmit,
            resetForm,

            path,
          }}
        />
      </EDBox>
    </>
  );
};

export default SignUp;
