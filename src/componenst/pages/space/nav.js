import React, { useState, useContext } from "react";
import icon from "./assets/shared/logo.svg";
import { Link } from "react-router-dom";
import { useSpaceContext } from "./SpaceContext";
import "./scss/_nav.scss";
const Nav = () => {
  const { setbackg, backg } = useSpaceContext();
  const [openMenu, setOpenMenu] = useState(true);
  return (
    <div className="nav_container">
      <img src={icon} alt="logo" />
      <ul className="nav_cont dn_for_small_screen">
        <Link
          to="/pages/space/home"
          onClick={() => setbackg("homeB")}
          className="nav-link"
        >
          <li>
            00 Home
            <div
              className={`link-active ${backg === "homeB" ? "active" : ""}`}
            ></div>
          </li>
        </Link>
        <Link
          to="/pages/space/destination"
          onClick={() => setbackg("destinationB")}
          className="nav-link"
        >
          <li>
            01 Destination
            <div
              className={`link-active ${
                backg === "destinationB" ? "active" : ""
              }`}
            ></div>
          </li>
        </Link>
        <Link
          to="/pages/space/crew"
          onClick={() => setbackg("crewB")}
          className="nav-link"
        >
          <li>
            02 Crew
            <div
              className={`link-active ${backg === "crewB" ? "active" : ""}`}
            ></div>
          </li>
        </Link>
        <Link
          to="/pages/space/technology"
          onClick={() => setbackg("technologyB")}
          className="nav-link"
        >
          <li>
            03 Technology
            <div
              className={`link-active ${
                backg === "technologyB" ? "active" : ""
              }`}
            ></div>
          </li>
        </Link>
      </ul>
      <div className="ham_cont dn_for_medium_screen">
        <div className="ham_icon" onClick={() => setOpenMenu(!openMenu)}>
          <div className={`icon_line_1 ${openMenu && "icon_line_1_x"}`}></div>
          <div className={`icon_line_2 ${openMenu && "icon_line_2_x"}`}></div>
          <div className={`icon_line_3 ${openMenu && "icon_line_3_x"}`}></div>
        </div>
        <div className={`ham_content ${openMenu && "open_menu"}`}>
          <Link
            to="/pages/space/home"
            onClick={() => setbackg("homeB")}
            className="h_nav-link"
          >
            00 Home
          </Link>
          <Link
            to="/pages/space/destination"
            onClick={() => setbackg("destinationB")}
            className="h_nav-link"
          >
            01 Destination
          </Link>
          <Link
            to="/pages/space/crew"
            onClick={() => setbackg("crewB")}
            className="h_nav-link"
          >
            02 Crew
          </Link>
          <Link
            to="/pages/space/technology"
            onClick={() => setbackg("technologyB")}
            className="h_nav-link"
          >
            03 Technology
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Nav;
