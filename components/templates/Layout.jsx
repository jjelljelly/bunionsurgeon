import Link from "next/link";
import { Navigation } from "./Navigation";
import { BunLogo } from "./BunLogo";
import { Footer } from "./Footer";
import Image from "next/image";
import styles from "./Layout.module.css";

export function Layout({ children, logo }) {
  return (
    <>
      <header className={styles.navCont}>
        <BunLogo logo={logo} />
        <Navigation />
      </header>
      {children}
      <Footer />
    </>
  );
}
