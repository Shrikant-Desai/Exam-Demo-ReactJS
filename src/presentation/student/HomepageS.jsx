import React from "react";
import EDStack from "../../shared/EDStack";
import EDBox from "../../shared/EDBox";
import EDTypography from "../../shared/EDTypography";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
} from "@mui/material";
import EDTable from "../../shared/EDTable";
import { EDInput } from "../../shared/EDInput";
import EDTableSkeleton from "../../shared/EDTableSkeleton";
import homepageSContainer from "../../container/student/homepageS.container";
import { MESSAGES } from "../../description/student/studentModule.description";
import { DNF_TABLE_PROPS } from "../../description/forms/formsData.description";
import { EDButton } from "../../shared/EDButton";
import EDGrid from "../../shared/EDGrid";
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
    isDialogOpen,
    handleDialogClick,
    handleDialogClose,
    resultData,
  } = homepageSContainer();
  const dialogVar = (
    <Dialog
      open={isDialogOpen}
      keepMounted
      onClose={handleDialogClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle color={"#1976d2"} align="center">
        {"Result"}
      </DialogTitle>
      <DialogContent>
        <EDGrid container direction="column" spacing={2}>
          <EDGrid item>
            <EDStack direction="row" spacing={1}>
              <EDTypography value="Result Status : " variant={"h6"} />
              <EDTypography
                value={resultData?.Result?.[0]?.resultStatus}
                variant={"h6"}
              />
            </EDStack>
          </EDGrid>
          <EDGrid item>
            <EDStack direction="row" spacing={1}>
              <EDTypography value="Email : " variant={"h6"} />
              <EDTypography value={resultData?.email} variant={"h6"} />
            </EDStack>
          </EDGrid>
          <EDGrid item>
            <EDStack direction="row" spacing={1}>
              <EDTypography value="Subject : " variant={"h6"} />
              <EDTypography value={resultData?.subjectName} variant={"h6"} />
            </EDStack>
          </EDGrid>
          <EDGrid item>
            <EDStack direction="row" spacing={1}>
              <EDTypography value="Rank : " variant={"h6"} />
              <EDTypography
                value={resultData?.Result?.[0]?.rank}
                variant={"h6"}
              />
            </EDStack>
          </EDGrid>
          <EDGrid item>
            <EDStack direction="row" spacing={1}>
              <EDTypography value="Score : " variant={"h6"} />
              <EDTypography
                value={resultData?.Result?.[0]?.score}
                variant={"h6"}
              />
            </EDStack>
          </EDGrid>
        </EDGrid>
      </DialogContent>
      <DialogActions>
        <EDBox sx={{ maxWidth: 200 }}>
          <EDButton value="Close" handleChange={handleDialogClose} />
        </EDBox>
      </DialogActions>
    </Dialog>
  );
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
                    handleResult: handleDialogClick,
                  }}
                />
              )}
            </EDStack>
          )}
        </EDStack>
      </EDBox>
      {dialogVar}
    </EDStack>
  );
};

export default HomepageS;
