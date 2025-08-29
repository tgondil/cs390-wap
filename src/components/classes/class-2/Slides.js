import React, { useEffect, useState, useMemo } from 'react';
import cssDinerImage from './16.png';

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

// Interactive DOM Change Demo Component
const InteractiveDOMDemo = () => {
  const [backgroundColor, setBackgroundColor] = useState('#3B82F6'); // blue-500
  const [textContent, setTextContent] = useState('Hello World!');
  const [isVisible, setIsVisible] = useState(true);
  const [fontSize, setFontSize] = useState(24);
  const [highlightedElement, setHighlightedElement] = useState(null);
  const [currentAction, setCurrentAction] = useState(null);

  const showAction = (action, element) => {
    setCurrentAction(action);
    setHighlightedElement(element);
    setTimeout(() => {
      setCurrentAction(null);
      setHighlightedElement(null);
    }, 3000);
  };

  const changeBackgroundColor = () => {
    showAction('Finding container element...', 'container');
    setTimeout(() => {
      const colors = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6'];
      const currentIndex = colors.indexOf(backgroundColor);
      const nextIndex = (currentIndex + 1) % colors.length;
      setBackgroundColor(colors[nextIndex]);
      setCurrentAction('✅ Changed background color!');
    }, 1500);
  };

  const changeText = () => {
    showAction('Finding text element...', 'text');
    setTimeout(() => {
      const texts = ['Hello World!', 'JavaScript is Fun!', 'DOM is Powerful!', 'You Did It!', 'Amazing Work!'];
      const currentIndex = texts.indexOf(textContent);
      const nextIndex = (currentIndex + 1) % texts.length;
      setTextContent(texts[nextIndex]);
      setCurrentAction('✅ Changed text content!');
    }, 1500);
  };

  const toggleVisibility = () => {
    showAction('Finding text element...', 'text');
    setTimeout(() => {
      setIsVisible(!isVisible);
      setCurrentAction(`✅ ${isVisible ? 'Hidden' : 'Showed'} element!`);
    }, 1500);
  };

  const changeFontSize = () => {
    showAction('Finding text element...', 'text');
    setTimeout(() => {
      setFontSize(prevSize => prevSize === 24 ? 36 : prevSize === 36 ? 48 : 24);
      setCurrentAction('✅ Changed font size!');
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: HTML Structure */}
        <div className="bg-gray-900/80 rounded-xl p-6 border border-gray-600">
          <h3 className="text-xl font-bold text-white mb-4 text-center">📄 HTML Structure</h3>
          <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm">
            <div className="text-blue-300 mb-2">&lt;!-- Simple webpage HTML --&gt;</div>
            <div className="text-white">
              <div className={`transition-all duration-500 ${highlightedElement === 'container' ? 'bg-yellow-500/30 ring-2 ring-yellow-400' : ''} rounded px-1`}>
                <span className="text-purple-300">&lt;div</span> <span className="text-green-300">class=</span><span className="text-yellow-300">"container"</span><span className="text-purple-300">&gt;</span>
              </div>
              <div className="ml-4">
                <div className={`transition-all duration-500 ${highlightedElement === 'text' ? 'bg-yellow-500/30 ring-2 ring-yellow-400' : ''} rounded px-1`}>
                  <span className="text-purple-300">&lt;h1</span> <span className="text-green-300">class=</span><span className="text-yellow-300">"message"</span><span className="text-purple-300">&gt;</span>
                </div>
                <div className="ml-4 text-white/80">
                  {textContent}
                </div>
                <div className="text-purple-300">&lt;/h1&gt;</div>
              </div>
              <div className="text-purple-300">&lt;/div&gt;</div>
            </div>
          </div>
          
          {currentAction && (
            <div className="mt-4 bg-yellow-500/20 rounded-lg p-3 border border-yellow-400/30">
              <div className="text-yellow-300 font-bold text-sm">🔍 JavaScript Action:</div>
              <div className="text-white/90 text-sm">{currentAction}</div>
            </div>
          )}
        </div>

        {/* Center: Interactive Webpage */}
        <div className="bg-white/10 backdrop-blur rounded-xl p-6">
          <h3 className="text-xl font-bold text-white mb-4 text-center">🌐 Live Webpage</h3>
          <div 
            className={`bg-white rounded-lg p-8 min-h-[250px] flex items-center justify-center transition-all duration-500 ${highlightedElement === 'container' ? 'ring-4 ring-yellow-400 ring-opacity-70' : ''}`}
            style={{ backgroundColor }}
          >
            {isVisible && (
              <div 
                className={`text-white font-bold text-center transition-all duration-300 ${highlightedElement === 'text' ? 'ring-4 ring-yellow-400 ring-opacity-70 rounded-lg p-2' : ''}`}
                style={{ fontSize: `${fontSize}px`, textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
              >
                {textContent}
              </div>
            )}
          </div>
          <div className="mt-4 text-center text-white/70 text-sm">
            ↑ Elements highlight when JavaScript finds them!
          </div>
        </div>

        {/* Right: Control Buttons */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white mb-4 text-center">🎮 JavaScript Controls</h3>
          
          <div className="bg-blue-500/20 rounded-xl p-4 border-2 border-blue-400">
            <h4 className="text-lg font-bold text-blue-300 mb-3">Change Background</h4>
            <button
              onClick={changeBackgroundColor}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-bold w-full transition-all hover:scale-105"
            >
              🎨 Change Color
            </button>
            <div className="text-white/70 text-xs mt-2 font-mono">
              1. document.querySelector('.container')<br/>
              2. element.style.backgroundColor = 'red'
            </div>
          </div>

          <div className="bg-green-500/20 rounded-xl p-4 border-2 border-green-400">
            <h4 className="text-lg font-bold text-green-300 mb-3">Change Text</h4>
            <button
              onClick={changeText}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-bold w-full transition-all hover:scale-105"
            >
              ✏️ Change Text
            </button>
            <div className="text-white/70 text-xs mt-2 font-mono">
              1. document.querySelector('.message')<br/>
              2. element.textContent = 'New text!'
            </div>
          </div>

          <div className="bg-purple-500/20 rounded-xl p-4 border-2 border-purple-400">
            <h4 className="text-lg font-bold text-purple-300 mb-3">Toggle Visibility</h4>
            <button
              onClick={toggleVisibility}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-3 rounded-lg font-bold w-full transition-all hover:scale-105"
            >
              👁️ {isVisible ? 'Hide' : 'Show'}
            </button>
            <div className="text-white/70 text-xs mt-2 font-mono">
              1. document.querySelector('.message')<br/>
              2. element.style.display = 'none'
            </div>
          </div>

          <div className="bg-orange-500/20 rounded-xl p-4 border-2 border-orange-400">
            <h4 className="text-lg font-bold text-orange-300 mb-3">Change Size</h4>
            <button
              onClick={changeFontSize}
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded-lg font-bold w-full transition-all hover:scale-105"
            >
              📏 Resize ({fontSize}px)
            </button>
            <div className="text-white/70 text-xs mt-2 font-mono">
              1. document.querySelector('.message')<br/>
              2. element.style.fontSize = '36px'
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
        <h4 className="text-xl font-bold text-yellow-300 mb-3 text-center">🔍 The Find → Change Process</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/5 rounded-lg p-4">
            <div className="text-3xl mb-2">1️⃣ Find the Element</div>
            <div className="font-bold mb-2">JavaScript searches the HTML</div>
            <div className="text-white/70 text-sm font-mono">document.querySelector('.container')</div>
            <div className="text-white/70 text-sm mt-2">Like using Ctrl+F to find text on a page!</div>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <div className="text-3xl mb-2">2️⃣ Change the Element</div>
            <div className="font-bold mb-2">Modify properties directly</div>
            <div className="text-white/70 text-sm font-mono">element.style.color = 'red'</div>
            <div className="text-white/70 text-sm mt-2">Like editing text in a document!</div>
          </div>
        </div>
      </div>
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
      <h4 className="text-2xl font-bold text-purple-300 mb-6">🤯 JavaScript for the Haters</h4>
      
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

// Interactive Loops Demo
const LoopsDemo = () => {
  const [activeLoop, setActiveLoop] = useState('for');
  const [forLimit, setForLimit] = useState(5);
  const [whileStart, setWhileStart] = useState(1);
  const [forOutput, setForOutput] = useState([]);
  const [whileOutput, setWhileOutput] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  const runForLoop = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setForOutput([]);
    
    for (let i = 0; i < forLimit; i++) {
      await new Promise(resolve => setTimeout(resolve, 500));
      setForOutput(prev => [...prev, { iteration: i, value: `Iteration ${i + 1}` }]);
    }
    setIsRunning(false);
  };

  const runWhileLoop = async () => {
    if (isRunning) return;
    setIsRunning(true);
    setWhileOutput([]);
    
    let counter = whileStart;
    let iterations = 0;
    while (counter <= 10 && iterations < 8) { // Safety limit
      await new Promise(resolve => setTimeout(resolve, 500));
      const currentCounter = counter; // Capture current value
      setWhileOutput(prev => [...prev, { counter: currentCounter, value: `Counter: ${currentCounter}` }]);
      counter++;
      iterations++;
    }
    setIsRunning(false);
  };

  const loopExamples = {
    for: {
      title: 'For Loop',
      description: 'Best for when you know how many times to repeat',
      syntax: `for (let i = 0; i < ${forLimit}; i++) {
  console.log("Iteration " + (i + 1));
}`,
      realWorld: 'Display 20 products, process 100 photos, validate 5 form fields',
      icon: '🔢'
    },
    while: {
      title: 'While Loop',
      description: 'Best for when you repeat until a condition is met',
      syntax: `let counter = ${whileStart};
while (counter <= 10) {
  console.log("Counter: " + counter);
  counter++;
}`,
      realWorld: 'Keep loading posts until screen is full, retry failed requests',
      icon: '🔄'
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-white/10 rounded-xl p-2 flex">
          <button
            onClick={() => setActiveLoop('for')}
            className={`px-6 py-3 rounded-lg font-bold transition-all ${
              activeLoop === 'for'
                ? 'bg-cyan-600 text-white'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            🔢 For Loop
          </button>
          <button
            onClick={() => setActiveLoop('while')}
            className={`px-6 py-3 rounded-lg font-bold transition-all ${
              activeLoop === 'while'
                ? 'bg-blue-600 text-white'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            🔄 While Loop
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Loop Explanation & Controls */}
        <div className="space-y-6">
          <div className="bg-white/10 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="text-4xl mr-4">{loopExamples[activeLoop].icon}</div>
              <div>
                <h3 className="text-2xl font-bold text-white">{loopExamples[activeLoop].title}</h3>
                <p className="text-white/70">{loopExamples[activeLoop].description}</p>
              </div>
            </div>
            
            {/* Syntax Display */}
            <div className="bg-gray-900 rounded-lg p-4 mb-4">
              <div className="text-gray-400 text-xs mb-2">SYNTAX:</div>
              <pre className="font-mono text-yellow-300 text-sm whitespace-pre-wrap">
                {loopExamples[activeLoop].syntax}
              </pre>
            </div>

            {/* Real World Examples */}
            <div className="bg-green-500/20 rounded-lg p-4 mb-4">
              <div className="text-green-300 font-bold mb-2">🌍 Real World Use:</div>
              <div className="text-white/80 text-sm">{loopExamples[activeLoop].realWorld}</div>
            </div>

            {/* Controls */}
            {activeLoop === 'for' && (
              <div className="bg-cyan-500/20 rounded-lg p-4 mb-4">
                <div className="text-cyan-300 font-bold mb-3">🎛️ Configure For Loop:</div>
                <div className="flex items-center gap-4">
                  <label className="text-white/80">Repeat:</label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={forLimit}
                    onChange={(e) => setForLimit(parseInt(e.target.value))}
                    className="flex-1"
                    disabled={isRunning}
                  />
                  <span className="text-white font-bold w-8">{forLimit}</span>
                  <span className="text-white/60">times</span>
                </div>
              </div>
            )}

            {activeLoop === 'while' && (
              <div className="bg-blue-500/20 rounded-lg p-4 mb-4">
                <div className="text-blue-300 font-bold mb-3">🎛️ Configure While Loop:</div>
                <div className="flex items-center gap-4">
                  <label className="text-white/80">Start from:</label>
                  <input
                    type="range"
                    min="1"
                    max="8"
                    value={whileStart}
                    onChange={(e) => setWhileStart(parseInt(e.target.value))}
                    className="flex-1"
                    disabled={isRunning}
                  />
                  <span className="text-white font-bold w-8">{whileStart}</span>
                  <span className="text-white/60">to 10</span>
                </div>
              </div>
            )}

            {/* Run Button */}
            <button
              onClick={activeLoop === 'for' ? runForLoop : runWhileLoop}
              disabled={isRunning}
              className={`w-full py-4 rounded-lg font-bold text-white transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                activeLoop === 'for' 
                  ? 'bg-cyan-600 hover:bg-cyan-700' 
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isRunning ? '🔄 Running Loop...' : `▶️ Run ${loopExamples[activeLoop].title}`}
            </button>
          </div>
        </div>

        {/* Right: Loop Execution Visualization */}
        <div className="space-y-6">
          <div className="bg-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 text-center">
              📺 Loop Execution
            </h3>

            {/* Output Display */}
            <div className="bg-gray-900 rounded-lg p-4 mb-4 min-h-[300px]">
              <div className="text-gray-400 text-xs mb-2">CONSOLE OUTPUT:</div>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {activeLoop === 'for' && forOutput.map((item, index) => (
                  <div
                    key={index}
                    className="text-green-300 font-mono text-sm p-2 bg-gray-800 rounded animate-fade-in"
                  >
                    &gt; {item.value}
                  </div>
                ))}
                {activeLoop === 'while' && whileOutput.map((item, index) => (
                  <div
                    key={index}
                    className="text-green-300 font-mono text-sm p-2 bg-gray-800 rounded animate-fade-in"
                  >
                    &gt; {item.value}
                  </div>
                ))}
                {(activeLoop === 'for' ? forOutput : whileOutput).length === 0 && !isRunning && (
                  <div className="text-gray-500 text-center py-8">
                    Click "Run {loopExamples[activeLoop].title}" to see output...
                  </div>
                )}
                {isRunning && (
                  <div className="text-yellow-300 text-center py-4 animate-pulse">
                    Loop is running... ⏳
                  </div>
                )}
              </div>
            </div>

            {/* Loop Status */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-white/60 text-xs">ITERATIONS</div>
                <div className="text-white font-bold text-lg">
                  {activeLoop === 'for' ? forOutput.length : whileOutput.length}
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 text-center">
                <div className="text-white/60 text-xs">STATUS</div>
                <div className={`font-bold text-lg ${isRunning ? 'text-yellow-300' : 'text-green-300'}`}>
                  {isRunning ? 'Running' : 'Ready'}
                </div>
              </div>
            </div>
          </div>

          {/* Loop Comparison */}
          <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
            <h4 className="text-lg font-bold text-yellow-300 mb-3">🤔 When to Use Which?</h4>
            <div className="space-y-3 text-sm">
              <div className="bg-cyan-500/20 rounded-lg p-3">
                <strong className="text-cyan-300">For Loop:</strong>
                <div className="text-white/80 mt-1">When you know exactly how many times to repeat</div>
              </div>
              <div className="bg-blue-500/20 rounded-lg p-3">
                <strong className="text-blue-300">While Loop:</strong>
                <div className="text-white/80 mt-1">When you repeat until a condition becomes false</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Interactive Array Creation and Access Demo with Syntax Focus
const ArrayCreateAccessDemo = () => {
  const [currentArray, setCurrentArray] = useState(['🍎', '🍌', '🍊']);
  const [activeExample, setActiveExample] = useState('creation');
  const [selectedIndex, setSelectedIndex] = useState(0);

  const syntaxExamples = {
    creation: [
      {
        title: 'Empty Array',
        syntax: 'const arr = [];',
        result: '[]',
        description: 'Creates an empty array with no elements'
      },
      {
        title: 'Array with Numbers',
        syntax: 'const scores = [85, 92, 78, 94];',
        result: '[85, 92, 78, 94]',
        description: 'Creates an array containing number values'
      },
      {
        title: 'Array with Strings',
        syntax: 'const names = ["Alice", "Bob", "Charlie"];',
        result: '["Alice", "Bob", "Charlie"]',
        description: 'Creates an array containing string values'
      },
      {
        title: 'Mixed Data Types',
        syntax: 'const mixed = ["Hello", 42, true, null];',
        result: '["Hello", 42, true, null]',
        description: 'Arrays can contain different data types'
      }
    ],
    access: [
      {
        title: 'Access First Element',
        syntax: 'fruits[0]',
        result: currentArray.length > 0 ? `"${currentArray[0]}"` : 'undefined',
        description: 'Gets the element at index 0 (first element)'
      },
      {
        title: 'Access by Index',
        syntax: `fruits[${selectedIndex}]`,
        result: currentArray[selectedIndex] ? `"${currentArray[selectedIndex]}"` : 'undefined',
        description: `Gets the element at index ${selectedIndex}`
      },
      {
        title: 'Get Array Length',
        syntax: 'fruits.length',
        result: currentArray.length.toString(),
        description: 'Returns the number of elements in the array'
      },
      {
        title: 'Access Last Element',
        syntax: 'fruits[fruits.length - 1]',
        result: currentArray.length > 0 ? `"${currentArray[currentArray.length - 1]}"` : 'undefined',
        description: 'Gets the last element using length property'
      }
    ]
  };

  const tryExample = (example, type) => {
    if (type === 'creation') {
      if (example.title === 'Empty Array') {
        setCurrentArray([]);
      } else if (example.title === 'Array with Numbers') {
        setCurrentArray([85, 92, 78, 94]);
      } else if (example.title === 'Array with Strings') {
        setCurrentArray(['Alice', 'Bob', 'Charlie']);
      } else if (example.title === 'Mixed Data Types') {
        setCurrentArray(['Hello', 42, true, null]);
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="bg-white/10 rounded-xl p-2 flex">
          <button
            onClick={() => setActiveExample('creation')}
            className={`px-6 py-3 rounded-lg font-bold transition-all ${
              activeExample === 'creation'
                ? 'bg-blue-600 text-white'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            🎨 Creating Arrays
          </button>
          <button
            onClick={() => setActiveExample('access')}
            className={`px-6 py-3 rounded-lg font-bold transition-all ${
              activeExample === 'access'
                ? 'bg-purple-600 text-white'
                : 'text-white/70 hover:text-white hover:bg-white/10'
            }`}
          >
            🔍 Accessing Elements
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Syntax Examples */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-center text-white mb-6">
            {activeExample === 'creation' ? '🎨 Array Creation Syntax' : '🔍 Array Access Syntax'}
          </h3>
          
          {syntaxExamples[activeExample].map((example, index) => (
            <div
              key={index}
              className={`bg-white/10 rounded-xl p-6 border-2 transition-all cursor-pointer hover:scale-105 ${
                activeExample === 'creation' 
                  ? 'border-blue-400/50 hover:border-blue-400' 
                  : 'border-purple-400/50 hover:border-purple-400'
              }`}
              onClick={() => activeExample === 'creation' && tryExample(example, 'creation')}
            >
              <h4 className="text-lg font-bold text-white mb-3">{example.title}</h4>
              
              {/* Syntax Code */}
              <div className="bg-gray-900 rounded-lg p-4 mb-3">
                <div className="text-gray-400 text-xs mb-1">SYNTAX:</div>
                <div className="font-mono text-yellow-300 text-lg">{example.syntax}</div>
              </div>

              {/* Result */}
              <div className="bg-gray-800 rounded-lg p-4 mb-3">
                <div className="text-gray-400 text-xs mb-1">RESULT:</div>
                <div className="font-mono text-green-300 text-lg">{example.result}</div>
              </div>

              {/* Description */}
              <div className="text-white/80 text-sm">
                {example.description}
              </div>

              {activeExample === 'creation' && (
                <div className="mt-3 text-center">
                  <span className="text-blue-300 text-sm">👆 Click to try this example</span>
                </div>
              )}
            </div>
          ))}

          {/* Index Selector for Access Examples */}
          {activeExample === 'access' && (
            <div className="bg-purple-500/20 rounded-xl p-6 border-2 border-purple-400">
              <h4 className="text-lg font-bold text-purple-300 mb-3">Try Different Indices:</h4>
              <div className="grid grid-cols-5 gap-2">
                {[0, 1, 2, 3, 4].map(index => (
                  <button
                    key={index}
                    onClick={() => setSelectedIndex(index)}
                    className={`px-3 py-2 rounded-lg font-bold transition-all hover:scale-105 ${
                      selectedIndex === index 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-purple-800 text-purple-200 hover:bg-purple-700'
                    }`}
                  >
                    [{index}]
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: Live Array Visualization */}
        <div className="space-y-6">
          {/* Current Array Display */}
          <div className="bg-white/10 backdrop-blur rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 text-center">📚 Live Array</h3>
            
            {/* Array Code Display */}
            <div className="bg-gray-900 rounded-lg p-4 mb-4">
              <div className="text-gray-400 text-xs mb-1">CURRENT ARRAY:</div>
              <div className="font-mono text-green-300 text-lg">
                const fruits = [
                {currentArray.map((item, i) => (
                  <span key={i}>
                    <span className={`${selectedIndex === i && activeExample === 'access' ? 'bg-yellow-500/50 px-1 rounded' : ''}`}>
                      {typeof item === 'string' ? `"${item}"` : String(item)}
                    </span>
                    {i < currentArray.length - 1 ? ', ' : ''}
                  </span>
                ))}
                ];
              </div>
            </div>
            
            {/* Visual Grid */}
            <div className="grid grid-cols-4 gap-2 mb-4">
              {currentArray.map((item, i) => (
                <div
                  key={i}
                  className={`bg-white/20 rounded-lg p-4 text-center transition-all duration-300 cursor-pointer ${
                    selectedIndex === i && activeExample === 'access' 
                      ? 'ring-4 ring-yellow-400 scale-110' 
                      : 'hover:bg-white/30'
                  }`}
                  onClick={() => activeExample === 'access' && setSelectedIndex(i)}
                >
                  <div className="text-2xl mb-1">{item}</div>
                  <div className="text-white/60 text-xs">Index {i}</div>
                </div>
              ))}
              {currentArray.length === 0 && (
                <div className="col-span-4 text-center text-white/50 py-8">
                  Array is empty - try the creation examples!
                </div>
              )}
            </div>

            {/* Array Info */}
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-white/60 text-xs">LENGTH</div>
                  <div className="text-white font-bold">{currentArray.length}</div>
                </div>
                <div>
                  <div className="text-white/60 text-xs">FIRST ELEMENT</div>
                  <div className="text-white font-bold">
                    {currentArray.length > 0 ? currentArray[0] : 'undefined'}
                  </div>
                </div>
                <div>
                  <div className="text-white/60 text-xs">LAST ELEMENT</div>
                  <div className="text-white font-bold">
                    {currentArray.length > 0 ? currentArray[currentArray.length - 1] : 'undefined'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
            <h4 className="text-lg font-bold text-yellow-300 mb-3">💡 Quick Tips</h4>
            <div className="space-y-2 text-sm text-white/90">
              <div>• Arrays use square brackets: <code className="bg-gray-800 px-2 py-1 rounded">[]</code></div>
              <div>• Elements separated by commas: <code className="bg-gray-800 px-2 py-1 rounded">[1, 2, 3]</code></div>
              <div>• First element is at index 0: <code className="bg-gray-800 px-2 py-1 rounded">arr[0]</code></div>
              <div>• Get length with: <code className="bg-gray-800 px-2 py-1 rounded">arr.length</code></div>
              <div>• Last element: <code className="bg-gray-800 px-2 py-1 rounded">arr[arr.length - 1]</code></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Enhanced array methods with step-by-step visualization
const ArrayMethodsDemo = () => {
  const [selectedMethod, setSelectedMethod] = useState('map');
  const [step, setStep] = useState(0);
  const originalArray = [1, 2, 3, 4, 5];

  const methods = useMemo(() => ({
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
  }), []);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep(prev => (prev + 1) % (methods[selectedMethod].steps.length + 1));
    }, 1500);
    return () => clearInterval(timer);
  }, [selectedMethod, methods]);

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
      id: 'discuss-movies-shows',
      title: 'Discuss!',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12">Discuss!</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <div className="text-left space-y-6 text-xl leading-relaxed">
                <div className="text-white font-semibold">
                  What's a comfort movie/show you turn to when you don't know what else to watch?
                </div>
                
                <div className="text-white font-semibold">
                  Is there a line or scene from a show/movie you quote all the time?
                </div>
                
                <div className="text-white font-semibold">
                  Which character do you see the most of yourself in? Why?
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-pink-600'
    },

    {
      id: 'discuss-books',
      title: 'Discuss!',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12">Discuss!</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <div className="text-left space-y-6 text-xl leading-relaxed">
                <div className="text-white font-semibold">
                  Is there a book you've re-read multiple times?
                </div>
                
                <div className="text-white font-semibold">
                  What's the first book that really hooked you into reading?
                </div>
                
                <div className="text-white font-semibold">
                  If you could step inside one fictional world from a book, which would it be?
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-pink-600 to-red-600'
    },

    {
      id: 'css-diner-level-16',
      title: 'CSS Diner Challenge: Level 16',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="max-w-7xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">Select the apple and the pickle on the plates</h2>
              <div className="text-lg text-yellow-300 font-mono">plate &gt; :only-child</div>
            </div>

            {/* Main Visual - CSS Diner Image */}
            <div className="mb-8 flex justify-center">
              <div className="bg-amber-800/20 rounded-3xl p-8 border-2 border-amber-700/50">
                <img 
                  src={cssDinerImage} 
                  alt="CSS Diner Level 16 - Select elements using plate > :only-child"
                  className="max-w-full h-auto rounded-2xl shadow-2xl"
                  style={{ maxHeight: '400px', width: 'auto' }}
                />
                <div className="text-center mt-4">
                  <div className="text-yellow-300 text-lg font-bold mb-2">✨ CSS Diner Level 16</div>
                  <div className="text-sm text-amber-200">The apple and pickle on plates should be glowing</div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Code and Explanation */}
            <div className="grid grid-cols-2 gap-8">
              {/* Left: Selector Breakdown */}
              <div className="space-y-4">
                                 <div className="bg-blue-900/40 rounded-xl p-6 border-2 border-blue-500/50">
                   <h3 className="text-xl font-bold text-blue-300 mb-4">How it works</h3>
                   <div className="space-y-3">
                     <div className="bg-gray-900 rounded-lg p-4">
                       <div className="text-lg font-mono">
                         <span className="text-yellow-300">plate</span>
                         <span className="text-white"> &gt; </span>
                         <span className="text-green-300">:only-child</span>
                       </div>
                     </div>
                     <div className="text-sm space-y-2">
                       <div><span className="text-yellow-300">plate &gt;</span> = Direct children of plates only</div>
                       <div><span className="text-green-300">:only-child</span> = Element is the only child in its container</div>
                       <div className="text-blue-200">Combined: Elements that are the only child inside a plate</div>
                     </div>
                     
                     <div className="bg-purple-900/30 rounded-lg p-3 mt-4">
                       <div className="text-purple-300 font-semibold text-xs mb-2">💡 Spaces are just for readability:</div>
                       <div className="font-mono text-xs space-y-1">
                         <div className="text-white">plate &gt; :only-child</div>
                         <div className="text-white">plate&gt;:only-child</div>
                         <div className="text-white">plate &gt;:only-child</div>
                         <div className="text-gray-400 text-xs mt-2">All three work exactly the same!</div>
                       </div>
                     </div>
                   </div>
                 </div>
              </div>

              {/* Right: HTML Structure */}
              <div className="bg-gray-900/80 rounded-xl border border-gray-600 overflow-hidden">
                <div className="bg-gray-800 px-4 py-2 text-sm text-gray-300 border-b border-gray-600">
                  HTML Structure
                </div>
                <div className="p-4">
                  <pre className="text-green-300 font-mono text-sm leading-relaxed">
{`<div class="table">
  <plate>
    <apple />          ← Selected ✓
  </plate>
  <plate>
    <pickle />         ← Selected ✓
  </plate>
  <bento>
    <pickle />         ← Excluded (not plate)
  </bento>
  <plate>
    <orange class="small" />
    <orange />         ← Excluded (2 children)
  </plate>
  <pickle class="small" />  ← Excluded (no plate)
</div>`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-amber-700 to-orange-700'
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
      id: 'what-is-javascript',
      title: 'What is JavaScript?',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">What is JavaScript?</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">⚡</div>
            <h3 className="text-4xl font-bold mb-12">The language that brings websites to life</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <div className="text-5xl mb-4">🏗️</div>
                <h4 className="text-xl font-bold text-blue-300 mb-3">HTML</h4>
                <p className="text-white/80">Structure & Content</p>
                <p className="text-white/60 text-sm mt-2">The skeleton of your webpage</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <div className="text-5xl mb-4">🎨</div>
                <h4 className="text-xl font-bold text-green-300 mb-3">CSS</h4>
                <p className="text-white/80">Style & Layout</p>
                <p className="text-white/60 text-sm mt-2">The makeup and clothing</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 ring-2 ring-yellow-400">
                <div className="text-5xl mb-4">⚡</div>
                <h4 className="text-xl font-bold text-yellow-300 mb-3">JavaScript</h4>
                <p className="text-white/80">Behavior & Interaction</p>
                <p className="text-white/60 text-sm mt-2">The brain and nervous system</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-8 border-2 border-yellow-400 mb-8">
              <h4 className="text-2xl font-bold text-yellow-300 mb-4">🎯 JavaScript Powers Everything Interactive</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
                <div className="space-y-2">
                  <div className="text-lg font-semibold text-yellow-200">🖱️ Click Events</div>
                  <div className="text-white/80 text-sm">Button clicks, menu toggles</div>
                </div>
                <div className="space-y-2">
                  <div className="text-lg font-semibold text-yellow-200">📝 Form Handling</div>
                  <div className="text-white/80 text-sm">Login forms, contact forms</div>
                </div>
                <div className="space-y-2">
                  <div className="text-lg font-semibold text-yellow-200">🔄 Dynamic Updates</div>
                  <div className="text-white/80 text-sm">Live content changes</div>
                </div>
                <div className="space-y-2">
                  <div className="text-lg font-semibold text-yellow-200">🎮 User Interaction</div>
                  <div className="text-white/80 text-sm">Games, animations</div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/30">
              <h4 className="text-xl font-bold text-blue-300 mb-3">🤔 Think of it like this:</h4>
              <p className="text-white/90 text-lg leading-relaxed">
                If a website were a car, HTML would be the frame and body, CSS would be the paint and interior design, 
                and <strong className="text-yellow-300">JavaScript would be the engine, steering wheel, and all the controls</strong> 
                that make it actually drive and respond to you!
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-yellow-600 to-orange-600'
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
            
            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <h4 className="text-xl font-bold text-yellow-300 mb-3">⚠️ Important: Arrays start at 0!</h4>
              <p className="text-white/90">The first item is at index 0, not 1. This trips up many beginners!</p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-700 to-indigo-700'
    },

    {
      id: 'arrays-create-access',
      title: 'Creating & Accessing Arrays',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8 text-center">Creating & Accessing Arrays</h2>
          <div className="mb-6 text-center">
            <p className="text-xl text-white/80">Try creating arrays and accessing their elements!</p>
          </div>
          <ArrayCreateAccessDemo />
        </div>
      ),
      bgGradient: 'from-indigo-700 to-violet-700'
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
      bgGradient: 'from-indigo-700 to-violet-700'
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
      bgGradient: 'from-violet-700 to-purple-700'
    },

    {
      id: 'loops',
      title: 'Loops - Repeating Actions',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8 text-center">Loops</h2>
          <div className="text-center mb-8">
            <div className="text-6xl mb-4 animate-float">🔄</div>
            <p className="text-xl text-white/80">Repeat code multiple times efficiently</p>
          </div>
          <LoopsDemo />
        </div>
      ),
      bgGradient: 'from-cyan-700 to-blue-700'
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
                <div className="text-blue-300 mb-4">{`// Define the function`}</div>
                <div className="text-white mb-2">function <span className="text-yellow-300">sayHello</span>(<span className="text-green-300">name</span>) &#123;</div>
                <div className="text-white ml-4 mb-2">&nbsp;&nbsp;return "Hello, " + <span className="text-green-300">name</span> + "!";</div>
                <div className="text-white mb-4">&#125;</div>
                
                <div className="text-blue-300 mb-4">{`// Use the function`}</div>
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
      title: 'Real-World Function Example',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Real-World Example</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="text-6xl mb-8 animate-float">🛒</div>
            <h3 className="text-3xl font-bold mb-12">Shopping Cart Tax Calculator</h3>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 mb-8">
              <h4 className="text-2xl font-bold mb-6 text-green-300">Let's Build a Tax Calculator!</h4>
              
              <div className="bg-gray-900/80 rounded-xl p-6 font-mono text-lg mb-6">
                <div className="text-blue-300 mb-4">{`// Real function used in e-commerce sites`}</div>
                <div className="text-white mb-2">function <span className="text-yellow-300">calculateTax</span>(<span className="text-green-300">price, taxRate</span>) &#123;</div>
                <div className="text-white ml-4 mb-2">&nbsp;&nbsp;return <span className="text-green-300">price</span> * (<span className="text-green-300">taxRate</span> / 100);</div>
                <div className="text-white mb-4">&#125;</div>
                
                <div className="text-blue-300 mb-4">{`// How Amazon, Target, etc. use it`}</div>
                <div className="text-white mb-2">const cartTotal = 89.99;</div>
                <div className="text-white mb-2">const localTax = 8.25; {`// Your state tax rate`}</div>
                <div className="text-white mb-4">const taxAmount = <span className="text-yellow-300">calculateTax</span>(cartTotal, localTax);</div>
                <div className="text-white">const finalTotal = cartTotal + taxAmount;</div>
              </div>
              
              <div className="bg-green-900/50 rounded-xl p-6 border-2 border-green-400">
                <div className="text-green-300 font-bold text-xl mb-2">Result:</div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-white/70 text-sm">Subtotal</div>
                    <div className="font-mono text-xl text-white">$89.99</div>
                  </div>
                  <div>
                    <div className="text-white/70 text-sm">Tax (8.25%)</div>
                    <div className="font-mono text-xl text-green-300">$7.42</div>
                  </div>
                  <div>
                    <div className="text-white/70 text-sm">Total</div>
                    <div className="font-mono text-xl text-yellow-300">$97.41</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-6 border-2 border-blue-400">
                <div className="text-4xl mb-3 animate-float">📥</div>
                <h4 className="text-xl font-bold mb-3">Input</h4>
                <div className="text-white/80 text-sm mb-2">Price: $89.99</div>
                <div className="text-white/80 text-sm mb-2">Tax Rate: 8.25%</div>
                <div className="text-white/60 text-xs">What the customer owes</div>
              </div>
              
              <div className="bg-green-500/20 backdrop-blur rounded-xl p-6 border-2 border-green-400">
                <div className="text-4xl mb-3 animate-float" style={{animationDelay: '0.5s'}}>⚙️</div>
                <h4 className="text-xl font-bold mb-3">Process</h4>
                <div className="text-white/80 text-sm mb-2">89.99 × (8.25 ÷ 100)</div>
                <div className="text-white/80 text-sm mb-2">= 89.99 × 0.0825</div>
                <div className="text-white/60 text-xs">Math behind the scenes</div>
              </div>
              
              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-6 border-2 border-purple-400">
                <div className="text-4xl mb-3 animate-float" style={{animationDelay: '1s'}}>📤</div>
                <h4 className="text-xl font-bold mb-3">Output</h4>
                <div className="text-white/80 text-sm mb-2">Tax: $7.42</div>
                <div className="text-white/80 text-sm mb-2">Used in checkout</div>
                <div className="text-white/60 text-xs">Ready to display</div>
              </div>
            </div>

            <div className="mt-8 bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <h4 className="text-xl font-bold text-yellow-300 mb-3">🌟 Why This Function is Perfect:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white/80 text-sm">
                <div>• <strong>Reusable:</strong> Works for any price and tax rate</div>
                <div>• <strong>Clear:</strong> Name tells you exactly what it does</div>
                <div>• <strong>Simple:</strong> One job, does it well</div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-700 to-indigo-700'
    },

    {
      id: 'function-best-practices',
      title: 'Function Best Practices',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Function Best Practices</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">✅</div>
            <h3 className="text-3xl font-bold mb-12">Write functions like a pro!</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Descriptive Names */}
              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <div className="text-5xl mb-4">📝</div>
                <h4 className="text-2xl font-bold mb-4 text-green-300">Use Descriptive Names</h4>
                <div className="bg-green-900/50 rounded-lg p-4 font-mono text-sm mb-4">
                  <div className="text-green-300 mb-2">{`// ✅ Good - Clear purpose`}</div>
                  <div className="text-white">const calculateShippingCost = (weight) =&gt; &#123;</div>
                  <div className="text-white ml-4">return weight * 2.50;</div>
                  <div className="text-white">&#125;;</div>
                  <br/>
                  <div className="text-white">const validateEmailFormat = (email) =&gt; &#123;</div>
                  <div className="text-white ml-4">return email.includes("@");</div>
                  <div className="text-white">&#125;;</div>
                </div>
                <div className="text-white/80 text-sm">You can guess what these do without reading the code!</div>
              </div>

              {/* Keep Functions Small */}
              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <div className="text-5xl mb-4">🎯</div>
                <h4 className="text-2xl font-bold mb-4 text-green-300">Keep Functions Small</h4>
                <div className="bg-green-900/50 rounded-lg p-4 font-mono text-sm mb-4">
                  <div className="text-green-300 mb-2">{`// ✅ Good - One job each`}</div>
                  <div className="text-white">const formatPrice = (amount) =&gt; &#123;</div>
                  <div className="text-white ml-4">return "$" + amount.toFixed(2);</div>
                  <div className="text-white">&#125;;</div>
                  <br/>
                  <div className="text-white">const applyDiscount = (price, percent) =&gt; &#123;</div>
                  <div className="text-white ml-4">return price * (1 - percent / 100);</div>
                  <div className="text-white">&#125;;</div>
                </div>
                <div className="text-white/80 text-sm">Each function has one clear responsibility!</div>
              </div>

              {/* Always Return Something */}
              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <div className="text-5xl mb-4">↩️</div>
                <h4 className="text-2xl font-bold mb-4 text-green-300">Always Return Something</h4>
                <div className="bg-green-900/50 rounded-lg p-4 font-mono text-sm mb-4">
                  <div className="text-green-300 mb-2">{`// ✅ Good - Returns a value`}</div>
                  <div className="text-white">const getUserName = (user) =&gt; &#123;</div>
                  <div className="text-white ml-4">if (!user) &#123;</div>
                  <div className="text-white ml-8">return "Guest";</div>
                  <div className="text-white ml-4">&#125;</div>
                  <div className="text-white ml-4">return user.name;</div>
                  <div className="text-white">&#125;;</div>
                </div>
                <div className="text-white/80 text-sm">Always useful, never undefined!</div>
              </div>

              {/* Use const for Functions */}
              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <div className="text-5xl mb-4">🔒</div>
                <h4 className="text-2xl font-bold mb-4 text-green-300">Use const for Functions</h4>
                <div className="bg-green-900/50 rounded-lg p-4 font-mono text-sm mb-4">
                  <div className="text-green-300 mb-2">{`// ✅ Good - Can't be reassigned`}</div>
                  <div className="text-white">const calculateTotal = (items) =&gt; &#123;</div>
                  <div className="text-white ml-4">return items.reduce((sum, item) =&gt; &#123;</div>
                  <div className="text-white ml-8">return sum + item.price;</div>
                  <div className="text-white ml-4">&#125;, 0);</div>
                  <div className="text-white">&#125;;</div>
                </div>
                <div className="text-white/80 text-sm">Protects your functions from being accidentally changed!</div>
              </div>
            </div>

            <div className="mt-8 bg-blue-500/20 rounded-xl p-6 border border-blue-400/30">
              <h4 className="text-2xl font-bold text-blue-300 mb-4">🎉 Following These Rules Makes Your Code:</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">🔍</div>
                  <div className="font-bold">Easy to Read</div>
                  <div className="text-white/70 text-sm">Other developers understand it</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">🐛</div>
                  <div className="font-bold">Easy to Debug</div>
                  <div className="text-white/70 text-sm">Find problems quickly</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">🔄</div>
                  <div className="font-bold">Reusable</div>
                  <div className="text-white/70 text-sm">Use the same function everywhere</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="font-bold">Professional</div>
                  <div className="text-white/70 text-sm">Industry-standard quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-700 to-emerald-700'
    },

    {
      id: 'function-donts',
      title: 'Function Don\'ts',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Function Don'ts</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">❌</div>
            <h3 className="text-3xl font-bold mb-12">Common mistakes to avoid!</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Vague Names */}
              <div className="bg-red-500/20 backdrop-blur rounded-xl p-8 border-2 border-red-400">
                <div className="text-5xl mb-4">🤔</div>
                <h4 className="text-2xl font-bold mb-4 text-red-300">Don't Use Vague Names</h4>
                <div className="bg-red-900/50 rounded-lg p-4 font-mono text-sm mb-4">
                  <div className="text-red-300 mb-2">{`// ❌ Bad - What does this do?`}</div>
                  <div className="text-white">const doStuff = (x) =&gt; &#123;</div>
                  <div className="text-white ml-4">return x * 1.08;</div>
                  <div className="text-white">&#125;;</div>
                  <br/>
                  <div className="text-white">const process = (data) =&gt; &#123;</div>
                  <div className="text-white ml-4">{`// 50 lines of mystery code...`}</div>
                  <div className="text-white">&#125;;</div>
                </div>
                <div className="text-red-200 text-sm">You'll forget what these do in a week!</div>
              </div>

              {/* Functions That Do Too Much */}
              <div className="bg-red-500/20 backdrop-blur rounded-xl p-8 border-2 border-red-400">
                <div className="text-5xl mb-4">🌪️</div>
                <h4 className="text-2xl font-bold mb-4 text-red-300">Don't Make Mega-Functions</h4>
                <div className="bg-red-900/50 rounded-lg p-4 font-mono text-sm mb-4">
                  <div className="text-red-300 mb-2">{`// ❌ Bad - Does everything`}</div>
                  <div className="text-white">const handleCheckout = (cart) =&gt; &#123;</div>
                  <div className="text-white ml-4">{`// Calculate tax`}</div>
                  <div className="text-white ml-4">{`// Validate payment`}</div>
                  <div className="text-white ml-4">{`// Update inventory`}</div>
                  <div className="text-white ml-4">{`// Send email`}</div>
                  <div className="text-white ml-4">{`// Generate receipt`}</div>
                  <div className="text-white ml-4">{`// Update analytics`}</div>
                  <div className="text-white ml-4">{`// ... 100 more lines`}</div>
                  <div className="text-white">&#125;;</div>
                </div>
                <div className="text-red-200 text-sm">Impossible to debug or reuse!</div>
              </div>

              {/* Changing Global Variables */}
              <div className="bg-red-500/20 backdrop-blur rounded-xl p-8 border-2 border-red-400">
                <div className="text-5xl mb-4">🌍</div>
                <h4 className="text-2xl font-bold mb-4 text-red-300">Don't Change Global Variables</h4>
                <div className="bg-red-900/50 rounded-lg p-4 font-mono text-sm mb-4">
                  <div className="text-red-300 mb-2">{`// ❌ Bad - Sneaky side effects`}</div>
                  <div className="text-white">let userCount = 0;</div>
                  <br/>
                  <div className="text-white">const addUser = (name) =&gt; &#123;</div>
                  <div className="text-white ml-4">userCount++; {`// Changing global!`}</div>
                  <div className="text-white ml-4">{`// What else changed?`}</div>
                  <div className="text-white">&#125;;</div>
                </div>
                <div className="text-red-200 text-sm">Creates unpredictable bugs!</div>
              </div>

              {/* Forgetting to Return */}
              <div className="bg-red-500/20 backdrop-blur rounded-xl p-8 border-2 border-red-400">
                <div className="text-5xl mb-4">🕳️</div>
                <h4 className="text-2xl font-bold mb-4 text-red-300">Don't Forget to Return</h4>
                <div className="bg-red-900/50 rounded-lg p-4 font-mono text-sm mb-4">
                  <div className="text-red-300 mb-2">{`// ❌ Bad - Returns undefined`}</div>
                  <div className="text-white">const calculateTotal = (items) =&gt; &#123;</div>
                  <div className="text-white ml-4">let total = 0;</div>
                  <div className="text-white ml-4">items.forEach(item =&gt; &#123;</div>
                  <div className="text-white ml-8">total += item.price;</div>
                  <div className="text-white ml-4">&#125;);</div>
                  <div className="text-white ml-4">{`// Oops! No return statement`}</div>
                  <div className="text-white">&#125;;</div>
                </div>
                <div className="text-red-200 text-sm">All that work for nothing!</div>
              </div>
            </div>

            <div className="mt-8 bg-orange-500/20 rounded-xl p-8 border border-orange-400/30">
              <h4 className="text-2xl font-bold text-orange-300 mb-6">💡 Quick Fix Guide</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-orange-300 font-semibold mb-2">Instead of vague names:</div>
                    <div className="text-white/80 text-sm">Use verbs that describe the action: calculate, validate, format, find, create</div>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-orange-300 font-semibold mb-2">Instead of mega-functions:</div>
                    <div className="text-white/80 text-sm">Break into small functions that each do one thing well</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-orange-300 font-semibold mb-2">Instead of global changes:</div>
                    <div className="text-white/80 text-sm">Take inputs, return outputs. Keep functions predictable!</div>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-orange-300 font-semibold mb-2">Instead of missing returns:</div>
                    <div className="text-white/80 text-sm">Always return something, even if it's just true/false or null</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-700 to-orange-700'
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
      id: 'demo-dom-changes',
      title: 'Live Demo: DOM Manipulation',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Live Demo: Changing Webpages</h2>
          
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <p className="text-xl text-white/80">Watch how clicking buttons instantly changes the webpage - this is the power of JavaScript DOM manipulation!</p>
            </div>
            
            <InteractiveDOMDemo />
          </div>
        </div>
      ),
      bgGradient: 'from-green-700 to-emerald-700'
    },

    {
      id: 'todo-app-overview',
      title: 'Building a Todo App - Overview',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Building a Todo App</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-6xl mb-8 animate-float">📝</div>
            <h3 className="text-3xl font-bold mb-12">Let's see all concepts working together</h3>
            
            {/* Visual Todo App Mockup */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 mb-8">
              <h4 className="text-2xl font-bold text-blue-300 mb-6">What We're Building</h4>
              
              <div className="bg-white rounded-xl p-6 max-w-md mx-auto shadow-2xl">
                <div className="text-gray-800 text-left">
                  <h5 className="font-bold text-xl mb-4 text-center text-blue-600">My Todo List</h5>
                  
                  {/* Input Section */}
                  <div className="flex gap-2 mb-4">
                    <input 
                      type="text" 
                      placeholder="Add a new todo..." 
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                      disabled
                    />
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                      Add
                    </button>
                  </div>
                  
                  {/* Todo List */}
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <span>✅ Learn JavaScript</span>
                      <button className="text-red-500 hover:text-red-700 text-sm">Delete</button>
                    </li>
                    <li className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <span>✅ Build a todo app</span>
                      <button className="text-red-500 hover:text-red-700 text-sm">Delete</button>
                    </li>
                    <li className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <span>⏳ Master the DOM</span>
                      <button className="text-red-500 hover:text-red-700 text-sm">Delete</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Features Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-500/20 backdrop-blur rounded-xl p-6 border-2 border-green-400">
                <div className="text-4xl mb-3">➕</div>
                <h4 className="text-xl font-bold text-green-300 mb-2">Add Todos</h4>
                <p className="text-white/80 text-sm">Type and click to add new tasks</p>
              </div>
              
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-6 border-2 border-blue-400">
                <div className="text-4xl mb-3">📋</div>
                <h4 className="text-xl font-bold text-blue-300 mb-2">Show List</h4>
                <p className="text-white/80 text-sm">Display all todos dynamically</p>
              </div>
              
              <div className="bg-red-500/20 backdrop-blur rounded-xl p-6 border-2 border-red-400">
                <div className="text-4xl mb-3">🗑️</div>
                <h4 className="text-xl font-bold text-red-300 mb-2">Delete Todos</h4>
                <p className="text-white/80 text-sm">Remove completed tasks</p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-emerald-700 to-teal-700'
    },

    {
      id: 'todo-app-structure',
      title: 'Todo App - Data Structure',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Step 1: Data Structure</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-6xl mb-8 animate-float">📊</div>
            <h3 className="text-3xl font-bold mb-12">How do we store our todos?</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Code Section */}
              <div className="space-y-6">
                <div className="bg-gray-900 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-green-300 mb-4">🏗️ Variables & Arrays</h4>
                  <div className="bg-gray-800 rounded-lg p-4 font-mono text-left">
                    <div className="text-blue-300 mb-2">{`// Store our todos in an array`}</div>
                    <div className="text-white mb-4">let todos = [</div>
                    <div className="text-white ml-4 mb-1">  "Learn JavaScript",</div>
                    <div className="text-white ml-4 mb-1">  "Build a todo app",</div>
                    <div className="text-white ml-4 mb-4">  "Master the DOM"</div>
                    <div className="text-white">];</div>
                  </div>
                </div>

                <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
                  <h4 className="text-lg font-bold text-yellow-300 mb-3">💡 Why an Array?</h4>
                  <div className="text-white/80 text-sm space-y-2 text-left">
                    <div>• ✅ Stores multiple items in order</div>
                    <div>• ✅ Easy to add new todos with .push()</div>
                    <div>• ✅ Easy to remove todos with .splice()</div>
                    <div>• ✅ Easy to loop through with .map()</div>
                  </div>
                </div>
              </div>

              {/* Visual Section */}
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                  <h4 className="text-xl font-bold text-white mb-4">📚 Array Visualization</h4>
                  
                  {/* Array boxes */}
                  <div className="space-y-3">
                    {[
                      { index: 0, value: "Learn JavaScript", color: "bg-green-500/30" },
                      { index: 1, value: "Build a todo app", color: "bg-blue-500/30" },
                      { index: 2, value: "Master the DOM", color: "bg-purple-500/30" }
                    ].map((item) => (
                      <div key={item.index} className={`${item.color} rounded-lg p-4 flex items-center justify-between border border-white/20`}>
                        <div className="flex items-center">
                          <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">
                            {item.index}
                          </div>
                          <span className="text-white font-medium">{item.value}</span>
                        </div>
                        <code className="text-white/60 text-xs">todos[{item.index}]</code>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 bg-gray-800 rounded-lg p-3">
                    <div className="text-gray-400 text-xs">ARRAY LENGTH:</div>
                    <div className="text-white font-mono">todos.length = 3</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Concepts */}
            <div className="mt-8 bg-blue-500/20 rounded-xl p-6 border border-blue-400/30">
              <h4 className="text-xl font-bold text-blue-300 mb-4">🔑 Key Concepts Used</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🔤</div>
                  <div className="font-bold">Variables</div>
                  <div className="text-white/70 text-sm">Store the todos array</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">📚</div>
                  <div className="font-bold">Arrays</div>
                  <div className="text-white/70 text-sm">Hold multiple todo items</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🔢</div>
                  <div className="font-bold">Indexing</div>
                  <div className="text-white/70 text-sm">Access specific todos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-teal-700 to-cyan-700'
    },

    {
      id: 'todo-app-functions',
      title: 'Todo App - Functions',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Step 2: Functions</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-6xl mb-8 animate-float">⚙️</div>
            <h3 className="text-3xl font-bold mb-12">Functions that manipulate our data</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Add Function */}
              <div className="bg-green-500/20 backdrop-blur rounded-xl p-6 border-2 border-green-400">
                <h4 className="text-xl font-bold text-green-300 mb-4">➕ Add Todo Function</h4>
                
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-left mb-4">
                  <div className="text-blue-300 mb-2">{`// Add a new todo to the array`}</div>
                  <div className="text-white mb-1">function addTodo(text) &#123;</div>
                  <div className="text-white ml-4 mb-1">  todos.push(text);</div>
                  <div className="text-white ml-4 mb-1">  updateDisplay();</div>
                  <div className="text-white">&#125;</div>
                </div>

                <div className="bg-green-900/50 rounded-lg p-4">
                  <div className="text-green-300 font-bold mb-2">📥 Input:</div>
                  <div className="text-white/80 text-sm mb-3">"Learn React"</div>
                  
                  <div className="text-green-300 font-bold mb-2">🔄 Process:</div>
                  <div className="text-white/80 text-sm mb-3">1. Push text to todos array<br/>2. Update what user sees</div>
                  
                  <div className="text-green-300 font-bold mb-2">📤 Result:</div>
                  <div className="text-white/80 text-sm">todos = [...old todos, "Learn React"]</div>
                </div>
              </div>

              {/* Delete Function */}
              <div className="bg-red-500/20 backdrop-blur rounded-xl p-6 border-2 border-red-400">
                <h4 className="text-xl font-bold text-red-300 mb-4">🗑️ Delete Todo Function</h4>
                
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-left mb-4">
                  <div className="text-blue-300 mb-2">{`// Remove todo at specific index`}</div>
                  <div className="text-white mb-1">function deleteTodo(index) &#123;</div>
                  <div className="text-white ml-4 mb-1">  todos.splice(index, 1);</div>
                  <div className="text-white ml-4 mb-1">  updateDisplay();</div>
                  <div className="text-white">&#125;</div>
                </div>

                <div className="bg-red-900/50 rounded-lg p-4">
                  <div className="text-red-300 font-bold mb-2">📥 Input:</div>
                  <div className="text-white/80 text-sm mb-3">index = 1</div>
                  
                  <div className="text-red-300 font-bold mb-2">🔄 Process:</div>
                  <div className="text-white/80 text-sm mb-3">1. Remove 1 item at index 1<br/>2. Update what user sees</div>
                  
                  <div className="text-red-300 font-bold mb-2">📤 Result:</div>
                  <div className="text-white/80 text-sm">Second todo is removed</div>
                </div>
              </div>

              {/* Display Function */}
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-6 border-2 border-blue-400 lg:col-span-2">
                <h4 className="text-xl font-bold text-blue-300 mb-4">🎨 Display Function</h4>
                
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-left mb-4">
                  <div className="text-blue-300 mb-2">{`// Update the webpage to show current todos`}</div>
                  <div className="text-white mb-1">function updateDisplay() &#123;</div>
                  <div className="text-white ml-4 mb-1">  const listElement = document.getElementById('todo-list');</div>
                  <div className="text-white ml-4 mb-1">  </div>
                  <div className="text-white ml-4 mb-1">  const htmlString = todos.map((todo, index) =&gt; &#123;</div>
                  <div className="text-white ml-8 mb-1">    return `&lt;li&gt;$&#123;todo&#125; &lt;button onclick="deleteTodo($&#123;index&#125;)"&gt;Delete&lt;/button&gt;&lt;/li&gt;`;</div>
                  <div className="text-white ml-4 mb-1">  &#125;).join('');</div>
                  <div className="text-white ml-4 mb-1">  </div>
                  <div className="text-white ml-4 mb-1">  listElement.innerHTML = htmlString;</div>
                  <div className="text-white">&#125;</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-900/50 rounded-lg p-4">
                    <div className="text-blue-300 font-bold mb-2">🎯 Purpose:</div>
                    <div className="text-white/80 text-sm">Convert array data to HTML</div>
                  </div>
                  
                  <div className="bg-blue-900/50 rounded-lg p-4">
                    <div className="text-blue-300 font-bold mb-2">🔄 Method:</div>
                    <div className="text-white/80 text-sm">Use .map() to transform data</div>
                  </div>
                  
                  <div className="bg-blue-900/50 rounded-lg p-4">
                    <div className="text-blue-300 font-bold mb-2">📺 Result:</div>
                    <div className="text-white/80 text-sm">Updates webpage content</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Function Concepts */}
            <div className="mt-8 bg-purple-500/20 rounded-xl p-6 border border-purple-400/30">
              <h4 className="text-xl font-bold text-purple-300 mb-4">🔑 Function Concepts Used</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">📝</div>
                  <div className="font-bold">Parameters</div>
                  <div className="text-white/70 text-sm">Functions accept input</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🔄</div>
                  <div className="font-bold">Array Methods</div>
                  <div className="text-white/70 text-sm">push(), splice(), map()</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="font-bold">Single Purpose</div>
                  <div className="text-white/70 text-sm">Each function does one thing</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🔗</div>
                  <div className="font-bold">Function Calls</div>
                  <div className="text-white/70 text-sm">Functions call other functions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-cyan-700 to-blue-700'
    },

    {
      id: 'todo-app-dom',
      title: 'Todo App - DOM Interaction',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Step 3: DOM Interaction</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-6xl mb-8 animate-float">🌐</div>
            <h3 className="text-3xl font-bold mb-12">Connecting our functions to the webpage</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* HTML Structure */}
              <div className="bg-orange-500/20 backdrop-blur rounded-xl p-6 border-2 border-orange-400">
                <h4 className="text-xl font-bold text-orange-300 mb-4">📄 HTML Structure</h4>
                
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-left text-sm">
                  <div className="text-blue-300 mb-2">&lt;!-- Todo App HTML --&gt;</div>
                  <div className="text-white mb-1">&lt;div id="todo-app"&gt;</div>
                  <div className="text-white ml-4 mb-1">  &lt;input type="text" id="new-todo" /&gt;</div>
                  <div className="text-white ml-4 mb-1">  &lt;button id="add-btn"&gt;Add&lt;/button&gt;</div>
                  <div className="text-white ml-4 mb-1">  &lt;ul id="todo-list"&gt;&lt;/ul&gt;</div>
                  <div className="text-white">&lt;/div&gt;</div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="bg-orange-900/50 rounded p-3 text-sm">
                    <strong className="text-orange-300">Input:</strong> Where users type new todos
                  </div>
                  <div className="bg-orange-900/50 rounded p-3 text-sm">
                    <strong className="text-orange-300">Button:</strong> Triggers the add function
                  </div>
                  <div className="bg-orange-900/50 rounded p-3 text-sm">
                    <strong className="text-orange-300">List:</strong> Where todos are displayed
                  </div>
                </div>
              </div>

              {/* DOM Manipulation */}
              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-6 border-2 border-purple-400">
                <h4 className="text-xl font-bold text-purple-300 mb-4">🎯 DOM Selection</h4>
                
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-left text-sm mb-4">
                  <div className="text-blue-300 mb-2">{`// Get references to HTML elements`}</div>
                  <div className="text-white mb-1">const input = document.getElementById('new-todo');</div>
                  <div className="text-white mb-1">const button = document.getElementById('add-btn');</div>
                  <div className="text-white mb-1">const list = document.getElementById('todo-list');</div>
                </div>

                <div className="space-y-3">
                  <div className="bg-purple-900/50 rounded-lg p-3">
                    <div className="text-purple-300 font-bold mb-1">🔍 Find Elements</div>
                    <div className="text-white/80 text-sm">Use getElementById() to get HTML elements</div>
                  </div>
                  
                  <div className="bg-purple-900/50 rounded-lg p-3">
                    <div className="text-purple-300 font-bold mb-1">📝 Read Values</div>
                    <div className="text-white/80 text-sm">Get text from input with .value</div>
                  </div>
                  
                  <div className="bg-purple-900/50 rounded-lg p-3">
                    <div className="text-purple-300 font-bold mb-1">✏️ Update Content</div>
                    <div className="text-white/80 text-sm">Change HTML with .innerHTML</div>
                  </div>
                </div>
              </div>

              {/* Event Handling */}
              <div className="bg-green-500/20 backdrop-blur rounded-xl p-6 border-2 border-green-400 lg:col-span-2">
                <h4 className="text-xl font-bold text-green-300 mb-4">⚡ Event Handling</h4>
                
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-left text-sm mb-4">
                  <div className="text-blue-300 mb-2">{`// Listen for button clicks`}</div>
                  <div className="text-white mb-1">button.addEventListener('click', function() {`{`}</div>
                  <div className="text-white ml-4 mb-1">  const newTodoText = input.value;</div>
                  <div className="text-white ml-4 mb-1">  if (newTodoText.trim() !== '') {`{`}</div>
                  <div className="text-white ml-8 mb-1">    addTodo(newTodoText);</div>
                  <div className="text-white ml-8 mb-1">    input.value = ''; {`// Clear input`}</div>
                  <div className="text-white ml-4 mb-1">  {`}`}</div>
                  <div className="text-white">{`}`});</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-green-900/50 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">👂</div>
                    <div className="font-bold text-green-300">Listen</div>
                    <div className="text-white/70 text-xs">addEventListener()</div>
                  </div>
                  
                  <div className="bg-green-900/50 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">📥</div>
                    <div className="font-bold text-green-300">Get Value</div>
                    <div className="text-white/70 text-xs">input.value</div>
                  </div>
                  
                  <div className="bg-green-900/50 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">✅</div>
                    <div className="font-bold text-green-300">Validate</div>
                    <div className="text-white/70 text-xs">Check not empty</div>
                  </div>
                  
                  <div className="bg-green-900/50 rounded-lg p-4 text-center">
                    <div className="text-2xl mb-2">🔄</div>
                    <div className="font-bold text-green-300">Execute</div>
                    <div className="text-white/70 text-xs">Call addTodo()</div>
                  </div>
                </div>
              </div>
            </div>

            {/* DOM Concepts */}
            <div className="mt-8 bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <h4 className="text-xl font-bold text-yellow-300 mb-4">🔑 DOM Concepts Used</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="font-bold">Element Selection</div>
                  <div className="text-white/70 text-sm">getElementById()</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">👂</div>
                  <div className="font-bold">Event Listeners</div>
                  <div className="text-white/70 text-sm">addEventListener()</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">📝</div>
                  <div className="font-bold">Content Updates</div>
                  <div className="text-white/70 text-sm">innerHTML, value</div>
                </div>
                <div className="bg-white/5 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🔗</div>
                  <div className="font-bold">User Interaction</div>
                  <div className="text-white/70 text-sm">clicks, typing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-700 to-indigo-700'
    },

    {
      id: 'todo-app-flow',
      title: 'Todo App - Complete Flow',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">The Complete Flow</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-6xl mb-8 animate-float">🔄</div>
            <h3 className="text-3xl font-bold mb-12">How it all works together</h3>
            
            <div className="space-y-8">
              {/* Step by step flow */}
              <div className="bg-white/10 backdrop-blur rounded-xl p-8">
                <h4 className="text-2xl font-bold text-blue-300 mb-6">📋 Adding a Todo: Step by Step</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                  <div className="bg-green-500/20 rounded-lg p-4 border border-green-400/30">
                    <div className="text-3xl mb-2">📝</div>
                    <div className="font-bold text-green-300 mb-2">1. User Types</div>
                    <div className="text-white/80 text-sm">"Learn React"</div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="text-2xl text-white/50">→</div>
                  </div>
                  
                  <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-400/30">
                    <div className="text-3xl mb-2">👆</div>
                    <div className="font-bold text-blue-300 mb-2">2. User Clicks</div>
                    <div className="text-white/80 text-sm">"Add" button</div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="text-2xl text-white/50">→</div>
                  </div>
                  
                  <div className="bg-purple-500/20 rounded-lg p-4 border border-purple-400/30">
                    <div className="text-3xl mb-2">⚡</div>
                    <div className="font-bold text-purple-300 mb-2">3. Event Fires</div>
                    <div className="text-white/80 text-sm">Click listener triggers</div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="text-2xl text-white/50">→</div>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-6 gap-4">
                  <div className="bg-orange-500/20 rounded-lg p-4 border border-orange-400/30">
                    <div className="text-3xl mb-2">📦</div>
                    <div className="font-bold text-orange-300 mb-2">4. Get Value</div>
                    <div className="text-white/80 text-sm">input.value</div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="text-2xl text-white/50">→</div>
                  </div>
                  
                  <div className="bg-red-500/20 rounded-lg p-4 border border-red-400/30">
                    <div className="text-3xl mb-2">🔄</div>
                    <div className="font-bold text-red-300 mb-2">5. Call Function</div>
                    <div className="text-white/80 text-sm">addTodo(text)</div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="text-2xl text-white/50">→</div>
                  </div>
                  
                  <div className="bg-yellow-500/20 rounded-lg p-4 border border-yellow-400/30">
                    <div className="text-3xl mb-2">📚</div>
                    <div className="font-bold text-yellow-300 mb-2">6. Update Array</div>
                    <div className="text-white/80 text-sm">todos.push()</div>
                  </div>
                  
                  <div className="flex items-center justify-center">
                    <div className="text-2xl text-white/50">→</div>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-teal-500/20 rounded-lg p-4 border border-teal-400/30">
                    <div className="text-3xl mb-2">🎨</div>
                    <div className="font-bold text-teal-300 mb-2">7. Update Display</div>
                    <div className="text-white/80 text-sm">updateDisplay()</div>
                  </div>
                  
                  <div className="bg-pink-500/20 rounded-lg p-4 border border-pink-400/30">
                    <div className="text-3xl mb-2">🔄</div>
                    <div className="font-bold text-pink-300 mb-2">8. Generate HTML</div>
                    <div className="text-white/80 text-sm">todos.map()</div>
                  </div>
                  
                  <div className="bg-indigo-500/20 rounded-lg p-4 border border-indigo-400/30">
                    <div className="text-3xl mb-2">🎉</div>
                    <div className="font-bold text-indigo-300 mb-2">9. User Sees</div>
                    <div className="text-white/80 text-sm">New todo appears!</div>
                  </div>
                </div>
              </div>

              {/* All concepts working together */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-green-500/20 backdrop-blur rounded-xl p-6 border-2 border-green-400">
                  <div className="text-4xl mb-3">🔤</div>
                  <h4 className="text-xl font-bold text-green-300 mb-2">Variables</h4>
                  <div className="text-white/80 text-sm">Store the todos array</div>
                </div>
                
                <div className="bg-blue-500/20 backdrop-blur rounded-xl p-6 border-2 border-blue-400">
                  <div className="text-4xl mb-3">⚙️</div>
                  <h4 className="text-xl font-bold text-blue-300 mb-2">Functions</h4>
                  <div className="text-white/80 text-sm">Process and manipulate data</div>
                </div>
                
                <div className="bg-purple-500/20 backdrop-blur rounded-xl p-6 border-2 border-purple-400">
                  <div className="text-4xl mb-3">🌐</div>
                  <h4 className="text-xl font-bold text-purple-300 mb-2">DOM</h4>
                  <div className="text-white/80 text-sm">Find and update HTML elements</div>
                </div>
                
                <div className="bg-orange-500/20 backdrop-blur rounded-xl p-6 border-2 border-orange-400">
                  <div className="text-4xl mb-3">⚡</div>
                  <h4 className="text-xl font-bold text-orange-300 mb-2">Events</h4>
                  <div className="text-white/80 text-sm">Respond to user interactions</div>
                </div>
              </div>


            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-700 to-purple-700'
    },

    {
      id: 'wrap-up',
      title: 'Have a Great Week!',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-6xl font-extrabold mb-8 animate-float">Have a Great Rest of Your Week!</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400 mb-8">
              <h3 className="text-3xl font-bold mb-6 text-blue-300">Extra Credit Reminder</h3>
              <p className="text-xl text-white/90 leading-relaxed mb-4">
                Make sure to have <strong className="text-yellow-300">only one of the pair</strong> send me an email with who you paired up with today for the extra credit.
              </p>
              <div className="bg-white/10 rounded-lg p-4">
                <p className="text-lg font-mono text-blue-200">tgondil@purdue.edu</p>
              </div>
            </div>
            
            <div className="text-2xl text-white/80">
              See you next class!
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