import Image from "next/image";
import style from "./BackgroundLines.module.css";

export function BackgroundLines() {
  return (
    <>
      <Image
        src="/images/abstract-lines.png"
        fill
        objectFit="cover"
        objectPosition="center"
        alt="Abstract background lines"
        className={style.backgroundLines}
      />
    </>
  );
}
