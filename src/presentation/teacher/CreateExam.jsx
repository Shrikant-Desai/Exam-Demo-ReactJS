import React from "react";
import EDExamCompMain from "../../shared/EDExamCompMain";
import {
  EXAMDETAILS_INIT_ARRAY,
  QUESTIONS_INIT_ARRAY,
} from "../../description/examForm.description";

const CreateExam = () => {
  return (
    <>
      <EDExamCompMain
        examDetailsArr={EXAMDETAILS_INIT_ARRAY}
        questionsArr={QUESTIONS_INIT_ARRAY}
        action="createExam"
        formName="Create Exam"
      />
    </>
  );
};

export default CreateExam;
