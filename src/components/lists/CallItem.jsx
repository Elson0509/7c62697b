import React, { useMemo } from "react";
import { VscCallIncoming, VscCallOutgoing } from "react-icons/vsc";
import { GoInfo } from "react-icons/go";
import THEME from "../../utils/theme";
import TEXTS from "../../utils/texts/en";
import {
  printTime,
  printFormattedDate,
  iconCallColor,
  getDirectionString,
} from "../../utils/utilities";
import { Link } from "react-router-dom";
import { IoPersonCircle } from "react-icons/io5";

const CallItem = ({
  call: { call_type, direction, created_at, from, to, id },
}) => {
  const CallIcon = useMemo(() => {
    return direction === "outbound" ? VscCallOutgoing : VscCallIncoming;
  }, [direction]);

  return (
    <div className="callitem-container">
      <div className="callitem-left">
        <div>
          <IoPersonCircle size="4.6em" color={THEME.COLORS.SECONDARY}/>
        </div>
        <div className="callitem-infogroup">
          <div className="callitem-title">{direction === "inbound" ? from : to}</div>
          <div className='callitem-date'>{printFormattedDate(created_at)}</div>
          <div>
            <div>
              <CallIcon color={iconCallColor(call_type)} size="1.4em" />
              <span>{getDirectionString(direction)}</span>
              {call_type === "voicemail" && <div>{TEXTS.INFORMATION.VOICEMAIL}</div>}
            </div>
          </div>
        </div>
      </div>
      <div className="callitem-right">
        <span>{printTime(created_at)}</span>
        <Link className="callitem-infoicon" to={`/${id}`}>
          <GoInfo size="2.3em" color={THEME.COLORS.INFO} />
        </Link>
      </div>
    </div>
  );
};

export default CallItem;
