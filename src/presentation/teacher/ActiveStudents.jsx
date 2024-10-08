import React from "react";
import EDStack from "../../shared/EDStack";
import EDBox from "../../shared/EDBox";
import EDTypography from "../../shared/EDTypography";
import EDTableSkeleton from "../../shared/EDTableSkeleton";
import { API_STATUS_SUCCESS } from "../../utils/constant";
import { EDInput } from "../../shared/EDInput";
import EDTable from "../../shared/EDTable";
import activeStudentsContainer from "../../container/teacher/activeStudents.container";
import { MESSAGES } from "../../description/teacher/teacherModule.description";
import { DNF_TABLE_PROPS } from "../../description/forms/formsData.description";

const ActiveStudents = () => {
  const {
    apiData,
    columnsArr,
    rowsArr,
    tableHeight,
    tableWidth,
    handleSearch,
    rowsPerPageArr,
  } = activeStudentsContainer();

  return (
    <EDStack direction="column" alignItems="center">
      <EDBox>
        <EDTypography
          sx={{ p: 4 }}
          value={MESSAGES.ACTIVE_STUDENTS}
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

export default ActiveStudents;
