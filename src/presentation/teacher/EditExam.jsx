import React from "react";
import EDExamCompMain from "../../shared/EDExamCompMain";
import editExamContainer from "../../container/teacher/editExam.container";
import { ACTION } from "../../description/forms/examForm.description";
import { FORMS } from "../../utils/constant";
import Glimmer from "../../shared/loader/Glimmer";

const EditExam = () => {
  const { examDetailsObject, questionArr, apiData } = editExamContainer();

  return !apiData?.loading ? (
    <>
      <EDExamCompMain
        examDetailsArr={examDetailsObject}
        questionsArr={questionArr}
        action={ACTION.EDIT_EXAM}
        formName={FORMS.EDIT_EXAM}
      />
    </>
  ) : (
    <Glimmer />
  );
};

export default EditExam;
