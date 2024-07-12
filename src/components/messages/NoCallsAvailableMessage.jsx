import React from "react";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
import TEXTS from "../../utils/texts/en";

const NoCallsAvailableMessage = ({ calls = [] }) => {
  return (
    <div className="alert alert-light text-center" role="alert">
      <div className="mb-2"><HiOutlinePhoneMissedCall size="3em"/></div>
      {TEXTS.MESSAGES.NO_CALLS}
    </div>
  );
};

export default NoCallsAvailableMessage;
