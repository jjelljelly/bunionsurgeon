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

  return {
    props: {
      blImage: {
        ...blImg,
        blurDataURL: blBase64,
      },
    },
  };
}

export default function GetInTouch({ blImage }) {
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
      </Head>
      <Layout>
        <div className={style.headerSec}>
          <BackgroundLines image={blImage} />
          <h1>Get in Touch</h1>
        </div>
        <ContactDetails />
        {/* <div className={style.textCont}>
          <h2 className={style.header}>Request an Appointment</h2>
          <Form />
        </div> */}
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
