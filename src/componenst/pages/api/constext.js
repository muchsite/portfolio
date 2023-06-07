import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import { useQuery } from "react-query";
import Chosen from "./Chosen";

const apiConetxt = createContext();

export const CreateApiContext = ({ children }) => {
  const [data, setData] = useState();
  const [light, setLight] = useState("light");
  const [inp, setInp] = useState(undefined);
  const [chose, setChose] = useState("All regions");

  useState(() => {
    setChose(localStorage.getItem("region"));
  }, []);
  const handleRegion = (e) => {
    localStorage.setItem("region", e.target.value);
    setChose(localStorage.getItem("region"));
  };
  const { isLoading, data: dataAll } = useQuery(
    ["all-countries", chose],
    () => {
      return axios.get("https://restcountries.com/v3.1/all");
    },
    {
      enabled: chose === "All regions",
    }
  );
  const { data: dataRegion, isLoading: regionLoading } = useQuery(
    ["region-countries", chose],
    () => {
      return axios.get("https://restcountries.com/v3.1/region/" + chose);
    },
    {
      enabled: chose !== "All regions",
    }
  );

  useEffect(() => {
    const reg = localStorage.getItem("region");
    setChose(reg);
  }, []);
  useEffect(() => {
    if (localStorage.getItem("region") !== "All regions") {
      setData(dataRegion);
    }
  }, [localStorage.getItem("region"), regionLoading]);
  useEffect(() => {
    if (chose === "All regions") {
      setData(dataAll);
    }
  }, [chose, isLoading]);

  const regions = [
    "All regions",
    "Africa",
    "Americas",
    "Europe",
    "Asia",
    "Oceania",
    "Antarctic",
  ];
  return (
    <apiConetxt.Provider
      value={{
        data: data?.data,
        isLoading,
        light,
        setLight,
        regions,
        inp,
        setInp,
        chose,
        setChose,
        regionLoading,
        handleRegion,
      }}
    >
      {children}
    </apiConetxt.Provider>
  );
};

export const useApiContext = () => useContext(apiConetxt);
