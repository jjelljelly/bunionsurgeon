import Image from "next/image";
import styles from "./Banner.module.css";

export function BannerBackground() {
  return (
    <Image
      src="/images/homepage-idea.jpg"
      fill
      objectFit="cover"
      objectPosition="top"
      alt="Image of Mr Kaser Nazir"
      className={styles.bannerImage}
      // placeholder="blur"
    />
  );
}
