import React from "react";
import { useApiContext } from "./constext";

function Vrap({ children }) {
  const { light } = useApiContext();
  return <div className={light}>{children}</div>;
}

export default Vrap;
