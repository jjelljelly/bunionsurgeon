import style from "./NazirTimeline.module.css";
import { useState, useEffect } from "react";

const timelineObj = [
  {
    date: "2021 - Present",
    qualification: "Elected Dean of Faculty of Podiatric Surgery, UK",
    key: "qual1",
  },
  {
    date: "2017",
    qualification: "Elected Dean of Faculty of Podiatric Surgery, UK",
    key: "qual2",
  },
  {
    date: "2013 - Present",
    qualification:
      "Clinical Director and Consultant Podiatric Surgeon at London Foot and Ankle Surgery",
    key: "qual3",
  },
  {
    date: "2010 - Present",
    qualification:
      "Consultant Podiaitrc Surgeon appointment at Guy's and St Thomas' NHS Foundation Trust",
    key: "qual4",
  },
  {
    date: "2010",
    qualification: "CCPST completion in Podiatric Surgery",
    key: "qual5",
  },
  {
    date: "2007",
    qualification: "FRCPodS Fellowship in Podiatric Surgery",
    key: "qual6",
  },
  {
    date: "2005",
    qualification:
      "Externship at St Francis Hospital Connecticut USA, Harvard - Cambridge Alliance Healthcare",
    key: "qual7",
  },
  {
    date: "2001",
    qualification:
      "BSc(HONS) Podiatric Medicine, University College London - London Foot Hospital UCL Medical School",
    key: "qual8",
  },
];

export function NazirTimeline() {
  const [timeline, setTimeline] = useState(0);
  const [limit, setLimit] = useState();

  useEffect(() => {
    setLimit(window.screen.width < 700 ? 1 : 3);
  }, []);

  return (
    <div className={style.timelineCont}>
      <h2 className={style.header}>Clinical Qualifications and Posts</h2>
      <div className={style.arrowCont}>
        <button
          onClick={() => setTimeline(timeline - 1)}
          className={timeline === 0 ? style.button : style.buttonVis}
          disabled={timeline === 0}
        >
          &#8592;
        </button>
        <hr className={style.line}></hr>
        <button
          onClick={() => setTimeline(timeline + 1)}
          className={
            timeline === timelineObj.length - limit
              ? style.button
              : style.buttonVis
          }
          disabled={timeline === timelineObj.length - limit}
        >
          &#8594;
        </button>
      </div>
      <div className={style.timelineWrap}>
        {timelineObj
          .filter((item, i) => i >= timeline && i < timeline + limit)
          .map((item, j) => {
            return (
              <div key={item.key} className={style.itemContainer}>
                <hr className={style.timeLine}></hr>
                <div className={style.timelineValues}>
                  <h3 className={style.date}>{item.date}</h3>
                  <p className={style.qualification}>{item.qualification}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
