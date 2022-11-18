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

  const test = () => {
    if (
      name.length > 1 &&
      email.length > 1 &&
      subject.length > 1 &&
      content.length > 1
    ) {
      console.log({ name, email, subject, content });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailJs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE,
        form.current,
        process.env.REACT_APP_PYBLIC
      )
      .then(
        (result) => {
          alert("Message was ccessfuly sent!");
          window.location.reload(false);
        },
        (error) => {
          alert("Something went wrong, please try again!");
        }
      );
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
            <ul>
              <div className="half_cont">
                <li className="half">
                  <input type="text" placeholder="name" name="name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    required
                  />
                </li>
              </div>
              <li>
                <input
                  type="text"
                  name="subject"
                  placeholder="subject"
                  className="subject_input"
                  required
                />
              </li>
              <li>
                <textarea
                  name="message"
                  placeholder="Message"
                  className="text_input"
                  required
                ></textarea>
              </li>
              <li>
                <button className="contact_btn" type="submit">
                  Send
                </button>
              </li>
            </ul>
          </form>
          {/* <button onClick={test}> test button</button> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
