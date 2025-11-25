// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SafarisPage from './pages/SafarisPage';
import SafariDetailsPage from './pages/SafariDetailsPage';

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
    <HelmetProvider>
      <Router>
        <Navbar />
        <WhatsAppButton />

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/safaris" element={<SafarisPage />} />
            <Route path="/safaris/:slug" element={<SafariDetailsPage />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;