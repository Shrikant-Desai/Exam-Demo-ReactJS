import { TextField } from "@mui/material";
import React from "react";

export const EDInput = ({ handleChange, path, ...props }) => {
  return (
    <TextField
      value={props?.value}
      sx={{ pt: 1 }}
      onChange={(e) => handleChange(e, path)}
      {...props}
    />
  );
};
