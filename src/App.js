// src/App.js
import './App.css';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <AboutSection />
      {/* Future sections go here: Tours, Gallery, About, etc. */}
    </div>
  );
}

export default App;