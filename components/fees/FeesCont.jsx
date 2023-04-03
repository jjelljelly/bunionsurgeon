import style from "./FeesCont.module.css";
import { useState } from "react";
import { FeesFlipCard } from "../templates/FeesFlipCard";
import { usePricingContext } from "../../context/pricingContext";

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
          unilatLocal={unilatLocal}
          unilatSedation={unilatSedation}
          bilatLocal={bilatLocal}
          bilatSedation={bilatSedation}
        />
      </div>
    </div>
  );
}
