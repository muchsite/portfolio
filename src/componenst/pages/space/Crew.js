import React from "react";
import Nav from "./nav";
import "./scss/crew.scss";
import { useSpaceContext } from "./SpaceContext";
import comandeP from "./assets/crew/image-douglas-hurley.png";
import specP from "./assets/crew/image-mark-shuttleworth.png";
import pilotP from "./assets/crew/image-victor-glover.png";
import engineerP from "./assets/crew/image-anousheh-ansari.png";
import { useState } from "react";
import { useEffect } from "react";
const Crew = () => {
  const { backg, setbackg } = useSpaceContext();
  const comander = {
    title: "Commander",
    name: "Douglas Hurley",
    desc: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: comandeP,
  };
  const spec = {
    title: "Mission Specialist",
    name: "Mark Shuttleworth",
    desc: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: specP,
  };
  const pilot = {
    title: "Pilot",
    name: "Victor Glover",
    desc: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    image: pilotP,
  };
  const engineer = {
    title: "Flight Engineer",
    name: "Anousheh Ansari",
    desc: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: engineerP,
  };
  const data = [comander, spec, pilot, engineer];
  const [crew, setCrew] = useState(0);
  useEffect(() => {
    setbackg("crewB");
  }, []);
  useEffect(() => {
    const setInt = setInterval(() => {
      if (crew < 3) {
        setCrew(crew + 1);
      } else {
        setCrew(0);
      }
    }, 5000);
    return () => clearInterval(setInt);
  }, [crew]);
  return (
    <div className={backg}>
      <Nav />
      <h2 className="dest-head">
        <span>02</span> Meet your crew
      </h2>
      <div className="crew_cont">
        <div className="crew_content">
          <div className="crew_text">
            <h6>{data[crew].title}</h6>
            <h1>{data[crew].name}</h1>
            <p>{data[crew].desc}</p>
            <div className="crew_btns">
              <div
                className={`crew_btn ${crew === 0 && "crew_active"}`}
                onClick={() => setCrew(0)}
              ></div>
              <div
                className={`crew_btn ${crew === 1 && "crew_active"}`}
                onClick={() => setCrew(1)}
              ></div>
              <div
                className={`crew_btn ${crew === 2 && "crew_active"}`}
                onClick={() => setCrew(2)}
              ></div>
              <div
                className={`crew_btn ${crew === 3 && "crew_active"}`}
                onClick={() => setCrew(3)}
              ></div>
            </div>
          </div>
          <div className="crew_img">
            <img src={data[crew].image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Crew;
