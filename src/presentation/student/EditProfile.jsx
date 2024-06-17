import React from "react";
import { editProfileFormArray } from "../../description/forms/formsData.description";
import EDStack from "../../shared/EDStack";
import { Link } from "react-router-dom";
import editProfileContainer from "../../container/student/editProfile.container";
import { KeyboardBackspace } from "@mui/icons-material";
import EDForm from "../../shared/form/EDForm";
import { FORMS } from "../../utils/constant";

const EditProfile = () => {
  const {
    customHandleChange,
    handleSubmit,
    resetForm,
    sxObject,
    path,
    isAPILoading,
  } = editProfileContainer();

  return (
    <EDStack justifyContent="center" alignItems="center">
      <EDStack
        sx={{
          boxShadow: 3,
          borderRadius: 3,
          backdropFilter: `blur(10px)`,
        }}
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <EDStack
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          sx={{ p: 4 }}
        >
          <EDForm
            {...{
              handleChange: customHandleChange,
              handleSubmit,
              resetForm,
              sxObject,
              isSubForm: false,
              formArr: editProfileFormArray,
              formName: FORMS.EDIT_PROFILE_FORM,
              path,
              isAPILoading,
            }}
          />
          <EDStack direction="row" justifyContent="space-between">
            <Link className="text-link" to={-1}>
              <KeyboardBackspace />
            </Link>
          </EDStack>
        </EDStack>
      </EDStack>
    </EDStack>
  );
};

export default EditProfile;
