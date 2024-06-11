import React, { useEffect, useState } from "react";
import {
  AccountCircle,
  Article,
  EditNote,
  Logout,
  People,
  PeopleAltOutlined,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearFetchData } from "../utils/api/fetchData";
import {
  LOCAL_AUTH_TOKEN,
  LOCAL_LOGIN_DETAILS,
  ROLES,
} from "../utils/constant";

const DashboardContainer = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = !!localStorage.getItem(LOCAL_LOGIN_DETAILS);
    isLoggedIn ? setIsLogin(true) : navigate("/signin");
  }, []);

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
      {
        text: "Active Students Data",
        icon: <PeopleAltOutlined />,
        navigate: "teacher/active-students",
      },
    ],
    afterDiv: [],
  };

  const studentDashboardDes = {
    beforeDiv: [{ text: "All Exams", icon: <EditNote />, navigate: "student" }],
    afterDiv: [
      { text: "Profile", icon: <AccountCircle />, navigate: "student/profile" },
    ],
  };
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
  };
};

export default DashboardContainer;
