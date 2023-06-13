import Link from "next/link";
import { Navigation } from "./Navigation";
import { BunLogo } from "./BunLogo";
import { Footer } from "./Footer";
import Image from "next/image";
import styles from "./Layout.module.css";
import { NavigationMobile } from "./NavigationMobile";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function Layout({ children, logo }) {
  const router = useRouter();
  useEffect(() => {
    router.push(router.pathname + "#top");
  }, []);
  return (
    <div id="top">
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
