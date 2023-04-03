import { BackgroundLines } from "./BackgroundLines";
import { HappyFeet } from "./HappyFeet";
import styling from "./BulletpointSurgery.module.css";
import Link from "next/link";

export function BulletpointSurgery() {
  return (
    <div className={styling.bulletpointCont}>
      <div className={styling.happyfeetCont}>
        <HappyFeet />
      </div>
      <div className={styling.bulletpointTextCont}>
        <div className={styling.bulletpoints}>
          <h2 className={styling.header}>
            Benefits of Minimally Invasive Bunion Surgery
          </h2>
          <ul className={styling.bullet}>
            <li> Reduced swelling following surgery</li>
            <li> Decreased postoperative pain</li>
            <li> Faster return to closed footwear and normal activities</li>
            <li> Smaller incision resulting in less visible scar</li>
            <li> Reduced chance of joint stiffness</li>
          </ul>
        </div>
        <div className={styling.moreInfo}>
          <BackgroundLines />
          <div className={styling.buttonCont}>
            <button>
              <Link href={"/surgeries/minimally-invasive"}>Find out more</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
