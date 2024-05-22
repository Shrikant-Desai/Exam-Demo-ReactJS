// CRUDLabel.js
import React from "react";

export const EDLabel = (props) => {
  const { labelProps, ...itemProps } = props;

  const { value, ...restLabelProps } = labelProps;
  return (
    <label {...restLabelProps} htmlFor={itemProps.inputProps.id}>
      {value}
      <span style={{ color: "red" }}>{itemProps.isRequired ? "*" : ""}</span>
    </label>
  );
};
