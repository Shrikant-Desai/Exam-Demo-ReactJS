import React from "react";
import EDExamCompMain from "../../shared/EDExamCompMain";
import editExamContainer from "../../container/teacher/editExam.container";

const EditExam = () => {
  const { examDetailsObject, questionArr, apiData } = editExamContainer();

  if (!apiData?.loading) {
    return (
      <>
        <EDExamCompMain
          examDetailsArr={examDetailsObject}
          questionsArr={questionArr}
          action="editExam"
          formName="Edit Exam"
        />
      </>
    );
  }
};

export default EditExam;
