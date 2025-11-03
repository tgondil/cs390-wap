import React, { useEffect, useState } from 'react';

// Custom CSS for animations
const customStyles = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in { animation: fade-in 0.5s ease-out; }
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(239, 68, 68, 0.3); }
    50% { box-shadow: 0 0 30px rgba(239, 68, 68, 0.6); }
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

const Class15Slides = () => {
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
            <h2 className="text-4xl font-semibold text-cyan-100 mb-4">
              Web Applications Programming
            </h2>
            <div className="text-2xl text-cyan-200">
              Class 15: Full-Stack Integration
            </div>
            <div className="text-xl text-cyan-300 mt-4">
              Connecting Frontend to Backend
            </div>
          </div>
          
          <div className="mt-16">
            <div className="text-2xl font-medium text-white">Tanay Gondil</div>
          </div>
        </div>
      ),
      bgGradient: 'from-cyan-600 to-blue-700'
    },

    // Slide 2: GeoGuessr
    {
      id: 'geoguessr',
      title: 'GeoGuessr',
      content: (
        <div className="text-center space-y-12">
          <style>{customStyles}</style>
          <div className="space-y-8">
            <div className="text-8xl mb-6">🌍</div>
            <h1 className="text-6xl font-bold text-white mb-6">Let's Play GeoGuessr!</h1>
            <p className="text-2xl text-green-200">
              Quick geography game before we start
            </p>
          </div>
          
          <div className="mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-3xl mx-auto">
              <p className="text-3xl text-white font-semibold mb-6">Join the game:</p>
              <a 
                href="https://www.geoguessr.com/join/86B7C?s=Url" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-3xl px-12 py-6 rounded-xl transition-all hover:scale-105"
              >
                Click to Join Game
              </a>
              <p className="text-xl text-gray-300 mt-6 font-mono">
                geoguessr.com/join/86B7C
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-emerald-700'
    },

    // Slide 3: The Integration Gap
    {
      id: 'integration-gap',
      title: 'Bridging Two Worlds',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🌉 Bridging Two Worlds</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/30">
              <p className="text-2xl text-center mb-4">
                <span className="font-bold text-yellow-300">So far, you've built two separate applications...</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-blue-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-blue-400/50">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">⚛️</div>
                  <h3 className="text-3xl font-bold text-blue-300">React Frontend</h3>
                  <p className="text-xl text-blue-200 mt-3">Living on port 3000</p>
                </div>
                <div className="space-y-3">
                  <div className="bg-blue-600/30 rounded-xl p-4">
                    <p className="text-lg">✓ Beautiful UI components</p>
                  </div>
                  <div className="bg-blue-600/30 rounded-xl p-4">
                    <p className="text-lg">✓ State management</p>
                  </div>
                  <div className="bg-blue-600/30 rounded-xl p-4">
                    <p className="text-lg">✓ User interactions</p>
                  </div>
                  <div className="bg-red-600/30 rounded-xl p-4">
                    <p className="text-lg">❌ No real data</p>
                  </div>
              </div>
            </div>

              <div className="bg-green-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-green-400/50">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🚂</div>
                  <h3 className="text-3xl font-bold text-green-300">Express Backend</h3>
                  <p className="text-xl text-green-200 mt-3">Living on port 5000</p>
                </div>
                <div className="space-y-3">
                  <div className="bg-green-600/30 rounded-xl p-4">
                    <p className="text-lg">✓ RESTful API routes</p>
                  </div>
                  <div className="bg-green-600/30 rounded-xl p-4">
                    <p className="text-lg">✓ Database operations</p>
                  </div>
                  <div className="bg-green-600/30 rounded-xl p-4">
                    <p className="text-lg">✓ Business logic</p>
                  </div>
                  <div className="bg-red-600/30 rounded-xl p-4">
                    <p className="text-lg">❌ No user interface</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-yellow-400/50">
              <div className="text-center">
                <div className="text-6xl mb-4">🔗</div>
                <h3 className="text-3xl font-bold text-yellow-300 mb-4">Today: Make Them Talk!</h3>
                <p className="text-xl text-yellow-100">Learn how to connect React to Express and build your first real full-stack application</p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-indigo-700'
    },

    // Slide 3: Three-Tier Architecture
    {
      id: 'architecture',
      title: 'The Three-Tier Architecture',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🏗️ The Three-Tier Architecture</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="font-mono text-center space-y-6">
                <div className="bg-blue-500/30 rounded-xl p-6 border-2 border-blue-400/50">
                  <div className="text-5xl mb-3">💻</div>
                  <h3 className="text-3xl font-bold text-blue-300 mb-2">Presentation Layer</h3>
                  <p className="text-xl text-blue-200">React Frontend (port 3000)</p>
                  <p className="text-base text-blue-300 mt-2">What users see and interact with</p>
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-4xl">⬇️ HTTP Requests ⬇️</div>
                </div>

                <div className="bg-green-500/30 rounded-xl p-6 border-2 border-green-400/50">
                  <div className="text-5xl mb-3">🚂</div>
                  <h3 className="text-3xl font-bold text-green-300 mb-2">Application Layer</h3>
                  <p className="text-xl text-green-200">Express Server (port 5000)</p>
                  <p className="text-base text-green-300 mt-2">Business logic, validation, authentication</p>
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-4xl">⬇️ Database Queries ⬇️</div>
                </div>

                <div className="bg-purple-500/30 rounded-xl p-6 border-2 border-purple-400/50">
                  <div className="text-5xl mb-3">🗄️</div>
                  <h3 className="text-3xl font-bold text-purple-300 mb-2">Data Layer</h3>
                  <p className="text-xl text-purple-200">MongoDB Database</p>
                  <p className="text-base text-purple-300 mt-2">Long-term data storage</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-yellow-400/50">
              <p className="text-2xl text-center">
                <span className="font-bold text-yellow-300">Key Insight:</span> Each layer has a specific job and communicates with the layers next to it
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-700'
    },

    // Slide 4: Why Separate Frontend and Backend?
    {
      id: 'why-separate',
      title: 'Why Separate Frontend and Backend?',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🤔 Why Not Build It All Together?</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-green-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-green-400/50">
                  <div className="text-center mb-4">
                  <div className="text-5xl mb-3">📱</div>
                  <h3 className="text-2xl font-bold text-green-300">Multiple Clients</h3>
                  </div>
                <p className="text-lg text-center">
                  Same API can power web app, mobile app, desktop app, and more!
                </p>
                  </div>

              <div className="bg-blue-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-blue-400/50">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">📊</div>
                  <h3 className="text-2xl font-bold text-blue-300">Independent Scaling</h3>
                </div>
                <p className="text-lg text-center">
                  Scale frontend and backend separately based on different needs
                </p>
                </div>

              <div className="bg-purple-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-purple-400/50">
                  <div className="text-center mb-4">
                  <div className="text-5xl mb-3">👥</div>
                  <h3 className="text-2xl font-bold text-purple-300">Team Specialization</h3>
                  </div>
                <p className="text-lg text-center">
                  Frontend devs and backend devs can work in parallel without conflicts
                </p>
                  </div>

              <div className="bg-orange-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-orange-400/50">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">🔧</div>
                  <h3 className="text-2xl font-bold text-orange-300">Different Technologies</h3>
                </div>
                <p className="text-lg text-center">
                  Use the best tool for each job: React for UI, Node for server logic
                </p>
              </div>

              <div className="bg-pink-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-pink-400/50">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">🔒</div>
                  <h3 className="text-2xl font-bold text-pink-300">Security</h3>
                </div>
                <p className="text-lg text-center">
                  Keep sensitive logic and secrets on the server, away from the browser
                </p>
            </div>

              <div className="bg-teal-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-teal-400/50">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">🎯</div>
                  <h3 className="text-2xl font-bold text-teal-300">Separation of Concerns</h3>
                </div>
                <p className="text-lg text-center">
                  UI logic stays in frontend, data logic stays in backend - cleaner code!
                </p>
              </div>
            </div>

            <div className="bg-yellow-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-yellow-400/50">
              <p className="text-2xl text-center">
                <span className="font-bold text-yellow-300">Modern Standard:</span> Build them separately, connect them with APIs
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-700 to-cyan-800'
    },

    // Slide 5: Development vs Production
    {
      id: 'dev-vs-prod',
      title: 'Development vs Production Setup',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🔄 Development vs Production</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="grid grid-cols-2 gap-8">
              <div className="bg-blue-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-blue-400/50">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">💻</div>
                  <h3 className="text-3xl font-bold text-blue-300">Development</h3>
                  <p className="text-xl text-blue-200 mt-2">Your Laptop</p>
                    </div>
                
                <div className="space-y-4">
                  <div className="bg-blue-600/30 rounded-xl p-4">
                    <p className="font-bold text-lg mb-2">Two Separate Servers</p>
                    <p className="text-sm text-blue-200">Frontend: localhost:3000</p>
                    <p className="text-sm text-blue-200">Backend: localhost:5000</p>
                    </div>
                  <div className="bg-blue-600/30 rounded-xl p-4">
                    <p className="font-bold text-lg mb-2">Two Terminal Windows</p>
                    <p className="text-sm text-blue-200">Both running simultaneously</p>
                  </div>
                  <div className="bg-blue-600/30 rounded-xl p-4">
                    <p className="font-bold text-lg mb-2">Hot Reload</p>
                    <p className="text-sm text-blue-200">Changes appear instantly</p>
                  </div>
                  <div className="bg-blue-600/30 rounded-xl p-4">
                    <p className="font-bold text-lg mb-2">CORS Required</p>
                    <p className="text-sm text-blue-200">Different ports = different origins</p>
                  </div>
                  </div>
                </div>

              <div className="bg-green-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-green-400/50">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🌐</div>
                  <h3 className="text-3xl font-bold text-green-300">Production</h3>
                  <p className="text-xl text-green-200 mt-2">Cloud Server</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-green-600/30 rounded-xl p-4">
                    <p className="font-bold text-lg mb-2">Often Same Domain</p>
                    <p className="text-sm text-green-200">Frontend: myapp.com</p>
                    <p className="text-sm text-green-200">Backend: myapp.com/api</p>
                    </div>
                  <div className="bg-green-600/30 rounded-xl p-4">
                    <p className="font-bold text-lg mb-2">OR Subdomains</p>
                    <p className="text-sm text-green-200">Frontend: myapp.com</p>
                    <p className="text-sm text-green-200">Backend: api.myapp.com</p>
                    </div>
                  <div className="bg-green-600/30 rounded-xl p-4">
                    <p className="font-bold text-lg mb-2">Optimized Build</p>
                    <p className="text-sm text-green-200">Minified, bundled, fast</p>
                  </div>
                  <div className="bg-green-600/30 rounded-xl p-4">
                    <p className="font-bold text-lg mb-2">Environment Variables</p>
                    <p className="text-sm text-green-200">Different configs per environment</p>
                  </div>
                </div>
                  </div>
                </div>

            <div className="bg-purple-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-purple-400/50">
              <p className="text-2xl text-center mb-2">
                <span className="font-bold text-yellow-300">Today's Focus:</span> Development setup
              </p>
              <p className="text-lg text-center text-purple-100">
                We'll deal with production deployment in a later class!
              </p>
                </div>
          </div>
        </div>
      ),
      bgGradient: 'from-teal-600 to-emerald-700'
    },

    // Slide 6: The Request-Response Cycle - Introduction
    {
      id: 'request-response-intro',
      title: 'The Request-Response Cycle',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🔄 The Request-Response Cycle</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-purple-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-purple-400/50">
              <p className="text-2xl text-center mb-4">
                <span className="font-bold text-yellow-300">The Question:</span> What exactly happens when you click "Load Posts"?
              </p>
              <p className="text-lg text-center text-purple-100">
                Let's trace the entire journey of data from button click to screen update
              </p>
                    </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <div className="text-center mb-8">
                <div className="text-7xl mb-4">🎬</div>
                <h3 className="text-3xl font-bold text-white mb-4">A 15-Step Journey</h3>
                <p className="text-xl text-gray-200">
                  All happening in ~50-200 milliseconds! ⚡
                </p>
                    </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="bg-blue-500/30 rounded-xl p-6 border-2 border-blue-400/50">
                  <div className="text-4xl mb-3 text-center">👆</div>
                  <h4 className="text-xl font-bold text-blue-300 mb-2 text-center">Frontend Phase</h4>
                  <p className="text-center text-blue-200">Steps 1-3</p>
                  <p className="text-sm text-center text-blue-300 mt-2">React prepares and sends request</p>
                    </div>

                <div className="bg-green-500/30 rounded-xl p-6 border-2 border-green-400/50">
                  <div className="text-4xl mb-3 text-center">🚂</div>
                  <h4 className="text-xl font-bold text-green-300 mb-2 text-center">Backend Phase</h4>
                  <p className="text-center text-green-200">Steps 4-11</p>
                  <p className="text-sm text-center text-green-300 mt-2">Express processes and queries database</p>
                </div>

                <div className="bg-orange-500/30 rounded-xl p-6 border-2 border-orange-400/50">
                  <div className="text-4xl mb-3 text-center">🎨</div>
                  <h4 className="text-xl font-bold text-orange-300 mb-2 text-center">UI Update Phase</h4>
                  <p className="text-center text-orange-200">Steps 12-15</p>
                  <p className="text-sm text-center text-orange-300 mt-2">React updates and renders new data</p>
                </div>
                  </div>
                </div>

            <div className="bg-yellow-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-yellow-400/50">
              <p className="text-xl text-center">
                <span className="font-bold text-yellow-300">Next slide:</span> Let's walk through every single step! 🚶
              </p>
                </div>
                    </div>
                    </div>
      ),
      bgGradient: 'from-purple-700 to-pink-800'
    },

    // Slide 7: The Complete 15-Step Flow
    {
      id: 'complete-flow',
      title: 'The Complete Data Flow',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-10 text-center">📋 The Complete Data Flow</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="grid grid-cols-2 gap-4">
                {/* Frontend Steps */}
                <div className="space-y-3">
                  <div className="bg-blue-500/20 rounded-lg p-3 border-l-4 border-blue-400">
                    <p className="font-bold text-lg mb-1"><span className="text-blue-300">1.</span> User clicks "Load Posts" button</p>
                    </div>
                  <div className="bg-blue-500/20 rounded-lg p-3 border-l-4 border-blue-400">
                    <p className="font-bold text-lg mb-1"><span className="text-blue-300">2.</span> Event handler calls function</p>
                    </div>
                  <div className="bg-blue-500/20 rounded-lg p-3 border-l-4 border-blue-400">
                    <p className="font-bold text-lg mb-1"><span className="text-blue-300">3.</span> fetch() creates HTTP request</p>
                  </div>

                  {/* Network */}
                  <div className="bg-gray-500/20 rounded-lg p-3 border-l-4 border-gray-400">
                    <p className="font-bold text-lg mb-1 text-center">⬇️ Network ⬇️</p>
                </div>

                  {/* Backend Steps */}
                  <div className="bg-green-500/20 rounded-lg p-3 border-l-4 border-green-400">
                    <p className="font-bold text-lg mb-1"><span className="text-green-300">4.</span> Express receives request</p>
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-3 border-l-4 border-green-400">
                    <p className="font-bold text-lg mb-1"><span className="text-green-300">5.</span> Middleware pipeline runs</p>
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-3 border-l-4 border-green-400">
                    <p className="font-bold text-lg mb-1"><span className="text-green-300">6.</span> Route handler executes</p>
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-3 border-l-4 border-green-400">
                    <p className="font-bold text-lg mb-1"><span className="text-green-300">7.</span> Mongoose queries MongoDB</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-green-500/20 rounded-lg p-3 border-l-4 border-green-400">
                    <p className="font-bold text-lg mb-1"><span className="text-green-300">8.</span> Database returns documents</p>
                    </div>
                  <div className="bg-green-500/20 rounded-lg p-3 border-l-4 border-green-400">
                    <p className="font-bold text-lg mb-1"><span className="text-green-300">9.</span> Express formats as JSON</p>
                    </div>
                  <div className="bg-green-500/20 rounded-lg p-3 border-l-4 border-green-400">
                    <p className="font-bold text-lg mb-1"><span className="text-green-300">10.</span> Response headers added</p>
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-3 border-l-4 border-green-400">
                    <p className="font-bold text-lg mb-1"><span className="text-green-300">11.</span> Express sends response</p>
                </div>

                  {/* Network */}
                  <div className="bg-gray-500/20 rounded-lg p-3 border-l-4 border-gray-400">
                    <p className="font-bold text-lg mb-1 text-center">⬆️ Network ⬆️</p>
              </div>

                  {/* Frontend Response Steps */}
                  <div className="bg-orange-500/20 rounded-lg p-3 border-l-4 border-orange-400">
                    <p className="font-bold text-lg mb-1"><span className="text-orange-300">12.</span> Browser receives response</p>
            </div>
                  <div className="bg-orange-500/20 rounded-lg p-3 border-l-4 border-orange-400">
                    <p className="font-bold text-lg mb-1"><span className="text-orange-300">13.</span> .then() or await receives data</p>
                  </div>
                  <div className="bg-orange-500/20 rounded-lg p-3 border-l-4 border-orange-400">
                    <p className="font-bold text-lg mb-1"><span className="text-orange-300">14.</span> setState() updates component</p>
                  </div>
                  <div className="bg-orange-500/20 rounded-lg p-3 border-l-4 border-orange-400">
                    <p className="font-bold text-lg mb-1"><span className="text-orange-300">15.</span> React re-renders UI</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-yellow-500/20 backdrop-blur-md rounded-xl p-4 border-2 border-yellow-400/50">
              <p className="text-xl text-center">
                ⚡ <span className="font-bold text-yellow-300">All in ~50-200ms!</span> User just sees instant data update ⚡
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-700 to-blue-800'
    },

    // Slide 8: What Can Go Wrong?
    {
      id: 'what-goes-wrong',
      title: 'What Can Go Wrong?',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">⚠️ What Can Go Wrong?</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <p className="text-2xl text-center mb-4">
                <span className="font-bold text-yellow-300">Spoiler:</span> Lots of things! Let's understand them:
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-red-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-red-400/50">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">❌</div>
                  <h3 className="text-2xl font-bold text-red-300">CORS Error</h3>
                    </div>
                <p className="text-lg mb-2">Browser blocks request</p>
                <p className="text-sm text-red-200">Different ports = different origins</p>
                    </div>

              <div className="bg-red-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-red-400/50">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">🔌</div>
                  <h3 className="text-2xl font-bold text-red-300">Server Not Running</h3>
                    </div>
                <p className="text-lg mb-2">Connection refused</p>
                <p className="text-sm text-red-200">Forgot to start Express?</p>
              </div>

              <div className="bg-red-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-red-400/50">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">🔍</div>
                  <h3 className="text-2xl font-bold text-red-300">404 Not Found</h3>
                  </div>
                <p className="text-lg mb-2">Endpoint doesn't exist</p>
                <p className="text-sm text-red-200">Typo in URL or route?</p>
                  </div>

              <div className="bg-red-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-red-400/50">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">💥</div>
                  <h3 className="text-2xl font-bold text-red-300">500 Server Error</h3>
                  </div>
                <p className="text-lg mb-2">Server crashed</p>
                <p className="text-sm text-red-200">Check Express console logs</p>
                </div>

              <div className="bg-red-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-red-400/50">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">🔐</div>
                  <h3 className="text-2xl font-bold text-red-300">401 Unauthorized</h3>
              </div>
                <p className="text-lg mb-2">Missing or invalid token</p>
                <p className="text-sm text-red-200">Need to authenticate first?</p>
            </div>

              <div className="bg-red-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-red-400/50">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">⏳</div>
                  <h3 className="text-2xl font-bold text-red-300">Pending Forever</h3>
                  </div>
                <p className="text-lg mb-2">Request never completes</p>
                <p className="text-sm text-red-200">Server hanging or infinite loop?</p>
                </div>
              </div>

            <div className="bg-green-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-green-400/50">
              <p className="text-2xl text-center">
                <span className="font-bold text-green-300">Good News:</span> We'll learn how to debug all of these! 🔧
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-700 to-orange-800'
    },

    // Slide 9: CORS - The #1 Problem
    {
      id: 'cors-problem',
      title: 'CORS: The #1 Problem',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🚨 CORS: The #1 Problem You'll Hit</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-red-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-red-400/50">
              <div className="text-center mb-6">
                <div className="text-7xl mb-4">⛔</div>
                <h3 className="text-3xl font-bold text-red-300 mb-4">The Error You'll See</h3>
              </div>
              
              <div className="bg-red-900/50 rounded-xl p-6 font-mono text-sm">
                <p className="text-red-200">Access to fetch at 'http://localhost:5000/api/posts'</p>
                <p className="text-red-200">from origin 'http://localhost:3000'</p>
                <p className="text-red-200">has been blocked by CORS policy:</p>
                <p className="text-red-200">No 'Access-Control-Allow-Origin' header</p>
                <p className="text-red-200">is present on the requested resource.</p>
              </div>

              <div className="mt-6 text-center">
                <p className="text-2xl font-bold text-red-300">😱 What does this even mean?!</p>
              </div>
            </div>

            <div className="bg-blue-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-blue-400/50">
              <h3 className="text-3xl font-bold text-blue-300 mb-6 text-center">What is CORS?</h3>
              <p className="text-2xl text-center mb-4">
                <span className="font-bold text-yellow-300">Cross-Origin Resource Sharing</span>
              </p>
              <p className="text-xl text-center text-blue-200 mb-6">
                A security feature built into every web browser
              </p>
              
              <div className="bg-blue-600/30 rounded-xl p-6">
                <p className="text-lg text-center mb-3">
                  <span className="font-bold">Translation:</span>
                </p>
                <p className="text-xl text-center">
                  "Your React app (port 3000) is trying to talk to your Express server (port 5000)."
                </p>
                <p className="text-xl text-center mt-3">
                  "Browser says: <span className="text-red-300">'Nope! Different origins. Blocked for security!'</span>"
                </p>
              </div>
            </div>

            <div className="bg-yellow-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-yellow-400/50">
              <p className="text-2xl text-center">
                <span className="font-bold text-yellow-300">Next up:</span> Understanding why CORS exists 🔐
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-800 to-red-950'
    },

    // Slide 10: The Same-Origin Policy
    {
      id: 'same-origin-policy',
      title: 'The Same-Origin Policy',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🔒 The Same-Origin Policy</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-purple-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-purple-400/50">
              <p className="text-2xl text-center mb-4">
                <span className="font-bold text-yellow-300">Browser Rule:</span> Websites can only make requests to the SAME origin they came from
              </p>
              <p className="text-lg text-center text-purple-100">
                This prevents malicious websites from stealing your data!
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-center mb-8">🧮 What is an "Origin"?</h3>
              
              <div className="bg-gray-900/50 rounded-xl p-6 mb-8">
                <p className="text-center text-2xl font-mono mb-6">
                  Origin = <span className="text-blue-300">Protocol</span> + <span className="text-green-300">Domain</span> + <span className="text-orange-300">Port</span>
                </p>
                
                <div className="text-center text-3xl font-mono mb-4">
                  <span className="text-blue-300">http://</span><span className="text-green-300">localhost</span><span className="text-orange-300">:3000</span>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="bg-blue-500/30 rounded-lg p-4">
                    <p className="font-bold text-blue-300 text-center mb-2">Protocol</p>
                    <p className="text-center">http:// or https://</p>
                  </div>
                  <div className="bg-green-500/30 rounded-lg p-4">
                    <p className="font-bold text-green-300 text-center mb-2">Domain</p>
                    <p className="text-center">localhost, google.com</p>
                  </div>
                  <div className="bg-orange-500/30 rounded-lg p-4">
                    <p className="font-bold text-orange-300 text-center mb-2">Port</p>
                    <p className="text-center">:3000, :5000, :80</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-500/20 rounded-xl p-4 border-l-4 border-green-400">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-lg">http://localhost:3000 → http://localhost:3000/api</span>
                    <span className="text-3xl">✅</span>
                  </div>
                  <p className="text-sm text-green-200 mt-2">Same origin: Same protocol, domain, AND port</p>
                </div>

                <div className="bg-red-500/20 rounded-xl p-4 border-l-4 border-red-400">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-lg">http://localhost:3000 → http://localhost:5000</span>
                    <span className="text-3xl">❌</span>
                  </div>
                  <p className="text-sm text-red-200 mt-2">Different origin: Port changed!</p>
                </div>

                <div className="bg-red-500/20 rounded-xl p-4 border-l-4 border-red-400">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-lg">http://myapp.com → https://myapp.com</span>
                    <span className="text-3xl">❌</span>
                  </div>
                  <p className="text-sm text-red-200 mt-2">Different origin: Protocol changed!</p>
                </div>

                <div className="bg-red-500/20 rounded-xl p-4 border-l-4 border-red-400">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-lg">http://myapp.com → http://api.myapp.com</span>
                    <span className="text-3xl">❌</span>
                  </div>
                  <p className="text-sm text-red-200 mt-2">Different origin: Subdomain changed!</p>
                </div>
                  </div>
                </div>

            <div className="bg-yellow-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-yellow-400/50">
              <p className="text-2xl text-center">
                <span className="font-bold text-yellow-300">Our Problem:</span> React (port 3000) trying to reach Express (port 5000) = ❌ Different origins!
              </p>
                  </div>
                </div>
              </div>
      ),
      bgGradient: 'from-blue-800 to-indigo-900'
    },

    // Slide 11: Why CORS Exists - Security
    {
      id: 'cors-security',
      title: 'Why CORS Exists - Security',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🛡️ Why CORS Exists: Protecting You!</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-red-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-red-400/50">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">😈</div>
                <h3 className="text-3xl font-bold text-red-300 mb-4">The Attack CORS Prevents</h3>
            </div>

              <div className="space-y-6">
                <div className="bg-red-600/30 rounded-xl p-6">
                  <p className="text-xl mb-3"><span className="font-bold">1.</span> You log into your bank: <span className="font-mono text-green-300">bank.com</span></p>
                  <p className="text-base text-red-200">You're now authenticated, browser stores your session cookie</p>
                </div>
                
                <div className="bg-red-600/30 rounded-xl p-6">
                  <p className="text-xl mb-3"><span className="font-bold">2.</span> You visit evil site: <span className="font-mono text-red-300">evil-hacker.com</span></p>
                  <p className="text-base text-red-200">Has malicious JavaScript code</p>
              </div>
                
                <div className="bg-red-600/30 rounded-xl p-6">
                  <p className="text-xl mb-3"><span className="font-bold">3.</span> Evil site tries to fetch: <span className="font-mono text-yellow-300">bank.com/transfer-money</span></p>
                  <p className="text-base text-red-200">Your browser would AUTOMATICALLY send your bank cookies!</p>
            </div>

                <div className="bg-red-600/30 rounded-xl p-6 border-2 border-red-300">
                  <p className="text-xl mb-3 text-center"><span className="font-bold">❌ CORS BLOCKS THIS!</span></p>
                  <p className="text-lg text-center text-red-200">Browser refuses to make cross-origin request</p>
                  <p className="text-base text-center text-red-300 mt-2">Your money is safe! 💰</p>
                </div>
              </div>
            </div>

            <div className="bg-green-500/20 backdrop-blur-md rounded-xl p-8 border-2 border-green-400/50">
              <h3 className="text-2xl font-bold text-green-300 mb-4 text-center">CORS is Your Friend!</h3>
              <p className="text-xl text-center">
                Yes, it's annoying in development, but it <span className="font-bold text-yellow-300">protects billions of users</span> from attacks every day!
              </p>
            </div>

            <div className="bg-blue-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-blue-400/50">
              <p className="text-2xl text-center">
                <span className="font-bold text-blue-300">The Solution:</span> Server explicitly says "I allow this!" ✅
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-700 to-pink-800'
    },

    // Slide 12: CORS Solution
    {
      id: 'cors-solution',
      title: 'The CORS Solution',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">✅ Fixing CORS: Server-Side</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-purple-500/20 backdrop-blur-md rounded-2xl p-6 border-2 border-purple-400/50">
              <p className="text-2xl text-center">
                <span className="font-bold text-yellow-300">Key Insight:</span> The SERVER must give permission, not the client!
              </p>
              <p className="text-lg text-center mt-2 text-purple-100">
                You can't fix CORS errors from React - only from Express!
              </p>
            </div>

            <div className="bg-blue-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-blue-400/50">
              <h3 className="text-3xl font-bold text-blue-300 mb-6 text-center">Step 1: Install CORS Middleware</h3>
              <div className="bg-gray-900/50 rounded-xl p-6 font-mono text-lg">
                <pre className="text-green-300">
{`npm install cors`}
                </pre>
              </div>
            </div>

            <div className="bg-green-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-green-400/50">
              <h3 className="text-3xl font-bold text-green-300 mb-6 text-center">Step 2: Add to Express Server</h3>
              <div className="bg-gray-900/50 rounded-xl p-6 font-mono text-sm">
                <pre className="text-green-300">
{`const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Your routes...
app.get('/api/posts', (req, res) => {
  // This will now work from React!
});`}
                </pre>
              </div>
              
              <div className="mt-6 bg-green-600/30 rounded-xl p-4">
              <p className="text-lg text-center">
                  <span className="font-bold">That's it!</span> This single line fixes CORS for development ✨
                </p>
              </div>
            </div>

            <div className="bg-yellow-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-yellow-400/50">
              <p className="text-xl text-center">
                <span className="font-bold text-yellow-300">⚠️ Remember:</span> Restart your Express server after adding cors!
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-teal-700'
    },

    // Slide 13: CORS Configuration Options
    {
      id: 'cors-config',
      title: 'CORS Configuration Options',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">⚙️ CORS Configuration Options</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-orange-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-orange-400/50">
              <h3 className="text-2xl font-bold text-orange-300 mb-4 text-center">Option 1: Allow All Origins (Development)</h3>
              <div className="bg-gray-900/50 rounded-xl p-6 font-mono text-sm mb-4">
                <pre className="text-green-300">
{`app.use(cors());`}
                </pre>
              </div>
              <div className="bg-orange-600/30 rounded-xl p-4">
                <p className="text-lg">✅ Great for development - quick and easy</p>
                <p className="text-lg">❌ NOT for production - too permissive</p>
              </div>
            </div>

            <div className="bg-blue-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-blue-400/50">
              <h3 className="text-2xl font-bold text-blue-300 mb-4 text-center">Option 2: Specific Origin (Better)</h3>
              <div className="bg-gray-900/50 rounded-xl p-6 font-mono text-sm mb-4">
                <pre className="text-green-300">
{`app.use(cors({ 
  origin: 'http://localhost:3000' 
}));`}
                </pre>
              </div>
              <div className="bg-blue-600/30 rounded-xl p-4">
                <p className="text-lg">✅ Only allow your React app</p>
                <p className="text-lg">✅ More secure</p>
              </div>
            </div>

            <div className="bg-purple-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-purple-400/50">
              <h3 className="text-2xl font-bold text-purple-300 mb-4 text-center">Option 3: Multiple Origins (Production)</h3>
              <div className="bg-gray-900/50 rounded-xl p-6 font-mono text-sm mb-4">
                <pre className="text-green-300">
{`const allowedOrigins = [
  'https://myapp.com',
  'https://www.myapp.com'
];

app.use(cors({ 
  origin: allowedOrigins 
}));`}
                </pre>
              </div>
              <div className="bg-purple-600/30 rounded-xl p-4">
                <p className="text-lg">✅ Multiple allowed domains</p>
                <p className="text-lg">✅ Production-ready</p>
              </div>
            </div>

            <div className="bg-green-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-green-400/50">
              <h3 className="text-2xl font-bold text-green-300 mb-4 text-center">Option 4: With Credentials (For Cookies)</h3>
              <div className="bg-gray-900/50 rounded-xl p-6 font-mono text-sm mb-4">
                <pre className="text-green-300">
{`app.use(cors({ 
  origin: 'http://localhost:3000',
  credentials: true 
}));`}
                </pre>
              </div>
              <div className="bg-green-600/30 rounded-xl p-4">
                <p className="text-lg">✅ Allows cookies and auth headers</p>
                <p className="text-lg">✅ Needed for session-based auth</p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-orange-600 to-red-700'
    },

    // Slide 14: How CORS Works Under the Hood
    {
      id: 'cors-headers',
      title: 'How CORS Works: HTTP Headers',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🔍 How CORS Works: HTTP Headers</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <p className="text-2xl text-center mb-6">
                <span className="font-bold text-yellow-300">Behind the scenes:</span> CORS uses HTTP headers to communicate
              </p>
              
              <div className="space-y-6">
                <div className="bg-blue-500/20 rounded-xl p-6 border-2 border-blue-400/50">
                  <h3 className="text-2xl font-bold text-blue-300 mb-4">1. Browser Sends Request</h3>
                  <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                    <p className="text-blue-200">GET /api/posts HTTP/1.1</p>
                    <p className="text-blue-200">Host: localhost:5000</p>
                    <p className="text-yellow-300">Origin: http://localhost:3000</p>
                    </div>
                  <p className="text-base text-blue-200 mt-3">Browser automatically adds "Origin" header</p>
                  </div>

                <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-400/50">
                  <h3 className="text-2xl font-bold text-green-300 mb-4">2. Server Responds with CORS Headers</h3>
                  <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
                    <p className="text-green-200">HTTP/1.1 200 OK</p>
                    <p className="text-yellow-300">Access-Control-Allow-Origin: http://localhost:3000</p>
                    <p className="text-yellow-300">Access-Control-Allow-Methods: GET, POST, PUT, DELETE</p>
                    <p className="text-yellow-300">Access-Control-Allow-Headers: Content-Type, Authorization</p>
                    <p className="text-green-200 mt-2">... your data ...</p>
                  </div>
                  <p className="text-base text-green-200 mt-3">cors() middleware automatically adds these!</p>
                </div>

                <div className="bg-purple-500/20 rounded-xl p-6 border-2 border-purple-400/50">
                  <h3 className="text-2xl font-bold text-purple-300 mb-4">3. Browser Checks and Decides</h3>
                  <div className="space-y-3">
                    <div className="bg-green-600/30 rounded-lg p-4">
                      <p className="text-lg">✅ <span className="font-bold">If origins match:</span> Browser allows request, gives data to JavaScript</p>
                    </div>
                    <div className="bg-red-600/30 rounded-lg p-4">
                      <p className="text-lg">❌ <span className="font-bold">If origins don't match:</span> Browser blocks, shows CORS error</p>
                    </div>
                  </div>
                </div>
              </div>
                </div>

            <div className="bg-yellow-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-yellow-400/50">
              <p className="text-xl text-center">
                <span className="font-bold text-yellow-300">Key Point:</span> CORS is enforced by the BROWSER, not the server!
              </p>
              <p className="text-lg text-center mt-2 text-yellow-100">
                That's why Postman doesn't have CORS issues - it's not a browser! 🤓
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-cyan-700 to-blue-800'
    },

    // Slide 15: Running Two Servers
    {
      id: 'two-servers',
      title: 'Running Your Full-Stack App',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🖥️ Running Two Servers Simultaneously</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-purple-500/20 backdrop-blur-md rounded-2xl p-6 border-2 border-purple-400/50">
              <p className="text-2xl text-center mb-4">
                <span className="font-bold text-yellow-300">Remember:</span> Your full-stack app needs BOTH servers running!
              </p>
              <p className="text-lg text-center text-purple-100">
                Frontend and backend are separate applications
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-blue-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-blue-400/50">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🚂</div>
                  <h3 className="text-3xl font-bold text-blue-300">Terminal 1: Backend</h3>
                </div>
                
                  <div className="space-y-4">
                  <div className="bg-blue-600/30 rounded-xl p-4">
                    <p className="font-bold text-lg mb-2">1. Navigate to backend folder</p>
                    <div className="bg-gray-900/50 rounded p-3 font-mono text-sm mt-2">
                      <p>cd backend</p>
                      </div>
                    </div>

                  <div className="bg-blue-600/30 rounded-xl p-4">
                    <p className="font-bold text-lg mb-2">2. Start Express server</p>
                    <div className="bg-gray-900/50 rounded p-3 font-mono text-sm mt-2">
                      <p>node server.js</p>
                      <p className="text-gray-400"># or npm start</p>
                      </div>
                    </div>

                  <div className="bg-blue-600/30 rounded-xl p-4">
                    <p className="font-bold text-lg mb-2">3. Look for confirmation</p>
                    <div className="bg-gray-900/50 rounded p-3 font-mono text-sm mt-2">
                      <p className="text-green-300">Server running on port 5000</p>
                      </div>
                    </div>

                  <div className="bg-green-600/40 rounded-xl p-4 text-center border-2 border-green-400">
                    <p className="text-2xl">✅</p>
                    <p className="font-bold text-lg">Keep this running!</p>
                      </div>
                    </div>
                  </div>

              <div className="bg-green-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-green-400/50">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">⚛️</div>
                  <h3 className="text-3xl font-bold text-green-300">Terminal 2: Frontend</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-green-600/30 rounded-xl p-4">
                    <p className="font-bold text-lg mb-2">1. Navigate to frontend folder</p>
                    <div className="bg-gray-900/50 rounded p-3 font-mono text-sm mt-2">
                      <p>cd frontend</p>
              </div>
            </div>

                  <div className="bg-green-600/30 rounded-xl p-4">
                    <p className="font-bold text-lg mb-2">2. Start React dev server</p>
                    <div className="bg-gray-900/50 rounded p-3 font-mono text-sm mt-2">
                      <p>npm start</p>
                      <p className="text-gray-400"># or npm run dev</p>
              </div>
                  </div>
                  
                  <div className="bg-green-600/30 rounded-xl p-4">
                    <p className="font-bold text-lg mb-2">3. Browser opens automatically</p>
                    <div className="bg-gray-900/50 rounded p-3 font-mono text-sm mt-2">
                      <p className="text-green-300">http://localhost:3000</p>
                    </div>
                  </div>

                  <div className="bg-green-600/40 rounded-xl p-4 text-center border-2 border-green-400">
                    <p className="text-2xl">✅</p>
                    <p className="font-bold text-lg">Keep this running too!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-red-400/50">
              <h3 className="text-2xl font-bold text-red-300 mb-4 text-center">⚠️ Common Mistakes</h3>
              <div className="space-y-3">
                <div className="bg-red-600/30 rounded-lg p-4">
                  <p className="text-lg">❌ Only starting frontend - Backend not responding!</p>
                </div>
                <div className="bg-red-600/30 rounded-lg p-4">
                  <p className="text-lg">❌ Closing terminal window - Server stops!</p>
                </div>
                <div className="bg-red-600/30 rounded-lg p-4">
                  <p className="text-lg">❌ Wrong order - Start backend FIRST for fewer issues</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-yellow-400/50">
              <p className="text-xl text-center">
                <span className="font-bold text-yellow-300">To Stop:</span> Ctrl+C in each terminal window
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-700 to-purple-800'
    },

    // Slide 16: Startup Checklist
    {
      id: 'startup-checklist',
      title: 'Full-Stack Startup Checklist',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">✅ Your Startup Checklist</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <p className="text-2xl text-center mb-8">
                <span className="font-bold text-yellow-300">Before you can test your app:</span>
              </p>
              
              <div className="space-y-4">
                <div className="bg-purple-500/20 rounded-xl p-6 border-l-4 border-purple-400 flex items-start space-x-4">
                  <div className="text-4xl">1️⃣</div>
                  <div className="flex-1">
                    <p className="text-2xl font-bold text-purple-300 mb-2">MongoDB is Running</p>
                    <p className="text-lg text-purple-200">Check MongoDB Atlas connection or local mongod</p>
                    <div className="bg-purple-600/30 rounded p-3 mt-3 font-mono text-sm">
                      <p>Connected to MongoDB successfully ✅</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/20 rounded-xl p-6 border-l-4 border-blue-400 flex items-start space-x-4">
                  <div className="text-4xl">2️⃣</div>
                  <div className="flex-1">
                    <p className="text-2xl font-bold text-blue-300 mb-2">Express Server Started</p>
                    <p className="text-lg text-blue-200">Terminal 1 shows server running message</p>
                    <div className="bg-blue-600/30 rounded p-3 mt-3 font-mono text-sm">
                      <p>Server running on port 5000 ✅</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/20 rounded-xl p-6 border-l-4 border-green-400 flex items-start space-x-4">
                  <div className="text-4xl">3️⃣</div>
                  <div className="flex-1">
                    <p className="text-2xl font-bold text-green-300 mb-2">CORS Middleware Added</p>
                    <p className="text-lg text-green-200">app.use(cors()) in your Express server</p>
                    <div className="bg-green-600/30 rounded p-3 mt-3 font-mono text-sm">
                      <p>const cors = require('cors');</p>
                      <p>app.use(cors()); ✅</p>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-500/20 rounded-xl p-6 border-l-4 border-orange-400 flex items-start space-x-4">
                  <div className="text-4xl">4️⃣</div>
                  <div className="flex-1">
                    <p className="text-2xl font-bold text-orange-300 mb-2">React Dev Server Started</p>
                    <p className="text-lg text-orange-200">Terminal 2, browser opens to localhost:3000</p>
                    <div className="bg-orange-600/30 rounded p-3 mt-3 font-mono text-sm">
                      <p>Compiled successfully! ✅</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-emerald-600 to-teal-700'
    },

    // Slide 17: Browser DevTools - Your Best Friend
    {
      id: 'devtools-intro',
      title: 'Browser DevTools - Your Best Friend',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🔧 Browser DevTools: Your Best Friend</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-blue-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-blue-400/50">
              <div className="text-center mb-6">
                <div className="text-7xl mb-4">🔍</div>
                <h3 className="text-3xl font-bold text-blue-300 mb-4">The Network Tab is Everything</h3>
                <p className="text-xl text-blue-200">
                  90% of full-stack debugging happens here!
                </p>
                  </div>
                </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-center mb-6">How to Open DevTools</h3>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-purple-500/30 rounded-xl p-6 border-2 border-purple-400/50">
                  <div className="text-4xl mb-3 text-center">⌨️</div>
                  <p className="text-lg font-bold text-center mb-2">Keyboard</p>
                  <div className="text-center space-y-2">
                    <p className="font-mono bg-purple-900/50 px-3 py-1 rounded inline-block">F12</p>
                    <p className="text-sm text-purple-200">or</p>
                    <p className="font-mono bg-purple-900/50 px-3 py-1 rounded inline-block">Cmd+Opt+I</p>
                  </div>
                </div>

                <div className="bg-green-500/30 rounded-xl p-6 border-2 border-green-400/50">
                  <div className="text-4xl mb-3 text-center">🖱️</div>
                  <p className="text-lg font-bold text-center mb-2">Right Click</p>
                  <div className="text-center space-y-2">
                    <p className="text-base">Right-click on page</p>
                    <p className="text-base">↓</p>
                    <p className="text-base">"Inspect"</p>
              </div>
            </div>

                <div className="bg-orange-500/30 rounded-xl p-6 border-2 border-orange-400/50">
                  <div className="text-4xl mb-3 text-center">📋</div>
                  <p className="text-lg font-bold text-center mb-2">Menu</p>
                  <div className="text-center space-y-2">
                    <p className="text-base">Browser menu</p>
                    <p className="text-base">↓</p>
                    <p className="text-base">Developer Tools</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-yellow-400/50">
              <h3 className="text-2xl font-bold text-yellow-300 mb-6 text-center">The Two Most Important Tabs</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-600/30 rounded-xl p-6">
                  <div className="text-5xl mb-3 text-center">🌐</div>
                  <h4 className="text-xl font-bold text-blue-300 text-center mb-3">Network Tab</h4>
                  <ul className="space-y-2 text-base">
                    <li>✓ See all HTTP requests</li>
                    <li>✓ Check status codes</li>
                    <li>✓ View request/response data</li>
                    <li>✓ Debug CORS errors</li>
                  </ul>
                </div>

                <div className="bg-red-600/30 rounded-xl p-6">
                  <div className="text-5xl mb-3 text-center">📝</div>
                  <h4 className="text-xl font-bold text-red-300 text-center mb-3">Console Tab</h4>
                  <ul className="space-y-2 text-base">
                    <li>✓ See JavaScript errors</li>
                    <li>✓ View console.log() output</li>
                    <li>✓ Check CORS errors</li>
                    <li>✓ Run code snippets</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-green-400/50">
              <p className="text-2xl text-center">
                <span className="font-bold text-green-300">Next:</span> Let's learn to read the Network tab! 📖
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-800 to-indigo-900'
    },

    // Slide 18: Reading the Network Tab
    {
      id: 'network-tab',
      title: 'Reading the Network Tab',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">📊 Reading the Network Tab</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-center mb-8">What You'll See</h3>
              
              <div className="space-y-6">
                <div className="bg-blue-500/20 rounded-xl p-6 border-2 border-blue-400/50">
                  <h4 className="text-2xl font-bold text-blue-300 mb-4">The Columns</h4>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="bg-blue-600/30 rounded-lg p-4">
                      <p className="font-bold mb-2">Name</p>
                      <p className="text-sm text-blue-200">The endpoint</p>
                      <p className="text-xs font-mono mt-1">posts</p>
                    </div>
                    <div className="bg-blue-600/30 rounded-lg p-4">
                      <p className="font-bold mb-2">Status</p>
                      <p className="text-sm text-blue-200">HTTP code</p>
                      <p className="text-xs font-mono mt-1">200, 404, 500</p>
                    </div>
                    <div className="bg-blue-600/30 rounded-lg p-4">
                      <p className="font-bold mb-2">Type</p>
                      <p className="text-sm text-blue-200">Request type</p>
                      <p className="text-xs font-mono mt-1">xhr, fetch</p>
                    </div>
                    <div className="bg-blue-600/30 rounded-lg p-4">
                      <p className="font-bold mb-2">Time</p>
                      <p className="text-sm text-blue-200">Duration</p>
                      <p className="text-xs font-mono mt-1">125 ms</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-400/50">
                  <h4 className="text-2xl font-bold text-green-300 mb-4">Click on a Request to See Details</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-600/30 rounded-lg p-4">
                      <p className="font-bold mb-2">Headers Tab</p>
                      <p className="text-sm text-green-200">• Request URL</p>
                      <p className="text-sm text-green-200">• Request method (GET, POST)</p>
                      <p className="text-sm text-green-200">• Request headers</p>
                      <p className="text-sm text-green-200">• Response headers</p>
                </div>
                    <div className="bg-green-600/30 rounded-lg p-4">
                      <p className="font-bold mb-2">Preview Tab</p>
                      <p className="text-sm text-green-200">• Formatted JSON</p>
                      <p className="text-sm text-green-200">• Easy to read</p>
                      <p className="text-sm text-green-200">• Expandable objects</p>
                      <p className="text-sm text-green-200">• Great for exploring data</p>
                    </div>
                    <div className="bg-green-600/30 rounded-lg p-4">
                      <p className="font-bold mb-2">Response Tab</p>
                      <p className="text-sm text-green-200">• Raw response text</p>
                      <p className="text-sm text-green-200">• Copy to clipboard</p>
                      <p className="text-sm text-green-200">• Useful for debugging</p>
                    </div>
                    <div className="bg-green-600/30 rounded-lg p-4">
                      <p className="font-bold mb-2">Timing Tab</p>
                      <p className="text-sm text-green-200">• Request breakdown</p>
                      <p className="text-sm text-green-200">• DNS lookup</p>
                      <p className="text-sm text-green-200">• Connection time</p>
                      <p className="text-sm text-green-200">• Server processing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-700 to-indigo-800'
    },

    // Slide 19: Advanced Network Tab Features
    {
      id: 'network-tab-advanced',
      title: 'Advanced Network Tab Features',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🔍 Advanced Network Tab Features</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <p className="text-2xl text-center mb-4">
                <span className="font-bold text-yellow-300">Master these features to debug like a pro!</span>
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-blue-400/50">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">🔎</div>
                  <h3 className="text-2xl font-bold text-blue-300">Filtering Requests</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <p className="font-bold mb-2">Type "fetch" or "xhr"</p>
                    <p className="text-sm text-blue-200">Only show API calls, hide CSS/images</p>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <p className="font-bold mb-2">Use filter buttons</p>
                    <p className="text-sm text-blue-200">Click XHR, JS, CSS, Img to filter by type</p>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <p className="font-bold mb-2">Search by name</p>
                    <p className="text-sm text-blue-200">Type "posts" to find /api/posts requests</p>
                  </div>
                      </div>
                    </div>

              <div className="bg-green-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-green-400/50">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">⏱️</div>
                  <h3 className="text-2xl font-bold text-green-300">Request Timing</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <p className="font-bold mb-2">Waterfall View</p>
                    <p className="text-sm text-green-200">See timeline of all requests, find slow ones</p>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <p className="font-bold mb-2">Timing Tab</p>
                    <p className="text-sm text-green-200">DNS lookup, connection, server processing time</p>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <p className="font-bold mb-2">Performance Analysis</p>
                    <p className="text-sm text-green-200">Identify bottlenecks in your app</p>
                  </div>
                      </div>
                    </div>

              <div className="bg-purple-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-purple-400/50">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">📋</div>
                  <h3 className="text-2xl font-bold text-purple-300">Copy as cURL</h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-purple-600/30 rounded-lg p-4">
                    <p className="font-bold mb-2">Right-click → Copy → Copy as cURL</p>
                    <p className="text-sm text-purple-200">Get exact terminal command to reproduce request</p>
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-4">
                    <p className="font-bold mb-2">Test in terminal</p>
                    <p className="text-sm text-purple-200">Paste in terminal to test backend directly</p>
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-4">
                    <p className="font-bold mb-2">Share with teammates</p>
                    <p className="text-sm text-purple-200">Send exact request for debugging help</p>
                  </div>
                      </div>
                    </div>

              <div className="bg-orange-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-orange-400/50">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">🔄</div>
                  <h3 className="text-2xl font-bold text-orange-300">Request Controls</h3>
                      </div>
                <div className="space-y-3">
                  <div className="bg-orange-600/30 rounded-lg p-4">
                    <p className="font-bold mb-2">Preserve Log</p>
                    <p className="text-sm text-orange-200">Keep requests after page refresh</p>
                    </div>
                  <div className="bg-orange-600/30 rounded-lg p-4">
                    <p className="font-bold mb-2">Disable Cache</p>
                    <p className="text-sm text-orange-200">Always fetch fresh data during development</p>
                  </div>
                  <div className="bg-orange-600/30 rounded-lg p-4">
                    <p className="font-bold mb-2">Throttling</p>
                    <p className="text-sm text-orange-200">Simulate slow 3G to test performance</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-yellow-400/50">
              <h3 className="text-2xl font-bold text-yellow-300 mb-4 text-center">💡 Pro Debugging Workflow</h3>
              <div className="grid grid-cols-4 gap-4 text-center">
                <div>
                  <p className="text-4xl mb-2">1️⃣</p>
                  <p className="font-bold mb-1">Filter to "fetch"</p>
                  <p className="text-sm text-yellow-200">Focus on API calls</p>
              </div>
                <div>
                  <p className="text-4xl mb-2">2️⃣</p>
                  <p className="font-bold mb-1">Check Status</p>
                  <p className="text-sm text-yellow-200">Red = error</p>
            </div>
                <div>
                  <p className="text-4xl mb-2">3️⃣</p>
                  <p className="font-bold mb-1">Inspect Response</p>
                  <p className="text-sm text-yellow-200">Preview tab</p>
                </div>
                <div>
                  <p className="text-4xl mb-2">4️⃣</p>
                  <p className="font-bold mb-1">Copy as cURL</p>
                  <p className="text-sm text-yellow-200">Test in Postman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-700 to-purple-800'
    },

    // Slide 20: Debugging Common Errors
    {
      id: 'debugging-errors',
      title: 'Debugging Common Errors',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🐛 Debugging Common Errors</h2>
          
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <p className="text-2xl text-center">
                <span className="font-bold text-yellow-300">Your debugging workflow:</span> See error → Check Network tab → Fix it!
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-red-500/20 rounded-xl p-5 border-2 border-red-400/50">
                <h4 className="text-xl font-bold text-red-300 mb-3">❌ CORS Error</h4>
                <p className="text-base mb-2"><span className="font-bold">Status:</span> 0 or blocked</p>
                <p className="text-base mb-2"><span className="font-bold">Fix:</span></p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Add cors() to Express</li>
                  <li>• Restart Express server</li>
                  <li>• Check ports are correct</li>
                </ul>
              </div>

              <div className="bg-red-500/20 rounded-xl p-5 border-2 border-red-400/50">
                <h4 className="text-xl font-bold text-red-300 mb-3">🔌 Connection Refused</h4>
                <p className="text-base mb-2"><span className="font-bold">Status:</span> Failed to fetch</p>
                <p className="text-base mb-2"><span className="font-bold">Fix:</span></p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Is Express running?</li>
                  <li>• Check the port number</li>
                  <li>• Is MongoDB connected?</li>
                </ul>
              </div>

              <div className="bg-red-500/20 rounded-xl p-5 border-2 border-red-400/50">
                <h4 className="text-xl font-bold text-red-300 mb-3">🔍 404 Not Found</h4>
                <p className="text-base mb-2"><span className="font-bold">Status:</span> 404</p>
                <p className="text-base mb-2"><span className="font-bold">Fix:</span></p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Check URL spelling</li>
                  <li>• Does route exist in Express?</li>
                  <li>• Is it /api/posts or /posts?</li>
                </ul>
              </div>

              <div className="bg-red-500/20 rounded-xl p-5 border-2 border-red-400/50">
                <h4 className="text-xl font-bold text-red-300 mb-3">💥 500 Server Error</h4>
                <p className="text-base mb-2"><span className="font-bold">Status:</span> 500</p>
                <p className="text-base mb-2"><span className="font-bold">Fix:</span></p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Check Express console logs</li>
                  <li>• Look for stack trace</li>
                  <li>• Database connection issue?</li>
                </ul>
              </div>

              <div className="bg-red-500/20 rounded-xl p-5 border-2 border-red-400/50">
                <h4 className="text-xl font-bold text-red-300 mb-3">🔐 401 Unauthorized</h4>
                <p className="text-base mb-2"><span className="font-bold">Status:</span> 401</p>
                <p className="text-base mb-2"><span className="font-bold">Fix:</span></p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Are you sending auth token?</li>
                  <li>• Is token in headers?</li>
                  <li>• Is token expired?</li>
                </ul>
              </div>

              <div className="bg-red-500/20 rounded-xl p-5 border-2 border-red-400/50">
                <h4 className="text-xl font-bold text-red-300 mb-3">⏳ Pending Forever</h4>
                <p className="text-base mb-2"><span className="font-bold">Status:</span> Pending...</p>
                <p className="text-base mb-2"><span className="font-bold">Fix:</span></p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>• Did route handler send response?</li>
                  <li>• Infinite loop in server code?</li>
                  <li>• Database query hanging?</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-500/20 backdrop-blur-md rounded-2xl p-6 border-2 border-green-400/50">
              <h3 className="text-2xl font-bold text-green-300 mb-4 text-center">✅ Debugging Strategy</h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-4xl mb-2">1️⃣</div>
                  <p className="font-bold mb-1">Check Network Tab</p>
                  <p className="text-sm text-green-200">What's the status code?</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">2️⃣</div>
                  <p className="font-bold mb-1">Check Console</p>
                  <p className="text-sm text-green-200">Any error messages?</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">3️⃣</div>
                  <p className="font-bold mb-1">Check Express Logs</p>
                  <p className="text-sm text-green-200">Server console output?</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">4️⃣</div>
                  <p className="font-bold mb-1">Test with Postman</p>
                  <p className="text-sm text-green-200">Does backend work alone?</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-800 to-orange-900'
    },

    // Slide 21: Best Practices - API Service File
    {
      id: 'api-service',
      title: 'Best Practice: API Service File',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🎯 Best Practice: Centralize API Calls</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-red-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-red-400/50">
              <h3 className="text-2xl font-bold text-red-300 mb-4 text-center">❌ Don't Do This (fetch everywhere)</h3>
              <div className="bg-gray-900/50 rounded-xl p-6 font-mono text-sm">
                <pre className="text-red-200">
{`// PostsList.js
fetch('http://localhost:5000/api/posts')...

// CreatePost.js  
fetch('http://localhost:5000/api/posts', { method: 'POST' })...

// EditPost.js
fetch('http://localhost:5000/api/posts/123', { method: 'PUT' })...`}
                </pre>
              </div>
              <div className="mt-4 bg-red-600/30 rounded-xl p-4">
                <p className="text-lg">Problems:</p>
                <ul className="text-base space-y-2 mt-2 ml-4">
                  <li>• URL repeated everywhere</li>
                  <li>• Hard to update (change URL = change 20 files!)</li>
                  <li>• Headers duplicated</li>
                  <li>• Error handling inconsistent</li>
                </ul>
              </div>
              </div>
              
            <div className="bg-green-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-green-400/50">
              <h3 className="text-2xl font-bold text-green-300 mb-4 text-center">✅ Do This (centralized API service)</h3>
              <div className="bg-gray-900/50 rounded-xl p-6 font-mono text-sm">
                <pre className="text-green-300">
{`// src/api/posts.js
const API_URL = 'http://localhost:5000';

export const getAllPosts = async () => {
  const res = await fetch(\`\${API_URL}/api/posts\`);
  return res.json();
};

export const createPost = async (postData) => {
  const res = await fetch(\`\${API_URL}/api/posts\`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
  });
  return res.json();
};

export const deletePost = async (id) => {
  await fetch(\`\${API_URL}/api/posts/\${id}\`, {
    method: 'DELETE'
  });
};

// Use in components:
import { getAllPosts, createPost } from './api/posts';
const posts = await getAllPosts();`}
                </pre>
              </div>
              <div className="mt-4 bg-green-600/30 rounded-xl p-4">
                <p className="text-lg">Benefits:</p>
                <ul className="text-base space-y-2 mt-2 ml-4">
                  <li>✓ All API logic in ONE place</li>
                  <li>✓ Change URL once, works everywhere</li>
                  <li>✓ Reusable across components</li>
                  <li>✓ Easy to test</li>
                  <li>✓ Consistent error handling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-700 to-emerald-800'
    },

    // Slide 22: Best Practice - Custom Hook
    {
      id: 'custom-hook',
      title: 'Best Practice: Custom Data Hook',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🪝 Best Practice: Custom Data Hooks</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-blue-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-blue-400/50">
              <h3 className="text-2xl font-bold text-blue-300 mb-4 text-center">Create Reusable Data Fetching Logic</h3>
              <div className="bg-gray-900/50 rounded-xl p-6 font-mono text-sm">
                <pre className="text-green-300">
{`// src/hooks/usePosts.js
import { useState, useEffect } from 'react';
import { getAllPosts } from '../api/posts';

function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    getAllPosts()
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  
  return { posts, loading, error };
}

export default usePosts;`}
                </pre>
              </div>
            </div>

            <div className="bg-green-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-green-400/50">
              <h3 className="text-2xl font-bold text-green-300 mb-4 text-center">Use in Components - Super Clean!</h3>
              <div className="bg-gray-900/50 rounded-xl p-6 font-mono text-sm">
                <pre className="text-green-300">
{`function PostsList() {
  const { posts, loading, error } = usePosts();
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      {posts.map(post => (
        <div key={post._id}>{post.title}</div>
      ))}
    </div>
  );
}

// Use it in ANOTHER component too!
function PostsCount() {
  const { posts, loading } = usePosts();
  return loading ? '...' : <span>{posts.length} posts</span>;
}`}
                </pre>
              </div>
              
              <div className="mt-6 bg-green-600/30 rounded-xl p-6">
                <h4 className="text-xl font-bold mb-4">✅ Why This is Amazing:</h4>
                <ul className="space-y-2 text-lg">
                  <li>• Reusable across any component</li>
                  <li>• Consistent loading/error handling</li>
                  <li>• Clean component code</li>
                  <li>• Easy to add features (refetch, pagination)</li>
                  <li>• Follows React patterns</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-700 to-indigo-800'
    },

    // Slide 23: Environment Variables
    {
      id: 'env-variables',
      title: 'Environment Variables',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🔐 Environment Variables</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-purple-500/20 backdrop-blur-md rounded-2xl p-6 border-2 border-purple-400/50">
              <p className="text-2xl text-center mb-4">
                <span className="font-bold text-yellow-300">Problem:</span> Hardcoded URLs break when you deploy!
              </p>
              <p className="text-lg text-center text-purple-100">
                localhost:5000 works on your laptop, but not in production
                </p>
              </div>

            <div className="bg-red-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-red-400/50">
              <h3 className="text-2xl font-bold text-red-300 mb-4 text-center">❌ Hardcoded (Bad)</h3>
              <div className="bg-gray-900/50 rounded-xl p-6 font-mono text-sm">
                <pre className="text-red-200">
{`// This only works on your laptop!
const API_URL = 'http://localhost:5000';

fetch(\`\${API_URL}/api/posts\`)...

// Deploy to production → BREAKS! 💥`}
                </pre>
              </div>
            </div>

            <div className="bg-green-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-green-400/50">
              <h3 className="text-2xl font-bold text-green-300 mb-4 text-center">✅ Environment Variables (Good)</h3>
              
              <div className="space-y-6">
                    <div>
                  <p className="text-xl mb-3 font-bold">1. Create .env file in React project root:</p>
                  <div className="bg-gray-900/50 rounded-xl p-6 font-mono text-sm">
                    <pre className="text-green-300">
{`# .env (Create React App)
REACT_APP_API_URL=http://localhost:5000

# .env (Vite)
VITE_API_URL=http://localhost:5000`}
                    </pre>
                    </div>
                </div>

                    <div>
                  <p className="text-xl mb-3 font-bold">2. Use in your code:</p>
                  <div className="bg-gray-900/50 rounded-xl p-6 font-mono text-sm">
                    <pre className="text-green-300">
{`// For Create React App:
const API_URL = process.env.REACT_APP_API_URL;

// For Vite:
const API_URL = import.meta.env.VITE_API_URL;

fetch(\`\${API_URL}/api/posts\`)...`}
                    </pre>
                    </div>
                </div>

                    <div>
                  <p className="text-xl mb-3 font-bold">3. In production, set environment variable:</p>
                  <div className="bg-gray-900/50 rounded-xl p-6 font-mono text-sm">
                    <pre className="text-green-300">
{`REACT_APP_API_URL=https://myapi.com`}
                    </pre>
                    </div>
                  </div>
                </div>
              </div>

            <div className="bg-yellow-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-yellow-400/50">
              <p className="text-xl text-center">
                <span className="font-bold text-yellow-300">⚠️ Important:</span> Restart React dev server after changing .env!
                  </p>
                </div>
          </div>
        </div>
      ),
      bgGradient: 'from-orange-600 to-red-700'
    },

    // Slide 24: Thank You
    {
      id: 'thank-you',
      title: 'Thank You',
      content: (
        <div className="text-center space-y-16">
          <style>{customStyles}</style>
          <div className="space-y-8">
            <div className="text-9xl animate-bounce-in">🔗</div>
            <h1 className="text-7xl font-bold text-white mb-6">Thank You!</h1>
            <h2 className="text-3xl font-semibold text-cyan-100">
              Class 15: Full-Stack Integration
            </h2>
          </div>
          
          <div className="mt-20">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 max-w-2xl mx-auto">
              <p className="text-3xl text-white font-semibold mb-4">📧 Attendance</p>
              <p className="text-2xl text-cyan-100">
                Send me an email to mark your attendance
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-cyan-700 to-blue-800'
    },

  ];

  // Scroll navigation logic
  useEffect(() => {
    const handleScroll = () => {
      const slideElements = document.querySelectorAll('[data-slide-index]');
      let currentSlideIndex = 0;
      slideElements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          currentSlideIndex = index;
        }
      });
      setCurrentSlide(currentSlideIndex);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

export default Class15Slides;
