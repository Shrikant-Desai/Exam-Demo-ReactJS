import { useRoutes } from "react-router-dom";
import React from "react";
import SimpleForm from "../pages/SimpleForm";
import UserDetailsForm from "../pages/UserDetailsForm";
import NotFound from "../pages/NotFound";

export default function RoutesComp() {
  let element = useRoutes([
    {
      path: "/",
      element: <SimpleForm />,
    },
    { path: "/AdvanceUserDetailsForm", element: <UserDetailsForm /> },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return element;
}
