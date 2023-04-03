import { FlipCard } from "../templates/FlipCard";
import style from "./FrequentQuestions.module.css";

const questions = [
  {
    question: "Bunion symptoms",
    answer: ` Soreness or pain
     Redness
     Swelling around the joint
     Toe movement is restricted
     Pain when moving the affected toe
     Bump at the joint of the affected toe
     Corns or calluses`,
  },
  {
    question: "When should I treat my Bunion?",
    answer: `There is no precise point when you should seek treatment for your bunion. 
    
    Generally patients seek help once the condition becomes painful. 
      
      It is important to bear in mind that bunions do get worse over time.`,
  },
  {
    question: "How common are Bunions?",
    answer: `Bunions are very common, approximately ¼ of adults have a Bunion. 
      
      Women experience bunion symptoms more than men. 
      
      Bunions can affect any age group and are often seen to develop in early teens, but they are more common as people age.`,
  },
  {
    question: "Are Bunions serious?",
    answer: `A Bunion can be very painful and can lead to a swollen big toe, the smaller toes can even start to overlap. 
    
    They are progressive, meaning that they will not get better if left alone and will get worse over time. 
    
    Poorly fitted narrow shoes or shoes with heels can exacerbate the symptoms and speed up the progression.`,
  },
];

export function FrequentQuestions() {
  return (
    <div className={style.questionCont}>
      <FlipCard questions={questions} />
    </div>
  );
}
