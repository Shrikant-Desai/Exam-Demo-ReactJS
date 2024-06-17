import React from "react";
import EDBox from "../../shared/EDBox";
import EDStack from "../../shared/EDStack";
import { API_STATUS_SUCCESS } from "../../utils/constant";
import EDTypography from "../../shared/EDTypography";
import EDTable from "../../shared/EDTable";
import { EDInput } from "../../shared/EDInput";
import EDTableSkeleton from "../../shared/EDTableSkeleton";
import allStudentDataContainer from "../../container/teacher/allStudentData.container";
import { MESSAGES } from "../../description/teacher/teacherModule.description";
import { DNF_TABLE_PROPS } from "../../description/forms/formsData.description";

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
          value={MESSAGES.ALL_STUDENT}
          align="center"
          variant="h4"
        />

        <EDStack direction="column" alignItems="center" justifyContent="center">
          {apiData?.loading ||
          apiData?.data?.statusCode !== API_STATUS_SUCCESS ? (
            <EDTableSkeleton width={800} />
          ) : (
            <EDStack direction="column" spacing={3}>
              <EDInput
                size="small"
                label="Search Here"
                variant="standard"
                handleChange={handleSearch}
              />
              {rowsArr?.length === 0 ? (
                <>
                  <EDTable {...DNF_TABLE_PROPS} />
                </>
              ) : (
                <EDTable
                  {...{
                    columnsArr,
                    rowsArr,
                    tableHeight,
                    tableWidth,
                    rowsPerPageArr,
                  }}
                />
              )}
            </EDStack>
          )}
        </EDStack>
      </EDBox>
    </EDStack>
  );
};

export default AllStudents;
