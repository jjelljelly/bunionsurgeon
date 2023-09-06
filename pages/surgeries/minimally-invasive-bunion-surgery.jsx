import Head from "next/head";
import { BackgroundLines } from "../../components/home/BackgroundLines";
import { Layout } from "../../components/templates/Layout";
import style from "./MinimallyInvasive.module.css";
import { useState } from "react";
import { Modal } from "../../components/templates/Modal";
import { MisTimeline } from "../../components/surgery/surgeryTimelines/MisTimeline";
import { getPlaiceholder } from "plaiceholder";
import Image from "next/image";
import { MinimallyImage } from "../../components/surgeryImages/MinimallyImage";
import { fetchEntries } from "../../lib/contentful";
import { FrequentQuestions } from "../../components/surgery/FrequentQuestions";

const pecaSteps = [
  {
    title: "Step one",
    text: "A small 2mm incision is made allowing the first metatarsal to be cut.",
    image1: {
      src: "/images/step1-peca.png",
      alt: "Minimally invasive bunion procedure step 1",
    },
    image2: {
      src: "/images/step1-peca.png",
      alt: "Minimally invasive bunion procedure step 1",
    },
  },
  {
    title: "Step two",
    text: "The head of the first metatarsal is repositioned, to partially minimise the bony prominence.",
    image1: {
      src: "/images/step2-peca.png",
      alt: "Minimally invasive bunion procedure step 2",
    },
    image2: {
      src: "/images/step2-peca.png",
      alt: "Minimally invasive bunion procedure step 2",
    },
  },
  {
    title: "Step three",
    text: "Two screws are used to fix both sections of the metatarsal in its new position.",
    image1: {
      src: "/images/step3-peca.png",
      alt: "Minimally invasive bunion procedure step 3",
    },
    image2: {
      src: "/images/step3-peca.png",
      alt: "Minimally invasive bunion procedure step 3",
    },
  },
  {
    title: "Step four",
    text: "A wedge is removed from the first proximal phalanx to reposition the toe into a straighter natural alignment. This is also fixed in place with a screw.",
    image1: {
      src: "/images/step4-peca.png",
      alt: "Minimally invasive bunion procedure step 4",
    },
    image2: {
      src: "/images/step4-peca.png",
      alt: "Minimally invasive bunion procedure step 4",
    },
  },
  {
    title: "Step five",
    text: "The protruding bone is cut away and flattened to a natural outer arc.",
    image1: {
      src: "/images/step5-peca.png",
      alt: "Minimally invasive bunion procedure step 5",
    },
    image2: {
      src: "/images/step5-peca.png",
      alt: "Minimally invasive bunion procedure step 5",
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

  const { base64: minimallyBase64, img: minimallyImg } = await getPlaiceholder(
    "/images/minimally-invasive-surgery.jpg"
  );
  const fetchedProducts = await fetchEntries({
    content_type: "faQminimallyinvasive",
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
      minimallyImage: {
        ...minimallyImg,
        blurDataURL: minimallyBase64,
      },
      faqBunion: fetchedProducts,
    },
  };
}

export default function MinimallyInvasive({
  blImage,
  logoImage,
  minimallyImage,
  faqBunion,
}) {
  const [item, setItem] = useState(false);
  const [idx, setIdx] = useState();

  return (
    <>
      <Head>
        <title>
          Minimally Invasive Keyhole Bunion Surgery | Bunion Surgeon
        </title>
        <meta
          name="description"
          content="Keyhole Surgery, also known as Minimally Invasive Surgery, uses modern techniques and equipment to decrease the number and size of incisions..."
        />
        <link rel="icon" href="/images/bunion-logo.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0,user-scalable=0"
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
                      name: "Minimally Invasive (Keyhole) Bunion Surgery",
                      description:
                        "Keyhole Surgery, also known as Minimally Invasive Surgery, uses modern techniques and equipment to decrease the number and size of incisions...",
                      url: "https://www.bunionsurgeon.co.uk/surgeries/minimally-invasive/",
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
                  telephone: "+44 207 820 8007",
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
                name: "Keyhole Bunion Surgery | bunionsurgeon",
                description:
                  "Keyhole Surgery, also known as Minimally Invasive Surgery, uses modern techniques and equipment to decrease the number and size of incisions...",
                inLanguage: "en-GB",
                isPartOf: { "@id": "https://www.bunionsurgeon.co.uk/#website" },
                breadcrumb: {
                  "@id":
                    "https://www.bunionsurgeon.co.uk/surgeries/minimally-invasive/#breadcrumblist",
                },
                datePublished: "2019-12-03T14:14:13+00:00",
                dateModified: "2023-06-05T16:10:33+01:00",
              },
            ],
          })}
        </script>
      </Head>
      <Layout logo={logoImage}>
        <div className={style.headerSec}>
          <BackgroundLines image={blImage} />
          <h1>Minimally Invasive Bunion Surgery</h1>
          <p>
            With over 98% success rate, The Bunion Surgeon is one of the leading
            minimally invasive bunion experts in the United Kingdom.
          </p>
        </div>
        <div className={style.misCont}>
          <div className={style.image}>
            <div className={style.picOverlay}></div>
            <MinimallyImage minimallyImage={minimallyImage} />
          </div>
          <div className={style.misIntro}>
            <h2>What are the benefits of minimally invasive bunion surgery?</h2>
            <p>
              The minimally invasive bunion surgery has several benefits
              including:
            </p>
            <ul className={style.bulletCont}>
              <li> Reduced swelling following surgery</li>
              <li> Decreased postoperative pain</li>
              <li> Faster return to closed footwear and normal activities</li>
              <li> Smaller incision resulting in less visible scar</li>
              <li> Reduced chance of joint stiffness</li>
            </ul>
          </div>
        </div>
        <div className={style.whatIs}>
          <h2>What is Minimally Invasive Bunion Surgery?</h2>
          <p>
            Keyhole bunion surgery, or minimally invasive bunion surgery, is a
            modern technique to surgically correct a bunion.
          </p>
          <p>
            A live X-ray machine is utilised during the procedure to aid the cut
            and resetting of the bone malalignment using 3 to 4 small 1 to 3mm
            incisions to guide the specialised surgical instruments designed for
            bunion correction, that will fix the bones in the corrected
            position.
          </p>
          <p>
            The area heals much quicker than more traditional bunion correction.
            This is due to minimal scar tissue.
          </p>
          <p>
            Mr Kaser Nazir has seen excellent results with his patients who have
            reduced pain and quicker recovery.
          </p>
        </div>
        <div className={style.howCont}>
          <h2 className={style.howTitle}>
            How is the minimally invasive bunion procedure performed?
          </h2>
          <div className={style.stepsCont}>
            {pecaSteps.map((item, idx) => {
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
          items={pecaSteps}
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
        <MisTimeline />
        <div className={style.whyImplant}>
          <h2>
            Why is a screw fixation required for the minimally invasive bunion
            correction?
          </h2>
          <p>
            Research shows that without a fixation keeping the joint in place
            once the bones have been realigned increases the risk of
            complication such as delayed or non union of bones and recurrence of
            the deformity.
          </p>
          <p>
            Mr Kaser Nazir utilises the PECA correction system with screws that
            significantly reduces the chance of the bunion recurring and
            provides a predictable recovery.
          </p>
          <p>
            This includes immediate weightbearing with minimal pain and
            swelling.
          </p>
        </div>
        <FrequentQuestions faqBunion={faqBunion} />
      </Layout>
    </>
  );
}
