import Head from "next/head";
import { BackgroundLines } from "../components/home/BackgroundLines";
import { Layout } from "../components/templates/Layout";
import style from "./Gallery.module.css";
import { fetchEntries } from "../lib/contentful";
import { BeforeAndAfterCard } from "../components/templates/BeforeAndAfterCard";
import { getPlaiceholder } from "plaiceholder";

export async function getStaticProps() {
  const { base64: blBase64, img: blImg } = await getPlaiceholder(
    "/images/abstract-lines.png"
  );
  const fetchedProducts = await fetchEntries({
    content_type: "beforeandafterimage",
  });
  const { base64: logoBase64, img: logoImg } = await getPlaiceholder(
    "/images/bunion-logo.png"
  );

  return {
    props: {
      blImage: {
        ...blImg,
        blurDataURL: blBase64,
      },
      images: fetchedProducts,
      logoImage: {
        ...logoImg,
        blurDataURL: logoBase64,
      },
    },
  };
}

export default function Gallery({ images, blImage, logoImage }) {
  return (
    <>
      <Head>
        <title>Pre and Post Surgery - Image Gallery | Bunion Surgeon</title>
        <meta
          name="description"
          content="Gallery of images documenting our patient's pre-surgery Bunion's and the results of the operation post-surgery."
        />
        <link rel="icon" href="/images/bunion-logo.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0,user-scalable=0"
        />
      </Head>
      <Layout logo={logoImage}>
        <div className={style.headerSec}>
          <BackgroundLines image={blImage} />
          <h1>Before and After Images</h1>
        </div>
        <div className={style.baaCont}>
          <BeforeAndAfterCard images={images} />
        </div>
      </Layout>
    </>
  );
}
