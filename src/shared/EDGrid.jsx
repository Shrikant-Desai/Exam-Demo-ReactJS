import { Grid } from "@mui/material";
import React from "react";

const EDGrid = (props) => {
  const { children, ...rest } = props;
  return <Grid {...rest}>{children}</Grid>;
};

export default EDGrid;
