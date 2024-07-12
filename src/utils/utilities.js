import THEME from "./theme";

//Return the time (hh:mm) from a date in format string
export const printTime = (dateString) => {
  if (!dateString) {
    return "";
  }

  const date = new Date(dateString);

  let hours = date.getHours();
  let minutes = date.getMinutes();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  const timeString = `${hours}:${minutes}`;

  return timeString;
};

//Return the date (MM/dd/YY) from a date in format string
export const printFormattedDate = (dateString) => {
  if (!dateString) {
    return "";
  }

  const date = new Date(dateString);

  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear().toString().slice(-2);

  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;

  const formattedDate = `${month}/${day}/${year}`;

  return formattedDate;
};

//Return the color of the call depending on the call_type
export const iconCallColor = (call_type) => {
  switch (call_type) {
    case "missed":
      return THEME.COLORS.DANGER;
    case "answered":
      return THEME.COLORS.SUCCESS;
    default:
      return THEME.COLORS.PRIMARY;
  }
};

//Return a string of the direction depending on the direction
export const getDirectionString = (direction) => {
  return direction === "inbound" ? "Incoming" : "Outgoing"
};

//Return a string of the direction depending on the direction
export const getCallTypeString = (call_type) => {
  switch (call_type) {
    case "missed":
      return "Missed Call"
    case "answered":
      return "Answered";
    default:
      return "Voicemail";
  }
};
