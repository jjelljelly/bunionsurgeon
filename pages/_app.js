import { PricingProvider } from '../context/pricingContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <PricingProvider>
    <Component {...pageProps} />
  </PricingProvider>
}

export default MyApp
