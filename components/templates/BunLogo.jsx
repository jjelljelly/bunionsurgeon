import Image from "next/image";
import styles from "./Layout.module.css";
import Link from "next/link";

export function BunLogo({ logo }) {
  const { src, blurDataURL } = logo;
  return (
    <Link
      href={"/"}
      style={{ position: "relative", height: "110px", width: "180px" }}
    >
      <Image
        src={src}
        blurDataURL={blurDataURL}
        style={{ objectFit: "contain", objectPosition: "bottom" }}
        alt="Bunion surgeon logo"
        fill
        sizes="100%"
      />
    </Link>
  );
}
