import { Stack } from "@mui/material";
import React from "react";

const EDStack = (props) => {
  const { children, ...rest } = props;
  return <Stack {...rest}>{children}</Stack>;
};

export default EDStack;
