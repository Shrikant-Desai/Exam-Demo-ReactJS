import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { LOCAL_LOGIN_DETAILS } from "../utils/constant";

const ProtectedRoleRoute = ({ accessRole }) => {
  const currentRole = JSON.parse(
    localStorage.getItem(LOCAL_LOGIN_DETAILS)
  )?.role;

  return (
    <>{currentRole === accessRole ? <Outlet /> : <Navigate to="/signin" />}</>
  );
};

export default ProtectedRoleRoute;
