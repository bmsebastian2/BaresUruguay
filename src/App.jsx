import React from "react";
import "./App.css";
import Inicio from "./routes/Inicio/Inicio";
import WindowsLoader from "./components/WindowsLoader";
import { Routes, Route } from "react-router-dom";
import AppBusqueda from "./routes/AppBusqueda/AppBusqueda";
import IngresarBares from "./routes/IngresarBares";
import Error404 from "./routes/Error404";

function App() {
  return (
    <div className="App" id="videoElement">
      <Routes>
        <Route path="/" element={<WindowsLoader />}>
          <Route path="" element={<Inicio />} />
        </Route>
        <Route path="AppBusqueda" element={<AppBusqueda />} />
        <Route path="IngresarBares" element={<IngresarBares />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
