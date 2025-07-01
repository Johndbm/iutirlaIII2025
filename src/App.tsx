import React from 'react';
import './styles/comic-theme.css';
import HeroSection from './components/HeroSection';
import TrimesterSchedule from './components/TrimesterSchedule';
import TeamsSection from './components/TeamsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="app">
      <HeroSection />
      <TrimesterSchedule />
      <TeamsSection />
      <Footer />
    </div>
  );
};

export default App;