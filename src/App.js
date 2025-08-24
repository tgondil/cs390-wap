import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ClassPage from './pages/ClassPage';
import Navigation from './components/Class1/Navigation';
import SyllabusPage from './pages/SyllabusPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/class/:classNumber" element={<ClassPage />} />
          <Route path="/syllabus" element={<SyllabusPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 