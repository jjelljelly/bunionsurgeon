import { FeesFlipCard } from "../templates/FeesFlipCard";
import style from "./HomeFeesCont.module.css";

export function HomeFeesCont({
  unilatLocal,
  unilatSedation,
  bilatLocal,
  bilatSedation,
}) {
  return (
    // <div className={style.feesCont}>
    <>
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
    </>
    // </div>
  );
}
