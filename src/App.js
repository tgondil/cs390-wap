import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ClassPage from './pages/ClassPage';
import Navigation from './components/Class1/Navigation';
import PSOCSSDINERSlides from './components/classes/pso-css-diner/Slides';
import PSOUntrustedSlides from './components/classes/pso-untrusted/Slides';
import PSOWordleSlides from './components/classes/pso-wordle/Slides';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/class/:classNumber" element={<ClassPage />} />
          <Route path="/pso/css-diner" element={<PSOCSSDINERSlides />} />
          <Route path="/pso/untrusted" element={<PSOUntrustedSlides />} />
          <Route path="/pso/wordle" element={<PSOWordleSlides />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 