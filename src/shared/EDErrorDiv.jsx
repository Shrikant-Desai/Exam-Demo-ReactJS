import { Typography } from "@mui/material";
import React from "react";

export const EDErrorDiv = ({ formErrors, item }) => {
  return (
    <Typography sx={{ color: "red", height: 25 }}>
      {formErrors?.[`${item?.fieldName}Error`] || ""}
    </Typography>
  );
};
