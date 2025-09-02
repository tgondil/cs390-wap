import React, { useEffect, useState } from 'react';
import untrustedImage from './untrusted.png';
import catImage from './cat.jpg';

const customStyles = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in { animation: fade-in 0.5s ease-out; }
`;

const CodeBlock = ({ code, language = '', filename = '', className = '' }) => {
  return (
    <div className="relative group">
      {filename && (
        <div className="bg-gray-800 px-4 py-2 text-sm text-gray-300 rounded-t-lg border-b border-gray-600">
          {filename}
        </div>
      )}
      <div className={`bg-gray-900 rounded-lg ${filename ? 'rounded-t-none' : ''} p-4 relative ${className}`}>
        <pre className="text-white font-mono text-sm overflow-x-auto whitespace-pre-wrap">
          {code}
        </pre>
      </div>
    </div>
  );
};

const PSOUntrustedSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'pso-2-title',
      title: 'PSO 2',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center">
            <div className="mx-auto max-w-2xl">
              <div className="bg-white/10 backdrop-blur rounded-3xl p-12 border border-white/20">
                <h1 className="text-6xl font-extrabold tracking-tight">PSO 2</h1>
                <p className="text-white/80 mt-4 text-2xl">Untrusted</p>
                <p className="text-white/60 mt-2 text-lg">JavaScript Puzzle Game</p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-700 to-blue-700'
    },
    {
      id: 'icebreaker-set-1',
      title: '',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold">Discuss!</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
            <div className="text-center">
              <img 
                src={catImage} 
                alt="A cute cat from our class" 
                className="rounded-xl shadow-2xl w-full max-h-[32rem] object-cover border border-white/20"
              />
              <p className="text-white/70 mt-3 text-sm">A furry friend from our class!</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-10">
              <ul className="space-y-4 text-white/95 text-2xl leading-relaxed">
                <li>• If you could instantly have a pet that takes zero work, what would you pick?</li>
                <li>• If you could only eat one snack for the rest of the semester, what would it be?</li>
                <li>• What's the most random item in your backpack or room right now?</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-blue-600'
    },
    {
      id: 'icebreaker-set-2',
      title: '',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold">Discuss!</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur rounded-xl p-10">
            <ul className="space-y-4 text-white/95 text-2xl leading-relaxed">
              <li>• If you woke up and your screen showed cryptic instructions from a stranger, would you follow them?</li>
              <li>• Would you rather get lost in a giant maze or a locked room with no windows?</li>
              <li>• Would you rather have a perfect map of the system you're trapped in, or the power to rewrite one of its rules?</li>
            </ul>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'what-is-untrusted',
      title: 'What is Untrusted?',
            content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold mb-4">🕹️ Untrusted</h2>
            <p className="text-xl text-white/80">Edit JavaScript → Help character escape</p>
          </div>
          <div className="text-center mb-8">
            <img 
              src={untrustedImage} 
              alt="Untrusted game screenshot" 
              className="rounded-xl shadow-2xl max-w-4xl w-full h-auto border border-white/20 mx-auto"
            />
            <p className="text-white/70 mt-4 text-lg">The actual Untrusted game interface</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-xl font-bold mb-2">Goal</h3>
              <p className="text-white/90">Make player reach exit</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">✏️</div>
              <h3 className="text-xl font-bold mb-2">Edit</h3>
              <p className="text-white/90">Only non-red code sections</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="text-xl font-bold mb-2">Tools</h3>
              <p className="text-white/90">Game API functions</p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-pink-600'
    },
    {
      id: 'pso-goals',
      title: 'PSO Goals',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold mb-4">📋 PSO Goals</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-center">
                <div className="text-6xl mb-6">⚡</div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-300">Get Familiar with JavaScript</h3>
                <p className="text-white/90 text-lg">
                  Practice core JavaScript concepts through hands-on puzzle solving
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-center">
                <div className="text-6xl mb-6">📚</div>
                <h3 className="text-2xl font-bold mb-4 text-blue-300">Learn to Read Documentation</h3>
                <p className="text-white/90 text-lg">
                  Develop skills to understand and use API documentation effectively
                </p>
              </div>
            </div>
            
          </div>
        </div>
      ),
      bgGradient: 'from-yellow-600 to-blue-600'
    },
    {
      id: 'documentation-importance',
      title: 'Documentation is Your Best Friend',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold mb-4">📚 Read First, Code Second</h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-blue-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl mb-2">📖</div>
                <h4 className="font-bold mb-2">Read Instructions</h4>
                <p className="text-sm text-white/80">Level objective & constraints</p>
              </div>
              <div className="bg-green-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl mb-2">🔍</div>
                <h4 className="font-bold mb-2">Study Level</h4>
                <p className="text-sm text-white/80">Understand the map layout</p>
              </div>
              <div className="bg-purple-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h4 className="font-bold mb-2">Check API</h4>
                <p className="text-sm text-white/80">Available functions & examples</p>
              </div>
              <div className="bg-orange-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl mb-2">💡</div>
                <h4 className="font-bold mb-2">Plan Solution</h4>
                <p className="text-sm text-white/80">Then start coding</p>
              </div>
            </div>
            <div className="bg-orange-500/20 border border-orange-400/30 rounded-xl p-6 text-center">
              <div className="text-3xl mb-3">⏱️</div>
              <h4 className="text-xl font-bold mb-2">Spend 2-3 minutes reading docs first</h4>
              <p className="text-white/90">Documentation contains hints about which functions to use!</p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-emerald-600 to-cyan-600'
    },
    {
      id: 'api-essentials',
      title: 'Essential API Methods',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold">Essential API Methods</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🗺️</div>
              <h4 className="text-xl font-bold mb-3">Map Info</h4>
              <CodeBlock code={`map.getWidth()
