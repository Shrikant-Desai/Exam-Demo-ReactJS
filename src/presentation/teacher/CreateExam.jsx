import React from "react";
import EDExamCompMain from "../../shared/EDExamCompMain";
import {
  ACTION,
  EXAMDETAILS_INIT_ARRAY,
  QUESTIONS_INIT_ARRAY,
} from "../../description/examForm.description";
import createExamContainer from "../../container/teacher/createExam.container";
import { EDButton } from "../../shared/EDButton";
import EDGrid from "../../shared/EDGrid";

const CreateExam = () => {
  const { handleClickToPrevRoute } = createExamContainer();
  return (
    <EDGrid container direction="row">
      <EDGrid item sx={{ ml: 3 }} xs={4} sm={3} md={2}>
        <EDButton
          size="medium"
          handleChange={handleClickToPrevRoute}
          value="Go Back"
          variant="contained"
        />
      </EDGrid>
      <EDGrid item xs={12}>
        <EDExamCompMain
          examDetailsArr={EXAMDETAILS_INIT_ARRAY}
          questionsArr={QUESTIONS_INIT_ARRAY}
          action={ACTION.CREATE_EXAM}
          formName="Create Exam"
        />
      </EDGrid>
    </EDGrid>
  );
};

export default CreateExam;
