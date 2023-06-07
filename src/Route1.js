import "./App.scss";
import "animate.css";
import Home from "./componenst/home/Home";
import About from "./componenst/about/About";
import Contact from "./componenst/contact/Contact";
import Layout from "./componenst/layout/Layout";
import Skills from "./componenst/skills/Skills";
import SideBar from "./componenst/sideBar/SideBar";
import { useRef, useEffect, useState } from "react";
import Work from "./componenst/work/Work";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
function Route1() {
  const [position, setPosition] = useState("home");
  const homeRef = useRef();
  const aboutRef = useRef();
  const skillsRef = useRef();
  const contactRef = useRef();
  const workRef = useRef();
  const smoothRef = useRef();
  const sidebarRef = useRef();
  const logoRef = useRef();
  const aboutRed = useRef();
  const aboutWork = useRef();
  const [compwive, setCompWive] = useState(false);
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
    const work = new IntersectionObserver((entry) => {
      const entry1 = entry[0];
      if (entry1.isIntersecting) {
        setPosition("work");
      }
    });
    home.observe(homeRef.current);
    about.observe(aboutRef.current);
    skills.observe(skillsRef.current);
    contact.observe(contactRef.current);
    work.observe(workRef.current);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(min-width: 1199px)").matches) {
      Scrollbar.use(OverscrollPlugin);
      const bar = Scrollbar.init(smoothRef.current, {
        plugins: {
          overscroll: "bounce",
        },
      });
      bar.addListener((staes) => {
        const offset = staes.offset.y;
        sidebarRef.current.style.top = offset + "px";
        logoRef.current.style.top = offset + "px";
      });
      setCompWive(true);
    }
  }, []);
  const handleClick = (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const bar = Scrollbar.get(smoothRef.current);
    if (window.matchMedia("(min-width: 1199px)").matches) {
      if (id === "home") {
        bar.scrollTo(0, 0, 1000);
      }
      if (id === "contact") {
        bar.scrollTo(0, 10000, 1000);
      }
      if (id === "about") {
        bar.scrollIntoView(aboutRef.current, { offsetTop: 220 });
      }
      if (id === "skills") {
        bar.scrollIntoView(skillsRef.current, { offsetTop: 300 });
      }
      if (id === "work") {
        bar.scrollIntoView(workRef.current, { offsetTop: 200 });
      }
    }
    if (window.matchMedia("(max-width: 1199px)").matches) {
      const position = document.getElementById(id).offsetTop - 100;
      window.scrollTo({
        top: position,
        left: 0,
        behavior: "smooth",
      });
    }
  };
  const handleContact = () => {
    const position = document.getElementById("contact").offsetTop - 120;
    window.scrollTo({
      left: 0,
      top: position,
    });
    const bar = Scrollbar.get(smoothRef.current);
    bar.scrollTo(0, 10000, 1000);
  };
  return (
    <main ref={smoothRef} id={`${compwive && "my-scrollbar"}`}>
      <SideBar
        position={position}
        sidebarRef={sidebarRef}
        handleClick={handleClick}
      />
      <Home
        homeRef={homeRef}
        position={position}
        logoRef={logoRef}
        handleContact={handleContact}
      />
      <About aboutRef={aboutRef} position={position} aboutRed={aboutRed} />
      <Skills skillsRef={skillsRef} position={position} />
      <Work workRef={workRef} position={position} />
      <Contact contactRef={contactRef} position={position} />
    </main>
  );
}

export default Route1;
