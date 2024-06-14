import { useEffect, useState } from "react";
import { fetchDataThunkFunc } from "../../utils/api/fetchData";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { END_POINTS } from "../../utils/api/baseURLs";
import { API_GET } from "../../utils/constant";
import { SINGLE_STUDENT_TABLE_FIELDS } from "../../description/teacher/teacherModule.description";

const SingleStudentContainer = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const apiData = useSelector((state) => state.fetchData);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const studentID = searchParams.get("id");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(
      fetchDataThunkFunc({
        url: `${END_POINTS.GET_SINGLE_STUDENTS}${studentID}`,
        method: API_GET,
        isToastMessage: false,
        navigate,
        signal,
      })
    );
    return () => {
      controller.abort();
    };
  }, []);

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
  const columnsArr = SINGLE_STUDENT_TABLE_FIELDS;
  const tableHeight = 550;
  const tableWidth = 1000;
  const rowsPerPageArr = [5, 10, 15];

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
