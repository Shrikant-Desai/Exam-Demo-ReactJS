import { Typography } from "@mui/material";
import SignIn from "../presentation/user/SignIn";
import SignUp from "../presentation/user/SignUp";
import LoginSidebar from "../presentation/user/CommonLayout";
import ForgotPassword from "../presentation/user/ForgotPassword";
import Dashboard from "../presentation/pages/Dashboard";
import HomePage from "../presentation/user/HomePage";
import DashboardT from "../presentation/teacher/HomepageT";
import ProfileT from "../presentation/teacher/ProfileT";
import AllStudents from "../presentation/teacher/AllStudents";
import CreateExam from "../presentation/teacher/CreateExam";
import HomePageS from "../presentation/student/HomepageS";
import ProfileS from "../presentation/student/ProfileS";
import AllExams from "../presentation/student/AllExams";
import HomepageT from "../presentation/teacher/HomepageT";
import ProtectedRoleRoute from "./protectedRoleRoute";

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
            path: "teacher/profile",
            element: <ProfileT />,
          },
          {
            path: "teacher/all-students",
            element: <AllStudents />,
          },
          {
            path: "teacher/create-exam",
            element: <CreateExam />,
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
            path: "student/all-exams",
            element: <AllExams />,
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
    path: "newPassword",
    element: <ForgotPassword />,
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
