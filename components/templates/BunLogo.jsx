import Image from "next/image";
import style from "./BunLogo.module.css";
import Link from "next/link";

export function BunLogo({ logo }) {
  const { src, blurDataURL } = logo;
  return (
    <Link href={"/"} className={style.logo}>
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
