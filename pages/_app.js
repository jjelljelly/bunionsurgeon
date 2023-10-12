import { PricingProvider } from '../context/pricingContext'
import '../styles/globals.css'
import { useEffect } from 'react';
import { setGoogleAnalytics } from '../components/templates/GoogleAnalytics';


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    setGoogleAnalytics();
  }, []);
  return <PricingProvider>
    <Component {...pageProps} />
  </PricingProvider>
}

export default MyApp
