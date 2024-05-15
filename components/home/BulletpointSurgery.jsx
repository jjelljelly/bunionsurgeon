import { BackgroundLines } from "./BackgroundLines";
import { HappyFeet } from "./HappyFeet";
import styling from "./BulletpointSurgery.module.css";
import Link from "next/link";
import { Video } from "./Video";

export function BulletpointSurgery({ images, image }) {
  return (
    <div className={styling.bulletpointCont}>
      <div className={styling.happyfeetCont}>
        <div className={styling.happyfeetVideo}>
          <Video />
        </div>
        <div className={styling.happyfeetText}>
          <p>Mr Kaser Nazir carries out bunion correction, as seen on Really TV</p>
        </div>
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
          <BackgroundLines image={image} />
          <div className={styling.buttonCont}>
            <button>
              <Link href={"/surgeries/minimally-invasive-bunion-surgery"}>
                Find out more
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
