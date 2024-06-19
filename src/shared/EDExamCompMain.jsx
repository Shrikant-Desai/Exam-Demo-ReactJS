import React from "react";
import { EDQuestionForm } from "./EDQuestionForm";
import EDStack from "./EDStack";
import EDLabeledInput from "./EDLabeledInput";
import EDBox from "./EDBox";
import { EDButton } from "./EDButton";
import examCompMainContainer from "../container/examCompMain.container";
import EDTypography from "./EDTypography";
import { EDErrorDiv } from "./EDErrorDiv";
import {
  NOTES_FIELD_DATA,
  SUBJECT_FIELD_DATA,
} from "../description/forms/examForm.description";

const EDExamCompMain = ({
  examDetailsArr,
  questionsArr,
  action,
  formName,
  isGiveExam,
}) => {
  const {
    examDetails,
    questions,
    currentQuestionIndex,
    handleExamDetailChange,
    handleQuestionChange,
    handleNext,
    handlePrevious,
    handleSubmit,
    areAllQuestionsValid,
  } = examCompMainContainer({ examDetailsArr, questionsArr, action });

  return (
    <EDStack justifyContent="center" alignItems="center">
      <EDStack
        sx={{
          boxShadow: 3,
          borderRadius: 3,
          backdropFilter: `blur(10px)`,
        }}
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <EDStack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          sx={{ p: 4 }}
        >
          <EDStack
            direction="column"
            sx={{
              width: { xs: "70vw", sm: "50vw", md: "50vw", lg: "50vw" },
              height: "100%",
              padding: "10px",
              borderRadius: "10px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            }}
          >
            <form onSubmit={handleSubmit}>
              <EDTypography variant={"h4"} align="center" value={formName} />
              <EDLabeledInput
                {...{
                  labelProps: { ...SUBJECT_FIELD_DATA.LABEL_PROPS },
                  inputProps: {
                    ...SUBJECT_FIELD_DATA.INPUT_PROPS,
                    disabled: isGiveExam ? true : false,
                    value: examDetails?.subjectName,
                    onChange: handleExamDetailChange,
                  },
                }}
              />
              <EDErrorDiv errorMsg={examDetails?.subjectNameError} />

              <EDLabeledInput
                {...{
                  labelProps: { ...NOTES_FIELD_DATA.LABEL_PROPS },
                  inputProps: {
                    ...NOTES_FIELD_DATA.INPUT_PROPS,
                    disabled: isGiveExam ? true : false,
                    value: examDetails?.notes,
                    onChange: handleExamDetailChange,
                  },
                }}
              />
              <EDErrorDiv errorMsg={examDetails?.notesError} />

              <br />
              <EDQuestionForm
                questionObj={questions?.[currentQuestionIndex]}
                index={currentQuestionIndex}
                questionsArr={questions}
                onChange={handleQuestionChange}
                isGiveExam={isGiveExam}
              />

              <EDErrorDiv errorMsg={examDetails?.allQuestionValidError} />
              <EDBox>
                <EDButton
                  type="button"
                  handleChange={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  value="Previous"
                />

                <EDButton
                  type="button"
                  handleChange={handleNext}
                  disabled={currentQuestionIndex === questions?.length - 1}
                  value="Next"
                />
              </EDBox>
              <br />
              <EDButton
                type="submit"
                disabled={!areAllQuestionsValid}
                value={formName}
                variant="contained"
              />
            </form>
          </EDStack>
        </EDStack>
      </EDStack>
    </EDStack>
  );
};

export default EDExamCompMain;
