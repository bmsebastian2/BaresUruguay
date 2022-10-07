import IconoSvgGps from "../../elements/IconGpsvg/IconoSvgGps";
import TextCursivaBeginner from "../../elements/TextCursivaBeginner";
import PostList from "../../function/PostList";

import Button from "../../elements/ButtonCustom/Button";
import { Link } from "react-router-dom";
import ContainerModal from "./ContainerModal";
import "./Modal.css";
import ModalSelect from "./ModalSelect";
import { useContext } from "react";
import { PosicionProvider } from "../../context/LocationProvider";

const WindowsModal = () => {
  const { reloadPosition } = useContext(PosicionProvider);
  return (
    <>
      <ContainerModal id="modal-one" title="Confirma tu ubicación.">
        <div className="modal-body">
          <IconoSvgGps />
          <TextCursivaBeginner name={<PostList />} tamaño="1.7rem" />
        </div>
        <div className="modal-footer">
          <Link to="/AppBusqueda">
            <Button name="Si" tamaño={"5rem"} />
          </Link>
          <a href="#modal-two" className="btn">
            <Button name="No" tamaño={"5rem"} />
          </a>
          <button onClick={() => reloadPosition()}>actau</button>
        </div>
      </ContainerModal>

      <ModalSelect id="modal-two" direccion={"/AppBusqueda"} />
    </>
  );
};

export default WindowsModal;
