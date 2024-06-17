import React from "react";
import EDStack from "../../shared/EDStack";
import EDBox from "../../shared/EDBox";
import EDTypography from "../../shared/EDTypography";
import {
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
} from "@mui/material";
import homepageTContainer from "../../container/teacher/homepageT.container";
import EDTable from "../../shared/EDTable";
import { EDInput } from "../../shared/EDInput";
import EDTableSkeleton from "../../shared/EDTableSkeleton";
import {
  MESSAGES,
  deleteAlert,
} from "../../description/teacher/teacherModule.description";
import { DNF_TABLE_PROPS } from "../../description/forms/formsData.description";
import { EDButton } from "../../shared/EDButton";

const HomepageT = () => {
  const {
    currentLoginUser,
    apiData,
    columnsArr,
    allAPIsData,
    rowsArr,
    tableHeight,
    handleSearch,
    tableWidth,
    rowsPerPageArr,
    isDialogOpen,
    handleDialogClose,
    handleDelete,
    searchValue,
  } = homepageTContainer();

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
          {!allAPIsData.examsCreated || !rowsArr ? (
            <EDTableSkeleton width={800} />
          ) : !searchValue && rowsArr?.length === 0 ? (
            <EDTypography
              sx={{ color: "red", p: 4 }}
              value={MESSAGES.EXAM_NOT_CREATED}
              variant="h5"
            />
          ) : (
            <EDStack direction="column">
              <EDTypography
                sx={{ p: 2 }}
                value={MESSAGES.EXAMS_CREATED}
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
      <Dialog
        open={isDialogOpen}
        keepMounted
        onClose={handleDialogClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{deleteAlert}</DialogTitle>

        <DialogActions>
          <EDButton
            disabled={apiData.loading}
            value="Cancel"
            handleChange={handleDialogClose}
          />
          <EDButton
            isAPILoading={apiData.loading}
            value="Delete"
            handleChange={handleDelete}
          />
        </DialogActions>
      </Dialog>
    </EDStack>
  );
};

export default HomepageT;
