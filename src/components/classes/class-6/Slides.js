import React, { useState, useEffect } from 'react';

// Custom CSS for animations
const customStyles = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fade-in 0.5s ease-out;
  }
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
  @keyframes react-flow {
    0% { transform: translateX(-100%); opacity: 0; }
    50% { transform: translateX(0); opacity: 1; }
    100% { transform: translateX(100%); opacity: 0; }
  }
  .react-flow-animation {
    animation: react-flow 3s ease-in-out;
  }
`;



// Component Tree Visualization
const ComponentTreeDemo = () => {
  const [highlightedComponent, setHighlightedComponent] = useState(null);

  const components = [
    { id: 'app', name: 'App', level: 0, children: ['header', 'main', 'footer'] },
    { id: 'header', name: 'Header', level: 1, children: ['logo', 'nav'] },
    { id: 'logo', name: 'Logo', level: 2, children: [] },
    { id: 'nav', name: 'Navigation', level: 2, children: ['navitem1', 'navitem2'] },
    { id: 'navitem1', name: 'NavItem', level: 3, children: [] },
    { id: 'navitem2', name: 'NavItem', level: 3, children: [] },
    { id: 'main', name: 'Main', level: 1, children: ['sidebar', 'content'] },
    { id: 'sidebar', name: 'Sidebar', level: 2, children: [] },
    { id: 'content', name: 'Content', level: 2, children: ['article'] },
    { id: 'article', name: 'Article', level: 3, children: [] },
    { id: 'footer', name: 'Footer', level: 1, children: [] }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <div className="text-8xl mb-6 animate-float">🌳</div>
        <h3 className="text-3xl font-bold text-white mb-4">Component Tree</h3>
        <p className="text-xl text-white/80">Components are like LEGO bricks - they fit together!</p>
      </div>

      <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/30">
        <div className="space-y-6">
          {[0, 1, 2, 3].map(level => (
            <div key={level} className="flex justify-center space-x-4">
              {components
                .filter(comp => comp.level === level)
                .map(comp => (
                  <div
                    key={comp.id}
                    className={`px-6 py-4 rounded-lg border-2 cursor-pointer transition-all transform hover:scale-105 ${
                      highlightedComponent === comp.id
                        ? 'bg-blue-500/30 border-blue-400 shadow-lg'
                        : 'bg-gray-500/20 border-gray-400 hover:bg-gray-500/30'
                    }`}
                    onMouseEnter={() => setHighlightedComponent(comp.id)}
                    onMouseLeave={() => setHighlightedComponent(null)}
                  >
                    <div className="text-white font-bold text-center">{comp.name}</div>
                    {comp.level === 0 && <div className="text-blue-300 text-sm text-center">Root</div>}
                  </div>
                ))}
            </div>
          ))}
        </div>

        <div className="mt-8 bg-yellow-500/20 rounded-lg p-6 border border-yellow-400/30">
          <h4 className="text-xl font-bold text-yellow-300 mb-4">🎯 Key Concepts</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-3xl mb-2">🧱</div>
              <div className="text-white font-bold">Reusable</div>
              <div className="text-white/70 text-sm">Use same component multiple times</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">📦</div>
              <div className="text-white font-bold">Composable</div>
              <div className="text-white/70 text-sm">Combine components to build UIs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎯</div>
              <div className="text-white font-bold">Focused</div>
              <div className="text-white/70 text-sm">Each component has one job</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Props Flow Demo
const PropsFlowDemo = () => {
  const [userName, setUserName] = useState('Alice');
  const [userAge, setUserAge] = useState(25);
  const [userRole, setUserRole] = useState('Developer');

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <div className="text-8xl mb-6 animate-float">🍳</div>
        <h3 className="text-3xl font-bold text-white mb-4">Props: Ingredients for Components</h3>
        <p className="text-xl text-white/80">Like giving ingredients to a chef!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Controls */}
        <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400">
          <h4 className="text-2xl font-bold text-blue-300 mb-6">👨‍🍳 Chef's Ingredients (Props)</h4>
          <div className="space-y-4">
            <div>
              <label className="block text-white font-bold mb-2">Name:</label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full bg-gray-700 text-white rounded px-4 py-2 border border-gray-600 focus:border-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-white font-bold mb-2">Age:</label>
              <input
                type="number"
                value={userAge}
                onChange={(e) => setUserAge(Number(e.target.value))}
                className="w-full bg-gray-700 text-white rounded px-4 py-2 border border-gray-600 focus:border-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-white font-bold mb-2">Role:</label>
              <select
                value={userRole}
                onChange={(e) => setUserRole(e.target.value)}
                className="w-full bg-gray-700 text-white rounded px-4 py-2 border border-gray-600 focus:border-blue-400 focus:outline-none"
              >
                <option>Developer</option>
                <option>Designer</option>
                <option>Manager</option>
                <option>Student</option>
              </select>
            </div>
          </div>
        </div>

        {/* Component Output */}
        <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
          <h4 className="text-2xl font-bold text-green-300 mb-6">🍽️ Chef's Creation (Component)</h4>
          <div className="bg-white/10 rounded-lg p-6 border border-white/30">
            <div className="text-center">
              <div className="text-6xl mb-4">👤</div>
              <h3 className="text-2xl font-bold text-white mb-2">{userName}</h3>
              <p className="text-lg text-white/80 mb-2">Age: {userAge}</p>
              <p className="text-lg text-white/80 mb-4">Role: {userRole}</p>
              <div className={`px-4 py-2 rounded-full text-sm font-bold ${
                userAge >= 18 ? 'bg-green-500/30 text-green-300' : 'bg-red-500/30 text-red-300'
              }`}>
                {userAge >= 18 ? '✅ Can Vote' : '❌ Too Young to Vote'}
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-gray-800 rounded-lg p-4">
            <div className="text-green-400 text-sm mb-2">// Component receives props:</div>
            <div className="text-white font-mono text-sm">
              <div>&lt;UserCard</div>
              <div className="ml-4">name="{userName}"</div>
              <div className="ml-4">age={userAge}</div>
              <div className="ml-4">role="{userRole}"</div>
              <div>/&gt;</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
        <h4 className="text-xl font-bold text-yellow-300 mb-4">🎯 Props Make Components Reusable</h4>
        <p className="text-white/90 text-lg text-center">
          Same component, different ingredients = different results! 
          Just like how a chef can make different dishes with different ingredients.
        </p>
      </div>
    </div>
  );
};

// Main Class 6 Slides Component
const Class6Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Inject custom styles
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = customStyles;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  const slides = [
    {
      id: 'title-slide',
      title: 'CS390 Web Applications Programming',
      content: (
        <div className="text-center space-y-12">
          <div className="space-y-8">
            <h1 className="text-6xl font-bold text-white mb-6">
              CS390
            </h1>
            <h2 className="text-4xl font-semibold text-blue-100 mb-4">
              Web Applications Programming
            </h2>
            <div className="text-2xl text-blue-200">
              Class 6: Introduction to React
            </div>
          </div>
          
          <div className="mt-16">
            <div className="text-2xl font-medium text-white">
              Tanay Gondil
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-purple-700'
    },

    {
      id: 'discuss-productivity',
      title: 'Discuss!',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">Discuss!</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <div className="text-left space-y-6 text-xl leading-relaxed">
                <div className="text-white font-semibold">
                  What's your favorite productivity hack or life tip that actually works?
                </div>
                
                <div className="text-white font-semibold">
                  If you could automate one boring task in your life, what would it be?
                </div>
                
                <div className="text-white font-semibold">
                  What's the most useful app or tool you discovered recently?
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-pink-600'
    },

    {
      id: 'why-react-problem',
      title: 'Why React? The Problem',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Why React?</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">😵‍💫</div>
            <h3 className="text-3xl font-bold mb-12">DOM Manipulation Gets Messy Fast</h3>
            
            <div className="bg-red-500/20 backdrop-blur rounded-xl p-8 border-2 border-red-400 mb-8">
              <h4 className="text-2xl font-bold text-red-300 mb-6">🏀 Basketball Scoreboard Nightmare</h4>
              <div className="text-white/90 text-lg mb-6">
                Imagine updating a basketball scoreboard during a game...
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-red-900/50 rounded-lg p-4">
                  <div className="text-3xl mb-2">📊</div>
                  <div className="text-white font-bold">Team Scores</div>
                  <div className="text-red-300 text-sm">Update both teams</div>
                </div>
                <div className="bg-red-900/50 rounded-lg p-4">
                  <div className="text-3xl mb-2">👤</div>
                  <div className="text-white font-bold">Player Stats</div>
                  <div className="text-red-300 text-sm">Individual points</div>
                </div>
                <div className="bg-red-900/50 rounded-lg p-4">
                  <div className="text-3xl mb-2">⏰</div>
                  <div className="text-white font-bold">Game Clock</div>
                  <div className="text-red-300 text-sm">Time remaining</div>
                </div>
                <div className="bg-red-900/50 rounded-lg p-4">
                  <div className="text-3xl mb-2">🏆</div>
                  <div className="text-white font-bold">Leaderboard</div>
                  <div className="text-red-300 text-sm">Season rankings</div>
                </div>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-red-300 font-mono text-sm space-y-1">
                  <div>// Every time someone scores, you need to:</div>
                  <div>document.querySelector('#team1-score').textContent = newScore;</div>
                  <div>document.querySelector('#player-stats').innerHTML = updateStats();</div>
                  <div>document.querySelector('#leaderboard').innerHTML = updateRankings();</div>
                  <div>document.querySelector('#game-clock').textContent = timeLeft;</div>
                  <div className="text-white">// Miss one update = everything's out of sync! 😱</div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <h4 className="text-xl font-bold text-yellow-300 mb-4">⚠️ The Problems</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">🔍</div>
                  <div className="text-white font-bold">Find Elements</div>
                  <div className="text-white/70 text-sm">querySelector everywhere</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🔄</div>
                  <div className="text-white font-bold">Manual Updates</div>
                  <div className="text-white/70 text-sm">Remember to sync everything</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🐛</div>
                  <div className="text-white font-bold">Easy Bugs</div>
                  <div className="text-white/70 text-sm">Forget one update = broken UI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-600 to-orange-700'
    },

    {
      id: 'dom-manipulation-demo',
      title: 'DOM Manipulation: The Visual Difference',
      content: (
        <div className="text-white animate-fade-in">
          <h2 className="text-4xl font-extrabold mb-8 text-center">🎯 The Basketball Scoreboard Challenge</h2>
          
          <div className="max-w-6xl mx-auto">
            {/* Scenario Setup */}
            <div className="text-center mb-12">
              <div className="text-8xl mb-4">🏀</div>
              <p className="text-xl text-white/80 mb-8">
                You need to update the scoreboard every time someone scores...
              </p>
              
              {/* Mock Scoreboard */}
              <div className="bg-gray-900 rounded-xl p-6 max-w-md mx-auto mb-8">
                <div className="text-4xl font-bold text-green-400 mb-2">Score: 7</div>
                <div className="text-lg text-yellow-300 mb-4">Keep going!</div>
                <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-bold">
                  🏀 SCORE!
                </button>
              </div>
            </div>

            {/* Visual Comparison */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Vanilla JavaScript - Visual Flow */}
              <div className="bg-red-500/20 backdrop-blur rounded-xl p-8 border-2 border-red-400">
                <h3 className="text-2xl font-bold text-red-300 mb-6 text-center">😵‍💫 Vanilla JavaScript</h3>
                
                {/* Flow Diagram */}
                <div className="space-y-4">
                  <div className="bg-gray-800 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">👆</div>
                    <div className="text-white font-bold">User Clicks</div>
                  </div>
                  
                  <div className="text-center text-red-300 text-2xl">↓</div>
                  
                  <div className="bg-red-900/40 rounded-lg p-4">
                    <div className="text-center text-red-200 font-bold mb-3">You Must Do EVERYTHING:</div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="bg-red-800/50 rounded p-2">
                        <div className="text-2xl mb-1">🔍</div>
                        <div>Find score element</div>
                      </div>
                      <div className="bg-red-800/50 rounded p-2">
                        <div className="text-2xl mb-1">📝</div>
                        <div>Update text manually</div>
                      </div>
                      <div className="bg-red-800/50 rounded p-2">
                        <div className="text-2xl mb-1">🔍</div>
                        <div>Find status element</div>
                      </div>
                      <div className="bg-red-800/50 rounded p-2">
                        <div className="text-2xl mb-1">🔄</div>
                        <div>Update status too</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center text-red-300 text-2xl">↓</div>
                  
                  <div className="bg-gray-800 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">🐛</div>
                    <div className="text-red-200">Easy to forget something!</div>
                  </div>
                </div>
              </div>

              {/* React - Visual Flow */}
              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <h3 className="text-2xl font-bold text-green-300 mb-6 text-center">✨ React Magic</h3>
                
                {/* Flow Diagram */}
                <div className="space-y-4">
                  <div className="bg-gray-800 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">👆</div>
                    <div className="text-white font-bold">User Clicks</div>
                  </div>
                  
                  <div className="text-center text-green-300 text-2xl">↓</div>
                  
                  <div className="bg-green-900/40 rounded-lg p-4">
                    <div className="text-center text-green-200 font-bold mb-3">You Just Say:</div>
                    <div className="bg-green-800/50 rounded p-4 text-center">
                      <div className="text-3xl mb-2">🎯</div>
                      <div className="text-lg font-mono">setScore(score + 1)</div>
                      <div className="text-sm text-green-300 mt-2">"Update the score!"</div>
                    </div>
                  </div>
                  
                  <div className="text-center text-green-300 text-2xl">↓</div>
                  
                  <div className="bg-blue-900/40 rounded-lg p-4">
                    <div className="text-center text-blue-200 font-bold mb-3">React Does Everything:</div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-blue-800/50 rounded p-2 text-center">
                        <div className="text-xl mb-1">🔄</div>
                        <div>Updates score display</div>
                      </div>
                      <div className="bg-blue-800/50 rounded p-2 text-center">
                        <div className="text-xl mb-1">✨</div>
                        <div>Updates status message</div>
                      </div>
                      <div className="bg-blue-800/50 rounded p-2 text-center">
                        <div className="text-xl mb-1">🎨</div>
                        <div>Updates button state</div>
                      </div>
                      <div className="bg-blue-800/50 rounded p-2 text-center">
                        <div className="text-xl mb-1">🚀</div>
                        <div>Everything in sync!</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center text-green-300 text-2xl">↓</div>
                  
                  <div className="bg-gray-800 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">🎉</div>
                    <div className="text-green-200">Perfect sync, no bugs!</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Insight */}
            <div className="mt-12 bg-yellow-500/20 backdrop-blur rounded-xl p-8 border-2 border-yellow-400 text-center">
              <div className="text-6xl mb-4">💡</div>
              <h4 className="text-2xl font-bold text-yellow-300 mb-4">The Key Difference</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
                <div>
                  <div className="text-red-300 font-bold mb-2">❌ Vanilla JS: "HOW"</div>
                  <div className="text-white/80">You tell the computer every single step to update the UI</div>
                </div>
                <div>
                  <div className="text-green-300 font-bold mb-2">✅ React: "WHAT"</div>
                  <div className="text-white/80">You describe what the UI should look like, React figures out how</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-600 via-orange-600 to-green-600'
    },

    {
      id: 'declarative-vs-imperative',
      title: 'Two Ways of Thinking',
      content: (
        <div className="text-white animate-fade-in">
          <h2 className="text-4xl font-extrabold mb-8 text-center">🧠 Imperative vs Declarative</h2>
          
          <div className="max-w-6xl mx-auto">
            {/* Analogy Introduction */}
            <div className="text-center mb-12">
              <div className="text-8xl mb-4">🍕</div>
              <h3 className="text-2xl font-bold text-white mb-4">Ordering Pizza: Two Different Approaches</h3>
              <p className="text-white/80 text-lg">Same result, completely different methods</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Imperative - Micromanaging */}
              <div className="bg-red-500/20 backdrop-blur rounded-xl p-8 border-2 border-red-400">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🤖</div>
                  <h3 className="text-2xl font-bold text-red-300">Imperative</h3>
                  <p className="text-white/80 mt-2 text-lg">"Micromanaging Every Step"</p>
                </div>
                
                {/* Visual Steps */}
                <div className="space-y-3">
                  <div className="bg-red-900/30 rounded-lg p-3 flex items-center">
                    <div className="text-2xl mr-3">1️⃣</div>
                    <div>Walk to the kitchen</div>
                  </div>
                  <div className="bg-red-900/30 rounded-lg p-3 flex items-center">
                    <div className="text-2xl mr-3">2️⃣</div>
                    <div>Get flour, water, yeast</div>
                  </div>
                  <div className="bg-red-900/30 rounded-lg p-3 flex items-center">
                    <div className="text-2xl mr-3">3️⃣</div>
                    <div>Mix ingredients for 10 minutes</div>
                  </div>
                  <div className="bg-red-900/30 rounded-lg p-3 flex items-center">
                    <div className="text-2xl mr-3">4️⃣</div>
                    <div>Let rise for 2 hours</div>
                  </div>
                  <div className="bg-red-900/30 rounded-lg p-3 flex items-center">
                    <div className="text-2xl mr-3">5️⃣</div>
                    <div>Roll out dough...</div>
                  </div>
                  <div className="text-center text-red-300 text-sm mt-3">
                    😵 <strong>12 more steps to go...</strong>
                  </div>
                </div>
                
                <div className="mt-6 bg-red-900/40 rounded-lg p-4 text-center">
                  <div className="text-red-200 font-bold">You Control EVERYTHING</div>
                  <div className="text-red-300 text-sm mt-2">Every detail, every step, every motion</div>
                </div>
              </div>

              {/* Declarative - Ordering */}
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold text-blue-300">Declarative</h3>
                  <p className="text-white/80 mt-2 text-lg">"Describe What You Want"</p>
                </div>
                
                {/* Simple Order */}
                <div className="bg-blue-900/40 rounded-xl p-8 mb-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">📞</div>
                    <div className="text-2xl font-bold text-blue-200 mb-4">
                      "Large pepperoni pizza, please!"
                    </div>
                    <div className="text-blue-300 text-lg">
                      ✨ That's it! ✨
                    </div>
                  </div>
                </div>
                
                {/* What happens behind the scenes */}
                <div className="bg-blue-900/30 rounded-lg p-4">
                  <div className="text-blue-200 font-bold mb-3 text-center">The Restaurant Handles:</div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-blue-800/50 rounded p-2 text-center">
                      <div className="text-lg mb-1">👨‍🍳</div>
                      <div>Making dough</div>
                    </div>
                    <div className="bg-blue-800/50 rounded p-2 text-center">
                      <div className="text-lg mb-1">🧀</div>
                      <div>Adding toppings</div>
                    </div>
                    <div className="bg-blue-800/50 rounded p-2 text-center">
                      <div className="text-lg mb-1">🔥</div>
                      <div>Baking perfectly</div>
                    </div>
                    <div className="bg-blue-800/50 rounded p-2 text-center">
                      <div className="text-lg mb-1">🚗</div>
                      <div>Delivering to you</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-blue-900/40 rounded-lg p-4 text-center">
                  <div className="text-blue-200 font-bold">You Describe the RESULT</div>
                  <div className="text-blue-300 text-sm mt-2">The system figures out how to achieve it</div>
                </div>
              </div>
            </div>

            {/* React Connection */}
            <div className="bg-gradient-to-r from-purple-500/20 to-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-purple-400">
              <h3 className="text-3xl font-bold text-center mb-8">🚀 React is Like the Pizza Restaurant</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* You Describe */}
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <h4 className="text-xl font-bold text-purple-300 mb-4">You Say:</h4>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <div className="text-lg text-green-300 font-mono">
                      "Show welcome message if user is logged in"
                    </div>
                  </div>
                  <div className="mt-4 text-purple-200">
                    Describe <strong>what</strong> the UI should look like
                  </div>
                </div>
                
                {/* React Handles */}
                <div className="text-center">
                  <div className="text-6xl mb-4">⚛️</div>
                  <h4 className="text-xl font-bold text-green-300 mb-4">React Handles:</h4>
                  <div className="space-y-2">
                    <div className="bg-green-900/40 rounded p-3 text-sm">
                      🔍 Finding the right DOM elements
                    </div>
                    <div className="bg-green-900/40 rounded p-3 text-sm">
                      ✏️ Updating the content
                    </div>
                    <div className="bg-green-900/40 rounded p-3 text-sm">
                      🎨 Managing styles and classes
                    </div>
                    <div className="bg-green-900/40 rounded p-3 text-sm">
                      ⚡ Optimizing performance
                    </div>
                  </div>
                  <div className="mt-4 text-green-200">
                    Figures out <strong>how</strong> to make it happen
                  </div>
                </div>
              </div>
            </div>

            {/* Key Insight */}
            <div className="mt-12 bg-yellow-500/20 backdrop-blur rounded-xl p-8 border-2 border-yellow-400">
              <div className="text-center">
                <div className="text-6xl mb-4">💡</div>
                <h4 className="text-2xl font-bold text-yellow-300 mb-6">The Mental Shift</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
                  <div className="bg-red-900/30 rounded-lg p-6">
                    <div className="text-red-300 font-bold mb-3">❌ Old Way (Imperative)</div>
                    <div className="text-white/80">
                      "Computer, do step 1, then step 2, then step 3..."
                    </div>
                    <div className="text-red-400 text-sm mt-3">
                      You're the micromanager 😰
                    </div>
                  </div>
                  <div className="bg-green-900/30 rounded-lg p-6">
                    <div className="text-green-300 font-bold mb-3">✅ React Way (Declarative)</div>
                    <div className="text-white/80">
                      "Computer, make it look like this!"
                    </div>
                    <div className="text-green-400 text-sm mt-3">
                      You're the creative director 🎨
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-600 via-purple-600 to-blue-600'
    },


    {
      id: 'movie-director-analogy',
      title: 'React: JavaScript\'s Best Friend',
      content: (
        <div className="text-white animate-fade-in">
          <h2 className="text-4xl font-extrabold mb-8 text-center">🤝 React: JavaScript's Best Friend</h2>
          
          <div className="max-w-6xl mx-auto">
            {/* Main Concept */}
            <div className="text-center mb-12">
              <div className="text-8xl mb-6">🤝</div>
              <h3 className="text-3xl font-bold text-blue-300 mb-4">A Perfect Partnership</h3>
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-6 border-2 border-blue-400 max-w-3xl mx-auto">
                <div className="text-white/90 text-lg">
                  React and JavaScript work together like <strong>best friends</strong> - each bringing their own strengths to build amazing web apps!
                </div>
              </div>
            </div>

            {/* The Partnership */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-green-300 mb-8 text-center">👫 The Dynamic Duo</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* JavaScript's Role */}
                <div className="bg-yellow-500/20 backdrop-blur rounded-xl p-8 border-2 border-yellow-400">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">🟨</div>
                    <h4 className="text-xl font-bold text-yellow-300">JavaScript: The Foundation</h4>
                    <p className="text-yellow-200 text-sm mt-2">"I handle all the logic and behavior"</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-yellow-900/30 rounded-lg p-4">
                      <div className="text-yellow-200 font-bold mb-2">🧠 Smart Thinking</div>
                      <div className="text-white/80 text-sm">Calculations, decisions, data processing</div>
                    </div>
                    <div className="bg-yellow-900/30 rounded-lg p-4">
                      <div className="text-yellow-200 font-bold mb-2">🎯 Event Handling</div>
                      <div className="text-white/80 text-sm">Clicks, form submissions, user interactions</div>
                    </div>
                    <div className="bg-yellow-900/30 rounded-lg p-4">
                      <div className="text-yellow-200 font-bold mb-2">🌐 API Communication</div>
                      <div className="text-white/80 text-sm">Fetching data, sending requests</div>
                    </div>
                    <div className="bg-yellow-900/30 rounded-lg p-4">
                      <div className="text-yellow-200 font-bold mb-2">💾 Data Management</div>
                      <div className="text-white/80 text-sm">Storing, organizing, transforming data</div>
                    </div>
                  </div>
                </div>

                {/* React's Role */}
                <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">⚛️</div>
                    <h4 className="text-xl font-bold text-blue-300">React: The UI Specialist</h4>
                    <p className="text-blue-200 text-sm mt-2">"I make the interface beautiful and efficient"</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-900/30 rounded-lg p-4">
                      <div className="text-blue-200 font-bold mb-2">🏗️ Structure Builder</div>
                      <div className="text-white/80 text-sm">Components, layouts, UI organization</div>
                    </div>
                    <div className="bg-blue-900/30 rounded-lg p-4">
                      <div className="text-blue-200 font-bold mb-2">🔄 Update Manager</div>
                      <div className="text-white/80 text-sm">Smart DOM updates, re-rendering</div>
                    </div>
                    <div className="bg-blue-900/30 rounded-lg p-4">
                      <div className="text-blue-200 font-bold mb-2">🎨 Visual Coordinator</div>
                      <div className="text-white/80 text-sm">State-to-UI synchronization</div>
                    </div>
                    <div className="bg-blue-900/30 rounded-lg p-4">
                      <div className="text-blue-200 font-bold mb-2">♻️ Reusability Master</div>
                      <div className="text-white/80 text-sm">Component reuse, props system</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How They Work Together */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-purple-300 mb-8 text-center">🔗 How They Collaborate</h3>
              
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur rounded-xl p-8 border-2 border-purple-400">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-purple-900/30 rounded-lg p-6">
                      <div className="text-4xl mb-3">📝</div>
                      <div className="text-purple-300 font-bold mb-2">1. JavaScript Thinks</div>
                      <div className="text-white/70 text-sm">Processes data, handles logic, makes decisions</div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-pink-900/30 rounded-lg p-6">
                      <div className="text-4xl mb-3">🔄</div>
                      <div className="text-pink-300 font-bold mb-2">2. React Organizes</div>
                      <div className="text-white/70 text-sm">Structures the UI, manages components</div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-blue-900/30 rounded-lg p-6">
                      <div className="text-4xl mb-3">✨</div>
                      <div className="text-blue-300 font-bold mb-2">3. Magic Happens</div>
                      <div className="text-white/70 text-sm">Beautiful, interactive user interface!</div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <div className="text-2xl mb-4">🟨 ➕ ⚛️ = 🚀</div>
                  <div className="text-purple-200 font-bold">JavaScript + React = Powerful Web Apps</div>
                </div>
              </div>
            </div>

            {/* Real Example */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-green-300 mb-8 text-center">🎯 Real Example: Todo App</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-yellow-500/20 backdrop-blur rounded-xl p-8 border-2 border-yellow-400">
                  <h4 className="text-lg font-bold text-yellow-300 mb-6">🟨 JavaScript Handles:</h4>
                  <div className="space-y-3 text-white/80 text-sm">
                    <div className="flex items-start space-x-3">
                      <div className="text-yellow-400">💾</div>
                      <div><strong>Data Storage:</strong> Array of todo items</div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="text-yellow-400">➕</div>
                      <div><strong>Adding Items:</strong> Array.push() logic</div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="text-yellow-400">✅</div>
                      <div><strong>Toggling Complete:</strong> Boolean switching</div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="text-yellow-400">🗑️</div>
                      <div><strong>Deleting Items:</strong> Array.filter() method</div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="text-yellow-400">🔍</div>
                      <div><strong>Filtering:</strong> Show all/active/completed</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400">
                  <h4 className="text-lg font-bold text-blue-300 mb-6">⚛️ React Handles:</h4>
                  <div className="space-y-3 text-white/80 text-sm">
                    <div className="flex items-start space-x-3">
                      <div className="text-blue-400">🏗️</div>
                      <div><strong>UI Structure:</strong> TodoList, TodoItem components</div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="text-blue-400">🔄</div>
                      <div><strong>Auto Updates:</strong> Re-render when todos change</div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="text-blue-400">📡</div>
                      <div><strong>Data Flow:</strong> Props from parent to children</div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="text-blue-400">🎨</div>
                      <div><strong>Visual States:</strong> Show/hide based on data</div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="text-blue-400">♻️</div>
                      <div><strong>Reusability:</strong> Same TodoItem for each todo</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Insight */}
            <div className="bg-gradient-to-r from-yellow-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400 text-center">
              <div className="text-6xl mb-4">🤝</div>
              <h4 className="text-2xl font-bold text-blue-300 mb-4">The Perfect Team</h4>
              <div className="text-white text-lg leading-relaxed mb-6">
                JavaScript provides the <strong>brain power</strong> 🧠<br/>
                React provides the <strong>UI magic</strong> ✨<br/>
                Together, they create <strong>amazing user experiences</strong>! 🚀
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-yellow-900/30 rounded-lg p-4">
                  <div className="text-yellow-300 font-bold mb-2">🟨 JavaScript Skills Transfer</div>
                  <div className="text-white/80 text-sm">Everything you know still works!</div>
                </div>
                <div className="bg-blue-900/30 rounded-lg p-4">
                  <div className="text-blue-300 font-bold mb-2">⚛️ React Adds New Powers</div>
                  <div className="text-white/80 text-sm">Components, JSX, state, props!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-yellow-600 via-blue-600 to-purple-600'
    },

    {
      id: 'components-basics',
      title: 'Components: The Foundation',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Components</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🧱</div>
            <h3 className="text-3xl font-bold mb-12">LEGO Bricks with Instructions</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400">
                <div className="text-6xl mb-6">🔧</div>
                <h4 className="text-2xl font-bold text-blue-300 mb-4">What is a Component?</h4>
                <div className="space-y-4 text-white/80 text-left">
                  <div className="bg-blue-900/50 rounded-lg p-4">
                    <div className="text-blue-200 font-bold mb-2">JavaScript Function</div>
                    <div className="text-white/90">That returns JSX (HTML-like code)</div>
                  </div>
                  <div className="bg-purple-900/50 rounded-lg p-4">
                    <div className="text-purple-200 font-bold mb-2">Reusable</div>
                    <div className="text-white/90">Use the same component many times</div>
                  </div>
                  <div className="bg-green-900/50 rounded-lg p-4">
                    <div className="text-green-200 font-bold mb-2">Composable</div>
                    <div className="text-white/90">Combine components to build complex UIs</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <div className="text-6xl mb-6">🏗️</div>
                <h4 className="text-2xl font-bold text-green-300 mb-4">Basic Component Syntax</h4>
                <div className="bg-gray-800 rounded-lg p-6 text-left">
                  <div className="text-white font-mono text-sm space-y-2">
                    <div className="text-green-400">// Simple component</div>
                    <div><span className="text-pink-400">function</span> <span className="text-yellow-400">Welcome</span>() &#123;</div>
                    <div className="ml-4"><span className="text-pink-400">return</span> &lt;<span className="text-red-400">h1</span>&gt;Hello, World!&lt;/<span className="text-red-400">h1</span>&gt;;</div>
                    <div>&#125;</div>
                    <div className="mt-4 text-green-400">// Arrow function version</div>
                    <div><span className="text-pink-400">const</span> <span className="text-yellow-400">Welcome</span> = () =&gt; &#123;</div>
                    <div className="ml-4"><span className="text-pink-400">return</span> &lt;<span className="text-red-400">h1</span>&gt;Hello, World!&lt;/<span className="text-red-400">h1</span>&gt;;</div>
                    <div>&#125;;</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-8 border border-purple-400/30 mb-8">
              <h4 className="text-3xl font-bold text-purple-300 mb-6">🎯 Component Rules</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-green-300 font-bold mb-2">✅ Do This</div>
                    <div className="text-white/80 text-sm space-y-1">
                      <div>• Always start with capital letter</div>
                      <div>• Return JSX or null</div>
                      <div>• Keep components focused (one job)</div>
                      <div>• Use descriptive names</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-red-300 font-bold mb-2">❌ Avoid This</div>
                    <div className="text-white/80 text-sm space-y-1">
                      <div>• lowercase component names</div>
                      <div>• Returning multiple elements without wrapper</div>
                      <div>• Making components too complex</div>
                      <div>• Generic names like "Component"</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-blue-700'
    },

    {
      id: 'component-patterns',
      title: 'Component Patterns & Composition',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Component Composition</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🏗️</div>
            <h3 className="text-3xl font-bold mb-12">Building Complex UIs from Simple Parts</h3>
            
            <ComponentTreeDemo />

            <div className="mt-8 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-8 border border-blue-400/30 mb-8">
              <h4 className="text-2xl font-bold text-blue-300 mb-6">🎨 Component Design Principles</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-4xl mb-4">🎯</div>
                  <div className="text-white font-bold mb-2">Single Responsibility</div>
                  <div className="text-white/70 text-sm">Each component should do one thing well</div>
                  <div className="mt-3 bg-gray-800 rounded p-3">
                    <div className="text-blue-300 font-mono text-xs">Button, Header, UserCard</div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-4xl mb-4">🔄</div>
                  <div className="text-white font-bold mb-2">Reusability</div>
                  <div className="text-white/70 text-sm">Design components to be used multiple times</div>
                  <div className="mt-3 bg-gray-800 rounded p-3">
                    <div className="text-green-300 font-mono text-xs">&lt;Button /&gt; everywhere</div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-4xl mb-4">📋</div>
                  <div className="text-white font-bold mb-2">Clear Interface</div>
                  <div className="text-white/70 text-sm">Make it obvious what props a component needs</div>
                  <div className="mt-3 bg-gray-800 rounded p-3">
                    <div className="text-purple-300 font-mono text-xs">text, color, onClick</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <h4 className="text-2xl font-bold text-yellow-300 mb-4">🧱 LEGO Brick Analogy</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">🟦</div>
                  <div className="text-white font-bold">Basic Brick</div>
                  <div className="text-white/70 text-sm">Simple component</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🏠</div>
                  <div className="text-white font-bold">House</div>
                  <div className="text-white/70 text-sm">Page component</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🚀</div>
                  <div className="text-white font-bold">Spaceship</div>
                  <div className="text-white/70 text-sm">App component</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🏰</div>
                  <div className="text-white font-bold">Castle</div>
                  <div className="text-white/70 text-sm">Complex feature</div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-white/90 text-lg">Same bricks, infinite possibilities!</p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-green-700'
    },

    {
      id: 'jsx-basics',
      title: 'JSX: HTML in JavaScript',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">JSX Syntax</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📝</div>
            <h3 className="text-3xl font-bold mb-12">HTML-like syntax in JavaScript</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400">
                <h4 className="text-2xl font-bold text-blue-300 mb-6">✅ JSX Rules</h4>
                <div className="space-y-4 text-left">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="text-green-400 text-sm mb-2">// 1. Single parent element</div>
                    <div className="text-white font-mono text-sm">
                      <div>&lt;div&gt;</div>
                      <div className="ml-4">&lt;h1&gt;Title&lt;/h1&gt;</div>
                      <div className="ml-4">&lt;p&gt;Content&lt;/p&gt;</div>
                      <div>&lt;/div&gt;</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="text-green-400 text-sm mb-2">// 2. Use className, not class</div>
                    <div className="text-white font-mono text-sm">
                      &lt;div <span className="text-yellow-400">className</span>="container"&gt;
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="text-green-400 text-sm mb-2">// 3. Self-closing tags need /</div>
                    <div className="text-white font-mono text-sm">
                      &lt;img src="photo.jpg" <span className="text-yellow-400">/</span>&gt;
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <h4 className="text-2xl font-bold text-green-300 mb-6">🎯 JavaScript in JSX</h4>
                <div className="bg-gray-800 rounded-lg p-6 text-left">
                  <div className="text-white font-mono text-sm space-y-2">
                    <div className="text-green-400">// Variables and calculations</div>
                    <div><span className="text-pink-400">const</span> name = <span className="text-orange-400">"Alice"</span>;</div>
                    <div><span className="text-pink-400">const</span> age = <span className="text-orange-400">25</span>;</div>
                    <div></div>
                    <div><span className="text-pink-400">return</span> (</div>
                    <div className="ml-4">&lt;<span className="text-red-400">div</span>&gt;</div>
                    <div className="ml-8">&lt;<span className="text-red-400">h1</span>&gt;Hi, &#123;name&#125;!&lt;/<span className="text-red-400">h1</span>&gt;</div>
                    <div className="ml-8">&lt;<span className="text-red-400">p</span>&gt;Age: &#123;age&#125;&lt;/<span className="text-red-400">p</span>&gt;</div>
                    <div className="ml-8">&lt;<span className="text-red-400">p</span>&gt;Can vote: &#123;age &gt;= 18 ? 'Yes' : 'No'&#125;&lt;/<span className="text-red-400">p</span>&gt;</div>
                    <div className="ml-4">&lt;/<span className="text-red-400">div</span>&gt;</div>
                    <div>);</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <h4 className="text-2xl font-bold text-yellow-300 mb-4">💡 Why JSX?</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">👀</div>
                  <div className="text-white font-bold mb-2">Readable</div>
                  <div className="text-white/70 text-sm">See your UI structure clearly</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">⚡</div>
                  <div className="text-white font-bold mb-2">Powerful</div>
                  <div className="text-white/70 text-sm">Mix HTML with JavaScript logic</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🔧</div>
                  <div className="text-white font-bold mb-2">Familiar</div>
                  <div className="text-white/70 text-sm">Looks like HTML you already know</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-indigo-700'
    },

    {
      id: 'jsx-syntax-deep-dive',
      title: 'JSX: The 3 Golden Rules',
      content: (
        <div className="text-white animate-fade-in">
          <h2 className="text-4xl font-extrabold mb-8 text-center">📜 JSX: The 3 Golden Rules</h2>
          
          <div className="max-w-6xl mx-auto">
            {/* Rule 1: Single Parent - Visual Diagram */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-blue-300 mb-8 text-center">📦 Rule 1: One Parent Container</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Wrong Way - Visual */}
                <div className="bg-red-500/20 backdrop-blur rounded-xl p-8 border-2 border-red-400">
                  <h4 className="text-xl font-bold text-red-300 mb-6 text-center">❌ Like Loose Papers</h4>
                  
                  <div className="flex flex-col items-center space-y-4 mb-6">
                    <div className="text-6xl">📄</div>
                    <div className="text-6xl">📄</div>
                    <div className="text-red-300 font-bold">Floating around separately!</div>
                  </div>
                  
                  <div className="bg-red-900/30 rounded-lg p-4 text-center">
                    <div className="text-red-200 font-bold mb-2">🚫 JSX Says "NO!"</div>
                    <div className="text-red-300 text-sm">Components must return ONE thing</div>
                  </div>
                </div>

                {/* Right Way - Visual */}
                <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                  <h4 className="text-xl font-bold text-green-300 mb-6 text-center">✅ Like Papers in a Folder</h4>
                  
                  <div className="flex flex-col items-center space-y-4 mb-6">
                    <div className="bg-green-800/40 rounded-lg p-4 border-2 border-green-400">
                      <div className="text-4xl mb-2">📁</div>
                      <div className="flex space-x-2">
                        <div className="text-2xl">📄</div>
                        <div className="text-2xl">📄</div>
                      </div>
                    </div>
                    <div className="text-green-300 font-bold">All organized together!</div>
                  </div>
                  
                  <div className="bg-green-900/30 rounded-lg p-4 text-center">
                    <div className="text-green-200 font-bold mb-2">🎉 JSX Says "YES!"</div>
                    <div className="text-green-300 text-sm">Everything wrapped in one container</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rule 2: Different Names - Visual */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-purple-300 mb-8 text-center">🏷️ Rule 2: JSX Speaks JavaScript</h3>
              
              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-8 border-2 border-purple-400">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">🔄</div>
                  <div className="text-purple-200 text-lg">HTML → JavaScript Translation</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-purple-900/30 rounded-lg p-6">
                      <div className="text-4xl mb-4">🎨</div>
                      <div className="text-white font-bold mb-4">CSS Classes</div>
                      
                      <div className="bg-red-800/40 rounded p-3 mb-2">
                        <div className="text-red-300 text-sm">HTML: class</div>
                      </div>
                      <div className="text-2xl mb-2">⬇️</div>
                      <div className="bg-green-800/40 rounded p-3">
                        <div className="text-green-300 text-sm">JSX: className</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-900/30 rounded-lg p-6">
                      <div className="text-4xl mb-4">👆</div>
                      <div className="text-white font-bold mb-4">Click Events</div>
                      
                      <div className="bg-red-800/40 rounded p-3 mb-2">
                        <div className="text-red-300 text-sm">HTML: onclick</div>
                      </div>
                      <div className="text-2xl mb-2">⬇️</div>
                      <div className="bg-green-800/40 rounded p-3">
                        <div className="text-green-300 text-sm">JSX: onClick</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-900/30 rounded-lg p-6">
                      <div className="text-4xl mb-4">🏷️</div>
                      <div className="text-white font-bold mb-4">Form Labels</div>
                      
                      <div className="bg-red-800/40 rounded p-3 mb-2">
                        <div className="text-red-300 text-sm">HTML: for</div>
                      </div>
                      <div className="text-2xl mb-2">⬇️</div>
                      <div className="bg-green-800/40 rounded p-3">
                        <div className="text-green-300 text-sm">JSX: htmlFor</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <div className="bg-purple-900/40 rounded-lg p-4">
                    <div className="text-purple-200 font-bold">💡 Why Different Names?</div>
                    <div className="text-white/80 text-sm mt-2">JSX is JavaScript! It follows JavaScript rules like camelCase</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rule 3: Self-Closing - Visual */}
            <div>
              <h3 className="text-2xl font-bold text-orange-300 mb-8 text-center">🔒 Rule 3: Close Every Door</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-red-500/20 backdrop-blur rounded-xl p-8 border-2 border-red-400">
                  <h4 className="text-xl font-bold text-red-300 mb-6 text-center">❌ HTML: Doors Left Open</h4>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between bg-red-900/30 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">🖼️</div>
                        <div>Image tag</div>
                      </div>
                      <div className="text-red-300 font-bold">🚪 OPEN</div>
                    </div>
                    
                    <div className="flex items-center justify-between bg-red-900/30 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">↩️</div>
                        <div>Line break</div>
                      </div>
                      <div className="text-red-300 font-bold">🚪 OPEN</div>
                    </div>
                    
                    <div className="flex items-center justify-between bg-red-900/30 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">📝</div>
                        <div>Input field</div>
                      </div>
                      <div className="text-red-300 font-bold">🚪 OPEN</div>
                    </div>
                  </div>
                  
                  <div className="text-center text-red-200">
                    <div className="text-4xl mb-2">😱</div>
                    <div className="font-bold">JSX gets confused!</div>
                  </div>
                </div>
                
                <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                  <h4 className="text-xl font-bold text-green-300 mb-6 text-center">✅ JSX: All Doors Closed</h4>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between bg-green-900/30 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">🖼️</div>
                        <div>Image tag</div>
                      </div>
                      <div className="text-green-300 font-bold">🚪✅ /&gt;</div>
                    </div>
                    
                    <div className="flex items-center justify-between bg-green-900/30 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">↩️</div>
                        <div>Line break</div>
                      </div>
                      <div className="text-green-300 font-bold">🚪✅ /&gt;</div>
                    </div>
                    
                    <div className="flex items-center justify-between bg-green-900/30 rounded-lg p-4">
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">📝</div>
                        <div>Input field</div>
                      </div>
                      <div className="text-green-300 font-bold">🚪✅ /&gt;</div>
                    </div>
                  </div>
                  
                  <div className="text-center text-green-200">
                    <div className="text-4xl mb-2">🎉</div>
                    <div className="font-bold">JSX is happy!</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="mt-12 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-orange-500/20 rounded-xl p-8 border-2 border-blue-400">
              <h4 className="text-2xl font-bold text-center mb-6">🎯 Remember the 3 Rules</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl mb-2">📁</div>
                  <div className="text-blue-300 font-bold">One Container</div>
                  <div className="text-white/70 text-sm">Everything in one wrapper</div>
                </div>
                <div>
                  <div className="text-4xl mb-2">🔄</div>
                  <div className="text-purple-300 font-bold">JavaScript Names</div>
                  <div className="text-white/70 text-sm">className, onClick, htmlFor</div>
                </div>
                <div>
                  <div className="text-4xl mb-2">🚪</div>
                  <div className="text-orange-300 font-bold">Close All Tags</div>
                  <div className="text-white/70 text-sm">Add /&gt; to self-closing tags</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 via-purple-600 to-orange-600'
    },

    {
      id: 'jsx-javascript-expressions',
      title: 'JSX: The Magic Curly Braces',
      content: (
        <div className="text-white animate-fade-in">
          <h2 className="text-4xl font-extrabold mb-8 text-center">🪄 The Magic Curly Braces</h2>
          
          <div className="max-w-6xl mx-auto">
            {/* Main Concept */}
            <div className="text-center mb-12">
              <div className="text-8xl mb-6">&#123; &#125;</div>
              <h3 className="text-3xl font-bold text-blue-300 mb-4">JavaScript Portal in HTML</h3>
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-6 border-2 border-blue-400 max-w-2xl mx-auto">
                <div className="text-white/90 text-lg">
                  Think of &#123; &#125; as a <strong>magic portal</strong> that lets JavaScript escape into your HTML world!
                </div>
              </div>
            </div>

            {/* Visual Explanation */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-green-300 mb-8 text-center">🌍 Two Worlds, One Language</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* HTML World */}
                <div className="bg-orange-500/20 backdrop-blur rounded-xl p-8 border-2 border-orange-400">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">🏠</div>
                    <h4 className="text-xl font-bold text-orange-300">HTML World</h4>
                    <p className="text-orange-200 text-sm">Static, structured content</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-orange-900/30 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">📝</div>
                      <div className="text-white">Fixed text</div>
                    </div>
                    <div className="bg-orange-900/30 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🏷️</div>
                      <div className="text-white">Static labels</div>
                    </div>
                    <div className="bg-orange-900/30 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">📦</div>
                      <div className="text-white">Container structure</div>
                    </div>
                  </div>
                </div>

                {/* JavaScript World */}
                <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-4">⚡</div>
                    <h4 className="text-xl font-bold text-blue-300">JavaScript World</h4>
                    <p className="text-blue-200 text-sm">Dynamic, calculated values</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-900/30 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🔢</div>
                      <div className="text-white">Math & calculations</div>
                    </div>
                    <div className="bg-blue-900/30 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">📊</div>
                      <div className="text-white">Data from variables</div>
                    </div>
                    <div className="bg-blue-900/30 rounded-lg p-4 text-center">
                      <div className="text-2xl mb-2">🔄</div>
                      <div className="text-white">Functions & logic</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Portal Examples */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-purple-300 mb-8 text-center">🚪 Opening the Portal</h3>
              
              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-8 border-2 border-purple-400">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Simple Examples */}
                  <div>
                    <h4 className="text-lg font-bold text-purple-200 mb-6">🔤 Simple Escapes</h4>
                    <div className="space-y-4">
                      <div className="bg-gray-900 rounded-lg p-4">
                        <div className="text-center mb-3">
                          <div className="text-2xl">👤</div>
                          <div className="text-white text-sm">Show a name</div>
                        </div>
                        <div className="bg-purple-800/30 rounded p-3 text-center">
                          <span className="text-orange-300">Hello, </span>
                          <span className="bg-blue-600/50 px-2 py-1 rounded">&#123;name&#125;</span>
                          <span className="text-orange-300">!</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-900 rounded-lg p-4">
                        <div className="text-center mb-3">
                          <div className="text-2xl">🎂</div>
                          <div className="text-white text-sm">Show an age</div>
                        </div>
                        <div className="bg-purple-800/30 rounded p-3 text-center">
                          <span className="text-orange-300">Age: </span>
                          <span className="bg-blue-600/50 px-2 py-1 rounded">&#123;user.age&#125;</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Advanced Examples */}
                  <div>
                    <h4 className="text-lg font-bold text-purple-200 mb-6">🧮 Smart Calculations</h4>
                    <div className="space-y-4">
                      <div className="bg-gray-900 rounded-lg p-4">
                        <div className="text-center mb-3">
                          <div className="text-2xl">💰</div>
                          <div className="text-white text-sm">Calculate total</div>
                        </div>
                        <div className="bg-purple-800/30 rounded p-3 text-center">
                          <span className="text-orange-300">Total: $</span>
                          <span className="bg-blue-600/50 px-2 py-1 rounded">&#123;price * quantity&#125;</span>
                        </div>
                      </div>
                      
                      <div className="bg-gray-900 rounded-lg p-4">
                        <div className="text-center mb-3">
                          <div className="text-2xl">🔀</div>
                          <div className="text-white text-sm">Conditional display</div>
                        </div>
                        <div className="bg-purple-800/30 rounded p-3 text-center">
                          <span className="text-orange-300">Status: </span>
                          <span className="bg-blue-600/50 px-2 py-1 rounded text-xs">&#123;isOnline ? "🟢 Online" : "🔴 Offline"&#125;</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rules */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-yellow-300 mb-8 text-center">⚡ Portal Rules</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* What Works */}
                <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-2">✅</div>
                    <h4 className="text-lg font-bold text-green-300">Portal Accepts</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 bg-green-900/30 rounded-lg p-3">
                      <div className="text-2xl">📊</div>
                      <div className="text-white text-sm">Values (numbers, strings, booleans)</div>
                    </div>
                    <div className="flex items-center space-x-3 bg-green-900/30 rounded-lg p-3">
                      <div className="text-2xl">🧮</div>
                      <div className="text-white text-sm">Calculations (2 + 3, price * tax)</div>
                    </div>
                    <div className="flex items-center space-x-3 bg-green-900/30 rounded-lg p-3">
                      <div className="text-2xl">⚡</div>
                      <div className="text-white text-sm">Function calls (getName(), formatDate())</div>
                    </div>
                    <div className="flex items-center space-x-3 bg-green-900/30 rounded-lg p-3">
                      <div className="text-2xl">🔀</div>
                      <div className="text-white text-sm">Ternary operators (a ? b : c)</div>
                    </div>
                  </div>
                </div>

                {/* What Doesn't Work */}
                <div className="bg-red-500/20 backdrop-blur rounded-xl p-8 border-2 border-red-400">
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-2">❌</div>
                    <h4 className="text-lg font-bold text-red-300">Portal Rejects</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 bg-red-900/30 rounded-lg p-3">
                      <div className="text-2xl">🚫</div>
                      <div className="text-white text-sm">If statements (use ternary instead)</div>
                    </div>
                    <div className="flex items-center space-x-3 bg-red-900/30 rounded-lg p-3">
                      <div className="text-2xl">🔄</div>
                      <div className="text-white text-sm">For loops (use .map() instead)</div>
                    </div>
                    <div className="flex items-center space-x-3 bg-red-900/30 rounded-lg p-3">
                      <div className="text-2xl">📦</div>
                      <div className="text-white text-sm">Raw objects (extract values first)</div>
                    </div>
                    <div className="flex items-center space-x-3 bg-red-900/30 rounded-lg p-3">
                      <div className="text-2xl">🔤</div>
                      <div className="text-white text-sm">Multiple statements (one expression only)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Insight */}
            <div className="bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400 text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h4 className="text-2xl font-bold text-blue-300 mb-4">The Golden Rule</h4>
              <div className="text-white text-lg leading-relaxed">
                Inside &#123; &#125;, you can put anything that <strong>returns a value</strong>.<br/>
                If it would work on the right side of <code>const result = ...</code>, it works in JSX!
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-green-900/30 rounded-lg p-4">
                  <div className="text-green-300 font-bold mb-2">✅ Returns a value:</div>
                  <div className="text-sm text-white/80">name, 2+3, user.age, getName()</div>
                </div>
                <div className="bg-red-900/30 rounded-lg p-4">
                  <div className="text-red-300 font-bold mb-2">❌ Doesn't return:</div>
                  <div className="text-sm text-white/80">if(...), for(...), console.log()</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 via-blue-600 to-purple-600'
    },

    {
      id: 'jsx-advanced',
      title: 'JSX Patterns & Lists',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Advanced JSX</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🎨</div>
            <h3 className="text-3xl font-bold mb-12">Conditional Rendering & Lists</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-8 border-2 border-purple-400">
                <h4 className="text-2xl font-bold text-purple-300 mb-6">🔀 Conditional Rendering</h4>
                <div className="space-y-4 text-left">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="text-green-400 text-sm mb-2">// && for simple conditions</div>
                    <div className="text-white font-mono text-sm">
                      &#123;user.isAdmin && &lt;AdminPanel /&gt;&#125;
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="text-green-400 text-sm mb-2">// Ternary for either/or</div>
                    <div className="text-white font-mono text-sm space-y-1">
                      <div>&#123;user ? (</div>
                      <div className="ml-4">&lt;Welcome name=&#123;user.name&#125; /&gt;</div>
                      <div>) : (</div>
                      <div className="ml-4">&lt;LoginButton /&gt;</div>
                      <div>)&#125;</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="text-green-400 text-sm mb-2">// Early return for complex logic</div>
                    <div className="text-white font-mono text-sm space-y-1">
                      <div>if (!user) return &lt;Login /&gt;;</div>
                      <div>return &lt;Dashboard /&gt;;</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400">
                <h4 className="text-2xl font-bold text-blue-300 mb-6">📋 Rendering Lists</h4>
                <div className="bg-gray-800 rounded-lg p-6 text-left">
                  <div className="text-white font-mono text-sm space-y-2">
                    <div className="text-green-400">// Array of data</div>
                    <div><span className="text-pink-400">const</span> users = [</div>
                    <div className="ml-4">&#123; id: 1, name: 'Alice' &#125;,</div>
                    <div className="ml-4">&#123; id: 2, name: 'Bob' &#125;</div>
                    <div>];</div>
                    <div></div>
                    <div className="text-green-400">// Map to JSX elements</div>
                    <div>&lt;ul&gt;</div>
                    <div className="ml-4">&#123;users.map(user =&gt; (</div>
                    <div className="ml-8">&lt;li <span className="text-yellow-400">key=&#123;user.id&#125;</span>&gt;</div>
                    <div className="ml-12">&#123;user.name&#125;</div>
                    <div className="ml-8">&lt;/li&gt;</div>
                    <div className="ml-4">))&#125;</div>
                    <div>&lt;/ul&gt;</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-xl p-8 border border-red-400/30 mb-8">
              <h4 className="text-3xl font-bold text-red-300 mb-6">🔑 Keys: Student ID Numbers</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center bg-red-900/30 rounded-lg p-6">
                  <div className="text-5xl mb-4">🎓</div>
                  <h5 className="text-xl font-bold text-white mb-3">Classroom</h5>
                  <div className="text-white/80 text-sm mb-2">
                    Students move seats, new students join
                  </div>
                  <div className="bg-red-800/50 rounded p-2">
                    <div className="text-red-200 text-xs">= Dynamic List</div>
                  </div>
                </div>
                <div className="text-center bg-yellow-900/30 rounded-lg p-6">
                  <div className="text-5xl mb-4">🆔</div>
                  <h5 className="text-xl font-bold text-white mb-3">Student IDs</h5>
                  <div className="text-white/80 text-sm mb-2">
                    Teacher tracks who is who by ID number
                  </div>
                  <div className="bg-yellow-800/50 rounded p-2">
                    <div className="text-yellow-200 text-xs">= React Keys</div>
                  </div>
                </div>
                <div className="text-center bg-green-900/30 rounded-lg p-6">
                  <div className="text-5xl mb-4">⚡</div>
                  <h5 className="text-xl font-bold text-white mb-3">Efficiency</h5>
                  <div className="text-white/80 text-sm mb-2">
                    Quick identification = faster updates
                  </div>
                  <div className="bg-green-800/50 rounded p-2">
                    <div className="text-green-200 text-xs">= Performance</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-gray-800 rounded-lg p-4">
                <div className="text-red-300 font-bold mb-2">❌ Bad: Using array index</div>
                <div className="text-white font-mono text-sm mb-3">
                  &#123;items.map((item, index) =&gt; &lt;div key=&#123;index&#125;&gt;...&lt;/div&gt;)&#125;
                </div>
                <div className="text-green-300 font-bold mb-2">✅ Good: Using unique ID</div>
                <div className="text-white font-mono text-sm">
                  &#123;items.map(item =&gt; &lt;div key=&#123;item.id&#125;&gt;...&lt;/div&gt;)&#125;
                </div>
              </div>
            </div>

            <div className="bg-orange-500/20 rounded-xl p-6 border border-orange-400/30">
              <h4 className="text-2xl font-bold text-orange-300 mb-4">🚨 Common JSX Mistakes</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-red-300 font-bold mb-3">❌ Don't Do</div>
                  <div className="text-white/80 text-sm space-y-2">
                    <div>• Forget to close self-closing tags</div>
                    <div>• Use class instead of className</div>
                    <div>• Return multiple elements without wrapper</div>
                    <div>• Use array index as key</div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-green-300 font-bold mb-3">✅ Do This</div>
                  <div className="text-white/80 text-sm space-y-2">
                    <div>• Always close tags: &lt;br /&gt;</div>
                    <div>• Use className for CSS classes</div>
                    <div>• Wrap in &lt;div&gt; or &lt;&gt;&lt;/&gt;</div>
                    <div>• Use unique, stable keys</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-700'
    },

    {
      id: 'props-chef',
      title: 'Props: Ingredients for Components',
      content: (
        <div className="text-white animate-fade-in">
          <h2 className="text-5xl font-extrabold mb-8 text-center">Props</h2>
          <div className="mb-6 text-center">
            <p className="text-xl text-white/80">Like giving ingredients to a chef!</p>
          </div>
          
          <PropsFlowDemo />
        </div>
      ),
      bgGradient: 'from-orange-600 to-red-700'
    },

    {
      id: 'props-types-deep-dive',
      title: 'Props: The Universal Ingredient Box',
      content: (
        <div className="text-white animate-fade-in">
          <h2 className="text-4xl font-extrabold mb-8 text-center">🧰 Props: The Universal Ingredient Box</h2>
          
          <div className="max-w-6xl mx-auto">
            {/* Main Analogy */}
            <div className="text-center mb-12">
              <div className="text-8xl mb-6">👨‍🍳</div>
              <h3 className="text-3xl font-bold text-blue-300 mb-4">Chef's Ingredient Cabinet</h3>
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-6 border-2 border-blue-400 max-w-3xl mx-auto">
                <div className="text-white/90 text-lg">
                  Just like a chef can use <strong>any ingredient</strong> to make a dish, 
                  React components can accept <strong>any type of data</strong> as props!
                </div>
              </div>
            </div>

            {/* Ingredient Types */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-green-300 mb-8 text-center">🥘 What's in the Ingredient Box?</h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {/* String Ingredients */}
                <div className="bg-blue-500/20 backdrop-blur rounded-xl p-6 border-2 border-blue-400 text-center">
                  <div className="text-6xl mb-4">📝</div>
                  <h4 className="text-xl font-bold text-blue-300 mb-3">Text Ingredients</h4>
                  <div className="bg-blue-900/30 rounded-lg p-4 mb-4">
                    <div className="text-2xl mb-2">🏷️</div>
                    <div className="text-white text-sm">Names, labels, messages</div>
                  </div>
                  <div className="text-blue-200 text-sm">
                    Perfect for titles, descriptions, user names
                  </div>
                </div>

                {/* Number Ingredients */}
                <div className="bg-purple-500/20 backdrop-blur rounded-xl p-6 border-2 border-purple-400 text-center">
                  <div className="text-6xl mb-4">🔢</div>
                  <h4 className="text-xl font-bold text-purple-300 mb-3">Number Ingredients</h4>
                  <div className="bg-purple-900/30 rounded-lg p-4 mb-4">
                    <div className="text-2xl mb-2">⚖️</div>
                    <div className="text-white text-sm">Counts, prices, ages</div>
                  </div>
                  <div className="text-purple-200 text-sm">
                    Great for quantities, scores, measurements
                  </div>
                </div>

                {/* Boolean Ingredients */}
                <div className="bg-green-500/20 backdrop-blur rounded-xl p-6 border-2 border-green-400 text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <h4 className="text-xl font-bold text-green-300 mb-3">Yes/No Ingredients</h4>
                  <div className="bg-green-900/30 rounded-lg p-4 mb-4">
                    <div className="text-2xl mb-2">🔘</div>
                    <div className="text-white text-sm">True or false choices</div>
                  </div>
                  <div className="text-green-200 text-sm">
                    Perfect for on/off, visible/hidden
                  </div>
                </div>

                {/* Array Ingredients */}
                <div className="bg-yellow-500/20 backdrop-blur rounded-xl p-6 border-2 border-yellow-400 text-center">
                  <div className="text-6xl mb-4">📋</div>
                  <h4 className="text-xl font-bold text-yellow-300 mb-3">List Ingredients</h4>
                  <div className="bg-yellow-900/30 rounded-lg p-4 mb-4">
                    <div className="text-2xl mb-2">📝</div>
                    <div className="text-white text-sm">Multiple items together</div>
                  </div>
                  <div className="text-yellow-200 text-sm">
                    Great for todos, menu items, tags
                  </div>
                </div>

                {/* Object Ingredients */}
                <div className="bg-red-500/20 backdrop-blur rounded-xl p-6 border-2 border-red-400 text-center">
                  <div className="text-6xl mb-4">📦</div>
                  <h4 className="text-xl font-bold text-red-300 mb-3">Package Ingredients</h4>
                  <div className="bg-red-900/30 rounded-lg p-4 mb-4">
                    <div className="text-2xl mb-2">🎁</div>
                    <div className="text-white text-sm">Related data bundled</div>
                  </div>
                  <div className="text-red-200 text-sm">
                    Perfect for user profiles, settings
                  </div>
                </div>

                {/* Function Ingredients */}
                <div className="bg-orange-500/20 backdrop-blur rounded-xl p-6 border-2 border-orange-400 text-center">
                  <div className="text-6xl mb-4">⚡</div>
                  <h4 className="text-xl font-bold text-orange-300 mb-3">Action Ingredients</h4>
                  <div className="bg-orange-900/30 rounded-lg p-4 mb-4">
                    <div className="text-2xl mb-2">🎬</div>
                    <div className="text-white text-sm">Things that DO stuff</div>
                  </div>
                  <div className="text-orange-200 text-sm">
                    Great for clicks, submissions, changes
                  </div>
                </div>
              </div>
            </div>

            {/* Recipe Example */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-pink-300 mb-8 text-center">🍽️ Making a Dish (Component)</h3>
              
              <div className="bg-pink-500/20 backdrop-blur rounded-xl p-8 border-2 border-pink-400">
                <div className="text-center mb-8">
                  <div className="text-6xl mb-4">🍕</div>
                  <h4 className="text-2xl font-bold text-pink-300">UserProfile Pizza Recipe</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Ingredients List */}
                  <div>
                    <h5 className="text-lg font-bold text-pink-200 mb-6">📝 Ingredients Needed:</h5>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 bg-pink-900/30 rounded-lg p-3">
                        <div className="text-2xl">📝</div>
                        <div className="text-white">1 cup of <strong>name</strong> (text)</div>
                      </div>
                      <div className="flex items-center space-x-3 bg-pink-900/30 rounded-lg p-3">
                        <div className="text-2xl">🔢</div>
                        <div className="text-white">25 pieces of <strong>age</strong> (number)</div>
                      </div>
                      <div className="flex items-center space-x-3 bg-pink-900/30 rounded-lg p-3">
                        <div className="text-2xl">✅</div>
                        <div className="text-white">A pinch of <strong>isOnline</strong> (true/false)</div>
                      </div>
                      <div className="flex items-center space-x-3 bg-pink-900/30 rounded-lg p-3">
                        <div className="text-2xl">📋</div>
                        <div className="text-white">A handful of <strong>hobbies</strong> (list)</div>
                      </div>
                      <div className="flex items-center space-x-3 bg-pink-900/30 rounded-lg p-3">
                        <div className="text-2xl">⚡</div>
                        <div className="text-white">1 <strong>onClick</strong> action (function)</div>
                      </div>
                    </div>
                  </div>

                  {/* Final Dish */}
                  <div>
                    <h5 className="text-lg font-bold text-pink-200 mb-6">🍽️ Final Dish:</h5>
                    <div className="bg-gray-900 rounded-lg p-6 border-2 border-pink-300">
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 bg-pink-400 rounded-full mx-auto mb-3 flex items-center justify-center">
                          <div className="text-2xl">👤</div>
                        </div>
                        <div className="text-xl font-bold text-white">Alice Johnson</div>
                        <div className="text-pink-300">Age: 25</div>
                        <div className="flex items-center justify-center space-x-2 mt-2">
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          <div className="text-green-300 text-sm">Online</div>
                        </div>
                      </div>
                      
                      <div className="text-center mb-4">
                        <div className="text-sm text-gray-300 mb-2">Hobbies:</div>
                        <div className="flex flex-wrap justify-center gap-2">
                          <span className="bg-pink-600/50 px-3 py-1 rounded-full text-xs">Reading</span>
                          <span className="bg-pink-600/50 px-3 py-1 rounded-full text-xs">Coding</span>
                          <span className="bg-pink-600/50 px-3 py-1 rounded-full text-xs">Gaming</span>
                        </div>
                      </div>
                      
                      <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg transition-colors">
                        Edit Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chef's Rules */}
            <div className="bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400">
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">👨‍🍳</div>
                <h4 className="text-2xl font-bold text-blue-300">Chef's Golden Rules</h4>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-blue-900/30 rounded-lg p-6">
                    <div className="text-4xl mb-3">🔒</div>
                    <div className="text-blue-300 font-bold mb-2">Don't Change Ingredients</div>
                    <div className="text-white/80 text-sm">Use ingredients as given - don't modify them!</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-purple-900/30 rounded-lg p-6">
                    <div className="text-4xl mb-3">⬇️</div>
                    <div className="text-purple-300 font-bold mb-2">Ingredients Come From Above</div>
                    <div className="text-white/80 text-sm">The head chef (parent) provides all ingredients</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-pink-900/30 rounded-lg p-6">
                    <div className="text-4xl mb-3">🔄</div>
                    <div className="text-pink-300 font-bold mb-2">Same Recipe, Different Dishes</div>
                    <div className="text-white/80 text-sm">Different ingredients = different final results</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 via-purple-600 to-pink-600'
    },

    {
      id: 'props-destructuring-defaults',
      title: 'Props: Clean Code Patterns',
      content: (
        <div className="text-white animate-fade-in">
          <h2 className="text-4xl font-extrabold mb-8 text-center">✨ Props Best Practices</h2>
          
          <div className="max-w-6xl mx-auto">
            {/* Destructuring Comparison */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-blue-300 mb-8 text-center">🎯 Destructuring: Clean & Readable</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Before - Messy */}
                <div className="bg-red-500/20 backdrop-blur rounded-xl p-8 border-2 border-red-400">
                  <h4 className="text-xl font-bold text-red-300 mb-6">❌ Repetitive & Messy</h4>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <div className="font-mono text-sm space-y-1">
                      <div><span className="text-pink-400">function</span> <span className="text-blue-400">UserCard</span>(props) &#123;</div>
                      <div className="ml-4"><span className="text-pink-400">return</span> (</div>
                      <div className="ml-8">&lt;<span className="text-red-400">div</span>&gt;</div>
                      <div className="ml-12">&lt;<span className="text-red-400">h2</span>&gt;&#123;props.name&#125;&lt;/<span className="text-red-400">h2</span>&gt;</div>
                      <div className="ml-12">&lt;<span className="text-red-400">p</span>&gt;Age: &#123;props.age&#125;&lt;/<span className="text-red-400">p</span>&gt;</div>
                      <div className="ml-12">&lt;<span className="text-red-400">p</span>&gt;Email: &#123;props.email&#125;&lt;/<span className="text-red-400">p</span>&gt;</div>
                      <div className="ml-12">&lt;<span className="text-red-400">p</span>&gt;City: &#123;props.address.city&#125;&lt;/<span className="text-red-400">p</span>&gt;</div>
                      <div className="ml-12">&lt;<span className="text-red-400">button</span> <span className="text-green-400">onClick</span>=&#123;props.onEdit&#125;&gt;</div>
                      <div className="ml-16">Edit Profile</div>
                      <div className="ml-12">&lt;/<span className="text-red-400">button</span>&gt;</div>
                      <div className="ml-8">&lt;/<span className="text-red-400">div</span>&gt;</div>
                      <div className="ml-4">);</div>
                      <div>&#125;</div>
                    </div>
                  </div>
                  <div className="mt-4 text-red-200 text-sm">
                    😰 So much <code>props.props.props</code>!
                  </div>
                </div>

                {/* After - Clean */}
                <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                  <h4 className="text-xl font-bold text-green-300 mb-6">✅ Clean & Readable</h4>
                  <div className="bg-gray-900 rounded-lg p-6">
                    <div className="font-mono text-sm space-y-1">
                      <div><span className="text-pink-400">function</span> <span className="text-blue-400">UserCard</span>(&#123;</div>
                      <div className="ml-4">name,</div>
                      <div className="ml-4">age,</div>
                      <div className="ml-4">email,</div>
                      <div className="ml-4">address,</div>
                      <div className="ml-4">onEdit</div>
                      <div>&#125;) &#123;</div>
                      <div className="ml-4"><span className="text-pink-400">return</span> (</div>
                      <div className="ml-8">&lt;<span className="text-red-400">div</span>&gt;</div>
                      <div className="ml-12">&lt;<span className="text-red-400">h2</span>&gt;&#123;name&#125;&lt;/<span className="text-red-400">h2</span>&gt;</div>
                      <div className="ml-12">&lt;<span className="text-red-400">p</span>&gt;Age: &#123;age&#125;&lt;/<span className="text-red-400">p</span>&gt;</div>
                      <div className="ml-12">&lt;<span className="text-red-400">p</span>&gt;Email: &#123;email&#125;&lt;/<span className="text-red-400">p</span>&gt;</div>
                      <div className="ml-12">&lt;<span className="text-red-400">p</span>&gt;City: &#123;address.city&#125;&lt;/<span className="text-red-400">p</span>&gt;</div>
                      <div className="ml-12">&lt;<span className="text-red-400">button</span> <span className="text-green-400">onClick</span>=&#123;onEdit&#125;&gt;</div>
                      <div className="ml-16">Edit Profile</div>
                      <div className="ml-12">&lt;/<span className="text-red-400">button</span>&gt;</div>
                      <div className="ml-8">&lt;/<span className="text-red-400">div</span>&gt;</div>
                      <div className="ml-4">);</div>
                      <div>&#125;</div>
                    </div>
                  </div>
                  <div className="mt-4 text-green-200 text-sm">
                    🎉 Much cleaner and easier to read!
                  </div>
                </div>
              </div>
            </div>

            {/* Default Values */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-purple-300 mb-8 text-center">🎨 Default Values: Smart Fallbacks</h3>
              
              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-8 border-2 border-purple-400">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-purple-200 mb-4">Component with Defaults:</h4>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <div className="font-mono text-sm space-y-1">
                        <div><span className="text-pink-400">function</span> <span className="text-blue-400">Button</span>(&#123;</div>
                        <div className="ml-4">text = <span className="text-yellow-400">"Click me"</span>,</div>
                        <div className="ml-4">color = <span className="text-yellow-400">"blue"</span>,</div>
                        <div className="ml-4">size = <span className="text-yellow-400">"medium"</span>,</div>
                        <div className="ml-4">disabled = <span className="text-orange-400">false</span></div>
                        <div>&#125;) &#123;</div>
                        <div className="ml-4"><span className="text-pink-400">return</span> (</div>
                        <div className="ml-8">&lt;<span className="text-red-400">button</span></div>
                        <div className="ml-12"><span className="text-green-400">className</span>=&#123;`btn-$&#123;color&#125; btn-$&#123;size&#125;`&#125;</div>
                        <div className="ml-12"><span className="text-green-400">disabled</span>=&#123;disabled&#125;</div>
                        <div className="ml-8">&gt;</div>
                        <div className="ml-12">&#123;text&#125;</div>
                        <div className="ml-8">&lt;/<span className="text-red-400">button</span>&gt;</div>
                        <div className="ml-4">);</div>
                        <div>&#125;</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-purple-200 mb-4">Usage Examples:</h4>
                    <div className="space-y-3">
                      <div className="bg-gray-900 rounded-lg p-3">
                        <div className="font-mono text-sm text-green-300">
                          &lt;Button /&gt;
                        </div>
                        <div className="text-purple-200 text-xs mt-1">
                          Uses all defaults
                        </div>
                      </div>
                      
                      <div className="bg-gray-900 rounded-lg p-3">
                        <div className="font-mono text-sm text-green-300">
                          &lt;Button text="Save" /&gt;
                        </div>
                        <div className="text-purple-200 text-xs mt-1">
                          Custom text, other defaults
                        </div>
                      </div>
                      
                      <div className="bg-gray-900 rounded-lg p-3">
                        <div className="font-mono text-sm text-green-300">
                          &lt;Button text="Delete" color="red" /&gt;
                        </div>
                        <div className="text-purple-200 text-xs mt-1">
                          Custom text and color
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pro Tips */}
            <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur rounded-xl p-8 border-2 border-orange-400">
              <h4 className="text-2xl font-bold text-orange-300 mb-6 text-center">💡 Pro Tips</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-orange-900/30 rounded-lg p-6">
                  <div className="text-orange-200 font-bold mb-3">🎯 Naming Convention</div>
                  <div className="text-white/80 text-sm space-y-2">
                    <div>• Use descriptive names: <code>userName</code> not <code>data</code></div>
                    <div>• Boolean props: <code>isLoading</code>, <code>hasError</code></div>
                    <div>• Event handlers: <code>onClick</code>, <code>onSubmit</code></div>
                  </div>
                </div>
                
                <div className="bg-yellow-900/30 rounded-lg p-6">
                  <div className="text-yellow-200 font-bold mb-3">⚡ Performance Tip</div>
                  <div className="text-white/80 text-sm space-y-2">
                    <div>• Don't create objects/arrays in JSX</div>
                    <div>• Define them outside or use useMemo</div>
                    <div>• Avoid: <code>data=&#123;&#123;name: 'Bob'&#125;&#125;</code></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 via-blue-600 to-green-600'
    },

    {
      id: 'state-mood-ring',
      title: 'State: The Mood Ring',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">State</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">💍</div>
            <h3 className="text-3xl font-bold mb-12">Like a Mood Ring That Changes Color</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-8 border-2 border-purple-400">
                <div className="text-6xl mb-6">💎</div>
                <h4 className="text-2xl font-bold text-purple-300 mb-4">What is State?</h4>
                <div className="space-y-4 text-white/80 text-left">
                  <div className="bg-purple-900/50 rounded-lg p-4">
                    <div className="text-purple-200 font-bold mb-2">Internal Chemistry</div>
                    <div className="text-white/90">Component's own data that can change</div>
                  </div>
                  <div className="bg-blue-900/50 rounded-lg p-4">
                    <div className="text-blue-200 font-bold mb-2">Automatic Updates</div>
                    <div className="text-white/90">When state changes, UI updates automatically</div>
                  </div>
                  <div className="bg-green-900/50 rounded-lg p-4">
                    <div className="text-green-200 font-bold mb-2">Self-Controlled</div>
                    <div className="text-white/90">Component manages its own state</div>
                  </div>
                </div>
              </div>

              <div className="bg-pink-500/20 backdrop-blur rounded-xl p-8 border-2 border-pink-400">
                <div className="text-6xl mb-6">🎭</div>
                <h4 className="text-2xl font-bold text-pink-300 mb-4">useState Hook</h4>
                <div className="bg-gray-800 rounded-lg p-6 text-left">
                  <div className="text-white font-mono text-sm space-y-2">
                    <div className="text-green-400">// Import the hook</div>
                    <div><span className="text-pink-400">import</span> {'{'} useState {'}'} <span className="text-pink-400">from</span> <span className="text-orange-400">'react'</span>;</div>
                    <div></div>
                    <div><span className="text-pink-400">function</span> <span className="text-yellow-400">Counter</span>() {'{'}</div>
                    <div className="ml-4 text-green-400">// [current, setter] = useState(initial)</div>
                    <div className="ml-4"><span className="text-pink-400">const</span> [count, setCount] = <span className="text-blue-400">useState</span>(<span className="text-orange-400">0</span>);</div>
                    <div></div>
                    <div className="ml-4"><span className="text-pink-400">return</span> (</div>
                    <div className="ml-8">&lt;<span className="text-red-400">button</span> <span className="text-green-400">onClick</span>=&#123;() =&gt; setCount(count + 1)&#125;&gt;</div>
                    <div className="ml-12">Clicked <span className="text-yellow-400">{'{'}</span>count<span className="text-yellow-400">{'}'}</span> times</div>
                    <div className="ml-8">&lt;/<span className="text-red-400">button</span>&gt;</div>
                    <div className="ml-4">);</div>
                    <div>{'}'}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl p-8 border border-indigo-400/30 mb-8">
              <h4 className="text-3xl font-bold text-indigo-300 mb-6">🎯 State vs Props</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-4xl mb-4">📥 Props</div>
                  <div className="text-blue-300 font-bold mb-3">From Outside (Parent)</div>
                  <div className="text-white/80 space-y-2 text-sm">
                    <div>• Read-only (can't change)</div>
                    <div>• Passed down from parent</div>
                    <div>• Like receiving a gift</div>
                    <div>• Makes components reusable</div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-4xl mb-4">💍 State</div>
                  <div className="text-purple-300 font-bold mb-3">Internal (Component's Own)</div>
                  <div className="text-white/80 space-y-2 text-sm">
                    <div>• Can change over time</div>
                    <div>• Managed by component itself</div>
                    <div>• Like your mood changing</div>
                    <div>• Triggers automatic re-renders</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <h4 className="text-2xl font-bold text-yellow-300 mb-4">⚡ React's Magic</h4>
              <p className="text-white/90 text-xl">
                When state changes, React automatically re-runs your component function and updates only the parts of the DOM that changed!
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-pink-700'
    },

    {
      id: 'state-patterns-deep-dive',
      title: 'State Patterns & Best Practices',
      content: (
        <div className="text-white animate-fade-in">
          <h2 className="text-4xl font-extrabold mb-8 text-center">🔄 State Management Patterns</h2>
          
          <div className="max-w-6xl mx-auto">
            {/* useState Patterns */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-blue-300 mb-8 text-center">🎯 Common useState Patterns</h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Different State Types */}
                <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400">
                  <h4 className="text-xl font-bold text-blue-300 mb-6">📊 Different State Types</h4>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-900 rounded-lg p-4">
                      <div className="text-green-300 font-bold mb-2">🔤 String State</div>
                      <div className="font-mono text-sm space-y-1">
                        <div><span className="text-pink-400">const</span> [name, setName] = <span className="text-blue-400">useState</span>(<span className="text-yellow-400">""</span>);</div>
                        <div><span className="text-pink-400">const</span> [status, setStatus] = <span className="text-blue-400">useState</span>(<span className="text-yellow-400">"loading"</span>);</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-900 rounded-lg p-4">
                      <div className="text-purple-300 font-bold mb-2">🔢 Number State</div>
                      <div className="font-mono text-sm space-y-1">
                        <div><span className="text-pink-400">const</span> [count, setCount] = <span className="text-blue-400">useState</span>(<span className="text-orange-400">0</span>);</div>
                        <div><span className="text-pink-400">const</span> [age, setAge] = <span className="text-blue-400">useState</span>(<span className="text-orange-400">25</span>);</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-900 rounded-lg p-4">
                      <div className="text-green-300 font-bold mb-2">✅ Boolean State</div>
                      <div className="font-mono text-sm space-y-1">
                        <div><span className="text-pink-400">const</span> [isVisible, setIsVisible] = <span className="text-blue-400">useState</span>(<span className="text-orange-400">false</span>);</div>
                        <div><span className="text-pink-400">const</span> [isLoading, setIsLoading] = <span className="text-blue-400">useState</span>(<span className="text-orange-400">true</span>);</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-900 rounded-lg p-4">
                      <div className="text-yellow-300 font-bold mb-2">📋 Array State</div>
                      <div className="font-mono text-sm space-y-1">
                        <div><span className="text-pink-400">const</span> [todos, setTodos] = <span className="text-blue-400">useState</span>([]);</div>
                        <div><span className="text-pink-400">const</span> [users, setUsers] = <span className="text-blue-400">useState</span>([]);</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-900 rounded-lg p-4">
                      <div className="text-red-300 font-bold mb-2">📦 Object State</div>
                      <div className="font-mono text-sm space-y-1">
                        <div><span className="text-pink-400">const</span> [user, setUser] = <span className="text-blue-400">useState</span>(&#123;</div>
                        <div className="ml-4">name: <span className="text-yellow-400">""</span>, email: <span className="text-yellow-400">""</span></div>
                        <div>&#125;);</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Updating State Correctly */}
                <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                  <h4 className="text-xl font-bold text-green-300 mb-6">✅ Updating State Correctly</h4>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="text-green-300 font-bold mb-3">🔢 Numbers & Strings</div>
                      <div className="bg-gray-900 rounded-lg p-4">
                        <div className="font-mono text-sm space-y-1">
                          <div><span className="text-gray-400">// ✅ Simple replacement</span></div>
                          <div>setCount(count + <span className="text-orange-400">1</span>);</div>
                          <div>setName(<span className="text-yellow-400">"Alice"</span>);</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-green-300 font-bold mb-3">📋 Arrays</div>
                      <div className="bg-gray-900 rounded-lg p-4">
                        <div className="font-mono text-sm space-y-1">
                          <div><span className="text-gray-400">// ✅ Create new array</span></div>
                          <div>setTodos([...todos, newTodo]);</div>
                          <div>setTodos(todos.filter(t =&gt; t.id !== id));</div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-green-300 font-bold mb-3">📦 Objects</div>
                      <div className="bg-gray-900 rounded-lg p-4">
                        <div className="font-mono text-sm space-y-1">
                          <div><span className="text-gray-400">// ✅ Create new object</span></div>
                          <div>setUser(&#123;...user, name: <span className="text-yellow-400">"Bob"</span>&#125;);</div>
                          <div>setUser(prev =&gt; (&#123;...prev, age: <span className="text-orange-400">26</span>&#125;));</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* State vs Props */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-purple-300 mb-8 text-center">⚖️ State vs Props: The Complete Picture</h3>
              
              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-8 border-2 border-purple-400">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-purple-900/30 rounded-lg p-6">
                    <div className="text-purple-200 font-bold mb-4 text-center">🏠 State (Internal Data)</div>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start space-x-3">
                        <div className="text-purple-400">👤</div>
                        <div>Belongs to the component</div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="text-purple-400">🔄</div>
                        <div>Can be changed by the component</div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="text-purple-400">🎭</div>
                        <div>Causes re-render when updated</div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="text-purple-400">🔐</div>
                        <div>Private to the component</div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="text-purple-400">💾</div>
                        <div>Persists between renders</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-900/30 rounded-lg p-6">
                    <div className="text-blue-200 font-bold mb-4 text-center">📦 Props (External Data)</div>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start space-x-3">
                        <div className="text-blue-400">👨‍👩‍👧‍👦</div>
                        <div>Comes from parent component</div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="text-blue-400">🔒</div>
                        <div>Read-only (cannot be changed)</div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="text-blue-400">⬇️</div>
                        <div>Flows down from parent to child</div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="text-blue-400">🔄</div>
                        <div>Makes components reusable</div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="text-blue-400">📡</div>
                        <div>Communication from parent</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Common Mistakes */}
            <div className="bg-red-500/20 backdrop-blur rounded-xl p-8 border-2 border-red-400">
              <h4 className="text-2xl font-bold text-red-300 mb-6 text-center">⚠️ Common State Mistakes</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-lg font-bold text-red-200 mb-4">❌ Don't Do This</h5>
                  <div className="space-y-4">
                    <div className="bg-gray-900 rounded-lg p-4">
                      <div className="text-red-300 text-sm font-bold mb-2">Mutating State Directly</div>
                      <div className="font-mono text-xs space-y-1">
                        <div>todos.push(newTodo);  <span className="text-gray-400">// ❌</span></div>
                        <div>user.name = <span className="text-yellow-400">"Bob"</span>;     <span className="text-gray-400">// ❌</span></div>
                        <div>setTodos(todos);      <span className="text-gray-400">// Won't work!</span></div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-900 rounded-lg p-4">
                      <div className="text-red-300 text-sm font-bold mb-2">Using Stale State</div>
                      <div className="font-mono text-xs space-y-1">
                        <div>setCount(count + <span className="text-orange-400">1</span>);</div>
                        <div>setCount(count + <span className="text-orange-400">1</span>);  <span className="text-gray-400">// ❌ Stale!</span></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h5 className="text-lg font-bold text-green-200 mb-4">✅ Do This Instead</h5>
                  <div className="space-y-4">
                    <div className="bg-gray-900 rounded-lg p-4">
                      <div className="text-green-300 text-sm font-bold mb-2">Create New Objects/Arrays</div>
                      <div className="font-mono text-xs space-y-1">
                        <div>setTodos([...todos, newTodo]);</div>
                        <div>setUser(&#123;...user, name: <span className="text-yellow-400">"Bob"</span>&#125;);</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-900 rounded-lg p-4">
                      <div className="text-green-300 text-sm font-bold mb-2">Use Functional Updates</div>
                      <div className="font-mono text-xs space-y-1">
                        <div>setCount(prev =&gt; prev + <span className="text-orange-400">1</span>);</div>
                        <div>setCount(prev =&gt; prev + <span className="text-orange-400">1</span>);</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 via-pink-600 to-red-600'
    },

    {
      id: 'state-vs-props-flow',
      title: 'Data Flow: The Complete Picture',
      content: (
        <div className="text-white animate-fade-in">
          <h2 className="text-4xl font-extrabold mb-8 text-center">🌊 React Data Flow</h2>
          
          <div className="max-w-6xl mx-auto">
            {/* Flow Diagram */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-blue-300 mb-8 text-center">📊 How Data Moves Through Components</h3>
              
              <div className="bg-gradient-to-b from-blue-900/20 to-purple-900/20 rounded-xl p-8 border-2 border-blue-400">
                {/* Parent Component */}
                <div className="bg-blue-500/30 rounded-lg p-6 mb-6">
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-2">👨‍👩‍👧‍👦</div>
                    <div className="text-blue-200 font-bold text-lg">Parent Component (App)</div>
                  </div>
                  
                  <div className="bg-gray-900 rounded-lg p-4 mb-4">
                    <div className="font-mono text-sm space-y-1">
                      <div><span className="text-pink-400">const</span> [user, setUser] = <span className="text-blue-400">useState</span>(&#123;</div>
                      <div className="ml-4">name: <span className="text-yellow-400">"Alice"</span>, score: <span className="text-orange-400">100</span></div>
                      <div>&#125;);</div>
                    </div>
                  </div>
                  
                  <div className="text-center text-blue-200">
                    <div className="text-sm">State lives here! ⬆️</div>
                    <div className="text-2xl my-4">⬇️</div>
                    <div className="text-sm">Props flow down ⬇️</div>
                  </div>
                </div>
                
                {/* Child Components */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-500/30 rounded-lg p-6">
                    <div className="text-center mb-4">
                      <div className="text-2xl mb-2">👤</div>
                      <div className="text-green-200 font-bold">UserDisplay</div>
                    </div>
                    
                    <div className="bg-gray-900 rounded-lg p-3 mb-3">
                      <div className="font-mono text-xs">
                        &lt;UserDisplay name=&#123;user.name&#125; /&gt;
                      </div>
                    </div>
                    
                    <div className="text-green-200 text-sm text-center">
                      Receives props ⬇️<br/>
                      Cannot change them 🔒
                    </div>
                  </div>
                  
                  <div className="bg-purple-500/30 rounded-lg p-6">
                    <div className="text-center mb-4">
                      <div className="text-2xl mb-2">🏆</div>
                      <div className="text-purple-200 font-bold">ScoreButton</div>
                    </div>
                    
                    <div className="bg-gray-900 rounded-lg p-3 mb-3">
                      <div className="font-mono text-xs">
                        &lt;ScoreButton onUpdate=&#123;setUser&#125; /&gt;
                      </div>
                    </div>
                    
                    <div className="text-purple-200 text-sm text-center">
                      Can call function ⬆️<br/>
                      To update parent state 🔄
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-6">
                  <div className="text-yellow-300 font-bold">🔄 When state changes, ALL components re-render with new data!</div>
                </div>
              </div>
            </div>

            {/* Key Insights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-500/20 rounded-xl p-6 border-2 border-blue-400 text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h4 className="text-lg font-bold text-blue-300 mb-3">State Ownership</h4>
                <div className="text-white/80 text-sm">
                  State belongs to ONE component. That component controls it completely.
                </div>
              </div>
              
              <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-400 text-center">
                <div className="text-4xl mb-4">⬇️</div>
                <h4 className="text-lg font-bold text-green-300 mb-3">Props Flow Down</h4>
                <div className="text-white/80 text-sm">
                  Data flows from parent to child through props. Never the other way.
                </div>
              </div>
              
              <div className="bg-purple-500/20 rounded-xl p-6 border-2 border-purple-400 text-center">
                <div className="text-4xl mb-4">⬆️</div>
                <h4 className="text-lg font-bold text-purple-300 mb-3">Events Flow Up</h4>
                <div className="text-white/80 text-sm">
                  Child components can call parent functions to trigger state changes.
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 via-purple-600 to-pink-600'
    },

    {
      id: 'events-radio',
      title: 'Event Handling: Two-Way Radio',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Event Handling</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📻</div>
            <h3 className="text-3xl font-bold mb-12">Two-Way Radio System</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400">
                <div className="text-6xl mb-6">📡</div>
                <h4 className="text-2xl font-bold text-blue-300 mb-4">How Events Work</h4>
                <div className="space-y-4 text-white/80 text-left">
                  <div className="bg-blue-900/50 rounded-lg p-4">
                    <div className="text-blue-200 font-bold mb-2">1. User Interaction</div>
                    <div className="text-white/90">Click, type, hover, submit...</div>
                  </div>
                  <div className="bg-purple-900/50 rounded-lg p-4">
                    <div className="text-purple-200 font-bold mb-2">2. Event Handler Runs</div>
                    <div className="text-white/90">Your function gets called</div>
                  </div>
                  <div className="bg-green-900/50 rounded-lg p-4">
                    <div className="text-green-200 font-bold mb-2">3. State Updates</div>
                    <div className="text-white/90">Component re-renders automatically</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <div className="text-6xl mb-6">🎛️</div>
                <h4 className="text-2xl font-bold text-green-300 mb-4">Controlled Components</h4>
                <div className="bg-gray-800 rounded-lg p-6 text-left">
                  <div className="text-white font-mono text-sm space-y-2">
                    <div className="text-green-400">// Input value comes from state</div>
                    <div><span className="text-pink-400">const</span> [name, setName] = <span className="text-blue-400">useState</span>(<span className="text-orange-400">""</span>);</div>
                    <div></div>
                    <div><span className="text-pink-400">return</span> (</div>
                    <div className="ml-4">&lt;<span className="text-red-400">input</span></div>
                    <div className="ml-8"><span className="text-green-400">value</span>={'{name}'} <span className="text-gray-400">// Display state</span></div>
                    <div className="ml-8"><span className="text-green-400">onChange</span>=&#123;(e) =&gt; setName(e.target.value)&#125; <span className="text-gray-400">// Update state</span></div>
                    <div className="ml-4">/&gt;</div>
                    <div>);</div>
                  </div>
                </div>
                <div className="mt-4 bg-green-900/30 rounded-lg p-4">
                  <div className="text-green-200 text-sm">
                    <strong>Radio Analogy:</strong> Input displays headquarters message, sends updates back when you type
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-8 border border-yellow-400/30 mb-8">
              <h4 className="text-3xl font-bold text-yellow-300 mb-6">📻 Two-Way Radio System</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center bg-blue-500/20 rounded-lg p-6">
                  <div className="text-5xl mb-4">🏢</div>
                  <h5 className="text-xl font-bold text-white mb-3">Headquarters</h5>
                  <div className="text-white/80 text-sm mb-2">
                    State holds the official message
                  </div>
                  <div className="bg-blue-900/50 rounded p-2">
                    <div className="text-blue-200 text-xs">= React State</div>
                  </div>
                </div>
                <div className="text-center bg-green-500/20 rounded-lg p-6">
                  <div className="text-5xl mb-4">📻</div>
                  <h5 className="text-xl font-bold text-white mb-3">Radio</h5>
                  <div className="text-white/80 text-sm mb-2">
                    Input displays current message
                  </div>
                  <div className="bg-green-900/50 rounded p-2">
                    <div className="text-green-200 text-xs">= Input Field</div>
                  </div>
                </div>
                <div className="text-center bg-purple-500/20 rounded-lg p-6">
                  <div className="text-5xl mb-4">📡</div>
                  <h5 className="text-xl font-bold text-white mb-3">Updates</h5>
                  <div className="text-white/80 text-sm mb-2">
                    Changes sent back to headquarters
                  </div>
                  <div className="bg-purple-900/50 rounded p-2">
                    <div className="text-purple-200 text-xs">= onChange Event</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-500/20 rounded-xl p-6 border border-red-400/30">
              <h4 className="text-2xl font-bold text-red-300 mb-4">🚨 Important: Prevent Default</h4>
              <div className="bg-gray-800 rounded-lg p-4">
                <div className="text-white font-mono text-sm">
                  <div><span className="text-pink-400">const</span> handleSubmit = (event) =&gt; {'{'}</div>
                  <div className="ml-4">event.<span className="text-yellow-400">preventDefault</span>(); <span className="text-gray-400">// Don't refresh page!</span></div>
                  <div className="ml-4"><span className="text-gray-400">// Handle form submission</span></div>
                  <div>{'}'};</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-teal-700'
    },

    {
      id: 'react-mental-model',
      title: 'The React Mental Model',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">The React Mental Model</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🧠</div>
            <h3 className="text-3xl font-bold mb-12">Think in Components, Props, and State</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400">
                <div className="text-6xl mb-6">🧱</div>
                <h4 className="text-2xl font-bold text-blue-300 mb-4">1. Break into Components</h4>
                <div className="space-y-3 text-white/80 text-sm">
                  <div>• Each component has one job</div>
                  <div>• Reusable pieces of UI</div>
                  <div>• Think LEGO bricks</div>
                  <div>• Start small, combine bigger</div>
                </div>
              </div>

              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <div className="text-6xl mb-6">🍳</div>
                <h4 className="text-2xl font-bold text-green-300 mb-4">2. Identify Data Flow</h4>
                <div className="space-y-3 text-white/80 text-sm">
                  <div>• What data does each component need?</div>
                  <div>• Props flow down from parent</div>
                  <div>• State belongs to component</div>
                  <div>• Like ingredients to chef</div>
                </div>
              </div>

              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-8 border-2 border-purple-400">
                <div className="text-6xl mb-6">💍</div>
                <h4 className="text-2xl font-bold text-purple-300 mb-4">3. Add Interactivity</h4>
                <div className="space-y-3 text-white/80 text-sm">
                  <div>• What can change over time?</div>
                  <div>• Use state for changing data</div>
                  <div>• Event handlers update state</div>
                  <div>• Like mood ring changing color</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl p-8 border border-indigo-400/30 mb-8">
              <h4 className="text-3xl font-bold text-indigo-300 mb-6">🎬 The React Workflow</h4>
              <div className="flex items-center justify-center space-x-4 text-sm">
                <div className="text-center">
                  <div className="text-4xl mb-2">📝</div>
                  <div className="text-white font-bold">Write Components</div>
                  <div className="text-white/70">Describe what UI should look like</div>
                </div>
                <div className="text-3xl text-blue-400">→</div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🎭</div>
                  <div className="text-white font-bold">Add State</div>
                  <div className="text-white/70">Data that can change</div>
                </div>
                <div className="text-3xl text-blue-400">→</div>
                <div className="text-center">
                  <div className="text-4xl mb-2">👆</div>
                  <div className="text-white font-bold">Handle Events</div>
                  <div className="text-white/70">User interactions update state</div>
                </div>
                <div className="text-3xl text-green-400">→</div>
                <div className="text-center">
                  <div className="text-4xl mb-2">🎬</div>
                  <div className="text-white font-bold">React Re-renders</div>
                  <div className="text-white/70">UI updates automatically</div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <h4 className="text-2xl font-bold text-yellow-300 mb-4">💡 Key Insight</h4>
              <p className="text-white/90 text-xl">
                React is about building UIs with components that automatically update when data changes. 
                You describe what you want, React handles how to get there!
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-700'
    },

    {
      id: 'wrap-up',
      title: 'Wrap Up',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">What We Learned</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🚀</div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-6 border-2 border-blue-400">
                <div className="text-5xl mb-4">🎬</div>
                <h4 className="text-xl font-bold text-blue-300 mb-3">React Mental Model</h4>
                <div className="text-white/80 text-sm">Declarative UI like a movie director</div>
              </div>

              <div className="bg-green-500/20 backdrop-blur rounded-xl p-6 border-2 border-green-400">
                <div className="text-5xl mb-4">🧱</div>
                <h4 className="text-xl font-bold text-green-300 mb-3">Components</h4>
                <div className="text-white/80 text-sm">LEGO bricks that return JSX</div>
              </div>

              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-6 border-2 border-purple-400">
                <div className="text-5xl mb-4">📝</div>
                <h4 className="text-xl font-bold text-purple-300 mb-3">JSX Syntax</h4>
                <div className="text-white/80 text-sm">HTML-like code in JavaScript</div>
              </div>

              <div className="bg-orange-500/20 backdrop-blur rounded-xl p-6 border-2 border-orange-400">
                <div className="text-5xl mb-4">🍳</div>
                <h4 className="text-xl font-bold text-orange-300 mb-3">Props</h4>
                <div className="text-white/80 text-sm">Ingredients passed to components</div>
              </div>

              <div className="bg-pink-500/20 backdrop-blur rounded-xl p-6 border-2 border-pink-400">
                <div className="text-5xl mb-4">💍</div>
                <h4 className="text-xl font-bold text-pink-300 mb-3">State</h4>
                <div className="text-white/80 text-sm">Mood ring that changes color</div>
              </div>

              <div className="bg-teal-500/20 backdrop-blur rounded-xl p-6 border-2 border-teal-400">
                <div className="text-5xl mb-4">📻</div>
                <h4 className="text-xl font-bold text-teal-300 mb-3">Events</h4>
                <div className="text-white/80 text-sm">Two-way radio communication</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-8 border border-green-400/30 mb-8">
              <h4 className="text-3xl font-bold text-white mb-6">🎯 The React Way of Thinking</h4>
              <div className="text-white/90 text-xl space-y-4">
                <div>1. Break your UI into components</div>
                <div>2. Identify what data each component needs</div>
                <div>3. Write components that describe the UI for any given data</div>
                <div>4. Let React handle updating the DOM when data changes</div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-8 border border-yellow-400/30">
              <h4 className="text-3xl font-bold text-yellow-300 mb-6">🌟 Coming Up Next</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🔗</div>
                  <div className="text-white font-bold">Advanced Patterns</div>
                  <div className="text-white/70 text-sm">useEffect, custom hooks</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🌐</div>
                  <div className="text-white font-bold">APIs with React</div>
                  <div className="text-white/70 text-sm">Fetching data in components</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🏗️</div>
                  <div className="text-white font-bold">Larger Applications</div>
                  <div className="text-white/70 text-sm">State management, routing</div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-4xl font-bold text-white mb-6">Master these fundamentals, and you'll think in React! 🚀</h3>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-blue-700'
    }
  ];

  // Handle scroll-based navigation
  useEffect(() => {
    const handleScroll = () => {
      const slideElements = document.querySelectorAll('[data-slide-index]');
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Use center of viewport
      
      let currentSlideIndex = 0;
      
      slideElements.forEach((element, index) => {
        const slideTop = element.offsetTop;
        const slideBottom = slideTop + element.offsetHeight;
        
        // Check if the center of the viewport is within this slide
        if (scrollPosition >= slideTop && scrollPosition < slideBottom) {
          currentSlideIndex = index;
        }
      });
      
      setCurrentSlide(currentSlideIndex);
    };

    window.addEventListener('scroll', handleScroll);
    // Call once to set initial state
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

export default Class6Slides; 