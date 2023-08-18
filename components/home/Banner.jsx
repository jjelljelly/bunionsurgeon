import { BannerBackground } from "./BannerBackground";
import style from "./Banner.module.css";

export function Banner({ image }) {
  return (
    <div className={style.bannerCont}>
      <div className={style.bannerText}>
        <h1>Mr Kaser Nazir</h1>
        <h2>The Bunion Surgeon</h2>
        <h3 className={style.bannerQuote}>
          Sculpting feet to perfection through <br />
          minimally invasive bunion surgery techniques
        </h3>
      </div>
      <div className={style.image}>
        <BannerBackground image={image} />
      </div>
    </div>
  );
}
