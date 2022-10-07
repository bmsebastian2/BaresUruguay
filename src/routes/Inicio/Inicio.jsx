import styles from "./Inicio.module.css";
import TextCursivaBeginner from "../../elements/TextCursivaBeginner";
import LetrasLiquida from "../../elements/LetrasLiquid/LetrasLiquida";
import Bienvenido from "../../elements/Bienvenido";
import Ancla from "../../elements/ButtonAncla";
import { Link } from "react-router-dom";
import LineColor from "../../elements/LinColor/LineColor";
import WindowsModal from "../../components/Modal/WindowsModal";

const Inicio = () => {
  return (
    <div className={styles.containerInicio}>
      <div className={styles.containerMain}>
        <div className={styles.containerInicioHeader}>
          <div className={styles.containerTituloBar}></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TextCursivaBeginner name="Buscar por:" tamaño="1.7rem" />

            <Ancla enlace={"#modal-one"} name="Mi Ubicación" />
            <LineColor />
            <Ancla enlace={"#modal-two"} name="Seleccionar" />
          </div>

          <LetrasLiquida />          
          <WindowsModal />
        </div>

        <div className={styles.containerInicioFooter}>
          <div>
            <Bienvenido />
          </div>
          <div>
            <Link to="/IngresarBares">Ingresar Bar</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
