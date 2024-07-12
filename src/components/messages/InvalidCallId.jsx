import React from "react";
import { MdPersonOff } from "react-icons/md";
import TEXTS from "../../utils/texts/en";

const InvalidCallId = ({ calls = [] }) => {
  return (
    <div className="alert alert-danger text-center" role="alert">
      <div className="mb-2">
        <MdPersonOff  size="3em" />
      </div>
      {TEXTS.MESSAGES.INVALID_CALL_ID}
    </div>
  );
};

export default InvalidCallId;
