// CRUDRadio.js
import { FormControlLabel, Radio } from "@mui/material";
import React from "react";

export const EDRadio = ({ handleChange, path, selectedOption, ...props }) => {
  return (
    <FormControlLabel
      {...props}
      control={
        <Radio
          checked={selectedOption ? selectedOption == props.value : false}
        />
      }
      onChange={(e) => handleChange(e)}
      label={props.label}
    />
  );
};
