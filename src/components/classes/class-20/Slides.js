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

const Class20Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title
    {
      id: 'title-slide',
      title: 'CS390 Web Applications Programming',
      bgGradient: 'from-purple-600 to-pink-700',
      content: (
        <div className="text-center space-y-12">
          <style>{customStyles}</style>
          <div className="space-y-8">
            <h1 className="text-6xl font-bold text-white mb-6">CS390</h1>
            <h2 className="text-4xl font-semibold text-purple-100 mb-4">
              Web Applications Programming
            </h2>
            <div className="text-2xl text-purple-200">
              Class 20: Adding Life to Your UI
            </div>
          </div>
          
          <div className="mt-16">
            <div className="text-2xl font-medium text-white">Tanay Gondil</div>
          </div>
        </div>
      )
    },

    // Slide 2: AI-Generated UI Problems
    {
      id: 'ai-problems',
      title: 'AI-Generated UI Problems',
      bgGradient: 'from-red-600 to-orange-700',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">The Problem</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border-2 border-white/20">
              <p className="text-2xl mb-8 text-center">AI-generated UI tends to have the same problems:</p>
              
              <ul className="space-y-4 text-xl text-left">
                <li>• Too many emojis</li>
                <li>• Loud or childish colors</li>
                <li>• Cramped layouts</li>
                <li>• Inconsistent spacing</li>
                <li>• Random text sizes</li>
                <li>• No clear hierarchy</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // Slide 3: Hierarchy
    {
      id: 'hierarchy',
      title: 'Hierarchy',
      bgGradient: 'from-indigo-600 to-blue-700',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">Hierarchy</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border-2 border-white/20">
              <p className="text-2xl mb-8 text-center">Users scan. They don't read everything.</p>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">Hierarchy comes from:</h3>
                <ul className="space-y-3 text-xl text-left">
                  <li>• Size</li>
                  <li>• Weight</li>
                  <li>• Spacing</li>
                  <li>• Contrast</li>
                </ul>
              </div>
              
              <div className="bg-yellow-500/20 rounded-lg p-6 border-2 border-yellow-400 mt-8">
                <p className="text-lg font-semibold">Don't rely on borders or boxes just to separate things.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 4: Spacing & Rhythm
    {
      id: 'spacing-rhythm',
      title: 'Spacing & Rhythm',
      bgGradient: 'from-cyan-600 to-teal-700',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">Spacing & Rhythm</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border-2 border-white/20">
              <div className="space-y-6">
                <p className="text-xl">Use a consistent spacing scale (4, 8, 12, 16…).</p>
                <p className="text-xl">Spacing should repeat across the whole interface.</p>
                <p className="text-xl font-semibold text-yellow-300">Inconsistent spacing instantly makes UI feel unprofessional.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 5: Typography
    {
      id: 'typography',
      title: 'Typography',
      bgGradient: 'from-purple-600 to-pink-700',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">Typography</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border-2 border-white/20">
              <ul className="space-y-4 text-xl text-left">
                <li>• Pick one heading font, one body font</li>
                <li>• SF Pro and Inter work well for most apps</li>
                <li>• Use 2–3 weights</li>
                <li>• Define a clear heading scale and stick to it</li>
                <li>• Avoid mixing random text sizes</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // Slide 6: Color
    {
      id: 'color',
      title: 'Color',
      bgGradient: 'from-pink-600 to-rose-700',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">Color</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border-2 border-white/20">
              <ul className="space-y-4 text-xl text-left">
                <li>• Start with a neutral base</li>
                <li>• Use a single accent color intentionally</li>
                <li>• Avoid overly saturated colors unless there's a reason</li>
                <li>• Keep contrast accessible</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // Slide 7: Reducing Noise
    {
      id: 'reducing-noise',
      title: 'Reducing Noise',
      bgGradient: 'from-gray-700 to-gray-900',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">Reducing Noise</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border-2 border-white/20">
              <ul className="space-y-4 text-xl text-left">
                <li>• Remove icons that don't add meaning</li>
                <li>• Remove borders where spacing can separate elements</li>
                <li>• Keep shadows light and consistent</li>
                <li>• Don't add visual details if they aren't doing anything</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // Slide 8: How to Apply This
    {
      id: 'how-to-apply',
      title: 'How to Apply This',
      bgGradient: 'from-blue-600 to-indigo-700',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">How to Apply This</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border-2 border-white/20">
              <p className="text-2xl mb-8 text-center">Before designing or improving a screen, decide:</p>
              
              <ul className="space-y-4 text-xl text-left mb-8">
                <li>• What should users notice first</li>
                <li>• What should feel secondary</li>
                <li>• What should stay subtle</li>
              </ul>
              
              <div className="bg-yellow-500/20 rounded-lg p-6 border-2 border-yellow-400">
                <p className="text-lg">Then apply hierarchy, spacing, color, and typography to express that.</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 9: The Prompt
    {
      id: 'the-prompt',
      title: 'The UI Overhaul Prompt',
      bgGradient: 'from-violet-600 to-purple-700',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8 text-center">A Prompt You Should Use</h2>
          <p className="text-2xl mb-12 text-center text-purple-200">To Overhaul Customer-Facing UI</p>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border-2 border-white/20">
              <p className="text-xl mb-6 text-center">If your UI feels messy or inconsistent, use this as the baseline:</p>
              
              <h3 className="text-3xl font-bold mb-6 text-center text-yellow-300">Notion × Apple Hybrid</h3>
              
              <div className="space-y-6 text-left">
                <div>
                  <h4 className="text-xl font-bold mb-3">Layout & Structure</h4>
                  <ul className="space-y-2 text-lg">
                    <li>• Minimalist, modular layout</li>
                    <li>• Clean, calm aesthetic</li>
                    <li>• Plenty of white space</li>
                    <li>• Off-white, light gray, muted neutrals</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-3">Typography</h4>
                  <ul className="space-y-2 text-lg">
                    <li>• Use SF Pro + Inter</li>
                    <li>• Clear hierarchy through size, weight, spacing</li>
                    <li>• No heavy borders or loud colors for structure</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-3">Interactions</h4>
                  <ul className="space-y-2 text-lg">
                    <li>• Smooth, subtle motion</li>
                    <li>• Light shadows</li>
                    <li>• Rounded corners</li>
                    <li>• Consistent padding</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-500/20 rounded-lg p-6 border-2 border-yellow-400 mt-6">
                  <h4 className="text-xl font-bold mb-2">Overall Tone</h4>
                  <p className="text-lg">A stable, quiet interface that feels clean, readable, and human. Nothing loud or distracting.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 10: Practice
    {
      id: 'practice',
      title: "Let's Work on the Projects!",
      bgGradient: 'from-teal-600 to-cyan-700',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12">Let's Work on the Projects!</h2>
        </div>
      )
    }
  ];

  // Handle scroll to navigate slides
  useEffect(() => {
    const handleScroll = () => {
      const slideElements = document.querySelectorAll('[data-slide-index]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      let currentSlideIndex = 0;
      slideElements.forEach((element, index) => {
        const slideTop = element.offsetTop;
        const slideBottom = slideTop + element.offsetHeight;
        
        if (scrollPosition >= slideTop && scrollPosition < slideBottom) {
          currentSlideIndex = index;
        }
      });
      
      setCurrentSlide(currentSlideIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slides.length]);

  // Smooth scroll to specific slide
  const scrollToSlide = (slideIndex) => {
    const slideElement = document.querySelector(`[data-slide-index="${slideIndex}"]`);
    if (slideElement) {
      slideElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="relative">
      <style>{customStyles}</style>
      
      {/* Slides */}
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

      {/* Navigation and Progress indicator */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center space-x-4 bg-black/30 backdrop-blur rounded-full px-6 py-3">
          {/* Navigation dots */}
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white shadow-lg scale-125' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Progress text */}
          <div className="w-px h-4 bg-white/30"></div>
          <span className="text-white text-sm font-medium">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Class20Slides;

