import { useEffect } from "react";
import { useSelector } from "react-redux";

const CreateExamContainer = () => {
  const examFormData = useSelector((state) => state.examFormData);
  useEffect(() => {
    console.log("CreateExamContainer");
    console.log(examFormData);
  }, [examFormData.createExam]);
  return {};
};

export default CreateExamContainer;
