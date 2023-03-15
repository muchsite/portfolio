import React from "react";
import { Link } from "react-router-dom";
import "./work.scss";
import templateImage from "../../../src/assets/images/work/temp.png";
import game from "../../../src/assets/images/work/game.jpg";
import calc from "../../../src/assets/images/work/calc.jpg";
import api from "../../../src/assets/images/work/api.jpg";
import land from "../../../src/assets/images/work/land.jpg";
import space from "../../../src/assets/images/work/space.jpg";

import { useState } from "react";
import AnimateL from "../animate/AnimateL";
import { useEffect } from "react";
function Work({ workRef, position }) {
  const myWork = "My Work".split("");
  const [letClass, setLetClass] = useState("about_animate_before");
  const [falseWork, setFalseSkills] = useState(false);
  useEffect(() => {
    if (position === "work" && !falseWork) {
      setLetClass("about_animate");
      setFalseSkills(true);
      setTimeout(() => {
        setLetClass("about_bounce_class");
      }, 3000);
    }
  }, [position]);
  return (
    <section className="work_cont" id="work">
      <div className="work_text">
        <h1 ref={workRef}>
          <AnimateL lclass={letClass} arr={myWork} ind={1} />
        </h1>
        <p>Please note that these are not my designs, just the code.</p>
      </div>
      <div className="work_content">
        <div className={`${falseWork && "work_animation1"} work_item`}>
          <Link to="/pages/space/home" target="_blank">
            <img src={space} alt="" />
            <p>Space tourism multi-page website</p>
          </Link>
        </div>
        <div className={`${falseWork && "work_animation2"} work_item`}>
          <Link to="/pages/calc" target="_blank">
            <img src={calc} alt="" />
            <p>Calculator app</p>
          </Link>
        </div>
        <div className={`${falseWork && "work_animation3"} work_item`}>
          <Link to="/pages/api/" target="_blank">
            <img src={api} alt="" />
            <p>REST Countries API with color theme switcher</p>
          </Link>
        </div>
        <div className={`${falseWork && "work_animation4"} work_item`}>
          <Link to="/pages/landing" target="_blank">
            <img src={land} alt="" />
            <p>Easybank landing page</p>
          </Link>
        </div>
        <div className={`${falseWork && "work_animation5"} work_item`}>
          <a href="https://muchsite.github.io/game/" target="_blank">
            <img src={game} alt="" />
            <p>Rock, Paper, Scissors game</p>
          </a>
        </div>
        <div className={`${falseWork && "work_animation6"} work_item`}>
          <a href="https://muchsite-mern-app.onrender.com/" target="_blank">
            <img src={templateImage} alt="" />
            <p>Full Stack Web Application</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Work;
