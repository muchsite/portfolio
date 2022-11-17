import React from "react";
import "./sidebar.scss";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
function Hamburger() {
  return (
    <div className="hamburger_cont">
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active_nav_link_ham" : "")}
        >
          <div className="dflex">
            <FontAwesomeIcon icon={faHome} /> <p>HOME</p>
          </div>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active_nav_link_ham" : "")}
        >
          <div className="dflex">
            <FontAwesomeIcon icon={faUser} /> <p>ABOUT</p>
          </div>
        </NavLink>
        <NavLink
          end
          to="/skills"
          id="nav-skill"
          className={({ isActive }) => (isActive ? "active_nav_link" : "")}
        >
          <div className="dflex">
            <FontAwesomeIcon icon={faBrain} /> <p>SKILLS</p>
          </div>
        </NavLink>
        <NavLink
          end
          to="/contact"
          className={({ isActive }) => (isActive ? "active_nav_link_ham" : "")}
        >
          <div className="dflex">
            <FontAwesomeIcon icon={faEnvelope} />
            <p>CONTACT</p>
          </div>
        </NavLink>
      </nav>
    </div>
  );
}

export default Hamburger;
