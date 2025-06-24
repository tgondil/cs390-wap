import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Class1Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slide content data
  const slides = [
    {
      id: 'welcome',
      title: 'Welcome to CS390',
      subtitle: 'Web Application Programming',
      content: (
        <div className="text-center space-y-8">
          <div className="text-6xl mb-8">🌐</div>
          <h1 className="text-5xl font-bold text-white mb-4">
            CS390 Web Application Programming
          </h1>
          <p className="text-2xl text-blue-100 mb-8">
            Class 1: Course Introduction & Environment Setup
          </p>
          <div className="text-lg text-blue-200">
            12 weeks • 24 classes • Full-Stack MERN Development
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-purple-700'
    },
    {
      id: 'overview',
      title: 'Course Overview',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">What We'll Build Together</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-white mb-2">Frontend Skills</h3>
              <ul className="text-blue-100 space-y-2">
                <li>• React.js for dynamic UIs</li>
                <li>• Modern JavaScript (ES6+)</li>
                <li>• Tailwind CSS for styling</li>
                <li>• Single Page Applications</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-3xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Backend Skills</h3>
              <ul className="text-blue-100 space-y-2">
                <li>• Node.js server development</li>
                <li>• Express.js web framework</li>
                <li>• MongoDB database</li>
                <li>• RESTful API design</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-blue-700'
    },
    {
      id: 'journey',
      title: 'The Learning Journey',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">From Zero to Full-Stack</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/30"></div>
            <div className="space-y-6">
              {[
                { week: '1-2', title: 'Setup & Web Fundamentals', icon: '🔧' },
                { week: '3-4', title: 'React & Modern JavaScript', icon: '⚛️' },
                { week: '5-6', title: 'Backend with Node.js', icon: '🖥️' },
                { week: '7-8', title: 'Database & Authentication', icon: '🔐' },
                { week: '9-10', title: 'Full-Stack Integration', icon: '🌐' },
                { week: '11-12', title: 'Capstone Project', icon: '🚀' }
              ].map((phase, index) => (
                <div key={index} className="relative flex items-center pl-16">
                  <div className="absolute left-6 w-4 h-4 bg-white rounded-full"></div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4 flex-1">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{phase.icon}</span>
                      <div>
                        <div className="text-white font-semibold">Week {phase.week}</div>
                        <div className="text-blue-100">{phase.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-indigo-700'
    },
    {
      id: 'frontend-vs-backend',
      title: 'Frontend vs Backend',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Understanding the Web Stack</h2>
          
          {/* Interactive comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
            {/* Connection line animation */}
            <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-0.5 bg-white/30 animate-pulse"></div>
                <div className="bg-white/20 backdrop-blur rounded-full p-2">
                  <div className="text-white text-sm">⚡</div>
                </div>
                <div className="w-8 h-0.5 bg-white/30 animate-pulse"></div>
              </div>
            </div>

            {/* Frontend Card */}
            <div className="group bg-green-500/20 backdrop-blur rounded-xl p-8 border border-green-400/30 
                          hover:bg-green-500/30 hover:border-green-300/50 hover:scale-105 
                          transition-all duration-500 cursor-pointer relative overflow-hidden">
              
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-2 h-2 bg-green-300 rounded-full animate-ping"></div>
                <div className="absolute top-8 right-8 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 left-12 w-1.5 h-1.5 bg-green-200 rounded-full animate-bounce"></div>
              </div>

              <div className="text-center mb-6 relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎨</div>
                <h3 className="text-2xl font-bold text-white group-hover:text-green-100 transition-colors">Frontend</h3>
                <p className="text-green-100 group-hover:text-green-50 transition-colors">What users see and interact with</p>
              </div>
              
              <ul className="space-y-3 text-green-100 relative z-10">
                {[
                  { icon: '✨', text: 'User Interface (UI)', delay: '0ms' },
                  { icon: '🎯', text: 'User Experience (UX)', delay: '100ms' },
                  { icon: '📱', text: 'Responsive Design', delay: '200ms' },
                  { icon: '⚡', text: 'Interactive Features', delay: '300ms' }
                ].map((item, index) => (
                  <li key={index} 
                      className="flex items-center group-hover:translate-x-2 transition-transform duration-300 
                               hover:text-white hover:scale-105 cursor-pointer"
                      style={{ transitionDelay: item.delay }}>
                    <span className="mr-3 text-lg group-hover:animate-bounce">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

              {/* Tech stack preview */}
              <div className="mt-6 p-4 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 
                            transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div className="text-sm text-green-100 mb-2">Technologies:</div>
                <div className="flex flex-wrap gap-2">
                  {['React', 'HTML', 'CSS', 'JavaScript'].map((tech, index) => (
                    <span key={index} className="bg-green-400/20 text-green-100 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Backend Card */}
            <div className="group bg-orange-500/20 backdrop-blur rounded-xl p-8 border border-orange-400/30 
                          hover:bg-orange-500/30 hover:border-orange-300/50 hover:scale-105 
                          transition-all duration-500 cursor-pointer relative overflow-hidden">
              
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-6 right-6 w-2 h-2 bg-orange-300 rounded-full animate-ping"></div>
                <div className="absolute top-12 left-6 w-1 h-1 bg-orange-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 right-10 w-1.5 h-1.5 bg-orange-200 rounded-full animate-bounce"></div>
              </div>

              <div className="text-center mb-6 relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚙️</div>
                <h3 className="text-2xl font-bold text-white group-hover:text-orange-100 transition-colors">Backend</h3>
                <p className="text-orange-100 group-hover:text-orange-50 transition-colors">Server logic and data management</p>
              </div>
              
              <ul className="space-y-3 text-orange-100 relative z-10">
                {[
                  { icon: '🗄️', text: 'Database Operations', delay: '0ms' },
                  { icon: '🔐', text: 'Authentication', delay: '100ms' },
                  { icon: '📡', text: 'API Endpoints', delay: '200ms' },
                  { icon: '🔒', text: 'Business Logic', delay: '300ms' }
                ].map((item, index) => (
                  <li key={index} 
                      className="flex items-center group-hover:translate-x-2 transition-transform duration-300 
                               hover:text-white hover:scale-105 cursor-pointer"
                      style={{ transitionDelay: item.delay }}>
                    <span className="mr-3 text-lg group-hover:animate-bounce">{item.icon}</span>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>

              {/* Tech stack preview */}
              <div className="mt-6 p-4 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 
                            transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                <div className="text-sm text-orange-100 mb-2">Technologies:</div>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express', 'MongoDB', 'APIs'].map((tech, index) => (
                    <span key={index} className="bg-orange-400/20 text-orange-100 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interactive workflow demonstration */}
          <div className="mt-12 bg-white/10 backdrop-blur rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">How They Work Together</h3>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              
              {/* User */}
              <div className="text-center">
                <div className="bg-blue-500/20 rounded-full p-4 mb-2 hover:bg-blue-500/30 transition-colors cursor-pointer">
                  <span className="text-3xl">👤</span>
                </div>
                <div className="text-white text-sm">User</div>
              </div>

              {/* Arrow 1 */}
              <div className="hidden md:block">
                <div className="flex items-center space-x-2 animate-pulse">
                  <span className="text-green-400">→</span>
                  <span className="text-xs text-green-300">clicks/types</span>
                </div>
              </div>

              {/* Frontend */}
              <div className="text-center group cursor-pointer">
                <div className="bg-green-500/20 rounded-full p-4 mb-2 group-hover:bg-green-500/30 
                              transition-colors group-hover:scale-110 transform duration-300">
                  <span className="text-3xl">🎨</span>
                </div>
                <div className="text-white text-sm group-hover:text-green-200 transition-colors">Frontend</div>
              </div>

              {/* Arrow 2 */}
              <div className="hidden md:block">
                <div className="flex items-center space-x-2 animate-pulse">
                  <span className="text-orange-400">→</span>
                  <span className="text-xs text-orange-300">sends request</span>
                </div>
              </div>

              {/* Backend */}
              <div className="text-center group cursor-pointer">
                <div className="bg-orange-500/20 rounded-full p-4 mb-2 group-hover:bg-orange-500/30 
                              transition-colors group-hover:scale-110 transform duration-300">
                  <span className="text-3xl">⚙️</span>
                </div>
                <div className="text-white text-sm group-hover:text-orange-200 transition-colors">Backend</div>
              </div>

              {/* Arrow 3 */}
              <div className="hidden md:block">
                <div className="flex items-center space-x-2 animate-pulse">
                  <span className="text-purple-400">→</span>
                  <span className="text-xs text-purple-300">queries</span>
                </div>
              </div>

              {/* Database */}
              <div className="text-center">
                <div className="bg-purple-500/20 rounded-full p-4 mb-2 hover:bg-purple-500/30 transition-colors cursor-pointer">
                  <span className="text-3xl">🗄️</span>
                </div>
                <div className="text-white text-sm">Database</div>
              </div>
            </div>

            {/* Interactive example */}
            <div className="mt-8 text-center">
              <div className="bg-gray-800/50 rounded-lg p-4 text-left max-w-2xl mx-auto">
                <div className="text-green-400 text-sm mb-1">Example: User Login</div>
                <div className="text-white text-sm space-y-1">
                  <div><span className="text-green-300">Frontend:</span> User enters email/password → validates format → sends to backend</div>
                  <div><span className="text-orange-300">Backend:</span> Receives request → checks database → verifies password → creates session</div>
                  <div><span className="text-purple-300">Database:</span> Stores user data → returns user info if valid</div>
                  <div><span className="text-blue-300">Response:</span> Backend sends result → Frontend shows success/error → User sees outcome</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-8">
            <div className="bg-gradient-to-r from-green-500/20 to-orange-500/20 backdrop-blur rounded-xl p-6 border border-white/20">
              <div className="text-white text-lg mb-2">💡 Key Takeaway</div>
              <div className="text-white/80">
                Frontend and Backend work together seamlessly - you'll learn to build <strong>both sides</strong> in this course!
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-orange-600'
    },
    {
      id: 'environment-setup',
      title: 'Development Environment',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">Setting Up Your Toolkit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Node.js',
                icon: '🟢',
                description: 'JavaScript runtime for backend development',
                version: 'v18+ recommended',
                action: 'Download from nodejs.org'
              },
              {
                name: 'VS Code',
                icon: '💙',
                description: 'Code editor with excellent JavaScript support',
                version: 'Latest version',
                action: 'Download from code.visualstudio.com'
              },
              {
                name: 'Terminal/CLI',
                icon: '⌨️',
                description: 'Command line interface for project navigation',
                version: 'Built into your OS',
                action: 'Learn basic commands'
              }
            ].map((tool, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
                <p className="text-blue-100 text-sm mb-3">{tool.description}</p>
                <div className="text-xs text-blue-200 mb-3">{tool.version}</div>
                <div className="bg-white/20 rounded-lg p-2 text-sm text-white">
                  {tool.action}
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
      bgGradient: 'from-teal-600 to-blue-700'
    },
    {
      id: 'cli-commands',
      title: 'Essential CLI Commands',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">Command Line Basics</h2>
          <div className="bg-gray-900/50 backdrop-blur rounded-xl p-8">
            <div className="space-y-6">
              {[
                { command: 'pwd', description: 'Show current directory path' },
                { command: 'ls', description: 'List files and folders (macOS/Linux)' },
                { command: 'dir', description: 'List files and folders (Windows)' },
                { command: 'cd foldername', description: 'Change to a directory' },
                { command: 'cd ..', description: 'Go up one directory level' },
                { command: 'mkdir newfolder', description: 'Create a new directory' },
                { command: 'node --version', description: 'Check Node.js version' },
                { command: 'npm --version', description: 'Check npm version' }
              ].map((cmd, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-blue-500 text-white px-3 py-1 rounded font-mono text-sm min-w-[140px]">
                    {cmd.command}
                  </div>
                  <div className="text-gray-300">{cmd.description}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-xl p-6">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">💡</span>
              <span className="text-yellow-100">
                <strong>Pro Tip:</strong> Practice these commands now - they'll be essential throughout the course!
              </span>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-gray-700 to-blue-800'
    },
    {
      id: 'first-nodejs',
      title: 'Your First Node.js Script',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">Hello World in Node.js</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-900/70 rounded-xl p-6">
                <div className="text-green-400 text-sm mb-2">hello.js</div>
                <pre className="text-white font-mono text-lg">
{`// Your first Node.js script
console.log("Hello, World!");
console.log("Welcome to CS390!");

// Show current date
const now = new Date();
console.log("Today is:", now.toDateString());`}
                </pre>
              </div>
              <div className="bg-gray-900/70 rounded-xl p-6">
                <div className="text-blue-400 text-sm mb-2">Terminal</div>
                <pre className="text-green-300 font-mono">
{`$ node hello.js
Hello, World!
Welcome to CS390!
Today is: Mon Dec 09 2024`}
                </pre>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Let's Try It!</h3>
              <ol className="space-y-4 text-blue-100">
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                  Create a new file called <code className="bg-white/20 px-2 py-1 rounded">hello.js</code>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                  Copy the code from the left panel
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                  Open your terminal in the same folder
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                  Run <code className="bg-white/20 px-2 py-1 rounded">node hello.js</code>
                </li>
              </ol>
              <div className="bg-green-500/20 border border-green-400/30 rounded-xl p-4">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🎉</span>
                  <span className="text-green-100">Congratulations! You've run your first Node.js program!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-800 to-purple-700'
    },
    {
      id: 'learning-objectives',
      title: 'Today\'s Learning Objectives',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">What We Accomplished Today</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: '📋',
                title: 'Course Overview',
                description: 'Reviewed syllabus and final project expectations'
              },
              {
                icon: '🔧',
                title: 'Environment Setup',
                description: 'Installed Node.js, VS Code, and learned CLI basics'
              },
              {
                icon: '⌨️',
                title: 'CLI Navigation',
                description: 'Practiced essential terminal commands'
              },
              {
                icon: '🟢',
                title: 'First Node.js Script',
                description: 'Created and ran our first JavaScript program with Node.js'
              }
            ].map((objective, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{objective.icon}</div>
                  <h3 className="text-xl font-bold text-white">{objective.title}</h3>
                </div>
                <p className="text-blue-100 text-center">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      ),
      bgGradient: 'from-emerald-600 to-teal-700'
    },
    {
      id: 'homework',
      title: 'Homework & Next Steps',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">Your Mission</h2>
          <div className="bg-white/10 backdrop-blur rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">📝 For Next Class:</h3>
            <div className="space-y-4 text-blue-100">
              <div className="flex items-start">
                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">1</span>
                <span>Set up your development environment at home (Node.js + VS Code)</span>
              </div>
              <div className="flex items-start">
                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">2</span>
                <span>Clone the class GitHub repository (link will be provided)</span>
              </div>
              <div className="flex items-start">
                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">3</span>
                <span>Practice CLI commands - get comfortable navigating directories</span>
              </div>
              <div className="flex items-start">
                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">4</span>
                <span>Create and run at least 3 different Node.js scripts</span>
              </div>
            </div>
          </div>
          <div className="bg-blue-500/20 border border-blue-400/30 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-white mb-4">🚀 Next Class Preview:</h4>
            <p className="text-blue-100">
              We'll dive into Git version control, create our first GitHub repository, 
              and refresh our HTML/CSS/JavaScript skills by building a simple webpage!
            </p>
          </div>
        </div>
      ),
      bgGradient: 'from-violet-600 to-purple-700'
    },
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
                You've completed Class 1! Ready to continue your journey?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/class/2" 
                  className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Class 2: Git & HTML/CSS/JS →
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

export default Class1Slides; 