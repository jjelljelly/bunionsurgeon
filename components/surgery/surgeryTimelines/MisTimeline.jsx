import { Timeline } from "../../templates/Timeline";
import style from "./SurgeryTimeline.module.css";

const timelineObj = [
  {
    time: "First five days",
    description:
      "This is the worst time for pain but you will be given painkillers to help. You must rest completely for 2-4 days. You will be able to walk immediately for 10 minutes an hour but should elevate most of the time to promote healing.",
  },
  {
    time: "Between five - fourteen days",
    description:
      "You will have a one week review with Mr Nazir in person or over the phone. Activities can be increased to 15 minutes an hour in a post-operative shoe.",
  },
  {
    time: "Two weeks after surgery",
    description:
      "We will arrange a second review where sutures will be removed. Return to trainers if swelling has subsided enough. You can mobilise for 20 minutes an hour.",
  },
  {
    time: "Between four - six weeks after surgery",
    description:
      "You can now walk up to 30 minutes an hour and use static weights or an exercise bike.",
  },
  {
    time: "Between six - eight weeks after surgery",
    description:
      "Full return to normal activities and use of a range of shoes.",
  },
  {
    time: "Between twelve and sixteen weeks after surgery",
    description: "In most cases, swelling will have completely subsided.",
  },
];

export function MisTimeline() {
  return (
    <div className={style.container}>
      <h2>Minimally invasive surgery timeline</h2>
      <Timeline timelineObj={timelineObj}></Timeline>
    </div>
  );
}
