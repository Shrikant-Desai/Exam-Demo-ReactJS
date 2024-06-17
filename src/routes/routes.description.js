import { Typography } from "@mui/material";
import SignUp from "../presentation/user/SignUp";
import LoginSidebar from "../presentation/user/CommonLayout";
import ForgotPassword from "../presentation/user/ForgotPassword";
import Dashboard from "../presentation/pages/Dashboard";
import HomePage from "../presentation/user/HomePage";
import AllStudents from "../presentation/teacher/AllStudents";
import ProfileS from "../presentation/student/ProfileS";
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
import { ROLES } from "../utils/constant";
import Login from "../presentation/user/Login";

const studentRoutes = [
  {
    element: <Dashboard />,
    children: [
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        element: <ProtectedRoleRoute accessRole={ROLES.TEACHER} />,
        children: [
          {
            path: "all-students",
            element: <AllStudents />,
          },
          {
            path: "active-students",
            element: <ActiveStudents />,
          },
          {
            path: "viewStudentDetail/*",
            element: <SingleStudentData />,
          },
          {
            path: "create-exam",
            element: <CreateExam />,
          },
          {
            path: "edit-exam/*",
            element: <EditExam />,
          },
          {
            path: "teacher/profile",
            element: <ProfileT />,
          },
        ],
      },
      {
        element: <ProtectedRoleRoute accessRole={ROLES.STUDENT} />,
        children: [
          {
            path: "student/profile",
            element: <ProfileS />,
          },
          {
            path: "edit-student",
            element: <EditProfile />,
          },

          {
            path: "give-exam/*",
            element: <GiveExam />,
          },
        ],
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];
const userRoutes = [
  {
    element: <ProtectedRoleRoute accessRole={ROLES.USER} />,
    children: [
      {
        element: <HomePage />,
        path: "/",
      },

      {
        element: <LoginSidebar />,
        children: [
          {
            path: "login",
            element: <Login />,
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
    ],
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
