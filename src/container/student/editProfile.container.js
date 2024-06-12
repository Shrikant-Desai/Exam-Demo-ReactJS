import { useEffect } from "react";
import reduxFormActions from "../reduxFormActions.container";
import { fetchDataThunkFunc } from "../../utils/api/fetchData";
import { useDispatch, useSelector } from "react-redux";
import {
  API_POST,
  API_PUT,
  API_STATUS_SUCCESS,
  USER_FORMS,
} from "../../utils/constant";
import { END_POINTS } from "../../utils/api/baseURLs";
import { useNavigate } from "react-router-dom";

const EditProfileContainer = () => {
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

      const response = dispatch(
        fetchDataThunkFunc({
          url: END_POINTS.UPDATE_STUDENT_PROFILE,
          method: API_PUT,
          bodyData: {
            name: data?.name,
          },
          isToastMessage: true,
        })
      );
      response.then(() => {
        if (apiData?.data?.statusCode === API_STATUS_SUCCESS) {
          const loginDetails = JSON.parse(localStorage.getItem("loginDetails"));
          loginDetails.name = data?.name;
          localStorage.setItem("loginDetails", JSON.stringify(loginDetails));
          navigate(-1);
        }
      });
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

export default EditProfileContainer;
