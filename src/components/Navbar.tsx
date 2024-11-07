import { useState } from "react";
import { FaSearch, FaBars } from "react-icons/fa";
import Logo from "../assets/login.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar">
      <div className="navContent">
        <div className="leftContent">
          <div className="logAndTitle">
            <div className="logo">
              <img src={Logo} alt="Logo" />
            </div>
            <div className="title">Jobs</div>
          </div>
          <div className={`navbarItems ${menuOpen ? "open" : ""}`}>
            <ul>
              <li>Jobs</li>
              <li>#LifeAtOrange</li>
              <li>Métiers</li>
              <li>Étudiant</li>
            </ul>
            <button className="connexionButton mobile">Se connecter</button>
          </div>
        </div>
        <div className="rightContent">
          <button className="connexionButton desktop">Se connecter</button>
          <div className="searchIcons">
            <FaSearch />
          </div>
          <div className="hamburgerIcon" onClick={toggleMenu}>
            <FaBars />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
