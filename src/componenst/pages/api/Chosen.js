import React from "react";
import { useApiContext } from "./constext";
import { Link } from "react-router-dom";
function Chosen() {
  const { data, setData, loading, setLoading, regions, chose } =
    useApiContext();
  const filterd = data?.filter((item) => {
    return item.region.toUpperCase().includes(chose.toUpperCase());
  });
  return (
    <>
      {filterd?.map((item) => {
        return (
          <Link
            to={`name/${item.name.common}`}
            state={{ item: item }}
            className="element"
            key={item.name.common}
          >
            <div>
              <img src={item.flags.png} alt="" className="element__img" />
              <div className="country_desc">
                <p className="country_name">{item.name.common}</p>
                <p>
                  <span className="item_title">Population:</span>{" "}
                  {item.population}
                </p>
                <p>
                  <span className="item_title">Region:</span> {item.region}
                </p>
                <p>
                  <span className="item_title"> Capital:</span> {item.capital}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default Chosen;
