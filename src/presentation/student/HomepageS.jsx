import React from "react";
import EDStack from "../../shared/EDStack";
import EDBox from "../../shared/EDBox";
import EDTypography from "../../shared/EDTypography";
import { Divider } from "@mui/material";
import EDTable from "../../shared/EDTable";
import { API_STATUS_SESSION_END } from "../../utils/constant";
import { EDInput } from "../../shared/EDInput";
import EDTableSkeleton from "../../shared/EDTableSkeleton";
import homepageSContainer from "../../container/student/homepageS.container";
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
                value="All Exams Details"
                align="center"
                variant="h5"
              />
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

export default HomepageS;
