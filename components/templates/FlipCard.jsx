import style from "./FlipCard.module.css";
import { useState } from "react";

export function FlipCard({ questions }) {
  const [styling, setStyling] = useState(false);

  return (
    <>
      {questions.map((item) => {
        const isFlipped = styling === item.question;
        return (
          <div
            className={style.card}
            onClick={() =>
              setStyling((styling) =>
                styling === item.question ? false : item.question
              )
            }
          >
            <div
              className={
                style.cardInner + (isFlipped ? "" : ` ${style.rotate}`)
              }
            >
              <div className={style.cardBack}>
                <div>
                  <p>{item.answer}</p>
                </div>
              </div>
              <div
                className={
                  style.cardFront + (isFlipped ? "" : ` ${style.rotate}`)
                }
              >
                <h2>{item.question}</h2>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
