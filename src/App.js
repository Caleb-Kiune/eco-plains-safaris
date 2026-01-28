// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import LoadingSpinner from './components/common/LoadingSpinner';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';
import ScrollToTop from './components/common/ScrollToTop';

// Pages
// Pages - Lazy Loaded for Performance
import HomePage from './pages/HomePage'; // Keep critical path eager
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const SafarisPage = lazy(() => import('./pages/SafarisPage'));
const SafariDetailsPage = lazy(() => import('./pages/SafariDetailsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));

function App() {
  // Ultra-light smooth scroll enhancement (feels premium, zero lag)
  useEffect(() => {
    let isScrolling = false;
    const handleWheel = () => {
      if (!isScrolling) {
        window.requestAnimationFrame(() => {
          isScrolling = false;
        });
      }
      isScrolling = true;
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <WhatsAppButton />

      <main>
        <Suspense fallback={<div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><LoadingSpinner /></div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/safaris" element={<SafarisPage />} />
            <Route path="/safaris/:slug" element={<SafariDetailsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
    </Router>
  );
}

export default App;