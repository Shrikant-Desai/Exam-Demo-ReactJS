import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfilePageTContainer = () => {
  const [profileData, setProfileData] = useState([]);

  const navigate = useNavigate();
  const apiData = useSelector((state) => state?.fetchData);

  useEffect(() => {
    const loginDetails = JSON.parse(localStorage.getItem("loginDetails"));
    const data = Object.entries(loginDetails).filter(
      ([key, _]) => key !== "token"
    );
    setProfileData(data);
  }, []);

  const handleResetPassword = () => {
    navigate(`/reset-password`);
  };

  return {
    apiData,
    profileData,
    handleResetPassword,
  };
};
export default ProfilePageTContainer;