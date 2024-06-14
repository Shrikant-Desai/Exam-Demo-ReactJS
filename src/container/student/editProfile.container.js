import { useEffect } from "react";
import reduxFormActions from "../reduxFormActions.container";
import { fetchDataThunkFunc } from "../../utils/api/fetchData";
import { useDispatch, useSelector } from "react-redux";
import {
  API_PUT,
  API_STATUS_SUCCESS,
  LOCAL_LOGIN_DETAILS,
  USER_FORMS,
} from "../../utils/constant";
import { END_POINTS } from "../../utils/api/baseURLs";
import { useNavigate } from "react-router-dom";
import { formSXObject } from "../../description/forms/formsData.description";
import { addAPIData } from "../../redux/slices/apisData.slice";

const EditProfileContainer = () => {
  const path = USER_FORMS.EDIT_PROFILE_PATH;

  const form = useSelector((state) => state.dynamicForm?.[path]);
  const formData = useSelector((state) => state.dynamicFormData?.[path]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const apiData = useSelector((state) => state.fetchData);
  const isAPILoading = apiData?.loading;
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    if (form?.isFormValid) {
      let data = formData.reduce((accum, item) => {
        accum = item;
        return accum;
      }, {});

      const response = dispatch(
        fetchDataThunkFunc({
          url: END_POINTS.UPDATE_STUDENT_PROFILE,
          method: API_PUT,
          bodyData: {
            name: data?.name,
          },
          isToastMessage: true,
          navigate,
          signal,
        })
      );
      response.then(() => {
        if (apiData?.data?.statusCode === API_STATUS_SUCCESS) {
          const loginDetails = JSON.parse(
            localStorage.getItem(LOCAL_LOGIN_DETAILS)
          );
          loginDetails.name = data?.name;
          localStorage.setItem(
            LOCAL_LOGIN_DETAILS,
            JSON.stringify(loginDetails)
          );
          resetForm(path, dispatch);
          navigate(-1);
        }
      });
      return () => {
        controller.abort();
      };
    }
  }, [formData]);

  useEffect(() => {
    return () => {
      resetForm(path, dispatch);
      dispatch(
        addAPIData({
          name: "Username",
          data: [JSON.parse(localStorage.getItem(LOCAL_LOGIN_DETAILS))?.name],
        })
      );
    };
  }, []);

  const { handleChange, handleSubmit, resetForm } = reduxFormActions({ path });
  const customHandleChange = (
    e,
    path,
    formArray,
    formErrorsState,
    formDataState,
    dispatch
  ) => {
    dispatch(
      addAPIData({
        name: "Username",
        data: [e.target.value],
      })
    );
    handleChange(e, path, formArray, formErrorsState, formDataState, dispatch);
  };
  const sxObject = formSXObject;
  return {
    customHandleChange,
    handleSubmit,
    resetForm,
    sxObject,
    path,
    isAPILoading,
  };
};

export default EditProfileContainer;
