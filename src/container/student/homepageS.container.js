import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataThunkFunc } from "../../utils/api/fetchData";
import { END_POINTS } from "../../utils/api/baseURLs";
import { useNavigate } from "react-router-dom";
import { API_GET, LOCAL_LOGIN_DETAILS } from "../../utils/constant";
import { EXAM_TABLE_FIELDS } from "../../description/teacher/teacherModule.description";
import { addAPIData } from "../../redux/slices/apisData.slice";
import useAbortController from "../../hooks/useAbortController";

const HomepageSContainer = () => {
  const currentLoginUser = JSON.parse(
    localStorage.getItem(LOCAL_LOGIN_DETAILS)
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const allAPIsData = useSelector((state) => state.apisData);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [resultData, setResultData] = useState({});
  const [examData, setExamData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const apiData = useSelector((state) => state?.fetchData);
  const abortController = useAbortController();

  useEffect(() => {
    const dispatchFunc = async () => {
      const response = await dispatch(
        fetchDataThunkFunc({
          url: END_POINTS.ALL_EXAMS,
          method: API_GET,
          isToastMessage: false,
          navigate,
          signal: abortController.signal,
        })
      );
      dispatch(
        addAPIData({
          name: "allExamsForStudent",
          data: response?.payload?.data,
        })
      );
    };
    dispatchFunc();
  }, []);
  useEffect(() => {
    if (allAPIsData?.allExamsForStudent) {
      const data = allAPIsData.allExamsForStudent?.data?.map((row) => {
        row = {
          ...row,
          notes: row?.notes?.reduce((acc, note) => {
            acc = acc.length < 2 ? [...acc, note] : acc;
            return acc;
          }, []),
          action: [{ text: "Give Exam", handleChange: handleGiveExam }],
        };
        return row;
      });
      setExamData(data);
    }
  }, [allAPIsData]);
  const handleGiveExam = (id) => {
    const data = allAPIsData?.allExamsForStudent?.data?.filter(
      (data) => data?.["_id"] === id
    );
    navigate(`/give-exam/?id=${id}`, {
      state: JSON.stringify(data),
    });
  };

  const handleDialogClick = (id) => {
    const data = rowsArr.find((row) => row?.["_id"] === id);
    setResultData(data);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
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

  const tableHeight = 550;
  const tableWidth = 1000;

  const columnsArr = EXAM_TABLE_FIELDS;
  const rowsPerPageArr = [20, 50, 100];
  const rowsArr = searchValue ? filterData(examData) : examData;

  return {
    tableHeight,
    currentLoginUser,
    apiData,
    allAPIsData,
    columnsArr,
    rowsArr,
    tableWidth,
    handleSearch,
    rowsPerPageArr,
    isDialogOpen,
    handleDialogClick,
    handleDialogClose,
    resultData,
  };
};
export default HomepageSContainer;
