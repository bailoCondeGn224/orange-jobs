import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footContent">
          <div className="firstPart">
            <div className="tex">Suivez-nous</div>
            <div className="icon">
              <FaFacebookF className="icons" />
              <BsTwitter className="icons" />
              <FaYoutube className="icons" />
              <AiFillInstagram className="icons" />
              <FaLinkedinIn className="icons" />
            </div>
          </div>
          <hr style={{ color: "#666" }} className="hrFooter" />
          <div className="secondPart">
            <div className="rightPart">
              <ul>
                <li>A propos des nos Aides</li>
                <li>Aides</li>
                <li>Contactez-nous</li>
                <li>Mentions légale</li>
                <li>Cookies</li>
              </ul>
            </div>
            <div className="leftPart">@ Orange Guinée 2024</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
