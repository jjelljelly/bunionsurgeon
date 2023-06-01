import Head from "next/head";
import { BackgroundLines } from "../../components/home/BackgroundLines";
import { LapidusTimeline } from "../../components/surgery/surgeryTimelines/LapidusTimeline";
import { Layout } from "../../components/templates/Layout";
import { Modal } from "../../components/templates/Modal";
import style from "./Lapidus.module.css";
import Image from "next/image";
import { useState } from "react";
import { getPlaiceholder } from "plaiceholder";

const lapidusSteps = [
  {
    title: "Step one",
    text: "An incision is made inside the foot arch.",
    image1: {
      src: "/images/step1-lapidus.png",
      alt: "Lapidus procedure step 1",
    },
    image2: {
      src: "/images/step1-lapidus.png",
      alt: "Lapidus procedure step 1",
    },
  },
  {
    title: "Step two",
    text: "The joint is cut out in the midfoot and the metatarsal straightened.",
    image1: {
      src: "/images/step2-lapidus.png",
      alt: "Lapidus procedure step 2",
    },
    image2: {
      src: "/images/step2-lapidus.png",
      alt: "Lapidus procedure step 2",
    },
  },
  {
    title: "Step three",
    text: "Plate and screws used to aid fusion of midfoot.",
    image1: {
      src: "/images/step3-scarf.png",
      alt: "Lapidus procedure step 3",
    },
    image2: {
      src: "/images/step3-scarf.png",
      alt: "Lapidus procedure step 3",
    },
  },
  {
    title: "Step four",
    text: "A small wedge is removed from the phalanx to straighten the end of the toe.",
    image1: {
      src: "/images/step4-scarf.png",
      alt: "Lapidus procedure step 4",
    },
    image2: {
      src: "/images/step4-scarf-text.png",
      alt: "Lapidus procedure step 4",
    },
  },
  {
    title: "Step five",
    text: "The phalanx is fixed together where the wedge has been removed, promoting a correct alignment of the toe.",
    image1: {
      src: "/images/step5-scarf.png",
      alt: "Lapidus procedure step 5",
    },
    image2: {
      src: "/images/step5-scarf-text.png",
      alt: "Lapidus procedure step 5",
    },
  },
];

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

export default function lapidus({ blImage, logoImage }) {
  const [item, setItem] = useState(false);
  const [idx, setIdx] = useState();
  return (
    <>
      <Head>
        <title>Lapidus Procedure | Bunion Surgeon</title>
        <meta
          name="description"
          content="The Lapidus Procedure is generally reserved to correct severe bunion deformities and for patient's suffering from hypermobility."
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
          <h1>Lapidus Procedure</h1>
          <p>
            The Lapidus procedure is recommended for people with more severe
            bunions or who are hypermobile.
          </p>
        </div>
        <div className={style.lapidusCont}>
          <div className={style.video}>Lapidus video to follow</div>
          <div className={style.lapidusIntro}>
            <h2>What are the benefits of the Lapidus procedure?</h2>

            <ul className={style.bulletCont}>
              <li> Preservation of big toe joint function</li>
              <li>
                Correction and realignment of medium to large structural bunion
                deformity
              </li>
              <li>Beneficial for hypermobility as it stabilises the midfoot</li>
              <li> Reduced risk of recurrence in hypermobile feet</li>
            </ul>
          </div>
        </div>
        <div className={style.howCont}>
          <h2 className={style.howTitle}>
            How is the Lapidus procedure performed?
          </h2>
          <div className={style.stepsCont}>
            {lapidusSteps.map((item, idx) => {
              return (
                <div
                  key={item.title}
                  className={style.imageCont}
                  onClick={() => {
                    setItem(item);
                    setIdx(idx);
                  }}
                >
                  {item.title}
                  <div>
                    <Image
                      src={item.image2.src}
                      alt={item.image2.alt}
                      fill
                      objectFit="contain"
                      className={style.stepsImage}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <Modal
          visible={Boolean(item)}
          setItem={setItem}
          items={lapidusSteps}
          idx={idx}
          setIdx={setIdx}
        >
          {Boolean(item) && (
            <div className={style.modalCont}>
              <div className={style.modalImage}>
                <Image
                  src={item?.image1?.src}
                  alt={item?.image1?.alt}
                  fill
                  objectFit="contain"
                  className={style.stepsImage}
                />
              </div>
              <p className={style.modalText}>{item.text}</p>
            </div>
          )}
        </Modal>
        <LapidusTimeline />
      </Layout>
    </>
  );
}
