import React from "react";
import EDDrawer from "../../shared/EDDrawer";
import dashboardContainer from "../../container/dashboard.container";
import EDTypography from "../../shared/EDTypography";

const Dashboard = () => {
  const { drawerList, loginDetails, profileMenuData, isLogin, outlet } =
    dashboardContainer();

  if (isLogin) {
    return (
      <>
        <EDDrawer {...{ drawerList, loginDetails, profileMenuData }} />
        {outlet || (
          <EDTypography align="center" variant="h2" value="Dashboard page" />
        )}
      </>
    );
  }
};

export default Dashboard;
