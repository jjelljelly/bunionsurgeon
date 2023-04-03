import { BannerBackground } from "./BannerBackground";
import style from "./Banner.module.css";

export function Banner() {
  return (
    <div className={style.bannerCont}>
      <div className={style.bannerText}>
        <h1>
          Mr Kaser Nazir <br /> The Bunion Surgeon
        </h1>
        <h3 className={style.bannerQuote}>
          Sculpting feet to perfection through <br />
          minimally invasive bunion surgery techniques
        </h3>
      </div>
      <BannerBackground />
    </div>
  );
}
