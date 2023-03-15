import React from "react";
import { useApiContext } from "./constext";
import moon from "./img/moon.png";
function Nav() {
  const { light, setLight } = useApiContext();
  const handleToggle = () => {
    if (light) {
      setLight("");
    } else {
      setLight("light");
    }
  };
  return (
    <div className="nav">
      <h1>Where in the world?</h1>
      <div className="moon" onClick={handleToggle}>
        <img src={moon} alt="" />
        <h1>Dark Mode</h1>
      </div>
    </div>
  );
}

export default Nav;
