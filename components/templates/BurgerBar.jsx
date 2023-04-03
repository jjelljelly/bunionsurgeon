import style from "./BurgerBar.module.css";
import styling from "./Navigation.module.css";
import { useState } from "react";

export function BurgerBar({ responsive, setResponsive }) {
  return (
    <div
      className={style.burgerCont}
      onClick={() => setResponsive(!responsive)}
    >
      <div className={style.burgerLine}></div>
      <div className={style.burgerLine}></div>
      <div className={style.burgerLine}></div>
    </div>
  );
}
