import React from "react";
import FooterButton from "../components/buttons/FooterButton.jsx";
import TEXTS from "../utils/texts/en.js";
//Importing button icons
import { FaRegClock } from "react-icons/fa";
import { IoArchiveOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer>
        <FooterButton Icon={FaRegClock} text={TEXTS.TITLES.FEED_PAGE} link="/"/>
        <FooterButton Icon={IoArchiveOutline} text={TEXTS.TITLES.ARCHIVE_PAGE} link="/archive"/>
    </footer>
  );
};

export default Footer;
