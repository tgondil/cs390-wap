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
`;

const Class18Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Title Slide
    {
      id: 'title-slide',
      title: '🚀 Final Capstone Project',
      bgGradient: 'from-blue-600 to-purple-700',
      content: (
        <div className="text-center space-y-12">
          <style>{customStyles}</style>
          <div className="space-y-8">
            <h1 className="text-6xl font-bold text-white mb-6">CS390</h1>
            <h2 className="text-4xl font-semibold text-blue-100 mb-4">
              Web Applications Programming
            </h2>
            <div className="text-2xl text-blue-200">
              November 12, 2025
            </div>
            <div className="text-xl text-blue-300 mt-4">
              🚀 Final Capstone Project: Requirements & Guidelines
            </div>
          </div>
          
          <div className="mt-16">
            <div className="text-2xl font-medium text-white">Tanay Gondil</div>
          </div>
        </div>
      )
    },

    // Overview
    {
      id: 'overview',
      title: '📋 What You\'re Building',
      bgGradient: 'from-purple-600 to-blue-700',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">📋 What You're Building</h2>
          
          <div className="text-center mb-12">
            <div className="text-4xl font-bold leading-relaxed">
              A <span className="text-yellow-300">Full-Stack MERN Application</span>
              <br />
              with a <span className="text-pink-300">"Wow Factor"</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-3">Real Value</h3>
              <p className="text-white/90">Solves an actual problem or creates something useful</p>
          </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-3">Impressive API</h3>
              <p className="text-white/90">Integrates ElevenLabs, OpenAI, or another powerful API</p>
        </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
              <div className="text-5xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold mb-3">Secure & Complete</h3>
              <p className="text-white/90">Full authentication, CRUD, and deployed live</p>
            </div>
          </div>
        </div>
      )
    },

    // The Big Picture
    {
      id: 'big-picture',
      title: '🎨 The Big Picture',
      bgGradient: 'from-indigo-600 to-purple-700',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🎨 The Big Picture</h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="bg-cyan-500/20 backdrop-blur rounded-xl p-6 text-center border-2 border-cyan-400">
              <h3 className="text-3xl font-bold mb-2">⚛️ React Frontend</h3>
              <p className="text-white/90 text-lg">Components, Hooks, State</p>
            </div>
            
            <div className="text-center text-3xl font-bold text-yellow-300">↕️ API Calls (JWT Auth)</div>
            
            <div className="bg-green-500/20 backdrop-blur rounded-xl p-6 text-center border-2 border-green-400">
              <h3 className="text-3xl font-bold mb-2">🟢 Express Backend</h3>
              <p className="text-white/90 text-lg">RESTful API, Middleware</p>
              </div>
            
            <div className="text-center text-3xl font-bold text-yellow-300">↕️ Mongoose ODM</div>
            
            <div className="bg-emerald-500/20 backdrop-blur rounded-xl p-6 text-center border-2 border-emerald-400">
              <h3 className="text-3xl font-bold mb-2">🍃 MongoDB Atlas</h3>
              <p className="text-white/90 text-lg">User Data, Resources</p>
            </div>
            
            <div className="text-center text-3xl font-bold text-yellow-300">→ External API Call ←</div>
            
            <div className="bg-purple-500/20 backdrop-blur rounded-xl p-6 text-center border-2 border-purple-400">
              <h3 className="text-3xl font-bold mb-2">✨ Wow Factor API</h3>
              <p className="text-white/90 text-lg">ElevenLabs, OpenAI, etc.</p>
              </div>
          </div>
        </div>
      )
    },

    // Grading Breakdown
    {
      id: 'grading',
      title: '📊 Grading Breakdown (30% of Final Grade)',
      bgGradient: 'from-green-600 to-teal-700',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">📊 Grading Breakdown (30% of Final Grade)</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-2xl font-bold">Technical Implementation</span>
                  <p className="text-white/80 text-sm">Backend (15%), Frontend (15%), Database (10%)</p>
                </div>
                <span className="text-3xl font-bold">40%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-4">
                <div className="bg-blue-500 h-4 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-2xl font-bold">External API Integration</span>
                  <p className="text-white/80 text-sm">"Wow Factor" API properly implemented</p>
          </div>
                <span className="text-3xl font-bold">25%</span>
        </div>
              <div className="w-full bg-white/20 rounded-full h-4">
                <div className="bg-purple-500 h-4 rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-2xl font-bold">Presentation & Demo</span>
                  <p className="text-white/80 text-sm">Live demo + technical explanation</p>
                </div>
                <span className="text-3xl font-bold">20%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-4">
                <div className="bg-green-500 h-4 rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-2xl font-bold">Documentation</span>
                  <p className="text-white/80 text-sm">Complete README with setup instructions</p>
                </div>
                <span className="text-3xl font-bold">10%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-4">
                <div className="bg-orange-500 h-4 rounded-full" style={{ width: '10%' }}></div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <span className="text-2xl font-bold">Innovation & Creativity</span>
                  <p className="text-white/80 text-sm">Going beyond requirements</p>
                </div>
                <span className="text-3xl font-bold">5%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-4">
                <div className="bg-pink-500 h-4 rounded-full" style={{ width: '5%' }}></div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white/10 backdrop-blur rounded-xl p-6 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Grade Thresholds:</h3>
            <ul className="space-y-2 text-lg">
              <li>✅ <strong>All requirements met:</strong> B- to B+ (72-87%)</li>
              <li>✨ <strong>Polished execution:</strong> A- (90-92%)</li>
              <li>🚀 <strong>Impressive implementation:</strong> A (93-100%)</li>
            </ul>
          </div>
        </div>
      )
    },

    // Section Divider: Requirements
    {
      id: 'requirements-intro',
      title: '✅ The 9 Core Requirements',
      bgGradient: 'from-orange-600 to-red-700',
      content: (
        <div className="text-center space-y-8 animate-fade-in">
          <style>{customStyles}</style>
          <h1 className="text-7xl font-bold text-white">✅ The 9 Core Requirements</h1>
          <h2 className="text-3xl text-blue-200">Everything your project MUST have</h2>
        </div>
      )
    },

    // Requirement 1: Authentication
    {
      id: 'req-auth',
      title: '✅ 1. Authentication & User System',
      bgGradient: 'from-blue-600 to-indigo-700',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">✅ 1. Authentication & User System</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">🔐 Backend</h3>
              <ul className="space-y-2 text-white/90">
                <li>• User model with email, password (bcrypt hashed), name</li>
                <li>• <code className="bg-black/30 px-2 py-1 rounded">POST /api/auth/register</code> - Create account</li>
                <li>• <code className="bg-black/30 px-2 py-1 rounded">POST /api/auth/login</code> - Login, get JWT token</li>
                <li>• <code className="bg-black/30 px-2 py-1 rounded">GET /api/auth/me</code> - Get current user (protected)</li>
                <li>• Authentication middleware (verify JWT)</li>
                <li>• JWT secret in environment variable</li>
              </ul>
                </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">⚛️ Frontend</h3>
              <ul className="space-y-2 text-white/90">
                <li>• Registration page with validation</li>
                <li>• Login page with error handling</li>
                <li>• Store JWT in localStorage</li>
                <li>• Send token in Authorization header</li>
                <li>• Logout functionality</li>
                <li>• Redirect to login if not authenticated</li>
              </ul>
            </div>
              </div>

          <div className="bg-red-500/20 backdrop-blur rounded-xl p-6 border-2 border-red-400 max-w-5xl mx-auto">
            <strong className="text-xl">🚨 Security Rules:</strong> NEVER store plain passwords. NEVER expose JWT secret. NEVER return passwords in API responses.
                </div>
              </div>
      )
    },

    // Requirement 2: CRUD
    {
      id: 'req-crud',
      title: '✅ 2. Main Resource with Full CRUD',
      bgGradient: 'from-purple-600 to-pink-700',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">✅ 2. Main Resource with Full CRUD</h2>
          
          <div className="text-center text-2xl mb-8 text-yellow-300 font-semibold">
            Choose your domain: Posts, Products, Events, Recipes, etc.
                </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
            <div className="bg-green-500/20 backdrop-blur rounded-xl p-6 border-2 border-green-400">
              <h3 className="text-3xl font-bold mb-3">CREATE</h3>
              <code className="bg-black/30 px-3 py-1 rounded text-lg">POST /api/[resource]</code>
              <p className="text-white/90 mt-3">🔒 Protected - Auth required</p>
              <p className="text-white/90">Users create new items</p>
              </div>

            <div className="bg-blue-500/20 backdrop-blur rounded-xl p-6 border-2 border-blue-400">
              <h3 className="text-3xl font-bold mb-3">READ</h3>
              <div className="space-y-2">
                <code className="bg-black/30 px-3 py-1 rounded text-lg block">GET /api/[resource]</code>
                <code className="bg-black/30 px-3 py-1 rounded text-lg block">GET /api/[resource]/:id</code>
                </div>
              <p className="text-white/90 mt-3">📖 Public or protected</p>
              <p className="text-white/90">List all or get single item</p>
              </div>

            <div className="bg-yellow-500/20 backdrop-blur rounded-xl p-6 border-2 border-yellow-400">
              <h3 className="text-3xl font-bold mb-3">UPDATE</h3>
              <code className="bg-black/30 px-3 py-1 rounded text-lg">PUT /api/[resource]/:id</code>
              <p className="text-white/90 mt-3">🔒 Owner only</p>
              <p className="text-white/90">Edit existing items</p>
                </div>

            <div className="bg-red-500/20 backdrop-blur rounded-xl p-6 border-2 border-red-400">
              <h3 className="text-3xl font-bold mb-3">DELETE</h3>
              <code className="bg-black/30 px-3 py-1 rounded text-lg">DELETE /api/[resource]/:id</code>
              <p className="text-white/90 mt-3">🔒 Owner only</p>
              <p className="text-white/90">Remove items</p>
            </div>
              </div>

          <div className="bg-blue-500/20 backdrop-blur rounded-xl p-6 border-2 border-blue-400 max-w-5xl mx-auto">
            <strong className="text-xl">Authorization:</strong> Users can only edit/delete their OWN items. Return <code className="bg-black/30 px-2 py-1 rounded">403 Forbidden</code> otherwise.
                </div>
              </div>
      )
    },

    // Requirement 3: MongoDB
    {
      id: 'req-database',
      title: '✅ 3. MongoDB Database',
      bgGradient: 'from-green-600 to-emerald-700',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">✅ 3. MongoDB Database</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">📦 Database Setup</h3>
              <ul className="space-y-2 text-white/90">
                <li>• MongoDB Atlas cloud database</li>
                <li>• Connection string in <code className="bg-black/30 px-2 py-1 rounded">.env</code></li>
                <li>• Successful connection on server start</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">📋 Schema Design</h3>
              <ul className="space-y-2 text-white/90">
                <li>• Minimum 2 Mongoose models</li>
                <li>• User model + Main resource model</li>
                <li>• Proper data types and validation</li>
                <li>• Timestamps enabled</li>
              </ul>
          </div>
        </div>
          
          <div className="bg-gray-900/50 backdrop-blur rounded-xl p-6 max-w-4xl mx-auto">
            <h4 className="text-xl font-bold mb-4">Example Schema Structure:</h4>
            <pre className="text-sm overflow-x-auto text-green-300"><code>{`const resourceSchema = new Schema({
  title: { type: String, required: true },
  description: String,
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  },
  // ... your additional fields
}, { timestamps: true });`}</code></pre>
          </div>
        </div>
      )
    },

    // Requirement 4: React Frontend
    {
      id: 'req-react',
      title: '✅ 4. React Frontend',
      bgGradient: 'from-cyan-600 to-blue-700',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">✅ 4. React Frontend</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">🧩 Components</h3>
              <ul className="space-y-2 text-white/90">
                <li>• Minimum 8 functional components</li>
                <li>• Reusable components (2+)</li>
                <li>• Props & composition</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">🪝 React Hooks</h3>
              <ul className="space-y-2 text-white/90">
                <li>• useState - Component state</li>
                <li>• useEffect - Data fetching</li>
                <li>• Proper dependency arrays</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">🎨 React Patterns</h3>
              <ul className="space-y-2 text-white/90">
                <li>• Conditional rendering</li>
                <li>• List rendering with .map()</li>
                <li>• Event handlers</li>
                <li>• Controlled form inputs</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">📊 State Management</h3>
              <ul className="space-y-2 text-white/90">
                <li>• Authentication state</li>
                <li>• Loading & error states</li>
                <li>• Form state with validation</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // Requirement 5: Express Backend
    {
      id: 'req-express',
      title: '✅ 5. Express Backend',
      bgGradient: 'from-yellow-600 to-orange-700',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">✅ 5. Express Backend</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">🟢 Server Setup</h3>
              <ul className="space-y-2 text-white/90">
                <li>• Express server configured</li>
                <li>• CORS enabled for frontend</li>
                <li>• JSON body parsing</li>
                <li>• MongoDB connected</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">🛣️ API Structure</h3>
              <ul className="space-y-2 text-white/90">
                <li>• Routes in separate files</li>
                <li>• RESTful naming conventions</li>
                <li>• Consistent JSON responses</li>
                <li>• Proper HTTP status codes</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">⚙️ Middleware</h3>
              <ul className="space-y-2 text-white/90">
                <li>• Authentication middleware</li>
                <li>• Error handling middleware</li>
                <li>• CORS middleware</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">🚨 Error Handling</h3>
              <ul className="space-y-2 text-white/90">
                <li>• Try-catch blocks</li>
                <li>• Validation error messages</li>
                <li>• Graceful database errors</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 max-w-3xl mx-auto">
            <h4 className="text-xl font-bold mb-3">HTTP Status Codes:</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-500/30 px-3 py-1 rounded">200 OK</span>
              <span className="bg-green-500/30 px-3 py-1 rounded">201 Created</span>
              <span className="bg-red-500/30 px-3 py-1 rounded">400 Bad Request</span>
              <span className="bg-red-500/30 px-3 py-1 rounded">401 Unauthorized</span>
              <span className="bg-red-500/30 px-3 py-1 rounded">403 Forbidden</span>
              <span className="bg-red-500/30 px-3 py-1 rounded">404 Not Found</span>
              <span className="bg-red-500/30 px-3 py-1 rounded">500 Server Error</span>
            </div>
          </div>
        </div>
      )
    },

    // Requirement 6: Full-Stack Integration
    {
      id: 'req-integration',
      title: '✅ 6. Full-Stack Integration',
      bgGradient: 'from-red-600 to-pink-700',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">✅ 6. Full-Stack Integration</h2>
          
          <div className="max-w-4xl mx-auto space-y-6 mb-8">
            <div className="bg-cyan-500/20 backdrop-blur rounded-xl p-4 border-l-4 border-cyan-400">
              <div className="flex items-center">
                <span className="text-3xl font-bold mr-4 bg-cyan-600 rounded-full w-12 h-12 flex items-center justify-center">1</span>
                <div>
                  <h3 className="text-xl font-bold">User Action in React</h3>
                  <p className="text-white/80">Click button, submit form, load page</p>
                </div>
              </div>
            </div>
            
            <div className="text-center text-2xl">↓</div>
            
            <div className="bg-blue-500/20 backdrop-blur rounded-xl p-4 border-l-4 border-blue-400">
              <div className="flex items-center">
                <span className="text-3xl font-bold mr-4 bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center">2</span>
                <div>
                  <h3 className="text-xl font-bold">Frontend API Call</h3>
                  <p className="text-white/80">fetch() with JWT in Authorization header</p>
                </div>
              </div>
            </div>
            
            <div className="text-center text-2xl">↓</div>
            
            <div className="bg-green-500/20 backdrop-blur rounded-xl p-4 border-l-4 border-green-400">
              <div className="flex items-center">
                <span className="text-3xl font-bold mr-4 bg-green-600 rounded-full w-12 h-12 flex items-center justify-center">3</span>
                <div>
                  <h3 className="text-xl font-bold">Backend Processing</h3>
                  <p className="text-white/80">Verify JWT, validate data, query DB</p>
                </div>
              </div>
            </div>

            <div className="text-center text-2xl">↓</div>
            
            <div className="bg-purple-500/20 backdrop-blur rounded-xl p-4 border-l-4 border-purple-400">
              <div className="flex items-center">
                <span className="text-3xl font-bold mr-4 bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center">4</span>
                <div>
                  <h3 className="text-xl font-bold">Update UI</h3>
                  <p className="text-white/80">Show data, loading states, errors</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-900/50 backdrop-blur rounded-xl p-4">
              <h4 className="text-lg font-bold mb-2">Backend .env:</h4>
              <pre className="text-sm text-green-300"><code>{`MONGODB_URI=mongodb+srv://...
