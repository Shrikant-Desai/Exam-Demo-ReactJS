import { Directions } from "@mui/icons-material";
import React from "react";
import { validateExamFormField } from "../utils/validation";

const QuestionFormContainer = (question, index, onChange, questionsArr) => {
  const setOptionsErrors = () => {
    let errObject;
    question.options.map((option, index) => {
      const errMsg = validateExamFormField(option, question?.options);

      errObject = { ...errObject, [`${index}Error`]: option ? errMsg : "" };
    });
    return errObject;
  };
  const handleInputChange = (e) => {
    const errMsg = validateExamFormField(e.target.value, questionsArr, true);

    const newQuestion = {
      ...question,
      [e.target.name]: e.target.value,
      errors: {
        ...question.errors,
        questionError: errMsg,
      },
    };
    onChange(index, newQuestion);
  };
  const handleAddOptions = (e, i) => {
    const errMsg = validateExamFormField(e.target.value, question?.options);
    let errObject = setOptionsErrors();
    let newQuestion = {
      ...question,
      errors: { ...question?.errors, optionErrors: errObject },
    };
    newQuestion = {
      ...question,
      options: [
        ...newQuestion.options.slice(0, i),
        e.target.value,
        ...newQuestion.options.slice(i + 1),
      ],
      errors: {
        ...newQuestion.errors,
        optionErrors: {
          ...newQuestion?.errors?.optionErrors,
          [`${i}Error`]: errMsg,
        },
      },
    };
    console.log(newQuestion);
    newQuestion = {
      ...newQuestion,
      answer: newQuestion.options[newQuestion.answerIndex],
    };

    onChange(index, newQuestion);
  };
  const handleAddAnswer = (e) => {
    let newQuestion = {
      ...question,
      answerIndex: e.target.value,
    };
    newQuestion = {
      ...newQuestion,
      answer: newQuestion.options[newQuestion.answerIndex],
    };

    onChange(index, newQuestion);
  };

  const optionArr = [
    {
      labelProps: {
        value: "A",
      },
      inputProps: {
        size: "small",
        id: "option1",
        type: "text",
        name: "option1",
        placeholder: "Option 1",
      },
    },
    {
      labelProps: {
        value: "B",
      },
      inputProps: {
        size: "small",
        id: "option2",
        type: "text",
        name: "option2",
        placeholder: "Option 2",
      },
    },
    {
      labelProps: {
        value: "C",
      },
      inputProps: {
        size: "small",
        id: "option3",
        type: "text",
        name: "option3",
        placeholder: "Option 3",
      },
    },
    {
      labelProps: {
        value: "D",
      },
      inputProps: {
        size: "small",
        id: "option4",
        type: "text",
        name: "option4",
        placeholder: "Option 4",
      },
    },
  ];
  const containerDesign = {
    direction: "row",
    alignItems: "center",

    spacing: 2,
  };
  return {
    handleInputChange,
    handleAddOptions,
    handleAddAnswer,
    optionArr,
    containerDesign,
  };
};

export default QuestionFormContainer;
