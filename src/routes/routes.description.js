import { Typography } from "@mui/material";
import SignIn from "../presentation/user/SignIn";
import SignUp from "../presentation/user/SignUp";
import LoginSidebar from "../presentation/user/CommonLayout";
import ForgotPassword from "../presentation/user/ForgotPassword";
import Dashboard from "../presentation/pages/Dashboard";
import HomePage from "../presentation/user/HomePage";
import AllStudents from "../presentation/teacher/AllStudents";
import HomePageS from "../presentation/student/HomepageS";
import ProfileS from "../presentation/student/ProfileS";
import HomepageT from "../presentation/teacher/HomepageT";
import ProtectedRoleRoute from "./protectedRoleRoute";
import SingleStudentData from "../presentation/teacher/SingleStudentData";
import NewPassword from "../presentation/user/NewPassword";
import ResetPassword from "../presentation/user/ResetPassword";
import ActiveStudents from "../presentation/teacher/ActiveStudents";
import CreateExam from "../presentation/teacher/CreateExam";
import EditExam from "../presentation/teacher/EditExam";
import GiveExam from "../presentation/student/GiveExam";
import EditProfile from "../presentation/student/EditProfile";
import ProfileT from "../presentation/teacher/ProfileT";

const studentRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        element: <ProtectedRoleRoute accessRole="teacher" />,
        children: [
          {
            path: "teacher",
            element: <HomepageT />,
          },

          {
            path: "teacher/all-students",
            element: <AllStudents />,
          },
          {
            path: "teacher/active-students",
            element: <ActiveStudents />,
          },
          {
            path: "teacher/viewStudentDetail/*",
            element: <SingleStudentData />,
          },
          {
            path: "teacher/create-exam",
            element: <CreateExam />,
          },
          {
            path: "teacher/edit-exam/*",
            element: <EditExam />,
          },
          {
            path: "teacher/profile",
            element: <ProfileT />,
          },
        ],
      },
      {
        element: <ProtectedRoleRoute accessRole="student" />,
        children: [
          {
            path: "student",
            element: <HomePageS />,
          },
          {
            path: "student/profile",
            element: <ProfileS />,
          },
          {
            path: "student/edit-student",
            element: <EditProfile />,
          },

          {
            path: "student/give-exam/*",
            element: <GiveExam />,
          },
        ],
      },
    ],
  },
];
const userRoutes = [
  {
    element: <HomePage />,
    path: "/",
  },
  {
    path: "reset-password",
    element: <ResetPassword />,
  },
  {
    element: <LoginSidebar />,
    children: [
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "newPassword/*",
    element: <NewPassword />,
  },

  {
    path: "*",
    element: (
      <Typography variant="h3" gutterBottom>
        Not Found...
      </Typography>
    ),
  },
];

export const routesDescription = [...userRoutes, ...studentRoutes];
