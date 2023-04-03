import style from "./ButtonRight.module.css";

export function ButtonRight({ idx, setIdx, setItem, items }) {
  return (
    <>
      <button
        onClick={() => {
          setIdx(idx + 1);
          setItem(items[idx + 1]);
        }}
        className={idx === items.length - 1 ? style.button : style.buttonRight}
        disabled={idx === items.length - 1}
      >
        &#8594;
      </button>
    </>
  );
}
