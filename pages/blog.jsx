import Head from "next/head";
import style from "./Blogs.module.css";
import { Layout } from "../components/templates/Layout";
import { BackgroundLines } from "../components/home/BackgroundLines";
import { getPlaiceholder } from "plaiceholder";
import { fetchEntries } from "../lib/contentful";
import { Blog } from "../components/templates/blog";

export async function getStaticProps() {
  const { base64: blBase64, img: blImg } = await getPlaiceholder(
    "/images/abstract-lines.png"
  );
  const fetchedProducts = await fetchEntries({
    content_type: "bunionSurgeonBlogs",
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
      blogs: fetchedProducts,
      logoImage: {
        ...logoImg,
        blurDataURL: logoBase64,
      },
    },
  };
}

export default function Blogs({ logoImage, blImage, blogs }) {
  console.log(blogs);
  return (
    <>
      <Head />
      <Layout logo={logoImage}>
        <div className={style.headerSec}>
          <BackgroundLines image={blImage} />
          <h1>The Bunion Surgeon Blogs</h1>
        </div>
        <Blog blogs={blogs} />
      </Layout>
    </>
  );
}
