import Head from "next/head";
import { BackgroundLines } from "../../components/home/BackgroundLines";
import { LapidusTimeline } from "../../components/surgery/surgeryTimelines/LapidusTimeline";
import { Layout } from "../../components/templates/Layout";
import { Modal } from "../../components/templates/Modal";
import style from "./Lapidus.module.css";
import Image from "next/image";
import { useState } from "react";

const lapidusSteps = [
  {
    title: "Step one",
    text: "A small cut is made between the ankle and the big toe.",
    image1: {
      src: "/images/step1-lapidus.png",
      alt: "Lapidus procedure step 1",
    },
  },
  {
    title: "Step two",
    text: "The joint is opened up and fused using screws and a plate.",
    image1: {
      src: "/images/step2-lapidus.png",
      alt: "Lapidus procedure step 2",
    },
  },
  {
    title: "Step three",
    text: "If there is a deformity at the joint it will be reshaped.",
    image1: {
      src: "/images/step3-lapidus.png",
      alt: "Lapidus procedure step 3",
    },
  },
  {
    title: "Step four",
    text: "To reshape, extra bone is used that is taken from the shin, or alternativey with the use of a sterile bone chip called an Allograft.",
    image1: {
      src: "/images/step4-lapidus.png",
      alt: "Lapidus procedure step 4",
    },
  },
];

export default function lapidus() {
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
      <Layout>
        <div className={style.headerSec}>
          <BackgroundLines />
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
            {/* <p>
              The lapidus procedure has several benefits for people who suffer
              from a severe bunion, including:
            </p> */}
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
                      src={item.image1.src}
                      alt={item.image1.alt}
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
