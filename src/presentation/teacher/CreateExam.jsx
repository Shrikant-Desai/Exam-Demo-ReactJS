import React from "react";
import EDExamCompMain from "../../shared/EDExamCompMain";
import {
  ACTION,
  EXAMDETAILS_INIT_ARRAY,
  QUESTIONS_INIT_ARRAY,
} from "../../description/forms/examForm.description";
import createExamContainer from "../../container/teacher/createExam.container";
import { EDButton } from "../../shared/EDButton";
import EDGrid from "../../shared/EDGrid";
import { KeyboardBackspace } from "@mui/icons-material";

const CreateExam = () => {
  const { handleClickToPrevRoute } = createExamContainer();
  return (
    <EDGrid container direction="row">
      <EDGrid item sx={{ ml: 3 }}>
        <EDButton
          size="medium"
          handleChange={handleClickToPrevRoute}
          value={<KeyboardBackspace />}
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
