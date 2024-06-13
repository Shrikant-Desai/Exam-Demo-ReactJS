import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataThunkFunc } from "../../utils/api/fetchData";
import { END_POINTS } from "../../utils/api/baseURLs";
import { useNavigate } from "react-router-dom";
import { API_GET, LOCAL_LOGIN_DETAILS } from "../../utils/constant";
import { EXAM_TABLE_FIELDS } from "../../description/teacher/teacherModule.description";

const HomepageSContainer = () => {
  const currentLoginUser = JSON.parse(
    localStorage.getItem(LOCAL_LOGIN_DETAILS)
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const apiData = useSelector((state) => state?.fetchData);
  useEffect(() => {
    dispatch(
      fetchDataThunkFunc({
        url: END_POINTS.ALL_EXAMS,
        method: API_GET,
        isToastMessage: false,
        navigate,
      })
    );
  }, []);
  const handleGiveExam = (id) => {
    const data = apiData?.data?.data?.filter((data) => data?.["_id"] === id);
    navigate(`/dashboard/student/give-exam/?id=${id}`, {
      state: JSON.stringify(data),
    });
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const filterData = (arr) => {
    const filteredArr = arr?.filter((row) => {
      return (
        row.subjectName.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.email.toLowerCase().includes(searchValue.toLowerCase()) ||
        row.notes
          ?.flat(Infinity)
          .toString()
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
    });
    return filteredArr;
  };

  const tableHeight = "100%";
  const tableWidth = 1000;
  let updatedRowArr;
  const data = apiData?.data?.data;
  if (Array.isArray(data) && data?.length !== 0) {
    updatedRowArr = data?.map((row) => {
      row = {
        ...row,
        notes: row.notes?.reduce((acc, note) => {
          acc = acc.length < 2 ? [...acc, note] : acc;
          return acc;
        }, []),
        action: [{ text: "Give Exam", handleChange: handleGiveExam }],
      };
      return row;
    });
  }
  const columnsArr = EXAM_TABLE_FIELDS.filter((item) => item.id !== "__v");
  const rowsPerPageArr = [20, 50, 100];
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
export default HomepageSContainer;
