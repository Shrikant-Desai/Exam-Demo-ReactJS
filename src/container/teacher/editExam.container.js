import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { fetchDataThunkFunc } from "../../utils/api/fetchData";
import { END_POINTS } from "../../utils/api/baseURLs";
import { QUESTIONS_INIT_ARRAY } from "../../description/examForm.description";
import { deleteExamFormData } from "../../redux/slices/examForm.slice";
import { API_GET, API_PUT } from "../../utils/constant";

const EditExamContainer = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const id = searchParams.get("id");
  const location = useLocation();
  const data = JSON.parse(location.state)?.[0];
  const examFormData = useSelector((state) => state.examFormData);
  const [questionArr, setQuestionArr] = React.useState(QUESTIONS_INIT_ARRAY);
  const apiData = useSelector((state) => state.fetchData);

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
      })
    );
  }, []);

  useEffect(() => {
    if (examFormData?.editExam) {
      dispatch(
        fetchDataThunkFunc({
          url: `${END_POINTS.EDIT_EXAM}${id}`,
          method: API_PUT,
          bodyData: examFormData?.editExam,
          isToastMessage: true,
        })
      );
      dispatch(deleteExamFormData());
    }
  }, [examFormData?.editExam]);

  const examDetailsObject = {
    subjectName: data?.subjectName,
    description: data?.notes?.[0],
    allQuestionValidError: "",
  };

  return { examDetailsObject, questionArr, apiData };
};

export default EditExamContainer;
