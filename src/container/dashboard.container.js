import React, { useEffect, useState } from "react";
import {
  AccountCircle,
  Article,
  EditNote,
  Logout,
  People,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearFetchData } from "../utils/api/fetchData";

const DashboardContainer = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = !!localStorage.getItem("loginDetails");
    isLoggedIn ? setIsLogin(true) : navigate("/signin");
  });

  const dispatch = useDispatch();

  const teacherDashboardDes = {
    beforeDiv: [
      {
        text: "Create Exam",
        icon: <EditNote />,
        navigate: "teacher/create-exam",
      },
      { text: "Your Exams", icon: <Article />, navigate: "teacher" },
      {
        text: "All Students Data",
        icon: <People />,
        navigate: "teacher/all-students",
      },
    ],
    afterDiv: [],
  };

  const studentDashboardDes = {
    beforeDiv: [
      { text: "All Exams", icon: <EditNote />, navigate: "student/all-exams" },
    ],
    afterDiv: [
      { text: "Profile", icon: <AccountCircle />, navigate: "student/profile" },
    ],
  };
  // const { logoutFunction } = DashboardContainer();
  const logoutFunction = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("loginDetails");
    dispatch(clearFetchData());
    navigate("/signin");
  };
  const profileMenuData = [
    { text: "Log Out", icon: <Logout />, handleChange: logoutFunction },
  ];

  let drawerList;
  const loginDetails = JSON.parse(localStorage.getItem("loginDetails"));

  if (loginDetails?.role === "teacher") {
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
  };
};

export default DashboardContainer;
