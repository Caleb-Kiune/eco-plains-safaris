// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import SafarisPage from './pages/SafarisPage';

function App() {
  return (
    <Router>
      <Navbar />
      <WhatsAppButton />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/safaris" element={<SafarisPage />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App