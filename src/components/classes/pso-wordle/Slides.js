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
  @keyframes tile-flip {
    0% { transform: rotateX(0deg); }
    50% { transform: rotateX(90deg); }
    100% { transform: rotateX(0deg); }
  }
  .tile-flip-animation {
    animation: tile-flip 0.6s ease-in-out;
  }
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }
  .shake-animation {
    animation: shake 0.5s ease-in-out;
  }
`;

// Interactive Wordle Demo Component
const WordleDemo = () => {
  const [guesses, setGuesses] = useState([]);
  const [showExample, setShowExample] = useState(false);

  const exampleGuesses = [
    { word: 'ARISE', colors: ['absent', 'present', 'absent', 'absent', 'absent'] },
    { word: 'TORCH', colors: ['absent', 'absent', 'present', 'present', 'absent'] },
    { word: 'REACT', colors: ['correct', 'correct', 'correct', 'correct', 'correct'] }
  ];

  const colorClasses = {
    correct: 'bg-green-500 border-green-500 text-white',
    present: 'bg-yellow-500 border-yellow-500 text-white',
    absent: 'bg-gray-500 border-gray-500 text-white',
    empty: 'bg-white/10 border-gray-400 text-white'
  };

  const runExample = async () => {
    setShowExample(true);
    setGuesses([]);
    
    for (let i = 0; i < exampleGuesses.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setGuesses(prev => [...prev, exampleGuesses[i]]);
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <div className="text-8xl mb-6 animate-float">🎯</div>
        <h3 className="text-3xl font-bold text-white mb-4">How Wordle Works</h3>
        <p className="text-xl text-white/80">6 attempts to guess a 5-letter word</p>
      </div>

      {/* Game Board */}
      <div className="bg-white/10 backdrop-blur rounded-xl p-8 mb-8">
        <div className="space-y-2 max-w-xs mx-auto">
          {/* Example guesses */}
          {guesses.map((guess, rowIndex) => (
            <div key={rowIndex} className="flex space-x-2 animate-fade-in">
              {guess.word.split('').map((letter, colIndex) => (
                <div
                  key={colIndex}
                  className={`w-12 h-12 border-2 rounded flex items-center justify-center font-bold text-lg transition-all duration-500 ${
                    colorClasses[guess.colors[colIndex]]
                  }`}
                >
                  {letter}
                </div>
              ))}
            </div>
          ))}
          
          {/* Empty rows */}
          {Array.from({ length: 6 - guesses.length }, (_, index) => (
            <div key={`empty-${index}`} className="flex space-x-2">
              {Array.from({ length: 5 }, (_, colIndex) => (
                <div
                  key={colIndex}
                  className={`w-12 h-12 border-2 rounded flex items-center justify-center font-bold text-lg ${colorClasses.empty}`}
                >
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <div className="text-center">
        <button
          onClick={runExample}
          disabled={showExample}
          className="bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-105 text-lg"
        >
          {showExample ? 'Watch the Magic! ✨' : 'Show Example Game 🎮'}
        </button>
      </div>

      {/* Color Legend */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-500/20 rounded-xl p-6 border border-green-400/30 text-center">
          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center font-bold text-xl text-white mx-auto mb-4">A</div>
          <div className="text-xl font-bold text-green-300 mb-2">Green = Correct</div>
          <div className="text-white/70">Right letter, right position</div>
        </div>
        
        <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30 text-center">
          <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center font-bold text-xl text-white mx-auto mb-4">B</div>
          <div className="text-xl font-bold text-yellow-300 mb-2">Yellow = Present</div>
          <div className="text-white/70">Right letter, wrong position</div>
        </div>
        
        <div className="bg-gray-500/20 rounded-xl p-6 border border-gray-400/30 text-center">
          <div className="w-12 h-12 bg-gray-500 rounded-lg flex items-center justify-center font-bold text-xl text-white mx-auto mb-4">C</div>
          <div className="text-xl font-bold text-gray-300 mb-2">Gray = Absent</div>
          <div className="text-white/70">Letter not in word</div>
        </div>
      </div>
    </div>
  );
};

// Function Implementation Visual
const FunctionBreakdown = () => {
  const [activeFunction, setActiveFunction] = useState('initializeGame');

  const functions = {
    initializeGame: {
      title: 'initializeGame()',
      points: 10,
      description: 'Set up a fresh game ready for the player',
      steps: [
        'Reset all tracking variables (currentWord, currentGuess, currentRow)',
        'Pick a new target word using WordleWords.getRandomWord()',
        'Clear the visual game board using resetBoard()',
        'Hide any leftover messages from previous games'
      ],
      color: 'blue'
    },
    handleKeyPress: {
      title: 'handleKeyPress(key)',
      points: 15,
      description: 'Process what happens when a player types',
      steps: [
        'Letter keys (A-Z): Add to current guess if room available',
        'ENTER key: Submit guess if complete (5 letters)',
        'BACKSPACE key: Remove last letter if any exist',
        'Update visual display after each change'
      ],
      color: 'green'
    },
    submitGuess: {
      title: 'submitGuess()',
      points: 20,
      description: 'Process a complete 5-letter guess',
      steps: [
        'Check if guess is valid using WordleWords.isValidWord()',
        'If invalid, show error and shake row',
        'If valid, check each letter with checkLetter()',
        'Update tile colors and keyboard colors',
        'Check win/lose conditions and move to next row'
      ],
      color: 'purple'
    },
    checkLetter: {
      title: 'checkLetter(letter, position, target)',
      points: 15,
      description: 'Determine the color of a single letter',
      steps: [
        'Return "correct" if letter matches exact position',
        'Return "present" if letter exists but wrong position',
        'Return "absent" if letter not in word at all',
        'Handle duplicate letters correctly (the tricky part!)'
      ],
      color: 'orange'
    }
  };

  const currentFunc = functions[activeFunction];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <div className="text-8xl mb-6 animate-float">⚙️</div>
        <h3 className="text-3xl font-bold text-white mb-4">Core Functions Breakdown</h3>
        <p className="text-xl text-white/80">Click on each function to explore</p>
      </div>

      {/* Function Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.entries(functions).map(([key, func]) => (
          <button
            key={key}
            onClick={() => setActiveFunction(key)}
            className={`px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105 ${
              activeFunction === key
                ? `bg-${func.color}-600 text-white shadow-lg`
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <div className="text-lg">{func.title}</div>
            <div className="text-sm opacity-75">{func.points} points</div>
          </button>
        ))}
      </div>

      {/* Function Details */}
      <div className={`bg-${currentFunc.color}-500/20 rounded-xl p-8 border border-${currentFunc.color}-400/30 animate-fade-in`}>
        <div className="text-center">
          <h4 className="text-3xl font-bold text-white mb-6">{currentFunc.title}</h4>
          <p className="text-xl text-white/90 mb-8">{currentFunc.description}</p>
          
          <div className="max-w-3xl mx-auto">
            <h5 className="text-xl font-bold text-white mb-6">What it does:</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentFunc.steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-3 text-left">
                  <div className={`w-8 h-8 bg-${currentFunc.color}-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5`}>
                    {index + 1}
                  </div>
                  <div className="text-white/80 text-lg">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Duplicate Letters Challenge
