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
// import {
//   InfoWindow,
//   withScriptjs,
//   withGoogleMap,
// } from "@react-google-maps/api";

// Google maps
const render = (status) => {
  return <h1>{status}</h1>;
};

// const MapWithAMakredInfoWindow = compose(
//   withStateHandlers(
//     () => ({
//       isOpen: false,
//     }),
//     {
//       onToggleOpen:
//         ({ isOpen }) =>
//         () => ({
//           isOpen: !isOpen,
//         }),
//     }
//   ),
//   withScriptjs,
//   withGoogleMap
// );

const mapStyles = [
  {
    featureType: "poi",
    stylers: [{ visibility: "off" }],
  },
  // {
  //   featureType: "road",
  //   elementType: "geometry",
  //   stylers: [{ color: "#063b5e;" }],
  // },
  // { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
];

export default function About() {
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

  const onIdle = (m) => {
    console.log("onIdle");
    setZoom(m.getZoom());
    setCenter(m.getCenter().toJSON());
  };

  return (
    <>
      <Head />
      <Layout>
        <div>
          <div className={style.headerSec}>
            <BackgroundLines />
            <h1>About The Bunion Surgeon</h1>
            <p>
              The Bunion Surgeon is a central London based clinic that
              specialises in minimally invasive or key hole bunion surgery.
            </p>
            <p>
              All consultations and procedures are carried out by our expert
              bunion surgeon, Mr Kaser Nazir.
            </p>
          </div>
          <div className={style.kaserCont}>
            <div className={style.video}>Video to follow</div>
            <div className={style.kaserBio}>
              <h2>Who is Mr Kaser Nazir?</h2>
              <p>
                Mr Kaser Nazir is a foot and ankle surgeon who primarily
                operates in central London. He is one of the leading bunion
                surgeons in the United Kingdom and Dubai, UAE.
              </p>
              <p>
                Specialising in minimally invasive and innovative surgical
                approaches, Mr Kaser Nazir provides excellent results following
                bunion surgery.
              </p>
              <p>
                During your consultation, Mr Kaser Nazir will diligently listen
                to your concerns, preferences and together find the most
                appropriate surgical option.
              </p>

              <p>
                Following your procedure, you will be able to reach Mr Nazir
                directly over the phone, SMS or Whatsapp to ensure you have
                successful recovery.
              </p>
            </div>
          </div>
        </div>
        <NazirTimeline />
        {/* <NewMap /> */}
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
