import React from "react";
import EDStack from "../../shared/EDStack";
import EDTypography from "../../shared/EDTypography";
import HomePageContainer from "../../container/user/homepage.container";
import { EDButton } from "../../shared/EDButton";
import EDBox from "../../shared/EDBox";

const HomePage = () => {
  const { startFunction, btnProps } = HomePageContainer();

  return (
    <EDStack direction="column" alignItems="center">
      <EDTypography value="Exam Demo" align="center" variant="h2" />
      <EDBox>
        <EDButton handleChange={startFunction} {...btnProps} />
      </EDBox>
    </EDStack>
  );
};

export default HomePage;
