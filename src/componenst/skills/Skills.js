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
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero quae
          expedita soluta. Aliquid quibusdam voluptas ducimus asperiores at
          laudantium. Minus distinctio sit qui et quibusdam ab sed molestiae
          laudantium officia.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          dicta eos voluptatum esse, numquam quis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
          perspiciatis reprehenderit facere inventore laborum officia id,
          temporibus et earum vero quasi! Consequuntur ipsa assumenda numquam?
        </p>
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
