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

const Class19Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title Slide with GeoGuessr
    {
      id: 'title-slide',
      title: 'CS390 Web Applications Programming',
      bgGradient: 'from-blue-600 to-purple-700',
      content: (
        <div className="text-center space-y-12">
          <style>{customStyles}</style>
          <div className="space-y-8">
            <h1 className="text-6xl font-bold text-white mb-6">CS390</h1>
            <h2 className="text-4xl font-semibold text-blue-100 mb-4">
              Web Applications Programming
            </h2>
            <div className="text-2xl text-blue-200">
              Class 19: Deployment & Product Planning
            </div>
          </div>
          
          <div className="mt-16">
            <div className="text-2xl font-medium text-white">Tanay Gondil</div>
          </div>
        </div>
      )
    },

    // Slide 2: GeoGuessr
    {
      id: 'geoguessr',
      title: 'GeoGuessr Game',
      bgGradient: 'from-green-600 to-emerald-700',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <div className="space-y-12">
            <h2 className="text-5xl font-extrabold mb-8">🎮 Let's Start with a Game!</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="bg-white/20 backdrop-blur rounded-xl p-8 border-2 border-white/30">
                <p className="text-2xl mb-6">Join the GeoGuessr challenge!</p>
                <a 
                  href="https://www.geoguessr.com/join/HHPL4?s=Url" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-5 px-10 rounded-lg text-2xl transition-all transform hover:scale-105 shadow-lg"
                >
                  Join GeoGuessr Game →
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 3: Netlify
    {
      id: 'netlify',
      title: 'Deploying to Netlify',
      bgGradient: 'from-teal-600 to-cyan-800',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🌐 Netlify</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border-2 border-white/20">
              <h3 className="text-3xl font-bold mb-6 text-center">Perfect for React Frontends</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-500/20 rounded-lg p-6 border border-green-400">
                  <h4 className="text-xl font-bold mb-4 text-green-300">✅ Why Netlify?</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Zero-config deployment</li>
                    <li>• Automatic HTTPS & CDN</li>
                    <li>• Instant previews for every commit</li>
                    <li>• Built-in CI/CD</li>
                    <li>• Free tier is generous</li>
                    <li>• Optimized for React/SPAs</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/20 rounded-lg p-6 border border-blue-400">
                  <h4 className="text-xl font-bold mb-4 text-blue-300">📦 Quick Setup</h4>
                  <ol className="space-y-2 text-sm">
                    <li>1. Push your React app to GitHub</li>
                    <li>2. Connect Netlify to your repo</li>
                    <li>3. Add environment variables</li>
                    <li>4. Deploy! (takes ~2 minutes)</li>
                  </ol>
                </div>
              </div>
              
              <div className="bg-yellow-500/20 rounded-lg p-6 border-2 border-yellow-400">
                <p className="text-lg font-semibold mb-2">💡 Pro Tip:</p>
                <p className="text-sm">Make sure your <code className="bg-black/30 px-2 py-1 rounded">package.json</code> has a <code className="bg-black/30 px-2 py-1 rounded">"build"</code> script. Netlify will run it automatically!</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 4: Railway
    {
      id: 'railway',
      title: 'Deploying Backend to Railway',
      bgGradient: 'from-orange-600 to-red-700',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🚂 Railway</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border-2 border-white/20">
              <h3 className="text-3xl font-bold mb-6 text-center">Perfect for Express Backends</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-orange-500/20 rounded-lg p-6 border border-orange-400">
                  <h4 className="text-xl font-bold mb-4 text-orange-300">✅ Why Railway?</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Simple Node.js deployment</li>
                    <li>• Automatic environment detection</li>
                    <li>• Built-in database support</li>
                    <li>• Easy environment variables</li>
                    <li>• Great free tier for students</li>
                    <li>• One-click deployments</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/20 rounded-lg p-6 border border-red-400">
                  <h4 className="text-xl font-bold mb-4 text-red-300">📦 Quick Setup</h4>
                  <ol className="space-y-2 text-sm">
                    <li>1. Connect Railway to GitHub</li>
                    <li>2. Select your Express repo</li>
                    <li>3. Add MongoDB connection string</li>
                    <li>4. Add JWT secret & API keys</li>
                    <li>5. Deploy! (takes ~3 minutes)</li>
                  </ol>
                </div>
              </div>
              
              <div className="bg-yellow-500/20 rounded-lg p-6 border-2 border-yellow-400">
                <p className="text-lg font-semibold mb-2">💡 Pro Tip:</p>
                <p className="text-sm">Make sure your Express app listens on <code className="bg-black/30 px-2 py-1 rounded">process.env.PORT || 3000</code>. Railway will set the PORT automatically!</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 5: PRD (Product Requirements Document)
    {
      id: 'prd',
      title: 'PRD: Your Secret Weapon',
      bgGradient: 'from-indigo-600 to-purple-700',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">📋 Product Requirements Document</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border-2 border-white/20">
              <h3 className="text-3xl font-bold mb-8 text-center text-yellow-300">Why PRD for Your Initial One-Shot?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-purple-500/20 rounded-lg p-6 border border-purple-400">
                  <h4 className="text-xl font-bold mb-4 text-purple-300">🎯 Before You Code</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="text-2xl mr-2">✓</span>
                      <span><strong>Clarify goals:</strong> What problem are you solving?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-2">✓</span>
                      <span><strong>Define features:</strong> What exactly will users do?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-2">✓</span>
                      <span><strong>Set boundaries:</strong> What's in scope? What's not?</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-2">✓</span>
                      <span><strong>Align team:</strong> Everyone understands the vision</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-indigo-500/20 rounded-lg p-6 border border-indigo-400">
                  <h4 className="text-xl font-bold mb-4 text-indigo-300">🚀 Makes Your Product Better</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="text-2xl mr-2">⚡</span>
                      <span><strong>Faster development:</strong> Less back-and-forth, more building</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-2">⚡</span>
                      <span><strong>Better UX:</strong> Think through user flows first</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-2">⚡</span>
                      <span><strong>Fewer bugs:</strong> Clear requirements = fewer edge cases</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-2">⚡</span>
                      <span><strong>Stronger demo:</strong> Cohesive product, not random features</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-yellow-500/20 rounded-lg p-6 border-2 border-yellow-400">
                <p className="text-lg font-semibold mb-3">💡 The One-Shot Advantage:</p>
                <p className="text-base mb-3">When you write a PRD before your initial one-shot, you'll get a much better application right off the bat.</p>
                <ul className="text-base space-y-2 text-left">
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2">•</span>
                    <span>You'll know exactly what to build, so you won't waste time on features that don't matter</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2">•</span>
                    <span>Your code will be more organized because you've thought through the structure first</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2">•</span>
                    <span>You'll catch design flaws before coding, saving hours of refactoring later</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-300 mr-2">•</span>
                    <span>Your one-shot will feel like a complete, polished feature instead of a random prototype</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 6: Summary
    {
      id: 'summary',
      title: "Let's Get Building!",
      bgGradient: 'from-teal-600 to-cyan-700',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <div className="space-y-12">
            <h2 className="text-5xl font-extrabold mb-8">🎉 You're Ready!</h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-8 border-2 border-white/20">
                <h3 className="text-3xl font-bold mb-6">Today's Takeaways</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                  <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-400">
                    <div className="text-3xl mb-2">🌐</div>
                    <div className="font-bold mb-2">Netlify</div>
                    <div className="text-sm">Deploy your React frontend in minutes</div>
                  </div>
                  
                  <div className="bg-orange-500/20 rounded-lg p-4 border border-orange-400">
                    <div className="text-3xl mb-2">🚂</div>
                    <div className="font-bold mb-2">Railway</div>
                    <div className="text-sm">Deploy your Express backend easily</div>
                  </div>
                  
                  <div className="bg-purple-500/20 rounded-lg p-4 border border-purple-400">
                    <div className="text-3xl mb-2">📋</div>
                    <div className="font-bold mb-2">PRD First</div>
                    <div className="text-sm">Plan before you code for better products</div>
                  </div>
                </div>
              </div>
              
              <div className="text-3xl font-bold text-yellow-300 animate-float">
                Now let's talk about your projects! 💬
              </div>
            </div>
          </div>
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

export default Class19Slides;

