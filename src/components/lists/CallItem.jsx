import React, { useMemo } from "react";
import { VscCallIncoming, VscCallOutgoing } from "react-icons/vsc";
import { GoInfo } from "react-icons/go";
import THEME from "../../utils/theme";
import { printTime, printFormattedDate } from "../../utils/utilities";

const CallItem = ({ call: { call_type, direction, created_at, from, to } }) => {
  const iconColor = useMemo(() => {
    switch (call_type) {
      case "missed":
        return THEME.COLORS.DANGER;
      case "answered":
        return THEME.COLORS.SUCCESS;
      default:
        return THEME.COLORS.PRIMARY;
    }
  }, [call_type]);

  const CallIcon = useMemo(() => {
    return direction === "outbound" ? VscCallOutgoing : VscCallIncoming;
  }, [direction]);

  return (
    <div className="callitem-container">
      <div>
        <div>{printFormattedDate(created_at)}</div>
        <div>
          <div>
            <CallIcon color={iconColor} size="2.3em" />
            {call_type === "voicemail" && <div>Voice Mail</div>}
          </div>
          <div>{direction === "inbound" ? from : to}</div>
        </div>
      </div>
      <div>
        <span>{printTime(created_at)}</span>
        <GoInfo size="2.3em" color={THEME.COLORS.INFO} />
      </div>
    </div>
  );
};

export default CallItem;