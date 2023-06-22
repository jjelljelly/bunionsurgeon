import Head from "next/head";
import { BackgroundLines } from "../components/home/BackgroundLines";
import { Layout } from "../components/templates/Layout";
import style from "./BeforeAfterGallery.module.css";
import { fetchEntries } from "../lib/contentful";
import { BeforeAndAfterCard } from "../components/templates/BeforeAndAfterCard";
import { getPlaiceholder } from "plaiceholder";

export async function getStaticProps() {
  const { base64: blBase64, img: blImg } = await getPlaiceholder(
    "/images/abstract-lines.png"
  );
  const fetchedProducts = await fetchEntries({
    content_type: "beforeandafterimage",
  });
  const { base64: logoBase64, img: logoImg } = await getPlaiceholder(
    "/images/bunion-logo.png"
  );

  return {
    props: {
      blImage: {
        ...blImg,
        blurDataURL: blBase64,
      },
      images: fetchedProducts,
      logoImage: {
        ...logoImg,
        blurDataURL: logoBase64,
      },
    },
  };
}

export default function Gallery({ images, blImage, logoImage }) {
  return (
    <>
      <Head>
        <title>Pre and Post Surgery - Image Gallery | Bunion Surgeon</title>
        <meta
          name="description"
          content="Gallery of images documenting our patient's pre-surgery Bunion's and the results of the operation post-surgery."
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
                  "https://www.bunionsurgeon.co.uk/gallery/#breadcrumblist",
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
                      "https://www.bunionsurgeon.co.uk/gallery/#listItem",
                  },
                  {
                    "@type": "ListItem",
                    "@id": "https://www.bunionsurgeon.co.uk/gallery/#listItem",
                    position: 2,
                    item: {
                      "@type": "WebPage",
                      "@id": "https://www.bunionsurgeon.co.uk/gallery/",
                      name: "Before-After Gallery",
                      description:
                        "Gallery of images documenting our patient's pre-surgery Bunion's and the results of the operation post-surgery.",
                      url: "https://www.bunionsurgeon.co.uk/gallery/",
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
                "@id": "https://www.bunionsurgeon.co.uk/gallery/#webpage",
                url: "https://www.bunionsurgeon.co.uk/gallery/",
                name: "Pre and Post Surgery - Image Gallery | Bunion Surgeon",
                description:
                  "Gallery of images documenting our patient's pre-surgery Bunion's and the results of the operation post-surgery.",
                inLanguage: "en-GB",
                isPartOf: { "@id": "https://www.bunionsurgeon.co.uk/#website" },
                breadcrumb: {
                  "@id":
                    "https://www.bunionsurgeon.co.uk/gallery/#breadcrumblist",
                },
                datePublished: "2018-12-14T14:01:33+00:00",
                dateModified: "2023-06-05T16:28:53+01:00",
              },
            ],
          })}
        </script>
      </Head>
      <Layout logo={logoImage}>
        <div className={style.headerSec}>
          <BackgroundLines image={blImage} />
          <h1>Before and After Images</h1>
        </div>
        <div className={style.baaCont}>
          <BeforeAndAfterCard images={images} />
        </div>
      </Layout>
    </>
  );
}
