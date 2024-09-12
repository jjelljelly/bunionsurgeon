import style from "./KnOverview.module.css";
import { BackgroundLines } from "./BackgroundLines";
import Link from "next/link";

export function KnOverview({ image }) {
  return (
    <div className={style.overviewCont}>
      <BackgroundLines image={image} />
      <div className={style.contentCont}>
        <h2 className={style.header}>About The Bunion Surgeon</h2>
        <h3 className={style.overviewInfo}>
          Mr Kaser Nazir has over 21 years experience in bunion correction.
          <br /> Tailoring each surgery to his patients individual need.
          <br />
          <br />
          With an excellent patient satisfaction response, alongside
          recommendations from peers.
          <br />
          <br />
          The result is both functionally and cosmetically beautiful.
        </h3>
        <div>
          <Link href={"/about"}>
            <button className={style.actions}>Find out more</button>
          </Link>
          <Link href={"https://bookonline.bunionsurgeon.co.uk/"}
            target="_blank">
            <button className={style.actions}>
              Book online
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
