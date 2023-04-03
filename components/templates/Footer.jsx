import { Divider } from "./Divider";
import style from "./Footer.module.css";
import { Twitter } from "./FooterIcons/Twitter";
import { Youtube } from "./FooterIcons/Youtube";

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
          <Youtube />
          <Twitter />
        </div>
        <div className={style.footContainer}>
          <p>© Copyright Bunionsurgeon</p>
        </div>
      </div>
    </footer>
  );
}
