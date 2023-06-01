import Head from "next/head";
import { BackgroundLines } from "../components/home/BackgroundLines";
import { SurgeryFees } from "../components/fees/SurgeryFees";
import { Layout } from "../components/templates/Layout";
import style from "./Pricing.module.css";
import { useState } from "react";
import { Insurance } from "../components/fees/Insurance";
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

export default function Pricing({ blImage, logoImage }) {
  const [visible, setVisible] = useState();
  return (
    <>
      <Head>
        <title>Bunion Surgeon Fees and Insurance | Bunion Surgeon</title>
        <meta
          name="description"
          content="We believe in total transparency when it comes to the fees and costs involved in Bunion Surgery. Typically patients fund their care by self-paying or with ..."
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
          <h1>Pricing Information</h1>
          <p>
            Pricing of bunion surgery can vary depending on the severity of your
            bunion and your particular requirements. Here you will find typical
            fees.
          </p>
        </div>
        <div className={style.buttonCont}>
          <div>
            <button
              className={style.button}
              onClick={() => setVisible("insured")}
            >
              Select if Insured
            </button>
          </div>
          <div>
            <button
              className={style.button}
              onClick={() => setVisible("selfFunding")}
            >
              Select if Self-funding
            </button>
          </div>
        </div>
        <Insurance visible={visible} />
        <SurgeryFees visible={visible} />
      </Layout>
    </>
  );
}
