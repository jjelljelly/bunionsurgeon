import style from "./Cross.module.css";

export function Cross({ setVisible }) {
  return (
    <button className={style.crossCont} onClick={() => setVisible(false)}>
      &#x292C;
    </button>
  );
}
