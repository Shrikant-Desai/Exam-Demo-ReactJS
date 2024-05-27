import React, { useEffect } from "react";
import { ReduxFormActions } from "../reduxFormActions.container";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataThunkFunc } from "../../utils/api/fetchData";
import { Navigate } from "react-router-dom";

const SignUpContainer = () => {
  const path = "SignUpForm";

  const { handleChange, handleSubmit, resetForm } = ReduxFormActions({ path });

  const form = useSelector((state) => state.dynamicForm?.[path]);
  const formData = useSelector((state) => state.dynamicFormData?.[path]);
  const dispatch = useDispatch();

  const apiData = useSelector((state) => state.fetchData);

  useEffect(() => {
    if (form?.isFormValid) {
      let data = formData.reduce((accum, item) => {
        accum = item;
        return accum;
      }, {});

      dispatch(
        fetchDataThunkFunc({
          url: "/users/SignUp",
          method: "Post",
          bodyData: {
            name: data?.name,
            email: data?.email,
            password: data?.password,
            role: data?.userrole,
          },
        })
      );
      console.log(data);
    }
  }, [formData]);

  // if (apiData.data.statusCode === 200) {
  //   <Navigate to="/dashboard/student" />;
  // }

  const sxObject = {
    sxMainForm: {
      width: { xs: "70vw", sm: "50vw", md: "40vw" },
      height: "100%",
      padding: "10px",
      borderRadius: "10px",
      // boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
    },
    sxFormname: {
      fontSize: "40px",
      fontWeight: "bold",
      color: "black",
      textAlign: "center",
      marginBottom: "20px",
    },
    sxSignUpForm: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return { handleChange, handleSubmit, resetForm, sxObject, path };
};

export default SignUpContainer;
