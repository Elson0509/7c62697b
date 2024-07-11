import React from "react";
import { useLocation, Link } from "react-router-dom";

const FooterButton = ({ text, Icon, link }) => {
  const location = useLocation();

  return (
    <Link
      className={`footer-button ${
        link === location.pathname ? "footer-button-active" : ""
      }`}
      to={link}
    >
      <Icon size="2em" />
      <span>{text}</span>
    </Link>
  );
};

export default FooterButton;
