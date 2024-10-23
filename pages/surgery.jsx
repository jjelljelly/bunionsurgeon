import Head from "next/head";
import { Layout } from "../components/templates/Layout";
import style from "./surgery.module.css";
import { BackgroundLines } from "../components/home/BackgroundLines";
import Link from "next/link";
import { BunionInfo } from "../components/surgery/BunionInfo";
import { FrequentQuestions } from "../components/surgery/FrequentQuestions";
import { getPlaiceholder } from "plaiceholder";
import { fetchEntries } from "../lib/contentful";

export async function getStaticProps() {
  const { base64: blBase64, img: blImg } = await getPlaiceholder(
    "/images/abstract-lines.png"
  );
  const { base64: logoBase64, img: logoImg } = await getPlaiceholder(
    "/images/bunion-logo.png"
  );
  const { base64: surgeryBase64, img: surgeryImg } = await getPlaiceholder(
    "/images/surgery-pic.jpg"
  );

  const fetchedProducts = await fetchEntries({
    content_type: "faqBunion",
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
      surgeryImage: {
        ...surgeryImg,
        blurDataURL: surgeryBase64,
      },
      faqBunion: fetchedProducts,
    },
  };
}

export default function Surgery({
  blImage,
  logoImage,
  surgeryImage,
  faqBunion,
}) {
  return (
    <>
      <Head>
        <title>
          Bunion Treatment London, Foot Bunion Removal, Big Toe Surgery:
          Bunionsurgeon.co.uk
        </title>
        <meta
          name="description"
          content="Lapidus Fusion Procedure in London - The procedure is generally reserved to correct severe bunion deformities and for patient's suffering from hypermobility.."
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
                  "https://www.bunionsurgeon.co.uk/surgery/#breadcrumblist",
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
                      "https://www.bunionsurgeon.co.uk/surgery/#listItem",
                  },
                  {
                    "@type": "ListItem",
                    "@id": "https://www.bunionsurgeon.co.uk/surgery/#listItem",
                    position: 2,
                    item: {
                      "@type": "WebPage",
                      "@id": "https://www.bunionsurgeon.co.uk/surgery/",
                      name: "Types of Bunion Surgery | What is a Bunion?",
                      description:
                        "Types of bunion surgery alongside key information on how to recognise a Bunion and how common they are...",
                      url: "https://www.bunionsurgeon.co.uk/surgery/",
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
                "@id": "https://www.bunionsurgeon.co.uk/surgery/#webpage",
                url: "https://www.bunionsurgeon.co.uk/what-is-a-bunion/",
                name: "What Is A Bunion? | bunionsurgeon",
                description:
                  "Key information on how to recognise a Bunion and how common they are...",
                inLanguage: "en-GB",
                isPartOf: {
                  "@id": "https://www.bunionsurgeon.co.uk/#website",
                },
                breadcrumb: {
                  "@id":
                    "https://www.bunionsurgeon.co.uk/what-is-a-bunion/#breadcrumblist",
                },
                datePublished: "2018-11-23T17:03:05+00:00",
                dateModified: "2023-06-05T15:26:42+01:00",
              },
            ],
          })}
        </script>
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
        <BunionInfo surgeryImage={surgeryImage} />
        <div className={style.surgeryCont}>
          <h2>Types of Bunion Surgery</h2>
          <div className={style.surgeryType}>
            <Link
              href={"/surgeries/minimally-invasive-keyhole-bunion-surgery"}
              className={style.link}
            >
              <button className={style.surgery}>
                <h2>Minimally invasive keyhole bunion surgery</h2>
              </button>
            </Link>
            <Link
              href={"/surgeries/scarf-and-akin-osteotomy"}
              className={style.link}
            >
              <button className={style.surgery}>
                <h2>Scarf and akin osteotomy</h2>
              </button>
            </Link>
            <Link
              href={"/surgeries/lapidus-fusion-procedure"}
              className={style.link}
            >
              <button className={style.surgery}>
                <h2>Lapidus procedure</h2>
              </button>
            </Link>
            <Link
              href={"/surgeries/tailors-bunion-correction"}
              className={style.link}
            >
              <button className={style.surgery}>
                <h2>Tailor's Bunion Correction</h2>
              </button>
            </Link>
          </div>
        </div>
        <FrequentQuestions faqBunion={faqBunion} />
      </Layout>
    </>
  );
}
