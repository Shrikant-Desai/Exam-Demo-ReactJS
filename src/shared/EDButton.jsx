// CRUDButton.js
import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";
import React from "react";

export const EDButton = (props) => {
  const {
    handleChange,
    isSubmitDisable,
    rulesData,
    fieldName,
    gridValues,
    isAPILoading,
    value,
    ...rest
  } = props;
  return (
    // <Button
    //   disabled={isSubmitDisable}
    //   {...rest}
    //   sx={{ width: "100%" }}
    //   onClick={handleChange ? () => handleChange() : null}
    // >
    //
    // </Button>
    <LoadingButton
      disabled={isSubmitDisable}
      {...rest}
      loading={isAPILoading}
      sx={{ width: "100%" }}
      onClick={handleChange ? () => handleChange() : null}
      loadingPosition="start"
      startIcon={props.startIcon || <></>}
    >
      {isAPILoading ? "Wait" : value}
      {/* {value} */}
    </LoadingButton>
  );
};
