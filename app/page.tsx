import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Ticker from '@/components/Ticker'
import Work from '@/components/Work'
// import Clients from '@/components/Clients'
import Services from '@/components/Services'
import Process from '@/components/Process'
import Why from '@/components/Why'
// import Stats from '@/components/Stats'
import Blog from '@/components/Blog'
import Cta from '@/components/Cta'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Ticker />
      <Work />
      {/* <Clients /> */}
      <Services />
      <Process />
      <Why />
      {/* <Stats /> */}
      <Blog />
      <Cta />
      <Footer />
    </>
  )
}
