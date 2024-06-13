import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataThunkFunc } from "../../utils/api/fetchData";
import { END_POINTS } from "../../utils/api/baseURLs";
import { useNavigate } from "react-router-dom";
import { API_GET, LOCAL_LOGIN_DETAILS } from "../../utils/constant";
import { ALL_STUDENT_TABLE_FIELDS } from "../../description/teacher/teacherModule.description";
import { addAPIData } from "../../redux/slices/apisData.slice";

const AllStudentDataContainer = () => {
  const currentLoginUser = JSON.parse(
    localStorage.getItem(LOCAL_LOGIN_DETAILS)
  );
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const apiData = useSelector((state) => state?.fetchData);
  const allAPIsData = useSelector((state) => state.apisData);
  useEffect(() => {
    const dispatchFunc = async () => {
      const response = await dispatch(
        fetchDataThunkFunc({
          url: END_POINTS.GET_ALL_STUDENTS,
          method: API_GET,
          isToastMessage: false,
          navigate,
        })
      );
      dispatch(
        addAPIData({
          name: "allStudents",
          data: response?.payload?.data,
        })
      );
    };
    dispatchFunc();
  }, []);

  useEffect(() => {
    if (allAPIsData?.allStudents) {
      const data = allAPIsData.allStudents?.data?.map((row) => {
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
    navigate(`/dashboard/teacher/viewStudentDetail?id=${id} `);
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

  const columnsArr = ALL_STUDENT_TABLE_FIELDS;
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
export default AllStudentDataContainer;
