// CRUDSelect.js
import { Select } from "@mui/material";
import React from "react";

export const EDSelect = ({ handleChange, path, ...props }) => {
  return (
    <Select
      labelId="demo-simple-select-label"
      {...props}
      value={props.value}
      label={props.value}
      onChange={(e) => handleChange(e, path)}
    >
      {props.children}
    </Select>
  );
};
