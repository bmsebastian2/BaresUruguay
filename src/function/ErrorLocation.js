const error = {
  1: "Habilite GPS en el navegador.",
  2: "Error en GeoCode. Seleccione manualmente su ubicación.",
};

const searcherror = (key) => {
  return error[key] ? error[key] : "Other error";
};

export default searcherror;
