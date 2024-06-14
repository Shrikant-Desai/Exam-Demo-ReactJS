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
import { deleteAlert } from "../../description/teacher/teacherModule.description";

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
          ) : rowsArr?.length === 0 ? (
            <EDTypography
              sx={{ color: "red", p: 4 }}
              value="You have not created any exam till now."
              variant="h5"
            />
          ) : (
            <EDStack direction="column">
              <EDTypography
                sx={{ p: 2 }}
                value="Exams Created By You"
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
      <Dialog
        open={isDialogOpen}
        keepMounted
        onClose={handleDialogClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{deleteAlert}</DialogTitle>

        <DialogActions>
          <Button onClick={handleDialogClose}>Disagree</Button>
          <Button onClick={handleDelete}>Agree</Button>
        </DialogActions>
      </Dialog>
    </EDStack>
  );
};

export default HomepageT;
