import { Cross } from "./Cross";
import style from "./Modal.module.css";

export function CookieModal({ children, visible, setVisible }) {
  if (visible) {
    return (
      <div className={style.container}>
        <div className={style.element}>
          <Cross setVisible={setVisible} />
          {children}
        </div>
      </div>
    );
  }
  return null;
}
