import Image from "next/image";

export function AboutImage({ aboutImage }) {
  const { src, blurDataURL } = aboutImage;
  return (
    <>
      <Image
        src={src}
        fill
        placeholder="blur"
        blurDataURL={blurDataURL}
        alt="Profile picture of Mr Kaser Nazir"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        sizes="100%"
      />
    </>
  );
}
