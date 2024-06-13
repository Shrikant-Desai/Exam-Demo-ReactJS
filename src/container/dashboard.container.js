import React, { useEffect, useState } from "react";
import { Logout } from "@mui/icons-material";

import { useNavigate, useOutlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearFetchData } from "../utils/api/fetchData";
import {
  LOCAL_AUTH_TOKEN,
  LOCAL_LOGIN_DETAILS,
  ROLES,
} from "../utils/constant";
import {
  studentDashboardDes,
  teacherDashboardDes,
} from "../description/user/dashboard.description";

const DashboardContainer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const outlet = useOutlet();
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = !!localStorage.getItem(LOCAL_LOGIN_DETAILS);
    isLoggedIn ? setIsLogin(true) : navigate("/signin");
  }, []);

  const dispatch = useDispatch();

  const logoutFunction = () => {
    localStorage.removeItem(LOCAL_AUTH_TOKEN);
    localStorage.removeItem(LOCAL_LOGIN_DETAILS);
    dispatch(clearFetchData());
    navigate("/signin");
  };
  const profileMenuData = [
    { text: "Log Out", icon: <Logout />, handleChange: logoutFunction },
  ];

  let drawerList;
  const loginDetails = JSON.parse(localStorage.getItem(LOCAL_LOGIN_DETAILS));

  if (loginDetails?.role === ROLES.TEACHER) {
    drawerList = teacherDashboardDes;
  } else {
    drawerList = studentDashboardDes;
  }
  return {
    drawerList,
    loginDetails,
    profileMenuData,
    logoutFunction,
    isLogin,
    outlet,
    isDrawerOpen,
    setIsDrawerOpen,
  };
};

export default DashboardContainer;
