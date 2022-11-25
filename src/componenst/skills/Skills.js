import React, { useEffect, useState } from "react";
import "./skills.scss";
import AnimateL from "../animate/AnimateL";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faGitAlt,
  faJsSquare,
  faReact,
  faNode,
} from "@fortawesome/free-brands-svg-icons";

function Skills() {
  const abMe = "My Skills".split("");
  const [letClass, setLetClass] = useState("about_animate");
  useEffect(() => {
    setTimeout(() => {
      setLetClass("about_bounce_class");
    }, 3000);
  }, []);
  return (
    <div className="skills_cont">
      <div className="skills_text">
        <h1>
          <AnimateL arr={abMe} lclass={letClass} ind={1} />
        </h1>
        <div className="p_cont_skills">
          <p>
            For front-end development, I use technologies like{" "}
            <span>HTML5</span>,<span> CSS</span>,<span> Sass</span>,
            <span> JavaScript</span>,<span> React</span>,<span> Next Js</span>,
            etc.
          </p>
          <p>
            For back-end development, I use technologies like{" "}
            <span>Node Js</span>,<span> Express Js</span>,<span> Mongodb</span>,
            <span> Mongoose</span>,<span> Firebase</span>, etc.
          </p>
          <p>
            I am not a designer, but I have a good sense of aesthetics and
            experience in responsive, mobile-first design. I put a special
            effort into optimizing my code and providing the best user
            experience. I would love to give you any kind of support after the
            project's completion. I guarantee a commitment during work on your
            project.
          </p>
        </div>
      </div>
      <div className="skills_logo_cont">
        <div className="spiner">
          <div className="face1">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faNode} color="#215732" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
