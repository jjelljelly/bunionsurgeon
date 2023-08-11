import { FAQs } from "../faq/FAQs";
import style from "./FrequentQuestions.module.css";

export function FrequentQuestions({ faqBunion }) {
  return (
    <div className={style.questionCont}>
      <h1>Frequently Asked Questions</h1>
      <FAQs faqBunion={faqBunion} />
    </div>
  );
}
