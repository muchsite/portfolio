import React from "react";
import Nav from "./nav";
import { useSpaceContext } from "./SpaceContext";
import rocketP from "./assets/technology/image-launch-vehicle-portrait.jpg";
import rocketM from "./assets/technology/image-launch-vehicle-landscape.jpg";
import rocket2p from "./assets/technology/image-spaceport-portrait.jpg";
import rocket2M from "./assets/technology/image-spaceport-landscape.jpg";
import rocket3p from "./assets/technology/image-space-capsule-portrait.jpg";
import rocket3M from "./assets/technology/image-space-capsule-landscape.jpg";
import "../space/scss/tech.scss";
import { useState } from "react";
import { useEffect } from "react";
const Technology = () => {
  const fr = {
    title: "Launch vehicle",
    desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    imgP: rocketP,
    imgM: rocketM,
  };
  const sec = {
    title: "Spaceport",
    desc: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    imgP: rocket2p,
    imgM: rocket2M,
  };
  const third = {
    title: "Space capsule",
    desc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    imgP: rocket3p,
    imgM: rocket3M,
  };
  const { backg, setbackg } = useSpaceContext();
  const arr = [fr, sec, third];
  const [tech, setTech] = useState(0);
  useEffect(() => {
    setbackg("technologyB");
  }, []);
  return (
    <div className={backg}>
      <Nav />
      <div className="tech_cont">
        <h2 className="dest-head">
          <span>03</span> Space launch 101
        </h2>
        <div className="tech_content">
          <div className="tech_btns">
            <div
              className={`tech_btn ${tech === 0 && "tech_active"}`}
              onClick={() => setTech(0)}
            >
              1
            </div>
            <div
              className={`tech_btn ${tech === 1 && "tech_active"}`}
              onClick={() => setTech(1)}
            >
              2
            </div>
            <div
              className={`tech_btn ${tech === 2 && "tech_active"}`}
              onClick={() => setTech(2)}
            >
              3
            </div>
          </div>
          <div className="tech_text">
            <h6>The terminology... </h6>
            <h1>{arr[tech].title}</h1>
            <p>{arr[tech].desc}</p>
          </div>
          <div className="tech_img">
            <img className="mob_img" src={arr[tech].imgP} alt="" />
            <img className="pc_img" src={arr[tech].imgM} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Technology;
