import React from "react";
import EDStack from "../../shared/EDStack";
import EDBox from "../../shared/EDBox";
import EDTypography from "../../shared/EDTypography";
import { Divider } from "@mui/material";
import { HomepageTContainer } from "../../container/teacher/homepageT.container";
import EDTable from "../../shared/EDTable";
import EDSkeleton from "../../shared/EDSkeleton";
import { API_STATUS_SUCCESS } from "../../utils/constant";
import { EDInput } from "../../shared/EDInput";

const HomepageT = () => {
  const {
    currentLoginUser,
    apiData,
    columnsArr,
    rowsArr,
    tableHeight,
    handleSearch,
    tableWidth,
    rowsPerPageArr,
  } = HomepageTContainer();

  return (
    <EDStack direction="column" alignItems="center">
      <EDBox>
        <EDTypography
          value={`Hello ${currentLoginUser?.name}`}
          align="center"
          variant="h2"
        />
        <Divider />
        <EDTypography
          sx={{ p: 4 }}
          value="Exams Created By You"
          align="center"
          variant="h5"
        />

        <EDStack direction="column" alignItems="center" justifyContent="center">
          {apiData?.loading ? (
            <EDBox sx={{ width: 800 }}>
              <EDSkeleton animation="wave" height={40} />
              <EDSkeleton animation="wave" height={40} />
              <EDSkeleton animation="wave" height={40} />
              <EDSkeleton animation="wave" height={40} />
              <EDSkeleton animation="wave" height={40} />
            </EDBox>
          ) : apiData?.data?.statusCode !== API_STATUS_SUCCESS ? (
            <EDTypography value="Session expired please login." variant="h5" />
          ) : !Array.isArray(apiData?.data?.data) ||
            apiData?.data?.data?.length === 0 ? (
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

export default HomepageT;
