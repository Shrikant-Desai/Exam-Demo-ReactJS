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
    LABEL_PROPS: { htmlFor: "question", value: "Question :" },
    INPUT_PROPS: {
      size: "small",
      id: "question",
      placeholder: "Enter Question.",
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
export const OPTION_FIELDS_ARRAY = [
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
export const SUBJECT_FIELD_DATA = {
  LABEL_PROPS: {
    htmlFor: "subjectName",
    value: "Subject Name :",
  },
  INPUT_PROPS: {
    size: "small",
    id: "subjectName",
    type: "text",
    sx: {
      width: "100%",
      "& .MuiInputBase-input.Mui-disabled": {
        WebkitTextFillColor: "#000000",
      },
    },
    placeholder: "Enter Subject Name",
    name: "subjectName",
  },
};

export const ACTION = {
  GIVE_EXAM: "giveExam",
  CREATE_EXAM: "createExam",
  EDIT_EXAM: "editExam",
};
export const DESC_FIELD_DATA = {
  LABEL_PROPS: {
    htmlFor: "description",
    value: "Description :",
  },
  INPUT_PROPS: {
    size: "small",
    id: "description",
    type: "text",
    sx: {
      width: "100%",
      "& .MuiInputBase-input.Mui-disabled": {
        WebkitTextFillColor: "#000000",
      },
    },
    name: "description",
    placeholder: "Enter Description",
  },
};
