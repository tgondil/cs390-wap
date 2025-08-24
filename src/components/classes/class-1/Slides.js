import React, { useState, useEffect } from 'react';
import spainImage from './spain.jpg';
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
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
    50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.6); }
  }
  .animate-pulse-glow {
    animation: pulse-glow 2s ease-in-out infinite;
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



// PSO Information Component
const PSOInformation = () => {

  return (
    <div className="space-y-6">
      <h3 className="text-3xl font-bold text-white mb-6">🎯 What are PSOs?</h3>
      
      <div className="bg-white/10 backdrop-blur rounded-xl p-6">
        <p className="text-white/90 text-xl mb-4">
          PSOs are hands-on pair programming classes where you'll build something valuable together.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-blue-500/20 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-blue-300 mb-2">⏱️ 40-Minute Projects</h4>
            <p className="text-white/80">
              Short, focused coding sessions where you apply what you've learned in recent classes.
            </p>
          </div>
          
          <div className="bg-red-500/20 rounded-lg p-4">
            <h4 className="text-lg font-semibold text-red-300 mb-2">🚫 No AI Allowed</h4>
            <p className="text-white/80">
              You're not allowed to use AI so you'll really learn what you're building.
            </p>
          </div>
        </div>

        <div className="bg-green-500/20 rounded-lg p-4 mb-6">
          <h4 className="text-lg font-semibold text-green-300 mb-2">📚 Build on Prior Learning</h4>
          <p className="text-white/80">
            You won't be building projects from scratch but rather using what you've learned in the classes so far.
          </p>
        </div>

        <div className="bg-purple-500/20 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-purple-300 mb-2">🎯 Purpose</h4>
          <p className="text-white/80">
            PSOs are directly relevant to building your skills and getting good grades on the homeworks. 
            Use them to practice, ask questions, and collaborate with classmates!
          </p>
        </div>
      </div>
    </div>
  );
};

// Three-Tier Architecture Interactive Component
const ArchitectureDiagram = () => {
  const [selectedTier, setSelectedTier] = useState(null);
  const [activeFlow, setActiveFlow] = useState(null);

  const tiers = {
    frontend: {
      title: 'Frontend (Presentation Tier)',
      description: 'What users see and interact with',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
      responsibilities: [
        'User interface and experience design',
        'Form validation and user input handling',
        'Responsive design for all devices',
        'API communication and data display',
        'Real-time updates and interactions',
        'Client-side routing and navigation'
      ],
      color: 'green',
      examples: [
        'Login forms with validation',
        'Interactive dashboards',
        'Real-time chat interfaces',
        'Responsive navigation menus',
        'Image galleries and carousels'
      ]
    },
    backend: {
      title: 'Backend (Logic Tier)',
      description: 'Server-side processing and business logic',
      technologies: ['Node.js', 'Express.js', 'APIs', 'JWT Auth', 'Middleware'],
      responsibilities: [
        'Business logic and rules enforcement',
        'API endpoints and request routing',
        'Authentication and authorization',
        'Data processing and validation',
        'Third-party service integration',
        'Performance optimization and caching'
      ],
      color: 'orange',
      examples: [
        'User registration and login APIs',
        'Payment processing workflows',
        'Email notification systems',
        'File upload and processing',
        'Data aggregation and reporting'
      ]
    },
    database: {
      title: 'Database (Data Tier)',
      description: 'Persistent data storage and management',
      technologies: ['MongoDB', 'PostgreSQL', 'Redis', 'Cloud Storage', 'Indexing'],
      responsibilities: [
        'Data persistence and retrieval',
        'User profiles and application data',
        'Query optimization and performance',
        'Data relationships and integrity',
        'Backup and disaster recovery',
        'Scalability and data distribution'
      ],
      color: 'purple',
      examples: [
        'User account information',
        'Product catalogs and inventory',
        'Order history and transactions',
        'Content management systems',
        'Analytics and usage tracking'
      ]
    }
  };

  const dataFlows = [
    {
      id: 'user-request',
      title: 'User Makes a Request',
      steps: [
        { tier: 'frontend', action: 'User clicks "Login" button' },
        { tier: 'frontend', action: 'Form validation runs on client' },
        { tier: 'frontend', action: 'HTTP POST request sent to server' },
        { tier: 'backend', action: 'Server receives and parses request' },
        { tier: 'backend', action: 'Validate user credentials' },
        { tier: 'database', action: 'Query user table for matching email' },
        { tier: 'database', action: 'Return user data if found' },
        { tier: 'backend', action: 'Compare password hash' },
        { tier: 'backend', action: 'Generate JWT token if valid' },
        { tier: 'frontend', action: 'Receive token and store locally' },
        { tier: 'frontend', action: 'Redirect to dashboard page' }
      ]
    }
  ];

  const startDataFlow = () => {
    setActiveFlow(0);
    // Simulate step-by-step flow
    setTimeout(() => setActiveFlow(null), 8000);
  };

  return (
    <div className="bg-white/10 backdrop-blur rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-6">🏗️ Three-Tier Architecture</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {Object.entries(tiers).map(([key, tier]) => (
          <div
            key={key}
            onClick={() => setSelectedTier(selectedTier === key ? null : key)}
            className={`cursor-pointer p-4 rounded-lg border-2 transition-all duration-300 ${
              selectedTier === key
                ? `border-${tier.color}-400 bg-${tier.color}-500/20`
                : 'border-white/20 bg-white/5 hover:bg-white/10'
            }`}
          >
            <div className={`text-lg font-bold mb-2 ${
              tier.color === 'green' ? 'text-green-400' :
              tier.color === 'orange' ? 'text-orange-400' :
              'text-purple-400'
            }`}>
              {tier.title}
            </div>
            <p className="text-white/80 text-sm mb-3">{tier.description}</p>
            <div className="flex flex-wrap gap-1">
              {tier.technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    tier.color === 'green' ? 'bg-green-600/30 text-green-200' :
                    tier.color === 'orange' ? 'bg-orange-600/30 text-orange-200' :
                    'bg-purple-600/30 text-purple-200'
                  }`}
                >
                  {tech}
                </span>
              ))}
              {tier.technologies.length > 3 && (
                <span className="px-2 py-1 rounded text-xs text-white/60">
                  +{tier.technologies.length - 3} more
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedTier && (
        <div className="bg-white/5 rounded-lg p-6 animate-fade-in mb-6">
          <h4 className="text-lg font-bold text-white mb-4">
            {tiers[selectedTier].title} - Deep Dive
          </h4>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-white mb-3">🔧 Key Responsibilities</h5>
              <ul className="space-y-2">
                {tiers[selectedTier].responsibilities.map((responsibility, index) => (
                  <li key={index} className="text-white/80 text-sm flex items-start">
                    <span className="mr-2 text-blue-400 mt-1">▸</span>
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold text-white mb-3">📱 Real-World Examples</h5>
              <ul className="space-y-2">
                {tiers[selectedTier].examples.map((example, index) => (
                  <li key={index} className="text-white/80 text-sm flex items-start">
                    <span className="mr-2 text-green-400 mt-1">▸</span>
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 p-3 bg-blue-500/20 rounded border border-blue-400/30">
            <h6 className="font-medium text-blue-300 mb-2">💡 Technologies You'll Learn</h6>
            <div className="flex flex-wrap gap-2">
              {tiers[selectedTier].technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-600/30 text-blue-200 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-6">
        <h4 className="text-lg font-bold text-white mb-4">🔄 How They Communicate</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-lg font-semibold text-green-300 mb-2">Frontend ↔ Backend</div>
            <div className="text-sm text-white/80">HTTP requests</div>
            <div className="text-xs text-white/60 mt-1">(GET, POST, PUT, DELETE)</div>
            <div className="text-xs text-white/60">JSON data exchange</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-lg font-semibold text-orange-300 mb-2">Backend ↔ Database</div>
            <div className="text-sm text-white/80">Database queries</div>
            <div className="text-xs text-white/60 mt-1">SQL or NoSQL commands</div>
            <div className="text-xs text-white/60">CRUD operations</div>
          </div>
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-lg font-semibold text-purple-300 mb-2">User ↔ Frontend</div>
            <div className="text-sm text-white/80">DOM events</div>
            <div className="text-xs text-white/60 mt-1">Clicks, forms, keyboard</div>
            <div className="text-xs text-white/60">Real-time interactions</div>
          </div>
        </div>

        <button
          onClick={startDataFlow}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
        >
          🎬 Watch Data Flow Animation
        </button>
      </div>
    </div>
  );
};



// Interactive Grade Calculator
const GradeCalculator = () => {
  const [homework, setHomework] = useState(85);
  const [miniProjects, setMiniProjects] = useState(85);
  const [capstone, setCapstone] = useState(85);
  const [participation, setParticipation] = useState(90);
  const calculateFinalGrade = () => {
    const base = (homework * 0.35) + (miniProjects * 0.25) + (capstone * 0.30) + (participation * 0.10);
    return Math.min(100, base);
  };

  const getLetterGrade = (grade) => {
    if (grade >= 97) return 'A+';
    if (grade >= 93) return 'A';
    if (grade >= 90) return 'A-';
    if (grade >= 87) return 'B+';
    if (grade >= 83) return 'B';
    if (grade >= 80) return 'B-';
    if (grade >= 77) return 'C+';
    if (grade >= 73) return 'C';
    if (grade >= 70) return 'C-';
    if (grade >= 60) return 'D';
    return 'F';
  };

  const finalGrade = calculateFinalGrade();

  return (
    <div className="bg-white/10 backdrop-blur rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-4">📊 Interactive Grade Calculator</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Weekly PSOs (35%): {homework}%
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={homework}
              onChange={(e) => setHomework(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Mini-Projects (25%): {miniProjects}%
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={miniProjects}
              onChange={(e) => setMiniProjects(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Capstone Project (30%): {capstone}%
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={capstone}
              onChange={(e) => setCapstone(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Participation (10%): {participation}%
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={participation}
              onChange={(e) => setParticipation(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          

        </div>
        
        <div className="bg-white/5 rounded-lg p-6 text-center">
          <div className="text-4xl font-bold text-white mb-2">
            {finalGrade.toFixed(1)}%
          </div>
          <div className={`text-2xl font-bold mb-4 ${
            finalGrade >= 90 ? 'text-green-400' : 
            finalGrade >= 80 ? 'text-yellow-400' : 
            finalGrade >= 70 ? 'text-orange-400' : 'text-red-400'
          }`}>
            {getLetterGrade(finalGrade)}
          </div>
          <div className="text-sm text-gray-300">
            <div>Final Grade: {finalGrade.toFixed(1)}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Interactive HTML Builder
const HTMLBuilder = () => {
  const [selectedElement, setSelectedElement] = useState(null);
  const [previewCode, setPreviewCode] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>Welcome to my first webpage.</p>
</body>
</html>`);

  const elements = [
    { tag: 'header', description: 'Page header section', example: '<header>\n  <h1>Site Title</h1>\n</header>' },
    { tag: 'nav', description: 'Navigation menu', example: '<nav>\n  <ul>\n    <li><a href="#home">Home</a></li>\n  </ul>\n</nav>' },
    { tag: 'main', description: 'Main content area', example: '<main>\n  <p>Main content goes here</p>\n</main>' },
    { tag: 'section', description: 'Content section', example: '<section>\n  <h2>About Us</h2>\n  <p>Content...</p>\n</section>' },
    { tag: 'footer', description: 'Page footer', example: '<footer>\n  <p>&copy; 2024</p>\n</footer>' }
  ];

  const addElement = (element) => {
    const newElement = element.example;
    const bodyIndex = previewCode.indexOf('</body>');
    const newCode = previewCode.slice(0, bodyIndex) + '    ' + newElement + '\n' + previewCode.slice(bodyIndex);
    setPreviewCode(newCode);
  };

  return (
    <div className="bg-white/10 backdrop-blur rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-4">🔨 Interactive HTML Builder</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">HTML Elements</h4>
          <div className="space-y-2 mb-4">
            {elements.map((element, index) => (
              <button
                key={index}
                onClick={() => addElement(element)}
                onMouseEnter={() => setSelectedElement(element)}
                onMouseLeave={() => setSelectedElement(null)}
                className="w-full text-left p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
              >
                <div className="font-mono text-blue-300">{'<' + element.tag + '>'}</div>
                <div className="text-sm text-white/70">{element.description}</div>
              </button>
            ))}
          </div>
          
          {selectedElement && (
            <div className="bg-white/5 rounded-lg p-3 animate-fade-in">
              <h5 className="font-semibold text-white mb-2">Preview:</h5>
              <CodeBlock code={selectedElement.example} showCopy={false} />
            </div>
          )}
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Live Code</h4>
          <CodeBlock code={previewCode} filename="index.html" />
          <button
            onClick={() => setPreviewCode(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Webpage</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>Welcome to my first webpage.</p>
</body>
</html>`)}
            className="mt-3 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            🔄 Reset
          </button>
        </div>
      </div>
    </div>
  );
};

// CSS Playground
const CSSPlayground = () => {
  const [selectedProperty, setSelectedProperty] = useState('color');
  const [propertyValue, setPropertyValue] = useState('#667eea');
  
  const cssProperties = {
    color: { type: 'color', default: '#667eea', label: 'Text Color' },
    backgroundColor: { type: 'color', default: '#f4f4f4', label: 'Background Color' },
    fontSize: { type: 'range', min: 12, max: 48, default: 24, unit: 'px', label: 'Font Size' },
    padding: { type: 'range', min: 0, max: 50, default: 20, unit: 'px', label: 'Padding' },
    borderRadius: { type: 'range', min: 0, max: 50, default: 10, unit: 'px', label: 'Border Radius' }
  };

  const generateCSS = () => {
    let css = `.demo-element {\n`;
    Object.entries(cssProperties).forEach(([prop, config]) => {
      const value = prop === selectedProperty ? propertyValue : config.default;
      const unit = config.unit || '';
      css += `  ${prop.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value}${unit};\n`;
    });
    css += `  transition: all 0.3s ease;\n}`;
    return css;
  };

  return (
    <div className="bg-white/10 backdrop-blur rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-4">🎨 Interactive CSS Playground</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">CSS Properties</h4>
          
          <div className="space-y-4 mb-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">Property</label>
              <select
                value={selectedProperty}
                onChange={(e) => {
                  setSelectedProperty(e.target.value);
                  setPropertyValue(cssProperties[e.target.value].default);
                }}
                className="w-full bg-gray-700 text-white rounded-lg px-3 py-2"
              >
                {Object.entries(cssProperties).map(([prop, config]) => (
                  <option key={prop} value={prop}>{config.label}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                {cssProperties[selectedProperty].label}: {propertyValue}{cssProperties[selectedProperty].unit || ''}
              </label>
              {cssProperties[selectedProperty].type === 'color' && (
                <input
                  type="color"
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(e.target.value)}
                  className="w-full h-10 bg-gray-700 rounded-lg"
                />
              )}
              {cssProperties[selectedProperty].type === 'range' && (
                <input
                  type="range"
                  min={cssProperties[selectedProperty].min}
                  max={cssProperties[selectedProperty].max}
                  value={propertyValue}
                  onChange={(e) => setPropertyValue(e.target.value)}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
              )}
            </div>
          </div>
          
          <CodeBlock code={generateCSS()} filename="styles.css" />
        </div>
        
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Live Preview</h4>
          <div className="bg-white/5 rounded-lg p-6 mb-4">
            <div
              className="demo-element inline-block"
              style={{
                color: selectedProperty === 'color' ? propertyValue : cssProperties.color.default,
                backgroundColor: selectedProperty === 'backgroundColor' ? propertyValue : cssProperties.backgroundColor.default,
                fontSize: `${selectedProperty === 'fontSize' ? propertyValue : cssProperties.fontSize.default}px`,
                padding: `${selectedProperty === 'padding' ? propertyValue : cssProperties.padding.default}px`,
                borderRadius: `${selectedProperty === 'borderRadius' ? propertyValue : cssProperties.borderRadius.default}px`,
                transition: 'all 0.3s ease'
              }}
            >
              Hello CSS!
            </div>
          </div>
          
          <div className="bg-white/5 rounded-lg p-4">
            <h5 className="font-semibold text-white mb-2">Generated HTML:</h5>
            <CodeBlock 
              code={`<div class="demo-element">Hello CSS!</div>`} 
              showCopy={false} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Advanced HTML/CSS Interactive Demo
// Interactive Instagram Demo Component
const InteractiveInstagramDemo = () => {
  const [activeFlow, setActiveFlow] = useState(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [likes, setLikes] = useState(1247);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState([
    { user: 'sarah_chen', text: 'Amazing shot! 📸', time: '2h' },
    { user: 'mike_dev', text: 'Love the colors!', time: '3h' },
    { user: 'alex_photographer', text: 'Where is this? 🌆', time: '5h' }
  ]);
  const [newComment, setNewComment] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  const flowSteps = {
    like: [
      {
        tier: 'frontend',
        title: 'User Clicks Like',
        description: 'React component handles click event',
        data: '{ action: "like", postId: "12345" }',
        color: 'from-green-500 to-green-600'
      },
      {
        tier: 'frontend',
        title: 'Send API Request',
        description: 'Axios sends HTTP POST request',
        data: 'POST /api/posts/12345/like\nHeaders: { Authorization: "Bearer jwt..." }',
        color: 'from-green-500 to-green-600'
      },
      {
        tier: 'backend',
        title: 'Authenticate User',
        description: 'Express middleware verifies JWT token',
        data: 'JWT decoded → userId: 678',
        color: 'from-orange-500 to-orange-600'
      },
      {
        tier: 'backend',
        title: 'Update Logic',
        description: 'Check if already liked, toggle state',
        data: 'if (!post.likes.includes(userId)) {\n  post.likes.push(userId)\n}',
        color: 'from-orange-500 to-orange-600'
      },
      {
        tier: 'database',
        title: 'Save to Database',
        description: 'MongoDB updates post document',
        data: 'db.posts.updateOne(\n  { _id: "12345" },\n  { $addToSet: { likes: 678 } }\n)',
        color: 'from-purple-500 to-purple-600'
      },
      {
        tier: 'backend',
        title: 'Send Response',
        description: 'Return updated like count',
        data: '{ success: true, likes: 1248, isLiked: true }',
        color: 'from-orange-500 to-orange-600'
      },
      {
        tier: 'frontend',
        title: 'Update UI',
        description: 'React state updates, UI re-renders',
        data: 'setLikes(1248)\nsetIsLiked(true)',
        color: 'from-green-500 to-green-600'
      }
    ],
    comment: [
      {
        tier: 'frontend',
        title: 'User Submits Comment',
        description: 'Form submission triggers event',
        data: '{ text: "Nice photo!", postId: "12345" }',
        color: 'from-green-500 to-green-600'
      },
      {
        tier: 'frontend',
        title: 'Validate Input',
        description: 'Check comment length and content',
        data: 'if (text.length > 0 && text.length <= 500)',
        color: 'from-green-500 to-green-600'
      },
      {
        tier: 'backend',
        title: 'Authenticate & Validate',
        description: 'Verify user and sanitize input',
        data: 'User: ✓ Valid\nText: ✓ Clean\nLength: ✓ < 500 chars',
        color: 'from-orange-500 to-orange-600'
      },
      {
        tier: 'database',
        title: 'Save Comment',
        description: 'Create new comment document',
        data: 'db.comments.insertOne({\n  postId: "12345",\n  userId: 678,\n  text: "Nice photo!",\n  createdAt: new Date()\n})',
        color: 'from-purple-500 to-purple-600'
      },
      {
        tier: 'backend',
        title: 'Return Data',
        description: 'Send comment with user info',
        data: '{ id: "abc123", user: "you", text: "Nice photo!", time: "now" }',
        color: 'from-orange-500 to-orange-600'
      },
      {
        tier: 'frontend',
        title: 'Add to UI',
        description: 'Prepend comment to list',
        data: 'setComments([newComment, ...comments])',
        color: 'from-green-500 to-green-600'
      }
    ]
  };

  const simulateFlow = async (action) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveFlow(action);
    setCurrentStep(0);
    
    const steps = flowSteps[action];
    
    for (let i = 0; i < steps.length; i++) {
      setCurrentStep(i);
      await new Promise(resolve => setTimeout(resolve, 6000));
    }
    
    // Execute the actual action
    if (action === 'like') {
      setIsLiked(!isLiked);
      setLikes(prev => isLiked ? prev - 1 : prev + 1);
    } else if (action === 'comment' && newComment.trim()) {
      setComments(prev => [
        { user: 'you', text: newComment, time: 'now' },
        ...prev
      ]);
      setNewComment('');
    }
    
    // Reset animation
    setTimeout(() => {
      setActiveFlow(null);
      setCurrentStep(0);
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Mock Instagram Post */}
      <div className="bg-black rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto">
        {/* Header */}
        <div className="flex items-center p-4 border-b border-gray-800">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">TG</span>
          </div>
          <div className="ml-3 flex-1">
            <p className="text-white font-semibold text-sm">tanaygondil</p>
            <p className="text-gray-400 text-xs">Barcelona, Spain</p>
          </div>
          <button className="text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        </div>

        {/* Image */}
        <div className="aspect-square relative overflow-hidden">
          <img 
            src={spainImage}
            alt="Barcelona, Spain"
            className="w-full h-full object-cover object-bottom"
          />
        </div>

        {/* Action Buttons */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => simulateFlow('like')}
                disabled={isAnimating}
                className={`transition-all duration-300 transform ${isAnimating ? 'scale-110' : 'hover:scale-110'} ${isLiked ? 'text-red-500' : 'text-white'} disabled:opacity-50`}
              >
                <svg className="w-7 h-7" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
              <button 
                onClick={() => document.getElementById('comment-input-demo').focus()}
                className="text-white hover:scale-110 transition-transform"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </button>
              <button className="text-white hover:scale-110 transition-transform">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
            <button className="text-white hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
          </div>

          {/* Likes */}
          <p className="text-white font-semibold text-sm mb-2">
            {likes.toLocaleString()} likes
          </p>

          {/* Caption */}
          <div className="mb-3">
            <span className="text-white font-semibold text-sm">tanaygondil</span>
            <span className="text-white text-sm ml-2">
              camp jupiter
            </span>
          </div>

          {/* Comments */}
          <div className="space-y-1 mb-3 max-h-24 overflow-y-auto">
            {comments.slice(0, 3).map((comment, index) => (
              <div key={index} className="text-sm">
                <span className="text-white font-semibold">{comment.user}</span>
                <span className="text-white ml-2">{comment.text}</span>
                <span className="text-gray-400 ml-2 text-xs">{comment.time}</span>
              </div>
            ))}
          </div>

          {/* Add Comment */}
          <div className="flex items-center space-x-2">
            <input
              id="comment-input-demo"
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              disabled={isAnimating}
              className="flex-1 bg-transparent border-none outline-none text-white text-sm placeholder-gray-400 disabled:opacity-50"
              onKeyPress={(e) => {
                if (e.key === 'Enter' && newComment.trim() && !isAnimating) {
                  simulateFlow('comment');
                }
              }}
            />
            {newComment.trim() && (
              <button
                onClick={() => simulateFlow('comment')}
                disabled={isAnimating}
                className="text-blue-400 text-sm font-semibold hover:text-blue-300 disabled:opacity-50"
              >
                Post
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Flow Visualization */}
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">Three-Tier Data Flow</h3>
          <p className="text-blue-200">
            {activeFlow ? `${activeFlow === 'like' ? 'Like' : 'Comment'} Request Pipeline` : 'Click an action to see the magic happen!'}
          </p>
        </div>

        {/* Architecture Tiers */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className={`bg-green-500/20 border-2 rounded-xl p-4 text-center transition-all duration-500 ${
            activeFlow && flowSteps[activeFlow][currentStep]?.tier === 'frontend' 
              ? 'border-green-400 bg-green-500/30 shadow-lg shadow-green-500/20 scale-105' 
              : 'border-green-500/30'
          }`}>
            <div className="text-3xl mb-2">🎨</div>
            <div className="text-white font-bold">Frontend</div>
            <div className="text-green-200 text-xs">React App</div>
          </div>

          <div className={`bg-orange-500/20 border-2 rounded-xl p-4 text-center transition-all duration-500 ${
            activeFlow && flowSteps[activeFlow][currentStep]?.tier === 'backend' 
              ? 'border-orange-400 bg-orange-500/30 shadow-lg shadow-orange-500/20 scale-105' 
              : 'border-orange-500/30'
          }`}>
            <div className="text-3xl mb-2">⚙️</div>
            <div className="text-white font-bold">Backend</div>
            <div className="text-orange-200 text-xs">Express Server</div>
          </div>

          <div className={`bg-purple-500/20 border-2 rounded-xl p-4 text-center transition-all duration-500 ${
            activeFlow && flowSteps[activeFlow][currentStep]?.tier === 'database' 
              ? 'border-purple-400 bg-purple-500/30 shadow-lg shadow-purple-500/20 scale-105' 
              : 'border-purple-500/30'
          }`}>
            <div className="text-3xl mb-2">🗄️</div>
            <div className="text-white font-bold">Database</div>
            <div className="text-purple-200 text-xs">MongoDB</div>
          </div>
        </div>

        {/* Current Step */}
        {activeFlow && (
          <div className="bg-gray-900/50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${flowSteps[activeFlow][currentStep]?.color} mr-3`}></div>
              <div>
                <div className="text-white font-bold">
                  Step {currentStep + 1}: {flowSteps[activeFlow][currentStep]?.title}
                </div>
                <div className="text-gray-300 text-sm">
                  {flowSteps[activeFlow][currentStep]?.description}
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="text-gray-400 text-xs mb-2">Data/Code:</div>
              <pre className="text-green-300 text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                {flowSteps[activeFlow][currentStep]?.data}
              </pre>
            </div>
          </div>
        )}

        {/* Progress Steps */}
        {activeFlow && (
          <div className="flex justify-center space-x-2">
            {flowSteps[activeFlow].map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index <= currentStep ? 'bg-blue-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        )}

        {!activeFlow && (
          <div className="text-center text-blue-200 mt-8">
            <div className="text-4xl mb-4">👆</div>
            <p className="text-lg">Try liking the post or adding a comment!</p>
            <p className="text-sm text-blue-300 mt-2">
              Watch how each interaction flows through all three tiers
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const AdvancedHTMLCSSDemo = () => {
  const [activeTab, setActiveTab] = useState('modern-features');
  const [animationPlaying, setAnimationPlaying] = useState(false);

  const modernFeatures = {
    'css-grid': {
      title: 'CSS Grid Layout',
      description: 'Create complex 2D layouts with ease',
      code: `.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.grid-item {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 2rem;
  border-radius: 10px;
  color: white;
}

/* Responsive without media queries! */
.grid-item:first-child {
  grid-column: span 2; /* Take up 2 columns */
}`
    },
    'css-variables': {
      title: 'CSS Custom Properties (Variables)',
      description: 'Reusable values for consistent theming',
      code: `:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --text-color: #333;
  --background-color: #f4f4f4;
  --border-radius: 10px;
  --box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.card {
  background: var(--background-color);
  color: var(--text-color);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
}

.button {
  background: linear-gradient(135deg, 
    var(--primary-color), 
    var(--secondary-color)
  );
}

/* Easy theme switching! */
[data-theme="dark"] {
  --background-color: #2d3748;
  --text-color: #e2e8f0;
}`
    },
    'animations': {
      title: 'CSS Animations & Transitions',
      description: 'Smooth, performant animations',
      code: `/* Keyframe animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

/* Smooth transitions */
.button {
  background: var(--primary-color);
  transform: translateY(0);
  transition: all 0.3s ease;
}

.button:hover {
  background: var(--secondary-color);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

/* Loading spinner */
@keyframes spin {
  to { transform: rotate(360deg); }
}

.loading {
  animation: spin 1s linear infinite;
}`
    },
    'responsive': {
      title: 'Modern Responsive Design',
      description: 'Mobile-first approach with container queries',
      code: `/* Mobile-first approach */
.container {
  width: 100%;
  padding: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    max-width: 768px;
    margin: 0 auto;
    padding: 2rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    padding: 3rem;
  }
}

/* Container queries (cutting-edge!) */
@container (min-width: 400px) {
  .card {
    display: flex;
    align-items: center;
  }
}

/* Fluid typography */
.title {
  font-size: clamp(1.5rem, 4vw, 3rem);
}

/* Aspect ratio */
.video-container {
  aspect-ratio: 16 / 9;
  background: #000;
}`
    }
  };

  const bestPractices = [
    {
      title: 'Semantic HTML',
      description: 'Use meaningful HTML elements for better accessibility and SEO',
      tip: 'Use <article>, <section>, <nav>, <header>, <footer> instead of generic <div>s'
    },
    {
      title: 'CSS Organization',
      description: 'Structure your CSS for maintainability',
      tip: 'Follow the BEM methodology: .block__element--modifier'
    },
    {
      title: 'Performance',
      description: 'Optimize for fast loading and smooth interactions',
      tip: 'Use CSS transform and opacity for animations (they trigger hardware acceleration)'
    },
    {
      title: 'Accessibility',
      description: 'Make your sites usable by everyone',
      tip: 'Ensure sufficient color contrast (4.5:1 ratio for normal text)'
    }
  ];

  return (
    <div className="bg-white/10 backdrop-blur rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-6">🚀 Modern CSS Features & Best Practices</h3>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.entries(modernFeatures).map(([key, feature]) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              activeTab === key
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-white/10 text-white/80 hover:bg-white/20'
            }`}
          >
            {feature.title}
          </button>
        ))}
      </div>

      {modernFeatures[activeTab] && (
        <div className="space-y-6">
          <div className="bg-white/5 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-white mb-2">
              {modernFeatures[activeTab].title}
            </h4>
            <p className="text-white/80 mb-4">{modernFeatures[activeTab].description}</p>
            
            <CodeBlock 
              code={modernFeatures[activeTab].code}
              language="css"
              filename={`${activeTab}.css`}
            />
          </div>

          {activeTab === 'animations' && (
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">🎨 Live Animation Demo</h4>
              <div className="flex items-center space-x-4 mb-4">
                <button
                  onClick={() => {
                    setAnimationPlaying(true);
                    setTimeout(() => setAnimationPlaying(false), 1000);
                  }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-2 rounded-lg transition-all duration-300"
                >
                  ▶ Play Animation
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold transition-all duration-500 ${
                      animationPlaying ? 'animate-bounce' : ''
                    }`}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    Box {i}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      <div className="mt-8 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-6">
        <h4 className="text-lg font-bold text-white mb-4">✨ Pro Tips for Modern CSS</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bestPractices.map((practice, index) => (
            <div key={index} className="bg-white/10 rounded-lg p-4">
              <h5 className="font-semibold text-white mb-2">{practice.title}</h5>
              <p className="text-white/70 text-sm mb-2">{practice.description}</p>
              <div className="text-xs text-green-300 bg-green-500/20 rounded px-2 py-1">
                💡 {practice.tip}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// System Integration Demo
const SystemIntegrationDemo = () => {
  const [selectedScenario, setSelectedScenario] = useState('user-posts-photo');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);

  const scenarios = {
    'user-posts-photo': {
      title: 'User Posts a Photo',
      description: 'Complete journey from user action to data persistence',
      steps: [
        { tier: 'frontend', title: 'User Selection', description: 'User selects image and writes caption', details: 'File input, form validation, image preview' },
        { tier: 'frontend', title: 'Client Processing', description: 'Image compression and preview generation', details: 'Canvas API, file size optimization' },
        { tier: 'frontend', title: 'API Request', description: 'POST to /api/posts with FormData', details: 'multipart/form-data, progress tracking' },
        { tier: 'backend', title: 'Authentication', description: 'Verify JWT token and user permissions', details: 'JWT decode, user lookup, rate limiting' },
        { tier: 'backend', title: 'Validation', description: 'Check file type, size, and content', details: 'MIME type validation, malware scanning' },
        { tier: 'backend', title: 'File Storage', description: 'Upload to cloud storage (AWS S3)', details: 'Secure upload, CDN distribution' },
        { tier: 'database', title: 'Data Persistence', description: 'Store post metadata in MongoDB', details: 'Document creation, indexing, relationships' },
        { tier: 'backend', title: 'Notifications', description: 'Notify followers of new post', details: 'Background job queue, push notifications' },
        { tier: 'frontend', title: 'UI Update', description: 'Add post to feed instantly', details: 'Optimistic updates, cache invalidation' }
      ]
    },
    'user-login': {
      title: 'User Login Process',
      description: 'Secure authentication flow with JWT tokens',
      steps: [
        { tier: 'frontend', title: 'Form Submission', description: 'User enters email and password', details: 'Input validation, form handling' },
        { tier: 'frontend', title: 'API Request', description: 'POST to /api/auth/login', details: 'HTTPS, credential transmission' },
        { tier: 'backend', title: 'Input Validation', description: 'Sanitize and validate input', details: 'SQL injection prevention, XSS protection' },
        { tier: 'database', title: 'User Lookup', description: 'Find user by email address', details: 'Indexed query, case-insensitive search' },
        { tier: 'backend', title: 'Password Verification', description: 'Compare with stored hash', details: 'bcrypt comparison, timing attack prevention' },
        { tier: 'backend', title: 'Token Generation', description: 'Create JWT with user data', details: 'Payload, expiration, signing' },
        { tier: 'frontend', title: 'Token Storage', description: 'Store JWT securely', details: 'HttpOnly cookies vs localStorage' },
        { tier: 'frontend', title: 'Redirect', description: 'Navigate to dashboard', details: 'Route protection, state management' }
      ]
    },
    'real-time-chat': {
      title: 'Real-time Chat Message',
      description: 'WebSocket communication for instant messaging',
      steps: [
        { tier: 'frontend', title: 'Message Input', description: 'User types and sends message', details: 'Real-time typing indicators' },
        { tier: 'frontend', title: 'WebSocket Send', description: 'Emit message via socket connection', details: 'Binary vs text frames' },
        { tier: 'backend', title: 'Message Receipt', description: 'Server receives WebSocket message', details: 'Connection pooling, load balancing' },
        { tier: 'backend', title: 'Authentication', description: 'Verify user permissions for chat', details: 'Socket middleware, room access' },
        { tier: 'database', title: 'Message Storage', description: 'Persist message in database', details: 'Message history, search indexing' },
        { tier: 'backend', title: 'Broadcasting', description: 'Send to all connected clients', details: 'Room-based distribution' },
        { tier: 'frontend', title: 'UI Update', description: 'Display message in all clients', details: 'Smooth scrolling, notification sounds' }
      ]
    }
  };

  const playScenario = () => {
    if (isPlaying) return;
    
    setIsPlaying(true);
    setCurrentStep(0);
    
    const steps = scenarios[selectedScenario].steps;
    
    const interval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= steps.length - 1) {
          clearInterval(interval);
          setTimeout(() => {
            setIsPlaying(false);
            setCurrentStep(-1);
          }, 1000);
          return prev;
        }
        return prev + 1;
      });
    }, 1500);
  };

  const getTierColor = (tier) => {
    switch (tier) {
      case 'frontend': return 'green';
      case 'backend': return 'orange';
      case 'database': return 'purple';
      default: return 'gray';
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-6">🔄 System Integration & Data Flow</h3>
      
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-white mb-3">Select a Scenario</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {Object.entries(scenarios).map(([key, scenario]) => (
            <button
              key={key}
              onClick={() => setSelectedScenario(key)}
              className={`p-4 rounded-lg border-2 transition-all duration-300 text-left ${
                selectedScenario === key
                  ? 'border-blue-400 bg-blue-500/20'
                  : 'border-white/20 bg-white/5 hover:border-white/40'
              }`}
            >
              <h5 className="font-semibold text-white mb-1">{scenario.title}</h5>
              <p className="text-white/70 text-sm">{scenario.description}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white/5 rounded-lg p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-bold text-white">
            {scenarios[selectedScenario].title} - Step by Step
          </h4>
          <button
            onClick={playScenario}
            disabled={isPlaying}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 text-white px-4 py-2 rounded-lg transition-all duration-300"
          >
            {isPlaying ? '⏸ Playing...' : '▶ Play Animation'}
          </button>
        </div>

        <div className="space-y-3">
          {scenarios[selectedScenario].steps.map((step, index) => {
            const tierColor = getTierColor(step.tier);
            const isActive = currentStep === index;
            const isPast = currentStep > index;
            
            return (
              <div
                key={index}
                className={`p-4 rounded-lg border-2 transition-all duration-500 ${
                  isActive 
                    ? `border-${tierColor}-400 bg-${tierColor}-500/30 scale-105 shadow-lg`
                    : isPast
                    ? `border-${tierColor}-400/50 bg-${tierColor}-500/10`
                    : 'border-white/20 bg-white/5'
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    isActive || isPast
                      ? `bg-${tierColor}-500 text-white`
                      : 'bg-gray-600 text-gray-300'
                  }`}>
                    {index + 1}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        tierColor === 'green' ? 'bg-green-600/30 text-green-200' :
                        tierColor === 'orange' ? 'bg-orange-600/30 text-orange-200' :
                        'bg-purple-600/30 text-purple-200'
                      }`}>
                        {step.tier}
                      </span>
                      <h5 className="font-semibold text-white">{step.title}</h5>
                    </div>
                    
                    <p className="text-white/80 text-sm mb-2">{step.description}</p>
                    
                    {(isActive || isPast) && (
                      <div className="text-white/60 text-xs bg-white/10 rounded px-3 py-1 animate-fade-in">
                        🔧 Technical details: {step.details}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-red-500/20 rounded-lg p-6">
          <h4 className="text-xl font-semibold mb-4 text-red-300">⚡ Performance Considerations</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li>• <strong>CDNs:</strong> Serve static assets from edge locations globally</li>
            <li>• <strong>Database Indexing:</strong> Optimize query performance with proper indexes</li>
            <li>• <strong>Caching:</strong> Redis for session data, browser cache for assets</li>
            <li>• <strong>Image Optimization:</strong> WebP format, responsive images, lazy loading</li>
            <li>• <strong>API Rate Limiting:</strong> Prevent abuse and ensure fair usage</li>
            <li>• <strong>Connection Pooling:</strong> Reuse database connections efficiently</li>
          </ul>
        </div>
        
        <div className="bg-orange-500/20 rounded-lg p-6">
          <h4 className="text-xl font-semibold mb-4 text-orange-300">🔐 Security Best Practices</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li>• <strong>Input Validation:</strong> Sanitize all user inputs on client and server</li>
            <li>• <strong>Authentication:</strong> JWT tokens with proper expiration and refresh</li>
            <li>• <strong>Authorization:</strong> Role-based access control (RBAC)</li>
            <li>• <strong>HTTPS Everywhere:</strong> Encrypt data in transit</li>
            <li>• <strong>SQL Injection Prevention:</strong> Parameterized queries, ORMs</li>
            <li>• <strong>XSS Protection:</strong> Content Security Policy, input escaping</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

// Class 1 Slides Main Component
const Class1Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Inject custom styles
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = customStyles;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  // Slide content data following README exactly
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
              Class 1: Syllabus and Introduction to Web Applications
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
      id: 'welcome-course-website',
      title: 'Welcome to CS390',
      content: (
        <div className="text-center space-y-12">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white mb-8">
              Welcome to CS390!
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="text-2xl text-blue-200 leading-relaxed">
                This entire course page and all of the slides are a website.
              </div>
              
              <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
                <div className="text-lg text-white/80 mb-6">
                  Everything you see here - from these slides to course materials - 
                  demonstrates the kind of interactive web applications you'll learn to build!
                </div>
              </div>

              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border border-blue-400/30">
                <h3 className="text-2xl font-bold text-blue-300 mb-6">📅 Class Schedule</h3>
                <div className="text-lg text-white/90 mb-4">
                  We'll be meeting <strong>thrice every week</strong>:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-xl font-bold text-white">Monday</div>
                    <div className="text-blue-200 text-sm">Regular Class</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4 text-center border-2 border-yellow-400/30">
                    <div className="text-xl font-bold text-white">Tuesday</div>
                    <div className="text-yellow-200 text-sm font-medium">PSO in PRCE 277</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-xl font-bold text-white">Wednesday</div>
                    <div className="text-blue-200 text-sm">Regular Class</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-teal-700'
    },
    {
      id: 'contact-information',
      title: 'Contact Information',
      content: (
        <div className="text-center space-y-12">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white mb-8">
              Contact Information
            </h2>
            
            <div className="space-y-6">
              <div className="text-2xl text-blue-200 mb-8">
                My email is
              </div>
              
              <a 
                href="mailto:tgondil@purdue.edu" 
                className="text-4xl font-mono text-white bg-blue-600/20 px-8 py-4 rounded-lg border border-blue-400/30 hover:bg-blue-600/30 transition-colors inline-block"
              >
                tgondil@purdue.edu
              </a>
              
              <div className="text-2xl text-blue-200 mt-8">
                So any questions you have, direct to my email
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-slate-600 to-blue-700'
    },
    {
      id: 'pso-opportunities',
      title: 'PSO Integration & Opportunities',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">🎯 PSO Integration & Opportunities</h2>
          <PSOInformation />
        </div>
      ),
      bgGradient: 'from-purple-600 to-indigo-700'
    },
    {
      id: 'grading-system',
      title: 'Grading System Breakdown',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">📊 Grading System Breakdown</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-blue-500/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-300">35%</div>
              <div className="text-sm text-white/80">Weekly PSOs</div>
              <div className="text-xs text-white/60 mt-1">11 assignments</div>
            </div>
            <div className="bg-green-500/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-300">25%</div>
              <div className="text-sm text-white/80">Mini-Projects</div>
              <div className="text-xs text-white/60 mt-1">3 milestones</div>
            </div>
            <div className="bg-purple-500/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-300">30%</div>
              <div className="text-sm text-white/80">Capstone Project</div>
              <div className="text-xs text-white/60 mt-1">Startup application</div>
            </div>
            <div className="bg-yellow-500/20 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-yellow-300">10%</div>
              <div className="text-sm text-white/80">Participation</div>
              <div className="text-xs text-white/60 mt-1">Engagement & labs</div>
            </div>
          </div>
          
          <GradeCalculator />
        </div>
      ),
      bgGradient: 'from-cyan-600 to-blue-700'
    },
    {
      id: 'extra-credit',
      title: 'Extra Credit Opportunities',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">🎁 Extra Credit Opportunities</h2>
          <p className="text-xl text-green-100 text-center mb-8">
            Ways to boost your grade throughout the semester!
          </p>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border border-green-400/30">
              <h3 className="text-2xl font-bold text-green-300 mb-6">🤝 Meet Someone New and Get Extra Credit</h3>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">How It Works</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• <strong>First 10 minutes</strong> of every class</li>
                    <li>• <strong>Talk to someone new</strong> you haven't met before</li>
                    <li>• <strong>Submit a form</strong> about your conversation</li>
                    <li>• <strong>Build connections</strong> for your final project team</li>
                  </ul>
                </div>
                <div className="text-center p-4 bg-green-600/20 rounded-lg border border-green-400/30">
                  <div className="text-3xl font-bold text-green-200">+8%</div>
                  <div className="text-green-300 font-medium">Total Possible</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-emerald-600 to-green-700'
    },
    {
      id: 'course-philosophy',
      title: 'Course Philosophy',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">🎯 Course Philosophy</h2>
          
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur rounded-xl p-8 border border-green-400/30 mb-8">
            <h3 className="text-2xl font-bold text-green-300 mb-6 text-center">🎯 My Goal: Your Success</h3>
            <p className="text-white/90 text-lg text-center mb-4">
              The ideal average grade for this class is an <strong className="text-green-300">A</strong>.
            </p>
            <p className="text-white/80 text-center">
              I will provide you with all of the tools needed for you to achieve this.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-yellow-300">📋 Course Expectations</h3>
            
            <div className="space-y-6">
              <div className="bg-blue-500/20 rounded-lg p-6 border border-blue-400/30">
                <h4 className="text-lg font-semibold text-blue-300 mb-3">🎯 PSO Focus</h4>
                <p className="text-white/80">
                  Complete PSOs independently to maximize your learning. These exercises are designed to be manageable and build your skills progressively.
                </p>
              </div>

              <div className="bg-purple-500/20 rounded-lg p-6 border border-purple-400/30">
                <h4 className="text-lg font-semibold text-purple-300 mb-3">💼 Portfolio Development</h4>
                <p className="text-white/80">
                  Apply course concepts to build impressive portfolio projects for your resume. 
                  Master coding fundamentals before relying on AI assistance.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-6 border border-green-400/30">
                <h4 className="text-lg font-semibold text-green-300 mb-3">🚀 Final Capstone: Startup Application</h4>
                <p className="text-white/80 mb-3">
                  Build a monetizable application as your final project. 
                  Develop a complete startup idea from concept to launch over 4 weeks.
                </p>
                <p className="text-white/70 text-sm mb-2">
                  AI tools are welcome for the final project, provided you understand the implementation.
                </p>
                <p className="text-green-300 text-sm font-medium">
                  📅 Final 4 weeks of the semester - details provided later
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-blue-700'
    },
    {
      id: 'web-applications',
      title: 'What is a Web Application?',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">🌐 What is a Web Application?</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-red-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-300">📄 Traditional Website</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center">
                  <span className="mr-3">📰</span>
                  Static content (news sites, blogs)
                </li>
                <li className="flex items-center">
                  <span className="mr-3">👁️</span>
                  Information consumption
                </li>
                <li className="flex items-center">
                  <span className="mr-3">🔒</span>
                  Limited user interaction
                </li>
                <li className="flex items-center">
                  <span className="mr-3">📖</span>
                  Read-only experience
                </li>
              </ul>
              
              <div className="mt-4 p-3 bg-white/10 rounded">
                <h4 className="font-medium text-white mb-2">Examples:</h4>
                <div className="text-sm text-white/70">
                  Company websites, blogs, documentation sites, portfolios
                </div>
              </div>
            </div>
            
            <div className="bg-blue-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-300">⚡ Web Application</h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-center">
                  <span className="mr-3">🎮</span>
                  Dynamic, interactive experiences
                </li>
                <li className="flex items-center">
                  <span className="mr-3">👥</span>
                  User-generated content
                </li>
                <li className="flex items-center">
                  <span className="mr-3">⚡</span>
                  Real-time functionality
                </li>
                <li className="flex items-center">
                  <span className="mr-3">🎯</span>
                  Personalized experiences
                </li>
              </ul>
              
              <div className="mt-4 p-3 bg-white/10 rounded">
                <h4 className="font-medium text-white mb-2">Examples:</h4>
                <div className="text-sm text-white/70">
                  Social media, online banking, streaming platforms, productivity tools
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-purple-300">🚀 Key Differences</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl mb-2">🔄</div>
                <h4 className="font-medium text-white mb-2">State Management</h4>
                <p className="text-white/70 text-sm">Applications maintain user state and remember interactions</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">💾</div>
                <h4 className="font-medium text-white mb-2">Data Persistence</h4>
                <p className="text-white/70 text-sm">User data is stored and retrieved from databases</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🔐</div>
                <h4 className="font-medium text-white mb-2">Authentication</h4>
                <p className="text-white/70 text-sm">Users log in and have personalized experiences</p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-teal-700'
    },
    {
      id: 'three-tier-overview',
      title: 'Three-Tier Architecture Overview',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">🏗️ Three-Tier Architecture</h2>
          <p className="text-xl text-blue-100 text-center mb-8">
            Modern web applications are built using a three-tier architecture that separates concerns and enables scalability.
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 text-center border border-green-400/30">
                <div className="text-5xl mb-4">🎨</div>
                <h3 className="text-2xl font-bold text-green-300 mb-4">Frontend</h3>
                <p className="text-white/80">Presentation Tier</p>
                <p className="text-green-200 text-sm mt-2">What users see and interact with</p>
              </div>
              
              <div className="bg-orange-500/20 backdrop-blur rounded-xl p-8 text-center border border-orange-400/30">
                <div className="text-5xl mb-4">⚙️</div>
                <h3 className="text-2xl font-bold text-orange-300 mb-4">Backend</h3>
                <p className="text-white/80">Logic Tier</p>
                <p className="text-orange-200 text-sm mt-2">Server-side processing and business logic</p>
              </div>
              
              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-8 text-center border border-purple-400/30">
                <div className="text-5xl mb-4">🗄️</div>
                <h3 className="text-2xl font-bold text-purple-300 mb-4">Database</h3>
                <p className="text-white/80">Data Tier</p>
                <p className="text-purple-200 text-sm mt-2">Persistent data storage and retrieval</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-4 text-center">Why Separate into Tiers?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-300 mb-3">Benefits:</h4>
                  <ul className="space-y-2 text-white/80 text-sm">
                    <li>• <strong>Separation of Concerns</strong> - Each tier has a specific responsibility</li>
                    <li>• <strong>Scalability</strong> - Scale each tier independently as needed</li>
                    <li>• <strong>Maintainability</strong> - Easier to update and debug specific layers</li>
                    <li>• <strong>Team Collaboration</strong> - Different teams can work on different tiers</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-300 mb-3">Real-World Example:</h4>
                  <p className="text-white/80 text-sm mb-2">
                    Think of a restaurant:
                  </p>
                  <ul className="space-y-1 text-white/70 text-sm">
                    <li>🎨 <strong>Frontend:</strong> Dining room & waiters (customer interface)</li>
                    <li>⚙️ <strong>Backend:</strong> Kitchen & chefs (food preparation)</li>
                    <li>🗄️ <strong>Database:</strong> Pantry & storage (ingredient storage)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-slate-600 to-gray-700'
    },
    {
      id: 'frontend-overview',
      title: 'Frontend Development - Overview',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">🎨 Frontend Development</h2>
          <p className="text-2xl text-green-100 text-center mb-8">
            The part of a web application that users see and interact with
          </p>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Simple Analogy */}
            <div className="bg-green-500/20 backdrop-blur rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-green-300 mb-4">🏪 Think of it like a store...</h3>
              <p className="text-xl text-white mb-4">
                The frontend is like the <strong>storefront</strong> - it's what customers see, the layout of products, 
                the signs, and how they interact with everything.
              </p>
              <p className="text-green-200">
                Just like a store needs to be attractive, easy to navigate, and functional!
              </p>
            </div>

            {/* What Frontend Does */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">What Does Frontend Do?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-green-500/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-green-300 mb-2">👀 Visual Elements</h4>
                    <ul className="text-white/80 space-y-1 text-sm">
                      <li>• Colors, fonts, and layout</li>
                      <li>• Buttons, menus, and forms</li>
                      <li>• Images and videos</li>
                      <li>• Overall design and branding</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-500/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-green-300 mb-2">🖱️ User Interactions</h4>
                    <ul className="text-white/80 space-y-1 text-sm">
                      <li>• Clicking buttons</li>
                      <li>• Filling out forms</li>
                      <li>• Scrolling and navigation</li>
                      <li>• Hover effects and animations</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-green-500/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-green-300 mb-2">📱 Device Compatibility</h4>
                    <ul className="text-white/80 space-y-1 text-sm">
                      <li>• Works on phones</li>
                      <li>• Works on tablets</li>
                      <li>• Works on computers</li>
                      <li>• Adapts to screen sizes</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-500/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-green-300 mb-2">⚡ Real-time Updates</h4>
                    <ul className="text-white/80 space-y-1 text-sm">
                      <li>• New messages appearing</li>
                      <li>• Live notifications</li>
                      <li>• Instant feedback</li>
                      <li>• Dynamic content changes</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-teal-700'
    },
    {
      id: 'frontend-in-action',
      title: 'Frontend Development - In Action',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">🎨 Frontend in Action</h2>
          <p className="text-2xl text-green-100 text-center mb-8">
            Real examples and technologies you'll master
          </p>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Real Examples */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Frontend Examples You Know</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">📸</div>
                  <h4 className="font-semibold text-white mb-2">Instagram</h4>
                  <p className="text-green-200 text-sm">Photo grid, stories, like buttons, comment forms</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-3">🛒</div>
                  <h4 className="font-semibold text-white mb-2">Amazon</h4>
                  <p className="text-green-200 text-sm">Product listings, search bar, shopping cart, checkout</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-3">🎬</div>
                  <h4 className="font-semibold text-white mb-2">Netflix</h4>
                  <p className="text-green-200 text-sm">Video player, movie rows, search, user profiles</p>
                </div>
              </div>
            </div>

            {/* Technologies We'll Learn */}
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Frontend Technologies We'll Learn</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-green-300 mb-4">Foundation Skills:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🏗️</span>
                      <div>
                        <div className="font-semibold text-white">HTML</div>
                        <div className="text-sm text-green-200">Structure - like the frame of a house</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🎨</span>
                      <div>
                        <div className="font-semibold text-white">CSS</div>
                        <div className="text-sm text-green-200">Styling - like paint and decorations</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">⚡</span>
                      <div>
                        <div className="font-semibold text-white">JavaScript</div>
                        <div className="text-sm text-green-200">Functionality - like the electrical system</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-4">Advanced Tools:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">⚛️</span>
                      <div>
                        <div className="font-semibold text-white">React.js</div>
                        <div className="text-sm text-blue-200">Building blocks for complex interfaces</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🌈</span>
                      <div>
                        <div className="font-semibold text-white">Tailwind CSS</div>
                        <div className="text-sm text-blue-200">Fast styling system</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-teal-700'
    },
    {
      id: 'backend-overview',
      title: 'Backend Development - Overview',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">⚙️ Backend Development</h2>
          <p className="text-2xl text-orange-100 text-center mb-8">
            The "behind the scenes" logic that makes everything work
          </p>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Simple Analogy */}
            <div className="bg-orange-500/20 backdrop-blur rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-orange-300 mb-4">🏭 Think of it like a restaurant kitchen...</h3>
              <p className="text-xl text-white mb-4">
                The backend is like the <strong>kitchen</strong> - customers can't see it, but it's where all the 
                real work happens to prepare and deliver what they ordered.
              </p>
              <p className="text-orange-200">
                The kitchen takes orders, prepares food, manages inventory, and sends meals to the dining room!
              </p>
            </div>

            {/* What Backend Does - Step by Step */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">What Happens When You Click a Button?</h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="bg-orange-500/20 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">1️⃣</div>
                    <h4 className="font-semibold text-orange-300 mb-2">Receives Request</h4>
                    <p className="text-white/80 text-sm">Frontend sends: "User wants to post a photo"</p>
                  </div>
                  
                  <div className="bg-orange-500/20 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">2️⃣</div>
                    <h4 className="font-semibold text-orange-300 mb-2">Checks Permission</h4>
                    <p className="text-white/80 text-sm">Is this user logged in? Are they allowed to post?</p>
                  </div>
                  
                  <div className="bg-orange-500/20 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">3️⃣</div>
                    <h4 className="font-semibold text-orange-300 mb-2">Processes Data</h4>
                    <p className="text-white/80 text-sm">Saves the photo, creates post record, updates database</p>
                  </div>
                  
                  <div className="bg-orange-500/20 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">4️⃣</div>
                    <h4 className="font-semibold text-orange-300 mb-2">Sends Response</h4>
                    <p className="text-white/80 text-sm">Tells frontend: "Success! Post created."</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Responsibilities */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Backend's Main Jobs</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-orange-500/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-orange-300 mb-2">🔐 Security & Authentication</h4>
                    <ul className="text-white/80 space-y-1 text-sm">
                      <li>• Check if users are logged in</li>
                      <li>• Verify passwords</li>
                      <li>• Control who can access what</li>
                      <li>• Keep data safe from hackers</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-500/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-orange-300 mb-2">💾 Data Management</h4>
                    <ul className="text-white/80 space-y-1 text-sm">
                      <li>• Save new information</li>
                      <li>• Find and retrieve data</li>
                      <li>• Update existing records</li>
                      <li>• Delete when needed</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-orange-500/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-orange-300 mb-2">🧮 Business Logic</h4>
                    <ul className="text-white/80 space-y-1 text-sm">
                      <li>• Calculate prices and taxes</li>
                      <li>• Apply discounts and rules</li>
                      <li>• Send notifications</li>
                      <li>• Process payments</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-500/20 rounded-lg p-4">
                    <h4 className="text-lg font-semibold text-orange-300 mb-2">📡 Communication</h4>
                    <ul className="text-white/80 space-y-1 text-sm">
                      <li>• Talk to the frontend</li>
                      <li>• Connect to other services</li>
                      <li>• Send emails and texts</li>
                      <li>• Integrate with APIs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      ),
      bgGradient: 'from-orange-600 to-red-700'
    },
    {
      id: 'backend-in-action',
      title: 'Backend Development - In Action',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">⚙️ Backend in Action</h2>
          <p className="text-2xl text-orange-100 text-center mb-8">
            Real examples and technologies you'll master
          </p>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Real Examples */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Backend Examples You Use Daily</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🛒</div>
                  <h4 className="font-semibold text-white mb-2">Online Shopping</h4>
                  <p className="text-orange-200 text-sm">Checks inventory, calculates shipping, processes payment, sends confirmation email</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-3">💬</div>
                  <h4 className="font-semibold text-white mb-2">Chat Apps</h4>
                  <p className="text-orange-200 text-sm">Delivers messages, stores chat history, manages user status, sends notifications</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl mb-3">🎵</div>
                  <h4 className="font-semibold text-white mb-2">Music Streaming</h4>
                  <p className="text-orange-200 text-sm">Recommends songs, tracks listening history, manages playlists, handles subscriptions</p>
                </div>
              </div>
            </div>

            {/* Technologies We'll Learn */}
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Backend Technologies We'll Learn</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-orange-300 mb-4">Core Tools:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🟢</span>
                      <div>
                        <div className="font-semibold text-white">Node.js</div>
                        <div className="text-sm text-orange-200">Runs JavaScript on the server</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🚂</span>
                      <div>
                        <div className="font-semibold text-white">Express.js</div>
                        <div className="text-sm text-orange-200">Framework for building web servers</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-red-300 mb-4">Key Concepts:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📡</span>
                      <div>
                        <div className="font-semibold text-white">APIs</div>
                        <div className="text-sm text-red-200">How frontend talks to backend</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🔐</span>
                      <div>
                        <div className="font-semibold text-white">Authentication</div>
                        <div className="text-sm text-red-200">Secure user login systems</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-orange-600 to-red-700'
    },
    {
      id: 'database-overview',
      title: 'Database Layer - Overview',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">🗄️ Database Layer</h2>
          <p className="text-2xl text-purple-100 text-center mb-8">
            Where all your app's information is stored permanently
          </p>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Simple Analogy */}
            <div className="bg-purple-500/20 backdrop-blur rounded-xl p-6 text-center">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">🏛️ Think of it like a giant filing cabinet...</h3>
              <p className="text-xl text-white mb-4">
                The database is like a <strong>perfectly organized filing cabinet</strong> that never loses anything. 
                It stores every piece of information and can find it instantly when needed.
              </p>
              <p className="text-purple-200">
                Unlike your messy room, everything has its exact place and can be retrieved in milliseconds!
              </p>
            </div>

            {/* What Data Looks Like */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">What Kind of Information Gets Stored?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-purple-500/20 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">👤</div>
                  <h4 className="font-semibold text-purple-300 mb-3">User Information</h4>
                  <ul className="text-white/80 space-y-1 text-sm text-left">
                    <li>• Name and email</li>
                    <li>• Password (encrypted!)</li>
                    <li>• Profile photo</li>
                    <li>• Account settings</li>
                    <li>• When they joined</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/20 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">📝</div>
                  <h4 className="font-semibold text-purple-300 mb-3">Content Data</h4>
                  <ul className="text-white/80 space-y-1 text-sm text-left">
                    <li>• Posts and photos</li>
                    <li>• Comments and likes</li>
                    <li>• Messages and chats</li>
                    <li>• Videos and files</li>
                    <li>• Shared content</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/20 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">📊</div>
                  <h4 className="font-semibold text-purple-300 mb-3">Activity Data</h4>
                  <ul className="text-white/80 space-y-1 text-sm text-left">
                    <li>• Login history</li>
                    <li>• Purchase records</li>
                    <li>• Search history</li>
                    <li>• App usage stats</li>
                    <li>• Preferences</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Database Operations */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">What Can You Do with a Database?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-purple-500/20 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">📝</div>
                  <h4 className="font-semibold text-purple-300 mb-2">CREATE</h4>
                  <p className="text-white/80 text-sm">Add new information</p>
                  <p className="text-purple-200 text-xs mt-1">New user signs up</p>
                </div>
                
                <div className="bg-purple-500/20 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">👀</div>
                  <h4 className="font-semibold text-purple-300 mb-2">READ</h4>
                  <p className="text-white/80 text-sm">Find and retrieve data</p>
                  <p className="text-purple-200 text-xs mt-1">Show user's posts</p>
                </div>
                
                <div className="bg-purple-500/20 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">✏️</div>
                  <h4 className="font-semibold text-purple-300 mb-2">UPDATE</h4>
                  <p className="text-white/80 text-sm">Change existing info</p>
                  <p className="text-purple-200 text-xs mt-1">User edits profile</p>
                </div>
                
                <div className="bg-purple-500/20 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">🗑️</div>
                  <h4 className="font-semibold text-purple-300 mb-2">DELETE</h4>
                  <p className="text-white/80 text-sm">Remove data</p>
                  <p className="text-purple-200 text-xs mt-1">User deletes a post</p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-purple-200 text-lg">
                  These are called <strong>CRUD operations</strong> - the basic actions every database can do!
                </p>
              </div>
            </div>


          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-indigo-700'
    },
    {
      id: 'database-in-action',
      title: 'Database Layer - In Action',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">🗄️ Database in Action</h2>
          <p className="text-2xl text-purple-100 text-center mb-8">
            Why databases are essential and what technology we'll use
          </p>
          
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Why Databases Are Important */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Are Databases So Important?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl mt-1">💾</span>
                    <div>
                      <h4 className="font-semibold text-purple-300">Permanent Storage</h4>
                      <p className="text-white/80 text-sm">Data stays safe even if the server turns off</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl mt-1">⚡</span>
                    <div>
                      <h4 className="font-semibold text-purple-300">Super Fast</h4>
                      <p className="text-white/80 text-sm">Can find any piece of data in milliseconds</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl mt-1">🔒</span>
                    <div>
                      <h4 className="font-semibold text-purple-300">Secure</h4>
                      <p className="text-white/80 text-sm">Controls who can see and modify what</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl mt-1">📈</span>
                    <div>
                      <h4 className="font-semibold text-purple-300">Scales Up</h4>
                      <p className="text-white/80 text-sm">Can handle millions of users and billions of records</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl mt-1">🔄</span>
                    <div>
                      <h4 className="font-semibold text-purple-300">Reliable</h4>
                      <p className="text-white/80 text-sm">Automatic backups ensure data never gets lost</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl mt-1">🔍</span>
                    <div>
                      <h4 className="font-semibold text-purple-300">Smart Search</h4>
                      <p className="text-white/80 text-sm">Can find complex patterns and relationships in data</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies We'll Learn */}
            <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Database Technology We'll Use</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-6xl mb-4">🍃</div>
                  <h4 className="text-2xl font-semibold text-green-300 mb-4">MongoDB</h4>
                  <p className="text-white/80 mb-4">
                    A modern "NoSQL" database that stores data like JSON objects
                  </p>
                  <ul className="text-purple-200 space-y-2 text-sm">
                    <li>• Easy to learn and use</li>
                    <li>• Flexible data structure</li>
                    <li>• Perfect for web apps</li>
                    <li>• Used by Netflix, Facebook, eBay</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/20 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-purple-300 mb-4">Example Data in MongoDB:</h4>
                  <div className="bg-gray-900/50 rounded-lg p-4 text-left">
                    <pre className="text-green-300 text-sm">
{`{
  "name": "Alex Chen",
  "email": "alex@email.com", 
  "posts": [
    {
      "text": "Having a great day!",
      "likes": 42,
      "date": "2024-01-15"
    }
  ],
  "followers": 156
}`}
                    </pre>
                  </div>
                  <p className="text-purple-200 text-sm mt-3">
                    Clean, readable, and easy to work with!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-indigo-700'
    },
    {
      id: 'instagram-example',
      title: 'Instagram System Example',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">📸 Real-World Example: Instagram</h2>
          <p className="text-xl text-blue-100 text-center mb-8">
            Click like or comment to see the three-tier architecture in action!
          </p>
          <InteractiveInstagramDemo />
        </div>
      ),
      bgGradient: 'from-blue-600 via-purple-600 to-pink-600'
    },
    {
      id: 'mern-stack',
      title: 'MERN Stack',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">🚀 MERN Stack</h2>
          <p className="text-2xl text-blue-100 text-center mb-12">
            The technology stack we'll be learning in this course
          </p>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="bg-gradient-to-br from-green-500/20 to-green-600/30 rounded-xl p-8 text-center border border-green-400/30 hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4">🍃</div>
                <h3 className="text-2xl font-bold text-green-300 mb-4">MongoDB</h3>
                <p className="text-white/80 mb-4">Database</p>
                <ul className="text-sm text-green-200 text-left space-y-1">
                  <li>• NoSQL document database</li>
                  <li>• Flexible JSON-like documents</li>
                  <li>• Scalable and fast</li>
                  <li>• Perfect for modern apps</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-xl p-8 text-center border border-blue-400/30 hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4">🚂</div>
                <h3 className="text-2xl font-bold text-blue-300 mb-4">Express.js</h3>
                <p className="text-white/80 mb-4">Backend Framework</p>
                <ul className="text-sm text-blue-200 text-left space-y-1">
                  <li>• Fast web framework</li>
                  <li>• RESTful API creation</li>
                  <li>• Middleware support</li>
                  <li>• Built on Node.js</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/30 rounded-xl p-8 text-center border border-cyan-400/30 hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4">⚛️</div>
                <h3 className="text-2xl font-bold text-cyan-300 mb-4">React.js</h3>
                <p className="text-white/80 mb-4">Frontend Library</p>
                <ul className="text-sm text-cyan-200 text-left space-y-1">
                  <li>• Component-based UI</li>
                  <li>• Virtual DOM</li>
                  <li>• Reusable components</li>
                  <li>• Rich ecosystem</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/30 rounded-xl p-8 text-center border border-yellow-400/30 hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-4">🟢</div>
                <h3 className="text-2xl font-bold text-yellow-300 mb-4">Node.js</h3>
                <p className="text-white/80 mb-4">Runtime Environment</p>
                <ul className="text-sm text-yellow-200 text-left space-y-1">
                  <li>• JavaScript everywhere</li>
                  <li>• Fast and scalable</li>
                  <li>• NPM package manager</li>
                  <li>• Event-driven architecture</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur rounded-xl p-8 border border-purple-400/30">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">🎯 Why MERN Stack?</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-purple-300 mb-4">Advantages:</h4>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-start">
                      <span className="mr-3 text-purple-400 mt-1">✨</span>
                      <span><strong>JavaScript Everywhere</strong> - Same language for frontend and backend</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-purple-400 mt-1">🚀</span>
                      <span><strong>Fast Development</strong> - Rapid prototyping and deployment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-purple-400 mt-1">📈</span>
                      <span><strong>Highly Scalable</strong> - Handle millions of users</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-purple-400 mt-1">🌍</span>
                      <span><strong>Industry Standard</strong> - Used by Netflix, Facebook, Airbnb</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-blue-300 mb-4">Perfect For:</h4>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-start">
                      <span className="mr-3 text-blue-400 mt-1">💼</span>
                      <span><strong>Startups</strong> - Quick time to market</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-blue-400 mt-1">📱</span>
                      <span><strong>Social Apps</strong> - Real-time features</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-blue-400 mt-1">💰</span>
                      <span><strong>E-commerce</strong> - Dynamic content</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-blue-400 mt-1">🎯</span>
                      <span><strong>Your Portfolio</strong> - Impressive to employers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <div className="bg-gradient-to-r from-green-500/20 to-cyan-500/20 backdrop-blur rounded-xl p-6 border border-white/20 max-w-4xl mx-auto">
                <div className="text-white text-xl mb-3">🎓 By the End of This Course:</div>
                <div className="text-blue-100 text-lg">
                  You'll be able to build complete full-stack applications using the MERN stack, 
                  including your final startup project that you can deploy and potentially monetize!
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-700'
    },
    {
      id: 'html-css-fundamentals',
      title: 'HTML & CSS Fundamentals',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">🔨 HTML & CSS Fundamentals</h2>
          <p className="text-xl text-blue-100 text-center mb-8">
            Building Your First Webpage - Interactive Practice
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <HTMLBuilder />
            </div>
            <div>
              <CSSPlayground />
            </div>
          </div>
          
          <AdvancedHTMLCSSDemo />
        </div>
      ),
      bgGradient: 'from-purple-600 to-pink-700'
    },
    {
      id: 'getting-started',
      title: 'Getting Started & Next Steps',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">🎯 Getting Started</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-green-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-300">✨ This Week: No Homework!</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <span className="mr-3 text-green-400 mt-1">🤝</span>
                    <span>Focus on meeting classmates and building connections</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-green-400 mt-1">💭</span>
                    <span>Start thinking about what kind of startup you'd want to build</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-green-400 mt-1">🚀</span>
                    <span>Begin exploring web development if you're excited to get started</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-blue-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-300">📅 Coming Up Next Week</h3>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li>• Week 2 begins our regular homework assignments</li>
                  <li>• All assignments will be pair programming projects</li>
                  <li>• Use PSO sessions for questions and clarification</li>
                  <li>• First networking extra credit opportunity</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-purple-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-300">🗓️ Semester Timeline</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded">
                    <span className="text-white font-medium">Week 2</span>
                    <span className="text-white/70 text-sm">React fundamentals</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded">
                    <span className="text-white font-medium">Week 4</span>
                    <span className="text-white/70 text-sm">First mini-project (Portfolio)</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded">
                    <span className="text-white font-medium">Week 8</span>
                    <span className="text-white/70 text-sm">Full-stack integration</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10 rounded">
                    <span className="text-white font-medium">Week 12</span>
                    <span className="text-white/70 text-sm">Startup capstone presentations</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-yellow-300">🎉 Ready to Begin?</h3>
                <p className="text-white/80 mb-4">
                  You're about to embark on an exciting journey of building real web applications, 
                  working with amazing teammates, and potentially creating the next big startup idea.
                </p>
                <div className="text-center">
                  <div className="text-3xl mb-2">🚀</div>
                  <p className="text-lg font-semibold text-white">
                    Let's build amazing things together!
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4">
              <h4 className="text-lg font-semibold text-white mb-2">📝 Don't Forget!</h4>
              <p className="text-white/90">
                Fill out the networking reflection form if you talked to someone new today. 
                Every conversation is worth 0.5% extra credit!
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-emerald-600 to-teal-700'
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

export default Class1Slides;