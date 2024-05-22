import { Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const Login = () => {
  const handleChange = () => {
    console.log("Hello World");
  };

  const MyCustomComponent = styled(Typography)({
    color: "red",
  });

  return (
    <div>
      <TextField
        required
        defaultValue=""
        placeholder="Enter name"
        onChange={() => handleChange()}
      />

      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={1}
      >
        <MyCustomComponent> Errors is</MyCustomComponent>
      </Stack>
    </div>
  );
};

export default Login;
