import style from "./BunionInfo.module.css";
import Image from "next/image";

export function BunionInfo({ surgeryImage }) {
  const { src, blurDataURL } = surgeryImage;
  return (
    <div className={style.bunionCont}>
      <div className={style.image}>
        <Image
          src={src}
          fill
          alt="Image of Mr Kaser Nazir"
          placeholder="blur"
          blurDataURL={blurDataURL}
          style={{
            objectFit: "cover",
            objectPosition: "top",
          }}
          sizes="100%"
          priority={true}
        />
      </div>
      <div className={style.bunionInfo}>
        <h2>What is a Bunion?</h2>
        <div className={style.text}>
          <p>
            A bunion is a bony deformity that forms on the side of your foot
            below the big toe joint, they are also known as Hallux Valgus
            deformity.
          </p>
          <p>
            When a bunion develops the big toe will typically start to point
            towards the other toes on the same foot, which may then result in
            the metatarsal bone attached to point outwards.
          </p>
        </div>
      </div>
    </div>
  );
}
