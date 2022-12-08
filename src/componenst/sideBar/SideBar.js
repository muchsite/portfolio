import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink as a } from "react-router-dom";
import { faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import "./sidebar.scss";
import Hamburger from "./Hamburger";
import { faBrain } from "@fortawesome/free-solid-svg-icons";
function SideBar({ position }) {
  const [open, setOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const position = document.getElementById(id).offsetTop - 70;
    window.scrollTo({
      left: 0,
      top: position,
    });
  };
  return (
    <div className="side_container">
      <a href="#home">
        <svg
          className="side_logo"
          viewBox="0 0 312 224"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M79.1856 14.0056L13.848 204.079C12.4124 208.255 17.8072 211.335 20.6735 207.975L109.45 103.934C113.589 99.0832 121.15 99.2934 125.013 104.367L151.274 138.854C155.205 144.016 162.935 144.126 167.011 139.077L195.362 103.96C199.318 99.0603 206.764 98.9926 210.808 103.82L297.708 207.538C300.554 210.935 305.992 207.871 304.559 203.677L239.763 13.9467C237.479 7.26001 229.17 4.98638 223.8 9.57894L165.543 59.4041C161.782 62.6208 156.234 62.6026 152.494 59.3614L95.1917 9.69951C89.8375 5.05915 81.4889 7.30515 79.1856 14.0056Z"
            fill="#05FF00"
          />
          <path
            d="M72.1856 14.0056L6.84796 204.079C5.41244 208.255 10.8072 211.335 13.6735 207.975L102.45 103.934C106.589 99.0832 114.15 99.2934 118.013 104.367L144.274 138.854C148.205 144.016 155.935 144.126 160.011 139.077L188.362 103.96C192.318 99.0603 199.764 98.9926 203.808 103.82L290.708 207.538C293.554 210.935 298.992 207.871 297.559 203.677L232.763 13.9467C230.479 7.26001 222.17 4.98638 216.8 9.57894L158.543 59.4041C154.782 62.6208 149.234 62.6026 145.494 59.3614L88.1917 9.69951C82.8375 5.05915 74.4889 7.30515 72.1856 14.0056Z"
            fill="#0A3300"
          />
        </svg>
      </a>
      <div className="side_links" onClick={() => setOpen(!open)}>
        <div className="dn_for_medium">
          <div className={`hamburger_icon ${open && "tranforme_ham"}`}>
            <div className="line _1"></div>
            <div className="line _2"></div>
            <div className="line _3"></div>
          </div>
          <div className={`hamburger_link_cont ${open && `tranform`} `}>
            <Hamburger position={position} />
          </div>
        </div>
        <nav className="dn_for_small">
          <a
            href="#home"
            id="nav-home"
            className={`${position === "home" && "active_nav_link"}`}
            onClick={(e) => handleClick(e)}
          >
            <FontAwesomeIcon icon={faHome} />
          </a>
          <a
            href="#about"
            id="nav-about"
            className={`${position === "about" && "active_nav_link"}`}
            onClick={(e) => handleClick(e)}
          >
            <FontAwesomeIcon icon={faUser} />
          </a>
          <a
            href="#skills"
            id="nav-skill"
            className={`${position === "skills" && "active_nav_link"}`}
            onClick={(e) => handleClick(e)}
          >
            <FontAwesomeIcon icon={faBrain} />
          </a>
          <a
            href="#contact"
            id="nav-contact"
            className={`${position === "contact" && "active_nav_link"}`}
            onClick={(e) => handleClick(e)}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
