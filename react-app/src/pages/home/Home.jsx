import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import HeroSection from './sections/HeroSection.jsx'
import IconGridSection from './sections/IconGridSection.jsx'
import DescriptionCtaSection from './sections/DescriptionCtaSection.jsx'

export default function Home() {
  return (
    <div className="body-wrapper">
      <Header />

      <main id="main-content" className="body-container-wrapper">
        <div className="body-container body-container--home">
          <HeroSection />
          <IconGridSection />
          <DescriptionCtaSection />
        </div>
      </main>

      <Footer />
    </div>
  )
}
