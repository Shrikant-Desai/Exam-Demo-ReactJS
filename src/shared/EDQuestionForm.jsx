import questionFormContainer from "../container/questionForm.container";
import { SINGLE_QUESTION_ARRAY } from "../description/examForm.description";
import { EDErrorDiv } from "./EDErrorDiv";
import EDGrid from "./EDGrid";
import EDLabeledInput from "./EDLabeledInput";
import { EDRadio } from "./EDRadioButton";

import EDStack from "./EDStack";

export const EDQuestionForm = ({
  questionObj,
  index,
  onChange,
  questionsArr,
  isGiveExam,
}) => {
  const {
    handleInputChange,
    handleAddOptions,
    handleAddAnswer,
    containerDesign,
  } = questionFormContainer(questionObj, index, onChange, questionsArr);

  return (
    <EDStack>
      <h2>Question {index + 1}</h2>
      <EDLabeledInput
        {...{
          labelProps: {
            label: SINGLE_QUESTION_ARRAY.QUESTION_DESCRIPTION.LABEL_PROPS,
          },
          inputProps: {
            disabled: isGiveExam ? true : false,
            sx: {
              width: "100%",
              "& .MuiInputBase-input.Mui-disabled": {
                WebkitTextFillColor: "#000000",
              },
            },
            ...SINGLE_QUESTION_ARRAY.QUESTION_DESCRIPTION.INPUT_PROPS,
            value: questionObj?.question,
            handleChange: handleInputChange,
          },
        }}
      />
      <EDErrorDiv errorMsg={questionObj?.errors?.questionError} />

      <br />
      <EDGrid container direction="row" spacing={2}>
        {SINGLE_QUESTION_ARRAY.OPTION_DESCRIPTION?.map((item, optionIndex) => {
          return (
            <EDGrid key={optionIndex} item xs={12} md={6}>
              <EDGrid container alignItems="center">
                <EDGrid item xs={1}>
                  <EDRadio
                    {...{
                      selectedOption: questionObj?.answerIndex,
                      value: optionIndex,
                      handleChange: handleAddAnswer,
                    }}
                  />
                </EDGrid>
                <EDGrid item xs={11}>
                  <EDLabeledInput
                    {...{
                      containerDesign: containerDesign,
                      labelProps: item.labelProps,
                      inputProps: {
                        disabled: isGiveExam ? true : false,
                        ...item.inputProps,
                        sx: {
                          width: "100%",
                          "& .MuiInputBase-input.Mui-disabled": {
                            WebkitTextFillColor: "#000000",
                          },
                        },
                        value: questionObj?.options?.[optionIndex],
                        handleChange: (e) => handleAddOptions(e, optionIndex),
                      },
                    }}
                  />
                </EDGrid>
              </EDGrid>
              <EDErrorDiv
                errorMsg={
                  questionObj?.errors?.optionErrors?.[
                    `${optionIndex}Option_Error`
                  ]
                }
              />
            </EDGrid>
          );
        })}
        <EDStack direction="row" alignItems="center">
          <EDErrorDiv errorMsg={questionObj?.errors?.answerError} />
        </EDStack>
      </EDGrid>
    </EDStack>
  );
};
