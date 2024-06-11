import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataThunkFunc, source } from "../../utils/api/fetchData";
import { END_POINTS } from "../../utils/api/baseURLs";
import { useNavigate } from "react-router-dom";
import { API_GET, LOCAL_LOGIN_DETAILS } from "../../utils/constant";

const AllStudentDataContainer = () => {
  const currentLoginUser = JSON.parse(
    localStorage.getItem(LOCAL_LOGIN_DETAILS)
  );
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const apiData = useSelector((state) => state?.fetchData);

  useEffect(() => {
    dispatch(
      fetchDataThunkFunc({
        url: END_POINTS.GET_ALL_STUDENTS,
        method: API_GET,
        isToastMessage: false,
      })
    );
    // return () => {
    //   source.cancel("All Student Component got unmounted");
    // };
  }, []);

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
  const columnsArr = [
    { id: "_id", label: "ID", minWidth: 170 },
    { id: "status", label: " Status", minWidth: 100 },
    {
      id: "name",
      label: "Name",
      minWidth: 170,
      align: "right",
    },
    {
      id: "email",
      label: "Email",
      minWidth: 170,
      align: "right",
    },
    {
      id: "action",
      label: "Actions",
      minWidth: 170,
      align: "right",
    },
  ];

  const updatedRowArr = apiData?.data?.data?.map((row) => {
    row = {
      ...row,
      action: [{ text: "View", handleChange: viewStudentDetails }],
    };
    return row;
  });

  const rowsArr = searchValue ? filterData(updatedRowArr) : updatedRowArr;
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
