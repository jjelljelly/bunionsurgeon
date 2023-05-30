import { Cross } from "./Cross";
import style from "./Modal.module.css";

export function ModalContact({ visible, children, setResponse }) {
  if (visible) {
    return (
      <div className={style.container}>
        <div className={style.element}>
          <Cross setVisible={setResponse} />
          {children}
        </div>
      </div>
    );
  }
  return null;
}
