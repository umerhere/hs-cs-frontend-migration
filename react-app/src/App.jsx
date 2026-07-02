import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Product from './pages/product/Product.jsx'
import Contact from './pages/contact/Contact.jsx'
import Features from './pages/features/Features.jsx'
import Pricing from './pages/pricing/Pricing.jsx'
import Migration from './pages/migration/Migration.jsx'
import HubSpotPlatform from './pages/platforms/HubSpotPlatform.jsx'
import ContentstackPlatform from './pages/platforms/ContentstackPlatform.jsx'
import CaseStudyRemote from './pages/case-study/CaseStudyRemote.jsx'
import Integrations from './pages/integrations/Integrations.jsx'
import Engineering from './pages/engineering/Engineering.jsx'
import SetupGuide from './pages/setup-guide/SetupGuide.jsx'
import PrivacyPolicy from './pages/policies/PrivacyPolicy.jsx'
import TermsOfUse from './pages/policies/TermsOfUse.jsx'
import ProductUpdates from './pages/updates/ProductUpdates.jsx'
import Documentation from './pages/documentation/Documentation.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Core */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/contact" element={<Contact />} />

        {/* Product */}
        <Route path="/product" element={<Product />} />
        <Route path="/product/features" element={<Features />} />
        <Route path="/product/pricing" element={<Pricing />} />
        <Route path="/product/integrations" element={<Integrations />} />
        <Route path="/product/updates" element={<ProductUpdates />} />
        <Route path="/product/documentation" element={<Documentation />} />

        {/* Services */}
        <Route path="/services/website-migration" element={<Migration />} />

        {/* Platforms */}
        <Route path="/platforms/hubspot" element={<HubSpotPlatform />} />
        <Route path="/platforms/contentstack" element={<ContentstackPlatform />} />

        {/* Case Studies */}
        <Route path="/case-studies/remote" element={<CaseStudyRemote />} />

        {/* Engineering / Blog */}
        <Route path="/engineering" element={<Engineering />} />

        {/* Resources */}
        <Route path="/setup-guide" element={<SetupGuide />} />

        {/* Policies */}
        <Route path="/policies/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/policies/terms-of-use" element={<TermsOfUse />} />
      </Routes>
    </BrowserRouter>
  )
}
