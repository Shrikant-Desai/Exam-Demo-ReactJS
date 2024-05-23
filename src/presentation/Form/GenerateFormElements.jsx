import React, { Fragment } from "react";

import FormMainComp from "./FormMainComp";
import { EDLabel } from "../../shared/EDLabel";
import { EDInput } from "../../shared/EDInput";
import { EDRadio } from "../../shared/EDRadioButton";
import { EDSelect } from "../../shared/EDSelect";
import { EDCheckbox } from "../../shared/EDCheckbox";
import { EDButton } from "../../shared/EDButton";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import EDStack from "../../shared/EDStack";

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
        <div className="mb- 1 h-50 d-flex flex-wrap pt-2">
          <EDLabel {...item} />
          <div className="form-check d-flex flex-wrap">
            {item.inputProps.map((radioProps, index) => (
              <EDRadio
                {...{ path }}
                handleChange={handleChange}
                selectedOption={formDataState?.[item?.fieldName] || ""}
                {...radioProps}
                key={index}
              />
            ))}
          </div>
        </div>
      );

    case "select":
      return (
        <FormControl sx={{ maxWidth: 400, minWidth: 300 }}>
          <InputLabel>{item.labelProps.value}</InputLabel>
          <EDSelect
            {...{ path }}
            handleChange={handleChange}
            value={formDataState?.[item?.fieldName] || ""}
            {...item.inputProps}
          >
            {item.options.map((option, index) => (
              <MenuItem value={option.value} id={option.id}>
                {option.name}
              </MenuItem>
            ))}
          </EDSelect>
        </FormControl>
      );

    case "checkbox":
      return (
        <div>
          <EDLabel {...item} />
          {item.inputProps.map((checkboxProps, index) => (
            <div className="form-check form-check-inline" key={index}>
              <EDCheckbox
                {...{ path }}
                handleChange={handleChange}
                selectedOption={formDataState?.[item?.fieldName] || []}
                {...checkboxProps}
              />
            </div>
          ))}
        </div>
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
