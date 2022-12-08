import React from "react";
import "./sidebar.scss";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
// import { NavLink as a } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
function Hamburger({ position }) {
  const handleClick = (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const position = document.getElementById(id).offsetTop - 120;
    window.scrollTo({
      left: 0,
      top: position,
    });
  };
  return (
    <div className="hamburger_cont">
      <nav>
        <a
          href="#home"
          className={`${position === "home" && "active_nav_link_ham "}`}
          onClick={(e) => handleClick(e)}
        >
          <div className="dflex">
            <FontAwesomeIcon icon={faHome} /> <p>HOME</p>
          </div>
        </a>
        <a
          href="#about"
          className={`${position === "about" && "active_nav_link_ham "}`}
          onClick={(e) => handleClick(e)}
        >
          <div className="dflex">
            <FontAwesomeIcon icon={faUser} /> <p>ABOUT</p>
          </div>
        </a>
        <a
          href="#skills"
          id="nav-skill"
          className={`${position === "skills" && "active_nav_link_ham "}`}
          onClick={(e) => handleClick(e)}
        >
          <div className="dflex">
            <FontAwesomeIcon icon={faBrain} /> <p>SKILLS</p>
          </div>
        </a>
        <a
          href="#contact"
          className={`${position === "contact" && "active_nav_link_ham "}`}
          onClick={(e) => handleClick(e)}
        >
          <div className="dflex">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>CONTACT</p>
          </div>
        </a>
      </nav>
    </div>
  );
}

export default Hamburger;
