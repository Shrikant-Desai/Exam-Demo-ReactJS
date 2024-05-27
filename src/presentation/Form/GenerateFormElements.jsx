import React from "react";

import FormMainComp from "./FormMainComp";
import { EDLabel } from "../../shared/EDLabel";
import { EDInput } from "../../shared/EDInput";
import { EDRadio } from "../../shared/EDRadioButton";
import { EDSelect } from "../../shared/EDSelect";
import { EDCheckbox } from "../../shared/EDCheckbox";
import { EDButton } from "../../shared/EDButton";
import { FormControl, MenuItem, RadioGroup } from "@mui/material";
import EDStack from "../../shared/EDStack";
import EDBox from "../../shared/EDBox";

const GenerateFormElements = ({
  item,
  path,
  handleChange,
  formArr,
  formDataState,
  resetForm,
  handleSubmit,
  isSubmitDisable,
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
                    handleChange={handleChange}
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
        <FormControl>
          <EDLabel {...item} />
          <EDSelect
            {...{ path }}
            handleChange={handleChange}
            value={formDataState?.[item?.fieldName] || ""}
            {...item.inputProps}
          >
            {item.options.map((option, index) => (
              <MenuItem key={index} value={option.value} id={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </EDSelect>
        </FormControl>
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
      return <EDButton handleChange={resetForm} {...item} />;
    case "submit":
      return <EDButton isSubmitDisable={isSubmitDisable} {...item} />;
    case "button":
      return <EDButton {...item} />;

    default:
      return null;
  }
};

export default GenerateFormElements;
