import { BackgroundLines } from "./BackgroundLines";
import style from "./ExtraInfo.module.css";

export function ExtraInfo() {
  return (
    <div className={style.moreInfo}>
      <BackgroundLines />
      <h3>
        We provide alternative surgical options for bunion correction, such as
        the scarf and akin osteotomy and lapidus procedure.
      </h3>
      <h3>
        Visit our bunion pricing information page or contact our team to find
        out more.
      </h3>
    </div>
  );
}
