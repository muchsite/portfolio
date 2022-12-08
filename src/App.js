import { Route, BrowserRouter, Routes, HashRouter } from "react-router-dom";
import "./App.scss";
import "animate.css";

import Home from "./componenst/home/Home";
import About from "./componenst/about/About";
import Contact from "./componenst/contact/Contact";
import Layout from "./componenst/layout/Layout";
import Skills from "./componenst/skills/Skills";
import SideBar from "./componenst/sideBar/SideBar";
import { useRef, useEffect, useState } from "react";

function App() {
  const [position, setPosition] = useState();
  const homeRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();
  useEffect(() => {
    const home = new IntersectionObserver((entry) => {
      const entry1 = entry[0];
      if (entry1.isIntersecting) {
        setPosition("home");
      }
    });
    const about = new IntersectionObserver((entry) => {
      const entry1 = entry[0];
      if (entry1.isIntersecting) {
        setPosition("about");
      }
    });
    const skills = new IntersectionObserver((entry) => {
      const entry1 = entry[0];
      if (entry1.isIntersecting) {
        setPosition("skills");
      }
    });
    const contact = new IntersectionObserver((entry) => {
      const entry1 = entry[0];
      if (entry1.isIntersecting) {
        setPosition("contact");
      }
    });
    home.observe(homeRef.current);
    about.observe(aboutRef.current);
    skills.observe(skillsRef.current);
    contact.observe(contactRef.current);
  }, []);
  // console.log(position);
  return (
    <main>
      <SideBar position={position} />
      <Home homeRef={homeRef} position={position} />
      <About aboutRef={aboutRef} position={position} />
      <Skills skillsRef={skillsRef} position={position} />
      <Contact contactRef={contactRef} position={position} />
      {/* <HashRouter> */}
      {/* <Routes> */}
      {/* <Route path="/" element={<Layout />}> */}
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/skills" element={<Skills />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
      {/* </Route> */}
      {/* </Routes> */}
      {/* </HashRouter> */}
    </main>
  );
}

export default App;
