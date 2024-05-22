// CRUDRadio.js
import React from "react";

export const EDRadio = ({ handleChange, path, selectedOption, ...props }) => {
  return (
    <div className="form-check">
      <input
        {...props}
        checked={selectedOption === props.value}
        onChange={(e) => handleChange(e, path)}
        type="radio"
      />
      <label className="form-check-label me-3" htmlFor={props.id}>
        {props.label}
      </label>
    </div>
  );
};
