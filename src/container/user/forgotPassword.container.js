import { useEffect } from "react";
import reduxFormActions from "../reduxFormActions.container";
import { fetchDataThunkFunc } from "../../utils/api/fetchData";
import { useDispatch, useSelector } from "react-redux";
import { API_POST, USER_FORMS } from "../../utils/constant";
import { END_POINTS } from "../../utils/api/baseURLs";
import { useNavigate } from "react-router-dom";

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

      dispatch(
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
    }
  }, [formData]);

  const { handleChange, handleSubmit, resetForm } = reduxFormActions({ path });
  const sxObject = {
    sxMainForm: {
      width: { xs: "70vw", sm: "50vw", md: "35vw" },
      height: "100%",
      padding: "10px",
      borderRadius: "10px",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
    },
    sxFormname: {
      fontSize: "40px",
      fontWeight: "bold",
      color: "black",
      textAlign: "center",
      marginBottom: "20px",
    },
    //sx to center a box in mui
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

export default ForgotPasswordContainer;
