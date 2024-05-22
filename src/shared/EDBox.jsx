import { Box } from "@mui/material";
import React from "react";

const EDBox = (props) => {
  const { children, ...rest } = props;
  return <Box {...rest}>{children}</Box>;
};

export default EDBox;
