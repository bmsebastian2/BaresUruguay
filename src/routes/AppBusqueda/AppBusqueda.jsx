import React from "react";

import Menu from "../../components/Menu";

import LineColor from "../../elements/LinColor/LineColor";
import TextGroupBarUy from "../../elements/groupTextBarUy/TextGroupBarUy";
import "./AppBusqueda.css";

import Lupa from "../../assets/magnifier.png";
import Gps from "../../assets/gps.png";
import Lupulo from "../../assets/Loop.png";

const AppBusqueda = () => {
  return (
    <>
      <div className="ContainerAppBusqueda">
        <div className="Header">
          <div className="HeaderIconos">
            <div>
              <TextGroupBarUy />
            </div>

            <div>
              <img className="ImgLupulo " src={Lupulo} />
            </div>
          </div>

          <div className="HeaderBuscar">
            <a className="Ancla" href="#modal-tree">
              <div>
                <img className="imagen" loading="lazy" src={Lupa} />
              </div>

              <p className="parrafoBusqueda">Seleccionar otra ubicación.</p>

              <div>
                <img src={Gps} className="imagen" loading="lazy" />
              </div>
            </a>
          </div>
        </div>

        <LineColor />

        <div className="Body"></div>

        <div className="Footer_Buscar">
          <Menu />
        </div>
      </div>
    </>
  );
};

export default AppBusqueda;
