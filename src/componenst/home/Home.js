import React, { useEffect, useRef, useState } from "react";
import "./home.scss";
import logo from "../../../src/assets/images/logo-m.svg";
import AnimateL from "../animate/AnimateL";

function Home({ homeRef, logoRef, handleContact }) {
  const hi = "Hi,".split("");
  const I = "I'm".split("");
  const name = "urtaz,".split("");
  const webdev = "web developer.".split("");
  const [lclass, setLClass] = useState("animate-letter");
  const [topAn, setTopAn] = useState("logo_top_animation");
  const [botAn, setBotAn] = useState("logo_bottom_animation");

  useEffect(() => {
    setTimeout(() => {
      setLClass("animate-letter-hover");
      setBotAn("");
      setTopAn("");
    }, 3000);
  }, []);
  const handleMouseOver = () => {
    if (!topAn && !botAn) {
      setBotAn("logo_bottom_animation");
      setTopAn("logo_top_animation");
      setTimeout(() => {
        setTopAn(undefined);
        setBotAn(undefined);
      }, 1600);
    }
  };

  return (
    <section className="home_cont" id="home">
      <div className="home_text">
        <h1 ref={homeRef}>
          <AnimateL arr={hi} lclass={lclass} ind={1} />
          <br />
          <AnimateL arr={I} lclass={lclass} ind={1 + hi.length} />
          <span className="logo_span">
            <svg
              onMouseEnter={handleMouseOver}
              viewBox="0 0 221 286"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`home_logo_text logo_top ${topAn}`}
            >
              <path
                d="M0 286V75.183L78.8217 174.75L216.011 0L221 4.06394L58.8668 210.309L36.9165 183.385L36.4176 239.773L0 286Z"
                fill="#05FF00"
              />
            </svg>
            <svg
              onMouseEnter={handleMouseOver}
              viewBox="0 0 221 282"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`home_logo_text logo_bottom ${botAn}`}
            >
              <path
                d="M221 211V0L0 277L5 282L109 153L129 176L186 106.068V211H221Z"
                fill="#05FF00"
              />
            </svg>
          </span>
          <AnimateL arr={name} lclass={lclass} ind={1 + hi.length + I.length} />
          <br />
          <AnimateL
            arr={webdev}
            lclass={lclass}
            ind={1 + hi.length + I.length + name.length}
          />
        </h1>
        <p>Full Stack Developer </p>

        <button onClick={handleContact}>CONTACT ME</button>
      </div>
      <div className="home_logo" ref={logoRef}>
        <img className="main_logo" src={logo} alt="" />
        <svg
          className="main_logo_out"
          viewBox="0 0 300 210"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M68.4184 9.50378L3.55881 200.669C2.14842 204.826 7.49453 207.891 10.3695 204.574L99.5815 101.637C103.691 96.8947 111.102 97.0656 114.989 101.992L142.603 136.991C146.622 142.084 154.35 142.062 158.34 136.947L185.492 102.128C189.375 97.1485 196.843 96.9695 200.96 101.757L289.957 205.251C292.829 208.591 298.201 205.515 296.775 201.348L231.151 9.59153C228.896 3.00248 220.765 0.678492 215.369 5.08076L156.76 52.8933C153.108 55.8724 147.872 55.8974 144.192 52.9533L84.1351 4.90807C78.7199 0.575897 70.6465 2.93661 68.4184 9.50378Z" />
        </svg>
      </div>
    </section>
  );
}

export default Home;
