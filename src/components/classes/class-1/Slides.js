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

// Live Poll Component for Course Welcome  
const LivePoll = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [hasVoted, setHasVoted] = useState(false);
  const [results, setResults] = useState({
    'Complete beginner': 15,
    'Some HTML/CSS experience': 35,
    'Built a few websites': 28,
    'JavaScript experience': 18,
    'Backend development': 4
  });

  const handleVote = (option) => {
    if (!hasVoted) {
      setSelectedOption(option);
      setHasVoted(true);
      setResults(prev => ({
        ...prev,
        [option]: prev[option] + 1
      }));
    }
  };

  const totalVotes = Object.values(results).reduce((sum, count) => sum + count, 0);

  return (
    <div className="bg-white/10 backdrop-blur rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-4">📊 Live Poll: Your Web Development Experience?</h3>
      
      {!hasVoted ? (
        <div className="space-y-3">
          {Object.keys(results).map((option, index) => (
            <button
              key={index}
              onClick={() => handleVote(option)}
              className="w-full text-left p-3 bg-white/5 hover:bg-white/10 rounded-lg transition-colors border border-white/20 hover:border-white/40"
            >
              <span className="text-white">{option}</span>
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          <div className="text-green-400 font-semibold mb-4">✓ Thanks for voting! Here are the results:</div>
          {Object.entries(results).map(([option, count], index) => {
            const percentage = ((count / totalVotes) * 100).toFixed(1);
            const isSelected = option === selectedOption;
            
            return (
              <div key={index} className={`p-3 rounded-lg border ${isSelected ? 'border-green-400 bg-green-500/20' : 'border-white/20 bg-white/5'}`}>
                <div className="flex justify-between items-center mb-2">
                  <span className={`${isSelected ? 'text-green-300 font-semibold' : 'text-white'}`}>
                    {option} {isSelected && '← Your choice'}
                  </span>
                  <span className="text-white font-bold">{percentage}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-1000 ${isSelected ? 'bg-green-400' : 'bg-blue-500'}`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
                <div className="text-xs text-gray-400 mt-1">{count} votes</div>
              </div>
            );
          })}
          <div className="text-center text-gray-300 text-sm mt-4">
            Total responses: {totalVotes}
          </div>
        </div>
      )}
    </div>
  );
};

// PSO Information Component
const PSOInformation = () => {
  const [selectedPSO, setSelectedPSO] = useState(null);
  
  const psos = {
    pso1: {
      title: 'PSO 1: Problem Analysis & Requirements',
      week: 'Week 4',
      project: 'Personal Portfolio SPA',
      description: 'Analyze user needs and define project requirements through hands-on building',
      skills: [
        'Identify target audience and user personas',
        'Define functional and non-functional requirements',
        'Create user stories and acceptance criteria',
        'Plan project scope and deliverables'
      ],
      activities: [
        'Pair programming on portfolio component architecture',
        'User research interviews with classmates',
        'Requirements documentation and wireframing',
        'Technical feasibility analysis'
      ],
      extraCredit: 'Talk to a classmate about their approach to user research and portfolio design. Compare different methods for gathering requirements.'
    },
    pso2: {
      title: 'PSO 2: Design Solutions & Architecture',
      week: 'Week 8',
      project: 'Full-Stack Authentication App',
      description: 'Design system architecture and implement technical solutions collaboratively',
      skills: [
        'Design system architecture and data flow',
        'Create technical specifications and API design',
        'Implement security patterns and best practices',
        'Plan database schema and relationships'
      ],
      activities: [
        'Collaborative system design sessions',
        'API design and documentation',
        'Database modeling with partners',
        'Security implementation and code review'
      ],
      extraCredit: 'Discuss different architectural approaches with a teammate. Document how various design patterns solve different problems.'
    },
    pso3: {
      title: 'PSO 3: Implementation & Integration',
      week: 'Week 10',
      project: 'Deployment & Production App',
      description: 'Implement production-ready solutions through collaborative development',
      skills: [
        'Deploy applications to production environments',
        'Implement CI/CD pipelines and automation',
        'Optimize performance and handle scale',
        'Integrate third-party services and APIs'
      ],
      activities: [
        'Pair programming on deployment scripts',
        'Performance testing and optimization',
        'Production monitoring setup',
        'Integration testing with partners'
      ],
      extraCredit: 'Compare deployment strategies with classmates. Analyze different hosting platforms and their trade-offs.'
    },
    pso4: {
      title: 'PSO 4: Communication & Presentation',
      week: 'Week 12',
      project: 'Final Capstone Presentation',
      description: 'Communicate technical solutions effectively to stakeholders',
      skills: [
        'Present technical concepts to diverse audiences',
        'Create compelling product demonstrations',
        'Articulate design decisions and trade-offs',
        'Handle Q&A and stakeholder feedback'
      ],
      activities: [
        'Presentation preparation and practice',
        'Demo script development with team',
        'Stakeholder communication simulation',
        'Peer feedback and iteration'
      ],
      extraCredit: 'Provide detailed feedback on another team\'s presentation approach. Analyze what makes technical communication effective.'
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-6">🎯 PSO Integration & Opportunities</h3>
      
      <div className="mb-6">
        <div className="bg-blue-500/20 rounded-lg p-4 mb-4">
          <h4 className="text-lg font-semibold text-blue-300 mb-2">What are PSOs?</h4>
          <p className="text-white/80 text-sm">
            PSOs (Program Student Outcomes) are hands-on pair programming classes where you'll build something valuable together 
            while demonstrating specific skills and competencies. Think of them as practical labs where concepts meet real-world application.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {Object.entries(psos).map(([key, pso]) => (
            <button
              key={key}
              onClick={() => setSelectedPSO(selectedPSO === key ? null : key)}
              className={`p-3 rounded-lg border-2 transition-all duration-300 text-left ${
                selectedPSO === key
                  ? 'border-purple-400 bg-purple-500/20'
                  : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
              }`}
            >
              <div className="font-semibold text-white text-sm mb-1">{pso.title.split(':')[0]}</div>
              <div className="text-xs text-white/70">{pso.week}</div>
              <div className="text-xs text-white/60 mt-1">{pso.project}</div>
            </button>
          ))}
        </div>
      </div>

      {selectedPSO && (
        <div className="bg-white/5 rounded-lg p-6 animate-fade-in">
          <div className="mb-6">
            <h4 className="text-xl font-bold text-white mb-2">{psos[selectedPSO].title}</h4>
            <div className="flex items-center space-x-4 mb-3">
              <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {psos[selectedPSO].week}
              </span>
              <span className="text-purple-300 font-medium">{psos[selectedPSO].project}</span>
            </div>
            <p className="text-white/80">{psos[selectedPSO].description}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h5 className="text-lg font-semibold text-white mb-3">💡 Skills You'll Develop</h5>
              <ul className="space-y-2">
                {psos[selectedPSO].skills.map((skill, index) => (
                  <li key={index} className="text-white/80 text-sm flex items-start">
                    <span className="mr-2 text-purple-400 mt-1">▸</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold text-white mb-3">🛠️ Collaborative Activities</h5>
              <ul className="space-y-2">
                {psos[selectedPSO].activities.map((activity, index) => (
                  <li key={index} className="text-white/80 text-sm flex items-start">
                    <span className="mr-2 text-blue-400 mt-1">▸</span>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-500/20 rounded-lg border border-green-400/30">
            <h5 className="font-semibold text-green-300 mb-2">⭐ Extra Credit Opportunity (+1%)</h5>
            <p className="text-green-200 text-sm">{psos[selectedPSO].extraCredit}</p>
            <div className="mt-2 text-xs text-green-300">
              📝 Submit reflection form at end of class to earn extra credit
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 bg-yellow-500/20 rounded-lg p-4 border border-yellow-400/30">
        <h4 className="font-semibold text-yellow-200 mb-2">💰 Total PSO Extra Credit</h4>
        <div className="text-yellow-100 text-sm">
          <p>4 PSOs × 1% each = <strong>+4% to your final grade</strong></p>
          <p className="text-xs mt-1">Complete networking + PSO extra credit = +10% total bonus!</p>
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

// Daily Networking Activity Component
const NetworkingActivity = () => {
  const [currentPerson, setCurrentPerson] = useState('');
  const [reflection, setReflection] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (currentPerson.trim() && reflection.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setCurrentPerson('');
        setReflection('');
      }, 3000);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-4">🤝 Daily Networking Challenge</h3>
      <p className="text-blue-200 mb-6">
        Talk to someone new in class and learn about their background, interests, or goals. 
        This helps you build connections for your final startup project team!
      </p>
      
      {!submitted ? (
        <div className="space-y-4">
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Who did you talk to today?
            </label>
            <input
              type="text"
              value={currentPerson}
              onChange={(e) => setCurrentPerson(e.target.value)}
              placeholder="Enter their name..."
              className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 border border-gray-600 focus:border-blue-400 focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              What did you learn about them?
            </label>
            <textarea
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              placeholder="Share what you learned about their background, interests, goals, or anything interesting..."
              rows="4"
              className="w-full bg-gray-800 text-white rounded-lg px-4 py-2 border border-gray-600 focus:border-blue-400 focus:outline-none"
            />
          </div>
          <button
            onClick={handleSubmit}
            disabled={!currentPerson.trim() || !reflection.trim()}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium px-6 py-2 rounded-lg transition-colors"
          >
            Submit for 0.5% Extra Credit
          </button>
        </div>
      ) : (
        <div className="text-center py-8">
          <div className="text-green-400 text-4xl mb-2">✓</div>
          <div className="text-green-400 font-semibold mb-2">Submitted Successfully!</div>
          <div className="text-gray-300 text-sm">+0.5% extra credit earned</div>
        </div>
      )}
    </div>
  );
};

// Interactive Grade Calculator
const GradeCalculator = () => {
  const [homework, setHomework] = useState(85);
  const [miniProjects, setMiniProjects] = useState(85);
  const [capstone, setCapstone] = useState(85);
  const [participation, setParticipation] = useState(90);
  const [extraCredit, setExtraCredit] = useState(0);

  const calculateFinalGrade = () => {
    const base = (homework * 0.35) + (miniProjects * 0.25) + (capstone * 0.30) + (participation * 0.10);
    return Math.min(100, base + extraCredit);
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
              Weekly Homework (35%): {homework}%
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
          
          <div>
            <label className="block text-white text-sm font-medium mb-2">
              Extra Credit: +{extraCredit}%
            </label>
            <input
              type="range"
              min="0"
              max="20"
              value={extraCredit}
              onChange={(e) => setExtraCredit(parseInt(e.target.value))}
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
            <div>Base: {(finalGrade - extraCredit).toFixed(1)}%</div>
            <div>Extra Credit: +{extraCredit}%</div>
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
      id: 'welcome',
      title: 'Welcome to CS390',
      content: (
        <div className="text-center space-y-8">
          <div className="text-6xl mb-8">🌐</div>
          <h1 className="text-5xl font-bold text-white mb-4">
            CS390 Web Application Programming
          </h1>
          <h2 className="text-3xl font-semibold text-blue-100 mb-6">
            Class 1: Course Introduction & Web Application Fundamentals
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Welcome to 12 weeks of building amazing web applications through hands-on learning and collaborative projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="font-semibold text-white mb-2">Learn by Doing</h3>
              <p className="text-gray-300 text-sm">Practical approach to full-stack development</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">👥</div>
              <h3 className="font-semibold text-white mb-2">Pair Programming</h3>
              <p className="text-gray-300 text-sm">All projects done collaboratively</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <div className="text-3xl mb-2">💡</div>
              <h3 className="font-semibold text-white mb-2">Build a Startup</h3>
              <p className="text-gray-300 text-sm">Final project: real startup application</p>
            </div>
          </div>
          <LivePoll />
        </div>
      ),
      bgGradient: 'from-blue-600 to-purple-700'
    },
    {
      id: 'course-philosophy',
      title: 'Course Philosophy',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">🎯 Course Philosophy</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-300">Learning by Doing</h3>
              <p className="text-white/80">
                Every concept is reinforced through hands-on practice. You'll build real applications, not just complete exercises.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/30 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-3 text-green-300">Growth Mindset</h3>
              <p className="text-white/80">
                Emphasis on continuous learning and improvement. Mistakes are learning opportunities, not failures.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/30 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-3 text-purple-300">Portfolio Building</h3>
              <p className="text-white/80">
                Create a portfolio of projects you'll be proud to show employers and use in your career.
              </p>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-yellow-300">🌟 Success Framework</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 text-white text-lg">You'll Succeed If You:</h4>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <span className="mr-3 text-green-400 mt-1">✓</span>
                    <span>Show up consistently and participate actively</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-green-400 mt-1">✓</span>
                    <span>Ask questions when you're stuck</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-green-400 mt-1">✓</span>
                    <span>Collaborate effectively with teammates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-green-400 mt-1">✓</span>
                    <span>Embrace challenges as learning opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-green-400 mt-1">✓</span>
                    <span>Focus on understanding, not just completion</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-white text-lg">We'll Support You With:</h4>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-400 mt-1">▸</span>
                    <span>Clear instructions and examples</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-400 mt-1">▸</span>
                    <span>Regular feedback and guidance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-400 mt-1">▸</span>
                    <span>Collaborative learning environments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-400 mt-1">▸</span>
                    <span>Multiple extra credit opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-400 mt-1">▸</span>
                    <span>Real-world applicable skills</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <NetworkingActivity />
        </div>
      ),
      bgGradient: 'from-indigo-600 to-blue-700'
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
              <div className="text-sm text-white/80">Weekly Homework</div>
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
          
          <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-4 mb-6">
            <h3 className="text-lg font-semibold mb-2 text-green-300">🎁 Extra Credit Opportunities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="font-medium text-white">Weekly Networking: +6%</div>
                <div className="text-white/70">0.5% each week × 12 weeks</div>
              </div>
              <div>
                <div className="font-medium text-white">PSO Reflections: +4%</div>
                <div className="text-white/70">1% each PSO × 4 PSOs</div>
              </div>
            </div>
            <div className="mt-3 text-center">
              <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                Total Possible Extra Credit: +20%
              </span>
            </div>
          </div>
          
          <GradeCalculator />
        </div>
      ),
      bgGradient: 'from-cyan-600 to-blue-700'
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
      id: 'pair-programming',
      title: 'Pair Programming Approach',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">👥 All Projects = Pair Programming</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-blue-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-blue-300">How It Works</h3>
                <ul className="space-y-3 text-white/80">
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-400 mt-1">🚀</span>
                    <span>Every assignment done in pairs (starting Week 2)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-400 mt-1">🔄</span>
                    <span>PSO sessions are collaborative coding experiences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-400 mt-1">🎯</span>
                    <span>Rotate partners throughout semester</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-400 mt-1">❓</span>
                    <span>Use PSOs to ask homework questions and get help</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-green-300">Benefits</h3>
                <ul className="space-y-2 text-white/80 text-sm">
                  <li>• Learn collaborative development practices</li>
                  <li>• Build communication and teamwork skills</li>
                  <li>• See different problem-solving approaches</li>
                  <li>• Reduce individual stress and workload</li>
                  <li>• Prepare for real-world team development</li>
                  <li>• Build lasting professional relationships</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-purple-500/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4 text-purple-300">Pair Programming Best Practices</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-white mb-2">👨‍💻 Driver & Navigator</h4>
                    <p className="text-white/70 text-sm">One person types (Driver), one person guides and reviews (Navigator). Switch roles regularly!</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-white mb-2">💬 Communication</h4>
                    <p className="text-white/70 text-sm">Talk through your thought process, ask questions, and explain your approach.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-white mb-2">🎯 Shared Goals</h4>
                    <p className="text-white/70 text-sm">Agree on the approach and ensure both partners understand the solution.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-white mb-2">⏰ Time Management</h4>
                    <p className="text-white/70 text-sm">Set clear session goals and take breaks to maintain focus and productivity.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-500/20 rounded-lg p-4 border border-yellow-400/30">
                <h4 className="font-medium text-yellow-200 mb-2">🏆 Success Tip</h4>
                <p className="text-yellow-100 text-sm">
                  The goal isn't to find the "smartest" partner—it's to find someone you communicate well with and can learn from together!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-indigo-300">🔄 Pair Programming Workflow</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">📋</span>
                </div>
                <h4 className="font-medium text-white mb-2">1. Plan Together</h4>
                <p className="text-white/70 text-sm">Discuss approach and break down the problem</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">⌨️</span>
                </div>
                <h4 className="font-medium text-white mb-2">2. Code & Navigate</h4>
                <p className="text-white/70 text-sm">Driver codes while Navigator guides and reviews</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🔄</span>
                </div>
                <h4 className="font-medium text-white mb-2">3. Switch Roles</h4>
                <p className="text-white/70 text-sm">Rotate every 15-30 minutes for balance</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">✅</span>
                </div>
                <h4 className="font-medium text-white mb-2">4. Review & Refactor</h4>
                <p className="text-white/70 text-sm">Test together and improve the solution</p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-pink-600 to-rose-700'
    },
    {
      id: 'three-tier-architecture',
      title: 'Three-Tier Architecture',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">🏗️ Three-Tier Architecture</h2>
          <p className="text-xl text-blue-100 text-center mb-8">
            Modern web applications are built using a three-tier architecture that separates concerns and enables scalability.
          </p>
          <ArchitectureDiagram />
        </div>
      ),
      bgGradient: 'from-teal-600 to-cyan-700'
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
      id: 'system-integration',
      title: 'System Integration & Data Flow',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">🔄 System Integration & Data Flow</h2>
          <p className="text-xl text-blue-100 text-center mb-8">
            Understanding how frontend, backend, and database work together in real-world scenarios
          </p>
          
          <SystemIntegrationDemo />
          
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-300">🎯 Key Takeaway</h3>
            <p className="text-white/80 text-lg">
              Modern web applications are complex systems where frontend, backend, and database work together seamlessly. 
              Understanding data flow and system integration is crucial for building scalable, secure, and performant applications.
            </p>
          </div>
        </div>
      ),
      bgGradient: 'from-slate-600 to-gray-700'
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