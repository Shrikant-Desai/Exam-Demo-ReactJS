import React from "react";
import singleStudentContainer from "../../container/teacher/singleStudent.container";
import EDStack from "../../shared/EDStack";
import { EDInput } from "../../shared/EDInput";
import EDTable from "../../shared/EDTable";
import EDTypography from "../../shared/EDTypography";
import EDBox from "../../shared/EDBox";
import { API_STATUS_GENERATION_FAILED } from "../../utils/constant";
import { EDButton } from "../../shared/EDButton";
import EDTableSkeleton from "../../shared/EDTableSkeleton";
import { KeyboardBackspace } from "@mui/icons-material";
import { MESSAGES } from "../../description/teacher/teacherModule.description";
import { MESSAGES as STUD_MESSAGES } from "../../description/student/studentModule.description";
import { DNF_TABLE_PROPS } from "../../description/forms/formsData.description";

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
          ) : apiData?.data &&
            apiData?.data?.statusCode === API_STATUS_GENERATION_FAILED ? (
            <EDTypography
              sx={{ color: "red", pl: 5 }}
              variant="h4"
              value={STUD_MESSAGES.DATA_NOT_FOUND}
            />
          ) : (
            <>
              <EDBox sx={{ maxWidth: 200, p: 4 }}>
                <EDButton
                  handleChange={handleClickToPrevRoute}
                  size="medium"
                  value={<KeyboardBackspace />}
                  variant="contained"
                />
              </EDBox>
              <EDStack sx={{ pl: 5 }} spacing={2}>
                <EDTypography
                  value={`Name : ${apiData?.data?.data?.[0]?.name}`}
                  variant="h6"
                />
                <EDTypography
                  value={`Email : ${apiData?.data?.data?.[0]?.email}`}
                  variant="h6"
                />
              </EDStack>
              {apiData?.data?.data?.[0]?.Result?.length === 0 ? (
                <EDTypography
                  sx={{ pl: 5, pt: 2, color: "red" }}
                  value={MESSAGES.STUDENT_EXAMS}
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
