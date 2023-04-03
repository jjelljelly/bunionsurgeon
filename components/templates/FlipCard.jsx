import style from "./FlipCard.module.css";
import { useState } from "react";

export function FlipCard({ questions }) {
  const [styling, setStyling] = useState(false);
  return (
    <>
      <div className={style.cardCont}>
        {questions.map((item) => (
          <div className={style.flipCard}>
            <div
              onClick={() => {
                setStyling(styling === item.question ? false : item.question);
              }}
              className={
                styling === item.question ? style.rotate : style.wrapper
              }
            >
              <div
                className={
                  styling === item.question
                    ? style.flipCardBack
                    : style.flipCardFront
                }
              >
                {styling === item.question ? (
                  <p>{item.answer}</p>
                ) : (
                  <h2>{item.question}</h2>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
