import React from "react";
import EDDrawer from "../../shared/EDDrawer";
import DashboardContainer from "../../container/dashboard.container";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const { drawerList, loginDetails, profileMenuData, isLogin } =
    DashboardContainer();

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
