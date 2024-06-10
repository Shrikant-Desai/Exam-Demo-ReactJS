import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { END_POINTS } from "../../utils/api/baseURLs";
import { fetchDataThunkFunc } from "../../utils/api/fetchData";
import { deleteExamFormData } from "../../redux/slices/examForm.slice";

const CreateExamContainer = () => {
  const dispatch = useDispatch();
  const examFormData = useSelector((state) => state.examFormData);

  useEffect(() => {
    if (examFormData?.createExam) {
      dispatch(
        fetchDataThunkFunc({
          url: END_POINTS.CREATE_EXAM,
          method: "Post",
          bodyData: examFormData?.createExam,
          isToastMessage: true,
        })
      );
      dispatch(deleteExamFormData());
    }
  }, [examFormData?.createExam]);

  return {};
};

export default CreateExamContainer;