const DuplicateLettersDemo = () => {
  const [showSolution, setShowSolution] = useState(false);
  
  const analysis = [
    { letter: 'E', position: 0, status: 'present', explanation: 'E exists in SPEED (positions 2,3), wrong position' },
    { letter: 'R', position: 1, status: 'absent', explanation: 'R is not in SPEED at all' },
    { letter: 'A', position: 2, status: 'absent', explanation: 'A is not in SPEED at all' },
    { letter: 'S', position: 3, status: 'present', explanation: 'S exists in SPEED (position 0), wrong position' },
    { letter: 'E', position: 4, status: 'present', explanation: 'E exists in SPEED, uses the second E (positions 2,3)' }
  ];

  const statusColors = {
    correct: 'bg-green-500',
    present: 'bg-yellow-500',
    absent: 'bg-gray-500'
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <div className="text-8xl mb-6 animate-float">🧠</div>
        <h3 className="text-3xl font-bold text-white mb-4">The Duplicate Letter Challenge</h3>
        <p className="text-xl text-white/80">The trickiest part of Wordle logic</p>
      </div>

      <div className="bg-red-500/20 rounded-xl p-8 border border-red-400/30 mb-8">
        <div className="text-center mb-8">
          <h4 className="text-2xl font-bold text-white mb-4">Challenge Example</h4>
          <div className="text-lg text-white/90 mb-6">
            Target word: <span className="font-bold text-green-300">SPEED</span> | 
            Your guess: <span className="font-bold text-blue-300">ERASE</span>
          </div>
          
          {/* Visual breakdown */}
          <div className="grid grid-cols-5 gap-4 max-w-xs mx-auto mb-6">
            {analysis.map((item, index) => (
              <div key={index} className="text-center">
                <div className={`w-16 h-16 ${statusColors[item.status]} rounded-lg flex items-center justify-center font-bold text-2xl text-white mb-2 transition-all duration-500 ${
                  showSolution ? 'scale-110' : ''
                }`}>
                  {item.letter}
                </div>
                <div className="text-xs text-white/70">pos {item.position}</div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowSolution(!showSolution)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-bold transition-all transform hover:scale-105"
          >
            {showSolution ? 'Hide Logic' : 'Show Logic 🤔'}
          </button>
        </div>

        {showSolution && (
          <div className="space-y-4 animate-fade-in">
            <h5 className="text-xl font-bold text-white text-center mb-6">Step-by-Step Logic:</h5>
            {analysis.map((item, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 ${statusColors[item.status]} rounded-lg flex items-center justify-center font-bold text-xl text-white`}>
                    {item.letter}
                  </div>
                  <div>
                    <div className="text-white font-bold">Position {item.position}: {item.letter}</div>
                    <div className="text-white/80 text-sm">{item.explanation}</div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="bg-yellow-500/20 rounded-lg p-6 border border-yellow-400/30 mt-6">
              <h6 className="text-lg font-bold text-yellow-300 mb-3">🔑 Key Insight:</h6>
              <p className="text-white/90">
                SPEED has 2 E's (positions 2 and 3). The first E in ERASE gets yellow because 
                it can use one of them. The second E also gets yellow because SPEED has a second 
                E available. Both E's in SPEED get "claimed" by the two E's in ERASE!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Implementation Strategy Visual
const ImplementationStrategy = () => {
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    {
      title: 'Start with initializeGame()',
      description: 'Set up everything and get the foundation working',
      tips: ['Test by checking if variables are set', 'Use window.debug.currentWord() to verify'],
      color: 'blue',
      emoji: '🏗️'
    },
    {
      title: 'Basic handleKeyPress()',
      description: 'Handle letter input and display on screen',
      tips: ['Start with just letters', 'Add backspace functionality', 'See letters appear on board'],
      color: 'green',
      emoji: '⌨️'
    },
    {
      title: 'Simple checkLetter()',
      description: 'Basic logic without duplicate handling',
      tips: ['Test with simple words', 'Use console.log() to verify results', 'Ignore duplicates for now'],
      color: 'purple',
      emoji: '🔍'
    },
    {
      title: 'Build submitGuess()',
      description: 'Validate words and update colors',
      tips: ['Test valid/invalid words', 'Update tiles immediately', 'Verify colors appear'],
      color: 'orange',
      emoji: '✅'
    },
    {
      title: 'Add updateGameState()',
      description: 'Handle win/lose detection',
      tips: ['Test by winning games', 'Test by losing games', 'Check modal appears'],
      color: 'red',
      emoji: '🏁'
    },
    {
      title: 'Advanced Features',
      description: 'Polish with keyboard updates and effects',
      tips: ['Add keyboard colors', 'Implement celebrations', 'Handle edge cases'],
      color: 'cyan',
      emoji: '✨'
    },
    {
      title: 'Duplicate Letters',
      description: 'The final boss - save for last!',
      tips: ['Test with SPEED, LEVEL, ALLEY', 'This is the hardest part', 'Take your time!'],
      color: 'pink',
      emoji: '🧠'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <div className="text-8xl mb-6 animate-float">📋</div>
        <h3 className="text-3xl font-bold text-white mb-4">Implementation Strategy</h3>
        <p className="text-xl text-white/80">Follow this order for success!</p>
      </div>

      {/* Step Navigation */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => setCurrentStep(index)}
            className={`w-12 h-12 rounded-full font-bold transition-all transform hover:scale-110 ${
              currentStep === index
                ? `bg-${step.color}-500 text-white shadow-lg`
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Current Step */}
      <div className={`bg-${steps[currentStep].color}-500/20 rounded-xl p-8 border border-${steps[currentStep].color}-400/30 animate-fade-in`}>
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">{steps[currentStep].emoji}</div>
          <h4 className="text-3xl font-bold text-white mb-4">
            Step {currentStep + 1}: {steps[currentStep].title}
          </h4>
          <p className="text-xl text-white/90">{steps[currentStep].description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps[currentStep].tips.map((tip, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-4xl mb-3">💡</div>
              <div className="text-white/90">{tip}</div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            className="bg-gray-600 hover:bg-gray-700 disabled:opacity-50 text-white px-6 py-3 rounded-xl font-bold transition-all"
          >
            ← Previous
          </button>
          <button
            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            disabled={currentStep === steps.length - 1}
            className="bg-gray-600 hover:bg-gray-700 disabled:opacity-50 text-white px-6 py-3 rounded-xl font-bold transition-all"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

// Main PSO Wordle Slides Component
const PSOWordleSlides = () => {
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
      title: 'PSO - Wordle Clone',
      bgGradient: 'from-green-400 to-blue-600',
      content: (
        <div className="text-center space-y-12">
          <div className="space-y-8">
            <div className="text-8xl mb-6 animate-float">🎯</div>
            <h1 className="text-6xl font-bold text-white mb-6">
              PSO: Wordle Clone
            </h1>
            <h2 className="text-4xl font-semibold text-blue-100 mb-4">
              Mini Project 1
            </h2>
            <div className="text-2xl text-blue-200">
              Build a fully functional word-guessing game
            </div>
          </div>
          
          <div className="bg-white/20 backdrop-blur rounded-xl p-8 max-w-2xl mx-auto">
            <div className="grid grid-cols-2 gap-8 text-left">
              <div>
                <div className="text-yellow-300 font-bold text-lg mb-2">🎯 Target Score</div>
                <div className="text-white text-xl">~30 points</div>
              </div>
              <div>
                <div className="text-yellow-300 font-bold text-lg mb-2">📅 Due Date</div>
                <div className="text-white text-xl">September 27th</div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Discuss slide 1 (after title)
    {
      id: 'discuss-life-delights',
      title: 'Discuss!',
      bgGradient: 'from-blue-600 to-cyan-600',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">Discuss!</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <div className="text-left space-y-6 text-xl leading-relaxed">
                <div className="text-white font-semibold">
                  What’s a small thing that instantly makes your day better?
                </div>
                <div className="text-white font-semibold">
                  If you had an entire day with no responsibilities, how would you spend it?
                </div>
                <div className="text-white font-semibold">
                  What’s something simple you loved as a kid that still makes you happy now?
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Discuss slide 2 (after title)
    {
      id: 'discuss-pride-risk',
      title: 'Discuss!',
      bgGradient: 'from-cyan-600 to-teal-600',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">Discuss!</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <div className="text-left space-y-6 text-xl leading-relaxed">
                <div className="text-white font-semibold">
                  What’s a moment when you felt genuinely proud of yourself?
                </div>
                <div className="text-white font-semibold">
                  What’s a part of your daily life you think your younger self would find surprising?
                </div>
                <div className="text-white font-semibold">
                  What’s a risk you took that ended up being worth it?
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    {
      id: 'assignment-overview',
      title: 'Assignment Overview',
      bgGradient: 'from-purple-500 to-pink-600',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <div className="text-8xl mb-6 animate-float">📋</div>
            <h2 className="text-5xl font-bold text-white mb-4">Assignment Overview</h2>
            <p className="text-xl text-white/80">Your first major JavaScript challenge</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/20 backdrop-blur rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-yellow-300">🎮 What You're Building</h3>
                <ul className="space-y-2 text-lg text-white">
                  <li>• Fully functional Wordle clone</li>
                  <li>• Interactive word-guessing game</li>
                  <li>• Color-coded letter feedback</li>
                  <li>• On-screen keyboard updates</li>
                  <li>• Win/lose detection and modals</li>
                </ul>
              </div>
              
              <div className="bg-white/20 backdrop-blur rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-green-300">📚 What You'll Learn</h3>
                <ul className="space-y-2 text-lg text-white">
                  <li>• DOM Manipulation mastery</li>
                  <li>• Event handling patterns</li>
                  <li>• Complex game logic</li>
                  <li>• State management</li>
                  <li>• Input validation</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/20 backdrop-blur rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-300">🤝 Collaboration Rules</h3>
                <ul className="space-y-2 text-lg text-white">
                  <li>• Work together & collaborate freely</li>
                  <li>• Must understand what's happening</li>
                  <li>• Individual submissions required</li>
                  <li>• Help each other learn!</li>
                  <li>• Explain your logic to teammates</li>
                </ul>
              </div>
              
              <div className="bg-white/20 backdrop-blur rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-orange-300">🎯 Grading & Expectations</h3>
                <ul className="space-y-2 text-lg text-white">
                  <li>• Aim for ~30 points within the PSO (realistic goal)</li>
                  <li>• 90 points total available</li>
                  <li>• Focus on core functionality first</li>
                  <li>• Bonus points for clean code</li>
                  <li>• Learning &gt; perfection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )
    },

    {
      id: 'wordle-demo',
      title: 'How Wordle Works',
      bgGradient: 'from-indigo-500 to-purple-600',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold text-white mb-4">How Wordle Works</h2>
            <p className="text-xl text-white/80">Let's see it in action!</p>
          </div>
          <WordleDemo />
        </div>
      )
    },

    {
      id: 'core-functions',
      title: 'Core Functions Breakdown',
      bgGradient: 'from-blue-500 to-teal-600',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold text-white mb-4">Core Functions (60 Points)</h2>
            <p className="text-xl text-white/80">The heart of your Wordle game</p>
          </div>
          <FunctionBreakdown />
        </div>
      )
    },

    {
      id: 'advanced-features',
      title: 'Advanced Features',
      bgGradient: 'from-teal-500 to-green-600',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <div className="text-8xl mb-6 animate-float">✨</div>
            <h2 className="text-5xl font-bold text-white mb-4">Advanced Features (30 Points)</h2>
            <p className="text-xl text-white/80">Polish and user experience</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/20 backdrop-blur rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-yellow-300">updateKeyboardColors()</h3>
                  <div className="text-2xl font-bold text-green-300">10pts</div>
                </div>
                <p className="text-lg text-white/90 mb-4">Update keyboard with color priority</p>
                <div className="text-white/70">
                  Remember: Green &gt; Yellow &gt; Gray. Don't downgrade keys!
                </div>
              </div>
              
              <div className="bg-white/20 backdrop-blur rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-yellow-300">processRowReveal()</h3>
                  <div className="text-2xl font-bold text-green-300">5pts</div>
                </div>
                <p className="text-lg text-white/90 mb-4">Handle row completion effects</p>
                <div className="text-white/70">
                  Trigger celebrations when players win!
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/20 backdrop-blur rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-yellow-300">showEndGameModal()</h3>
                  <div className="text-2xl font-bold text-green-300">10pts</div>
                </div>
                <p className="text-lg text-white/90 mb-4">Display results and statistics</p>
                <div className="text-white/70">
                  Show win/lose messages and update player stats
                </div>
              </div>
              
              <div className="bg-white/20 backdrop-blur rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-yellow-300">validateInput()</h3>
                  <div className="text-2xl font-bold text-green-300">5pts</div>
                </div>
                <p className="text-lg text-white/90 mb-4">Prevent invalid actions</p>
                <div className="text-white/70">
                  Handle edge cases and make the game feel polished
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    {
      id: 'duplicate-challenge',
      title: 'The Duplicate Letter Challenge',
      bgGradient: 'from-red-500 to-pink-600',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold text-white mb-4">The Duplicate Letter Challenge</h2>
            <p className="text-xl text-white/80">The trickiest part of Wordle</p>
          </div>
          <DuplicateLettersDemo />
        </div>
      )
    },

    {
      id: 'implementation-strategy',
      title: 'Implementation Strategy',
      bgGradient: 'from-orange-500 to-red-600',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold text-white mb-4">Implementation Strategy</h2>
            <p className="text-xl text-white/80">Your roadmap to success</p>
          </div>
          <ImplementationStrategy />
        </div>
      )
    },

    {
      id: 'resources-provided',
      title: 'What\'s Provided For You',
      bgGradient: 'from-cyan-500 to-blue-600',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <div className="text-8xl mb-6 animate-float">🎁</div>
            <h2 className="text-5xl font-bold text-white mb-4">What's Provided For You</h2>
            <p className="text-xl text-white/80">Focus on the logic, not the setup</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white/20 backdrop-blur rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-yellow-300">🎨 UI & Styling</h3>
                <ul className="space-y-2 text-lg text-white">
                  <li>• Complete HTML structure</li>
                  <li>• All CSS styling and animations</li>
                  <li>• Game board and keyboard layout</li>
                  <li>• Responsive design for all devices</li>
                  <li>• Professional color schemes</li>
                </ul>
              </div>
              
              <div className="bg-white/20 backdrop-blur rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-green-300">🛠️ Utility Functions</h3>
                <ul className="space-y-2 text-lg text-white">
                  <li>• <code className="bg-gray-800 px-2 py-1 rounded">getTile()</code> - Access game tiles</li>
                  <li>• <code className="bg-gray-800 px-2 py-1 rounded">updateTileDisplay()</code> - Show letters</li>
                  <li>• <code className="bg-gray-800 px-2 py-1 rounded">setTileState()</code> - Apply colors</li>
                  <li>• <code className="bg-gray-800 px-2 py-1 rounded">resetBoard()</code> - Clear the board</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/20 backdrop-blur rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-blue-300">📚 Word Management</h3>
                <ul className="space-y-2 text-lg text-white">
                  <li>• <code className="bg-gray-800 px-2 py-1 rounded">WordleWords.getRandomWord()</code></li>
                  <li>• <code className="bg-gray-800 px-2 py-1 rounded">WordleWords.isValidWord()</code></li>
                  <li>• Thousands of valid words included</li>
                  <li>• Curated target word list</li>
                  <li>• No need to manage word databases</li>
                </ul>
              </div>
              
              <div className="bg-white/20 backdrop-blur rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-purple-300">✨ Effects & Polish</h3>
                <ul className="space-y-2 text-lg text-white">
                  <li>• <code className="bg-gray-800 px-2 py-1 rounded">shakeRow()</code> - Invalid word feedback</li>
                  <li>• <code className="bg-gray-800 px-2 py-1 rounded">celebrateRow()</code> - Win celebration</li>
                  <li>• <code className="bg-gray-800 px-2 py-1 rounded">showModal()</code> - End game display</li>
                  <li>• <code className="bg-gray-800 px-2 py-1 rounded">updateStats()</code> - Track performance</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl p-8 border border-red-400/30 text-center mb-8">
            <h4 className="text-2xl font-bold text-white mb-4">🚫 Important Restriction</h4>
            <p className="text-lg text-white/90 font-bold">
              You <strong>cannot use AI tools</strong> for this assignment, including AI IDEs like Cursor, 
              GitHub Copilot, ChatGPT, or any other AI assistance. This is about YOUR learning!
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-blue-400/30 text-center mb-8">
            <h4 className="text-2xl font-bold text-white mb-4">📁 Two Main Files You'll Work With</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/10 rounded-lg p-4">
                <h5 className="text-xl font-bold text-blue-300 mb-3">📖 game-starter.js</h5>
                <ul className="text-white/90 space-y-2">
                  <li>• Reference file with function signatures</li>
                  <li>• Shows what functions are available</li>
                  <li>• Contains utility function examples</li>
                  <li>• <strong>Read this first!</strong></li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h5 className="text-xl font-bold text-green-300 mb-3">✏️ student-implementation.js</h5>
                <ul className="text-white/90 space-y-2">
                  <li>• Where you write ALL your code</li>
                  <li>• Implement the required functions here</li>
                  <li>• This is what gets submitted</li>
                  <li>• <strong>Your main workspace!</strong></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl p-8 border border-green-400/30 text-center">
            <h4 className="text-2xl font-bold text-white mb-4">🎯 Your Job: The Logic</h4>
            <p className="text-lg text-white/90">
              All the visual polish, animations, and infrastructure is handled for you. 
              Focus your energy on implementing the game logic in <code className="bg-gray-800 px-2 py-1 rounded">student-implementation.js</code>!
            </p>
          </div>

        </div>
      )
    },



    {
      id: 'questions-wrap-up',
      title: 'Questions & Next Steps',
      bgGradient: 'from-purple-500 to-indigo-600',
      content: (
        <div className="text-center space-y-12">
          <div className="space-y-8">
            <div className="text-8xl mb-6 animate-float">❓</div>
            <h2 className="text-6xl font-bold text-white mb-4">Questions?</h2>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-2xl text-white/90">
                Remember: This is a <strong>learning experience</strong>, not a test!
              </p>
              <p className="text-xl text-white/80">
                Collaborate, help each other, and focus on understanding the logic.
              </p>
              
              <div className="bg-white/20 backdrop-blur rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-300">📁 Starter Code Repository</h3>
                <div className="text-center">
                  <a 
                    href="https://github.com/tgondil/wordle" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-bold transition-all transform hover:scale-105 text-lg"
                  >
                    <span className="text-2xl mr-3">🐙</span>
                    GitHub Repository
                    <span className="ml-2">→</span>
                  </a>
                  <p className="text-white/70 text-sm mt-3">
                    All starter files, HTML, CSS, and utility functions included
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

export default PSOWordleSlides; 