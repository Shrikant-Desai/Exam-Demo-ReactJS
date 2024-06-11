import React from "react";
import GenerateFormElements from "./GenerateFormElements";
import { EDErrorDiv } from "../../shared/EDErrorDiv";
import EDGrid from "../../shared/EDGrid";

const GenerateForm = ({
  formArr,
  handleChange,
  path,
  formDataState,
  resetForm,
  handleSubmit,
  formErrors,
  isAPILoading,
}) => {
  const renderFormItem = formArr.map((item, index) => {
    const grid = item.gridValues;
    return (
      <EDGrid
        key={index}
        item
        xs={grid?.xs}
        sm={grid?.sm}
        md={grid?.md}
        lg={grid?.lg}
        xl={grid?.xl}
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
            isAPILoading,
          }}
        />
        {item.identifier !== "button" ? (
          <EDErrorDiv
            errorMsg={formErrors?.[`${item?.fieldName}Error`] || ""}
          />
        ) : null}
      </EDGrid>
    );
  });

  return renderFormItem;
};

export default GenerateForm;
