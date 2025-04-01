import Head from "next/head";
import { BackgroundLines } from "../../components/home/BackgroundLines";
import { ScarfTimeline } from "../../components/surgery/surgeryTimelines/ScarfTimeline";
import { Layout } from "../../components/templates/Layout";
import { Modal } from "../../components/templates/Modal";
import style from "./ScarfAkin.module.css";
import { useState } from "react";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import { ScarfImage } from "../../components/surgeryImages/ScarfImage";
import { FrequentQuestions } from "../../components/surgery/FrequentQuestions";
import { fetchEntries } from "../../lib/contentful";

const scarfSteps = [
  {
    title: "Step one",
    text: "The light ligaments on the other side of the bunion are released.",
    image1: {
      src: "/images/step1-scarf.png",
      alt: "Scarf and akin osteotomy step 1",
    },
    image2: {
      src: "/images/step1-scarf-text.png",
      alt: "Scarf and akin osteotomy step 1",
    },
  },
  {
    title: "Step two",
    text: "The bunion is shaved.",
    image1: {
      src: "/images/step2-scarf.png",
      alt: "Scarf and akin osteotomy step 2",
    },
    image2: {
      src: "/images/step2-scarf-text.png",
      alt: "Scarf and akin osteotomy step 2",
    },
  },
  {
    title: "Step three",
    text: `1. The metatarsal bone is cut.
    
    2. Metatarsal bone is realigned.
    
    3. Screws are used to fix the metatarsal bone in place.`,
    image1: {
      src: "/images/step3-scarf.png",
      alt: "Scarf and akin osteotomy step 3",
    },
    image2: {
      src: "/images/step3-scarf-text.png",
      alt: "Scarf and akin osteotomy step 3",
    },
  },
  {
    title: "Step four",
    text: "A small wedge is removed from the phalanx to straighten the end of the toe.",
    image1: {
      src: "/images/step4-scarf.png",
      alt: "Scarf and akin osteotomy step 4",
    },
    image2: {
      src: "/images/step4-scarf-text.png",
      alt: "Scarf and akin osteotomy step 4",
    },
  },
  {
    title: "Step five",
    text: "The phalanx is fixed together where the wedge has been removed, promoting a correct alignment of the toe.",
    image1: {
      src: "/images/step5-scarf.png",
      alt: "Scarf and akin osteotomy step 5",
    },
    image2: {
      src: "/images/step5-scarf-text.png",
      alt: "Scarf and akin osteotomy step 5",
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

  const { base64: scarfBase64, img: scarfImg } = await getPlaiceholder(
    "/images/scarf-akin-image.jpg"
  );

  const fetchedProducts = await fetchEntries({
    content_type: "faqScarf",
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
      scarfImage: {
        ...scarfImg,
        blurDataURL: scarfBase64,
      },
      faqBunion: fetchedProducts,
    },
  };
}

export default function ScarfAkin({
  blImage,
  logoImage,
  scarfImage,
  faqBunion,
}) {
  const [item, setItem] = useState(false);
  const [idx, setIdx] = useState();

  return (
    <>
      <Head>
        <title>Scarf Akin Osteotomy London, Scarf Akin Hallux Valgus, Foot Scarf & Akin Osteotomy: Bunionsurgeon.co.uk</title>
        <meta
          name="description"
          content="Mr Kaser Nazir is an expert bunion surgery, offering the Scarf Akin Osteotomy for Hallux Valgus in London. "
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
                  "https://www.bunionsurgeon.co.uk/surgeries/minimally-invasive/#breadcrumblist",
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
                      "https://www.bunionsurgeon.co.uk/surgeries/minimally-invasive/#listItem",
                  },
                  {
                    "@type": "ListItem",
                    "@id":
                      "https://www.bunionsurgeon.co.uk/surgeries/minimally-invasive/#listItem",
                    position: 2,
                    item: {
                      "@type": "WebPage",
                      "@id":
                        "https://www.bunionsurgeon.co.uk/surgeries/minimally-invasive/",
                      name: "Scarf and Akin Osteotomy",
                      description:
                        "Key information on the scarf and akin osteotomy to correct your bunion, also known as hallux valgus...",
                      url: "https://www.bunionsurgeon.co.uk/scarf-and-akin-osteotomy/",
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
                  "https://www.bunionsurgeon.co.uk/surgeries/minimally-invasive/#webpage",
                url: "https://www.bunionsurgeon.co.uk/surgeries/minimally-invasive/",
                name: "Bunion Surgery | Scarf & Akin Osteotomy | bunionsurgeon",
                description:
                  "Key information on the scarf and akin osteotomy to correct your bunion, also known as hallux valgus...",
                inLanguage: "en-GB",
                isPartOf: {
                  "@id": "https://www.bunionsurgeon.co.uk/#website",
                },
                breadcrumb: {
                  "@id":
                    "https://www.bunionsurgeon.co.uk/surgeries/minimally-invasive/#breadcrumblist",
                },
                datePublished: "2018-11-23T18:07:46+00:00",
                dateModified: "2023-06-05T15:31:15+01:00",
              },
            ],
          })}
        </script>
      </Head>
      <Layout logo={logoImage}>
        <div className={style.headerSec}>
          <BackgroundLines image={blImage} />
          <h1>Scarf and Akin Osteotomy</h1>
          <p>
            The Scarf and Akin Osteotomy is one of the most common bunion
            procedures carried out by bunion specialists.
          </p>
        </div>
        <div className={style.scarfCont}>
          <div className={style.image}>
            <div className={style.picOverlay}></div>
            <ScarfImage scarfImage={scarfImage} />
          </div>
          <div className={style.scarfIntro}>
            <h2>What are the benefits of the Scarf and Akin Osteotomy?</h2>
            <ul className={style.bulletCont}>
              <li> Restores foot mechanics</li>
              <li> Allows for correction of small and moderate deformities</li>
              <li> Low recurrence rate (2-5%)</li>
            </ul>
          </div>
        </div>

        <div className={style.whatIs}>
          <h2>What is the Scarf and Akin Osteotomy?</h2>
          <p>
            The Scarf and Akin procedure is used to correct small to moderate
            bunion deformities.
          </p>
          <p>
            It allows early weight-bearing due to the stability of the
            specialised bone cuts and titanium screws used to fix the bone
            alignment in the new position.
          </p>
          <p>
            This corrective bunion procedure is one of the most popular
            operations globally.
          </p>
        </div>
        <div className={style.howCont}>
          <h2 className={style.howTitle}>
            How is the minimally invasive bunion procedure performed?
          </h2>
          <div className={style.stepsCont}>
            {scarfSteps.map((item, idx) => {
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
          items={scarfSteps}
          idx={idx}
          setIdx={setIdx}
        >
          {Boolean(item) && (
            <div className={style.modalCont}>
              <div className={style.modalImage}>
                <Image
                  src={item?.image2?.src}
                  alt={item?.image2?.alt}
                  fill
                  objectFit="contain"
                  className={style.stepsImage}
                />
              </div>
              <p className={style.modalText}>{item.text}</p>
            </div>
          )}
        </Modal>
        <ScarfTimeline />
        <FrequentQuestions faqBunion={faqBunion} />
      </Layout>
    </>
  );
}