JWT_SECRET=your_secret_here
[API_NAME]_API_KEY=...
PORT=5000`}</code></pre>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur rounded-xl p-4">
              <h4 className="text-lg font-bold mb-2">Frontend .env:</h4>
              <pre className="text-sm text-green-300"><code>{`REACT_APP_API_URL=http://localhost:5000`}</code></pre>
            </div>
          </div>
        </div>
      )
    },

    // WOW Factor Intro
    {
      id: 'wow-factor-intro',
      title: '✨ The "Wow Factor"',
      bgGradient: 'from-purple-600 to-indigo-700',
      content: (
        <div className="text-center space-y-8 animate-fade-in">
          <style>{customStyles}</style>
          <h1 className="text-7xl font-bold text-white">✨ The "Wow Factor"</h1>
          <h2 className="text-3xl text-blue-200">External API Integration - The Most Important Part</h2>
        </div>
      )
    },

    // Requirement 7: External API
    {
      id: 'req-api',
      title: '✅ 7. External API Integration',
      bgGradient: 'from-indigo-600 to-purple-700',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">✅ 7. External API Integration</h2>
          
          <div className="text-center text-3xl mb-12 font-bold">
            Your app MUST integrate with a <span className="text-yellow-300">powerful external API</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur rounded-xl p-6 text-center border-2 border-blue-400">
              <div className="text-5xl mb-3">🎙️</div>
              <h3 className="text-2xl font-bold mb-2">ElevenLabs</h3>
              <p className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full inline-block mb-3">RECOMMENDED</p>
              <p className="text-white/90 mb-3">Text-to-Speech with realistic voices</p>
              <ul className="text-left text-sm space-y-1 text-white/80">
                <li>• Convert text to audio</li>
                <li>• Multiple voice options</li>
                <li>• Save generated audio</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/30 to-teal-500/30 backdrop-blur rounded-xl p-6 text-center border-2 border-green-400">
              <div className="text-5xl mb-3">🤖</div>
              <h3 className="text-2xl font-bold mb-2">OpenAI</h3>
              <p className="bg-green-600 text-white text-sm px-3 py-1 rounded-full inline-block mb-3">RECOMMENDED</p>
              <p className="text-white/90 mb-3">GPT models for text generation</p>
              <ul className="text-left text-sm space-y-1 text-white/80">
                <li>• Generate content</li>
                <li>• Chat completion</li>
                <li>• AI-powered features</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border-2 border-white/30">
              <div className="text-4xl mb-3">🖼️</div>
              <h3 className="text-xl font-bold mb-2">Image Generation</h3>
              <p className="text-white/80 text-sm">DALL-E, Stability AI</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border-2 border-white/30">
              <div className="text-4xl mb-3">💳</div>
              <h3 className="text-xl font-bold mb-2">Stripe</h3>
              <p className="text-white/80 text-sm">Payment processing</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border-2 border-white/30">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="text-xl font-bold mb-2">Twilio</h3>
              <p className="text-white/80 text-sm">SMS & voice calls</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center border-2 border-white/30">
              <div className="text-4xl mb-3">🗺️</div>
              <h3 className="text-xl font-bold mb-2">Maps API</h3>
              <p className="text-white/80 text-sm">Google Maps, Mapbox</p>
            </div>
          </div>
        </div>
      )
    },

    // API Requirements
    {
      id: 'api-requirements',
      title: 'API Integration Requirements',
      bgGradient: 'from-blue-600 to-cyan-700',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">API Integration Requirements</h2>
          
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-l-4 border-red-400">
              <div className="flex items-start">
                <span className="text-4xl mr-4">🔐</span>
                <div>
                  <h3 className="text-2xl font-bold mb-3">API Key Security</h3>
                  <ul className="space-y-2 text-white/90">
                    <li>• Store API key in backend <code className="bg-black/30 px-2 py-1 rounded">.env</code> file</li>
                    <li>• <strong>NEVER</strong> expose API keys in frontend code</li>
                    <li>• <strong>NEVER</strong> commit API keys to GitHub</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-l-4 border-blue-400">
              <div className="flex items-start">
                <span className="text-4xl mr-4">🔄</span>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Backend Proxy Pattern</h3>
                  <ul className="space-y-2 text-white/90">
                    <li>• Backend route calls external API (not frontend directly)</li>
                    <li>• Backend validates requests before calling API</li>
                    <li>• Backend saves API results to MongoDB</li>
                    <li>• Backend returns processed data to frontend</li>
                  </ul>
                </div>
              </div>
              </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-l-4 border-green-400">
              <div className="flex items-start">
                <span className="text-4xl mr-4">💾</span>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Database Integration</h3>
                  <ul className="space-y-2 text-white/90">
                    <li>• Save API results/metadata to MongoDB</li>
                    <li>• Users can view history of their API usage</li>
                    <li>• Associate API data with user accounts (userId)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 backdrop-blur rounded-xl p-6 border-2 border-yellow-400">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">The "Wow" Test:</h3>
                <p className="text-2xl">Would someone actually use this? Does it do something impressive?</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Requirement 8: Deployment
    {
      id: 'req-deployment',
      title: '✅ 8. Deployment',
      bgGradient: 'from-orange-600 to-amber-700',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">✅ 8. Deployment</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            <div className="bg-cyan-500/20 backdrop-blur rounded-xl p-6 text-center border-2 border-cyan-400">
              <h3 className="text-2xl font-bold mb-3">⚛️ Frontend</h3>
              <p className="text-yellow-300 font-semibold mb-4">Vercel (or Netlify)</p>
              <ul className="text-left space-y-2 text-white/90">
                <li>• Deploy React app</li>
                <li>• Set environment variables</li>
                <li>• Get public URL</li>
              </ul>
            </div>
            
            <div className="bg-green-500/20 backdrop-blur rounded-xl p-6 text-center border-2 border-green-400">
              <h3 className="text-2xl font-bold mb-3">🟢 Backend</h3>
              <p className="text-yellow-300 font-semibold mb-4">Render (or Railway)</p>
              <ul className="text-left space-y-2 text-white/90">
                <li>• Deploy Express API</li>
                <li>• Set environment variables</li>
                <li>• Configure CORS for frontend</li>
              </ul>
            </div>
            
            <div className="bg-emerald-500/20 backdrop-blur rounded-xl p-6 text-center border-2 border-emerald-400">
              <h3 className="text-2xl font-bold mb-3">🍃 Database</h3>
              <p className="text-yellow-300 font-semibold mb-4">MongoDB Atlas</p>
              <ul className="text-left space-y-2 text-white/90">
                <li>• Cloud-hosted database</li>
                <li>• Connection string in env</li>
                <li>• Free tier available</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Deployment Checklist:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-white/90">
              <div>✅ Frontend deployed and accessible</div>
              <div>✅ Backend deployed and responding</div>
              <div>✅ Database connected from backend</div>
              <div>✅ Environment variables configured</div>
              <div>✅ CORS allows production frontend</div>
              <div>✅ All features work end-to-end</div>
              <div>✅ Authentication works</div>
              <div>✅ API integration works</div>
            </div>
          </div>
        </div>
      )
    },

    // Requirement 9: Documentation
    {
      id: 'req-documentation',
      title: '✅ 9. Documentation',
      bgGradient: 'from-purple-600 to-violet-700',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">✅ 9. Documentation</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h3 className="text-2xl font-bold mb-4">README.md Must Include:</h3>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-xl font-semibold mb-2">📝 Project Overview</h4>
                  <p className="text-white/80">Title, description, problem solved, target audience</p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-xl font-semibold mb-2">✨ Features List</h4>
                  <p className="text-white/80">What can users do? Highlight key features and API integration</p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-xl font-semibold mb-2">🛠️ Tech Stack</h4>
                  <p className="text-white/80">React, Node.js, Express, MongoDB, External APIs used</p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-xl font-semibold mb-2">💻 Installation Instructions</h4>
                  <p className="text-white/80">Clone repo, install dependencies, environment variables, how to run locally</p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-xl font-semibold mb-2">🚀 Deployment Links</h4>
                  <p className="text-white/80">Live frontend URL and backend URL</p>
              </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h4 className="text-xl font-semibold mb-2">📸 Screenshots</h4>
                  <p className="text-white/80">At least 3 screenshots showing key features</p>
                </div>
              </div>
            </div>
            
            <div className="bg-red-500/20 backdrop-blur rounded-xl p-6 border-2 border-red-400">
              <h3 className="text-2xl font-bold mb-3">🚨 Critical: .gitignore</h3>
              <pre className="text-sm bg-black/30 p-4 rounded"><code>{`node_modules/
.env
.DS_Store
build/
dist/`}</code></pre>
              <p className="mt-3 text-yellow-300 font-semibold"><strong>NEVER commit:</strong> API keys, passwords, or node_modules</p>
            </div>
          </div>
        </div>
      )
    },

    // Final Summary
    {
      id: 'summary',
      title: '✅ Requirements Summary',
      bgGradient: 'from-blue-600 to-purple-700',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">✅ Requirements Summary</h2>
          
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 flex items-center">
              <span className="text-3xl font-bold mr-4 bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">1</span>
              <div>
                <h3 className="text-xl font-bold">Authentication & User System</h3>
                <p className="text-white/80 text-sm">JWT, bcrypt, login/register, protected routes</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 flex items-center">
              <span className="text-3xl font-bold mr-4 bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">2</span>
              <div>
                <h3 className="text-xl font-bold">Main Resource with Full CRUD</h3>
                <p className="text-white/80 text-sm">Create, Read, Update, Delete with authorization</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 flex items-center">
              <span className="text-3xl font-bold mr-4 bg-green-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">3</span>
              <div>
                <h3 className="text-xl font-bold">MongoDB Database</h3>
                <p className="text-white/80 text-sm">MongoDB Atlas, Mongoose schemas, validation</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 flex items-center">
              <span className="text-3xl font-bold mr-4 bg-cyan-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">4</span>
              <div>
                <h3 className="text-xl font-bold">React Frontend</h3>
                <p className="text-white/80 text-sm">Components, hooks, state management</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 flex items-center">
              <span className="text-3xl font-bold mr-4 bg-orange-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">5</span>
              <div>
                <h3 className="text-xl font-bold">Express Backend</h3>
                <p className="text-white/80 text-sm">RESTful API, middleware, error handling</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 flex items-center">
              <span className="text-3xl font-bold mr-4 bg-pink-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">6</span>
              <div>
                <h3 className="text-xl font-bold">Full-Stack Integration</h3>
                <p className="text-white/80 text-sm">Frontend ↔ Backend communication with JWT</p>
              </div>
            </div>
            
            <div className="bg-yellow-500/20 backdrop-blur rounded-xl p-4 flex items-center border-2 border-yellow-400">
              <span className="text-3xl font-bold mr-4 bg-yellow-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">7</span>
              <div>
                <h3 className="text-xl font-bold">External API Integration ⭐</h3>
                <p className="text-white/80 text-sm">ElevenLabs, OpenAI, or another impressive API</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 flex items-center">
              <span className="text-3xl font-bold mr-4 bg-teal-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">8</span>
              <div>
                <h3 className="text-xl font-bold">Deployment</h3>
                <p className="text-white/80 text-sm">Vercel (frontend), Render (backend), MongoDB Atlas</p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-4 flex items-center">
              <span className="text-3xl font-bold mr-4 bg-violet-600 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">9</span>
              <div>
                <h3 className="text-xl font-bold">Documentation</h3>
                <p className="text-white/80 text-sm">Complete README with setup instructions</p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // You Got This!
    {
      id: 'you-got-this',
      title: '🚀 You Got This!',
      bgGradient: 'from-green-600 to-teal-700',
      content: (
        <div className="text-white text-center animate-fade-in">
          <style>{customStyles}</style>
          <div className="space-y-12">
            <div className="text-5xl font-bold leading-relaxed">
              You've learned everything you need to build this!
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              <span className="bg-white/20 backdrop-blur px-6 py-3 rounded-full text-lg font-semibold">✅ React Components & Hooks</span>
              <span className="bg-white/20 backdrop-blur px-6 py-3 rounded-full text-lg font-semibold">✅ Express API Development</span>
              <span className="bg-white/20 backdrop-blur px-6 py-3 rounded-full text-lg font-semibold">✅ MongoDB & Mongoose</span>
              <span className="bg-white/20 backdrop-blur px-6 py-3 rounded-full text-lg font-semibold">✅ JWT Authentication</span>
              <span className="bg-white/20 backdrop-blur px-6 py-3 rounded-full text-lg font-semibold">✅ API Integration</span>
              <span className="bg-white/20 backdrop-blur px-6 py-3 rounded-full text-lg font-semibold">✅ Full-Stack Deployment</span>
            </div>
            
            <div className="space-y-6 max-w-3xl mx-auto">
              <p className="text-3xl">This is your chance to build something <span className="text-yellow-300 font-bold">impressive</span> and <span className="text-pink-300 font-bold">valuable</span>.</p>
              <p className="text-2xl">Something you'll be proud to show employers.</p>
              <p className="text-2xl">Something that demonstrates your skills.</p>
              <p className="text-4xl font-bold mt-8">
                Now go build something amazing! 🎉
            </p>
          </div>
        </div>
        </div>
      )
    },

    // Example Projects
    {
      id: 'example-projects',
      title: '💡 Example Projects That Hit All Requirements',
      bgGradient: 'from-pink-600 to-rose-700',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">💡 Example Projects</h2>
          <p className="text-2xl text-center mb-8 text-yellow-300">Projects that meet ALL 9 requirements</p>
          
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Project 1 */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-blue-400">
              <h3 className="text-3xl font-bold mb-4">🎲 AI Dungeon Master</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90">
                <div>
                  <p className="font-semibold mb-2">✅ Requirements Met:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Auth: Player accounts, login/register</li>
                    <li>• CRUD: Create/edit/delete campaigns & characters</li>
                    <li>• MongoDB: User, Campaign, Character models</li>
                    <li>• React: Campaign dashboard, character sheets, story viewer</li>
                    <li>• Express: API for campaigns & AI story generation</li>
                    <li>• Integration: Frontend ↔ Backend with JWT</li>
                    <li>• API: OpenAI (story generation) + ElevenLabs (NPC voices)</li>
                    <li>• Deploy: Vercel + Render + MongoDB Atlas</li>
                    <li>• Docs: README with setup instructions</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">🎯 The Crazy Part:</p>
                  <p className="text-sm">Generate infinite D&D campaigns with AI. Players make choices, AI creates branching narratives with unique NPCs that speak in different voices. Each campaign is completely unique and adapts to player decisions in real-time.</p>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-green-400">
              <h3 className="text-3xl font-bold mb-4">🤖 AI Code Review Assistant</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90">
                <div>
                  <p className="font-semibold mb-2">✅ Requirements Met:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Auth: Developer accounts, login/register</li>
                    <li>• CRUD: Create/edit/delete code reviews</li>
                    <li>• MongoDB: User & Review models</li>
                    <li>• React: Code editor, review history, suggestions</li>
                    <li>• Express: API for reviews & AI analysis</li>
                    <li>• Integration: Frontend ↔ Backend with JWT</li>
                    <li>• API: OpenAI (code analysis) + ElevenLabs (audio explanations)</li>
                    <li>• Deploy: Vercel + Render + MongoDB Atlas</li>
                    <li>• Docs: README with setup instructions</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">🎯 The Crazy Part:</p>
                  <p className="text-sm">Upload code, get AI-powered reviews with explanations. The AI doesn't just find bugs—it explains WHY they're problems, suggests fixes, and can even explain code in audio format. Learn from every review.</p>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-purple-400">
              <h3 className="text-3xl font-bold mb-4">💭 Dream Journal Analyzer</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90">
                <div>
                  <p className="font-semibold mb-2">✅ Requirements Met:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Auth: User accounts, login/register</li>
                    <li>• CRUD: Create/edit/delete dream entries</li>
                    <li>• MongoDB: User & Dream models</li>
                    <li>• React: Dream journal, analytics dashboard, insights</li>
                    <li>• Express: API for dreams & AI analysis</li>
                    <li>• Integration: Frontend ↔ Backend with JWT</li>
                    <li>• API: OpenAI (pattern analysis) + ElevenLabs (narrated insights)</li>
                    <li>• Deploy: Vercel + Render + MongoDB Atlas</li>
                    <li>• Docs: README with setup instructions</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">🎯 The Crazy Part:</p>
                  <p className="text-sm">Log your dreams, AI finds patterns you never noticed. "You dream about water 3x more when stressed." "Your dreams get more creative after reading fiction." Get audio summaries of your subconscious patterns and personalized insights.</p>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-yellow-400">
              <h3 className="text-3xl font-bold mb-4">🎤 AI Standup Comedy Writer</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90">
                <div>
                  <p className="font-semibold mb-2">✅ Requirements Met:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Auth: Comedian accounts, login/register</li>
                    <li>• CRUD: Create/edit/delete comedy routines</li>
                    <li>• MongoDB: User & Routine models</li>
                    <li>• React: Routine builder, joke library, timer</li>
                    <li>• Express: API for routines & joke generation</li>
                    <li>• Integration: Frontend ↔ Backend with JWT</li>
                    <li>• API: OpenAI (joke writing) + ElevenLabs (delivery practice)</li>
                    <li>• Deploy: Vercel + Render + MongoDB Atlas</li>
                    <li>• Docs: README with setup instructions</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">🎯 The Crazy Part:</p>
                  <p className="text-sm">AI writes jokes based on your style, topics, and audience. Practice delivery with AI voice feedback. Build complete 5-minute sets. The AI learns what makes YOU funny and generates material that matches your voice.</p>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-cyan-400">
              <h3 className="text-3xl font-bold mb-4">💸 AI Personal Finance Coach</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90">
                <div>
                  <p className="font-semibold mb-2">✅ Requirements Met:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Auth: User accounts, login/register</li>
                    <li>• CRUD: Create/edit/delete transactions & budgets</li>
                    <li>• MongoDB: User, Transaction, Budget models</li>
                    <li>• React: Dashboard, spending tracker, goals</li>
                    <li>• Express: API for finances & AI advice</li>
                    <li>• Integration: Frontend ↔ Backend with JWT</li>
                    <li>• API: Financial API (rates) + OpenAI (personalized advice)</li>
                    <li>• Deploy: Vercel + Render + MongoDB Atlas</li>
                    <li>• Docs: README with setup instructions</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">🎯 The Crazy Part:</p>
                  <p className="text-sm">Track spending, get AI that understands YOUR financial situation. "You spend $200/month on coffee—here's how to invest that instead." "Based on your income, you could retire 5 years earlier if..." Personalized, actionable financial advice.</p>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-orange-400">
              <h3 className="text-3xl font-bold mb-4">🎯 AI Interview Prep Platform</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90">
                <div>
                  <p className="font-semibold mb-2">✅ Requirements Met:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Auth: User accounts, login/register</li>
                    <li>• CRUD: Create/edit/delete practice sessions</li>
                    <li>• MongoDB: User & Session models</li>
                    <li>• React: Interview simulator, feedback dashboard</li>
                    <li>• Express: API for sessions & AI evaluation</li>
                    <li>• Integration: Frontend ↔ Backend with JWT</li>
                    <li>• API: OpenAI (questions & feedback) + ElevenLabs (interviewer voice)</li>
                    <li>• Deploy: Vercel + Render + MongoDB Atlas</li>
                    <li>• Docs: README with setup instructions</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">🎯 The Crazy Part:</p>
                  <p className="text-sm">Practice interviews with AI that asks real questions for your field. Get instant feedback on your answers, body language tips, and confidence scores. The AI adapts difficulty based on your performance. Be ready for any interview.</p>
                </div>
              </div>
            </div>

            {/* Project 7 */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-pink-400">
              <h3 className="text-3xl font-bold mb-4">🎨 AI Meme Generator with Context</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90">
                <div>
                  <p className="font-semibold mb-2">✅ Requirements Met:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Auth: User accounts, login/register</li>
                    <li>• CRUD: Create/edit/delete memes</li>
                    <li>• MongoDB: User & Meme models</li>
                    <li>• React: Meme editor, gallery, trending</li>
                    <li>• Express: API for memes & AI generation</li>
                    <li>• Integration: Frontend ↔ Backend with JWT</li>
                    <li>• API: DALL-E/Stability AI (images) + OpenAI (trending topics)</li>
                    <li>• Deploy: Vercel + Render + MongoDB Atlas</li>
                    <li>• Docs: README with setup instructions</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">🎯 The Crazy Part:</p>
                  <p className="text-sm">AI understands current events and trends, generates memes that are actually relevant. "Make a meme about the new iPhone" → AI knows what's funny about it right now. Create viral content that's actually timely and contextually aware.</p>
                </div>
              </div>
            </div>

            {/* Project 8 */}
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-indigo-400">
              <h3 className="text-3xl font-bold mb-4">🐾 Virtual Pet with AI Personality</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90">
                <div>
                  <p className="font-semibold mb-2">✅ Requirements Met:</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Auth: User accounts, login/register</li>
                    <li>• CRUD: Create/edit/delete pets & interactions</li>
                    <li>• MongoDB: User & Pet models</li>
                    <li>• React: Pet dashboard, interaction log, stats</li>
                    <li>• Express: API for pets & AI personality</li>
                    <li>• Integration: Frontend ↔ Backend with JWT</li>
                    <li>• API: OpenAI (personality) + ElevenLabs (pet voice)</li>
                    <li>• Deploy: Vercel + Render + MongoDB Atlas</li>
                    <li>• Docs: README with setup instructions</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">🎯 The Crazy Part:</p>
                  <p className="text-sm">Virtual pet that actually learns and evolves. It remembers your interactions, develops unique personality traits, and talks to you in a voice that matches its personality. Neglect it? It gets sad. Play with it? It develops new quirks. Each pet is completely unique.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Team Formation
    {
      id: 'team-formation',
      title: '👥 Team Formation',
      bgGradient: 'from-blue-600 to-indigo-700',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">👥 Team Formation</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-yellow-500/20 backdrop-blur rounded-xl p-8 border-2 border-yellow-400 text-center">
              <p className="text-4xl font-bold mb-4">You must find a team of <span className="text-yellow-300">2-6 people</span></p>
        </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 space-y-6">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-6">How to Find Teammates</h3>
                <div className="bg-blue-500/20 backdrop-blur rounded-lg p-6 border-2 border-blue-400">
                  <p className="text-2xl mb-4">Look through the <strong>classlist on Brightspace</strong> to find teammates</p>
                  <p className="text-xl text-white/90">You've spoken to so many of each other through the extra credit - reach out and form teams!</p>
                </div>
              </div>

              <div className="bg-red-500/20 backdrop-blur rounded-xl p-6 border-2 border-red-400 text-center">
                <h3 className="text-3xl font-bold mb-4">⏰ Deadline</h3>
                <p className="text-3xl font-semibold">Team name & idea submissions due <span className="text-yellow-300">this Sunday</span></p>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Working Requirements
    {
      id: 'working-requirements',
      title: '💼 Working Requirements',
      bgGradient: 'from-purple-600 to-pink-700',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">💼 Working Requirements</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border-l-4 border-green-400">
              <div className="flex items-start">
                <span className="text-5xl mr-6">✅</span>
                <div>
                  <h3 className="text-3xl font-bold mb-4">Everyone Must Contribute</h3>
                  <p className="text-xl text-white/90">All team members must actively contribute to the projects</p>
                </div>
              </div>
              </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border-l-4 border-blue-400">
              <div className="flex items-start">
                <span className="text-5xl mr-6">📚</span>
                <div>
                  <h3 className="text-3xl font-bold mb-4">Working During Class</h3>
                  <p className="text-xl text-white/90">You will be working during class, and contribution is <strong>enforced by peer reviews</strong></p>
                </div>
              </div>
              </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border-l-4 border-orange-400">
              <div className="flex items-start">
                <span className="text-5xl mr-6">🦃</span>
                <div>
                  <h3 className="text-3xl font-bold mb-4">Thanksgiving Break</h3>
                  <p className="text-xl text-white/90">You will work <strong>asynchronously over Thanksgiving</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Suggested Tools
    {
      id: 'suggested-tools',
      title: '🛠️ Suggested Tools',
      bgGradient: 'from-cyan-600 to-blue-700',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">🛠️ Suggested Tools</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 text-center border-2 border-blue-400">
                <div className="text-6xl mb-4">💻</div>
                <h3 className="text-4xl font-bold mb-4">Cursor</h3>
                <p className="text-xl text-white/90">AI-powered code editor</p>
              </div>
              
              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-8 text-center border-2 border-purple-400">
                <div className="text-6xl mb-4">🌊</div>
                <h3 className="text-4xl font-bold mb-4">Windsurf</h3>
                <p className="text-xl text-white/90">AI coding assistant</p>
              </div>
            </div>
            
            <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400 text-center">
              <h3 className="text-2xl font-bold mb-4">📚 Learning as We Build</h3>
              <p className="text-xl leading-relaxed">
                As we go further, you will learn more about how good engineers do stuff like this as we keep building.
              </p>
            </div>
          </div>
        </div>
      )
    },

    // Questions Slide
    {
      id: 'questions',
      title: '❓ Questions?',
      bgGradient: 'from-purple-600 to-indigo-700',
      content: (
        <div className="text-center space-y-12">
          <style>{customStyles}</style>
          <div className="space-y-8">
            <h1 className="text-8xl font-bold text-white mb-6">❓</h1>
            <h2 className="text-6xl font-semibold text-blue-100 mb-4">
              Questions?
            </h2>
            <div className="text-3xl text-blue-200">
              Let's discuss your project ideas!
            </div>
          </div>
          
          <div className="mt-16">
            <div className="text-2xl font-medium text-white">Good luck on your capstone projects! 🚀</div>
          </div>
        </div>
      )
    }
  ];

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
          className={`min-h-screen flex items-center justify-center p-8 bg-gradient-to-br ${slide.bgGradient || 'from-gray-800 to-gray-900'}`}
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

export default Class18Slides;
