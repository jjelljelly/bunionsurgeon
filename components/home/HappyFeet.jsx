import Image from "next/image";
import style from "./BulletpointSurgery.module.css";

export function HappyFeet({ images }) {
  const { src, blurDataURL } = images;
  return (
    <>
      <div className={style.picOverlay}></div>
      <Image
        src="/images/bunion-surgeon-homepage-test.jpeg"
        fill
        // objectFit="cover"
        // objectPosition="top"
        alt="Image of Mr Kaser Nazir holding foot with bunion"
        className={style.happyFeet}
        style={{ objectFit: "cover", objectPosition: "top" }}
        sizes="100%"
      />
    </>
  );
}
