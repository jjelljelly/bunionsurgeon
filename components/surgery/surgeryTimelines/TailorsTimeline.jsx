import { Timeline } from "../../templates/Timeline";
import style from "./SurgeryTimeline.module.css";

const timelineObj = [
  {
    time: "First two - four days",
    description:
      "This is the worst time for pain but you will be given painkillers to help. You must rest completely for 3-5 days. You will be able to stand and take weight carefully (using crutches) after the operation, but you must rest, with your feet up, as much as possible. You should restrict your walking to going to the bathroom and when getting about use your crutches in the way you will have been shown. You can get about a little more after 3 days.",
  },
  {
    time: "One week after surgery",
    description:
      "You may need to attend the clinic for your foot to be checked and re-dressed. You may start to do a little more within pain limits. Pain means you are doing too much.",
  },
  {
    time: "Two weeks after surgery",
    description:
      "Sutures will be removed if necessary. You will not need a bandage or crutches any longer and can get the foot wet. You will be asked to start wearing trainer-type shoes.",
  },
  {
    time: "Between two - six weeks after surgery",
    description:
      "The foot starts to return to normal. You can usually return to shoes at 6-8 weeks post-surgery. The foot will still be quite swollen especially at the end of the day. You may require a review appointment at 4-6 weeks. You may return to work but may need longer if you have an active job. You may return to driving if you can perform an emergency stop. You must check with your insurance company before driving again. Whilst normal activity will be resumed, sport should be avoided.",
  },
  {
    time: "Between six - twelve weeks after surgery",
    description:
      "The foot should continue to improve and begin to feel normal again. There will be less swelling. Sport can be considered after 3 months, depending on your recovery.",
  },
  {
    time: "Six months after surgery",
    description:
      "You will have a final review between 3- 6 months following surgery. The swelling should now be slight and you should be getting the full benefit of surgery.",
  },
  {
    time: "Twelve months after surgery",
    description:
      "The foot has stopped improving with all healing complete.",
  },
];

export function TailorsTimeline() {
  return (
    <div className={style.container}>
      <h2>Tailor's Bunion Osteotomy Timeline</h2>
      <Timeline timelineObj={timelineObj}></Timeline>
    </div>
  );
}
