import { Typography } from "@mui/material";
import React from "react";

export const EDErrorDiv = ({ errorMsg }) => {
  return (
    <Typography
      sx={{
        color: "red",
        minHeight: 30,
      }}
    >
      {errorMsg || ""}
    </Typography>
  );
};
