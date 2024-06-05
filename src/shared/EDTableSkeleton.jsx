import React from "react";
import EDBox from "./EDBox";
import EDSkeleton from "./EDSkeleton";

const EDTableSkeleton = (props) => {
  return (
    <EDBox sx={{ width: props.width }}>
      <EDSkeleton animation="wave" height={100} />
      <EDSkeleton animation="wave" height={40} />
      <EDSkeleton animation="wave" height={40} />
      <EDSkeleton animation="wave" height={40} />
    </EDBox>
  );
};

export default EDTableSkeleton;
