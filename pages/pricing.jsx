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
  const [visible, setVisible] = useState("insured");
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
          viewport-fit="cover"
        />
        <script type="application/ld+json" class="aioseo-schema">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                "@id":
                  "https://www.bunionsurgeon.co.uk/pricing/#breadcrumblist",
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
                      "https://www.bunionsurgeon.co.uk/pricing/#listItem",
                  },
                  {
                    "@type": "ListItem",
                    "@id": "https://www.bunionsurgeon.co.uk/pricing/#listItem",
                    position: 2,
                    item: {
                      "@type": "WebPage",
                      "@id": "https://www.bunionsurgeon.co.uk/pricing/",
                      name: "Cost of Bunion Surgery",
                      description:
                        "We believe in total transparency when it comes to the fees and costs involved in Bunion Surgery. Below is a breakdown of fees for patients who are self-funding.",
                      url: "https://www.bunionsurgeon.co.uk/pricing/",
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
                "@id": "https://www.bunionsurgeon.co.uk/pricing/#webpage",
                url: "https://www.bunionsurgeon.co.uk/pricing/",
                name: "Cost of Bunion Surgery | Bunion Surgeon",
                description:
                  "We believe in total transparency when it comes to the fees and costs involved in Bunion Surgery. Below is a breakdown of fees for patients who are self-funding.",
                inLanguage: "en-GB",
                isPartOf: {
                  "@id": "https://www.bunionsurgeon.co.uk/#website",
                },
                breadcrumb: {
                  "@id":
                    "https://www.bunionsurgeon.co.uk/pricing/#breadcrumblist",
                },
                datePublished: "2018-11-23T18:21:33+00:00",
                dateModified: "2023-06-05T16:24:58+01:00",
              },
            ],
          })}
        </script>
      </Head>
      <Layout logo={logoImage}>
        <div className={style.headerSec}>
          <BackgroundLines image={blImage} />
          <h1>Cost of Bunion Surgery</h1>
          <p>
            The fee for bunion surgery can vary depending on the severity of
            your bunion and your particular requirements. Here you will find
            typical pricing for each bunion operation we offer.
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
