import React from "react";
import { EDQuestionForm } from "./EDQuestionForm";
import EDStack from "./EDStack";
import EDLabeledInput from "./EDLabeledInput";
import EDBox from "./EDBox";
import { EDButton } from "./EDButton";
import examCompMainContainer from "../container/teacher/examCompMain.container";

const EDExamCompMain = () => {
  const {
    examDetails,
    questions,
    currentQuestionIndex,
    handleExamDetailChange,
    handleQuestionChange,
    handleNext,
    handlePrevious,
    handleSubmit,
  } = examCompMainContainer();

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
              <EDLabeledInput
                {...{
                  labelProps: { htmlFor: "title", value: "Title :" },
                  inputProps: {
                    size: "small",
                    id: "title",
                    type: "text",
                    name: "title",
                    value: examDetails.title,
                    onChange: handleExamDetailChange,
                  },
                }}
              />

              <br />
              <EDLabeledInput
                {...{
                  labelProps: {
                    htmlFor: "description",
                    value: "Description :",
                  },
                  inputProps: {
                    size: "small",
                    id: "description",
                    type: "text",
                    name: "description",
                    value: examDetails.description,
                    onChange: handleExamDetailChange,
                  },
                }}
              />

              <br />
              <EDQuestionForm
                question={questions[currentQuestionIndex]}
                index={currentQuestionIndex}
                questionsArr={questions}
                onChange={handleQuestionChange}
              />
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
                  disabled={currentQuestionIndex === 13}
                  value="Next"
                />
              </EDBox>
              <br />
              <EDButton type="submit" value="Create Exam" variant="contained" />
            </form>
          </EDStack>
        </EDStack>
      </EDStack>
    </EDStack>
  );
};

export default EDExamCompMain;
