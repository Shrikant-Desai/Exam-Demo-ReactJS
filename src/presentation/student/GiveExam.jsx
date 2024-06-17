import React from "react";
import EDExamCompMain from "../../shared/EDExamCompMain";
import giveExamContainer from "../../container/student/giveExam.container";
import { FORMS } from "../../utils/constant";
import EDGrid from "../../shared/EDGrid";
import { EDButton } from "../../shared/EDButton";
import { ACTION } from "../../description/forms/examForm.description";
import { KeyboardBackspace } from "@mui/icons-material";
// import { MESSAGES } from "../../description/student/studentModule.description";

const GiveExam = () => {
  const { examDetailsObject, questionArr, apiData, handleClickToPrevRoute } =
    giveExamContainer();

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
        <>
          <EDExamCompMain
            examDetailsArr={examDetailsObject}
            questionsArr={questionArr}
            action={ACTION.GIVE_EXAM}
            formName={FORMS.GIVE_EXAM}
            isGiveExam={true}
          />
        </>
      </EDGrid>
    </EDGrid>
  ) : (
    <></>
  );
};

export default GiveExam;
// return !apiData?.loading ? (
//   <EDGrid container direction="row" spacing={2}>
//     <EDGrid item sx={{ ml: 3 }}>
//       <EDButton
//         size="medium"
//         handleChange={handleClickToPrevRoute}
//         value={<KeyboardBackspace />}
//         variant="contained"
//       />
//     </EDGrid>
//     <EDGrid item xs={12}>
//       {apiData?.data?.statusCode !== API_STATUS_GENERATION_FAILED ? (
//         <>
//           <EDExamCompMain
//             examDetailsArr={examDetailsObject}
//             questionsArr={questionArr}
//             action={ACTION.GIVE_EXAM}
//             formName={FORMS.GIVE_EXAM}
//             isGiveExam={true}
//           />
//         </>
//       ) : (
//         <EDStack alignItems="center">
//           <EDTypography value={MESSAGES.EXAM_ATTEMPTED} variant={"h5"} />
//           <EDBox>
//             <EDButton
//               variant="outlined"
//               value={MESSAGES.RESULT_DIALOG_BUTTON}
//               handleChange={handleDialogClick}
//             />
//           </EDBox>
//         </EDStack>
//       )}
//     </EDGrid>
//     {dialogVar}
//   </EDGrid>
// ) : (
//   <></>
// );
/* 

- Delay the navigation from login page to check behaviour of button and form [not urgent].✅
- Same options Error message. ✅
- See Result. [dialog box] ✅
- Direct usage of numbers ✅
- Alert when leaving the page✅
- Loader in delete exam ✅
- Dashboard Route ✅
- Show dashboard and reset password together.✅
- Change description to notes  
Bugs: 
- Submitted even if errors Are there. ✅
- Search data are not showed properly ✅
- Trim the data before api request ✅
make schedule of 3 to 4 lines from above points that i have done today

*/
