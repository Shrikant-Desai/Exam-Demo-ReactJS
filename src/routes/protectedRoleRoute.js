import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const ProtectedRoleRoute = ({ accessRole }) => {
  const navigate = useNavigate();
  const currentRole = JSON.parse(localStorage.getItem("loginDetails"))?.role;
  console.log("current role: " + currentRole, "Access Role: " + accessRole);

  useEffect(() => {
    if (currentRole === accessRole) {
      <Outlet />;
    } else {
      navigate("/signin");
    }
  });
};

export default ProtectedRoleRoute;
