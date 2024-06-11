import { useEffect } from "react";
import reduxFormActions from "../reduxFormActions.container";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataThunkFunc } from "../../utils/api/fetchData";
import { useNavigate } from "react-router-dom";
import {
  API_POST,
  API_STATUS_SUCCESS,
  LOCAL_AUTH_TOKEN,
  LOCAL_LOGIN_DETAILS,
  USER_FORMS,
} from "../../utils/constant";
import { END_POINTS } from "../../utils/api/baseURLs";

const SignInContainer = () => {
  const navigate = useNavigate();
  const path = USER_FORMS.LOGIN_PATH;

  const { handleChange, handleSubmit, resetForm } = reduxFormActions({ path });

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
          url: END_POINTS.USER_LOGIN,
          method: API_POST,
          bodyData: {
            email: data?.email,
            password: data?.password,
          },
          isToastMessage: true,
        })
      );
    }
  }, [formData]);

  useEffect(() => {
    if (
      apiData?.data?.data?.token &&
      apiData?.data?.statusCode === API_STATUS_SUCCESS
    ) {
      localStorage.setItem(
        LOCAL_AUTH_TOKEN,
        JSON.stringify(apiData?.data?.data?.token)
      );
      localStorage.setItem(
        LOCAL_LOGIN_DETAILS,
        JSON.stringify(apiData?.data?.data)
      );
      navigate(`/dashboard/${apiData?.data?.data?.role}`);
    }
  }, [apiData]);

  const isAPILoading = apiData?.loading;

  const sxObject = {
    sxMainForm: {
      width: { xs: "70vw", sm: "50vw", md: "35vw", lg: "25vw" },
      height: "100%",
      padding: "10px",
      borderRadius: "10px",
      // boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
    },
    sxFormname: {
      fontSize: "40px",
      fontWeight: "bold",
      color: "black",
      textAlign: "center",
      marginBottom: "20px",
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

export default SignInContainer;
