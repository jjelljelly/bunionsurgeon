import { Wrapper } from "@googlemaps/react-wrapper";
import Head from "next/head";
import { Layout } from "../components/templates/Layout";
import { Location } from "../components/templates/map/Location";
import { Marker } from "../components/templates/map/Marker";
import { BackgroundLines } from "../components/home/BackgroundLines";
import style from "./GetInTouch.module.css";
import { useState } from "react";
import { ContactDetails } from "../components/templates/ContactDetails";
import Form from "../components/templates/Form";
import { getPlaiceholder } from "plaiceholder";

const render = (status) => {
  return <h1>{status}</h1>;
};

const mapStyles = [
  {
    featureType: "poi",
    stylers: [{ visibility: "off" }],
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

export default function GetInTouch({ blImage, logoImage }) {
  const [clicks, setClicks] = useState([]);
  const [zoom, setZoom] = useState(16);
  const [center, setCenter] = useState({
    lat: 51.51745302940149,
    lng: -0.1465417440665885,
  });

  const onClick = (e) => {
    // avoid directly mutating state
    setClicks([...clicks, e.latLng]);
  };

  const onIdle = (m) => {
    console.log("onIdle");
    setZoom(m.getZoom());
    setCenter(m.getCenter().toJSON());
  };

  return (
    <>
      <Head>
        <title>Get In Touch | Bunion Surgeon</title>
        <meta
          name="description"
          content="If you have any questions contact us, via - Tel: 0207 820 8007, Email: admin@bunionsurgeon.co.uk, Address: 17 Harley Street, London, W1G 9QH"
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
                  "https://www.bunionsurgeon.co.uk/getintouch/#breadcrumblist",
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
                      "https://www.bunionsurgeon.co.uk/getintouch/#listItem",
                  },
                  {
                    "@type": "ListItem",
                    "@id":
                      "https://www.bunionsurgeon.co.uk/getintouch/#listItem",
                    position: 2,
                    item: {
                      "@type": "WebPage",
                      "@id": "https://www.bunionsurgeon.co.uk/getintouch/",
                      name: "Get in Touch",
                      description:
                        "Contact us, via - Tel: 0207 820 8007, Email: admin@bunionsurgeon.co.uk, Address: 17 Harley Street, London, W1G 9QH",
                      url: "https://www.bunionsurgeon.co.uk/getintouch/",
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
                "@id": "https://www.bunionsurgeon.co.uk/getintouch/#webpage",
                url: "https://www.bunionsurgeon.co.uk/getintouch/",
                name: "Get In Touch | bunionsurgeon",
                description:
                  "Contact us, via - Tel: 0207 820 8007, Email: admin@bunionsurgeon.co.uk, Address: 17 Harley Street, London, W1G 9QH",
                inLanguage: "en-GB",
                isPartOf: { "@id": "https://www.bunionsurgeon.co.uk/#website" },
                breadcrumb: {
                  "@id":
                    "https://www.bunionsurgeon.co.uk/getintouch/#breadcrumblist",
                },
                datePublished: "2018-12-11T14:51:17+00:00",
                dateModified: "2023-06-05T16:36:24+00:00",
              },
            ],
          })}
        </script>
      </Head>
      <Layout logo={logoImage}>
        <div className={style.headerSec}>
          <BackgroundLines image={blImage} />
          <h1>Get in Touch</h1>
        </div>
        <ContactDetails />
        <Wrapper apiKey={process.env.NEXT_PUBLIC_MAP_API} render={render}>
          <Location center={center} zoom={zoom} options={{ styles: mapStyles }}>
            <Marker
              position={center}
              address={"17 Harley Street<br /> London</br />W1G 9QH"}
            />
          </Location>
        </Wrapper>
      </Layout>
    </>
  );
}
