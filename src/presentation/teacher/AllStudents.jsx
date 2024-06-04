import React from "react";
import EDSkeleton from "../../shared/EDSkeleton";
import EDBox from "../../shared/EDBox";
import EDStack from "../../shared/EDStack";
import { API_STATUS_SUCCESS } from "../../utils/constant";
import EDTypography from "../../shared/EDTypography";
import { Divider } from "@mui/material";
import { AllStudentDataContainer } from "../../container/teacher/allStudentData.container";
import EDTable from "../../shared/EDTable";
import { EDInput } from "../../shared/EDInput";

const AllStudents = () => {
  const {
    apiData,
    columnsArr,
    rowsArr,
    tableHeight,
    tableWidth,
    handleSearch,
    rowsPerPageArr,
  } = AllStudentDataContainer();

  return (
    <EDStack direction="column" alignItems="center">
      <EDBox>
        <Divider />
        <EDTypography
          sx={{ p: 4 }}
          value="All Students"
          align="center"
          variant="h5"
        />

        <EDStack direction="column" alignItems="center" justifyContent="center">
          {apiData?.loading ? (
            <EDBox sx={{ width: 800 }}>
              <EDSkeleton animation="wave" height={100} />
              <EDSkeleton animation="wave" height={40} />
              <EDSkeleton animation="wave" height={40} />
              <EDSkeleton animation="wave" height={40} />
            </EDBox>
          ) : apiData?.data?.statusCode !== API_STATUS_SUCCESS ? (
            <EDTypography value="Session expired please login." variant="h5" />
          ) : apiData?.data?.data?.length === 0 ? (
            <EDTypography
              value="You have not created any exam till now."
              variant="h5"
            />
          ) : (
            <EDStack direction="column">
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
