// CRUDRadio.js
import { FormControlLabel, Radio } from "@mui/material";
import React from "react";

export const EDRadio = ({ handleChange, path, selectedOption, ...props }) => {
  let checked;
  if (selectedOption === 0) {
    checked = selectedOption == props?.value;
  } else {
    checked = selectedOption ? selectedOption == props?.value : false;
  }
  return (
    <FormControlLabel
      {...props}
      control={<Radio checked={checked} />}
      onChange={(e) => handleChange(e)}
      label={props.label}
    />
  );
};
