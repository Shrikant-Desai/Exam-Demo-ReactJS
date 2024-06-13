import { useTheme } from "@emotion/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const DrawerContainer = (setIsDrawerOpen) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
    setOpen(true);
  };

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
  };
};

export default DrawerContainer;
