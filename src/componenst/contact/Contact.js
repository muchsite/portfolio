import React, { useRef, useState } from "react";
import "./contact.scss";
import emailJs from "@emailjs/browser";
import AnimateL from "../animate/AnimateL";
import { useEffect } from "react";
// import env from "dotenv";
function Contact({ contactRef, position }) {
  const contArr = "Cntact Me".split("");
  const [letClass, setLetClass] = useState("about_animate_before");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const form = useRef();
  const [falseContact, setFalseContact] = useState(false);
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
          alert("Message was successfully sent!");
          window.location.reload(false);
        },
        (error) => {
          alert("Something went wrong, please try again!");
        }
      );
  };

  useEffect(() => {
    if (position === "contact" && !falseContact) {
      setLetClass("about_animate");
      setFalseContact(true);
      setTimeout(() => {
        setLetClass("about_bounce_class");
      }, 3000);
    }
  }, [position]);
  return (
    <section className="contact_cont" id="contact">
      <div className="contact_text">
        <div className="contact_title">
          <h1>
            <AnimateL arr={contArr} lclass={letClass} ind={1} />
          </h1>
          <p ref={contactRef}>
            I am interested in freelance opportunities. You can contact me by
            using the below form or by email at{" "}
            <span>muchsite3@gmail.com.</span>
          </p>
        </div>
        <div className="contact_input">
          <form action="" onSubmit={handleSubmit} ref={form}>
            <ul>
              <div className="half_cont">
                <li className={`${falseContact && "input_animation"} half`}>
                  <input type="text" placeholder="Name" name="name" required />
                </li>
                <li className={`${falseContact && "input_animation"} half`}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
              </div>
              <li className={`${falseContact && "input_animation"}`}>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="subject_input"
                  required
                />
              </li>
              <li className={`${falseContact && "input_animation"}`}>
                <textarea
                  name="message"
                  placeholder="Message"
                  className="text_input"
                  required
                ></textarea>
              </li>
              <li className={`${falseContact && "input_animation"}`}>
                <button className="contact_btn" type="submit">
                  Send
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <div className="contact_logo">
        <svg
          width="347"
          height="348"
          viewBox="0 0 347 348"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="g4">
            <g id="Group5">
              <path
                id="rect6"
                d="M269.344 95.3105L68.0294 100.515C57.54 100.787 49.2566 109.51 49.5278 119.999L52.4248 232.054C52.696 242.543 61.4192 250.826 71.9085 250.555L273.223 245.35C283.713 245.079 291.996 236.356 291.725 225.867L288.828 113.812C288.557 103.323 279.833 95.0393 269.344 95.3105Z"
                fill="#EBFFED"
              />
              <path
                id="path8"
                d="M63.1411 96.0958C52.3065 98.6576 44.3555 108.771 44.6521 120.256C61.7354 154.744 46.6897 194.894 47.6699 232.221C48.0104 245.346 58.992 255.851 72.1168 255.511L276.967 246.654C290.092 246.314 294.34 236.739 294.001 223.614C297.345 185.599 300.446 147.69 293.8 114.032C293.462 100.907 289.675 84.3346 276.551 84.6739L68.3016 95.6891C66.6618 95.7376 64.677 95.7276 63.1299 96.0953L63.1411 96.0958ZM62.721 106.419C64.4202 105.645 66.5389 105.463 68.5154 105.392C142.015 89.3011 231.746 106.115 272.385 97.4187C278.85 97.252 281.216 104.175 283.168 110.019C266.315 129.811 221.26 155.104 186.081 178.467C177.336 184.634 164.93 180.174 155.879 174.467C111.568 164.932 88.6541 136.131 55.0394 116.961C55.9451 112.377 58.5471 108.291 62.7204 106.392L62.721 106.419ZM56.8284 129.766L139.784 181.64C113.443 200.317 98.966 213.82 59.0034 238.439C57.904 236.521 57.4529 234.417 57.3892 232.016C58.3367 196.792 62.437 164.517 56.8285 129.765L56.8284 129.766ZM284.206 121.12C295.087 154.696 287.493 190.972 287.095 226.196C287.157 228.568 286.365 230.485 285.39 232.439C256.883 215.085 222.519 203.004 200.066 180.198L284.206 121.12ZM149.166 186.84C161.689 193.054 178.962 192.573 191.243 185.833C183.703 182.596 232.518 211.99 277.775 239.324C276.259 239.891 274.552 240.422 272.836 240.47C212.631 232.743 141.006 241.044 71.9168 245.787C70.0554 245.844 68.3003 245.164 66.6485 244.59C102.563 213.54 121.82 205.865 149.167 186.836L149.166 186.84Z"
                fill="#048638"
              />
            </g>
            <path
              id="path10"
              d="M86.8201 5.98972C-1.52991 11.9158 -4.4459 120.41 3.5131 187.05C-12.1989 263.254 24.6051 361.14 117.613 346.15C185.046 333.37 261.703 367.529 321.513 326.436C369.971 269.525 330.595 185.386 342.937 116.916C362.971 26.9407 257.912 -9.51428 186.257 2.09572C153.146 3.96252 119.998 6.09321 86.8191 5.98901L86.8201 5.98972ZM86.8201 27.2387C159.038 26.0609 252.55 0.667713 308.65 56.4657C344.736 122.912 333.553 207.746 318.85 278.406C283.928 356.446 190.28 312.292 125.81 330.343C58.1161 344.037 8.9801 280.824 25.8701 217.613C27.8433 164.299 15.3811 109.943 28.1937 57.3327C40.6127 37.4167 64.9147 30.2927 86.8167 27.2337L86.8201 27.2387Z"
              fill="#05FF00"
            />
          </g>
        </svg>
      </div>
    </section>
  );
}

export default Contact;
