import { Divider } from "./Divider";
import style from "./Footer.module.css";
import { Instagram } from "./FooterIcons/Instagram";
import { Youtube } from "./FooterIcons/Youtube";
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div>
        <div className={style.footContainer}>
          <Link href="tel:+442074594326">
            <p className={style.footText}>+44207 459 4326</p>
          </Link>
          <Divider />
          <Link href="https://goo.gl/maps/wc9BqFWdm2FXC4jZA" target="_blank">
            <p className={style.footText}>17 Harley Street, London, W1G 9QH</p>
          </Link>
          <Divider />
          <Link href="mailto:admin@bunionsurgeon.co.uk">
            <p className={style.footText}>admin@bunionsurgeon.co.uk</p>
          </Link>
          <Divider />
          <Link href={"https://bookonline.bunionsurgeon.co.uk/"}
            target="_blank" >
            <p className={style.footText}>Book online</p>
          </Link>
        </div>
        <div className={style.iconContainer}>
          <Link
            legacyBehavior
            href={"https://www.youtube.com/@TheBunionSurgeon"}
          >
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
