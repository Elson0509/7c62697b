import React, { useMemo } from "react";
import { VscCallIncoming, VscCallOutgoing } from "react-icons/vsc";
import { GoInfo } from "react-icons/go";
import THEME from "../../utils/theme";
import { printTime, printFormattedDate, iconCallColor } from "../../utils/utilities";
import { Link } from "react-router-dom";

const CallItem = ({ call: { call_type, direction, created_at, from, to, id } }) => {
  const CallIcon = useMemo(() => {
    return direction === "outbound" ? VscCallOutgoing : VscCallIncoming;
  }, [direction]);

  return (
    <div className="callitem-container">
      <div>
        <div>{printFormattedDate(created_at)}</div>
        <div>
          <div>
            <CallIcon color={iconCallColor(call_type)} size="2.3em" />
            {call_type === "voicemail" && <div>Voice Mail</div>}
          </div>
          <div>{direction === "inbound" ? from : to}</div>
        </div>
      </div>
      <div>
        <span>{printTime(created_at)}</span>
        <Link
          className="callitem-infoicon"
          to={`/${id}`}
        >
          <GoInfo
            size="2.3em"
            color={THEME.COLORS.INFO}
            
          />
        </Link>
      </div>
    </div>
  );
};

export default CallItem;
