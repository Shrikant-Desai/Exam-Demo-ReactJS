// CRUDButton.js
import { Button } from "@mui/material";
import React from "react";

export const EDButton = (props) => {
  const {
    handleChange,
    isSubmitDisable,
    rulesData,
    fieldName,
    gridValues,
    ...rest
  } = props;
  return (
    <Button
      disabled={isSubmitDisable}
      {...rest}
      sx={{ width: "100%" }}
      onClick={handleChange ? () => handleChange() : null}
    >
      {props.value}
    </Button>
  );
};
