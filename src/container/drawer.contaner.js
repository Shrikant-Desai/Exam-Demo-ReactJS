import { useTheme } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOCAL_LOGIN_DETAILS } from "../utils/constant";

const DrawerContainer = (setIsDrawerOpen) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState(
    JSON.parse(localStorage.getItem(LOCAL_LOGIN_DETAILS))?.name
  );

  const allAPIsData = useSelector((state) => state.apisData);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
    setOpen(true);
  };

  useEffect(() => {
    if (allAPIsData?.Username) {
      setUsername(allAPIsData?.Username?.[0]);
    }
  }, [allAPIsData]);
  const handleDrawerClose = () => {
    setOpen(false);
    setIsDrawerOpen(false);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  return {
    navigate,
    theme,
    menuId,
    handleProfileMenuOpen,
    handleMenuClose,
    handleDrawerClose,
    isMenuOpen,
    handleDrawerOpen,
    open,
    anchorEl,
    username,
  };
};

export default DrawerContainer;
