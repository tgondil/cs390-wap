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

const Class13Slides = () => {
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
            <h2 className="text-4xl font-semibold text-red-100 mb-4">
              Web Applications Programming
            </h2>
            <div className="text-2xl text-red-200">
              Class 13: Authentication Concepts
            </div>
            <div className="text-xl text-red-300 mt-4">
              & Signup Route Implementation
            </div>
          </div>
          
          <div className="mt-16">
            <div className="text-2xl font-medium text-white">Tanay Gondil</div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-600 to-rose-700'
    },

    // Slide 2: Announcements
    {
      id: 'announcements',
      title: 'Announcements',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">📢 Announcements</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl p-12 border-2 border-yellow-400/50">
              <div className="text-center">
                <div className="text-7xl mb-6">🚀</div>
                <h3 className="text-4xl font-bold text-yellow-300 mb-4">Mini Project 2 Released!</h3>
                <p className="text-2xl text-yellow-100">Check the course page for details</p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-indigo-700'
    },

    // Slide 3: The Nightmare Scenario
    {
      id: 'nightmare',
      title: 'The Nightmare Scenario',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">😱 A World Without Authentication</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-red-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-red-400/50">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🚨</div>
                <h3 className="text-3xl font-bold text-red-300 mb-4">What If Anyone Could...</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-red-600/30 rounded-xl p-6">
                  <div className="text-4xl mb-2">📧</div>
                  <p className="text-xl">Read your emails</p>
                </div>
                <div className="bg-red-600/30 rounded-xl p-6">
                  <div className="text-4xl mb-2">💰</div>
                  <p className="text-xl">Access your bank account</p>
                </div>
                <div className="bg-red-600/30 rounded-xl p-6">
                  <div className="text-4xl mb-2">📱</div>
                  <p className="text-xl">Post as you on social media</p>
                </div>
                <div className="bg-red-600/30 rounded-xl p-6">
                  <div className="text-4xl mb-2">📁</div>
                  <p className="text-xl">Delete your files</p>
                </div>
              </div>
            </div>

            <div className="bg-green-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-green-400/50">
              <h3 className="text-2xl font-bold text-green-300 mb-3 text-center">✅ Authentication Solves This</h3>
              <p className="text-xl text-center">
                It's your <span className="font-bold text-yellow-300">responsibility as a developer</span> to protect user data
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-700 to-red-900'
    },

    // Slide 4: Authentication vs Authorization
    {
      id: 'auth-vs-authz',
      title: 'Authentication vs Authorization',
      content: (
        <div className="text-white animate-fade-in">
      <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🔐 Two Different Questions</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-purple-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-purple-400/50">
              <h3 className="text-3xl font-bold text-purple-300 mb-4 text-center">Think about going to a concert...</h3>
              <p className="text-xl text-center text-purple-100">
                You need TWO things: prove who you are, and prove you have the right ticket
              </p>
        </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-blue-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-blue-400/50">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🪪</div>
                  <h3 className="text-3xl font-bold text-blue-300">Authentication</h3>
                  <p className="text-2xl text-blue-200 mt-3 font-bold">"WHO are you?"</p>
      </div>

                <div className="space-y-4">
                  <div className="bg-blue-600/30 rounded-xl p-4">
                    <p className="text-lg font-semibold mb-1">At the concert:</p>
                    <p className="text-base text-blue-200">Show your ID to prove you're "Alice Smith"</p>
                  </div>
                  <div className="bg-blue-600/30 rounded-xl p-4">
                    <p className="text-lg font-semibold mb-1">On a website:</p>
                    <p className="text-base text-blue-200">Login with email + password to prove you're "alice@example.com"</p>
                  </div>
                  <div className="bg-blue-600/30 rounded-xl p-4">
                    <p className="text-lg font-semibold text-center">Happens ONCE</p>
                    <p className="text-base text-blue-200 text-center">When you first arrive / login</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-green-400/50">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🎫</div>
                  <h3 className="text-3xl font-bold text-green-300">Authorization</h3>
                  <p className="text-2xl text-green-200 mt-3 font-bold">"WHAT can you do?"</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-green-600/30 rounded-xl p-4">
                    <p className="text-lg font-semibold mb-1">At the concert:</p>
                    <p className="text-base text-green-200">Your ticket says Section A, Row 5 (not backstage!)</p>
                  </div>
                  <div className="bg-green-600/30 rounded-xl p-4">
                    <p className="text-lg font-semibold mb-1">On a website:</p>
                    <p className="text-base text-green-200">You can read posts, but only admins can delete them</p>
                  </div>
                  <div className="bg-green-600/30 rounded-xl p-4">
                    <p className="text-lg font-semibold text-center">Happens CONTINUOUSLY</p>
                    <p className="text-base text-green-200 text-center">Every action you try to take</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-yellow-400/50">
              <p className="text-2xl text-center">
                <span className="font-bold text-yellow-300">Key Insight:</span> You must be <span className="text-blue-300">authenticated</span> before you can be <span className="text-green-300">authorized</span>
              </p>
              <p className="text-lg text-center mt-2 text-yellow-100">
                (Can't check what Section A ticket allows until we know it's really YOUR ticket!)
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-700'
    },

    // Slide 5: Real-World Example
    {
      id: 'gmail-example',
      title: 'Real-World Example: Gmail',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">📧 Gmail Example</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">🔐</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-blue-300 mb-2">Authentication</h3>
                    <div className="bg-blue-500/20 rounded-xl p-4">
                      <p className="text-xl">You log in with <span className="font-mono bg-blue-600/40 px-2 py-1 rounded">alice@gmail.com</span> + password</p>
                      <p className="text-lg text-blue-200 mt-2">→ Gmail verifies: "Yes, you are alice@gmail.com"</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-4xl">🎯</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-green-300 mb-2">Authorization</h3>
                    <div className="space-y-3">
                      <div className="bg-green-500/20 rounded-xl p-4 flex items-center justify-between">
                        <p className="text-xl">Read your own emails</p>
                        <span className="text-2xl">✅</span>
                      </div>
                      <div className="bg-green-500/20 rounded-xl p-4 flex items-center justify-between">
                        <p className="text-xl">Send emails from your account</p>
                        <span className="text-2xl">✅</span>
                      </div>
                      <div className="bg-red-500/20 rounded-xl p-4 flex items-center justify-between">
                        <p className="text-xl">Read Bob's emails</p>
                        <span className="text-2xl">❌</span>
                      </div>
                      <div className="bg-red-500/20 rounded-xl p-4 flex items-center justify-between">
                        <p className="text-xl">Delete other users' accounts</p>
                        <span className="text-2xl">❌</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-cyan-700'
    },

    // Slide 6: Two Authentication Models
    {
      id: 'two-models',
      title: 'Two Authentication Models',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🔀 Two Ways to "Remember" Users</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/30">
              <p className="text-2xl text-center">
                <span className="font-bold text-yellow-300">The Core Problem:</span> HTTP is stateless - the server forgets you after each request!
              </p>
              <p className="text-lg text-center mt-2 text-gray-200">
                So how do we "remember" who's logged in?
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-purple-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-purple-400/50">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">📝</div>
                  <h3 className="text-3xl font-bold text-purple-300">Session-Based</h3>
                  <p className="text-xl text-purple-200 mt-2">(Server Remembers)</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-purple-600/30 rounded-xl p-4">
                    <p className="text-lg font-semibold mb-2">🍪 How it works:</p>
                    <p className="text-base">Server stores your info in memory/database. Sends you a cookie with session ID.</p>
                  </div>
                  <div className="bg-purple-600/30 rounded-xl p-4">
                    <p className="text-lg font-semibold mb-2">🏨 Like a hotel:</p>
                    <p className="text-base">They keep a record: "Room 305 = Alice Smith." You just show your room key.</p>
                  </div>
                  <div className="bg-purple-600/30 rounded-xl p-4">
                    <p className="text-lg font-semibold mb-2">✅ Pro:</p>
                    <p className="text-base">Easy to revoke - just delete session</p>
                  </div>
                  <div className="bg-purple-600/30 rounded-xl p-4">
                    <p className="text-lg font-semibold mb-2">❌ Con:</p>
                    <p className="text-base">Server must store every session (memory cost)</p>
                  </div>
                </div>
              </div>

              <div className="bg-orange-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-orange-400/50">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🎫</div>
                  <h3 className="text-3xl font-bold text-orange-300">Token-Based (JWT)</h3>
                  <p className="text-xl text-orange-200 mt-2">(Server Forgets)</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-orange-600/30 rounded-xl p-4">
                    <p className="text-lg font-semibold mb-2">🎟️ How it works:</p>
                    <p className="text-base">Server gives you a signed token. You carry ALL your info with you!</p>
                  </div>
                  <div className="bg-orange-600/30 rounded-xl p-4">
                    <p className="text-lg font-semibold mb-2">🎬 Like a movie ticket:</p>
                    <p className="text-base">The ticket itself says "Alice, Theater 5, Seat A12." No database needed!</p>
                  </div>
                  <div className="bg-orange-600/30 rounded-xl p-4">
                    <p className="text-lg font-semibold mb-2">✅ Pro:</p>
                    <p className="text-base">Server stores nothing (scales easily!)</p>
                  </div>
                  <div className="bg-orange-600/30 rounded-xl p-4">
                    <p className="text-lg font-semibold mb-2">❌ Con:</p>
                    <p className="text-base">Can't revoke until token expires</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-yellow-400/50">
              <p className="text-2xl text-center">
                <span className="font-bold text-yellow-300">Today's Focus:</span> Token-Based (JWT) - Modern apps use this!
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-pink-700'
    },

    // Slide 7: Session-Based Flow
    {
      id: 'session-flow',
      title: 'Session-Based Authentication Flow',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">📝 Session-Based Flow</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-2xl font-bold">1</div>
                  <div className="flex-1 bg-blue-500/20 rounded-xl p-4">
                    <p className="text-xl font-semibold mb-1">User logs in</p>
                    <p className="text-base text-blue-200">POST /login with email + password</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-2xl font-bold">2</div>
                  <div className="flex-1 bg-purple-500/20 rounded-xl p-4">
                    <p className="text-xl font-semibold mb-1">Server validates credentials</p>
                    <p className="text-base text-purple-200">Checks password hash, creates session</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-2xl font-bold">3</div>
                  <div className="flex-1 bg-pink-500/20 rounded-xl p-4">
                    <p className="text-xl font-semibold mb-1">Server stores session</p>
                    <p className="text-base text-pink-200">Session saved in memory/database</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-2xl font-bold">4</div>
                  <div className="flex-1 bg-green-500/20 rounded-xl p-4">
                    <p className="text-xl font-semibold mb-1">Server sends cookie</p>
                    <p className="text-base text-green-200">Set-Cookie: sessionId=abc123</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-2xl font-bold">5</div>
                  <div className="flex-1 bg-yellow-500/20 rounded-xl p-4">
                    <p className="text-xl font-semibold mb-1">Browser stores cookie</p>
                    <p className="text-base text-yellow-200">Automatically sent with every request</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-2xl font-bold">6</div>
                  <div className="flex-1 bg-orange-500/20 rounded-xl p-4">
                    <p className="text-xl font-semibold mb-1">Future requests</p>
                    <p className="text-base text-orange-200">Server looks up session → Identifies user</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-blue-500/20 backdrop-blur-md rounded-xl p-4 border-2 border-blue-400/50">
              <p className="text-lg text-center">
                <span className="font-bold text-blue-300">Key:</span> Server must <span className="font-bold text-yellow-300">remember</span> every session (stateful)
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-700 to-purple-800'
    },

    // Slide 8: Token-Based Flow
    {
      id: 'token-flow',
      title: 'Token-Based Authentication Flow',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🎫 Token-Based Flow (JWT)</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-2xl font-bold">1</div>
                  <div className="flex-1 bg-blue-500/20 rounded-xl p-4">
                    <p className="text-xl font-semibold mb-1">User logs in</p>
                    <p className="text-base text-blue-200">POST /login with email + password</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-2xl font-bold">2</div>
                  <div className="flex-1 bg-purple-500/20 rounded-xl p-4">
                    <p className="text-xl font-semibold mb-1">Server validates & creates JWT</p>
                    <p className="text-base text-purple-200">Signs token with SECRET_KEY</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-2xl font-bold">3</div>
                  <div className="flex-1 bg-pink-500/20 rounded-xl p-4">
                    <p className="text-xl font-semibold mb-1">Server does NOT store token</p>
                    <p className="text-base text-pink-200">Token is self-contained</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-2xl font-bold">4</div>
                  <div className="flex-1 bg-green-500/20 rounded-xl p-4">
                    <p className="text-xl font-semibold mb-1">Server sends token</p>
                    <p className="text-base text-green-200 font-mono text-sm">{"{ token: \"eyJhbGci...\" }"}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-2xl font-bold">5</div>
                  <div className="flex-1 bg-yellow-500/20 rounded-xl p-4">
                    <p className="text-xl font-semibold mb-1">Client stores token</p>
                    <p className="text-base text-yellow-200">localStorage or memory</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-2xl font-bold">6</div>
                  <div className="flex-1 bg-orange-500/20 rounded-xl p-4">
                    <p className="text-xl font-semibold mb-1">Future requests</p>
                    <p className="text-base text-orange-200">Authorization: Bearer eyJhbGci...</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-2xl font-bold">7</div>
                  <div className="flex-1 bg-red-500/20 rounded-xl p-4">
                    <p className="text-xl font-semibold mb-1">Server verifies signature</p>
                    <p className="text-base text-red-200">No database lookup needed!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-green-500/20 backdrop-blur-md rounded-xl p-4 border-2 border-green-400/50">
              <p className="text-lg text-center">
                <span className="font-bold text-green-300">Key:</span> Server doesn't need to <span className="font-bold text-yellow-300">remember</span> anything (stateless)
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-orange-600 to-red-700'
    },

    // Slide 9: Session vs Token Comparison
    {
      id: 'comparison',
      title: 'Session vs Token Comparison',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">⚖️ Side by Side</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-gray-500/20 backdrop-blur-md rounded-xl p-4 border-2 border-gray-400/50">
                <h3 className="text-2xl font-bold text-center mb-4">Feature</h3>
              </div>
              <div className="bg-purple-500/20 backdrop-blur-md rounded-xl p-4 border-2 border-purple-400/50">
                <h3 className="text-2xl font-bold text-center mb-4">Session</h3>
              </div>
              <div className="bg-orange-500/20 backdrop-blur-md rounded-xl p-4 border-2 border-orange-400/50">
                <h3 className="text-2xl font-bold text-center mb-4">Token (JWT)</h3>
              </div>

              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-lg font-semibold">State</p>
              </div>
              <div className="bg-purple-600/30 rounded-xl p-4">
                <p className="text-lg">Stateful</p>
                <p className="text-sm text-purple-200">Server stores sessions</p>
              </div>
              <div className="bg-orange-600/30 rounded-xl p-4">
                <p className="text-lg">Stateless</p>
                <p className="text-sm text-orange-200">Server stores nothing</p>
              </div>

              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-lg font-semibold">Storage</p>
              </div>
              <div className="bg-purple-600/30 rounded-xl p-4">
                <p className="text-lg">Server memory/DB</p>
              </div>
              <div className="bg-orange-600/30 rounded-xl p-4">
                <p className="text-lg">Client-side</p>
              </div>

              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-lg font-semibold">Scalability</p>
              </div>
              <div className="bg-purple-600/30 rounded-xl p-4">
                <p className="text-lg">❌ Harder</p>
                <p className="text-sm text-purple-200">Must share sessions</p>
              </div>
              <div className="bg-orange-600/30 rounded-xl p-4">
                <p className="text-lg">✅ Easier</p>
                <p className="text-sm text-orange-200">Any server can verify</p>
              </div>

              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-lg font-semibold">Revocation</p>
              </div>
              <div className="bg-purple-600/30 rounded-xl p-4">
                <p className="text-lg">✅ Easy</p>
                <p className="text-sm text-purple-200">Delete session</p>
              </div>
              <div className="bg-orange-600/30 rounded-xl p-4">
                <p className="text-lg">❌ Hard</p>
                <p className="text-sm text-orange-200">Wait for expiration</p>
              </div>

              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-lg font-semibold">Best For</p>
              </div>
              <div className="bg-purple-600/30 rounded-xl p-4">
                <p className="text-lg">Traditional web apps</p>
              </div>
              <div className="bg-orange-600/30 rounded-xl p-4">
                <p className="text-lg">SPAs, mobile, APIs</p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-gray-700 to-gray-900'
    },

    // Slide 10: Password Security - The Danger
    {
      id: 'password-danger',
      title: 'Password Security - The Danger',
      content: (
        <div className="text-white animate-fade-in">
      <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">⚠️ Never Store Plain Passwords!</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-red-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-red-400/50">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🔴</div>
                <h3 className="text-3xl font-bold text-red-300 mb-4">The Nightmare Database</h3>
              </div>
              
              <div className="bg-red-600/30 rounded-xl p-6 font-mono text-sm">
                <div className="text-center mb-4 text-xl">❌ NEVER DO THIS ❌</div>
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-red-400/50">
                      <th className="text-left p-2">ID</th>
                      <th className="text-left p-2">Email</th>
                      <th className="text-left p-2">Password</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-red-400/30">
                      <td className="p-2">1</td>
                      <td className="p-2">alice@example.com</td>
                      <td className="p-2 text-yellow-300">secret123</td>
                    </tr>
                    <tr className="border-b border-red-400/30">
                      <td className="p-2">2</td>
                      <td className="p-2">bob@example.com</td>
                      <td className="p-2 text-yellow-300">password456</td>
                    </tr>
                    <tr>
                      <td className="p-2">3</td>
                      <td className="p-2">charlie@example.com</td>
                      <td className="p-2 text-yellow-300">qwerty789</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-red-600/20 backdrop-blur-md rounded-xl p-6 border-2 border-red-400/50">
                <div className="text-4xl mb-3 text-center">💥</div>
                <h4 className="text-xl font-bold text-red-300 mb-3 text-center">Database Gets Hacked</h4>
                <p className="text-lg text-center">Every user's password is exposed</p>
              </div>

              <div className="bg-red-600/20 backdrop-blur-md rounded-xl p-6 border-2 border-red-400/50">
                <div className="text-4xl mb-3 text-center">🌐</div>
                <h4 className="text-xl font-bold text-red-300 mb-3 text-center">Password Reuse</h4>
                <p className="text-lg text-center">Users compromised on other sites</p>
              </div>
            </div>

            <div className="bg-yellow-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-yellow-400/50">
              <p className="text-2xl font-bold text-center">
                💰 Average data breach cost: <span className="text-red-300">$4.24 million</span>
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-800 to-red-950'
    },

    // Slide 11: Encryption vs Hashing
    {
      id: 'encryption-vs-hashing',
      title: 'Encryption vs Hashing',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🔐 The Most Confused Concept!</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border-2 border-white/30">
              <p className="text-2xl text-center">
                <span className="font-bold text-yellow-300">Key Question:</span> Do you need to READ the original data back?
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-green-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-green-400/50">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🔓</div>
                  <h3 className="text-3xl font-bold text-green-300">Encryption</h3>
                  <p className="text-2xl text-green-200 mt-2 font-bold">TWO-WAY (Reversible)</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-green-600/30 rounded-xl p-4">
                    <p className="text-lg font-semibold mb-2">📦 Like a safe:</p>
                    <p className="text-base text-green-200">Lock with a key, unlock with the SAME key. Get the original back!</p>
                  </div>
                  <div className="bg-green-600/30 rounded-xl p-4">
                    <p className="text-lg font-semibold mb-2">💬 Real example:</p>
                    <p className="text-base text-green-200">WhatsApp messages - encrypted so only you can read them</p>
                  </div>
                  <div className="bg-green-600/30 rounded-xl p-4">
                    <p className="text-base font-mono bg-green-900/50 p-3 rounded text-sm">
                      Input: "Meet at 5pm"<br/>
                      Encrypt: "a8f3k2x9p1"<br/>
                      Decrypt: "Meet at 5pm" ✅
                    </p>
                  </div>
                  <div className="bg-green-700/40 rounded-xl p-4">
                    <p className="text-lg font-bold text-center">You WANT to read it later</p>
                    <p className="text-base text-center text-green-200 mt-1">❌ BAD for passwords!</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-red-400/50">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🥚→🍳</div>
                  <h3 className="text-3xl font-bold text-red-300">Hashing</h3>
                  <p className="text-2xl text-red-200 mt-2 font-bold">ONE-WAY (Irreversible)</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-red-600/30 rounded-xl p-4">
                    <p className="text-lg font-semibold mb-2">🥚 Like cooking eggs:</p>
                    <p className="text-base text-red-200">Scramble an egg, you can NEVER unscramble it back to raw egg!</p>
                  </div>
                  <div className="bg-red-600/30 rounded-xl p-4">
                    <p className="text-lg font-semibold mb-2">🔒 Real example:</p>
                    <p className="text-base text-red-200">Passwords - we VERIFY them, never read them</p>
                  </div>
                  <div className="bg-red-600/30 rounded-xl p-4">
                    <p className="text-base font-mono bg-red-900/50 p-3 rounded text-sm">
                      Input: "password123"<br/>
                      Hash: "5f4dcc3b5aa..."<br/>
                      Reverse: IMPOSSIBLE ❌
                    </p>
                  </div>
                  <div className="bg-red-700/40 rounded-xl p-4">
                    <p className="text-lg font-bold text-center">You DON'T want to read it</p>
                    <p className="text-base text-center text-red-200 mt-1">✅ PERFECT for passwords!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-yellow-400/50">
              <p className="text-2xl text-center mb-3">
                <span className="font-bold text-yellow-300">For Passwords:</span> ALWAYS hash, NEVER encrypt!
              </p>
              <p className="text-lg text-center text-yellow-100">
                Why? Even if hackers steal your database, they can't read the passwords! 🛡️
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-700 to-indigo-800'
    },

    // Slide 12: How Hashing Verification Works
    {
      id: 'hash-verification',
      title: 'How Password Verification Works',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🔍 The Magic Trick: Verify Without Knowing!</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-purple-500/20 backdrop-blur-md rounded-2xl p-6 border-2 border-purple-400/50">
              <p className="text-2xl text-center mb-2">
                <span className="font-bold text-yellow-300">The Puzzle:</span> How can we verify you know the password...
              </p>
              <p className="text-xl text-center text-purple-100">
                ...without us ever storing or knowing what it is? 🤔
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <div className="space-y-6">
                <div className="bg-blue-500/20 rounded-xl p-6 border-2 border-blue-400/50">
                  <h3 className="text-2xl font-bold text-blue-300 mb-4 text-center">📝 Step 1: Signup (Creating Account)</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-600/30 rounded-lg p-4">
                      <p className="font-semibold mb-1">1️⃣ User types password:</p>
                      <p className="font-mono bg-blue-800/50 px-3 py-1 rounded inline-block">"secret123"</p>
                    </div>
                    <div className="text-center text-2xl">⬇️ Hash it!</div>
                    <div className="bg-blue-600/30 rounded-lg p-4">
                      <p className="font-semibold mb-1">2️⃣ Server creates hash:</p>
                      <p className="font-mono bg-purple-800/50 px-3 py-1 rounded inline-block text-sm">"$2b$10$xK9mP2vL8..."</p>
                      <p className="text-xs text-blue-200 mt-2">This is the scrambled egg - can't unscramble it!</p>
                    </div>
                    <div className="text-center text-2xl">⬇️ Store it!</div>
                    <div className="bg-green-600/40 rounded-lg p-4 text-center">
                      <p className="font-bold text-lg">3️⃣ Save ONLY the hash to database</p>
                      <p className="text-sm text-green-200 mt-1">Original password "secret123" is thrown away immediately! 🗑️</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-400/50">
                  <h3 className="text-2xl font-bold text-green-300 mb-4 text-center">🔐 Step 2: Login (Coming Back)</h3>
                  <div className="space-y-3">
                    <div className="bg-green-600/30 rounded-lg p-4">
                      <p className="font-semibold mb-1">1️⃣ User types password again:</p>
                      <p className="font-mono bg-blue-800/50 px-3 py-1 rounded inline-block">"secret123"</p>
                    </div>
                    <div className="text-center text-2xl">⬇️ Hash it again!</div>
                    <div className="bg-green-600/30 rounded-lg p-4">
                      <p className="font-semibold mb-1">2️⃣ Server creates hash AGAIN:</p>
                      <p className="font-mono bg-purple-800/50 px-3 py-1 rounded inline-block text-sm">"$2b$10$xK9mP2vL8..."</p>
                      <p className="text-xs text-green-200 mt-2">Same input = Same hash!</p>
                    </div>
                    <div className="text-center text-2xl">⬇️ Compare!</div>
                    <div className="bg-yellow-600/40 rounded-lg p-4 text-center">
                      <p className="font-bold text-lg mb-2">3️⃣ Does NEW hash match STORED hash?</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-700/50 rounded-lg p-4 text-center border-2 border-green-400">
                        <span className="text-4xl">✅</span>
                        <p className="font-bold text-lg mt-2">MATCH!</p>
                        <p className="text-sm text-green-200">They must know the password!</p>
                      </div>
                      <div className="bg-red-700/50 rounded-lg p-4 text-center border-2 border-red-400">
                        <span className="text-4xl">❌</span>
                        <p className="font-bold text-lg mt-2">NO MATCH</p>
                        <p className="text-sm text-red-200">Wrong password!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-yellow-400/50">
              <p className="text-2xl text-center font-bold mb-2">
                <span className="text-yellow-300">🎩 The Magic:</span> Server NEVER knows your actual password!
              </p>
              <p className="text-lg text-center text-yellow-100">
                Even if hackers steal the database, they only get scrambled eggs - not the recipe! 🥚
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-700 to-purple-800'
    },

    // Slide 13: The Problem with Simple Hashing
    {
      id: 'rainbow-tables',
      title: 'The Problem: Rainbow Tables',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🌈 Rainbow Tables Attack</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-red-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-red-400/50">
              <h3 className="text-2xl font-bold text-red-300 mb-4 text-center">Simple Hashing (No Salt)</h3>
              <div className="bg-red-600/30 rounded-xl p-6 font-mono text-sm">
                <div className="mb-4">
                  <p className="text-yellow-300">sha256("secret123")</p>
                  <p className="text-blue-300">→ Always: "e64b78fc3bc91bcbc7dc232ba8ec59e0"</p>
                </div>
                <div className="mb-4">
                  <p className="text-yellow-300">sha256("password")</p>
                  <p className="text-blue-300">→ Always: "5e884898da28047151d0e56f8dc6..."</p>
                </div>
                <p className="text-red-300 text-center mt-4">⚠️ Same password = Same hash (every time, for everyone)</p>
              </div>
            </div>

            <div className="bg-orange-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-orange-400/50">
              <h3 className="text-2xl font-bold text-orange-300 mb-4 text-center">Attacker's Pre-Computed Table</h3>
              <div className="bg-orange-600/30 rounded-xl p-6 font-mono text-xs">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-orange-400/50">
                      <th className="text-left p-2">Password</th>
                      <th className="text-left p-2">Hash</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-orange-400/30">
                      <td className="p-2 text-yellow-300">password</td>
                      <td className="p-2 text-blue-300">5e884898da28047151d0e56f8dc6...</td>
                    </tr>
                    <tr className="border-b border-orange-400/30">
                      <td className="p-2 text-yellow-300">123456</td>
                      <td className="p-2 text-blue-300">8d969eef6ecad3c29a3a629280e68...</td>
                    </tr>
                    <tr className="border-b border-orange-400/30">
                      <td className="p-2 text-yellow-300">secret123</td>
                      <td className="p-2 text-blue-300">e64b78fc3bc91bcbc7dc232ba8ec...</td>
                    </tr>
                    <tr>
                      <td className="p-2 text-yellow-300">qwerty</td>
                      <td className="p-2 text-blue-300">65e84be33532fb784c48129675f9e...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-red-600/20 backdrop-blur-md rounded-xl p-6 border-2 border-red-400/50">
              <div className="text-center space-y-4">
                <div className="text-5xl">💥</div>
                <h3 className="text-2xl font-bold text-red-300">Attack Process</h3>
                <div className="space-y-2">
                  <p className="text-lg">1. Steal database of hashes</p>
                  <p className="text-lg">2. Look up each hash in rainbow table</p>
                  <p className="text-lg">3. Instantly find passwords! ⚡</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 backdrop-blur-md rounded-xl p-4 border-2 border-yellow-400/50">
              <p className="text-xl text-center font-bold">
                Real-World: LinkedIn 2012 - 6.5M passwords cracked in <span className="text-red-300">hours</span> 😱
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-700 to-orange-800'
    },

    // Slide 14: Salting - The Solution
    {
      id: 'salting',
      title: 'Salting - The Solution',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🧂 Salting: Making Every Hash Unique</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-purple-500/20 backdrop-blur-md rounded-2xl p-6 border-2 border-purple-400/50">
              <p className="text-2xl text-center">
                <span className="font-bold text-yellow-300">The Problem:</span> Same password always produces the same hash
              </p>
              <p className="text-lg text-center mt-2 text-purple-100">
                If 1000 users pick "password123", hackers see 1000 identical hashes and know instantly! 😱
              </p>
            </div>

            <div className="bg-green-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-green-400/50">
              <h3 className="text-3xl font-bold text-green-300 mb-6 text-center">What is a Salt?</h3>
              <p className="text-xl text-center mb-4">
                A <span className="font-bold text-yellow-300">random string</span> that gets mixed with the password BEFORE hashing
              </p>
              <p className="text-lg text-center text-green-200">
                Think of it like adding random spice to each dish - same recipe, but each one tastes unique! 🍝
              </p>
              
              <div className="space-y-6 mt-6">
                <div className="bg-red-600/30 rounded-xl p-6">
                  <p className="text-lg font-bold mb-3 text-red-300 text-center">❌ Without Salt (INSECURE)</p>
                  <div className="font-mono text-sm space-y-2">
                    <p>Alice: hash("secret123") → <span className="text-yellow-300">"e64b78fc..."</span></p>
                    <p>Bob: hash("secret123") → <span className="text-yellow-300">"e64b78fc..."</span></p>
                    <p className="text-red-300 text-center mt-3 text-base">🚨 Hacker sees: "Oh! Both use the same password!"</p>
                  </div>
                </div>

                <div className="bg-green-600/30 rounded-xl p-6">
                  <p className="text-lg font-bold mb-3 text-green-300 text-center">✅ With Salt (SECURE)</p>
                  <div className="font-mono text-sm space-y-2">
                    <p>Alice: hash("secret123" + <span className="text-blue-300">"k9mP2vL8"</span>) → <span className="text-yellow-300">"$2b$10$k9mP..."</span></p>
                    <p>Bob: hash("secret123" + <span className="text-blue-300">"x3tN7wK2"</span>) → <span className="text-yellow-300">"$2b$10$x3tN..."</span></p>
                    <p className="text-green-300 text-center mt-3 text-base">✅ Hacker sees: Completely different hashes! Can't tell they're the same password!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-blue-400/50">
                <h4 className="text-xl font-bold text-blue-300 mb-4 text-center">Key Salt Facts</h4>
                <div className="space-y-3">
                  <div className="bg-blue-600/30 rounded-xl p-3">
                    <p className="font-semibold mb-1">🎲 Random for EACH user</p>
                    <p className="text-sm text-blue-200">Even if 2 users pick same password, different salts = different hashes</p>
                  </div>
                  <div className="bg-blue-600/30 rounded-xl p-3">
                    <p className="font-semibold mb-1">📢 NOT a secret</p>
                    <p className="text-sm text-blue-200">Salt is stored in plain text with the hash! That's OK!</p>
                  </div>
                  <div className="bg-blue-600/30 rounded-xl p-3">
                    <p className="font-semibold mb-1">🔢 Long & random</p>
                    <p className="text-sm text-blue-200">Usually 16+ characters of random data</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-purple-400/50">
                <h4 className="text-xl font-bold text-purple-300 mb-4 text-center">Why It Works</h4>
                <div className="space-y-3">
                  <div className="bg-purple-600/30 rounded-xl p-3">
                    <p className="font-semibold mb-1">🌈 Defeats rainbow tables</p>
                    <p className="text-sm text-purple-200">Pre-computed hash lists become useless</p>
                  </div>
                  <div className="bg-purple-600/30 rounded-xl p-3">
                    <p className="font-semibold mb-1">🎯 Forces unique attacks</p>
                    <p className="text-sm text-purple-200">Hacker must crack EACH password individually</p>
                  </div>
                  <div className="bg-purple-600/30 rounded-xl p-3">
                    <p className="font-semibold mb-1">⏱️ Massively slows attacks</p>
                    <p className="text-sm text-purple-200">What took 1 hour now takes 1000+ hours!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-teal-700'
    },

    // Slide 15: bcrypt - The Industry Standard
    {
      id: 'bcrypt',
      title: 'bcrypt - The Industry Standard',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🔐 Meet bcrypt: Your Password Protector</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-blue-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-blue-400/50">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🛡️</div>
                <h3 className="text-3xl font-bold text-blue-300">What is bcrypt?</h3>
                <p className="text-xl text-blue-200 mt-4">
                  A hashing algorithm <span className="font-bold text-yellow-300">specifically built</span> for passwords
                </p>
                <p className="text-lg text-blue-300 mt-3">
                  It does EVERYTHING we need automatically: hashing + salting + slowing down attacks!
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-green-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-green-400/50">
                <h4 className="text-xl font-bold text-green-300 mb-4 text-center">✅ What bcrypt Does For You</h4>
                <div className="space-y-3">
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <p className="font-bold text-lg mb-1">🎲 Auto-salting</p>
                    <p className="text-sm text-green-200">Generates a random salt for EVERY password - you don't lift a finger!</p>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <p className="font-bold text-lg mb-1">🐌 Intentionally slow</p>
                    <p className="text-sm text-green-200">Takes ~100ms to hash. For login? Unnoticeable. For hackers? A nightmare!</p>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <p className="font-bold text-lg mb-1">🎚️ Adjustable "work factor"</p>
                    <p className="text-sm text-green-200">As computers get faster, you can dial up the difficulty!</p>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <p className="font-bold text-lg mb-1">🏆 Industry standard</p>
                    <p className="text-sm text-green-200">Used by Google, Facebook, GitHub - trusted for 25+ years</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-purple-400/50">
                <h4 className="text-xl font-bold text-purple-300 mb-4 text-center">🐌 Why "Slow" Saves You</h4>
                <p className="text-center text-sm text-purple-200 mb-4">
                  Remember: You hash once per login. Attackers try BILLIONS of guesses!
                </p>
                <div className="space-y-4">
                  <div className="bg-red-600/30 rounded-lg p-4">
                    <p className="font-bold text-lg mb-2">❌ Fast Hash (SHA-256)</p>
                    <p className="text-sm mb-1">⚡ 1 microsecond per hash</p>
                    <p className="text-sm">💥 <span className="font-bold text-red-200">1 billion</span> password guesses/second</p>
                    <p className="text-xs text-red-300 mt-2">Your DB gets hacked? They crack all passwords in MINUTES!</p>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <p className="font-bold text-lg mb-2">✅ bcrypt (Slow)</p>
                    <p className="text-sm mb-1">🐌 100 milliseconds per hash</p>
                    <p className="text-sm">✅ <span className="font-bold text-green-200">Only 10</span> password guesses/second</p>
                    <p className="text-xs text-green-300 mt-2">Your DB gets hacked? They need YEARS to crack passwords!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-yellow-400/50">
              <p className="text-2xl text-center mb-2">
                <span className="font-bold text-yellow-300">Ready to use bcrypt?</span>
              </p>
              <p className="text-2xl text-center">
                <span className="font-mono bg-gray-800 px-4 py-2 rounded">npm install bcrypt</span>
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-800 to-indigo-900'
    },

    // Slide 16: bcrypt Code Example
    {
      id: 'bcrypt-code',
      title: 'Using bcrypt in Code',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">💻 bcrypt in Action</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-blue-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-blue-400/50">
              <h3 className="text-2xl font-bold text-blue-300 mb-4 text-center">Hashing a Password (Signup)</h3>
              <div className="bg-gray-900/50 rounded-xl p-6 font-mono text-sm">
                <pre className="text-green-300">
{`const bcrypt = require('bcrypt');

// Hash password during signup
const hashedPassword = await bcrypt.hash(password, 10);
//                                              costFactor ↗️
// Store hashedPassword in database`}
                </pre>
              </div>
              <div className="mt-4 bg-blue-600/30 rounded-xl p-4">
                <p className="text-lg">Cost factor 10 = 2^10 = 1,024 iterations</p>
                <p className="text-base text-blue-200">Takes ~100ms, perfect balance</p>
              </div>
            </div>

            <div className="bg-green-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-green-400/50">
              <h3 className="text-2xl font-bold text-green-300 mb-4 text-center">Comparing Passwords (Login)</h3>
              <div className="bg-gray-900/50 rounded-xl p-6 font-mono text-sm">
                <pre className="text-green-300">
{`// Compare provided password with stored hash
const isMatch = await bcrypt.compare(password, user.password);

if (isMatch) {
  // Login success ✅
} else {
  // Invalid password ❌
}`}
                </pre>
              </div>
              <div className="mt-4 bg-green-600/30 rounded-xl p-4">
                <p className="text-lg text-center">bcrypt automatically extracts salt from hash and compares!</p>
              </div>
            </div>

            <div className="bg-red-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-red-400/50">
              <h3 className="text-xl font-bold text-red-300 mb-3 text-center">❌ Common Mistakes</h3>
              <div className="space-y-2 font-mono text-sm">
                <div className="bg-red-600/30 rounded-lg p-3">
                  <p className="text-red-300">// ❌ DON'T compare with ===</p>
                  <p>if (password === user.password)</p>
                </div>
                <div className="bg-green-600/30 rounded-lg p-3">
                  <p className="text-green-300">// ✅ DO use bcrypt.compare</p>
                  <p>if (await bcrypt.compare(password, user.password))</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-700 to-blue-800'
    },

    // Slide 17: JWT Introduction
    {
      id: 'jwt-intro',
      title: 'JSON Web Tokens (JWT)',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🎫 JSON Web Tokens (JWT)</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-orange-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-orange-400/50">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🔐</div>
                <h3 className="text-3xl font-bold text-orange-300 mb-4">What is a JWT?</h3>
                <p className="text-2xl text-orange-200">
                  A <span className="font-bold text-yellow-300">signed JSON object</span> that proves authenticity without needing a database lookup
                </p>
              </div>
            </div>

            <div className="bg-blue-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-blue-400/50">
              <h3 className="text-2xl font-bold text-blue-300 mb-6 text-center">🪪 Real-World Analogy: Driver's License</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <p className="font-bold mb-1">Contains your info</p>
                    <p className="text-sm text-blue-200">Name, birthdate, address</p>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <p className="font-bold mb-1">Has security features</p>
                    <p className="text-sm text-blue-200">Photo, hologram (signature)</p>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <p className="font-bold mb-1">Anyone can verify it</p>
                    <p className="text-sm text-blue-200">Check if it's legitimate</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-purple-600/30 rounded-lg p-4">
                    <p className="font-bold mb-1">DMV doesn't remember</p>
                    <p className="text-sm text-purple-200">No need to call DMV to verify</p>
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-4">
                    <p className="font-bold mb-1">Can't be altered</p>
                    <p className="text-sm text-purple-200">Hologram breaks if tampered</p>
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-4">
                    <p className="font-bold mb-1">Self-contained</p>
                    <p className="text-sm text-purple-200">All info is on the license</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-green-400/50">
              <h3 className="text-2xl font-bold text-green-300 mb-4 text-center">JWT = Same Concept!</h3>
              <p className="text-xl text-center">
                Contains user info + signature → Server verifies without database lookup
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-orange-600 to-amber-700'
    },

    // Slide 18: JWT Structure
    {
      id: 'jwt-structure',
      title: 'JWT Structure - Three Parts',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🔍 Anatomy of a JWT</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-purple-500/20 backdrop-blur-md rounded-2xl p-6 border-2 border-purple-400/50">
              <p className="text-2xl text-center mb-2">
                <span className="font-bold text-yellow-300">A JWT is three pieces separated by dots (.)</span>
              </p>
              <p className="text-lg text-center text-purple-100">
                Think of it like a sealed envelope with: Address, Letter, and Wax Seal 📨
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-center mb-4">A Real JWT Token:</h3>
              <div className="font-mono text-xs bg-gray-900/50 rounded-xl p-4 mb-6 overflow-x-auto">
                <p className="text-blue-300 break-all">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</p>
                <p className="text-center text-2xl text-white my-2">.</p>
                <p className="text-green-300 break-all">eyJpZCI6IjEyMyIsImVtYWlsIjoiYWxpY2VAZXhhbXBsZS5jb20ifQ</p>
                <p className="text-center text-2xl text-white my-2">.</p>
                <p className="text-red-300 break-all">K8SN4k3L9mP2vW7xQ5tR8uY6zA1bC3dE4fG7hI9jK0l</p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="bg-blue-500/20 rounded-xl p-6 border-2 border-blue-400/50">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">📋</div>
                    <h3 className="text-2xl font-bold text-blue-300">1. Header</h3>
                    <p className="text-sm text-blue-200 mt-1">"How to read this token"</p>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-xs mb-3">
                    <pre className="text-blue-200">
{`{
  "alg": "HS256",
  "typ": "JWT"
}`}
                    </pre>
                  </div>
                  <div className="text-sm space-y-2">
                    <p className="text-blue-200"><span className="font-bold">alg:</span> Signing algorithm used</p>
                    <p className="text-blue-200"><span className="font-bold">typ:</span> Token type (always "JWT")</p>
                  </div>
                </div>

                <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-400/50">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">📦</div>
                    <h3 className="text-2xl font-bold text-green-300">2. Payload</h3>
                    <p className="text-sm text-green-200 mt-1">"The actual data"</p>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-xs mb-3">
                    <pre className="text-green-200">
{`{
  "id": "123",
  "email": "alice@...",
  "exp": 1729612800
}`}
                    </pre>
                  </div>
                  <div className="text-sm space-y-2">
                    <p className="text-green-200"><span className="font-bold">id:</span> User's unique ID</p>
                    <p className="text-green-200"><span className="font-bold">exp:</span> When token expires</p>
                  </div>
                </div>

                <div className="bg-red-500/20 rounded-xl p-6 border-2 border-red-400/50">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">🔏</div>
                    <h3 className="text-2xl font-bold text-red-300">3. Signature</h3>
                    <p className="text-sm text-red-200 mt-1">"Proof of authenticity"</p>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-3 font-mono text-xs mb-3">
                    <pre className="text-red-200 text-[10px]">
{`HMAC(
  header+payload,
  SECRET
)`}
                    </pre>
                  </div>
                  <div className="text-sm space-y-2">
                    <p className="text-red-200">Hash of header + payload using YOUR secret key</p>
                    <p className="text-red-200 font-bold">🔒 Only YOU can create this!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-yellow-400/50">
              <div className="text-center space-y-3">
                <p className="text-2xl font-bold text-yellow-300">🚨 CRITICAL Misconception!</p>
                <p className="text-xl">Header and Payload are <span className="font-bold text-red-300">NOT encrypted</span> - just Base64 encoded</p>
                <p className="text-lg text-yellow-100">Anyone can decode and READ them!</p>
                <p className="text-lg"><span className="font-bold text-green-300">BUT</span> the signature prevents anyone from CHANGING them!</p>
                <p className="text-base text-yellow-100 mt-3">🎯 Think: Everyone can read the contract, but only you can sign it!</p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-cyan-700 to-blue-800'
    },

    // Slide 19: How JWT Verification Works
    {
      id: 'jwt-verification',
      title: 'How JWT Verification Works',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🔐 JWT Verification</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-green-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-green-400/50">
              <h3 className="text-2xl font-bold text-green-300 mb-6 text-center">✅ Valid Token</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">1️⃣</div>
                  <div className="flex-1 bg-green-600/30 rounded-lg p-4">
                    <p className="font-bold mb-1">Client sends token</p>
                    <p className="text-sm text-green-200">Authorization: Bearer eyJhbGci...</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">2️⃣</div>
                  <div className="flex-1 bg-green-600/30 rounded-lg p-4">
                    <p className="font-bold mb-1">Server splits token</p>
                    <p className="text-sm text-green-200">header + payload + signature</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">3️⃣</div>
                  <div className="flex-1 bg-green-600/30 rounded-lg p-4">
                    <p className="font-bold mb-1">Server recreates signature</p>
                    <p className="text-sm text-green-200">HMAC(header + payload, SECRET_KEY)</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">4️⃣</div>
                  <div className="flex-1 bg-green-600/30 rounded-lg p-4">
                    <p className="font-bold mb-1">Server compares signatures</p>
                    <p className="text-sm text-green-200">Match? ✅ Token is valid!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-red-400/50">
              <h3 className="text-2xl font-bold text-red-300 mb-6 text-center">❌ Tampered Token</h3>
              <div className="space-y-4">
                <div className="bg-red-600/30 rounded-lg p-4">
                  <p className="font-bold mb-2">🚨 Attacker changes payload:</p>
                  <p className="text-sm font-mono">{"{ id: \"999\" }"} → {"{ id: \"123\" }"}</p>
                </div>
                <div className="bg-red-600/30 rounded-lg p-4">
                  <p className="font-bold mb-2">🔒 Server recreates signature:</p>
                  <p className="text-sm">Uses SECRET_KEY (attacker doesn't have it!)</p>
                </div>
                <div className="bg-red-600/30 rounded-lg p-4">
                  <p className="font-bold mb-2">⚔️ Signatures don't match:</p>
                  <p className="text-sm">Token is REJECTED ❌</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-yellow-400/50">
              <p className="text-2xl text-center font-bold">
                🔑 Secret Key = Your Security
              </p>
              <p className="text-lg text-center mt-2">
                Without the SECRET_KEY, attackers can't forge valid tokens
              </p>
        </div>
      </div>
    </div>
      ),
      bgGradient: 'from-emerald-700 to-green-800'
    },

    // Slide 20: JWT in Code
    {
      id: 'jwt-code',
      title: 'JWT in Code',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">💻 JWT in Node.js</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-blue-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-blue-400/50">
              <h3 className="text-2xl font-bold text-blue-300 mb-4 text-center">Creating a Token</h3>
              <div className="bg-gray-900/50 rounded-xl p-6 font-mono text-sm">
                <pre className="text-green-300">
{`const jwt = require('jsonwebtoken');

const token = jwt.sign(
  { id: user._id, email: user.email },  // Payload
  process.env.JWT_SECRET,                // Secret key
  { expiresIn: '7d' }                    // Options
);

// Send token to client
res.json({ token });`}
                </pre>
              </div>
            </div>

            <div className="bg-green-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-green-400/50">
              <h3 className="text-2xl font-bold text-green-300 mb-4 text-center">Verifying a Token</h3>
              <div className="bg-gray-900/50 rounded-xl p-6 font-mono text-sm">
                <pre className="text-green-300">
{`try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  // decoded = { id: '123', email: 'alice@...', iat: ..., exp: ... }
  console.log('User:', decoded.email);
} catch (error) {
  console.log('Invalid token!');
}`}
                </pre>
              </div>
            </div>

            <div className="bg-purple-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-purple-400/50">
              <h3 className="text-2xl font-bold text-purple-300 mb-4 text-center">Middleware for Protected Routes</h3>
              <div className="bg-gray-900/50 rounded-xl p-6 font-mono text-sm">
                <pre className="text-green-300">
{`function authenticate(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // Attach user info
    next();              // Continue to route
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
}

// Use it:
app.get('/api/profile', authenticate, (req, res) => {
  res.json({ user: req.user });
});`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-800 to-purple-900'
    },

    // Slide 21: Signup Route Overview
    {
      id: 'signup-overview',
      title: 'Building a Signup Route',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">📝 The Signup Flow</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-2xl font-bold">1</div>
                  <div className="flex-1 bg-blue-500/20 rounded-xl p-4">
                    <p className="text-xl font-semibold">Validate Input</p>
                    <p className="text-sm text-blue-200">Email format, password strength, required fields</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-2xl font-bold">2</div>
                  <div className="flex-1 bg-purple-500/20 rounded-xl p-4">
                    <p className="text-xl font-semibold">Check if User Exists</p>
                    <p className="text-sm text-purple-200">Find by email or username</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-2xl font-bold">3</div>
                  <div className="flex-1 bg-pink-500/20 rounded-xl p-4">
                    <p className="text-xl font-semibold">Hash Password</p>
                    <p className="text-sm text-pink-200">bcrypt.hash(password, 10)</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-2xl font-bold">4</div>
                  <div className="flex-1 bg-green-500/20 rounded-xl p-4">
                    <p className="text-xl font-semibold">Save User to Database</p>
                    <p className="text-sm text-green-200">Store hashed password (never plain!)</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-2xl font-bold">5</div>
                  <div className="flex-1 bg-yellow-500/20 rounded-xl p-4">
                    <p className="text-xl font-semibold">Generate JWT Token</p>
                    <p className="text-sm text-yellow-200">jwt.sign(payload, SECRET)</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-2xl font-bold">6</div>
                  <div className="flex-1 bg-orange-500/20 rounded-xl p-4">
                    <p className="text-xl font-semibold">Send Response</p>
                    <p className="text-sm text-orange-200">Return token + user info (no password!)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-indigo-700'
    },

    // Slide 22: Signup Code
    {
      id: 'signup-code',
      title: 'Signup Route Code',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">💻 Signup Route Implementation</h2>
          
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="bg-gray-900/50 rounded-xl p-6 font-mono text-xs">
                <pre className="text-green-300">
{`router.post('/signup', async (req, res) => {
  const { email, password, username } = req.body;
  
  // 1. Validate
  if (!email || !password || !username) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  
  // 2. Check if exists
  const existingUser = await User.findOne({ 
    $or: [{ email }, { username }] 
  });
  if (existingUser) {
    return res.status(409).json({ error: 'User exists' });
  }
  
  // 3. Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  
  // 4. Save user
  const newUser = await User.create({
    email, username, password: hashedPassword
  });
  
  // 5. Generate JWT
  const token = jwt.sign(
    { id: newUser._id, email: newUser.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
  
  // 6. Send response
  res.status(201).json({
    success: true,
    token,
    user: { id: newUser._id, email: newUser.email }
  });
});`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-700 to-teal-800'
    },

    // Slide 23: Environment Variables
    {
      id: 'env-vars',
      title: 'Environment Variables',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🔐 Protecting Your Secrets</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-red-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-red-400/50">
              <h3 className="text-3xl font-bold text-red-300 mb-4 text-center">❌ NEVER DO THIS</h3>
              <div className="bg-red-600/30 rounded-xl p-6 font-mono text-sm">
                <pre className="text-red-200">
{`const JWT_SECRET = 'my-secret-key-12345';
const MONGODB_URI = 'mongodb://localhost:27017/myapp';

// If you commit this to GitHub:
// ✓ Anyone can see your secrets
// ✓ Attackers can forge tokens
// ✓ Your database is compromised`}
                </pre>
              </div>
            </div>

            <div className="bg-green-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-green-400/50">
              <h3 className="text-3xl font-bold text-green-300 mb-4 text-center">✅ DO THIS INSTEAD</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-lg font-bold mb-2">1. Create .env file:</p>
                  <div className="bg-gray-900/50 rounded-xl p-4 font-mono text-sm">
                    <pre className="text-green-300">
{`JWT_SECRET=your-super-long-random-secret
MONGODB_URI=mongodb://localhost:27017/myapp
PORT=3000`}
                    </pre>
                  </div>
                </div>

                <div>
                  <p className="text-lg font-bold mb-2">2. Use in code:</p>
                  <div className="bg-gray-900/50 rounded-xl p-4 font-mono text-sm">
                    <pre className="text-green-300">
{`require('dotenv').config();

const SECRET_KEY = process.env.JWT_SECRET;
const PORT = process.env.PORT || 3000;`}
                    </pre>
                  </div>
                </div>

                <div>
                  <p className="text-lg font-bold mb-2">3. Add to .gitignore:</p>
                  <div className="bg-gray-900/50 rounded-xl p-4 font-mono text-sm">
                    <pre className="text-green-300">.env</pre>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-yellow-400/50">
              <p className="text-2xl text-center font-bold">
                🔒 Never commit .env to Git! Use .env.example instead
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-700 to-orange-800'
    },

    // Slide 24: Security Best Practices
    {
      id: 'security-practices',
      title: 'Security Best Practices',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🛡️ Security Checklist</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-green-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-green-400/50">
                <h3 className="text-2xl font-bold text-green-300 mb-6 text-center">✅ DO</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <p className="font-bold">Hash passwords with bcrypt</p>
                      <p className="text-sm text-green-200">Never store plain passwords</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <p className="font-bold">Use strong SECRET_KEY</p>
                      <p className="text-sm text-green-200">At least 32 random characters</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <p className="font-bold">Validate all inputs</p>
                      <p className="text-sm text-green-200">Email format, password strength</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <p className="font-bold">Use environment variables</p>
                      <p className="text-sm text-green-200">Store secrets in .env</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <p className="font-bold">Short token expiration</p>
                      <p className="text-sm text-green-200">15 min - 1 hour for access tokens</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">✓</span>
                    <div>
                      <p className="font-bold">Use HTTPS in production</p>
                      <p className="text-sm text-green-200">Encrypt data in transit</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-red-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-red-400/50">
                <h3 className="text-2xl font-bold text-red-300 mb-6 text-center">❌ DON'T</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">✗</span>
                    <div>
                      <p className="font-bold">Store plain passwords</p>
                      <p className="text-sm text-red-200">Even encrypted ones!</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">✗</span>
                    <div>
                      <p className="font-bold">Put secrets in JWT payload</p>
                      <p className="text-sm text-red-200">Payload is Base64, not encrypted</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">✗</span>
                    <div>
                      <p className="font-bold">Commit .env to Git</p>
                      <p className="text-sm text-red-200">Exposes all your secrets</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">✗</span>
                    <div>
                      <p className="font-bold">Use weak SECRET_KEY</p>
                      <p className="text-sm text-red-200">Like "secret" or "password"</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">✗</span>
                    <div>
                      <p className="font-bold">Reveal which field is wrong</p>
                      <p className="text-sm text-red-200">"User not found" vs "Wrong password"</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-2xl">✗</span>
                    <div>
                      <p className="font-bold">Trust client-side validation</p>
                      <p className="text-sm text-red-200">Always validate on server</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-700 to-pink-800'
    },

    // Slide 25: Summary
    {
      id: 'summary',
      title: 'Summary',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">📚 What We Learned Today</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-500/20 backdrop-blur-md rounded-2xl p-6 border-2 border-blue-400/50">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-2">🔐</div>
                  <h3 className="text-2xl font-bold text-blue-300">Authentication Models</h3>
                </div>
                <ul className="space-y-2 text-lg">
                  <li>• Session-based (stateful)</li>
                  <li>• Token-based (stateless)</li>
                  <li>• When to use each</li>
                </ul>
              </div>

              <div className="bg-green-500/20 backdrop-blur-md rounded-2xl p-6 border-2 border-green-400/50">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-2">🔒</div>
                  <h3 className="text-2xl font-bold text-green-300">Password Security</h3>
                </div>
                <ul className="space-y-2 text-lg">
                  <li>• Never store plain passwords</li>
                  <li>• Hashing vs encryption</li>
                  <li>• Salting prevents rainbow tables</li>
                </ul>
              </div>

              <div className="bg-purple-500/20 backdrop-blur-md rounded-2xl p-6 border-2 border-purple-400/50">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-2">🛡️</div>
                  <h3 className="text-2xl font-bold text-purple-300">bcrypt</h3>
                </div>
                <ul className="space-y-2 text-lg">
                  <li>• Industry standard for passwords</li>
                  <li>• Automatic salting</li>
                  <li>• Slow by design (good!)</li>
                </ul>
              </div>

              <div className="bg-orange-500/20 backdrop-blur-md rounded-2xl p-6 border-2 border-orange-400/50">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-2">🎫</div>
                  <h3 className="text-2xl font-bold text-orange-300">JWT</h3>
                </div>
                <ul className="space-y-2 text-lg">
                  <li>• Signed JSON objects</li>
                  <li>• Stateless authentication</li>
                  <li>• Three parts: header.payload.signature</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-yellow-400/50">
              <h3 className="text-3xl font-bold text-yellow-300 mb-6 text-center">Key Takeaways</h3>
              <div className="grid grid-cols-2 gap-4 text-lg">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">1️⃣</span>
                  <span>Always HASH passwords with bcrypt</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">2️⃣</span>
                  <span>Use JWT for stateless auth</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">3️⃣</span>
                  <span>Store secrets in environment variables</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">4️⃣</span>
                  <span>Validate all user input on server</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-700'
    },

    // Slide 26: Thank You
    {
      id: 'thank-you',
      title: 'Thank You',
      content: (
        <div className="text-center space-y-12">
          <style>{customStyles}</style>
          <div className="space-y-8">
            <div className="text-8xl animate-bounce-in">🔐</div>
            <h1 className="text-6xl font-bold text-white mb-6">Thank You!</h1>
            <h2 className="text-3xl font-semibold text-red-100">
              Class 13: Authentication Concepts
            </h2>
          </div>
          
          <div className="mt-16 space-y-6">
            <div className="text-2xl text-white">Next Class:</div>
            <div className="text-3xl font-medium text-red-200">
              Advanced Authentication Patterns
            </div>
            <div className="text-xl text-red-300 mt-8">
              Don't forget your homework!
            </div>
          </div>

          <div className="mt-12">
            <div className="text-2xl font-medium text-white">Questions?</div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-700 to-rose-800'
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

export default Class13Slides;
