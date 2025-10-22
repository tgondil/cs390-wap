#!/usr/bin/env python3

# This script generates the Slides.js for Class 13

header = """import React, { useEffect, useState } from 'react';

// Custom CSS for animations
const customStyles = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in { animation: fade-in 0.5s ease-out; }
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.3); }
    50% { box-shadow: 0 0 30px rgba(239, 68, 68, 0.6); }
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
  @keyframes slide-in {
    from { transform: translateX(-100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  .animate-slide-in {
    animation: slide-in 0.6s ease-out;
  }
  @keyframes bounce-in {
    0% { transform: scale(0.3); opacity: 0; }
    50% { transform: scale(1.05); }
    70% { transform: scale(0.9); }
    100% { transform: scale(1); opacity: 1; }
  }
  .animate-bounce-in {
    animation: bounce-in 0.8s ease-out;
  }
`;

const Class13Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
"""

footer = """
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const goToSlide = (index) => {
    setCurrentSlide(Math.max(0, Math.min(index, slides.length - 1)));
  };

  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 to-gray-800">
      <style>{customStyles}</style>
      
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className={`w-full max-w-7xl bg-gradient-to-br ${currentSlideData.bgGradient} rounded-3xl shadow-2xl p-12 min-h-[600px] flex flex-col`}>
          {currentSlideData.content}
        </div>
      </div>

      {/* Scrollable Navigation */}
      <div className="bg-gray-900 border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex-shrink-0 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-3 overflow-x-auto flex-1 py-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap \\${
                    currentSlide === index
                      ? 'bg-red-600 text-white scale-105 shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {index + 1}. {slide.title}
                </button>
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex-shrink-0 p-3 rounded-lg bg-gray-800 hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="text-center text-gray-400 text-sm mt-4">
            Slide {currentSlide + 1} of {slides.length} • Use ← → arrow keys to navigate
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class13Slides;
"""

# Write the output
with open('/Users/tanay/cs390-wap/src/components/classes/class-13/Slides.js', 'w') as f:
    f.write(header)
    f.write("    // Slides will be added next\n")
    f.write(footer)

print("Generated Slides.js template")
