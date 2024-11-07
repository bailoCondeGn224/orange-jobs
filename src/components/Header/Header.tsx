import React from "react";
import "./Header.css";
import Image1 from "../../assets/im1.png";
import Image2 from "../../assets/im2.png";
import Image3 from "../../assets/im3.png";
import Image4 from "../../assets/im4.png";
import Image5 from "../../assets/im5.png";
import Image6 from "../../assets/im6.png";
const Header = () => {
  return (
    <div className="header">
      <div className="headerContext">
        <div className="leftHeader">
          <h3>Vous aussi rejoignez la famille Orange</h3>
          <p>
            Explorez nos dernières offres d’emploi et postulez sans perdre de
            temps
          </p>
        </div>
        <div className="rightHeader">
          <div className="im1">
            <img src={Image1} alt="" />
          </div>
          <div className="im2">
            <img src={Image2} alt="" />
          </div>
          <div className="im3">
            <img src={Image3} alt="" />
          </div>
          <div className="im4">
            <img src={Image4} alt="" />
          </div>
          <div className="im5">
            <img src={Image5} alt="" />
          </div>
          <div className="im6">
            <img src={Image6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
