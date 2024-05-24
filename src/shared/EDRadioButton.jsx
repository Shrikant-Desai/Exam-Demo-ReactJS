// CRUDRadio.js
import { FormControlLabel, Radio } from "@mui/material";
import React from "react";

export const EDRadio = ({ handleChange, path, selectedOption, ...props }) => {
  return (
    <FormControlLabel
      {...props}
      control={<Radio checked={selectedOption === props.value} />}
      onChange={(e) => handleChange(e, path)}
      label={props.label}
    />
  );
};
