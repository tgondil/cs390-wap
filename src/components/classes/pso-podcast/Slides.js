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

const PodcastSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title Slide
    {
      id: 'title-slide',
      title: 'Mini-Project 2: AI Podcast Generator',
      content: (
        <div className="text-center space-y-12">
          <style>{customStyles}</style>
          <div className="space-y-8">
            <div className="bg-yellow-500/20 backdrop-blur-md rounded-2xl p-6 border-2 border-yellow-400 inline-block">
              <h1 className="text-4xl font-bold text-yellow-300">Mini-Project 2</h1>
            </div>
            <h2 className="text-6xl font-bold text-white mb-6">🎙️ AI Podcast Generator</h2>
            <div className="text-2xl text-blue-200">
              Build an AI-powered podcast from trending news
            </div>
            <div className="text-xl text-blue-300 mt-4">
              Backend • APIs • AI Integration
            </div>
          </div>
          
          <div className="mt-16">
            <div className="text-2xl font-medium text-white">Tanay Gondil</div>
            <div className="text-xl text-blue-200">CS390 Web Application Programming</div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-indigo-700'
    },

    // Slide 2: Project Overview
    {
      id: 'project-overview',
      title: 'What You\'ll Build',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">What You'll Build</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🎙️</div>
            <h3 className="text-3xl font-bold mb-12 text-yellow-300">An AI Podcast Generator</h3>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-10 border-2 border-white/20 mb-8">
              <div className="text-2xl mb-6">A command-line application that automatically creates <span className="text-yellow-300 font-bold">professional audio podcasts</span> from trending news</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/50">
                <h4 className="text-2xl font-bold text-blue-300 mb-4">📊 Project Stats</h4>
                <div className="space-y-3 text-left">
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>Difficulty:</strong> Intermediate
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>Cost:</strong> $0 (FREE tier APIs)
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>Code:</strong> ~150-200 lines
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>Time:</strong> 4-6 hours
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-6 border border-green-400/50">
                <h4 className="text-2xl font-bold text-green-300 mb-4">🎯 Output</h4>
                <div className="space-y-3 text-left">
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong>📰 News:</strong> Fetched from internet
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong>📝 Script:</strong> AI-generated text
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong>🎵 Audio:</strong> Professional MP3 file
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong>🎧 Result:</strong> Real podcast to listen to!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-cyan-600'
    },

    // Slide 3: The Pipeline
    {
      id: 'pipeline',
      title: 'The Pipeline',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">The 4-Step Pipeline</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">⚡</div>
            <h3 className="text-3xl font-bold mb-12 text-green-300">News → Script → Audio → Listen!</h3>
            
            <div className="space-y-6">
              <div className="bg-blue-500/20 rounded-xl p-8 border-2 border-blue-400">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-blue-300">Step 1: Fetch News</h4>
                  <div className="text-5xl">📰</div>
                </div>
                <div className="text-left text-lg text-blue-100 space-y-2">
                  <div>• Use <strong>NewsAPI</strong> to get trending articles</div>
                  <div>• HTTP GET request with API key</div>
                  <div>• Parse JSON response → extract articles</div>
                </div>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-8 border-2 border-purple-400">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-purple-300">Step 2: Generate Script</h4>
                  <div className="text-5xl">🤖</div>
                </div>
                <div className="text-left text-lg text-purple-100 space-y-2">
                  <div>• Send articles to <strong>OpenAI GPT</strong></div>
                  <div>• HTTP POST with Bearer authentication</div>
                  <div>• AI writes engaging podcast script</div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-green-300">Step 3: Convert to Audio</h4>
                  <div className="text-5xl">🎤</div>
                </div>
                <div className="text-left text-lg text-green-100 space-y-2">
                  <div>• Send script to <strong>ElevenLabs</strong></div>
                  <div>• HTTP POST with custom headers</div>
                  <div>• Receive natural-sounding audio as MP3</div>
                </div>
              </div>

              <div className="bg-yellow-500/20 rounded-xl p-8 border-2 border-yellow-400">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-yellow-300">Step 4: Listen & Enjoy!</h4>
                  <div className="text-5xl">🎧</div>
                </div>
                <div className="text-left text-lg text-yellow-100 space-y-2">
                  <div>• Complete podcast saved as MP3 file</div>
                  <div>• Professional AI-generated audio</div>
                  <div>• Ready to share or publish!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-700'
    },

    // Slide 4: Learning Objectives
    {
      id: 'learning-objectives',
      title: 'Learning Objectives',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">What You'll Learn</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🎓</div>
            <h3 className="text-3xl font-bold mb-12 text-blue-300">Real-World Backend Skills</h3>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 mb-8">
              <div className="text-xl text-blue-200">
                This project applies concepts from <strong>Classes 1, 2, 3, 9, and 10</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-6 border border-blue-400/50">
                <h4 className="text-2xl font-bold mb-4">🔧 Technical Skills</h4>
                <div className="space-y-2 text-left">
                  <div className="bg-white/20 rounded p-3">
                    ✓ HTTP GET and POST requests
                  </div>
                  <div className="bg-white/20 rounded p-3">
                    ✓ Multiple authentication methods
                  </div>
                  <div className="bg-white/20 rounded p-3">
                    ✓ Async/await programming
                  </div>
                  <div className="bg-white/20 rounded p-3">
                    ✓ Environment variables & security
                  </div>
                  <div className="bg-white/20 rounded p-3">
                    ✓ JSON & binary data handling
                  </div>
                  <div className="bg-white/20 rounded p-3">
                    ✓ File system operations
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl p-6 border border-purple-400/50">
                <h4 className="text-2xl font-bold mb-4">💼 Career Skills</h4>
                <div className="space-y-2 text-left">
                  <div className="bg-white/20 rounded p-3">
                    ✓ Reading API documentation
                  </div>
                  <div className="bg-white/20 rounded p-3">
                    ✓ Working with AI/ML services
                  </div>
                  <div className="bg-white/20 rounded p-3">
                    ✓ Error handling best practices
                  </div>
                  <div className="bg-white/20 rounded p-3">
                    ✓ Testing and debugging
                  </div>
                  <div className="bg-white/20 rounded p-3">
                    ✓ Building complete applications
                  </div>
                  <div className="bg-white/20 rounded p-3">
                    ✓ Command-line tools
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-teal-700'
    },

    // Slide 5: The APIs
    {
      id: 'apis',
      title: 'The Three APIs',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Three Powerful APIs</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🔑</div>
            <h3 className="text-3xl font-bold mb-12 text-yellow-300">All FREE for this project!</h3>
            
            <div className="space-y-6">
              <div className="bg-blue-500/20 rounded-xl p-8 border-2 border-blue-400">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="text-3xl font-bold text-blue-300">NewsAPI</h4>
                    <div className="text-lg text-blue-200 mt-2">newsapi.org</div>
                  </div>
                  <div className="text-6xl">📰</div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>Purpose:</strong> Fetch trending news
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>Free Tier:</strong> 100 requests/day
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>Auth:</strong> Query parameter
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-8 border-2 border-purple-400">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="text-3xl font-bold text-purple-300">OpenAI</h4>
                    <div className="text-lg text-purple-200 mt-2">platform.openai.com</div>
                  </div>
                  <div className="text-6xl">🤖</div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="bg-purple-600/30 rounded-lg p-3">
                    <strong>Purpose:</strong> Generate podcast script
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-3">
                    <strong>Free Tier:</strong> $5 credit (~2,500 podcasts)
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-3">
                    <strong>Auth:</strong> Bearer token
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="text-3xl font-bold text-green-300">ElevenLabs</h4>
                    <div className="text-lg text-green-200 mt-2">elevenlabs.io</div>
                  </div>
                  <div className="text-6xl">🎤</div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong>Purpose:</strong> Text-to-speech
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong>Free Tier:</strong> 10,000 chars/month
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong>Auth:</strong> Custom header (xi-api-key)
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <div className="text-2xl font-bold text-yellow-300">
                💰 Total Cost: $0
              </div>
              <div className="text-lg text-yellow-100 mt-2">
                All three APIs have generous free tiers perfect for this assignment!
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-orange-600 to-red-600'
    },

    // Slide 6: Task 1 - Fetch News
    {
      id: 'task-1',
      title: 'Task 1: Fetch News',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Task 1: Fetch News Articles</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📰</div>
            <h3 className="text-3xl font-bold mb-12 text-blue-300">25 Points</h3>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 mb-8">
              <div className="text-2xl mb-4">Function: <span className="font-mono text-yellow-300">fetchNews()</span></div>
              <div className="text-lg text-blue-200">
                Make an HTTP GET request to NewsAPI to retrieve trending articles
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/50">
                <h4 className="text-2xl font-bold text-blue-300 mb-4">📚 Concepts</h4>
                <div className="space-y-3 text-left">
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>HTTP GET:</strong> Retrieve data from server
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>Query Params:</strong> ?apiKey=YOUR_KEY
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>JSON Parsing:</strong> Extract articles array
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    <strong>Error Handling:</strong> Try/catch blocks
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-6 border border-green-400/50">
                <h4 className="text-2xl font-bold text-green-300 mb-4">✅ Requirements</h4>
                <div className="space-y-3 text-left">
                  <div className="bg-green-600/30 rounded-lg p-3">
                    Use NewsAPI top-headlines endpoint
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    Include: apiKey, country, category, pageSize
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    Return articles array from response
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    Handle errors and log useful messages
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <div className="text-xl">
                💡 <strong>Tip:</strong> Use axios.get() with a params object for query parameters. Check handout.pdf for full implementation guidance!
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-700 to-cyan-700'
    },

    // Slide 7: Task 2 - Generate Script
    {
      id: 'task-2',
      title: 'Task 2: Generate Script',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Task 2: Generate Podcast Script</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🤖</div>
            <h3 className="text-3xl font-bold mb-12 text-purple-300">25 Points</h3>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 mb-8">
              <div className="text-2xl mb-4">Function: <span className="font-mono text-yellow-300">generateScript(articles)</span></div>
              <div className="text-lg text-blue-200">
                Send articles to OpenAI GPT to create an engaging podcast script
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-400/50">
                <h4 className="text-2xl font-bold text-purple-300 mb-4">📚 Concepts</h4>
                <div className="space-y-3 text-left">
                  <div className="bg-purple-600/30 rounded-lg p-3">
                    <strong>HTTP POST:</strong> Send data to server
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-3">
                    <strong>Bearer Auth:</strong> Authorization header
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-3">
                    <strong>Request Body:</strong> JSON with messages
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-3">
                    <strong>File Writing:</strong> Save script to file
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-6 border border-green-400/50">
                <h4 className="text-2xl font-bold text-green-300 mb-4">✅ Requirements</h4>
                <div className="space-y-3 text-left">
                  <div className="bg-green-600/30 rounded-lg p-3">
                    Call OpenAI chat completions endpoint
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    Use "Bearer YOUR_KEY" in Authorization
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    Create messages array with prompt
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    Extract script and save to output/
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <div className="text-xl">
                💡 <strong>Tip:</strong> Bearer tokens go in the Authorization header. The handout.pdf shows the exact format and request structure!
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-700 to-pink-700'
    },

    // Slide 8: Task 3 - Generate Audio
    {
      id: 'task-3',
      title: 'Task 3: Generate Audio',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Task 3: Convert to Audio</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🎤</div>
            <h3 className="text-3xl font-bold mb-12 text-green-300">25 Points</h3>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 mb-8">
              <div className="text-2xl mb-4">Function: <span className="font-mono text-yellow-300">generateAudio(script)</span></div>
              <div className="text-lg text-blue-200">
                Convert the text script into natural-sounding speech using ElevenLabs
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-green-500/20 rounded-xl p-6 border border-green-400/50">
                <h4 className="text-2xl font-bold text-green-300 mb-4">📚 Concepts</h4>
                <div className="space-y-3 text-left">
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong>Binary Data:</strong> ArrayBuffer responses
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong>Custom Headers:</strong> xi-api-key
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong>Audio Formats:</strong> MP3 file handling
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong>File Writing:</strong> Binary data to disk
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/50">
                <h4 className="text-2xl font-bold text-blue-300 mb-4">✅ Requirements</h4>
                <div className="space-y-3 text-left">
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    Call ElevenLabs text-to-speech endpoint
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    Use custom xi-api-key header
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    Set responseType: 'arraybuffer'
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-3">
                    Save audio buffer as MP3 file
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-orange-500/20 rounded-xl p-6 border border-orange-400/30">
              <div className="text-xl">
                ⚠️ <strong>Critical:</strong> Must use responseType: 'arraybuffer' or audio will be corrupted!
              </div>
            </div>

            <div className="mt-4 bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <div className="text-xl">
                💡 <strong>Tip:</strong> The handout.pdf explains binary data handling step-by-step with code examples!
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-700 to-teal-700'
    },

    // Slide 9: Task 4 - Main Orchestration
    {
      id: 'task-4',
      title: 'Task 4: Orchestration',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Task 4: Main Orchestration</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🎯</div>
            <h3 className="text-3xl font-bold mb-12 text-yellow-300">25 Points</h3>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 mb-8">
              <div className="text-2xl mb-4">Function: <span className="font-mono text-yellow-300">generatePodcast()</span></div>
              <div className="text-lg text-blue-200">
                Tie everything together and orchestrate the complete pipeline
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/50">
                <h4 className="text-2xl font-bold text-yellow-300 mb-4">📚 Concepts</h4>
                <div className="space-y-3 text-left">
                  <div className="bg-yellow-600/30 rounded-lg p-3">
                    <strong>Function Composition:</strong> Calling functions in order
                  </div>
                  <div className="bg-yellow-600/30 rounded-lg p-3">
                    <strong>Error Handling:</strong> Try/catch for entire flow
                  </div>
                  <div className="bg-yellow-600/30 rounded-lg p-3">
                    <strong>Validation:</strong> Check environment variables
                  </div>
                  <div className="bg-yellow-600/30 rounded-lg p-3">
                    <strong>User Feedback:</strong> Progress updates
                  </div>
                </div>
              </div>

              <div className="bg-pink-500/20 rounded-xl p-6 border border-pink-400/50">
                <h4 className="text-2xl font-bold text-pink-300 mb-4">✅ Requirements</h4>
                <div className="space-y-3 text-left">
                  <div className="bg-pink-600/30 rounded-lg p-3">
                    Validate all API keys are present
                  </div>
                  <div className="bg-pink-600/30 rounded-lg p-3">
                    Call functions in correct order
                  </div>
                  <div className="bg-pink-600/30 rounded-lg p-3">
                    Handle errors with clear messages
                  </div>
                  <div className="bg-pink-600/30 rounded-lg p-3">
                    Return summary with counts and paths
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400/50">
              <h4 className="text-2xl font-bold text-blue-300 mb-4">The Flow</h4>
              <div className="space-y-3 text-left text-lg">
                <div className="bg-blue-600/30 rounded-lg p-4">
                  <strong>1. Validate:</strong> Check all API keys are present
                </div>
                <div className="bg-blue-600/30 rounded-lg p-4">
                  <strong>2. Execute:</strong> Call functions in sequence with await
                </div>
                <div className="bg-blue-600/30 rounded-lg p-4">
                  <strong>3. Return:</strong> Provide summary with counts and paths
                </div>
              </div>
            </div>

            <div className="mt-6 bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <div className="text-xl">
                💡 <strong>Tip:</strong> The handout.pdf shows the complete orchestration pattern with error handling!
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-orange-700 to-red-700'
    },

    // Slide 10: Authentication Methods
    {
      id: 'authentication',
      title: 'Three Authentication Methods',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Three Ways to Authenticate</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🔐</div>
            <h3 className="text-3xl font-bold mb-12 text-yellow-300">Learn All Three Common Patterns</h3>
            
            <div className="space-y-6">
              <div className="bg-blue-500/20 rounded-xl p-8 border-2 border-blue-400">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="text-3xl font-bold text-blue-300">1. Query Parameter</h4>
                    <div className="text-lg text-blue-200 mt-2">NewsAPI</div>
                  </div>
                  <div className="text-5xl">📰</div>
                </div>
                <div className="space-y-3 text-left">
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <strong className="text-blue-200">Method:</strong> Add key directly to URL
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <strong className="text-blue-200">Format:</strong> ?apiKey=YOUR_KEY
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <strong className="text-blue-200">When used:</strong> Simple public APIs, read-only endpoints
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-8 border-2 border-purple-400">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="text-3xl font-bold text-purple-300">2. Bearer Token</h4>
                    <div className="text-lg text-purple-200 mt-2">OpenAI</div>
                  </div>
                  <div className="text-5xl">🤖</div>
                </div>
                <div className="space-y-3 text-left">
                  <div className="bg-purple-600/30 rounded-lg p-4">
                    <strong className="text-purple-200">Method:</strong> Add to Authorization header
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-4">
                    <strong className="text-purple-200">Format:</strong> Authorization: Bearer YOUR_KEY
                  </div>
                  <div className="bg-purple-600/30 rounded-lg p-4">
                    <strong className="text-purple-200">When used:</strong> Industry standard, OAuth 2.0, sensitive operations
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="text-3xl font-bold text-green-300">3. Custom Header</h4>
                    <div className="text-lg text-green-200 mt-2">ElevenLabs</div>
                  </div>
                  <div className="text-5xl">🎤</div>
                </div>
                <div className="space-y-3 text-left">
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <strong className="text-green-200">Method:</strong> Company-specific header
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <strong className="text-green-200">Format:</strong> xi-api-key: YOUR_KEY
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <strong className="text-green-200">When used:</strong> Custom APIs, company-specific implementations
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-700 to-purple-800'
    },

    // Slide 11: Environment Variables
    {
      id: 'environment-variables',
      title: 'Environment Variables & Security',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Keeping Secrets Safe</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🔒</div>
            <h3 className="text-3xl font-bold mb-12 text-red-300">Never Commit API Keys!</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-red-500/20 rounded-xl p-8 border-2 border-red-400">
                <h4 className="text-2xl font-bold text-red-300 mb-4">❌ BAD: Hardcoded</h4>
                <div className="space-y-4 text-left">
                  <div className="bg-red-600/30 rounded-lg p-4">
                    <div className="text-xl font-bold mb-2">The Problem:</div>
                    <div className="text-red-100">API keys written directly in code</div>
                  </div>
                  <div className="bg-red-600/30 rounded-lg p-4">
                    <div className="text-xl font-bold mb-2">The Risk:</div>
                    <div className="text-red-100">Keys get committed to GitHub → Everyone sees them</div>
                  </div>
                  <div className="bg-red-600/30 rounded-lg p-4">
                    <div className="text-xl font-bold mb-2">The Damage:</div>
                    <div className="text-red-100">Your account gets compromised!</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <h4 className="text-2xl font-bold text-green-300 mb-4">✅ GOOD: Environment Variables</h4>
                <div className="space-y-4 text-left">
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="text-xl font-bold mb-2">The Solution:</div>
                    <div className="text-green-100">Use process.env for all secrets</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="text-xl font-bold mb-2">The Protection:</div>
                    <div className="text-green-100">.env file stays local (in .gitignore)</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="text-xl font-bold mb-2">The Result:</div>
                    <div className="text-green-100">Keys never reach version control!</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400/50 mb-6">
              <h4 className="text-2xl font-bold text-blue-300 mb-4">The 4-Step Process</h4>
              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="bg-blue-600/30 rounded-lg p-4">
                  <strong className="text-blue-200 text-lg">1. Create .env file</strong>
                  <div className="text-sm mt-2 text-blue-100">
                    Store all your API keys here
                  </div>
                </div>
                <div className="bg-blue-600/30 rounded-lg p-4">
                  <strong className="text-blue-200 text-lg">2. Load with dotenv</strong>
                  <div className="text-sm mt-2 text-blue-100">
                    Import and configure dotenv library
                  </div>
                </div>
                <div className="bg-blue-600/30 rounded-lg p-4">
                  <strong className="text-blue-200 text-lg">3. Access in code</strong>
                  <div className="text-sm mt-2 text-blue-100">
                    Use process.env to read values
                  </div>
                </div>
                <div className="bg-blue-600/30 rounded-lg p-4">
                  <strong className="text-blue-200 text-lg">4. Add to .gitignore</strong>
                  <div className="text-sm mt-2 text-blue-100">
                    Prevent .env from being committed
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-red-500/20 rounded-xl p-6 border border-red-400/30">
              <div className="text-2xl font-bold text-red-300 mb-2">
                ⚠️ API keys are like passwords!
              </div>
              <div className="text-lg text-red-100">
                If you accidentally commit them, regenerate immediately!
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-700 to-pink-700'
    },

    // Slide 12: Async/Await
    {
      id: 'async-await',
      title: 'Async/Await Refresher',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Async/Await Pattern</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">⏳</div>
            <h3 className="text-3xl font-bold mb-12 text-green-300">Wait for API Responses</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-red-500/20 rounded-xl p-8 border-2 border-red-400">
                <h4 className="text-2xl font-bold text-red-300 mb-4">❌ Without await</h4>
                <div className="space-y-4 text-left">
                  <div className="bg-red-600/30 rounded-lg p-4">
                    <div className="text-xl font-bold mb-2">The Problem:</div>
                    <div className="text-red-100">Function returns immediately without waiting for API</div>
                  </div>
                  <div className="bg-red-600/30 rounded-lg p-4">
                    <div className="text-xl font-bold mb-2">What You Get:</div>
                    <div className="font-mono text-red-100">Promise {'{ <pending> }'}</div>
                  </div>
                  <div className="bg-red-600/30 rounded-lg p-4">
                    <div className="text-xl font-bold mb-2">Result:</div>
                    <div className="text-red-100">Next function receives undefined → fails!</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <h4 className="text-2xl font-bold text-green-300 mb-4">✅ With await</h4>
                <div className="space-y-4 text-left">
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="text-xl font-bold mb-2">The Solution:</div>
                    <div className="text-green-100">Code pauses until API responds</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="text-xl font-bold mb-2">What You Get:</div>
                    <div className="text-green-100">The actual data you requested</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="text-xl font-bold mb-2">Result:</div>
                    <div className="text-green-100">Next function receives real data → succeeds!</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400/50">
              <h4 className="text-2xl font-bold text-blue-300 mb-6">The Rules of Async/Await</h4>
              <div className="grid grid-cols-2 gap-6 text-left">
                <div className="bg-blue-600/30 rounded-lg p-4">
                  <strong className="text-blue-200 text-lg">1. Mark function async</strong>
                  <div className="text-sm mt-2 text-blue-100">
                    Functions must be declared as async
                  </div>
                </div>
                <div className="bg-blue-600/30 rounded-lg p-4">
                  <strong className="text-blue-200 text-lg">2. Use await inside</strong>
                  <div className="text-sm mt-2 text-blue-100">
                    Await any function that returns a Promise
                  </div>
                </div>
                <div className="bg-blue-600/30 rounded-lg p-4">
                  <strong className="text-blue-200 text-lg">3. Wrap in try/catch</strong>
                  <div className="text-sm mt-2 text-blue-100">
                    Handle errors gracefully with try/catch blocks
                  </div>
                </div>
                <div className="bg-blue-600/30 rounded-lg p-4">
                  <strong className="text-blue-200 text-lg">4. Chain sequentially</strong>
                  <div className="text-sm mt-2 text-blue-100">
                    Call functions in order, each with await
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-purple-500/20 rounded-xl p-6 border border-purple-400/30">
              <div className="text-xl">
                💡 <strong>Remember:</strong> Every API call in this project needs await!
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-cyan-700 to-blue-800'
    },

    // Slide 13: Testing
    {
      id: 'testing',
      title: 'Testing Your Code',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Testing Strategy</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🧪</div>
            <h3 className="text-3xl font-bold mb-12 text-yellow-300">Test Early, Test Often</h3>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border-2 border-white/20 mb-8">
              <div className="text-2xl mb-4">Don't wait until everything is done!</div>
              <div className="text-lg text-blue-200">
                Test each function individually as you complete it
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-500/20 rounded-xl p-8 border-2 border-blue-400">
                <h4 className="text-2xl font-bold text-blue-300 mb-4">Test Individual APIs</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <div className="font-mono text-sm text-blue-200 mb-2">node test-apis.js news</div>
                    <div className="text-xs text-blue-100">Test NewsAPI only</div>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <div className="font-mono text-sm text-blue-200 mb-2">node test-apis.js openai</div>
                    <div className="text-xs text-blue-100">Test OpenAI only</div>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <div className="font-mono text-sm text-blue-200 mb-2">node test-apis.js elevenlabs</div>
                    <div className="text-xs text-blue-100">Test ElevenLabs only</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <h4 className="text-2xl font-bold text-green-300 mb-4">Test All at Once</h4>
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <div className="font-mono text-2xl text-green-200 mb-4">npm test</div>
                  <div className="text-lg text-green-100">
                    Runs all three API tests in sequence
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-8 border-2 border-purple-400">
                <h4 className="text-2xl font-bold text-purple-300 mb-4">Run Complete Pipeline</h4>
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <div className="font-mono text-2xl text-purple-200 mb-4">npm start</div>
                  <div className="text-lg text-purple-100">
                    Generates a complete podcast from start to finish
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <div className="text-xl">
                💡 <strong>Pro Tip:</strong> If one function fails, fix it before moving to the next!
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-emerald-700'
    },

    // Slide 14: Common Issues
    {
      id: 'common-issues',
      title: 'Common Issues & Solutions',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Debugging Guide</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🐛</div>
            <h3 className="text-3xl font-bold mb-12 text-red-300">Common Problems & Fixes</h3>
            
            <div className="space-y-6">
              <div className="bg-red-500/20 rounded-xl p-6 border-2 border-red-400">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-red-300">Missing Environment Variables</h4>
                  <div className="text-4xl">⚠️</div>
                </div>
                <div className="text-left space-y-2">
                  <div className="bg-red-600/30 rounded-lg p-3">
                    <strong>Error:</strong> "Missing required environment variables"
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong>Fix:</strong> Copy .env.example to .env and add your real API keys
                  </div>
                </div>
              </div>

              <div className="bg-red-500/20 rounded-xl p-6 border-2 border-red-400">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-red-300">401 Unauthorized</h4>
                  <div className="text-4xl">🚫</div>
                </div>
                <div className="text-left space-y-2">
                  <div className="bg-red-600/30 rounded-lg p-3">
                    <strong>Error:</strong> API returns 401 status code
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong>Fix:</strong> Double-check your API key and authentication method (query param vs Bearer vs custom header)
                  </div>
                </div>
              </div>

              <div className="bg-red-500/20 rounded-xl p-6 border-2 border-red-400">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-red-300">Corrupted Audio File</h4>
                  <div className="text-4xl">🔇</div>
                </div>
                <div className="text-left space-y-2">
                  <div className="bg-red-600/30 rounded-lg p-3">
                    <strong>Error:</strong> MP3 file won't play or is corrupted
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong>Fix:</strong> Make sure you used responseType: 'arraybuffer' for ElevenLabs request
                  </div>
                </div>
              </div>

              <div className="bg-red-500/20 rounded-xl p-6 border-2 border-red-400">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-red-300">Promise Pending</h4>
                  <div className="text-4xl">⏳</div>
                </div>
                <div className="text-left space-y-2">
                  <div className="bg-red-600/30 rounded-lg p-3">
                    <strong>Error:</strong> Getting Promise {'{<pending>}'} instead of data
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-3">
                    <strong>Fix:</strong> Add await before the function call and make sure parent function is async
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-blue-500/20 rounded-xl p-6 border border-blue-400/30">
              <div className="text-xl">
                💡 <strong>Still stuck?</strong> Use console.log() to inspect response data!
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-600 to-orange-600'
    },

    // Slide 15: Grading Rubric
    {
      id: 'grading',
      title: 'Grading Rubric',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">How You'll Be Graded</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📊</div>
            <h3 className="text-3xl font-bold mb-12 text-yellow-300">Total: 100 Points</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-500/20 rounded-xl p-6 border-2 border-blue-400">
                <h4 className="text-3xl font-bold text-blue-300 mb-4">25 pts</h4>
                <div className="text-xl font-semibold mb-2">NewsAPI Integration</div>
                <div className="text-sm text-blue-100 text-left space-y-1">
                  <div>• Correct endpoint and parameters</div>
                  <div>• Proper query parameter auth</div>
                  <div>• Response parsing</div>
                  <div>• Error handling</div>
                </div>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-6 border-2 border-purple-400">
                <h4 className="text-3xl font-bold text-purple-300 mb-4">25 pts</h4>
                <div className="text-xl font-semibold mb-2">OpenAI Integration</div>
                <div className="text-sm text-purple-100 text-left space-y-1">
                  <div>• Bearer token authentication</div>
                  <div>• Correct messages format</div>
                  <div>• Response extraction</div>
                  <div>• Script file saving</div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-6 border-2 border-green-400">
                <h4 className="text-3xl font-bold text-green-300 mb-4">25 pts</h4>
                <div className="text-xl font-semibold mb-2">ElevenLabs Integration</div>
                <div className="text-sm text-green-100 text-left space-y-1">
                  <div>• Custom header authentication</div>
                  <div>• Binary data handling (arraybuffer)</div>
                  <div>• Audio file saving</div>
                  <div>• File path return</div>
                </div>
              </div>

              <div className="bg-yellow-500/20 rounded-xl p-6 border-2 border-yellow-400">
                <h4 className="text-3xl font-bold text-yellow-300 mb-4">25 pts</h4>
                <div className="text-xl font-semibold mb-2">Main Orchestration</div>
                <div className="text-sm text-yellow-100 text-left space-y-1">
                  <div>• Environment validation</div>
                  <div>• Function sequencing</div>
                  <div>• Error handling</div>
                  <div>• Summary object return</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-pink-500/20 rounded-xl p-6 border border-pink-400/50">
                <h4 className="text-2xl font-bold text-pink-300 mb-2">15 pts</h4>
                <div className="text-lg font-semibold">Code Quality</div>
                <div className="text-sm text-pink-100">Clean, commented, organized</div>
              </div>

              <div className="bg-cyan-500/20 rounded-xl p-6 border border-cyan-400/50">
                <h4 className="text-2xl font-bold text-cyan-300 mb-2">10 pts</h4>
                <div className="text-lg font-semibold">Testing</div>
                <div className="text-sm text-cyan-100">All tests pass, pipeline works</div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-teal-600 to-cyan-700'
    },

    // Slide 16: Good Luck
    {
      id: 'good-luck',
      title: 'Good Luck',
      content: (
        <div className="text-center flex flex-col items-center justify-center min-h-[60vh]">
          <style>{customStyles}</style>
          <div className="text-9xl mb-12 animate-float">🎙️</div>
          <h1 className="text-8xl font-bold text-white mb-12 animate-fade-in">Good Luck!</h1>
          <a 
            href="https://github.com/tgondil/cs390-podcast" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-3xl px-12 py-6 rounded-xl transition-all transform hover:scale-105 shadow-2xl animate-pulse-glow"
          >
            📦 Go to Repository
          </a>
        </div>
      ),
      bgGradient: 'from-purple-600 to-indigo-700'
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

export default PodcastSlides;

