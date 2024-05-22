import React from "react";
import { signUpFormArray } from "../../../description/loginforms.description";
import FormMainComp from "../../Form/FormMainComp";
import { ReduxFormActions } from "../../../container/reduxFormActions.container";

const SignIn = () => {
  const path = "SignUpForm";

  const { handleChange, handleSubmit, resetForm } = ReduxFormActions({ path });

  return (
    <>
      <div className="ms-5">
        <FormMainComp
          formArr={signUpFormArray}
          formName="Sign Up"
          className={"card shadow-lg p-3 sign-up-form"}
          isSubForm={false}
          {...{
            handleChange,
            handleSubmit,
            resetForm,

            path,
          }}
        />
      </div>
    </>
  );
};

export default SignIn;
