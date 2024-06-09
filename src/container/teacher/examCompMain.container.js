import { useState } from "react";
import {
  validateFullQuestion,
  emptyValidation,
  setOptionsErrors,
  validateExamField,
} from "../../utils/validation";

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
      errors: {},
    })
  );

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleExamDetailChange = (e) => {
    setExamDetails({
      ...examDetails,
      [e.target.name]: e.target.value,
      [`${e.target.name}Error`]: emptyValidation(e.target.value),
    });
  };

  const handleQuestionChange = (index, question) => {
    const newQuestions = [...questions];
    newQuestions[index] = question;
    setQuestions(newQuestions);
  };

  const handleNext = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const {
      isCurrentQuestionValid,
      errObjectForOptions,
      questionError,
      answerError,
    } = validateFullQuestion(currentQuestion);

    if (isCurrentQuestionValid) {
      if (currentQuestionIndex < 13) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    } else {
      handleQuestionChange(currentQuestionIndex, {
        ...currentQuestion,
        errors: {
          optionErrors: errObjectForOptions,
          questionError,
          answerError,
        },
      });
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate current question before submission
    const currentQuestion = questions[currentQuestionIndex];
    const {
      isCurrentQuestionValid,
      errObjectForOptions,
      questionError,
      answerError,
    } = validateFullQuestion(currentQuestion);
    const subjectNameError = emptyValidation(examDetails.subjectName);
    const descriptionError = emptyValidation(examDetails.description);

    // Validate all questions
    let areAllQuestionsValid = true;
    const allQuestionsErrors = questions.map((question, index) => {
      const {
        isCurrentQuestionValid,
        errObjectForOptions,
        questionError,
        answerError,
      } = validateFullQuestion(question);

      if (!isCurrentQuestionValid) {
        areAllQuestionsValid = false;
      }

      return {
        optionErrors: errObjectForOptions,
        questionError,
        answerError,
      };
    });

    if (!subjectNameError && !descriptionError && areAllQuestionsValid) {
      // Submit the form if all validations pass
      console.log("Exam Details:", examDetails);
      console.log("Questions:", questions);
    } else {
      // Set errors if validation fails
      setExamDetails({
        ...examDetails,
        subjectNameError,
        descriptionError,
        allQuestionValidError: "Please enter details for all questions.",
      });

      const updatedQuestions = questions.map((question, index) => ({
        ...question,
        errors: allQuestionsErrors[index],
      }));

      setQuestions(updatedQuestions);

      if (!isCurrentQuestionValid) {
        handleQuestionChange(currentQuestionIndex, {
          ...currentQuestion,
          errors: {
            optionErrors: errObjectForOptions,
            questionError,
            answerError,
          },
        });
      }
    }
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
