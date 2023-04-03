import { ButtonLeft } from "./ButtonLeft";
import { ButtonRight } from "./ButtonRight";
import { Cross } from "./Cross";
import style from "./Modal.module.css";

export function Modal({ children, visible, setItem, idx, setIdx, items }) {
  if (visible) {
    return (
      <div className={style.container}>
        <div className={style.element}>
          <ButtonLeft
            idx={idx}
            setIdx={setIdx}
            setItem={setItem}
            items={items}
          />
          <Cross setVisible={setItem} />
          {children}
          <ButtonRight
            idx={idx}
            setIdx={setIdx}
            setItem={setItem}
            items={items}
          />
        </div>
      </div>
    );
  }
  return null;
}
