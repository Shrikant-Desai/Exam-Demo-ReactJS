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
          {apiData?.loading ? (
            <EDTableSkeleton width={800} />
          ) : apiData?.data?.statusCode === API_STATUS_SESSION_END ? (
            <EDTypography
              sx={{ color: "red" }}
              value="Session expired please login."
              variant="h5"
            />
          ) : !Array.isArray(apiData?.data?.data) ||
            apiData?.data?.data?.length === 0 ? (
            <></>
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
