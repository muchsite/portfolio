import "./App.scss";
import Buttons from "./Buttons";
import { useState } from "react";
import { Link } from "react-router-dom";

function Calc() {
  const [prev, setPrev] = useState("");
  const [curr, setCurr] = useState("");
  const [resu, setResu] = useState("");
  const [opperation, setopperation] = useState("");

  const [theme, setTheme] = useState("first");
  const [one, setone] = useState("toggle_active");
  const [two, settwo] = useState();
  const [three, setthree] = useState();

  const togle1 = () => {
    setone("toggle_active");
    settwo("");
    setthree("");
    setTheme("first");
  };
  const togle2 = () => {
    setone("");
    settwo("toggle_active");
    setthree("");
    setTheme("second");
  };
  const togle3 = () => {
    setone("");
    settwo("");
    setthree("toggle_active");
    setTheme("third");
  };

  return (
    <div className="App">
      <Link to="/" className="back_link">
        Back To Protfolio
      </Link>
      <div className={`${theme}`}>
        <div className={`container `}>
          <div className="top">
            <p>calc</p>
            <div className="theme">
              <div className="theme-text">
                <h6>THEME</h6>
              </div>
              <div className="theme-buttons">
                <div className={`theme-btn one ${one}`} onClick={togle1}></div>
                <div className={`theme-btn two ${two}`} onClick={togle2}></div>
                <div
                  className={`theme-btn three ${three}`}
                  onClick={togle3}
                ></div>
              </div>
            </div>
          </div>
          <div className="middle">
            <p>{prev + opperation + curr + resu}</p>
          </div>
          <div className="botton">
            <Buttons
              prev={prev}
              setPrev={setPrev}
              curr={curr}
              setCurr={setCurr}
              resu={resu}
              setResu={setResu}
              opperation={opperation}
              setopperation={setopperation}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calc;
