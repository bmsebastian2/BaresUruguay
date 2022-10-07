// import styled from "styled-components";
import style from "./TextGroupBarUy.module.css";
import TextShadown from "./TextShadown";
import TextUy from "../TextUy/TextUy";
import TextNeon from "./TextNeon";
import imagen from "../../assets/Loop.png";




const TextGroupBarUy = () => {
  return (
    <div className={style.containerMain}>
      <div className={style.containerSon}>
        <img className={style.imagen} src={imagen} />
        <TextShadown />

        <TextUy />
        <img className={style.imagen2} src={imagen} />
      </div>

      <div>
        <TextNeon />
      </div>
    </div>
  );
};

export default TextGroupBarUy;
