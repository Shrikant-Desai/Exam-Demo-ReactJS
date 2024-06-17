import { useEffect, useState } from "react";
import { validateFullQuestion, emptyValidation } from "../utils/validation";
import {
  ACTION,
  EXAMDETAILS_INIT_ARRAY,
  QUESTIONS_INIT_ARRAY,
} from "../description/forms/examForm.description";
import { useDispatch } from "react-redux";
import { addExamFormData } from "../redux/slices/examForm.slice";

const ExamCompMainContainer = ({ examDetailsArr, questionsArr, action }) => {
  const dispatch = useDispatch();
  const [examDetails, setExamDetails] = useState(examDetailsArr);
  const [allQuestionsErrors, setAllQuestionsErrors] = useState(true);
  const [areAllQuestionsValid, setAreAllQuestionsValid] = useState(true);

  const [questions, setQuestions] = useState(questionsArr);

  useEffect(() => {
    let allQuestionsAreValid = true;
    const validationData = questions.map((question, index) => {
      const {
        isCurrentQuestionValid,
        errObjectForOptions,
        questionError,
        answerError,
      } = validateFullQuestion(question, questions, index);

      if (!isCurrentQuestionValid) {
        allQuestionsAreValid = false;
      }

      return {
        optionErrors: errObjectForOptions,
        questionError,
        answerError,
      };
    });
    setAreAllQuestionsValid(allQuestionsAreValid);
    setAllQuestionsErrors(validationData);
  }, [examDetails, questions]);
  useEffect(() => {
    setQuestions(questionsArr);
  }, [questionsArr]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleExamDetailChange = (e) => {
    setExamDetails({
      ...examDetails,
      [e.target.name]: e.target.value,

      [`${e.target.name}Error`]: emptyValidation(e.target.value, e.target.name),
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
      if (currentQuestionIndex < questions?.length - 1) {
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
    const currentQuestion = questions[currentQuestionIndex];
    const {
      isCurrentQuestionValid,
      errObjectForOptions,
      questionError,
      answerError,
    } = validateFullQuestion(currentQuestion);
    const subjectNameError = emptyValidation(
      examDetails.subjectName,
      "Subject Name"
    );
    const notesError = emptyValidation(examDetails.description, "Description");

    const isErrorInForm =
      action === ACTION.GIVE_EXAM
        ? areAllQuestionsValid
        : !subjectNameError && !notesError && areAllQuestionsValid;
    console.log("isErrorInForm", isErrorInForm);
    if (isErrorInForm) {
      dispatch(
        addExamFormData({
          name: action,
          data: {
            subjectName: examDetails?.subjectName?.trim(),
            questions: questions.map((item) => {
              return {
                question: item.question,
                answer: item.answer,
                options: item.options,
              };
            }),
            notes: [examDetails?.description?.trim()],
          },
        })
      );
      setQuestions(QUESTIONS_INIT_ARRAY);
      setExamDetails(EXAMDETAILS_INIT_ARRAY);
    } else {
      setExamDetails({
        ...examDetails,
        subjectNameError,
        notesError,
      });

      const updatedQuestions = questions.map((question, index) =>
        index === currentQuestionIndex
          ? {
              ...question,
              errors: allQuestionsErrors[index],
            }
          : { ...question }
      );

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
    areAllQuestionsValid,
  };
};

export default ExamCompMainContainer;
