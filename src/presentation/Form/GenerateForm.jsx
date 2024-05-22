import React from "react";
import GenerateFormElements from "./GenerateFormElements";
import { EDErrorDiv } from "../../shared/EDErrorDiv";

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
      <div
        key={index}
        className={
          item.identifier === "button"
            ? "pb-2 text-center"
            : `mb-1 col-${item?.colSpan} form-element`
        }
      >
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
      </div>
    );
  });

  return renderFormItem;
};

export default GenerateForm;
