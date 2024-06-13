import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataThunkFunc } from "../../utils/api/fetchData";
import { END_POINTS } from "../../utils/api/baseURLs";
import { useNavigate } from "react-router-dom";
import { API_DELETE, API_GET, LOCAL_LOGIN_DETAILS } from "../../utils/constant";

const HomepageTContainer = () => {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [deleteID, setDeleteID] = React.useState(false);
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
        url: END_POINTS.VIEW_ALL_EXAM,
        method: API_GET,
        isToastMessage: false,
        navigate,
      })
    );
  }, []);
  const handleEdit = (id) => {
    const data = apiData?.data?.data?.filter((data) => data?.["_id"] === id);

    navigate(`/dashboard/teacher/edit-exam/?id=${id}`, {
      state: JSON.stringify(data),
    });
  };

  const handleDelete = () => {
    setIsDialogOpen(false);
    const response = dispatch(
      fetchDataThunkFunc({
        url: `${END_POINTS.DELETE_EXAM}${deleteID}`,
        method: API_DELETE,
        isToastMessage: true,
        navigate,
      })
    );
    response.then(() => {
      dispatch(
        fetchDataThunkFunc({
          url: END_POINTS.VIEW_ALL_EXAM,
          method: API_GET,
          isToastMessage: false,
          navigate,
        })
      );
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
  const columnsArr = [
    { id: "_id", label: "ID", minWidth: 170 },
    { id: "subjectName", label: "Subject Name", minWidth: 100 },
    {
      id: "notes",
      label: "Notes",
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
      id: "__v",
      label: "__V",
      minWidth: 170,
      align: "right",
    },
    {
      id: "action",
      label: "Actions",
      minWidth: 170,
      align: "center",
    },
  ];
  const tableHeight = 550;
  const tableWidth = "100%";
  let updatedRowArr;
  if (Array.isArray(apiData?.data?.data) && apiData?.data?.data?.length !== 0) {
    updatedRowArr = apiData?.data?.data?.map((row) => {
      row = {
        ...row,
        action: [
          { text: "Edit", handleChange: handleEdit },
          { text: "Delete", handleChange: handleDialogClick },
        ],
      };
      return row;
    });
  }
  const rowsPerPageArr = [5, 10, 20];
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
    isDialogOpen,
    handleDialogClose,
    handleDelete,
  };
};
export default HomepageTContainer;
