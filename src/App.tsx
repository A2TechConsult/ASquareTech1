import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router';
import { Toaster } from 'sonner@2.0.3';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { WhyUs } from './pages/WhyUs';
import { CaseStudies } from './pages/CaseStudies';
import { Insights } from './pages/Insights';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Privacy } from './pages/Privacy';
import { GDPRRequest } from './pages/GDPRRequest';
import { TermsAndConditions } from './pages/TermsAndConditions';
import { Confidentiality } from './pages/Confidentiality';
import { AICapabilities } from './pages/AICapabilities';
import { StaffAugmentation } from './pages/StaffAugmentation';
import { GlobalManufacturing } from './pages/case-studies/GlobalManufacturing';
import { VistexPricing } from './pages/case-studies/VistexPricing';
import { S4HANAMigration } from './pages/case-studies/S4HANAMigration';
import { CRMModernization } from './pages/case-studies/CRMModernization';
import { PlexIntegration } from './pages/case-studies/PlexIntegration';
import { OrderToCash } from './pages/case-studies/OrderToCash';
import { SystemConsolidation } from './pages/case-studies/SystemConsolidation';
import { useEffect } from 'react';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/global-manufacturing" element={<GlobalManufacturing />} />
            <Route path="/case-studies/vistex-pricing" element={<VistexPricing />} />
            <Route path="/case-studies/s4hana-migration" element={<S4HANAMigration />} />
            <Route path="/case-studies/crm-modernization" element={<CRMModernization />} />
            <Route path="/case-studies/plex-integration" element={<PlexIntegration />} />
            <Route path="/case-studies/order-to-cash" element={<OrderToCash />} />
            <Route path="/case-studies/system-consolidation" element={<SystemConsolidation />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/why-us" element={<WhyUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/gdpr-request" element={<GDPRRequest />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/confidentiality" element={<Confidentiality />} />
            <Route path="/ai-capabilities" element={<AICapabilities />} />
            <Route path="/staff-augmentation" element={<StaffAugmentation />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}