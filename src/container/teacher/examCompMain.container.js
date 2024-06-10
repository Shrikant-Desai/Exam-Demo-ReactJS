import { useState } from "react";
import { validateFullQuestion, emptyValidation } from "../../utils/validation";
import {
  EXAMDETAILS_INIT_ARRAY,
  QUESTIONS_INIT_ARRAY,
} from "../../description/examForm.description";
import { useDispatch } from "react-redux";
import { addExamFormData } from "../../redux/slices/examForm.slice";

const ExamCompMainContainer = ({ examDetailsArr, questionsArr, action }) => {
  const dispatch = useDispatch();
  const [examDetails, setExamDetails] = useState(examDetailsArr);

  const [questions, setQuestions] = useState(questionsArr);

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
      if (currentQuestionIndex < questions.length - 1) {
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
    const subjectNameError = emptyValidation(examDetails.subjectName);
    const descriptionError = emptyValidation(examDetails.description);

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
      // dispatch(
      //   fetchDataThunkFunc({
      //     url: END_POINTS.CREATE_EXAM,
      //     method: "Post",
      //     bodyData: {
      //       subjectName: examDetails?.subjectName.trim(),
      //       questions: questions.map((item) => {
      //         return {
      //           question: item.question,
      //           answer: item.answer,
      //           options: item.options,
      //         };
      //       }),
      //       notes: [examDetails?.description.trim()],
      //     },
      //     isToastMessage: true,
      //   })
      // );
      dispatch(
        addExamFormData({
          name: action,
          data: {
            subjectName: examDetails?.subjectName.trim(),
            questions: questions.map((item) => {
              return {
                question: item.question,
                answer: item.answer,
                options: item.options,
              };
            }),
            notes: [examDetails?.description.trim()],
          },
        })
      );
      setQuestions(QUESTIONS_INIT_ARRAY);
      setExamDetails(EXAMDETAILS_INIT_ARRAY);
    } else {
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
