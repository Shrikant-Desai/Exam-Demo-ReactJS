export const QUESTIONS_INIT_ARRAY = Array(15).fill({
  question: "",
  answer: "",
  options: ["", "", "", ""],
  answerIndex: "",
  errors: {},
});
export const EXAMDETAILS_INIT_ARRAY = {
  subjectName: "",
  description: "",
  allQuestionValidError: "",
};

export const SINGLE_QUESTION_ARRAY = {
  QUESTION_DESCRIPTION: {
    labelProps: { htmlFor: "question", value: "Question :" },
    inputProps: {
      size: "small",
      id: "question",
      type: "text",
      name: "question",
    },
  },
  OPTION_DESCRIPTION: [
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
  ],
};