map.getHeight()`} />
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🧍</div>
              <h4 className="text-xl font-bold mb-3">Place Player</h4>
              <CodeBlock code={`map.placePlayer(x, y)`} />
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🧱</div>
              <h4 className="text-xl font-bold mb-3">Place Objects</h4>
              <CodeBlock code={`map.placeObject(x, y, 'exit')
map.placeObject(x, y, 'block')`} />
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-teal-600 to-emerald-600'
    },
    {
      id: 'debugging-approach',
      title: 'Debugging Your Solutions',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold">Debugging Your Solutions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🔬</div>
              <h4 className="text-xl font-bold mb-3">Start Simple</h4>
              <CodeBlock code={`map.placePlayer(1, 1);
map.placeObject(5, 5, 'exit');`} />
              <p className="text-sm text-white/80 mt-2">Test basics first</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">👀</div>
              <h4 className="text-xl font-bold mb-3">Visual Check</h4>
              <div className="text-white/90 text-sm space-y-1">
                <p>• See player? ✓</p>
                <p>• See exit? ✓</p>
                <p>• Can walk there? ✓</p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">🔄</div>
              <h4 className="text-xl font-bold mb-3">Add & Test</h4>
              <div className="text-white/90 text-sm space-y-1">
                <p>• One change at a time</p>
                <p>• Test immediately</p>
                <p>• If broken, undo</p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-purple-600'
    },
    {
      id: 'common-mistakes',
      title: 'Common Mistakes & How to Avoid Them',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold">Common Mistakes & How to Avoid Them</h2>
          </div>
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-6">
              <h4 className="text-2xl font-bold mb-4 text-center">❌ Why Games Freeze</h4>
              <div className="text-center mb-4">
                <p className="text-white/90">The #1 cause: <strong>Too many operations in loops</strong></p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-red-200 mb-3 font-semibold">❌ Dangerous Pattern:</p>
                  <CodeBlock code={`function startLevel(map) {
  // This nested loop is DANGEROUS!
  // Example: 50x50 map = 2,500 iterations
  // 100x100 map = 10,000 iterations
  
  for (let x = 0; x < map.getWidth(); x++) {
    for (let y = 0; y < map.getHeight(); y++) {
      map.placeObject(x, y, 'block');
      // Browser freezes trying to create 
      // thousands of objects at once
    }
  }
}`} />
                </div>
                <div>
                  <p className="text-green-200 mb-3 font-semibold">✅ Safe Pattern:</p>
                  <CodeBlock code={`function startLevel(map) {
  // Limit your loops with Math.min()
  // This will never exceed 10 iterations
  
  let safeWidth = Math.min(10, map.getWidth());
  
  for (let x = 1; x < safeWidth; x++) {
    map.placeObject(x, 3, 'block');
  }
  
  // Creates maximum 9 blocks - safe!
}`} />
                </div>
              </div>
            </div>
                                     <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-6">
              <h4 className="text-2xl font-bold mb-4 text-center">⚠️ Think About Coordinates</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <h5 className="font-bold mb-2 text-red-200">Map Coordinates</h5>
                   <CodeBlock code={`// Map is like a grid
// (0,0) is top-left corner
// (width-1, height-1) is bottom-right

map.getWidth()  // e.g., returns 50
map.getHeight() // e.g., returns 25

