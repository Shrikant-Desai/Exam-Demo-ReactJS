import { useEffect } from "react";
import reduxFormActions from "../reduxFormActions.container";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataThunkFunc } from "../../utils/api/fetchData";
import { END_POINTS } from "../../utils/api/baseURLs";

const SignUpContainer = () => {
  const path = "SignUpForm";

  const { handleChange, handleSubmit, resetForm } = reduxFormActions({ path });

  const form = useSelector((state) => state.dynamicForm?.[path]);
  const formData = useSelector((state) => state.dynamicFormData?.[path]);
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.fetchData);
  const isAPILoading = apiData?.loading;
  useEffect(() => {
    if (form?.isFormValid) {
      let data = formData.reduce((accum, item) => {
        accum = item;
        return accum;
      }, {});

      dispatch(
        fetchDataThunkFunc({
          url: END_POINTS.USER_SIGNUP,
          method: "Post",
          bodyData: {
            name: data?.name,
            email: data?.email,
            password: data?.password,
            role: data?.userrole,
          },
          isToastMessage: true,
        })
      );
    }
  }, [formData]);

  const sxObject = {
    sxMainForm: {
      width: { xs: "70vw", sm: "50vw", md: "40vw", lg: "30vw" },
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

  return {
    handleChange,
    handleSubmit,
    resetForm,
    sxObject,
    path,
    isAPILoading,
  };
};

export default SignUpContainer;
