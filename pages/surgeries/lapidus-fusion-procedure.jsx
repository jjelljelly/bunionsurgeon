import Head from "next/head";
import { BackgroundLines } from "../../components/home/BackgroundLines";
import { LapidusTimeline } from "../../components/surgery/surgeryTimelines/LapidusTimeline";
import { Layout } from "../../components/templates/Layout";
import { Modal } from "../../components/templates/Modal";
import style from "./Lapidus.module.css";
import Image from "next/image";
import { useState } from "react";
import { getPlaiceholder } from "plaiceholder";
import { LapidusImage } from "../../components/surgeryImages/LapidusImage";
import { FrequentQuestions } from "../../components/surgery/FrequentQuestions";
import { fetchEntries } from "../../lib/contentful";

const lapidusSteps = [
  {
    title: "Step one",
    text: "An incision is made inside the foot arch.",
    image1: {
      src: "/images/step1-lapidus.png",
      alt: "Lapidus procedure step 1",
    },
    image2: {
      src: "/images/step1-lapidus-text.png",
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
      src: "/images/step2-lapidus-text.png",
      alt: "Lapidus procedure step 2",
    },
  },
  {
    title: "Step three",
    text: "Plate and screws used to aid fusion of midfoot.",
    image1: {
      src: "/images/step3-lapidus.png",
      alt: "Lapidus procedure step 3",
    },
    image2: {
      src: "/images/step3-lapidus-text.png",
      alt: "Lapidus procedure step 3",
    },
  },
  {
    title: "Step four",
    text: "A small wedge is removed from the phalanx to straighten the end of the toe.",
    image1: {
      src: "/images/step4-lapidus.png",
      alt: "Lapidus procedure step 4",
    },
    image2: {
      src: "/images/step4-lapidus-text.png",
      alt: "Lapidus procedure step 4",
    },
  },
  {
    title: "Step five",
    text: "The phalanx is fixed together where the wedge has been removed, promoting a correct alignment of the toe.",
    image1: {
      src: "/images/step5-lapidus.png",
      alt: "Lapidus procedure step 5",
    },
    image2: {
      src: "/images/step5-lapidus-text.png",
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

  const { base64: lapidusBase64, img: lapidusImg } = await getPlaiceholder(
    "/images/lapidus-image.jpg"
  );
  const fetchedProducts = await fetchEntries({
    content_type: "faqLapidus",
  });

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
      lapidusImage: {
        ...lapidusImg,
        blurDataURL: lapidusBase64,
      },
      faqBunion: fetchedProducts,
    },
  };
}

export default function Lapidus({
  blImage,
  logoImage,
  lapidusImage,
  faqBunion,
}) {
  const [item, setItem] = useState(false);
  const [idx, setIdx] = useState();
  return (
    <>
      <Head>
        <title>Lapidus Bunionectomy London, Lapidus Hallux Valgus Correction & Surgery: Bunionsurgeon.co.uk</title>
        <meta
          name="description"
          content="Lapidus Fusion Procedure in London - Learn about Lapidus hallux valgus correction at top Lapidus Bunion Clinics in London. Trust our lapidus surgery specialists for your bunion correction needs."
        />
        <link rel="icon" href="/images/bunion-logo.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0,user-scalable=0"
          viewport-fit="cover"
        />
        <script type="application/ld+json" class="aioseo-schema">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "@id":
                  "https://www.bunionsurgeon.co.uk/surgeries/lapidus/#breadcrumblist",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    "@id": "https://www.bunionsurgeon.co.uk/#listItem",
                    position: 1,
                    item: {
                      "@type": "WebPage",
                      "@id": "https://www.bunionsurgeon.co.uk/",
                      name: "Home",
                      description:
                        "London\u2019s Premier Minimally Invasive Bunion Clinic",
                      url: "https://www.bunionsurgeon.co.uk/",
                    },
                    nextItem:
                      "https://www.bunionsurgeon.co.uk/surgeries/lapidus/#listItem",
                  },
                  {
                    "@type": "ListItem",
                    "@id":
                      "https://www.bunionsurgeon.co.uk/lsurgeries/lapidus/#listItem",
                    position: 2,
                    item: {
                      "@type": "WebPage",
                      "@id":
                        "https://www.bunionsurgeon.co.uk/surgeries/lapidus/",
                      name: "Lapidus Fusion Procedure",
                      description:
                        "The Lapidus Fusion Procedure is a surgical procedure, generally reserved for severe deformities or patient's who suffer from hypermobility.",
                      url: "https://www.bunionsurgeon.co.uk/surgeries/lapidus/",
                    },
                    previousItem: "https://www.bunionsurgeon.co.uk/#listItem",
                  },
                ],
              },
              {
                "@type": "Organization",
                "@id": "https://www.bunionsurgeon.co.uk/#organization",
                name: "Bunion Surgeon",
                url: "https://www.bunionsurgeon.co.uk/",
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "020 74594326",
                  contactType: "none",
                },
              },
              {
                "@type": "WebSite",
                "@id": "https://www.bunionsurgeon.co.uk/#website",
                url: "https://www.bunionsurgeon.co.uk/",
                name: "bunionsurgeon",
                description:
                  "London\u2019s Premier Minimally Invasive Bunion Clinic",
                inLanguage: "en-GB",
                publisher: {
                  "@id": "https://www.bunionsurgeon.co.uk/#organization",
                },
              },
              {
                "@type": "WebPage",
                "@id":
                  "https://www.bunionsurgeon.co.uk/surgeries/lapidus/#webpage",
                url: "https://www.bunionsurgeon.co.uk/lsurgeries/lapidus/",
                name: "Lapidus Bunion Surgery | bunionsurgeon",
                description:
                  "The Lapidus Fusion Procedure is a surgical procedure, generally reserved for severe deformities or patient's who suffer from hypermobility.",
                inLanguage: "en-GB",
                isPartOf: {
                  "@id": "https://www.bunionsurgeon.co.uk/#website",
                },
                breadcrumb: {
                  "@id":
                    "https://www.bunionsurgeon.co.uk/surgeries/lapidus/#breadcrumblist",
                },
                datePublished: "2018-11-23T18:11:18+00:00",
                dateModified: "2023-06-05T15:49:31+01:00",
              },
            ],
          })}
        </script>
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
          <div className={style.image}>
            <div className={style.picOverlay}></div>
            <LapidusImage lapidusImage={lapidusImage} />
          </div>
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
        <LapidusTimeline />
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
        <FrequentQuestions faqBunion={faqBunion} />
      </Layout>
    </>
  );
}
