import { setOptionsErrors, validateExamField } from "../utils/validation";

const QuestionFormContainer = (question, index, onChange, questionsArr) => {
  const handleInputChange = (e) => {
    const errMsg = validateExamField(e.target.value, questionsArr);

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
    let newQuestion = {
      ...question,
      options: [
        ...question.options.slice(0, i),
        e.target.value,
        ...question.options.slice(i + 1),
      ],
    };

    let errObject = setOptionsErrors(newQuestion);

    if (!e.target.value) {
      errObject = {
        ...errObject,
        [`${i}Option_Error`]: "Enter value for option",
      };
    }

    newQuestion = {
      ...newQuestion,
      errors: {
        ...newQuestion?.errors,
        optionErrors: {
          ...newQuestion?.errors?.optionErrors,
          ...errObject,
        },
      },
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
      errors: {
        ...question?.errors,
        answerError: "",
      },
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
