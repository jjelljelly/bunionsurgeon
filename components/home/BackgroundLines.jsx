import Image from "next/image";
import style from "./BackgroundLines.module.css";

export function BackgroundLines({ image }) {
  const { src, blurDataURL } = image;
  return (
    <>
      <Image
        src={src}
        blurDataURL={blurDataURL}
        fill
        alt="Abstract background lines"
        className={style.backgroundLines}
        style={{ objectFit: "cover", objectPosition: "center" }}
        sizes="100%"
        priority={true}
      />
    </>
  );
}
