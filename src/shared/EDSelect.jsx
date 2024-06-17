import { FormControl, MenuItem, Select } from "@mui/material";
import React from "react";
import { EDLabel } from "./EDLabel";

const EDSelect = (props) => {
  const { item, handleChange } = props;

  return (
    <FormControl sx={{ width: "100%" }}>
      <EDLabel {...item} />
      <Select
        labelId="demo-simple-select-label"
        {...item?.inputProps}
        value={props.value}
        displayEmpty
        onChange={(e) => handleChange(e)}
      >
        {item.options.map((option, index) => (
          <MenuItem key={index} value={option.value} id={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default EDSelect;
