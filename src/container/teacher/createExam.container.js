import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { END_POINTS } from "../../utils/api/baseURLs";
import { fetchDataThunkFunc } from "../../utils/api/fetchData";
import { deleteExamFormData } from "../../redux/slices/examForm.slice";
import { API_POST, API_STATUS_SUCCESS } from "../../utils/constant";
import { useNavigate } from "react-router-dom";

const CreateExamContainer = () => {
  const dispatch = useDispatch();
  const examFormData = useSelector((state) => state.examFormData);
  const navigate = useNavigate();
  const apiData = useSelector((state) => state.fetchData);
  useEffect(() => {
    if (examFormData?.createExam) {
      const response = dispatch(
        fetchDataThunkFunc({
          url: END_POINTS.CREATE_EXAM,
          method: API_POST,
          bodyData: examFormData?.createExam,
          isToastMessage: true,
          navigate,
        })
      );
      response.then(() => {
        if (apiData?.data?.statusCode === API_STATUS_SUCCESS) {
          navigate("/dashboard");
        }
      });

      dispatch(deleteExamFormData());
    }
  }, [examFormData?.createExam]);

  useEffect(() => {
    const unloadCallback = (event) => {
      event.preventDefault();
      event.returnValue = "";
      return "";
    };

    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
  }, []);

  const handleClickToPrevRoute = () => {
    navigate(-1);
  };
  return { handleClickToPrevRoute, apiData };
};

export default CreateExamContainer;
