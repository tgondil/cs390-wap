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
  @keyframes bounce-in {
    0% { transform: scale(0.3); opacity: 0; }
    50% { transform: scale(1.05); }
    70% { transform: scale(0.9); }
    100% { transform: scale(1); opacity: 1; }
  }
  .animate-bounce-in {
    animation: bounce-in 0.6s ease-out;
  }
`;

const PsoLoginSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title Slide
    {
      id: 'title-slide',
      title: 'Secure Login PSO',
      content: (
        <div className="text-center space-y-12">
          <style>{customStyles}</style>
          <div className="space-y-8">
            <h1 className="text-6xl font-bold text-white mb-6">
              🔐 Secure Login PSO
            </h1>
            <h2 className="text-4xl font-semibold text-blue-100 mb-4">
              Pair Programming Session
            </h2>
            <div className="text-2xl text-blue-200">
              Building Authentication with bcrypt & MongoDB
            </div>
          </div>
          
          <div className="mt-16">
            <div className="text-2xl font-medium text-white">
              Tanay Gondil
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-700'
    },

    // Slide 2: Overview
    {
      id: 'overview',
      title: 'What We\'ll Build Today',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🎯 Today's Goal</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-center text-8xl mb-8 animate-float">🔒</div>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-500/30 to-blue-600/30 backdrop-blur-md rounded-2xl p-8 border-2 border-blue-400/50">
                <div className="text-5xl mb-4">🔑</div>
                <h3 className="text-2xl font-bold mb-4">bcrypt</h3>
                <p className="text-lg text-blue-100">
                  Hash passwords securely before storing them
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-500/30 to-green-600/30 backdrop-blur-md rounded-2xl p-8 border-2 border-green-400/50">
                <div className="text-5xl mb-4">🗄️</div>
                <h3 className="text-2xl font-bold mb-4">MongoDB</h3>
                <p className="text-lg text-green-100">
                  Store user credentials in the cloud with Atlas
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-500/30 to-purple-600/30 backdrop-blur-md rounded-2xl p-8 border-2 border-purple-400/50">
                <div className="text-5xl mb-4">🌐</div>
                <h3 className="text-2xl font-bold mb-4">CORS</h3>
                <p className="text-lg text-purple-100">
                  Enable cross-origin requests for testing
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/30 mt-8">
              <h3 className="text-3xl font-bold mb-4 text-center">✨ By The End</h3>
              <p className="text-xl text-center">
                You'll have a fully functional signup & login API with secure password storage!
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-cyan-700'
    },

    // Slide 3: Resources
    {
      id: 'resources',
      title: 'Important Resources',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">📚 Resources</h2>
          
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-purple-400/50">
              <div className="flex items-center gap-6">
                <div className="text-6xl">🐙</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">GitHub Repository</h3>
                  <p className="text-lg text-purple-200 mb-3">Get the starter code and files</p>
                  <a 
                    href="https://github.com/tgondil/pso-login" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-blue-200 underline font-mono text-lg"
                  >
                    github.com/tgondil/pso-login
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-green-400/50">
              <div className="flex items-center gap-6">
                <div className="text-6xl">🍃</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">MongoDB Atlas Connection Guide</h3>
                  <p className="text-lg text-green-200 mb-3">Step-by-step guide to connect to MongoDB Atlas</p>
                  <a 
                    href="https://medium.com/@sergio13prez/connecting-to-mongodb-atlas-d1381f184369" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-blue-200 underline text-lg break-all"
                  >
                    medium.com/@sergio13prez/connecting-to-mongodb-atlas-d1381f184369
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-orange-400/50">
              <div className="flex items-center gap-6">
                <div className="text-6xl">👤</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">MongoDB Database Users Documentation</h3>
                  <p className="text-lg text-orange-200 mb-3">How to create and manage database users</p>
                  <a 
                    href="https://www.mongodb.com/docs/atlas/security-add-mongodb-users/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-300 hover:text-blue-200 underline text-lg break-all"
                  >
                    mongodb.com/docs/atlas/security-add-mongodb-users/
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-violet-600 to-purple-700'
    },

    // Slide 4: Files You Get
    {
      id: 'files',
      title: 'What Files You Get',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">📁 Your Files</h2>
          
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-blue-400/50">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📝</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">server-starter.js</h3>
                  <p className="text-lg text-blue-200">
                    Main assignment file with TODOs - this is where you'll write your code
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-green-400/50">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🧪</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">test-connection.js</h3>
                  <p className="text-lg text-green-200">
                    Test your MongoDB connection before starting
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-purple-400/50">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🌐</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">test.html</h3>
                  <p className="text-lg text-purple-200">
                    Browser-based API tester with forms for signup/login
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-orange-400/50">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📦</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">package.json</h3>
                  <p className="text-lg text-orange-200">
                    All your dependencies (express, mongoose, bcrypt, cors)
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500/20 to-rose-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-red-400/50">
              <div className="flex items-start gap-4">
                <div className="text-4xl">⚙️</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">.env.example</h3>
                  <p className="text-lg text-red-200">
                    Template for your environment variables (MongoDB connection string)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-cyan-600 to-blue-700'
    },

    // Slide 5: Setup Part 1 - Install
    {
      id: 'setup-install',
      title: 'Setup Part 1: Install Dependencies',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">📦 Step 1: Install</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gradient-to-br from-blue-500/30 to-purple-600/30 backdrop-blur-md rounded-2xl p-8 border-2 border-blue-400/50">
              <h3 className="text-3xl font-bold mb-6 text-center">First Things First</h3>
              <p className="text-xl text-center mb-8">
                Clone the repo and install all dependencies
              </p>
              
              <div className="bg-gray-900/80 rounded-xl p-6 font-mono border-2 border-blue-400/50">
                <div className="text-green-400 mb-2"># Clone the repository</div>
                <div className="text-white mb-6">git clone https://github.com/tgondil/pso-login.git</div>
                
                <div className="text-green-400 mb-2"># Navigate to directory</div>
                <div className="text-white mb-6">cd pso-login</div>
                
                <div className="text-green-400 mb-2"># Install dependencies</div>
                <div className="text-white">npm install</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border-2 border-white/30">
              <h4 className="text-2xl font-bold mb-4">📚 What Gets Installed:</h4>
              <div className="grid grid-cols-2 gap-4 text-lg">
                <div className="bg-blue-500/20 rounded-lg p-4">
                  <span className="font-bold">express</span> - Web server
                </div>
                <div className="bg-green-500/20 rounded-lg p-4">
                  <span className="font-bold">mongoose</span> - MongoDB ODM
                </div>
                <div className="bg-purple-500/20 rounded-lg p-4">
                  <span className="font-bold">bcrypt</span> - Password hashing
                </div>
                <div className="bg-orange-500/20 rounded-lg p-4">
                  <span className="font-bold">cors</span> - Cross-origin requests
                </div>
                <div className="bg-red-500/20 rounded-lg p-4">
                  <span className="font-bold">dotenv</span> - Environment variables
                </div>
                <div className="bg-cyan-500/20 rounded-lg p-4">
                  <span className="font-bold">nodemon</span> - Auto-restart server
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-700'
    },

    // Slide 6: Setup Part 2 - MongoDB Atlas
    {
      id: 'setup-mongodb',
      title: 'Setup Part 2: MongoDB Atlas',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🍃 Step 2: MongoDB Atlas</h2>
          
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border-2 border-white/30 text-center">
              <p className="text-2xl font-bold text-yellow-300 mb-2">⚠️ This is Required!</p>
              <p className="text-lg">You need MongoDB Atlas to store user data in the cloud</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-md rounded-xl p-6 border-2 border-blue-400/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">1️⃣</div>
                  <h3 className="text-2xl font-bold">Create Account</h3>
                </div>
                <p className="text-lg text-blue-200 mb-3">
                  Go to mongodb.com/cloud/atlas and sign up for free
                </p>
                <div className="bg-blue-600/30 rounded-lg p-3 text-sm">
                  💡 Use your school email or personal email
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-md rounded-xl p-6 border-2 border-green-400/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">2️⃣</div>
                  <h3 className="text-2xl font-bold">Create Cluster</h3>
                </div>
                <p className="text-lg text-green-200 mb-3">
                  Click "Build a Database" → Choose "M0 FREE" tier
                </p>
                <div className="bg-green-600/30 rounded-lg p-3 text-sm">
                  💡 Select any cloud provider and region
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-md rounded-xl p-6 border-2 border-purple-400/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">3️⃣</div>
                  <h3 className="text-2xl font-bold">Create User</h3>
                </div>
                <p className="text-lg text-purple-200 mb-3">
                  Database Access → Add User → Set username & password
                </p>
                <div className="bg-purple-600/30 rounded-lg p-3 text-sm">
                  💡 Save your password! You'll need it later
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-md rounded-xl p-6 border-2 border-orange-400/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">4️⃣</div>
                  <h3 className="text-2xl font-bold">Whitelist IP</h3>
                </div>
                <p className="text-lg text-orange-200 mb-3">
                  Network Access → Add IP → "Allow Access from Anywhere"
                </p>
                <div className="bg-orange-600/30 rounded-lg p-3 text-sm">
                  💡 This is for development only!
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-teal-700'
    },

    // Slide 7: Get Connection String
    {
      id: 'connection-string',
      title: 'Get Your Connection String',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🔗 Connection String</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-blue-400/50">
              <h3 className="text-3xl font-bold mb-6 text-center">Getting Your Connection String</h3>
              
              <div className="space-y-4 text-lg">
                <div className="bg-white/10 rounded-lg p-4 flex items-center gap-4">
                  <div className="text-3xl">1️⃣</div>
                  <p>Go to "Database" tab → Click "Connect" on your cluster</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4 flex items-center gap-4">
                  <div className="text-3xl">2️⃣</div>
                  <p>Choose "Connect your application"</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4 flex items-center gap-4">
                  <div className="text-3xl">3️⃣</div>
                  <p>Copy the connection string (it looks like this):</p>
                </div>
              </div>

              <div className="bg-gray-900/80 rounded-xl p-6 font-mono text-sm mt-6 border-2 border-blue-400/50">
                <div className="text-gray-400 mb-2">mongodb+srv://username:&lt;password&gt;@cluster0.xxxxx.mongodb.net/?retryWrites=true</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-yellow-400/50">
              <h3 className="text-3xl font-bold mb-6 text-center">⚠️ Important Changes</h3>
              
              <div className="space-y-4 text-lg">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="font-bold mb-2">1. Replace <code className="bg-red-500/30 px-2 py-1 rounded">&lt;password&gt;</code> with your actual password</p>
                  <p className="text-sm text-yellow-200">Don't include the angle brackets!</p>
                </div>
                
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="font-bold mb-2">2. Add <code className="bg-green-500/30 px-2 py-1 rounded">/secure-login</code> before the <code className="bg-blue-500/30 px-2 py-1 rounded">?</code></p>
                  <p className="text-sm text-yellow-200">This creates a database named "secure-login"</p>
                </div>
              </div>

              <div className="bg-gray-900/80 rounded-xl p-6 font-mono text-sm mt-6 border-2 border-green-400/50">
                <div className="text-green-400 mb-2"># ✅ Final format:</div>
                <div className="text-white break-all">mongodb+srv://user:mypass123@cluster0.xxxxx.mongodb.net/secure-login?retryWrites=true</div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-cyan-600 to-blue-700'
    },

    // Slide 8: Setup Part 3 - .env File
    {
      id: 'setup-env',
      title: 'Setup Part 3: Environment Variables',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">⚙️ Step 3: .env File</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-purple-400/50">
              <h3 className="text-3xl font-bold mb-6 text-center">Create Your .env File</h3>
              
              <div className="space-y-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <p className="text-xl mb-4">You have <code className="bg-blue-500/30 px-2 py-1 rounded">.env.example</code> as a template</p>
                  <p className="text-lg text-purple-200">Create a new file called <code className="bg-green-500/30 px-2 py-1 rounded">.env</code> (without .example)</p>
                </div>

                <div className="bg-gray-900/80 rounded-xl p-6 font-mono border-2 border-purple-400/50">
                  <div className="text-green-400 mb-4"># Your .env file should look like this:</div>
                  <div className="space-y-2">
                    <div className="text-white">MONGO_URI=mongodb+srv://user:pass@cluster0.xxxxx.mongodb.net/secure-login?retryWrites=true</div>
                    <div className="text-white">PORT=3000</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-green-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-green-400/50">
                <div className="text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h4 className="text-2xl font-bold mb-3">DO</h4>
                  <ul className="text-left space-y-2 text-lg">
                    <li>✓ Use your real MongoDB URI</li>
                    <li>✓ Keep .env in .gitignore</li>
                    <li>✓ Use port 3000</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-red-400/50">
                <div className="text-center">
                  <div className="text-5xl mb-4">❌</div>
                  <h4 className="text-2xl font-bold mb-3">DON'T</h4>
                  <ul className="text-left space-y-2 text-lg">
                    <li>✗ Commit .env to Git</li>
                    <li>✗ Share your password</li>
                    <li>✗ Leave &lt;password&gt; unchanged</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-violet-600 to-purple-700'
    },

    // Slide 9: Test Connection
    {
      id: 'test-connection',
      title: 'Test Your Connection',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🧪 Test Connection</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-blue-400/50">
              <h3 className="text-3xl font-bold mb-6 text-center">Before You Start Coding</h3>
              <p className="text-xl text-center mb-6">
                Make sure your MongoDB connection works!
              </p>
              
              <div className="bg-gray-900/80 rounded-xl p-6 font-mono text-2xl border-2 border-blue-400/50 text-center">
                <div className="text-white">npm test</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-md rounded-2xl p-8 border-2 border-green-400/50">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 animate-bounce-in">✅</div>
                  <h4 className="text-3xl font-bold text-green-300">Success!</h4>
                </div>
                <div className="bg-gray-900/80 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400">✓ Connected to MongoDB successfully</div>
                  <div className="text-green-400">✓ Connection test passed</div>
                </div>
                <p className="text-lg mt-4 text-center text-green-200">
                  You're ready to start the assignment!
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-500/20 to-rose-600/20 backdrop-blur-md rounded-2xl p-8 border-2 border-red-400/50">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">❌</div>
                  <h4 className="text-3xl font-bold text-red-300">Error?</h4>
                </div>
                <div className="bg-gray-900/80 rounded-lg p-4 font-mono text-sm">
                  <div className="text-red-400">✗ Connection failed</div>
                  <div className="text-red-400">✗ MongoServerError</div>
                </div>
                <div className="mt-4 space-y-2 text-sm">
                  <p>🔍 Check your .env file</p>
                  <p>🔍 Verify password is correct</p>
                  <p>🔍 Make sure IP is whitelisted</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-blue-700'
    },

    // Slide 10: Assignment Overview
    {
      id: 'assignment-overview',
      title: 'Assignment Tasks',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">📋 What You'll Code</h2>
          
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="text-center text-7xl mb-8 animate-float">👨‍💻</div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500/30 to-blue-600/30 backdrop-blur-md rounded-xl p-6 border-2 border-blue-400/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">1️⃣</div>
                  <h3 className="text-2xl font-bold">Setup Express</h3>
                </div>
                <ul className="space-y-2 text-lg text-blue-200">
                  <li>• Require dotenv, express, cors, mongoose</li>
                  <li>• Create Express app</li>
                  <li>• Add middleware (cors, json)</li>
                  <li>• Connect to MongoDB</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-500/30 to-green-600/30 backdrop-blur-md rounded-xl p-6 border-2 border-green-400/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">2️⃣</div>
                  <h3 className="text-2xl font-bold">Define User Schema</h3>
                </div>
                <ul className="space-y-2 text-lg text-green-200">
                  <li>• Create Mongoose schema</li>
                  <li>• Add username field (String, required)</li>
                  <li>• Add password field (String, required)</li>
                  <li>• Export User model</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500/30 to-purple-600/30 backdrop-blur-md rounded-xl p-6 border-2 border-purple-400/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">3️⃣</div>
                  <h3 className="text-2xl font-bold">Build /signup Route</h3>
                </div>
                <ul className="space-y-2 text-lg text-purple-200">
                  <li>• Validate username & password exist</li>
                  <li>• Check for duplicate usernames</li>
                  <li>• Hash password with bcrypt</li>
                  <li>• Save user to database</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-500/30 to-orange-600/30 backdrop-blur-md rounded-xl p-6 border-2 border-orange-400/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">4️⃣</div>
                  <h3 className="text-2xl font-bold">Build /login Route</h3>
                </div>
                <ul className="space-y-2 text-lg text-orange-200">
                  <li>• Find user by username</li>
                  <li>• Return error if not found</li>
                  <li>• Compare password with bcrypt.compare()</li>
                  <li>• Return success or error</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border-2 border-white/30 text-center">
              <p className="text-2xl font-bold">
                All TODOs are marked in <code className="bg-blue-500/30 px-3 py-1 rounded">server-starter.js</code>
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-purple-700'
    },

    // Slide 11: Password Hashing - The Right Way
    {
      id: 'password-hashing',
      title: 'Password Hashing',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🔐 Password Hashing</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border-2 border-white/30 text-center">
              <p className="text-2xl font-bold text-yellow-300 mb-2">⚠️ NEVER Store Plain Text Passwords!</p>
              <p className="text-lg">If your database gets hacked, all user passwords are compromised</p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-500/30 to-rose-600/30 backdrop-blur-md rounded-2xl p-8 border-2 border-red-400/50">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">❌</div>
                  <h3 className="text-3xl font-bold text-red-300">WRONG</h3>
                </div>
                
                <div className="bg-gray-900/80 rounded-lg p-6 font-mono text-sm">
                  <div className="text-red-400 mb-2">{'// ❌ NEVER DO THIS'}</div>
                  <div className="text-white mb-4">{'const user = new User({'}</div>
                  <div className="text-white ml-4 mb-1">  username: "alice",</div>
                  <div className="text-white ml-4 mb-4">  password: "hello123"</div>
                  <div className="text-white">{'});'}</div>
                </div>

                <div className="bg-red-600/30 rounded-lg p-4 mt-6">
                  <p className="font-bold mb-2">Why is this bad?</p>
                  <ul className="text-sm space-y-1">
                    <li>• Password stored as plain text</li>
                    <li>• Anyone with DB access sees it</li>
                    <li>• Massive security risk!</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500/30 to-emerald-600/30 backdrop-blur-md rounded-2xl p-8 border-2 border-green-400/50">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 animate-bounce-in">✅</div>
                  <h3 className="text-3xl font-bold text-green-300">CORRECT</h3>
                </div>
                
                <div className="bg-gray-900/80 rounded-lg p-6 font-mono text-sm">
                  <div className="text-green-400 mb-2">{'// ✅ ALWAYS HASH FIRST'}</div>
                  <div className="text-white mb-4">const hashedPass = await bcrypt.hash(</div>
                  <div className="text-white ml-4 mb-1">  "hello123",</div>
                  <div className="text-white ml-4 mb-4">{'  10  // salt rounds'}</div>
                  <div className="text-white mb-4">);</div>
                  <div className="text-white mb-4">{'const user = new User({'}</div>
                  <div className="text-white ml-4 mb-1">  username: "alice",</div>
                  <div className="text-white ml-4 mb-4">  password: hashedPass</div>
                  <div className="text-white">{'});'}</div>
                </div>

                <div className="bg-green-600/30 rounded-lg p-4 mt-6">
                  <p className="font-bold mb-2">Why is this good?</p>
                  <ul className="text-sm space-y-1">
                    <li>• Password is hashed (one-way)</li>
                    <li>• Can't be reversed to original</li>
                    <li>• Safe even if DB is leaked!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-600 to-pink-700'
    },

    // Slide 12: What bcrypt.hash() Does
    {
      id: 'bcrypt-hash',
      title: 'What bcrypt.hash() Does',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🔑 How bcrypt.hash() Works</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-blue-400/50">
              <h3 className="text-3xl font-bold mb-6 text-center">The Transformation</h3>
              
              <div className="space-y-6">
                <div className="bg-white/10 rounded-xl p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-lg font-bold mb-2">Plain Text Password</p>
                      <div className="bg-gray-900/80 rounded p-4 font-mono text-xl text-red-300">
                        "hello123"
                      </div>
                    </div>
                    
                    <div className="text-5xl">→</div>
                    
                    <div className="flex-1">
                      <p className="text-lg font-bold mb-2">Hashed Password</p>
                      <div className="bg-gray-900/80 rounded p-4 font-mono text-xs text-green-300 break-all">
                        $2b$10$N9qo8uLOickgx2ZMRZoMye
                        IjefYRZ1cqN3BIlTFz2jWxKTbIwHbgu
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/80 rounded-xl p-6 font-mono text-sm border-2 border-purple-400/50">
                  <div className="text-purple-400 mb-2">{'// Example usage in your code:'}</div>
                  <div className="text-white mb-2">const password = "hello123";</div>
                  <div className="text-white mb-2">const saltRounds = 10;</div>
                  <div className="text-white mb-4">const hashedPassword = await bcrypt.hash(password, saltRounds);</div>
                  <div className="text-green-400">{'// hashedPassword is what you save to DB!'}</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-blue-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-blue-400/50 text-center">
                <div className="text-4xl mb-3">🔒</div>
                <h4 className="text-xl font-bold mb-2">One-Way</h4>
                <p className="text-sm">Can't reverse the hash back to the original password</p>
              </div>

              <div className="bg-green-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-green-400/50 text-center">
                <div className="text-4xl mb-3">🎲</div>
                <h4 className="text-xl font-bold mb-2">Unique</h4>
                <p className="text-sm">Same password hashed twice gives different results</p>
              </div>

              <div className="bg-purple-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-purple-400/50 text-center">
                <div className="text-4xl mb-3">⏱️</div>
                <h4 className="text-xl font-bold mb-2">Slow</h4>
                <p className="text-sm">Takes time to compute (makes brute force attacks hard)</p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-indigo-700'
    },

    // Slide 13: Password Verification
    {
      id: 'password-verification',
      title: 'Verifying Passwords',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">✅ Verifying Passwords</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border-2 border-white/30 text-center">
              <p className="text-2xl font-bold text-yellow-300 mb-2">⚠️ You Can't Compare Hashes Directly!</p>
              <p className="text-lg">Use <code className="bg-blue-500/30 px-2 py-1 rounded">bcrypt.compare()</code> instead</p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-red-500/30 to-rose-600/30 backdrop-blur-md rounded-2xl p-8 border-2 border-red-400/50">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">❌</div>
                  <h3 className="text-3xl font-bold text-red-300">WRONG</h3>
                </div>
                
                <div className="bg-gray-900/80 rounded-lg p-6 font-mono text-sm">
                  <div className="text-red-400 mb-2">{'// ❌ THIS WILL NEVER WORK'}</div>
                  <div className="text-white mb-4">{'if (password === user.password) {'}</div>
                  <div className="text-white ml-4 mb-4">{'  return { success: true };'}</div>
                  <div className="text-white">{'}'}</div>
                </div>

                <div className="bg-red-600/30 rounded-lg p-4 mt-6">
                  <p className="font-bold mb-2">Why doesn't this work?</p>
                  <ul className="text-sm space-y-1">
                    <li>• "hello123" !== "$2b$10$N9qo8..."</li>
                    <li>• Comparing plain text to hash</li>
                    <li>• Will always be false!</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500/30 to-emerald-600/30 backdrop-blur-md rounded-2xl p-8 border-2 border-green-400/50">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 animate-bounce-in">✅</div>
                  <h3 className="text-3xl font-bold text-green-300">CORRECT</h3>
                </div>
                
                <div className="bg-gray-900/80 rounded-lg p-6 font-mono text-sm">
                  <div className="text-green-400 mb-2">{'// ✅ USE bcrypt.compare()'}</div>
                  <div className="text-white mb-4">const isValid = await bcrypt.compare(</div>
                  <div className="text-white ml-4 mb-1">{'  password,        // plain text'}</div>
                  <div className="text-white ml-4 mb-4">{'  user.password    // hashed'}</div>
                  <div className="text-white mb-4">);</div>
                  <div className="text-white mb-4">{'if (isValid) {'}</div>
                  <div className="text-white ml-4 mb-4">{'  return { success: true };'}</div>
                  <div className="text-white">{'}'}</div>
                </div>

                <div className="bg-green-600/30 rounded-lg p-4 mt-6">
                  <p className="font-bold mb-2">How it works:</p>
                  <ul className="text-sm space-y-1">
                    <li>• bcrypt hashes the input password</li>
                    <li>• Compares it to stored hash</li>
                    <li>• Returns true or false</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-orange-600 to-red-700'
    },

    // Slide 14: Testing Your API
    {
      id: 'testing',
      title: 'Testing Your API',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🧪 Testing Methods</h2>
          
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-purple-400/50">
              <h3 className="text-3xl font-bold mb-4 text-center">Option 1: Browser (Recommended) 🌐</h3>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-xl mb-2">1. Start your server: <code className="bg-blue-500/30 px-2 py-1 rounded">npm start</code></p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-xl mb-2">2. Open <code className="bg-green-500/30 px-2 py-1 rounded">test.html</code> in your browser</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-xl mb-2">3. Open DevTools (F12 or Cmd+Option+I)</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-xl mb-2">4. Use the forms to test signup/login</p>
                </div>
              </div>
              <div className="bg-purple-600/30 rounded-lg p-4 mt-4">
                <p className="font-bold mb-2">✨ Why Browser?</p>
                <p className="text-lg">• Visual interface • See requests in Network tab • Easy debugging</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 backdrop-blur-md rounded-xl p-6 border-2 border-blue-400/50">
                <h4 className="text-2xl font-bold mb-4 text-center">Network Tab 📊</h4>
                <div className="space-y-3 text-lg">
                  <div className="bg-blue-600/30 rounded p-3">
                    ✓ See all API requests
                  </div>
                  <div className="bg-blue-600/30 rounded p-3">
                    ✓ View request/response data
                  </div>
                  <div className="bg-blue-600/30 rounded p-3">
                    ✓ Check status codes (200, 400, 500)
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-md rounded-xl p-6 border-2 border-green-400/50">
                <h4 className="text-2xl font-bold mb-4 text-center">Console Tab 📝</h4>
                <div className="space-y-3 text-lg">
                  <div className="bg-green-600/30 rounded p-3">
                    ✓ See JavaScript errors
                  </div>
                  <div className="bg-green-600/30 rounded p-3">
                    ✓ View console.log() output
                  </div>
                  <div className="bg-green-600/30 rounded p-3">
                    ✓ Debug frontend issues
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-pink-600 to-purple-700'
    },

    // Slide 15: Terminal Testing
    {
      id: 'terminal-testing',
      title: 'Testing with cURL',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">💻 Option 2: Terminal Testing</h2>
          
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-cyan-400/50">
              <h3 className="text-3xl font-bold mb-6 text-center">Test Signup</h3>
              <div className="bg-gray-900/80 rounded-xl p-6 font-mono text-sm border-2 border-cyan-400/50">
                <div className="text-cyan-400 mb-2"># Create a new user</div>
                <div className="text-white mb-2">curl -X POST http://localhost:3000/signup \</div>
                <div className="text-white ml-4 mb-2">-H "Content-Type: application/json" \</div>
                <div className="text-white ml-4">{'-d \'{"username": "test", "password": "test123"}\''}</div>
              </div>
              <div className="bg-cyan-600/30 rounded-lg p-4 mt-4">
                <p className="font-bold mb-2">Expected Response:</p>
                <div className="bg-gray-900/80 rounded p-3 font-mono text-sm text-green-300">
                  {"{ \"success\": true, \"message\": \"User created\" }"}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-green-400/50">
              <h3 className="text-3xl font-bold mb-6 text-center">Test Login</h3>
              <div className="bg-gray-900/80 rounded-xl p-6 font-mono text-sm border-2 border-green-400/50">
                <div className="text-green-400 mb-2"># Login with the user</div>
                <div className="text-white mb-2">curl -X POST http://localhost:3000/login \</div>
                <div className="text-white ml-4 mb-2">-H "Content-Type: application/json" \</div>
                <div className="text-white ml-4">{'-d \'{"username": "test", "password": "test123"}\''}</div>
              </div>
              <div className="bg-green-600/30 rounded-lg p-4 mt-4">
                <p className="font-bold mb-2">Expected Response:</p>
                <div className="bg-gray-900/80 rounded p-3 font-mono text-sm text-green-300">
                  {"{ \"success\": true, \"message\": \"Login successful\" }"}
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-yellow-400/50 text-center">
              <p className="text-xl">
                💡 <span className="font-bold">Pro Tip:</span> Use browser testing first - it's much easier to debug!
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-teal-600 to-cyan-700'
    },

    // Slide 16: Debugging
    {
      id: 'debugging',
      title: 'Debugging Tools',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🔍 Debugging Your Code</h2>
          
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="text-center text-7xl mb-8 animate-float">🐛</div>

            <div className="grid grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-500/30 to-blue-600/30 backdrop-blur-md rounded-xl p-6 border-2 border-blue-400/50">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">🌐</div>
                  <h3 className="text-2xl font-bold">Network Tab</h3>
                </div>
                <ul className="space-y-2 text-lg">
                  <li>• See all API requests</li>
                  <li>• Check status codes</li>
                  <li>• View request payload</li>
                  <li>• View response data</li>
                  <li>• See error messages</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-500/30 to-green-600/30 backdrop-blur-md rounded-xl p-6 border-2 border-green-400/50">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">📝</div>
                  <h3 className="text-2xl font-bold">Console Tab</h3>
                </div>
                <ul className="space-y-2 text-lg">
                  <li>• JavaScript errors</li>
                  <li>• console.log() output</li>
                  <li>• CORS errors</li>
                  <li>• Fetch errors</li>
                  <li>• Frontend bugs</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-500/30 to-purple-600/30 backdrop-blur-md rounded-xl p-6 border-2 border-purple-400/50">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-3">💻</div>
                  <h3 className="text-2xl font-bold">Server Logs</h3>
                </div>
                <ul className="space-y-2 text-lg">
                  <li>• MongoDB connection</li>
                  <li>• Server startup</li>
                  <li>• Backend errors</li>
                  <li>• Database queries</li>
                  <li>• Express errors</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl p-8 border-2 border-yellow-400/50">
              <h3 className="text-3xl font-bold mb-6 text-center">🎯 Debugging Workflow</h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-4xl mb-2">1️⃣</div>
                  <p className="font-bold mb-1">Open DevTools</p>
                  <p className="text-sm text-yellow-200">F12 or Cmd+Opt+I</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-4xl mb-2">2️⃣</div>
                  <p className="font-bold mb-1">Check Network</p>
                  <p className="text-sm text-yellow-200">Status & response</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-4xl mb-2">3️⃣</div>
                  <p className="font-bold mb-1">Check Console</p>
                  <p className="text-sm text-yellow-200">JavaScript errors</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-4xl mb-2">4️⃣</div>
                  <p className="font-bold mb-1">Check Terminal</p>
                  <p className="text-sm text-yellow-200">Server errors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-700'
    },

    // Slide 17: Common Errors
    {
      id: 'common-errors',
      title: 'Common Errors',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">⚠️ Common Errors & Fixes</h2>
          
          <div className="max-w-6xl mx-auto space-y-6">
            <div className="bg-gradient-to-r from-red-500/20 to-rose-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-red-400/50">
              <div className="flex items-start gap-4">
                <div className="text-4xl">❌</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">Connection Error / MongoServerError</h3>
                  <p className="text-lg text-red-200 mb-3">Can't connect to MongoDB Atlas</p>
                  <div className="bg-red-600/30 rounded p-4">
                    <p className="font-bold mb-2">Solutions:</p>
                    <ul className="space-y-1 text-sm">
                      <li>✓ Check .env file has correct connection string</li>
                      <li>✓ Replace &lt;password&gt; with your actual password</li>
                      <li>✓ Make sure IP is whitelisted ("Allow from Anywhere")</li>
                      <li>✓ Run <code className="bg-black/30 px-2 py-1 rounded">npm test</code> to verify connection</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-orange-400/50">
              <div className="flex items-start gap-4">
                <div className="text-4xl">⚠️</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">CORS Error</h3>
                  <p className="text-lg text-orange-200 mb-3">Access blocked by CORS policy</p>
                  <div className="bg-orange-600/30 rounded p-4">
                    <p className="font-bold mb-2">Solutions:</p>
                    <ul className="space-y-1 text-sm">
                      <li>✓ Make sure you have <code className="bg-black/30 px-2 py-1 rounded">app.use(cors())</code> in server</li>
                      <li>✓ Add it BEFORE your routes</li>
                      <li>✓ Restart your server after adding</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-green-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-yellow-400/50">
              <div className="flex items-start gap-4">
                <div className="text-4xl">4️⃣</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">400 Bad Request</h3>
                  <p className="text-lg text-yellow-200 mb-3">Validation error or missing data</p>
                  <div className="bg-yellow-600/30 rounded p-4">
                    <p className="font-bold mb-2">Solutions:</p>
                    <ul className="space-y-1 text-sm">
                      <li>✓ Check Network tab to see what you sent</li>
                      <li>✓ Make sure username and password are provided</li>
                      <li>✓ Check server response for error message</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-blue-400/50">
              <div className="flex items-start gap-4">
                <div className="text-4xl">4️⃣</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">401 Unauthorized</h3>
                  <p className="text-lg text-blue-200 mb-3">Wrong password or user not found</p>
                  <div className="bg-blue-600/30 rounded p-4">
                    <p className="font-bold mb-2">Solutions:</p>
                    <ul className="space-y-1 text-sm">
                      <li>✓ Make sure user exists (signup first)</li>
                      <li>✓ Check password is correct</li>
                      <li>✓ Using bcrypt.compare(), not === ?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-xl p-6 border-2 border-purple-400/50">
              <div className="flex items-start gap-4">
                <div className="text-4xl">5️⃣</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">500 Server Error</h3>
                  <p className="text-lg text-purple-200 mb-3">Something crashed on the server</p>
                  <div className="bg-purple-600/30 rounded p-4">
                    <p className="font-bold mb-2">Solutions:</p>
                    <ul className="space-y-1 text-sm">
                      <li>✓ Check server terminal for error messages</li>
                      <li>✓ Look for missing await keywords</li>
                      <li>✓ Check MongoDB connection is active</li>
                      <li>✓ Make sure schema is defined correctly</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-600 to-orange-700'
    },

    // Slide 18: Grading Checklist
    {
      id: 'grading',
      title: 'Grading Checklist',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">✅ Grading Checklist</h2>
          
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border-2 border-white/30 text-center">
              <p className="text-2xl font-bold text-yellow-300 mb-2">Make sure all of these work!</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-600/20 backdrop-blur-md rounded-xl p-6 border-2 border-blue-400/50">
                <h3 className="text-2xl font-bold mb-4 text-center">Setup ⚙️</h3>
                <div className="space-y-3">
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-6 h-6" />
                      <p className="text-lg">MongoDB Atlas setup and connected</p>
                    </div>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-6 h-6" />
                      <p className="text-lg">User schema defined correctly</p>
                    </div>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-6 h-6" />
                      <p className="text-lg">CORS enabled (test.html works)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-emerald-600/20 backdrop-blur-md rounded-xl p-6 border-2 border-green-400/50">
                <h3 className="text-2xl font-bold mb-4 text-center">Signup Route 📝</h3>
                <div className="space-y-3">
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-6 h-6" />
                      <p className="text-lg">Creates user with hashed password</p>
                    </div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-6 h-6" />
                      <p className="text-lg">Blocks duplicate usernames</p>
                    </div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-6 h-6" />
                      <p className="text-lg">Returns proper error messages</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-600/20 backdrop-blur-md rounded-xl p-6 border-2 border-purple-400/50">
                <h3 className="text-2xl font-bold mb-4 text-center">Login Route 🔑</h3>
                <div className="space-y-3">
                  <div className="bg-purple-600/30 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-6 h-6" />
                      <p className="text-lg">Succeeds with correct password</p>
                    </div>
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-6 h-6" />
                      <p className="text-lg">Fails with wrong password</p>
                    </div>
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-6 h-6" />
                      <p className="text-lg">Uses bcrypt.compare() correctly</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 backdrop-blur-md rounded-xl p-6 border-2 border-orange-400/50">
                <h3 className="text-2xl font-bold mb-4 text-center">Best Practices 🌟</h3>
                <div className="space-y-3">
                  <div className="bg-orange-600/30 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-6 h-6" />
                      <p className="text-lg">Proper error handling</p>
                    </div>
                  </div>
                  <div className="bg-orange-600/30 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-6 h-6" />
                      <p className="text-lg">Clean, readable code</p>
                    </div>
                  </div>
                  <div className="bg-orange-600/30 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <input type="checkbox" className="w-6 h-6" />
                      <p className="text-lg">All TODOs completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-cyan-600 to-blue-700'
    },

    // Slide 19: Thank You
    {
      id: 'thank-you',
      title: 'Thank You',
      content: (
        <div className="text-center space-y-12">
          <style>{customStyles}</style>
          <div className="space-y-8">
            <div className="text-8xl animate-bounce-in">🔐</div>
            <h1 className="text-6xl font-bold text-white mb-6">Thank You!</h1>
            <h2 className="text-3xl font-semibold text-purple-100">
              Secure Login PSO
            </h2>
          </div>
          
          <div className="mt-16 space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-3xl mx-auto">
              <p className="text-2xl text-white mb-4">🎉 Happy Coding!</p>
              <p className="text-xl text-purple-100">
                Build a secure authentication system with bcrypt & MongoDB
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl p-8 max-w-3xl mx-auto border-2 border-blue-400/50">
              <p className="text-2xl text-white mb-4">📧 Questions?</p>
              <p className="text-lg text-blue-100">
                Ask your partner, check the resources, or raise your hand!
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur-md rounded-2xl p-8 max-w-3xl mx-auto border-2 border-green-400/50">
              <p className="text-2xl text-white mb-4">🔗 Resources</p>
              <div className="text-left space-y-2">
                <p className="text-lg text-green-100">
                  📦 <a href="https://github.com/tgondil/pso-login" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">github.com/tgondil/pso-login</a>
                </p>
                <p className="text-lg text-green-100">
                  🍃 <a href="https://medium.com/@sergio13prez/connecting-to-mongodb-atlas-d1381f184369" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">MongoDB Atlas Guide</a>
                </p>
                <p className="text-lg text-green-100">
                  👤 <a href="https://www.mongodb.com/docs/atlas/security-add-mongodb-users/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Database Users Docs</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-700 to-purple-800'
    },
  ];

  // Scroll-based navigation
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
          <div className="flex space-x-2 max-w-md overflow-x-auto">
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

export default PsoLoginSlides;

