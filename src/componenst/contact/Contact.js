import React, { useState } from "react";
import "./contact.scss";

import AnimateL from "../animate/AnimateL";

function Contact() {
  const contArr = "Cntact Me".split("");
  const [letClass, setLetClass] = useState("about_animate");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");

  useState(() => {
    setTimeout(() => {
      setLetClass("about_bounce_class");
    }, 3000);
  }, []);
  return (
    <div className="contact_cont">
      <div className="contact_text">
        <div className="contact_title">
          <h1>
            <AnimateL arr={contArr} lclass={letClass} ind={1} />
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            odit, aliquid natus sequi quae eos consequuntur aut facere.
            Accusamus vitae inventore sed cupiditate natus nulla aspernatur eius
            quasi beatae nemo.
          </p>
        </div>
        <div className="contact_input">
          <form action="">
            <div className="input_div">
              <input
                type="text"
                placeholder="Name"
                className="name_input"
                value={name || ""}
                onChange={(e) => setName(e.currentTarget.value)}
              />
              <input
                type="text"
                placeholder="Email"
                className="name_input"
                value={email || ""}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="subject_input"
              value={subject || ""}
              onChange={(e) => setSubject(e.currentTarget.value)}
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="text_input"
              value={content || ""}
              onChange={(e) => setContent(e.currentTarget.value)}
            ></textarea>
            <button className="contact_btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
