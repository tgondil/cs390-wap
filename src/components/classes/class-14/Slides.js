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

const Class14Slides = () => {
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
            <h2 className="text-4xl font-semibold text-blue-100 mb-4">
              Web Applications Programming
            </h2>
            <div className="text-2xl text-blue-200">
              Class 14: Login & Protected Routes
            </div>
            <div className="text-xl text-blue-300 mt-4">
              with JWT Authentication
            </div>
          </div>
          
          <div className="mt-16">
            <div className="text-2xl font-medium text-white">Tanay Gondil</div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-indigo-700'
    },

    // Slide 2: GeoGuessr
    {
      id: 'geoguessr',
      title: 'GeoGuessr Time!',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🌍 GeoGuessr!</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-md rounded-2xl p-12 border-2 border-green-400/50 mb-8">
              <div className="text-center">
                <div className="text-8xl mb-6 animate-bounce-in">🗺️</div>
                <h3 className="text-4xl font-bold text-green-300 mb-6">Let's Play GeoGuessr!</h3>
                <p className="text-2xl text-gray-200 mb-8">
                  Time for a quick brain break - let's explore the world!
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border-2 border-white/30 text-center">
              <div className="text-2xl text-white mb-6">Join the game:</div>
              <a 
                href="https://www.geoguessr.com/join/QNG35?s=Url" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold text-3xl px-12 py-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                🎮 Join Game
              </a>
              <div className="text-xl text-gray-300 mt-6 font-mono">
                geoguessr.com/join/QNG35
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-teal-700'
    },

    // Slide 3: Mini Project 2 Reminder
    {
      id: 'mini-project-2',
      title: 'Mini Project 2 Reminder',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">📢 Reminder</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-md rounded-2xl p-12 border-2 border-orange-400/50">
              <div className="text-center">
                <div className="text-8xl mb-6 animate-bounce-in">🚀</div>
                <h3 className="text-4xl font-bold text-orange-300 mb-6">Mini Project 2 is Out!</h3>
                <p className="text-2xl text-orange-100 mb-8">
                  Check the course page for details and requirements
                </p>
                <div className="bg-orange-500/30 rounded-xl p-6 mt-8">
                  <div className="text-xl text-orange-100">
                    Don't forget to start early and reach out if you have questions!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-orange-600 to-red-700'
    },

    // Slide 4: Login vs Signup
    {
      id: 'login-vs-signup',
      title: 'Login vs Signup',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🆚 Login vs Signup</h2>
          
          <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-green-500/20 backdrop-blur-md rounded-xl p-8 border-2 border-green-400">
              <h3 className="text-3xl font-bold text-green-300 mb-6 text-center">Signup</h3>
              <div className="text-lg space-y-4 text-gray-100">
                <div><strong className="text-green-300">Purpose:</strong> Create NEW user</div>
                <div><strong className="text-green-300">Check:</strong> Does user exist?</div>
                <div><strong className="text-green-300">Action:</strong> Create in database</div>
                <div><strong className="text-green-300">Password:</strong> Hash and store</div>
                <div><strong className="text-green-300">Result:</strong> New user record + token</div>
              </div>
            </div>

            <div className="bg-blue-500/20 backdrop-blur-md rounded-xl p-8 border-2 border-blue-400">
              <h3 className="text-3xl font-bold text-blue-300 mb-6 text-center">Login</h3>
              <div className="text-lg space-y-4 text-gray-100">
                <div><strong className="text-blue-300">Purpose:</strong> Verify EXISTING user</div>
                <div><strong className="text-blue-300">Check:</strong> Does user exist?</div>
                <div><strong className="text-blue-300">Action:</strong> Compare password</div>
                <div><strong className="text-blue-300">Password:</strong> Verify with bcrypt</div>
                <div><strong className="text-blue-300">Result:</strong> Just token (no new record)</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="text-2xl font-bold text-yellow-300">
              Signup = CREATE • Login = VERIFY
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-teal-600 to-cyan-700'
    },

    // Slide 5: The Login Process
    {
      id: 'login-process',
      title: 'The Login Process',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🔐 The Login Process</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { num: '1', emoji: '🙋', text: 'User Claims Identity', detail: '"I am alice@example.com, password: Secret123"' },
              { num: '2', emoji: '🔍', text: 'Find User Record', detail: 'Look up email in database' },
              { num: '3', emoji: '🔑', text: 'Verify Password', detail: 'bcrypt.compare(password, hash)' },
              { num: '4', emoji: '🎫', text: 'Issue Token', detail: 'Create JWT with user info' },
              { num: '5', emoji: '✅', text: 'Return Token', detail: 'User stores it for future requests' }
            ].map((step, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border-2 border-white/30 flex items-center space-x-6">
                <div className="text-4xl font-bold text-blue-300 w-12">{step.num}</div>
                <div className="text-4xl">{step.emoji}</div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-white">{step.text}</div>
                  <div className="text-lg text-gray-300 mt-1">{step.detail}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="text-2xl font-bold text-green-300">
              User is now logged in! 🎉
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-700 to-indigo-800'
    },

    // Slide 6: Password Comparison
    {
      id: 'password-comparison',
      title: 'Password Comparison',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🔒 Password Comparison</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-red-500/20 backdrop-blur-md rounded-xl p-8 border-2 border-red-400">
              <h3 className="text-3xl font-bold text-red-300 mb-4">❌ WRONG (This will NEVER work)</h3>
              <div className="font-mono text-lg text-gray-200 bg-black/40 p-6 rounded-lg">
                <div>User provides: "Secret123"</div>
                <div>Database has: "$2b$10$xK9mP2vL8nQ5wR7..."</div>
                <div className="mt-4 text-red-300">if (password === hash) {'{'}</div>
                <div className="ml-4 text-red-300">{'// This will ALWAYS be false!'}</div>
                <div className="text-red-300">{'}'}</div>
              </div>
              <div className="text-xl text-red-200 mt-4">
                Plain text ≠ Hash → They'll never match with ===
              </div>
            </div>

            <div className="bg-green-500/20 backdrop-blur-md rounded-xl p-8 border-2 border-green-400">
              <h3 className="text-3xl font-bold text-green-300 mb-4">✅ CORRECT (bcrypt magic)</h3>
              <div className="font-mono text-lg text-gray-200 bg-black/40 p-6 rounded-lg">
                <div>bcrypt.compare("Secret123", hash)</div>
                <div className="mt-4 text-green-300">1. Extract salt from hash</div>
                <div className="text-green-300">2. Hash "Secret123" with that salt</div>
                <div className="text-green-300">3. Compare result with stored hash</div>
                <div className="text-green-300">4. Return true or false</div>
              </div>
              <div className="text-xl text-green-200 mt-4">
                bcrypt knows how to compare plain text with hashes!
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-700 to-pink-700'
    },

    // Slide 7: Security - Same Error Message
    {
      id: 'security-errors',
      title: 'Security: Same Error Message',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🛡️ Security: Error Messages</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-red-500/20 backdrop-blur-md rounded-xl p-8 border-2 border-red-400">
              <h3 className="text-3xl font-bold text-red-300 mb-6">❌ BAD (Leaks Information)</h3>
              <div className="space-y-4 text-xl text-gray-200">
                <div className="bg-black/40 p-4 rounded-lg">
                  if (!user) return "No user found with that email"
                </div>
                <div className="bg-black/40 p-4 rounded-lg">
                  if (!match) return "Wrong password"
                </div>
              </div>
              <div className="mt-6 space-y-2 text-lg text-red-200">
                <div>🚨 Attacker learns: "No user found" → Email not registered</div>
                <div>🚨 Attacker learns: "Wrong password" → Email IS registered</div>
                <div className="font-bold text-red-300 mt-4">→ Can enumerate all registered emails!</div>
              </div>
            </div>

            <div className="bg-green-500/20 backdrop-blur-md rounded-xl p-8 border-2 border-green-400">
              <h3 className="text-3xl font-bold text-green-300 mb-6">✅ GOOD (Same Message)</h3>
              <div className="bg-black/40 p-4 rounded-lg text-xl text-gray-200">
                if (!user || !match) return "Invalid email or password"
              </div>
              <div className="mt-6 text-lg text-green-200">
                <div>✅ Same message every time</div>
                <div>✅ Can't tell if email exists</div>
                <div>✅ Can't enumerate users</div>
                <div className="font-bold text-green-300 mt-4">→ Protects user privacy!</div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-700 to-orange-700'
    },

    // Slide 8: What is Middleware?
    {
      id: 'what-is-middleware',
      title: 'What is Middleware?',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🎯 What is Middleware?</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl p-12 border-2 border-yellow-400/50 mb-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-300 mb-6">
                  Middleware = Functions that run BETWEEN receiving a request and sending a response
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border-2 border-white/30">
              <h3 className="text-3xl font-bold text-blue-300 mb-6 text-center">🛂 The Security Checkpoint Analogy</h3>
              <div className="flex items-center justify-center space-x-4 text-2xl">
                <span>Passenger</span>
                <span>→</span>
                <span className="bg-blue-500/30 px-4 py-2 rounded">Check Pass</span>
                <span>→</span>
                <span className="bg-blue-500/30 px-4 py-2 rounded">Metal Detector</span>
                <span>→</span>
                <span className="bg-blue-500/30 px-4 py-2 rounded">Bag Scan</span>
                <span>→</span>
                <span>Gate</span>
              </div>
              <div className="flex items-center justify-center space-x-4 text-xl mt-6 text-gray-300">
                <span>Request</span>
                <span>→</span>
                <span className="bg-purple-500/30 px-3 py-2 rounded">MW 1</span>
                <span>→</span>
                <span className="bg-purple-500/30 px-3 py-2 rounded">MW 2</span>
                <span>→</span>
                <span className="bg-purple-500/30 px-3 py-2 rounded">MW 3</span>
                <span>→</span>
                <span>Handler</span>
              </div>
            </div>

            <div className="mt-8 text-center space-y-4 text-xl">
              <div>✅ Can inspect the request</div>
              <div>✅ Can modify the request</div>
              <div>✅ Can continue (call next())</div>
              <div>✅ Can stop and return error</div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-700'
    },

    // Slide 9: The Middleware Pipeline
    {
      id: 'middleware-pipeline',
      title: 'The Middleware Pipeline',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🔄 The Pipeline</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { label: 'Request Arrives', bg: 'blue', icon: '📨' },
              { label: 'Middleware 1 (Logger)', bg: 'purple', icon: '📝', sub: 'Log details, call next()' },
              { label: 'Middleware 2 (Auth)', bg: 'indigo', icon: '🔐', sub: 'Check token, attach user, call next()' },
              { label: 'Route Handler', bg: 'green', icon: '⚙️', sub: 'Access req.user, do business logic' },
              { label: 'Response Sent', bg: 'teal', icon: '✅' }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className={`bg-${step.bg}-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-${step.bg}-400 flex items-center space-x-6`}>
                  <div className="text-4xl">{step.icon}</div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-white">{step.label}</div>
                    {step.sub && <div className="text-lg text-gray-300 mt-1">{step.sub}</div>}
                  </div>
                </div>
                {i < 4 && (
                  <div className="text-center text-4xl text-white/50 my-2">↓</div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="text-2xl font-bold text-yellow-300">
              Middleware can STOP the pipeline or CONTINUE with next()
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-indigo-700'
    },

    // Slide 10: The next() Function
    {
      id: 'next-function',
      title: 'The next() Function',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">➡️ The next() Function</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl p-12 border-2 border-blue-400/50 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-300">
                  next() = "I'm done, pass control to the next function"
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border-2 border-white/30 mb-8">
              <h3 className="text-3xl font-bold text-yellow-300 mb-6 text-center">🏃 The Relay Race Analogy</h3>
              <div className="space-y-4 text-xl text-gray-200">
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">🏃</span>
                  <span><strong>Runner 1 (MW 1):</strong> Runs their leg, passes baton → next()</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">🏃</span>
                  <span><strong>Runner 2 (MW 2):</strong> Receives baton, runs, passes → next()</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl">🏃</span>
                  <span><strong>Runner 3 (Handler):</strong> Finishes race, sends response</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-400">
                <h4 className="text-2xl font-bold text-green-300 mb-4">✅ When to call next()</h4>
                <div className="text-lg text-gray-200 space-y-2">
                  <div>• Validation passed</div>
                  <div>• Token is valid</div>
                  <div>• Ready to continue</div>
                </div>
              </div>
              <div className="bg-red-500/20 rounded-xl p-6 border-2 border-red-400">
                <h4 className="text-2xl font-bold text-red-300 mb-4">❌ When NOT to call next()</h4>
                <div className="text-lg text-gray-200 space-y-2">
                  <div>• Sending a response</div>
                  <div>• Auth failed (401)</div>
                  <div>• Want to stop pipeline</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-teal-600 to-blue-700'
    },

    // Slide 11: Auth Middleware
    {
      id: 'auth-middleware',
      title: 'Authentication Middleware',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🔐 Auth Middleware</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-xl p-8 border-2 border-purple-400">
              <div className="text-center text-3xl font-bold text-purple-300">
                Check if user is logged in before allowing access
              </div>
            </div>

            {[
              { num: '1', text: 'Extract Token', detail: 'Look for Authorization header', icon: '📤' },
              { num: '2', text: 'Verify Token', detail: 'jwt.verify() with secret key', icon: '🔍' },
              { num: '3', text: 'Attach User Info', detail: 'req.user = decoded payload', icon: '📎' },
              { num: '4', text: 'Continue', detail: 'Call next() → Route handler runs', icon: '➡️' }
            ].map((step, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border-2 border-white/30 flex items-center space-x-6">
                <div className="text-4xl font-bold text-blue-300 w-12">{step.num}</div>
                <div className="text-4xl">{step.icon}</div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-white">{step.text}</div>
                  <div className="text-lg text-gray-300 mt-1">{step.detail}</div>
                </div>
              </div>
            ))}

            <div className="bg-red-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-red-400 mt-8">
              <h3 className="text-2xl font-bold text-red-300 mb-4 text-center">🚨 If any step fails:</h3>
              <div className="text-xl text-center text-gray-200">
                Return 401 Unauthorized (STOP pipeline, don't call next())
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-700 to-purple-800'
    },

    // Slide 12: The req Object
    {
      id: 'req-object',
      title: 'The req Object as Messenger',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">📦 The req Object</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-yellow-400/50 mb-8">
              <div className="text-center text-3xl font-bold text-yellow-300">
                The req object travels through the pipeline. Middleware can attach data to it.
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-500/20 rounded-xl p-6 border-2 border-blue-400">
                <div className="font-bold text-2xl text-blue-300 mb-3">📨 Client sends request</div>
                <div className="font-mono text-lg bg-black/40 p-4 rounded">
                  req = {'{'} method: 'GET', url: '/profile', headers: {'{'} ... {'}'} {'}'}
                </div>
              </div>

              <div className="text-center text-3xl">↓</div>

              <div className="bg-purple-500/20 rounded-xl p-6 border-2 border-purple-400">
                <div className="font-bold text-2xl text-purple-300 mb-3">🔐 Auth Middleware: Adds user info</div>
                <div className="font-mono text-lg bg-black/40 p-4 rounded">
                  req.user = {'{'} id: '123', email: 'alice@example.com' {'}'}
                </div>
              </div>

              <div className="text-center text-3xl">↓</div>

              <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-400">
                <div className="font-bold text-2xl text-green-300 mb-3">⚙️ Route Handler: Opens the package</div>
                <div className="font-mono text-lg bg-black/40 p-4 rounded">
                  console.log(req.user)<br/>
                  {'// '} {'{'} id: '123', email: 'alice@example.com' {'}'}
                </div>
              </div>
            </div>

            <div className="text-center mt-8 text-2xl font-bold text-cyan-300">
              Middleware does the work • Route gets clean data
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-cyan-600 to-blue-700'
    },

    // Slide 13: Middleware Reusability
    {
      id: 'middleware-reusability',
      title: 'Middleware Reusability',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">♻️ Reusability Power</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md rounded-2xl p-12 border-2 border-green-400/50">
              <div className="text-center">
                <div className="text-7xl mb-6">🎯</div>
                <div className="text-4xl font-bold text-green-300">Write Once, Use Everywhere</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <h3 className="text-3xl font-bold text-green-300 mb-6 text-center">✅ With Middleware</h3>
                <div className="text-lg text-gray-200 space-y-3">
                  <div>✅ Write auth logic <strong>once</strong></div>
                  <div>✅ Apply to multiple routes</div>
                  <div>✅ Fix bug in one place</div>
                  <div>✅ Consistent behavior</div>
                  <div>✅ Clean, maintainable code</div>
                </div>
              </div>

              <div className="bg-red-500/20 rounded-xl p-8 border-2 border-red-400">
                <h3 className="text-3xl font-bold text-red-300 mb-6 text-center">❌ Without Middleware</h3>
                <div className="text-lg text-gray-200 space-y-3">
                  <div>❌ Copy-paste everywhere</div>
                  <div>❌ 10 routes = 10 copies</div>
                  <div>❌ Bug fix = update 10 places</div>
                  <div>❌ Inconsistent behavior</div>
                  <div>❌ Maintenance nightmare</div>
                </div>
              </div>
            </div>

            <div className="text-center text-2xl font-bold text-yellow-300">
              DRY: Don't Repeat Yourself 🔁
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-emerald-600 to-green-700'
    },

    // Slide 14: Authorization Headers
    {
      id: 'authorization-headers',
      title: 'Authorization Headers',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">📡 How Tokens Travel</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border-2 border-white/30">
              <h3 className="text-3xl font-bold text-blue-300 mb-6 text-center">HTTP Headers = Request Metadata</h3>
              <div className="font-mono text-lg space-y-2 bg-black/40 p-6 rounded-lg text-gray-200">
                <div>Content-Type: application/json</div>
                <div>Accept: application/json</div>
                <div>User-Agent: Mozilla/5.0...</div>
                <div className="text-yellow-300 font-bold">Authorization: Bearer &lt;token&gt;</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-xl p-8 border-2 border-purple-400">
              <h3 className="text-3xl font-bold text-purple-300 mb-6 text-center">The Bearer Token Format</h3>
              <div className="font-mono text-2xl bg-black/40 p-6 rounded-lg text-center">
                <div className="text-gray-200">Authorization: <span className="text-yellow-300">Bearer</span> <span className="text-green-300">&lt;token&gt;</span></div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4 text-lg">
                <div className="text-center">
                  <div className="text-yellow-300 font-bold mb-2">Bearer</div>
                  <div className="text-gray-300">Authentication scheme</div>
                </div>
                <div className="text-center">
                  <div className="text-green-300 font-bold mb-2">&lt;token&gt;</div>
                  <div className="text-gray-300">The actual JWT</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-300">
                "Bearer" = "Whoever possesses this token is authenticated" 🎫
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-pink-700'
    },

    // Slide 15: Token Lifecycle
    {
      id: 'token-lifecycle',
      title: 'Token Lifecycle',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🔄 Token Lifecycle</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { num: '1', text: 'User Logs In', detail: 'POST /api/auth/login', icon: '🔑' },
              { num: '2', text: 'Server Returns Token', detail: 'Response: { token: "eyJ..." }', icon: '🎫' },
              { num: '3', text: 'Client Stores Token', detail: 'localStorage.setItem("token", token)', icon: '💾' },
              { num: '4', text: 'Include in Future Requests', detail: 'Authorization: Bearer <token>', icon: '📤' },
              { num: '5', text: 'Server Verifies', detail: 'Middleware checks token validity', icon: '✅' }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border-2 border-white/30 flex items-center space-x-6">
                  <div className="text-4xl font-bold text-blue-300 w-12">{step.num}</div>
                  <div className="text-4xl">{step.icon}</div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-white">{step.text}</div>
                    <div className="text-lg text-gray-300 mt-1 font-mono">{step.detail}</div>
                  </div>
                </div>
                {i < 4 && (
                  <div className="text-center text-4xl text-white/50 my-2">↓</div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="text-2xl font-bold text-green-300">
              Token = Proof of Identity for Every Request 🎫
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-blue-700'
    },

    // Slide 16: Protected vs Public Routes
    {
      id: 'protected-public',
      title: 'Protected vs Public Routes',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🔓🔒 Public vs Protected</h2>
          
          <div className="grid grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-green-500/20 backdrop-blur-md rounded-xl p-8 border-2 border-green-400">
              <h3 className="text-3xl font-bold text-green-300 mb-6 text-center flex items-center justify-center">
                <span className="mr-3">🔓</span> Public Routes
              </h3>
              <div className="text-lg text-gray-200 space-y-3">
                <div>• Homepage</div>
                <div>• Product Listings</div>
                <div>• Blog Posts</div>
                <div>• About Page</div>
                <div>• Login/Signup Pages</div>
                <div>• Public API Docs</div>
              </div>
              <div className="mt-6 text-center text-xl font-bold text-green-300">
                No authentication required ✅
              </div>
            </div>

            <div className="bg-red-500/20 backdrop-blur-md rounded-xl p-8 border-2 border-red-400">
              <h3 className="text-3xl font-bold text-red-300 mb-6 text-center flex items-center justify-center">
                <span className="mr-3">🔒</span> Protected Routes
              </h3>
              <div className="text-lg text-gray-200 space-y-3">
                <div>• User Profile</div>
                <div>• Account Settings</div>
                <div>• Shopping Cart</div>
                <div>• Order History</div>
                <div>• Draft Posts</div>
                <div>• Admin Dashboard</div>
              </div>
              <div className="mt-6 text-center text-xl font-bold text-red-300">
                Authentication required 🔐
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="text-3xl font-bold text-yellow-300">
              Should everyone see this data? → Public<br/>
              Only authenticated users? → Protected
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-teal-600 to-cyan-700'
    },

    // Slide 17: Applying Protection
    {
      id: 'applying-protection',
      title: 'Applying Protection',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🛡️ How to Protect Routes</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-green-500/20 backdrop-blur-md rounded-xl p-8 border-2 border-green-400">
              <h3 className="text-3xl font-bold text-green-300 mb-4 text-center">🔓 Public Route</h3>
              <div className="font-mono text-xl bg-black/40 p-6 rounded-lg text-gray-200">
                <div>app.get('/api/posts', handleGetPosts)</div>
              </div>
              <div className="text-lg text-gray-300 mt-4 text-center">
                Route handler runs immediately
              </div>
            </div>

            <div className="text-center text-4xl text-white/50">VS</div>

            <div className="bg-red-500/20 backdrop-blur-md rounded-xl p-8 border-2 border-red-400">
              <h3 className="text-3xl font-bold text-red-300 mb-4 text-center">🔒 Protected Route</h3>
              <div className="font-mono text-xl bg-black/40 p-6 rounded-lg text-gray-200">
                <div>app.get('/api/profile', <span className="text-yellow-300">authenticate</span>, handleGetProfile)</div>
              </div>
              <div className="text-lg text-gray-300 mt-4 text-center">
                Middleware runs first, then handler (if auth passes)
              </div>
            </div>

            <div className="bg-purple-500/20 backdrop-blur-md rounded-xl p-8 border-2 border-purple-400">
              <h3 className="text-3xl font-bold text-purple-300 mb-4 text-center">🔒🔒 Multiple Middlewares</h3>
              <div className="font-mono text-xl bg-black/40 p-6 rounded-lg text-gray-200">
                <div>app.post('/api/admin/users',</div>
                <div className="ml-8"><span className="text-yellow-300">authenticate</span>,</div>
                <div className="ml-8"><span className="text-orange-300">requireAdmin</span>,</div>
                <div className="ml-8">handleCreateUser)</div>
              </div>
              <div className="text-lg text-gray-300 mt-4 text-center">
                Check logged in → Check is admin → Create user
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-700 to-pink-700'
    },

    // Slide 18: Token Verification
    {
      id: 'token-verification',
      title: 'Token Verification',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">✅ The Four Checks</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { num: '1', text: 'Structure', detail: 'Three parts? (header.payload.signature)', pass: 'Yes → Continue', fail: 'No → Malformed' },
              { num: '2', text: 'Signature', detail: 'Recreate signature, does it match?', pass: 'Match → Authentic', fail: 'No match → Tampered' },
              { num: '3', text: 'Expiration', detail: 'Current time < exp claim?', pass: 'Yes → Valid', fail: 'No → Expired' },
              { num: '4', text: 'Algorithm', detail: 'Is it the expected algorithm?', pass: 'Yes → Valid', fail: 'No → Reject' }
            ].map((check, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border-2 border-white/30">
                <div className="flex items-center space-x-6 mb-4">
                  <div className="text-4xl font-bold text-blue-300 w-12">{check.num}</div>
                  <div className="text-3xl font-bold text-white">{check.text}</div>
                </div>
                <div className="ml-20">
                  <div className="text-lg text-gray-300 mb-3">{check.detail}</div>
                  <div className="grid grid-cols-2 gap-4 text-lg">
                    <div className="text-green-300">✅ {check.pass}</div>
                    <div className="text-red-300">❌ {check.fail}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="text-2xl font-bold text-green-300">
              All checks pass → Token is valid! ✅
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-700 to-indigo-800'
    },

    // Slide 19: Stateless Verification
    {
      id: 'stateless-verification',
      title: 'Stateless Verification',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">⚡ Stateless Power</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl p-12 border-2 border-yellow-400/50">
              <div className="text-center">
                <div className="text-7xl mb-6">🚀</div>
                <div className="text-4xl font-bold text-yellow-300">
                  Server doesn't need database lookup to verify JWT!
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-red-500/20 rounded-xl p-8 border-2 border-red-400">
                <h3 className="text-3xl font-bold text-red-300 mb-6 text-center">Session-Based</h3>
                <div className="space-y-4 text-lg text-gray-200">
                  <div>1. Request with session ID</div>
                  <div>2. Look up in database 🐢</div>
                  <div>3. Found? Authenticated</div>
                  <div className="text-red-300 font-bold mt-4">Database hit on EVERY request</div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <h3 className="text-3xl font-bold text-green-300 mb-6 text-center">Token-Based</h3>
                <div className="space-y-4 text-lg text-gray-200">
                  <div>1. Request with JWT</div>
                  <div>2. Verify signature 🚀</div>
                  <div>3. Valid? Authenticated</div>
                  <div className="text-green-300 font-bold mt-4">No database hit needed!</div>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4 text-xl">
              <div>✅ Faster (CPU vs I/O)</div>
              <div>✅ More Scalable (any server can verify)</div>
              <div>✅ Simpler (no session storage)</div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-emerald-600 to-teal-700'
    },

    // Slide 20: HTTP Status Codes
    {
      id: 'status-codes',
      title: 'HTTP Status Codes',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">📊 Status Codes</h2>
          
          <div className="max-w-5xl mx-auto space-y-4">
            {[
              { code: '200', name: 'OK', desc: 'Request succeeded', use: 'Successful login, data retrieval', color: 'green' },
              { code: '201', name: 'Created', desc: 'Resource created', use: 'Successful signup', color: 'green' },
              { code: '400', name: 'Bad Request', desc: 'Invalid data sent', use: 'Missing fields, invalid email', color: 'yellow' },
              { code: '401', name: 'Unauthorized*', desc: 'Not authenticated', use: 'No token, invalid token, wrong password', color: 'red' },
              { code: '403', name: 'Forbidden*', desc: 'No permission', use: 'Valid token, but insufficient permissions', color: 'red' },
              { code: '409', name: 'Conflict', desc: 'Resource conflict', use: 'Email already registered', color: 'orange' },
              { code: '500', name: 'Server Error', desc: 'Server problem', use: 'Database errors, exceptions', color: 'red' }
            ].map((status, i) => (
              <div key={i} className={`bg-${status.color}-500/20 backdrop-blur-md rounded-xl p-4 border-2 border-${status.color}-400`}>
                <div className="grid grid-cols-4 gap-4 items-center">
                  <div className="text-3xl font-bold text-white text-center">{status.code}</div>
                  <div className="text-xl font-bold text-white">{status.name}</div>
                  <div className="text-lg text-gray-200">{status.desc}</div>
                  <div className="text-sm text-gray-300">{status.use}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 text-lg text-yellow-300">
            * The names are confusing! 401 = "Unauthenticated", 403 = "Unauthorized"
          </div>
        </div>
      ),
      bgGradient: 'from-slate-700 to-gray-800'
    },

    // Slide 21: 401 vs 403
    {
      id: '401-vs-403',
      title: '401 vs 403',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🤔 401 vs 403</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-yellow-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-yellow-400 mb-8">
              <div className="text-center text-3xl font-bold text-yellow-300">
                ⚠️ The names are misleading!
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-red-500/20 backdrop-blur-md rounded-xl p-8 border-2 border-red-400">
                <h3 className="text-4xl font-bold text-red-300 mb-6 text-center">401</h3>
                <div className="text-2xl text-red-200 mb-6 text-center">"Unauthorized"</div>
                <div className="space-y-4 text-lg text-gray-200">
                  <div className="text-center text-xl font-bold text-red-300 mb-4">Really means: Unauthenticated</div>
                  <div>❓ "Who are you?"</div>
                  <div>❓ "I don't recognize you"</div>
                  <div>❓ "Prove your identity"</div>
                  <div className="mt-6 font-bold text-red-200">Examples:</div>
                  <div>• No token</div>
                  <div>• Invalid token</div>
                  <div>• Expired token</div>
                  <div>• Wrong password</div>
                </div>
              </div>

              <div className="bg-orange-500/20 backdrop-blur-md rounded-xl p-8 border-2 border-orange-400">
                <h3 className="text-4xl font-bold text-orange-300 mb-6 text-center">403</h3>
                <div className="text-2xl text-orange-200 mb-6 text-center">"Forbidden"</div>
                <div className="space-y-4 text-lg text-gray-200">
                  <div className="text-center text-xl font-bold text-orange-300 mb-4">Really means: Unauthorized</div>
                  <div>✅ "I know who you are"</div>
                  <div>🚫 "But you can't do this"</div>
                  <div>🚫 "Insufficient permissions"</div>
                  <div className="mt-6 font-bold text-orange-200">Examples:</div>
                  <div>• Regular user → admin panel</div>
                  <div>• User → delete others' posts</div>
                  <div>• User → edit others' profile</div>
                  <div>• Valid login, wrong role</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-700 to-orange-700'
    },

    // Slide 22: Logout Challenge
    {
      id: 'logout-challenge',
      title: 'The Logout Paradox',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🚪 The Logout Paradox</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-12 border-2 border-purple-400/50">
              <div className="text-center">
                <div className="text-7xl mb-6">🤔</div>
                <div className="text-4xl font-bold text-purple-300">
                  JWTs are stateless - server doesn't remember issuing them
                </div>
                <div className="text-2xl text-purple-200 mt-4">
                  So how do we "forget" them?
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-red-500/20 rounded-xl p-8 border-2 border-red-400">
                <h3 className="text-3xl font-bold text-red-300 mb-6 text-center">Session-Based</h3>
                <div className="space-y-4 text-lg text-gray-200">
                  <div>Logout → Delete session from server</div>
                  <div>Session ID becomes invalid</div>
                  <div>User can't access routes</div>
                  <div className="text-green-300 font-bold mt-4">✅ Easy to revoke</div>
                </div>
              </div>

              <div className="bg-yellow-500/20 rounded-xl p-8 border-2 border-yellow-400">
                <h3 className="text-3xl font-bold text-yellow-300 mb-6 text-center">Token-Based</h3>
                <div className="space-y-4 text-lg text-gray-200">
                  <div>Logout → ???</div>
                  <div>Server doesn't store tokens</div>
                  <div>Token valid until expiration</div>
                  <div className="text-red-300 font-bold mt-4">❌ Can't "delete" what server doesn't have</div>
                </div>
              </div>
            </div>

            <div className="text-center text-2xl font-bold text-cyan-300">
              Solution: Client-side logout + short expiration times
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-pink-700'
    },

    // Slide 23: Client-Side Logout
    {
      id: 'client-logout',
      title: 'Client-Side Logout',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">💻 Client-Side Logout</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-md rounded-2xl p-12 border-2 border-blue-400/50">
              <div className="text-center">
                <div className="text-7xl mb-6">🗑️</div>
                <div className="text-4xl font-bold text-blue-300">
                  Simple Solution: Delete the token
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {[
                { step: '1', text: 'User clicks "Logout"', icon: '👆' },
                { step: '2', text: 'Client deletes token', icon: '🗑️', code: 'localStorage.removeItem("token")' },
                { step: '3', text: 'Redirect to login', icon: '🔄' },
                { step: '4', text: 'Future requests have no token', icon: '📭' },
                { step: '5', text: 'Server sees no token → 401', icon: '🚫' }
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border-2 border-white/30 flex items-center space-x-6">
                  <div className="text-3xl font-bold text-blue-300 w-12">{item.step}</div>
                  <div className="text-4xl">{item.icon}</div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-white">{item.text}</div>
                    {item.code && (
                      <div className="font-mono text-lg text-gray-300 mt-2 bg-black/40 p-2 rounded">{item.code}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-6 border-2 border-yellow-400">
              <div className="text-xl text-yellow-200">
                ⚠️ Limitation: Token still technically valid until expiration<br/>
                ✅ Solution: Use short expiration times (15 min - 1 hour)
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-cyan-600 to-blue-700'
    },

    // Slide 24: Refresh Token Pattern
    {
      id: 'refresh-token',
      title: 'Refresh Token Pattern',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🔄 Refresh Token Pattern</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-purple-400/50">
              <div className="text-center text-3xl font-bold text-purple-300">
                Industry Standard: Issue TWO tokens
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-blue-500/20 rounded-xl p-8 border-2 border-blue-400">
                <h3 className="text-3xl font-bold text-blue-300 mb-6 text-center">🎫 Access Token</h3>
                <div className="space-y-3 text-lg text-gray-200">
                  <div>• JWT format</div>
                  <div>• Short-lived (15 min)</div>
                  <div>• Used for API requests</div>
                  <div>• Stored in memory</div>
                  <div>• Not stored on server</div>
                  <div className="text-blue-300 font-bold mt-4">→ Fast, stateless</div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <h3 className="text-3xl font-bold text-green-300 mb-6 text-center">🔑 Refresh Token</h3>
                <div className="space-y-3 text-lg text-gray-200">
                  <div>• Random string</div>
                  <div>• Long-lived (7 days)</div>
                  <div>• Get new access tokens</div>
                  <div>• Stored in database</div>
                  <div>• Can be revoked</div>
                  <div className="text-green-300 font-bold mt-4">→ Revocable, secure</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border-2 border-white/30">
              <h4 className="text-2xl font-bold text-yellow-300 mb-4 text-center">Why This Works</h4>
              <div className="grid grid-cols-3 gap-6 text-center text-lg">
                <div>
                  <div className="text-3xl mb-2">🔒</div>
                  <div className="font-bold text-white mb-2">Security</div>
                  <div className="text-gray-300">Short access tokens limit damage if stolen</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">🎛️</div>
                  <div className="font-bold text-white mb-2">Control</div>
                  <div className="text-gray-300">Can revoke refresh tokens when needed</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">😊</div>
                  <div className="font-bold text-white mb-2">UX</div>
                  <div className="text-gray-300">Users don't login every 15 minutes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-700'
    },

    // Slide 25: Complete Auth Flow
    {
      id: 'complete-flow',
      title: 'Complete Authentication Flow',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🔄 Complete Flow</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-green-300 text-center mb-6">📝 Signup</h3>
                {[
                  'Validate input',
                  'Hash password',
                  'Save to database',
                  'Generate JWT',
                  'Return token'
                ].map((step, i) => (
                  <div key={i} className="bg-green-500/20 rounded-lg p-4 border-2 border-green-400 text-lg">
                    <span className="font-bold text-green-300">{i + 1}.</span> {step}
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-3xl font-bold text-blue-300 text-center mb-6">🔐 Login</h3>
                {[
                  'Find user by email',
                  'Compare password',
                  'Generate JWT',
                  'Return token',
                  'Client stores token'
                ].map((step, i) => (
                  <div key={i} className="bg-blue-500/20 rounded-lg p-4 border-2 border-blue-400 text-lg">
                    <span className="font-bold text-blue-300">{i + 1}.</span> {step}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-3xl font-bold text-purple-300 text-center mb-6">🔒 Protected Request</h3>
              <div className="grid grid-cols-4 gap-4">
                {[
                  { text: 'Include token', icon: '📤' },
                  { text: 'Middleware verifies', icon: '🔍' },
                  { text: 'Attach req.user', icon: '📎' },
                  { text: 'Handler uses data', icon: '⚙️' }
                ].map((step, i) => (
                  <div key={i} className="bg-purple-500/20 rounded-lg p-4 border-2 border-purple-400 text-center">
                    <div className="text-3xl mb-2">{step.icon}</div>
                    <div className="text-lg">{step.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-teal-600 to-cyan-700'
    },

    // Slide 26: Security Layers
    {
      id: 'security-layers',
      title: 'Security Layers',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🛡️ Security Layers</h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              { layer: 'Password Security', detail: 'bcrypt hashing (one-way, salted, slow)', icon: '🔑', color: 'red' },
              { layer: 'Token Security', detail: 'JWT signature (tamper-proof, expiring)', icon: '🎫', color: 'orange' },
              { layer: 'Transport Security', detail: 'HTTPS (encrypted in transit)', icon: '🔒', color: 'yellow' },
              { layer: 'Storage Security', detail: 'Secure token storage (HttpOnly cookies)', icon: '💾', color: 'green' },
              { layer: 'Validation Security', detail: 'Input validation (prevent injection)', icon: '✅', color: 'blue' },
              { layer: 'Error Security', detail: 'Generic messages (don\'t leak info)', icon: '🚨', color: 'purple' }
            ].map((item, i) => (
              <div key={i} className={`bg-${item.color}-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-${item.color}-400 flex items-center space-x-6`}>
                <div className="text-5xl">{item.icon}</div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-white">{item.layer}</div>
                  <div className="text-lg text-gray-300 mt-1">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="text-2xl font-bold text-yellow-300">
              Security is layers, not a single wall! 🧅
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-slate-700 to-gray-800'
    },

    // Slide 27: Common Vulnerabilities
    {
      id: 'vulnerabilities',
      title: 'Common Vulnerabilities',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🚨 Don't Do This!</h2>
          
          <div className="max-w-5xl mx-auto space-y-4">
            {[
              { vuln: 'Plain Text Passwords', fix: 'Always hash with bcrypt' },
              { vuln: 'Weak SECRET_KEY', fix: 'Generate strong random secret (32+ chars)' },
              { vuln: 'No Token Expiration', fix: 'Always set expiration (expiresIn: "1h")' },
              { vuln: 'Tokens in URL Query', fix: 'Use Authorization header only' },
              { vuln: 'Not Using HTTPS', fix: 'Always use HTTPS in production' },
              { vuln: 'Revealing User Exists', fix: 'Use generic error messages' },
              { vuln: 'Tokens in localStorage (XSS)', fix: 'HttpOnly cookies or memory for high-security' }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border-2 border-red-400">
                <div className="grid grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-3xl">❌</span>
                      <span className="text-xl font-bold text-red-300">{item.vuln}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">✅</span>
                      <span className="text-xl font-bold text-green-300">{item.fix}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="text-2xl font-bold text-yellow-300">
              One mistake can expose millions of users! 🚨
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-700 to-rose-800'
    },

    // Slide 28: Production Checklist
    {
      id: 'production-checklist',
      title: 'Production Checklist',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">✅ Production Checklist</h2>
          
          <div className="max-w-5xl mx-auto grid grid-cols-2 gap-6">
            {[
              { title: 'Environment Variables', items: ['JWT_SECRET in .env', 'Strong random secret', 'Not hardcoded'] },
              { title: 'Password Requirements', items: ['Minimum 8 characters', 'Complexity rules', 'Rate limiting'] },
              { title: 'Token Configuration', items: ['Short expiration', 'Refresh token pattern', 'Secure storage'] },
              { title: 'HTTPS', items: ['All traffic encrypted', 'Secure cookie flags', 'Force HTTPS redirect'] },
              { title: 'Input Validation', items: ['Email format check', 'Password strength', 'Sanitize inputs'] },
              { title: 'Error Handling', items: ['Generic messages', 'Don\'t leak info', 'Secure logging'] }
            ].map((section, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border-2 border-green-400">
                <h3 className="text-2xl font-bold text-green-300 mb-4 flex items-center">
                  <span className="mr-2">✅</span> {section.title}
                </h3>
                <div className="space-y-2 text-lg text-gray-200">
                  {section.items.map((item, j) => (
                    <div key={j} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-emerald-700'
    },

    // Slide 29: Key Takeaways
    {
      id: 'takeaways',
      title: 'Key Takeaways',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">💡 Key Takeaways</h2>
          
          <div className="max-w-5xl mx-auto space-y-6">
            {[
              { emoji: '🔐', title: 'Login = Verification + Token', desc: 'Not creating new data, verifying existing user' },
              { emoji: '🎯', title: 'Middleware = Reusable Security', desc: 'Write once, protect many routes' },
              { emoji: '📡', title: 'Tokens Travel in Headers', desc: 'Authorization: Bearer <token>' },
              { emoji: '🔒', title: 'Protection = Middleware Gate', desc: 'Check authentication before route handler' },
              { emoji: '✅', title: 'Verification = Four Checks', desc: 'Structure, signature, expiration, algorithm' },
              { emoji: '⚡', title: 'Stateless = No Database Lookup', desc: 'JWT verification is fast and scalable' }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border-2 border-white/30 flex items-center space-x-6">
                <div className="text-5xl">{item.emoji}</div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-white">{item.title}</div>
                  <div className="text-lg text-gray-300 mt-1">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="text-3xl font-bold text-yellow-300">
              You now have a complete authentication system! 🎉
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-700'
    },

    // Slide 30: Thank You
    {
      id: 'thank-you',
      title: 'Thank You',
      content: (
        <div className="text-center space-y-12">
          <style>{customStyles}</style>
          <div className="space-y-8">
            <div className="text-8xl animate-bounce-in">🔐</div>
            <h1 className="text-6xl font-bold text-white mb-6">Thank You!</h1>
            <h2 className="text-3xl font-semibold text-blue-100">
              Class 14: Login & Protected Routes
            </h2>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-700 to-indigo-800'
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

export default Class14Slides;

