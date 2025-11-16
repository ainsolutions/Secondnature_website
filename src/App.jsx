import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import OurStory from './components/OurStory'
import OurJourney from './components/OurJourney'
import ProductsSection from './components/ProductsSection'
import VideoBanner from './components/ui/VideoBanner'
import OurClients from './components/OurClients'
import Testimonials from './components/Testimonials'

export default function App() {
  return (
    <div className='font-body scroll-smooth'>
      <Navbar />
      <main id="home">
        <VideoBanner videopath="/public/assets/banner/SNO Banner.mp4" />
        <AboutSection />
        <OurStory />
        <OurJourney />
        <OurClients />
        <Testimonials />
        <ProductsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}