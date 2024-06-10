import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { fetchDataThunkFunc } from "../../utils/api/fetchData";
import { END_POINTS } from "../../utils/api/baseURLs";

const EditExamContainer = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const id = searchParams.get("id");
  const location = useLocation();
  console.log("location: " + location.state);

  const apiData = useSelector((state) => state.fetchData);

  useEffect(() => {
    dispatch(
      fetchDataThunkFunc({
        url: `${END_POINTS.VIEW_SINGLE_EXAM}${id}`,
        method: "Get",
        isToastMessage: false,
      })
    );
  }, []);

  console.log("apiData", apiData);

  return <div>EditExamContainer</div>;
};

export default EditExamContainer;
