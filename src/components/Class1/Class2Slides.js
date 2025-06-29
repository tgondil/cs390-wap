import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Custom CSS for animations
const customStyles = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fade-in 0.5s ease-out;
  }
  @keyframes git-flow {
    0% { transform: translateX(0); opacity: 1; }
    50% { transform: translateX(100px); opacity: 0.7; }
    100% { transform: translateX(200px); opacity: 1; }
  }
  .animate-git-flow {
    animation: git-flow 2s ease-in-out infinite;
  }
`;

// Reusable CodeBlock component with copy functionality
const CodeBlock = ({ code, language = '', filename = '', className = '', showCopy = true }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative group">
      {filename && (
        <div className="bg-gray-800 px-4 py-2 text-sm text-gray-300 rounded-t-lg border-b border-gray-600">
          {filename}
        </div>
      )}
      <div className={`bg-gray-900 rounded-lg ${filename ? 'rounded-t-none' : ''} p-4 relative ${className}`}>
        {showCopy && (
          <button
            onClick={copyToClipboard}
            className={`absolute top-2 right-2 px-3 py-1 rounded text-xs font-medium transition-all duration-200 z-10
              ${copied 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600 opacity-0 group-hover:opacity-100'
              }`}
          >
            {copied ? '✓ Copied!' : '📋 Copy'}
          </button>
        )}
        <pre className="text-white font-mono text-sm overflow-x-auto whitespace-pre-wrap">
          {code}
        </pre>
      </div>
    </div>
  );
};

// Interactive Git Workflow Demo
const GitWorkflowDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [files, setFiles] = useState(['index.html']);
  const [commits, setCommits] = useState([]);
  const [stagingArea, setStagingArea] = useState([]);

  const steps = [
    { action: 'init', title: 'Initialize Repository', description: 'Create a new Git repository' },
    { action: 'add', title: 'Stage Changes', description: 'Add files to staging area' },
    { action: 'commit', title: 'Commit Changes', description: 'Save changes to repository' },
    { action: 'push', title: 'Push to GitHub', description: 'Upload to remote repository' }
  ];

  const executeStep = async (stepIndex) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentStep(stepIndex);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    switch (steps[stepIndex].action) {
      case 'init':
        // Repository initialized - no visual change needed
        break;
      case 'add':
        setStagingArea([...files]);
        break;
      case 'commit':
        setCommits(prev => [...prev, {
          id: `commit-${prev.length + 1}`,
          message: 'Initial commit',
          files: [...stagingArea]
        }]);
        setStagingArea([]);
        break;
      case 'push':
        // Simulate push animation
        break;
    }
    
    setIsAnimating(false);
  };

  return (
    <div className="bg-white/10 rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-6 text-center">Interactive Git Workflow</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Working Directory */}
        <div className="bg-blue-500/20 rounded-lg p-4">
          <h4 className="font-semibold text-white mb-3">Working Directory</h4>
          <div className="space-y-2">
            {files.map((file, index) => (
              <div key={index} className="bg-white/20 rounded px-3 py-2 text-sm text-white">
                📄 {file}
              </div>
            ))}
          </div>
        </div>

        {/* Staging Area */}
        <div className="bg-yellow-500/20 rounded-lg p-4">
          <h4 className="font-semibold text-white mb-3">Staging Area</h4>
          <div className="space-y-2">
            {stagingArea.map((file, index) => (
              <div key={index} className="bg-white/20 rounded px-3 py-2 text-sm text-white animate-fade-in">
                📄 {file}
              </div>
            ))}
            {stagingArea.length === 0 && (
              <div className="text-gray-400 text-sm italic">No staged files</div>
            )}
          </div>
        </div>

        {/* Repository */}
        <div className="bg-green-500/20 rounded-lg p-4">
          <h4 className="font-semibold text-white mb-3">Repository</h4>
          <div className="space-y-2">
            {commits.map((commit, index) => (
              <div key={commit.id} className="bg-white/20 rounded px-3 py-2 text-sm text-white animate-fade-in">
                🔄 {commit.message}
              </div>
            ))}
            {commits.length === 0 && (
              <div className="text-gray-400 text-sm italic">No commits yet</div>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => executeStep(index)}
            disabled={isAnimating}
            className={`px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
              currentStep === index && isAnimating
                ? 'bg-blue-600 text-white animate-pulse'
                : 'bg-white/20 text-white hover:bg-white/30'
            } disabled:opacity-50`}
          >
            <div className="text-xs opacity-75 mb-1">{step.action.toUpperCase()}</div>
            <div className="text-sm">{step.title}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

// Interactive HTML Structure Builder
const HTMLStructureBuilder = () => {
  const [htmlStructure, setHtmlStructure] = useState({
    html: { children: [] },
    currentPath: []
  });

  const elements = [
    { tag: 'head', description: 'Document metadata', color: 'bg-purple-500' },
    { tag: 'body', description: 'Document content', color: 'bg-blue-500' },
    { tag: 'header', description: 'Page header', color: 'bg-green-500' },
    { tag: 'nav', description: 'Navigation', color: 'bg-yellow-500' },
    { tag: 'main', description: 'Main content', color: 'bg-red-500' },
    { tag: 'footer', description: 'Page footer', color: 'bg-gray-500' }
  ];

  const addElement = (elementType) => {
    setHtmlStructure(prev => {
      const newStructure = { ...prev };
      if (!newStructure.html.children) {
        newStructure.html.children = [];
      }
      newStructure.html.children.push({
        tag: elementType.tag,
        id: Date.now(),
        children: []
      });
      return newStructure;
    });
  };

  const generateHTMLCode = () => {
    const renderElement = (element, indent = 0) => {
      const spaces = '  '.repeat(indent);
      if (element.children && element.children.length > 0) {
        return `${spaces}<${element.tag}>\n${element.children.map(child => renderElement(child, indent + 1)).join('\n')}\n${spaces}</${element.tag}>`;
      }
      return `${spaces}<${element.tag}></${element.tag}>`;
    };

    return `<!DOCTYPE html>\n<html>\n${htmlStructure.html.children.map(child => renderElement(child, 1)).join('\n')}\n</html>`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Element Palette */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white mb-4">HTML Elements</h3>
        <div className="grid grid-cols-2 gap-3">
          {elements.map((element, index) => (
            <button
              key={index}
              onClick={() => addElement(element)}
              className={`${element.color} rounded-lg p-4 text-white hover:opacity-80 transition-opacity`}
            >
              <div className="font-mono text-sm">&lt;{element.tag}&gt;</div>
              <div className="text-xs mt-1 opacity-90">{element.description}</div>
            </button>
          ))}
        </div>
        
        <button
          onClick={() => setHtmlStructure({ html: { children: [] }, currentPath: [] })}
          className="w-full bg-red-600 hover:bg-red-700 text-white rounded-lg py-2 px-4 transition-colors"
        >
          Clear Structure
        </button>
      </div>

      {/* Generated HTML */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white mb-4">Generated HTML</h3>
        <CodeBlock 
          code={generateHTMLCode()}
          language="html"
          className="max-h-96 overflow-y-auto"
        />
      </div>
    </div>
  );
};

// CSS Property Playground
const CSSPlayground = () => {
  const [cssProperties, setCssProperties] = useState({
    backgroundColor: '#3b82f6',
    color: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    fontSize: '16px',
    textAlign: 'center'
  });

  const propertyControls = [
    { property: 'backgroundColor', label: 'Background', type: 'color' },
    { property: 'color', label: 'Text Color', type: 'color' },
    { property: 'padding', label: 'Padding', type: 'range', min: 0, max: 50, unit: 'px' },
    { property: 'borderRadius', label: 'Border Radius', type: 'range', min: 0, max: 50, unit: 'px' },
    { property: 'fontSize', label: 'Font Size', type: 'range', min: 12, max: 32, unit: 'px' }
  ];

  const updateProperty = (property, value) => {
    setCssProperties(prev => ({
      ...prev,
      [property]: value
    }));
  };

  const generateCSS = () => {
    return Object.entries(cssProperties)
      .map(([property, value]) => {
        const cssProperty = property.replace(/([A-Z])/g, '-$1').toLowerCase();
        return `  ${cssProperty}: ${value};`;
      })
      .join('\n');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Controls */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white mb-4">CSS Properties</h3>
        {propertyControls.map((control, index) => (
          <div key={index} className="space-y-2">
            <label className="text-white text-sm font-medium">{control.label}</label>
            {control.type === 'color' ? (
              <input
                type="color"
                value={cssProperties[control.property]}
                onChange={(e) => updateProperty(control.property, e.target.value)}
                className="w-full h-10 rounded border-none"
              />
            ) : (
              <div className="flex items-center space-x-3">
                <input
                  type="range"
                  min={control.min}
                  max={control.max}
                  value={parseInt(cssProperties[control.property])}
                  onChange={(e) => updateProperty(control.property, `${e.target.value}${control.unit}`)}
                  className="flex-1"
                />
                <span className="text-white text-sm w-16">
                  {cssProperties[control.property]}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Preview and Code */}
      <div className="space-y-4">
        <h3 className="text-lg font-bold text-white mb-4">Live Preview</h3>
        
        {/* Preview Box */}
        <div 
          style={cssProperties}
          className="transition-all duration-300"
        >
          Hello, CSS World!
        </div>

        {/* Generated CSS */}
        <CodeBlock 
          code={`.my-element {\n${generateCSS()}\n}`}
          language="css"
        />
      </div>
    </div>
  );
};

// JavaScript Interaction Demo
const JavaScriptDemo = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [displayText, setDisplayText] = useState('Hello, JavaScript!');
  const [isVisible, setIsVisible] = useState(true);

  const jsExamples = [
    {
      title: 'Variables & Functions',
      code: `let count = 0;

