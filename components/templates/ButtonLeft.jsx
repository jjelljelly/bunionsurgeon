import style from "./ButtonLeft.module.css";
import { useState, useEffect } from "react";

export function ButtonLeft({ idx, setIdx, setItem, items }) {
  return (
    <>
      <button
        onClick={() => {
          setIdx(idx - 1);
          setItem(items[idx - 1]);
          console.log("index", idx);
        }}
        className={idx === 0 ? style.button : style.buttonLeft}
        disabled={idx === 0}
      >
        &#8592;
      </button>
    </>
  );
}
