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

const PodcastDepthSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title Slide
    {
      id: 'title-slide',
      title: 'AI Podcast Generator - Deep Dive',
      content: (
        <div className="text-center space-y-12">
          <style>{customStyles}</style>
          <div className="space-y-8">
            <h1 className="text-6xl font-bold text-white mb-6">
              🎙️ AI Podcast Generator
            </h1>
            <h2 className="text-4xl font-semibold text-blue-100 mb-4">
              Deep Dive Workshop
            </h2>
            <div className="text-2xl text-blue-200">
              Implementation Guide with Examples
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
                href="https://www.geoguessr.com/join/CMGBR?s=Url"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold text-3xl px-12 py-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                🎮 Join Game
              </a>
              <div className="text-xl text-gray-300 mt-6 font-mono">
                geoguessr.com/join/CMGBR
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-teal-700'
    },

    // Slide 3: Overview
    {
      id: 'overview',
      title: 'What We\'ll Cover Today',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12">Today's Deep Dive</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🎯</div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-8 border border-blue-400/50">
                <h3 className="text-3xl font-bold mb-6">📚 Part 1</h3>
                <div className="space-y-3 text-left text-lg">
                  <div className="bg-white/20 rounded p-4">
                    ✓ NewsAPI deep dive with axios patterns
                  </div>
                  <div className="bg-white/20 rounded p-4">
                    ✓ Query parameters and response handling
                  </div>
                  <div className="bg-white/20 rounded p-4">
                    ✓ Common mistakes and debugging
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-8 border border-purple-400/50">
                <h3 className="text-3xl font-bold mb-6">🤖 Part 2</h3>
                <div className="space-y-3 text-left text-lg">
                  <div className="bg-white/20 rounded p-4">
                    ✓ OpenAI API with Bearer authentication
                  </div>
                  <div className="bg-white/20 rounded p-4">
                    ✓ Request body structure and messages
                  </div>
                  <div className="bg-white/20 rounded p-4">
                    ✓ Response extraction and file saving
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-teal-600 rounded-xl p-8 border border-green-400/50">
                <h3 className="text-3xl font-bold mb-6">🎤 Part 3</h3>
                <div className="space-y-3 text-left text-lg">
                  <div className="bg-white/20 rounded p-4">
                    ✓ ElevenLabs text-to-speech
                  </div>
                  <div className="bg-white/20 rounded p-4">
                    ✓ Binary data (arraybuffer) handling
                  </div>
                  <div className="bg-white/20 rounded p-4">
                    ✓ Custom headers and audio file creation
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-xl p-8 border border-orange-400/50">
                <h3 className="text-3xl font-bold mb-6">🎯 Part 4</h3>
                <div className="space-y-3 text-left text-lg">
                  <div className="bg-white/20 rounded p-4">
                    ✓ Main orchestration function
                  </div>
                  <div className="bg-white/20 rounded p-4">
                    ✓ Error handling patterns
                  </div>
                  <div className="bg-white/20 rounded p-4">
                    ✓ Complete pipeline integration
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-indigo-700'
    },

    // Slide 4: Task 1 - Understanding Axios GET
    {
      id: 'axios-get',
      title: 'Task 1: Understanding Axios GET',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Axios GET Requests Deep Dive</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-7xl mb-6 animate-float">📰</div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 mb-8">
              <h3 className="text-3xl font-bold mb-4 text-blue-300">The Pattern</h3>
              <div className="text-xl text-left text-blue-100">
                Axios GET requests use a specific pattern for query parameters
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <div className="text-left">
                  <h4 className="text-2xl font-bold text-green-300 mb-4">✅ The Right Way</h4>
                  <div className="bg-gray-900/50 rounded-lg p-6 mb-4">
                    <div className="font-mono text-lg text-green-200 space-y-2">
                      <div>const response = await axios.get(url, {'{'}</div>
                      <div className="ml-8">params: {'{'}</div>
                      <div className="ml-16">apiKey: process.env.NEWSAPI_KEY,</div>
                      <div className="ml-16">country: 'us',</div>
                      <div className="ml-16">category: 'technology',</div>
                      <div className="ml-16">pageSize: 5</div>
                      <div className="ml-8">{'}'}</div>
                      <div>{'}'});</div>
                    </div>
                  </div>
                  <div className="text-lg text-green-100">
                    ✓ Uses <strong>params</strong> object for query parameters<br/>
                    ✓ Axios automatically converts to: <span className="font-mono">?apiKey=...&country=us</span><br/>
                    ✓ Don't forget <strong>await</strong>!
                  </div>
                </div>
              </div>

              <div className="bg-red-500/20 rounded-xl p-6 border-2 border-red-400">
                <h4 className="text-2xl font-bold text-red-300 mb-4">❌ Common Mistakes</h4>
                <div className="grid grid-cols-2 gap-4 text-left">
                  <div className="bg-red-600/30 rounded-lg p-4">
                    <strong>Forgetting await</strong><br/>
                    <span className="text-sm">Returns Promise, not data</span>
                  </div>
                  <div className="bg-red-600/30 rounded-lg p-4">
                    <strong>response.articles</strong><br/>
                    <span className="text-sm">Should be response.data.articles</span>
                  </div>
                  <div className="bg-red-600/30 rounded-lg p-4">
                    <strong>Hardcoded API key</strong><br/>
                    <span className="text-sm">Always use process.env</span>
                  </div>
                  <div className="bg-red-600/30 rounded-lg p-4">
                    <strong>No error handling</strong><br/>
                    <span className="text-sm">Wrap in try/catch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-700 to-cyan-700'
    },

    // Slide 5: Task 1 - Response Structure
    {
      id: 'newsapi-response',
      title: 'Task 1: NewsAPI Response Structure',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Understanding the Response</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-7xl mb-6 animate-float">📦</div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 mb-8">
              <h3 className="text-3xl font-bold mb-4 text-yellow-300">NewsAPI Returns This:</h3>
              <div className="bg-gray-900/70 rounded-lg p-6 text-left">
                <pre className="text-lg text-yellow-100 overflow-x-auto">
{`{
  status: "ok",
  totalResults: 38,
  articles: [
    {
      title: "Breaking: New AI Innovation",
      description: "Scientists discover...",
      url: "https://...",
      author: "John Doe",
      publishedAt: "2024-..."
    },
    // ... more articles
  ]
}`}
                </pre>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/50">
                <h4 className="text-2xl font-bold text-blue-300 mb-4">How to Access It</h4>
                <div className="text-left space-y-3">
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <strong>Step 1:</strong> response<br/>
                    <span className="text-sm">The axios response object</span>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <strong>Step 2:</strong> response.data<br/>
                    <span className="text-sm">The API's JSON response</span>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <strong>Step 3:</strong> response.data.articles<br/>
                    <span className="text-sm">The array of articles ✓</span>
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-400/50">
                <h4 className="text-2xl font-bold text-purple-300 mb-4">What to Return</h4>
                <div className="text-left space-y-3">
                  <div className="bg-purple-600/30 rounded-lg p-4">
                    <strong>Return:</strong> articles array<br/>
                    <span className="text-sm">So next function can use them</span>
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-4">
                    <strong>Each article has:</strong><br/>
                    <span className="text-sm">title, description, url, author</span>
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-4">
                    <strong>You'll need:</strong><br/>
                    <span className="text-sm">title + description for AI script</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-cyan-700 to-blue-800'
    },

    // Slide 6: Task 2 - Bearer Authentication
    {
      id: 'bearer-auth',
      title: 'Task 2: Bearer Authentication',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Bearer Token Authentication</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-7xl mb-6 animate-float">🔐</div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 mb-8">
              <h3 className="text-3xl font-bold mb-4 text-purple-300">Industry Standard for APIs</h3>
              <div className="text-xl text-purple-100">
                Used by OpenAI, GitHub, Stripe, and most modern APIs
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-8 border-2 border-purple-400">
                <h4 className="text-2xl font-bold text-purple-300 mb-4">The Syntax</h4>
                <div className="bg-gray-900/70 rounded-lg p-6 text-left mb-4">
                  <div className="font-mono text-lg text-purple-200 space-y-2">
                    <div>const response = await axios.post(url, requestBody, {'{'}</div>
                    <div className="ml-8">headers: {'{'}</div>
                    <div className="ml-16">Authorization: `Bearer {'${'}process.env.OPENAI_KEY{'}'}`,</div>
                    <div className="ml-16">{'\'Content-Type\''}: {'\'application/json\''}</div>
                    <div className="ml-8">{'}'}</div>
                    <div>{'}'});</div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-purple-600/30 rounded-lg p-4 text-left">
                    <strong className="text-purple-200">1. Word "Bearer"</strong><br/>
                    <span className="text-sm">Always literal</span>
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-4 text-left">
                    <strong className="text-purple-200">2. Space</strong><br/>
                    <span className="text-sm">One space after</span>
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-4 text-left">
                    <strong className="text-purple-200">3. Your Key</strong><br/>
                    <span className="text-sm">From .env file</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-green-500/20 rounded-xl p-6 border border-green-400/50">
                  <h4 className="text-2xl font-bold text-green-300 mb-3">✅ Correct</h4>
                  <div className="space-y-2 text-left text-sm">
                    <div className="bg-green-600/30 rounded p-3 font-mono">
                      Bearer sk-abc123...
                    </div>
                    <div className="text-green-100">Word "Bearer", space, then key</div>
                  </div>
                </div>
                <div className="bg-red-500/20 rounded-xl p-6 border border-red-400/50">
                  <h4 className="text-2xl font-bold text-red-300 mb-3">❌ Wrong</h4>
                  <div className="space-y-2 text-left text-sm">
                    <div className="bg-red-600/30 rounded p-3 font-mono">
                      sk-abc123...
                    </div>
                    <div className="text-red-100">Missing "Bearer" prefix</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-700 to-pink-700'
    },

    // Slide 7: Task 2 - OpenAI Request Body
    {
      id: 'openai-body',
      title: 'Task 2: OpenAI Request Body',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Crafting the Perfect Request</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-7xl mb-6 animate-float">🤖</div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 mb-8">
              <h3 className="text-3xl font-bold mb-4 text-blue-300">Three Required Fields</h3>
              <div className="text-xl text-blue-100">
                model, messages, max_tokens
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-500/20 rounded-xl p-8 border-2 border-blue-400">
                <h4 className="text-2xl font-bold text-blue-300 mb-4">Request Body Structure</h4>
                <div className="bg-gray-900/70 rounded-lg p-6 text-left">
                  <pre className="text-base text-blue-100 overflow-x-auto">
{`const requestBody = {
  model: "gpt-3.5-turbo",
  messages: [
    {
      role: "user",
      content: "Your prompt with article data"
    }
  ],
  max_tokens: 500
};`}
                  </pre>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-400/50">
                  <h4 className="text-xl font-bold text-purple-300 mb-3">model</h4>
                  <div className="text-left space-y-2 text-sm">
                    <div className="bg-purple-600/30 rounded p-3">
                      Which AI model to use
                    </div>
                    <div className="bg-purple-600/30 rounded p-3 font-mono">
                      "gpt-3.5-turbo"
                    </div>
                    <div className="text-purple-100">
                      Fast & cheap option
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/20 rounded-xl p-6 border border-green-400/50">
                  <h4 className="text-xl font-bold text-green-300 mb-3">messages</h4>
                  <div className="text-left space-y-2 text-sm">
                    <div className="bg-green-600/30 rounded p-3">
                      Array of message objects
                    </div>
                    <div className="bg-green-600/30 rounded p-3">
                      role: "user"<br/>
                      content: "prompt"
                    </div>
                    <div className="text-green-100">
                      Your instructions + data
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/50">
                  <h4 className="text-xl font-bold text-yellow-300 mb-3">max_tokens</h4>
                  <div className="text-left space-y-2 text-sm">
                    <div className="bg-yellow-600/30 rounded p-3">
                      Length limit for response
                    </div>
                    <div className="bg-yellow-600/30 rounded p-3 font-mono">
                      500
                    </div>
                    <div className="text-yellow-100">
                      Controls cost & length
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-700 to-purple-800'
    },

    // Slide 8: Task 3 - Binary Data
    {
      id: 'binary-data',
      title: 'Task 3: Understanding Binary Data',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">The Binary Data Challenge</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-7xl mb-6 animate-float">🎵</div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 mb-8">
              <h3 className="text-3xl font-bold mb-4 text-red-300">Audio is NOT Text!</h3>
              <div className="text-xl text-red-100">
                MP3 files are binary data - they need special handling
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-red-500/20 rounded-xl p-8 border-2 border-red-400">
                <h4 className="text-2xl font-bold text-red-300 mb-4">❌ Without arraybuffer</h4>
                <div className="space-y-4">
                  <div className="bg-gray-900/70 rounded-lg p-6 text-left">
                    <div className="font-mono text-lg text-red-200">
                      const response = await axios.post(url, data, {'{'} headers {'}'})<br/>
                      <span className="text-red-300">{'// response.data is corrupted text!'}</span>
                    </div>
                  </div>
                  <div className="bg-red-600/30 rounded-lg p-4">
                    <strong>Result:</strong> Corrupted MP3 file that won't play
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <h4 className="text-2xl font-bold text-green-300 mb-4">✅ With arraybuffer</h4>
                <div className="space-y-4">
                  <div className="bg-gray-900/70 rounded-lg p-6 text-left">
                    <div className="font-mono text-lg text-green-200">
                      const response = await axios.post(url, data, {'{'}<br/>
                      <span className="ml-8">headers,</span><br/>
                      <span className="ml-8 text-yellow-300">responseType: 'arraybuffer'</span><br/>
                      {'}'});<br/>
                      <span className="text-green-300">{'// response.data is raw binary!'}</span>
                    </div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <strong>Result:</strong> Perfect MP3 file ready to play ✓
                  </div>
                </div>
              </div>

              <div className="bg-orange-500/20 rounded-xl p-6 border border-orange-400/30">
                <div className="text-xl">
                  ⚠️ <strong>Critical:</strong> This is the #1 mistake students make!
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-700 to-teal-700'
    },

    // Slide 9: Task 3 - Custom Headers
    {
      id: 'custom-headers',
      title: 'Task 3: Custom Headers',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">ElevenLabs Custom Headers</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-7xl mb-6 animate-float">🎤</div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 mb-8">
              <h3 className="text-3xl font-bold mb-4 text-green-300">Company-Specific Authentication</h3>
              <div className="text-xl text-green-100">
                Not all APIs use Bearer tokens!
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl p-8 border-2 border-green-400">
                <h4 className="text-2xl font-bold text-green-300 mb-4">The Complete Request</h4>
                <div className="bg-gray-900/70 rounded-lg p-6 text-left mb-4">
                  <div className="font-mono text-lg text-green-200 space-y-2">
                    <div>const headers = {'{'}</div>
                    <div className="ml-8 text-yellow-300">{'\'xi-api-key\''}: process.env.ELEVENLABS_KEY,</div>
                    <div className="ml-8">{'\'Content-Type\''}: {'\'application/json\''}</div>
                    <div>{'}'};</div>
                    <div className="mt-4">const response = await axios.post(url, data, {'{'}</div>
                    <div className="ml-8">headers,</div>
                    <div className="ml-8 text-pink-300">responseType: 'arraybuffer'</div>
                    <div>{'}'});</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/50">
                  <h4 className="text-xl font-bold text-blue-300 mb-3">NewsAPI</h4>
                  <div className="text-left space-y-2 text-sm">
                    <div className="bg-blue-600/30 rounded p-3 font-mono">
                      ?apiKey=...
                    </div>
                    <div className="text-blue-100">
                      Query parameter
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-400/50">
                  <h4 className="text-xl font-bold text-purple-300 mb-3">OpenAI</h4>
                  <div className="text-left space-y-2 text-sm">
                    <div className="bg-purple-600/30 rounded p-3 font-mono">
                      Bearer ...
                    </div>
                    <div className="text-purple-100">
                      Authorization header
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/20 rounded-xl p-6 border border-green-400/50">
                  <h4 className="text-xl font-bold text-green-300 mb-3">ElevenLabs</h4>
                  <div className="text-left space-y-2 text-sm">
                    <div className="bg-green-600/30 rounded p-3 font-mono">
                      xi-api-key: ...
                    </div>
                    <div className="text-green-100">
                      Custom header
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-teal-700 to-green-800'
    },

    // Slide 10: Task 4 - Orchestration
    {
      id: 'orchestration',
      title: 'Task 4: The Orchestration Pattern',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Tying It All Together</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-7xl mb-6 animate-float">🎯</div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 mb-8">
              <h3 className="text-3xl font-bold mb-4 text-yellow-300">The Main Function's Job</h3>
              <div className="text-xl text-yellow-100">
                Validate → Execute → Report
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-500/20 rounded-xl p-8 border-2 border-blue-400">
                <h4 className="text-2xl font-bold text-blue-300 mb-4">Step 1: Validate Environment</h4>
                <div className="bg-gray-900/70 rounded-lg p-6 text-left">
                  <div className="font-mono text-base text-blue-200">
                    const requiredKeys = [<br/>
                    <span className="ml-8">'NEWSAPI_KEY',</span><br/>
                    <span className="ml-8">'OPENAI_KEY',</span><br/>
                    <span className="ml-8">'ELEVENLABS_KEY'</span><br/>
                    ];<br/><br/>
                    {'// Check each key exists'}
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-8 border-2 border-purple-400">
                <h4 className="text-2xl font-bold text-purple-300 mb-4">Step 2: Execute Pipeline</h4>
                <div className="bg-gray-900/70 rounded-lg p-6 text-left">
                  <div className="font-mono text-base text-purple-200">
                    const articles = await fetchNews();<br/>
                    const script = await generateScript(articles);<br/>
                    const audioPath = await generateAudio(script);<br/><br/>
                    {'// Each function waits for the previous'}
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <h4 className="text-2xl font-bold text-green-300 mb-4">Step 3: Return Summary</h4>
                <div className="bg-gray-900/70 rounded-lg p-6 text-left">
                  <div className="font-mono text-base text-green-200">
                    return {'{'}<br/>
                    <span className="ml-8">articlesCount: articles.length,</span><br/>
                    <span className="ml-8">scriptPath: 'output/script.txt',</span><br/>
                    <span className="ml-8">audioPath: audioPath</span><br/>
                    {'}'};<br/><br/>
                    {'// Provide useful feedback'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-orange-700 to-red-700'
    },

    // Slide 11: Error Handling
    {
      id: 'error-handling',
      title: 'Error Handling Best Practices',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Graceful Error Handling</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-7xl mb-6 animate-float">🛡️</div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl p-8 border-2 border-red-400">
                <h4 className="text-2xl font-bold text-red-300 mb-4">The Try-Catch Pattern</h4>
                <div className="bg-gray-900/70 rounded-lg p-6 text-left">
                  <div className="font-mono text-base text-red-200">
                    async function fetchNews() {'{'}<br/>
                    <span className="ml-8">try {'{'}</span><br/>
                    <span className="ml-16">{'// Your API call here'}</span><br/>
                    <span className="ml-16">const response = await axios.get(...);</span><br/>
                    <span className="ml-16">return response.data.articles;</span><br/>
                    <span className="ml-8">{'}'} catch (error) {'{'}</span><br/>
                    <span className="ml-16 text-yellow-300">{'// Handle the error gracefully'}</span><br/>
                    <span className="ml-16">console.error('NewsAPI Error:', error.message);</span><br/>
                    <span className="ml-16">throw new Error('Failed to fetch news');</span><br/>
                    <span className="ml-8">{'}'}</span><br/>
                    {'}'}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/50">
                  <h4 className="text-2xl font-bold text-blue-300 mb-4">Why Try-Catch?</h4>
                  <div className="space-y-3 text-left">
                    <div className="bg-blue-600/30 rounded-lg p-4">
                      <strong>1. Network failures</strong><br/>
                      <span className="text-sm">Internet connection issues</span>
                    </div>
                    <div className="bg-blue-600/30 rounded-lg p-4">
                      <strong>2. Invalid API keys</strong><br/>
                      <span className="text-sm">401 Unauthorized errors</span>
                    </div>
                    <div className="bg-blue-600/30 rounded-lg p-4">
                      <strong>3. Rate limits</strong><br/>
                      <span className="text-sm">Too many requests</span>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-400/50">
                  <h4 className="text-2xl font-bold text-purple-300 mb-4">Good Error Messages</h4>
                  <div className="space-y-3 text-left">
                    <div className="bg-purple-600/30 rounded-lg p-4">
                      <strong>✓ Specific</strong><br/>
                      <span className="text-sm">"NewsAPI failed" not "Error"</span>
                    </div>
                    <div className="bg-purple-600/30 rounded-lg p-4">
                      <strong>✓ Actionable</strong><br/>
                      <span className="text-sm">"Check your API key in .env"</span>
                    </div>
                    <div className="bg-purple-600/30 rounded-lg p-4">
                      <strong>✓ Context</strong><br/>
                      <span className="text-sm">Include error.message details</span>
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

    // Slide 12: Testing Strategy
    {
      id: 'testing',
      title: 'Testing Your Implementation',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Test Early, Test Often</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-7xl mb-6 animate-float">🧪</div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 mb-8">
              <h3 className="text-3xl font-bold mb-4 text-blue-300">The Golden Rule</h3>
              <div className="text-2xl text-blue-100">
                Test each function before moving to the next!
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-6 border border-blue-400/50">
                <h4 className="text-2xl font-bold mb-4">Individual Function Tests</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <div className="font-mono text-sm text-blue-200 mb-2">node test-apis.js news</div>
                    <div className="text-xs text-blue-100">Test NewsAPI only</div>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <div className="font-mono text-sm text-purple-200 mb-2">node test-apis.js openai</div>
                    <div className="text-xs text-purple-100">Test OpenAI only</div>
                  </div>
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <div className="font-mono text-sm text-green-200 mb-2">node test-apis.js elevenlabs</div>
                    <div className="text-xs text-green-100">Test ElevenLabs only</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-green-500/20 rounded-xl p-6 border border-green-400/50">
                  <h4 className="text-2xl font-bold text-green-300 mb-4">✅ Good Testing Flow</h4>
                  <div className="space-y-2 text-left text-sm">
                    <div className="bg-green-600/30 rounded p-3">
                      1. Write fetchNews() → Test it
                    </div>
                    <div className="bg-green-600/30 rounded p-3">
                      2. Write generateScript() → Test it
                    </div>
                    <div className="bg-green-600/30 rounded p-3">
                      3. Write generateAudio() → Test it
                    </div>
                    <div className="bg-green-600/30 rounded p-3">
                      4. Write main() → Test it
                    </div>
                    <div className="text-green-100 mt-4">
                      <strong>Result:</strong> Easy to debug!
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/20 rounded-xl p-6 border border-red-400/50">
                  <h4 className="text-2xl font-bold text-red-300 mb-4">❌ Bad Testing Flow</h4>
                  <div className="space-y-2 text-left text-sm">
                    <div className="bg-red-600/30 rounded p-3">
                      1. Write all 4 functions
                    </div>
                    <div className="bg-red-600/30 rounded p-3">
                      2. Run npm start
                    </div>
                    <div className="bg-red-600/30 rounded p-3">
                      3. Get mysterious error
                    </div>
                    <div className="bg-red-600/30 rounded p-3">
                      4. No idea which part failed
                    </div>
                    <div className="text-red-100 mt-4">
                      <strong>Result:</strong> Hours of debugging
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
                <div className="text-xl">
                  💡 <strong>Pro Tip:</strong> Use console.log() liberally to inspect response structures!
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-teal-700'
    },

    // Slide 13: Common Pitfalls
    {
      id: 'pitfalls',
      title: 'Top 5 Common Mistakes',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Avoid These Pitfalls!</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-7xl mb-6 animate-float">⚠️</div>
            
            <div className="space-y-4">
              <div className="bg-red-500/20 rounded-xl p-6 border-2 border-red-400">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-red-300">1. Forgetting 'await'</h3>
                  <div className="text-4xl">🚫</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-600/30 rounded-lg p-4 text-left">
                    <strong className="text-red-200">Problem:</strong><br/>
                    <span className="text-sm">Getting Promise {'{ <pending> }'} instead of data</span>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4 text-left">
                    <strong className="text-green-200">Fix:</strong><br/>
                    <span className="text-sm">Add await before every axios call</span>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/20 rounded-xl p-6 border-2 border-red-400">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-red-300">2. Wrong Response Access</h3>
                  <div className="text-4xl">📦</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-600/30 rounded-lg p-4 text-left">
                    <strong className="text-red-200">Problem:</strong><br/>
                    <span className="text-sm font-mono">response.articles</span> returns undefined
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4 text-left">
                    <strong className="text-green-200">Fix:</strong><br/>
                    <span className="text-sm font-mono">response.data.articles</span> is correct
                  </div>
                </div>
              </div>

              <div className="bg-red-500/20 rounded-xl p-6 border-2 border-red-400">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-red-300">3. Missing responseType</h3>
                  <div className="text-4xl">🎵</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-600/30 rounded-lg p-4 text-left">
                    <strong className="text-red-200">Problem:</strong><br/>
                    <span className="text-sm">MP3 file is corrupted and won't play</span>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4 text-left">
                    <strong className="text-green-200">Fix:</strong><br/>
                    <span className="text-sm">Add responseType: 'arraybuffer' for ElevenLabs</span>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/20 rounded-xl p-6 border-2 border-red-400">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-red-300">4. Bearer Token Format</h3>
                  <div className="text-4xl">🔑</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-600/30 rounded-lg p-4 text-left">
                    <strong className="text-red-200">Problem:</strong><br/>
                    <span className="text-sm">OpenAI returns 401 Unauthorized</span>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4 text-left">
                    <strong className="text-green-200">Fix:</strong><br/>
                    <span className="text-sm font-mono">Bearer {'${'}key{'}'}</span> (word + space + key)
                  </div>
                </div>
              </div>

              <div className="bg-red-500/20 rounded-xl p-6 border-2 border-red-400">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-red-300">5. Hardcoded API Keys</h3>
                  <div className="text-4xl">⚠️</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-red-600/30 rounded-lg p-4 text-left">
                    <strong className="text-red-200">Problem:</strong><br/>
                    <span className="text-sm">Keys committed to GitHub - security breach!</span>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4 text-left">
                    <strong className="text-green-200">Fix:</strong><br/>
                    <span className="text-sm">Always use process.env.KEY_NAME</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-700 to-orange-700'
    },

    // Slide 14: Quick Reference
    {
      id: 'quick-reference',
      title: 'Quick Reference Guide',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">API Cheat Sheet</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-7xl mb-6 animate-float">📋</div>
            
            <div className="space-y-6">
              <div className="bg-blue-500/20 rounded-xl p-6 border-2 border-blue-400">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-blue-300">NewsAPI</h3>
                  <div className="text-4xl">📰</div>
                </div>
                <div className="bg-gray-900/70 rounded-lg p-4 text-left text-sm">
                  <div className="font-mono text-blue-200">
                    axios.get(url, {'{'} params: {'{'} apiKey, country, category, pageSize {'}'} {'}'})<br/>
                    <span className="text-blue-100">→ response.data.articles</span>
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-6 border-2 border-purple-400">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-purple-300">OpenAI</h3>
                  <div className="text-4xl">🤖</div>
                </div>
                <div className="bg-gray-900/70 rounded-lg p-4 text-left text-sm">
                  <div className="font-mono text-purple-200">
                    axios.post(url, {'{'} model, messages, max_tokens {'}'}, {'{'}<br/>
                    <span className="ml-8">headers: {'{'} Authorization: `Bearer {'${'}key{'}'}` {'}'}</span><br/>
                    {'}'})
                    <span className="text-purple-100">→ response.data.choices[0].message.content</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-400">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-green-300">ElevenLabs</h3>
                  <div className="text-4xl">🎤</div>
                </div>
                <div className="bg-gray-900/70 rounded-lg p-4 text-left text-sm">
                  <div className="font-mono text-green-200">
                    axios.post(url, {'{'} text {'}'}, {'{'}<br/>
                    <span className="ml-8">headers: {'{'} 'xi-api-key': key {'}'},</span><br/>
                    <span className="ml-8 text-yellow-300">responseType: 'arraybuffer'</span><br/>
                    {'}'})
                    <span className="text-green-100">→ response.data (binary)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <div className="text-xl">
                📌 <strong>Remember:</strong> All three need try/catch and await!
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-cyan-700 to-blue-800'
    },

    // Slide 15: Final Slide
    {
      id: 'see-you-tomorrow',
      title: 'See You All Tomorrow!',
      content: (
        <div className="flex items-center justify-center min-h-96">
          <style>{customStyles}</style>
          <div className="text-center space-y-8">
            <h2 className="text-6xl font-bold text-white mb-4">
              See You All Tomorrow!
            </h2>
            <p className="text-2xl text-white/80">
              Make sure to send me an email for attendance
            </p>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-pink-600'
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

export default PodcastDepthSlides;

