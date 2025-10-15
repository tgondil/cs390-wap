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

const Class12Slides = () => {
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
              Class 12: Mongoose in Practice
            </div>
            <div className="text-xl text-blue-300 mt-4">
              Modeling, Validation & Relationships
            </div>
          </div>
          
          <div className="mt-16">
            <div className="text-2xl font-medium text-white">Tanay Gondil</div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-indigo-700'
    },

    // Slide 2: From Theory to Code
    {
      id: 'theory-to-code',
      title: 'From Theory to Code',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">From Theory to Practice</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🛠️</div>
            <h3 className="text-3xl font-bold mb-12 text-yellow-300">You've seen the "why" — now build it!</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-purple-500/20 rounded-xl p-8 border-2 border-purple-400">
                <h4 className="text-2xl font-bold text-purple-300 mb-6">📚 Last Class</h4>
                <div className="space-y-4 text-left">
                  <div className="bg-purple-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">Data Modeling Patterns</div>
                    <div className="text-purple-200 text-sm">When to embed vs reference</div>
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">Performance Thinking</div>
                    <div className="text-purple-200 text-sm">Design for access patterns</div>
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">Scaling Strategies</div>
                    <div className="text-purple-200 text-sm">Indexes, pagination, aggregation</div>
                  </div>
                </div>
                <div className="mt-6 bg-purple-600/30 rounded-lg p-4">
                  <div className="text-purple-100 text-center font-bold">Theory & Concepts</div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <h4 className="text-2xl font-bold text-green-300 mb-6">💻 This Class</h4>
                <div className="space-y-4 text-left">
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">Mongoose Schemas</div>
                    <div className="text-green-200 text-sm">Structure + validation in code</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">Relationships</div>
                    <div className="text-green-200 text-sm">References & .populate() magic</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">REST API</div>
                    <div className="text-green-200 text-sm">User → Posts in Express</div>
                  </div>
                </div>
                <div className="mt-6 bg-green-600/30 rounded-lg p-4">
                  <div className="text-green-100 text-center font-bold">Implementation & Code</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400/30">
              <div className="text-2xl font-bold text-blue-300 mb-4">🎯 Today's Goal</div>
              <div className="text-xl text-blue-100">
                Build a complete <strong>User → Posts API</strong> with validation, relationships, and middleware
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-pink-600'
    },

    // Slide 3: What is Mongoose?
    {
      id: 'what-is-mongoose',
      title: 'What is Mongoose?',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">What is Mongoose?</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🦦</div>
            <h3 className="text-3xl font-bold mb-12 text-green-300">ODM: Object-Document Mapper</h3>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 border-2 border-white/20 mb-8">
              <div className="text-2xl mb-6">Mongoose is your <span className="text-yellow-300 font-bold">bridge</span> between JavaScript objects and MongoDB documents</div>
              <div className="text-xl text-blue-200">
                It brings structure, validation, and relationships to the schemaless world of MongoDB
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-red-500/20 rounded-xl p-8 border-2 border-red-400">
                <h4 className="text-2xl font-bold text-red-300 mb-6">❌ Raw MongoDB Driver</h4>
                <div className="space-y-3 text-left text-sm">
                  <div className="bg-red-600/30 rounded-lg p-3">
                    <div className="font-bold text-red-200">No structure enforcement</div>
                    <div className="text-red-100">Any data can go in</div>
                  </div>
                  <div className="bg-red-600/30 rounded-lg p-3">
                    <div className="font-bold text-red-200">Manual validation</div>
                    <div className="text-red-100">You write all the checks</div>
                  </div>
                  <div className="bg-red-600/30 rounded-lg p-3">
                    <div className="font-bold text-red-200">Complex relationships</div>
                    <div className="text-red-100">Manual JOIN logic everywhere</div>
                  </div>
                  <div className="bg-red-600/30 rounded-lg p-3">
                    <div className="font-bold text-red-200">No type safety</div>
                    <div className="text-red-100">Runtime errors waiting to happen</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <h4 className="text-2xl font-bold text-green-300 mb-6">✅ With Mongoose</h4>
                <div className="space-y-3 text-left text-sm">
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <div className="font-bold text-green-200">Schema-based structure</div>
                    <div className="text-green-100">Define once, enforce everywhere</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <div className="font-bold text-green-200">Built-in validation</div>
                    <div className="text-green-100">Declarative, automatic checks</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <div className="font-bold text-green-200">Simple .populate()</div>
                    <div className="text-green-100">Relationships made easy</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <div className="font-bold text-green-200">Middleware hooks</div>
                    <div className="text-green-100">Pre/post save logic built in</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/30">
              <div className="text-lg">
                <strong className="text-blue-300">Think of it like adding rules to a notebook:</strong> You get structure and safety while keeping flexibility
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-cyan-600 to-blue-700'
    },

    // Slide 4: Schemas - The Blueprint
    {
      id: 'schemas-blueprint',
      title: 'Schemas: The Blueprint',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Schemas: Your Data Blueprint</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📐</div>
            <h3 className="text-3xl font-bold mb-12 text-blue-300">Structure Before Storage</h3>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 border-2 border-white/20 mb-8">
              <div className="text-2xl mb-6">A schema is your <span className="text-yellow-300 font-bold">contract</span> with the database</div>
              <div className="text-xl text-blue-200 mb-8">
                It defines what fields exist, their types, validation rules, defaults, and behavior
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/50">
                <div className="text-4xl mb-4">📋</div>
                <h4 className="text-xl font-bold text-blue-300 mb-3">Structure</h4>
                <p className="text-blue-100">Define fields and their types</p>
              </div>

              <div className="bg-green-500/20 rounded-xl p-6 border border-green-400/50">
                <div className="text-4xl mb-4">✅</div>
                <h4 className="text-xl font-bold text-green-300 mb-3">Validation</h4>
                <p className="text-green-100">Rules that data must follow</p>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-400/50">
                <div className="text-4xl mb-4">⚙️</div>
                <h4 className="text-xl font-bold text-purple-300 mb-3">Behavior</h4>
                <p className="text-purple-100">Methods, virtuals, middleware</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-500/20 rounded-lg p-6 border border-green-400/50 text-left">
                <div className="text-xl font-bold text-green-300 mb-3">✅ What Schemas Give You</div>
                <ul className="space-y-2 text-green-100">
                  <li>• <strong>Consistency:</strong> All docs follow same structure</li>
                  <li>• <strong>Validation:</strong> Bad data rejected automatically</li>
                  <li>• <strong>Defaults:</strong> Fill in missing values</li>
                  <li>• <strong>Virtuals:</strong> Computed properties</li>
                  <li>• <strong>Middleware:</strong> Pre/post hooks</li>
                  <li>• <strong>Type Casting:</strong> Auto-convert types</li>
                </ul>
              </div>

              <div className="bg-red-500/20 rounded-lg p-6 border border-red-400/50 text-left">
                <div className="text-xl font-bold text-red-300 mb-3">❌ Without Schemas</div>
                <ul className="space-y-2 text-red-100">
                  <li>• <strong>Chaos:</strong> Every doc can be different</li>
                  <li>• <strong>Bugs:</strong> Missing fields break code</li>
                  <li>• <strong>Manual work:</strong> Check everything yourself</li>
                  <li>• <strong>Typos:</strong> "usrname" vs "username"</li>
                  <li>• <strong>Type issues:</strong> String where number expected</li>
                  <li>• <strong>Hard to maintain:</strong> No single source of truth</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-700'
    },

    // Slide 5: Schema Types Deep Dive
    {
      id: 'schema-types',
      title: 'Schema Types',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Schema Types: Your Toolkit</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🔤</div>
            <h3 className="text-3xl font-bold mb-12 text-yellow-300">Each Type Has Superpowers</h3>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="bg-blue-500/30 rounded-xl p-4 border border-blue-400/50">
                <div className="text-3xl mb-2">📝</div>
                <h4 className="text-lg font-bold text-blue-300 mb-2">String</h4>
                <p className="text-blue-100 text-xs">lowercase, trim, match, enum</p>
              </div>

              <div className="bg-green-500/30 rounded-xl p-4 border border-green-400/50">
                <div className="text-3xl mb-2">🔢</div>
                <h4 className="text-lg font-bold text-green-300 mb-2">Number</h4>
                <p className="text-green-100 text-xs">min, max, get, set</p>
              </div>

              <div className="bg-purple-500/30 rounded-xl p-4 border border-purple-400/50">
                <div className="text-3xl mb-2">✅</div>
                <h4 className="text-lg font-bold text-purple-300 mb-2">Boolean</h4>
                <p className="text-purple-100 text-xs">default true/false</p>
              </div>

              <div className="bg-pink-500/30 rounded-xl p-4 border border-pink-400/50">
                <div className="text-3xl mb-2">📅</div>
                <h4 className="text-lg font-bold text-pink-300 mb-2">Date</h4>
                <p className="text-pink-100 text-xs">min, max, default: Date.now</p>
              </div>

              <div className="bg-yellow-500/30 rounded-xl p-4 border border-yellow-400/50">
                <div className="text-3xl mb-2">🔗</div>
                <h4 className="text-lg font-bold text-yellow-300 mb-2">ObjectId</h4>
                <p className="text-yellow-100 text-xs">ref, autopopulate</p>
              </div>

              <div className="bg-orange-500/30 rounded-xl p-4 border border-orange-400/50">
                <div className="text-3xl mb-2">📦</div>
                <h4 className="text-lg font-bold text-orange-300 mb-2">Array</h4>
                <p className="text-orange-100 text-xs">[Type], validate items</p>
              </div>

              <div className="bg-red-500/30 rounded-xl p-4 border border-red-400/50">
                <div className="text-3xl mb-2">🗂️</div>
                <h4 className="text-lg font-bold text-red-300 mb-2">Map</h4>
                <p className="text-red-100 text-xs">Key-value pairs</p>
              </div>

              <div className="bg-cyan-500/30 rounded-xl p-4 border border-cyan-400/50">
                <div className="text-3xl mb-2">📄</div>
                <h4 className="text-lg font-bold text-cyan-300 mb-2">Buffer</h4>
                <p className="text-cyan-100 text-xs">Binary data, files</p>
              </div>
            </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-600">
              <div className="text-sm font-mono text-left text-gray-300 space-y-1">
                <div><span className="text-blue-300">username:</span> <span className="text-yellow-300">String</span> <span className="text-gray-500">{'//'} Simple</span></div>
                <div><span className="text-blue-300">email:</span> {'{'} <span className="text-yellow-300">type: String, required: true, unique: true</span> {'}'}</div>
                <div><span className="text-blue-300">age:</span> {'{'} <span className="text-yellow-300">type: Number, min: 13, max: 120</span> {'}'}</div>
                <div><span className="text-blue-300">tags:</span> <span className="text-yellow-300">[String]</span> <span className="text-gray-500">{'//'} Array of strings</span></div>
                <div><span className="text-blue-300">author:</span> {'{'} <span className="text-yellow-300">type: ObjectId, ref: 'User'</span> {'}'} <span className="text-gray-500">{'//'} Reference</span></div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-700 to-cyan-600'
    },

    // Slide 6: Defining a Schema
    {
      id: 'defining-schema-example',
      title: 'Defining a Schema',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Creating Your First Schema</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🏗️</div>
            <h3 className="text-3xl font-bold mb-12 text-blue-300">Step-by-Step Schema Definition</h3>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20">
                <div className="text-xl mb-4">A complete User schema with validation</div>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-6 border-2 border-yellow-500">
                <div className="text-left">
                  <pre className="text-sm font-mono text-yellow-200 leading-relaxed">
                    <code>{`const mongoose = require('mongoose');

// Step 1: Define the schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,           // Data type
    required: true,         // Must be provided
    unique: true,           // No duplicates
    minlength: 3,           // At least 3 chars
    maxlength: 20           // Max 20 chars
  },
  
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,        // Convert to lowercase
    match: /^\\S+@\\S+\\.\\S+$/  // Must be valid email format
  },
  
  age: {
    type: Number,
    min: 13,                // Minimum value
    max: 120                // Maximum value
  },
  
  isActive: {
    type: Boolean,
    default: true           // Default value if not provided
  }
}, { timestamps: true });   // Auto-add createdAt & updatedAt

// Step 2: Create the model
const User = mongoose.model('User', userSchema);

// Step 3: Export it
module.exports = User;`}</code>
                  </pre>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/50 text-left">
                  <h4 className="text-xl font-bold text-blue-300 mb-3">Key Concepts</h4>
                  <div className="space-y-2 text-sm text-blue-100">
                    <div><strong>new Schema():</strong> Creates schema definition</div>
                    <div><strong>type:</strong> Specifies data type (String, Number, etc.)</div>
                    <div><strong>required:</strong> Field must be provided</div>
                    <div><strong>unique:</strong> No two docs can have same value</div>
                  </div>
                </div>

                <div className="bg-green-500/20 rounded-xl p-6 border border-green-400/50 text-left">
                  <h4 className="text-xl font-bold text-green-300 mb-3">Validation Options</h4>
                  <div className="space-y-2 text-sm text-green-100">
                    <div><strong>minlength/maxlength:</strong> String length limits</div>
                    <div><strong>min/max:</strong> Number range limits</div>
                    <div><strong>match:</strong> Regex pattern matching</div>
                    <div><strong>default:</strong> Value if not provided</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-orange-600 to-yellow-600'
    },

    // Slide 7: Basic Mongoose Code
    {
      id: 'basic-mongoose-code',
      title: 'Basic Mongoose Code',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Mongoose in Action</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📝</div>
            <h3 className="text-3xl font-bold mb-12 text-yellow-300">The Basic Workflow</h3>
            
            <div className="space-y-6">
              <div className="bg-blue-500/20 rounded-xl p-8 border-2 border-blue-400">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-blue-300">Step 1: Connect to MongoDB</h4>
                  <div className="text-4xl">1️⃣</div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-6 text-left">
                  <pre className="text-sm font-mono text-blue-200">
                    <code>{`const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myapp')
  .then(() => console.log('Connected!'))
  .catch(err => console.error('Failed:', err));`}</code>
                  </pre>
                </div>
                <div className="mt-4 text-sm text-blue-100">
                  <strong>mongoose.connect():</strong> Establishes connection to MongoDB database
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-green-300">Step 2: Create a Document</h4>
                  <div className="text-4xl">2️⃣</div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-6 text-left">
                  <pre className="text-sm font-mono text-green-200">
                    <code>{`const user = new User({
  username: 'alice',
  email: 'alice@example.com'
});

await user.save();  // Saves to database`}</code>
                  </pre>
                </div>
                <div className="mt-4 text-sm text-green-100 space-y-2">
                  <div><strong>new Model():</strong> Creates a new document instance in memory</div>
                  <div><strong>.save():</strong> Writes the document to MongoDB and runs validation</div>
                </div>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-8 border-2 border-purple-400">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-purple-300">Step 3: Query Documents</h4>
                  <div className="text-4xl">3️⃣</div>
                </div>
                <div className="bg-gray-900/50 rounded-lg p-6 text-left">
                  <pre className="text-sm font-mono text-purple-200">
                    <code>{`// Find all users
const allUsers = await User.find();

// Find one specific user
const alice = await User.findOne({ username: 'alice' });

// Find by ID
const user = await User.findById('507f1f77bcf86cd799439011');`}</code>
                  </pre>
                </div>
                <div className="mt-4 text-sm text-purple-100 space-y-2">
                  <div><strong>.find():</strong> Returns array of all documents matching criteria</div>
                  <div><strong>.findOne():</strong> Returns first document that matches, or null</div>
                  <div><strong>.findById():</strong> Finds document by its unique _id field</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-teal-600 to-green-700'
    },

    // Slide 6: Validation Power
    {
      id: 'validation',
      title: 'Validation: Your Safety Net',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Validation: Defense in Depth</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🛡️</div>
            <h3 className="text-3xl font-bold mb-12 text-red-300">Three Layers of Protection</h3>
            
            <div className="space-y-6 mb-8">
              <div className="bg-blue-500/20 rounded-xl p-6 border-2 border-blue-400">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-blue-300">Layer 1: Built-in Validators</h4>
                  <div className="text-4xl">1️⃣</div>
                </div>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>required:</strong> Must provide
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>unique:</strong> No duplicates
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>min/max:</strong> Range limits
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>minlength/maxlength:</strong> String length
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>enum:</strong> From list only
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>match:</strong> Regex pattern
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-400">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-green-300">Layer 2: Custom Validators</h4>
                  <div className="text-4xl">2️⃣</div>
                </div>
                <div className="text-left text-sm bg-green-600/30 rounded-lg p-4">
                  <div className="text-green-200 mb-2">Write your own validation logic:</div>
                  <div className="font-mono text-green-100">
                    validate: {'{'} validator: (v) =&gt; v.length &gt;= 8, message: 'Too short!' {'}'}
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-6 border-2 border-purple-400">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-purple-300">Layer 3: Schema Middleware</h4>
                  <div className="text-4xl">3️⃣</div>
                </div>
                <div className="text-left text-sm bg-purple-600/30 rounded-lg p-4">
                  <div className="text-purple-200 mb-2">Pre-save hooks for complex validation:</div>
                  <div className="font-mono text-purple-100">
                    schema.pre('save', function() {'{'} {'/* validate across fields */'} {'}'})
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <div className="text-xl">
                💡 <strong>Pro Tip:</strong> Validate early, validate often. Server-side validation is NOT optional!
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-600 to-orange-600'
    },

    // Slide 7: Advanced Schema Features
    {
      id: 'advanced-features',
      title: 'Advanced Schema Features',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Beyond Basic Fields</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">⚡</div>
            <h3 className="text-3xl font-bold mb-12 text-yellow-300">Schemas Can Do So Much More</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/50 text-left">
                <h4 className="text-2xl font-bold text-blue-300 mb-4">🎭 Virtuals</h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong className="text-blue-200">What:</strong> Computed properties that don't get stored
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong className="text-blue-200">Why:</strong> Derive data on-the-fly, save space
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong className="text-blue-200">Example:</strong> fullName from firstName + lastName
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-6 border border-green-400/50 text-left">
                <h4 className="text-2xl font-bold text-green-300 mb-4">🪝 Middleware</h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong className="text-green-200">pre('save'):</strong> Run before saving
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong className="text-green-200">post('save'):</strong> Run after saving
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong className="text-green-200">Use cases:</strong> Hash passwords, update timestamps
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-400/50 text-left">
                <h4 className="text-2xl font-bold text-purple-300 mb-4">🔧 Instance Methods</h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-purple-600/30 rounded-lg p-3">
                    <strong className="text-purple-200">What:</strong> Custom functions on documents
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-3">
                    <strong className="text-purple-200">Access:</strong> user.methodName()
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-3">
                    <strong className="text-purple-200">Example:</strong> user.comparePassword()
                  </div>
                </div>
              </div>

              <div className="bg-pink-500/20 rounded-xl p-6 border border-pink-400/50 text-left">
                <h4 className="text-2xl font-bold text-pink-300 mb-4">⚙️ Static Methods</h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-pink-600/30 rounded-lg p-3">
                    <strong className="text-pink-200">What:</strong> Custom functions on Model itself
                  </div>
                  <div className="bg-pink-600/30 rounded-lg p-3">
                    <strong className="text-pink-200">Access:</strong> User.methodName()
                  </div>
                  <div className="bg-pink-600/30 rounded-lg p-3">
                    <strong className="text-pink-200">Example:</strong> User.findByEmail()
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-orange-500/20 rounded-xl p-6 border border-orange-400/30">
              <div className="text-lg">
                These features turn your schemas from <strong>passive data definitions</strong> into <strong>active, intelligent models</strong>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-teal-600 to-cyan-700'
    },

    // Slide 8: Relationships Recap
    {
      id: 'relationships-recap',
      title: 'Relationships (Recap)',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Quick Recap: Relationships</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-6xl mb-6">📚</div>
            <h3 className="text-2xl font-bold mb-8 text-yellow-300">Remember from last class?</h3>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 mb-8">
              <div className="text-xl mb-4">The fundamental decision in data modeling:</div>
              <div className="text-3xl font-bold text-yellow-300">Should related data live INSIDE or OUTSIDE?</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <h4 className="text-2xl font-bold text-green-300 mb-4">📦 Embedding</h4>
                <div className="text-5xl mb-4">⬇️</div>
                <div className="space-y-3 text-left">
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong>When:</strong> Small, bounded (1-100 items)
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong>Benefit:</strong> One query, atomic updates
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong>Examples:</strong> User addresses, order items
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/20 rounded-xl p-8 border-2 border-blue-400">
                <h4 className="text-2xl font-bold text-blue-300 mb-4">🔗 Referencing</h4>
                <div className="text-5xl mb-4">➡️</div>
                <div className="space-y-3 text-left">
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>When:</strong> Many or unbounded (100+)
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>Benefit:</strong> No size limits, flexibility
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>Examples:</strong> User posts, product reviews
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-purple-500/20 rounded-xl p-6 border border-purple-400/30">
              <div className="text-xl">
                💡 Today we implement these patterns in Mongoose with <strong>.populate()</strong>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-blue-700'
    },

    // Slide 9: Embedding in Mongoose
    {
      id: 'embedding-mongoose',
      title: 'Embedding in Mongoose',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Embedding: Subdocuments</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📦</div>
            <h3 className="text-3xl font-bold mb-12 text-green-300">Nesting Schemas Within Schemas</h3>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 border-2 border-white/20 mb-8">
              <div className="text-2xl mb-6">Subdocuments have their <span className="text-yellow-300 font-bold">own schemas</span> and can have validation, defaults, and methods</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-900/50 rounded-xl p-6 border border-purple-400/50 text-left">
                <h4 className="text-xl font-bold text-purple-300 mb-4">Step 1: Define Subdocument Schema</h4>
                <div className="bg-black/50 rounded p-4 font-mono text-sm text-purple-200">
                  addressSchema = new Schema({'{'}
                  <div className="ml-4">street: String,</div>
                  <div className="ml-4">city: String,</div>
                  <div className="ml-4">type: {'{'}enum: ['home','work']{'}'}
                  </div>
                  {'}'})
                </div>
              </div>

              <div className="bg-gray-900/50 rounded-xl p-6 border border-green-400/50 text-left">
                <h4 className="text-xl font-bold text-green-300 mb-4">Step 2: Embed in Parent Schema</h4>
                <div className="bg-black/50 rounded p-4 font-mono text-sm text-green-200">
                  userSchema = new Schema({'{'}
                  <div className="ml-4">name: String,</div>
                  <div className="ml-4">addresses: [addressSchema]</div>
                  {'}'})
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400/50">
              <h4 className="text-2xl font-bold text-blue-300 mb-4">✨ Subdocument Superpowers</h4>
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div className="bg-blue-600/30 rounded-lg p-3">
                  <strong>Auto IDs:</strong> Each subdoc gets an _id
                </div>
                <div className="bg-blue-600/30 rounded-lg p-3">
                  <strong>Validation:</strong> Runs on subdoc too
                </div>
                <div className="bg-blue-600/30 rounded-lg p-3">
                  <strong>Methods:</strong> Can have their own
                </div>
                <div className="bg-blue-600/30 rounded-lg p-3">
                  <strong>Atomic:</strong> Save parent saves all
                </div>
                <div className="bg-blue-600/30 rounded-lg p-3">
                  <strong>Access:</strong> user.addresses[0].city
                </div>
                <div className="bg-blue-600/30 rounded-lg p-3">
                  <strong>Modify:</strong> user.addresses.push(...)
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-teal-700'
    },

    // Slide 10: Referencing in Mongoose
    {
      id: 'referencing-mongoose',
      title: 'Referencing in Mongoose',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Referencing: ObjectId Links</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🔗</div>
            <h3 className="text-3xl font-bold mb-12 text-blue-300">Store IDs, Fetch Later</h3>
            
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20">
                <div className="text-2xl mb-4">The pattern for one-to-many relationships:</div>
                <div className="text-xl text-blue-200">
                  Child documents store a reference (ObjectId) to their parent
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-purple-900/30 rounded-xl p-6 border border-purple-400/50">
                  <h4 className="text-xl font-bold text-purple-300 mb-4">Parent: User</h4>
                  <div className="bg-black/50 rounded p-4 font-mono text-sm text-left">
                    <div className="text-purple-200">const userSchema = new Schema({'{'}
                    <div className="ml-4">username: String,</div>
                    <div className="ml-4">email: String</div>
                    {'}'});</div>
                  </div>
                  <div className="mt-4 text-sm text-purple-100">
                    ✅ No mention of posts! Clean and focused
                  </div>
                </div>

                <div className="bg-blue-900/30 rounded-xl p-6 border border-blue-400/50">
                  <h4 className="text-xl font-bold text-blue-300 mb-4">Child: Post</h4>
                  <div className="bg-black/50 rounded p-4 font-mono text-sm text-left">
                    <div className="text-blue-200">const postSchema = new Schema({'{'}
                    <div className="ml-4">title: String,</div>
                    <div className="ml-4">content: String,</div>
                    <div className="ml-4 text-yellow-300">author: {'{'} type: ObjectId, ref: 'User' {'}'}</div>
                    {'}'});</div>
                  </div>
                  <div className="mt-4 text-sm text-blue-100">
                    ✅ ref: 'User' tells Mongoose how to populate
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-6 border border-green-400/50">
                <h4 className="text-xl font-bold text-green-300 mb-3">🔑 Key Concepts</h4>
                <div className="grid grid-cols-2 gap-4 text-sm text-left">
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong className="text-green-200">ObjectId:</strong> Unique 12-byte identifier
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong className="text-green-200">ref:</strong> Points to model name (string)
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong className="text-green-200">Stored:</strong> Just the ID in database
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong className="text-green-200">Query:</strong> Find posts by author ID
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-700 to-purple-700'
    },

    // Slide 11: The Magic of Populate
    {
      id: 'populate-deep-dive',
      title: 'Populate: Deep Dive',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">.populate(): The Secret Sauce</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">✨</div>
            <h3 className="text-3xl font-bold mb-12 text-yellow-300">Automatic Document Fetching</h3>
            
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20">
                <div className="text-2xl mb-4">What happens under the hood:</div>
                <div className="text-lg text-blue-200">
                  Mongoose sees the ObjectId, finds the referenced document, and replaces the ID with actual data
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="bg-red-500/20 rounded-xl p-6 border-2 border-red-400">
                  <div className="text-2xl font-bold text-red-300 mb-4">1️⃣ Without Populate</div>
                  <div className="bg-black/50 rounded p-4 text-sm text-left font-mono">
                    <div className="text-red-200">{'{'}
                    <div className="ml-2">title: "My Post",</div>
                    <div className="ml-2 text-yellow-300">author: ObjectId("abc123")</div>
                    {'}'}</div>
                  </div>
                  <div className="mt-3 text-sm text-red-100">Just an ID 😞</div>
                </div>

                <div className="bg-yellow-500/20 rounded-xl p-6 border-2 border-yellow-400">
                  <div className="text-2xl font-bold text-yellow-300 mb-4">2️⃣ With .populate()</div>
                  <div className="bg-black/50 rounded p-4 text-sm text-left font-mono">
                    <div className="text-yellow-200">Post.findById(id)
                    <div className="ml-2">.populate('author')</div>
                    </div>
                  </div>
                  <div className="mt-3 text-sm text-yellow-100">Mongoose does the work! 🔧</div>
                </div>

                <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-400">
                  <div className="text-2xl font-bold text-green-300 mb-4">3️⃣ Result</div>
                  <div className="bg-black/50 rounded p-4 text-sm text-left font-mono">
                    <div className="text-green-200">{'{'}
                    <div className="ml-2">title: "My Post",</div>
                    <div className="ml-2">author: {'{'}...{'}'}</div>
                    {'}'}</div>
                  </div>
                  <div className="mt-3 text-sm text-green-100">Full object! 🎉</div>
                </div>
              </div>

              <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400/50">
                <h4 className="text-2xl font-bold text-blue-300 mb-4">⚡ Advanced Populate Options</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>Select fields:</strong><br/>.populate('author', 'name email')
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>Multiple paths:</strong><br/>.populate('author').populate('comments')
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>Nested populate:</strong><br/>Populate within populate
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>Match conditions:</strong><br/>Only populate if active
                  </div>
                </div>
              </div>

              <div className="bg-orange-500/20 rounded-xl p-6 border border-orange-400/30">
                <div className="text-lg">
                  ⚠️ <strong>Performance Note:</strong> Each populate() is an additional database query. Use selectively!
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-600 to-pink-600'
    },

    // Slide 12: Building the API
    {
      id: 'building-api',
      title: 'Building the API',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Putting It All Together</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🚀</div>
            <h3 className="text-3xl font-bold mb-12 text-green-300">User → Posts REST API</h3>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 border-2 border-white/20 mb-8">
              <div className="text-2xl mb-6">Three endpoints that showcase everything:</div>
              <div className="text-xl text-blue-200">
                Schemas, validation, references, and populate()
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-blue-500/30 rounded-xl p-8 border-2 border-blue-400 text-left">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-blue-300">1. GET All Posts</h4>
                  <div className="bg-blue-600 text-white px-4 py-2 rounded font-mono text-sm">GET /api/posts</div>
                </div>
                <p className="text-blue-100 text-lg mb-3">Return all posts with author information populated</p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>Uses:</strong> .find() + .populate()
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>Sorts:</strong> Newest first
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>Selects:</strong> Only username & email
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>Limits:</strong> 20 posts
                  </div>
                </div>
              </div>

              <div className="bg-green-500/30 rounded-xl p-8 border-2 border-green-400 text-left">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-green-300">2. POST New Post</h4>
                  <div className="bg-green-600 text-white px-4 py-2 rounded font-mono text-sm">POST /api/posts</div>
                </div>
                <p className="text-green-100 text-lg mb-3">Create a new post with validation</p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong>Validates:</strong> Title & content required
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong>References:</strong> Links to author by ID
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong>Returns:</strong> Created post with author
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong>Handles:</strong> Validation errors gracefully
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/30 rounded-xl p-8 border-2 border-purple-400 text-left">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-purple-300">3. GET User + Posts</h4>
                  <div className="bg-purple-600 text-white px-4 py-2 rounded font-mono text-sm">GET /api/users/:id</div>
                </div>
                <p className="text-purple-100 text-lg mb-3">Get user with their 5 most recent posts</p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="bg-purple-600/30 rounded-lg p-3">
                    <strong>Finds:</strong> Posts where author = userId
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-3">
                    <strong>Sorts:</strong> By date descending
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-3">
                    <strong>Limits:</strong> To 5 posts
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-3">
                    <strong>Counts:</strong> Total posts by user
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-indigo-700'
    },

    // Slide 13: Middleware & Hooks
    {
      id: 'middleware-hooks',
      title: 'Middleware & Hooks',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Schema Middleware</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🪝</div>
            <h3 className="text-3xl font-bold mb-12 text-green-300">Run Code Before/After Operations</h3>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 mb-8">
              <div className="text-2xl mb-4">Middleware lets you hook into document lifecycle events</div>
              <div className="text-lg text-blue-200">
                Like event listeners, but for database operations
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/50 text-left">
                <h4 className="text-xl font-bold text-blue-300 mb-4">Pre Hooks (Before)</h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>pre('save'):</strong> Before document saved
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>pre('validate'):</strong> Before validation
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>pre('remove'):</strong> Before deleting
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>Common use:</strong> Hash passwords, sanitize
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-6 border border-green-400/50 text-left">
                <h4 className="text-xl font-bold text-green-300 mb-4">Post Hooks (After)</h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong>post('save'):</strong> After document saved
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong>post('find'):</strong> After query executed
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong>post('remove'):</strong> After deleting
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong>Common use:</strong> Logging, cleanup, notify
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-8 border border-purple-400/50">
              <h4 className="text-2xl font-bold text-purple-300 mb-4">Real-World Examples</h4>
              <div className="grid grid-cols-3 gap-4 text-sm text-left">
                <div className="bg-purple-600/30 rounded-lg p-4">
                  <div className="font-bold text-purple-200 mb-2">Password Hashing</div>
                  <div className="text-purple-100">pre('save') → hash password before storing</div>
                </div>
                <div className="bg-purple-600/30 rounded-lg p-4">
                  <div className="font-bold text-purple-200 mb-2">Timestamp Updates</div>
                  <div className="text-purple-100">pre('save') → set updatedAt to now</div>
                </div>
                <div className="bg-purple-600/30 rounded-lg p-4">
                  <div className="font-bold text-purple-200 mb-2">Cascade Delete</div>
                  <div className="text-purple-100">pre('remove') → delete related docs</div>
                </div>
                <div className="bg-purple-600/30 rounded-lg p-4">
                  <div className="font-bold text-purple-200 mb-2">Slug Generation</div>
                  <div className="text-purple-100">pre('save') → create URL-friendly slug</div>
                </div>
                <div className="bg-purple-600/30 rounded-lg p-4">
                  <div className="font-bold text-purple-200 mb-2">Audit Logging</div>
                  <div className="text-purple-100">post('save') → log changes to audit trail</div>
                </div>
                <div className="bg-purple-600/30 rounded-lg p-4">
                  <div className="font-bold text-purple-200 mb-2">Cache Invalidation</div>
                  <div className="text-purple-100">post('save') → clear cached data</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-700 to-blue-800'
    },

    // Slide 14: Query Building Patterns
    {
      id: 'query-patterns',
      title: 'Query Building Patterns',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Query Building Patterns</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🔍</div>
            <h3 className="text-3xl font-bold mb-12 text-blue-300">Mongoose Query Chains</h3>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 mb-8">
              <div className="text-2xl mb-4">Queries in Mongoose are chainable and don't execute until you call them</div>
              <div className="text-lg text-blue-200">
                Build complex queries step-by-step with method chaining
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/50 text-left">
                <h4 className="text-2xl font-bold text-blue-300 mb-4">Query Execution Methods</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong className="text-blue-200">.exec():</strong> Executes and returns Promise
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong className="text-blue-200">await:</strong> Implicitly calls .exec()
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong className="text-blue-200">.then():</strong> Chain promises
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong className="text-blue-200">.lean():</strong> Return plain objects (faster)
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-6 border border-green-400/50 text-left">
                <h4 className="text-2xl font-bold text-green-300 mb-4">Filtering & Sorting</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong className="text-green-200">.find(filter):</strong> Query by criteria
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong className="text-green-200">.where('field'):</strong> Alternative syntax
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong className="text-green-200">.sort({'{field: 1}'}):</strong> Order results
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong className="text-green-200">.limit(n):</strong> Cap result count
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong className="text-green-200">.skip(n):</strong> Offset results
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong className="text-green-200">.select('fields'):</strong> Pick fields
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-400/50 text-left">
                <h4 className="text-2xl font-bold text-purple-300 mb-4">Advanced Operators</h4>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  <div className="bg-purple-600/30 rounded-lg p-3">
                    <strong>$gt/$lt:</strong> Greater/less than
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-3">
                    <strong>$in/$nin:</strong> In/not in array
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-3">
                    <strong>$exists:</strong> Field exists
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-3">
                    <strong>$regex:</strong> Pattern match
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-3">
                    <strong>$and/$or:</strong> Logical operators
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-3">
                    <strong>$elemMatch:</strong> Array matching
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-orange-500/20 rounded-xl p-6 border border-orange-400/30">
              <div className="text-lg">
                💡 <strong>Pro Tip:</strong> Use .lean() for read-only queries — it's 5-10x faster when you don't need Mongoose document methods
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-orange-600 to-red-600'
    },

    // Slide 15: Schema Design Decisions
    {
      id: 'schema-decisions',
      title: 'Schema Design Decisions',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Schema Design Decision Tree</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🌳</div>
            <h3 className="text-3xl font-bold mb-12 text-green-300">Ask These Questions</h3>
            
            <div className="space-y-6">
              <div className="bg-blue-500/20 rounded-xl p-8 border-2 border-blue-400">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-blue-300">1. How Often Will This Data Change?</h4>
                  <div className="text-4xl">📊</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-left text-sm">
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <strong className="text-blue-200">Rarely changes:</strong><br/>
                    User profile, product details → Embed or cache
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <strong className="text-blue-200">Frequently updates:</strong><br/>
                    View counts, likes → Reference or separate
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-green-300">2. What's the Read/Write Ratio?</h4>
                  <div className="text-4xl">⚖️</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-left text-sm">
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <strong className="text-green-200">Read-heavy (1000:1):</strong><br/>
                    Blog posts → Embed author name for fast reads
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <strong className="text-green-200">Write-heavy (1:10):</strong><br/>
                    Chat messages → Reference to avoid duplication
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-8 border-2 border-purple-400">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-purple-300">3. Will This Array Grow Unbounded?</h4>
                  <div className="text-4xl">📈</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-left text-sm">
                  <div className="bg-purple-600/30 rounded-lg p-4">
                    <strong className="text-purple-200">Bounded (1-100):</strong><br/>
                    User addresses, order items → Embed safely
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-4">
                    <strong className="text-purple-200">Unbounded (1000+):</strong><br/>
                    User posts, followers → MUST reference
                  </div>
                </div>
              </div>

              <div className="bg-pink-500/20 rounded-xl p-8 border-2 border-pink-400">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-pink-300">4. Do You Need Atomic Updates?</h4>
                  <div className="text-4xl">⚛️</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-left text-sm">
                  <div className="bg-pink-600/30 rounded-lg p-4">
                    <strong className="text-pink-200">Yes (all-or-nothing):</strong><br/>
                    Orders with items → Embed for consistency
                  </div>
                  <div className="bg-pink-600/30 rounded-lg p-4">
                    <strong className="text-pink-200">No (independent):</strong><br/>
                    Posts and users → Reference for flexibility
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-pink-600 to-red-600'
    },

    // Slide 16: Document Lifecycle
    {
      id: 'document-lifecycle',
      title: 'Document Lifecycle',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Document Lifecycle & Hooks</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">♻️</div>
            <h3 className="text-3xl font-bold mb-12 text-yellow-300">From Creation to Deletion</h3>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 mb-8">
              <div className="text-2xl mb-4">Every document goes through stages — you can hook into each one</div>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-500/20 rounded-xl p-6 border-2 border-blue-400">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">1️⃣</div>
                  <div>
                    <h4 className="text-2xl font-bold text-blue-300">Initialization</h4>
                    <div className="text-blue-200">new Model(data) or Model.create(data)</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm text-left">
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>init hook:</strong> After document initialized
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>Use case:</strong> Set computed fields, transform data
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-400">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">2️⃣</div>
                  <div>
                    <h4 className="text-2xl font-bold text-green-300">Validation</h4>
                    <div className="text-green-200">doc.validate() or automatic on .save()</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm text-left">
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong>pre('validate'):</strong> Before validation runs
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong>post('validate'):</strong> After validation passes
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong>Use case:</strong> Normalize data, cross-field validation
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong>Errors:</strong> Throws ValidationError if fails
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-6 border-2 border-purple-400">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">3️⃣</div>
                  <div>
                    <h4 className="text-2xl font-bold text-purple-300">Saving</h4>
                    <div className="text-purple-200">doc.save() writes to database</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm text-left">
                  <div className="bg-purple-600/30 rounded-lg p-3">
                    <strong>pre('save'):</strong> Before writing to DB
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-3">
                    <strong>post('save'):</strong> After successful save
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-3">
                    <strong>Use case:</strong> Hash passwords, slugify, timestamps
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-3">
                    <strong>this:</strong> Refers to the document being saved
                  </div>
                </div>
              </div>

              <div className="bg-orange-500/20 rounded-xl p-6 border-2 border-orange-400">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">4️⃣</div>
                  <div>
                    <h4 className="text-2xl font-bold text-orange-300">Querying & Updating</h4>
                    <div className="text-orange-200">Model.find(), .findOne(), .update()</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm text-left">
                  <div className="bg-orange-600/30 rounded-lg p-3">
                    <strong>pre('find'):</strong> Before any find query
                  </div>
                  <div className="bg-orange-600/30 rounded-lg p-3">
                    <strong>post('find'):</strong> Modify results after fetch
                  </div>
                  <div className="bg-orange-600/30 rounded-lg p-3">
                    <strong>Use case:</strong> Auto-populate, filter sensitive data
                  </div>
                  <div className="bg-orange-600/30 rounded-lg p-3">
                    <strong>this:</strong> Refers to the query, not document
                  </div>
                </div>
              </div>

              <div className="bg-red-500/20 rounded-xl p-6 border-2 border-red-400">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-4xl">5️⃣</div>
                  <div>
                    <h4 className="text-2xl font-bold text-red-300">Deletion</h4>
                    <div className="text-red-200">doc.remove() or Model.deleteOne()</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 text-sm text-left">
                  <div className="bg-red-600/30 rounded-lg p-3">
                    <strong>pre('remove'):</strong> Before deletion
                  </div>
                  <div className="bg-red-600/30 rounded-lg p-3">
                    <strong>post('remove'):</strong> After deletion
                  </div>
                  <div className="bg-red-600/30 rounded-lg p-3">
                    <strong>Use case:</strong> Cascade delete, cleanup, audit
                  </div>
                  <div className="bg-red-600/30 rounded-lg p-3">
                    <strong>Warning:</strong> deleteMany() doesn't trigger hooks!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-blue-700'
    },

    // Slide 17: Error Handling Patterns
    {
      id: 'error-handling',
      title: 'Error Handling Patterns',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Error Handling in Mongoose</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">⚠️</div>
            <h3 className="text-3xl font-bold mb-12 text-red-300">Handle Errors Gracefully</h3>
            
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-red-500/20 rounded-xl p-8 border-2 border-red-400">
                <h4 className="text-2xl font-bold text-red-300 mb-4">Common Mongoose Errors</h4>
                <div className="grid grid-cols-2 gap-4 text-sm text-left">
                  <div className="bg-red-600/30 rounded-lg p-4">
                    <strong className="text-red-200">ValidationError:</strong><br/>
                    <div className="text-red-100">Schema validation failed</div>
                    <div className="text-xs mt-2">Check error.errors object for details</div>
                  </div>
                  <div className="bg-red-600/30 rounded-lg p-4">
                    <strong className="text-red-200">CastError:</strong><br/>
                    <div className="text-red-100">Wrong type (e.g., invalid ObjectId)</div>
                    <div className="text-xs mt-2">Usually bad user input</div>
                  </div>
                  <div className="bg-red-600/30 rounded-lg p-4">
                    <strong className="text-red-200">MongoError (code: 11000):</strong><br/>
                    <div className="text-red-100">Duplicate key (unique constraint)</div>
                    <div className="text-xs mt-2">Email/username already exists</div>
                  </div>
                  <div className="bg-red-600/30 rounded-lg p-4">
                    <strong className="text-red-200">DocumentNotFoundError:</strong><br/>
                    <div className="text-red-100">No matching document</div>
                    <div className="text-xs mt-2">From findOneAndUpdate with options</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <h4 className="text-2xl font-bold text-green-300 mb-4">Error Handling Strategy</h4>
                <div className="grid grid-cols-3 gap-4 text-sm text-left">
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <strong className="text-green-200">1. Catch Early</strong><br/>
                    <div className="text-green-100 text-xs mt-2">
                      Use try-catch in async functions
                    </div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <strong className="text-green-200">2. Identify Type</strong><br/>
                    <div className="text-green-100 text-xs mt-2">
                      Check error.name and error.code
                    </div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <strong className="text-green-200">3. Return Appropriate Status</strong><br/>
                    <div className="text-green-100 text-xs mt-2">
                      400 validation, 404 not found, 409 duplicate
                    </div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <strong className="text-green-200">4. Send Clear Message</strong><br/>
                    <div className="text-green-100 text-xs mt-2">
                      User-friendly error descriptions
                    </div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <strong className="text-green-200">5. Log Details</strong><br/>
                    <div className="text-green-100 text-xs mt-2">
                      Full error for debugging
                    </div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <strong className="text-green-200">6. Never Expose Stack</strong><br/>
                    <div className="text-green-100 text-xs mt-2">
                      Security risk in production
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/20 rounded-xl p-8 border-2 border-blue-400">
                <h4 className="text-2xl font-bold text-blue-300 mb-4">Validation Error Details</h4>
                <div className="text-left text-sm space-y-3">
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <strong className="text-blue-200">Access specific field errors:</strong><br/>
                    <div className="font-mono text-blue-100 text-xs mt-2">
                      error.errors.email.message → "Please enter a valid email"
                    </div>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <strong className="text-blue-200">Get all validation errors:</strong><br/>
                    <div className="font-mono text-blue-100 text-xs mt-2">
                      Object.values(error.errors).map(e =&gt; e.message)
                    </div>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <strong className="text-blue-200">Validation error structure:</strong><br/>
                    <div className="font-mono text-blue-100 text-xs mt-2">
                      {'{'}name, message, kind, path, value{'}'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-700 to-orange-700'
    },

    // Slide 15: Best Practices
    {
      id: 'best-practices',
      title: 'Best Practices',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Production Best Practices</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">⭐</div>
            <h3 className="text-3xl font-bold mb-12 text-yellow-300">Write Professional-Grade Code</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-500/30 rounded-xl p-6 border border-green-400/50 text-left">
                <h4 className="text-xl font-bold text-green-300 mb-4">✅ Always Do</h4>
                <div className="space-y-3">
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="font-bold text-green-200">Validate Everything</div>
                    <div className="text-green-100 text-sm">Server-side validation is NOT optional</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="font-bold text-green-200">Enable Timestamps</div>
                    <div className="text-green-100 text-sm">Always know when data changed</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="font-bold text-green-200">Selective .populate()</div>
                    <div className="text-green-100 text-sm">Only fetch fields you actually need</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="font-bold text-green-200">Index Smart</div>
                    <div className="text-green-100 text-sm">Index frequently queried fields</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="font-bold text-green-200">Handle Errors</div>
                    <div className="text-green-100 text-sm">Try-catch + meaningful messages</div>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/30 rounded-xl p-6 border border-red-400/50 text-left">
                <h4 className="text-xl font-bold text-red-300 mb-4">❌ Never Do</h4>
                <div className="space-y-3">
                  <div className="bg-red-600/30 rounded-lg p-4">
                    <div className="font-bold text-red-200">Forget .populate()</div>
                    <div className="text-red-100 text-sm">You'll get IDs instead of data</div>
                  </div>
                  <div className="bg-red-600/30 rounded-lg p-4">
                    <div className="font-bold text-red-200">Skip Validation</div>
                    <div className="text-red-100 text-sm">Bad data will corrupt your DB</div>
                  </div>
                  <div className="bg-red-600/30 rounded-lg p-4">
                    <div className="font-bold text-red-200">Over-populate</div>
                    <div className="text-red-100 text-sm">N+1 queries kill performance</div>
                  </div>
                  <div className="bg-red-600/30 rounded-lg p-4">
                    <div className="font-bold text-red-200">Use Schema.Types.Mixed</div>
                    <div className="text-red-100 text-sm">Loses all type safety and validation</div>
                  </div>
                  <div className="bg-red-600/30 rounded-lg p-4">
                    <div className="font-bold text-red-200">Ignore Indexes</div>
                    <div className="text-red-100 text-sm">Your queries will be slow at scale</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-blue-500/20 rounded-xl p-6 border border-blue-400/30">
              <div className="text-xl">
                💡 <strong>Golden Rule:</strong> If you're not validating at the schema level, you're doing it wrong
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-teal-600 to-cyan-700'
    },

    // Slide 16: Real-World Patterns
    {
      id: 'real-world',
      title: 'Real-World Patterns',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Common App Architectures</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🌍</div>
            <h3 className="text-3xl font-bold mb-12 text-green-300">Learn From Real Applications</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-6 border border-blue-400/50">
                <h4 className="text-xl font-bold mb-4">📝 Blog Platform</h4>
                <div className="space-y-2 text-sm text-left">
                  <div className="bg-white/20 rounded p-3">
                    <strong>User → Posts:</strong> Reference (many posts)
                  </div>
                  <div className="bg-white/20 rounded p-3">
                    <strong>Post → Comments:</strong> Reference if popular
                  </div>
                  <div className="bg-white/20 rounded p-3">
                    <strong>Post → Tags:</strong> Embed (5-10 tags)
                  </div>
                  <div className="bg-white/20 rounded p-3">
                    <strong>Post → Author cache:</strong> Hybrid (name + ID)
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-xl p-6 border border-green-400/50">
                <h4 className="text-xl font-bold mb-4">🛒 E-Commerce</h4>
                <div className="space-y-2 text-sm text-left">
                  <div className="bg-white/20 rounded p-3">
                    <strong>Product → Reviews:</strong> Reference (unlimited)
                  </div>
                  <div className="bg-white/20 rounded p-3">
                    <strong>Order → Items:</strong> Embed (snapshot at time)
                  </div>
                  <div className="bg-white/20 rounded p-3">
                    <strong>User → Orders:</strong> Reference (many)
                  </div>
                  <div className="bg-white/20 rounded p-3">
                    <strong>Product → Variants:</strong> Embed (colors/sizes)
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6 border border-purple-400/50">
                <h4 className="text-xl font-bold mb-4">🎓 Learning Platform</h4>
                <div className="space-y-2 text-sm text-left">
                  <div className="bg-white/20 rounded p-3">
                    <strong>Course → Lessons:</strong> Embed or reference
                  </div>
                  <div className="bg-white/20 rounded p-3">
                    <strong>Student ↔ Courses:</strong> Many-to-many refs
                  </div>
                  <div className="bg-white/20 rounded p-3">
                    <strong>Lesson → Resources:</strong> Embed (PDFs, links)
                  </div>
                  <div className="bg-white/20 rounded p-3">
                    <strong>Progress tracking:</strong> Separate collection
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-xl p-6 border border-orange-400/50">
                <h4 className="text-xl font-bold mb-4">💬 Social Media</h4>
                <div className="space-y-2 text-sm text-left">
                  <div className="bg-white/20 rounded p-3">
                    <strong>User → Posts:</strong> Reference (unlimited)
                  </div>
                  <div className="bg-white/20 rounded p-3">
                    <strong>User ↔ Followers:</strong> Reference both ways
                  </div>
                  <div className="bg-white/20 rounded p-3">
                    <strong>Post → Likes:</strong> Counter + reference
                  </div>
                  <div className="bg-white/20 rounded p-3">
                    <strong>Real-time:</strong> Change streams
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <div className="text-xl">
                💡 Notice the pattern? Design decisions depend on <strong>volume</strong>, <strong>access patterns</strong>, and <strong>update frequency</strong>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-700 to-pink-700'
    },

    // Slide 17: Thank You
    {
      id: 'thank-you',
      title: 'Thank You',
      content: (
        <div className="text-center flex flex-col items-center justify-center min-h-[60vh]">
          <style>{customStyles}</style>
          <div className="text-9xl mb-12 animate-float">👋</div>
          <h1 className="text-8xl font-bold text-white mb-8 animate-fade-in">Thank You!</h1>
          <p className="text-3xl text-blue-200 animate-fade-in">
            Remember to send me the attendance email!
          </p>
        </div>
      ),
      bgGradient: 'from-blue-600 to-indigo-700'
    },
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

export default Class12Slides;
