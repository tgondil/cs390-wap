import React, { useState, useEffect } from 'react';

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
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  @keyframes database-flow {
    0% { transform: translateX(-100%); opacity: 0; }
    50% { transform: translateX(0); opacity: 1; }
    100% { transform: translateX(100%); opacity: 0; }
  }
  .database-flow-animation {
    animation: database-flow 3s ease-in-out;
  }
`;







// Main Class 4 Slides Component
const Class4Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Inject custom styles
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = customStyles;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

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
              Class 4: Databases - The Foundation of Modern Applications
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
      id: 'discuss-random-skills',
      title: 'Discuss!',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">Discuss!</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <div className="text-left space-y-6 text-xl leading-relaxed">
                <div className="text-white font-semibold">
                  What was your childhood dream job?
                </div>
                
                <div className="text-white font-semibold">
                  If you could instantly master any skill (like cooking, coding, or painting), what would it be?
                </div>
                
                <div className="text-white font-semibold">
                  What's the weirdest or funniest thing you've ever eaten?
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-pink-600'
    },

    {
      id: 'discuss-data-habits',
      title: 'Discuss!',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">Discuss!</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <div className="text-left space-y-6 text-xl leading-relaxed">
                <div className="text-white font-semibold">
                  If you could trade lives with a celebrity for a day, who would it be and why?
                </div>
                
                <div className="text-white font-semibold">
                  If you could be any historical figure for a day, who would you be?
                </div>
                
                <div className="text-white font-semibold">
                  If you had to live in a different country for a year, which one would you pick?
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-pink-600 to-red-600'
    },

    {
      id: 'how-to-get-interviews',
      title: 'How to Get Interviews',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">How to Get Interviews</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">💼</div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Tip 1: Recruiters have quotas */}
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-8 border border-blue-400/30">
                <div className="text-6xl mb-6">🎯</div>
                <h3 className="text-2xl font-bold text-blue-300 mb-4">Recruiters Have Quotas</h3>
                <div className="text-white/90 text-lg leading-relaxed">
                  <div className="mb-4">They need to fill positions to meet their targets</div>
                  <div className="bg-blue-900/30 rounded-lg p-4">
                    <div className="text-blue-200 font-bold text-sm">💡 This means:</div>
                    <div className="text-white/80 text-sm mt-2">They want to help you succeed - you're helping them too!</div>
                  </div>
                </div>
              </div>

              {/* Tip 2: Show you know the company */}
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-8 border border-green-400/30">
                <div className="text-6xl mb-6">🏢</div>
                <h3 className="text-2xl font-bold text-green-300 mb-4">Know Everything</h3>
                <div className="text-white/90 text-lg leading-relaxed">
                  <div className="mb-4">Tell them you know all about the company and role</div>
                  <div className="bg-green-900/30 rounded-lg p-4">
                    <div className="text-green-200 font-bold text-sm">💡 Research:</div>
                    <div className="text-white/80 text-sm mt-2">Company mission, recent news, job requirements</div>
                  </div>
                </div>
              </div>

              {/* Tip 3: Urgency */}
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-8 border border-purple-400/30">
                <div className="text-6xl mb-6">⚡</div>
                <h3 className="text-2xl font-bold text-purple-300 mb-4">Create Urgency</h3>
                <div className="text-white/90 text-lg leading-relaxed">
                  <div className="mb-4">Say you're looking for an interview THIS WEEK</div>
                  <div className="bg-purple-900/30 rounded-lg p-4">
                    <div className="text-purple-200 font-bold text-sm">💡 Why it works:</div>
                    <div className="text-white/80 text-sm mt-2">Shows you're serious and ready to move fast</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-600'
    },

    {
      id: 'what-is-database-intro',
      title: 'What is a Database?',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">What is a Database?</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🗄️</div>
            <h3 className="text-3xl font-bold mb-12">An organized collection of structured information</h3>
            
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-blue-400/30 mb-8">
              <h4 className="text-3xl font-bold text-white mb-6">🎯 Think of it like...</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-5xl mb-3">🧠</div>
                  <div className="text-xl font-bold text-blue-300 mb-2">Your Brain</div>
                  <div className="text-white/80 text-sm">Stores memories, connects ideas, instantly recalls facts</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-3">📚</div>
                  <div className="text-xl font-bold text-purple-300 mb-2">Google Search</div>
                  <div className="text-white/80 text-sm">Organizes the entire internet, finds anything in milliseconds</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-3">🎵</div>
                  <div className="text-xl font-bold text-green-300 mb-2">Spotify</div>
                  <div className="text-white/80 text-sm">Millions of songs, perfect playlists, knows what you like</div>
                </div>
              </div>
              <div className="text-xl text-white/90 leading-relaxed mt-6 text-center">
                A database is the <strong className="text-yellow-300">super-powered memory</strong> behind every app you love
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Store */}
              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <div className="text-6xl mb-6">📦</div>
                <h4 className="text-2xl font-bold text-green-300 mb-4">Store</h4>
                <div className="text-white/80 text-left space-y-3">
                  <div>• Keep data safe and secure</div>
                  <div>• Handle massive amounts</div>
                  <div>• Persist beyond program runs</div>
                  <div>• Multiple users can access</div>
                </div>
              </div>

              {/* Organize */}
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400">
                <div className="text-6xl mb-6">🗂️</div>
                <h4 className="text-2xl font-bold text-blue-300 mb-4">Organize</h4>
                <div className="text-white/80 text-left space-y-3">
                  <div>• Structure data logically</div>
                  <div>• Create relationships</div>
                  <div>• Eliminate redundancy</div>
                  <div>• Maintain consistency</div>
                </div>
              </div>

              {/* Retrieve */}
              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-8 border-2 border-purple-400">
                <div className="text-6xl mb-6">🔍</div>
                <h4 className="text-2xl font-bold text-purple-300 mb-4">Retrieve</h4>
                <div className="text-white/80 text-left space-y-3">
                  <div>• Find data instantly</div>
                  <div>• Complex searches</div>
                  <div>• Sort and filter</div>
                  <div>• Generate reports</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-8 border border-yellow-400/30 mb-8">
              <h4 className="text-3xl font-bold text-yellow-300 mb-6">🏠 Real-World Examples</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🏦</div>
                  <div className="text-white font-bold mb-2">Bank</div>
                  <div className="text-white/70 text-sm">Account balances, transactions</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🎓</div>
                  <div className="text-white font-bold mb-2">University</div>
                  <div className="text-white/70 text-sm">Students, courses, grades</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🛒</div>
                  <div className="text-white font-bold mb-2">Amazon</div>
                  <div className="text-white/70 text-sm">Products, orders, reviews</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">📱</div>
                  <div className="text-white font-bold mb-2">Social Media</div>
                  <div className="text-white/70 text-sm">Users, posts, likes</div>
                </div>
              </div>
            </div>


          </div>
        </div>
      ),
      bgGradient: 'from-emerald-600 to-teal-700'
    },

    {
      id: 'why-databases-matter',
      title: 'Why Databases Matter',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Why Apps Need Databases</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">💾</div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-red-500/20 backdrop-blur rounded-xl p-8 border-2 border-red-400">
                <div className="text-6xl mb-6">⚡</div>
                <h4 className="text-2xl font-bold text-red-300 mb-4">RAM (Memory)</h4>
                <div className="space-y-3 text-white/80 text-left text-lg">
                  <div>• ✅ Super fast access</div>
                  <div>• ❌ Lost when app restarts</div>
                  <div>• ❌ Limited size (expensive)</div>
                  <div>• ❌ Volatile storage</div>
                </div>
                <div className="mt-4 bg-red-900/30 rounded-lg p-4">
                  <div className="text-red-200 text-sm">
                    Like writing on a whiteboard - fast but easily erased!
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <div className="text-6xl mb-6">🗃️</div>
                <h4 className="text-2xl font-bold text-green-300 mb-4">Database (Disk)</h4>
                <div className="space-y-3 text-white/80 text-left text-lg">
                  <div>• ✅ Survives crashes/restarts</div>
                  <div>• ✅ Massive storage capacity</div>
                  <div>• ✅ Cost-effective for big data</div>
                  <div>• ✅ Persistent storage</div>
                </div>
                <div className="mt-4 bg-green-900/30 rounded-lg p-4">
                  <div className="text-green-200 text-sm">
                    Like writing in a book - permanent and reliable!
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-blue-400/30">
              <h4 className="text-3xl font-bold text-white mb-6">🎯 Key Benefits</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">💪</div>
                  <div className="text-white font-bold mb-1">Persistence</div>
                  <div className="text-white/70 text-sm">Data survives beyond program execution</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">👥</div>
                  <div className="text-white font-bold mb-1">Concurrency</div>
                  <div className="text-white/70 text-sm">Multiple users access simultaneously</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🎯</div>
                  <div className="text-white font-bold mb-1">Consistency</div>
                  <div className="text-white/70 text-sm">Data integrity across operations</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">📈</div>
                  <div className="text-white font-bold mb-1">Scalability</div>
                  <div className="text-white/70 text-sm">Handle growing data and users</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-700'
    },

    {
      id: 'sql-intro',
      title: 'Relational Databases (SQL)',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Relational Databases (SQL)</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📊</div>
            <h3 className="text-3xl font-bold mb-12">Structured, predictable, and powerful</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Tables */}
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-6 border-2 border-blue-400">
                <div className="text-5xl mb-4">🗂️</div>
                <h4 className="text-2xl font-bold text-blue-300 mb-4">Tables</h4>
                <div className="text-white/80 text-left space-y-2">
                  <div>• Like Excel spreadsheets</div>
                  <div>• Store related data together</div>
                  <div>• Each table has a specific purpose</div>
                  <div>• Example: Users, Posts, Comments</div>
                </div>
              </div>

              {/* Rows */}
              <div className="bg-green-500/20 backdrop-blur rounded-xl p-6 border-2 border-green-400">
                <div className="text-5xl mb-4">📝</div>
                <h4 className="text-2xl font-bold text-green-300 mb-4">Rows (Records)</h4>
                <div className="text-white/80 text-left space-y-2">
                  <div>• Individual entries/instances</div>
                  <div>• Each row is one "thing"</div>
                  <div>• Example: One specific user</div>
                  <div>• Horizontal data organization</div>
                </div>
              </div>

              {/* Columns */}
              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-6 border-2 border-purple-400">
                <div className="text-5xl mb-4">📋</div>
                <h4 className="text-2xl font-bold text-purple-300 mb-4">Columns (Fields)</h4>
                <div className="text-white/80 text-left space-y-2">
                  <div>• Attributes/properties</div>
                  <div>• Same type of data</div>
                  <div>• Example: name, email, age</div>
                  <div>• Vertical data organization</div>
                </div>
              </div>
            </div>


          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-indigo-700'
    },

    {
      id: 'tables-rows-columns-detailed',
      title: 'Tables, Rows, and Columns in Detail',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Tables, Rows & Columns</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🔍</div>
            <h3 className="text-3xl font-bold mb-12">Let's build a note-taking app database</h3>
            
            {/* Users Table Example */}
            <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400 mb-8">
              <h4 className="text-3xl font-bold text-blue-300 mb-6">👥 Users Table</h4>
              
              {/* Modern Card-Based Table */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* User 1 */}
                <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-green-400">
                  <div className="text-green-400 font-bold mb-3 text-lg">👤 sarah_codes</div>
                  <div className="space-y-2 text-sm">
                    <div><span className="text-blue-300 font-bold">ID:</span> <span className="text-white">1 🔑</span></div>
                    <div><span className="text-blue-300 font-bold">Email:</span> <span className="text-white">sarah@purdue.edu</span></div>
                    <div><span className="text-blue-300 font-bold">Joined:</span> <span className="text-white">Jan 15, 2024</span></div>
                    <div><span className="text-blue-300 font-bold">Premium:</span> <span className="text-green-400">✅ Yes</span></div>
                  </div>
                </div>

                {/* User 2 */}
                <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-purple-400">
                  <div className="text-purple-400 font-bold mb-3 text-lg">👤 mike_student</div>
                  <div className="space-y-2 text-sm">
                    <div><span className="text-blue-300 font-bold">ID:</span> <span className="text-white">2 🔑</span></div>
                    <div><span className="text-blue-300 font-bold">Email:</span> <span className="text-white">mike.j@gmail.com</span></div>
                    <div><span className="text-blue-300 font-bold">Joined:</span> <span className="text-white">Jan 16, 2024</span></div>
                    <div><span className="text-blue-300 font-bold">Premium:</span> <span className="text-red-400">❌ No</span></div>
                  </div>
                </div>

                {/* User 3 */}
                <div className="bg-gray-800 rounded-lg p-6 border-l-4 border-orange-400">
                  <div className="text-orange-400 font-bold mb-3 text-lg">👤 prof_smith</div>
                  <div className="space-y-2 text-sm">
                    <div><span className="text-blue-300 font-bold">ID:</span> <span className="text-white">3 🔑</span></div>
                    <div><span className="text-blue-300 font-bold">Email:</span> <span className="text-white">jsmith@purdue.edu</span></div>
                    <div><span className="text-blue-300 font-bold">Joined:</span> <span className="text-white">Jan 10, 2024</span></div>
                    <div><span className="text-blue-300 font-bold">Premium:</span> <span className="text-green-400">✅ Yes</span></div>
                  </div>
                </div>
              </div>

              {/* Column Explanations */}
              <div className="bg-blue-900/30 rounded-lg p-6">
                <h5 className="text-blue-300 font-bold mb-4 text-center">🏗️ Table Structure</h5>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl mb-2">🔑</div>
                    <div className="text-blue-300 font-bold mb-1">UserID</div>
                    <div className="text-white/70 text-xs">Primary Key</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">👤</div>
                    <div className="text-blue-300 font-bold mb-1">Username</div>
                    <div className="text-white/70 text-xs">Unique Handle</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">📧</div>
                    <div className="text-blue-300 font-bold mb-1">Email</div>
                    <div className="text-white/70 text-xs">Contact Info</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl mb-2">⭐</div>
                    <div className="text-blue-300 font-bold mb-1">Premium</div>
                    <div className="text-white/70 text-xs">Subscription</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl p-8 border border-green-400/30">
              <h4 className="text-2xl font-bold text-green-300 mb-6">🎯 Key Insights</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🔢</div>
                  <div className="text-white font-bold mb-2">Each Row = One User</div>
                  <div className="text-white/70 text-sm">Sarah, Mike, and Prof Smith are separate users</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">📊</div>
                  <div className="text-white font-bold mb-2">Each Column = One Attribute</div>
                  <div className="text-white/70 text-sm">Username column contains all usernames</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🎯</div>
                  <div className="text-white font-bold mb-2">Data Types Matter</div>
                  <div className="text-white/70 text-sm">UserID is number, Email is text, Is_Premium is true/false</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-cyan-600 to-blue-700'
    },

    {
      id: 'primary-foreign-keys',
      title: 'Primary Keys & Foreign Keys',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Primary Keys & Foreign Keys</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🔑</div>
            <h3 className="text-3xl font-bold mb-12">The foundation of relationships</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Primary Key */}
              <div className="bg-yellow-500/20 backdrop-blur rounded-xl p-8 border-2 border-yellow-400">
                <div className="text-6xl mb-6">🏆</div>
                <h4 className="text-3xl font-bold text-yellow-300 mb-4">Primary Key</h4>
                <div className="space-y-4 text-white/80 text-left">
                  <div className="bg-yellow-900/30 rounded-lg p-4">
                    <div className="text-yellow-200 font-bold mb-2">✨ What it is:</div>
                    <div>A unique identifier for each row in a table</div>
                  </div>
                  <div className="bg-yellow-900/30 rounded-lg p-4">
                    <div className="text-yellow-200 font-bold mb-2">🎯 Rules:</div>
                    <div>• Must be unique (no duplicates)</div>
                    <div>• Cannot be NULL/empty</div>
                    <div>• Should never change</div>
                    <div>• Usually auto-incremented</div>
                  </div>
                  <div className="bg-yellow-900/30 rounded-lg p-4">
                    <div className="text-yellow-200 font-bold mb-2">🏠 Real-World Example:</div>
                    <div>Like your Social Security Number - uniquely identifies YOU</div>
                  </div>
                </div>
              </div>

              {/* Foreign Key */}
              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <div className="text-6xl mb-6">🔗</div>
                <h4 className="text-3xl font-bold text-green-300 mb-4">Foreign Key</h4>
                <div className="space-y-4 text-white/80 text-left">
                  <div className="bg-green-900/30 rounded-lg p-4">
                    <div className="text-green-200 font-bold mb-2">✨ What it is:</div>
                    <div>A reference to a primary key in another table</div>
                  </div>
                  <div className="bg-green-900/30 rounded-lg p-4">
                    <div className="text-green-200 font-bold mb-2">🎯 Purpose:</div>
                    <div>• Creates relationships between tables</div>
                    <div>• Ensures data integrity</div>
                    <div>• Prevents orphaned records</div>
                    <div>• Enables JOINs</div>
                  </div>
                  <div className="bg-green-900/30 rounded-lg p-4">
                    <div className="text-green-200 font-bold mb-2">🏠 Real-World Example:</div>
                    <div>Like writing someone's SSN on a form to reference them</div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      ),
      bgGradient: 'from-yellow-600 to-orange-700'
    },

    {
      id: 'orphaned-records',
      title: 'Orphaned Records - Database Integrity',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Orphaned Records</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🚫</div>
            <h3 className="text-3xl font-bold mb-12">When relationships break down</h3>
            
            {/* What is an Orphaned Record */}
            <div className="bg-red-500/20 backdrop-blur rounded-xl p-8 border-2 border-red-400 mb-8">
              <h4 className="text-3xl font-bold text-red-300 mb-6">💔 What is an Orphaned Record?</h4>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-xl text-white mb-6">
                  A record that references a parent record that no longer exists
                </div>
                <div className="text-lg text-red-300 space-y-3">
                  <div>📝 A note that belongs to UserID = 99</div>
                  <div>❌ But UserID = 99 doesn't exist in Users table</div>
                  <div>🚫 The note is now "orphaned" - it has no parent</div>
                </div>
              </div>
            </div>



            {/* Prevention Solutions */}
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-8 border border-green-400/30">
              <h4 className="text-2xl font-bold text-green-300 mb-6">🛡️ How to Prevent Orphaned Records</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🚫</div>
                    <div className="text-green-300 font-bold mb-3">Restrict Delete</div>
                    <div className="text-white/80 text-sm">
                      Database refuses to delete a user if they have notes.
                      <br/><br/>
                      <span className="text-green-300">"Cannot delete sarah_codes - she has 3 notes!"</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🗑️</div>
                    <div className="text-blue-300 font-bold mb-3">Cascade Delete</div>
                    <div className="text-white/80 text-sm">
                      When user is deleted, automatically delete all their notes too.
                      <br/><br/>
                      <span className="text-blue-300">"Deleting mike_student and his 1 note"</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-600 to-orange-700'
    },

    {
      id: 'sql-insert-detailed',
      title: 'Creating Data - Adding Records',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Creating Data - Adding Records</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📤</div>
            <h3 className="text-3xl font-bold mb-12">How new information gets into your database</h3>
            
            {/* Core Concept */}
            <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400 mb-8">
              <h4 className="text-3xl font-bold text-green-300 mb-6">💡 The Core Concept</h4>
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-2xl text-white mb-4">
                  Every time someone signs up, posts something, or creates content...
                </div>
                <div className="text-4xl mb-4">⬇️</div>
                <div className="text-xl text-green-300 font-bold">
                  A new ROW gets added to the appropriate TABLE
                </div>
              </div>
            </div>

            {/* Real-World Examples */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Adding a User */}
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-6 border-2 border-blue-400">
                <h4 className="text-2xl font-bold text-blue-300 mb-4">👤 New User Signs Up</h4>
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-center space-y-4">
                    <div className="text-4xl">🆕</div>
                    <div className="text-white text-lg font-bold">Alex joins the platform!</div>
                    <div className="text-blue-300 space-y-2 text-left">
                      <div>📝 Username: alex_freshman</div>
                      <div>📧 Email: alex@purdue.edu</div>
                      <div>📅 Joined: Today</div>
                      <div>⭐ Premium: No (yet!)</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 bg-blue-900/30 rounded-lg p-3">
                  <div className="text-blue-200 text-sm text-center">
                    <strong>🎯 Result:</strong> Database automatically assigns UserID = 4
                  </div>
                </div>
              </div>

              {/* Adding a Note */}
              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-6 border-2 border-purple-400">
                <h4 className="text-2xl font-bold text-purple-300 mb-4">📝 Alex Creates First Note</h4>
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-center space-y-4">
                    <div className="text-4xl">✍️</div>
                    <div className="text-white text-lg font-bold">New note created!</div>
                    <div className="text-purple-300 space-y-2 text-left">
                      <div>👤 Author: Alex (UserID: 4)</div>
                      <div>📋 Title: "Welcome to Purdue!"</div>
                      <div>📄 Content: "First day notes..."</div>
                      <div>⏰ Created: Just now</div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 bg-purple-900/30 rounded-lg p-3">
                  <div className="text-purple-200 text-sm text-center">
                    <strong>🔗 Connection:</strong> UserID links this note to Alex
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-8 border border-yellow-400/30">
              <h4 className="text-2xl font-bold text-yellow-300 mb-6">🎯 Key Principles</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🔑</div>
                  <div className="text-white font-bold mb-2">Auto-Generated IDs</div>
                  <div className="text-white/70 text-sm">Database creates unique IDs automatically</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🔗</div>
                  <div className="text-white font-bold mb-2">Maintain Relationships</div>
                  <div className="text-white/70 text-sm">Foreign keys connect related data</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">✅</div>
                  <div className="text-white font-bold mb-2">Data Validation</div>
                  <div className="text-white/70 text-sm">Database ensures data follows rules</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-emerald-700'
    },

    {
      id: 'sql-select-detailed',
      title: 'Retrieving Data - Finding Information',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Retrieving Data - Finding Information</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📥</div>
            <h3 className="text-3xl font-bold mb-12">How you get information back out of your database</h3>
            
            {/* Core Concept */}
            <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400 mb-8">
              <h4 className="text-3xl font-bold text-blue-300 mb-6">💡 The Core Concept</h4>
              <div className="bg-gray-800 rounded-lg p-6 text-center">
                <div className="text-2xl text-white mb-4">
                  Databases are like asking questions to your data:
                </div>
                <div className="text-xl text-blue-300 space-y-3">
                  <div>🤔 "Show me all premium users"</div>
                  <div>🤔 "Find notes created this week"</div>
                  <div>🤔 "Who has the most notes?"</div>
                </div>
              </div>
            </div>

            {/* Types of Questions */}
            <div className="bg-purple-500/20 backdrop-blur rounded-xl p-8 border-2 border-purple-400 mb-8">
              <h4 className="text-3xl font-bold text-purple-300 mb-6">🎯 Types of Questions You Can Ask</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <div className="bg-gray-800 rounded-lg p-6 mb-4">
                    <div className="text-purple-300 font-bold mb-3 text-center">🔍 "Show me specific users"</div>
                    <div className="space-y-2">
                      <div className="text-white">💎 Only premium subscribers</div>
                      <div className="text-white">🏫 Only Purdue students</div>
                      <div className="text-white">📅 Users who joined recently</div>
                      <div className="text-white">🔤 Names containing "student"</div>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <div className="text-purple-300 font-bold mb-3 text-center">📊 "Sort and limit results"</div>
                    <div className="space-y-2">
                      <div className="text-white">🆕 Newest users first</div>
                      <div className="text-white">🔤 Alphabetical order</div>
                      <div className="text-white">🔟 Only show top 10</div>
                      <div className="text-white">📄 Page through results</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-gray-800 rounded-lg p-6 mb-4">
                    <div className="text-purple-300 font-bold mb-3 text-center">📋 "Find specific notes"</div>
                    <div className="space-y-2">
                      <div className="text-white">👤 Notes by Sarah</div>
                      <div className="text-white">📅 Notes from today</div>
                      <div className="text-white">🔍 Notes containing "CS390"</div>
                      <div className="text-white">⭐ Most recent notes</div>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <div className="text-purple-300 font-bold mb-3 text-center">🔢 "Count and summarize"</div>
                    <div className="space-y-2">
                      <div className="text-white">📊 How many users total?</div>
                      <div className="text-white">📈 Average notes per user</div>
                      <div className="text-white">🏆 Most active user</div>
                      <div className="text-white">📅 Daily signup counts</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-World Examples */}
            <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-xl p-8 border border-orange-400/30">
              <h4 className="text-3xl font-bold text-orange-300 mb-6">🌟 Real-World Examples</h4>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🎵</div>
                  <div className="text-white font-bold mb-2">Spotify</div>
                  <div className="text-white/70 text-sm">"Show me my most played songs this month"</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">📱</div>
                  <div className="text-white font-bold mb-2">Instagram</div>
                  <div className="text-white/70 text-sm">"Find posts from people I follow, newest first"</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🛒</div>
                  <div className="text-white font-bold mb-2">Amazon</div>
                  <div className="text-white/70 text-sm">"Show me my order history for electronics"</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-cyan-700'
    },

    {
      id: 'sql-join-detailed',
      title: 'Connecting Data - Table Relationships',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Connecting Data - Table Relationships</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🔗</div>
            <h3 className="text-3xl font-bold mb-12">The magic of relational databases</h3>
            
            {/* Core Concept */}
            <div className="bg-purple-500/20 backdrop-blur rounded-xl p-8 border-2 border-purple-400 mb-8">
              <h4 className="text-3xl font-bold text-purple-300 mb-6">💡 The Big Idea</h4>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-center space-y-6">
                  <div className="text-xl text-white">
                    <span className="bg-blue-600 px-4 py-2 rounded-lg">Users Table</span>
                    <span className="mx-4 text-4xl">+</span>
                    <span className="bg-green-600 px-4 py-2 rounded-lg">Notes Table</span>
                    <span className="mx-4 text-4xl">=</span>
                    <span className="bg-purple-600 px-4 py-2 rounded-lg">Rich Information</span>
                  </div>
                  <div className="text-white/80 text-lg">
                    Instead of storing everything in one giant table,<br/>
                    we connect separate tables to get complete information
                  </div>
                </div>
              </div>
            </div>

            {/* Real-World Scenarios */}
            <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400 mb-8">
              <h4 className="text-3xl font-bold text-blue-300 mb-6">🌟 Real-World Scenarios</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="bg-gray-800 rounded-lg p-6 mb-4">
                    <div className="text-blue-300 font-bold mb-3 text-center">🤔 "Show me all notes with author names"</div>
                    <div className="space-y-3">
                      <div className="text-center text-4xl">🎯</div>
                      <div className="text-white text-sm">We need info from BOTH tables:</div>
                      <div className="text-blue-300">📝 Note titles (from Notes table)</div>
                      <div className="text-blue-300">👤 Author names (from Users table)</div>
                      <div className="text-blue-300">🔗 Connected by UserID</div>
                    </div>
                  </div>
                  <div className="bg-blue-900/30 rounded-lg p-4">
                    <div className="text-blue-200 font-bold mb-2 text-center">🎯 Result:</div>
                    <div className="text-white/80 text-sm text-center">
                      Perfect list of notes with their authors!
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <div className="text-blue-300 font-bold mb-3 text-center">📊 Example Result</div>
                    <div className="space-y-2 text-left">
                      <div className="bg-blue-900/30 p-2 rounded text-sm">
                        📝 "CS390 Study Guide" by sarah_codes
                      </div>
                      <div className="bg-blue-900/30 p-2 rounded text-sm">
                        📝 "Grocery List" by sarah_codes  
                      </div>
                      <div className="bg-blue-900/30 p-2 rounded text-sm">
                        📝 "Math Homework" by mike_student
                      </div>
                      <div className="bg-blue-900/30 p-2 rounded text-sm">
                        📝 "Weekend Plans" by sarah_codes
                      </div>
                      <div className="bg-blue-900/30 p-2 rounded text-sm">
                        📝 "Lecture Outline" by prof_smith
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Different Types of Connections */}
            <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400 mb-8">
              <h4 className="text-3xl font-bold text-green-300 mb-6">🎭 Different Types of Questions</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="bg-gray-800 rounded-lg p-6 mb-4">
                    <div className="text-green-300 font-bold mb-3 text-center">🔄 "Only show matches"</div>
                    <div className="space-y-3 text-center">
                      <div className="text-4xl">🎯</div>
                      <div className="text-white text-sm">Only users who have written notes</div>
                      <div className="text-green-300">✅ sarah_codes (has 3 notes)</div>
                      <div className="text-green-300">✅ mike_student (has 1 note)</div>
                      <div className="text-green-300">✅ prof_smith (has 1 note)</div>
                      <div className="text-gray-500">❌ new_user (no notes yet)</div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <div className="text-green-300 font-bold mb-3 text-center">⬅️ "Include everyone"</div>
                    <div className="space-y-3 text-center">
                      <div className="text-4xl">📊</div>
                      <div className="text-white text-sm">ALL users, even without notes</div>
                      <div className="text-green-300">sarah_codes: 3 notes</div>
                      <div className="text-green-300">mike_student: 1 note</div>
                      <div className="text-green-300">prof_smith: 1 note</div>
                      <div className="text-yellow-300">new_user: 0 notes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-8 border border-yellow-400/30">
              <h4 className="text-2xl font-bold text-yellow-300 mb-6">🌍 Real-World Examples</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🛒</div>
                  <div className="text-white font-bold mb-2">E-commerce</div>
                  <div className="text-white/70 text-sm">Connect Orders + Products + Customers for complete purchase history</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🎵</div>
                  <div className="text-white font-bold mb-2">Music Streaming</div>
                  <div className="text-white/70 text-sm">Connect Songs + Artists + Playlists to show "who sang what"</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">📱</div>
                  <div className="text-white font-bold mb-2">Social Media</div>
                  <div className="text-white/70 text-sm">Connect Posts + Users + Comments for complete conversations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-indigo-700'
    },

    {
      id: 'normalization',
      title: 'Normalization - Organizing Data',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Normalization</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🗂️</div>
            <h3 className="text-3xl font-bold mb-12">Organizing data to eliminate redundancy</h3>
            
            {/* What is Normalization */}
            <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400 mb-8">
              <h4 className="text-3xl font-bold text-blue-300 mb-6">✨ What is Normalization?</h4>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-xl text-white mb-4">
                  Organizing data to reduce redundancy and dependency
                </div>
                <div className="text-lg text-blue-300">
                  Think of it like organizing your closet - everything has its proper place, nothing is duplicated
                </div>
              </div>
            </div>

            {/* Benefits and Drawbacks */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <h4 className="text-3xl font-bold text-green-300 mb-6">✅ Benefits</h4>
                <div className="text-white/80 text-left space-y-4">
                  <div className="bg-green-900/30 rounded-lg p-4">
                    <div className="text-green-200 font-bold mb-2">🚫 No Duplicate Data</div>
                    <div>Each piece of information stored only once</div>
                  </div>
                  <div className="bg-green-900/30 rounded-lg p-4">
                    <div className="text-green-200 font-bold mb-2">🔒 Data Consistency</div>
                    <div>Update once, changes everywhere</div>
                  </div>
                  <div className="bg-green-900/30 rounded-lg p-4">
                    <div className="text-green-200 font-bold mb-2">🛠️ Easier to Maintain</div>
                    <div>Changes are simpler and safer</div>
                  </div>
                  <div className="bg-green-900/30 rounded-lg p-4">
                    <div className="text-green-200 font-bold mb-2">💾 Saves Storage Space</div>
                    <div>Less redundant data means smaller database</div>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/20 backdrop-blur rounded-xl p-8 border-2 border-red-400">
                <h4 className="text-3xl font-bold text-red-300 mb-6">❌ Drawbacks</h4>
                <div className="text-white/80 text-left space-y-4">
                  <div className="bg-red-900/30 rounded-lg p-4">
                    <div className="text-red-200 font-bold mb-2">🔗 Complex Queries</div>
                    <div>Need JOINs to connect related data</div>
                  </div>
                  <div className="bg-red-900/30 rounded-lg p-4">
                    <div className="text-red-200 font-bold mb-2">🐌 Slower Reads</div>
                    <div>Multiple tables mean more work for reads</div>
                  </div>
                  <div className="bg-red-900/30 rounded-lg p-4">
                    <div className="text-red-200 font-bold mb-2">📊 More Tables</div>
                    <div>More complex database structure</div>
                  </div>
                </div>
              </div>
            </div>

            {/* When to Use */}
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-blue-400/30">
              <h4 className="text-2xl font-bold text-blue-300 mb-6">🎯 Perfect for These Scenarios</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🏦</div>
                    <div className="text-blue-300 font-bold mb-2">Banking Systems</div>
                    <div className="text-white/80 text-sm">Data integrity is absolutely critical</div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">📝</div>
                    <div className="text-blue-300 font-bold mb-2">Content Management</div>
                    <div className="text-white/80 text-sm">Lots of updates and edits happening</div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">👥</div>
                    <div className="text-blue-300 font-bold mb-2">User Management</div>
                    <div className="text-white/80 text-sm">User info changes frequently</div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🛒</div>
                    <div className="text-blue-300 font-bold mb-2">E-commerce</div>
                    <div className="text-white/80 text-sm">Product info, prices, inventory updates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-indigo-700'
    },

    {
      id: 'denormalization',
      title: 'Denormalization - Optimizing Performance',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Denormalization</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">⚡</div>
            <h3 className="text-3xl font-bold mb-12">Adding redundancy to optimize for speed</h3>
            
            {/* What is Denormalization */}
            <div className="bg-orange-500/20 backdrop-blur rounded-xl p-8 border-2 border-orange-400 mb-8">
              <h4 className="text-3xl font-bold text-orange-300 mb-6">✨ What is Denormalization?</h4>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-xl text-white mb-4">
                  Adding redundancy to optimize for read performance
                </div>
                <div className="text-lg text-orange-300">
                  Like keeping snacks in multiple rooms - less organized, but faster to grab when hungry!
                </div>
              </div>
            </div>

            {/* Benefits and Drawbacks */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <h4 className="text-3xl font-bold text-green-300 mb-6">✅ Benefits</h4>
                <div className="text-white/80 text-left space-y-4">
                  <div className="bg-green-900/30 rounded-lg p-4">
                    <div className="text-green-200 font-bold mb-2">🚀 Faster Queries</div>
                    <div>No JOINs needed - everything in one place</div>
                  </div>
                  <div className="bg-green-900/30 rounded-lg p-4">
                    <div className="text-green-200 font-bold mb-2">📈 Better Read Performance</div>
                    <div>Optimized for getting data out quickly</div>
                  </div>
                  <div className="bg-green-900/30 rounded-lg p-4">
                    <div className="text-green-200 font-bold mb-2">🎯 Simpler Queries</div>
                    <div>Straightforward data access</div>
                  </div>
                  <div className="bg-green-900/30 rounded-lg p-4">
                    <div className="text-green-200 font-bold mb-2">📊 Great for Analytics</div>
                    <div>Perfect for reporting and dashboards</div>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/20 backdrop-blur rounded-xl p-8 border-2 border-red-400">
                <h4 className="text-3xl font-bold text-red-300 mb-6">❌ Drawbacks</h4>
                <div className="text-white/80 text-left space-y-4">
                  <div className="bg-red-900/30 rounded-lg p-4">
                    <div className="text-red-200 font-bold mb-2">📋 Data Duplication</div>
                    <div>Same info stored in multiple places</div>
                  </div>
                  <div className="bg-red-900/30 rounded-lg p-4">
                    <div className="text-red-200 font-bold mb-2">⚠️ Risk of Inconsistency</div>
                    <div>Updates might not sync everywhere</div>
                  </div>
                  <div className="bg-red-900/30 rounded-lg p-4">
                    <div className="text-red-200 font-bold mb-2">💾 More Storage</div>
                    <div>Duplicated data takes more space</div>
                  </div>
                  <div className="bg-red-900/30 rounded-lg p-4">
                    <div className="text-red-200 font-bold mb-2">🔄 Complex Updates</div>
                    <div>Need to update data in multiple places</div>
                  </div>
                </div>
              </div>
            </div>

            {/* When to Use */}
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-8 border border-orange-400/30">
              <h4 className="text-2xl font-bold text-orange-300 mb-6">🎯 Perfect for These Scenarios</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">📊</div>
                    <div className="text-orange-300 font-bold mb-2">Analytics & Reporting</div>
                    <div className="text-white/80 text-sm">Fast data retrieval for dashboards</div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">📱</div>
                    <div className="text-orange-300 font-bold mb-2">Social Media Feeds</div>
                    <div className="text-white/80 text-sm">Quick loading of user timelines</div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🎮</div>
                    <div className="text-orange-300 font-bold mb-2">Gaming Leaderboards</div>
                    <div className="text-white/80 text-sm">Real-time score displays</div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">📈</div>
                    <div className="text-orange-300 font-bold mb-2">Data Warehouses</div>
                    <div className="text-white/80 text-sm">Optimized for business intelligence</div>
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
      id: 'acid-introduction',
      title: 'ACID Properties - Database Reliability',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">ACID Properties</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">⚗️</div>
            <h3 className="text-3xl font-bold mb-12">The Foundation of Reliable Database Transactions</h3>
            
            {/* What is ACID */}
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 border-2 border-blue-400 mb-8">
              <h4 className="text-3xl font-bold text-blue-300 mb-6">💡 What is ACID?</h4>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-xl text-white mb-4">
                  ACID is a set of four properties that guarantee database transactions are processed reliably
                </div>
                <div className="text-lg text-blue-300">
                  Think of it as the "safety rules" that make sure your database never gets corrupted or loses data
                </div>
              </div>
            </div>

            {/* The Four Properties */}
            <div className="bg-gradient-to-r from-gray-500/20 to-gray-600/20 rounded-xl p-8 border border-gray-400/30 mb-8">
              <h4 className="text-2xl font-bold text-gray-300 mb-6">🔤 What Does ACID Stand For?</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-red-500/20 rounded-lg p-6 border-2 border-red-400">
                  <div className="text-center">
                    <div className="text-5xl mb-3">⚛️</div>
                    <div className="text-red-300 font-bold text-xl mb-2">A</div>
                    <div className="text-white font-bold mb-2">Atomicity</div>
                    <div className="text-white/80 text-sm">"All or Nothing"</div>
                  </div>
                </div>
                
                <div className="bg-blue-500/20 rounded-lg p-6 border-2 border-blue-400">
                  <div className="text-center">
                    <div className="text-5xl mb-3">🎯</div>
                    <div className="text-blue-300 font-bold text-xl mb-2">C</div>
                    <div className="text-white font-bold mb-2">Consistency</div>
                    <div className="text-white/80 text-sm">"Valid States Only"</div>
                  </div>
                </div>
                
                <div className="bg-green-500/20 rounded-lg p-6 border-2 border-green-400">
                  <div className="text-center">
                    <div className="text-5xl mb-3">🔒</div>
                    <div className="text-green-300 font-bold text-xl mb-2">I</div>
                    <div className="text-white font-bold mb-2">Isolation</div>
                    <div className="text-white/80 text-sm">"No Interference"</div>
                  </div>
                </div>
                
                <div className="bg-purple-500/20 rounded-lg p-6 border-2 border-purple-400">
                  <div className="text-center">
                    <div className="text-5xl mb-3">💾</div>
                    <div className="text-purple-300 font-bold text-xl mb-2">D</div>
                    <div className="text-white font-bold mb-2">Durability</div>
                    <div className="text-white/80 text-sm">"Changes Are Permanent"</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why ACID Matters */}
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-8 border border-yellow-400/30 mb-8">
              <h4 className="text-2xl font-bold text-yellow-300 mb-6">🌟 Why ACID Matters</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">💰</div>
                    <div className="text-yellow-300 font-bold mb-2">Financial Systems</div>
                    <div className="text-white/80 text-sm">Money transfers must be completely reliable - no room for errors</div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🛒</div>
                    <div className="text-yellow-300 font-bold mb-2">E-commerce</div>
                    <div className="text-white/80 text-sm">Orders, payments, and inventory must stay in sync</div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">📱</div>
                    <div className="text-yellow-300 font-bold mb-2">Any Critical App</div>
                    <div className="text-white/80 text-sm">User data must be safe and consistent</div>
                  </div>
                </div>
              </div>
            </div>

            {/* What's Coming Next */}
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-8 border border-green-400/30">
              <h4 className="text-2xl font-bold text-green-300 mb-4">🚀 Coming Up Next</h4>
              <div className="text-center">
                <div className="text-lg text-white mb-4">
                  We'll dive deep into each property with real-world examples and practical scenarios
                </div>
                <div className="text-green-300 font-bold">
                  Get ready to understand why ACID makes databases trustworthy! 🎯
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-gray-600 to-blue-700'
    },

    {
      id: 'atomicity',
      title: 'Atomicity - All or Nothing',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Atomicity</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">⚛️</div>
            <h3 className="text-3xl font-bold mb-12">"All or Nothing" - The Foundation of Trust</h3>
            
            {/* Core Concept */}
            <div className="bg-red-500/20 backdrop-blur rounded-xl p-8 border-2 border-red-400 mb-8">
              <h4 className="text-3xl font-bold text-red-300 mb-6">💡 What is Atomicity?</h4>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-xl text-white mb-4">
                  A transaction is like an indivisible unit - either everything happens, or nothing happens
                </div>
                <div className="text-lg text-red-300">
                  Think of it like a recipe: you can't have "half-baked cookies" - they're either done or not done!
                </div>
              </div>
            </div>

            {/* Bank Transfer Example */}
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl p-8 border border-red-400/30 mb-8">
              <h4 className="text-2xl font-bold text-red-300 mb-6">💰 Real-World Example: Bank Transfer</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-red-300 font-bold mb-4 text-center">The Transaction Steps:</div>
                  <div className="space-y-4">
                    <div className="bg-red-900/30 rounded-lg p-4">
                      <div className="text-white font-bold mb-2">Step 1: 💸</div>
                      <div className="text-white/80 text-sm">Subtract $100 from Alice's account</div>
                    </div>
                    <div className="bg-red-900/30 rounded-lg p-4">
                      <div className="text-white font-bold mb-2">Step 2: 💰</div>
                      <div className="text-white/80 text-sm">Add $100 to Bob's account</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-green-900/30 rounded-lg p-4">
                    <div className="text-green-200 font-bold mb-2">✅ Success Scenario:</div>
                    <div className="text-white/80 text-sm">Both steps complete successfully<br/>Alice: -$100, Bob: +$100</div>
                  </div>
                  <div className="bg-red-900/30 rounded-lg p-4">
                    <div className="text-red-200 font-bold mb-2">❌ Failure Scenario:</div>
                    <div className="text-white/80 text-sm">Step 2 fails → Everything rolls back<br/>Alice keeps her $100, Bob gets $0</div>
                  </div>
                  <div className="bg-yellow-900/30 rounded-lg p-4">
                    <div className="text-yellow-200 font-bold mb-2">🚫 Never Happens:</div>
                    <div className="text-white/80 text-sm">Alice loses money but Bob doesn't receive it<br/>This would be a disaster!</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why This Matters */}
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-blue-400/30">
              <h4 className="text-2xl font-bold text-blue-300 mb-6">🎯 Why Atomicity Matters</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🏦</div>
                    <div className="text-blue-300 font-bold mb-2">Banking</div>
                    <div className="text-white/80 text-sm">Money transfers must be complete or not happen at all</div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🛒</div>
                    <div className="text-blue-300 font-bold mb-2">E-commerce</div>
                    <div className="text-white/80 text-sm">Order + payment + inventory update happen together</div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🎫</div>
                    <div className="text-blue-300 font-bold mb-2">Bookings</div>
                    <div className="text-white/80 text-sm">Reserve seat + charge card + send confirmation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-600 to-orange-700'
    },

    {
      id: 'consistency',
      title: 'Consistency - Valid States Only',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Consistency</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🎯</div>
            <h3 className="text-3xl font-bold mb-12">"Valid State Always" - Database Rules Matter</h3>
            
            {/* Core Concept */}
            <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400 mb-8">
              <h4 className="text-3xl font-bold text-blue-300 mb-6">💡 What is Consistency?</h4>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-xl text-white mb-4">
                  The database moves from one valid state to another valid state
                </div>
                <div className="text-lg text-blue-300">
                  Like a referee in sports - enforces the rules and keeps the game fair!
                </div>
              </div>
            </div>

            {/* Database Rules */}
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-8 border border-blue-400/30 mb-8">
              <h4 className="text-2xl font-bold text-blue-300 mb-6">📋 Database Rules (Constraints)</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="bg-blue-900/30 rounded-lg p-4">
                      <div className="text-blue-200 font-bold mb-2">🔒 Primary Keys</div>
                      <div className="text-white/80 text-sm">Must be unique - no duplicates allowed</div>
                    </div>
                    <div className="bg-blue-900/30 rounded-lg p-4">
                      <div className="text-blue-200 font-bold mb-2">🔗 Foreign Keys</div>
                      <div className="text-white/80 text-sm">Must reference existing records</div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="space-y-4">
                    <div className="bg-blue-900/30 rounded-lg p-4">
                      <div className="text-blue-200 font-bold mb-2">✅ Check Constraints</div>
                      <div className="text-white/80 text-sm">Age {'>'} 0, valid email format</div>
                    </div>
                    <div className="bg-blue-900/30 rounded-lg p-4">
                      <div className="text-blue-200 font-bold mb-2">💰 Business Rules</div>
                      <div className="text-white/80 text-sm">Account balance ≥ 0</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* What Consistency Prevents */}
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-8 border border-green-400/30 mb-8">
              <h4 className="text-2xl font-bold text-green-300 mb-6">🛡️ What Consistency Prevents</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-red-300 font-bold mb-4 text-center">❌ Bad Things That Can't Happen</div>
                  <div className="space-y-3 text-white/80 text-sm">
                    <div>🚫 Creating notes for users that don't exist</div>
                    <div>🚫 Having negative account balances</div>
                    <div>🚫 Duplicate email addresses</div>
                    <div>🚫 Invalid data formats</div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-green-300 font-bold mb-4 text-center">✅ Good Things That Are Guaranteed</div>
                  <div className="space-y-3 text-white/80 text-sm">
                    <div>✅ All foreign keys point to real records</div>
                    <div>✅ Business rules are always followed</div>
                    <div>✅ Data formats are always valid</div>
                    <div>✅ Database integrity is maintained</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-World Examples */}
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-8 border border-purple-400/30">
              <h4 className="text-2xl font-bold text-purple-300 mb-6">🌟 Real-World Examples</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🏦</div>
                    <div className="text-purple-300 font-bold mb-2">Banking</div>
                    <div className="text-white/80 text-sm">Account balances can't go negative, transfers must be valid amounts</div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">📚</div>
                    <div className="text-purple-300 font-bold mb-2">School System</div>
                    <div className="text-white/80 text-sm">Students can't enroll in classes that don't exist</div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🛒</div>
                    <div className="text-purple-300 font-bold mb-2">Inventory</div>
                    <div className="text-white/80 text-sm">Can't sell more items than you have in stock</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-cyan-700'
    },

    {
      id: 'isolation',
      title: 'Isolation - No Interference',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Isolation</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🔒</div>
            <h3 className="text-3xl font-bold mb-12">"Transactions Don't Interfere" - Keep Things Separate</h3>
            
            {/* Core Concept */}
            <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400 mb-8">
              <h4 className="text-3xl font-bold text-green-300 mb-6">💡 What is Isolation?</h4>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-xl text-white mb-4">
                  Multiple transactions can run at the same time without interfering with each other
                </div>
                <div className="text-lg text-green-300">
                  Like having separate lanes on a highway - cars can go fast without crashing into each other!
                </div>
              </div>
            </div>

            {/* Visual Representation */}
            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl p-8 border border-green-400/30 mb-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-center space-y-6">
                  <div className="text-xl text-white">
                    <span className="bg-blue-600 px-4 py-2 rounded-lg">Transaction A</span>
                    <span className="mx-4 text-2xl">🚫</span>
                    <span className="bg-purple-600 px-4 py-2 rounded-lg">Transaction B</span>
                  </div>
                  <div className="text-green-300 text-lg">
                    Each transaction works in its own "bubble" until it's complete
                  </div>
                </div>
              </div>
            </div>

            {/* Concert Ticket Example */}
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-8 border border-yellow-400/30 mb-8">
              <h4 className="text-2xl font-bold text-yellow-300 mb-6">🎫 Real-World Example: Concert Tickets</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-red-300 font-bold mb-4 text-center">😱 Without Isolation (Disaster!)</div>
                  <div className="space-y-3 text-white/80 text-sm">
                    <div className="bg-red-900/30 rounded-lg p-3">
                      <div className="font-bold text-red-200">Step 1:</div>
                      <div>Alice and Bob both see "1 seat available"</div>
                    </div>
                    <div className="bg-red-900/30 rounded-lg p-3">
                      <div className="font-bold text-red-200">Step 2:</div>
                      <div>Both click "Buy Now" at the same time</div>
                    </div>
                    <div className="bg-red-900/30 rounded-lg p-3">
                      <div className="font-bold text-red-200">Result:</div>
                      <div>Both think they got the ticket! 🤯</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-green-300 font-bold mb-4 text-center">✅ With Isolation (Perfect!)</div>
                  <div className="space-y-3 text-white/80 text-sm">
                    <div className="bg-green-900/30 rounded-lg p-3">
                      <div className="font-bold text-green-200">Step 1:</div>
                      <div>Alice starts booking → seat gets locked 🔒</div>
                    </div>
                    <div className="bg-green-900/30 rounded-lg p-3">
                      <div className="font-bold text-green-200">Step 2:</div>
                      <div>Bob waits until Alice finishes</div>
                    </div>
                    <div className="bg-green-900/30 rounded-lg p-3">
                      <div className="font-bold text-green-200">Result:</div>
                      <div>Bob sees "0 seats available" 🎯</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Why This Matters */}
            <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-8 border border-purple-400/30">
              <h4 className="text-2xl font-bold text-purple-300 mb-6">🎯 Why Isolation Matters</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🏪</div>
                    <div className="text-purple-300 font-bold mb-2">Inventory</div>
                    <div className="text-white/80 text-sm">Can't oversell products when multiple people buy simultaneously</div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">💰</div>
                    <div className="text-purple-300 font-bold mb-2">Banking</div>
                    <div className="text-white/80 text-sm">ATM withdrawals don't interfere with each other</div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">📱</div>
                    <div className="text-purple-300 font-bold mb-2">Social Media</div>
                    <div className="text-white/80 text-sm">Like counts stay accurate even with many simultaneous likes</div>
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
      id: 'durability',
      title: 'Durability - Changes Are Permanent',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Durability</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">💾</div>
            <h3 className="text-3xl font-bold mb-12">"Changes Are Permanent" - No Data Loss Ever</h3>
            
            {/* Core Concept */}
            <div className="bg-purple-500/20 backdrop-blur rounded-xl p-8 border-2 border-purple-400 mb-8">
              <h4 className="text-3xl font-bold text-purple-300 mb-6">💡 What is Durability?</h4>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-xl text-white mb-4">
                  Once a transaction is committed, the changes are saved permanently
                </div>
                <div className="text-lg text-purple-300">
                  Like writing with permanent ink - even if the power goes out, your data stays safe!
                </div>
              </div>
            </div>

            {/* What Durability Protects Against */}
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-8 border border-purple-400/30 mb-8">
              <h4 className="text-2xl font-bold text-purple-300 mb-6">🛡️ What Durability Protects Against</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-red-300 font-bold mb-4 text-center">⚡ Disasters That Don't Matter</div>
                  <div className="space-y-3">
                    <div className="bg-purple-900/30 rounded-lg p-3">
                      <div className="text-purple-200 font-bold mb-2">🔌 Power Outages</div>
                      <div className="text-white/80 text-sm">Your transaction survives electricity loss</div>
                    </div>
                    <div className="bg-purple-900/30 rounded-lg p-3">
                      <div className="text-purple-200 font-bold mb-2">💻 System Crashes</div>
                      <div className="text-white/80 text-sm">Computer restarts don't lose your data</div>
                    </div>
                    <div className="bg-purple-900/30 rounded-lg p-3">
                      <div className="text-purple-200 font-bold mb-2">🔧 Hardware Failures</div>
                      <div className="text-white/80 text-sm">Broken hard drives don't destroy transactions</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-green-300 font-bold mb-4 text-center">✅ Your Data is Always Safe</div>
                  <div className="space-y-3">
                    <div className="bg-purple-900/30 rounded-lg p-3">
                      <div className="text-purple-200 font-bold mb-2">💾 Permanent Storage</div>
                      <div className="text-white/80 text-sm">Written to disk, not just memory</div>
                    </div>
                    <div className="bg-purple-900/30 rounded-lg p-3">
                      <div className="text-purple-200 font-bold mb-2">📝 Transaction Logs</div>
                      <div className="text-white/80 text-sm">Every change is recorded first</div>
                    </div>
                    <div className="bg-purple-900/30 rounded-lg p-3">
                      <div className="text-purple-200 font-bold mb-2">🔄 Recovery Systems</div>
                      <div className="text-white/80 text-sm">Can rebuild from logs after crashes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works Technically */}
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-blue-400/30 mb-8">
              <h4 className="text-2xl font-bold text-blue-300 mb-6">⚙️ How Durability Works</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-blue-300 font-bold mb-4 text-center">🗂️ Write-Ahead Logging</div>
                  <div className="space-y-3 text-white/80 text-sm">
                    <div>1. 📝 Write the change to a log file first</div>
                    <div>2. 💾 Then apply the change to the database</div>
                    <div>3. ✅ Only then say "transaction complete"</div>
                    <div className="text-blue-300 text-center mt-3">If crash happens, replay the log!</div>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-blue-300 font-bold mb-4 text-center">📦 Backup Systems</div>
                  <div className="space-y-3 text-white/80 text-sm">
                    <div>📅 Regular database snapshots</div>
                    <div>🔄 Continuous replication to other servers</div>
                    <div>☁️ Cloud backups for extra safety</div>
                    <div className="text-blue-300 text-center mt-3">Multiple layers of protection!</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-World Examples */}
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-8 border border-yellow-400/30">
              <h4 className="text-2xl font-bold text-yellow-300 mb-6">🌟 Real-World Examples</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">💳</div>
                    <div className="text-yellow-300 font-bold mb-2">Credit Cards</div>
                    <div className="text-white/80 text-sm">Your purchase is recorded forever, even if the store's power goes out</div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">📱</div>
                    <div className="text-yellow-300 font-bold mb-2">Social Media</div>
                    <div className="text-white/80 text-sm">Your posts and photos are safe even during server outages</div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🎓</div>
                    <div className="text-yellow-300 font-bold mb-2">School Records</div>
                    <div className="text-white/80 text-sm">Your grades are permanently recorded and can't be lost</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-pink-700'
    },

    {
      id: 'the-problem',
      title: 'The Problem',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">The Problem</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">⚠️</div>
            <h3 className="text-3xl font-bold mb-12">Modern apps = billions of users, messy unstructured data, massive scale</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Billions of Users */}
              <div className="bg-red-500/20 backdrop-blur rounded-xl p-8 border-2 border-red-400">
                <div className="text-6xl mb-6">👥</div>
                <h4 className="text-2xl font-bold text-red-300 mb-4">Billions of Users</h4>
                <div className="space-y-3 text-white/80 text-left text-lg">
                  <div>• Facebook: 3+ billion users</div>
                  <div>• Instagram: 2+ billion users</div>
                  <div>• YouTube: 2.7+ billion users</div>
                  <div>• Traditional databases struggle</div>
                </div>
              </div>

              {/* Messy Data */}
              <div className="bg-orange-500/20 backdrop-blur rounded-xl p-8 border-2 border-orange-400">
                <div className="text-6xl mb-6">🗃️</div>
                <h4 className="text-2xl font-bold text-orange-300 mb-4">Messy Unstructured Data</h4>
                <div className="space-y-3 text-white/80 text-left text-lg">
                  <div>• Photos, videos, documents</div>
                  <div>• JSON objects of varying shapes</div>
                  <div>• User-generated content</div>
                  <div>• No fixed schema requirements</div>
                </div>
              </div>

              {/* Massive Scale */}
              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-8 border-2 border-purple-400">
                <div className="text-6xl mb-6">📈</div>
                <h4 className="text-2xl font-bold text-purple-300 mb-4">Massive Scale</h4>
                <div className="space-y-3 text-white/80 text-left text-lg">
                  <div>• Millions of requests per second</div>
                  <div>• Petabytes of data</div>
                  <div>• Global distribution needed</div>
                  <div>• 24/7 availability required</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl p-8 border border-red-400/30 mb-8">
              <h4 className="text-3xl font-bold text-red-300 mb-6">💥 ACID's Problem</h4>
              <div className="text-white/90 text-xl space-y-4">
                <div>
                  <span className="text-blue-300 font-bold">ACID</span> means: every write must be 
                  <span className="text-red-300 font-bold"> consistent immediately</span> → 
                  <span className="text-orange-300 font-bold"> slow</span> across global, distributed systems.
                </div>
                <div className="text-lg text-white/70">
                  Schema migrations = painful when you have billions of records.
                </div>
              </div>
            </div>


          </div>
        </div>
      ),
      bgGradient: 'from-red-600 to-orange-700'
    },

    {
      id: 'why-nosql-emerged',
      title: 'Why NoSQL Emerged',
            content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Why NoSQL Emerged</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">💥</div>
            <h3 className="text-3xl font-bold mb-12">Web 2.0 broke traditional databases</h3>
            
            <div className="space-y-8">
              {/* Web 2.0 Changes */}
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-blue-400/30">
                <h4 className="text-3xl font-bold text-blue-300 mb-6">🌐 What Changed in the 2000s</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/10 rounded-lg p-6">
                    <div className="text-4xl mb-3">👥</div>
                    <div className="text-white font-bold mb-2">Billions of Users</div>
                    <div className="text-white/70 text-sm">
                      Facebook, YouTube, Twitter<br/>
                      Everyone creates content
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6">
                    <div className="text-4xl mb-3">📊</div>
                    <div className="text-white font-bold mb-2">Massive Data</div>
                    <div className="text-white/70 text-sm">
                      Photos, videos, posts<br/>
                      Petabytes every day
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6">
                    <div className="text-4xl mb-3">⚡</div>
                    <div className="text-white font-bold mb-2">Need Speed</div>
                    <div className="text-white/70 text-sm">
                      Instant responses<br/>
                      Real-time updates
                    </div>
                  </div>
                </div>
              </div>

              {/* SQL Problems */}
              <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl p-8 border border-red-400/30">
                <h4 className="text-3xl font-bold text-red-300 mb-6">🚫 SQL Couldn't Handle It</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-lg p-6">
                    <h5 className="text-xl font-bold text-red-300 mb-3">🔒 Fixed Structure</h5>
                    <div className="text-white/80">
                      Every user must have exact same fields.<br/>
                      Adding new features = website downtime.
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6">
                    <h5 className="text-xl font-bold text-red-300 mb-3">🐌 Too Slow</h5>
                    <div className="text-white/80">
                      ACID rules slow everything down.<br/>
                      Perfect consistency kills speed.
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6">
                    <h5 className="text-xl font-bold text-red-300 mb-3">💸 Expensive</h5>
                    <div className="text-white/80">
                      Need massive expensive servers.<br/>
                      Oracle licenses cost millions.
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6">
                    <h5 className="text-xl font-bold text-red-300 mb-3">📈 Can't Scale</h5>
                    <div className="text-white/80">
                      Only way to grow = buy bigger server.<br/>
                      Eventually you hit physical limits.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-purple-700'
    },

    {
      id: 'what-nosql-does-differently',
      title: 'What NoSQL Does Differently',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">What NoSQL Does Differently</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🔄</div>
            <h3 className="text-3xl font-bold mb-12">A completely different approach to data</h3>
            
            <div className="space-y-8">
              {/* Schema Flexibility */}
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-8 border border-green-400/30">
                <h4 className="text-3xl font-bold text-green-300 mb-6">📋 Schema Flexibility</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-red-500/10 rounded-lg p-6 border border-red-400/30">
                    <h5 className="text-xl font-bold text-red-300 mb-4">❌ SQL Approach</h5>
                    <div className="bg-gray-800 rounded p-4 mb-4">
                      <div className="text-white font-mono text-sm">
                        <div>CREATE TABLE users (</div>
                        <div>  id INT,</div>
                        <div>  name VARCHAR(50),</div>
                        <div>  email VARCHAR(100)</div>
                        <div>);</div>
                      </div>
                    </div>
                    <div className="text-white/70 text-sm">
                      • Must define structure upfront<br/>
                      • All records must match exactly<br/>
                      • Changes require ALTER TABLE
                    </div>
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-6 border border-green-400/30">
                    <h5 className="text-xl font-bold text-green-300 mb-4">✅ NoSQL Approach</h5>
                    <div className="bg-gray-800 rounded p-4 mb-4">
                      <div className="text-white font-mono text-sm">
                        <div>&#123; "name": "Alice", "email": "..." &#125;</div>
                        <div>&#123; "name": "Bob", "age": 25 &#125;</div>
                        <div>&#123; "name": "Carol", "hobbies": [...] &#125;</div>
                      </div>
                    </div>
                    <div className="text-white/70 text-sm">
                      • No predefined schema<br/>
                      • Each record can be different<br/>
                      • Add fields anytime, anywhere
                    </div>
                  </div>
                </div>
          </div>
          
              {/* Horizontal Scaling */}
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-8 border border-blue-400/30">
                <h4 className="text-3xl font-bold text-blue-300 mb-6">↔️ Horizontal Scaling</h4>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-red-500/10 rounded-lg p-6 border border-red-400/30">
                    <h5 className="text-xl font-bold text-red-300 mb-4">❌ SQL: Scale Up (Vertical)</h5>
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">🖥️</div>
                      <div className="text-white font-bold">One Big Server</div>
                    </div>
                    <div className="text-white/70 text-sm text-center">
                      • Buy more RAM, faster CPU<br/>
                      • Expensive & has limits<br/>
                      • Single point of failure
                    </div>
                  </div>
                  <div className="bg-green-500/10 rounded-lg p-6 border border-green-400/30">
                    <h5 className="text-xl font-bold text-green-300 mb-4">✅ NoSQL: Scale Out (Horizontal)</h5>
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">🖥️🖥️🖥️</div>
                      <div className="text-white font-bold">Many Small Servers</div>
                    </div>
                    <div className="text-white/70 text-sm text-center">
                      • Add more cheap servers<br/>
                      • Virtually unlimited scaling<br/>
                      • Built-in redundancy
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Models */}
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-8 border border-purple-400/30">
                <h4 className="text-3xl font-bold text-purple-300 mb-6">🗂️ Different Data Models</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white/10 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-3">📄</div>
                    <div className="text-white font-bold mb-2">Document</div>
                    <div className="text-white/70 text-xs">MongoDB<br/>JSON-like objects</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-3">🔑</div>
                    <div className="text-white font-bold mb-2">Key-Value</div>
                    <div className="text-white/70 text-xs">Redis<br/>Simple pairs</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-3">📊</div>
                    <div className="text-white font-bold mb-2">Column</div>
                    <div className="text-white/70 text-xs">Cassandra<br/>Wide columns</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-3">🕸️</div>
                    <div className="text-white font-bold mb-2">Graph</div>
                    <div className="text-white/70 text-xs">Neo4j<br/>Relationships</div>
                  </div>
                </div>
              </div>

              {/* Performance Focus */}
              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-8 border border-orange-400/30">
                <h4 className="text-3xl font-bold text-orange-300 mb-6">⚡ Performance Over Perfection</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center bg-white/10 rounded-lg p-6">
                    <div className="text-4xl mb-3">🏃‍♂️</div>
                    <div className="text-white font-bold mb-2">Speed First</div>
                    <div className="text-white/70 text-sm">Millisecond responses more important than perfect consistency</div>
                  </div>
                  <div className="text-center bg-white/10 rounded-lg p-6">
                    <div className="text-4xl mb-3">🌍</div>
                    <div className="text-white font-bold mb-2">Global Distribution</div>
                    <div className="text-white/70 text-sm">Data replicated worldwide for local access</div>
                  </div>
                  <div className="text-center bg-white/10 rounded-lg p-6">
                    <div className="text-4xl mb-3">📱</div>
                    <div className="text-white font-bold mb-2">User Experience</div>
                    <div className="text-white/70 text-sm">Apps feel instant and responsive</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-blue-700'
    },

    {
      id: 'enter-nosql',
      title: 'More on NoSQL',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">More on NoSQL</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🚀</div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/30 mb-8">
              <h3 className="text-3xl font-bold text-yellow-300 mb-6">📝 What NoSQL Really Means</h3>
              <div className="text-5xl font-bold text-white mb-4">
                <span className="text-blue-300">Not</span> <span className="text-green-300">Only</span> <span className="text-purple-300">SQL</span>
              </div>
              <p className="text-white/70 text-xl">A new philosophy: trade some consistency for massive scale and speed</p>
            </div>
            
            <h3 className="text-3xl font-bold mb-12">The great tradeoff: ACID vs BASE</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* ACID - The Old Way */}
              <div className="bg-red-500/20 backdrop-blur rounded-xl p-8 border-2 border-red-400">
                <div className="text-6xl mb-6">🏛️</div>
                <h4 className="text-2xl font-bold text-red-300 mb-4">ACID: The Old Way</h4>
                <div className="space-y-3 text-white/80 text-left text-lg">
                  <div>• <strong>A</strong>tomicity: All or nothing</div>
                  <div>• <strong>C</strong>onsistency: Always perfect</div>
                  <div>• <strong>I</strong>solation: One thing at a time</div>
                  <div>• <strong>D</strong>urability: Never lose data</div>
                  </div>
                <div className="mt-4 bg-red-900/30 rounded-lg p-4">
                  <div className="text-red-200 text-sm text-center">
                    Perfect for banks, but slow for billions of users
                </div>
                </div>
              </div>

              {/* BASE - The New Way */}
              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <div className="text-6xl mb-6">⚡</div>
                <h4 className="text-2xl font-bold text-green-300 mb-4">BASE: The New Way</h4>
                <div className="space-y-3 text-white/80 text-left text-lg">
                  <div>• <strong>B</strong>asically Available: Usually works</div>
                  <div>• <strong>S</strong>oft state: Data flows and changes</div>
                  <div>• <strong>E</strong>ventually consistent: Sync... eventually</div>
                  </div>
                <div className="mt-4 bg-green-900/30 rounded-lg p-4">
                  <div className="text-green-200 text-sm text-center">
                    Perfect for web apps that need speed and scale
                </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-blue-400/30 mb-8">
              <h4 className="text-3xl font-bold text-blue-300 mb-6">🎯 When Would You Choose Each?</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 rounded-lg p-6">
                  <h5 className="text-xl font-bold text-red-300 mb-4">🏦 Choose ACID (SQL) When:</h5>
                  <div className="text-white/80 space-y-2 text-sm">
                    <div>• Money is involved (banking, payments)</div>
                    <div>• Perfect accuracy is critical</div>
                    <div>• Compliance and regulations matter</div>
                    <div>• Complex relationships between data</div>
                </div>
              </div>
                
                <div className="bg-white/10 rounded-lg p-6">
                  <h5 className="text-xl font-bold text-green-300 mb-4">📱 Choose BASE (NoSQL) When:</h5>
                  <div className="text-white/80 space-y-2 text-sm">
                    <div>• Speed and scale are priority</div>
                    <div>• Social media, content, analytics</div>
                    <div>• Data structure keeps changing</div>
                    <div>• Global users need fast access</div>
                  </div>
                </div>
                  </div>
                </div>

            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <h4 className="text-xl font-bold text-yellow-300 mb-4">💡 The Big Idea</h4>
              <p className="text-white/90 text-lg">
                NoSQL says: <strong className="text-green-300">"Good enough, fast, and always available"</strong> 
                beats <strong className="text-red-300">"perfect, slow, and sometimes broken"</strong> for most modern apps.
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-700'
    },

    {
      id: 'basically-available',
      title: 'Basically Available',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Basically Available</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🏢</div>
            <h3 className="text-3xl font-bold mb-12">System stays operational even during failures</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* What it means */}
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400">
                <div className="text-6xl mb-6">🎯</div>
                <h4 className="text-2xl font-bold text-blue-300 mb-4">What "Basically Available" Means</h4>
                <div className="space-y-3 text-white/80 text-left text-lg">
                  <div>• System stays up even when parts fail</div>
                  <div>• Some features might be degraded</div>
                  <div>• Core functionality always works</div>
                  <div>• 99.9% uptime instead of 100%</div>
                  <div>• Graceful degradation under load</div>
                </div>
              </div>
              
              {/* Real world analogy */}
              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <div className="text-6xl mb-6">🏪</div>
                <h4 className="text-2xl font-bold text-green-300 mb-4">Real-World Analogy</h4>
                <div className="space-y-4 text-white/80">
                  <div className="bg-green-900/50 rounded-lg p-4">
                    <div className="text-green-200 font-bold mb-2">🏬 Walmart during Black Friday:</div>
                    <div className="text-white/90 text-sm space-y-1">
                      <div>• Store stays open (basically available)</div>
                      <div>• Some checkout lanes might be broken</div>
                      <div>• Self-checkout might be slow</div>
                      <div>• But you can still buy what you need!</div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-blue-400/30 mb-8">
              <h4 className="text-3xl font-bold text-blue-300 mb-6">🌐 Twitter During High Traffic</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center bg-green-500/20 rounded-lg p-4">
                  <div className="text-3xl mb-2">✅</div>
                  <div className="text-green-300 font-bold text-sm mb-1">Timeline Loads</div>
                  <div className="text-white/70 text-xs">Core feature works</div>
                </div>
                <div className="text-center bg-yellow-500/20 rounded-lg p-4">
                  <div className="text-3xl mb-2">⏳</div>
                  <div className="text-yellow-300 font-bold text-sm mb-1">Like Counts Delayed</div>
                  <div className="text-white/70 text-xs">Minor degradation</div>
                </div>
                <div className="text-center bg-orange-500/20 rounded-lg p-4">
                  <div className="text-3xl mb-2">🐌</div>
                  <div className="text-orange-300 font-bold text-sm mb-1">Images Load Slowly</div>
                  <div className="text-white/70 text-xs">Performance impact</div>
                </div>
                <div className="text-center bg-green-500/20 rounded-lg p-4">
                  <div className="text-3xl mb-2">📝</div>
                  <div className="text-green-300 font-bold text-sm mb-1">Can Still Tweet</div>
                  <div className="text-white/70 text-xs">Essential works</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl p-8 border border-red-400/30 mb-8">
              <h4 className="text-2xl font-bold text-red-300 mb-6">⚖️ ACID vs BASE: Availability</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <h5 className="text-xl font-bold text-red-300 mb-4">❌ ACID Approach</h5>
                  <div className="text-white/80 space-y-2 text-sm">
                    <div>• If any part fails, whole system goes down</div>
                    <div>• "All or nothing" mentality</div>
                    <div>• Users see error pages</div>
                    <div>• Perfect consistency, but no availability</div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6">
                  <h5 className="text-xl font-bold text-green-300 mb-4">✅ BASE Approach</h5>
                  <div className="text-white/80 space-y-2 text-sm">
                    <div>• System stays up even with failures</div>
                    <div>• Degrade gracefully</div>
                    <div>• Users can still do main tasks</div>
                    <div>• Availability over perfect consistency</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <h4 className="text-xl font-bold text-yellow-300 mb-4">💡 Key Insight</h4>
              <p className="text-white/90 text-lg">
                <strong className="text-green-300">"Basically Available"</strong> means your app works 
                <strong className="text-blue-300"> most of the time</strong> instead of being 
                <strong className="text-red-300"> perfect all the time</strong> (but often broken).
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-cyan-700'
    },

    {
      id: 'soft-state',
      title: 'Soft State',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Soft State</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🌊</div>
            <h3 className="text-3xl font-bold mb-12">Data can change over time without user input</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* What it means */}
              <div className="bg-orange-500/20 backdrop-blur rounded-xl p-8 border-2 border-orange-400">
                <div className="text-6xl mb-6">🎯</div>
                <h4 className="text-2xl font-bold text-orange-300 mb-4">What "Soft State" Means</h4>
                <div className="space-y-3 text-white/80 text-left text-lg">
                  <div>• Data changes without user doing anything</div>
                  <div>• System actively works to sync data</div>
                  <div>• No guarantee of immediate consistency</div>
                  <div>• State "flows" and updates over time</div>
                  <div>• Opposite of "hard" unchanging state</div>
              </div>
            </div>

              {/* Real world analogy */}
              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-8 border-2 border-purple-400">
                <div className="text-6xl mb-6">🌡️</div>
                <h4 className="text-2xl font-bold text-purple-300 mb-4">Real-World Analogy</h4>
                <div className="space-y-4 text-white/80">
                  <div className="bg-purple-900/50 rounded-lg p-4">
                    <div className="text-purple-200 font-bold mb-2">🌡️ Room temperature:</div>
                    <div className="text-white/90 text-sm space-y-1">
                      <div>• You don't manually change it</div>
                      <div>• But it changes throughout the day</div>
                      <div>• Sun warms it up, night cools it down</div>
                      <div>• Always "soft" - always adjusting</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-xl p-8 border border-orange-400/30 mb-8">
              <h4 className="text-3xl font-bold text-orange-300 mb-6">📊 YouTube View Counts</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center bg-white/10 rounded-lg p-6">
                  <div className="text-4xl mb-3">👀</div>
                  <div className="text-white font-bold mb-2">10:00 AM</div>
                  <div className="text-orange-300 text-2xl font-bold mb-2">1,000 views</div>
                  <div className="text-white/70 text-sm">You see this number</div>
                </div>
                <div className="text-center bg-white/10 rounded-lg p-6">
                  <div className="text-4xl mb-3">🔄</div>
                  <div className="text-white font-bold mb-2">10:01 AM</div>
                  <div className="text-orange-300 text-2xl font-bold mb-2">1,250 views</div>
                  <div className="text-white/70 text-sm">You refresh - it changed!</div>
                </div>
                <div className="text-center bg-white/10 rounded-lg p-6">
                  <div className="text-4xl mb-3">⚙️</div>
                  <div className="text-white font-bold mb-2">Behind the scenes</div>
                  <div className="text-orange-300 text-sm font-bold mb-2">System processing</div>
                  <div className="text-white/70 text-sm">Nobody manually updated it</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl p-8 border border-red-400/30 mb-8">
              <h4 className="text-2xl font-bold text-red-300 mb-6">⚖️ Hard State vs Soft State</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <h5 className="text-xl font-bold text-red-300 mb-4">🔒 Hard State (ACID)</h5>
                  <div className="text-white/80 space-y-2 text-sm">
                    <div>• Data only changes when user acts</div>
                    <div>• Stays exactly the same until modified</div>
                    <div>• Like a bank balance: $1000 is $1000</div>
                    <div>• Predictable but rigid</div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6">
                  <h5 className="text-xl font-bold text-green-300 mb-4">🌊 Soft State (BASE)</h5>
                  <div className="text-white/80 space-y-2 text-sm">
                    <div>• Data changes as system processes updates</div>
                    <div>• Constantly flowing and adjusting</div>
                    <div>• Like Instagram likes: always updating</div>
                    <div>• Dynamic and responsive</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <h4 className="text-xl font-bold text-yellow-300 mb-4">💡 Key Insight</h4>
              <p className="text-white/90 text-lg">
                <strong className="text-orange-300">"Soft State"</strong> means your data is 
                <strong className="text-green-300"> alive and changing</strong> as the system works, 
                not <strong className="text-red-300"> frozen until someone manually updates it</strong>.
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-orange-600 to-yellow-700'
    },

    {
      id: 'eventually-consistent',
      title: 'Eventually Consistent',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Eventually Consistent</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">⏰</div>
            <h3 className="text-3xl font-bold mb-12">All servers will have the same data... eventually</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* What it means */}
              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-8 border-2 border-purple-400">
                <div className="text-6xl mb-6">🎯</div>
                <h4 className="text-2xl font-bold text-purple-300 mb-4">What "Eventually Consistent" Means</h4>
                <div className="space-y-3 text-white/80 text-left text-lg">
                  <div>• All servers will sync... given enough time</div>
                  <div>• Might take seconds, minutes, or hours</div>
                  <div>• No locks or waiting for confirmation</div>
                  <div>• Optimized for speed over immediate consistency</div>
                  <div>• "Good enough" consistency</div>
                </div>
              </div>

              {/* Real world analogy */}
              <div className="bg-pink-500/20 backdrop-blur rounded-xl p-8 border-2 border-pink-400">
                <div className="text-6xl mb-6">📰</div>
                <h4 className="text-2xl font-bold text-pink-300 mb-4">Real-World Analogy</h4>
                <div className="space-y-4 text-white/80">
                  <div className="bg-pink-900/50 rounded-lg p-4">
                    <div className="text-pink-200 font-bold mb-2">📰 Breaking news spreading:</div>
                    <div className="text-white/90 text-sm space-y-1">
                      <div>• News breaks in New York at 9 AM</div>
                      <div>• London hears about it at 9:05 AM</div>
                      <div>• Tokyo gets it at 9:10 AM</div>
                      <div>• Eventually everyone knows</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-8 border border-purple-400/30 mb-8">
              <h4 className="text-3xl font-bold text-purple-300 mb-6">💬 WhatsApp Message Delivery</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center bg-white/10 rounded-lg p-6">
                  <div className="text-4xl mb-3">📱</div>
                  <div className="text-white font-bold mb-2">You Send</div>
                  <div className="text-purple-300 text-sm font-bold mb-2">0.1 seconds</div>
                  <div className="text-white/70 text-xs">"Hey, what's up?"</div>
                </div>
                <div className="text-center bg-white/10 rounded-lg p-6">
                  <div className="text-4xl mb-3">🇺🇸</div>
                  <div className="text-white font-bold mb-2">Friend in US</div>
                  <div className="text-green-300 text-sm font-bold mb-2">0.2 seconds</div>
                  <div className="text-white/70 text-xs">Sees message immediately</div>
                </div>
                <div className="text-center bg-white/10 rounded-lg p-6">
                  <div className="text-4xl mb-3">🇯🇵</div>
                  <div className="text-white font-bold mb-2">Friend in Japan</div>
                  <div className="text-yellow-300 text-sm font-bold mb-2">2.0 seconds</div>
                  <div className="text-white/70 text-xs">Sees it a bit later</div>
              </div>
                <div className="text-center bg-white/10 rounded-lg p-6">
                  <div className="text-4xl mb-3">🌍</div>
                  <div className="text-white font-bold mb-2">All Servers</div>
                  <div className="text-blue-300 text-sm font-bold mb-2">Eventually</div>
                  <div className="text-white/70 text-xs">Everyone has same data</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl p-8 border border-red-400/30 mb-8">
              <h4 className="text-2xl font-bold text-red-300 mb-6">⚖️ Immediate vs Eventual Consistency</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <h5 className="text-xl font-bold text-red-300 mb-4">🔒 Immediate Consistency (ACID)</h5>
                  <div className="text-white/80 space-y-2 text-sm">
                    <div>• Wait for ALL servers to update</div>
                    <div>• User waits 2-10 seconds</div>
                    <div>• Perfect consistency everywhere</div>
                    <div>• But slow and can fail completely</div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6">
                  <h5 className="text-xl font-bold text-green-300 mb-4">⏰ Eventual Consistency (BASE)</h5>
                  <div className="text-white/80 space-y-2 text-sm">
                    <div>• Update local server immediately</div>
                    <div>• User gets instant response</div>
                    <div>• Other servers catch up later</div>
                    <div>• Fast and reliable</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <h4 className="text-xl font-bold text-yellow-300 mb-4">💡 Key Insight</h4>
              <p className="text-white/90 text-lg">
                <strong className="text-purple-300">"Eventually Consistent"</strong> means 
                <strong className="text-green-300"> everyone will agree on the data</strong>, 
                but they don't have to <strong className="text-red-300"> wait for each other</strong> first.
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-pink-700'
    },











    {
      id: 'closing-message',
      title: 'Have a Great Week!',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Have a Great Rest of Your Day!</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-8xl mb-8 animate-float">👋</div>
            
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-blue-400/30 mb-8">
              <div className="text-6xl mb-6">📧</div>
              <h3 className="text-3xl font-bold mb-6">Extra Credit Reminder</h3>
              <p className="text-white/90 text-xl leading-relaxed">
                Remember to have <strong>one person from your pair</strong> send me an email for the extra credit!
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-purple-700'
    },


  ];

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      const slideElements = document.querySelectorAll('[data-slide-index]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = slideElements.length - 1; i >= 0; i--) {
        const slideElement = slideElements[i];
        if (slideElement && slideElement.offsetTop <= scrollPosition) {
          setCurrentSlide(i);
          break;
        }
      }
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

export default Class4Slides; 