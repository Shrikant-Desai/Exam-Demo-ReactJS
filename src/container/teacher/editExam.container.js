import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { fetchDataThunkFunc } from "../../utils/api/fetchData";
import { END_POINTS } from "../../utils/api/baseURLs";
import { QUESTIONS_INIT_ARRAY } from "../../description/forms/examForm.description";
import { deleteExamFormData } from "../../redux/slices/examForm.slice";
import { API_GET, API_PUT, API_STATUS_SUCCESS } from "../../utils/constant";
import useAbortController from "../../hooks/useAbortController";

const EditExamContainer = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = searchParams.get("id");
  const location = useLocation();
  const data = JSON.parse(location.state)?.[0];
  const examFormData = useSelector((state) => state.examFormData);
  const [questionArr, setQuestionArr] = React.useState(QUESTIONS_INIT_ARRAY);
  const apiData = useSelector((state) => state.fetchData);
  const abortController = useAbortController();
  useEffect(() => {
    if (apiData.data?.data?.questions) {
      const updatedData = apiData.data?.data?.questions.map((item) => {
        return {
          question: item.question,
          answer: item.answer,
          options: item.options,
          answerIndex: item.options.indexOf(item.answer),
        };
      });
      setQuestionArr(updatedData);
    }
  }, [apiData]);

  useEffect(() => {
    dispatch(
      fetchDataThunkFunc({
        url: `${END_POINTS.VIEW_SINGLE_EXAM}${id}`,
        method: API_GET,
        isToastMessage: false,
        navigate,
        signal: abortController.signal,
      })
    );
  }, []);

  useEffect(() => {
    if (examFormData?.editExam) {
      const response = dispatch(
        fetchDataThunkFunc({
          url: `${END_POINTS.EDIT_EXAM}${id}`,
          method: API_PUT,
          bodyData: examFormData?.editExam,
          isToastMessage: true,
          navigate,
        })
      );
      dispatch(deleteExamFormData());
      response.then(() => {
        if (apiData?.data?.statusCode === API_STATUS_SUCCESS) {
          navigate("/dashboard");
        }
      });
    }
  }, [examFormData?.editExam]);

  const examDetailsObject = {
    subjectName: data?.subjectName,
    notes: data?.notes?.[0],
    allQuestionValidError: "",
  };

  return { examDetailsObject, questionArr, apiData };
};

export default EditExamContainer;
