import React, { useEffect, useState } from 'react';
import trolleyImage from './trolley.png';
import shipImage from './ship.png';
import experienceImage from './experience.png';

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

const Class10Slides = () => {
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
              Class 10: Introduction to MongoDB
            </div>
          </div>
          
          <div className="mt-16">
            <div className="text-2xl font-medium text-white">Tanay Gondil</div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-emerald-700'
    },

    // Slide 2: The Trolley Problem
    {
      id: 'trolley-problem',
      title: 'The Trolley Problem',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-5xl font-extrabold mb-12">The Trolley Problem</h2>
            
            <div className="flex justify-center mb-12">
              <img 
                src={trolleyImage} 
                alt="Trolley Problem Illustration" 
                className="w-2/3 rounded-lg shadow-2xl"
              />
            </div>

            <div className="text-3xl font-bold leading-relaxed">
              A trolley is about to hit five people. You can pull a lever to divert it onto another track where it will kill one person.
              <br/><br/>
              <span className="text-yellow-300">Do you pull the lever?</span>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-600 to-orange-600'
    },

    // Slide 3: The Ship of Theseus
    {
      id: 'ship-of-theseus',
      title: 'The Ship of Theseus',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-5xl font-extrabold mb-12">The Ship of Theseus</h2>
            
            <div className="flex justify-center mb-12">
              <img 
                src={shipImage} 
                alt="Ship of Theseus Illustration" 
                className="w-2/3 rounded-lg shadow-2xl"
              />
            </div>

            <div className="text-3xl font-bold leading-relaxed">
              If you replace every plank of a ship over time, piece by piece...
              <br/><br/>
              <span className="text-yellow-300">Is it still the same ship?</span>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-cyan-600'
    },

    // Slide 4: The Experience Machine
    {
      id: 'experience-machine',
      title: 'The Experience Machine',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-5xl font-extrabold mb-12">The Experience Machine</h2>
            
            <div className="flex justify-center mb-12">
              <img 
                src={experienceImage} 
                alt="Experience Machine Illustration" 
                className="w-2/3 rounded-lg shadow-2xl"
              />
            </div>

            <div className="text-3xl font-bold leading-relaxed">
              You can plug into a machine that gives you a perfect life, but it's all simulated. You'll feel like you're living your dream life, but none of it is real.
              <br/><br/>
              <span className="text-yellow-300">Would you plug in?</span>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-pink-600'
    },

    // Slide 5: SQL Databases Recap
    {
      id: 'sql-recap',
      title: 'Quick Recap: SQL Databases',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">🏛️</div>
            <h2 className="text-4xl font-extrabold mb-4">SQL Databases Recap</h2>
            <p className="text-xl text-white/80">The traditional approach to data storage</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-blue-300 mb-6 text-center">What is SQL?</h3>
              <div className="text-xl text-center mb-6">
                <strong className="text-yellow-300">Structured Query Language</strong> - A language for managing data in <strong className="text-green-300">relational databases</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400">
                <h3 className="text-2xl font-bold text-blue-300 mb-6">📊 Key Concepts</h3>
                <div className="space-y-4">
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">Tables (Relations)</div>
                    <div className="text-blue-200 text-sm">Data organized in rows and columns</div>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">Rows (Records)</div>
                    <div className="text-blue-200 text-sm">Individual entries in a table</div>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">Columns (Fields)</div>
                    <div className="text-blue-200 text-sm">Attributes of each record</div>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">Schema</div>
                    <div className="text-blue-200 text-sm">Fixed structure defined upfront</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border border-green-400">
                <h3 className="text-2xl font-bold text-green-300 mb-6">🔗 Relationships</h3>
                <div className="space-y-4">
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">Primary Keys</div>
                    <div className="text-green-200 text-sm">Unique identifier for each row</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">Foreign Keys</div>
                    <div className="text-green-200 text-sm">References to other tables</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">JOINs</div>
                    <div className="text-green-200 text-sm">Combine data from multiple tables</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">Normalization</div>
                    <div className="text-green-200 text-sm">Reduce data redundancy</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-400/30">
              <div className="text-2xl font-bold text-purple-300 mb-4 text-center">💼 Popular SQL Databases</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">🐬</div>
                  <div className="font-bold">MySQL</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🐘</div>
                  <div className="font-bold">PostgreSQL</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🗄️</div>
                  <div className="font-bold">SQL Server</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="font-bold">Oracle</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-indigo-600'
    },

    // Slide 3: ACID Properties
    {
      id: 'acid-properties',
      title: 'ACID Properties',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">🔒</div>
            <h2 className="text-4xl font-extrabold mb-4">ACID Properties</h2>
            <p className="text-xl text-white/80">Guarantees for reliable database transactions</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <div className="text-xl text-center">
                ACID ensures <strong className="text-yellow-300">data integrity</strong> and <strong className="text-green-300">reliability</strong> in SQL databases
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-500/20 rounded-xl p-8 border-2 border-blue-400">
                <div className="flex items-center mb-4">
                  <div className="text-5xl mr-4">🅰️</div>
                  <div>
                    <h3 className="text-3xl font-bold text-blue-300">Atomicity</h3>
                    <div className="text-blue-200 text-sm">All or Nothing</div>
                  </div>
                </div>
                <div className="text-white mb-4">
                  A transaction either completes <strong>entirely</strong> or not at all. If any part fails, the entire transaction is rolled back.
                </div>
                <div className="bg-blue-600/30 rounded-lg p-4">
                  <div className="text-sm font-bold mb-2">💡 Example:</div>
                  <div className="text-blue-200 text-sm">
                    Bank transfer: Money deducted from Account A AND added to Account B, or neither happens.
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <div className="flex items-center mb-4">
                  <div className="text-5xl mr-4">🅲️</div>
                  <div>
                    <h3 className="text-3xl font-bold text-green-300">Consistency</h3>
                    <div className="text-green-200 text-sm">Valid State Always</div>
                  </div>
                </div>
                <div className="text-white mb-4">
                  Data must remain in a <strong>valid state</strong> before and after transactions. All rules and constraints are enforced.
                </div>
                <div className="bg-green-600/30 rounded-lg p-4">
                  <div className="text-sm font-bold mb-2">💡 Example:</div>
                  <div className="text-green-200 text-sm">
                    Can't have negative account balance if constraint says balance ≥ 0.
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-8 border-2 border-purple-400">
                <div className="flex items-center mb-4">
                  <div className="text-5xl mr-4">🅸️</div>
                  <div>
                    <h3 className="text-3xl font-bold text-purple-300">Isolation</h3>
                    <div className="text-purple-200 text-sm">No Interference</div>
                  </div>
                </div>
                <div className="text-white mb-4">
                  Concurrent transactions don't <strong>interfere</strong> with each other. Each transaction is isolated.
                </div>
                <div className="bg-purple-600/30 rounded-lg p-4">
                  <div className="text-sm font-bold mb-2">💡 Example:</div>
                  <div className="text-purple-200 text-sm">
                    Two people booking the same seat won't both succeed.
                  </div>
                </div>
              </div>

              <div className="bg-orange-500/20 rounded-xl p-8 border-2 border-orange-400">
                <div className="flex items-center mb-4">
                  <div className="text-5xl mr-4">🅳️</div>
                  <div>
                    <h3 className="text-3xl font-bold text-orange-300">Durability</h3>
                    <div className="text-orange-200 text-sm">Permanent Storage</div>
                  </div>
                </div>
                <div className="text-white mb-4">
                  Once committed, data changes are <strong>permanent</strong>, even if system crashes.
                </div>
                <div className="bg-orange-600/30 rounded-lg p-4">
                  <div className="text-sm font-bold mb-2">💡 Example:</div>
                  <div className="text-orange-200 text-sm">
                    Order confirmed? It stays confirmed, even if server crashes.
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-xl p-6 border border-red-400/30">
              <div className="text-2xl font-bold text-red-300 mb-3 text-center">⚠️ The Trade-off</div>
              <div className="text-lg text-red-100 text-center">
                ACID guarantees are <strong>powerful</strong> but come at a cost: <strong>performance and scalability limitations</strong>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-600'
    },

    // Slide 4: The Data Persistence Problem
    {
      id: 'data-persistence',
      title: 'The Data Persistence Problem',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">💾</div>
            <h2 className="text-4xl font-extrabold mb-4">Where Does Data Go?</h2>
            <p className="text-xl text-white/80">The problem with in-memory storage</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-red-300 mb-6">❌ The Problem</h3>
              <div className="space-y-4">
                <div className="bg-red-500/20 rounded-lg p-4 border-l-4 border-red-400">
                  <div className="font-bold text-lg mb-2">Server Start</div>
                  <div className="text-red-200 text-sm">Data lives in memory (arrays, objects)</div>
                </div>
                <div className="text-3xl text-center">↓</div>
                <div className="bg-red-500/20 rounded-lg p-4 border-l-4 border-red-400">
                  <div className="font-bold text-lg mb-2">Server Restart</div>
                  <div className="text-red-200 text-sm">All data is LOST forever!</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-green-300 mb-6">✅ The Solution</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🔒</span>
                  <div>
                    <div className="font-bold">Persistent Storage</div>
                    <div className="text-green-200 text-sm">Data survives restarts</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🔍</span>
                  <div>
                    <div className="font-bold">Fast Queries</div>
                    <div className="text-green-200 text-sm">Find data in milliseconds</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🔄</span>
                  <div>
                    <div className="font-bold">Concurrent Access</div>
                    <div className="text-green-200 text-sm">Thousands of users at once</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📈</span>
                  <div>
                    <div className="font-bold">Scalability</div>
                    <div className="text-green-200 text-sm">Handle growing data</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-blue-400/30">
            <div className="text-2xl font-bold text-blue-300 mb-4 text-center">💡 The Mental Model</div>
            <div className="grid grid-cols-2 gap-6 text-lg">
              <div className="text-center">
                <div className="text-3xl mb-2">📝</div>
                <div className="font-bold">Variables/Arrays</div>
                <div className="text-blue-200 text-sm">Sticky notes (fast but temporary)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🗄️</div>
                <div className="font-bold">Database</div>
                <div className="text-blue-200 text-sm">Filing cabinet (permanent)</div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-600 to-orange-600'
    },

    // Slide 3: What is NoSQL?
    {
      id: 'what-is-nosql',
      title: 'What is NoSQL?',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">🗃️</div>
            <h2 className="text-4xl font-extrabold mb-4">NoSQL Databases</h2>
            <p className="text-xl text-white/80">"Not Only SQL" - A new approach to data</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-yellow-300 mb-6 text-center">What NoSQL Means</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-500/20 rounded-lg p-6 border-l-4 border-blue-400">
                  <div className="text-xl font-bold mb-3">📊 Non-Relational</div>
                  <div className="text-blue-200">
                    Doesn't use tables with rows and columns
                  </div>
                </div>
                <div className="bg-green-500/20 rounded-lg p-6 border-l-4 border-green-400">
                  <div className="text-xl font-bold mb-3">🔄 Flexible Schema</div>
                  <div className="text-green-200">
                    No predefined or rigid structure
                  </div>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-6 border-l-4 border-purple-400">
                  <div className="text-xl font-bold mb-3">📈 Horizontal Scaling</div>
                  <div className="text-purple-200">
                    Add more servers, not bigger servers
                  </div>
                </div>
                <div className="bg-orange-500/20 rounded-lg p-6 border-l-4 border-orange-400">
                  <div className="text-xl font-bold mb-3">🚀 Big Data Ready</div>
                  <div className="text-orange-200">
                    Built for massive scale and real-time
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-8 border border-green-400/30">
              <h3 className="text-2xl font-bold text-green-300 mb-4 text-center">Key Characteristics</h3>
              <div className="space-y-3 text-lg">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <strong>Flexible Schema:</strong> Different documents can have different fields
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <strong>No Joins:</strong> Related data stored together
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <strong>Easy to Scale:</strong> Distribute data across servers
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <strong>Hierarchical Storage:</strong> Perfect for nested data structures
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-purple-600'
    },

    // Slide 4: Types of NoSQL Databases
    {
      id: 'types-of-nosql',
      title: 'Types of NoSQL Databases',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">🗂️</div>
            <h2 className="text-4xl font-extrabold mb-4">Four Types of NoSQL</h2>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-500/20 rounded-xl p-8 border-2 border-blue-400">
              <div className="text-5xl mb-4 text-center">📄</div>
              <h3 className="text-2xl font-bold text-blue-300 mb-4 text-center">Document-Oriented</h3>
              <div className="space-y-3">
                <div className="text-blue-200 text-center mb-4">
                  Stores data as documents (JSON-like)
                </div>
                <div className="bg-blue-600/30 rounded-lg p-4">
                  <div className="font-bold mb-2">Examples:</div>
                  <div className="text-sm">MongoDB, CouchDB</div>
                </div>
                <div className="bg-blue-600/30 rounded-lg p-4">
                  <div className="font-bold mb-2">Best For:</div>
                  <div className="text-sm">Web apps, content management, user profiles</div>
                </div>
              </div>
            </div>

            <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
              <div className="text-5xl mb-4 text-center">🔑</div>
              <h3 className="text-2xl font-bold text-green-300 mb-4 text-center">Key-Value</h3>
              <div className="space-y-3">
                <div className="text-green-200 text-center mb-4">
                  Simple key → value pairs
                </div>
                <div className="bg-green-600/30 rounded-lg p-4">
                  <div className="font-bold mb-2">Examples:</div>
                  <div className="text-sm">Redis, DynamoDB</div>
                </div>
                <div className="bg-green-600/30 rounded-lg p-4">
                  <div className="font-bold mb-2">Best For:</div>
                  <div className="text-sm">Caching, session storage, quick lookups</div>
                </div>
              </div>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-8 border-2 border-purple-400">
              <div className="text-5xl mb-4 text-center">📊</div>
              <h3 className="text-2xl font-bold text-purple-300 mb-4 text-center">Column-Oriented</h3>
              <div className="space-y-3">
                <div className="text-purple-200 text-center mb-4">
                  Stores data in columns
                </div>
                <div className="bg-purple-600/30 rounded-lg p-4">
                  <div className="font-bold mb-2">Examples:</div>
                  <div className="text-sm">Cassandra, HBase</div>
                </div>
                <div className="bg-purple-600/30 rounded-lg p-4">
                  <div className="font-bold mb-2">Best For:</div>
                  <div className="text-sm">Analytics, time-series data, IoT sensors</div>
                </div>
              </div>
            </div>

            <div className="bg-pink-500/20 rounded-xl p-8 border-2 border-pink-400">
              <div className="text-5xl mb-4 text-center">🕸️</div>
              <h3 className="text-2xl font-bold text-pink-300 mb-4 text-center">Graph-Based</h3>
              <div className="space-y-3">
                <div className="text-pink-200 text-center mb-4">
                  Stores relationships between data
                </div>
                <div className="bg-pink-600/30 rounded-lg p-4">
                  <div className="font-bold mb-2">Examples:</div>
                  <div className="text-sm">Neo4j, Amazon Neptune</div>
                </div>
                <div className="bg-pink-600/30 rounded-lg p-4">
                  <div className="font-bold mb-2">Best For:</div>
                  <div className="text-sm">Social networks, recommendations, fraud detection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-600'
    },

    // Slide 5: SQL vs NoSQL
    {
      id: 'sql-vs-nosql',
      title: 'SQL vs NoSQL',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">⚖️</div>
            <h2 className="text-4xl font-extrabold mb-4">SQL vs NoSQL</h2>
            <p className="text-xl text-white/80">Different philosophies for different needs</p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* SQL */}
              <div className="bg-blue-500/20 rounded-xl p-8 border-2 border-blue-400">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">🏛️</div>
                  <h3 className="text-3xl font-bold text-blue-300">SQL</h3>
                  <p className="text-blue-200 mt-2">Relational / Traditional</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">📊 Structure</div>
                    <div className="text-blue-200 text-sm">Table-based with rows & columns</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">📐 Schema</div>
                    <div className="text-blue-200 text-sm">Fixed, predefined structure</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">📈 Scaling</div>
                    <div className="text-blue-200 text-sm">Vertical (bigger server)</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">🔗 Relationships</div>
                    <div className="text-blue-200 text-sm">JOINs between tables</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">💼 Examples</div>
                    <div className="text-blue-200 text-sm">MySQL, PostgreSQL, SQL Server</div>
                  </div>
                </div>
              </div>

              {/* NoSQL */}
              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">🚀</div>
                  <h3 className="text-3xl font-bold text-green-300">NoSQL</h3>
                  <p className="text-green-200 mt-2">Non-relational / Modern</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">📄 Structure</div>
                    <div className="text-green-200 text-sm">Documents, key-value, graphs</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">🔄 Schema</div>
                    <div className="text-green-200 text-sm">Flexible, dynamic structure</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">📈 Scaling</div>
                    <div className="text-green-200 text-sm">Horizontal (more servers)</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">🔗 Relationships</div>
                    <div className="text-green-200 text-sm">Embedded or referenced documents</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">💼 Examples</div>
                    <div className="text-green-200 text-sm">MongoDB, Redis, Cassandra, Neo4j</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-purple-500/20 rounded-xl p-6 border border-purple-400/30">
              <div className="text-2xl font-bold text-purple-300 mb-4 text-center">🎯 The Truth</div>
              <div className="text-lg text-purple-100 text-center">
                Many companies use <strong>both</strong>! SQL for transactions, NoSQL for content and scale.
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-cyan-600 to-blue-600'
    },

    // Slide 6: When to Use NoSQL/MongoDB
    {
      id: 'when-to-use',
      title: 'When to Use NoSQL?',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">🤔</div>
            <h2 className="text-4xl font-extrabold mb-4">When to Use NoSQL?</h2>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-green-500/20 rounded-xl p-6 border border-green-400">
                <div className="text-4xl mb-3 text-center">📊</div>
                <h3 className="text-xl font-bold text-green-300 mb-3 text-center">Massive Scale</h3>
                <div className="text-green-200 text-sm space-y-2">
                  <div>• Huge amounts of data</div>
                  <div>• Continuous growth</div>
                  <div>• Millions of records</div>
                </div>
              </div>

              <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400">
                <div className="text-4xl mb-3 text-center">🔄</div>
                <h3 className="text-xl font-bold text-blue-300 mb-3 text-center">Flexible Data</h3>
                <div className="text-blue-200 text-sm space-y-2">
                  <div>• Structure changes often</div>
                  <div>• Different fields per item</div>
                  <div>• Rapid iteration</div>
                </div>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-400">
                <div className="text-4xl mb-3 text-center">🚀</div>
                <h3 className="text-xl font-bold text-purple-300 mb-3 text-center">Speed First</h3>
                <div className="text-purple-200 text-sm space-y-2">
                  <div>• Fast development</div>
                  <div>• Simple relationships</div>
                  <div>• No complex joins</div>
                </div>
              </div>

              <div className="bg-orange-500/20 rounded-xl p-6 border border-orange-400">
                <div className="text-4xl mb-3 text-center">📈</div>
                <h3 className="text-xl font-bold text-orange-300 mb-3 text-center">Horizontal Scaling</h3>
                <div className="text-orange-200 text-sm space-y-2">
                  <div>• Add more servers</div>
                  <div>• Distribute load</div>
                  <div>• No single point</div>
                </div>
              </div>

              <div className="bg-pink-500/20 rounded-xl p-6 border border-pink-400">
                <div className="text-4xl mb-3 text-center">🌲</div>
                <h3 className="text-xl font-bold text-pink-300 mb-3 text-center">Nested Data</h3>
                <div className="text-pink-200 text-sm space-y-2">
                  <div>• Hierarchical structure</div>
                  <div>• Natural nesting</div>
                  <div>• Embedded documents</div>
                </div>
              </div>

              <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400">
                <div className="text-4xl mb-3 text-center">⚡</div>
                <h3 className="text-xl font-bold text-yellow-300 mb-3 text-center">Real-time Apps</h3>
                <div className="text-yellow-200 text-sm space-y-2">
                  <div>• Chat applications</div>
                  <div>• Live dashboards</div>
                  <div>• Gaming platforms</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl p-8 border border-red-400/30">
              <h3 className="text-2xl font-bold text-red-300 mb-4 text-center">❌ When NOT to Use NoSQL</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span>💰</span>
                    <span>Financial transactions (need ACID)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>🔗</span>
                    <span>Complex many-to-many relationships</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span>📊</span>
                    <span>Complex reporting & analytics</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>🔒</span>
                    <span>Absolute data consistency required</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-teal-600'
    },

    // Slide 7: What is MongoDB?
    {
      id: 'what-is-mongodb',
      title: 'What is MongoDB?',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-bounce-in">🍃</div>
            <h2 className="text-4xl font-extrabold mb-4">What is MongoDB?</h2>
            <p className="text-xl text-white/80">The most popular NoSQL database</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <div className="text-3xl font-bold text-green-300 mb-6 text-center">Simple Definition</div>
              <div className="text-2xl leading-relaxed text-center">
                MongoDB is a <strong className="text-yellow-300">database that stores JavaScript-like objects</strong> instead of tables and rows
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-500/20 rounded-xl p-8 border border-green-400">
                <h3 className="text-2xl font-bold text-green-300 mb-6">✨ What Makes MongoDB Special</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">📄</span>
                    <div>
                      <div className="font-bold">Document-Oriented</div>
                      <div className="text-green-200 text-sm">Stores data as BSON documents</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🏆</span>
                    <div>
                      <div className="font-bold">Most Popular NoSQL</div>
                      <div className="text-green-200 text-sm">#1 choice for modern apps</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">📈</span>
                    <div>
                      <div className="font-bold">Scale-Out Architecture</div>
                      <div className="text-green-200 text-sm">Add servers to handle growth</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🆓</span>
                    <div>
                      <div className="font-bold">Open Source</div>
                      <div className="text-green-200 text-sm">Free, community-driven</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400">
                <h3 className="text-2xl font-bold text-blue-300 mb-6">📜 The MongoDB Story</h3>
                <div className="space-y-4">
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">2007: Founded</div>
                    <div className="text-blue-200 text-sm">To solve web-scale problems</div>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">2009: Open Sourced</div>
                    <div className="text-blue-200 text-sm">Launched to the world</div>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">2013: Leader</div>
                    <div className="text-blue-200 text-sm">Most popular NoSQL database</div>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">Today: Enterprise</div>
                    <div className="text-blue-200 text-sm">Powers millions of applications</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-6 border border-yellow-400/30">
              <div className="text-2xl font-bold text-yellow-300 mb-4 text-center">🎯 Why JavaScript Developers Love It</div>
              <div className="text-lg text-yellow-100 text-center">
                JavaScript objects in code → MongoDB documents in database<br/>
                <strong>No translation needed!</strong>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-emerald-600'
    },

    // Slide 8: BSON - MongoDB's Data Format
    {
      id: 'bson',
      title: 'BSON: Binary JSON',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">🔧</div>
            <h2 className="text-4xl font-extrabold mb-4">BSON: Binary JSON</h2>
            <p className="text-xl text-white/80">JSON on steroids</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-blue-500/20 rounded-xl p-8 border-2 border-blue-400">
                <h3 className="text-2xl font-bold text-blue-300 mb-6 text-center">📄 JSON</h3>
                <div className="space-y-4">
                  <div className="bg-green-500/20 rounded-lg p-4 border-l-4 border-green-400">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">✅</span>
                      <div>Human-readable</div>
                    </div>
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-4 border-l-4 border-green-400">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">✅</span>
                      <div>Universal standard</div>
                    </div>
                  </div>
                  <div className="bg-red-500/20 rounded-lg p-4 border-l-4 border-red-400">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">❌</span>
                      <div>Limited data types</div>
                    </div>
                  </div>
                  <div className="bg-red-500/20 rounded-lg p-4 border-l-4 border-red-400">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">❌</span>
                      <div>Slower to parse</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <h3 className="text-2xl font-bold text-green-300 mb-6 text-center">⚡ BSON</h3>
                <div className="space-y-4">
                  <div className="bg-green-600/30 rounded-lg p-4 border-l-4 border-green-400">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">✅</span>
                      <div>More data types</div>
                    </div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4 border-l-4 border-green-400">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">✅</span>
                      <div>Faster to parse</div>
                    </div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4 border-l-4 border-green-400">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">✅</span>
                      <div>More space-efficient</div>
                    </div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4 border-l-4 border-green-400">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">✅</span>
                      <div>Easier to index</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-yellow-300 mb-6 text-center">🎯 What You Need to Know</h3>
              <div className="space-y-4 text-lg">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">1️⃣</span>
                  <div>You write <strong className="text-blue-300">JavaScript objects</strong> (JSON-like)</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">2️⃣</span>
                  <div>MongoDB stores as <strong className="text-green-300">BSON</strong> internally</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">3️⃣</span>
                  <div>MongoDB returns <strong className="text-blue-300">JavaScript objects</strong> back to you</div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">✨</span>
                  <div><strong className="text-yellow-300">You never deal with BSON directly!</strong></div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-400/30">
              <div className="text-xl font-bold text-purple-300 mb-3 text-center">💡 The Mental Model</div>
              <div className="text-lg text-purple-100 text-center">
                Like HTML → DOM tree → HTML<br/>
                You write HTML, browser uses DOM, you see HTML
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-pink-600'
    },

    // Slide 9: MongoDB Features
    {
      id: 'mongodb-features',
      title: 'MongoDB Features',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">⚙️</div>
            <h2 className="text-4xl font-extrabold mb-4">MongoDB Features</h2>
            <p className="text-xl text-white/80">Enterprise-grade capabilities</p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400">
              <div className="text-4xl mb-4 text-center">🔍</div>
              <h3 className="text-xl font-bold text-blue-300 mb-3 text-center">Indexing</h3>
              <div className="text-blue-200 text-sm text-center mb-4">
                Lightning-fast searches in milliseconds
              </div>
              <div className="bg-blue-600/30 rounded-lg p-3 text-center">
                <div className="text-xs">Search 1M users instantly</div>
              </div>
            </div>

            <div className="bg-green-500/20 rounded-xl p-6 border border-green-400">
              <div className="text-4xl mb-4 text-center">📈</div>
              <h3 className="text-xl font-bold text-green-300 mb-3 text-center">Horizontal Scaling</h3>
              <div className="text-green-200 text-sm text-center mb-4">
                Add more servers to handle growth
              </div>
              <div className="bg-green-600/30 rounded-lg p-3 text-center">
                <div className="text-xs">Sharding across servers</div>
              </div>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-400">
              <div className="text-4xl mb-4 text-center">🔄</div>
              <h3 className="text-xl font-bold text-purple-300 mb-3 text-center">Replication</h3>
              <div className="text-purple-200 text-sm text-center mb-4">
                Never lose data with multiple copies
              </div>
              <div className="bg-purple-600/30 rounded-lg p-3 text-center">
                <div className="text-xs">Automatic failover</div>
              </div>
            </div>

            <div className="bg-orange-500/20 rounded-xl p-6 border border-orange-400">
              <div className="text-4xl mb-4 text-center">⚖️</div>
              <h3 className="text-xl font-bold text-orange-300 mb-3 text-center">Load Balancing</h3>
              <div className="text-orange-200 text-sm text-center mb-4">
                Distribute traffic across servers
              </div>
              <div className="bg-orange-600/30 rounded-lg p-3 text-center">
                <div className="text-xs">Handle traffic spikes</div>
              </div>
            </div>

            <div className="bg-pink-500/20 rounded-xl p-6 border border-pink-400">
              <div className="text-4xl mb-4 text-center">📊</div>
              <h3 className="text-xl font-bold text-pink-300 mb-3 text-center">Aggregation</h3>
              <div className="text-pink-200 text-sm text-center mb-4">
                Powerful data processing pipelines
              </div>
              <div className="bg-pink-600/30 rounded-lg p-3 text-center">
                <div className="text-xs">Like SQL GROUP BY</div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400">
              <div className="text-4xl mb-4 text-center">🌍</div>
              <h3 className="text-xl font-bold text-yellow-300 mb-3 text-center">Language Support</h3>
              <div className="text-yellow-200 text-sm text-center mb-4">
                Works with virtually every language
              </div>
              <div className="bg-yellow-600/30 rounded-lg p-3 text-center">
                <div className="text-xs">Node.js, Python, Java, C#...</div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl p-6 border border-cyan-400/30">
            <div className="text-2xl font-bold text-cyan-300 mb-4 text-center">🏢 Production Ready</div>
            <div className="text-lg text-cyan-100 text-center">
              Built for enterprises with security, monitoring, backup, and 24/7 support
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-cyan-600'
    },

    // Slide 10: Companies Using MongoDB
    {
      id: 'companies',
      title: "Who's Using MongoDB?",
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">🏢</div>
            <h2 className="text-4xl font-extrabold mb-4">Who's Using MongoDB?</h2>
            <p className="text-xl text-white/80">Powering applications at massive scale</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white/10 rounded-xl p-6 text-center border border-white/20 hover:border-white/40 transition-colors">
                <div className="text-5xl mb-3">🚗</div>
                <div className="font-bold text-xl mb-2">Toyota</div>
                <div className="text-sm text-gray-300">Vehicle connectivity</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center border border-white/20 hover:border-white/40 transition-colors">
                <div className="text-5xl mb-3">🌐</div>
                <div className="font-bold text-xl mb-2">Cisco</div>
                <div className="text-sm text-gray-300">Network management</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center border border-white/20 hover:border-white/40 transition-colors">
                <div className="text-5xl mb-3">📸</div>
                <div className="font-bold text-xl mb-2">Shutterfly</div>
                <div className="text-sm text-gray-300">Photo storage</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center border border-white/20 hover:border-white/40 transition-colors">
                <div className="text-5xl mb-3">🎨</div>
                <div className="font-bold text-xl mb-2">Adobe</div>
                <div className="text-sm text-gray-300">Creative Cloud</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center border border-white/20 hover:border-white/40 transition-colors">
                <div className="text-5xl mb-3">🛒</div>
                <div className="font-bold text-xl mb-2">eBay</div>
                <div className="text-sm text-gray-300">Product catalogs</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center border border-white/20 hover:border-white/40 transition-colors">
                <div className="text-5xl mb-3">🚕</div>
                <div className="font-bold text-xl mb-2">Uber</div>
                <div className="text-sm text-gray-300">Real-time services</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center border border-white/20 hover:border-white/40 transition-colors">
                <div className="text-5xl mb-3">🎬</div>
                <div className="font-bold text-xl mb-2">Netflix</div>
                <div className="text-sm text-gray-300">Recommendations</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center border border-white/20 hover:border-white/40 transition-colors">
                <div className="text-5xl mb-3">💼</div>
                <div className="font-bold text-xl mb-2">Forbes</div>
                <div className="text-sm text-gray-300">Content management</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-8 border border-green-400/30">
              <h3 className="text-2xl font-bold text-green-300 mb-6 text-center">📋 What They Use It For</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🛍️</span>
                    <div>
                      <div className="font-bold">E-commerce</div>
                      <div className="text-sm text-green-200">Catalogs, orders, user profiles</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📱</span>
                    <div>
                      <div className="font-bold">Social Media</div>
                      <div className="text-sm text-green-200">Posts, comments, relationships</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📰</span>
                    <div>
                      <div className="font-bold">Content Management</div>
                      <div className="text-sm text-green-200">Articles, images, metadata</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📡</span>
                    <div>
                      <div className="font-bold">IoT/Sensors</div>
                      <div className="text-sm text-green-200">Device data, telemetry</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📱</span>
                    <div>
                      <div className="font-bold">Mobile Apps</div>
                      <div className="text-sm text-green-200">User data, offline sync</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🎮</span>
                    <div>
                      <div className="font-bold">Gaming</div>
                      <div className="text-sm text-green-200">Profiles, state, leaderboards</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-orange-600 to-red-600'
    },

    // Slide 11: MongoDB Hierarchy
    {
      id: 'mongodb-hierarchy',
      title: 'MongoDB Hierarchy',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">🏗️</div>
            <h2 className="text-4xl font-extrabold mb-4">MongoDB Structure</h2>
            <p className="text-xl text-white/80">Databases → Collections → Documents</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-green-300 mb-4">The Hierarchy</h3>
                <div className="text-lg text-gray-300">Like organizing files on your computer</div>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-8 font-mono text-lg">
                <div className="text-yellow-300">MongoDB Server</div>
                <div className="ml-4 text-blue-300">├── 📦 Database: my-social-app</div>
                <div className="ml-8 text-green-300">│   ├── 📂 Collection: users</div>
                <div className="ml-12 text-white">│   │   ├── 📄 Document &#123; name: "Alice" &#125;</div>
                <div className="ml-12 text-white">│   │   ├── 📄 Document &#123; name: "Bob" &#125;</div>
                <div className="ml-12 text-white">│   │   └── 📄 Document &#123; name: "Charlie" &#125;</div>
                <div className="ml-8 text-green-300">│   ├── 📂 Collection: posts</div>
                <div className="ml-12 text-white">│   │   ├── 📄 Document &#123; title: "Hello" &#125;</div>
                <div className="ml-12 text-white">│   │   └── 📄 Document &#123; title: "MongoDB" &#125;</div>
                <div className="ml-8 text-green-300">│   └── 📂 Collection: comments</div>
                <div className="ml-4 text-blue-300">└── 📦 Database: my-ecommerce-app</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400">
                <div className="text-4xl mb-3 text-center">📦</div>
                <h3 className="text-xl font-bold text-blue-300 mb-3 text-center">Database</h3>
                <div className="text-blue-200 text-sm text-center">
                  Container for collections<br/>
                  Think: A project folder
                </div>
              </div>
              <div className="bg-green-500/20 rounded-xl p-6 border border-green-400">
                <div className="text-4xl mb-3 text-center">📂</div>
                <h3 className="text-xl font-bold text-green-300 mb-3 text-center">Collection</h3>
                <div className="text-green-200 text-sm text-center">
                  Group of similar documents<br/>
                  Think: A subfolder
                </div>
              </div>
              <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-400">
                <div className="text-4xl mb-3 text-center">📄</div>
                <h3 className="text-xl font-bold text-purple-300 mb-3 text-center">Document</h3>
                <div className="text-purple-200 text-sm text-center">
                  Individual data record<br/>
                  Think: A single file
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-600'
    },

    // Slide 12: SQL vs MongoDB Terminology
    {
      id: 'terminology',
      title: 'Terminology Translation',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">🔄</div>
            <h2 className="text-4xl font-extrabold mb-4">SQL → MongoDB</h2>
            <p className="text-xl text-white/80">Translation guide for SQL developers</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b-2 border-white/20">
                      <th className="p-4 text-blue-300 text-xl">SQL Term</th>
                      <th className="p-4 text-green-300 text-xl">MongoDB Equivalent</th>
                      <th className="p-4 text-purple-300 text-xl">Think Of It As</th>
                    </tr>
                  </thead>
                  <tbody className="text-lg">
                    <tr className="border-b border-white/10 hover:bg-white/5">
                      <td className="p-4 font-bold">Database</td>
                      <td className="p-4">Database</td>
                      <td className="p-4 text-gray-300">A project</td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5">
                      <td className="p-4 font-bold">Table</td>
                      <td className="p-4">Collection</td>
                      <td className="p-4 text-gray-300">A folder of items</td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5">
                      <td className="p-4 font-bold">Row</td>
                      <td className="p-4">Document</td>
                      <td className="p-4 text-gray-300">One item/object</td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5">
                      <td className="p-4 font-bold">Column</td>
                      <td className="p-4">Field</td>
                      <td className="p-4 text-gray-300">Object property</td>
                    </tr>
                    <tr className="border-b border-white/10 hover:bg-white/5">
                      <td className="p-4 font-bold">Primary Key</td>
                      <td className="p-4">_id</td>
                      <td className="p-4 text-gray-300">Auto unique ID</td>
                    </tr>
                    <tr className="hover:bg-white/5">
                      <td className="p-4 font-bold">JOIN</td>
                      <td className="p-4">Embedding/Reference</td>
                      <td className="p-4 text-gray-300">Nested objects</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-cyan-600 to-blue-600'
    },

    // Slide 13: Document Structure
    {
      id: 'document-structure',
      title: 'Document Structure',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">📄</div>
            <h2 className="text-4xl font-extrabold mb-4">Document Structure</h2>
            <p className="text-xl text-white/80">JSON on steroids</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400">
                <h3 className="text-2xl font-bold text-blue-300 mb-4">📝 Basic Document</h3>
                <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm">
                  <div className="text-gray-400">&#123;</div>
                  <div className="ml-4 text-yellow-300">"_id": ObjectId("..."),</div>
                  <div className="ml-4 text-blue-300">"name"<span className="text-white">:</span> <span className="text-green-300">"Alice"</span><span className="text-white">,</span></div>
                  <div className="ml-4 text-blue-300">"email"<span className="text-white">:</span> <span className="text-green-300">"alice@example.com"</span><span className="text-white">,</span></div>
                  <div className="ml-4 text-blue-300">"age"<span className="text-white">:</span> <span className="text-orange-300">28</span></div>
                  <div className="text-gray-400">&#125;</div>
                </div>
                <div className="mt-4 text-blue-200 text-sm">
                  ✨ Automatic _id field added by MongoDB
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-6 border border-green-400">
                <h3 className="text-2xl font-bold text-green-300 mb-4">🌲 Nested Document</h3>
                <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm">
                  <div className="text-gray-400">&#123;</div>
                  <div className="ml-4 text-blue-300">"name"<span className="text-white">:</span> <span className="text-green-300">"Alice"</span><span className="text-white">,</span></div>
                  <div className="ml-4 text-blue-300">"address"<span className="text-white">: &#123;</span></div>
                  <div className="ml-8 text-purple-300">"city"<span className="text-white">:</span> <span className="text-green-300">"Boston"</span><span className="text-white">,</span></div>
                  <div className="ml-8 text-purple-300">"state"<span className="text-white">:</span> <span className="text-green-300">"MA"</span></div>
                  <div className="ml-4 text-white">&#125;,</div>
                  <div className="ml-4 text-blue-300">"hobbies"<span className="text-white">: [</span></div>
                  <div className="ml-8 text-green-300">"coding", "hiking"</div>
                  <div className="ml-4 text-white">]</div>
                  <div className="text-gray-400">&#125;</div>
                </div>
                <div className="mt-4 text-green-200 text-sm">
                  ✨ Objects and arrays nested naturally
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-8 border border-purple-400/30">
              <h3 className="text-2xl font-bold text-purple-300 mb-4 text-center">💡 The Power of Nesting</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2">📦</div>
                  <div className="font-bold mb-2">Store Together</div>
                  <div className="text-sm text-purple-200">Related data in one place</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">🚀</div>
                  <div className="font-bold mb-2">Fast Reads</div>
                  <div className="text-sm text-purple-200">One query, all data</div>
                </div>
                <div>
                  <div className="text-3xl mb-2">🎯</div>
                  <div className="font-bold mb-2">Natural Model</div>
                  <div className="text-sm text-purple-200">Matches how you think</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-indigo-600'
    },

    // Slide 14: MongoDB Data Types
    {
      id: 'data-types',
      title: 'MongoDB Data Types',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">🔢</div>
            <h2 className="text-4xl font-extrabold mb-4">MongoDB Data Types</h2>
            <p className="text-xl text-white/80">More than just JavaScript</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400">
                <h3 className="text-2xl font-bold text-blue-300 mb-6">📝 Basic Types</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-24 font-bold">String</div>
                    <div className="text-blue-200">"Alice Johnson"</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 font-bold">Number</div>
                    <div className="text-blue-200">42, 3.14</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 font-bold">Boolean</div>
                    <div className="text-blue-200">true, false</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 font-bold">Array</div>
                    <div className="text-blue-200">["tag1", "tag2"]</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 font-bold">Object</div>
                    <div className="text-blue-200">&#123; city: "Boston" &#125;</div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-24 font-bold">Null</div>
                    <div className="text-blue-200">null</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border border-green-400">
                <h3 className="text-2xl font-bold text-green-300 mb-6">✨ Special Types</h3>
                <div className="space-y-4">
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <div className="font-bold mb-1">ObjectId</div>
                    <div className="text-green-200 text-sm">Unique identifier</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <div className="font-bold mb-1">Date</div>
                    <div className="text-green-200 text-sm">Actual date/time objects</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <div className="font-bold mb-1">Decimal128</div>
                    <div className="text-green-200 text-sm">Precise decimals (for money)</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <div className="font-bold mb-1">Binary</div>
                    <div className="text-green-200 text-sm">Store images, files</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <div className="font-bold mb-1">Long</div>
                    <div className="text-green-200 text-sm">64-bit integers</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400">
                <h3 className="text-xl font-bold text-yellow-300 mb-4">📅 Why Date Matters</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-red-500/20 rounded p-3">
                    <div className="font-bold mb-1">❌ String Date</div>
                    <div className="text-red-200">"2024-01-15" → Can't do date math</div>
                  </div>
                  <div className="bg-green-500/20 rounded p-3">
                    <div className="font-bold mb-1">✅ Real Date</div>
                    <div className="text-green-200">ISODate("2024-01-15") → Sort, filter, calculate</div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-400">
                <h3 className="text-xl font-bold text-purple-300 mb-4">💰 Why Decimal128 Matters</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-red-500/20 rounded p-3">
                    <div className="font-bold mb-1">❌ Regular Number</div>
                    <div className="text-red-200">19.99 → Floating point errors</div>
                  </div>
                  <div className="bg-green-500/20 rounded p-3">
                    <div className="font-bold mb-1">✅ Decimal128</div>
                    <div className="text-green-200">Decimal128("19.99") → Exact precision</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-orange-600 to-yellow-600'
    },

    // Slide 15: The _id Field
    {
      id: 'objectid',
      title: 'The _id Field',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">🆔</div>
            <h2 className="text-4xl font-extrabold mb-4">The _id Superpower</h2>
            <p className="text-xl text-white/80">MongoDB's automatic unique identifier</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-green-300 mb-6 text-center">Automatic ID Generation</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-xl font-bold text-blue-300 mb-4">You Create:</div>
                  <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm">
                    <div className="text-gray-400">&#123;</div>
                    <div className="ml-4 text-blue-300">"name"<span className="text-white">:</span> <span className="text-green-300">"Alice"</span></div>
                    <div className="text-gray-400">&#125;</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold text-green-300 mb-4">MongoDB Stores:</div>
                  <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm">
                    <div className="text-gray-400">&#123;</div>
                    <div className="ml-4 text-yellow-300">"_id": ObjectId("507f..."),</div>
                    <div className="ml-4 text-blue-300">"name"<span className="text-white">:</span> <span className="text-green-300">"Alice"</span></div>
                    <div className="text-gray-400">&#125;</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-blue-400/30">
              <h3 className="text-2xl font-bold text-blue-300 mb-6 text-center">ObjectId Structure</h3>
              <div className="bg-gray-900 rounded-lg p-6 font-mono text-center">
                <div className="text-2xl text-yellow-300 mb-4">ObjectId("507f1f77bcf86cd799439011")</div>
                <div className="grid grid-cols-4 gap-4 text-sm mt-6">
                  <div>
                    <div className="text-green-300 font-bold mb-2">507f1f77</div>
                    <div className="text-gray-400">Timestamp</div>
                  </div>
                  <div>
                    <div className="text-blue-300 font-bold mb-2">bcf86c</div>
                    <div className="text-gray-400">Machine ID</div>
                  </div>
                  <div>
                    <div className="text-purple-300 font-bold mb-2">d799</div>
                    <div className="text-gray-400">Process ID</div>
                  </div>
                  <div>
                    <div className="text-orange-300 font-bold mb-2">439011</div>
                    <div className="text-gray-400">Counter</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-green-500/20 rounded-xl p-6 border border-green-400 text-center">
                <div className="text-3xl mb-3">🌍</div>
                <div className="font-bold mb-2">Globally Unique</div>
                <div className="text-green-200 text-sm">Across all servers</div>
              </div>
              <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400 text-center">
                <div className="text-3xl mb-3">📊</div>
                <div className="font-bold mb-2">Sortable</div>
                <div className="text-blue-200 text-sm">By creation time</div>
              </div>
              <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-400 text-center">
                <div className="text-3xl mb-3">⚡</div>
                <div className="font-bold mb-2">No Coordination</div>
                <div className="text-purple-200 text-sm">Instant generation</div>
              </div>
              <div className="bg-orange-500/20 rounded-xl p-6 border border-orange-400 text-center">
                <div className="text-3xl mb-3">⏰</div>
                <div className="font-bold mb-2">Has Timestamp</div>
                <div className="text-orange-200 text-sm">Creation time built-in</div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-yellow-600 to-orange-600'
    },

    // Slide 16: Setting Up MongoDB
    {
      id: 'setup',
      title: 'Setting Up MongoDB',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">☁️</div>
            <h2 className="text-4xl font-extrabold mb-4">Setting Up MongoDB</h2>
            <p className="text-xl text-white/80">Cloud-based with MongoDB Atlas</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-8 border-2 border-green-400">
              <h3 className="text-3xl font-bold text-green-300 mb-6 text-center">MongoDB Atlas</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🆓</div>
                  <div className="font-bold text-xl mb-2">Free Tier</div>
                  <div className="text-green-200 text-sm">512MB perfect for learning</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🚀</div>
                  <div className="font-bold text-xl mb-2">Zero Setup</div>
                  <div className="text-green-200 text-sm">No installation needed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🌍</div>
                  <div className="font-bold text-xl mb-2">Always Online</div>
                  <div className="text-green-200 text-sm">Access from anywhere</div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-blue-300 mb-6 text-center">5-Minute Setup</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-xl font-bold">1</div>
                  <div>
                    <div className="font-bold text-lg">Sign up at mongodb.com/cloud/atlas</div>
                    <div className="text-blue-200 text-sm">Free account, no credit card</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-xl font-bold">2</div>
                  <div>
                    <div className="font-bold text-lg">Create a free cluster (M0)</div>
                    <div className="text-green-200 text-sm">Choose cloud provider and region</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-xl font-bold">3</div>
                  <div>
                    <div className="font-bold text-lg">Create database user</div>
                    <div className="text-purple-200 text-sm">Username and password for access</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-xl font-bold">4</div>
                  <div>
                    <div className="font-bold text-lg">Whitelist IP address</div>
                    <div className="text-orange-200 text-sm">Use 0.0.0.0/0 for development</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-xl font-bold">5</div>
                  <div>
                    <div className="font-bold text-lg">Get connection string</div>
                    <div className="text-pink-200 text-sm">Copy to use in Node.js</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-6 border border-gray-600">
              <div className="text-xl font-bold text-yellow-300 mb-4 text-center">📝 Connection String</div>
              <div className="bg-gray-800 rounded p-4 font-mono text-sm text-center break-all">
                mongodb+srv://username:password@cluster.mongodb.net/myapp
              </div>
              <div className="mt-4 text-center text-yellow-200 text-sm">
                ⚠️ Never commit this to GitHub! Use environment variables.
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-indigo-600'
    },

    // Slide 17: Mongoose Introduction
    {
      id: 'mongoose-intro',
      title: 'Introducing Mongoose',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-bounce-in">🦦</div>
            <h2 className="text-4xl font-extrabold mb-4">Enter Mongoose</h2>
            <p className="text-xl text-white/80">Structure + Validation for MongoDB</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold text-green-300 mb-6 text-center">What is Mongoose?</h3>
              <div className="text-2xl leading-relaxed text-center mb-8">
                Mongoose is an <strong className="text-yellow-300">Object Data Modeling (ODM)</strong> library that adds <strong className="text-blue-300">structure and validation</strong> to MongoDB
              </div>
              <div className="text-center text-lg text-gray-300">
                Think of it as a <strong>bouncer for your database</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-red-500/20 rounded-xl p-8 border-2 border-red-400">
                <h3 className="text-2xl font-bold text-red-300 mb-6 text-center">❌ The Problem</h3>
                <div className="text-center mb-6 text-red-200">
                  MongoDB is <strong>too flexible</strong>
                </div>
                <div className="space-y-3">
                  <div className="bg-red-600/30 rounded-lg p-4 font-mono text-sm">
                    &#123; name: "Alice", age: 25 &#125;
                  </div>
                  <div className="bg-red-600/30 rounded-lg p-4 font-mono text-sm">
                    &#123; name: "Bob", age: "thirty" &#125; ❌
                  </div>
                  <div className="bg-red-600/30 rounded-lg p-4 font-mono text-sm">
                    &#123; user: "Charlie" &#125; ❌
                  </div>
                  <div className="bg-red-600/30 rounded-lg p-4 font-mono text-sm">
                    &#123; name: "Dave", random: true &#125; ❌
                  </div>
                </div>
                <div className="mt-6 text-center text-red-200">
                  All valid in MongoDB, but chaos for your app!
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <h3 className="text-2xl font-bold text-green-300 mb-6 text-center">✅ Mongoose Solution</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">📋</span>
                    <div>
                      <div className="font-bold">Schema Definitions</div>
                      <div className="text-green-200 text-sm">Define structure for data</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <div className="font-bold">Built-in Validation</div>
                      <div className="text-green-200 text-sm">Ensure data meets requirements</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🔄</span>
                    <div>
                      <div className="font-bold">Type Casting</div>
                      <div className="text-green-200 text-sm">Automatic data conversion</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🔍</span>
                    <div>
                      <div className="font-bold">Query Building</div>
                      <div className="text-green-200 text-sm">Chainable, readable queries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-400/30">
              <div className="text-2xl font-bold text-purple-300 mb-4 text-center">💡 The Mental Model</div>
              <div className="text-lg text-purple-100 text-center">
                <strong>Schema</strong> = Blueprint (what a car should be)<br/>
                <strong>Model</strong> = Factory (builds actual cars)<br/>
                <strong>Document</strong> = Individual car (specific instance)
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-teal-600'
    },

    // Slide 18: Schema & Models
    {
      id: 'schema-models',
      title: 'Schemas & Models',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">📐</div>
            <h2 className="text-4xl font-extrabold mb-4">Schemas & Models</h2>
            <p className="text-xl text-white/80">Defining your data structure</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400">
                <h3 className="text-2xl font-bold text-blue-300 mb-6">📋 What is a Schema?</h3>
                <div className="space-y-4">
                  <div className="text-blue-200 mb-4">
                    A <strong>blueprint</strong> for your data
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <span className="text-xl mr-2">✅</span>
                      <div className="font-bold">Required Fields</div>
                    </div>
                    <div className="text-blue-200 text-sm">Must be filled</div>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <span className="text-xl mr-2">🔤</span>
                      <div className="font-bold">Data Types</div>
                    </div>
                    <div className="text-blue-200 text-sm">String, Number, Boolean, etc.</div>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <span className="text-xl mr-2">🎯</span>
                      <div className="font-bold">Validation Rules</div>
                    </div>
                    <div className="text-blue-200 text-sm">Min/max, patterns, custom</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border border-green-400">
                <h3 className="text-2xl font-bold text-green-300 mb-6">🏭 What is a Model?</h3>
                <div className="space-y-4">
                  <div className="text-green-200 mb-4">
                    A <strong>factory</strong> that creates documents
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <span className="text-xl mr-2">➕</span>
                      <div className="font-bold">Create Documents</div>
                    </div>
                    <div className="text-green-200 text-sm">User.create(...)</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <span className="text-xl mr-2">🔍</span>
                      <div className="font-bold">Query Database</div>
                    </div>
                    <div className="text-green-200 text-sm">User.find(...)</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <span className="text-xl mr-2">✏️</span>
                      <div className="font-bold">Update & Delete</div>
                    </div>
                    <div className="text-green-200 text-sm">User.updateOne(...)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-yellow-300 mb-6 text-center">📝 Example Schema</h3>
              <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm">
                <div className="text-green-400 mb-2">{`// Define the blueprint`}</div>
                <div className="text-blue-300">const userSchema = new Schema(&#123;</div>
                <div className="ml-4 text-white">name: &#123; type: String, required: true &#125;,</div>
                <div className="ml-4 text-white">email: &#123; type: String, required: true, unique: true &#125;,</div>
                <div className="ml-4 text-white">age: &#123; type: Number, min: 0, max: 120 &#125;</div>
                <div className="text-blue-300">&#125;);</div>
                <div className="mt-4 text-green-400">{`// Create the factory`}</div>
                <div className="text-yellow-300">const User = mongoose.model('User', userSchema);</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-400/30">
              <div className="text-xl font-bold text-orange-300 mb-3 text-center">🎯 Like a Form at the DMV</div>
              <div className="text-lg text-orange-100 text-center">
                Required fields you must fill, optional fields you can skip,<br/>
                format requirements (email needs @), validation (age can't be negative)
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-cyan-600 to-blue-600'
    },

    // Slide 19: CRUD Operations Overview
    {
      id: 'crud-overview',
      title: 'CRUD Operations',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">🔄</div>
            <h2 className="text-4xl font-extrabold mb-4">CRUD Operations</h2>
            <p className="text-xl text-white/80">The four fundamental operations</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 mb-8">
              <h3 className="text-3xl font-bold text-green-300 mb-6 text-center">What is CRUD?</h3>
              <div className="text-xl text-center text-gray-300 mb-8">
                The four basic operations you do with data
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">➕</div>
                  <h3 className="text-3xl font-bold text-green-300">Create</h3>
                </div>
                <div className="space-y-3 text-center">
                  <div className="text-green-200 mb-4">Add new data to database</div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="font-mono text-sm">User.create(...)</div>
                    <div className="font-mono text-sm mt-2">User.insertMany(...)</div>
                  </div>
                  <div className="text-green-200 text-sm mt-4">
                    Example: Register new user
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/20 rounded-xl p-8 border-2 border-blue-400">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-3xl font-bold text-blue-300">Read</h3>
                </div>
                <div className="space-y-3 text-center">
                  <div className="text-blue-200 mb-4">Get existing data from database</div>
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <div className="font-mono text-sm">User.find(...)</div>
                    <div className="font-mono text-sm mt-2">User.findById(...)</div>
                  </div>
                  <div className="text-blue-200 text-sm mt-4">
                    Example: Get all users or one user
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-8 border-2 border-purple-400">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">✏️</div>
                  <h3 className="text-3xl font-bold text-purple-300">Update</h3>
                </div>
                <div className="space-y-3 text-center">
                  <div className="text-purple-200 mb-4">Modify existing data</div>
                  <div className="bg-purple-600/30 rounded-lg p-4">
                    <div className="font-mono text-sm">User.updateOne(...)</div>
                    <div className="font-mono text-sm mt-2">User.findByIdAndUpdate(...)</div>
                  </div>
                  <div className="text-purple-200 text-sm mt-4">
                    Example: Update user email
                  </div>
                </div>
              </div>

              <div className="bg-red-500/20 rounded-xl p-8 border-2 border-red-400">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🗑️</div>
                  <h3 className="text-3xl font-bold text-red-300">Delete</h3>
                </div>
                <div className="space-y-3 text-center">
                  <div className="text-red-200 mb-4">Remove data from database</div>
                  <div className="bg-red-600/30 rounded-lg p-4">
                    <div className="font-mono text-sm">User.deleteOne(...)</div>
                    <div className="font-mono text-sm mt-2">User.findByIdAndDelete(...)</div>
                  </div>
                  <div className="text-red-200 text-sm mt-4">
                    Example: Delete inactive users
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-6 border border-yellow-400/30">
              <div className="text-2xl font-bold text-yellow-300 mb-4 text-center">🌟 Every App Does CRUD</div>
              <div className="text-lg text-yellow-100 text-center">
                Social media, e-commerce, todo apps — they all Create, Read, Update, and Delete data
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-blue-600'
    },

    // Slide 20: Query Operators
    {
      id: 'query-operators',
      title: 'Query Operators',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">🔍</div>
            <h2 className="text-4xl font-extrabold mb-4">Query Operators</h2>
            <p className="text-xl text-white/80">The search language of MongoDB</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400">
                <h3 className="text-2xl font-bold text-blue-300 mb-6">📊 Comparison Operators</h3>
                <div className="space-y-3">
                  <div className="bg-blue-600/30 rounded-lg p-3 font-mono text-sm">
                    <div className="flex justify-between">
                      <span>$gt</span>
                      <span className="text-blue-200">Greater than</span>
                    </div>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3 font-mono text-sm">
                    <div className="flex justify-between">
                      <span>$gte</span>
                      <span className="text-blue-200">Greater or equal</span>
                    </div>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3 font-mono text-sm">
                    <div className="flex justify-between">
                      <span>$lt</span>
                      <span className="text-blue-200">Less than</span>
                    </div>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3 font-mono text-sm">
                    <div className="flex justify-between">
                      <span>$lte</span>
                      <span className="text-blue-200">Less or equal</span>
                    </div>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3 font-mono text-sm">
                    <div className="flex justify-between">
                      <span>$ne</span>
                      <span className="text-blue-200">Not equal</span>
                    </div>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3 font-mono text-sm">
                    <div className="flex justify-between">
                      <span>$in</span>
                      <span className="text-blue-200">In array</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border border-green-400">
                <h3 className="text-2xl font-bold text-green-300 mb-6">🔗 Logical Operators</h3>
                <div className="space-y-3">
                  <div className="bg-green-600/30 rounded-lg p-3 font-mono text-sm">
                    <div className="flex justify-between">
                      <span>$and</span>
                      <span className="text-green-200">All conditions true</span>
                    </div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3 font-mono text-sm">
                    <div className="flex justify-between">
                      <span>$or</span>
                      <span className="text-green-200">Any condition true</span>
                    </div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3 font-mono text-sm">
                    <div className="flex justify-between">
                      <span>$not</span>
                      <span className="text-green-200">Opposite condition</span>
                    </div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3 font-mono text-sm">
                    <div className="flex justify-between">
                      <span>$nor</span>
                      <span className="text-green-200">No conditions true</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-green-700/30 rounded-lg p-4">
                  <div className="text-sm font-bold mb-2">Example:</div>
                  <div className="font-mono text-xs text-green-200">
                    age: &#123; $gte: 18, $lt: 65 &#125;
                  </div>
                  <div className="text-xs text-green-200 mt-2">
                    Find users between 18 and 65
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-8 border border-purple-400">
              <h3 className="text-2xl font-bold text-purple-300 mb-6 text-center">📝 Query Modifiers</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-purple-600/30 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">📊</div>
                  <div className="font-bold mb-1">.sort()</div>
                  <div className="text-purple-200 text-sm">Order results</div>
                </div>
                <div className="bg-purple-600/30 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🔢</div>
                  <div className="font-bold mb-1">.limit()</div>
                  <div className="text-purple-200 text-sm">Max results</div>
                </div>
                <div className="bg-purple-600/30 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">⏭️</div>
                  <div className="font-bold mb-1">.skip()</div>
                  <div className="text-purple-200 text-sm">Skip results</div>
                </div>
                <div className="bg-purple-600/30 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="font-bold mb-1">.select()</div>
                  <div className="text-purple-200 text-sm">Pick fields</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-400/30">
              <div className="text-xl font-bold text-orange-300 mb-3 text-center">🎯 Example Query</div>
              <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-center">
                User.find(&#123; age: &#123; $gte: 18 &#125; &#125;).sort('-createdAt').limit(10)
              </div>
              <div className="text-center text-orange-200 text-sm mt-3">
                Find users 18+, newest first, max 10 results
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-600'
    },

    // Slide 21: Real World Example
    {
      id: 'real-world-example',
      title: 'Real World Example',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">🌍</div>
            <h2 className="text-4xl font-extrabold mb-4">Building a Blog API</h2>
            <p className="text-xl text-white/80">Putting it all together</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400">
                <h3 className="text-2xl font-bold text-blue-300 mb-4">📝 The Schema</h3>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-xs">
                  <div className="text-green-400 mb-2">{`// models/Post.js`}</div>
                  <div className="text-blue-300">const postSchema = new Schema(&#123;</div>
                  <div className="ml-2 text-white">title: &#123;</div>
                  <div className="ml-4 text-white">type: String,</div>
                  <div className="ml-4 text-white">required: true,</div>
                  <div className="ml-4 text-white">minlength: 5</div>
                  <div className="ml-2 text-white">&#125;,</div>
                  <div className="ml-2 text-white">content: &#123;</div>
                  <div className="ml-4 text-white">type: String,</div>
                  <div className="ml-4 text-white">required: true</div>
                  <div className="ml-2 text-white">&#125;,</div>
                  <div className="ml-2 text-white">author: String,</div>
                  <div className="ml-2 text-white">tags: [String],</div>
                  <div className="ml-2 text-white">published: Boolean,</div>
                  <div className="ml-2 text-white">views: &#123; type: Number, default: 0 &#125;</div>
                  <div className="text-blue-300">&#125;, &#123; timestamps: true &#125;);</div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-6 border border-green-400">
                <h3 className="text-2xl font-bold text-green-300 mb-4">🏭 The Model</h3>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-xs">
                  <div className="text-green-400 mb-2">{`// Create the model`}</div>
                  <div className="text-yellow-300">const Post = mongoose.model('Post', postSchema);</div>
                  <div className="mt-4 text-green-400">{`// Now you can use it!`}</div>
                  <div className="text-white mt-2">Post.create(...)</div>
                  <div className="text-white">Post.find(...)</div>
                  <div className="text-white">Post.findById(...)</div>
                  <div className="text-white">Post.updateOne(...)</div>
                  <div className="text-white">Post.deleteOne(...)</div>
                </div>
              </div>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-8 border border-purple-400">
              <h3 className="text-2xl font-bold text-purple-300 mb-6 text-center">🚀 Common Operations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="font-bold mb-3 text-lg">➕ Create a Post</div>
                  <div className="bg-gray-900 rounded-lg p-3 font-mono text-xs">
                    <div className="text-white">await Post.create(&#123;</div>
                    <div className="ml-2 text-white">title: "Intro to MongoDB",</div>
                    <div className="ml-2 text-white">content: "MongoDB is...",</div>
                    <div className="ml-2 text-white">author: "Alice"</div>
                    <div className="text-white">&#125;);</div>
                  </div>
                </div>
                <div>
                  <div className="font-bold mb-3 text-lg">🔍 Find All Posts</div>
                  <div className="bg-gray-900 rounded-lg p-3 font-mono text-xs">
                    <div className="text-white">const posts = await Post</div>
                    <div className="ml-2 text-white">.find(&#123; published: true &#125;)</div>
                    <div className="ml-2 text-white">.sort('-createdAt')</div>
                    <div className="ml-2 text-white">.limit(10);</div>
                  </div>
                </div>
                <div>
                  <div className="font-bold mb-3 text-lg">✏️ Update a Post</div>
                  <div className="bg-gray-900 rounded-lg p-3 font-mono text-xs">
                    <div className="text-white">await Post.findByIdAndUpdate(</div>
                    <div className="ml-2 text-white">id,</div>
                    <div className="ml-2 text-white">&#123; $inc: &#123; views: 1 &#125; &#125;</div>
                    <div className="text-white">);</div>
                  </div>
                </div>
                <div>
                  <div className="font-bold mb-3 text-lg">🗑️ Delete a Post</div>
                  <div className="bg-gray-900 rounded-lg p-3 font-mono text-xs">
                    <div className="text-white">await Post.findByIdAndDelete(</div>
                    <div className="ml-2 text-white">id</div>
                    <div className="text-white">);</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-400/30">
              <div className="text-xl font-bold text-orange-300 mb-3 text-center">💡 Pro Tip</div>
              <div className="text-lg text-orange-100 text-center">
                Use timestamps: true to automatically add createdAt and updatedAt fields!
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-purple-600'
    },

    // Slide 22: Best Practices
    {
      id: 'best-practices',
      title: 'MongoDB Best Practices',
      content: (
        <div className="text-white animate-fade-in space-y-8">
          <style>{customStyles}</style>
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">⭐</div>
            <h2 className="text-4xl font-extrabold mb-4">Best Practices</h2>
            <p className="text-xl text-white/80">Professional MongoDB development</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-500/20 rounded-xl p-6 border border-green-400">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">✅</div>
                  <h3 className="text-xl font-bold text-green-300">Do This</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <span className="text-green-300">•</span>
                    <div><strong>Use schemas</strong> even though MongoDB doesn't require them</div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-green-300">•</span>
                    <div><strong>Add indexes</strong> to fields you query frequently</div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-green-300">•</span>
                    <div><strong>Use env variables</strong> for connection strings</div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-green-300">•</span>
                    <div><strong>Handle errors</strong> with try/catch blocks</div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-green-300">•</span>
                    <div><strong>Close connections</strong> gracefully on shutdown</div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-green-300">•</span>
                    <div><strong>Use lean()</strong> for read-only operations</div>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/20 rounded-xl p-6 border border-red-400">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">❌</div>
                  <h3 className="text-xl font-bold text-red-300">Avoid This</h3>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-2">
                    <span className="text-red-300">•</span>
                    <div><strong>Don't store credentials</strong> in your code</div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-red-300">•</span>
                    <div><strong>Don't fetch everything</strong> - use select() to limit fields</div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-red-300">•</span>
                    <div><strong>Don't ignore errors</strong> - always handle failures</div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-red-300">•</span>
                    <div><strong>Don't nest too deeply</strong> - 2-3 levels max</div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-red-300">•</span>
                    <div><strong>Don't use MongoDB for transactions</strong> if you need ACID guarantees</div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-red-300">•</span>
                    <div><strong>Don't skip validation</strong> - always validate user input</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400">
              <h3 className="text-xl font-bold text-blue-300 mb-4 text-center">🔒 Security Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-blue-600/30 rounded-lg p-4">
                  <div className="text-2xl mb-2 text-center">🔐</div>
                  <div className="font-bold mb-1">Authentication</div>
                  <div className="text-blue-200">Always use username + password</div>
                </div>
                <div className="bg-blue-600/30 rounded-lg p-4">
                  <div className="text-2xl mb-2 text-center">🌐</div>
                  <div className="font-bold mb-1">Whitelist IPs</div>
                  <div className="text-blue-200">Don't allow access from anywhere in production</div>
                </div>
                <div className="bg-blue-600/30 rounded-lg p-4">
                  <div className="text-2xl mb-2 text-center">🛡️</div>
                  <div className="font-bold mb-1">Sanitize Input</div>
                  <div className="text-blue-200">Prevent NoSQL injection attacks</div>
                </div>
              </div>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-400">
              <h3 className="text-xl font-bold text-purple-300 mb-4 text-center">⚡ Performance Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-purple-600/30 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">📊</div>
                  <div className="font-bold mb-1">Create Indexes</div>
                  <div className="text-purple-200">Speed up queries by 100x</div>
                </div>
                <div className="bg-purple-600/30 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="font-bold mb-1">Project Fields</div>
                  <div className="text-purple-200">Only fetch what you need</div>
                </div>
                <div className="bg-purple-600/30 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">🔄</div>
                  <div className="font-bold mb-1">Use Pagination</div>
                  <div className="text-purple-200">Limit + skip for large datasets</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-cyan-600'
    },

    // Slide 23: See You Next Week
    {
      id: 'see-you-next-week',
      title: 'See You Next Week',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-9xl mb-12 animate-bounce-in">👋</div>
            
            <h2 className="text-6xl font-extrabold mb-12">
              See You Next Week!
            </h2>
            
            <div className="bg-yellow-500/20 rounded-xl p-8 border-2 border-yellow-400">
              <div className="text-3xl font-bold text-yellow-300 mb-6">
                📧 Extra Credit Opportunity
              </div>
              <div className="text-2xl leading-relaxed">
                Have <strong className="text-yellow-300">one person</strong> from your group send me an email for extra credit
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 via-emerald-600 to-teal-600'
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

export default Class10Slides; 