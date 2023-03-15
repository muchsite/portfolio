import { useContext, useState, useEffect } from "react";
import React from "react";
import { useSpaceContext } from "./SpaceContext";
import MoonP from "./assets/destination/image-moon.png";
import MarsP from "./assets/destination/image-mars.png";
import EuropaP from "./assets/destination/image-europa.png";
import TitanP from "./assets/destination/image-titan.png";
import Nav from "./nav";
import "./scss/_destination.scss";
const Destination = () => {
  const { backg } = useSpaceContext();
  const moon = {
    pic: MoonP,
    head: "Moon",
    decription:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    ditance: "384,400 km",
    time: "3 days",
  };
  const mars = {
    pic: MarsP,
    head: "Mars",
    decription:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    ditance: "225 mil. km",
    time: "9 months",
  };
  const europa = {
    pic: EuropaP,
    head: "Europa",
    decription:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    ditance: "628 mil. km",
    time: "3 years",
  };
  const titan = {
    pic: TitanP,
    head: "Titan",
    decription:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    ditance: "1.6 bil. km",
    time: "7 years",
  };
  const dest = [moon, mars, europa, titan];
  const { setbackg } = useSpaceContext();
  const [destState, setDestState] = useState(0);

  useEffect(() => {
    setbackg("destinationB");
  }, []);
  return (
    <div className={backg}>
      <Nav />
      <div className="destination">
        <h1 className="dest-head">
          <span>01</span> Pick your destination
        </h1>
        <div className="destContainer">
          <img className="dest_img" src={dest[destState].pic} alt="" />
          <div className="destInfo">
            <div className="des-btns">
              <div className="des-btn-container">
                <div className="destBtn" onClick={() => setDestState(0)}>
                  Moon
                </div>
                <div className={destState === 0 ? "des-active" : ""}></div>
              </div>
              <div className="des-btn-container">
                <div className="destBtn" onClick={() => setDestState(1)}>
                  Mars
                </div>
                <div className={destState === 1 ? "des-active" : ""}></div>
              </div>
              <div className="des-btn-container">
                <div className="destBtn" onClick={() => setDestState(2)}>
                  Europa
                </div>
                <div className={destState === 2 ? "des-active" : ""}></div>
              </div>
              <div className="des-btn-container">
                <div className="destBtn" onClick={() => setDestState(3)}>
                  Titan
                </div>
                <div className={destState === 3 ? "des-active" : ""}></div>
              </div>
            </div>
            <div className="des_text">
              <h1 className="dest-header">{dest[destState].head}</h1>
              <p className="des-description">{dest[destState].decription}</p>
              <div className="dest-line"></div>
              <div className="stat">
                <div className="stat1">
                  <p> Avg. distance</p>
                  <h6>{dest[destState].ditance}</h6>
                </div>
                <div className="stat1">
                  <p> Est. travel time</p>
                  <h6>{dest[destState].time}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Destination;
