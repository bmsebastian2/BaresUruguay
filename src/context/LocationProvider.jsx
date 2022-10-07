import { useEffect } from "react";
import { createContext, useState } from "react";
import actualizarPosicion from "../function/FuncionLoction";

export const PosicionProvider = createContext();

const LocationProvider = ({ children }) => {
  const [location, setLOcation] = useState();
  const [coordendas, setCoordenadas] = useState();

  // const [data, setData] = useState({
  //   state: apiStates.LOADING,
  //   error: "",
  //   district: "",
  //   countryName: "",
  //   city: "",
  // });
  const reloadPosition = () => {
    console.log("actualizarPosicion()");
  };

  useEffect(() => {}, []);

  return (
    <PosicionProvider.Provider value={{ location, reloadPosition }}>
      {children}
    </PosicionProvider.Provider>
  );
};

export default LocationProvider;
