import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataThunkFunc } from "../../utils/api/fetchData";
import { END_POINTS } from "../../utils/api/baseURLs";
import { useNavigate } from "react-router-dom";
import { API_GET, LOCAL_LOGIN_DETAILS } from "../../utils/constant";
import { ACTIVE_STUDENT_TABLE_FIELDS } from "../../description/teacher/teacherModule.description";
import { addAPIData } from "../../redux/slices/apisData.slice";

const ActiveStudentsContainer = () => {
  const currentLoginUser = JSON.parse(
    localStorage.getItem(LOCAL_LOGIN_DETAILS)
  );
  const [data, setData] = useState();
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allAPIsData = useSelector((state) => state.apisData);

  const apiData = useSelector((state) => state?.fetchData);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const dispatchFunc = async () => {
      const response = await dispatch(
        fetchDataThunkFunc({
          url: END_POINTS.GET_ACTIVE_STUDENTS,
          method: API_GET,
          isToastMessage: false,
          navigate,
          signal,
        })
      );
      dispatch(
        addAPIData({
          name: "activeStudents",
          data: response?.payload?.data,
        })
      );
    };
    dispatchFunc();
    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    if (allAPIsData?.activeStudents) {
      const data = allAPIsData.activeStudents?.data?.map((row) => {
        row = {
          ...row,
          action: [{ text: "View", handleChange: viewStudentDetails }],
        };
        return row;
      });
      setData(data);
    }
  }, [allAPIsData]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const viewStudentDetails = (id) => {
    navigate(`/viewStudentDetail?id=${id} `);
  };

  const filterData = (arr) => {
    const filteredArr = arr?.filter((row) => {
      return (
        row.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.email.toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    return filteredArr;
  };

  const tableHeight = 550;
  const tableWidth = 1000;
  const rowsPerPageArr = [10, 25, 50];

  const columnsArr = ACTIVE_STUDENT_TABLE_FIELDS;
  const rowsArr = searchValue ? filterData(data) : data;
  return {
    tableHeight,
    currentLoginUser,
    apiData,
    columnsArr,
    rowsArr,
    tableWidth,
    handleSearch,
    rowsPerPageArr,
  };
};
export default ActiveStudentsContainer;