// Valid coordinates: 0 to width-1, 0 to height-1`} />
                 </div>
                 <div className="bg-white/10 rounded-lg p-4">
                   <h5 className="font-bold mb-2 text-red-200">Safe Placement</h5>
                   <CodeBlock code={`// Always check bounds first
if (x >= 0 && x < map.getWidth() && 
    y >= 0 && y < map.getHeight()) {
  map.placeObject(x, y, 'block');
}

// Or use safe ranges
for (let x = 1; x < map.getWidth() - 1; x++) {
  // Safe to place here
}`} />
                 </div>
               </div>
             </div>
          </div>
        </div>
      ),
      bgGradient: 'from-rose-600 to-orange-600'
    },
    {
      id: 'essential-patterns',
      title: 'Essential Patterns for Success',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold">Patterns You'll Use Often</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h4 className="text-xl font-bold mb-3">Safe Loops</h4>
                <CodeBlock filename="safe-loops.js" language="javascript" code={`// Always bound your loops
for (let x = 0; x < Math.min(20, map.getWidth()); x++) {
  // Safe to place objects here
}

// Or use specific ranges
for (let y = 5; y < 10; y++) {
  map.placeObject(3, y, 'block');
}`} />
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h4 className="text-xl font-bold mb-3">Smart Placement</h4>
                <CodeBlock filename="placement.js" language="javascript" code={`// Safe exit placement
let exitX = map.getWidth() - 2;
let exitY = map.getHeight() - 2;
map.placeObject(exitX, exitY, 'exit');

// Check before placing
if (x > 0 && x < map.getWidth() && y > 0 && y < map.getHeight()) {
  map.placeObject(x, y, 'block');
}`} />
              </div>
            </div>
            <div className="bg-blue-500/20 border border-blue-400/30 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-3 text-center">💡 Pro Tip: Start Simple</h4>
              <p className="text-center text-white/90 text-lg">
                First, just place a player and exit. Make sure that works. Then add complexity.
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-emerald-600 to-teal-600'
    },
    {
      id: 'teamwork-strategy',
      title: 'Pair Programming Strategy',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold">Pair Programming Strategy</h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="text-xl font-bold mb-3">Driver</h4>
                <div className="text-white/90 space-y-1 text-sm">
                  <p>• Types code</p>
                  <p>• Explains actions</p>
                  <p>• Small changes only</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">🧭</div>
                <h4 className="text-xl font-bold mb-3">Navigator</h4>
                <div className="text-white/90 space-y-1 text-sm">
                  <p>• Reads instructions</p>
                  <p>• Spots bugs</p>
                  <p>• Suggests next steps</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-500/20 border border-blue-400/30 rounded-xl p-6 text-center">
              <div className="text-3xl mb-2">🔄</div>
              <h4 className="text-xl font-bold">Switch Every 5-10 Minutes</h4>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-sky-600 to-blue-600'
    },
    {
      id: 'playtime',
      title: 'Let\'s play!',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-4">🚀 Ready to Start?</h2>
            <div className="bg-blue-500/20 border border-blue-400/30 rounded-xl p-4 mb-6">
              <h3 className="text-xl font-bold mb-2">🎯 Goal: Complete Levels 1-11</h3>
              <p className="text-white/90">
                Levels 12+ become significantly harder and require advanced concepts. 
                Focus on mastering the first 11 levels - they teach all the core patterns you need!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <a href="https://alexnisnevich.github.io/untrusted/" target="_blank" rel="noreferrer" className="block bg-white/10 backdrop-blur p-8 rounded-xl hover:bg-white/15 transition border border-white/20">
                <div className="text-4xl mb-4">🎮</div>
                <div className="text-2xl font-semibold mb-2">Play Untrusted</div>
                <div className="text-white/80">alexnisnevich.github.io/untrusted</div>
                <div className="mt-4 bg-green-500/20 text-green-200 px-4 py-2 rounded-lg text-sm">
                  Click to open game →
                </div>
              </a>
              <div className="bg-white/10 backdrop-blur p-8 rounded-xl border border-white/20">
                <div className="text-4xl mb-4">📋</div>
                <div className="text-2xl font-semibold mb-4">Remember</div>
                                 <ul className="text-white/90 space-y-2 text-left">
                   <li>• Pair up and switch roles regularly</li>
                   <li>• Read level instructions first</li>
                   <li>• Start simple, add complexity gradually</li>
                   <li>• Use visual feedback to debug</li>
                   <li>• No AI assistance</li>
                 </ul>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-indigo-600'
    }
  ];

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

export default PSOUntrustedSlides; 