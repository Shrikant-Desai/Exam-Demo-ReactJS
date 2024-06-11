import React from "react";
import EDDrawer from "../../shared/EDDrawer";
import dashboardContainer from "../../container/dashboard.container";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const { drawerList, loginDetails, profileMenuData, isLogin } =
    dashboardContainer();

  if (isLogin) {
    return (
      <>
        <EDDrawer {...{ drawerList, loginDetails, profileMenuData }} />
        <Outlet />
      </>
    );
  }
};

export default Dashboard;
