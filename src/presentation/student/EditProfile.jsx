import React from "react";
import { editProfileFormArray } from "../../description/formsData.description";
import FormMainComp from "../../shared/form/FormMainComp";
import EDStack from "../../shared/EDStack";
import { Link } from "react-router-dom";
import editProfileContainer from "../../container/student/editProfile.container";

const EditProfile = () => {
  const {
    handleChange,
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
              handleChange,
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
              Go back
            </Link>
          </EDStack>
        </EDStack>
      </EDStack>
    </EDStack>
  );
};

export default EditProfile;
