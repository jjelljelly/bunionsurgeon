import { Navigation } from "./Navigation";
import { BunLogo } from "./BunLogo";
import { Footer } from "./Footer";
import styles from "./Layout.module.css";
import { NavigationMobile } from "./NavigationMobile";
import Link from "next/link";

export function Layout({ children, logo }) {
  return (
    <div>
      <header className={styles.navCont}>
        <BunLogo logo={logo} />
        <Link href={"https://bookonline.bunionsurgeon.co.uk/"}
          target="_blank">
          <button className={styles.book}>
            Book online
          </button>
        </Link>
        <Navigation />
        <NavigationMobile />
      </header>
      {children}
      <Footer />
    </div>
  );
}
