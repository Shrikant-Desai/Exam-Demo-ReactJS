import { useEffect, useState } from "react";
import { fetchDataThunkFunc } from "../../utils/api/fetchData";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { END_POINTS } from "../../utils/api/baseURLs";
import { API_GET } from "../../utils/constant";

const SingleStudentContainer = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const apiData = useSelector((state) => state.fetchData);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const studentID = searchParams.get("id");

  useEffect(() => {
    dispatch(
      fetchDataThunkFunc({
        url: `${END_POINTS.GET_SINGLE_STUDENTS}${studentID}`,
        method: API_GET,
        isToastMessage: false,
        navigate,
      })
    );
  }, []);
  // useEffect(() => {
  //   return () => {
  //     console.log("Successfully unmounted");
  //     source.cancel("Active Student Component got unmounted");
  //   };
  // });

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };
  const handleClickToPrevRoute = () => {
    navigate(-1);
  };

  const filterData = (arr) => {
    const filteredArr = arr?.filter((row) => {
      return (
        row.subjectName.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.studentId.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.rank.toString().toLowerCase().includes(searchValue.toLowerCase())
      );
    });
    return filteredArr;
  };

  const tableHeight = 550;
  const tableWidth = 1000;
  const rowsPerPageArr = [5, 10, 15];
  const columnsArr = [
    // { id: "_id", label: "ID", minWidth: 170 },
    {
      id: "studentId",
      label: "StudentID",
      minWidth: 170,
    },

    {
      id: "subjectName",
      label: "Subject Name",
      minWidth: 170,
    },
    { id: "rank", label: "Rank", minWidth: 100 },
    {
      id: "score",
      label: "Score",
      minWidth: 100,
      align: "right",
    },

    {
      id: "resultStatus",
      label: "Result Status",
      minWidth: 170,
      align: "right",
    },
  ];

  const updatedRowArr = apiData?.data?.data?.[0]?.Result;

  const rowsArr = searchValue ? filterData(updatedRowArr) : updatedRowArr;
  return {
    rowsArr,
    columnsArr,
    tableHeight,
    apiData,
    tableWidth,
    handleSearch,
    rowsPerPageArr,
    handleClickToPrevRoute,
  };
};

export default SingleStudentContainer;
