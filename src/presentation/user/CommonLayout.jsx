import React from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as LoginHomeImg } from "../../assets/LoginImage.svg";
import EDBox from "../../shared/EDBox";
import EDStack from "../../shared/EDStack";

const LoginSidebar = () => {
  return (
    <EDStack
      sx={{
        height: "100vh",
      }}
      justifyContent="center"
      alignItems="center"
    >
      <EDStack
        flexWrap="wrap"
        sx={{
          boxShadow: 3,
          borderRadius: 3,
          //   backgroundColor: "rgba(255, 255, 255,0.5)",
          backdropFilter: `blur(10px)`,
        }}
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <EDBox sx={{ background: "transparent", width: 500, height: 500 }}>
          <LoginHomeImg />
        </EDBox>
        <Outlet />
      </EDStack>
    </EDStack>
  );
};

export default LoginSidebar;
