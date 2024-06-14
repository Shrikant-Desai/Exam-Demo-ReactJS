import React from "react";
import EDDrawer from "../../shared/EDDrawer";
import dashboardContainer from "../../container/dashboard.container";
import EDTypography from "../../shared/EDTypography";
import EDBox from "../../shared/EDBox";
import { ROLES } from "../../utils/constant";
import HomepageT from "../teacher/HomepageT";
import HomepageS from "../student/HomepageS";

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
          {outlet ? (
            outlet
          ) : loginDetails?.role === ROLES.TEACHER ? (
            <HomepageT />
          ) : (
            <HomepageS />
          )}
        </EDBox>
      </>
    );
  }
};

export default Dashboard;
