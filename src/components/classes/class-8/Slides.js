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
  @keyframes slide-in {
    from { transform: translateX(-100%); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  .animate-slide-in {
    animation: slide-in 0.6s ease-out;
  }
`;

// Interactive Demo Component for useEffect timing
const UseEffectTimingDemo = () => {
  const [step, setStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const steps = [
    { id: 1, title: "Component Renders", color: "bg-blue-500", description: "React processes JSX" },
    { id: 2, title: "DOM Updates", color: "bg-green-500", description: "Changes applied to DOM" },
    { id: 3, title: "useEffect Runs", color: "bg-purple-500", description: "Side effects execute" }
  ];

  const runDemo = () => {
    setIsRunning(true);
    setStep(0);
    
    const timer = setInterval(() => {
      setStep(prev => {
        if (prev >= 3) {
          setIsRunning(false);
          clearInterval(timer);
          return 0;
        }
        return prev + 1;
      });
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <button 
          onClick={runDemo}
          disabled={isRunning}
          className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-500 px-8 py-4 rounded-lg font-bold text-white text-xl transition-colors"
        >
          {isRunning ? "Running Demo..." : "▶️ Run Timing Demo"}
        </button>
      </div>

      <div className="flex justify-center space-x-8">
        {steps.map((stepItem, index) => (
          <div key={stepItem.id} className="text-center">
            <div className={`w-32 h-32 rounded-full ${stepItem.color} ${
              step === index + 1 ? 'animate-pulse-glow' : step > index + 1 ? 'opacity-100' : 'opacity-30'
            } flex items-center justify-center mb-4 transition-all duration-500`}>
              <div className="text-white font-bold text-4xl">{stepItem.id}</div>
            </div>
            <h4 className="text-white font-bold text-lg mb-2">{stepItem.title}</h4>
            <p className="text-white/70 text-sm">{stepItem.description}</p>
          </div>
        ))}
      </div>

      {step > 0 && (
        <div className="mt-8 bg-white/10 rounded-lg p-6 animate-slide-in">
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-2">
              Currently: {steps[step - 1]?.title}
            </div>
            <div className="text-white/70">
              {steps[step - 1]?.description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Interactive Dependency Array Demo
const DependencyArrayDemo = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('React');
  const [effectRuns, setEffectRuns] = useState(0);
  const [selectedPattern, setSelectedPattern] = useState('empty');

  useEffect(() => {
    if (selectedPattern === 'empty') {
      setEffectRuns(1); // Only runs once
    }
  }, []);

  useEffect(() => {
    if (selectedPattern === 'count') {
      setEffectRuns(prev => prev + 1);
    }
  }, [count]);

  useEffect(() => {
    if (selectedPattern === 'both') {
      setEffectRuns(prev => prev + 1);
    }
  }, [count, name]);

  const resetDemo = () => {
    setCount(0);
    setName('React');
    setEffectRuns(0);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="bg-white/10 rounded-xl p-6 border border-white/20">
          <h4 className="text-2xl font-bold text-white mb-6">🎮 Interactive Demo</h4>
          
          <div className="space-y-4">
            <div>
              <label className="text-white font-bold block mb-2">Dependency Pattern:</label>
              <select 
                value={selectedPattern} 
                onChange={(e) => setSelectedPattern(e.target.value)}
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
              >
                <option value="empty">Empty Array []</option>
                <option value="count">Watch Count [count]</option>
                <option value="both">Watch Both [count, name]</option>
              </select>
            </div>

            <div className="space-y-3">
              <button 
                onClick={() => setCount(c => c + 1)}
                className="w-full bg-blue-500 hover:bg-blue-600 px-4 py-3 rounded font-bold text-white"
              >
                Count: {count} (Click to increment)
              </button>
              
              <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
                placeholder="Change name..."
              />
              
              <button 
                onClick={resetDemo}
                className="w-full bg-red-500 hover:bg-red-600 px-4 py-3 rounded font-bold text-white"
              >
                🔄 Reset Demo
              </button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-white/10 rounded-xl p-6 border border-white/20">
          <h4 className="text-2xl font-bold text-white mb-6">📊 Effect Runs</h4>
          
          <div className="text-center">
            <div className="text-6xl font-bold text-green-400 mb-4">{effectRuns}</div>
            <div className="text-xl text-white mb-6">Times Effect Has Run</div>
            
            <div className="bg-gray-800/50 rounded-lg p-4 font-mono text-sm text-left">
              <div className="text-green-300">useEffect(() =&gt; &#123;</div>
              <div className="ml-4 text-yellow-300">console.log('Effect runs!');</div>
              <div className="text-green-300">&#125;, {
                selectedPattern === 'empty' ? '[]' : 
                selectedPattern === 'count' ? '[count]' : 
                '[count, name]'
              });</div>
            </div>
            
            <div className="mt-4 text-sm text-white/70">
              {selectedPattern === 'empty' && "Runs only once on mount"}
              {selectedPattern === 'count' && "Runs when count changes"}
              {selectedPattern === 'both' && "Runs when count OR name changes"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Data Fetching Demo Component
const DataFetchingDemo = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const mockUsers = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Developer' },
    { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Designer' },
    { id: 3, name: 'Carol Davis', email: 'carol@example.com', role: 'Manager' }
  ];

  const simulateFetch = () => {
    setLoading(true);
    setError(null);
    setUsers([]);

    // Simulate network delay
    setTimeout(() => {
      if (Math.random() > 0.2) { // 80% success rate
        setUsers(mockUsers);
        setLoading(false);
      } else {
        setError('Failed to fetch users. Please try again.');
        setLoading(false);
      }
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <button 
          onClick={simulateFetch}
          disabled={loading}
          className="bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-500 px-8 py-4 rounded-lg font-bold text-white text-xl transition-colors"
        >
          {loading ? "🔄 Loading..." : "🌐 Fetch Users"}
        </button>
      </div>

      <div className="bg-white/10 rounded-xl p-6 border border-white/20 min-h-64">
        {loading && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4 animate-pulse">⏳</div>
            <div className="text-2xl text-blue-300 font-bold">Loading users...</div>
            <div className="text-white/70">Fetching data from API</div>
          </div>
        )}

        {error && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">❌</div>
            <div className="text-2xl text-red-300 font-bold mb-2">Error!</div>
            <div className="text-white/70">{error}</div>
          </div>
        )}

        {!loading && !error && users.length > 0 && (
          <div>
            <div className="text-center mb-6">
              <div className="text-4xl mb-2">✅</div>
              <div className="text-2xl text-green-300 font-bold">Success!</div>
              <div className="text-white/70">Fetched {users.length} users</div>
            </div>
            
            <div className="space-y-4">
              {users.map(user => (
                <div key={user.id} className="bg-gray-800/50 rounded-lg p-4 flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {user.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-bold">{user.name}</div>
                    <div className="text-white/70 text-sm">{user.email}</div>
                  </div>
                  <div className="bg-purple-500/30 text-purple-300 px-3 py-1 rounded-full text-sm">
                    {user.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!loading && !error && users.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🎯</div>
            <div className="text-2xl text-white font-bold">Ready to fetch!</div>
            <div className="text-white/70">Click the button above to load users</div>
          </div>
        )}
      </div>
    </div>
  );
};

const Class8Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title Slide
    {
      id: 'title-slide',
      title: 'CS390 Web Applications Programming',
      content: (
        <div className="text-center space-y-12">
          <style>{customStyles}</style>
          <div className="space-y-8">
            <h1 className="text-6xl font-bold text-white mb-6">CS390</h1>
            <h2 className="text-4xl font-semibold text-blue-100 mb-4">
              Web Applications Programming
            </h2>
            <div className="text-2xl text-blue-200">
              Class 8: useEffect & Side Effects
            </div>
          </div>
          
          <div className="mt-16">
            <div className="text-2xl font-medium text-white">Tanay Gondil</div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-purple-700'
    },

    // Slide 2: Discuss
    {
      id: 'discuss-hobbies',
      title: 'Discuss!',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12">Discuss!</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <div className="text-left space-y-6 text-xl leading-relaxed">
                <div className="text-white font-semibold">
                  What's a hobby or activity you've picked up recently that you're excited about?
                </div>
                
                <div className="text-white font-semibold">
                  If you could instantly become an expert at any skill, what would you choose?
                </div>
                
                <div className="text-white font-semibold">
                  What's something you used to love doing as a kid that you'd like to try again?
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-pink-600'
    },

    // Slide 3: What We Know - State Review
    {
      id: 'what-we-know-state',
      title: 'What We Know: State',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">What We Know</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📊</div>
            <h3 className="text-3xl font-bold mb-12">State Management</h3>
            
            <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400 mb-8">
              <h4 className="text-2xl font-bold text-green-300 mb-6">✅ State is Data That Lives in Your Component</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-600/20 rounded-lg p-6">
                  <div className="text-4xl mb-4">💾</div>
                  <div className="text-lg font-bold mb-2">Internal Data</div>
                  <div className="text-green-200">Belongs to the component</div>
                </div>
                
                <div className="bg-green-600/20 rounded-lg p-6">
                  <div className="text-4xl mb-4">🔄</div>
                  <div className="text-lg font-bold mb-2">Triggers Re-renders</div>
                  <div className="text-green-200">UI updates automatically</div>
                </div>
                
                <div className="bg-green-600/20 rounded-lg p-6">
                  <div className="text-4xl mb-4">🎯</div>
                  <div className="text-lg font-bold mb-2">Predictable</div>
                  <div className="text-green-200">Same input = same output</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-lg p-6">
              <div className="text-xl font-mono bg-gray-800/50 rounded p-4">
                const [count, setCount] = useState(0)
              </div>
              <div className="text-blue-200 mt-3">Simple and straightforward! ✨</div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-emerald-600'
    },

    // Slide 4: The Problem - React's Purity Principle
    {
      id: 'the-problem',
      title: 'The Problem - Breaking React\'s Purity',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">The Purity Problem</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">⚖️</div>
            <h3 className="text-3xl font-bold mb-12 text-red-300">React Components Must Be Pure Functions</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <h4 className="text-2xl font-bold text-green-300 mb-6">✅ Pure Component</h4>
                <div className="space-y-6">
                  <div className="bg-green-600/20 rounded-lg p-6">
                    <div className="text-4xl mb-4">🎯</div>
                    <div className="text-lg font-bold mb-2">Predictable</div>
                    <div className="text-green-200 text-sm">Same props + state = Same output</div>
                  </div>
                  <div className="bg-green-600/20 rounded-lg p-6">
                    <div className="text-4xl mb-4">🔒</div>
                    <div className="text-lg font-bold mb-2">No Side Effects</div>
                    <div className="text-green-200 text-sm">Doesn't change external world</div>
                  </div>
                  <div className="bg-green-600/20 rounded-lg p-6">
                    <div className="text-4xl mb-4">⚡</div>
                    <div className="text-lg font-bold mb-2">Fast Re-renders</div>
                    <div className="text-green-200 text-sm">React can optimize safely</div>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/20 rounded-xl p-8 border-2 border-red-400">
                <h4 className="text-2xl font-bold text-red-300 mb-6">❌ Impure Component</h4>
                <div className="space-y-6">
                  <div className="bg-red-600/20 rounded-lg p-6">
                    <div className="text-4xl mb-4">🎲</div>
                    <div className="text-lg font-bold mb-2">Unpredictable</div>
                    <div className="text-red-200 text-sm">Different results each render</div>
                  </div>
                  <div className="bg-red-600/20 rounded-lg p-6">
                    <div className="text-4xl mb-4">💥</div>
                    <div className="text-lg font-bold mb-2">Side Effects</div>
                    <div className="text-red-200 text-sm">API calls, DOM changes, etc.</div>
                  </div>
                  <div className="bg-red-600/20 rounded-lg p-6">
                    <div className="text-4xl mb-4">🐌</div>
                    <div className="text-lg font-bold mb-2">Performance Issues</div>
                    <div className="text-red-200 text-sm">Infinite loops, memory leaks</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-8 border border-purple-400/30">
              <div className="text-2xl font-bold text-purple-300 mb-4">🧠 The Mental Model</div>
              <div className="text-lg text-purple-100">
                React assumes components are <strong>mathematical functions</strong>: 
                given the same inputs, they always produce the same output. 
                Side effects break this assumption and cause chaos.
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-600 to-orange-600'
    },

    // Slide 5: What Are Side Effects?
    {
      id: 'what-are-side-effects-definition',
      title: 'What Are Side Effects?',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">What Are Side Effects?</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🎯</div>
            <h3 className="text-3xl font-bold mb-12 text-blue-300">The Core Definition</h3>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 mb-8">
              <div className="text-3xl font-bold text-yellow-300 mb-6">📚 Computer Science Definition</div>
              <div className="text-2xl leading-relaxed space-y-4">
                <p>A <strong>side effect</strong> is any operation that affects something <span className="text-yellow-300">outside</span> the current function's scope.</p>
                <p>It's called a "side" effect because it happens <strong>in addition to</strong> the main purpose of the function.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-500/20 rounded-xl p-8 border border-green-400/30">
                <h4 className="text-2xl font-bold text-green-300 mb-6">✅ Pure Functions (No Side Effects)</h4>
                <div className="space-y-4 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🧮</div>
                    <div>
                      <div className="font-bold">Mathematical Operations</div>
                      <div className="text-green-200 text-sm">2 + 3 = 5 (always)</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🔄</div>
                    <div>
                      <div className="font-bold">Data Transformations</div>
                      <div className="text-green-200 text-sm">map, filter, reduce</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">📊</div>
                    <div>
                      <div className="font-bold">Calculations</div>
                      <div className="text-green-200 text-sm">Same input = Same output</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-green-600/30 rounded-lg p-4">
                  <div className="text-green-100 text-center font-bold">Predictable & Testable</div>
                </div>
              </div>

              <div className="bg-orange-500/20 rounded-xl p-8 border border-orange-400/30">
                <h4 className="text-2xl font-bold text-orange-300 mb-6">⚡ Functions with Side Effects</h4>
                <div className="space-y-4 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🌐</div>
                    <div>
                      <div className="font-bold">Network Requests</div>
                      <div className="text-orange-200 text-sm">Talking to external servers</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">📝</div>
                    <div>
                      <div className="font-bold">Writing to Storage</div>
                      <div className="text-orange-200 text-sm">Files, databases, localStorage</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🖨️</div>
                    <div>
                      <div className="font-bold">Logging/Printing</div>
                      <div className="text-orange-200 text-sm">console.log, alerts</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-orange-600/30 rounded-lg p-4">
                  <div className="text-orange-100 text-center font-bold">Unpredictable & Context-Dependent</div>
                </div>
              </div>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-8 border border-purple-400/30 mb-8">
              <div className="text-2xl font-bold text-purple-300 mb-4">🔍 How to Spot Side Effects</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-purple-600/20 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">🌍</div>
                  <div className="font-bold text-sm">Reaches Outside</div>
                  <div className="text-purple-200 text-xs">Affects external systems</div>
                </div>
                <div className="bg-purple-600/20 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">⏰</div>
                  <div className="font-bold text-sm">Time-Dependent</div>
                  <div className="text-purple-200 text-xs">Results change over time</div>
                </div>
                <div className="bg-purple-600/20 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">🎲</div>
                  <div className="font-bold text-sm">Unpredictable</div>
                  <div className="text-purple-200 text-xs">Can fail or vary</div>
                </div>
                <div className="bg-purple-600/20 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">🔗</div>
                  <div className="font-bold text-sm">Has Dependencies</div>
                  <div className="text-purple-200 text-xs">Relies on external state</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400/30">
              <div className="text-2xl font-bold text-blue-300 mb-4">💡 Key Insight</div>
              <div className="text-lg text-blue-100">
                Side effects aren't bad - they're <strong>necessary</strong> for useful applications! 
                The challenge is managing them safely and predictably.
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-cyan-600 to-blue-600'
    },

    // Slide 6: Side Effects - The Necessary Evil
    {
      id: 'side-effects-necessary-evil',
      title: 'Side Effects - The Necessary Evil',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Side Effects</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🌍</div>
            <h3 className="text-3xl font-bold mb-12 text-blue-300">Interacting with the Outside World</h3>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 mb-8">
              <div className="text-2xl font-bold text-yellow-300 mb-6">🎭 The Paradox</div>
              <div className="text-xl leading-relaxed space-y-4">
                <p>React wants <strong>pure components</strong>, but useful apps need <strong>side effects</strong>!</p>
                <p>Without side effects, your app would be a static, isolated bubble that never changes.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400/30">
                <h4 className="text-2xl font-bold text-blue-300 mb-6">🏠 Inside Component Boundary</h4>
                <div className="space-y-4 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">📊</div>
                    <div>
                      <div className="font-bold">State Updates</div>
                      <div className="text-blue-200 text-sm">Internal component data</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🎨</div>
                    <div>
                      <div className="font-bold">Rendering JSX</div>
                      <div className="text-blue-200 text-sm">Creating virtual DOM</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🧮</div>
                    <div>
                      <div className="font-bold">Calculations</div>
                      <div className="text-blue-200 text-sm">Pure transformations</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-blue-600/30 rounded-lg p-4">
                  <div className="text-blue-100 text-center font-bold">✅ Safe during render</div>
                </div>
              </div>

              <div className="bg-orange-500/20 rounded-xl p-8 border border-orange-400/30">
                <h4 className="text-2xl font-bold text-orange-300 mb-6">🌍 Outside Component Boundary</h4>
                <div className="space-y-4 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🌐</div>
                    <div>
                      <div className="font-bold">Network Requests</div>
                      <div className="text-orange-200 text-sm">Talking to servers</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🗄️</div>
                    <div>
                      <div className="font-bold">Browser APIs</div>
                      <div className="text-orange-200 text-sm">localStorage, geolocation</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">⏰</div>
                    <div>
                      <div className="font-bold">Time-based Operations</div>
                      <div className="text-orange-200 text-sm">Timers, animations</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-red-600/30 rounded-lg p-4">
                  <div className="text-red-100 text-center font-bold">⚠️ Dangerous during render</div>
                </div>
              </div>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-8 border border-purple-400/30">
              <div className="text-2xl font-bold text-purple-300 mb-4">🎯 The Solution Preview</div>
              <div className="text-lg text-purple-100">
                We need a <strong>safe space</strong> to perform side effects - 
                somewhere React expects them and can manage them properly. That's where useEffect comes in!
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-indigo-600'
    },

        // Slide 7: The Side Effects Problem in React
    {
      id: 'side-effects-problem-react',
      title: 'The Side Effects Problem in React',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">The Problem</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">💥</div>
            <h3 className="text-3xl font-bold mb-12 text-red-300">When Side Effects Meet React Components</h3>
            
            <div className="bg-red-500/20 backdrop-blur rounded-xl p-8 border-2 border-red-400 mb-8">
              <h4 className="text-2xl font-bold text-red-300 mb-6">🚫 What Happens When You Try This</h4>
              <div className="bg-gray-900/50 rounded-lg p-6 mb-6">
                <div className="text-lg font-mono text-left space-y-2">
                  <div className="text-blue-300">function UserProfile() &#123;</div>
                  <div className="ml-4 text-yellow-300">const [user, setUser] = useState(null);</div>
                  <div className="ml-4 text-red-300">{`// This runs EVERY time the component renders!`}</div>
                  <div className="ml-4 text-white">fetch('/api/user').then(setUser);</div>
                  <div className="ml-4 text-white">return &lt;div&gt;&#123;user?.name&#125;&lt;/div&gt;;</div>
                  <div className="text-blue-300">&#125;</div>
                </div>
              </div>
              
              <div className="text-2xl font-bold text-red-300 mb-4">🔄 Infinite Loop Chaos!</div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-red-600/30 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">1️⃣</div>
                  <div className="font-bold text-sm">Component Renders</div>
                  <div className="text-red-200 text-xs">Shows initial UI</div>
                </div>
                <div className="bg-red-600/30 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">2️⃣</div>
                  <div className="font-bold text-sm">Fetch Runs</div>
                  <div className="text-red-200 text-xs">API call happens</div>
                </div>
                <div className="bg-red-600/30 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">3️⃣</div>
                  <div className="font-bold text-sm">State Updates</div>
                  <div className="text-red-200 text-xs">setUser() called</div>
                </div>
                <div className="bg-red-600/30 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">🔄</div>
                  <div className="font-bold text-sm">Re-render</div>
                  <div className="text-red-200 text-xs">Back to step 1!</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-orange-500/20 rounded-xl p-8 border border-orange-400/30">
                <div className="text-4xl mb-4">🔥</div>
                <h4 className="text-xl font-bold text-orange-300 mb-4">Performance Disaster</h4>
                <div className="text-orange-200 text-sm space-y-2">
                  <p>• Infinite API calls</p>
                  <p>• Browser freezes</p>
                  <p>• Server overload</p>
                  <p>• Poor user experience</p>
                </div>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-8 border border-purple-400/30">
                <div className="text-4xl mb-4">🎲</div>
                <h4 className="text-xl font-bold text-purple-300 mb-4">Unpredictable Behavior</h4>
                <div className="text-purple-200 text-sm space-y-2">
                  <p>• Race conditions</p>
                  <p>• Inconsistent state</p>
                  <p>• Hard to debug</p>
                  <p>• Unreliable app</p>
                </div>
              </div>

              <div className="bg-yellow-500/20 rounded-xl p-8 border border-yellow-400/30">
                <div className="text-4xl mb-4">💸</div>
                <h4 className="text-xl font-bold text-yellow-300 mb-4">Resource Waste</h4>
                <div className="text-yellow-200 text-sm space-y-2">
                  <p>• Unnecessary network calls</p>
                  <p>• Memory leaks</p>
                  <p>• Battery drain</p>
                  <p>• Higher costs</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400/30">
              <div className="text-2xl font-bold text-blue-300 mb-4">🤔 The Core Issue</div>
              <div className="text-lg text-blue-100 space-y-4">
                <p>React components re-render frequently, but side effects should only happen at <strong>specific times</strong>.</p>
                <p>We need a way to <strong>control when</strong> side effects run, separate from the render cycle.</p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-600 to-orange-600'
    },

    // Slide 8: Enter useEffect - The Solution
    {
      id: 'enter-useeffect',
      title: 'Enter useEffect - The Solution',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Enter useEffect</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🪝</div>
            <h3 className="text-3xl font-bold mb-12 text-blue-300">The Hero We Need!</h3>
            
            <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400 mb-8">
              <h4 className="text-2xl font-bold text-blue-300 mb-6">✨ useEffect manages side effects safely</h4>
              
              <div className="bg-gray-900/50 rounded-lg p-6 mb-6">
                <div className="text-xl font-mono text-left space-y-2">
                  <div className="text-green-300">useEffect(() =&gt; &#123;</div>
                  <div className="ml-4 text-yellow-300">fetch('/api/users').then(setUsers);</div>
                  <div className="text-green-300">&#125;, []);</div>
                </div>
              </div>
              
              <div className="text-lg text-blue-200">
                🎯 Runs <strong>after</strong> render, not during!
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-500/20 rounded-lg p-6">
                <div className="text-4xl mb-4">🎯</div>
                <div className="text-lg font-bold mb-2">Separation</div>
                <div className="text-green-200 text-sm">Side effects separate from render</div>
              </div>
              
              <div className="bg-purple-500/20 rounded-lg p-6">
                <div className="text-4xl mb-4">⏰</div>
                <div className="text-lg font-bold mb-2">Perfect Timing</div>
                <div className="text-purple-200 text-sm">Runs after DOM updates</div>
              </div>
              
              <div className="bg-yellow-500/20 rounded-lg p-6">
                <div className="text-4xl mb-4">🧹</div>
                <div className="text-lg font-bold mb-2">Built-in Cleanup</div>
                <div className="text-yellow-200 text-sm">Automatic resource management</div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-cyan-600'
    },

    // Slide 7: useEffect Timing Demo
    {
      id: 'useeffect-timing-demo',
      title: 'useEffect Timing Demo',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">useEffect Timing</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">⏰</div>
            <h3 className="text-3xl font-bold mb-12">When Effects Actually Run</h3>
            
            <UseEffectTimingDemo />
            
            <div className="mt-12 bg-blue-500/20 rounded-xl p-8 border border-blue-400/30">
              <h4 className="text-2xl font-bold text-blue-300 mb-4">🎯 Key Insight</h4>
              <div className="text-lg text-blue-100">
                useEffect runs <strong>after</strong> the DOM is updated, ensuring you can safely 
                interact with rendered elements and won't block the user interface.
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-blue-600'
    },

    // Slide 10: useEffect Design Philosophy
    {
      id: 'useeffect-philosophy',
      title: 'useEffect Design Philosophy',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Design Philosophy</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🏛️</div>
            <h3 className="text-3xl font-bold mb-12 text-blue-300">Why useEffect Works This Way</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-green-500/20 rounded-xl p-8 border border-green-400/30">
                <div className="text-4xl mb-4">🎭</div>
                <h4 className="text-xl font-bold text-green-300 mb-4">Declarative</h4>
                <div className="text-green-200 text-sm space-y-2">
                  <p><strong>What</strong> you want to happen</p>
                  <p>Not <em>when</em> or <em>how</em></p>
                  <p>React figures out timing</p>
                </div>
              </div>
              
              <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400/30">
                <div className="text-4xl mb-4">🔄</div>
                <h4 className="text-xl font-bold text-blue-300 mb-4">Synchronization</h4>
                <div className="text-blue-200 text-sm space-y-2">
                  <p>Keep external systems <strong>in sync</strong></p>
                  <p>with component state</p>
                  <p>Automatic cleanup</p>
                </div>
              </div>
              
              <div className="bg-purple-500/20 rounded-xl p-8 border border-purple-400/30">
                <div className="text-4xl mb-4">🛡️</div>
                <h4 className="text-xl font-bold text-purple-300 mb-4">Safety First</h4>
                <div className="text-purple-200 text-sm space-y-2">
                  <p>Runs <strong>after</strong> render</p>
                  <p>Doesn't block UI</p>
                  <p>Prevents infinite loops</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 mb-8">
              <h4 className="text-2xl font-bold text-yellow-300 mb-6">🤔 Design Tradeoffs</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-lg font-bold text-green-300 mb-4">✅ Benefits</h5>
                  <ul className="space-y-2 text-left text-sm">
                    <li>• <strong>Predictable:</strong> Effects run at consistent times</li>
                    <li>• <strong>Optimizable:</strong> React can batch and optimize</li>
                    <li>• <strong>Debuggable:</strong> Clear cause and effect relationships</li>
                    <li>• <strong>Composable:</strong> Multiple effects work together</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-lg font-bold text-red-300 mb-4">⚠️ Challenges</h5>
                  <ul className="space-y-2 text-left text-sm">
                    <li>• <strong>Learning curve:</strong> Different mental model</li>
                    <li>• <strong>Dependency arrays:</strong> Easy to get wrong</li>
                    <li>• <strong>Timing:</strong> Not always intuitive when effects run</li>
                    <li>• <strong>Cleanup:</strong> Must remember to clean up resources</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-orange-500/20 rounded-xl p-8 border border-orange-400/30">
              <div className="text-2xl font-bold text-orange-300 mb-4">🧠 Mental Model Shift</div>
              <div className="text-lg text-orange-100 space-y-4">
                <p><strong>Old thinking:</strong> "When this button is clicked, make an API call"</p>
                <p><strong>New thinking:</strong> "When userId changes, user data should be synchronized"</p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-600'
    },

         // Slide 11: Dependency Arrays - The Control Panel
    {
      id: 'dependency-arrays',
      title: 'Dependency Arrays - The Control Panel',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Dependency Arrays</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🎛️</div>
            <h3 className="text-3xl font-bold mb-12">The Control Panel for Effects</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-red-500/20 rounded-xl p-8 border-2 border-red-400">
                <div className="text-4xl mb-4">🔄</div>
                <h4 className="text-2xl font-bold text-red-300 mb-4">No Array</h4>
                <div className="bg-gray-900/50 rounded p-4 font-mono text-sm mb-4">
                  useEffect(() =&gt; &#123;...&#125;)
                </div>
                <div className="text-red-200 text-lg font-bold">Runs EVERY render</div>
                <div className="text-red-300 text-sm mt-2">⚠️ Usually not what you want!</div>
              </div>
              
              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="text-2xl font-bold text-green-300 mb-4">Empty Array</h4>
                <div className="bg-gray-900/50 rounded p-4 font-mono text-sm mb-4">
                  useEffect(() =&gt; &#123;...&#125;, [])
                </div>
                <div className="text-green-200 text-lg font-bold">Runs ONCE</div>
                <div className="text-green-300 text-sm mt-2">✅ Perfect for setup!</div>
              </div>
              
              <div className="bg-blue-500/20 rounded-xl p-8 border-2 border-blue-400">
                <div className="text-4xl mb-4">👀</div>
                <h4 className="text-2xl font-bold text-blue-300 mb-4">With Values</h4>
                <div className="bg-gray-900/50 rounded p-4 font-mono text-sm mb-4">
                  useEffect(() =&gt; &#123;...&#125;, [count])
                </div>
                <div className="text-blue-200 text-lg font-bold">Runs when count changes</div>
                <div className="text-blue-300 text-sm mt-2">🎯 Smart updates!</div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-600'
    },

    // Slide 9: Interactive Dependency Demo
    {
      id: 'dependency-interactive-demo',
      title: 'Interactive Dependency Demo',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8 text-center">Interactive Dependency Demo</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 text-center animate-float">🎮</div>
            <h3 className="text-3xl font-bold mb-12 text-center">See How Dependencies Work</h3>
            
            <DependencyArrayDemo />
            
            <div className="mt-8 bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <div className="text-2xl font-bold text-yellow-300 mb-4 text-center">💡 Pro Tip</div>
              <div className="text-lg text-yellow-100 text-center">
                Include ALL values from component scope that you use inside the effect!
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-pink-600'
    },

    // Slide 10: No Dependencies Pattern
    {
      id: 'no-dependencies-pattern',
      title: 'No Dependencies - Every Render',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">No Dependencies</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🔄</div>
            <h3 className="text-3xl font-bold mb-12 text-red-300">Runs After Every Render</h3>
            
            <div className="bg-red-500/20 backdrop-blur rounded-xl p-8 border-2 border-red-400 mb-8">
              <div className="bg-gray-900/50 rounded-lg p-6 mb-6">
                <div className="text-lg font-mono text-left space-y-2">
                  <div className="text-green-300">useEffect(() =&gt; &#123;</div>
                  <div className="ml-4 text-yellow-300">console.log('Effect runs every render!');</div>
                  <div className="ml-4 text-yellow-300">document.title = `Count: $&#123;count&#125;`;</div>
                  <div className="text-green-300">&#125;);</div>
                  <div className="text-red-300 mt-2">{`// No dependency array!`}</div>
                </div>
              </div>
              
              <div className="text-2xl font-bold text-red-300 mb-4">⚠️ Usually Not What You Want</div>
              <div className="text-lg text-red-200">
                This runs after every single render - can cause performance issues!
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-600/20 rounded-lg p-6">
                <div className="text-3xl mb-4">❌</div>
                <div className="text-lg font-bold mb-2 text-red-300">Problems</div>
                <ul className="text-red-200 text-sm space-y-2 text-left">
                  <li className="flex items-start space-x-3">
                    <span className="text-red-400">•</span>
                    <span>Runs unnecessarily often</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-400">•</span>
                    <span>Can cause infinite loops</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-400">•</span>
                    <span>Poor performance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-400">•</span>
                    <span>Hard to debug</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-yellow-600/20 rounded-lg p-6">
                <div className="text-3xl mb-4">🤔</div>
                <div className="text-lg font-bold mb-2 text-yellow-300">When to Use</div>
                <ul className="text-yellow-200 text-sm space-y-2 text-left">
                  <li className="flex items-start space-x-3">
                    <span className="text-yellow-400">•</span>
                    <span>Debugging (very rare)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-yellow-400">•</span>
                    <span>Analytics tracking</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-yellow-400">•</span>
                    <span>Development tools</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-yellow-400">•</span>
                    <span>Almost never in production!</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-600 to-orange-600'
    },

    // Slide 11: Empty Dependencies Pattern
    {
      id: 'empty-dependencies-pattern',
      title: 'Empty Dependencies - Run Once',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Empty Dependencies</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🚀</div>
            <h3 className="text-3xl font-bold mb-12 text-green-300">Runs Once on Mount</h3>
            
            <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400 mb-8">
              <div className="bg-gray-900/50 rounded-lg p-6 mb-6">
                <div className="text-lg font-mono text-left space-y-2">
                  <div className="text-green-300">useEffect(() =&gt; &#123;</div>
                  <div className="ml-4 text-yellow-300">console.log('This runs only once!');</div>
                  <div className="ml-4 text-yellow-300">fetch('/api/users').then(setUsers);</div>
                  <div className="ml-4 text-yellow-300">setupEventListeners();</div>
                  <div className="text-green-300">&#125;, []);</div>
                  <div className="text-green-300 mt-2">{`// Empty array = once only!`}</div>
                </div>
              </div>
              
              <div className="text-2xl font-bold text-green-300 mb-4">✅ Perfect for Setup Tasks</div>
              <div className="text-lg text-green-200">
                Ideal for initial data loading, setting up subscriptions, or one-time configuration
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-500/20 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🌐</div>
                <div className="font-bold text-blue-300">Data Fetching</div>
                <div className="text-blue-200 text-sm">Load initial data</div>
              </div>
              
              <div className="bg-purple-500/20 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">👂</div>
                <div className="font-bold text-purple-300">Event Listeners</div>
                <div className="text-purple-200 text-sm">Set up listeners</div>
              </div>
              
              <div className="bg-yellow-500/20 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">⚙️</div>
                <div className="font-bold text-yellow-300">Configuration</div>
                <div className="text-yellow-200 text-sm">Initialize libraries</div>
              </div>
              
              <div className="bg-red-500/20 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">📱</div>
                <div className="font-bold text-red-300">Subscriptions</div>
                <div className="text-red-200 text-sm">Connect to services</div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-emerald-600'
    },

    // Slide 12: Specific Dependencies Pattern
    {
      id: 'specific-dependencies-pattern',
      title: 'Specific Dependencies - Smart Updates',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Specific Dependencies</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">👀</div>
            <h3 className="text-3xl font-bold mb-12 text-blue-300">Runs When Dependencies Change</h3>
            
            <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400 mb-8">
              <div className="bg-gray-900/50 rounded-lg p-6 mb-6">
                <div className="text-lg font-mono text-left space-y-2">
                  <div className="text-blue-300">const [userId, setUserId] = useState(1);</div>
                  <div className="text-blue-300">const [user, setUser] = useState(null);</div>
                  <div className="text-blue-300">const [theme, setTheme] = useState('light');</div>
                  <div className="mt-4 text-green-300">useEffect(() =&gt; &#123;</div>
                  <div className="ml-4 text-yellow-300">fetch(`/api/users/$&#123;userId&#125;`)</div>
                  <div className="ml-6 text-yellow-300">.then(r =&gt; r.json())</div>
                  <div className="ml-6 text-yellow-300">.then(setUser);</div>
                  <div className="text-green-300">&#125;, [userId]);</div>
                  <div className="text-blue-300 mt-2">{`// Only runs when userId changes!`}</div>
                </div>
              </div>
              
              <div className="text-2xl font-bold text-blue-300 mb-4">🎯 Smart and Efficient</div>
              <div className="text-lg text-blue-200">
                Effect runs when userId changes, but NOT when theme changes
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-600/20 rounded-lg p-6">
                <div className="text-3xl mb-4">✅</div>
                <div className="text-lg font-bold mb-2 text-green-300">Runs When</div>
                <ul className="text-green-200 text-sm space-y-2 text-left">
                  <li className="flex items-start space-x-3">
                    <span className="text-green-400">•</span>
                    <span>Component first mounts</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-400">•</span>
                    <span>userId changes from 1 to 2</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-400">•</span>
                    <span>userId changes to any new value</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-400">•</span>
                    <span>Dependencies are compared with Object.is()</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-red-600/20 rounded-lg p-6">
                <div className="text-3xl mb-4">❌</div>
                <div className="text-lg font-bold mb-2 text-red-300">Skips When</div>
                <ul className="text-red-200 text-sm space-y-2 text-left">
                  <li className="flex items-start space-x-3">
                    <span className="text-red-400">•</span>
                    <span>theme changes (not in dependency array)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-400">•</span>
                    <span>Other state changes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-400">•</span>
                    <span>Parent component re-renders</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-400">•</span>
                    <span>Unrelated props change</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-cyan-600'
    },

    // Slide 13: Multiple Dependencies
    {
      id: 'multiple-dependencies',
      title: 'Multiple Dependencies',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Multiple Dependencies</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📦</div>
            <h3 className="text-3xl font-bold mb-12 text-purple-300">Watching Multiple Values</h3>
            
            <div className="bg-purple-500/20 backdrop-blur rounded-xl p-8 border-2 border-purple-400 mb-8">
              <div className="bg-gray-900/50 rounded-lg p-6 mb-6">
                <div className="text-lg font-mono text-left space-y-2">
                  <div className="text-blue-300">const [searchTerm, setSearchTerm] = useState('');</div>
                  <div className="text-blue-300">const [category, setCategory] = useState('all');</div>
                  <div className="text-blue-300">const [results, setResults] = useState([]);</div>
                  <div className="mt-4 text-green-300">useEffect(() =&gt; &#123;</div>
                  <div className="ml-4 text-yellow-300">if (searchTerm.length &gt; 2) &#123;</div>
                  <div className="ml-8 text-yellow-300">const query = `?q=$&#123;searchTerm&#125;&category=$&#123;category&#125;`;</div>
                  <div className="ml-8 text-yellow-300">fetch(`/api/search$&#123;query&#125;`)</div>
                  <div className="ml-10 text-yellow-300">.then(r =&gt; r.json())</div>
                  <div className="ml-10 text-yellow-300">.then(setResults);</div>
                  <div className="ml-4 text-yellow-300">&#125;</div>
                  <div className="text-green-300">&#125;, [searchTerm, category]);</div>
                  <div className="text-purple-300 mt-2">{`// Runs when EITHER value changes`}</div>
                </div>
              </div>
              
              <div className="text-2xl font-bold text-purple-300 mb-4">🔍 Search Example</div>
              <div className="text-lg text-purple-200">
                Effect runs when searchTerm OR category changes - perfect for search functionality!
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <div className="text-2xl font-bold text-yellow-300 mb-4">📋 Golden Rule</div>
              <div className="text-lg text-yellow-100">
                If you use a value from component scope inside useEffect, it MUST be in the dependency array!
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-indigo-600'
    },

    // Slide 15: Data Fetching - Architecture Decisions
    {
      id: 'data-fetching-intro',
      title: 'Data Fetching - Architecture Decisions',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Data Fetching Architecture</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🏗️</div>
            <h3 className="text-3xl font-bold mb-12">Where Should Data Live?</h3>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 mb-8">
              <h4 className="text-2xl font-bold text-blue-300 mb-6">🤔 Architectural Choices</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-4">🏠</div>
                  <div className="text-lg font-bold mb-2">Component Level</div>
                  <div className="text-blue-200 text-sm space-y-1">
                    <div>✅ Simple & direct</div>
                    <div>❌ Re-fetch on re-mount</div>
                    <div>❌ No sharing between components</div>
                  </div>
                </div>
                
                <div className="bg-purple-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-4">🏢</div>
                  <div className="text-lg font-bold mb-2">Global State</div>
                  <div className="text-purple-200 text-sm space-y-1">
                    <div>✅ Share across components</div>
                    <div>✅ Cache data</div>
                    <div>❌ More complex setup</div>
                  </div>
                </div>
                
                <div className="bg-green-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-4">☁️</div>
                  <div className="text-lg font-bold mb-2">Server State</div>
                  <div className="text-green-200 text-sm space-y-1">
                    <div>✅ Intelligent caching</div>
                    <div>✅ Background updates</div>
                    <div>❌ Additional dependency</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-yellow-500/20 rounded-xl p-8 border border-yellow-400/30">
                <h4 className="text-2xl font-bold text-yellow-300 mb-6">⚡ Performance Tradeoffs</h4>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="text-xl">🚀</div>
                    <div>
                      <div className="font-bold">Fast Initial Load</div>
                      <div className="text-yellow-200 text-sm">useEffect in component</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-xl">🔄</div>
                    <div>
                      <div className="font-bold">Avoid Re-fetching</div>
                      <div className="text-yellow-200 text-sm">Global state management</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-xl">📡</div>
                    <div>
                      <div className="font-bold">Background Sync</div>
                      <div className="text-yellow-200 text-sm">React Query, SWR</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/20 rounded-xl p-8 border border-red-400/30">
                <h4 className="text-2xl font-bold text-red-300 mb-6">🎯 When to Choose What</h4>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="text-xl">🏠</div>
                    <div>
                      <div className="font-bold">Component useEffect</div>
                      <div className="text-red-200 text-sm">Simple, one-off data needs</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-xl">🏢</div>
                    <div>
                      <div className="font-bold">Global State</div>
                      <div className="text-red-200 text-sm">Shared data, complex apps</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="text-xl">☁️</div>
                    <div>
                      <div className="font-bold">Server State Library</div>
                      <div className="text-red-200 text-sm">Production apps with lots of API calls</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-500/20 rounded-xl p-8 border border-orange-400/30">
              <div className="text-2xl font-bold text-orange-300 mb-4">🧠 Key Insight</div>
              <div className="text-lg text-orange-100">
                useEffect for data fetching is <strong>just the beginning</strong>. As your app grows, 
                you'll need more sophisticated solutions. But understanding useEffect first is crucial!
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-emerald-600 to-teal-600'
    },

    // Slide 15: Interactive Data Fetching Demo
    {
      id: 'data-fetching-demo',
      title: 'Interactive Data Fetching Demo',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8 text-center">Data Fetching Demo</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 text-center animate-float">📡</div>
            <h3 className="text-3xl font-bold mb-12 text-center">See All Three States in Action</h3>
            
            <DataFetchingDemo />
            
            <div className="mt-8 bg-blue-500/20 rounded-xl p-6 border border-blue-400/30">
              <div className="text-2xl font-bold text-blue-300 mb-4 text-center">💡 Key Pattern</div>
              <div className="text-lg text-blue-100 text-center">
                Always handle loading, error, and success states for a great user experience!
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-teal-600 to-blue-600'
    },

    // Slide 16: Async/Await Pattern
    {
      id: 'async-await-pattern',
      title: 'Async/Await in useEffect',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Async/Await Pattern</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">⚡</div>
            <h3 className="text-3xl font-bold mb-12 text-yellow-300">⚠️ Important Pattern</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-red-500/20 rounded-xl p-6 border-2 border-red-400">
                <h4 className="text-2xl font-bold text-red-300 mb-4">❌ This Doesn't Work</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-red-300">{`// Can't make useEffect async!`}</div>
                  <div className="text-green-300">useEffect(async () =&gt; &#123;</div>
                  <div className="ml-4 text-yellow-300">const data = await fetch('/api/users');</div>
                  <div className="ml-4 text-yellow-300">setUsers(data);</div>
                  <div className="text-green-300">&#125;, []);</div>
                </div>
                <div className="text-red-200 text-sm mt-4">
                  useEffect expects a cleanup function or nothing - not a Promise!
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-400">
                <h4 className="text-2xl font-bold text-green-300 mb-4">✅ Do This Instead</h4>
                <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-300">useEffect(() =&gt; &#123;</div>
                  <div className="ml-4 text-blue-300">async function fetchData() &#123;</div>
                  <div className="ml-8 text-yellow-300">try &#123;</div>
                  <div className="ml-12 text-yellow-300">const response = await fetch('/api/users');</div>
                  <div className="ml-12 text-yellow-300">const data = await response.json();</div>
                  <div className="ml-12 text-yellow-300">setUsers(data);</div>
                  <div className="ml-8 text-yellow-300">&#125; catch (error) &#123;</div>
                  <div className="ml-12 text-yellow-300">setError(error.message);</div>
                  <div className="ml-8 text-yellow-300">&#125;</div>
                  <div className="ml-4 text-blue-300">&#125;</div>
                  <div className="ml-4 text-white">fetchData();</div>
                  <div className="text-green-300">&#125;, []);</div>
                </div>
                <div className="text-green-200 text-sm mt-4">
                  Create async function inside useEffect!
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/30">
              <div className="text-2xl font-bold text-blue-300 mb-4">🎯 Why This Pattern?</div>
              <div className="text-lg text-blue-100">
                useEffect must return either nothing or a cleanup function. Async functions return Promises, 
                which would confuse React's cleanup mechanism.
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-yellow-600 to-orange-600'
    },

    // Slide 17: Cleanup Functions Introduction
    {
      id: 'cleanup-intro',
      title: 'Cleanup Functions - Why They Matter',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Cleanup Functions</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🧹</div>
            <h3 className="text-3xl font-bold mb-12">Preventing Memory Leaks</h3>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 mb-8">
              <h4 className="text-2xl font-bold text-orange-300 mb-6">🔥 The Problem</h4>
              <div className="text-xl leading-relaxed space-y-4">
                <p>
                  Without cleanup, resources keep running even after your component is gone!
                </p>
                <p>
                  This leads to <strong>memory leaks</strong>, performance issues, and bugs.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-500/20 rounded-xl p-6 border border-red-400/30">
                <h4 className="text-2xl font-bold text-red-300 mb-4">❌ Without Cleanup</h4>
                <ul className="space-y-3 text-lg text-left">
                  <li className="flex items-start space-x-3">
                    <span className="text-red-400">•</span>
                    <span>Timers keep running forever</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-400">•</span>
                    <span>Event listeners accumulate</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-400">•</span>
                    <span>Network requests continue</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-400">•</span>
                    <span>Memory leaks everywhere!</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-500/20 rounded-xl p-6 border border-green-400/30">
                <h4 className="text-2xl font-bold text-green-300 mb-4">✅ With Cleanup</h4>
                <ul className="space-y-3 text-lg text-left">
                  <li className="flex items-start space-x-3">
                    <span className="text-green-400">•</span>
                    <span>Resources properly released</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-400">•</span>
                    <span>No memory leaks</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-400">•</span>
                    <span>Better performance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-400">•</span>
                    <span>Happy users!</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-orange-600 to-red-600'
    },

    // Slide 18: Cleanup - Memory Leaks Demo
    {
      id: 'cleanup-memory-leaks',
      title: 'Cleanup Demo - Memory Leaks',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Memory Leak Example</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">💥</div>
            <h3 className="text-3xl font-bold mb-12 text-red-300">What Goes Wrong</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Bad Example */}
              <div className="bg-red-500/20 rounded-xl p-8 border-2 border-red-400">
                <h4 className="text-2xl font-bold text-red-300 mb-6">❌ Memory Leak</h4>
                <div className="bg-gray-900/50 rounded-lg p-6 mb-6">
                  <div className="text-lg font-mono text-left space-y-2">
                    <div className="text-green-300">useEffect(() =&gt; &#123;</div>
                    <div className="ml-4 text-yellow-300">const timer = setInterval(() =&gt; &#123;</div>
                    <div className="ml-8 text-yellow-300">setCount(c =&gt; c + 1);</div>
                    <div className="ml-4 text-yellow-300">&#125;, 1000);</div>
                    <div className="ml-4 text-red-300">{`// No cleanup! 😱`}</div>
                    <div className="text-green-300">&#125;, []);</div>
                  </div>
                </div>
                <div className="text-red-200 text-lg">
                  Timer keeps running even after component unmounts!
                </div>
                <div className="mt-4 bg-red-600/30 rounded-lg p-4">
                  <div className="text-red-100 text-sm">
                    <strong>Result:</strong> Multiple timers, memory leaks, 
                    attempts to update unmounted components
                  </div>
                </div>
              </div>

              {/* Good Example */}
              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <h4 className="text-2xl font-bold text-green-300 mb-6">✅ Proper Cleanup</h4>
                <div className="bg-gray-900/50 rounded-lg p-6 mb-6">
                  <div className="text-lg font-mono text-left space-y-2">
                    <div className="text-green-300">useEffect(() =&gt; &#123;</div>
                    <div className="ml-4 text-yellow-300">const timer = setInterval(() =&gt; &#123;</div>
                    <div className="ml-8 text-yellow-300">setCount(c =&gt; c + 1);</div>
                    <div className="ml-4 text-yellow-300">&#125;, 1000);</div>
                    <div className="ml-4 text-blue-300">return () =&gt; clearInterval(timer);</div>
                    <div className="text-green-300">&#125;, []);</div>
                  </div>
                </div>
                <div className="text-green-200 text-lg">
                  Timer cleaned up automatically! 🎉
                </div>
                <div className="mt-4 bg-green-600/30 rounded-lg p-4">
                  <div className="text-green-100 text-sm">
                    <strong>Result:</strong> Clean, efficient, no memory leaks, 
                    perfect resource management
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-blue-500/20 rounded-xl p-6 border border-blue-400/30">
              <div className="text-2xl font-bold text-blue-300 mb-4">💡 Remember</div>
              <div className="text-lg text-blue-100">
                If you set something up in useEffect, you must clean it up in the return function!
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-600 to-pink-600'
    },

    // Slide 19: Event Listener Cleanup
    {
      id: 'event-listener-cleanup',
      title: 'Event Listener Cleanup',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Event Listener Cleanup</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">👂</div>
            <h3 className="text-3xl font-bold mb-12">Cleaning Up Event Listeners</h3>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 mb-8">
              <div className="bg-gray-900/50 rounded-lg p-6 font-mono text-sm">
                <div className="text-green-300">useEffect(() =&gt; &#123;</div>
                <div className="ml-4 text-blue-300">function handleResize() &#123;</div>
                <div className="ml-8 text-yellow-300">setWindowSize(&#123;</div>
                <div className="ml-12 text-yellow-300">width: window.innerWidth,</div>
                <div className="ml-12 text-yellow-300">height: window.innerHeight</div>
                <div className="ml-8 text-yellow-300">&#125;);</div>
                <div className="ml-4 text-blue-300">&#125;</div>
                <div className="ml-4 mt-3 text-orange-300">{`// Add event listener`}</div>
                <div className="ml-4 text-yellow-300">window.addEventListener('resize', handleResize);</div>
                <div className="ml-4 mt-3 text-orange-300">{`// Cleanup - remove event listener`}</div>
                <div className="ml-4 text-red-300">return () =&gt; &#123;</div>
                <div className="ml-8 text-red-300">window.removeEventListener('resize', handleResize);</div>
                <div className="ml-4 text-red-300">&#125;;</div>
                <div className="text-green-300">&#125;, []);</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
                <div className="text-2xl font-bold text-yellow-300 mb-4">⚠️ Important Details</div>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start space-x-3">
                    <span className="text-yellow-400">•</span>
                    <span>Use the same function reference for add and remove</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-yellow-400">•</span>
                    <span>Window/document listeners are global</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-yellow-400">•</span>
                    <span>Without cleanup, listeners accumulate</span>
                  </li>
                </ul>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-400/30">
                <div className="text-2xl font-bold text-purple-300 mb-4">🎯 Common Events</div>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-400">•</span>
                    <span>window resize</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-400">•</span>
                    <span>document scroll</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-400">•</span>
                    <span>keyboard events</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-purple-400">•</span>
                    <span>mouse events</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-teal-600 to-blue-600'
    },

    // Slide 20: Best Practices
    {
      id: 'best-practices',
      title: 'useEffect Best Practices',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Best Practices</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">⭐</div>
            <h3 className="text-3xl font-bold mb-12">Rules for Success</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-500/20 rounded-xl p-8 border border-green-400/30">
                <h4 className="text-2xl font-bold text-green-300 mb-6">✅ Do This</h4>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start space-x-3">
                    <span className="text-green-400 text-xl">•</span>
                    <span>Include all dependencies in the array</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-400 text-xl">•</span>
                    <span>Use multiple effects for different concerns</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-400 text-xl">•</span>
                    <span>Always clean up resources</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-400 text-xl">•</span>
                    <span>Handle loading and error states</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-400 text-xl">•</span>
                    <span>Keep effects focused and simple</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-red-500/20 rounded-xl p-8 border border-red-400/30">
                <h4 className="text-2xl font-bold text-red-300 mb-6">❌ Avoid This</h4>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start space-x-3">
                    <span className="text-red-400 text-xl">•</span>
                    <span>Missing dependencies (stale closures)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-400 text-xl">•</span>
                    <span>Forgetting cleanup functions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-400 text-xl">•</span>
                    <span>Making useEffect callback async</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-400 text-xl">•</span>
                    <span>Putting objects/arrays in dependencies</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-400 text-xl">•</span>
                    <span>Overly complex effects</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400/30">
              <div className="text-2xl font-bold text-blue-300 mb-4">🎯 Golden Rule</div>
              <div className="text-xl text-blue-100">
                "If you reference it inside useEffect, it belongs in the dependency array"
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-violet-600 to-purple-600'
    },

    // Slide 21: Multiple Effects Pattern
    {
      id: 'multiple-effects',
      title: 'Multiple Effects - Separation of Concerns',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Multiple Effects</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📚</div>
            <h3 className="text-3xl font-bold mb-12">Separation of Concerns</h3>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 mb-8">
              <div className="bg-gray-900/50 rounded-lg p-6 font-mono text-sm">
                <div className="text-orange-300 mb-2">{`// Effect 1: Fetch user data`}</div>
                <div className="text-green-300">useEffect(() =&gt; &#123;</div>
                <div className="ml-4 text-yellow-300">if (!userId) return;</div>
                <div className="ml-4 text-yellow-300">fetch(`/api/users/$&#123;userId&#125;`)</div>
                <div className="ml-6 text-yellow-300">.then(r =&gt; r.json())</div>
                <div className="ml-6 text-yellow-300">.then(setUser);</div>
                <div className="text-green-300">&#125;, [userId]);</div>
                
                <div className="mt-4 text-orange-300">{`// Effect 2: Fetch user's posts`}</div>
                <div className="text-green-300">useEffect(() =&gt; &#123;</div>
                <div className="ml-4 text-yellow-300">if (!userId) return;</div>
                <div className="ml-4 text-yellow-300">fetch(`/api/users/$&#123;userId&#125;/posts`)</div>
                <div className="ml-6 text-yellow-300">.then(r =&gt; r.json())</div>
                <div className="ml-6 text-yellow-300">.then(setPosts);</div>
                <div className="text-green-300">&#125;, [userId]);</div>
                
                <div className="mt-4 text-orange-300">{`// Effect 3: Update document title`}</div>
                <div className="text-green-300">useEffect(() =&gt; &#123;</div>
                <div className="ml-4 text-yellow-300">if (user) &#123;</div>
                <div className="ml-8 text-yellow-300">document.title = `$&#123;user.name&#125;'s Profile`;</div>
                <div className="ml-4 text-yellow-300">&#125;</div>
                <div className="ml-4 text-blue-300">return () =&gt; document.title = 'My App';</div>
                <div className="text-green-300">&#125;, [user]);</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-500/20 rounded-xl p-6 border border-green-400/30">
                <div className="text-2xl font-bold text-green-300 mb-4">✅ Benefits</div>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start space-x-3">
                    <span className="text-green-400">•</span>
                    <span>Each effect has single responsibility</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-400">•</span>
                    <span>Different dependency arrays</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-400">•</span>
                    <span>Easier to understand and debug</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-green-400">•</span>
                    <span>Can extract into custom hooks</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/30">
                <div className="text-2xl font-bold text-blue-300 mb-4">🎯 When to Separate</div>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-400">•</span>
                    <span>Different data sources</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-400">•</span>
                    <span>Different dependencies</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-400">•</span>
                    <span>Different cleanup needs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-blue-400">•</span>
                    <span>Unrelated concerns</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-indigo-600'
    },

    // Slide 22: Recap & Next Steps
    {
      id: 'recap-next-steps',
      title: 'Recap & Next Steps',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Recap & Next Steps</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🎯</div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-green-300">✅ What We Mastered</h3>
                <div className="space-y-4 text-left text-lg">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🪝</div>
                    <div>useEffect manages side effects</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">📦</div>
                    <div>Dependency arrays control timing</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🌐</div>
                    <div>Data fetching with loading/error states</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🧹</div>
                    <div>Cleanup prevents memory leaks</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">⚡</div>
                    <div>Async/await patterns</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-blue-300">💡 Practice Projects</h3>
                <div className="space-y-4 text-left text-lg">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🌤️</div>
                    <div>Weather dashboard with auto-refresh</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">📝</div>
                    <div>Todo app with API backend</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">⏰</div>
                    <div>Timer/stopwatch with cleanup</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">📊</div>
                    <div>Live data dashboard</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🎮</div>
                    <div>Interactive game with events</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-8 border border-purple-400/30">
              <h3 className="text-3xl font-bold text-purple-300 mb-4">🚀 Next Class Preview</h3>
              <div className="text-xl text-purple-100 mb-4">
                Advanced React Patterns: Custom Hooks & Context API
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl mb-2">🏗️</div>
                  <div className="font-bold">Custom Hooks</div>
                  <div className="text-sm text-white/70">Reusable logic</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl mb-2">🌍</div>
                  <div className="font-bold">Context API</div>
                  <div className="text-sm text-white/70">Global state</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="font-bold">Performance</div>
                  <div className="text-sm text-white/70">Optimization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-teal-600 to-green-600'
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

export default Class8Slides;