import Image from "next/image";
import styles from "./Layout.module.css";
import Link from "next/link";

export function BunLogo() {
  return (
    <div style={{ position: "relative", height: "120px", width: "120px" }}>
      <Link href={"/"}>
        <Image
          src="/images/bunion-logo.png"
          style={{ objectFit: "contain" }}
          alt="Bunion surgeon logo"
          className={styles.bunionLogo}
          fill
        />
      </Link>
    </div>
  );
}
