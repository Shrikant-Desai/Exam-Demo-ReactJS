import { Typography } from "@mui/material";
import SignIn from "../presentation/user/SignIn";
import SignUp from "../presentation/user/SignUp";
import LoginSidebar from "../presentation/user/CommonLayout";
import ForgotPassword from "../presentation/user/ForgotPassword";
import Dashboard from "../presentation/student/Dashboard";

const studentRoutes = [
  {
    path: "/dashboard/student",
    element: <Dashboard />,
  },
  {
    path: "/student/profile",
  },
];
const userRoutes = [
  {
    element: <LoginSidebar />,
    children: [
      {
        path: "/",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/newPassword",
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
