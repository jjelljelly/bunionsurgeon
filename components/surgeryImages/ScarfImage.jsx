import Image from "next/image";

export function ScarfImage({ scarfImage }) {
  const { src, blurDataURL } = scarfImage;
  return (
    <>
      <div></div>
      <Image
        src={src}
        fill
        placeholder="blur"
        blurDataURL={blurDataURL}
        style={{ objectFit: "cover", objectPosition: "top" }}
        sizes="100%"
        alt="Image of Mr Kaser Nazir carrying of bunion surgery"
      />
    </>
  );
}
