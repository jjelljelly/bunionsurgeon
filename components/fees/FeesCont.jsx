import style from "./FeesCont.module.css";
import { FeesFlipCard } from "../templates/FeesFlipCard";

export function FeesCont({
  header,
  unilatLocal,
  unilatSedation,
  bilatLocal,
  bilatSedation,
}) {
  return (
    <div className={style.container}>
      <div className={style.typeCont}>
        <div className={style.type}>
          <h2>{header}</h2>
          <i className={style.arrow}></i>
        </div>
      </div>
      <div className={style.feesCont}>
        <FeesFlipCard
          feeType="One Foot"
          local={unilatLocal}
          sedation={unilatSedation}
        />
        <FeesFlipCard
          feeType="Both Feet"
          local={bilatLocal}
          sedation={bilatSedation}
        />
      </div>
    </div>
  );
}
