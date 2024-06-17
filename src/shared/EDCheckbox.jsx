import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";

export const EDCheckbox = ({
  handleChange,
  path,
  selectedOption,
  ...props
}) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          {...props}
          onChange={(e) => handleChange(e, path)}
          defaultChecked={selectedOption?.some(
            (checkboxValue) => checkboxValue === props.value
          )}
        />
      }
      label={props.value}
    />
  );
};
