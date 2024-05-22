// CRUDSelect.js
import React from "react";

export const EDSelect = ({ handleChange, path, ...props }) => {
  return (
    <div className="col-sm-5 ">
      <select
        {...props}
        value={props.value}
        onChange={(e) => handleChange(e, path)}
      >
        {props.children}
      </select>
    </div>
  );
};
