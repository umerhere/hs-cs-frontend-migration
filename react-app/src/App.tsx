import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/globals.css';

import HomePage from './pages/HomePage';
import ProductPage from './pages/product/ProductPage';
import FeaturesPage from './pages/product/FeaturesPage';
import PricingPage from './pages/product/PricingPage';
import IntegrationsPage from './pages/product/IntegrationsPage';
import AboutPage from './pages/about/AboutPage';
import ContactPage from './pages/about/ContactPage';
import MigrationPage from './pages/services/MigrationPage';
import ContentstackPage from './pages/platforms/ContentstackPage';
import HubSpotPlatformPage from './pages/platforms/HubSpotPlatformPage';
import PrivacyPolicyPage from './pages/policies/PrivacyPolicyPage';
import TermsPage from './pages/policies/TermsPage';

function NotFound() {
  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
      <h1 style={{ fontSize: '4rem', fontWeight: 800, color: '#111827', margin: 0 }}>404</h1>
      <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>Page not found.</p>
      <a href="/" style={{ color: '#00C6B2', fontWeight: 600, textDecoration: 'underline' }}>Go home →</a>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/features" element={<FeaturesPage />} />
        <Route path="/product/pricing" element={<PricingPage />} />
        <Route path="/product/integrations" element={<IntegrationsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/contact" element={<ContactPage />} />
        <Route path="/services/website-migration" element={<MigrationPage />} />
        <Route path="/platforms/contentstack" element={<ContentstackPage />} />
        <Route path="/platforms/hubspot" element={<HubSpotPlatformPage />} />
        <Route path="/policies/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/policies/terms-of-use" element={<TermsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
