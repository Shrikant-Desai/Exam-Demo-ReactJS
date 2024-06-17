import { useEffect } from "react";
import reduxFormActions from "../reduxFormActions.container";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataThunkFunc } from "../../utils/api/fetchData";
import { END_POINTS } from "../../utils/api/baseURLs";
import { API_POST, API_STATUS_SUCCESS, USER_FORMS } from "../../utils/constant";
import { useNavigate, useSearchParams } from "react-router-dom";
import { formSXObject } from "../../description/forms/formsData.description";
import { trim } from "../../utils/javascript";

const NewPasswordContainer = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const path = USER_FORMS.NEW_PASSWORD_PATH;

  const token = searchParams.get("token");

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
      const controller = new AbortController();
      const signal = controller.signal;
      const dispatchFunc = async () => {
        const response = await dispatch(
          fetchDataThunkFunc({
            url: `${END_POINTS.NEW_PASSWORD}${token}`,
            method: API_POST,
            bodyData: {
              Password: trim(data?.password),
              ConfirmPassword: trim(data?.confirmpassword),
            },
            isToastMessage: true,
            navigate,
            signal,
          })
        );
        if (response?.payload?.data?.statusCode === API_STATUS_SUCCESS) {
          resetForm(path, dispatch);
          navigate(`/signin`);
        }
      };
      dispatchFunc();
      return () => {
        controller.abort();
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

export default NewPasswordContainer;
