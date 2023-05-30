import Image from "next/image";
import styles from "./Layout.module.css";
import Link from "next/link";

export function BunLogo() {
  return (
    <Link
      href={"/"}
      style={{ position: "relative", height: "110px", width: "180px" }}
    >
      <Image
        src="/images/bunion-logo.png"
        style={{ objectFit: "contain", objectPosition: "bottom" }}
        alt="Bunion surgeon logo"
        className={styles.bunionLogo}
        fill
        sizes="100%"
      />
    </Link>
  );
}
