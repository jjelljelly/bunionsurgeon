import { Navigation } from "./Navigation";
import { BunLogo } from "./BunLogo";
import { Footer } from "./Footer";
import styles from "./Layout.module.css";
import { NavigationMobile } from "./NavigationMobile";

export function Layout({ children, logo }) {
  return (
    <div>
      <header className={styles.navCont}>
        <BunLogo logo={logo} />
        <Navigation />
        <NavigationMobile />
      </header>
      {children}
      <Footer />
    </div>
  );
}
