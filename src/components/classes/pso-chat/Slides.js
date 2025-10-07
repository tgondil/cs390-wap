import React, { useEffect, useState } from 'react';

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

const CodeBlock = ({ code, language = '', filename = '', className = '' }) => {
  return (
    <div className="relative group">
      {filename && (
        <div className="bg-gray-800 px-4 py-2 text-sm text-gray-300 rounded-t-lg border-b border-gray-600">
          {filename}
        </div>
      )}
      <div className={`bg-gray-900 rounded-lg ${filename ? 'rounded-t-none' : ''} p-4 relative ${className}`}>
        <pre className="text-white font-mono text-sm overflow-x-auto whitespace-pre-wrap">
          {code}
        </pre>
      </div>
    </div>
  );
};

const PSOChatSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title
    {
      id: 'pso-chat-title',
      title: 'PSO: Chat API',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center">
            <div className="mx-auto max-w-2xl">
              <div className="bg-white/10 backdrop-blur rounded-3xl p-12 border border-white/20">
                <div className="text-8xl mb-6 animate-float">💬</div>
                <h1 className="text-6xl font-extrabold tracking-tight">PSO: Chat API</h1>
                <p className="text-white/80 mt-4 text-2xl">Build a REST API Together!</p>
                <p className="text-white/60 mt-2 text-lg">Pair Programming Assignment</p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-700 to-purple-700'
    },

    // Slide 2: GeoGuessr
    {
      id: 'geoguessr',
      title: 'GeoGuessr',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <div className="text-9xl mb-6 animate-float">🌍</div>
            <h2 className="text-5xl font-extrabold mb-4">GeoGuessr</h2>
            <p className="text-2xl text-white/80">Warm up your brain with some geography!</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold text-green-300 mb-6 text-center">How to Play</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-green-500/20 rounded-lg p-6 border border-green-400">
                  <div className="text-4xl mb-3">1️⃣</div>
                  <h4 className="text-xl font-bold text-green-300 mb-2">Look Around</h4>
                  <p className="text-green-100">You're dropped somewhere in the world. Explore the street view!</p>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-6 border border-blue-400">
                  <div className="text-4xl mb-3">2️⃣</div>
                  <h4 className="text-xl font-bold text-blue-300 mb-2">Find Clues</h4>
                  <p className="text-blue-100">Look for signs, landmarks, language, and geography clues</p>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-6 border border-purple-400">
                  <div className="text-4xl mb-3">3️⃣</div>
                  <h4 className="text-xl font-bold text-purple-300 mb-2">Make a Guess</h4>
                  <p className="text-purple-100">Pin your location on the map and see how close you were!</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-8 border border-orange-400/30">
                <h3 className="text-3xl font-bold text-orange-300 mb-6">🎮 Ready to Play?</h3>
                <a 
                  href="https://www.geoguessr.com/join/4G4GO?s=Url" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition-all transform hover:scale-105 text-xl"
                >
                  <span className="text-3xl mr-3">🌎</span>
                  Join the Game
                  <span className="ml-2">→</span>
                </a>
                <p className="text-white/70 text-sm mt-4">
                  Click to join the party!
                </p>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400">
              <div className="text-center">
                <div className="text-4xl mb-3">💡</div>
                <h4 className="text-xl font-bold text-yellow-300 mb-2">Tip</h4>
                <p className="text-yellow-100 text-lg">
                  Work together! Discuss what you see and make guesses as a team.
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-teal-600'
    },

    // Slide 3: What We're Building
    {
      id: 'what-building',
      title: 'What We\'re Building',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <h2 className="text-5xl font-extrabold mb-4">What We're Building</h2>
            <div className="text-8xl mb-8 animate-float">🏗️</div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 mb-8">
              <h3 className="text-3xl font-bold mb-6 text-center text-blue-300">A Simple Chat API</h3>
              <p className="text-xl text-center text-white/90 mb-6">
                Create a REST API backend that lets users register and send messages to each other!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-500/20 rounded-xl p-8 border border-green-400">
                <div className="text-5xl mb-4">👤</div>
                <h4 className="text-2xl font-bold text-green-300 mb-3">Register Users</h4>
                <p className="text-green-100">POST /users endpoint to create new users</p>
              </div>

              <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400">
                <div className="text-5xl mb-4">📤</div>
                <h4 className="text-2xl font-bold text-blue-300 mb-3">Send Messages</h4>
                <p className="text-blue-100">POST /messages endpoint to send chat messages</p>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-8 border border-purple-400">
                <div className="text-5xl mb-4">📥</div>
                <h4 className="text-2xl font-bold text-purple-300 mb-3">Get Messages</h4>
                <p className="text-purple-100">GET /messages endpoint to retrieve chat history</p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-blue-600'
    },

    // Slide 3: Pair Programming
    {
      id: 'pair-programming',
      title: 'Pair Programming',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <h2 className="text-5xl font-extrabold mb-4">Pair Programming</h2>
            <div className="text-8xl mb-8 animate-float">👥</div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-500/20 rounded-xl p-8 border-2 border-blue-400">
                <div className="text-6xl mb-4 text-center">🎮</div>
                <h3 className="text-3xl font-bold text-blue-300 mb-4 text-center">Driver</h3>
                <ul className="space-y-3 text-lg text-blue-100">
                  <li>✅ Types the code</li>
                  <li>✅ Focuses on syntax</li>
                  <li>✅ Implements ideas</li>
                  <li>✅ Asks for guidance</li>
                </ul>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-8 border-2 border-purple-400">
                <div className="text-6xl mb-4 text-center">🧭</div>
                <h3 className="text-3xl font-bold text-purple-300 mb-4 text-center">Navigator</h3>
                <ul className="space-y-3 text-lg text-purple-100">
                  <li>✅ Reviews the code</li>
                  <li>✅ Suggests approaches</li>
                  <li>✅ Catches errors</li>
                  <li>✅ Thinks ahead</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400">
              <div className="text-center">
                <div className="text-4xl mb-3">🔄</div>
                <h4 className="text-2xl font-bold text-yellow-300 mb-3">Switch Roles Every 15-20 Minutes!</h4>
                <p className="text-yellow-100 text-lg">Both partners should experience driving and navigating</p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-purple-600'
    },

    // Slide 4: Setup
    {
      id: 'setup',
      title: 'Setup',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <h2 className="text-5xl font-extrabold mb-4">Getting Started</h2>
            <div className="text-8xl mb-8 animate-float">⚙️</div>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400 mb-8">
              <div className="text-center">
                <div className="text-4xl mb-3">⚠️</div>
                <h4 className="text-2xl font-bold text-yellow-300 mb-3">Prerequisites</h4>
                <p className="text-yellow-100 text-lg mb-4">Make sure you have Node.js installed!</p>
                <a 
                  href="https://nodejs.org/en/download"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-bold transition-all transform hover:scale-105"
                >
                  📥 Download Node.js →
                </a>
                <p className="text-yellow-200 text-sm mt-3">Get the LTS (Long Term Support) version</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold mb-6 text-center text-green-300">Setup Steps</h3>
              
              <div className="space-y-6">
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="text-3xl">1️⃣</div>
                    <h4 className="text-xl font-bold text-blue-300">Clone the Repository</h4>
                  </div>
                  <CodeBlock 
                    code={`git clone https://github.com/tgondil/cs390-chat.git\ncd cs390-chat`}
                    language="bash"
                  />
                </div>

                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="text-3xl">2️⃣</div>
                    <h4 className="text-xl font-bold text-blue-300">Install Dependencies</h4>
                  </div>
                  <CodeBlock 
                    code={`npm install`}
                    language="bash"
                  />
                </div>

                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="text-3xl">3️⃣</div>
                    <h4 className="text-xl font-bold text-blue-300">Start the Server</h4>
                  </div>
                  <CodeBlock 
                    code={`npm start`}
                    language="bash"
                  />
                  <p className="text-gray-400 mt-3">
                    ⚡ This runs <span className="text-blue-300 font-mono">node server.js</span> and starts your server on <span className="text-blue-300">http://localhost:3000</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-emerald-600 to-teal-600'
    },

    // Slide 5: Task 1 - POST /users
    {
      id: 'task-post-users',
      title: 'Task 1: Register Users',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <h2 className="text-5xl font-extrabold mb-4">Task 1: Register Users</h2>
            <div className="text-7xl mb-6 animate-float">👤</div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400 mb-8">
              <h3 className="text-3xl font-bold text-green-300 mb-4">POST /users</h3>
              <p className="text-xl text-green-100 mb-6">Create an endpoint that registers new users</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <h4 className="text-xl font-bold text-green-300 mb-4">📨 Request Body</h4>
                  <CodeBlock 
                    code={`{\n  "name": "Alice"\n}`}
                    language="json"
                  />
                </div>

                <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <h4 className="text-xl font-bold text-green-300 mb-4">✅ Response</h4>
                  <CodeBlock 
                    code={`{\n  "id": 1,\n  "name": "Alice"\n}`}
                    language="json"
                  />
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400">
              <h4 className="text-2xl font-bold text-yellow-300 mb-4">💡 Implementation Tips</h4>
              <ul className="space-y-2 text-lg text-yellow-100">
                <li>• Store users in an array</li>
                <li>• Generate unique IDs for each user</li>
                <li>• Validate that name is provided</li>
                <li>• Return the created user with their ID</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-emerald-600'
    },

    // Slide 6: Task 2 - POST /messages
    {
      id: 'task-post-messages',
      title: 'Task 2: Send Messages',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <h2 className="text-5xl font-extrabold mb-4">Task 2: Send Messages</h2>
            <div className="text-7xl mb-6 animate-float">📤</div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-blue-500/20 rounded-xl p-8 border-2 border-blue-400 mb-8">
              <h3 className="text-3xl font-bold text-blue-300 mb-4">POST /messages</h3>
              <p className="text-xl text-blue-100 mb-6">Create an endpoint that sends chat messages</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <h4 className="text-xl font-bold text-blue-300 mb-4">📨 Request Body</h4>
                  <CodeBlock 
                    code={`{\n  "userId": 1,\n  "text": "Hello!"\n}`}
                    language="json"
                  />
                </div>

                <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <h4 className="text-xl font-bold text-blue-300 mb-4">✅ Response</h4>
                  <CodeBlock 
                    code={`{\n  "id": 1,\n  "userId": 1,\n  "userName": "Alice",\n  "text": "Hello!",\n  "timestamp": "2025-01-07T..."\n}`}
                    language="json"
                  />
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400">
              <h4 className="text-2xl font-bold text-yellow-300 mb-4">💡 Implementation Tips</h4>
              <ul className="space-y-2 text-lg text-yellow-100">
                <li>• Store messages in an array</li>
                <li>• Look up the user's name from the userId</li>
                <li>• Add a timestamp to each message</li>
                <li>• Validate userId and text are provided</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-cyan-600'
    },

    // Slide 7: Task 3 - GET /messages
    {
      id: 'task-get-messages',
      title: 'Task 3: Get Messages',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <h2 className="text-5xl font-extrabold mb-4">Task 3: Get Messages</h2>
            <div className="text-7xl mb-6 animate-float">📥</div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-purple-500/20 rounded-xl p-8 border-2 border-purple-400 mb-8">
              <h3 className="text-3xl font-bold text-purple-300 mb-4">GET /messages</h3>
              <p className="text-xl text-purple-100 mb-6">Create an endpoint that retrieves all chat messages</p>
              
              <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                <h4 className="text-xl font-bold text-purple-300 mb-4">✅ Response</h4>
                <CodeBlock 
                  code={`[\n  {\n    "id": 1,\n    "userId": 1,\n    "userName": "Alice",\n    "text": "Hello!",\n    "timestamp": "2025-01-07T..."\n  },\n  {\n    "id": 2,\n    "userId": 2,\n    "userName": "Bob",\n    "text": "Hi Alice!",\n    "timestamp": "2025-01-07T..."\n  }\n]`}
                  language="json"
                />
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400">
              <h4 className="text-2xl font-bold text-yellow-300 mb-4">💡 Implementation Tips</h4>
              <ul className="space-y-2 text-lg text-yellow-100">
                <li>• Return all messages in the messages array</li>
                <li>• Messages should be in chronological order</li>
                <li>• Include all message details (id, userId, userName, text, timestamp)</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-pink-600'
    },

    // Slide 8: Testing - Same Computer
    {
      id: 'testing-same-computer',
      title: 'Testing: Same Computer',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <h2 className="text-5xl font-extrabold mb-4">Testing: Same Computer</h2>
            <div className="text-7xl mb-6 animate-float">💻</div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400 mb-8">
              <h3 className="text-3xl font-bold text-green-300 mb-6 text-center">Option 1: Browser Testing</h3>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-3xl">1️⃣</span>
                    <h4 className="text-xl font-bold">Open test-api.html</h4>
                  </div>
                  <p className="text-green-100 ml-12">Open the file in multiple browser windows or tabs</p>
                </div>

                <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-3xl">2️⃣</span>
                    <h4 className="text-xl font-bold">Join as Different Users</h4>
                  </div>
                  <p className="text-green-100 ml-12">Register with different names in each window (Alice, Bob, etc.)</p>
                </div>

                <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-3xl">3️⃣</span>
                    <h4 className="text-xl font-bold">Chat Between Windows!</h4>
                  </div>
                  <p className="text-green-100 ml-12">Send messages and see them appear in all windows</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400 text-center">
              <div className="text-4xl mb-3">✨</div>
              <p className="text-xl text-blue-100">This is the easiest way to test if you're working together!</p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-teal-600'
    },

    // Slide 9: Testing - Remote Partners
    {
      id: 'testing-remote',
      title: 'Testing: Remote Partners',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <h2 className="text-5xl font-extrabold mb-4">Testing: Remote Partners</h2>
            <div className="text-7xl mb-6 animate-float">🌐</div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-blue-500/20 rounded-xl p-8 border-2 border-blue-400 mb-8">
              <h3 className="text-3xl font-bold text-blue-300 mb-6 text-center">Option 2: Using ngrok</h3>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-3xl">1️⃣</span>
                    <h4 className="text-xl font-bold">One Partner Runs ngrok</h4>
                  </div>
                  <CodeBlock 
                    code={`npx ngrok http 3000`}
                    language="bash"
                  />
                  <p className="text-blue-100 mt-3">This creates a public URL for your local server</p>
                </div>

                <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-3xl">2️⃣</span>
                    <h4 className="text-xl font-bold">Share the URL</h4>
                  </div>
                  <p className="text-blue-100">Copy the ngrok URL (e.g., https://abc123.ngrok.io) and send it to your partner</p>
                </div>

                <div className="bg-white/10 backdrop-blur rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-3xl">3️⃣</span>
                    <h4 className="text-xl font-bold">Update test-api.html</h4>
                  </div>
                  <p className="text-blue-100">Both partners update the API URL in the HTML file to the ngrok URL</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400 text-center">
              <div className="text-4xl mb-3">⚠️</div>
              <p className="text-xl text-yellow-100">Perfect for testing with a remote partner or from different devices!</p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-indigo-600'
    },

    // Slide 10: Testing - curl
    {
      id: 'testing-curl',
      title: 'Testing: curl Commands',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <h2 className="text-5xl font-extrabold mb-4">Testing: curl Commands</h2>
            <div className="text-7xl mb-6 animate-float">⚡</div>
          </div>
          
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="bg-green-500/20 rounded-xl p-6 border border-green-400">
              <h3 className="text-2xl font-bold text-green-300 mb-4">Register a User</h3>
              <CodeBlock 
                code={`curl -X POST http://localhost:3000/users \\\n  -H "Content-Type: application/json" \\\n  -d '{"name":"Alice"}'`}
                language="bash"
              />
            </div>

            <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400">
              <h3 className="text-2xl font-bold text-blue-300 mb-4">Send a Message</h3>
              <CodeBlock 
                code={`curl -X POST http://localhost:3000/messages \\\n  -H "Content-Type: application/json" \\\n  -d '{"userId":1,"text":"Hello!"}'`}
                language="bash"
              />
            </div>

            <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-400">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">Get All Messages</h3>
              <CodeBlock 
                code={`curl http://localhost:3000/messages`}
                language="bash"
              />
            </div>

            <div className="bg-orange-500/20 rounded-xl p-6 border border-orange-400 text-center">
              <div className="text-4xl mb-3">💡</div>
              <p className="text-xl text-orange-100">Great for quick testing as you build each endpoint!</p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-pink-600'
    },

    // Slide 11: Commenting Out Functions
    {
      id: 'commenting-functions',
      title: 'Commenting Out Functions',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <h2 className="text-5xl font-extrabold mb-4">Commenting Out Functions</h2>
            <div className="text-7xl mb-6 animate-float">💭</div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="bg-blue-500/20 rounded-xl p-8 border-2 border-blue-400 mb-8">
              <h3 className="text-3xl font-bold text-blue-300 mb-6 text-center">Why Comment Out Code?</h3>
              <p className="text-xl text-blue-100 text-center mb-6">
                When building one endpoint at a time, you can temporarily disable (comment out) the other TODOs to focus on one task without errors!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <h4 className="text-2xl font-bold text-green-300 mb-4">Single Line Comment</h4>
                <CodeBlock 
                  code={`// This line is commented out\n// app.post('/users', (req, res) => {\n//   // TODO: implement\n// });\n\nconsole.log('This will run!');`}
                  language="javascript"
                  filename="server.js"
                />
                <p className="text-gray-300 mt-4">Use <span className="font-mono text-green-300">{'//'}</span> at the start of each line</p>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
                <h4 className="text-2xl font-bold text-purple-300 mb-4">Multi-Line Comment</h4>
                <CodeBlock 
                  code={`/*\napp.post('/users', (req, res) => {\n  // TODO: implement\n});\n*/\n\nconsole.log('This will run!');`}
                  language="javascript"
                  filename="server.js"
                />
                <p className="text-gray-300 mt-4">Wrap code with <span className="font-mono text-purple-300">{'/* */'}</span> for multiple lines</p>
              </div>
            </div>

            <div className="mt-8 bg-yellow-500/20 rounded-xl p-6 border border-yellow-400">
              <div className="text-center">
                <div className="text-4xl mb-3">💡</div>
                <h4 className="text-2xl font-bold text-yellow-300 mb-3">Pro Tip</h4>
                <p className="text-yellow-100 text-lg">
                  <strong>VS Code Shortcut:</strong> Select lines and press <span className="font-mono bg-gray-800 px-2 py-1 rounded">Cmd + /</span> (Mac) or <span className="font-mono bg-gray-800 px-2 py-1 rounded">Ctrl + /</span> (Windows) to toggle comments!
                </p>
              </div>
            </div>

            <div className="mt-8 bg-orange-500/20 rounded-xl p-6 border border-orange-400">
              <h4 className="text-2xl font-bold text-orange-300 mb-4 text-center">🎯 Strategy</h4>
              <ol className="space-y-3 text-lg text-orange-100">
                <li><strong>1.</strong> Comment out the endpoints you're NOT working on</li>
                <li><strong>2.</strong> Focus on implementing one endpoint at a time</li>
                <li><strong>3.</strong> Test it thoroughly</li>
                <li><strong>4.</strong> Uncomment the next endpoint and repeat!</li>
              </ol>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-indigo-600'
    },

    // Slide 12: Tips & Best Practices
    {
      id: 'tips-best-practices',
      title: 'Tips & Best Practices',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <h2 className="text-5xl font-extrabold mb-4">Tips & Best Practices</h2>
            <div className="text-7xl mb-6 animate-float">💡</div>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400">
                <div className="text-5xl mb-4">👥</div>
                <h3 className="text-2xl font-bold text-blue-300 mb-4">Communication</h3>
                <ul className="space-y-3 text-blue-100">
                  <li>• Talk through your approach</li>
                  <li>• Ask questions freely</li>
                  <li>• Explain your thinking</li>
                  <li>• Listen to your partner</li>
                </ul>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border border-green-400">
                <div className="text-5xl mb-4">🔄</div>
                <h3 className="text-2xl font-bold text-green-300 mb-4">Switch Roles</h3>
                <ul className="space-y-3 text-green-100">
                  <li>• Set a timer for 15-20 min</li>
                  <li>• Both should drive</li>
                  <li>• Both should navigate</li>
                  <li>• Share the learning!</li>
                </ul>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-8 border border-purple-400">
                <div className="text-5xl mb-4">🧪</div>
                <h3 className="text-2xl font-bold text-purple-300 mb-4">Test Often</h3>
                <ul className="space-y-3 text-purple-100">
                  <li>• Test after each endpoint</li>
                  <li>• Use curl for quick checks</li>
                  <li>• Try the browser interface</li>
                  <li>• Check error cases</li>
                </ul>
              </div>

              <div className="bg-orange-500/20 rounded-xl p-8 border border-orange-400">
                <div className="text-5xl mb-4">🐛</div>
                <h3 className="text-2xl font-bold text-orange-300 mb-4">Debug Together</h3>
                <ul className="space-y-3 text-orange-100">
                  <li>• Read errors carefully</li>
                  <li>• Use console.log()</li>
                  <li>• Check the network tab</li>
                  <li>• Ask for help if stuck!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-orange-600 to-red-600'
    },

    // Slide 13: Resources
    {
      id: 'resources',
      title: 'Resources',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <h2 className="text-5xl font-extrabold mb-4">Resources</h2>
            <div className="text-7xl mb-6 animate-float">📚</div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">🔗</div>
                  <div>
                    <h3 className="text-2xl font-bold text-blue-300 mb-2">GitHub Repository</h3>
                    <a 
                      href="https://github.com/tgondil/cs390-chat" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 underline text-lg"
                    >
                      github.com/tgondil/cs390-chat
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-4xl">📥</div>
                  <div>
                    <h3 className="text-2xl font-bold text-green-300 mb-2">Node.js Download</h3>
                    <a 
                      href="https://nodejs.org/en/download" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 underline text-lg"
                    >
                      nodejs.org/en/download
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="text-4xl">📖</div>
                  <div>
                    <h3 className="text-2xl font-bold text-purple-300 mb-2">Express Documentation</h3>
                    <a 
                      href="https://expressjs.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 underline text-lg"
                    >
                      expressjs.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-600'
    },

    // Slide 14: Good Luck!
    {
      id: 'good-luck',
      title: 'Good Luck!',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <div className="text-center">
            <div className="mx-auto max-w-3xl">
              <div className="text-9xl mb-8 animate-float">🚀</div>
              <h1 className="text-6xl font-extrabold mb-8">Good Luck!</h1>
              
              <div className="bg-white/10 backdrop-blur rounded-xl p-10 border border-white/20 mb-8">
                <p className="text-2xl text-white/90 mb-6">
                  Remember to communicate with your partner and have fun building together!
                </p>
                <ul className="text-white/80 space-y-3 text-left text-lg max-w-xl mx-auto">
                  <li>✨ Talk through your approach</li>
                  <li>🔄 Switch roles every 15-20 minutes</li>
                  <li>🧪 Test each endpoint as you build</li>
                  <li>🙋 Ask for help if you get stuck</li>
                </ul>
              </div>

              <div className="text-3xl font-bold text-white">
                Happy Coding! 💬
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 via-purple-600 to-pink-600'
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
          <div className="max-w-7xl mx-auto w-full">
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

export default PSOChatSlides;

