// src/App.js
import './App.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturedDestinations from './components/FeaturedDestinations';
import TripsCarousel from './components/TripsCarousel';
import WhyChooseUs from './components/WhyChooseUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <FeaturedDestinations />
      <TripsCarousel />
      <WhyChooseUs />
      <Footer />
      {/* Future sections go here: Tours, Gallery, About, etc. */}
    </div>
  );
}

export default App;