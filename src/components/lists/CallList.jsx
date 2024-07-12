import React from "react";
import CallItem from "./CallItem.jsx";

const CallList = ({ calls = [] }) => {
  return (
    <div>
      {!!calls.length &&
        calls.map((call) => <CallItem key={call.id} call={call} />)}
    </div>
  );
};

export default CallList;
