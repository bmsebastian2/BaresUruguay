import React from "react";
import "./App.css";
import Inicio from "./routes/Inicio/Inicio";
import WindowsLoader from "./components/WindowsLoader";
import { Routes, Route } from "react-router-dom";
import AppBusqueda from "./routes/AppBusqueda/AppBusqueda";
import Error404 from "./routes/Error404";
import RequireAuth from "./components/RequireAuth";
import FormInputBar from "./routes/login/FormInputBar";
import Login from "./routes/login/Login";
import LayoutComponents from "./components/layoutComponents/LayoutComponents";

function App() {
  return (
    <div className="App" id="videoElement">
      <Routes>
        <Route path="/" element={<WindowsLoader />}>
          <Route path="" element={<Inicio />} />
        </Route>

        <Route path="AppBusqueda" element={<AppBusqueda />} />

        <Route path="IngresarBares/*" element={<LayoutComponents />}>
          <Route
            path="forminput"
            element={
              <RequireAuth>
                <FormInputBar />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
