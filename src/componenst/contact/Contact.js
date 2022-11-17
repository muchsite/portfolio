import React, { useRef, useState } from "react";
import "./contact.scss";
import emailJs from "@emailjs/browser";
import AnimateL from "../animate/AnimateL";
// import env from "dotenv";
function Contact() {
  const contArr = "Cntact Me".split("");
  const [letClass, setLetClass] = useState("about_animate");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailJs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE,
        form.current,
        process.env.REACT_APP_PYBLIC
      )
      .then((result) => {
        alert("Message was ccessfuly sent!");
        window.location.reload(false);
      })
      .catch((error) => {
        alert("Something went wrong, please try again!");
      });
  };
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
          <form action="" onSubmit={handleSubmit} ref={form}>
            <div className="input_div">
              <input
                type="text"
                placeholder="Name"
                name="Name"
                className="name_input"
                value={name || ""}
                onChange={(e) => setName(e.currentTarget.value)}
              />
              <input
                type="text"
                placeholder="Email"
                name="Email"
                className="name_input"
                value={email || ""}
                onChange={(e) => setEmail(e.currentTarget.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              name="Subject"
              className="subject_input"
              value={subject || ""}
              onChange={(e) => setSubject(e.currentTarget.value)}
            />
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className="text_input"
              value={content || ""}
              onChange={(e) => setContent(e.currentTarget.value)}
            ></textarea>
            <button className="contact_btn" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
