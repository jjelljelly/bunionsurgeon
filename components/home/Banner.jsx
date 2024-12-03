import { BannerBackground } from "./BannerBackground";
import style from "./Banner.module.css";
import Link from "next/link";

export function Banner({ image }) {
  return (
    <div className={style.bannerCont}>
      <div className={style.bannerText}>
        <h1>Mr Kaser Nazir</h1>
        <h2>The Bunion Surgeon</h2>
        <p>We specialise in state-of-the-art <Link href={"https://www.bunionsurgeon.co.uk/surgeries/minimally-invasive-keyhole-bunion-surgery"}
          target="_blank">
          <b>minimally invasive bunion surgery</b>
        </Link>
          to help you walk comfortably and confidently again. Our advanced techniques are designed to minimise pain, reduce recovery time, and achieve exceptional outcomes - all while focusing on your individual needs.</p>
        <p>Take the first step toward a pain-free life.</p>
        <p>Contact us today!</p>
        <Link href={"https://bookonline.bunionsurgeon.co.uk/"}
          target="_blank">
          <button>
            Book online
          </button>
        </Link>
      </div>
      <div className={style.image}>
        <BannerBackground image={image} />
      </div>
    </div>
  );
}
