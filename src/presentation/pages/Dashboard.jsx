import React from "react";
import EDDrawer from "../../shared/EDDrawer";
import dashboardContainer from "../../container/dashboard.container";
import EDTypography from "../../shared/EDTypography";
import EDBox from "../../shared/EDBox";

const Dashboard = () => {
  const {
    drawerList,
    loginDetails,
    profileMenuData,
    isLogin,
    outlet,
    isDrawerOpen,
    setIsDrawerOpen,
  } = dashboardContainer();

  if (isLogin) {
    return (
      <>
        <EDDrawer
          {...{ drawerList, loginDetails, profileMenuData, setIsDrawerOpen }}
        />
        <EDBox sx={{ ml: isDrawerOpen ? 31 : 0 }}>
          {outlet || (
            <EDTypography align="center" variant="h2" value="Dashboard page" />
          )}
        </EDBox>
      </>
    );
  }
};

export default Dashboard;
