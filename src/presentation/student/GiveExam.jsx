import React from "react";
import EDExamCompMain from "../../shared/EDExamCompMain";
import giveExamContainer from "../../container/student/giveExam.container";

const GiveExam = () => {
  const { examDetailsObject, questionArr, apiData } = giveExamContainer();

  if (!apiData?.loading) {
    return (
      <>
        <EDExamCompMain
          examDetailsArr={examDetailsObject}
          questionsArr={questionArr}
          action="giveExam"
          formName="Give Exam"
          isGiveExam={true}
        />
      </>
    );
  }
};

export default GiveExam;
