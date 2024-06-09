import questionFormContainer from "../container/questionForm.container";
import { EDErrorDiv } from "./EDErrorDiv";
import EDGrid from "./EDGrid";
import EDLabeledInput from "./EDLabeledInput";
import { EDRadio } from "./EDRadioButton";

import EDStack from "./EDStack";

export const EDQuestionForm = ({ question, index, onChange, questionsArr }) => {
  const {
    handleInputChange,
    handleAddOptions,
    handleAddAnswer,
    optionArr,
    containerDesign,
  } = questionFormContainer(question, index, onChange, questionsArr);
  
  return (
    <EDStack>
      <h2>Question {index + 1}</h2>
      <EDLabeledInput
        {...{
          labelProps: { htmlFor: "question", value: "Question :" },
          inputProps: {
            size: "small",
            id: "question",
            type: "text",
            name: "question",
            value: question.question,
            onChange: handleInputChange,
          },
        }}
      />
      <EDErrorDiv errorMsg={question?.errors?.questionError} />

      <br />
      <EDGrid container direction="row" spacing={2}>
        {optionArr?.map((item, optionIndex) => {
          return (
            <EDGrid key={optionIndex} item xs={12} md={6}>
              <EDGrid container alignItems="center">
                <EDGrid item xs={1}>
                  <EDRadio
                    {...{
                      selectedOption: question?.answerIndex,
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
                        ...item.inputProps,
                        sx: { width: "100%" },
                        value: question?.options?.[optionIndex],
                        handleChange: (e) => handleAddOptions(e, optionIndex),
                      },
                    }}
                  />
                </EDGrid>
              </EDGrid>
              <EDErrorDiv
                errorMsg={
                  question?.errors?.optionErrors?.[`${optionIndex}Option_Error`]
                }
              />
            </EDGrid>
          );
        })}
          <EDErrorDiv
                errorMsg={
                  question?.errors?.answerError
                }
              />
      </EDGrid>
    
    </EDStack>
  );
};
