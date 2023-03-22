import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Message from '@/components/Message'
import Services from '@/components/Services'

export default function App({ Component, pageProps }) {
  return <>
  <Navbar />
  <Hero heading=''/>
  <About />
  <Message />
  <Services />
  <Component {...pageProps} />
  </>
}
