import React from "react";
import { signUpFormArray } from "../../../description/loginforms.description";
import FormMainComp from "../../Form/FormMainComp";
import { ReduxFormActions } from "../../../container/reduxFormActions.container";
import EDBox from "../../../shared/EDBox";

const SignUp = () => {
  const path = "SignUpForm";

  const { handleChange, handleSubmit, resetForm } = ReduxFormActions({ path });

  // const CustomForm = styled(FormMainComp)`
  //   .mainFormCard {
  //     background-color: #d3e2f2;
  //   }
  // `;

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
    sxSignUpForm: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px",
    },
  };
  return (
    <>
      <EDBox sx={{ ...sxObject.sxSignUpForm }}>
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
      </EDBox>
    </>
  );
};

// <EDBox sx={{ ml: 3 }}>
//   <CustomForm
//     {...{
//       handleChange,
//       handleSubmit,
//       resetForm,
//       sxObject,
//       isSubForm: false,
//       formArr: signUpFormArray,
//       formName: "Sign Up",
//       path,
//     }}
//   />
// </EDBox>
// </>
export default SignUp;
