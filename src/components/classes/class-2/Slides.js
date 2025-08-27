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

// Enhanced interactive counter demo
const InteractiveCounter = () => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const updateCount = (newCount, action) => {
    setCount(newCount);
    setHistory(prev => [...prev.slice(-4), `${action}: ${newCount}`]);
  };

  return (
    <div className="bg-white/10 backdrop-blur rounded-xl p-8">
      <div className="text-center mb-6">
        <div className="text-8xl font-extrabold text-white mb-6 animate-pulse-glow">{count}</div>
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => updateCount(count + 1, '+1')}
            className="px-8 py-4 text-2xl rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition transform hover:scale-105"
          >
            +1
          </button>
          <button
            onClick={() => updateCount(count + 5, '+5')}
            className="px-8 py-4 text-2xl rounded-lg bg-green-600 hover:bg-green-700 text-white font-semibold transition transform hover:scale-105"
          >
            +5
          </button>
          <button
            onClick={() => updateCount(Math.max(0, count - 1), '-1')}
            className="px-8 py-4 text-2xl rounded-lg bg-red-600 hover:bg-red-700 text-white font-semibold transition transform hover:scale-105"
          >
            -1
          </button>
          <button
            onClick={() => updateCount(0, 'reset')}
            className="px-8 py-4 text-2xl rounded-lg bg-gray-600 hover:bg-gray-700 text-white font-semibold transition transform hover:scale-105"
          >
            Reset
          </button>
        </div>
      </div>
      
      {history.length > 0 && (
        <div className="bg-white/5 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-white/80 mb-2">Action History:</h4>
          <div className="space-y-1">
            {history.map((action, i) => (
              <div key={i} className="text-sm text-white/60 font-mono">{action}</div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Enhanced DOM tree visualization with more interactions
const DOMTreeVisualization = () => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [showSelectors, setShowSelectors] = useState(false);

  const TreeNode = ({ name, children, level = 0, emoji, id, className }) => (
    <div className="animate-fade-in">
      <div 
        className={`flex items-center cursor-pointer p-3 rounded-lg transition-all mb-2 ${
          selectedNode === name ? 'bg-blue-500/30 border border-blue-400 scale-105' : 'hover:bg-white/10'
        }`}
        style={{ marginLeft: `${level * 2}rem` }}
        onClick={() => setSelectedNode(selectedNode === name ? null : name)}
      >
        <span className="text-3xl mr-3">{emoji}</span>
        <span className="text-white font-mono text-xl">
          &lt;{name}
          {id && <span className="text-blue-300"> id="{id}"</span>}
          {className && <span className="text-green-300"> class="{className}"</span>}
          &gt;
        </span>
      </div>
      {children && children.map(child => (
        <TreeNode key={child.name} {...child} level={level + 1} />
      ))}
    </div>
  );

  const treeData = {
    name: 'html',
    emoji: '🏠',
    children: [
      { 
        name: 'head', 
        emoji: '🧠', 
        children: [
          { name: 'title', emoji: '📄' },
          { name: 'meta', emoji: '🏷️' }
        ] 
      },
      { 
        name: 'body', 
        emoji: '👤', 
        children: [
          { name: 'header', emoji: '📋', id: 'main-header' },
          { name: 'main', emoji: '📄', className: 'content' },
          { name: 'div', emoji: '📦', className: 'card' },
          { name: 'footer', emoji: '📄' }
        ] 
      }
    ]
  };

  const selectorExamples = {
    html: { selector: 'html', description: 'Select the HTML element' },
    head: { selector: 'head', description: 'Select the head element' },
    body: { selector: 'body', description: 'Select the body element' },
    header: { selector: '#main-header', description: 'Select by ID' },
    main: { selector: '.content', description: 'Select by class' },
    div: { selector: '.card', description: 'Select by class' },
    footer: { selector: 'footer', description: 'Select by element type' },
    title: { selector: 'title', description: 'Select the title element' },
    meta: { selector: 'meta', description: 'Select meta elements' }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white/10 backdrop-blur rounded-xl p-6">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">DOM Tree</h3>
        <div className="mb-4">
          <button
            onClick={() => setShowSelectors(!showSelectors)}
            className="text-blue-300 hover:text-blue-200 text-sm underline"
          >
            {showSelectors ? 'Hide' : 'Show'} CSS selectors
          </button>
        </div>
        <TreeNode {...treeData} />
      </div>
      
      <div className="bg-white/10 backdrop-blur rounded-xl p-6">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          {selectedNode ? `<${selectedNode}>` : 'Click any element'}
        </h3>
        {selectedNode && selectorExamples[selectedNode] ? (
          <div className="text-center animate-fade-in">
            <div className="text-6xl mb-4">🎯</div>
            <div className="bg-gray-800 rounded-lg p-4 mb-4">
              <code className="text-xl text-blue-300">
                document.querySelector('{selectorExamples[selectedNode].selector}')
              </code>
            </div>
            <div className="text-white/80 mb-4">
              {selectorExamples[selectedNode].description}
            </div>
            <div className="bg-green-500/20 rounded-lg p-3">
              <div className="text-green-300 text-sm font-semibold">CSS Selector:</div>
              <code className="text-green-200">{selectorExamples[selectedNode].selector}</code>
            </div>
          </div>
        ) : (
          <div className="text-center text-white/60">
            <div className="text-6xl mb-4">👆</div>
            <div className="mb-4">Click an element to see how to select it</div>
            <div className="text-sm text-white/50">
              The DOM is like a family tree - each element can have parents, children, and siblings
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Enhanced variable types with examples and use cases
const VariableTypesDemo = () => {
  const [activeType, setActiveType] = useState('string');

  const types = {
    string: { 
      emoji: '💬', 
      example: '"Hello World"', 
      color: 'bg-green-500',
      useCases: ['User names', 'Messages', 'URLs', 'HTML content'],
      commonMethods: ['.length', '.toUpperCase()', '.includes()', '.split()']
    },
    number: { 
      emoji: '🔢', 
      example: '42', 
      color: 'bg-blue-500',
      useCases: ['Ages', 'Prices', 'Scores', 'Coordinates'],
      commonMethods: ['.toString()', 'Math.round()', 'Math.max()', '+ - * /']
    },
    boolean: { 
      emoji: '✅', 
      example: 'true', 
      color: 'bg-purple-500',
      useCases: ['Login status', 'Form validation', 'Feature flags', 'Visibility'],
      commonMethods: ['!value', '&&', '||', 'if statements']
    },
    array: { 
      emoji: '📚', 
      example: '[1, 2, 3]', 
      color: 'bg-yellow-500',
      useCases: ['Lists of items', 'Menu options', 'User data', 'Shopping cart'],
      commonMethods: ['.map()', '.filter()', '.push()', '.length']
    },
    object: { 
      emoji: '📦', 
      example: '{ name: "John" }', 
      color: 'bg-red-500',
      useCases: ['User profiles', 'Product info', 'Settings', 'API responses'],
      commonMethods: ['Object.keys()', '.property', 'JSON.stringify()', 'destructuring']
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur rounded-xl p-8">
      <h3 className="text-3xl font-bold text-white mb-8 text-center">JavaScript Data Types</h3>
      
      <div className="grid grid-cols-5 gap-4 mb-8">
        {Object.entries(types).map(([key, type]) => (
          <button
            key={key}
            onClick={() => setActiveType(key)}
            className={`p-6 rounded-xl border-4 transition-all transform hover:scale-105 ${
              activeType === key 
                ? `${type.color} border-white shadow-2xl scale-110` 
                : 'bg-white/20 border-white/30 hover:border-white/60'
            }`}
          >
            <div className="text-4xl mb-2">{type.emoji}</div>
            <div className="text-white font-bold capitalize">{key}</div>
          </button>
        ))}
      </div>

      <div className="animate-fade-in">
        <div className="text-center mb-6">
          <div className="text-6xl mb-4">{types[activeType].emoji}</div>
          <div className="text-3xl font-mono text-white mb-4">{types[activeType].example}</div>
          <div className="text-xl text-white/80 capitalize mb-6">{activeType} Type</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-lg p-6">
            <h4 className="text-lg font-bold text-blue-300 mb-3">Common Use Cases:</h4>
            <div className="space-y-2">
              {types[activeType].useCases.map((useCase, i) => (
                <div key={i} className="text-white/80 text-sm flex items-center">
                  <span className="text-blue-400 mr-2">•</span>
                  {useCase}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white/5 rounded-lg p-6">
            <h4 className="text-lg font-bold text-green-300 mb-3">Common Methods/Operations:</h4>
            <div className="space-y-2">
              {types[activeType].commonMethods.map((method, i) => (
                <div key={i} className="text-white/80 text-sm font-mono flex items-center">
                  <span className="text-green-400 mr-2">•</span>
                  {method}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Type Comparison Demo Component  
const TypeComparisonDemo = () => {
  const [revealedResults, setRevealedResults] = useState({});
  
  const comparisons = [
    { 
      expression: '0 == []', 
      result: 'true',
      explanation: 'Array [] converts to empty string "", then to number 0'
    },
    { 
      expression: '0 == "0"', 
      result: 'true',
      explanation: 'String "0" converts to number 0'
    },
    { 
      expression: '"0" == []', 
      result: 'false',
      explanation: 'Array [] converts to "", but "0" ≠ ""'
    }
  ];
  
  const revealResult = (index) => {
    setRevealedResults(prev => ({ ...prev, [index]: true }));
  };
  
  const revealAll = () => {
    const allRevealed = {};
    comparisons.forEach((_, index) => {
      allRevealed[index] = true;
    });
    setRevealedResults(allRevealed);
  };
  
  return (
    <div className="bg-white/10 backdrop-blur rounded-xl p-8">
      <h4 className="text-2xl font-bold text-purple-300 mb-6">🤯 Type Comparison Examples</h4>
      <p className="text-white/80 mb-6">Guess the results, then click to reveal!</p>
      
      <div className="space-y-6">
        {comparisons.map((comp, index) => (
          <div key={index} className="bg-gray-900/50 rounded-xl p-6 border border-gray-600">
            <div className="flex items-center justify-between mb-4">
              <div className="font-mono text-2xl text-yellow-300">
                {comp.expression}
              </div>
              <button
                onClick={() => revealResult(index)}
                disabled={revealedResults[index]}
                className={`w-16 h-16 rounded-lg font-bold text-lg transition-all duration-300 ${
                  revealedResults[index]
                    ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    : 'bg-purple-600 text-white hover:bg-purple-700 hover:scale-105'
                }`}
              >
              </button>
            </div>
            
            {revealedResults[index] && (
              <div className="animate-fade-in">
                <div className="text-center mb-4">
                  <span className={`text-6xl font-bold ${
                    comp.result === 'true' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {comp.result}
                  </span>
                </div>
                <div className="bg-blue-900/30 rounded-lg p-4">
                  <div className="text-blue-300 font-semibold mb-2">Why?</div>
                  <div className="text-white/80">{comp.explanation}</div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <button
          onClick={revealAll}
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:scale-105 transition-transform"
        >
          Reveal All Results
        </button>
      </div>
      
      <div className="mt-6 bg-red-500/20 rounded-lg p-4 border border-red-400/30">
        <div className="text-red-300 font-bold mb-2">🚨 This is why we use ===</div>
        <div className="text-white/80">These weird conversions happen with ==, but === compares both value and type without conversion!</div>
      </div>
    </div>
  );
};

// Enhanced array methods with step-by-step visualization
const ArrayMethodsDemo = () => {
  const [selectedMethod, setSelectedMethod] = useState('map');
  const [step, setStep] = useState(0);
  const originalArray = [1, 2, 3, 4, 5];

  const methods = {
    map: {
      name: 'map',
      description: 'Transform each item',
      example: 'numbers.map(n => n * 2)',
      steps: [
        { item: 1, result: 2, explanation: '1 × 2 = 2' },
        { item: 2, result: 4, explanation: '2 × 2 = 4' },
        { item: 3, result: 6, explanation: '3 × 2 = 6' },
        { item: 4, result: 8, explanation: '4 × 2 = 8' },
        { item: 5, result: 10, explanation: '5 × 2 = 10' }
      ],
      finalResult: [2, 4, 6, 8, 10],
      color: 'blue'
    },
    filter: {
      name: 'filter',
      description: 'Keep items that pass a test',
      example: 'numbers.filter(n => n > 2)',
      steps: [
        { item: 1, result: null, explanation: '1 > 2? false → skip' },
        { item: 2, result: null, explanation: '2 > 2? false → skip' },
        { item: 3, result: 3, explanation: '3 > 2? true → keep' },
        { item: 4, result: 4, explanation: '4 > 2? true → keep' },
        { item: 5, result: 5, explanation: '5 > 2? true → keep' }
      ],
      finalResult: [3, 4, 5],
      color: 'green'
    },
    find: {
      name: 'find',
      description: 'Get first item that passes test',
      example: 'numbers.find(n => n > 3)',
      steps: [
        { item: 1, result: null, explanation: '1 > 3? false → continue' },
        { item: 2, result: null, explanation: '2 > 3? false → continue' },
        { item: 3, result: null, explanation: '3 > 3? false → continue' },
        { item: 4, result: 4, explanation: '4 > 3? true → found! stop here' },
        { item: 5, result: null, explanation: 'not checked (already found)' }
      ],
      finalResult: [4],
      color: 'purple'
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(prev => (prev + 1) % (methods[selectedMethod].steps.length + 1));
    }, 1500);
    return () => clearInterval(timer);
  }, [selectedMethod]);

  return (
    <div className="bg-white/10 backdrop-blur rounded-xl p-8">
      <h3 className="text-3xl font-bold text-white mb-8 text-center">Array Methods in Action</h3>
      
      {/* Method selector */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {Object.entries(methods).map(([key, method]) => (
          <button
            key={key}
            onClick={() => {
              setSelectedMethod(key);
              setStep(0);
            }}
            className={`p-4 rounded-xl border-2 transition-all ${
              selectedMethod === key 
                ? `border-${method.color}-400 bg-${method.color}-500/20` 
                : 'border-white/20 hover:border-white/40'
            }`}
          >
            <div className="text-white font-mono text-lg">.{method.name}()</div>
            <div className="text-white/70 text-sm mt-1">{method.description}</div>
          </button>
        ))}
      </div>

      <div className="animate-fade-in">
        {/* Original array */}
        <div className="text-center mb-6">
          <h4 className="text-lg font-bold text-white/80 mb-4">Original Array:</h4>
          <div className="flex justify-center space-x-2 mb-4">
            {originalArray.map((num, i) => (
              <div 
                key={i} 
                className={`w-16 h-16 bg-gray-600 rounded-lg flex items-center justify-center text-white font-bold text-lg transition-all ${
                  step > i ? 'ring-2 ring-blue-400' : ''
                }`}
              >
                {num}
              </div>
            ))}
          </div>
        </div>

        {/* Step-by-step transformation */}
        <div className="text-center mb-6">
          <h4 className="text-lg font-bold text-white/80 mb-4">
            Step-by-step: <code className="text-blue-300">{methods[selectedMethod].example}</code>
          </h4>
          {step > 0 && step <= methods[selectedMethod].steps.length && (
            <div className="bg-white/5 rounded-lg p-4 mb-4">
              <div className="text-yellow-300 font-semibold">
                Step {step}: Processing {methods[selectedMethod].steps[step - 1].item}
              </div>
              <div className="text-white/80 mt-2">
                {methods[selectedMethod].steps[step - 1].explanation}
              </div>
            </div>
          )}
        </div>

        {/* Result */}
        <div className="text-center">
          <h4 className="text-lg font-bold text-white/80 mb-4">Result:</h4>
          <div className="flex justify-center space-x-2">
            {methods[selectedMethod].finalResult.map((num, i) => (
              <div 
                key={i} 
                className={`w-16 h-16 bg-${methods[selectedMethod].color}-500 rounded-lg flex items-center justify-center text-white font-bold text-lg animate-pulse-glow`}
              >
                {num}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Class2Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'title-slide',
      title: 'CS390 Web Applications Programming',
      content: (
        <div className="text-center space-y-12">
          <style>{customStyles}</style>
          <div className="space-y-8">
            <h1 className="text-6xl font-bold text-white mb-6">
              CS390
            </h1>
            <h2 className="text-4xl font-semibold text-blue-100 mb-4">
              Web Applications Programming
            </h2>
            <div className="text-2xl text-blue-200">
              Class 2: JavaScript for the Browser
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
      id: 'dom-what-is',
      title: 'What is the DOM?',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">What is the DOM?</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🌳</div>
            <h3 className="text-4xl font-bold mb-8">Document Object Model</h3>
            <p className="text-2xl text-white/80 mb-12">Your HTML as a living, breathing family tree</p>
            
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-8">
                <div className="text-5xl mb-4">📄</div>
                <h4 className="text-2xl font-bold mb-4">Document</h4>
                <p className="text-white/80 text-lg">Your entire webpage - everything you see and don't see</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-8">
                <div className="text-5xl mb-4">🎯</div>
                <h4 className="text-2xl font-bold mb-4">Object</h4>
                <p className="text-white/80 text-lg">Each HTML element becomes a JavaScript object you can control</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-8">
                <div className="text-5xl mb-4">🏗️</div>
                <h4 className="text-2xl font-bold mb-4">Model</h4>
                <p className="text-white/80 text-lg">Organized like a family tree with parents, children, and siblings</p>
              </div>
            </div>
            
            <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/30">
              <h4 className="text-xl font-bold text-blue-300 mb-3">🧠 Think of it like this:</h4>
              <p className="text-white/90 text-lg">
                Your HTML is like a blueprint, but the DOM is the actual building that JavaScript can walk through, 
                renovate, and control. Every &lt;div&gt;, &lt;button&gt;, and &lt;p&gt; becomes a room JavaScript can visit.
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-sky-700 to-cyan-700'
    },

    {
      id: 'variables-intro',
      title: 'Variables - Your Data Storage',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Variables</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📦</div>
            <h3 className="text-4xl font-bold mb-8">Labeled boxes that store values</h3>
            <p className="text-xl text-white/80 mb-12">Think of variables as labeled storage containers in your computer's memory</p>
            
            <div className="grid grid-cols-2 gap-12 mb-8">
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400">
                <div className="text-5xl mb-6">🔒</div>
                <h4 className="text-3xl font-bold mb-4 text-blue-300">const</h4>
                <p className="text-xl text-white/90 mb-6">Value NEVER changes</p>
                <div className="bg-blue-900/50 rounded-lg p-4 font-mono text-lg mb-4">
                  const name = "Alice"
                </div>
                <div className="text-white/70">
                  <div className="font-semibold mb-2">Perfect for:</div>
                  <div className="text-sm space-y-1">
                    <div>• User's name (doesn't change during session)</div>
                    <div>• API URLs (stay the same)</div>
                    <div>• Configuration settings</div>
                    <div>• Math constants (like π)</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <div className="text-5xl mb-6">🔄</div>
                <h4 className="text-3xl font-bold mb-4 text-green-300">let</h4>
                <p className="text-xl text-white/90 mb-6">Value CAN change</p>
                <div className="bg-green-900/50 rounded-lg p-4 font-mono text-lg mb-4">
                  let score = 0
                </div>
                <div className="text-white/70">
                  <div className="font-semibold mb-2">Perfect for:</div>
                  <div className="text-sm space-y-1">
                    <div>• Game scores (go up and down)</div>
                    <div>• Form input values</div>
                    <div>• Counters and timers</div>
                    <div>• Temporary calculations</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-red-500/20 rounded-xl p-6 border border-red-400/30">
              <h4 className="text-xl font-bold text-red-300 mb-3">❌ Avoid var (the old way)</h4>
              <p className="text-white/80">Use const by default, let when you need to change the value. Forget var exists!</p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-cyan-700 to-blue-700'
    },

    {
      id: 'data-types',
      title: 'JavaScript Data Types',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8 text-center">JavaScript Data Types</h2>
          <div className="mb-6 text-center">
            <p className="text-xl text-white/80">Click each type to see examples and use cases</p>
          </div>
          <VariableTypesDemo />
        </div>
      ),
      bgGradient: 'from-blue-700 to-indigo-700'
    },

    {
      id: 'dynamic-typing',
      title: 'JavaScript\'s Dynamic Typing',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Dynamic Typing</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🎭</div>
            <h3 className="text-3xl font-bold mb-8">JavaScript is flexible... maybe too flexible</h3>
            <p className="text-xl text-white/80 mb-12">Variables can change types, and comparisons can be surprising!</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <div className="text-4xl mb-4">✨</div>
                <h4 className="text-2xl font-bold mb-4 text-green-300">Dynamic Typing Benefits</h4>
                <div className="text-white/80 space-y-3 text-left">
                  <div>• <strong>Flexible:</strong> Variables can hold any type</div>
                  <div>• <strong>Quick to write:</strong> No type declarations needed</div>
                  <div>• <strong>Beginner-friendly:</strong> Less syntax to learn</div>
                </div>
                <div className="bg-green-900/50 rounded-lg p-4 font-mono text-sm mt-4">
                  let x = "hello";<br/>
                  x = 42;           // Totally fine!<br/>
                  x = true;         // Also fine!<br/>
                  x = [1, 2, 3];    // Still fine!
                </div>
              </div>
              
              <div className="bg-yellow-500/20 backdrop-blur rounded-xl p-8 border-2 border-yellow-400">
                <div className="text-4xl mb-4">⚠️</div>
                <h4 className="text-2xl font-bold mb-4 text-yellow-300">Watch Out For...</h4>
                <div className="text-white/80 space-y-3 text-left">
                  <div>• <strong>Unexpected results:</strong> Type coercion surprises</div>
                  <div>• <strong>Hard to debug:</strong> Silent type changes</div>
                  <div>• <strong>Comparison confusion:</strong> == vs === matters!</div>
                </div>
                <div className="bg-yellow-900/50 rounded-lg p-4 font-mono text-sm mt-4">
                  "5" + 3          // "53" (string)<br/>
                  "5" - 3          // 2 (number)<br/>
                  true + 1         // 2 (number)<br/>
                  [] + []          // "" (empty string!)
                </div>
              </div>
            </div>
            
            <TypeComparisonDemo />
            
            <div className="mt-8 bg-blue-500/20 rounded-xl p-6 border border-blue-400/30">
              <h4 className="text-xl font-bold text-blue-300 mb-3">💡 Pro Tip: Use === instead of ==</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-500/20 rounded-lg p-4">
                  <div className="text-red-300 font-semibold mb-2">== (loose equality)</div>
                  <div className="text-white/80 text-sm">Tries to convert types before comparing</div>
                  <code className="text-red-300 text-sm block mt-2">"5" == 5  // true</code>
                </div>
                <div className="bg-green-500/20 rounded-lg p-4">
                  <div className="text-green-300 font-semibold mb-2">=== (strict equality)</div>
                  <div className="text-white/80 text-sm">Compares value AND type</div>
                  <code className="text-green-300 text-sm block mt-2">"5" === 5  // false</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-700 to-purple-700'
    },

    {
      id: 'functions-intro',
      title: 'Functions - Code Machines',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Functions</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🏭</div>
            <h3 className="text-3xl font-bold mb-12">Functions are like smart machines</h3>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 mb-8">
              <h4 className="text-2xl font-bold mb-6 text-green-300">Let's See a Function in Action!</h4>
              
              <div className="bg-gray-900/80 rounded-xl p-6 font-mono text-lg mb-6">
                <div className="text-blue-300 mb-4">// Define the function</div>
                <div className="text-white mb-2">function <span className="text-yellow-300">sayHello</span>(<span className="text-green-300">name</span>) &#123;</div>
                <div className="text-white ml-4 mb-2">&nbsp;&nbsp;return "Hello, " + <span className="text-green-300">name</span> + "!";</div>
                <div className="text-white mb-4">&#125;</div>
                
                <div className="text-blue-300 mb-4">// Use the function</div>
                <div className="text-white mb-2">const message = <span className="text-yellow-300">sayHello</span>("Alice");</div>
                <div className="text-white">console.log(message);</div>
              </div>
              
              <div className="bg-green-900/50 rounded-xl p-6 border-2 border-green-400">
                <div className="text-green-300 font-bold text-xl mb-2">Output:</div>
                <div className="font-mono text-2xl text-white">"Hello, Alice!"</div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-6 border-2 border-blue-400">
                <div className="text-4xl mb-3 animate-float">📥</div>
                <h4 className="text-xl font-bold mb-3">Input</h4>
                <div className="text-white/80 text-sm mb-2">Parameter: <code className="text-green-300">"Alice"</code></div>
                <div className="text-white/60 text-xs">What goes into the function</div>
              </div>
              
              <div className="bg-green-500/20 backdrop-blur rounded-xl p-6 border-2 border-green-400">
                <div className="text-4xl mb-3 animate-float" style={{animationDelay: '0.5s'}}>⚙️</div>
                <h4 className="text-xl font-bold mb-3">Process</h4>
                <div className="text-white/80 text-sm mb-2">Combines "Hello, " + name + "!"</div>
                <div className="text-white/60 text-xs">The work it does</div>
              </div>
              
              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-6 border-2 border-purple-400">
                <div className="text-4xl mb-3 animate-float" style={{animationDelay: '1s'}}>📤</div>
                <h4 className="text-xl font-bold mb-3">Output</h4>
                <div className="text-white/80 text-sm mb-2">Returns: <code className="text-purple-300">"Hello, Alice!"</code></div>
                <div className="text-white/60 text-xs">What you get back</div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <h4 className="text-xl font-bold text-yellow-300 mb-3">🎯 Why Functions Are Awesome:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white/80 text-sm">
                <div>• <strong>Reusable:</strong> Write once, use many times</div>
                <div>• <strong>Organized:</strong> Keep code neat and tidy</div>
                <div>• <strong>Testable:</strong> Easy to check if they work</div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-cyan-700 to-blue-700'
    },

    {
      id: 'function-examples',
      title: 'Function Examples & Best Practices',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8 text-center">Real Function Examples</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Simple Functions */}
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-300">Simple Functions</h3>
                <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm mb-4">
                  // No parameters<br/>
                  const sayHello = () =&gt; "Hello!";<br/>
                  <br/>
                  // One parameter<br/>
                  const double = (num) =&gt; num * 2;<br/>
                  <br/>
                  // Multiple parameters<br/>
                  const add = (a, b) =&gt; a + b;<br/>
                  <br/>
                  // Usage<br/>
                  console.log(sayHello()); // "Hello!"<br/>
                  console.log(double(5)); // 10<br/>
                  console.log(add(3, 7)); // 10
                </div>
              </div>

              {/* Complex Functions */}
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4 text-green-300">More Complex Functions</h3>
                <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm mb-4">
                  // With default parameters<br/>
                  const greet = (name = "Friend") =&gt; &#123;<br/>
                  &nbsp;&nbsp;return \`Hello, \$&#123;name&#125;!\`;<br/>
                  &#125;;<br/>
                  <br/>
                  // With validation<br/>
                  const calculateDiscount = (price, percent) =&gt; &#123;<br/>
                  &nbsp;&nbsp;if (price &lt; 0 || percent &lt; 0) &#123;<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;return "Invalid input";<br/>
                  &nbsp;&nbsp;&#125;<br/>
                  &nbsp;&nbsp;return price * (percent / 100);<br/>
                  &#125;;
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-8 border border-yellow-400/30">
              <h3 className="text-2xl font-bold text-yellow-300 mb-6">🎯 Function Best Practices</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-green-300 font-semibold mb-2">✅ Do This:</div>
                    <div className="text-white/80 text-sm space-y-1">
                      <div>• Give functions descriptive names</div>
                      <div>• Keep functions small and focused</div>
                      <div>• Always return something</div>
                      <div>• Use const for functions that don't change</div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-red-300 font-semibold mb-2">❌ Avoid This:</div>
                    <div className="text-white/80 text-sm space-y-1">
                      <div>• Functions that do too many things</div>
                      <div>• Vague names like "doStuff"</div>
                      <div>• Functions that change global variables</div>
                      <div>• Forgetting to return values</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-semibold mb-3 text-purple-300">Real-World Examples:</div>
                  <div className="text-white/80 text-sm space-y-2">
                    <div><strong>validateEmail(email)</strong> - Check if email is valid</div>
                    <div><strong>formatPrice(amount)</strong> - Add $ and commas</div>
                    <div><strong>calculateTax(price, rate)</strong> - Compute tax amount</div>
                    <div><strong>isUserLoggedIn()</strong> - Check login status</div>
                    <div><strong>generateId()</strong> - Create unique ID</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-700 to-fuchsia-700'
    },

    {
      id: 'arrays-intro',
      title: 'Arrays - Lists of Data',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Arrays</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📚</div>
            <h3 className="text-3xl font-bold mb-8">Numbered shelves holding items</h3>
            <p className="text-xl text-white/80 mb-12">Arrays store multiple values in a single variable, like a list or collection</p>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 mb-8">
              <h4 className="text-2xl font-bold mb-6">Visual Example: Fruit Array</h4>
              <div className="grid grid-cols-4 gap-4 mb-6">
                {['🍎', '🍌', '🍊', '🍇'].map((fruit, i) => (
                  <div key={i} className="bg-white/20 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-2">{fruit}</div>
                    <div className="text-white/60 text-sm">Index {i}</div>
                    <div className="text-white/80 text-xs mt-1">
                      fruits[{i}]
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gray-800 rounded-lg p-4 font-mono text-lg">
                const fruits = ["🍎", "🍌", "🍊", "🍇"];
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-6 border-2 border-blue-400">
                <h4 className="text-xl font-bold mb-4 text-blue-300">Creating Arrays</h4>
                <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm space-y-2">
                  <div>// Empty array</div>
                  <div>const empty = [];</div>
                  <div></div>
                  <div>// With numbers</div>
                  <div>const scores = [85, 92, 78];</div>
                  <div></div>
                  <div>// With strings</div>
                  <div>const names = ["Alice", "Bob"];</div>
                </div>
              </div>

              <div className="bg-green-500/20 backdrop-blur rounded-xl p-6 border-2 border-green-400">
                <h4 className="text-xl font-bold mb-4 text-green-300">Accessing Items</h4>
                <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm space-y-2">
                  <div>// Get first item (index 0)</div>
                  <div>fruits[0] // "🍎"</div>
                  <div></div>
                  <div>// Get array length</div>
                  <div>fruits.length // 4</div>
                  <div></div>
                  <div>// Get last item</div>
                  <div>fruits[fruits.length - 1] // "🍇"</div>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <h4 className="text-xl font-bold text-yellow-300 mb-3">⚠️ Important: Arrays start at 0!</h4>
              <p className="text-white/90">The first item is at index 0, not 1. This trips up many beginners!</p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-fuchsia-700 to-pink-700'
    },

    {
      id: 'array-methods',
      title: 'Array Methods - Data Transformation',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8 text-center">Array Methods</h2>
          <div className="mb-6 text-center">
            <p className="text-xl text-white/80">Watch how data transforms step by step</p>
          </div>
          <ArrayMethodsDemo />
        </div>
      ),
      bgGradient: 'from-pink-700 to-rose-700'
    },

    {
      id: 'array-real-world',
      title: 'Arrays in Real Web Development',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Arrays Everywhere!</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-6xl mb-8 animate-float">🌐</div>
            <h3 className="text-3xl font-bold mb-12">Every website you use is powered by arrays</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-6 border-2 border-blue-400">
                <div className="text-4xl mb-4">📱</div>
                <h4 className="text-xl font-bold mb-3">Social Media</h4>
                <div className="text-white/80 mb-3">Instagram feed, Twitter timeline</div>
                <div className="bg-gray-800 rounded p-3 font-mono text-xs">
                  posts.map(post =&gt; &lt;Post data=&#123;post&#125; /&gt;)
                </div>
              </div>

              <div className="bg-green-500/20 backdrop-blur rounded-xl p-6 border-2 border-green-400">
                <div className="text-4xl mb-4">🛒</div>
                <h4 className="text-xl font-bold mb-3">E-commerce</h4>
                <div className="text-white/80 mb-3">Shopping cart items, product lists</div>
                <div className="bg-gray-800 rounded p-3 font-mono text-xs">
                  cart.filter(item =&gt; item.price &lt; 50)
                </div>
              </div>

              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-6 border-2 border-purple-400">
                <div className="text-4xl mb-4">🎵</div>
                <h4 className="text-xl font-bold mb-3">Streaming</h4>
                <div className="text-white/80 mb-3">Spotify playlists, Netflix shows</div>
                <div className="bg-gray-800 rounded p-3 font-mono text-xs">
                  songs.find(song =&gt; song.id === currentId)
                </div>
              </div>

              <div className="bg-red-500/20 backdrop-blur rounded-xl p-6 border-2 border-red-400">
                <div className="text-4xl mb-4">📧</div>
                <h4 className="text-xl font-bold mb-3">Email</h4>
                <div className="text-white/80 mb-3">Gmail inbox, message threads</div>
                <div className="bg-gray-800 rounded p-3 font-mono text-xs">
                  emails.filter(email =&gt; !email.read)
                </div>
              </div>

              <div className="bg-yellow-500/20 backdrop-blur rounded-xl p-6 border-2 border-yellow-400">
                <div className="text-4xl mb-4">🔍</div>
                <h4 className="text-xl font-bold mb-3">Search</h4>
                <div className="text-white/80 mb-3">Google results, search suggestions</div>
                <div className="bg-gray-800 rounded p-3 font-mono text-xs">
                  results.map(result =&gt; result.title)
                </div>
              </div>

              <div className="bg-indigo-500/20 backdrop-blur rounded-xl p-6 border-2 border-indigo-400">
                <div className="text-4xl mb-4">💬</div>
                <h4 className="text-xl font-bold mb-3">Chat Apps</h4>
                <div className="text-white/80 mb-3">WhatsApp messages, Slack channels</div>
                <div className="bg-gray-800 rounded p-3 font-mono text-xs">
                  messages.push(newMessage)
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <h4 className="text-2xl font-bold text-orange-300 mb-6">The Magic Pattern: Data → UI</h4>
              <div className="grid grid-cols-3 gap-8 items-center">
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-3xl mb-2">📊</div>
                  <div className="font-bold mb-2">1. Data (Array)</div>
                  <div className="text-white/70 text-sm">
                    [&#123; name: "Alice", age: 25 &#125;, &#123; name: "Bob", age: 30 &#125;]
                  </div>
                </div>
                
                <div className="text-3xl text-white/50">→</div>
                
                <div className="bg-white/5 rounded-lg p-4">
                  <div className="text-3xl mb-2">🎨</div>
                  <div className="font-bold mb-2">2. UI (Visual)</div>
                  <div className="space-y-1">
                    <div className="bg-blue-500/30 rounded p-1 text-xs">Alice, 25</div>
                    <div className="bg-blue-500/30 rounded p-1 text-xs">Bob, 30</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-orange-500/20 rounded-lg p-4">
                <div className="text-orange-300 font-bold mb-2">🚀 This is how EVERY dynamic website works!</div>
                <div className="text-white/80">Master arrays and their methods, and you understand the foundation of modern web development.</div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-rose-700 to-orange-700'
    },

    // NOW the DOM interaction details make sense since they understand the basics!
    {
      id: 'dom-tree',
      title: 'DOM Tree Structure',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8 text-center">DOM Tree Structure</h2>
          <div className="mb-6 text-center">
            <p className="text-xl text-white/80">Now that you know variables and functions, let's see how to target specific elements</p>
          </div>
          <DOMTreeVisualization />
        </div>
      ),
      bgGradient: 'from-orange-700 to-amber-700'
    },

    {
      id: 'dom-connection',
      title: 'JavaScript ↔ DOM Pattern',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12">The Universal Pattern</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-4xl mb-8 text-white/80">Every interactive feature follows this pattern:</div>
            
            <div className="grid grid-cols-3 gap-8 mb-12">
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400">
                <div className="text-6xl mb-4 animate-float">🔍</div>
                <h3 className="text-2xl font-bold mb-4">1. Find</h3>
                <p className="text-white/80 text-lg mb-4">Locate elements in the DOM</p>
                <div className="bg-blue-900/50 rounded-lg p-3">
                  <code className="text-blue-300 text-sm">document.querySelector('#button')</code>
                </div>
                <div className="text-white/60 text-sm mt-2">Like getting someone's address</div>
              </div>
              
              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <div className="text-6xl mb-4 animate-float" style={{animationDelay: '0.5s'}}>⚡</div>
                <h3 className="text-2xl font-bold mb-4">2. Change</h3>
                <p className="text-white/80 text-lg mb-4">Update content & styles</p>
                <div className="bg-green-900/50 rounded-lg p-3">
                  <code className="text-green-300 text-sm">element.textContent = 'New!'</code>
                </div>
                <div className="text-white/60 text-sm mt-2">Like redecorating their house</div>
              </div>
              
              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-8 border-2 border-purple-400">
                <div className="text-6xl mb-4 animate-float" style={{animationDelay: '1s'}}>👂</div>
                <h3 className="text-2xl font-bold mb-4">3. Listen</h3>
                <p className="text-white/80 text-lg mb-4">Respond to user actions</p>
                <div className="bg-purple-900/50 rounded-lg p-3">
                  <code className="text-purple-300 text-sm">addEventListener('click', fn)</code>
                </div>
                <div className="text-white/60 text-sm mt-2">Like being a good neighbor</div>
              </div>
            </div>
            
            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <h4 className="text-2xl font-bold text-yellow-300 mb-3">🎯 Every Instagram like, every Google search, every Netflix click</h4>
              <p className="text-white/90 text-lg">follows this exact same pattern. Master this, and you understand all web interactivity!</p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-amber-700 to-yellow-700'
    },

    {
      id: 'events-intro',
      title: 'Events - Making Things Interactive',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Events</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">⚡</div>
            <h3 className="text-3xl font-bold mb-12">Things that happen on your page</h3>
            <p className="text-xl text-white/80 mb-12">Events are how users interact with your website. JavaScript listens and responds!</p>
            
            <div className="grid grid-cols-3 gap-8 mb-12">
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400">
                <div className="text-6xl mb-4 animate-float">👆</div>
                <h4 className="text-2xl font-bold mb-4">Click Events</h4>
                <p className="text-white/80 text-lg mb-4">User clicks buttons, links, images, anything!</p>
                <div className="bg-white/5 rounded-lg p-3 text-sm">
                  <div className="font-semibold mb-2">Common uses:</div>
                  <div className="text-white/70 space-y-1">
                    <div>• Submit forms</div>
                    <div>• Open menus</div>
                    <div>• Like posts</div>
                    <div>• Play videos</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <div className="text-6xl mb-4 animate-float" style={{animationDelay: '0.5s'}}>⌨️</div>
                <h4 className="text-2xl font-bold mb-4">Keyboard Events</h4>
                <p className="text-white/80 text-lg mb-4">User types in inputs, presses keys</p>
                <div className="bg-white/5 rounded-lg p-3 text-sm">
                  <div className="font-semibold mb-2">Common uses:</div>
                  <div className="text-white/70 space-y-1">
                    <div>• Search as you type</div>
                    <div>• Form validation</div>
                    <div>• Keyboard shortcuts</div>
                    <div>• Auto-save drafts</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-8 border-2 border-purple-400">
                <div className="text-6xl mb-4 animate-float" style={{animationDelay: '1s'}}>📤</div>
                <h4 className="text-2xl font-bold mb-4">Form Events</h4>
                <p className="text-white/80 text-lg mb-4">User submits forms, changes values</p>
                <div className="bg-white/5 rounded-lg p-3 text-sm">
                  <div className="font-semibold mb-2">Common uses:</div>
                  <div className="text-white/70 space-y-1">
                    <div>• Contact forms</div>
                    <div>• Login/signup</div>
                    <div>• Settings pages</div>
                    <div>• Surveys/polls</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <h4 className="text-2xl font-bold text-yellow-300 mb-6">The Event Listening Pattern</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="bg-yellow-900/30 rounded-lg p-4">
                  <div className="text-lg font-bold mb-2">1. Find Element</div>
                  <code className="text-yellow-300 text-sm">document.querySelector('#button')</code>
                </div>
                
                <div className="text-2xl">→</div>
                
                <div className="bg-yellow-900/30 rounded-lg p-4">
                  <div className="text-lg font-bold mb-2">2. Add Listener</div>
                  <code className="text-yellow-300 text-sm">addEventListener('click', function)</code>
                </div>
              </div>
              
              <div className="mt-6 bg-yellow-500/20 rounded-lg p-4 border border-yellow-400/30">
                <div className="text-yellow-300 font-bold mb-2">💡 Think of it like this:</div>
                <div className="text-white/90">
                  You're telling JavaScript: "Hey, watch this button. When someone clicks it, run this function!"
                  It's like having a security guard who reports when specific things happen.
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-yellow-700 to-green-700'
    },

    {
      id: 'demo-counter',
      title: 'Live Demo: Interactive Counter',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Live Demo: Counter App</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-xl text-white/80">Try clicking the buttons below - watch how JavaScript responds to your events!</p>
            </div>
            
            <InteractiveCounter />
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-6 border-2 border-blue-400">
                <div className="text-4xl mb-3">📊</div>
                <div className="font-bold text-lg mb-2">State Management</div>
                <div className="text-white/80 text-sm">
                  JavaScript remembers the current count value and updates it when buttons are clicked
                </div>
              </div>
              <div className="bg-green-500/20 backdrop-blur rounded-xl p-6 border-2 border-green-400">
                <div className="text-4xl mb-3">👂</div>
                <div className="font-bold text-lg mb-2">Event Handling</div>
                <div className="text-white/80 text-sm">
                  Each button has an event listener that runs a function when clicked
                </div>
              </div>
              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-6 border-2 border-purple-400">
                <div className="text-4xl mb-3">🔄</div>
                <div className="font-bold text-lg mb-2">DOM Updates</div>
                <div className="text-white/80 text-sm">
                  The display automatically updates when the count changes - this is the magic of reactive programming
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white/10 backdrop-blur rounded-xl p-6">
              <h4 className="text-xl font-bold text-orange-300 mb-4">🧠 What's Happening Behind the Scenes:</h4>
              <div className="text-left space-y-3 text-white/80">
                <div><strong>1. Setup:</strong> JavaScript creates a variable to store the count</div>
                <div><strong>2. Event Listeners:</strong> Each button gets a "click" listener</div>
                <div><strong>3. User Clicks:</strong> Browser detects the click and calls our function</div>
                <div><strong>4. Update State:</strong> Function changes the count variable</div>
                <div><strong>5. Update UI:</strong> JavaScript updates the display to show new count</div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-700 to-emerald-700'
    },

    {
      id: 'putting-it-together',
      title: 'Putting It All Together',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">The Big Picture</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-6xl mb-8 animate-float">🧩</div>
            <h3 className="text-3xl font-bold mb-12">How all these pieces work together</h3>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 mb-8">
              <h4 className="text-2xl font-bold text-blue-300 mb-6">A Real Example: Todo List App</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-green-500/20 rounded-lg p-4 border border-green-400/30">
                    <div className="font-bold text-green-300 mb-2">1. Variables Store Data</div>
                    <code className="text-sm">let todos = ["Buy milk", "Walk dog"];</code>
                  </div>
                  
                  <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-400/30">
                    <div className="font-bold text-blue-300 mb-2">2. Functions Process Data</div>
                    <code className="text-sm">const addTodo = (text) =&gt; todos.push(text);</code>
                  </div>
                  
                  <div className="bg-purple-500/20 rounded-lg p-4 border border-purple-400/30">
                    <div className="font-bold text-purple-300 mb-2">3. Arrays Hold Lists</div>
                    <code className="text-sm">todos.map(todo =&gt; \`&lt;li&gt;\$&#123;todo&#125;&lt;/li&gt;\`)</code>
                  </div>
                  
                  <div className="bg-orange-500/20 rounded-lg p-4 border border-orange-400/30">
                    <div className="font-bold text-orange-300 mb-2">4. DOM Shows Results</div>
                    <code className="text-sm">listElement.innerHTML = htmlString;</code>
                  </div>
                  
                  <div className="bg-red-500/20 rounded-lg p-4 border border-red-400/30">
                    <div className="font-bold text-red-300 mb-2">5. Events Make It Interactive</div>
                    <code className="text-sm">button.addEventListener('click', addTodo);</code>
                  </div>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6">
                  <h5 className="font-bold mb-4 text-yellow-300">The Flow:</h5>
                  <div className="space-y-3 text-left text-sm text-white/80">
                    <div>📝 User types "Learn JavaScript" in input</div>
                    <div>👆 User clicks "Add Todo" button</div>
                    <div>⚡ Click event triggers addTodo function</div>
                    <div>📦 Function adds text to todos array</div>
                    <div>🔄 Function updates DOM to show new list</div>
                    <div>🎉 User sees "Learn JavaScript" appear!</div>
                  </div>
                  
                  <div className="mt-6 bg-green-500/20 rounded p-3">
                    <div className="text-green-300 font-semibold">✨ Result:</div>
                    <div className="text-white/80 text-sm">A fully interactive web application!</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-3xl mb-3">🌟</div>
                <div className="font-bold text-lg mb-2">You Now Know:</div>
                <div className="text-white/70 text-sm space-y-1">
                  <div>• How to store data</div>
                  <div>• How to process data</div>
                  <div>• How to display data</div>
                  <div>• How to make it interactive</div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-3xl mb-3">🚀</div>
                <div className="font-bold text-lg mb-2">You Can Build:</div>
                <div className="text-white/70 text-sm space-y-1">
                  <div>• Todo lists</div>
                  <div>• Calculators</div>
                  <div>• Form validators</div>
                  <div>• Interactive galleries</div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-3xl mb-3">🎯</div>
                <div className="font-bold text-lg mb-2">Next Step:</div>
                <div className="text-white/70 text-sm space-y-1">
                  <div>• React makes this easier</div>
                  <div>• Same concepts</div>
                  <div>• Better tools</div>
                  <div>• More powerful</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-emerald-700 to-teal-700'
    },

    {
      id: 'wrap-up',
      title: 'You\'re Ready!',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-6xl font-extrabold mb-8 animate-float">You Did It! 🎉</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-5xl mb-8 animate-float" style={{animationDelay: '0.5s'}}>🌟</div>
            <h3 className="text-3xl font-bold mb-12">You now understand the fundamentals of interactive web development!</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-6 border-2 border-blue-400">
                <div className="text-5xl mb-4 animate-float">🌳</div>
                <div className="font-bold text-xl mb-2">DOM</div>
                <div className="text-white/70">Find, change, and control any element on your webpage</div>
              </div>
              <div className="bg-green-500/20 backdrop-blur rounded-xl p-6 border-2 border-green-400">
                <div className="text-5xl mb-4 animate-float" style={{animationDelay: '0.2s'}}>📦</div>
                <div className="font-bold text-xl mb-2">Variables</div>
                <div className="text-white/70">Store and manage data with const and let</div>
              </div>
              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-6 border-2 border-purple-400">
                <div className="text-5xl mb-4 animate-float" style={{animationDelay: '0.4s'}}>🔧</div>
                <div className="font-bold text-xl mb-2">Functions</div>
                <div className="text-white/70">Create reusable code machines that process data</div>
              </div>
              <div className="bg-yellow-500/20 backdrop-blur rounded-xl p-6 border-2 border-yellow-400">
                <div className="text-5xl mb-4 animate-float" style={{animationDelay: '0.6s'}}>⚡</div>
                <div className="font-bold text-xl mb-2">Events</div>
                <div className="text-white/70">Make websites respond to user interactions</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-8 border-2 border-green-400 mb-8">
              <h4 className="text-3xl font-bold mb-4 text-green-300">🎯 You can now build interactive websites!</h4>
              <p className="text-xl text-white/90 mb-4">
                Every click, every form, every dynamic update on the web uses these exact concepts.
              </p>
              <p className="text-lg text-white/80">
                You've learned the universal language of web interactivity. These skills work everywhere!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h5 className="text-xl font-bold text-orange-300 mb-4">🔥 What You Can Build Now:</h5>
                <div className="text-left space-y-2 text-white/80">
                  <div>✅ Interactive forms with validation</div>
                  <div>✅ Dynamic lists and galleries</div>
                  <div>✅ Calculators and converters</div>
                  <div>✅ Simple games and quizzes</div>
                  <div>✅ Real-time search and filters</div>
                  <div>✅ Interactive dashboards</div>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h5 className="text-xl font-bold text-blue-300 mb-4">🚀 What's Next:</h5>
                <div className="text-left space-y-2 text-white/80">
                  <div>📚 <strong>React:</strong> Same concepts, better tools</div>
                  <div>🎨 <strong>Advanced CSS:</strong> Beautiful designs</div>
                  <div>🌐 <strong>APIs:</strong> Connect to real data</div>
                  <div>🗄️ <strong>Databases:</strong> Store user information</div>
                  <div>🚀 <strong>Deployment:</strong> Share with the world</div>
                </div>
              </div>
            </div>
            
            <div className="text-2xl space-y-4">
              <p><strong className="text-green-300">No homework tonight! 🎉</strong></p>
              <p>Next class: <strong className="text-blue-300">React</strong> — same ideas, superpowers included</p>
              <div className="text-lg text-white/80 mt-6">
                Take a moment to appreciate what you've learned. These fundamentals power every modern website!
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-teal-700 to-cyan-700'
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

export default Class2Slides; 