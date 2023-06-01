import Head from 'next/head'
import { Layout } from '../components/templates/Layout'
import { Banner } from '../components/home/Banner'
import { KnOverview } from '../components/home/KnOverview'
import { BulletpointSurgery } from '../components/home/BulletpointSurgery'
import { PricingHomepage } from '../components/home/PricingHomepage'
import { ExtraInfo } from '../components/home/ExtraInfo'
import { ContactDetails } from '../components/templates/ContactDetails'
import { Wrapper } from '@googlemaps/react-wrapper'
import { Location } from '../components/templates/map/Location'
import { Marker } from '../components/templates/map/Marker'
import { useState } from "react";
import { getPlaiceholder } from "plaiceholder";

// Google maps
const render = (status) => {
  return <h1>{status}</h1>;
};

const mapStyles = [
  {
    featureType: "poi",
    stylers: [{ visibility: "off" }],
  }
];

export async function getStaticProps() {
  const { base64, img } = await getPlaiceholder("/images/homepage-idea.jpg");
  const { base64: bsBase64, img: bsImg } = await getPlaiceholder("/images/bunion-surgeon-homepage-test.jpeg");
  const { base64: blBase64, img: blImg } = await getPlaiceholder(
    "/images/abstract-lines.png"
  );
  const { base64: logoBase64, img: logoImg } = await getPlaiceholder(
    "/images/bunion-logo.png"
  );

  return {
    props: {
      imageProps: {
        ...img,
        blurDataURL: base64,
      },
      bsImage: {
        ...bsImg,
        blurDataURL: bsBase64
      },
      blImage: {
        ...blImg,
        blurDataURL: blBase64,
      },
      logoImage: {
        ...logoImg,
        blurDataURL: logoBase64
      }
    },
  };
};

export default function Home({ imageProps, bsImage, blImage, logoImage }) {

  const [clicks, setClicks] = useState([]);
  const [zoom, setZoom] = useState(16); // initial zoom
  const [center, setCenter] = useState({
    lat: 51.51745302940149,
    lng: -0.1465417440665885,
  });

  const onClick = (e) => {
    // avoid directly mutating state
    setClicks([...clicks, e.latLng]);
  };

  return (
    <>
      <Head>
        <title>Bunion Surgeon London | Minimally invasive keyhole bunion surgery</title>
        <meta name="description" content="Welcome to Bunion Surgeon in central London. Our bunion surgeon provides comprehensive assessment and minimally invasive surgery to correct bunion deformities. " />
        <link rel="icon" href="/images/bunion-logo.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <Layout logo={logoImage} >
        <Banner image={imageProps} />
        <KnOverview image={blImage} />
        <BulletpointSurgery images={bsImage} image={blImage} />
        <PricingHomepage />
        <ExtraInfo image={blImage} />
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
  )
}
