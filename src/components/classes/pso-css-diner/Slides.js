import React, { useEffect, useState } from 'react';

// Custom CSS for animations
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

const PSOCSSDINERSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'pso-1-title',
      title: 'PSO 1',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center">
            <div className="mx-auto max-w-2xl">
              <div className="bg-white/10 backdrop-blur rounded-3xl p-12 border border-white/20">
                <h1 className="text-6xl font-extrabold tracking-tight">PSO 1</h1>
                <div className="mt-4 flex items-center justify-center space-x-2 text-white/70">
                  <span className="inline-block w-2 h-2 rounded-full bg-white/50"></span>
                  <span className="inline-block w-2 h-2 rounded-full bg-white/50"></span>
                  <span className="inline-block w-2 h-2 rounded-full bg-white/50"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-700 to-blue-700'
    },
    {
      id: 'partner-warmup',
      title: '',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold">Discuss!</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur rounded-xl p-10">
            <ul className="space-y-4 text-white/95 text-2xl leading-relaxed">
              <li>• What’s one thing people must see if they visit your hometown?</li>
              <li>• If your hometown had a personality, how would you describe it?</li>
              <li>• What’s something your hometown does better than anywhere else?</li>
            </ul>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-blue-600'
    },
    {
      id: 'food-questions',
      title: '',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold">Discuss!</h2>
          </div>
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur rounded-xl p-10">
            <ul className="space-y-4 text-white/95 text-2xl leading-relaxed">
              <li>• What’s your favourite restaurant from back home? Why?</li>
              <li>• Is there a snack or drink that instantly reminds you of where you grew up?</li>
              <li>• If I visited your hometown, what would you insist I try first?</li>
            </ul>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'what-is-css-diner',
      title: 'What is CSS Diner?',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold mb-3">🍽️ CSS Diner</h2>
            <p className="text-xl text-white/80">A game where you write CSS selectors to pick the right items on a table.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-2">Goal</h3>
              <p className="text-white/90">Write a CSS selector that matches only the highlighted food items.</p>
              <div className="mt-4">
                <CodeBlock filename="example.html" language="html" code={`<plate>
  <apple class="small" />
  <pickle id="best" />
  <apple />
</plate>`} />
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-2">How it works</h3>
              <ul className="space-y-2 text-white/90">
                <li>• You see a table with items (plates, apples, pickles, bentos)</li>
                <li>• You get an instruction (e.g., “Select all apples on plates”)</li>
                <li>• You write a selector to match the correct items</li>
                <li>• If your selector matches exactly, you pass the level ✅</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-pink-600'
    },
    {
      id: 'selectors-basics',
      title: 'Selectors: Basics',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h4 className="text-xl font-bold mb-3">Element</h4>
              <p className="text-white/90 mb-3">Matches by tag name.</p>
              <CodeBlock filename="selector.css" language="css" code={`plate { outline: 2px solid #60a5fa; }
apple { outline: 2px solid #34d399; }`} />
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h4 className="text-xl font-bold mb-3">Class</h4>
              <p className="text-white/90 mb-3">Prefix with a dot.</p>
              <CodeBlock filename="selector.css" language="css" code={`.small { outline: 2px dashed #fbbf24; }`} />
              <CodeBlock filename="html" language="html" className="mt-3" code={`<apple class="small" />`} />
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h4 className="text-xl font-bold mb-3">ID</h4>
              <p className="text-white/90 mb-3">Prefix with a hash.</p>
              <CodeBlock filename="selector.css" language="css" code={`#best { outline: 2px solid #ef4444; }`} />
              <CodeBlock filename="html" language="html" className="mt-3" code={`<pickle id="best" />`} />
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-teal-600 to-emerald-600'
    },
    {
      id: 'combinators',
      title: 'Combinators: Descendant, Child, Siblings',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h4 className="text-xl font-bold mb-3">Descendant</h4>
              <p className="text-white/90 mb-3">Any level inside</p>
              <CodeBlock filename="selector.css" language="css" code={`plate apple { /* apples anywhere inside plates */ }`} />
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h4 className="text-xl font-bold mb-3">Child</h4>
              <p className="text-white/90 mb-3">Direct children only</p>
              <CodeBlock filename="selector.css" language="css" code={`plate > apple { /* apples directly on plates */ }`} />
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h4 className="text-xl font-bold mb-3">Siblings</h4>
              <p className="text-white/90 mb-3">Adjacent or general</p>
              <CodeBlock filename="selector.css" language="css" code={`plate + apple { /* apple immediately after a plate */ }
plate ~ apple { /* apples after a plate */ }`} />
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-rose-600 to-orange-600'
    },
    {
      id: 'pseudo-classes',
      title: 'Pseudo-classes commonly used',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h4 className="text-xl font-bold mb-3">Children positions</h4>
              <CodeBlock filename="selector.css" language="css" code={`apple:first-child {}
apple:last-child {}
apple:only-child {}
apple:nth-child(2) {}
apple:nth-child(odd) {}
apple:nth-child(2n) {}`} />
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h4 className="text-xl font-bold mb-3">Chaining & attributes</h4>
              <CodeBlock filename="selector.css" language="css" code={`apple.small { /* class on element */ }
#best.pickle { /* id + element */ }
[aria-hidden] { /* has attribute */ }
[role="menu"] { /* attr equals */ }`} />
              <p className="text-white/80 mt-3">Tip: You can combine element, class, id, and attributes.</p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-fuchsia-600 to-purple-600'
    },
    {
      id: 'specificity-tips',
      title: 'Specificity & Tips',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h4 className="text-xl font-bold mb-3">Specificity (power levels)</h4>
              <ul className="space-y-2 text-white/90">
                <li>• ID (#) &gt; Class (.) &gt; Element</li>
                <li>• More specific wins when matching the same element</li>
                <li>• In CSS Diner, match exactly what’s highlighted</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h4 className="text-xl font-bold mb-3">Strategy</h4>
              <ul className="space-y-2 text-white/90">
                <li>• Start simple (element or class)</li>
                <li>• Add combinators or pseudo-classes as needed</li>
                <li>• Read the DOM structure carefully</li>
                <li>• Use chaining to narrow your match</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-sky-600 to-cyan-600'
    },
    {
      id: 'playtime',
      title: 'Let’s play!',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-3">🚀 Play CSS Diner</h2>
            <p className="text-white/80 mb-8">Pair up and try to complete all 32 levels.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="https://flukeout.github.io/" target="_blank" rel="noreferrer" className="block bg-white/10 backdrop-blur p-6 rounded-xl hover:bg-white/15 transition">
                <div className="text-3xl mb-2">🔗</div>
                <div className="text-xl font-semibold">flukeout.github.io (CSS Diner)</div>
                <div className="text-white/80">Official game link</div>
              </a>
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl text-left">
                <div className="text-3xl mb-2">💡</div>
                <div className="text-xl font-semibold mb-2">Rules Recap</div>
                <ul className="text-white/90 space-y-2 text-left">
                  <li>• Match only highlighted items</li>
                  <li>• Use the simplest selector possible</li>
                  <li>• Verify by checking the DOM structure</li>
                  <li>• Work as a pair and take turns typing</li>
                  <li>• No using AI</li>
                  <li>• All explanations you need are on the website</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-amber-600 to-yellow-600'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const slideElements = document.querySelectorAll('[data-slide-index]');
      const scrollPosition = window.scrollY + window.innerHeight / 2; // center of viewport
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

export default PSOCSSDINERSlides; 