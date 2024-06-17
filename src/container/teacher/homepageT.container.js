import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataThunkFunc } from "../../utils/api/fetchData";
import { END_POINTS } from "../../utils/api/baseURLs";
import { useNavigate } from "react-router-dom";
import { API_DELETE, API_GET, LOCAL_LOGIN_DETAILS } from "../../utils/constant";
import { EXAM_TABLE_FIELDS } from "../../description/teacher/teacherModule.description";
import { addAPIData } from "../../redux/slices/apisData.slice";

const HomepageTContainer = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [data, setData] = useState();
  const [deleteID, setDeleteID] = React.useState(false);
  const currentLoginUser = JSON.parse(
    localStorage.getItem(LOCAL_LOGIN_DETAILS)
  );

  const allAPIsData = useSelector((state) => state.apisData);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const apiData = useSelector((state) => state?.fetchData);

  const dispatchFunc = async (signal) => {
    const response = await dispatch(
      fetchDataThunkFunc({
        url: END_POINTS.VIEW_ALL_EXAM,
        method: API_GET,
        isToastMessage: false,
        navigate,
        signal,
      })
    );
    dispatch(
      addAPIData({
        name: "examsCreated",
        data: response?.payload?.data,
      })
    );
  };
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    dispatchFunc(signal);
    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    if (allAPIsData?.examsCreated) {
      const data = allAPIsData.examsCreated?.data?.map((row) => {
        row = {
          ...row,
          action: [
            { text: "Edit", handleChange: handleEdit },
            { text: "Delete", handleChange: handleDialogClick },
          ],
        };
        return row;
      });
      setData(data);
    }
  }, [allAPIsData]);

  const handleEdit = (id) => {
    const editExamData = allAPIsData?.examsCreated?.data?.filter(
      (data) => data?.["_id"] === id
    );

    navigate(`/edit-exam/?id=${id}`, {
      state: JSON.stringify(editExamData),
    });
  };

  const handleDelete = () => {
    const response = dispatch(
      fetchDataThunkFunc({
        url: `${END_POINTS.DELETE_EXAM}${deleteID}`,
        method: API_DELETE,
        isToastMessage: true,
        navigate,
      })
    );
    response.then(() => {
      setIsDialogOpen(false);
      dispatchFunc();
    });
  };

  const handleDialogClick = (id) => {
    setIsDialogOpen(true);
    setDeleteID(id);
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

  const rowsPerPageArr = [5, 10, 20];
  const rowsArr = searchValue ? filterData(data) : data;
  const columnsArr = EXAM_TABLE_FIELDS;
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
    handleDialogClose,
    handleDelete,
    searchValue,
  };
};
export default HomepageTContainer;
