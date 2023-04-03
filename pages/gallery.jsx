import Head from "next/head";
import { BackgroundLines } from "../components/home/BackgroundLines";
import { Layout } from "../components/templates/Layout";
import style from "./Gallery.module.css";
import { fetchEntries } from "../lib/contentful";
import { BeforeAndAfterCard } from "../components/templates/BeforeAndAfterCard";

export default function Gallery({ images }) {
  return (
    <>
      <Head />
      <Layout>
        <div className={style.headerSec}>
          <BackgroundLines />
          <h1>Before and After Images</h1>
        </div>
        <div className={style.baaCont}>
          <BeforeAndAfterCard images={images} />
        </div>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  //fetch posts from contentful
  const fetchedProducts = await fetchEntries({
    content_type: "beforeandafterimage",
  });

  // const Beforeandafterimage = await getProductsWithPlaceholders(
  //   fetchedProducts
  // );
  return {
    props: { images: fetchedProducts },
  };
}
