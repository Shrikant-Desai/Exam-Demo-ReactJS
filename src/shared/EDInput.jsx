// CRUDInput.js

import { TextField } from "@mui/material";
import React from "react";

export const EDInput = ({ handleChange, path, ...props }) => {
  return (
    <TextField
      value={props?.value}
      onChange={(e) => handleChange(e, path)}
      {...props}
      autoComplete="on"
    />
  );
};
