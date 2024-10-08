import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataThunkFunc } from "../../utils/api/fetchData";
import { END_POINTS } from "../../utils/api/baseURLs";
import { useNavigate } from "react-router-dom";
import { API_GET } from "../../utils/constant";
import { addAPIData } from "../../redux/slices/apisData.slice";
import useAbortController from "../../hooks/useAbortController";

const ProfilePageSContainer = () => {
  const [profileData, setProfileData] = useState([]);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const allAPIsData = useSelector((state) => state.apisData);
  const apiData = useSelector((state) => state?.fetchData);
  const abortController = useAbortController();

  useEffect(() => {
    const dispatchFunc = async () => {
      const response = await dispatch(
        fetchDataThunkFunc({
          url: END_POINTS.GET_STUDENT_PROFILE,
          method: API_GET,
          isToastMessage: false,
          navigate,
          signal: abortController.signal,
        })
      );

      dispatch(
        addAPIData({
          name: "profile",
          data: response?.payload?.data,
        })
      );
    };
    dispatchFunc();
  }, []);

  useEffect(() => {
    if (allAPIsData?.profile) {
      const data =
        allAPIsData?.profile?.data &&
        Object.entries(allAPIsData?.profile?.data);
      setProfileData(data);
    }
  }, [allAPIsData]);

  const handleResetPassword = () => {
    navigate(`/reset-password`);
  };
  const handleChangeUserName = () => {
    navigate(`/edit-student`);
  };

  return {
    apiData,
    profileData,
    handleResetPassword,
    handleChangeUserName,
  };
};
export default ProfilePageSContainer;
