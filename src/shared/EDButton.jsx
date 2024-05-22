// CRUDButton.js
import { Button } from "@mui/material";
import React from "react";

export const EDButton = (props) => {
  const { handleChange, isSubmitDisable, rulesData, fieldName, ...rest } =
    props;
  return (
    <Button
      disabled={isSubmitDisable}
      {...rest}
      onClick={handleChange ? () => handleChange() : null}
    >
      {props.value}
    </Button>
  );
};
