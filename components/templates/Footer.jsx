import { Divider } from "./Divider";
import style from "./Footer.module.css";
import { Instagram } from "./FooterIcons/Instagram";
import { Twitter } from "./FooterIcons/Twitter";
import { Youtube } from "./FooterIcons/Youtube";
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div>
        <div className={style.footContainer}>
          <p className={style.footText}>+44 207 820 8007</p>
          <Divider />
          <p className={style.footText}>17 Harley Street, London, W1G 9QH</p>
          <Divider />
          <p className={style.footText}>admin@bunionsurgeon.co.uk</p>
        </div>
        <div className={style.iconContainer}>
          <Link legacyBehavior href={"https://www.youtube.com/@BunionSurgeon"}>
            <a target="_blank">
              <Youtube />
            </a>
          </Link>

          <Link
            legacyBehavior
            href={"https://www.instagram.com/bunionsurgeon/?hl=en"}
          >
            <a target="_blank">
              <Instagram />
            </a>
          </Link>
        </div>
        <div className={style.finalCont}>
          <p>© Copyright Bunionsurgeon</p>
          <Link href={"/privacy"}>
            <p className={style.privacy}>Privacy policy</p>
          </Link>
        </div>
      </div>
    </footer>
  );
}
