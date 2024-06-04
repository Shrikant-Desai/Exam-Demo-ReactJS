import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoleRoute = ({ accessRole }) => {
  const currentRole = JSON.parse(localStorage.getItem("loginDetails"))?.role;

  return (
    <>{currentRole === accessRole ? <Outlet /> : <Navigate to="/signin" />}</>
  );
};

export default ProtectedRoleRoute;
