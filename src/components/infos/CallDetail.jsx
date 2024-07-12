import React from "react";
import { CgProfile } from "react-icons/cg";
import TEXTS from "../../utils/texts/en";
import {
  printTime,
  printFormattedDate,
  iconCallColor,
  getCallTypeString,
} from "../../utils/utilities";

const CallDetail = ({
  call: { call_type, direction, created_at, from, to, duration, via },
}) => {
  return (
    <div className="calldetail-container">
      <div className="calldetail-header">
        <CgProfile size="6em" />
        <p>{direction === "inbound" ? from : to}</p>
      </div>
      <div className="calldetail-box">
        <p className="bold">{printFormattedDate(created_at)}</p>
        <p>
          {printTime(created_at)} <span style={{color: iconCallColor(call_type)}}>{getCallTypeString(call_type)}</span>
        </p>
      </div>
      {call_type === "answered" && (
        <div className="calldetail-box">
          <p><span className="bold">{TEXTS.INFORMATION.DURATION}:</span> {duration} {TEXTS.INFORMATION.SECONDS}</p>
        </div>
      )}
      <div className="calldetail-box">
        <p><span className="bold">{TEXTS.INFORMATION.AIRCALL}:</span> {via}</p>
      </div>
    </div>
  );
};

export default CallDetail;
