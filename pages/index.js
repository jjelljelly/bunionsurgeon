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

export default function Home() {

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
      <Head />
      <Layout>
        <Banner />
        <KnOverview />
        <BulletpointSurgery />
        <PricingHomepage />
        <ExtraInfo />
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
