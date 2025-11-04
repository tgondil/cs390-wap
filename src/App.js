import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ClassPage from './pages/ClassPage';
import Navigation from './components/Class1/Navigation';
import PSOCSSDINERSlides from './components/classes/pso-css-diner/Slides';
import PSOUntrustedSlides from './components/classes/pso-untrusted/Slides';
import PSOWordleSlides from './components/classes/pso-wordle/Slides';
import PSOWordle2Slides from './components/classes/pso-wordle2/Slides';
import PSOLeetCodeSlides from './components/classes/pso-leetcode/Slides';
import PSOChatSlides from './components/classes/pso-chat/Slides';
import PSOPodcastSlides from './components/classes/pso-podcast/Slides';
import PSOPodcastDepthSlides from './components/classes/pso-podcast-depth/Slides';
import PSOLoginSlides from './components/classes/pso-login/Slides';

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
          <Route path="/pso/wordle2" element={<PSOWordle2Slides />} />
          <Route path="/pso/leetcode" element={<PSOLeetCodeSlides />} />
          <Route path="/pso/chat" element={<PSOChatSlides />} />
          <Route path="/pso/podcast" element={<PSOPodcastSlides />} />
          <Route path="/pso/podcast-depth" element={<PSOPodcastDepthSlides />} />
          <Route path="/pso/login" element={<PSOLoginSlides />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 