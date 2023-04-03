import Image from "next/image";
import style from "./BulletpointSurgery.module.css";

export function HappyFeet() {
  return (
    <>
      <div className={style.picOverlay}></div>
      <Image
        // src="/images/happy-feet.jpg"
        src="/images/bunion-surgeon-homepage-test.jpeg"
        fill
        objectFit="cover"
        objectPosition="top"
        alt="Image of one foot with bunion and one without"
        className={style.happyFeet}
      />
    </>
  );
}
