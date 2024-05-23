import { Typography } from "@mui/material";
// import { styled } from "@mui/system";
import React from "react";

export const EDErrorDiv = ({ formErrors, item }) => {
  // const CustomDiv = styled(Typography)({
  //   color: "red",
  // });
  return (
    // <Stack
    //   direction="row"
    //   justifyContent="flex-start"
    //   alignItems="flex-start"
    //   spacing={1}
    // >
    //   <CustomDiv>{formErrors?.[`${item?.fieldName}Error`]}</CustomDiv>
    // </Stack>
    <Typography sx={{ color: "red" }}>
      {formErrors?.[`${item?.fieldName}Error`] || ""}
    </Typography>
  );
};
