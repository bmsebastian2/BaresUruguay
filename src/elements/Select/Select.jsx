import styles from "./Select.module.css";
import barriosMontevideo from "../../function/Barrios.js";


const Select = () => {
  return (
    <div className={styles.boxSelect}>
      <select className={styles.selectCustom}>
        {barriosMontevideo.map((e, items) => (
          <option key={items}>{e}</option>
        ))}
      </select>
   
    </div>
  );
};

export default Select;
