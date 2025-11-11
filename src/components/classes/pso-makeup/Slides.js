import React, { useEffect, useState } from 'react';

// Custom CSS for animations
const customStyles = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in { animation: fade-in 0.5s ease-out; }
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
    50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.6); }
  }
  .animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
`;

const MakeupPSOSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title Slide
    {
      id: 'title-slide',
      title: 'PSO Makeup Opportunity',
      content: (
        <div className="text-center space-y-12">
          <style>{customStyles}</style>
          <div className="space-y-8">
            <h1 className="text-6xl font-bold text-white mb-6">🎯 PSO Makeup Opportunity</h1>
            <div className="text-2xl text-blue-200">
              Last Chance Before the Capstone
            </div>
          </div>
          
          <div className="mt-16">
            <div className="text-2xl font-medium text-white">Tanay Gondil</div>
            <div className="text-xl text-blue-200">CS390 Web Application Programming</div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-indigo-700'
    },

    // Slide 2: GeoGuessr
    {
      id: 'geoguessr',
      title: 'GeoGuessr',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12">Let's Play GeoGuessr!</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-9xl mb-12 animate-float">🌍</div>
            
            <a
              href="https://www.geoguessr.com/join/DFEAP?s=Url"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold text-4xl px-16 py-8 rounded-2xl transition-all transform hover:scale-105 shadow-2xl animate-pulse-glow"
            >
              🎮 Join GeoGuessr Game →
            </a>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-teal-600'
    },

    // Slide 3: Making Up PSOs
    {
      id: 'making-up-psos',
      title: 'Making Up PSOs',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Making Up PSOs</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📚</div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 border-2 border-white/20 mb-8">
              <div className="space-y-6 text-xl text-white/95">
                <p>
                  I've been working through grades and noticed most of you missed a few PSOs.
                </p>
                <p>
                  This is your <strong className="text-yellow-300">last chance</strong> to work on them 
                  before we transition to the final project.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-400">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-green-300 mb-3">Under Drop Limit?</h3>
                <p className="text-lg text-white/90">
                  This will be <strong>extra credit</strong>
                </p>
              </div>

              <div className="bg-blue-500/20 rounded-xl p-6 border-2 border-blue-400">
                <div className="text-5xl mb-4">🔄</div>
                <h3 className="text-2xl font-bold text-blue-300 mb-3">Over Drop Limit?</h3>
                <p className="text-lg text-white/90">
                  You can <strong>make up one drop</strong>
                </p>
              </div>
            </div>

          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-700'
    },

    // Slide 4: Available PSOs
    {
      id: 'available-psos',
      title: 'Available PSOs',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Choose ONE PSO</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📋</div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Wordle Clone */}
              <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-400 hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-green-300 mb-3">Wordle Clone</h3>
                <p className="text-white/90 mb-4">Build a fully functional word-guessing game with DOM manipulation</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-green-600/40 rounded-full text-sm">DOM Manipulation</span>
                  <span className="px-3 py-1 bg-green-600/40 rounded-full text-sm">Event Handling</span>
                  <span className="px-3 py-1 bg-green-600/40 rounded-full text-sm">Game Logic</span>
                </div>
                <a
                  href="https://github.com/tgondil/wordle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-all"
                >
                  📦 github.com/tgondil/wordle →
                </a>
              </div>

              {/* AI Podcast Generator */}
              <div className="bg-purple-500/20 rounded-xl p-6 border-2 border-purple-400 hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">🎙️</div>
                <h3 className="text-2xl font-bold text-purple-300 mb-3">AI Podcast Generator</h3>
                <p className="text-white/90 mb-4">Build an AI-powered backend application that creates podcasts</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-600/40 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-purple-600/40 rounded-full text-sm">API Integration</span>
                  <span className="px-3 py-1 bg-purple-600/40 rounded-full text-sm">Async/Await</span>
                </div>
                <a
                  href="https://github.com/tgondil/cs390-podcast"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-all"
                >
                  📦 github.com/tgondil/cs390-podcast →
                </a>
              </div>

              {/* Secure Login System */}
              <div className="bg-blue-500/20 rounded-xl p-6 border-2 border-blue-400 hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">🔒</div>
                <h3 className="text-2xl font-bold text-blue-300 mb-3">Secure Login System</h3>
                <p className="text-white/90 mb-4">Implement authentication with bcrypt and MongoDB</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-blue-600/40 rounded-full text-sm">Authentication</span>
                  <span className="px-3 py-1 bg-blue-600/40 rounded-full text-sm">MongoDB</span>
                  <span className="px-3 py-1 bg-blue-600/40 rounded-full text-sm">bcrypt</span>
                </div>
                <a
                  href="https://github.com/tgondil/pso-login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all"
                >
                  📦 github.com/tgondil/pso-login →
                </a>
              </div>

              {/* Untrusted Game */}
              <div className="bg-red-500/20 rounded-xl p-6 border-2 border-red-400 hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">🔐</div>
                <h3 className="text-2xl font-bold text-red-300 mb-3">Untrusted Game</h3>
                <p className="text-white/90 mb-4">Solve JavaScript security puzzles and logic challenges</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-red-600/40 rounded-full text-sm">JavaScript Logic</span>
                  <span className="px-3 py-1 bg-red-600/40 rounded-full text-sm">Problem Solving</span>
                  <span className="px-3 py-1 bg-red-600/40 rounded-full text-sm">Security</span>
                </div>
                <a
                  href="https://alexnisnevich.github.io/untrusted/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-all"
                >
                  🎮 Play Untrusted Game →
                </a>
              </div>

              {/* LeetCode Practice */}
              <div className="bg-orange-500/20 rounded-xl p-6 border-2 border-orange-400 hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">💻</div>
                <h3 className="text-2xl font-bold text-orange-300 mb-3">LeetCode Practice</h3>
                <p className="text-white/90 mb-4">Sharpen algorithmic thinking with coding challenges</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-orange-600/40 rounded-full text-sm">Algorithms</span>
                  <span className="px-3 py-1 bg-orange-600/40 rounded-full text-sm">Data Structures</span>
                  <span className="px-3 py-1 bg-orange-600/40 rounded-full text-sm">Problem Solving</span>
                </div>
                <a
                  href="https://leetcode.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-lg transition-all"
                >
                  💻 leetcode.com →
                </a>
              </div>

              {/* CSS Diner */}
              <div className="bg-pink-500/20 rounded-xl p-6 border-2 border-pink-400 hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">🍽️</div>
                <h3 className="text-2xl font-bold text-pink-300 mb-3">CSS Diner</h3>
                <p className="text-white/90 mb-4">Master CSS selectors through interactive challenges</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-pink-600/40 rounded-full text-sm">CSS Selectors</span>
                  <span className="px-3 py-1 bg-pink-600/40 rounded-full text-sm">Styling</span>
                  <span className="px-3 py-1 bg-pink-600/40 rounded-full text-sm">Fundamentals</span>
                </div>
                <a
                  href="https://flukeout.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-lg transition-all"
                >
                  🎮 Play CSS Diner →
                </a>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-cyan-600'
    },

    // Slide 5: Tomorrow - Capstone
    {
      id: 'capstone',
      title: 'Tomorrow',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-9xl mb-8 animate-float">🚀</div>
            <h2 className="text-6xl font-extrabold mb-8">Tomorrow</h2>
            <p className="text-4xl text-white/90">
              We'll transition to the capstone project
            </p>
          </div>
        </div>
      ),
      bgGradient: 'from-orange-600 to-red-600'
    },

    // Slide 6: Thank You
    {
      id: 'thank-you',
      title: 'Thank You',
      content: (
        <div className="text-center flex flex-col items-center justify-center min-h-[60vh]">
          <style>{customStyles}</style>
          <div className="text-9xl mb-12 animate-float">🙏</div>
          <h1 className="text-9xl font-bold text-white animate-fade-in">Thank You</h1>
        </div>
      ),
      bgGradient: 'from-purple-600 to-indigo-700'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const slideElements = document.querySelectorAll('[data-slide-index]');
      let currentSlideIndex = 0;
      
      slideElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSlideIndex = index;
        }
      });
      setCurrentSlide(currentSlideIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSlide = (slideIndex) => {
    const slideElement = document.querySelector(`[data-slide-index="${slideIndex}"]`);
    if (slideElement) {
      slideElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          data-slide-index={index}
          className={`min-h-screen flex items-center justify-center p-8 bg-gradient-to-br ${slide.bgGradient}`}
        >
          <div className="max-w-6xl mx-auto w-full">
            {slide.content}
          </div>
        </div>
      ))}

      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center space-x-4 bg-black/30 backdrop-blur rounded-full px-6 py-3">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white shadow-lg scale-125' : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="w-px h-4 bg-white/30"></div>
          <span className="text-white text-sm font-medium">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MakeupPSOSlides;
