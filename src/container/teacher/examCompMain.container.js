import { useEffect, useState } from "react";
import { emptyValidation, validateFullQuestion } from "../../utils/validation";

const ExamCompMainContainer = () => {
  const [examDetails, setExamDetails] = useState({
    subjectName: "",
    description: "",
  });
  const [questions, setQuestions] = useState(
    Array(14).fill({
      question: "",
      answer: "",
      options: ["", "", "", ""],
      answerIndex: "",
    })
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleExamDetailChange = (e) => {
    const errMsg = emptyValidation(e.target.value);
    setExamDetails({
      ...examDetails,
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: errMsg,
    });
  };

  const handleQuestionChange = (index, question) => {
    const newQuestions = questions.slice();
    newQuestions[index] = question;
    setQuestions(newQuestions);
  };

  const setErrorsInQuestions = (errObjectForOptions, questionError) => {
    const newQuestion = {
      ...questions[currentQuestionIndex],
      errors: {
        ...questions[currentQuestionIndex].errors,
        optionErrors: {
          ...questions[currentQuestionIndex].errors?.optionErrors,
          ...errObjectForOptions,
        },
        questionError: questionError,
      },
    };
    handleQuestionChange(currentQuestionIndex, newQuestion);
  };

  const handleNext = () => {
    const currentQuestion = questions.find(
      (_, index) => index === currentQuestionIndex
    );
    const { isCurrentQuestionValid, errObjectForOptions, questionError } =
      validateFullQuestion(currentQuestion);

    if (isCurrentQuestionValid && currentQuestionIndex < 13) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setErrorsInQuestions(errObjectForOptions, questionError);
    }
  };

  const handlePrevious = () => {
    const currentQuestion = questions.find(
      (_, index) => index === currentQuestionIndex
    );
    const { isCurrentQuestionValid, errObjectForOptions, questionError } =
      validateFullQuestion(currentQuestion);

    if (isCurrentQuestionValid && currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      setErrorsInQuestions(errObjectForOptions, questionError);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentQuestion = questions.find(
      (_, index) => index === currentQuestionIndex
    );
    const { isCurrentQuestionValid, errObjectForOptions, questionError } =
      validateFullQuestion(currentQuestion);

    if (isCurrentQuestionValid) {
    } else {
      setErrorsInQuestions(errObjectForOptions, questionError);
    }
    console.log("Exam Details:", examDetails);
    console.log("Questions:", questions);
  };

  return {
    examDetails,
    questions,
    currentQuestionIndex,
    handleExamDetailChange,
    handleQuestionChange,
    handleNext,
    handlePrevious,
    handleSubmit,
  };
};

export default ExamCompMainContainer;
