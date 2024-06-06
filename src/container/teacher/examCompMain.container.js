import { useEffect, useState } from "react";

const ExamCompMainContainer = () => {
  const [examDetails, setExamDetails] = useState({
    title: "",
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
    setExamDetails({ ...examDetails, [e.target.name]: e.target.value });
  };

  const handleQuestionChange = (index, question) => {
    const newQuestions = questions.slice();
    newQuestions[index] = question;
    setQuestions(newQuestions);
  };

  const handleNext = () => {
    if (currentQuestionIndex < 13) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
