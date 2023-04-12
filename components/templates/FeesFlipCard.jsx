import styles from "./FeesFlipCard.module.css";
import { useState } from "react";

export function FeesFlipCard({ local, sedation, feeType }) {
  const [styling, setStyling] = useState(false);
  const isFlipped = styling === false;
  return (
    <div
      className={styles.card}
      onClick={() =>
        setStyling((styling) => (styling === sedation ? false : sedation))
      }
    >
      <div
        className={styles.cardInner + (isFlipped ? ` ${styles.rotate}` : "")}
      >
        <div className={styles.cardBack}>
          <div>
            <p className={styles.fontWeight}>Local anaesthesia</p>
            <p className={styles.fontWeight}>{local ?? "Loading"}</p>
          </div>
          <div>
            <p className={styles.fontWeight}>Sedation</p>
            <p className={styles.fontWeight}>{sedation ?? "Loading"}</p>
          </div>
        </div>
        <div
          className={styles.cardFront + (isFlipped ? ` ${styles.rotate}` : "")}
        >
          <h2>{`${feeType} Correction`}</h2>
        </div>
      </div>
    </div>
  );
}
