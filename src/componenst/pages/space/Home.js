import React, { useContext } from "react";
import { useEffect } from "react";
import { useSpaceContext } from "./SpaceContext";
import { Link } from "react-router-dom";
import Nav from "./nav";
import "./scss/_home.scss";
const HomeSpace = () => {
  const { setbackg, backg } = useSpaceContext();
  useEffect(() => {
    setbackg("homeB");
  }, []);
  return (
    <>
      <div className={backg}>
        <Nav />
        <div className="home_space">
          <div className="home-text_space">
            <h6> So, you want to travel to</h6>
            <h1>SPACE</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <Link to="/pages/space/destination">
            <button
              className="home-btn_space"
              onClick={() => setbackg("destinationB")}
            >
              Explore
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default HomeSpace;
