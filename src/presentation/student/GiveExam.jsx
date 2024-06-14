import React from "react";
import EDExamCompMain from "../../shared/EDExamCompMain";
import giveExamContainer from "../../container/student/giveExam.container";
import { API_STATUS_GENERATION_FAILED } from "../../utils/constant";
import EDTypography from "../../shared/EDTypography";
import EDStack from "../../shared/EDStack";
import EDGrid from "../../shared/EDGrid";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { EDButton } from "../../shared/EDButton";
import EDBox from "../../shared/EDBox";
import { ACTION } from "../../description/forms/examForm.description";
import { KeyboardBackspace } from "@mui/icons-material";

const GiveExam = () => {
  const {
    examDetailsObject,
    questionArr,
    apiData,
    data,
    isDialogOpen,
    handleDialogClose,
    handleDialogClick,
    handleClickToPrevRoute,
  } = giveExamContainer();
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
                value={data?.[0]?.Result?.[0]?.resultStatus}
                variant={"h6"}
              />
            </EDStack>
          </EDGrid>
          <EDGrid item>
            <EDStack direction="row" spacing={1}>
              <EDTypography value="Email : " variant={"h6"} />
              <EDTypography value={data?.[0]?.email} variant={"h6"} />
            </EDStack>
          </EDGrid>
          <EDGrid item>
            <EDStack direction="row" spacing={1}>
              <EDTypography value="Subject : " variant={"h6"} />
              <EDTypography value={data?.[0]?.subjectName} variant={"h6"} />
            </EDStack>
          </EDGrid>
          <EDGrid item>
            <EDStack direction="row" spacing={1}>
              <EDTypography value="Rank : " variant={"h6"} />
              <EDTypography
                value={data?.[0]?.Result?.[0]?.rank}
                variant={"h6"}
              />
            </EDStack>
          </EDGrid>
          <EDGrid item>
            <EDStack direction="row" spacing={1}>
              <EDTypography value="Score : " variant={"h6"} />
              <EDTypography
                value={data?.[0]?.Result?.[0]?.score}
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

  return !apiData?.loading ? (
    <EDGrid container direction="row" spacing={2}>
      <EDGrid item sx={{ ml: 3 }}>
        <EDButton
          size="medium"
          handleChange={handleClickToPrevRoute}
          value={<KeyboardBackspace />}
          variant="contained"
        />
      </EDGrid>
      <EDGrid item xs={12}>
        {apiData?.data?.statusCode !== API_STATUS_GENERATION_FAILED ? (
          <>
            <EDExamCompMain
              examDetailsArr={examDetailsObject}
              questionsArr={questionArr}
              action={ACTION.GIVE_EXAM}
              formName="Give Exam"
              isGiveExam={true}
            />
          </>
        ) : (
          <EDStack alignItems="center">
            <EDTypography
              value="You have already attempted the exam."
              variant={"h5"}
            />
            <EDBox>
              <EDButton
                variant="outlined"
                value="See Result"
                handleChange={handleDialogClick}
              />
            </EDBox>
          </EDStack>
        )}
      </EDGrid>
      {dialogVar}
    </EDGrid>
  ) : (
    <></>
  );
};

export default GiveExam;
