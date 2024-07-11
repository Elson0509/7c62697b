import React from "react";
import FooterButton from "../components/buttons/FooterButton.jsx";

//Importing button icons
import { FaRegClock } from "react-icons/fa";
import { IoArchiveOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
        <FooterButton Icon={FaRegClock} text="Recents" link="/"/>
        <FooterButton Icon={IoArchiveOutline} text="Archived" link="/archive"/>
    </footer>
  );
};

export default Footer;
