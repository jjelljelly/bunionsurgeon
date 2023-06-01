import Head from "next/head";
import { Layout } from "../components/templates/Layout";
import style from "./surgery.module.css";
import { BackgroundLines } from "../components/home/BackgroundLines";
import Link from "next/link";
import { BunionInfo } from "../components/surgery/BunionInfo";
import { FrequentQuestions } from "../components/surgery/FrequentQuestions";
import { getPlaiceholder } from "plaiceholder";

export async function getStaticProps() {
  const { base64: blBase64, img: blImg } = await getPlaiceholder(
    "/images/abstract-lines.png"
  );
  const { base64: logoBase64, img: logoImg } = await getPlaiceholder(
    "/images/bunion-logo.png"
  );

  return {
    props: {
      blImage: {
        ...blImg,
        blurDataURL: blBase64,
      },
      logoImage: {
        ...logoImg,
        blurDataURL: logoBase64,
      },
    },
  };
}

export default function Surgery({ blImage, logoImage }) {
  return (
    <>
      <Head>
        <title>What is a Bunion? | Bunion Surgeon</title>
        <meta
          name="description"
          content="Key information on how to recognise a bunion, the ranges of bunion surgery and when it is time to have bunion surgery."
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
          <h1>Bunion Surgery</h1>
          <p>
            Although there are many types of bunion surgery, The Bunion Surgeon
            offers the most effective surgery to correct a bunion.
          </p>
          <p>
            The first step is to arrange a consultation and X-rays with our
            bunion specialist, Mr Kaser Nazir.
          </p>
        </div>
        <BunionInfo />
        <div className={style.surgeryCont}>
          <h2>Types of Bunion Surgery</h2>
          <div className={style.surgeryType}>
            <Link href={"/surgeries/minimally-invasive"} className={style.link}>
              <button className={style.surgery}>
                <h2>Minimally invasive bunion surgery</h2>
              </button>
            </Link>
            <Link href={"/surgeries/scarf-akin"} className={style.link}>
              <button className={style.surgery}>
                <h2>Scarf and akin osteotomy</h2>
              </button>
            </Link>
            <Link href={"/surgeries/lapidus"} className={style.link}>
              <button className={style.surgery}>
                <h2>Lapidus procedure</h2>
              </button>
            </Link>
          </div>
        </div>
        <FrequentQuestions />
      </Layout>
    </>
  );
}
