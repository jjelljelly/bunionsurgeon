import Image from "next/image";

export function MinimallyImage({ minimallyImage }) {
  const { src, blurDataURL } = minimallyImage;
  return (
    <>
      <Image
        src={src}
        fill
        alt="Image of Mr Kaser Nazir with C-arm X-ray machine"
        placeholder="blur"
        blurDataURL={blurDataURL}
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        sizes="100%"
      />
    </>
  );
}
