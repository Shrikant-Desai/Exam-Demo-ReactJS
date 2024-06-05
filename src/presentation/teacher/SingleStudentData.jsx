import React from "react";
import singleStudentContainer from "../../container/teacher/singleStudent.container";
import EDStack from "../../shared/EDStack";
import { EDInput } from "../../shared/EDInput";
import EDTable from "../../shared/EDTable";
import EDTypography from "../../shared/EDTypography";
import EDBox from "../../shared/EDBox";
import { API_STATUS_SUCCESS } from "../../utils/constant";
import { EDButton } from "../../shared/EDButton";
import EDTableSkeleton from "../../shared/EDTableSkeleton";

const SingleStudentData = () => {
  const {
    apiData,
    columnsArr,
    rowsArr,
    tableHeight,
    tableWidth,
    handleSearch,
    rowsPerPageArr,
    handleClickToPrevRoute,
  } = singleStudentContainer();

  return (
    <EDStack direction="column">
      <EDBox>
        <EDStack
          direction="column"
          alignItems={apiData?.loading ? "center" : "start"}
          justifyContent="center"
        >
          {apiData?.loading ? (
            <EDTableSkeleton width={800} />
          ) : apiData?.data?.statusCode !== API_STATUS_SUCCESS ? (
            <EDTypography value="Session expired please login." variant="h5" />
          ) : (
            <>
              <EDBox sx={{ maxWidth: 200, p: 4 }}>
                <EDButton
                  handleChange={handleClickToPrevRoute}
                  size="medium"
                  value="Go Back"
                  variant="contained"
                />
              </EDBox>
              <EDStack sx={{ pl: 5 }} spacing={2}>
                <EDTypography
                  value={`Name : ${apiData?.data?.data?.[0]?.name}`}
                  variant="h5"
                />
                <EDTypography
                  value={`Email : ${apiData?.data?.data?.[0]?.email}`}
                  variant="h5"
                />
              </EDStack>
              {apiData?.data?.data?.[0]?.Result?.length === 0 ? (
                <EDTypography
                  sx={{ p: 3, color: "red" }}
                  value="Student hasn't give any exam till now."
                  variant="h5"
                />
              ) : (
                <EDStack
                  direction="column"
                  alignItems="center"
                  sx={{ width: "100%" }}
                >
                  <EDInput
                    size="medium"
                    label="Search Here"
                    variant="standard"
                    handleChange={handleSearch}
                  />

                  <EDStack alignItems="center">
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
                </EDStack>
              )}
            </>
          )}
        </EDStack>
      </EDBox>
    </EDStack>
  );
};

export default SingleStudentData;
