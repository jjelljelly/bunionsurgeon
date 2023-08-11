import Image from "next/image";
import styles from "./Banner.module.css";

export function BannerBackground({ image }) {
  const { src, blurDataURL } = image;
  return (
    <Image
      src={src}
      fill
      alt="Image of Mr Kaser Nazir"
      className={styles.bannerImage}
      placeholder="blur"
      blurDataURL={blurDataURL}
      style={{ objectFit: "cover", objectPosition: "center" }}
      sizes="100%"
      priority={true}
    />
  );
}
