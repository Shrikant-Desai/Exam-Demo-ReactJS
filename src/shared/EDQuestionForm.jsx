import questionFormContainer from "../container/questionForm.container";
import EDBox from "./EDBox";
import EDGrid from "./EDGrid";
import { EDInput } from "./EDInput";
import EDLabeledInput from "./EDLabeledInput";
import EDSelect from "./EDSelect";

import EDStack from "./EDStack";

export const EDQuestionForm = ({ question, index, onChange }) => {
  const { handleInputChange, handleAddOptions, handleAddAnswer, optionArr } =
    questionFormContainer(question, index, onChange);
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

      <br />
      <EDGrid container direction="row" spacing={2}>
        {optionArr?.map((item, i) => {
          return (
            <EDGrid key={i} item xs={12} md={6}>
              <EDInput
                {...item}
                sx={{ width: "100%" }}
                value={question?.options?.[i]}
                handleChange={(e) => handleAddOptions(e, i)}
              />
            </EDGrid>
          );
        })}
      </EDGrid>

      {/* i want to make one select to select one answer from above option  */}

      <EDBox sx={{ my: 3 }}>
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
      </EDBox>
    </EDStack>
  );
};
