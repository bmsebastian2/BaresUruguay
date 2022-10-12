import { useEffect } from "react";
import { createContext, useState } from "react";

import actualizarPosicion from "../function/FuncionLoction";

export const PosicionProvider = createContext();

const LocationProvider = ({ children }) => {
  const [location, setLOcation] = useState("cariaco");
  const [coordendas, setCoordenadas] = useState();
  const [latlong, setLatlong] = useState({pLa:'', pLo:''})

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

  useEffect(() => {
    actualizarPosicion(setLatlong);
  }, []);

  return (
    <PosicionProvider.Provider value={{ location, reloadPosition,latlong }}>
      {children}
    </PosicionProvider.Provider>
  );
};

export default LocationProvider;
