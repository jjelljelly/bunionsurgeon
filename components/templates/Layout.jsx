import Link from "next/link";
import { Navigation } from "./Navigation";
import { BunLogo } from "./BunLogo";
import { Footer } from "./Footer";
import Image from "next/image";
import styles from "./Layout.module.css";

export function Layout({ children }) {
  return (
    <>
      <header className={styles.navCont}>
        <BunLogo />
        <Navigation />
      </header>
      {children}
      <Footer />
    </>
  );
}
