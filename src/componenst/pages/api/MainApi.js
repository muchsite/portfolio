import "./App.css";
import Loading from "./Loading.js";
import { useApiContext } from "./constext";
import { Link } from "react-router-dom";
import search from "./img/search.png";
import Serched from "./Serched";
import Static from "./Static";
import Chosen from "./Chosen";
import Vrap from "./Vrap";
import Nav from "./Nav";
const Main = () => {
  const {
    isLoading,
    regions,
    inp,
    setInp,
    handleRegion,
    regionLoading,
    chose,
  } = useApiContext();
  if (isLoading || regionLoading) {
    return <Loading />;
  }
  if (!isLoading) {
    return (
      <Vrap>
        <Nav />
        <div className="inputs">
          <div className="search">
            <img src={search} alt="" />
            <input
              type="text"
              onChange={(e) => setInp(e.target.value)}
              placeholder="Search for a country..."
            />
          </div>
          <div className="search2">
            <select
              name=""
              id=""
              value={localStorage.getItem("region")}
              onChange={(e) => handleRegion(e)}
            >
              {regions &&
                regions.map((item) => {
                  return (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  );
                })}
            </select>
          </div>
        </div>
        <div>
          <div className="elements">
            {!inp && <Static />}
            {inp && <Serched />}
          </div>
        </div>
      </Vrap>
    );
  }
};
export default Main;
