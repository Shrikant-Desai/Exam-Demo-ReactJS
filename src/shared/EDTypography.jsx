import { Typography } from "@mui/material";
import React from "react";

const EDTypography = (props) => {
  const { value, ...rest } = props;
  return <Typography {...rest}>{value}</Typography>;
};

export default EDTypography;
