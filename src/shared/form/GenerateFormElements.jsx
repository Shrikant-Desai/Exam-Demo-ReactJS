import React from "react";

import FormMainComp from "./FormMainComp";
import { EDLabel } from "../EDLabel";
import { EDInput } from "../EDInput";
import { EDRadio } from "../EDRadioButton";
import { EDCheckbox } from "../EDCheckbox";
import { EDButton } from "../EDButton";
import { FormControl, RadioGroup } from "@mui/material";
import EDStack from "../EDStack";
import EDBox from "../EDBox";
import EDSelect from "../EDSelect";

const GenerateFormElements = ({
  item,
  path,
  handleChange,
  formArr,
  formDataState,
  resetForm,
  handleSubmit,
  isSubmitDisable,
  isAPILoading,
}) => {
  switch (item.type) {
    case "labeledInput":
      return (
        <EDStack direction="column">
          <EDLabel {...item} />
          <EDInput
            {...{ path }}
            handleChange={handleChange}
            value={formDataState?.[item?.fieldName] || ""}
            {...item.inputProps}
          />
        </EDStack>
      );

    case "radio":
      return (
        <EDBox sx={{ mb: 1, display: "flex", pt: 2 }}>
          <EDStack direction="row">
            <FormControl>
              <EDLabel {...item} />
              <RadioGroup
                row={item?.design}
                aria-labelledby="gender-radio-buttons-group-label"
                name="radio-buttons-group"
              >
                {item.inputProps.map((radioProps, index) => (
                  <EDRadio
                    {...{ path }}
                    handleChange={(e) => handleChange(e, path)}
                    selectedOption={formDataState?.[item?.fieldName] || ""}
                    {...radioProps}
                    key={index}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            ;
          </EDStack>
        </EDBox>
      );

    case "select":
      return (
        <>
          <EDSelect
            item={item}
            handleChange={(e) => handleChange(e, path)}
            value={formDataState?.[item?.fieldName] || ""}
          />
        </>
      );

    case "checkbox":
      return (
        <EDBox>
          <EDLabel {...item} />
          {item.inputProps.map((checkboxProps, index) => (
            <EDBox key={index}>
              <EDCheckbox
                {...{ path }}
                handleChange={handleChange}
                selectedOption={formDataState?.[item?.fieldName] || []}
                {...checkboxProps}
              />
            </EDBox>
          ))}
        </EDBox>
      );
    case "subForm":
      return (
        <FormMainComp
          formArr={item.subFormArr}
          className={item.className}
          path={`${path}/${item.path}`}
          formName={item.formName}
          isSubForm={true}
          {...{ handleChange, handleSubmit, resetForm }}
        />
      );

    case "reset":
      return (
        <EDButton
          isAPILoading={isAPILoading}
          handleChange={resetForm}
          {...item}
        />
      );
    case "submit":
      return (
        <EDButton
          isAPILoading={isAPILoading}
          isSubmitDisable={isSubmitDisable}
          {...item}
        />
      );
    case "button":
      return <EDButton isAPILoading={isAPILoading} {...item} />;

    default:
      return null;
  }
};

export default GenerateFormElements;
