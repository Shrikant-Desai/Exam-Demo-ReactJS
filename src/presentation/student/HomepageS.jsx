import React from "react";
import EDStack from "../../shared/EDStack";
import EDBox from "../../shared/EDBox";
import EDTypography from "../../shared/EDTypography";
import { Divider } from "@mui/material";
import EDTable from "../../shared/EDTable";
import { EDInput } from "../../shared/EDInput";
import EDTableSkeleton from "../../shared/EDTableSkeleton";
import homepageSContainer from "../../container/student/homepageS.container";
import { MESSAGES } from "../../description/student/studentModule.description";
import { DNF_TABLE_PROPS } from "../../description/forms/formsData.description";
const HomepageS = () => {
  const {
    currentLoginUser,
    apiData,
    allAPIsData,
    columnsArr,
    rowsArr,
    tableHeight,
    handleSearch,
    tableWidth,
    rowsPerPageArr,
  } = homepageSContainer();

  return (
    <EDStack direction="column" alignItems="center">
      <EDBox>
        <EDTypography
          value={`Hello ${currentLoginUser?.name}`}
          align="center"
          variant="h2"
        />
        <Divider />

        <EDStack direction="column" alignItems="center" justifyContent="center">
          {!allAPIsData?.allExamsForStudent || apiData?.loading || !rowsArr ? (
            <EDTableSkeleton width={800} />
          ) : (
            <EDStack direction="column">
              <EDTypography
                sx={{ p: 2 }}
                value={MESSAGES.ALL_EXAM_DETAILS}
                align="center"
                variant="h5"
              />
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

export default HomepageS;
