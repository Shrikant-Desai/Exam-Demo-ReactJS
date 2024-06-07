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
  console.log(question, "onChange");
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
      </EDGrid>
      {/* <EDErrorDiv
                errorMsg={
                  question?.errors?.optionErrors?.[`${index}Option_Error`] 
                }
              /> */}
      {/* i want to make one select to select one answer from above option  */}

      {/* <EDBox sx={{ my: 3 }}>
        <EDSelect
          {...{
            item: {
              labelProps: {
                value: "Select Answer",
                className: "form-group",
              },
              inputProps: {
                id: "answer",
                name: "answer",
                className: "form-control",
              },
              options: [
                { value: "", name: "---- Select Answer ----" },
                { value: "0", id: "first", name: "1st Option" },
                { value: "1", id: "second", name: "2nd Option" },
                { value: "2", id: "third", name: "3rd Option" },
                { value: "3", id: "fourth", name: "4th Option" },
              ],
            },
          }}
          handleChange={handleAddAnswer}
          value={question?.answerIndex}
        />
      </EDBox> */}
    </EDStack>
  );
};
