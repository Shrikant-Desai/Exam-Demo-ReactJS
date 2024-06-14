import React from "react";
import EDStack from "../../shared/EDStack";
import profilePageSContainer from "../../container/student/profilePageS.container";
import EDGrid from "../../shared/EDGrid";
import EDTypography from "../../shared/EDTypography";
import { EDButton } from "../../shared/EDButton";
import EDTableSkeleton from "../../shared/EDTableSkeleton";

const ProfileS = () => {
  const { apiData, profileData, handleResetPassword, handleChangeUserName } =
    profilePageSContainer();

  return (
    <EDStack justifyContent="center" alignItems="center">
      {!apiData?.loading && profileData ? (
        <EDStack
          sx={{
            boxShadow: 2,
            borderRadius: 3,
            backdropFilter: `blur(10px)`,
          }}
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <EDStack direction="column" alignItems="center" sx={{ p: 5 }}>
            <EDTypography
              align="center"
              sx={{ fontWeight: "bold" }}
              variant="h4"
              value="Profile"
            />
            <EDGrid container direction="column">
              {profileData?.map(([key, value]) => {
                return (
                  <EDStack
                    key={key}
                    direction="row"
                    alignItems="flex-start"
                    sx={{ p: 2 }}
                  >
                    <EDTypography
                      value={key === "_id" ? "id" : key}
                      variant="h6"
                    />
                    <EDTypography value={` : ${value} `} variant="h6" />
                  </EDStack>
                );
              })}
            </EDGrid>
            <EDButton value="Change Name" handleChange={handleChangeUserName} />
            <EDButton
              value="Reset Password"
              handleChange={handleResetPassword}
            />
          </EDStack>
        </EDStack>
      ) : (
        <EDTableSkeleton width={400} />
      )}
    </EDStack>
  );
};

export default ProfileS;
