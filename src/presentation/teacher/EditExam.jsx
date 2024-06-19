import React from "react";
import EDExamCompMain from "../../shared/EDExamCompMain";
import editExamContainer from "../../container/teacher/editExam.container";
import { ACTION } from "../../description/forms/examForm.description";
import { API_STATUS_GENERATION_FAILED, FORMS } from "../../utils/constant";
import Glimmer from "../../shared/loader/Glimmer";
import EDStack from "../../shared/EDStack";
import EDTypography from "../../shared/EDTypography";
import { MESSAGES } from "../../description/student/studentModule.description";

const EditExam = () => {
  const { examDetailsObject, questionArr, apiData } = editExamContainer();

  return apiData?.data?.statusCode !== API_STATUS_GENERATION_FAILED ||
    !apiData?.data ? (
    !apiData?.loading ? (
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
    )
  ) : (
    <EDStack alignItems="center">
      <EDTypography
        sx={{ color: "red" }}
        variant="h4"
        value={MESSAGES.DATA_NOT_FOUND}
      />
    </EDStack>
  );
};

export default EditExam;
