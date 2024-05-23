// CRUDInput.js

import { TextField } from "@mui/material";
import React from "react";

export const EDInput = ({ handleChange, path, ...props }) => {
  return (
    <TextField
      required
      // sx={{
      //   "& .MuiInputBase-input": {
      //     height: 20,
      //     width: 400,
      //     padding: 1,
      //     display: "block",
      //   },
      // }}
      defaultValue={props?.value}
      onChange={(e) => handleChange(e, path)}
      {...props}
    />
  );
};
