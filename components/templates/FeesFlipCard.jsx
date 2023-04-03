import style from "./FeesFlipCard.module.css";
// import { usePricingContext } from "../../context/pricingContext";
import { useState } from "react";

export function FeesFlipCard({
  unilatLocal,
  unilatSedation,
  bilatLocal,
  bilatSedation,
}) {
  const [styling, setStyling] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.cardCont}>
        <div className={style.flipCard}>
          <div
            onClick={() => {
              setStyling(styling === unilatSedation ? false : unilatSedation);
            }}
            className={
              styling === unilatSedation ? style.rotate : style.wrapper
            }
          >
            <div
              className={
                styling === unilatSedation
                  ? style.flipCardBack
                  : style.flipCardFront
              }
            >
              {styling === unilatSedation ? (
                <div className={style.feesCont}>
                  <div className={style.fees}>
                    <p className={style.feesText}>Local anaesthesia</p>
                    <p>{unilatLocal ? unilatLocal : "loading"}</p>
                  </div>
                  <div className={style.fees}>
                    <p className={style.feesText}>Sedation</p>
                    <p>{unilatSedation ? unilatSedation : "loading"}</p>
                  </div>
                </div>
              ) : (
                <h2>Unilateral Correction</h2>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className={style.cardCont}>
        <div className={style.flipCard}>
          <div
            onClick={() => {
              setStyling(styling === bilatSedation ? false : bilatSedation);
            }}
            className={styling === bilatSedation ? style.rotate : style.wrapper}
          >
            <div
              className={
                styling === bilatSedation
                  ? style.flipCardBack
                  : style.flipCardFront
              }
            >
              {styling === bilatSedation ? (
                <div className={style.feesCont}>
                  <div className={style.fees}>
                    <p className={style.feesText}>Local anaesthesia</p>
                    <p>{bilatLocal ? bilatLocal : "loading"}</p>
                  </div>
                  <div className={style.fees}>
                    <p className={style.feesText}>Sedation</p>
                    <p>{bilatSedation ? bilatSedation : "loading"}</p>
                  </div>
                </div>
              ) : (
                <h2>Bilateral Correction</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
