import searcherror from "./ErrorLocation";

const actualizarPosicion = (setLatlong) => {
  const opciones = {
    enableHighAccuracy: true,
    maximumAge: 0, //dispositivo no puede usar una posición almacenada en caché
    timeout: 60000, // tardar para devolver una posición
  };
  function gpsError(err) {
    // setPartData({
    //   state: apiStates.ERROR,
    //   error: searcherror(err.code),
    // });
    console.log(err);
    showPosition();
  }

  const showPosition = (position) => {
    if (position) {
      let la = position.coords.latitude;
      let lo = position.coords.longitude;
      let coordenadas = { la, lo };
      setLatlong({pLa:la, pLo:lo})
      console.log(coordenadas);
    }
  };
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(showPosition, gpsError, opciones);
  };

  getLocation();
};

export default actualizarPosicion;
