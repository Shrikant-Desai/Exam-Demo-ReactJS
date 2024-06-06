import React from "react";

const QuestionFormContainer = (question, index, onChange) => {
  const handleInputChange = (e) => {
    const newQuestion = { ...question, [e.target.name]: e.target.value };
    onChange(index, newQuestion);
  };
  const handleAddOptions = (e, i) => {
    let newQuestion = {
      ...question,
      options: [
        ...question.options.slice(0, i),
        e.target.value,
        ...question.options.slice(i + 1),
      ],
    };
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
      size: "small",
      id: "option1",
      type: "text",
      name: "option1",
      placeholder: "Option 1",
    },
    {
      size: "small",
      id: "option2",
      type: "text",
      name: "option2",
      placeholder: "Option 2",
    },
    {
      size: "small",
      id: "option3",
      type: "text",
      name: "option3",
      placeholder: "Option 3",
    },
    {
      size: "small",
      id: "option4",
      type: "text",
      name: "option4",
      placeholder: "Option 4",
    },
  ];

  return {
    handleInputChange,
    handleAddOptions,
    handleAddAnswer,
    optionArr,
  };
};

export default QuestionFormContainer;
