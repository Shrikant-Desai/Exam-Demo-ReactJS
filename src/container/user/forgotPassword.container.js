import { useEffect } from "react";
import reduxFormActions from "../reduxFormActions.container";
import { fetchDataThunkFunc } from "../../utils/api/fetchData";
import { useDispatch, useSelector } from "react-redux";
import { API_POST, API_STATUS_SUCCESS, USER_FORMS } from "../../utils/constant";
import { END_POINTS } from "../../utils/api/baseURLs";
import { useNavigate } from "react-router-dom";
import { formSXObject } from "../../description/forms/formsData.description";

const ForgotPasswordContainer = () => {
  const path = USER_FORMS.EDIT_PROFILE_PATH;

  const form = useSelector((state) => state.dynamicForm?.[path]);
  const formData = useSelector((state) => state.dynamicFormData?.[path]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const apiData = useSelector((state) => state.fetchData);
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
            url: END_POINTS.USER_FORGOT_PASSWORD,
            method: API_POST,
            bodyData: {
              email: data?.email,
            },
            isToastMessage: true,
            navigate,
          })
        );
        if (response?.payload?.data?.statusCode === API_STATUS_SUCCESS) {
          resetForm(path, dispatch);
        }
      };
      dispatchFunc();
    }
  }, [formData]);

  const { handleChange, handleSubmit, resetForm } = reduxFormActions({ path });
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

export default ForgotPasswordContainer;
