import React from "react";
import GenerateFormElements from "./GenerateFormElements";
import { EDErrorDiv } from "../../shared/EDErrorDiv";
import EDBox from "../../shared/EDBox";
import EDGrid from "../../shared/EDGrid";

const GenerateForm = ({
  formArr,
  handleChange,
  path,
  formDataState,
  resetForm,
  handleSubmit,
  formErrors,
}) => {
  const renderFormItem = formArr.map((item, index) => {
    return (
      <EDGrid item xs={Number(item?.xs)}>
        <GenerateFormElements
          {...{
            item,
            path,
            formArr,
            handleChange,
            handleSubmit,
            resetForm,
            formDataState,
          }}
        />
        <EDErrorDiv item={item} formErrors={formErrors} />
      </EDGrid>
    );
  });

  return renderFormItem;
};

export default GenerateForm;
