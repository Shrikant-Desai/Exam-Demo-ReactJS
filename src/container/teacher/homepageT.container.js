import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataThunkFunc } from "../../utils/api/fetchData";
import { END_POINTS } from "../../utils/api/baseURLs";
import { useNavigate } from "react-router-dom";

const HomepageTContainer = () => {
  const currentLoginUser = JSON.parse(localStorage.getItem("loginDetails"));
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const apiData = useSelector((state) => state?.fetchData);
  useEffect(() => {
    dispatch(
      fetchDataThunkFunc({
        url: END_POINTS.VIEW_ALL_EXAM,
        method: "Get",
        isToastMessage: false,
      })
    );
  }, []);
  const handleEdit = (id) => {
    navigate(`/dashboard/teacher/edit-exam/?id=${id}`);
    console.log("test id", id);
  };

  const handleDelete = (id) => {
    console.log("test id", id);
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
  const tableWidth = 1000;
  let updatedRowArr;
  if (Array.isArray(apiData?.data?.data) && apiData?.data?.data?.length !== 0) {
    updatedRowArr = apiData?.data?.data?.map((row) => {
      row = {
        ...row,
        action: [
          { text: "Edit", handleChange: handleEdit },
          { text: "Delete", handleChange: handleDelete },
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
  };
};
export default HomepageTContainer;
