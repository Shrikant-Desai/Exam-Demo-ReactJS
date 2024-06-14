import { useState } from "react";

import { useEffect } from "react";
import reduxFormActions from "../reduxFormActions.container";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataThunkFunc } from "../../utils/api/fetchData";
import { END_POINTS } from "../../utils/api/baseURLs";
import { useNavigate } from "react-router-dom";
import {
  API_POST,
  API_STATUS_SUCCESS,
  LOCAL_LOGIN_DETAILS,
  USER_FORMS,
} from "../../utils/constant";
import { formSXObject } from "../../description/forms/formsData.description";

const ResetPasswordContainer = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = !!localStorage.getItem(LOCAL_LOGIN_DETAILS);
    isLoggedIn ? setIsLogin(true) : navigate("/signin");
  }, []);

  const path = USER_FORMS.RESET_PASSWORD_PATH;
  const apiData = useSelector((state) => state.fetchData);
  const isAPILoading = apiData?.loading;

  const { handleChange, handleSubmit, resetForm } = reduxFormActions({ path });

  const form = useSelector((state) => state.dynamicForm?.[path]);
  const formData = useSelector((state) => state.dynamicFormData?.[path]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (form?.isFormValid) {
      let data = formData.reduce((accum, item) => {
        accum = item;
        return accum;
      }, {});

      const dispatchFunc = async () => {
        const response = await dispatch(
          fetchDataThunkFunc({
            url: `${END_POINTS.RESET_PASSWORD}`,
            method: API_POST,
            bodyData: {
              oldPassword: data?.oldpassword,
              Password: data?.password,
              ConfirmPassword: data?.confirmpassword,
            },
            isToastMessage: true,
            navigate,
          })
        );
        if (response?.payload?.data?.statusCode === API_STATUS_SUCCESS) {
          navigate(-1);

          resetForm(path, dispatch);
        }
      };
      dispatchFunc();
    }
  }, [formData]);

  useEffect(() => {
    return () => {
      resetForm(path, dispatch);
    };
  }, []);

  const sxObject = formSXObject;

  return {
    handleChange,
    handleSubmit,
    resetForm,
    sxObject,
    path,
    isLogin,
    isAPILoading,
  };
};

export default ResetPasswordContainer;
