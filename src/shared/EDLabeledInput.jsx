import React from "react";
import EDStack from "./EDStack";
import { EDInput } from "./EDInput";
import { EDLabel } from "./EDLabel";

const EDLabeledInput = (props) => {
  const { inputProps } = props;
  return (
    <EDStack {...props?.containerDesign}>
      <EDLabel {...props} />
      <EDInput sx={{ ...inputProps?.sx }} {...inputProps} />
    </EDStack>
  );
};

export default EDLabeledInput;
