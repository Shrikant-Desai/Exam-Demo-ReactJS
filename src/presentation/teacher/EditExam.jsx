import React from "react";
import EDExamCompMain from "../../shared/EDExamCompMain";
import editExamContainer from "../../container/teacher/editExam.container";
import { ACTION } from "../../description/examForm.description";

const EditExam = () => {
  const { examDetailsObject, questionArr, apiData } = editExamContainer();

  if (!apiData?.loading) {
    return (
      <>
        <EDExamCompMain
          examDetailsArr={examDetailsObject}
          questionsArr={questionArr}
          action={ACTION.EDIT_EXAM}
          formName="Edit Exam"
        />
      </>
    );
  }
};

export default EditExam;
