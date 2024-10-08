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
import { formSXObject } from "../../description/forms/formsData.description";
import { addAPIData } from "../../redux/slices/apisData.slice";
import { trim } from "../../utils/javascript";
import useAbortController from "../../hooks/useAbortController";

const LoginContainer = () => {
  const navigate = useNavigate();
  const path = USER_FORMS.LOGIN_PATH;

  const { handleChange, handleSubmit, resetForm } = reduxFormActions({ path });

  const form = useSelector((state) => state.dynamicForm?.[path]);
  const formData = useSelector((state) => state.dynamicFormData?.[path]);
  const dispatch = useDispatch();
  const abortController = useAbortController();
  const apiData = useSelector((state) => state.fetchData);

  useEffect(() => {
    if (form?.isFormValid) {
      let data = formData.reduce((accum, item) => {
        accum = item;
        return accum;
      }, {});

      const dispatchFunc = async () => {
        const response = await dispatch(
          fetchDataThunkFunc({
            url: END_POINTS.USER_LOGIN,
            method: API_POST,
            bodyData: {
              email: trim(data?.email),
              password: trim(data?.password),
            },
            isToastMessage: true,
            navigate,
            signal: abortController.signal,
          })
        );
        if (response?.payload?.data?.statusCode === API_STATUS_SUCCESS) {
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
      navigate(`/dashboard`);
      dispatch(
        addAPIData({
          name: "Username",
          data: [apiData?.data?.data?.name],
        })
      );
    }
  }, [apiData]);

  const isAPILoading = apiData?.loading;

  const sxObject = formSXObject;

  return {
    handleChange,
    handleSubmit,
    resetForm,
    sxObject,
    path,
    isAPILoading,
  };
};

export default LoginContainer;
