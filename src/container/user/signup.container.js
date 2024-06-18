import { useEffect } from "react";
import reduxFormActions from "../reduxFormActions.container";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataThunkFunc } from "../../utils/api/fetchData";
import { END_POINTS } from "../../utils/api/baseURLs";
import { API_POST, API_STATUS_SUCCESS, USER_FORMS } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import { formSXObject } from "../../description/forms/formsData.description";
import { trim } from "../../utils/javascript";
import useAbortController from "../../hooks/useAbortController";

const SignUpContainer = () => {
  const path = USER_FORMS.SIGNUP_PATH;

  const { handleChange, handleSubmit, resetForm } = reduxFormActions({ path });

  const form = useSelector((state) => state.dynamicForm?.[path]);
  const formData = useSelector((state) => state.dynamicFormData?.[path]);
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state.fetchData);
  const navigate = useNavigate();
  const abortController = useAbortController();
  const isAPILoading = apiData?.loading;

  useEffect(() => {
    if (form?.isFormValid) {
      let data = formData.reduce((accum, item) => {
        accum = item;
        return accum;
      }, {});

      const dispatchFunc = async () => {
        const response = await dispatch(
          fetchDataThunkFunc({
            url: END_POINTS.USER_SIGNUP,
            method: API_POST,
            bodyData: {
              name: trim(data?.name),
              email: trim(data?.email),
              password: trim(data?.password),
              role: trim(data?.userrole),
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
      return () => {
        resetForm(path, dispatch);
      };
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
    isAPILoading,
  };
};

export default SignUpContainer;
