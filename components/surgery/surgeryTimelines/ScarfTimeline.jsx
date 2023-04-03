import { Timeline } from "../../templates/Timeline";
import { useState, useEffect } from "react";
import style from "./SurgeryTimeline.module.css";

const timelineObj = [
  {
    time: "First two - four days",
    description:
      "This is the worst time for pain but you will be given painkillers to help. You must rest completely for two - four days. You will be able to stand and take weight carefully using crutches, but should rest with your feet up as much as possible. At three days you will be able to move around a little more.",
  },
  {
    time: "One week after surgery",
    description:
      "You will have a one week review with Mr Nazir in person or over the phone. You will be able to start doing a little more within pain limits, pain means you are doing too much.",
  },
  {
    time: "Two weeks after surgery",
    description:
      "We will arrange a second review where sutures will be removed, you will no longer require a bandage. Return to trainers if swelling has subsided enough. You may return to work at two weeks, if you have an active job you may require longer.",
  },
  {
    time: "Between two - six weeks after surgery",
    description:
      "The foot starts to return to normal but will remain quite swollen, particuarly towards the end of the day. You may return to driving if you can perform an emergency stop, it's important to check in with your insurance. You can return to most normal activites, except high impact activities. ",
  },
  {
    time: "Between six - twelve weeks after surgery",
    description:
      "You will have a further X-ray and review with Mr Nazir between six - eight weeks following surgery. The foot should continue to improve and begin to feel normal again. There will be less swelling. Sport can be considered from three months postoperative.",
  },
  {
    time: "Six months after surgery",
    description:
      "The swelling should now be slight and you should be getting the full benefit of surgery.",
  },
];

export function ScarfTimeline() {
  return (
    <div className={style.container}>
      <h2>Scarf and Akin Timeline</h2>
      <Timeline timelineObj={timelineObj}></Timeline>
    </div>
  );
}
