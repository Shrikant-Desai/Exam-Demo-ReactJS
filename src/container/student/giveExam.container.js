import { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { fetchDataThunkFunc } from "../../utils/api/fetchData";
import { END_POINTS } from "../../utils/api/baseURLs";
import {
  EXAMDETAILS_INIT_ARRAY,
  QUESTIONS_INIT_ARRAY,
} from "../../description/forms/examForm.description";
import { deleteExamFormData } from "../../redux/slices/examForm.slice";
import { API_GET, API_POST, API_STATUS_SUCCESS } from "../../utils/constant";
import useAbortController from "../../hooks/useAbortController";

const GiveExamContainer = () => {
  // const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = searchParams.get("id");
  const location = useLocation();
  const data = JSON.parse(location.state);

  const examFormData = useSelector((state) => state.examFormData);
  const [examDetailsObject, setExamDetailsObject] = useState(
    EXAMDETAILS_INIT_ARRAY
  );
  const [questionArr, setQuestionArr] = useState(QUESTIONS_INIT_ARRAY);
  const apiData = useSelector((state) => state.fetchData);
  const abortController = useAbortController();

  useLayoutEffect(() => {
    if (data) {
      setExamDetailsObject({
        subjectName: data?.[0]?.subjectName,
        notes: data?.[0]?.notes?.[0],
        allQuestionValidError: "",
      });
    }
  }, []);

  useEffect(() => {
    const dispatchFunc = async () => {
      const response = await dispatch(
        fetchDataThunkFunc({
          url: `${END_POINTS.EXAM_PAPER}${id}`,
          method: API_GET,
          isToastMessage: false,
          navigate,
          signal: abortController.signal,
        })
      );
      const updatedData = response?.payload?.data?.data?.map((item) => {
        return {
          question: item.question,
          answerIndex: "",
          answer: "",
          options: item.options,
        };
      });
      setQuestionArr(updatedData);
    };
    dispatchFunc();
  }, []);

  useEffect(() => {
    if (examFormData?.giveExam) {
      const tempDataArray = examFormData?.giveExam?.questions?.map((item) => {
        return {
          question: item.question,
          answer: item.answer,
        };
      });
      const response = dispatch(
        fetchDataThunkFunc({
          url: `${END_POINTS.GIVE_EXAM}${id}`,
          method: API_POST,
          bodyData: tempDataArray,
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
  }, [examFormData?.giveExam]);

  const handleClickToPrevRoute = () => {
    navigate(-1);
  };

  return {
    examDetailsObject,
    questionArr,
    apiData,
    data,
    handleClickToPrevRoute,
  };
};

export default GiveExamContainer;
