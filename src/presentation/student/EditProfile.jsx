import React from "react";
import { editProfileFormArray } from "../../description/forms/formsData.description";
import FormMainComp from "../../shared/form/FormMainComp";
import EDStack from "../../shared/EDStack";
import { Link } from "react-router-dom";
import editProfileContainer from "../../container/student/editProfile.container";
import { KeyboardBackspace } from "@mui/icons-material";

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
          <FormMainComp
            {...{
              handleChange: customHandleChange,
              handleSubmit,
              resetForm,
              sxObject,
              isSubForm: false,
              formArr: editProfileFormArray,
              formName: "Change Name",
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
