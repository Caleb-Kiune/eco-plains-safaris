// src/App.js
import './App.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturedDestinations from './components/FeaturedDestinations';
import TripsCarousel from './components/TripsCarousel';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      <FeaturedDestinations />
      <TripsCarousel />
      {/* Future sections go here: Tours, Gallery, About, etc. */}
    </div>
  );
}

export default App;