function increment() {
  count = count + 1;
  console.log(count);
}

increment(); // Output: 1`
    },
    {
      title: 'DOM Manipulation',
      code: `// Get element by ID
const button = document.getElementById('myButton');

// Add event listener
button.addEventListener('click', function() {
  alert('Button clicked!');
});

// Change text content
button.textContent = 'Click me!';`
    },
    {
      title: 'Conditional Logic',
      code: `const age = 18;

if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('Too young to vote');
}

// Ternary operator
const message = age >= 18 ? 'Adult' : 'Minor';`
    }
  ];

  return (
    <div className="space-y-6">
      {/* Interactive Elements */}
      <div className="bg-white/10 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-6 text-center">Interactive JavaScript</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Counter */}
          <div className="bg-blue-500/20 rounded-lg p-4 text-center">
            <h4 className="text-white font-semibold mb-3">Counter</h4>
            <div className="text-3xl font-bold text-white mb-4">{count}</div>
            <div className="space-y-2">
              <button
                onClick={() => setCount(count + 1)}
                className="w-full bg-green-600 hover:bg-green-700 text-white rounded py-2 transition-colors"
              >
                Increment
              </button>
              <button
                onClick={() => setCount(0)}
                className="w-full bg-red-600 hover:bg-red-700 text-white rounded py-2 transition-colors"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Text Input */}
          <div className="bg-purple-500/20 rounded-lg p-4">
            <h4 className="text-white font-semibold mb-3">Text Input</h4>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type something..."
              className="w-full p-2 rounded mb-3 bg-white/20 text-white placeholder-gray-300"
            />
            <button
              onClick={() => setDisplayText(inputValue || 'Hello, JavaScript!')}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded py-2 transition-colors"
            >
              Update Text
            </button>
          </div>

          {/* Toggle Visibility */}
          <div className="bg-orange-500/20 rounded-lg p-4 text-center">
            <h4 className="text-white font-semibold mb-3">Toggle Element</h4>
            {isVisible && (
              <div className="bg-white/20 rounded p-3 mb-3 text-white animate-fade-in">
                {displayText}
              </div>
            )}
            <button
              onClick={() => setIsVisible(!isVisible)}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded py-2 transition-colors"
            >
              {isVisible ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
      </div>

      {/* Code Examples */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {jsExamples.map((example, index) => (
          <div key={index} className="space-y-3">
            <h4 className="text-lg font-semibold text-white">{example.title}</h4>
            <CodeBlock code={example.code} language="javascript" />
          </div>
        ))}
      </div>
    </div>
  );
};

