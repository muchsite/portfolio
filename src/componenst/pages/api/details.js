import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Link, useLocation } from "react-router-dom";
import { useApiContext } from "./constext";
import Loading from "./Loading";
import Nav from "./Nav";
import Vrap from "./Vrap";
const Details = () => {
  const { resetInput } = useApiContext();
  const data1 = useLocation();
  const country = data1.state?.name;
  const { data, isLoading } = useQuery("single_country", () => {
    return axios.get(`https://restcountries.com/v2/name/${country}`);
  });
  // const data?.data[0] = data?.data[0];
  const native = data?.data[0].name;
  const nativeName = data?.data[0].nativeName;
  const courency = data?.data[0].currencies[0].name;
  const courencyName = data?.data[0].currencies[0].name;
  const langObject = data?.data[0].languages;
  const region = data?.data[0].region;
  const subregion = data?.data[0].subregion;
  const languages = langObject?.map((item) => {
    return item.name;
  });
  console.log(data);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Vrap>
      <Nav />
      <div className="details-page">
        <Link to="/pages/api/" className="back-BTN" onClick={resetInput}>
          {`<-- Back`}
        </Link>
        <div className="details-container">
          <img src={data?.data[0].flags.png} alt="" />
          <div className="info">
            <h1>{native}</h1>
            <div className="stat">
              <div className="stat1">
                <p>
                  <span className="bold">Native Name:</span>
                  {nativeName}
                </p>
                <p>
                  <span className="bold">Populatipn:</span>
                  {data?.data[0].population}
                </p>
                <p>
                  <span className="bold">Region:</span>
                  {region}
                </p>
                <p>
                  <span className="bold">Sub Region:</span>
                  {subregion}
                </p>
                <p>
                  <span className="bold">Capital:</span>
                  {data?.data[0].capital}
                </p>
              </div>
              <div className="">
                <p>
                  <span className="bold">Top Level Domain:</span>
                  {data?.data[0].topLevelDomain[0]}
                </p>
                <p>
                  <span className="bold">Courency:</span>
                  {courencyName}
                </p>
                <p>
                  <span className="bold">Languages:</span>
                  {languages?.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </p>
              </div>
            </div>
            <div className="neighbours">
              <span className="bold1">Border countries:</span>
              <div className="neighGrid">
                {data?.data[0].borders?.map((item) => (
                  <span className="neCountry">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Vrap>
  );
};
export default Details;
