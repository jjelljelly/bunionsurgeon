import Head from "next/head";
import { NazirTimeline } from "../components/about/NazirTimeline";
import { BackgroundLines } from "../components/home/BackgroundLines";
import { Layout } from "../components/templates/Layout";
import { Location } from "../components/templates/map/Location";
import { Wrapper, InfoWindow } from "@googlemaps/react-wrapper";
import style from "./about.module.css";
import { useState } from "react";
import { Marker } from "../components/templates/map/Marker";
import { NewMap } from "../components/templates/map/NewMap.";
import { getPlaiceholder } from "plaiceholder";
import { AboutImage } from "../components/about/AboutImage";

// Google maps
const render = (status) => {
  return <h1>{status}</h1>;
};

export async function getStaticProps() {
  const { base64: blBase64, img: blImg } = await getPlaiceholder(
    "/images/abstract-lines.png"
  );
  const { base64: logoBase64, img: logoImg } = await getPlaiceholder(
    "/images/bunion-logo.png"
  );

  const { base64: aboutBase64, img: aboutImg } = await getPlaiceholder(
    "/images/about-us.png"
  );

  const { base64: aboutTestBase64, img: aboutTestImg } = await getPlaiceholder(
    "/images/about-us-tester.jpg"
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
      aboutImage: {
        ...aboutImg,
        blurDataURL: aboutBase64,
      },
      aboutTestImage: {
        ...aboutTestImg,
        blurDataURL: aboutTestBase64,
      },
    },
  };
}

const mapStyles = [
  {
    featureType: "poi",
    stylers: [{ visibility: "off" }],
  },
];

export default function About({
  blImage,
  logoImage,
  aboutImage,
  aboutTestImage,
}) {
  const [clicks, setClicks] = useState([]);
  const [zoom, setZoom] = useState(16);
  const [center, setCenter] = useState({
    lat: 51.51745302940149,
    lng: -0.1465417440665885,
  });

  const onClick = (e) => {
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
        <title>About Us | Mr Kaser Nazir | Bunion Surgeon</title>
        <meta
          name="description"
          content="Our bunion surgeon, Mr Kaser Nazir, is one of the leading surgeons in the United Kingdom. With over a 97% success rate, excellent patient results and feedback."
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
                "@id": "https://www.bunionsurgeon.co.uk/about/#breadcrumblist",
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
                    nextItem: "https://www.bunionsurgeon.co.uk/about/#listItem",
                  },
                  {
                    "@type": "ListItem",
                    "@id": "https://www.bunionsurgeon.co.uk/about/#listItem",
                    position: 2,
                    item: {
                      "@type": "WebPage",
                      "@id": "https://www.bunionsurgeon.co.uk/about/",
                      name: "About us | Bunion Surgeon",
                      description:
                        "Mr Kaser Nazir, Consultant Podiatric Surgeon, Mr. Nazir has performed over 1900 Bunion surgeries since 2010 with a 97% success rate...",
                      url: "https://www.bunionsurgeon.co.uk/about/",
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
                "@id": "https://www.bunionsurgeon.co.uk/about/#webpage",
                url: "https://www.bunionsurgeon.co.uk/about/",
                name: "Mr Kaser Nazir | Surgeon Biography | bunionsurgeon",
                description:
                  "Mr Kaser Nazir, Consultant Podiatric Surgeon, Mr. Nazir has performed over 1900 Bunion surgeries since 2010 with a 97% success rate...",
                inLanguage: "en-GB",
                isPartOf: {
                  "@id": "https://www.bunionsurgeon.co.uk/#website",
                },
                breadcrumb: {
                  "@id": "https://www.bunionsurgeon.co.uk/about/#breadcrumblist",
                },
                datePublished: "2018-11-23T18:13:22+00:00",
                dateModified: "2023-06-05T16:22:32+01:00",
              },
            ],
          })}
        </script>
      </Head>
      <Layout logo={logoImage}>
        <div>
          <div className={style.headerSec}>
            <BackgroundLines image={blImage} />
            <h1>About The Bunion Surgeon</h1>
            <p>
              The Bunion Surgeon is a central London based clinic that
              specialises in minimally invasive key hole bunion surgery.
            </p>
            <p>
              All consultations and procedures are carried out by our expert
              bunion surgeon, Mr Kaser Nazir.
            </p>
          </div>
          <div className={style.kaserCont}>
            <div className={style.boxed}>
              <div className={style.image}>
                <AboutImage aboutImage={aboutTestImage} />
              </div>
              <div className={style.kaserBio}>
                <h2>Who is Mr Kaser Nazir?</h2>
                <p>
                  Mr Kaser Nazir is a foot and ankle surgeon who primarily
                  operates in central London. He is one of the leading bunion
                  surgeons in the United Kingdom.
                </p>
                <p>
                  Specialising in minimally invasive and innovative surgical
                  approaches, Mr Kaser Nazir provides excellent results
                  following bunion surgery.
                </p>
                <p>
                  During your consultation, Mr Kaser Nazir will diligently
                  listen to your concerns, preferences and together find the
                  most appropriate surgical option.
                </p>

                <p>
                  Following your procedure, you will be able to reach Mr Nazir
                  directly over the phone, SMS or Whatsapp to ensure you have
                  successful recovery.
                </p>
              </div>
            </div>
          </div>
        </div>
        <NazirTimeline />
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