const Class2Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = customStyles;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const slides = [
    // Slide 1: Welcome & Overview
    {
      id: 'welcome',
      title: 'Class 2: Git, GitHub & Web Fundamentals',
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <div className="text-6xl mb-4">🚀</div>
            <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in">
              Version Control & Web Foundations
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Master Git workflows, GitHub collaboration, and refresh your HTML/CSS/JavaScript skills
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="font-semibold mb-2 text-white">Git Basics</h3>
              <p className="text-sm text-blue-100">Version control fundamentals</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl mb-3">🐙</div>
              <h3 className="font-semibold mb-2 text-white">GitHub</h3>
              <p className="text-sm text-blue-100">Remote repositories & collaboration</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl mb-3">🏗️</div>
              <h3 className="font-semibold mb-2 text-white">HTML/CSS</h3>
              <p className="text-sm text-blue-100">Structure & styling review</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold mb-2 text-white">JavaScript</h3>
              <p className="text-sm text-blue-100">Interactivity & DOM manipulation</p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 via-purple-600 to-teal-600'
    },

    // Slide 2: Git Fundamentals
    {
      id: 'git-fundamentals',
      title: 'Git Fundamentals',
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <div className="text-5xl mb-4">📚</div>
            <h1 className="text-4xl font-bold text-white mb-4">Understanding Git</h1>
            <p className="text-xl text-gray-200 mb-8">The foundation of modern development workflows</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* What is Git */}
            <div className="bg-white/10 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">What is Git?</h2>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-white"><strong>Version Control System:</strong> Track changes in your code</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-white"><strong>Time Machine:</strong> Go back to any previous version</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-white"><strong>Collaboration Tool:</strong> Multiple developers, one codebase</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3">✓</span>
                  <span className="text-white"><strong>Backup System:</strong> Never lose your work again</span>
                </li>
              </ul>
            </div>

            {/* Why Use Git */}
            <div className="bg-white/10 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">Why Git Matters</h2>
              <div className="space-y-4">
                <div className="bg-red-500/20 rounded-lg p-4">
                  <h3 className="font-semibold text-red-300 mb-2">❌ Without Git:</h3>
                  <p className="text-sm text-gray-200">project_final.zip, project_final_v2.zip, project_ACTUALLY_final.zip...</p>
                </div>
                <div className="bg-green-500/20 rounded-lg p-4">
                  <h3 className="font-semibold text-green-300 mb-2">✅ With Git:</h3>
                  <p className="text-sm text-gray-200">Clean history, meaningful commits, easy collaboration, instant backups</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Git Workflow */}
          <GitWorkflowDemo />
        </div>
      ),
      bgGradient: 'from-gray-800 via-gray-900 to-black'
    },

    // Slide 3: Git Commands & GitHub
    {
      id: 'git-github',
      title: 'Git Commands & GitHub',
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <div className="text-5xl mb-4">🐙</div>
            <h1 className="text-4xl font-bold text-white mb-4">Git Commands & GitHub</h1>
            <p className="text-xl text-green-100 mb-8">Essential commands and remote collaboration</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Essential Git Commands */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center mb-6 text-white">Essential Git Commands</h2>
              
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="font-semibold text-yellow-300 mb-2">Repository Setup</h3>
                  <CodeBlock 
                    code={`# Initialize new repository
git init

# Clone existing repository
git clone https://github.com/user/repo.git`}
                    showCopy={true}
                  />
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-300 mb-2">Basic Workflow</h3>
                  <CodeBlock 
                    code={`# Check status
git status

# Add files to staging
git add .
git add filename.js

# Commit changes
git commit -m "Add new feature"`}
                    showCopy={true}
                  />
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="font-semibold text-green-300 mb-2">Remote Operations</h3>
                  <CodeBlock 
                    code={`# Add remote origin
git remote add origin https://github.com/user/repo.git

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main`}
                    showCopy={true}
                  />
                </div>
              </div>
            </div>

            {/* GitHub Features */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center mb-6 text-white">GitHub Features</h2>
              
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">📁</span>
                    <h3 className="text-lg font-semibold text-white">Repositories</h3>
                  </div>
                  <p className="text-sm text-gray-200">Store and organize your code projects</p>
                </div>

                <div className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">🔀</span>
                    <h3 className="text-lg font-semibold text-white">Pull Requests</h3>
                  </div>
                  <p className="text-sm text-gray-200">Propose and review code changes</p>
                </div>

                <div className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">🐛</span>
                    <h3 className="text-lg font-semibold text-white">Issues</h3>
                  </div>
                  <p className="text-sm text-gray-200">Track bugs and feature requests</p>
                </div>

                <div className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">👥</span>
                    <h3 className="text-lg font-semibold text-white">Collaboration</h3>
                  </div>
                  <p className="text-sm text-gray-200">Work together on projects seamlessly</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-6 mt-6">
                <h3 className="font-semibold mb-3 text-white">🎯 Today's Goal</h3>
                <p className="text-sm text-gray-200">Create your first repository and push code to GitHub!</p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 via-teal-600 to-blue-600'
    },

    // Slide 4: HTML & CSS Refresher
    {
      id: 'html-css-refresher',
      title: 'HTML & CSS Refresher',
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <div className="text-5xl mb-4">🏗️</div>
            <h1 className="text-4xl font-bold text-white mb-4">HTML & CSS Refresher</h1>
            <p className="text-xl text-orange-100 mb-8">Building blocks of the web</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* HTML Structure Builder */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center mb-6 text-white">Interactive HTML Builder</h2>
              <HTMLStructureBuilder />
            </div>

            {/* CSS Playground */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-center mb-6 text-white">CSS Playground</h2>
              <CSSPlayground />
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-orange-600 via-red-600 to-pink-600'
    },

    // Slide 5: JavaScript Fundamentals
    {
      id: 'javascript-fundamentals',
      title: 'JavaScript Fundamentals',
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <div className="text-5xl mb-4">⚡</div>
            <h1 className="text-4xl font-bold text-white mb-4">JavaScript Fundamentals</h1>
            <p className="text-xl text-yellow-100 mb-8">Adding interactivity to your web pages</p>
          </div>

          <JavaScriptDemo />
        </div>
      ),
      bgGradient: 'from-yellow-600 via-orange-600 to-red-600'
    },

    // Slide 6: Learning Objectives
    {
      id: 'learning-objectives',
      title: 'Today\'s Learning Objectives',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">What We Accomplished Today</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: '📚',
                title: 'Git Configuration',
                description: 'Set up Git and created first repository'
              },
              {
                icon: '🐙',
                title: 'GitHub Integration',
                description: 'Pushed code to GitHub and learned collaboration features'
              },
              {
                icon: '🏗️',
                title: 'HTML Structure',
                description: 'Built semantic HTML pages with proper structure'
              },
              {
                icon: '⚡',
                title: 'JavaScript Interactivity',
                description: 'Added dynamic behavior with JavaScript'
              }
            ].map((objective, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{objective.icon}</div>
                  <h3 className="text-xl font-bold text-white">{objective.title}</h3>
                </div>
                <p className="text-emerald-100 text-center">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      ),
      bgGradient: 'from-emerald-600 to-teal-700'
    },

    // Slide 7: Homework & Next Steps
    {
      id: 'homework',
      title: 'Homework & Next Steps',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">Your Mission</h2>
          <div className="bg-white/10 backdrop-blur rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">For Next Class:</h3>
            <div className="space-y-4 text-purple-100">
              <div className="flex items-start">
                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">1</span>
                <span>Create an "About Me" webpage using HTML, CSS, and JavaScript</span>
              </div>
              <div className="flex items-start">
                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">2</span>
                <span>Push your webpage to a new GitHub repository</span>
              </div>
              <div className="flex items-start">
                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">3</span>
                <span>Practice Git commands: add, commit, push, pull</span>
              </div>
              <div className="flex items-start">
                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">4</span>
                <span>Experiment with different CSS properties and JavaScript interactions</span>
              </div>
            </div>
          </div>
          <div className="bg-blue-500/20 border border-blue-400/30 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-white mb-4">🚀 Next Class Preview:</h4>
            <p className="text-purple-100">
              We'll dive into React fundamentals, learn about components and JSX, 
              and start building our first React application!
            </p>
          </div>
        </div>
      ),
      bgGradient: 'from-violet-600 to-purple-700'
    },

    // Slide 8: Navigation
    {
      id: 'navigation',
      title: 'Course Navigation',
      content: (
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">Ready for More?</h2>
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <div className="text-5xl mb-4">🎯</div>
              <p className="text-xl text-blue-100 mb-6">
                You've completed Class 2! Ready to continue your journey?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/class/3" 
                  className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Class 3: React Fundamentals →
                </Link>
                <Link 
                  to="/" 
                  className="bg-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
                >
                  ← Course Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-purple-700'
    }
  ];

  // Handle scroll to navigate slides
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newSlide = Math.floor(scrollPosition / windowHeight);
      
      if (newSlide >= 0 && newSlide < slides.length) {
        setCurrentSlide(newSlide);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slides.length]);

  // Smooth scroll to specific slide
  const scrollToSlide = (slideIndex) => {
    window.scrollTo({
      top: slideIndex * window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative">
      {/* Navigation dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-white shadow-lg scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`min-h-screen flex items-center justify-center p-8 bg-gradient-to-br ${slide.bgGradient}`}
        >
          <div className="max-w-6xl mx-auto w-full">
            {slide.content}
          </div>
        </div>
      ))}

      {/* Progress indicator */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/30 backdrop-blur rounded-full px-4 py-2">
          <span className="text-white text-sm">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>

      {/* Scroll hint for first slide */}
      {currentSlide === 0 && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 animate-bounce">
          <div className="text-white/70 text-center">
            <div className="text-2xl mb-2">↓</div>
            <div className="text-sm">Scroll to continue</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Class2Slides; 