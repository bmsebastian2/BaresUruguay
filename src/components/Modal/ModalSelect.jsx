import ContainerModal from "./ContainerModal";
import Select from "../../elements/Select/Select";
import Button from "../../elements/ButtonCustom/Button";
import { Link } from "react-router-dom";

const ModalSelect = ({ id, direccion }) => {
  return (
    <ContainerModal id={id} title="Seleccione ubicación.">
      <div className="modal-body">
        <Select />
      </div>
      <div className="modal-footer">
        <Link to={direccion}>
          <Button name="Seleccionar" tamaño={"10rem"} />
        </Link>
      </div>
    </ContainerModal>
  );
};

export default ModalSelect;
