import style from "./TelephoneSvg.module.css";
import { Waypoint } from "react-waypoint";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

export function TelephoneSvg() {
  const [isInView, setIsInView] = useState(false);
  return (
    <>
      <Waypoint onEnter={() => setIsInView(true)}>
        {isInView && (
          <svg
            x="0px"
            y="0px"
            viewBox="0 0 1190.6 591.9"
            // width="100%"
            // className={style.telephone}
            // style={{ enableBackground: "new 0 0 1190.6 841.9;" }}
          >
            <g>
              <rect
                x="0"
                y="0"
                className={style.background}
                width="1190.6"
                height="841.9"
              />
            </g>
            <g id="line_art">
              <g>
                <path
                  className={style.telephone}
                  style={{
                    stroke: "#191924",
                    strokeWidth: 1,
                    strokeLinecap: "butt",
                    strokeLinejoin: "miter",
                    strokeMiterlimit: 10,
                    strokeOpacity: 1,
                  }}
                  d="M467.5,525.8c-38.9,0-64.6-39.5-80-63.1l-1.4-2.2c-0.6-0.9-1.5-2.2-2.5-3.6l-1.9,1.4c-0.7,0.5-1.7,0.5-2.4,0
			l-11.3-8.2c-11.4,4.8-24.5,7-39,5.4c-17.3-1.9-34.7-12-50.3-29.1c-11.7-12.8-18.1-24.9-18.4-25.4c-0.5-0.9-0.2-2,0.7-2.6
			c0.9-0.6,2-0.4,2.7,0.4c0.1,0.2,13.8,17.4,35.7,28.5c27.5,13.9,55,12.5,81.8-4.3c-4.9-0.6-12.4-2-21-5.5
			c-13.9-5.6-33.5-17.8-48-43.9c-0.3-0.5-0.3-1.1-0.2-1.6l3.5-11c0.2-0.7,0.8-1.2,1.5-1.4c0.7-0.1,1.5,0.1,1.9,0.7
			c0.4,0.5,44.8,52.9,81.7,45.9c0.7-0.1,1.4,0.1,1.8,0.6c0.5,0.5,0.6,1.2,0.5,1.9c-0.1,0.5-3.5,11.9-21.5,27.1l0.8,1.5
			c11.9-8.9,20.8-21,25.9-33.4c2.1-5.1,1.7-10.6-1-16.4c-8.8-18.8-40.7-37.3-60.3-43.5c-22-6.9-34.7,6.9-35.9,8.4l-9.1,15.1
			c-0.4,0.7-1.2,1.1-2,0.9c-0.8-0.1-1.4-0.7-1.6-1.5c-24-94.6-90.6-183.1-91.2-184c-0.5-0.6-0.5-1.4-0.2-2.1c0.3-0.7,1-1.1,1.8-1.1
			c7.1,0,15.7-2.8,20.3-4.6c-16.2-12.2-26.8-30.7-30.7-53.5c-3.1-18.2-0.9-32.7-0.8-33.3c0.1-0.6,0.4-1,0.9-1.4l13.7-9.2
			c0.6-0.4,1.5-0.4,2.1-0.1c0.7,0.4,1,1.1,1,1.9c-3,45.1,13.5,75.2,31.1,85.1c8.1,4.5,16,4.6,22.2,0.2c11.4-8.1,11.5-24.7,9.7-37.2
			c-2.2-15-8.9-33.3-17.9-48.7c-15.3-26.4-40.7-14.2-43-13l-41.1,30.4c-0.1,0-0.1,0.1-0.2,0.1c-0.2,0.1-20,13.1-9.7,85
			c10.5,73.5,89,204,89.8,205.3c0.4,0.6,0.4,1.4,0,2c-0.4,0.6-1,1-1.7,1H30c-1.1,0-2-0.9-2-2s0.9-2,2-2h220.8
			c-11.9-20.2-78.8-135.8-88.5-203.8c-10.4-73.1,9.6-87.7,11.5-88.9l41.1-30.5c0.1-0.1,0.2-0.1,0.3-0.2c10.6-5.6,34.4-9.7,48.5,14.5
			c9.3,16.1,16,34.4,18.4,50.1c2.9,19.5-1,33.7-11.3,41c-7.4,5.3-17.1,5.3-26.5,0.1c-10-5.6-18.9-16.5-24.9-30.8
			c-6.4-15.3-9.4-33.9-8.5-54l-9.7,6.4c-0.9,7.2-5.5,58.1,32.8,84.2c0.6,0.4,0.9,1.1,0.9,1.8c-0.1,0.7-0.5,1.4-1.2,1.6
			c-0.5,0.2-11.3,5-21.4,6.1c11.6,16,66,93.9,88.5,177.8l6.7-11.2c0-0.1,0.1-0.2,0.2-0.2c0.1-0.2,14.9-17.7,40.3-9.8
			c19.5,6.1,53,24.8,62.8,45.6c3.2,6.9,3.6,13.5,1.1,19.7c-5.4,13.2-14.9,26-27.7,35.4l5.2,9.5c0.5,0.9,0.2,2-0.6,2.6l-2.1,1.6
			c1.1,1.5,2,2.8,2.6,3.7l1.4,2.2c14.9,22.9,40,61.3,76.7,61.3c35,0,46.6-25.5,57.9-50.2c5-10.9,9.7-21.2,16.3-29.6
			c21.8-27.7,54.6-56,132.8-56H1178c1.1,0,2,0.9,2,2s-0.9,2-2,2H674.5c-76.4,0-108.4,27.6-129.6,54.5c-6.3,8-10.9,18.1-15.8,28.8
			C517.2,499.1,505,525.8,467.5,525.8z M372.2,448.3l8.3,6l0.7-0.5c-1.8-2.4-3.8-5.1-5.5-7.3C374.5,447.1,373.3,447.7,372.2,448.3z
			 M275.2,416.2c11.2,14.3,30.1,32.8,54.2,35.4c12.8,1.4,24.4-0.3,34.7-4.2l-2.8-2c-0.6-0.4-0.9-1.1-0.8-1.9
			c0.1-0.7,0.6-1.3,1.2-1.6l10.3-4.2c0.8-0.3,1.8-0.1,2.3,0.6c0.1,0.2,1,1.3,2.2,2.9c0.8-0.5,1.6-1,2.4-1.5l-1.8-3.4
			c-0.5-0.8-0.3-1.9,0.5-2.5c12.5-10.3,18-18.8,20.2-23.1c-15.8,1.5-34-5.7-54.3-21.5c-11.8-9.2-21.1-19-25.3-23.6l-2.2,6.8
			c26.8,47.3,70.7,47.1,71.1,47.1c0.9,0,1.7,0.5,1.9,1.4c0.3,0.8,0,1.8-0.8,2.3c-37.1,25.8-69.9,18.5-91,7.8
			C288.6,426.5,281.1,421.1,275.2,416.2z M379.1,444.5c1.7,2.2,3.5,4.6,5.3,7l0.7-0.5l-4.2-7.6C380.4,443.7,379.7,444.1,379.1,444.5
			z M366.6,444.3l1.8,1.3c1.6-0.7,3.2-1.5,4.7-2.3c-0.4-0.5-0.7-0.9-1-1.3L366.6,444.3z"
                />
              </g>
            </g>
          </svg>
        )}
      </Waypoint>
    </>
  );
}
