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
        feeType="Unilateral"
        local={unilatLocal}
        sedation={unilatSedation}
      />
      <FeesFlipCard
        feeType="Bilateral"
        local={bilatLocal}
        sedation={bilatSedation}
      />
    </>
    // </div>
  );
}
