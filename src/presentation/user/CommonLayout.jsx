import React from "react";
import { Outlet } from "react-router-dom";
import LoginHomeImg from "../../assets/LoginImage.jpg";
import LoginBackgroundImage from "../../assets/LoginBackground.jpg";
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
        <EDBox sx={{ background: "transparent" }}>
          <img
            src={LoginHomeImg}
            className="login-image"
            alt="Login Pictures"
          />
        </EDBox>
        <Outlet />
      </EDStack>
    </EDStack>
  );
};

export default LoginSidebar;
