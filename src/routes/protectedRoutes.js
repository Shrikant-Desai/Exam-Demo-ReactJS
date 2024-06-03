import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const currentLogger = JSON.parse(localStorage.getItem("loginDetails"));

  useEffect(() => {
    if (currentLogger) {
      <Outlet />;
    } else {
      navigate("/signin");
    }
  });
};

export default ProtectedRoutes;
