import Link from "next/link";
import { Navigation } from "./Navigation";
import { BunLogo } from "./BunLogo";
import { Footer } from "./Footer";
import styles from "./Layout.module.css";
import { NavigationMobile } from "./NavigationMobile";
import Cookies from "../../pages/cookies";

export function Layout({ children, logo }) {
  return (
    <div id="top">
      <header className={styles.navCont}>
        <BunLogo logo={logo} />
        <Navigation />
        <NavigationMobile />
      </header>
      {children}
      <Cookies />
      <Footer />
    </div>
  );
}
