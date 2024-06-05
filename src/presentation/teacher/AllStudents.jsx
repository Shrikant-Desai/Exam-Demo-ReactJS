import React from "react";
import EDBox from "../../shared/EDBox";
import EDStack from "../../shared/EDStack";
import { API_STATUS_SUCCESS } from "../../utils/constant";
import EDTypography from "../../shared/EDTypography";
import { Divider } from "@mui/material";
import EDTable from "../../shared/EDTable";
import { EDInput } from "../../shared/EDInput";
import EDTableSkeleton from "../../shared/EDTableSkeleton";
import allStudentDataContainer from "../../container/teacher/allStudentData.container";

const AllStudents = () => {
  const {
    apiData,
    columnsArr,
    rowsArr,
    tableHeight,
    tableWidth,
    handleSearch,
    rowsPerPageArr,
  } = allStudentDataContainer();

  return (
    <EDStack direction="column" alignItems="center">
      <EDBox>
        <EDTypography
          sx={{ p: 4 }}
          value="All Students"
          align="center"
          variant="h4"
        />

        <EDStack direction="column" alignItems="center" justifyContent="center">
          {apiData?.loading ? (
            <EDTableSkeleton width={800} />
          ) : apiData?.data?.statusCode !== API_STATUS_SUCCESS ? (
            <EDTypography
              sx={{ color: "red" }}
              value="Session expired please login."
              variant="h5"
            />
          ) : (
            <EDStack direction="column" spacing={3}>
              <EDInput
                size="small"
                label="Search Here"
                variant="standard"
                handleChange={handleSearch}
              />
              <EDTable
                {...{
                  columnsArr,
                  rowsArr,
                  tableHeight,
                  tableWidth,
                  rowsPerPageArr,
                }}
              />
            </EDStack>
          )}
        </EDStack>
      </EDBox>
    </EDStack>
  );
};

export default AllStudents;
