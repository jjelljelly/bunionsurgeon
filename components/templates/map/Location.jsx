import {
  useEffect,
  useState,
  useRef,
  Children,
  isValidElement,
  cloneElement,
} from "react";

import style from "./Location.module.css";

export function Location({ children, ...options }) {
  const ref = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
    if (map && window.google.maps) {
      map.setOptions(options);
      map.mapTypes.set("styled_map", options.styles);
    }
  }, [ref, map]);

  return (
    <div className={style.locationCont}>
      <h2>How to find us</h2>
      <div className={style.infoCont}>
        <div className={style.address}>
          <p className={style.locationIntro}>
            The Bunion Surgeon is based on the historic Harley Street in central
            London for outpatient appointments:
          </p>
          <div>
            <p className={style.addressText}>17 Harley Street</p>
            <p className={style.addressText}>London</p>
            <p className={style.addressText}>W1G 9QH</p>
            <br></br>
            <p>
              The clinic is equidistant from Oxford Circus Station and Bond
              Street Station.
            </p>
          </div>
          <p>
            All surgeries are arranged around the corner at Harley Street
            Specialist Hospital or The Weymouth Street Hospital.
          </p>
        </div>
        <div className={style.mapCont}>
          <div className={style.map} ref={ref} />
        </div>
      </div>
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          return cloneElement(child, { map });
        }
      })}
    </div>
  );
}
