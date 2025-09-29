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
  @keyframes bounce-in {
    0% { transform: scale(0.3); opacity: 0; }
    50% { transform: scale(1.05); }
    70% { transform: scale(0.9); }
    100% { transform: scale(1); opacity: 1; }
  }
  .animate-bounce-in {
    animation: bounce-in 0.8s ease-out;
  }
`;





const Class9Slides = () => {
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
            <h2 className="text-4xl font-semibold text-green-100 mb-4">
              Web Applications Programming
            </h2>
            <div className="text-2xl text-green-200">
              Class 9: Introduction to Node.js
            </div>
          </div>
          
          <div className="mt-16">
            <div className="text-2xl font-medium text-white">Tanay Gondil</div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-emerald-700'
    },

    // Slide 2: Codenames - Game Rules
    {
      id: 'codenames-intro',
      title: 'Codenames - Game Rules',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <style>{customStyles}</style>
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

          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-400/30">
              <h3 className="text-2xl font-bold text-orange-300 mb-4">🎮 Ready to Play?</h3>
              <a 
                href="https://codenames.game/room/washington-robot-fence" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition-all transform hover:scale-105 text-lg"
              >
                <span className="text-2xl mr-3">🕵️</span>
                Join the Game
                <span className="ml-2">→</span>
              </a>
              <p className="text-white/70 text-sm mt-3">
                Click to join our Codenames room: washington-robot-fence
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-orange-600 to-red-600'
    },

    // Slide 3: The JavaScript Journey
    {
      id: 'javascript-journey',
      title: 'The JavaScript Journey',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">The JavaScript Journey</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🌐</div>
            <h3 className="text-3xl font-bold mb-12 text-blue-300">From Browser to Server</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-500/20 rounded-xl p-8 border-2 border-blue-400">
                <h4 className="text-2xl font-bold text-blue-300 mb-6">🌐 Where We've Been</h4>
                <div className="space-y-4 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">✅</div>
                    <div>
                      <div className="font-bold">DOM Manipulation</div>
                      <div className="text-blue-200 text-sm">Change web pages</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">✅</div>
                    <div>
                      <div className="font-bold">User Interactions</div>
                      <div className="text-blue-200 text-sm">Clicks, forms, events</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">✅</div>
                    <div>
                      <div className="font-bold">Network Requests</div>
                      <div className="text-blue-200 text-sm">Fetch API, AJAX</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-blue-600/30 rounded-lg p-4">
                  <div className="text-blue-100 text-center font-bold">Browser JavaScript</div>
                </div>
              </div>

              <div className="bg-red-500/20 rounded-xl p-8 border-2 border-red-400">
                <h4 className="text-2xl font-bold text-red-300 mb-6">❌ What We Couldn't Do</h4>
                <div className="space-y-4 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">❌</div>
                    <div>
                      <div className="font-bold">Access File System</div>
                      <div className="text-red-200 text-sm">Read/write files</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">❌</div>
                    <div>
                      <div className="font-bold">Create Servers</div>
                      <div className="text-red-200 text-sm">Backend applications</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">❌</div>
                    <div>
                      <div className="font-bold">Database Access</div>
                      <div className="text-red-200 text-sm">Direct data storage</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 bg-red-600/30 rounded-lg p-4">
                  <div className="text-red-100 text-center font-bold">Browser Limitations</div>
                </div>
              </div>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-8 border border-purple-400/30">
              <div className="text-2xl font-bold text-purple-300 mb-4">💭 The Developer's Dilemma</div>
              <div className="text-lg text-purple-100 space-y-2">
                <p><strong>Frontend:</strong> "I know JavaScript really well!"</p>
                <p><strong>Backend:</strong> "Sorry, you need PHP/Python/Java"</p>
                <p><strong>Result:</strong> Two languages, two skillsets, double the learning</p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-purple-600'
    },

    // Slide 4: The Vision
    {
      id: 'the-vision',
      title: 'The Vision',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">The Vision</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">💭</div>
            <h3 className="text-3xl font-bold mb-12 text-yellow-300">What If JavaScript Could Do Everything?</h3>
            
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-12 border-2 border-yellow-400 mb-8">
              <h4 className="text-4xl font-bold text-yellow-300 mb-8">One Language to Rule Them All</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-3xl mb-4">🎨</div>
                  <h5 className="text-xl font-bold text-blue-300 mb-4">Frontend</h5>
                  <div className="space-y-2 text-left">
                    <div>• React Components</div>
                    <div>• DOM Manipulation</div>
                    <div>• User Events</div>
                    <div>• UI/UX Design</div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-3xl mb-4">⚙️</div>
                  <h5 className="text-xl font-bold text-green-300 mb-4">Backend</h5>
                  <div className="space-y-2 text-left">
                    <div>• Web Servers</div>
                    <div>• File Operations</div>
                    <div>• Database Access</div>
                    <div>• API Development</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-green-500/20 rounded-lg p-6 border border-green-400">
                <div className="text-3xl mb-3">🚀</div>
                <div className="font-bold text-green-300">Faster Development</div>
                <div className="text-green-200 text-sm mt-2">Same syntax everywhere</div>
              </div>
              
              <div className="bg-blue-500/20 rounded-lg p-6 border border-blue-400">
                <div className="text-3xl mb-3">🧠</div>
                <div className="font-bold text-blue-300">Less Cognitive Load</div>
                <div className="text-blue-200 text-sm mt-2">One language to master</div>
              </div>
              
              <div className="bg-purple-500/20 rounded-lg p-6 border border-purple-400">
                <div className="text-3xl mb-3">🔄</div>
                <div className="font-bold text-purple-300">Code Sharing</div>
                <div className="text-purple-200 text-sm mt-2">Reuse logic everywhere</div>
              </div>
              
              <div className="bg-pink-500/20 rounded-lg p-6 border border-pink-400">
                <div className="text-3xl mb-3">👥</div>
                <div className="font-bold text-pink-300">Team Efficiency</div>
                <div className="text-pink-200 text-sm mt-2">Everyone can contribute</div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-yellow-600 to-orange-600'
    },

    // Slide 5: Enter Node.js
    {
      id: 'enter-nodejs',
      title: 'Enter Node.js',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Enter Node.js</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-bounce-in">💻</div>
            <h3 className="text-3xl font-bold mb-12 text-green-300">JavaScript Everywhere!</h3>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 mb-8">
              <div className="text-3xl font-bold text-green-300 mb-6">Simple Definition</div>
              <div className="text-2xl leading-relaxed">
                Node.js is a <strong className="text-yellow-300">JavaScript runtime</strong> that lets you run JavaScript code <strong className="text-blue-300">outside of web browsers</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400">
                <h4 className="text-2xl font-bold text-blue-300 mb-6">🌐 Browser JavaScript</h4>
                <div className="bg-gray-800 rounded-lg p-6 mb-4">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🌐</div>
                    <div className="font-bold text-lg">Chrome Browser</div>
                    <div className="bg-blue-600 rounded p-3 mt-3">
                      <div className="font-bold">V8 Engine</div>
                      <div className="text-sm">(Executes JavaScript)</div>
                    </div>
                  </div>
                </div>
                <div className="text-blue-200 text-center">Limited to browser environment</div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border border-green-400">
                <h4 className="text-2xl font-bold text-green-300 mb-6">💻 Node.js</h4>
                <div className="bg-gray-800 rounded-lg p-6 mb-4">
                  <div className="text-center">
                    <div className="text-4xl mb-2">💻</div>
                    <div className="font-bold text-lg">Your Computer</div>
                    <div className="bg-green-600 rounded p-3 mt-3 space-y-1">
                      <div className="font-bold">V8 Engine</div>
                      <div className="text-sm">+ File System</div>
                      <div className="text-sm">+ Network Access</div>
                      <div className="text-sm">+ System Control</div>
                    </div>
                  </div>
                </div>
                <div className="text-green-200 text-center">Full system capabilities</div>
              </div>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-8 border border-purple-400/30">
              <div className="text-2xl font-bold text-purple-300 mb-4">🎯 The Innovation</div>
              <div className="text-lg text-purple-100">
                Take Chrome's <strong>V8 engine</strong> + Add <strong>system access</strong> = <strong>JavaScript everywhere!</strong>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-teal-600'
    },

    // Slide 6: Node.js vs Browser Comparison
    {
      id: 'nodejs-vs-browser',
      title: 'Node.js vs Browser JavaScript',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Side-by-Side Comparison</h2>
          
          <div className="max-w-7xl mx-auto">
            <div className="text-6xl mb-8 animate-float">⚖️</div>
            <h3 className="text-3xl font-bold mb-12 text-blue-300">Same Language, Different Capabilities</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Browser JavaScript */}
              <div className="bg-blue-500/20 rounded-xl p-8 border-2 border-blue-400">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">🌐</div>
                  <h4 className="text-3xl font-bold text-blue-300">Browser JavaScript</h4>
                  <p className="text-blue-200 mt-2">Client-side environment</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-green-500/20 border border-green-400 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🎨</span>
                        <span className="font-bold">DOM Manipulation</span>
                      </div>
                      <span className="text-2xl text-green-300">✅</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-500/20 border border-green-400 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">👆</span>
                        <span className="font-bold">User Events</span>
                      </div>
                      <span className="text-2xl text-green-300">✅</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-500/20 border border-green-400 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🌐</span>
                        <span className="font-bold">Network Requests</span>
                      </div>
                      <span className="text-2xl text-green-300">✅</span>
                    </div>
                  </div>
                  
                  <div className="bg-red-500/20 border border-red-400 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">📁</span>
                        <span className="font-bold">File System Access</span>
                      </div>
                      <span className="text-2xl text-red-300">❌</span>
                    </div>
                  </div>
                  
                  <div className="bg-red-500/20 border border-red-400 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🖥️</span>
                        <span className="font-bold">Server Creation</span>
                      </div>
                      <span className="text-2xl text-red-300">❌</span>
                    </div>
                  </div>
                  
                  <div className="bg-red-500/20 border border-red-400 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🗃️</span>
                        <span className="font-bold">Database Access</span>
                      </div>
                      <span className="text-2xl text-red-300">❌</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-blue-600/20 rounded-lg p-4 border border-blue-400">
                  <div className="text-blue-100 font-bold text-center">
                    🔒 Sandboxed for security
                  </div>
                </div>
              </div>
              
              {/* Node.js */}
              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">💻</div>
                  <h4 className="text-3xl font-bold text-green-300">Node.js</h4>
                  <p className="text-green-200 mt-2">Server-side environment</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-red-500/20 border border-red-400 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🎨</span>
                        <span className="font-bold">DOM Manipulation</span>
                      </div>
                      <span className="text-2xl text-red-300">❌</span>
                    </div>
                  </div>
                  
                  <div className="bg-red-500/20 border border-red-400 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">👆</span>
                        <span className="font-bold">User Events</span>
                      </div>
                      <span className="text-2xl text-red-300">❌</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-500/20 border border-green-400 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🌐</span>
                        <span className="font-bold">Network Requests</span>
                      </div>
                      <span className="text-2xl text-green-300">✅</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-500/20 border border-green-400 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">📁</span>
                        <span className="font-bold">File System Access</span>
                      </div>
                      <span className="text-2xl text-green-300">✅</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-500/20 border border-green-400 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🖥️</span>
                        <span className="font-bold">Server Creation</span>
                      </div>
                      <span className="text-2xl text-green-300">✅</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-500/20 border border-green-400 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">🗃️</span>
                        <span className="font-bold">Database Access</span>
                      </div>
                      <span className="text-2xl text-green-300">✅</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-green-600/20 rounded-lg p-4 border border-green-400">
                  <div className="text-green-100 font-bold text-center">
                    🔓 Full system access
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-purple-500/20 rounded-xl p-6 border border-purple-400/30">
              <div className="text-2xl font-bold text-purple-300 mb-4 text-center">🔑 Key Insight</div>
              <div className="text-lg text-purple-100 text-center">
                <strong>Same JavaScript syntax</strong> - but completely different <strong>capabilities</strong> based on the environment!
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-blue-600'
    },

    // Slide 7: What Can You Build?
    {
      id: 'what-can-you-build',
      title: 'What Can You Build?',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">What Can You Build?</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🏗️</div>
            <h3 className="text-3xl font-bold mb-12 text-yellow-300">The Possibilities Are Endless</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400">
                <div className="text-5xl mb-4">🌐</div>
                <h4 className="text-xl font-bold text-blue-300 mb-4">Web Servers</h4>
                <div className="space-y-2 text-blue-200 text-sm">
                  <div>• REST APIs</div>
                  <div>• GraphQL servers</div>
                  <div>• Microservices</div>
                  <div>• Real-time apps</div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border border-green-400">
                <div className="text-5xl mb-4">🛠️</div>
                <h4 className="text-xl font-bold text-green-300 mb-4">CLI Tools</h4>
                <div className="space-y-2 text-green-200 text-sm">
                  <div>• Build tools</div>
                  <div>• Package managers</div>
                  <div>• Development servers</div>
                  <div>• Automation scripts</div>
                </div>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-8 border border-purple-400">
                <div className="text-5xl mb-4">🤖</div>
                <h4 className="text-xl font-bold text-purple-300 mb-4">Backend Services</h4>
                <div className="space-y-2 text-purple-200 text-sm">
                  <div>• Authentication</div>
                  <div>• Data processing</div>
                  <div>• File handling</div>
                  <div>• Email services</div>
                </div>
              </div>

              <div className="bg-pink-500/20 rounded-xl p-8 border border-pink-400">
                <div className="text-5xl mb-4">📱</div>
                <h4 className="text-xl font-bold text-pink-300 mb-4">Desktop Apps</h4>
                <div className="space-y-2 text-pink-200 text-sm">
                  <div>• VS Code</div>
                  <div>• Discord</div>
                  <div>• Slack</div>
                  <div>• WhatsApp Desktop</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-8 border border-orange-400">
              <h4 className="text-2xl font-bold text-orange-300 mb-4">🏢 Enterprise Usage</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">🎬</div>
                  <div className="font-bold">Netflix</div>
                  <div className="text-sm text-gray-300">Video streaming</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">💼</div>
                  <div className="font-bold">LinkedIn</div>
                  <div className="text-sm text-gray-300">Social platform</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">💰</div>
                  <div className="font-bold">PayPal</div>
                  <div className="text-sm text-gray-300">Payments</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">🚗</div>
                  <div className="font-bold">Uber</div>
                  <div className="text-sm text-gray-300">Real-time services</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-orange-600 to-red-600'
    },

    // Slide 8: The Problem with Traditional Programming
    {
      id: 'traditional-blocking',
      title: 'The Traditional Problem',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">The Blocking Problem</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🛑</div>
            <h3 className="text-3xl font-bold mb-12 text-red-300">Why Traditional Programming is Slow</h3>
            
            <div className="bg-red-500/20 rounded-xl p-8 border-2 border-red-400 mb-8">
              <h4 className="text-3xl font-bold text-red-300 mb-6">The Waiting Game</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-red-600/30 rounded-lg p-6">
                  <div className="text-5xl mb-4">📁</div>
                  <div className="font-bold text-xl mb-2">Read File</div>
                  <div className="text-red-200 text-sm">⏳ Wait 100ms</div>
                  <div className="mt-4 bg-red-700/50 rounded p-3">
                    <div className="text-xs">Everything stops until done</div>
                  </div>
                </div>
                
                <div className="bg-red-600/30 rounded-lg p-6">
                  <div className="text-5xl mb-4">⚙️</div>
                  <div className="font-bold text-xl mb-2">Process Data</div>
                  <div className="text-red-200 text-sm">⏳ Wait 50ms</div>
                  <div className="mt-4 bg-red-700/50 rounded p-3">
                    <div className="text-xs">Still waiting...</div>
                  </div>
                </div>
                
                <div className="bg-red-600/30 rounded-lg p-6">
                  <div className="text-5xl mb-4">💾</div>
                  <div className="font-bold text-xl mb-2">Save Result</div>
                  <div className="text-red-200 text-sm">⏳ Wait 75ms</div>
                  <div className="mt-4 bg-red-700/50 rounded p-3">
                    <div className="text-xs">More waiting...</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-600 mb-8">
              <h4 className="text-2xl font-bold text-yellow-300 mb-6">📊 The Math</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-left">
                  <div className="text-lg font-bold mb-4">For ONE User:</div>
                  <div className="space-y-2 text-gray-300">
                    <div>File read: 100ms</div>
                    <div>Process: 50ms</div>
                    <div>Save: 75ms</div>
                    <div className="border-t pt-2 font-bold text-white">Total: 225ms</div>
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-lg font-bold mb-4">For 1000 Users:</div>
                  <div className="space-y-2 text-gray-300">
                    <div>225ms × 1000 users</div>
                    <div className="text-red-300 font-bold">= 225 seconds!</div>
                    <div className="text-red-300 font-bold">= 3.75 minutes!</div>
                    <div className="text-xs mt-2">Last user waits nearly 4 minutes!</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-500/20 rounded-xl p-8 border border-orange-400">
              <h4 className="text-2xl font-bold text-orange-300 mb-4">🤔 The Core Issue</h4>
              <div className="text-lg text-orange-100 space-y-4">
                <p><strong>Single-threaded execution:</strong> One task at a time</p>
                <p><strong>Blocking operations:</strong> Everything waits for I/O</p>
                <p><strong>Poor scalability:</strong> More users = exponentially longer waits</p>
                <p><strong>Resource waste:</strong> CPU sits idle while waiting for disk/network</p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-600 to-orange-600'
    },

    // Slide 9: The Event Loop Solution
    {
      id: 'event-loop-solution',
      title: 'The Event Loop Solution',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Node.js Magic</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🔄</div>
            <h3 className="text-3xl font-bold mb-12 text-green-300">The Event Loop Revolution</h3>
            
            <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400 mb-8">
              <h4 className="text-3xl font-bold text-green-300 mb-6">Non-Blocking Excellence</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-600/30 rounded-lg p-6">
                  <div className="text-5xl mb-4">📁</div>
                  <div className="font-bold text-xl mb-2">Start File Read</div>
                  <div className="text-green-200 text-sm">→ Continue immediately</div>
                  <div className="mt-4 bg-green-700/50 rounded p-3">
                    <div className="text-xs">Event Loop handles it</div>
                  </div>
                </div>
                
                <div className="bg-green-600/30 rounded-lg p-6">
                  <div className="text-5xl mb-4">⚙️</div>
                  <div className="font-bold text-xl mb-2">Start Processing</div>
                  <div className="text-green-200 text-sm">→ Continue immediately</div>
                  <div className="mt-4 bg-green-700/50 rounded p-3">
                    <div className="text-xs">No waiting!</div>
                  </div>
                </div>
                
                <div className="bg-green-600/30 rounded-lg p-6">
                  <div className="text-5xl mb-4">💾</div>
                  <div className="font-bold text-xl mb-2">Start Save</div>
                  <div className="text-green-200 text-sm">→ Continue immediately</div>
                  <div className="mt-4 bg-green-700/50 rounded p-3">
                    <div className="text-xs">Keep going!</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400 mb-8">
              <h4 className="text-2xl font-bold text-blue-300 mb-6">🎯 How It Works</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="text-left">
                  <h5 className="text-xl font-bold mb-4 text-blue-300">1. Start Everything</h5>
                  <div className="space-y-3">
                    <div className="bg-blue-600/20 rounded p-3">
                      <div className="font-bold">📁 File.read() → Event Loop</div>
                      <div className="text-sm text-blue-200">Operation handed off</div>
                    </div>
                    <div className="bg-blue-600/20 rounded p-3">
                      <div className="font-bold">🗃️ Database.query() → Event Loop</div>
                      <div className="text-sm text-blue-200">Operation handed off</div>
                    </div>
                    <div className="bg-blue-600/20 rounded p-3">
                      <div className="font-bold">🌐 API.request() → Event Loop</div>
                      <div className="text-sm text-blue-200">Operation handed off</div>
                    </div>
                  </div>
                </div>
                
                <div className="text-left">
                  <h5 className="text-xl font-bold mb-4 text-blue-300">2. Execute Callbacks</h5>
                  <div className="space-y-3">
                    <div className="bg-yellow-500/20 rounded p-3 border-l-4 border-yellow-400">
                      <div className="font-bold">⚡ API callback (1s)</div>
                      <div className="text-sm text-yellow-200">Fastest completes first</div>
                    </div>
                    <div className="bg-yellow-500/20 rounded p-3 border-l-4 border-yellow-400">
                      <div className="font-bold">⚡ Database callback (1.5s)</div>
                      <div className="text-sm text-yellow-200">Second to complete</div>
                    </div>
                    <div className="bg-yellow-500/20 rounded p-3 border-l-4 border-yellow-400">
                      <div className="font-bold">⚡ File callback (2s)</div>
                      <div className="text-sm text-yellow-200">Last to complete</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-8 border border-purple-400">
              <h4 className="text-2xl font-bold text-purple-300 mb-4">🚀 The Result</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-left">
                  <div className="text-lg font-bold mb-4">For 1000 Users:</div>
                  <div className="space-y-2">
                    <div className="text-green-300 font-bold">All operations start immediately</div>
                    <div className="text-green-300 font-bold">Total time: ~2 seconds</div>
                    <div className="text-green-300 font-bold">100x faster!</div>
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-lg font-bold mb-4">Key Benefits:</div>
                  <div className="space-y-2 text-purple-200">
                    <div>✅ Single thread handles thousands</div>
                    <div>✅ No blocking operations</div>
                    <div>✅ Maximum CPU utilization</div>
                    <div>✅ Incredible scalability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-cyan-600'
    },

    // Slide 10: The Monolithic Problem
    {
      id: 'monolithic-problem',
      title: 'The Monolithic Problem',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Code Chaos</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🏗️</div>
            <h3 className="text-3xl font-bold mb-12 text-red-300">The Giant File Problem</h3>
            
            <div className="bg-red-500/20 rounded-xl p-8 border-2 border-red-400 mb-8">
              <h4 className="text-4xl font-bold text-red-300 mb-8">One File to Rule Them All</h4>
              <div className="bg-red-600/30 rounded-lg p-8">
                <div className="text-8xl mb-6">📄</div>
                <div className="text-3xl font-bold mb-6">app.js</div>
                <div className="text-xl mb-6 text-red-200">10,000+ lines of everything</div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div className="space-y-4">
                    <h5 className="text-xl font-bold text-red-300">Development Issues</h5>
                    <div className="space-y-2 text-red-200">
                      <div className="flex items-center space-x-2">
                        <span>🔍</span>
                        <span>Hard to find anything</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>👥</span>
                        <span>Multiple developers conflict</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>🧪</span>
                        <span>Impossible to test parts</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>🔄</span>
                        <span>Can't reuse code</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h5 className="text-xl font-bold text-red-300">Production Issues</h5>
                    <div className="space-y-2 text-red-200">
                      <div className="flex items-center space-x-2">
                        <span>💥</span>
                        <span>Bug fixes break everything</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>🐌</span>
                        <span>Slow to load</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>🔧</span>
                        <span>Maintenance nightmare</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span>📈</span>
                        <span>Doesn't scale</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-500/20 rounded-xl p-8 border border-orange-400 mb-8">
              <h4 className="text-2xl font-bold text-orange-300 mb-6">🔥 Real World Example</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-orange-600/30 rounded-lg p-6">
                  <div className="text-4xl mb-3">👨‍💻</div>
                  <div className="font-bold text-lg mb-2">Developer A</div>
                  <div className="text-orange-200 text-sm">Working on user authentication (lines 1-500)</div>
                </div>
                <div className="bg-orange-600/30 rounded-lg p-6">
                  <div className="text-4xl mb-3">👩‍💻</div>
                  <div className="font-bold text-lg mb-2">Developer B</div>
                  <div className="text-orange-200 text-sm">Working on payment system (lines 3000-4500)</div>
                </div>
                <div className="bg-orange-600/30 rounded-lg p-6">
                  <div className="text-4xl mb-3">🧑‍💻</div>
                  <div className="font-bold text-lg mb-2">Developer C</div>
                  <div className="text-orange-200 text-sm">Working on email system (lines 7000-8500)</div>
                </div>
              </div>
              <div className="mt-6 bg-red-600/30 rounded-lg p-4">
                <div className="text-red-100 font-bold text-center">
                  💥 All three developers constantly overwrite each other's work!
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-600">
              <h4 className="text-2xl font-bold text-yellow-300 mb-4">🤔 The Core Problem</h4>
              <div className="text-lg text-gray-100 space-y-4">
                <p><strong>Everything in one place</strong> creates chaos and conflicts</p>
                <p><strong>No separation of concerns</strong> makes debugging impossible</p>
                <p><strong>No code reuse</strong> means writing the same thing over and over</p>
                <p className="text-yellow-300 font-bold">We need a better way to organize code!</p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-600 to-orange-600'
    },

    // Slide 11: The Module Solution
    {
      id: 'module-solution',
      title: 'The Module Solution',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Modular Magic</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🧩</div>
            <h3 className="text-3xl font-bold mb-12 text-green-300">Breaking It Down</h3>
            
            <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400 mb-8">
              <h4 className="text-3xl font-bold text-green-300 mb-6">✅ The Module Approach</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-600/30 rounded-lg p-6">
                  <div className="text-5xl mb-4">🎯</div>
                  <div className="font-bold text-xl mb-2">Single Purpose</div>
                  <div className="text-green-200 text-sm">Each module does one thing well</div>
                  <div className="mt-4 bg-green-700/50 rounded p-3">
                    <div className="text-xs">auth.js → Only authentication</div>
                  </div>
                </div>
                <div className="bg-green-600/30 rounded-lg p-6">
                  <div className="text-5xl mb-4">🔄</div>
                  <div className="font-bold text-xl mb-2">Reusable</div>
                  <div className="text-green-200 text-sm">Use the same code everywhere</div>
                  <div className="mt-4 bg-green-700/50 rounded p-3">
                    <div className="text-xs">Import math.js in any project</div>
                  </div>
                </div>
                <div className="bg-green-600/30 rounded-lg p-6">
                  <div className="text-5xl mb-4">🧪</div>
                  <div className="font-bold text-xl mb-2">Testable</div>
                  <div className="text-green-200 text-sm">Test each piece independently</div>
                  <div className="mt-4 bg-green-700/50 rounded p-3">
                    <div className="text-xs">Test payment.js separately</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400 mb-8">
              <h4 className="text-2xl font-bold text-blue-300 mb-6">📦 Three Types of Modules</h4>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-blue-600/30 rounded-lg p-6">
                  <div className="text-4xl mb-3">🏗️</div>
                  <div className="font-bold text-lg mb-3 text-blue-300">Built-in</div>
                  <div className="text-left space-y-2 text-sm">
                    <div>📁 <strong>fs</strong> - File operations</div>
                    <div>🌐 <strong>http</strong> - Web servers</div>
                    <div>📂 <strong>path</strong> - File paths</div>
                    <div>💻 <strong>os</strong> - System info</div>
                    <div>🔐 <strong>crypto</strong> - Encryption</div>
                  </div>
                  <div className="mt-4 bg-blue-700/50 rounded p-2">
                    <div className="text-xs font-bold">Free with Node.js</div>
                  </div>
                </div>

                <div className="bg-green-600/30 rounded-lg p-6">
                  <div className="text-4xl mb-3">🌍</div>
                  <div className="font-bold text-lg mb-3 text-green-300">Community (npm)</div>
                  <div className="text-left space-y-2 text-sm">
                    <div>🚀 <strong>express</strong> - Web framework</div>
                    <div>🗃️ <strong>mongoose</strong> - Database</div>
                    <div>📅 <strong>moment</strong> - Date handling</div>
                    <div>🔧 <strong>lodash</strong> - Utilities</div>
                    <div>🧪 <strong>jest</strong> - Testing</div>
                  </div>
                  <div className="mt-4 bg-green-700/50 rounded p-2">
                    <div className="text-xs font-bold">1M+ packages available</div>
                  </div>
                </div>

                <div className="bg-purple-600/30 rounded-lg p-6">
                  <div className="text-4xl mb-3">👨‍💻</div>
                  <div className="font-bold text-lg mb-3 text-purple-300">Your Own</div>
                  <div className="text-left space-y-2 text-sm">
                    <div>🧮 <strong>math.js</strong> - Calculations</div>
                    <div>✅ <strong>validate.js</strong> - Input checks</div>
                    <div>👤 <strong>user.js</strong> - User logic</div>
                    <div>📧 <strong>email.js</strong> - Send emails</div>
                    <div>🔍 <strong>search.js</strong> - Search logic</div>
                  </div>
                  <div className="mt-4 bg-purple-700/50 rounded p-2">
                    <div className="text-xs font-bold">Custom business logic</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-500/20 rounded-xl p-8 border border-orange-400">
              <h4 className="text-2xl font-bold text-orange-300 mb-4">🎯 How Modules Work</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-left">
                  <div className="text-lg font-bold mb-4 text-orange-300">Export (Share)</div>
                  <div className="bg-gray-800 rounded p-4 font-mono text-sm mb-4">
                    <div className="text-green-400">{`// math.js`}</div>
                    <div className="text-blue-300">function add(a, b) &#123;</div>
                    <div className="text-white ml-2">return a + b;</div>
                    <div className="text-blue-300">&#125;</div>
                    <div className="text-yellow-300 mt-2">module.exports = add;</div>
                  </div>
                  <div className="text-orange-200 text-sm">Make your function available to other files</div>
                </div>
                <div className="text-left">
                  <div className="text-lg font-bold mb-4 text-orange-300">Import (Use)</div>
                  <div className="bg-gray-800 rounded p-4 font-mono text-sm mb-4">
                    <div className="text-green-400">{`// app.js`}</div>
                    <div className="text-yellow-300">const add = require('./math');</div>
                    <div className="text-white mt-2">const result = add(5, 3);</div>
                    <div className="text-white">console.log(result); // 8</div>
                  </div>
                  <div className="text-orange-200 text-sm">Bring in functions from other files</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-blue-600'
    },

    // Slide 12: npm Ecosystem
    {
      id: 'npm-ecosystem',
      title: 'The npm Ecosystem',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">The Package Universe</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📋</div>
            <h3 className="text-3xl font-bold mb-12 text-green-300">npm: Node Package Manager</h3>
            
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-8 border-2 border-green-400 mb-8">
              <h4 className="text-3xl font-bold text-green-300 mb-6">🌍 World's Largest Software Registry</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-4xl mb-3">📦</div>
                  <div className="text-2xl font-bold text-yellow-300">1,000,000+</div>
                  <div className="text-white">Packages Available</div>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-4xl mb-3">👥</div>
                  <div className="text-2xl font-bold text-blue-300">Community</div>
                  <div className="text-white">Driven Development</div>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-4xl mb-3">🆓</div>
                  <div className="text-2xl font-bold text-green-300">Free</div>
                  <div className="text-white">Open Source</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400">
                <h4 className="text-2xl font-bold text-blue-300 mb-6">📄 package.json</h4>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-left text-sm">
                  <div className="text-green-300">&#123;</div>
                  <div className="ml-2 text-yellow-300">"name": "my-awesome-project",</div>
                  <div className="ml-2 text-yellow-300">"version": "1.0.0",</div>
                  <div className="ml-2 text-blue-300">"dependencies": &#123;</div>
                  <div className="ml-4 text-white">"express": "^4.18.0"</div>
                  <div className="ml-2 text-blue-300">&#125;,</div>
                  <div className="ml-2 text-purple-300">"scripts": &#123;</div>
                  <div className="ml-4 text-white">"start": "node app.js"</div>
                  <div className="ml-2 text-purple-300">&#125;</div>
                  <div className="text-green-300">&#125;</div>
                </div>
                <div className="mt-4 text-blue-200 text-sm">Your project's DNA</div>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-8 border border-purple-400">
                <h4 className="text-2xl font-bold text-purple-300 mb-6">⚡ Essential Commands</h4>
                <div className="space-y-4 text-left">
                  <div className="bg-gray-900 rounded-lg p-3 font-mono text-sm">
                    <div className="text-green-400">npm init</div>
                    <div className="text-gray-400 text-xs">Initialize new project</div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-3 font-mono text-sm">
                    <div className="text-green-400">npm install express</div>
                    <div className="text-gray-400 text-xs">Install package</div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-3 font-mono text-sm">
                    <div className="text-green-400">npm start</div>
                    <div className="text-gray-400 text-xs">Run application</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-500/20 rounded-xl p-8 border border-orange-400/30">
              <div className="text-2xl font-bold text-orange-300 mb-4">🔄 How It Works</div>
              <div className="flex justify-center items-center space-x-8">
                <div className="text-center">
                  <div className="text-4xl mb-2">🌍</div>
                  <div className="font-bold">npmjs.com</div>
                  <div className="text-sm text-gray-300">Global registry</div>
                </div>
                <div className="text-4xl">→</div>
                <div className="text-center">
                  <div className="text-4xl mb-2">📦</div>
                  <div className="font-bold">npm install</div>
                  <div className="text-sm text-gray-300">Download packages</div>
                </div>
                <div className="text-4xl">→</div>
                <div className="text-center">
                  <div className="text-4xl mb-2">📁</div>
                  <div className="font-bold">node_modules/</div>
                  <div className="text-sm text-gray-300">Local dependencies</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-teal-600 to-green-600'
    },

    // Slide 13: Real World Architecture
    {
      id: 'real-world-architecture',
      title: 'Real World Architecture',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Modern Applications</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🏗️</div>
            <h3 className="text-3xl font-bold mb-12 text-blue-300">How Node.js Fits</h3>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 mb-8">
              <h4 className="text-2xl font-bold text-yellow-300 mb-6">🌟 Complete Application Stack</h4>
              
              <div className="space-y-6">
                <div className="bg-blue-500/20 rounded-lg p-6 border-l-4 border-blue-400">
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <div className="text-xl font-bold text-blue-300">Frontend (React/Vue)</div>
                      <div className="text-blue-200">User Interface & Experience</div>
                    </div>
                    <div className="text-4xl">🎨</div>
                  </div>
                </div>
                
                <div className="text-4xl">↕️</div>
                
                <div className="bg-green-500/20 rounded-lg p-6 border-l-4 border-green-400">
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <div className="text-xl font-bold text-green-300">API Layer (Node.js)</div>
                      <div className="text-green-200">Business Logic & Data Processing</div>
                    </div>
                    <div className="text-4xl">⚙️</div>
                  </div>
                </div>
                
                <div className="text-4xl">↕️</div>
                
                <div className="bg-purple-500/20 rounded-lg p-6 border-l-4 border-purple-400">
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <div className="text-xl font-bold text-purple-300">Database (MongoDB)</div>
                      <div className="text-purple-200">Data Storage & Management</div>
                    </div>
                    <div className="text-4xl">🗃️</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-orange-500/20 rounded-xl p-8 border border-orange-400">
                <h4 className="text-2xl font-bold text-orange-300 mb-6">🚀 Why Companies Choose Node.js</h4>
                <div className="space-y-4 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">⚡</div>
                    <div>
                      <div className="font-bold">Performance</div>
                      <div className="text-orange-200 text-sm">Handle millions of connections</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🏃‍♂️</div>
                    <div>
                      <div className="font-bold">Speed</div>
                      <div className="text-orange-200 text-sm">Rapid development cycles</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">📈</div>
                    <div>
                      <div className="font-bold">Scalability</div>
                      <div className="text-orange-200 text-sm">Horizontal scaling</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">👨‍💻</div>
                    <div>
                      <div className="font-bold">Talent Pool</div>
                      <div className="text-orange-200 text-sm">JavaScript developers</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/20 rounded-xl p-8 border border-red-400">
                <h4 className="text-2xl font-bold text-red-300 mb-6">🎯 Perfect For</h4>
                <div className="space-y-4 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🔄</div>
                    <div>
                      <div className="font-bold">I/O Heavy Operations</div>
                      <div className="text-red-200 text-sm">File processing, APIs</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">📡</div>
                    <div>
                      <div className="font-bold">Real-time Applications</div>
                      <div className="text-red-200 text-sm">Chat, live updates</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🚀</div>
                    <div>
                      <div className="font-bold">Rapid Prototyping</div>
                      <div className="text-red-200 text-sm">MVPs, proof of concepts</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">🌐</div>
                    <div>
                      <div className="font-bold">API Development</div>
                      <div className="text-red-200 text-sm">REST, GraphQL services</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-600 to-pink-600'
    },

    // Slide 14: Getting Started
    {
      id: 'getting-started',
      title: 'Getting Started',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Your Node.js Environment</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🛠️</div>
            <h3 className="text-3xl font-bold mb-12 text-green-300">Installation & Setup</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400">
                <h4 className="text-2xl font-bold text-blue-300 mb-6">📥 Installation Options</h4>
                <div className="space-y-4 text-left">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">🌐 Official Website</div>
                    <div className="text-blue-200 text-sm">nodejs.org - LTS recommended</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">📦 Package Managers</div>
                    <div className="text-blue-200 text-sm space-y-1">
                      <div>• Homebrew (Mac)</div>
                      <div>• Chocolatey (Windows)</div>
                      <div>• apt/yum (Linux)</div>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">🔧 Version Managers</div>
                    <div className="text-blue-200 text-sm">nvm, n - manage multiple versions</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border border-green-400">
                <h4 className="text-2xl font-bold text-green-300 mb-6">✅ Verification</h4>
                <div className="space-y-4">
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-left">
                    <div className="text-green-400 mb-2">{`# Check Node.js version`}</div>
                    <div className="text-white">$ node --version</div>
                    <div className="text-gray-400">v18.17.0</div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-left">
                    <div className="text-green-400 mb-2"># Check npm version</div>
                    <div className="text-white">$ npm --version</div>
                    <div className="text-gray-400">9.6.7</div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-left">
                    <div className="text-green-400 mb-2"># Interactive shell</div>
                    <div className="text-white">$ node</div>
                    <div className="text-yellow-300">&gt; console.log("Hello!");</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-8 border border-purple-400/30">
              <h4 className="text-2xl font-bold text-purple-300 mb-6">📁 Project Structure</h4>
              <div className="bg-gray-900 rounded-lg p-6 font-mono text-left text-sm">
                <div className="space-y-1">
                  <div className="text-yellow-300">my-node-project/</div>
                  <div className="ml-4 text-blue-300">├── 📄 package.json        <span className="text-gray-400"># Project config</span></div>
                  <div className="ml-4 text-blue-300">├── 📄 README.md           <span className="text-gray-400"># Documentation</span></div>
                  <div className="ml-4 text-blue-300">├── 📄 .gitignore          <span className="text-gray-400"># Git ignore</span></div>
                  <div className="ml-4 text-blue-300">├── 📁 src/                <span className="text-gray-400"># Source code</span></div>
                  <div className="ml-8 text-green-300">│   ├── 📄 app.js          <span className="text-gray-400"># Main app</span></div>
                  <div className="ml-8 text-green-300">│   └── 📁 utils/          <span className="text-gray-400"># Utilities</span></div>
                  <div className="ml-4 text-blue-300">└── 📁 node_modules/       <span className="text-gray-400"># Dependencies</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-emerald-600 to-teal-600'
    },

    // Slide 15: The Full-Stack Revolution
    {
      id: 'fullstack-revolution',
      title: 'The Full-Stack Revolution',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">JavaScript Everywhere</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🌟</div>
            <h3 className="text-3xl font-bold mb-12 text-yellow-300">The Transformation</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-red-500/20 rounded-xl p-8 border-2 border-red-400">
                <h4 className="text-2xl font-bold text-red-300 mb-6">❌ Before Node.js</h4>
                <div className="space-y-4">
                  <div className="bg-red-600/20 rounded-lg p-4">
                    <div className="text-lg font-bold mb-2">👨‍💻 Frontend Developer</div>
                    <div className="text-red-200 text-sm">JavaScript, HTML, CSS</div>
                  </div>
                  <div className="bg-red-600/20 rounded-lg p-4">
                    <div className="text-lg font-bold mb-2">👩‍💻 Backend Developer</div>
                    <div className="text-red-200 text-sm">PHP, Java, Python</div>
                  </div>
                  <div className="bg-red-600/20 rounded-lg p-4">
                    <div className="text-lg font-bold mb-2">🗃️ Database Admin</div>
                    <div className="text-red-200 text-sm">SQL, Database queries</div>
                  </div>
                  <div className="bg-red-600/20 rounded-lg p-4">
                    <div className="text-lg font-bold mb-2">🔧 DevOps Engineer</div>
                    <div className="text-red-200 text-sm">Bash, Python scripts</div>
                  </div>
                </div>
                <div className="mt-6 bg-red-600/30 rounded-lg p-4">
                  <div className="text-red-100 text-center font-bold">4 languages, 4 skillsets</div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <h4 className="text-2xl font-bold text-green-300 mb-6">✅ With Node.js</h4>
                <div className="space-y-4">
                  <div className="bg-green-600/20 rounded-lg p-4">
                    <div className="text-lg font-bold mb-2">👨‍💻 Frontend Developer</div>
                    <div className="text-green-200 text-sm">JavaScript/React</div>
                  </div>
                  <div className="bg-green-600/20 rounded-lg p-4">
                    <div className="text-lg font-bold mb-2">👩‍💻 Backend Developer</div>
                    <div className="text-green-200 text-sm">JavaScript/Node.js</div>
                  </div>
                  <div className="bg-green-600/20 rounded-lg p-4">
                    <div className="text-lg font-bold mb-2">🗃️ Database</div>
                    <div className="text-green-200 text-sm">JavaScript/MongoDB</div>
                  </div>
                  <div className="bg-green-600/20 rounded-lg p-4">
                    <div className="text-lg font-bold mb-2">🔧 DevOps</div>
                    <div className="text-green-200 text-sm">JavaScript/Node tools</div>
                  </div>
                </div>
                <div className="mt-6 bg-green-600/30 rounded-lg p-4">
                  <div className="text-green-100 text-center font-bold">1 language, shared knowledge</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-blue-400 mb-8">
              <h4 className="text-2xl font-bold text-blue-300 mb-6">🚀 The Benefits</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="font-bold">Faster Development</div>
                  <div className="text-sm text-gray-300">Same patterns everywhere</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">🧠</div>
                  <div className="font-bold">Less Learning</div>
                  <div className="text-sm text-gray-300">One language to master</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">🔄</div>
                  <div className="font-bold">Code Sharing</div>
                  <div className="text-sm text-gray-300">Reuse logic everywhere</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">👥</div>
                  <div className="font-bold">Team Unity</div>
                  <div className="text-sm text-gray-300">Everyone contributes</div>
                </div>
              </div>
            </div>

            <div className="bg-orange-500/20 rounded-xl p-8 border border-orange-400/30">
              <div className="text-2xl font-bold text-orange-300 mb-4">💡 The Impact</div>
              <div className="text-lg text-orange-100">
                Node.js didn't just add server-side JavaScript - it <strong>unified web development</strong> around a single language, making full-stack development accessible to millions of developers.
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-yellow-600 to-orange-600'
    },





    // Slide 16: Package.json Deep Dive
    {
      id: 'package-json-deep-dive',
      title: 'Package.json Deep Dive',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Your Project's DNA</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📋</div>
            <h3 className="text-3xl font-bold mb-12 text-yellow-300">Understanding package.json</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-500/20 rounded-xl p-8 border border-green-400">
                <h4 className="text-2xl font-bold text-green-300 mb-6">🚀 Initialize Project</h4>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-left mb-4">
                  <div className="text-green-400 mb-2">{`# Interactive setup`}</div>
                  <div className="text-white">$ npm init</div>
                  <div className="text-gray-400 text-sm mt-2">Asks questions about your project</div>
                </div>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-left">
                  <div className="text-green-400 mb-2">{`# Quick setup with defaults`}</div>
                  <div className="text-white">$ npm init -y</div>
                  <div className="text-gray-400 text-sm mt-2">Creates package.json instantly</div>
                </div>
              </div>

              <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400">
                <h4 className="text-2xl font-bold text-blue-300 mb-6">📄 What Gets Created</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">🏷️</div>
                    <div className="font-bold text-sm">Project Name</div>
                    <div className="text-blue-200 text-xs">my-node-app</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">🔢</div>
                    <div className="font-bold text-sm">Version</div>
                    <div className="text-blue-200 text-xs">1.0.0</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">🎯</div>
                    <div className="font-bold text-sm">Entry Point</div>
                    <div className="text-blue-200 text-xs">app.js</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">⚡</div>
                    <div className="font-bold text-sm">Start Script</div>
                    <div className="text-blue-200 text-xs">node app.js</div>
                  </div>
                </div>
                <div className="mt-4 bg-blue-600/20 rounded-lg p-4 text-center">
                  <div className="text-blue-100">
                    <strong>Your project's blueprint</strong> - tells Node.js everything about your app!
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-400">
                <div className="text-4xl mb-4">📜</div>
                <h4 className="text-xl font-bold text-purple-300 mb-4">Scripts</h4>
                <div className="space-y-3">
                  <div className="bg-white/10 rounded p-3 text-center">
                    <div className="text-lg font-bold">🚀 start</div>
                    <div className="text-purple-200 text-xs">Production mode</div>
                  </div>
                  <div className="bg-white/10 rounded p-3 text-center">
                    <div className="text-lg font-bold">🔄 dev</div>
                    <div className="text-purple-200 text-xs">Development mode</div>
                  </div>
                  <div className="text-purple-200 text-xs text-center">Run with: npm start, npm run dev</div>
                </div>
              </div>

              <div className="bg-orange-500/20 rounded-xl p-6 border border-orange-400">
                <div className="text-4xl mb-4">📦</div>
                <h4 className="text-xl font-bold text-orange-300 mb-4">Dependencies</h4>
                <div className="space-y-3">
                  <div className="bg-white/10 rounded p-3 text-center">
                    <div className="text-2xl mb-2">🌐</div>
                    <div className="text-lg font-bold">Production Packages</div>
                    <div className="text-orange-200 text-xs">Needed to run your app</div>
                  </div>
                  <div className="text-orange-200 text-xs text-center">Example: Express, database drivers</div>
                </div>
              </div>

              <div className="bg-red-500/20 rounded-xl p-6 border border-red-400">
                <div className="text-4xl mb-4">🛠️</div>
                <h4 className="text-xl font-bold text-red-300 mb-4">Dev Dependencies</h4>
                <div className="space-y-3">
                  <div className="bg-white/10 rounded p-3 text-center">
                    <div className="text-2xl mb-2">⚙️</div>
                    <div className="text-lg font-bold">Development Tools</div>
                    <div className="text-red-200 text-xs">Only for building/testing</div>
                  </div>
                  <div className="text-red-200 text-xs text-center">Example: Nodemon, testing frameworks</div>
                </div>
              </div>
            </div>

            <div className="bg-cyan-500/20 rounded-xl p-8 border border-cyan-400/30">
              <div className="text-2xl font-bold text-cyan-300 mb-4">💡 Pro Tip</div>
              <div className="text-lg text-cyan-100">
                The package.json file is like your project's <strong>birth certificate</strong> - it tells Node.js and npm everything they need to know about your project!
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-yellow-600 to-green-600'
    },

    // Slide 17: Working with Files
    {
      id: 'working-with-files',
      title: 'Working with Files',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">File System Power</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📁</div>
            <h3 className="text-3xl font-bold mb-12 text-blue-300">Reading & Writing Files</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-red-500/20 rounded-xl p-8 border-2 border-red-400">
                <h4 className="text-2xl font-bold text-red-300 mb-6">🚫 Synchronous (Blocking)</h4>
                <div className="space-y-4 mb-4">
                  <div className="bg-gray-800 rounded-lg p-4 text-center">
                    <div className="text-6xl mb-2">🛑</div>
                    <div className="text-red-300 font-bold">Everything Stops!</div>
                    <div className="text-red-200 text-sm">Program waits for file to load completely</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-red-600/20 rounded p-3 text-center">
                      <div className="text-2xl">⏸️</div>
                      <div className="text-xs text-red-200">Other code waits</div>
                    </div>
                    <div className="bg-red-600/20 rounded p-3 text-center">
                      <div className="text-2xl">😴</div>
                      <div className="text-xs text-red-200">UI freezes</div>
                    </div>
                    <div className="bg-red-600/20 rounded p-3 text-center">
                      <div className="text-2xl">🐌</div>
                      <div className="text-xs text-red-200">Poor performance</div>
                    </div>
                  </div>
                </div>
                <div className="bg-red-600/30 rounded-lg p-4">
                  <div className="text-red-100 text-center font-bold">⏳ Blocks entire program until complete</div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <h4 className="text-2xl font-bold text-green-300 mb-6">✅ Asynchronous (Non-blocking)</h4>
                <div className="space-y-4 mb-4">
                  <div className="bg-gray-800 rounded-lg p-4 text-center">
                    <div className="text-6xl mb-2">⚡</div>
                    <div className="text-green-300 font-bold">Keep Going!</div>
                    <div className="text-green-200 text-sm">Program continues while file loads in background</div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="bg-green-600/20 rounded p-3 text-center">
                      <div className="text-2xl">⏯️</div>
                      <div className="text-xs text-green-200">Code keeps running</div>
                    </div>
                    <div className="bg-green-600/20 rounded p-3 text-center">
                      <div className="text-2xl">😊</div>
                      <div className="text-xs text-green-200">UI stays responsive</div>
                    </div>
                    <div className="bg-green-600/20 rounded p-3 text-center">
                      <div className="text-2xl">🚀</div>
                      <div className="text-xs text-green-200">Better performance</div>
                    </div>
                  </div>
                </div>
                <div className="bg-green-600/30 rounded-lg p-4">
                  <div className="text-green-100 text-center font-bold">🚀 Non-blocking - callback runs when ready</div>
                </div>
              </div>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-8 border border-purple-400 mb-8">
              <h4 className="text-2xl font-bold text-purple-300 mb-6">🌟 Modern Async/Await</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">📥</div>
                  <div className="font-bold text-lg mb-2">Import Promises</div>
                  <div className="text-purple-200 text-sm">fs.promises module</div>
                </div>
                <div className="bg-white/10 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">⏳</div>
                  <div className="font-bold text-lg mb-2">await File Read</div>
                  <div className="text-purple-200 text-sm">Wait for completion</div>
                </div>
                <div className="bg-white/10 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">🛡️</div>
                  <div className="font-bold text-lg mb-2">try/catch</div>
                  <div className="text-purple-200 text-sm">Handle errors cleanly</div>
                </div>
              </div>
              <div className="mt-6 bg-purple-600/20 rounded-lg p-4 text-center">
                <div className="text-purple-100">
                  <strong>Best of both worlds:</strong> Non-blocking performance + readable synchronous-style code
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-500/20 rounded-lg p-6 border border-blue-400">
                <div className="text-3xl mb-3">📖</div>
                <div className="font-bold text-blue-300">Read Files</div>
                <div className="text-blue-200 text-sm mt-2">fs.readFile(), fs.readFileSync()</div>
              </div>
              <div className="bg-green-500/20 rounded-lg p-6 border border-green-400">
                <div className="text-3xl mb-3">✍️</div>
                <div className="font-bold text-green-300">Write Files</div>
                <div className="text-green-200 text-sm mt-2">fs.writeFile(), fs.writeFileSync()</div>
              </div>
              <div className="bg-orange-500/20 rounded-lg p-6 border border-orange-400">
                <div className="text-3xl mb-3">📂</div>
                <div className="font-bold text-orange-300">Directory Ops</div>
                <div className="text-orange-200 text-sm mt-2">fs.readdir(), fs.mkdir()</div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-blue-600'
    },

    // Slide 18: Creating Your First Server
    {
      id: 'first-server',
      title: 'Creating Your First Server',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Your First Web Server</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🌐</div>
            <h3 className="text-3xl font-bold mb-12 text-green-300">HTTP Module Magic</h3>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 mb-8">
              <h4 className="text-2xl font-bold text-yellow-300 mb-6">🏗️ Server Creation Process</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-blue-500/20 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">📦</div>
                  <div className="font-bold text-lg mb-2">1. Import HTTP</div>
                  <div className="text-blue-200 text-sm">Get Node's web server tools</div>
                </div>
                <div className="bg-green-500/20 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">🏗️</div>
                  <div className="font-bold text-lg mb-2">2. Create Server</div>
                  <div className="text-green-200 text-sm">Define request handler</div>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">📤</div>
                  <div className="font-bold text-lg mb-2">3. Send Response</div>
                  <div className="text-purple-200 text-sm">HTML, JSON, or text</div>
                </div>
                <div className="bg-orange-500/20 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">👂</div>
                  <div className="font-bold text-lg mb-2">4. Start Listening</div>
                  <div className="text-orange-200 text-sm">Wait for requests on port</div>
                </div>
              </div>
              <div className="mt-6 bg-yellow-500/20 rounded-lg p-4 border border-yellow-400">
                <div className="text-yellow-100 text-center font-bold">
                  Result: A web server that responds "Hello!" to any request
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400">
                <h4 className="text-2xl font-bold text-blue-300 mb-6">📥 Request Object</h4>
                <div className="space-y-4 text-left">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">req.url</div>
                    <div className="text-blue-200 text-sm">The path: /about, /users</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">req.method</div>
                    <div className="text-blue-200 text-sm">HTTP verb: GET, POST, PUT</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">req.headers</div>
                    <div className="text-blue-200 text-sm">Client information</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border border-green-400">
                <h4 className="text-2xl font-bold text-green-300 mb-6">📤 Response Object</h4>
                <div className="space-y-4 text-left">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">res.writeHead()</div>
                    <div className="text-green-200 text-sm">Set status & headers</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">res.write()</div>
                    <div className="text-green-200 text-sm">Send data chunks</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">res.end()</div>
                    <div className="text-green-200 text-sm">Finish response</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-8 border border-purple-400/30">
              <h4 className="text-2xl font-bold text-purple-300 mb-6">🛣️ Simple Routing Logic</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-500/20 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">🏠</div>
                  <div className="font-bold text-lg mb-2">/ (Home)</div>
                  <div className="text-green-200 text-sm">Welcome message</div>
                  <div className="mt-3 bg-green-600/30 rounded p-2">
                    <div className="text-xs text-green-100">Status: 200 OK</div>
                  </div>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">ℹ️</div>
                  <div className="font-bold text-lg mb-2">/about</div>
                  <div className="text-blue-200 text-sm">About us page</div>
                  <div className="mt-3 bg-blue-600/30 rounded p-2">
                    <div className="text-xs text-blue-100">Status: 200 OK</div>
                  </div>
                </div>
                <div className="bg-red-500/20 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">❓</div>
                  <div className="font-bold text-lg mb-2">Anything else</div>
                  <div className="text-red-200 text-sm">Page not found</div>
                  <div className="mt-3 bg-red-600/30 rounded p-2">
                    <div className="text-xs text-red-100">Status: 404 Error</div>
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-purple-600/20 rounded-lg p-4">
                <div className="text-purple-100 text-center">
                  <strong>Simple if/else logic</strong> - Later we'll use Express for advanced routing!
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-teal-600'
    },

    // Slide 19: Callback Hell Problem
    {
      id: 'callback-hell',
      title: 'Callback Hell Problem',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">The Callback Nightmare</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🌀</div>
            <h3 className="text-3xl font-bold mb-12 text-red-300">When Nesting Goes Wrong</h3>
            
            <div className="bg-red-500/20 rounded-xl p-8 border-2 border-red-400 mb-8">
              <h4 className="text-3xl font-bold text-red-300 mb-8">The "Pyramid of Doom"</h4>
              
              <div className="bg-gray-800 rounded-lg p-8 mb-6">
                <div className="text-left font-mono text-sm space-y-2">
                                     <div className="text-yellow-300">readFile('file1.txt', (err1, data1) =&gt; &#123;</div>
                   <div className="ml-4 text-yellow-300">if (err1) throw err1;</div>
                   <div className="ml-4 text-yellow-300">readFile('file2.txt', (err2, data2) =&gt; &#123;</div>
                  <div className="ml-8 text-yellow-300">if (err2) throw err2;</div>
                                     <div className="ml-8 text-yellow-300">readFile('file3.txt', (err3, data3) =&gt; &#123;</div>
                  <div className="ml-12 text-yellow-300">if (err3) throw err3;</div>
                                     <div className="ml-12 text-white">{`// Finally do something!`}</div>
                  <div className="ml-12 text-white">console.log(data1, data2, data3);</div>
                  <div className="ml-8 text-yellow-300">&#125;);</div>
                  <div className="ml-4 text-yellow-300">&#125;);</div>
                  <div className="text-yellow-300">&#125;);</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-red-600/30 rounded-lg p-6">
                  <div className="text-4xl mb-3">📄</div>
                  <div className="font-bold text-lg mb-2">Read File 1</div>
                  <div className="text-red-200 text-sm">Nested callback level 1</div>
                  <div className="mt-3 bg-red-700/50 rounded p-2">
                    <div className="text-xs">Callback inside callback</div>
                  </div>
                </div>
                <div className="bg-red-600/30 rounded-lg p-6">
                  <div className="text-4xl mb-3">📄</div>
                  <div className="font-bold text-lg mb-2">Read File 2</div>
                  <div className="text-red-200 text-sm">Nested callback level 2</div>
                  <div className="mt-3 bg-red-700/50 rounded p-2">
                    <div className="text-xs">Even deeper nesting</div>
                  </div>
                </div>
                <div className="bg-red-600/30 rounded-lg p-6">
                  <div className="text-4xl mb-3">📄</div>
                  <div className="font-bold text-lg mb-2">Read File 3</div>
                  <div className="text-red-200 text-sm">Nested callback level 3</div>
                  <div className="mt-3 bg-red-700/50 rounded p-2">
                    <div className="text-xs">Maximum nesting!</div>
                  </div>
                </div>
              </div>

              <div className="bg-red-600/30 rounded-lg p-6">
                <h5 className="text-xl font-bold text-red-300 mb-4">🚨 Major Problems</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span>😵</span>
                      <span>Hard to read and understand</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>🐛</span>
                      <span>Difficult to debug</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>💥</span>
                      <span>Error handling nightmare</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span>🔧</span>
                      <span>Impossible to maintain</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>🧪</span>
                      <span>Cannot test properly</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span>😰</span>
                      <span>Developer anxiety!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-500/20 rounded-xl p-8 border border-orange-400">
              <h4 className="text-2xl font-bold text-orange-300 mb-4">🤔 Why This Happens</h4>
              <div className="text-lg text-orange-100 space-y-4">
                <p><strong>Sequential operations</strong> need previous results</p>
                <p><strong>Each callback</strong> creates another nesting level</p>
                <p><strong>Error handling</strong> must be done at every level</p>
                <p className="text-yellow-300 font-bold">There has to be a better way!</p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-600 to-red-800'
    },

    // Slide 20: Promises Solution
    {
      id: 'promises-solution',
      title: 'Promises to the Rescue',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Promise Chain Magic</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🔗</div>
            <h3 className="text-3xl font-bold mb-12 text-yellow-300">Flattening the Pyramid</h3>
            
            <div className="bg-yellow-500/20 rounded-xl p-8 border-2 border-yellow-400 mb-8">
              <h4 className="text-3xl font-bold text-yellow-300 mb-8">Linear Promise Chain</h4>
              
              <div className="bg-gray-800 rounded-lg p-8 mb-6">
                <div className="text-left font-mono text-sm space-y-2">
                  <div className="text-blue-300">readFilePromise('file1.txt')</div>
                                     <div className="text-yellow-300 ml-2">.then(data1 =&gt; &#123;</div>
                   <div className="text-white ml-4">console.log('File 1:', data1);</div>
                   <div className="text-white ml-4">return readFilePromise('file2.txt');</div>
                   <div className="text-yellow-300 ml-2">&#125;)</div>
                   <div className="text-yellow-300 ml-2">.then(data2 =&gt; &#123;</div>
                   <div className="text-white ml-4">console.log('File 2:', data2);</div>
                   <div className="text-white ml-4">return readFilePromise('file3.txt');</div>
                   <div className="text-yellow-300 ml-2">&#125;)</div>
                   <div className="text-yellow-300 ml-2">.then(data3 =&gt; &#123;</div>
                  <div className="text-white ml-4">console.log('All done!', data3);</div>
                  <div className="text-yellow-300 ml-2">&#125;)</div>
                                     <div className="text-red-300 ml-2">.catch(error =&gt; console.error(error));</div>
                </div>
              </div>

              <div className="flex items-center justify-center mb-8">
                <div className="flex items-center space-x-4">
                  <div className="bg-yellow-600/30 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">📄</div>
                    <div className="font-bold text-sm">File 1</div>
                    <div className="text-yellow-200 text-xs">.then()</div>
                  </div>
                  <div className="text-3xl text-yellow-300">→</div>
                  <div className="bg-yellow-600/30 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">📄</div>
                    <div className="font-bold text-sm">File 2</div>
                    <div className="text-yellow-200 text-xs">.then()</div>
                  </div>
                  <div className="text-3xl text-yellow-300">→</div>
                  <div className="bg-yellow-600/30 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">📄</div>
                    <div className="font-bold text-sm">File 3</div>
                    <div className="text-yellow-200 text-xs">.then()</div>
                  </div>
                  <div className="text-3xl text-yellow-300">→</div>
                  <div className="bg-green-600/30 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">✅</div>
                    <div className="font-bold text-sm">Done</div>
                    <div className="text-green-200 text-xs">Success!</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-yellow-600/30 rounded-lg p-6">
                  <div className="text-4xl mb-3">📏</div>
                  <div className="font-bold text-lg mb-2 text-yellow-300">Flatter Structure</div>
                  <div className="text-yellow-200 text-sm">No deep nesting - linear chain</div>
                </div>
                <div className="bg-yellow-600/30 rounded-lg p-6">
                  <div className="text-4xl mb-3">🎯</div>
                  <div className="font-bold text-lg mb-2 text-yellow-300">Single Error Handler</div>
                  <div className="text-yellow-200 text-sm">One .catch() handles all errors</div>
                </div>
                <div className="bg-yellow-600/30 rounded-lg p-6">
                  <div className="text-4xl mb-3">🔄</div>
                  <div className="font-bold text-lg mb-2 text-yellow-300">Chainable</div>
                  <div className="text-yellow-200 text-sm">Return promises to continue chain</div>
                </div>
              </div>
            </div>

            <div className="bg-green-500/20 rounded-xl p-8 border border-green-400">
              <h4 className="text-2xl font-bold text-green-300 mb-4">🎉 Promise Benefits</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <div className="font-bold text-green-300">Much more readable</div>
                      <div className="text-green-200 text-sm">Linear flow, not nested</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🛡️</span>
                    <div>
                      <div className="font-bold text-green-300">Better error handling</div>
                      <div className="text-green-200 text-sm">Single .catch() for all</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🔧</span>
                    <div>
                      <div className="font-bold text-green-300">Easier to maintain</div>
                      <div className="text-green-200 text-sm">Add/remove steps easily</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🧪</span>
                    <div>
                      <div className="font-bold text-green-300">Testable</div>
                      <div className="text-green-200 text-sm">Each .then() can be tested</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-yellow-600 to-orange-600'
    },

    // Slide 21: Async/Await Modern Solution
    {
      id: 'async-await-modern',
      title: 'Async/Await: The Modern Way',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Code That Reads Like English</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📖</div>
            <h3 className="text-3xl font-bold mb-12 text-green-300">The Ultimate Solution</h3>
            
            <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400 mb-8">
              <h4 className="text-3xl font-bold text-green-300 mb-8">Sequential & Readable</h4>
              
              <div className="bg-gray-800 rounded-lg p-8 mb-6">
                <div className="text-left font-mono text-sm space-y-2">
                  <div className="text-blue-300">async function readAllFiles() &#123;</div>
                  <div className="text-purple-300 ml-2">try &#123;</div>
                  <div className="text-white ml-4">const data1 = await readFile('file1.txt');</div>
                  <div className="text-white ml-4">console.log('File 1:', data1);</div>
                  <div className="text-white ml-4 mt-2">const data2 = await readFile('file2.txt');</div>
                  <div className="text-white ml-4">console.log('File 2:', data2);</div>
                  <div className="text-white ml-4 mt-2">const data3 = await readFile('file3.txt');</div>
                  <div className="text-white ml-4">console.log('All done!', data3);</div>
                  <div className="text-purple-300 ml-2">&#125; catch (error) &#123;</div>
                  <div className="text-red-300 ml-4">console.error('Error:', error);</div>
                  <div className="text-purple-300 ml-2">&#125;</div>
                  <div className="text-blue-300">&#125;</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-green-600/30 rounded-lg p-6">
                  <div className="text-4xl mb-3">📄</div>
                  <div className="font-bold text-lg mb-2">await File 1</div>
                  <div className="text-green-200 text-sm">Wait for result</div>
                  <div className="mt-3 bg-green-700/50 rounded p-2">
                    <div className="text-xs">Line by line execution</div>
                  </div>
                </div>
                <div className="bg-green-600/30 rounded-lg p-6">
                  <div className="text-4xl mb-3">📄</div>
                  <div className="font-bold text-lg mb-2">await File 2</div>
                  <div className="text-green-200 text-sm">Wait for result</div>
                  <div className="mt-3 bg-green-700/50 rounded p-2">
                    <div className="text-xs">Previous result available</div>
                  </div>
                </div>
                <div className="bg-green-600/30 rounded-lg p-6">
                  <div className="text-4xl mb-3">📄</div>
                  <div className="font-bold text-lg mb-2">await File 3</div>
                  <div className="text-green-200 text-sm">Wait for result</div>
                  <div className="mt-3 bg-green-700/50 rounded p-2">
                    <div className="text-xs">All previous data available</div>
                  </div>
                </div>
                <div className="bg-green-600/30 rounded-lg p-6">
                  <div className="text-4xl mb-3">🎉</div>
                  <div className="font-bold text-lg mb-2">All Done!</div>
                  <div className="text-green-200 text-sm">Success!</div>
                  <div className="mt-3 bg-green-700/50 rounded p-2">
                    <div className="text-xs">Clean completion</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-600/30 rounded-lg p-6">
                  <div className="text-4xl mb-3">📚</div>
                  <div className="font-bold text-lg mb-2 text-green-300">Readable</div>
                  <div className="text-green-200 text-sm">Reads like synchronous code</div>
                  <div className="text-green-200 text-xs mt-2">Top to bottom, step by step</div>
                </div>
                <div className="bg-green-600/30 rounded-lg p-6">
                  <div className="text-4xl mb-3">🛡️</div>
                  <div className="font-bold text-lg mb-2 text-green-300">Safe</div>
                  <div className="text-green-200 text-sm">try/catch error handling</div>
                  <div className="text-green-200 text-xs mt-2">Familiar error patterns</div>
                </div>
                <div className="bg-green-600/30 rounded-lg p-6">
                  <div className="text-4xl mb-3">🚀</div>
                  <div className="font-bold text-lg mb-2 text-green-300">Modern</div>
                  <div className="text-green-200 text-sm">Industry standard today</div>
                  <div className="text-green-200 text-xs mt-2">ES2017+ supported everywhere</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400">
              <h4 className="text-2xl font-bold text-blue-300 mb-4">🎯 Why Async/Await Wins</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🧠</span>
                    <div>
                      <div className="font-bold text-blue-300">Mental Model</div>
                      <div className="text-blue-200 text-sm">Thinks like normal code</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🐛</span>
                    <div>
                      <div className="font-bold text-blue-300">Easy Debugging</div>
                      <div className="text-blue-200 text-sm">Stack traces make sense</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🔄</span>
                    <div>
                      <div className="font-bold text-blue-300">Refactoring</div>
                      <div className="text-blue-200 text-sm">Easy to modify and extend</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">👥</span>
                    <div>
                      <div className="font-bold text-blue-300">Team Friendly</div>
                      <div className="text-blue-200 text-sm">Everyone can read it</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-blue-600'
    },

    // Slide 22: Development Pain Point
    {
      id: 'development-pain',
      title: 'Development Pain Point',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">The Restart Loop</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">😤</div>
            <h3 className="text-3xl font-bold mb-12 text-red-300">Manual Server Restarts</h3>
            
            <div className="bg-red-500/20 rounded-xl p-8 border-2 border-red-400 mb-8">
              <h4 className="text-4xl font-bold text-red-300 mb-8">The Endless Cycle</h4>
              <div className="space-y-6">
                <div className="bg-red-600/30 rounded-lg p-6">
                  <div className="text-5xl mb-4">📝</div>
                  <div className="text-2xl font-bold mb-3">1. Edit Code</div>
                  <div className="text-red-200">Make changes to app.js</div>
                  <div className="text-red-200 text-sm mt-2">Add new routes, fix bugs, update logic...</div>
                </div>
                
                <div className="text-4xl text-red-300">↓</div>
                
                <div className="bg-red-600/30 rounded-lg p-6">
                  <div className="text-5xl mb-4">⛔</div>
                  <div className="text-2xl font-bold mb-3">2. Stop Server</div>
                  <div className="text-red-200">Ctrl+C to kill the running process</div>
                  <div className="text-red-200 text-sm mt-2">Server stops, connections dropped</div>
                </div>
                
                <div className="text-4xl text-red-300">↓</div>
                
                <div className="bg-red-600/30 rounded-lg p-6">
                  <div className="text-5xl mb-4">🔄</div>
                  <div className="text-2xl font-bold mb-3">3. Restart Server</div>
                  <div className="text-red-200">Type "node app.js" again</div>
                  <div className="text-red-200 text-sm mt-2">Wait for server to start up...</div>
                </div>
                
                <div className="text-4xl text-red-300">↓</div>
                
                <div className="bg-red-600/30 rounded-lg p-6">
                  <div className="text-5xl mb-4">🔁</div>
                  <div className="text-2xl font-bold mb-3">4. Repeat Forever</div>
                  <div className="text-red-200">Every. Single. Change.</div>
                  <div className="text-red-200 text-sm mt-2">Hundreds of times per day!</div>
                </div>
              </div>
            </div>

            <div className="bg-orange-500/20 rounded-xl p-8 border border-orange-400 mb-8">
              <h4 className="text-2xl font-bold text-orange-300 mb-6">📊 The Reality</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-orange-600/30 rounded-lg p-6">
                  <div className="text-4xl mb-3">⏱️</div>
                  <div className="font-bold text-lg mb-2">Time Wasted</div>
                  <div className="text-orange-200 text-sm">5-10 seconds per restart</div>
                  <div className="text-orange-200 text-xs mt-2">×100 changes = 10+ minutes daily</div>
                </div>
                <div className="bg-orange-600/30 rounded-lg p-6">
                  <div className="text-4xl mb-3">🧠</div>
                  <div className="font-bold text-lg mb-2">Mental Overhead</div>
                  <div className="text-orange-200 text-sm">Context switching</div>
                  <div className="text-orange-200 text-xs mt-2">Break flow state constantly</div>
                </div>
                <div className="bg-orange-600/30 rounded-lg p-6">
                  <div className="text-4xl mb-3">😫</div>
                  <div className="font-bold text-lg mb-2">Developer Frustration</div>
                  <div className="text-orange-200 text-sm">Repetitive manual task</div>
                  <div className="text-orange-200 text-xs mt-2">Kills productivity & motivation</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl p-8 border border-gray-600">
              <h4 className="text-2xl font-bold text-yellow-300 mb-4">💭 Developer Thoughts</h4>
              <div className="text-lg text-gray-100 space-y-4">
                <p><em>"I just want to see my changes immediately!"</em></p>
                <p><em>"Why do I have to manually restart every time?"</em></p>
                <p><em>"This workflow is killing my productivity..."</em></p>
                <p className="text-yellow-300 font-bold">There has to be a better way!</p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-600 to-orange-600'
    },

    // Slide 23: Nodemon Solution
    {
      id: 'nodemon-solution',
      title: 'Nodemon to the Rescue',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Auto-Restart Magic</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">✨</div>
            <h3 className="text-3xl font-bold mb-12 text-green-300">Development Made Easy</h3>
            
            <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400 mb-8">
              <h4 className="text-3xl font-bold text-green-300 mb-8">Setup & Usage</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-800 rounded-lg p-8">
                  <h5 className="text-xl font-bold text-green-300 mb-4">📦 Install Nodemon</h5>
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-left">
                    <div className="text-green-400 mb-2">{`# Install globally`}</div>
                    <div className="text-white">$ npm install -g nodemon</div>
                  </div>
                  <div className="text-green-200 text-sm mt-4">One-time setup for your system</div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-8">
                  <h5 className="text-xl font-bold text-green-300 mb-4">🚀 Start Your Server</h5>
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-left">
                    <div className="text-green-400 mb-2">{`# Instead of: node app.js`}</div>
                    <div className="text-white">$ nodemon app.js</div>
                  </div>
                  <div className="text-green-200 text-sm mt-4">Just replace "node" with "nodemon"</div>
                </div>
              </div>

              <div className="bg-green-600/30 rounded-lg p-8">
                <div className="text-6xl mb-4">🎯</div>
                <h5 className="text-2xl font-bold text-green-300 mb-4">The Magic Workflow</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-3xl mb-2">✏️</div>
                    <div className="font-bold">Edit Code</div>
                    <div className="text-green-200 text-sm mt-1">Make your changes</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-3xl mb-2">💾</div>
                    <div className="font-bold">Save File</div>
                    <div className="text-green-200 text-sm mt-1">Ctrl+S or Cmd+S</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-3xl mb-2">⚡</div>
                    <div className="font-bold">Auto-Restart!</div>
                    <div className="text-green-200 text-sm mt-1">Server restarts instantly</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400 mb-8">
              <h4 className="text-2xl font-bold text-blue-300 mb-6">⚙️ Package.json Integration</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-800 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">🚀</div>
                  <div className="font-bold text-lg mb-2">Production Script</div>
                  <div className="bg-green-600/20 rounded p-2 font-mono text-sm">
                    "start": "node app.js"
                  </div>
                  <div className="text-blue-200 text-xs mt-2">For deployment & production</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-6 text-center">
                  <div className="text-4xl mb-3">🔄</div>
                  <div className="font-bold text-lg mb-2">Development Script</div>
                  <div className="bg-purple-600/20 rounded p-2 font-mono text-sm">
                    "dev": "nodemon app.js"
                  </div>
                  <div className="text-blue-200 text-xs mt-2">Auto-restart during development</div>
                </div>
              </div>
              <div className="bg-blue-600/20 rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-blue-100 font-bold">
                  Run with: <span className="font-mono bg-gray-800 px-3 py-1 rounded mx-2">npm run dev</span>
                </div>
                <div className="text-blue-200 text-sm mt-2">Professional development workflow!</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-purple-500/20 rounded-lg p-6 border border-purple-400">
                <div className="text-4xl mb-3">⚡</div>
                <div className="font-bold text-purple-300">Instant Feedback</div>
                <div className="text-purple-200 text-sm mt-2">See changes immediately</div>
              </div>
              <div className="bg-orange-500/20 rounded-lg p-6 border border-orange-400">
                <div className="text-4xl mb-3">🎯</div>
                <div className="font-bold text-orange-300">Stay in Flow</div>
                <div className="text-orange-200 text-sm mt-2">No context switching</div>
              </div>
              <div className="bg-pink-500/20 rounded-lg p-6 border border-pink-400">
                <div className="text-4xl mb-3">🚀</div>
                <div className="font-bold text-pink-300">10x Productivity</div>
                <div className="text-pink-200 text-sm mt-2">Focus on building, not restarting</div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-blue-600'
    },

    // Slide 24: Thank You
    {
      id: 'thank-you',
      title: 'Thank You!',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-9xl mb-12 animate-bounce-in">🎉</div>
            
            <h2 className="text-6xl font-extrabold mb-12 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Thank You!
            </h2>
            
            <div className="text-2xl text-gray-300 leading-relaxed">
              See you next week!
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 via-blue-600 to-purple-600'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const slideElements = document.querySelectorAll('[data-slide-index]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      let currentSlideIndex = 0;
      slideElements.forEach((element, index) => {
        const elementTop = element.offsetTop;
        const elementBottom = elementTop + element.offsetHeight;
        
        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
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

export default Class9Slides; 