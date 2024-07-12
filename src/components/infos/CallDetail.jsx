import React, { useMemo } from "react";
import { VscCallIncoming, VscCallOutgoing } from "react-icons/vsc";
import { GoInfo } from "react-icons/go";
import { CgProfile } from "react-icons/cg";
import THEME from "../../utils/theme";
import {
  printTime,
  printFormattedDate,
  iconCallColor,
} from "../../utils/utilities";
import { Link } from "react-router-dom";

const CallDetail = ({
  call: {
    call_type,
    direction,
    created_at,
    from,
    to,
    id,
    duration,
    is_archived,
    via,
  },
}) => {
  const CallIcon = useMemo(() => {
    return direction === "outbound" ? VscCallOutgoing : VscCallIncoming;
  }, [direction]);

  return (
    <div className="calldetail-container">
      <div>
        <CgProfile />
        <div>{direction === "inbound" ? from : to}</div>
      </div>
      <div>
        <div>{printFormattedDate(created_at)}</div>
        <div>Aircall: {via}</div>
        <div>
          <div>{printTime(created_at)}</div>
          <div>
            <div>
              <CallIcon color={iconCallColor(call_type)} size="2.3em" />
            </div>
            {call_type === "voicemail" && <div>Voice Mail</div>}
            {call_type === "answered" && <div>{duration} seconds</div>}
          </div>
        </div>
      </div>

      <div>
        <div></div>
      </div>
      <div>
        <span></span>
      </div>
    </div>
  );
};

export default CallDetail;
