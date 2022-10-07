import React from "react";
import searcherror from "../function/ErrorLocation";
export const apiStates = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export const locationPosition = () => {
  const [data, setData] = React.useState({
    state: apiStates.LOADING,
    error: "",
    district: "",
    countryName: "",
    city: "",
  });
  const setPartData = (partialData) => setData({ ...data, ...partialData });

  React.useEffect(() => {
    setPartData({
      state: apiStates.LOADING,
    });
    const showPosition = (position) => {
      if (position) {
        getUbicacion(position, setPartData);
      }
    };
    function gpsError(err) {
      setPartData({
        state: apiStates.ERROR,
        error: searcherror(err.code), //codigo de error en este caso validamos el 1 que es inicio de gps en el navegador
      });
      showPosition();
    }
    const opciones = {
      enableHighAccuracy: true,
      maximumAge: 0, //dispositivo no puede usar una posición almacenada en caché
      timeout: 60000, // tardar para devolver una posición
    };

    const getLocation = () => {
      navigator.geolocation.getCurrentPosition(
        showPosition,
        gpsError,
        opciones
      );
    };
    getLocation();
  }, []);

  return data;
};

function getUbicacion(position, setPartData) {
  let la = position.coords.latitude;
  let lo = position.coords.longitude;

  fetch(
    `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${la},${lo}&lang=en-US&apikey=1W9Uzy8_P4PvjP1ZfO6NkAbCRyuuL0D3uXqMDvzLer8`
  )
    .then((resp) => resp.json())
    .then((data) => {
      const {
        // label,
        // houseNumber,
        // postalCode,
        // street,
        countryName,
        city,
        district,
      } = data.items[0].address;
      setPartData({
        state: apiStates.SUCCESS,
        district,
        countryName,
        city,
      });
    })
    .catch((error) => {
      setPartData({
        state: apiStates.ERROR,
        error: searcherror(2), //codigo de error en este caso validamos el 1 que es inicio de gps en el navegador
      });
    });
}
