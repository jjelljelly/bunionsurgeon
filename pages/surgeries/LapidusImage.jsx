import Image from "next/image";

export function LapidusImage({ lapidusImage }) {
  const { src, blurDataURL } = lapidusImage;
  return (
    <>
      <Image
        src={src}
        fill
        blurDataURL={blurDataURL}
        placeholder="blur"
        style={{ objectFit: "cover", objectPosition: "top" }}
        sizes="100%"
      />
    </>
  );
}
