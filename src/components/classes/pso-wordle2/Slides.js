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
    0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.3); }
    50% { box-shadow: 0 0 30px rgba(34, 197, 94, 0.6); }
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


// Interactive Step-by-Step Component
const StepByStepGuide = ({ steps, title, emoji }) => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="bg-white/10 backdrop-blur rounded-xl p-6">
      <div className="text-center mb-6">
        <div className="text-4xl mb-2">{emoji}</div>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index)}
            className={`w-8 h-8 rounded-full font-bold transition-all ${
              currentStep === index
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div className="bg-blue-500/20 rounded-lg p-6 border border-blue-400/30">
        <h4 className="text-xl font-bold text-blue-300 mb-3">
          Step {currentStep + 1}: {steps[currentStep].title}
        </h4>
        <p className="text-white/90 mb-4">{steps[currentStep].description}</p>
        {steps[currentStep].tips && (
          <div className="mt-4 bg-yellow-500/20 rounded-lg p-4 border border-yellow-400/30">
            <h5 className="font-bold text-yellow-300 mb-2">💡 Key Points:</h5>
            <ul className="text-white/90 space-y-1">
              {steps[currentStep].tips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-300 mr-2">•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

// Debugging Strategies Component
const DebuggingStrategies = () => {
  const [selectedIssue, setSelectedIssue] = useState(0);

  const commonIssues = [
    {
      problem: "Nothing happens when I type",
      symptoms: ["Letters don't appear", "No console output", "Function not called"],
      solutions: [
        "Check if handleKeyPress is being called with console.log",
        "Verify currentGuess is being updated",
        "Make sure you're calling the right helper functions",
        "Check if getTile returns the right element"
      ]
    },
    {
      problem: "Letters don't show up on screen",
      symptoms: ["Tiles remain empty", "Console shows letters captured", "No visual feedback"],
      solutions: [
        "Check if getTile(row, col) returns the correct element",
        "Verify row and column numbers are correct",
        "Look for JavaScript errors in browser console",
        "Make sure you're calling updateTileDisplay properly"
      ]
    },
    {
      problem: "Word validation doesn't work",
      symptoms: ["Invalid words accepted", "Valid words rejected", "Validation errors"],
      solutions: [
        "Check if you're calling WordleWords.isValidWord() correctly",
        "Verify guess length is exactly 5",
        "Check case sensitivity (upper/lower)",
        "Make sure words.js is loaded properly"
      ]
    },
    {
      problem: "Colors are wrong",
      symptoms: ["Green/yellow/gray incorrect", "Duplicate letters wrong", "Colors don't appear"],
      solutions: [
        "Check if checkLetter returns correct values",
        "Verify setTileState is called with right parameters",
        "Test with simple words first (no duplicates)",
        "Check available states: 'correct', 'present', 'absent'"
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          {commonIssues.map((issue, index) => (
            <button
              key={index}
              onClick={() => setSelectedIssue(index)}
              className={`w-full text-left p-4 rounded-lg transition-all ${
                selectedIssue === index
                  ? 'bg-red-500/30 border border-red-400'
                  : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              <div className="font-bold text-white">{issue.problem}</div>
              <div className="text-sm text-white/70 mt-1">
                {issue.symptoms.join(' • ')}
              </div>
            </button>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur rounded-xl p-6">
          <h4 className="text-xl font-bold text-red-300 mb-4">
            🐛 {commonIssues[selectedIssue].problem}
          </h4>
          
          <div className="mb-4">
            <h5 className="font-bold text-white mb-2">Solutions:</h5>
            <ul className="space-y-2">
              {commonIssues[selectedIssue].solutions.map((solution, index) => (
                <li key={index} className="flex items-start text-white/90">
                  <span className="text-green-400 mr-2">✓</span>
                  {solution}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main PSO Wordle 2 Slides Component
const PSOWordle2Slides = () => {
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
      title: 'Wordle Problem-Solving Guide',
      bgGradient: 'from-indigo-700 to-blue-700',
      content: (
        <div className="text-white animate-fade-in">
          <div className="text-center">
            <div className="mx-auto max-w-2xl">
              <div className="bg-white/10 backdrop-blur rounded-3xl p-12 border border-white/20">
                <div className="text-8xl mb-6 animate-float">🎯</div>
                <h1 className="text-6xl font-extrabold tracking-tight mb-4">Wordle (Part 2)</h1>
                <h2 className="text-3xl font-semibold text-blue-200 mb-6">Problem-Solving Guide</h2>
                <div className="text-xl text-blue-200">
                  Learn HOW to think, not just what to code
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    {
      id: 'codenames-intro',
      title: 'Codenames - Game Rules',
      bgGradient: 'from-orange-600 to-red-600',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">🕵️</div>
            <h2 className="text-4xl font-extrabold mb-4">Codenames</h2>
            <p className="text-xl text-white/80">A team-based word association game</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-2xl font-bold text-yellow-300 mb-4">🎯 Objective</h3>
              <p className="text-white/90 text-lg mb-4">
                Two teams compete to identify their agents using one-word clues from their spymaster.
              </p>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  <strong>Red Team</strong> vs <strong>Blue Team</strong>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Each team has a <strong>Spymaster</strong> and <strong>Operatives</strong>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  First team to identify all their agents wins!
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">🗂️ The Board</h3>
              <p className="text-white/90 text-lg mb-4">
                25 word cards arranged in a 5×5 grid with hidden colors:
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-red-500/20 rounded-lg p-3 border border-red-400/30">
                  <div className="font-bold text-red-300">Red Agents</div>
                  <div className="text-white/80 text-sm">8-9 cards</div>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-400/30">
                  <div className="font-bold text-blue-300">Blue Agents</div>
                  <div className="text-white/80 text-sm">8-9 cards</div>
                </div>
                <div className="bg-yellow-500/20 rounded-lg p-3 border border-yellow-400/30">
                  <div className="font-bold text-yellow-300">Innocent</div>
                  <div className="text-white/80 text-sm">7 cards</div>
                </div>
                <div className="bg-gray-500/20 rounded-lg p-3 border border-gray-400/30">
                  <div className="font-bold text-gray-300">Assassin</div>
                  <div className="text-white/80 text-sm">1 card ☠️</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-400/30">
            <h3 className="text-2xl font-bold text-purple-300 mb-4">⚠️ Important</h3>
            <p className="text-white/90 text-lg">
              Only <strong>Spymasters</strong> can see the color-coded map. <strong>Operatives</strong> only see the words!
            </p>
          </div>
        </div>
      )
    },

    {
      id: 'codenames-gameplay',
      title: 'Codenames - How to Play',
      bgGradient: 'from-red-600 to-pink-600',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🎮</div>
            <h2 className="text-4xl font-extrabold mb-4">How to Play</h2>
            <p className="text-xl text-white/80">Step-by-step gameplay</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-2xl font-bold text-green-300 mb-4">👑 Spymaster's Turn</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                    <div>
                      <div className="font-bold text-green-200">Give a clue</div>
                      <div className="text-white/80 text-sm">One word + number (e.g., "Animal 3")</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                    <div>
                      <div className="font-bold text-green-200">The number</div>
                      <div className="text-white/80 text-sm">How many cards relate to your clue</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                    <div>
                      <div className="font-bold text-green-200">No other words</div>
                      <div className="text-white/80 text-sm">Can't say words on the board or give hints</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-2xl font-bold text-blue-300 mb-4">🔍 Operatives' Turn</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                    <div>
                      <div className="font-bold text-blue-200">Discuss the clue</div>
                      <div className="text-white/80 text-sm">Talk about which words might fit</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                    <div>
                      <div className="font-bold text-blue-200">Make guesses</div>
                      <div className="text-white/80 text-sm">Touch cards to reveal their colors</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                    <div>
                      <div className="font-bold text-blue-200">Get clue number + 1 guesses</div>
                      <div className="text-white/80 text-sm">"Animal 3" = up to 4 guesses</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-2xl font-bold text-yellow-300 mb-4">🎯 What Happens When You Guess</h3>
                <div className="space-y-3">
                  <div className="bg-red-500/20 rounded-lg p-3 border border-red-400/30">
                    <div className="font-bold text-red-300">Red Agent ✅</div>
                    <div className="text-white/80 text-sm">Red team gets the card, continue guessing</div>
                  </div>
                  <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-400/30">
                    <div className="font-bold text-blue-300">Blue Agent ✅</div>
                    <div className="text-white/80 text-sm">Blue team gets the card, continue guessing</div>
                  </div>
                  <div className="bg-yellow-500/20 rounded-lg p-3 border border-yellow-400/30">
                    <div className="font-bold text-yellow-300">Innocent 😐</div>
                    <div className="text-white/80 text-sm">Turn ends, other team goes</div>
                  </div>
                  <div className="bg-gray-500/20 rounded-lg p-3 border border-gray-400/30">
                    <div className="font-bold text-gray-300">Assassin ☠️</div>
                    <div className="text-white/80 text-sm">Your team loses immediately!</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-6 border border-green-400/30">
                <h3 className="text-2xl font-bold text-green-300 mb-4">🏆 How to Win</h3>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Identify all your team's agents first
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    OR the other team hits the assassin
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-400/30">
              <h3 className="text-2xl font-bold text-orange-300 mb-4">🎮 Ready to Play?</h3>
              <a 
                href="https://codenames.game/room/bubble-scarecrow-hit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition-all transform hover:scale-105 text-lg"
              >
                <span className="text-2xl mr-3">🕵️</span>
                Join the Game
                <span className="ml-2">→</span>
              </a>
              <p className="text-white/70 text-sm mt-3">
                Click to join our Codenames room: bubble-scarecrow-hit
              </p>
            </div>
          </div>
        </div>
      )
    },

    {
      id: 'overview',
      title: 'Overview & Philosophy',
      bgGradient: 'from-purple-600 to-indigo-600',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🧠</div>
            <h2 className="text-4xl font-extrabold mb-4">Learning Philosophy</h2>
            <p className="text-xl text-white/80">This guide teaches you HOW TO THINK, not just what to code</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-2xl font-bold text-green-300 mb-4">🎯 What You'll Learn</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  How to understand and explore codebases
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  Problem-solving strategies for complex logic
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  Debugging techniques and systematic testing
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  How to break down big problems into small steps
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">🚀 Success Mindset</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  Start small, build complexity gradually
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  Expect bugs - they're part of learning
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  Test constantly, don't write 50 lines then test
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">→</span>
                  Understanding {'>'} just making it work
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-8 border border-yellow-400/30 text-center">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">🎯 Core Philosophy</h3>
            <p className="text-xl text-white/90">
              The goal isn't just to make the game work, but to <strong>understand how it works</strong>. 
              The problem-solving skills you develop here will serve you in all future programming projects.
            </p>
          </div>
        </div>
      )
    },

    {
      id: 'understanding-codebase',
      title: 'Understanding the Codebase',
      bgGradient: 'from-teal-600 to-green-600',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-4xl font-extrabold mb-4">Understanding the Codebase</h2>
            <p className="text-xl text-white/80">Start by exploring - don't jump straight into coding!</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-300 mb-4">📁 File Exploration Order</h3>
                <div className="space-y-3">
                  <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-400/30">
                    <h4 className="font-bold text-blue-200">1. index.html</h4>
                    <p className="text-white/80 text-sm">Find game-board, keyboard, modal elements</p>
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-3 border border-green-400/30">
                    <h4 className="font-bold text-green-200">2. styles.css</h4>
                    <p className="text-white/80 text-sm">Notice .tile, .correct, .present, .absent classes</p>
                  </div>
                  <div className="bg-purple-500/20 rounded-lg p-3 border border-purple-400/30">
                    <h4 className="font-bold text-purple-200">3. words.js</h4>
                    <p className="text-white/80 text-sm">Find getRandomWord() and isValidWord() functions</p>
                  </div>
                  <div className="bg-orange-500/20 rounded-lg p-3 border border-orange-400/30">
                    <h4 className="font-bold text-orange-200">4. game-starter.js</h4>
                    <p className="text-white/80 text-sm">MOST IMPORTANT - Read every helper function!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-xl font-bold text-yellow-300 mb-4">🛠️ Key Helper Functions</h3>
                <div className="space-y-2 text-sm">
                  <div className="bg-white/10 rounded p-2">
                    <code className="text-green-300">getTile(row, col)</code>
                    <span className="text-white/70 ml-2">- Gets a specific tile element</span>
                  </div>
                  <div className="bg-white/10 rounded p-2">
                    <code className="text-green-300">updateTileDisplay(tile, letter)</code>
                    <span className="text-white/70 ml-2">- Shows letter in tile</span>
                  </div>
                  <div className="bg-white/10 rounded p-2">
                    <code className="text-green-300">setTileState(tile, state)</code>
                    <span className="text-white/70 ml-2">- Colors a tile</span>
                  </div>
                  <div className="bg-white/10 rounded p-2">
                    <code className="text-green-300">resetBoard()</code>
                    <span className="text-white/70 ml-2">- Clears the game board</span>
                  </div>
                  <div className="bg-white/10 rounded p-2">
                    <code className="text-green-300">showModal(won, word, guesses)</code>
                    <span className="text-white/70 ml-2">- Shows end game</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-6 border border-green-400/30">
                <h4 className="text-lg font-bold text-green-300 mb-3">💡 Pro Tip</h4>
                <p className="text-white/90">
                  Open the browser console (F12) and try calling these functions manually to see what they do!
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    {
      id: 'problem-solving-approach',
      title: 'Problem-Solving Approach',
      bgGradient: 'from-rose-600 to-pink-600',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🎯</div>
            <h2 className="text-4xl font-extrabold mb-4">Problem-Solving Approach</h2>
            <p className="text-xl text-white/80">The secret to tackling complex programming challenges</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-2xl font-bold text-red-300 mb-4">🚫 Don't Do This</h3>
                <div className="space-y-3">
                  <div className="bg-red-500/20 rounded-lg p-3 border border-red-400/30">
                    <span className="text-red-200">❌ Try to solve everything at once</span>
                  </div>
                  <div className="bg-red-500/20 rounded-lg p-3 border border-red-400/30">
                    <span className="text-red-200">❌ Write 50 lines then test</span>
                  </div>
                  <div className="bg-red-500/20 rounded-lg p-3 border border-red-400/30">
                    <span className="text-red-200">❌ Start with the hardest part</span>
                  </div>
                  <div className="bg-red-500/20 rounded-lg p-3 border border-red-400/30">
                    <span className="text-red-200">❌ Skip testing individual pieces</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-2xl font-bold text-blue-300 mb-4">🔧 Debug Everything</h3>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-white font-mono text-sm">
{`function handleKeyPress(key) {
    console.log('Key pressed:', key);
    console.log('Current guess:', currentGuess);
    // Your code here...
}`}
                  </pre>
                </div>
                <div className="mt-3 text-white/80 text-sm">
                  This helps you understand what values your variables have and when functions are called.
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-2xl font-bold text-green-300 mb-4">✅ Do This Instead</h3>
                <div className="space-y-3">
                  <div className="bg-green-500/20 rounded-lg p-4 border border-green-400/30">
                    <div className="font-bold text-green-200 mb-2">1. Start Simple</div>
                    <div className="text-white/80 text-sm">Get basic letter input working first</div>
                  </div>
                  <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-400/30">
                    <div className="font-bold text-blue-200 mb-2">2. Add Complexity</div>
                    <div className="text-white/80 text-sm">Then add backspace, then enter key</div>
                  </div>
                  <div className="bg-purple-500/20 rounded-lg p-4 border border-purple-400/30">
                    <div className="font-bold text-purple-200 mb-2">3. Test Each Step</div>
                    <div className="text-white/80 text-sm">Make sure each piece works before moving on</div>
                  </div>
                  <div className="bg-orange-500/20 rounded-lg p-4 border border-orange-400/30">
                    <div className="font-bold text-orange-200 mb-2">4. Save Hard Parts</div>
                    <div className="text-white/80 text-sm">Duplicate letter logic comes last!</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-2xl font-bold text-yellow-300 mb-4">🔄 Test Cycle</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <span>Make a small change</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <span>Save your file</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <span>Refresh the browser</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <span>Test that specific feature</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-sm font-bold">5</div>
                    <span>Check console for errors</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    {
      id: 'initializeGame-guide',
      title: 'initializeGame() - Start Here',
      bgGradient: 'from-blue-600 to-cyan-600',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🏗️</div>
            <h2 className="text-4xl font-extrabold mb-4">initializeGame() - 10 Points</h2>
            <p className="text-xl text-white/80">The perfect starting point - sets up everything for a fresh game</p>
          </div>

          <StepByStepGuide 
            title="Implementation Strategy"
            emoji="🎯"
            steps={[
              {
                title: "Understand What Needs Resetting",
                description: "Look at the global variables at the top of game-starter.js. What values should they have at game start?",
                tips: [
                  "currentWord should be a new random word",
                  "currentGuess should be empty",
                  "currentRow should be 0",
                  "gameOver should be false"
                ]
              },
              {
                title: "Get a Random Word",
                description: "Look at words.js - what function gets a random word? Store it in currentWord.",
                tips: [
                  "The function returns a random word from the word list",
                  "Convert to uppercase for consistency",
                  "Add console.log to verify it's working"
                ]
              },
              {
                title: "Clear the Visual Board",
                description: "Which helper function clears all tiles? You don't need to write this - just call it.",
                tips: [
                  "This removes all letters and colors from tiles",
                  "Check game-starter.js for this function",
                  "Test by calling it in the console"
                ]
              },
              {
                title: "Test Your Implementation",
                description: "Add debug logging to verify everything works correctly.",
                tips: [
                  "Call initializeGame() in the browser console",
                  "Check that variables are set correctly",
                  "Make sure the board is visually cleared"
                ]
              }
            ]}
          />
        </div>
      )
    },

    {
      id: 'handleKeyPress-guide',
      title: 'handleKeyPress() - Input Handler',
      bgGradient: 'from-green-600 to-teal-600',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">⌨️</div>
            <h2 className="text-4xl font-extrabold mb-4">handleKeyPress(key) - 15 Points</h2>
            <p className="text-xl text-white/80">The traffic controller for all keyboard input</p>
          </div>

          <StepByStepGuide 
            title="Break It Into Three Parts"
            emoji="🔧"
            steps={[
              {
                title: "Handle Letter Keys (A-Z)",
                description: "What should happen when someone types a letter?",
                tips: [
                  "Use regex to check if key is A-Z",
                  "Check if there's room (length < 5)",
                  "Add to currentGuess string",
                  "Use getTile() and updateTileDisplay() helper functions"
                ]
              },
              {
                title: "Handle Enter Key",
                description: "When should enter work? What should it do?",
                tips: [
                  "Only work when guess is complete (5 letters)",
                  "Call submitGuess() function",
                  "Show error message if incomplete",
                  "Look for helper functions to show messages"
                ]
              },
              {
                title: "Handle Backspace Key",
                description: "When should backspace work? How do you remove letters?",
                tips: [
                  "Only work when there are letters to remove",
                  "Clear the tile display with empty string",
                  "Use slice(0, -1) to remove last character",
                  "Update currentGuess variable"
                ]
              },
              {
                title: "Test Each Part Separately",
                description: "Make sure each key type works before combining them all.",
                tips: [
                  "Test letters first - do they appear?",
                  "Test backspace - do letters disappear?",
                  "Test enter - does it call submitGuess?",
                  "Check console for any errors"
                ]
              }
            ]}
          />
        </div>
      )
    },

    {
      id: 'submitGuess-guide',
      title: 'submitGuess() - The Heart of Wordle',
      bgGradient: 'from-purple-600 to-pink-600',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">💝</div>
            <h2 className="text-4xl font-extrabold mb-4">submitGuess() - 20 Points</h2>
            <p className="text-xl text-white/80">The most complex function - processes a complete guess</p>
          </div>

          <StepByStepGuide 
            title="Break Down the Complexity"
            emoji="🎯"
            steps={[
              {
                title: "Validation First",
                description: "Always validate input before processing - check length and if it's a real word.",
                tips: [
                  "Check length first - must be exactly 5",
                  "Use WordleWords.isValidWord() for validation",
                  "Show appropriate error messages",
                  "Return early if validation fails"
                ]
              },
              {
                title: "Check Each Letter",
                description: "Loop through each position and check against target word using your checkLetter function.",
                tips: [
                  "Loop from 0 to 4 (or use WORD_LENGTH)",
                  "Call checkLetter() for each position",
                  "Store results in an array",
                  "Log each result for debugging"
                ]
              },
              {
                title: "Update Visual Display",
                description: "Use the results to color tiles and update keyboard colors.",
                tips: [
                  "Loop through results array",
                  "Use getTile() and setTileState() helper functions",
                  "Results should be 'correct', 'present', or 'absent'",
                  "Keyboard updates can come later"
                ]
              },
              {
                title: "Check Win/Lose and Move Forward",
                description: "Determine if game continues or ends, then advance to next row.",
                tips: [
                  "Compare guess to currentWord (case-insensitive)",
                  "Call updateGameState() with win/lose info",
                  "Only advance row if game continues",
                  "Reset currentGuess for next row"
                ]
              }
            ]}
          />
        </div>
      )
    },

    {
      id: 'checkLetter-guide',
      title: 'checkLetter() - The Tricky One',
      bgGradient: 'from-red-600 to-orange-600',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🧠</div>
            <h2 className="text-4xl font-extrabold mb-4">checkLetter() - 10 Points</h2>
            <p className="text-xl text-white/80">The hardest function - save this for last!</p>
          </div>

          <StepByStepGuide 
            title="Start Simple, Add Complexity"
            emoji="🎯"
            steps={[
              {
                title: "Understand the Simple Cases",
                description: "Start with words that have no duplicate letters - this covers most cases.",
                tips: [
                  "Exact match (correct position) = 'correct'",
                  "Letter exists elsewhere = 'present'", 
                  "Letter not in word = 'absent'",
                  "Test with words like REACT, HOUSE, BRAIN first"
                ]
              },
              {
                title: "Understand the Duplicate Problem",
                description: "What happens with words like SPEED or APPLE? Each target letter can only 'satisfy' one guess letter.",
                tips: [
                  "Example: SPEED vs ERASE - both E's get yellow",
                  "But APPLE vs LLAMA - only one L gets yellow",
                  "Exact matches (green) get priority",
                  "Research how real Wordle handles this"
                ]
              },
              {
                title: "Research Real Wordle Behavior",
                description: "Play the actual game and observe duplicate letter behavior before implementing.",
                tips: [
                  "Try guessing ERASE when target is SPEED",
                  "Try guessing LLAMA when target is APPLE",
                  "Try guessing LEVEL when target is ALLEY",
                  "Take screenshots for reference"
                ]
              },
              {
                title: "Implement Advanced Logic (Optional)",
                description: "Only tackle this after everything else works - consider it bonus points!",
                tips: [
                  "This is the hardest part of the entire assignment",
                  "Get everything else working first",
                  "Consider it bonus/extra credit",
                  "Simple version is usually enough for full points"
                ]
              }
            ]}
          />
        </div>
      )
    },

    {
      id: 'debugging-strategies',
      title: 'Debugging Strategies',
      bgGradient: 'from-yellow-600 to-orange-600',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🐛</div>
            <h2 className="text-4xl font-extrabold mb-4">Debugging Strategies</h2>
            <p className="text-xl text-white/80">Essential skills for finding and fixing problems</p>
          </div>

          <DebuggingStrategies />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">🔧 Browser Developer Tools</h3>
              <div className="space-y-4">
                <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-400/30">
                  <h4 className="font-bold text-blue-200 mb-2">Console Tab</h4>
                  <ul className="text-white/90 text-sm space-y-1">
                    <li>• See your console.log statements</li>
                    <li>• View JavaScript errors (red text)</li>
                    <li>• Test functions manually: initializeGame()</li>
                  </ul>
                </div>
                <div className="bg-green-500/20 rounded-lg p-4 border border-green-400/30">
                  <h4 className="font-bold text-green-200 mb-2">Elements Tab</h4>
                  <ul className="text-white/90 text-sm space-y-1">
                    <li>• Inspect HTML structure</li>
                    <li>• See what classes are applied to tiles</li>
                    <li>• Check if JavaScript is changing the DOM</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">🎯 Systematic Testing</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                  <span>Can I type letters?</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                  <span>Does backspace work?</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                  <span>Does enter work with incomplete words?</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold">4</span>
                  <span>Does enter work with invalid words?</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold">5</span>
                  <span>Does enter work with valid words?</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold">6</span>
                  <span>Do colors show up correctly?</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold">7</span>
                  <span>Does the game end when I win?</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold">8</span>
                  <span>Does the game end when I lose?</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    {
      id: 'javascript-concepts',
      title: 'JavaScript Concepts You\'ll Need',
      bgGradient: 'from-cyan-600 to-blue-600',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">📚</div>
            <h2 className="text-4xl font-extrabold mb-4">JavaScript Concepts</h2>
            <p className="text-xl text-white/80">Essential concepts you'll use throughout the project</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-2xl font-bold text-green-300 mb-4">🔤 Strings</h3>
                <div className="space-y-3 text-white/90">
                  <div className="bg-white/10 rounded p-3">
                    <code className="text-green-300">string.length</code> - Get string length
                  </div>
                  <div className="bg-white/10 rounded p-3">
                    <code className="text-green-300">string[index]</code> - Get character at position
                  </div>
                  <div className="bg-white/10 rounded p-3">
                    <code className="text-green-300">string.slice(0, -1)</code> - Remove last character
                  </div>
                  <div className="bg-white/10 rounded p-3">
                    <code className="text-green-300">string.includes(char)</code> - Check if contains character
                  </div>
                  <div className="bg-white/10 rounded p-3">
                    <code className="text-green-300">string.toUpperCase()</code> - Convert to uppercase
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-2xl font-bold text-blue-300 mb-4">📋 Arrays</h3>
                <div className="space-y-3 text-white/90">
                  <div className="bg-white/10 rounded p-3">
                    <code className="text-blue-300">array[index]</code> - Get/set element at position
                  </div>
                  <div className="bg-white/10 rounded p-3">
                    <code className="text-blue-300">array.length</code> - Get array length
                  </div>
                  <div className="bg-white/10 rounded p-3">
                    <code className="text-blue-300">array.every(callback)</code> - Check if all match condition
                  </div>
                  <div className="bg-white/10 rounded p-3">
                                         <code className="text-blue-300">for (let i = 0; i {'<'} array.length; i++)</code> - Loop through
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-2xl font-bold text-purple-300 mb-4">🌐 DOM Manipulation</h3>
                <div className="space-y-3 text-white/90">
                  <div className="bg-white/10 rounded p-3">
                    <code className="text-purple-300">document.querySelector()</code> - Find HTML element
                  </div>
                  <div className="bg-white/10 rounded p-3">
                    <code className="text-purple-300">element.textContent = text</code> - Set element text
                  </div>
                  <div className="bg-white/10 rounded p-3">
                    <code className="text-purple-300">element.classList.add()</code> - Add CSS class
                  </div>
                  <div className="bg-white/10 rounded p-3">
                    <code className="text-purple-300">element.classList.remove()</code> - Remove CSS class
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-2xl font-bold text-yellow-300 mb-4">🔀 Conditionals</h3>
                <div className="space-y-3 text-white/90">
                  <div className="bg-white/10 rounded p-3">
                    <code className="text-yellow-300">if (condition) { }</code> - Basic if statement
                  </div>
                  <div className="bg-white/10 rounded p-3">
                    <code className="text-yellow-300">if (condition) { } else { }</code> - If-else
                  </div>
                  <div className="bg-white/10 rounded p-3">
                    <code className="text-yellow-300">condition ? valueIfTrue : valueIfFalse</code> - Ternary
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    {
      id: 'when-stuck',
      title: 'When You\'re Stuck',
      bgGradient: 'from-red-600 to-pink-600',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🆘</div>
            <h2 className="text-4xl font-extrabold mb-4">When You're Stuck</h2>
            <p className="text-xl text-white/80">Strategies for overcoming programming roadblocks</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-2xl font-bold text-blue-300 mb-4">❓ Questions to Ask Yourself</h3>
                <div className="space-y-3">
                  <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-400/30">
                    <span className="font-bold text-blue-200">1.</span>
                    <span className="text-white/90 ml-2">What exactly is not working?</span>
                  </div>
                  <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-400/30">
                    <span className="font-bold text-blue-200">2.</span>
                    <span className="text-white/90 ml-2">What did I expect to happen?</span>
                  </div>
                  <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-400/30">
                    <span className="font-bold text-blue-200">3.</span>
                    <span className="text-white/90 ml-2">What actually happened?</span>
                  </div>
                  <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-400/30">
                    <span className="font-bold text-blue-200">4.</span>
                    <span className="text-white/90 ml-2">What was the last thing that worked?</span>
                  </div>
                  <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-400/30">
                    <span className="font-bold text-blue-200">5.</span>
                    <span className="text-white/90 ml-2">What did I change since then?</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-2xl font-bold text-green-300 mb-4">🔍 Debugging Process</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                    <div>
                      <div className="font-bold text-green-200">Isolate the problem</div>
                      <div className="text-white/80 text-sm">Test one small piece at a time</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                    <div>
                      <div className="font-bold text-green-200">Add logging</div>
                      <div className="text-white/80 text-sm">Use console.log to see what's happening</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                    <div>
                      <div className="font-bold text-green-200">Check the basics</div>
                      <div className="text-white/80 text-sm">Are variables what you expect them to be?</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">4</span>
                    <div>
                      <div className="font-bold text-green-200">Read error messages</div>
                      <div className="text-white/80 text-sm">Browser console often tells you exactly what's wrong</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">5</span>
                    <div>
                      <div className="font-bold text-green-200">Take breaks</div>
                      <div className="text-white/80 text-sm">Sometimes stepping away helps you see the solution</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-2xl font-bold text-yellow-300 mb-4">🤝 Getting Help</h3>
                <div className="mb-4">
                  <h4 className="font-bold text-yellow-200 mb-2">Before asking for help, prepare:</h4>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      What specific function are you working on?
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      What did you try?
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      What error messages do you see?
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-400 mr-2">•</span>
                      Can you reproduce the problem consistently?
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="bg-green-500/20 rounded-lg p-4 border border-green-400/30">
                    <h5 className="font-bold text-green-300 mb-2">✅ Good Question:</h5>
                    <p className="text-white/90 text-sm">
                      "I'm working on handleKeyPress(). When I type a letter, nothing appears on screen. 
                      I added console.log and I can see the letter is being captured, but getTile() seems 
                      to return null. Here's my code..."
                    </p>
                  </div>

                  <div className="bg-red-500/20 rounded-lg p-4 border border-red-400/30">
                    <h5 className="font-bold text-red-300 mb-2">❌ Poor Question:</h5>
                    <p className="text-white/90 text-sm">
                      "My code doesn't work. Can you fix it?"
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-400/30">
                <h3 className="text-2xl font-bold text-purple-300 mb-4">💡 Success Mindset</h3>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Start small, build complexity gradually
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Expect bugs - they're part of learning
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Test constantly, don't write 50 lines then test
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    Understanding {'>'} just making it work
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },

    {
      id: 'questions',
      title: 'Questions?',
      bgGradient: 'from-green-600 to-teal-600',
      content: (
        <div className="text-white animate-fade-in">
          <div className="text-center space-y-12">
            <div className="space-y-8">
              <div className="text-8xl mb-6 animate-float">❓</div>
              <h2 className="text-6xl font-bold text-white mb-4">Questions?</h2>
              
              <div className="max-w-4xl mx-auto space-y-8">
                <div className="bg-white/20 backdrop-blur rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-blue-300 mb-4">Let me know if you have any questions!</h3>
                  <p className="text-xl text-white/90">
                    Use this problem-solving approach to tackle the Wordle assignment step by step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  // Scroll handling for slide tracking
  useEffect(() => {
    const handleScroll = () => {
      const slideElements = document.querySelectorAll('[data-slide-index]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      slideElements.forEach((element, index) => {
        const elementTop = element.offsetTop;
        const elementBottom = elementTop + element.offsetHeight;

        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          setCurrentSlide(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

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

export default PSOWordle2Slides; 