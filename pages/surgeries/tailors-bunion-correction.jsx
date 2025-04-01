import Head from "next/head";
import { BackgroundLines } from "../../components/home/BackgroundLines";
import { Layout } from "../../components/templates/Layout";
import { Modal } from "../../components/templates/Modal";
import style from "./TailorsBunion.module.css";
import { useState } from "react";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";
import { TailorImage } from "../../components/surgeryImages/TailorImage";
import { FrequentQuestions } from "../../components/surgery/FrequentQuestions";
import { fetchEntries } from "../../lib/contentful";
import { TailorsTimeline } from "../../components/surgery/surgeryTimelines/TailorsTimeline";

const tailorsSteps = [
  {
    title: "Step one",
    text: "Excess bone is trimmed and smoothed on the side.",
    image1: {
      src: "/images/step1-tailors.png",
      alt: "Tailor's Bunion Osteotomy step 1",
    },
    image2: {
      src: "/images/step1-tailors-text.png",
      alt: "Tailor's Bunion Osteotomy step 1",
    },
  },
  {
    title: "Step two",
    text: `The head of the bone is cut and shifted inwards to reduce the prominent bunionette.
    
    1. Bone is cut.
    
    2. Bone is shifted inwards`,
    image1: {
      src: "/images/step2-tailors.png",
      alt: "Tailor's bunion osteotomy step 2",
    },
    image2: {
      src: "/images/step2-tailors-text.png",
      alt: "Tailor's bunion osteotomy step 2",
    },
  },
  {
    title: "Step three",
    text: "One or two screw fixtation are used to secure the bone in the new position whilst it heals. They do not require removal in most cases.",
    image1: {
      src: "/images/step3-tailors.png",
      alt: "Tailor's Bunion osteotomy step 3",
    },
    image2: {
      src: "/images/step3-tailors-text.png",
      alt: "Tailor's Bunion osteotomy step 3",
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

  const { base64: tailorBase64, img: tailorImg } = await getPlaiceholder(
    "/images/tailors.png"
  );

  const fetchedProducts = await fetchEntries({
    content_type: "faqTailorBunion",
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
      tailorImage: {
        ...tailorImg,
        blurDataURL: tailorBase64,
      },
      faqBunion: fetchedProducts,
    },
  };
}

export default function TailorsBunion({
  blImage,
  logoImage,
  tailorImage,
  faqTailorBunion,
}) {
  const [item, setItem] = useState(false);
  const [idx, setIdx] = useState();

  return (
    <>
      <Head>
        <title>Tailor's bunion correction London, Fifth toe bunionette surgery: Bunionsurgeon.co.uk</title>
        <meta
          name="description"
          content="Experience Tailor's bunion surgery in London. Our bunion and bunionette experts provide top-notch care to correct foot issues. Book an appointment now! "
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
                  "https://www.bunionsurgeon.co.uk/surgeries/tailors-bunion-correction/#breadcrumblist",
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
                      "https://www.bunionsurgeon.co.uk/surgeries/tailors-bunion-correction/#listItem",
                  },
                  {
                    "@type": "ListItem",
                    "@id":
                      "https://www.bunionsurgeon.co.uk/surgeries/tailors-bunion-correction/#listItem",
                    position: 2,
                    item: {
                      "@type": "WebPage",
                      "@id":
                        "https://www.bunionsurgeon.co.uk/surgeries/tailors-bunion-correction/",
                      name: "Tailor's bunion correction",
                      description:
                        "Key information on Tailor's bunion correction to correct your bunionnette...",
                      url: "https://www.bunionsurgeon.co.uk/tailors-bunion-correction/",
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
                  "https://www.bunionsurgeon.co.uk/surgeries/tailors-bunion-correction/#webpage",
                url: "https://www.bunionsurgeon.co.uk/surgeries/tailors-bunion-correction/",
                name: "Bunion Surgery | Tailor's bunion correction | bunionsurgeon",
                description:
                  "Key information on the Tailor's bunion correction to correct your bunionette, also known as hallux valgus...",
                inLanguage: "en-GB",
                isPartOf: {
                  "@id": "https://www.bunionsurgeon.co.uk/#website",
                },
                breadcrumb: {
                  "@id":
                    "https://www.bunionsurgeon.co.uk/surgeries/tailors-bunion-correctione/#breadcrumblist",
                },
                datePublished: "2024-01-18T18:07:46+00:00",
                dateModified: "2024-01-18T15:31:15+01:00",
              },
            ],
          })}
        </script>
      </Head>
      <Layout logo={logoImage}>
        <div className={style.headerSec}>
          <BackgroundLines image={blImage} />
          <h1>Tailor's Bunion Correction</h1>
          <p>
            The osteotomy procedure is favoured by Mr Kaser Nazir to correct a Tailor`s Bunion.
          </p>
        </div>
        <div className={style.tailorsCont}>
          <div className={style.image}>
            <div className={style.picOverlay}></div>
            <TailorImage tailorImage={tailorImage} />
          </div>
          <div className={style.tailorsIntro}>
            <h2>What are the benefits of Tailors bunion osteotomy?</h2>
            <ul className={style.bulletCont}>
              <li> Restores foot mechanics</li>
              <li> Allows excellent movement of the joint</li>
              <li> Very low recurrence rate</li>
            </ul>
          </div>
        </div>

        <div className={style.whatIs}>
          <h2>What is a Tailor's Bunion?</h2>
          <p>
            A Tailor's bunion is a deformity that affects the fifth toe and metatarsal bone (bone of the ball of thre 5th toe).
          </p>
          <p>
            The condition is often progressive if left untreated, it cannot be corrected without surgery. As the bump on the fifth toe gets larger it can cause pain from excessive friction against footwear.
          </p>
          <p>
            The osteotomy procedure allows correction of the Tailor’s bunion with the use of two screw fixations.
          </p>
        </div>
        <div className={style.howCont}>
          <h2 className={style.howTitle}>
            How is the Tailor's bunion osteotomy performed?
          </h2>
          <div className={style.stepsCont}>
            {tailorsSteps.map((item, idx) => {
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
          items={tailorsSteps}
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
        <TailorsTimeline />
        <FrequentQuestions faqTailorBunion={faqTailorBunion} />
      </Layout>
    </>
  );
}
