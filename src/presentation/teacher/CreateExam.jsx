import React from "react";
import createExamContainer from "../../container/teacher/createExam.container";
import FormMainComp from "../form/FormMainComp";
import { signInFormArray } from "../../description/userModuleForms.description";
import EDStack from "../../shared/EDStack";
import { styled } from "@mui/material";

const CreateExam = () => {
  const { handleChange, handleSubmit, resetForm, sxObject, path } =
    createExamContainer();

  return (
    <>
      <EDStack
        direction="column"
        sx={{ p: 4 }}
        justifyContent="center"
        alignItems="flex-start"
      >
        <FormMainComp
          {...{
            handleChange,
            handleSubmit,
            resetForm,
            sxObject,
            isSubForm: false,
            formArr: signInFormArray,
            formName: "New Password",
            path,
          }}
        />
      </EDStack>
    </>
  );
};

export default CreateExam;
