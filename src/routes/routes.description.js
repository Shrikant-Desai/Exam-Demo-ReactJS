import { Typography } from "@mui/material";
import SignIn from "../presentation/pages/Login/SignIn";
import SignUp from "../presentation/pages/Login/SignUp";

const studentRoutes = [
  {
    path: "/student/dashboard",
  },
  {
    path: "/student/profile",
  },
];
const userRoutes = [
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
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
