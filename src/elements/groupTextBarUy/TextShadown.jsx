import style from "./TextShadown.module.css";

const TextShadown = () => {
  return (
    <div className={style.section}>
      <div className={style.cover}>
        <p className={style.parrafo}>
          <span className={style.char1}>b</span>
          <span className={style.char2}>a</span>
          <span className={style.char3}>r</span>
        </p>
      </div>
    </div>
  );
};

export default TextShadown;
