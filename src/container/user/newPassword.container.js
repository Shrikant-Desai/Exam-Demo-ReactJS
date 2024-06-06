import { useEffect } from "react";
import reduxFormActions from "../reduxFormActions.container";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataThunkFunc } from "../../utils/api/fetchData";
import { END_POINTS } from "../../utils/api/baseURLs";
import { API_STATUS_SUCCESS } from "../../utils/constant";
import { useNavigate, useSearchParams } from "react-router-dom";

const NewPasswordContainer = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const path = "NewPassWord";

  const token = searchParams.get("token");

  //sx to center a box in mui

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
          url: `${END_POINTS.NEW_PASSWORD}${token}`,
          method: "Post",
          bodyData: {
            Password: data?.password,
            ConfirmPassword: data?.confirmpassword,
          },
          isToastMessage: true,
        })
      );
    }
  }, [formData]);

  useEffect(() => {
    if (apiData?.data?.statusCode === API_STATUS_SUCCESS) {
      navigate(`/signin`);
    }
  }, [apiData]);

  const sxObject = {
    sxMainForm: {
      width: { xs: "70vw", sm: "50vw", md: "35vw", lg: "30vw" },
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

export default NewPasswordContainer;
