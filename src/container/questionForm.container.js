import { OPTION_FIELDS_ARRAY } from "../description/forms/examForm.description";
import { EXAM_FORM_ERRORS } from "../utils/constant";
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
        e.target.value.toString().trim(),
        ...question.options.slice(i + 1),
      ],
    };

    let errObject = setOptionsErrors(newQuestion);

    if (!e.target.value) {
      errObject = {
        ...errObject,
        [`${i}Option_Error`]: EXAM_FORM_ERRORS.OPTION_ERROR,
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

  const optionArr = OPTION_FIELDS_ARRAY;
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
