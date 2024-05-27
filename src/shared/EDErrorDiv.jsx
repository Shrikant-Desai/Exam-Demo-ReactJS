import { Typography } from "@mui/material";
import React from "react";

export const EDErrorDiv = ({ formErrors, item }) => {
  return (
    <Typography
      sx={{ color: "red", height: { xl: 25, lg: 40, md: 50, sm: 50, xs: 55 } }}
    >
      {formErrors?.[`${item?.fieldName}Error`] || ""}
    </Typography>
  );
};
