import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.scss";
import "animate.css";

import Home from "./componenst/home/Home";
import About from "./componenst/about/About";
import Contact from "./componenst/contact/Contact";
import Layout from "./componenst/layout/Layout";
import Skills from "./componenst/skills/Skills";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
