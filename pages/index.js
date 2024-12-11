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
import { BeforeAndAfterHome } from '../components/home/BeforeAndAfterHome'
import { fetchEntries } from '../lib/contentful'


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
  const { base64, img } = await getPlaiceholder("/images/kaser-nazir-homepage.png");
  const { base64: bsBase64, img: bsImg } = await getPlaiceholder("/images/homepage-surgery.jpg");
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
      imageProps: {
        ...img,
        blurDataURL: base64,
      },
      beforeAfterImages: fetchedProducts,
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

export default function Home({ imageProps, bsImage, blImage, logoImage, beforeAfterImages }) {

  const firstThree = beforeAfterImages.filter((item, idx) => idx < 8)
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
        <title>Bunion Surgeon London, Bunion Specialist: Bunionsurgeon.co.uk</title>
        <meta name="description" content="Mr Kaser Nazir is an expert Bunion Surgeon based in London, offering the minimally invasive keyhole bunion surgery with minimal scarring and faster healing." />
        <link rel="icon" href="/images/bunion-logo.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
          viewport-fit="cover"
        />
        <script type="application/ld+json" class="aioseo-schema">
          {JSON.stringify({ "@context": "https:\/\/schema.org", "@graph": [{ "@type": "BreadcrumbList", "@id": "https:\/\/www.bunionsurgeon.co.uk\/#breadcrumblist", "itemListElement": [{ "@type": "ListItem", "@id": "https:\/\/www.bunionsurgeon.co.uk\/#listItem", "position": 1, "item": { "@type": "WebPage", "@id": "https:\/\/www.bunionsurgeon.co.uk\/", "name": "Home", "description": "London\u2019s Premier Minimally Invasive Bunion Clinic", "url": "https:\/\/www.bunionsurgeon.co.uk\/" }, "nextItem": "https:\/\/www.bunionsurgeon.co.uk\/#listItem" }, { "@type": "ListItem", "@id": "https:\/\/www.bunionsurgeon.co.uk\/#listItem", "position": 2, "item": { "@type": "WebPage", "@id": "https:\/\/www.bunionsurgeon.co.uk\/", "name": "Home", "url": "https:\/\/www.bunionsurgeon.co.uk\/" }, "previousItem": "https:\/\/www.bunionsurgeon.co.uk\/#listItem" }] }, { "@type": "Organization", "@id": "https:\/\/www.bunionsurgeon.co.uk\/#organization", "name": "Bunion Surgeon", "url": "https:\/\/www.bunionsurgeon.co.uk\/", "contactPoint": { "@type": "ContactPoint", "telephone": "+44 207 820 8007", "contactType": "none" } }, { "@type": "WebSite", "@id": "https:\/\/www.bunionsurgeon.co.uk\/#website", "url": "https:\/\/www.bunionsurgeon.co.uk\/", "name": "bunionsurgeon", "description": "London\u2019s Premier Minimally Invasive Bunion Clinic", "inLanguage": "en-GB", "publisher": { "@id": "https:\/\/www.bunionsurgeon.co.uk\/#organization" }, "potentialAction": { "@type": "SearchAction", "target": { "@type": "EntryPoint", "urlTemplate": "https:\/\/www.bunionsurgeon.co.uk\/?s={search_term_string}" }, "query-input": "required name=search_term_string" } }, { "@type": "WebPage", "@id": "https:\/\/www.bunionsurgeon.co.uk\/#webpage", "url": "https:\/\/www.bunionsurgeon.co.uk\/", "name": "Bunion Surgeon London | Minimally Invasive Keyhole Bunion Surgery", "inLanguage": "en-GB", "isPartOf": { "@id": "https:\/\/www.bunionsurgeon.co.uk\/#website" }, "breadcrumb": { "@id": "https:\/\/www.bunionsurgeon.co.uk\/#breadcrumblist" }, "datePublished": "2018-11-12T15:14:39+00:00", "dateModified": "2023-06-05T15:19:43+01:00" }] })}
        </script>
      </Head>
      <Layout logo={logoImage} >
        <Banner image={imageProps} />
        <KnOverview image={blImage} />
        <BeforeAndAfterHome images={firstThree} />
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
