import React from "react";
import { useApiContext } from "./constext";
import { Link } from "react-router-dom";
import Loading from "./Loading";
function Serched() {
  const { data, inp, isLoading, regionLoading } = useApiContext();
  const filterd = data?.filter((item) => {
    return item.name.common.toUpperCase().includes(inp.toUpperCase());
  });
  console.log(filterd);
  if (isLoading || regionLoading) {
    return <Loading />;
  }
  return (
    <>
      {filterd && filterd.length > 0 ? (
        <>
          {filterd?.map((item) => {
            return (
              <Link
                to={`/pages/api/name/${item.name.common}`}
                state={{ name: item.name.common }}
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
                      <span className="item_title"> Capital:</span>{" "}
                      {item.capital}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </>
      ) : (
        <h1>No Data...</h1>
      )}
    </>
  );
}

export default Serched;
