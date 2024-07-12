import React from "react";
import { VscError } from "react-icons/vsc";
import TEXTS from "../../utils/texts/en";

const ErrorOccurredMessage = ({ calls = [] }) => {
  return (
    <div className="alert alert-danger text-center" role="alert">
      <div className="mb-2">
        <VscError size="3em" />
      </div>
      {TEXTS.MESSAGES.ERROR}
    </div>
  );
};

export default ErrorOccurredMessage;
