import { Timeline } from "../../templates/Timeline";
import style from "./SurgeryTimeline.module.css";

const timelineObj = [
  {
    time: "Two - four days",
    description:
      "This is the worst time for pain but you will be given painkillers to take as directed. You must rest completely for 2-4 days. You should restrict your walking to going to the bathroom and when getting about use your crutches in the way you will have been shown.",
  },
  {
    time: "One week after surgery",
    description:
      "You will have a one week review with Mr Nazir in person or over the phone. You may start to do a little more within pain limits. An increase in pain means you are doing too much.",
  },
  {
    time: "Two weeks after surgery",
    description:
      "We will arrange a second review where sutures will be removed. You may need to stay in a boot until six - eight weeks following surgery, hopping on the other foot. The time you spend in the cast is dependent on how quickly the bone fuses together.",
  },
  {
    time: "Between six - eight weeks after surgery",
    description:
      "You will return for a review with further X-rays. The foot will still be swollen especially at the end of the day. You may return to driving if you can perform an emergency stop. You must check with your insurance company before driving again.",
  },
  {
    time: "Between eight - twelve weeks after surgery",
    description:
      "The foot should continue to improve and begin to feel normal again. There will be less swelling.",
  },
  {
    time: "Between three - six months after surgery",
    description:
      "You will have a final review between three-six months following surgery. The swelling should now be slight and you should be getting the full benefit of surgery.",
  },
  {
    time: "Twelve months after surgery",
    description:
      "In most cases, the foot has stopped improving with all healing complete.",
  },
];

export function LapidusTimeline() {
  return (
    <div className={style.container}>
      <h2>Lapidus Procedure Timeline</h2>
      <Timeline timelineObj={timelineObj}></Timeline>
    </div>
  );
}
