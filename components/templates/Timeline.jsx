import style from "./Timeline.module.css";
import { useState, useEffect } from "react";

export function Timeline({ children, timelineObj }) {
  const [timeline, setTimeline] = useState(0);
  const [limit, setLimit] = useState();

  useEffect(() => {
    setLimit(window.screen.width < 700 ? 1 : 3);
  }, []);

  return (
    <div className={style.timelineCont}>
      {/* <h2 className={style.header}>Clinical Qualifications and Posts</h2> */}
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
                  <h3 className={style.time}>{item.time}</h3>
                  <p className={style.description}>{item.description}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
