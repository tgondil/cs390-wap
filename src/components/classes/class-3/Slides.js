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
  @keyframes api-flow {
    0% { transform: translateX(-100%); opacity: 0; }
    50% { transform: translateX(0); opacity: 1; }
    100% { transform: translateX(100%); opacity: 0; }
  }
  .api-flow-animation {
    animation: api-flow 3s ease-in-out;
  }
`;





// Visual HTTP Methods Demo
const HTTPMethodsDemo = () => {
  const [selectedMethod, setSelectedMethod] = useState('GET');
  const [isAnimating, setIsAnimating] = useState(false);

  const methods = {
    'GET': {
      emoji: '📥',
      color: 'green',
      action: 'Retrieve',
      description: 'Get data from server',
      example: 'Get user profile, fetch posts',
      analogy: 'Like asking "What\'s in the fridge?"'
    },
    'POST': {
      emoji: '📤',
      color: 'blue', 
      action: 'Create',
      description: 'Send new data to server',
      example: 'Create new account, post a photo',
      analogy: 'Like putting new food in the fridge'
    },
    'PUT': {
      emoji: '✏️',
      color: 'orange',
      action: 'Update',
      description: 'Update existing data',
      example: 'Edit profile, update post',
      analogy: 'Like replacing old milk with fresh milk'
    },
    'DELETE': {
      emoji: '🗑️',
      color: 'red',
      action: 'Remove', 
      description: 'Delete data from server',
      example: 'Delete account, remove post',
      analogy: 'Like throwing away expired food'
    }
  };

  const animateMethod = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Method Selection */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {Object.entries(methods).map(([key, method]) => (
          <button
            key={key}
            onClick={() => setSelectedMethod(key)}
            className={`p-6 rounded-xl border-4 transition-all transform hover:scale-105 ${
              selectedMethod === key 
                ? `bg-${method.color}-500/30 border-${method.color}-400 shadow-2xl scale-110` 
                : 'bg-white/10 border-white/30 hover:border-white/60'
            }`}
          >
            <div className="text-5xl mb-3">{method.emoji}</div>
            <div className="text-xl font-bold text-white">{key}</div>
            <div className="text-white/70 text-sm">{method.action}</div>
          </button>
        ))}
      </div>

      {/* Selected Method Details */}
      <div className={`bg-${methods[selectedMethod].color}-500/20 backdrop-blur rounded-xl p-8 border border-${methods[selectedMethod].color}-400/30`}>
        <div className="text-center mb-8">
          <div className={`text-8xl mb-4 ${isAnimating ? 'animate-bounce' : 'animate-float'}`}>
            {methods[selectedMethod].emoji}
          </div>
          <h3 className="text-4xl font-bold text-white mb-4">{selectedMethod}</h3>
          <p className="text-xl text-white/90">{methods[selectedMethod].description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/10 rounded-xl p-6 text-center">
            <h4 className="text-lg font-bold text-white mb-3">🎯 What it does</h4>
            <p className="text-white/80">{methods[selectedMethod].action} data on the server</p>
          </div>
          
          <div className="bg-white/10 rounded-xl p-6 text-center">
            <h4 className="text-lg font-bold text-white mb-3">🌟 Real Examples</h4>
            <p className="text-white/80">{methods[selectedMethod].example}</p>
          </div>
          
          <div className="bg-white/10 rounded-xl p-6 text-center">
            <h4 className="text-lg font-bold text-white mb-3">🏠 Kitchen Analogy</h4>
            <p className="text-white/80">{methods[selectedMethod].analogy}</p>
          </div>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={animateMethod}
            className={`bg-${methods[selectedMethod].color}-600 hover:bg-${methods[selectedMethod].color}-700 text-white px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105`}
          >
            🎬 Animate {selectedMethod}
          </button>
        </div>
      </div>
    </div>
  );
};

// JSON Visual Demo
const JSONVisualDemo = () => {
  const [step, setStep] = useState('object');
  const [isAnimating, setIsAnimating] = useState(false);

  const steps = {
    'object': {
      title: 'JavaScript Object',
      emoji: '📦',
      color: 'blue',
      content: {
        name: "Alice",
        age: 25,
        skills: ["JavaScript", "React"]
      }
    },
    'json': {
      title: 'JSON String',
      emoji: '📄', 
      color: 'green',
      content: '{"name":"Alice","age":25,"skills":["JavaScript","React"]}'
    }
  };

  const animateConversion = async () => {
    setIsAnimating(true);
    
    if (step === 'object') {
      setTimeout(() => setStep('json'), 1000);
    } else {
      setTimeout(() => setStep('object'), 1000);
    }
    
    setTimeout(() => setIsAnimating(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <div className="text-8xl mb-6 animate-float">🔄</div>
        <h3 className="text-3xl font-bold text-white mb-4">JSON Conversion</h3>
        <p className="text-xl text-white/80">JavaScript Objects ↔ JSON Strings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* JavaScript Object */}
        <div className={`bg-blue-500/20 rounded-xl p-8 border-2 transition-all duration-1000 ${
          step === 'object' ? 'border-blue-400 scale-110 shadow-2xl' : 'border-blue-400/30'
        }`}>
          <div className="text-center">
            <div className="text-6xl mb-4">📦</div>
            <h4 className="text-2xl font-bold text-blue-300 mb-4">JavaScript Object</h4>
            <div className="bg-gray-800 rounded-lg p-4 text-left">
              <div className="text-white font-mono">
                <div>const user = &#123;</div>
                <div className="ml-4">name: "Alice",</div>
                <div className="ml-4">age: 25,</div>
                <div className="ml-4">skills: ["JS", "React"]</div>
                <div>&#125;;</div>
              </div>
            </div>
            <div className="text-white/70 text-sm mt-3">Easy to work with in JavaScript</div>
          </div>
        </div>

        {/* Conversion Arrow */}
        <div className="text-center">
          <button
            onClick={animateConversion}
            disabled={isAnimating}
            className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white px-6 py-4 rounded-xl font-bold transition-all transform hover:scale-105"
          >
            <div className={`text-4xl ${isAnimating ? 'animate-spin' : ''}`}>
              {step === 'object' ? '➡️' : '⬅️'}
            </div>
            <div className="text-sm mt-2">
              {step === 'object' ? 'JSON.stringify()' : 'JSON.parse()'}
            </div>
          </button>
        </div>

        {/* JSON String */}
        <div className={`bg-green-500/20 rounded-xl p-8 border-2 transition-all duration-1000 ${
          step === 'json' ? 'border-green-400 scale-110 shadow-2xl' : 'border-green-400/30'
        }`}>
          <div className="text-center">
            <div className="text-6xl mb-4">📄</div>
            <h4 className="text-2xl font-bold text-green-300 mb-4">JSON String</h4>
            <div className="bg-gray-800 rounded-lg p-4 text-left">
              <div className="text-green-300 font-mono text-sm break-all">
                "&#123;"name":"Alice","age":25,"skills":["JS","React"]&#125;"
              </div>
            </div>
            <div className="text-white/70 text-sm mt-3">Perfect for sending over the internet</div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
        <h4 className="text-xl font-bold text-yellow-300 mb-3 text-center">🎯 Why Convert?</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-3">📦 ➡️ 📄</div>
            <div className="font-bold text-white mb-2">Object to JSON</div>
            <div className="text-white/70 text-sm">When sending data to APIs</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">📄 ➡️ 📦</div>
            <div className="font-bold text-white mb-2">JSON to Object</div>
            <div className="text-white/70 text-sm">When receiving data from APIs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Simple Fetch Demo
const SimpleFetchDemo = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  const steps = [
    { 
      id: 1, 
      title: 'Write the fetch()', 
      emoji: '✍️',
      description: 'Tell JavaScript which API to call',
      code: 'fetch("https://api.github.com/users/tanay")'
    },
    { 
      id: 2, 
      title: 'Wait for response', 
      emoji: '⏳',
      description: 'API server processes your request',
      code: '.then(response => response.json())'
    },
    { 
      id: 3, 
      title: 'Use the data', 
      emoji: '🎉',
      description: 'Update your webpage with fresh data',
      code: '.then(data => console.log(data.name))'
    }
  ];

  const runDemo = async () => {
    setIsLoading(true);
    setUserData(null);
    setStep(1);

    // Animate through steps
    for (let i = 1; i <= 3; i++) {
      setStep(i);
      await new Promise(resolve => setTimeout(resolve, 1500));
    }

    // Show result
    setUserData({
      name: "Tanay Gondil",
      followers: 42,
      avatar_url: "https://avatars.githubusercontent.com/u/1234567"
    });
    
    setIsLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <div className="text-8xl mb-6 animate-float">🚀</div>
        <h3 className="text-3xl font-bold text-white mb-4">Fetch API in 3 Steps</h3>
        <button
          onClick={runDemo}
          disabled={isLoading}
          className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 disabled:opacity-50 text-white px-8 py-4 rounded-xl font-bold text-xl transition-all transform hover:scale-105"
        >
          {isLoading ? '⏳ Running Demo...' : '▶️ Run Fetch Demo'}
        </button>
      </div>

      {/* Visual Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {steps.map((stepItem) => (
          <div
            key={stepItem.id}
            className={`p-8 rounded-xl border-4 transition-all duration-500 ${
              step >= stepItem.id && isLoading
                ? 'bg-blue-500/30 border-blue-400 scale-110 animate-pulse-glow'
                : step >= stepItem.id
                ? 'bg-green-500/30 border-green-400'
                : 'bg-white/10 border-white/30'
            }`}
          >
            <div className="text-center">
              <div className="text-6xl mb-4">{stepItem.emoji}</div>
              <h4 className="text-xl font-bold text-white mb-3">Step {stepItem.id}</h4>
              <div className="text-lg text-white/90 mb-3">{stepItem.title}</div>
              <p className="text-white/70 text-sm mb-4">{stepItem.description}</p>
              <div className="bg-gray-800 rounded-lg p-3">
                <code className="text-blue-300 text-sm">{stepItem.code}</code>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Result */}
      {userData && (
        <div className="bg-green-500/20 rounded-xl p-8 border border-green-400/30 animate-fade-in">
          <h4 className="text-2xl font-bold text-green-300 mb-6 text-center">✅ Success! Data Received</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <div className="text-6xl mb-4">👨‍💻</div>
              <div className="bg-white/10 rounded-lg p-6">
                <h5 className="text-xl font-bold text-white mb-2">{userData.name}</h5>
                <div className="text-white/80">{userData.followers} followers</div>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="text-white/70 text-sm mb-2">Raw JSON Response:</div>
              <pre className="text-green-300 text-sm">
{JSON.stringify(userData, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Weather App Visual Demo
const WeatherAppVisual = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(0);

  const mockWeather = {
    'chicago': { temp: 72, condition: 'Sunny', emoji: '☀️', color: 'yellow' },
    'seattle': { temp: 58, condition: 'Rainy', emoji: '🌧️', color: 'blue' },
    'miami': { temp: 85, condition: 'Hot', emoji: '🔥', color: 'red' },
    'default': { temp: 75, condition: 'Cloudy', emoji: '☁️', color: 'gray' }
  };

  const getWeather = async () => {
    if (!city.trim()) return;
    
    setIsLoading(true);
    setWeather(null);
    setStep(1);

    // Animate through process
    await new Promise(resolve => setTimeout(resolve, 800));
    setStep(2);
    await new Promise(resolve => setTimeout(resolve, 800));
    setStep(3);
    await new Promise(resolve => setTimeout(resolve, 800));

    // Show result
    const weatherKey = city.toLowerCase();
    const result = mockWeather[weatherKey] || mockWeather['default'];
    result.city = city;
    
    setWeather(result);
    setIsLoading(false);
    setStep(0);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <div className="text-8xl mb-6 animate-float">🌤️</div>
        <h3 className="text-3xl font-bold text-white mb-8">Build a Weather App!</h3>
        
        {/* Input Section */}
        <div className="bg-white/10 backdrop-blur rounded-xl p-6 max-w-md mx-auto">
          <div className="flex space-x-3">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name..."
              className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-blue-400 focus:outline-none text-lg"
              onKeyPress={(e) => e.key === 'Enter' && getWeather()}
            />
            <button
              onClick={getWeather}
              disabled={isLoading || !city.trim()}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-105"
            >
              🔍
            </button>
          </div>
        </div>
      </div>

      {/* Process Animation */}
      {isLoading && (
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div className={`text-center p-6 rounded-xl transition-all duration-500 ${
            step >= 1 ? 'bg-blue-500/30 border-2 border-blue-400' : 'bg-white/10'
          }`}>
            <div className="text-6xl mb-4">📤</div>
            <div className="text-xl font-bold text-white">Sending Request</div>
            <div className="text-white/70">to weather API</div>
          </div>
          
          <div className={`text-center p-6 rounded-xl transition-all duration-500 ${
            step >= 2 ? 'bg-orange-500/30 border-2 border-orange-400' : 'bg-white/10'
          }`}>
            <div className="text-6xl mb-4">⚙️</div>
            <div className="text-xl font-bold text-white">Server Processing</div>
            <div className="text-white/70">looking up weather</div>
          </div>
          
          <div className={`text-center p-6 rounded-xl transition-all duration-500 ${
            step >= 3 ? 'bg-green-500/30 border-2 border-green-400' : 'bg-white/10'
          }`}>
            <div className="text-6xl mb-4">📥</div>
            <div className="text-xl font-bold text-white">Response Received</div>
            <div className="text-white/70">weather data ready!</div>
          </div>
        </div>
      )}

      {/* Weather Result */}
      {weather && !isLoading && (
        <div className={`bg-${weather.color}-500/20 rounded-xl p-8 border border-${weather.color}-400/30 animate-fade-in`}>
          <div className="text-center">
            <div className="text-8xl mb-6">{weather.emoji}</div>
            <h3 className="text-4xl font-bold text-white mb-4">{weather.city}</h3>
            <div className="text-6xl font-bold text-white mb-4">{weather.temp}°F</div>
            <div className="text-2xl text-white/90">{weather.condition}</div>
          </div>
        </div>
      )}

      {!weather && !isLoading && (
        <div className="bg-white/10 rounded-xl p-8 text-center">
          <div className="text-6xl mb-4">🎯</div>
          <div className="text-white/70 text-xl">Enter a city name to see the magic!</div>
          <div className="text-white/50 text-sm mt-2">Try: Chicago, Seattle, Miami</div>
        </div>
      )}
    </div>
  );
};

// DOM Connection Demo - Show how API data updates the webpage
const DOMConnectionDemo = () => {
  const [selectedDemo, setSelectedDemo] = useState('text-update');
  const [isRunning, setIsRunning] = useState(false);
  const [demoData, setDemoData] = useState(null);

  const demos = {
    'text-update': {
      title: 'Update Text Content',
      emoji: '✏️',
      color: 'blue',
      description: 'Change text on the page',
      apiData: { name: "Tanay Gondil", followers: 42 },
      domUpdate: 'textContent'
    },
    'image-update': {
      title: 'Update Images',
      emoji: '🖼️', 
      color: 'green',
      description: 'Change images dynamically',
      apiData: { avatar_url: "https://via.placeholder.com/150/0000FF/FFFFFF?text=User" },
      domUpdate: 'src attribute'
    },
    'list-update': {
      title: 'Update Lists',
      emoji: '📋',
      color: 'purple',
      description: 'Add items to lists',
      apiData: { skills: ["JavaScript", "React", "APIs"] },
      domUpdate: 'innerHTML'
    }
  };

  const runDemo = async () => {
    setIsRunning(true);
    setDemoData(null);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setDemoData(demos[selectedDemo].apiData);
    
    setTimeout(() => {
      setIsRunning(false);
    }, 3000);
  };

  return (
    <div className="max-w-6xl mx-auto">
             {/* Demo Selection */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
         {Object.entries(demos).map(([key, demo]) => (
           <button
             key={key}
             onClick={() => setSelectedDemo(key)}
             className={`p-4 rounded-xl border-4 transition-all transform hover:scale-105 ${
               selectedDemo === key 
                 ? `bg-${demo.color}-500/30 border-${demo.color}-400 shadow-2xl scale-110` 
                 : 'bg-white/10 border-white/30 hover:border-white/60'
             }`}
           >
             <div className="text-4xl mb-3">{demo.emoji}</div>
             <div className="text-lg font-bold text-white mb-2">{demo.title}</div>
             <div className="text-white/70 text-xs">{demo.description}</div>
           </button>
         ))}
       </div>
 
       <div className="text-center mb-6">
         <button
           onClick={runDemo}
           disabled={isRunning}
           className={`bg-${demos[selectedDemo].color}-600 hover:bg-${demos[selectedDemo].color}-700 disabled:opacity-50 text-white px-6 py-3 rounded-xl font-bold text-lg transition-all transform hover:scale-105`}
         >
           {isRunning ? '⏳ Fetching Data...' : `🚀 Run ${demos[selectedDemo].title} Demo`}
         </button>
       </div>

             {/* Visual Demo Area */}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
         {/* Before (Empty State) */}
         <div className="bg-gray-500/20 backdrop-blur rounded-xl p-6 border-2 border-gray-400">
           <h4 className="text-lg font-bold text-white mb-4 text-center">📄 Before API Call</h4>
           <div className="bg-white rounded-lg p-4 min-h-[150px] flex items-center justify-center">
            {selectedDemo === 'text-update' && (
              <div className="text-center">
                <div className="text-gray-400 text-2xl mb-4">Loading user...</div>
                <div className="text-gray-500">Followers: --</div>
              </div>
            )}
            {selectedDemo === 'image-update' && (
              <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-500">👤</span>
              </div>
            )}
            {selectedDemo === 'list-update' && (
              <div className="text-gray-400">
                <div className="text-lg mb-4">Skills:</div>
                <div className="text-sm">Loading...</div>
              </div>
            )}
          </div>
        </div>

                 {/* After (With Data) */}
         <div className={`bg-${demos[selectedDemo].color}-500/20 backdrop-blur rounded-xl p-6 border-2 border-${demos[selectedDemo].color}-400`}>
           <h4 className="text-lg font-bold text-white mb-4 text-center">✨ After API Call</h4>
           <div className="bg-white rounded-lg p-4 min-h-[150px] flex items-center justify-center">
            {demoData && selectedDemo === 'text-update' && (
              <div className="text-center animate-fade-in">
                <div className="text-gray-800 text-2xl mb-4 font-bold">{demoData.name}</div>
                <div className="text-gray-600">{demoData.followers} followers</div>
              </div>
            )}
            {demoData && selectedDemo === 'image-update' && (
              <img 
                src={demoData.avatar_url} 
                alt="User avatar" 
                className="w-24 h-24 rounded-full animate-fade-in"
              />
            )}
            {demoData && selectedDemo === 'list-update' && (
              <div className="text-gray-800 animate-fade-in">
                <div className="text-lg mb-4 font-bold">Skills:</div>
                <div className="space-y-2">
                  {demoData.skills.map((skill, i) => (
                    <div key={i} className="bg-blue-100 px-3 py-1 rounded text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {!demoData && (
              <div className="text-gray-400 text-center">
                <div className="text-4xl mb-4">🎯</div>
                <div>Click "Run Demo" to see the magic!</div>
              </div>
            )}
          </div>
        </div>
      </div>

             {/* The Connection */}
       {demoData && (
         <div className="mt-6 bg-yellow-500/20 rounded-xl p-4 border border-yellow-400/30 animate-fade-in">
           <h4 className="text-lg font-bold text-yellow-300 mb-3 text-center">🔗 The Connection</h4>
           <div className="text-center">
             <div className="text-sm text-white/90 mb-3">
               <strong>API Data</strong> → <strong>JavaScript</strong> → <strong>DOM</strong> → <strong>User Sees Change</strong>
             </div>
           </div>
         </div>
       )}
    </div>
  );
};

// Enhanced Error Handling Visual Demo
const ErrorHandlingVisualDemo = () => {
  const [scenario, setScenario] = useState('success');
  const [isLoading, setIsLoading] = useState(false);

  const scenarios = {
    'success': {
      emoji: '✅',
      title: 'Everything Works',
      color: 'green',
      result: { message: "API call successful!", data: "Here's your data" }
    },
    'network-error': {
      emoji: '📡',
      title: 'Network Down',
      color: 'red',
      result: { error: "Network error - check your connection" }
    },
    'server-error': {
      emoji: '🏢',
      title: 'Server Error',
      color: 'orange', 
      result: { error: "Server error 500 - try again later" }
    },
    'invalid-data': {
      emoji: '📄',
      title: 'Bad Data',
      color: 'purple',
      result: { error: "Invalid JSON format received" }
    }
  };

  const runScenario = async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto">
             <div className="text-center mb-6">
         <h3 className="text-2xl font-bold text-white mb-4">🎭 Error Handling Scenarios</h3>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
           {Object.entries(scenarios).map(([key, scenario]) => (
             <button
               key={key}
               onClick={() => setScenario(key)}
               className={`p-4 rounded-xl border-4 transition-all transform hover:scale-105 ${
                 scenario === key 
                   ? `bg-${scenarios[key].color}-500/30 border-${scenarios[key].color}-400 scale-110` 
                   : 'bg-white/10 border-white/30'
               }`}
             >
               <div className="text-3xl mb-2">{scenario.emoji}</div>
               <div className="text-white font-bold text-xs">{scenario.title}</div>
             </button>
           ))}
         </div>
       </div>
 
       <div className="text-center mb-6">
         <button
           onClick={runScenario}
           disabled={isLoading}
           className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white px-6 py-3 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
         >
           {isLoading ? '⏳ Testing...' : `🧪 Test ${scenarios[scenario].title}`}
         </button>
       </div>

             {/* Result Display */}
       <div className={`bg-${scenarios[scenario].color}-500/20 rounded-xl p-6 border border-${scenarios[scenario].color}-400/30`}>
         <div className="text-center">
           <div className="text-6xl mb-4">{scenarios[scenario].emoji}</div>
           <h4 className="text-xl font-bold text-white mb-4">{scenarios[scenario].title}</h4>
           
           {isLoading ? (
             <div className="bg-gray-800 rounded-lg p-4">
               <div className="animate-spin w-6 h-6 border-4 border-blue-400 border-t-transparent rounded-full mx-auto mb-3"></div>
               <div className="text-white/70 text-sm">Making API call...</div>
             </div>
           ) : (
             <div className="bg-gray-800 rounded-lg p-4">
               {scenarios[scenario].result.error ? (
                 <div className="text-red-300">
                   ❌ {scenarios[scenario].result.error}
                 </div>
               ) : (
                 <div className="text-green-300">
                   ✅ {scenarios[scenario].result.message}
                 </div>
               )}
             </div>
           )}
         </div>
       </div>
 
       <div className="mt-6 bg-yellow-500/20 rounded-xl p-4 border border-yellow-400/30">
         <h4 className="text-lg font-bold text-yellow-300 mb-3 text-center">💡 Good Error Handling Shows Users:</h4>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
           <div className="text-center">
             <div className="text-2xl mb-1">⏳</div>
             <div className="text-white font-bold text-sm">What's happening</div>
             <div className="text-white/70 text-xs">Loading indicators</div>
           </div>
           <div className="text-center">
             <div className="text-2xl mb-1">❌</div>
             <div className="text-white font-bold text-sm">What went wrong</div>
             <div className="text-white/70 text-xs">Clear error messages</div>
           </div>
           <div className="text-center">
             <div className="text-2xl mb-1">🔄</div>
             <div className="text-white font-bold text-sm">What to do next</div>
             <div className="text-white/70 text-xs">Retry buttons, suggestions</div>
           </div>
         </div>
       </div>
    </div>
  );
};

// Student-Friendly APIs Demo
const StudentFriendlyAPIs = () => {
  const [selectedAPI, setSelectedAPI] = useState('advice');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const studentAPIs = {
    'advice': {
      name: 'Random Advice',
      emoji: '💡',
      color: 'blue',
      description: 'Get life advice',
      url: 'https://api.adviceslip.com/advice',
      mockResponse: { slip: { advice: "Don't put off tomorrow what you can do today." } }
    },
    'quotes': {
      name: 'Inspirational Quotes',
      emoji: '📜',
      color: 'purple',
      description: 'Motivational quotes',
      url: 'https://api.quotable.io/random',
      mockResponse: { content: "The only way to do great work is to love what you do.", author: "Steve Jobs" }
    },
    'fox': {
      name: 'Random Fox',
      emoji: '🦊',
      color: 'orange',
      description: 'Cute fox pictures',
      url: 'https://randomfox.ca/floof/',
      mockResponse: { image: "https://randomfox.ca/images/fox1.jpg", link: "https://randomfox.ca/?id=1" }
    },
    'pokemon': {
      name: 'Pokémon Data',
      emoji: '⚡',
      color: 'yellow',
      description: 'Pokémon info',
      url: 'https://pokeapi.co/api/v2/pokemon/pikachu',
      mockResponse: { name: "pikachu", height: 4, weight: 60, types: [{ type: { name: "electric" } }] }
    },
    'jokes': {
      name: 'Programming Jokes',
      emoji: '😂',
      color: 'green',
      description: 'Developer humor',
      url: 'https://official-joke-api.appspot.com/random_joke',
      mockResponse: { setup: "Why do programmers prefer dark mode?", punchline: "Because light attracts bugs!" }
    },
    'facts': {
      name: 'Random Facts',
      emoji: '🧠',
      color: 'teal',
      description: 'Interesting trivia',
      url: 'https://uselessfacts.jsph.pl/random.json',
      mockResponse: { text: "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible." }
    }
  };

  const callAPI = async () => {
    setIsLoading(true);
    setResult(null);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    setResult(studentAPIs[selectedAPI].mockResponse);
    setIsLoading(false);
  };

  return (
    <div className="max-w-6xl mx-auto">
             <div className="text-center mb-6">
         <h3 className="text-2xl font-bold text-white mb-4">🎯 Fun APIs to Practice With</h3>
         <p className="text-lg text-white/80">All free, no API keys required!</p>
       </div>
 
       {/* API Grid */}
       <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
         {Object.entries(studentAPIs).map(([key, api]) => (
           <button
             key={key}
             onClick={() => setSelectedAPI(key)}
             className={`p-4 rounded-xl border-4 transition-all transform hover:scale-105 ${
               selectedAPI === key 
                 ? `bg-${api.color}-500/30 border-${api.color}-400 scale-110` 
                 : 'bg-white/10 border-white/30'
             }`}
           >
             <div className="text-3xl mb-2">{api.emoji}</div>
             <div className="text-white font-bold text-xs">{api.name}</div>
             <div className="text-white/70 text-xs mt-1">{api.description}</div>
           </button>
         ))}
       </div>
 
       <div className="text-center mb-6">
         <button
           onClick={callAPI}
           disabled={isLoading}
           className={`bg-${studentAPIs[selectedAPI].color}-600 hover:bg-${studentAPIs[selectedAPI].color}-700 disabled:opacity-50 text-white px-6 py-3 rounded-xl font-bold text-lg transition-all transform hover:scale-105`}
         >
           {isLoading ? '⏳ Loading...' : `${studentAPIs[selectedAPI].emoji} Get ${studentAPIs[selectedAPI].name}`}
         </button>
       </div>

             {/* Result Display */}
       {result && (
         <div className={`bg-${studentAPIs[selectedAPI].color}-500/20 rounded-xl p-6 border border-${studentAPIs[selectedAPI].color}-400/30 animate-fade-in`}>
           <div className="text-center">
             <div className="text-5xl mb-4">{studentAPIs[selectedAPI].emoji}</div>
             <div className="bg-white rounded-lg p-4">
              {selectedAPI === 'advice' && (
                <div className="text-gray-800 text-lg italic">"{result.slip.advice}"</div>
              )}
              {selectedAPI === 'quotes' && (
                <div className="text-gray-800">
                  <div className="text-lg italic mb-3">"{result.content}"</div>
                  <div className="text-sm font-bold">- {result.author}</div>
                </div>
              )}
              {selectedAPI === 'fox' && (
                <div className="text-gray-800">
                  <div className="text-lg mb-3">🦊 Here's a cute fox!</div>
                  <div className="text-sm text-blue-600">Image URL: {result.image}</div>
                </div>
              )}
              {selectedAPI === 'pokemon' && (
                <div className="text-gray-800">
                  <div className="text-xl font-bold mb-2 capitalize">{result.name}</div>
                  <div className="text-sm">Height: {result.height} | Weight: {result.weight}</div>
                  <div className="text-sm mt-2">Type: {result.types[0].type.name}</div>
                </div>
              )}
              {selectedAPI === 'jokes' && (
                <div className="text-gray-800">
                  <div className="text-lg mb-3">{result.setup}</div>
                  <div className="text-lg font-bold text-blue-600">{result.punchline}</div>
                </div>
              )}
              {selectedAPI === 'facts' && (
                <div className="text-gray-800 text-lg">{result.text}</div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-blue-400/30">
        <h4 className="text-xl font-bold text-white mb-4 text-center">🛠️ Perfect for Learning</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-3xl mb-2">🆓</div>
            <div className="text-white font-bold">Free to Use</div>
            <div className="text-white/70 text-sm">No signup required</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-white font-bold">Simple Data</div>
            <div className="text-white/70 text-sm">Easy to understand responses</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🎮</div>
            <div className="text-white font-bold">Fun Content</div>
            <div className="text-white/70 text-sm">Engaging for practice</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Class 3 Slides Component
const Class3Slides = () => {
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
      title: 'Introduction to APIs',
      content: (
        <div className="text-center space-y-12">
          <div className="space-y-8">
            <h1 className="text-6xl font-bold text-white mb-6">
              Class 3
            </h1>
            <h2 className="text-4xl font-semibold text-blue-100 mb-4">
              Introduction to APIs
            </h2>
            <div className="text-8xl mb-8 animate-float">🌐</div>
            <div className="text-2xl text-blue-200">
              Connecting your code to the world
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
                  What's the most random or unexpected skill you have?
                </div>
                
                <div className="text-white font-semibold">
                  What's the strangest piece of trivia you know that you've been waiting to tell someone?
                </div>
                
                <div className="text-white font-semibold">
                  If you had to give a TED Talk with no prep, what topic could you talk about for 10 minutes straight?
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-pink-600'
    },

    {
      id: 'discuss-campus-life',
      title: 'Discuss!',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">Discuss!</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <div className="text-left space-y-6 text-xl leading-relaxed">
                <div className="text-white font-semibold">
                  What's the most underrated spot on campus?
                </div>
                
                <div className="text-white font-semibold">
                  If you could create a new Purdue tradition, what would it be?
                </div>
                
                <div className="text-white font-semibold">
                  What's the strangest thing you've seen happen in class or on campus?
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-pink-600 to-red-600'
    },

    // Multiple Recap Slides
    {
      id: 'recap-1-variables',
      title: 'Recap: Variables & Functions',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Quick Recap</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📚</div>
            <h3 className="text-3xl font-bold mb-12">What we know from Class 2</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <div className="text-6xl mb-4">📦</div>
                <h4 className="text-2xl font-bold text-green-300 mb-3">Variables</h4>
                <div className="text-white/80 space-y-2 text-sm">
                  <div>const, let</div>
                  <div>strings, numbers</div>
                  <div>arrays, objects</div>
                </div>
              </div>

              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400">
                <div className="text-6xl mb-4">⚙️</div>
                <h4 className="text-2xl font-bold text-blue-300 mb-3">Functions</h4>
                <div className="text-white/80 space-y-2 text-sm">
                  <div>Arrow functions</div>
                  <div>Parameters</div>
                  <div>Return values</div>
                </div>
              </div>

              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-8 border-2 border-purple-400">
                <div className="text-6xl mb-4">📋</div>
                <h4 className="text-2xl font-bold text-purple-300 mb-3">Arrays</h4>
                <div className="text-white/80 space-y-2 text-sm">
                  <div>.map()</div>
                  <div>.filter()</div>
                  <div>.find()</div>
                </div>
              </div>

              <div className="bg-orange-500/20 backdrop-blur rounded-xl p-8 border-2 border-orange-400">
                <div className="text-6xl mb-4">🎯</div>
                <h4 className="text-2xl font-bold text-orange-300 mb-3">DOM</h4>
                <div className="text-white/80 space-y-2 text-sm">
                  <div>querySelector</div>
                  <div>textContent</div>
                  <div>addEventListener</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-teal-700'
    },



    {
      id: 'what-is-api-simple',
      title: 'What is an API?',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">What is an API?</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🔗</div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 border border-white/30 mb-8">
              <h3 className="text-2xl font-bold text-yellow-300 mb-4">📝 Full Form</h3>
              <div className="text-4xl font-bold text-white mb-2">
                <span className="text-blue-300">A</span>pplication <span className="text-green-300">P</span>rogramming <span className="text-purple-300">I</span>nterface
              </div>
              <p className="text-white/70 text-lg">A bridge that lets different software applications communicate using HTTP</p>
            </div>
            
            <h3 className="text-3xl font-bold mb-12">A way for programs to talk to each other over the internet</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <div className="text-6xl mb-6">📱</div>
                <h4 className="text-2xl font-bold text-green-300 mb-4">Your App</h4>
                <p className="text-white/80 text-lg">Wants to know the weather</p>
              </div>

              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400">
                <div className="text-6xl mb-6 animate-float">⚡</div>
                <h4 className="text-2xl font-bold text-blue-300 mb-4">API</h4>
                <p className="text-white/80 text-lg">The messenger between apps</p>
              </div>

              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-8 border-2 border-purple-400">
                <div className="text-6xl mb-6">🌤️</div>
                <h4 className="text-2xl font-bold text-purple-300 mb-4">Weather Service</h4>
                <p className="text-white/80 text-lg">Has the weather data</p>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-8 border border-yellow-400/30">
              <h4 className="text-3xl font-bold text-yellow-300 mb-4">🏠 Real-World Analogy</h4>
              <p className="text-white/90 text-xl mb-6">
                API = Restaurant Menu
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">📋</div>
                  <div className="text-white font-bold">Menu (API)</div>
                  <div className="text-white/70">Shows what you can order</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🙋‍♂️</div>
                  <div className="text-white font-bold">You (Your App)</div>
                  <div className="text-white/70">Make a request</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🍽️</div>
                  <div className="text-white font-bold">Kitchen (Server)</div>
                  <div className="text-white/70">Prepares your order</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-indigo-700'
    },



    {
      id: 'what-is-http-1',
      title: 'What is HTTP? - Part 1',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">What is HTTP?</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🌐</div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/30 mb-8">
              <h3 className="text-3xl font-bold text-yellow-300 mb-6">📝 Full Form</h3>
              <div className="text-5xl font-bold text-white mb-4">
                <span className="text-blue-300">H</span>yper<span className="text-green-300">T</span>ext <span className="text-purple-300">T</span>ransfer <span className="text-orange-300">P</span>rotocol
              </div>
              <p className="text-white/70 text-xl">The fundamental language that powers the entire internet</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400">
                <div className="text-7xl mb-6">📖</div>
                <h4 className="text-2xl font-bold text-blue-300 mb-4">HyperText</h4>
                <div className="text-white/80 text-left space-y-3 text-lg">
                  <div>• Text with links (web pages)</div>
                  <div>• Can jump from page to page</div>
                  <div>• Includes HTML, images, videos</div>
                  <div>• Interactive, not just static text</div>
                </div>
                <div className="mt-6 bg-blue-900/50 rounded p-4">
                  <div className="text-blue-200 text-center">💡 Think: clickable web pages!</div>
                </div>
              </div>

              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <div className="text-7xl mb-6">📦</div>
                <h4 className="text-2xl font-bold text-green-300 mb-4">Transfer Protocol</h4>
                <div className="text-white/80 text-left space-y-3 text-lg">
                  <div>• Rules for sending data safely</div>
                  <div>• Like grammar for computers</div>
                  <div>• Everyone follows the same rules</div>
                  <div>• Ensures reliable communication</div>
                </div>
                <div className="mt-6 bg-green-900/50 rounded p-4">
                  <div className="text-green-200 text-center">💡 Think: universal translator!</div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-8 border border-yellow-400/30">
              <h4 className="text-3xl font-bold text-yellow-300 mb-4">🎯 Why Does This Matter?</h4>
              <p className="text-white/90 text-xl">
                HTTP is why you can visit <strong className="text-green-300">any website</strong> from <strong className="text-blue-300">any browser</strong> on <strong className="text-purple-300">any device</strong> - 
                they all speak the same language!
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-cyan-600 to-blue-700'
    },

    {
      id: 'what-is-http-2',
      title: 'How HTTP Works - Part 2',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">How HTTP Actually Works</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🔄</div>
            <h3 className="text-3xl font-bold mb-12">The magical request-response dance</h3>
            
            <div className="space-y-8">
              {/* Step-by-step HTTP process */}
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-blue-400/30">
                <h4 className="text-2xl font-bold text-white mb-6">📤 Step 1: HTTP Request</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl mb-3">🌐</div>
                    <div className="text-white font-bold mb-2">Your Browser Says:</div>
                    <div className="bg-gray-800 rounded-lg p-4 text-left">
                      <div className="text-blue-300 font-mono text-sm space-y-1">
                        <div>GET /api/weather HTTP/1.1</div>
                        <div>Host: api.weather.com</div>
                        <div>Accept: application/json</div>
                        <div>User-Agent: Chrome/120.0</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl mb-3">🗣️</div>
                    <div className="text-white font-bold mb-2">In Human Terms:</div>
                    <div className="bg-blue-900/50 rounded-lg p-4">
                      <div className="text-white/90 text-lg">
                        "Hey weather server! Can you please give me the current weather data? 
                        I'm using Chrome and I understand JSON format."
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl p-8 border border-green-400/30">
                <h4 className="text-2xl font-bold text-white mb-6">📥 Step 2: HTTP Response</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl mb-3">🏢</div>
                    <div className="text-white font-bold mb-2">Server Responds:</div>
                    <div className="bg-gray-800 rounded-lg p-4 text-left">
                      <div className="text-green-300 font-mono text-sm space-y-1">
                        <div>HTTP/1.1 200 OK</div>
                        <div>Content-Type: application/json</div>
                        <div>Content-Length: 85</div>
                        <div className="text-white mt-2">&#123;"temp": 72, "condition": "sunny"&#125;</div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="text-4xl mb-3">💬</div>
                    <div className="text-white font-bold mb-2">In Human Terms:</div>
                    <div className="bg-green-900/50 rounded-lg p-4">
                      <div className="text-white/90 text-lg">
                        "Sure thing! Here's the weather data you asked for. 
                        Everything went fine (200 OK), and here's your JSON data!"
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-8 border border-purple-400/30">
              <h4 className="text-3xl font-bold text-purple-300 mb-6">🎭 Pizza Delivery Analogy</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-5xl mb-4">📞</div>
                  <h5 className="text-xl font-bold text-white mb-3">You Call</h5>
                  <div className="text-white/80 text-sm mb-2">
                    "Hi! One large pepperoni pizza to 123 Main St"
                  </div>
                  <div className="bg-purple-900/50 rounded p-2">
                    <div className="text-purple-200 text-xs">= HTTP Request</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-4">🍕</div>
                  <h5 className="text-xl font-bold text-white mb-3">Pizza Place</h5>
                  <div className="text-white/80 text-sm mb-2">
                    "Got it! $15, ready in 20 minutes"
                  </div>
                  <div className="bg-purple-900/50 rounded p-2">
                    <div className="text-purple-200 text-xs">= HTTP Response</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-4">😋</div>
                  <h5 className="text-xl font-bold text-white mb-3">You Enjoy</h5>
                  <div className="text-white/80 text-sm mb-2">
                    Hot pizza delivered to your door!
                  </div>
                  <div className="bg-purple-900/50 rounded p-2">
                    <div className="text-purple-200 text-xs">= Data in your app</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-700'
    },



    {
      id: 'http-methods-intro',
      title: 'HTTP Methods Overview',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">HTTP Methods</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📬</div>
            <h3 className="text-3xl font-bold mb-12">The verbs of the internet</h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-green-500/20 backdrop-blur rounded-xl p-6 border-2 border-green-400">
                <div className="text-6xl mb-4">📥</div>
                <h4 className="text-xl font-bold text-green-300 mb-2">GET</h4>
                <p className="text-white/80 text-sm">Retrieve data</p>
              </div>
              
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-6 border-2 border-blue-400">
                <div className="text-6xl mb-4">📤</div>
                <h4 className="text-xl font-bold text-blue-300 mb-2">POST</h4>
                <p className="text-white/80 text-sm">Create new data</p>
              </div>
              
              <div className="bg-yellow-500/20 backdrop-blur rounded-xl p-6 border-2 border-yellow-400">
                <div className="text-6xl mb-4">✏️</div>
                <h4 className="text-xl font-bold text-yellow-300 mb-2">PUT</h4>
                <p className="text-white/80 text-sm">Update data</p>
              </div>
              
              <div className="bg-red-500/20 backdrop-blur rounded-xl p-6 border-2 border-red-400">
                <div className="text-6xl mb-4">🗑️</div>
                <h4 className="text-xl font-bold text-red-300 mb-2">DELETE</h4>
                <p className="text-white/80 text-sm">Remove data</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-8 border border-purple-400/30">
              <h4 className="text-3xl font-bold text-purple-300 mb-6">🎯 Think of them as...</h4>
              <p className="text-white/90 text-xl mb-6">
                Different ways to interact with data, like different actions in real life
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">👀</div>
                  <div className="text-white font-bold">Look</div>
                  <div className="text-white/70 text-sm">GET</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">✍️</div>
                  <div className="text-white font-bold">Create</div>
                  <div className="text-white/70 text-sm">POST</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📝</div>
                  <div className="text-white font-bold">Update</div>
                  <div className="text-white/70 text-sm">PUT</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🗑️</div>
                  <div className="text-white font-bold">Remove</div>
                  <div className="text-white/70 text-sm">DELETE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-indigo-700'
    },

    {
      id: 'http-get-method',
      title: 'GET Method',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">GET Method</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📥</div>
            <h3 className="text-3xl font-bold mb-12">Retrieve data from the server</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <div className="text-6xl mb-6">🎯</div>
                <h4 className="text-2xl font-bold text-green-300 mb-4">What GET Does</h4>
                <div className="space-y-3 text-white/80 text-left text-lg">
                  <div>• Asks server for information</div>
                  <div>• Doesn't change anything</div>
                  <div>• Safe to repeat multiple times</div>
                  <div>• Most common HTTP method</div>
                </div>
              </div>

              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400">
                <div className="text-6xl mb-6">🏠</div>
                <h4 className="text-2xl font-bold text-blue-300 mb-4">Real-World Analogy</h4>
                <div className="space-y-4 text-white/80">
                  <div className="bg-blue-900/50 rounded-lg p-4">
                    <div className="text-blue-200 font-bold mb-2">Like asking questions:</div>
                    <div className="text-white/90">"What's the weather like?"</div>
                    <div className="text-white/90">"What's on the menu?"</div>
                    <div className="text-white/90">"What time is it?"</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl">💡</div>
                    <div className="text-white/70">You're just looking, not changing anything!</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl p-8 border border-green-400/30">
              <h4 className="text-2xl font-bold text-green-300 mb-6">💻 GET Examples</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-4xl mb-3">📰</div>
                  <div className="text-white font-bold mb-2">Get News</div>
                  <div className="text-green-300 font-mono text-xs">GET /api/news</div>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-4xl mb-3">👤</div>
                  <div className="text-white font-bold mb-2">Get User Profile</div>
                  <div className="text-green-300 font-mono text-xs">GET /api/users/123</div>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-4xl mb-3">🌤️</div>
                  <div className="text-white font-bold mb-2">Get Weather</div>
                  <div className="text-green-300 font-mono text-xs">GET /api/weather</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-emerald-700'
    },

    {
      id: 'http-post-method',
      title: 'POST Method',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">POST Method</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📤</div>
            <h3 className="text-3xl font-bold mb-12">Send new data to the server</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400">
                <div className="text-6xl mb-6">🎯</div>
                <h4 className="text-2xl font-bold text-blue-300 mb-4">What POST Does</h4>
                <div className="space-y-3 text-white/80 text-left text-lg">
                  <div>• Creates new data on server</div>
                  <div>• Sends information in request body</div>
                  <div>• Changes the server's data</div>
                  <div>• Used for forms and uploads</div>
                </div>
              </div>

              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-8 border-2 border-purple-400">
                <div className="text-6xl mb-6">✉️</div>
                <h4 className="text-2xl font-bold text-purple-300 mb-4">Real-World Analogy</h4>
                <div className="space-y-4 text-white/80">
                  <div className="bg-purple-900/50 rounded-lg p-4">
                    <div className="text-purple-200 font-bold mb-2">Like mailing a letter:</div>
                    <div className="text-white/90">"Here's my job application"</div>
                    <div className="text-white/90">"Please add this to your records"</div>
                    <div className="text-white/90">"Here's my new photo"</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl">💡</div>
                    <div className="text-white/70">You're giving them something new!</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-8 border border-blue-400/30">
              <h4 className="text-2xl font-bold text-blue-300 mb-6">💻 POST Examples</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-4xl mb-3">👤</div>
                  <div className="text-white font-bold mb-2">Create Account</div>
                  <div className="text-blue-300 font-mono text-xs mb-2">POST /api/users</div>
                  <div className="text-white/60 text-xs">Send: name, email, password</div>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-4xl mb-3">📝</div>
                  <div className="text-white font-bold mb-2">Post Message</div>
                  <div className="text-blue-300 font-mono text-xs mb-2">POST /api/posts</div>
                  <div className="text-white/60 text-xs">Send: title, content, author</div>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-4xl mb-3">📷</div>
                  <div className="text-white font-bold mb-2">Upload Photo</div>
                  <div className="text-blue-300 font-mono text-xs mb-2">POST /api/photos</div>
                  <div className="text-white/60 text-xs">Send: image file, caption</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-cyan-700'
    },

    {
      id: 'http-put-method',
      title: 'PUT Method',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">PUT Method</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">✏️</div>
            <h3 className="text-3xl font-bold mb-12">Update existing data on the server</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-yellow-500/20 backdrop-blur rounded-xl p-8 border-2 border-yellow-400">
                <div className="text-6xl mb-6">🎯</div>
                <h4 className="text-2xl font-bold text-yellow-300 mb-4">What PUT Does</h4>
                <div className="space-y-3 text-white/80 text-left text-lg">
                  <div>• Updates existing data</div>
                  <div>• Replaces old with new</div>
                  <div>• Needs to know what to update</div>
                  <div>• Like editing a document</div>
                </div>
              </div>

              <div className="bg-orange-500/20 backdrop-blur rounded-xl p-8 border-2 border-orange-400">
                <div className="text-6xl mb-6">📝</div>
                <h4 className="text-2xl font-bold text-orange-300 mb-4">Real-World Analogy</h4>
                <div className="space-y-4 text-white/80">
                  <div className="bg-orange-900/50 rounded-lg p-4">
                    <div className="text-orange-200 font-bold mb-2">Like editing your profile:</div>
                    <div className="text-white/90">"Change my bio to this"</div>
                    <div className="text-white/90">"Update my profile picture"</div>
                    <div className="text-white/90">"Fix my phone number"</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl">💡</div>
                    <div className="text-white/70">You're improving what's already there!</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-8 border border-yellow-400/30">
              <h4 className="text-2xl font-bold text-yellow-300 mb-6">💻 PUT Examples</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-4xl mb-3">👤</div>
                  <div className="text-white font-bold mb-2">Update Profile</div>
                  <div className="text-yellow-300 font-mono text-xs mb-2">PUT /api/users/123</div>
                  <div className="text-white/60 text-xs">Send: new bio, new photo</div>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-4xl mb-3">📝</div>
                  <div className="text-white font-bold mb-2">Edit Post</div>
                  <div className="text-yellow-300 font-mono text-xs mb-2">PUT /api/posts/456</div>
                  <div className="text-white/60 text-xs">Send: updated content</div>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-4xl mb-3">⚙️</div>
                  <div className="text-white font-bold mb-2">Update Settings</div>
                  <div className="text-yellow-300 font-mono text-xs mb-2">PUT /api/settings/789</div>
                  <div className="text-white/60 text-xs">Send: new preferences</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-yellow-600 to-orange-700'
    },

    {
      id: 'http-delete-method',
      title: 'DELETE Method',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">DELETE Method</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🗑️</div>
            <h3 className="text-3xl font-bold mb-12">Remove data from the server</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-red-500/20 backdrop-blur rounded-xl p-8 border-2 border-red-400">
                <div className="text-6xl mb-6">🎯</div>
                <h4 className="text-2xl font-bold text-red-300 mb-4">What DELETE Does</h4>
                <div className="space-y-3 text-white/80 text-left text-lg">
                  <div>• Removes data from server</div>
                  <div>• Usually permanent action</div>
                  <div>• Needs specific item to delete</div>
                  <div>• Use with caution!</div>
                </div>
              </div>

              <div className="bg-gray-500/20 backdrop-blur rounded-xl p-8 border-2 border-gray-400">
                <div className="text-6xl mb-6">🗂️</div>
                <h4 className="text-2xl font-bold text-gray-300 mb-4">Real-World Analogy</h4>
                <div className="space-y-4 text-white/80">
                  <div className="bg-gray-900/50 rounded-lg p-4">
                    <div className="text-gray-200 font-bold mb-2">Like throwing things away:</div>
                    <div className="text-white/90">"Delete this old photo"</div>
                    <div className="text-white/90">"Remove me from this group"</div>
                    <div className="text-white/90">"Cancel my account"</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl">⚠️</div>
                    <div className="text-white/70">Be careful - it's usually gone forever!</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-xl p-8 border border-red-400/30">
              <h4 className="text-2xl font-bold text-red-300 mb-6">💻 DELETE Examples</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-4xl mb-3">📝</div>
                  <div className="text-white font-bold mb-2">Delete Post</div>
                  <div className="text-red-300 font-mono text-xs mb-2">DELETE /api/posts/456</div>
                  <div className="text-white/60 text-xs">Remove specific post</div>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-4xl mb-3">👤</div>
                  <div className="text-white font-bold mb-2">Delete Account</div>
                  <div className="text-red-300 font-mono text-xs mb-2">DELETE /api/users/123</div>
                  <div className="text-white/60 text-xs">Remove user completely</div>
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-4xl mb-3">📷</div>
                  <div className="text-white font-bold mb-2">Delete Photo</div>
                  <div className="text-red-300 font-mono text-xs mb-2">DELETE /api/photos/789</div>
                  <div className="text-white/60 text-xs">Remove from gallery</div>
                </div>
              </div>
              
              <div className="mt-6 bg-red-900/30 rounded-lg p-4">
                <div className="text-red-200 font-bold mb-2">⚠️ Important Note</div>
                <div className="text-white/80">Always confirm before DELETE - most apps ask "Are you sure?"</div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-600 to-pink-700'
    },

    {
      id: 'json-intro',
      title: 'What is JSON?',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">What is JSON?</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📄</div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/30 mb-8">
              <h3 className="text-3xl font-bold text-yellow-300 mb-6">📝 Full Form</h3>
              <div className="text-5xl font-bold text-white mb-4">
                <span className="text-blue-300">J</span>ava<span className="text-green-300">S</span>cript <span className="text-purple-300">O</span>bject <span className="text-orange-300">N</span>otation
              </div>
              <p className="text-white/70 text-xl">The universal language for sharing data between applications</p>
            </div>
            
            <h3 className="text-3xl font-bold mb-12">Why JSON is everywhere</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400">
                <div className="text-6xl mb-6">🌍</div>
                <h4 className="text-2xl font-bold text-blue-300 mb-4">Universal</h4>
                <div className="space-y-3 text-white/80 text-left">
                  <div>• Every programming language understands it</div>
                  <div>• Python, Java, C++, PHP - all use JSON</div>
                  <div>• Works on web, mobile, desktop</div>
                  <div>• The internet's common language</div>
                </div>
              </div>

              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <div className="text-6xl mb-6">👀</div>
                <h4 className="text-2xl font-bold text-green-300 mb-4">Human Readable</h4>
                <div className="space-y-3 text-white/80 text-left">
                  <div>• You can read it like normal text</div>
                  <div>• Looks similar to JavaScript objects</div>
                  <div>• Easy to debug and understand</div>
                  <div>• No weird symbols or codes</div>
                </div>
              </div>

              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-8 border-2 border-purple-400">
                <div className="text-6xl mb-6">⚡</div>
                <h4 className="text-2xl font-bold text-purple-300 mb-4">Lightweight</h4>
                <div className="space-y-3 text-white/80 text-left">
                  <div>• Small file sizes</div>
                  <div>• Fast to send over internet</div>
                  <div>• No extra bloat or formatting</div>
                  <div>• Perfect for mobile apps</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-8 border border-yellow-400/30">
              <h4 className="text-3xl font-bold text-yellow-300 mb-4">🎯 Why APIs Love JSON</h4>
              <p className="text-white/90 text-xl">
                JSON is like the <strong className="text-green-300">English</strong> of programming - 
                everyone speaks it, so everyone can communicate!
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-emerald-600 to-green-700'
    },

    {
      id: 'json-conversion',
      title: 'Working with JSON',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Working with JSON</h2>
          
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-12">Converting between JavaScript and JSON</h3>
            
            <JSONVisualDemo />

            <div className="mt-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-blue-400/30">
              <h4 className="text-2xl font-bold text-white mb-6">🧠 Remember These Two Functions</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-4xl mb-4">📦 → 📄</div>
                  <h5 className="text-xl font-bold text-blue-300 mb-3">JSON.stringify()</h5>
                  <div className="text-white/80 mb-3">JavaScript Object → JSON String</div>
                  <div className="bg-gray-800 rounded p-3">
                    <div className="text-blue-300 font-mono text-sm">JSON.stringify(user)</div>
                  </div>
                  <div className="text-white/60 text-sm mt-2">Use when: Sending data to API</div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6">
                  <div className="text-4xl mb-4">📄 → 📦</div>
                  <h5 className="text-xl font-bold text-green-300 mb-3">JSON.parse()</h5>
                  <div className="text-white/80 mb-3">JSON String → JavaScript Object</div>
                  <div className="bg-gray-800 rounded p-3">
                    <div className="text-green-300 font-mono text-sm">JSON.parse(response)</div>
                  </div>
                  <div className="text-white/60 text-sm mt-2">Use when: Receiving data from API</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-cyan-600 to-teal-700'
    },

    {
      id: 'browser-default-request',
      title: 'Your Browser Makes GET Requests',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Your Browser Makes GET Requests</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🌐</div>
            <h3 className="text-3xl font-bold mb-12">Every time you visit a URL, your browser sends a GET request</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400">
                <div className="text-6xl mb-6">🔍</div>
                <h4 className="text-2xl font-bold text-blue-300 mb-4">What Happens</h4>
                <div className="space-y-4 text-white/80 text-left text-lg">
                  <div className="bg-blue-900/50 rounded-lg p-4">
                    <div className="text-blue-200 font-bold mb-2">1. You type a URL</div>
                    <div className="text-white/90 text-sm">https://dog.ceo/api/breeds/image/random</div>
                  </div>
                  <div className="bg-purple-900/50 rounded-lg p-4">
                    <div className="text-purple-200 font-bold mb-2">2. Browser sends GET request</div>
                    <div className="text-white/90 text-sm">Automatically, behind the scenes</div>
                  </div>
                  <div className="bg-green-900/50 rounded-lg p-4">
                    <div className="text-green-200 font-bold mb-2">3. Server responds with JSON</div>
                    <div className="text-white/90 text-sm">You see the raw data!</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <div className="text-6xl mb-6">🐕</div>
                <h4 className="text-2xl font-bold text-green-300 mb-4">Try It Yourself!</h4>
                <div className="space-y-4">
                  <div className="text-white/90 text-lg mb-4">
                    Copy this URL and paste it in your browser:
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 border-2 border-green-400">
                    <div className="text-green-300 font-mono text-sm break-all select-all">
                      https://dog.ceo/api/breeds/image/random
                    </div>
                  </div>
                  <div className="bg-yellow-500/20 rounded-lg p-4 border border-yellow-400/30">
                    <div className="text-yellow-200 font-bold mb-2">💡 You'll See:</div>
                    <div className="text-white/80 text-sm">Raw JSON response with a random dog photo URL!</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-8 border border-purple-400/30 mb-8">
              <h4 className="text-2xl font-bold text-purple-300 mb-6">🎯 Key Insight</h4>
              <div className="text-white/90 text-xl space-y-4">
                <div>
                  When you visit <span className="text-blue-300 font-bold">any URL</span> in your browser, 
                  you're actually making a <span className="text-green-300 font-bold">GET request</span>!
                </div>
                <div className="text-lg text-white/70">
                  APIs just return JSON instead of HTML web pages
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <h4 className="text-xl font-bold text-yellow-300 mb-4">🧪 Experiment</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">🌐</div>
                  <div className="text-white font-bold mb-1">Regular Website</div>
                  <div className="text-white/70 text-sm">Returns HTML</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🔄</div>
                  <div className="text-white font-bold mb-1">API Endpoint</div>
                  <div className="text-white/70 text-sm">Returns JSON</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🎯</div>
                  <div className="text-white font-bold mb-1">Same Protocol</div>
                  <div className="text-white/70 text-sm">Both use HTTP GET</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-700'
    },

    {
      id: 'introducing-promises',
      title: 'Understanding Promises',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Understanding Promises</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🤝</div>
            <h3 className="text-3xl font-bold mb-12">JavaScript's way of handling "I'll get back to you"</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400">
                <div className="text-6xl mb-6">📝</div>
                <h4 className="text-2xl font-bold text-blue-300 mb-4">What is a Promise?</h4>
                <div className="space-y-3 text-white/80 text-left text-lg">
                  <div>• A "placeholder" for future data</div>
                  <div>• Represents an async operation</div>
                  <div>• Either succeeds or fails</div>
                  <div>• Prevents "callback hell"</div>
                </div>
              </div>

              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <div className="text-6xl mb-6">🍕</div>
                <h4 className="text-2xl font-bold text-green-300 mb-4">Pizza Delivery Analogy</h4>
                <div className="space-y-4 text-white/80">
                  <div className="bg-green-900/50 rounded-lg p-4">
                    <div className="text-green-200 font-bold mb-2">Order pizza (make request)</div>
                    <div className="text-white/90">📞 "I'll have a large pepperoni"</div>
                  </div>
                  <div className="bg-yellow-900/50 rounded-lg p-4">
                    <div className="text-yellow-200 font-bold mb-2">Get promise (receipt)</div>
                    <div className="text-white/90">🧾 "Your order will arrive in 30 min"</div>
                  </div>
                  <div className="bg-blue-900/50 rounded-lg p-4">
                    <div className="text-blue-200 font-bold mb-2">Promise resolves</div>
                    <div className="text-white/90">🍕 Pizza arrives! (or gets cancelled)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-8 border border-purple-400/30 mb-8">
              <h4 className="text-3xl font-bold text-purple-300 mb-6">🎭 Promise States</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center bg-yellow-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-3">⏳</div>
                  <div className="text-yellow-300 font-bold mb-2">Pending</div>
                  <div className="text-white/70 text-sm">"Still waiting..."</div>
                </div>
                <div className="text-center bg-green-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-3">✅</div>
                  <div className="text-green-300 font-bold mb-2">Fulfilled</div>
                  <div className="text-white/70 text-sm">"Success! Got the data"</div>
                </div>
                <div className="text-center bg-red-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-3">❌</div>
                  <div className="text-red-300 font-bold mb-2">Rejected</div>
                  <div className="text-white/70 text-sm">"Something went wrong"</div>
                </div>
              </div>
            </div>


          </div>
        </div>
      ),
      bgGradient: 'from-violet-600 to-purple-700'
    },

    {
      id: 'promise-code-example',
      title: 'Promise Code Example',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Promise Code Example</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">💻</div>
            <h3 className="text-3xl font-bold mb-12">See the difference: Old vs New Promise syntax</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Old Promise Way */}
              <div className="bg-red-500/20 backdrop-blur rounded-xl p-8 border-2 border-red-400">
                <div className="text-5xl mb-6">😵</div>
                <h4 className="text-2xl font-bold text-red-300 mb-6">Old Way: .then() chains</h4>
                <div className="bg-gray-900 rounded-lg p-6 text-left">
                  <div className="text-white font-mono text-base space-y-1">
                    <div><span className="text-yellow-300">fetch</span>(<span className="text-orange-300">'https://api.github.com/users/tanay'</span>)</div>
                    <div className="ml-2"><span className="text-purple-300">.then</span>(response =&gt; &#123;</div>
                    <div className="ml-4"><span className="text-pink-300">return</span> response.<span className="text-yellow-300">json</span>();</div>
                    <div className="ml-2">&#125;)</div>
                    <div className="ml-2"><span className="text-purple-300">.then</span>(data =&gt; &#123;</div>
                    <div className="ml-4">console.<span className="text-yellow-300">log</span>(data.<span className="text-green-300">name</span>);</div>
                    <div className="ml-4">console.<span className="text-yellow-300">log</span>(data.<span className="text-green-300">followers</span>);</div>
                    <div className="ml-2">&#125;)</div>
                    <div className="ml-2"><span className="text-purple-300">.catch</span>(error =&gt; &#123;</div>
                    <div className="ml-4">console.<span className="text-red-300">error</span>(<span className="text-orange-300">'Failed:'</span>, error);</div>
                    <div className="ml-2">&#125;);</div>
                  </div>
                </div>
                <div className="mt-4 bg-red-900/30 rounded-lg p-4">
                  <div className="text-red-200 text-sm">
                    <strong>Problems:</strong> Hard to read, nested callbacks, confusing flow
                  </div>
                </div>
              </div>

              {/* New Async/Await Way */}
              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <div className="text-5xl mb-6">😎</div>
                <h4 className="text-2xl font-bold text-green-300 mb-6">New Way: async/await</h4>
                <div className="bg-gray-900 rounded-lg p-6 text-left">
                  <div className="text-white font-mono text-base space-y-1">
                    <div><span className="text-purple-300">async</span> <span className="text-pink-300">function</span> <span className="text-yellow-300">getUser</span>() &#123;</div>
                    <div className="ml-2"><span className="text-purple-300">try</span> &#123;</div>
                    <div className="ml-4"><span className="text-pink-300">const</span> response = <span className="text-purple-300">await</span> <span className="text-yellow-300">fetch</span>(<span className="text-orange-300">'https://api.github.com/users/tanay'</span>);</div>
                    <div className="ml-4"><span className="text-pink-300">const</span> data = <span className="text-purple-300">await</span> response.<span className="text-yellow-300">json</span>();</div>
                    <div className="ml-4"></div>
                    <div className="ml-4">console.<span className="text-yellow-300">log</span>(data.<span className="text-green-300">name</span>);</div>
                    <div className="ml-4">console.<span className="text-yellow-300">log</span>(data.<span className="text-green-300">followers</span>);</div>
                    <div className="ml-2">&#125; <span className="text-purple-300">catch</span> (error) &#123;</div>
                    <div className="ml-4">console.<span className="text-red-300">error</span>(<span className="text-orange-300">'Failed:'</span>, error);</div>
                    <div className="ml-2">&#125;</div>
                    <div>&#125;</div>
                  </div>
                </div>
                <div className="mt-4 bg-green-900/30 rounded-lg p-4">
                  <div className="text-green-200 text-sm">
                    <strong>Benefits:</strong> Reads like normal code, easy to debug, clean flow
                  </div>
                </div>
              </div>
            </div>

            {/* Key Differences */}
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-blue-400/30 mb-8">
              <h4 className="text-2xl font-bold text-white mb-6">🔍 Key Differences</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 rounded-lg p-6">
                  <h5 className="text-xl font-bold text-red-300 mb-4">❌ .then() Problems</h5>
                  <div className="text-white/80 space-y-2 text-sm">
                    <div>• Nested callbacks get confusing</div>
                    <div>• Hard to read the flow</div>
                    <div>• Error handling scattered</div>
                    <div>• Difficult to debug</div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-lg p-6">
                  <h5 className="text-xl font-bold text-green-300 mb-4">✅ async/await Benefits</h5>
                  <div className="text-white/80 space-y-2 text-sm">
                    <div>• Code reads top to bottom</div>
                    <div>• Looks like synchronous code</div>
                    <div>• try/catch for all errors</div>
                    <div>• Much easier to debug</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <h4 className="text-xl font-bold text-yellow-300 mb-4">⚡ Remember</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🔑</div>
                  <div className="text-white font-bold mb-1">async keyword</div>
                  <div className="text-white/70 text-sm">Goes before function</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">⏳</div>
                  <div className="text-white font-bold mb-1">await keyword</div>
                  <div className="text-white/70 text-sm">Goes before Promise</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-violet-700'
    },

    {
      id: 'introducing-fetch',
      title: 'Introducing Fetch',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Introducing Fetch</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🚀</div>
            <h3 className="text-3xl font-bold mb-12">JavaScript's superpower for talking to APIs</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400">
                <div className="text-6xl mb-6">🎯</div>
                <h4 className="text-2xl font-bold text-blue-300 mb-4">What is Fetch?</h4>
                <div className="space-y-3 text-white/80 text-left text-lg">
                  <div>• Built into modern browsers</div>
                  <div>• Makes HTTP requests easy</div>
                  <div>• Works with all HTTP methods</div>
                  <div>• Returns Promises (async friendly)</div>
                </div>
              </div>

              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <div className="text-6xl mb-6">📞</div>
                <h4 className="text-2xl font-bold text-green-300 mb-4">Real-World Analogy</h4>
                <div className="space-y-4 text-white/80">
                  <div className="bg-green-900/50 rounded-lg p-4">
                    <div className="text-green-200 font-bold mb-2">Like making a phone call:</div>
                    <div className="text-white/90">"Hi, can I get today's weather?"</div>
                    <div className="text-white/90 text-sm mt-2">(Wait for response...)</div>
                    <div className="text-white/90">"Thanks! Got the info!"</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl">💡</div>
                    <div className="text-white/70">Fetch = your phone to call any API!</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-8 border border-purple-400/30 mb-8">
              <h4 className="text-3xl font-bold text-purple-300 mb-6">⚡ Why Fetch is Amazing</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">✨</div>
                  <div className="text-white font-bold mb-2">Modern & Clean</div>
                  <div className="text-white/70 text-sm">Replaces old XMLHttpRequest</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🎯</div>
                  <div className="text-white font-bold mb-2">Promise-Based</div>
                  <div className="text-white/70 text-sm">Works great with async/await</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">🛠️</div>
                  <div className="text-white font-bold mb-2">Flexible</div>
                  <div className="text-white/70 text-sm">Handles any HTTP method</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-700'
    },

    {
      id: 'fetch-breakdown',
      title: 'How Fetch Works: Step by Step',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">How Fetch Works</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🔄</div>
            <h3 className="text-3xl font-bold mb-12">Request → Response → JSON</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400">
                <div className="text-7xl mb-6">📤</div>
                <h4 className="text-2xl font-bold text-blue-300 mb-4">1. Request</h4>
                <p className="text-white/80 text-lg mb-4">Your browser asks for data</p>
                <div className="bg-blue-900/50 rounded-lg p-4">
                  <div className="text-blue-300 font-mono text-sm">
                    fetch('api.github.com/users/tanay')
                  </div>
                </div>
                <div className="text-white/60 text-sm mt-3">Like knocking on someone's door</div>
              </div>

              <div className="bg-orange-500/20 backdrop-blur rounded-xl p-8 border-2 border-orange-400">
                <div className="text-7xl mb-6">📥</div>
                <h4 className="text-2xl font-bold text-orange-300 mb-4">2. Response</h4>
                <p className="text-white/80 text-lg mb-4">Server sends back data</p>
                <div className="bg-orange-900/50 rounded-lg p-4">
                  <div className="text-orange-300 font-mono text-sm">
                    response.json()
                  </div>
                </div>
                <div className="text-white/60 text-sm mt-3">Like getting an answer back</div>
              </div>

              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <div className="text-7xl mb-6">📄</div>
                <h4 className="text-2xl font-bold text-green-300 mb-4">3. JSON</h4>
                <p className="text-white/80 text-lg mb-4">Convert to JavaScript object</p>
                <div className="bg-green-900/50 rounded-lg p-4">
                  <div className="text-green-300 font-mono text-sm">
                    data.name
                  </div>
                </div>
                <div className="text-white/60 text-sm mt-3">Like opening a letter</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <h4 className="text-xl font-bold text-white mb-4">🎬 The Complete Journey</h4>
              <div className="flex items-center justify-center space-x-4 text-sm">
                <div className="text-center">
                  <div className="text-3xl mb-1">🌐</div>
                  <div className="text-white font-bold">Website</div>
                </div>
                <div className="text-3xl text-blue-400">→</div>
                <div className="text-center">
                  <div className="text-3xl mb-1">📡</div>
                  <div className="text-white font-bold">Internet</div>
                </div>
                <div className="text-3xl text-blue-400">→</div>
                <div className="text-center">
                  <div className="text-3xl mb-1">🏢</div>
                  <div className="text-white font-bold">Server</div>
                </div>
                <div className="text-3xl text-green-400">→</div>
                <div className="text-center">
                  <div className="text-3xl mb-1">📦</div>
                  <div className="text-white font-bold">JSON</div>
                </div>
                <div className="text-3xl text-green-400">→</div>
                <div className="text-center">
                  <div className="text-3xl mb-1">🎨</div>
                  <div className="text-white font-bold">UI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-cyan-700'
    },

    {
      id: 'fetch-returns-promise',
      title: 'Fetch Returns a Promise',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Fetch Returns a Promise</h2>
          
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-12">Just like functions return values, fetch returns Promises</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400">
                <div className="text-6xl mb-6">⚙️</div>
                <h4 className="text-2xl font-bold text-blue-300 mb-6">Regular Functions</h4>
                <div className="bg-gray-800 rounded-lg p-6 text-left">
                  <div className="text-white font-mono text-lg space-y-2">
                    <div className="text-green-300">// Function that returns a number</div>
                    <div><span className="text-purple-300">function</span> <span className="text-yellow-300">add</span>(a, b) {'{'}</div>
                    <div>  <span className="text-pink-300">return</span> a + b;</div>
                    <div>{'}'}</div>
                    <div className="mt-4 text-blue-300">// Call it, get result immediately</div>
                    <div><span className="text-pink-300">const</span> result = <span className="text-yellow-300">add</span>(2, 3);</div>
                    <div className="text-green-300">// result = 5 (right away!)</div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-8 border-2 border-purple-400">
                <div className="text-6xl mb-6">🚀</div>
                <h4 className="text-2xl font-bold text-purple-300 mb-6">Fetch Function</h4>
                <div className="bg-gray-800 rounded-lg p-6 text-left">
                  <div className="text-white font-mono text-lg space-y-2">
                    <div className="text-green-300">// Fetch returns a Promise</div>
                    <div><span className="text-pink-300">const</span> promise = <span className="text-yellow-300">fetch</span>(<span className="text-orange-300">'api.com/users'</span>);</div>
                    <div className="text-green-300">// promise = Promise {'{'} pending {'}'}</div>
                    <div className="mt-4 text-blue-300">// Use await to get actual data</div>
                    <div><span className="text-pink-300">const</span> response = <span className="text-purple-300">await</span> <span className="text-yellow-300">fetch</span>(<span className="text-orange-300">'api.com/users'</span>);</div>
                    <div><span className="text-pink-300">const</span> data = <span className="text-purple-300">await</span> response.<span className="text-yellow-300">json</span>();</div>
                    <div className="text-green-300">// data = actual user info!</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-8 border border-yellow-400/30 mb-8">
              <h4 className="text-3xl font-bold text-yellow-300 mb-6">🎯 Key Insight</h4>
              <div className="text-white/90 text-xl space-y-4">
                <div>
                  <span className="text-blue-300 font-bold">Regular functions</span> = 
                  <span className="text-green-300"> instant results</span> ⚡
                </div>
                <div>
                  <span className="text-purple-300 font-bold">Fetch function</span> = 
                  <span className="text-orange-300"> Promise of future results</span> 🔮
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl p-8 border border-green-400/30">
              <h4 className="text-2xl font-bold text-green-300 mb-4">💡 Why Promises?</h4>
              <p className="text-white/90 text-lg">
                Network requests take time! Promises let your code say 
                <strong className="text-yellow-300"> "I'll wait for this data, but keep doing other things"</strong>
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-indigo-700'
    },

    {
      id: 'live-demo-weather',
      title: 'The Workflow',
      content: (
        <div className="text-white animate-fade-in">
          <h2 className="text-5xl font-extrabold mb-8 text-center">🌤️ The Workflow</h2>
          <div className="mb-6 text-center">
            <p className="text-xl text-white/80">See how APIs work in practice!</p>
          </div>
          
          <WeatherAppVisual />
        </div>
      ),
      bgGradient: 'from-cyan-600 to-blue-700'
    },

    {
      id: 'error-handling-trycatch',
      title: 'Mastering Try/Catch',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">Mastering Try/Catch</h2>
          
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold mb-12">Your safety net for when things go wrong</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-red-500/20 backdrop-blur rounded-xl p-8 border-2 border-red-400">
                <div className="text-6xl mb-6">💥</div>
                <h4 className="text-2xl font-bold text-red-300 mb-6">Without Try/Catch</h4>
                <div className="bg-gray-800 rounded-lg p-6 text-left">
                  <div className="text-white font-mono text-lg space-y-2">
                    <div className="text-green-300">// This will crash your app!</div>
                    <div><span className="text-pink-300">async function</span> <span className="text-yellow-300">getUser</span>() {'{'}</div>
                    <div>  <span className="text-pink-300">const</span> response = <span className="text-purple-300">await</span> <span className="text-yellow-300">fetch</span>(<span className="text-orange-300">'bad-url'</span>);</div>
                    <div>  <span className="text-pink-300">const</span> data = <span className="text-purple-300">await</span> response.<span className="text-yellow-300">json</span>();</div>
                    <div>  <span className="text-pink-300">return</span> data;</div>
                    <div>{'}'}</div>
                    <div className="mt-4 text-red-300">// 💀 App crashes = bad UX</div>
                  </div>
                </div>
                <div className="mt-4 bg-red-900/50 rounded-lg p-4">
                  <div className="text-red-200 font-bold text-sm">What happens:</div>
                  <div className="text-white/80 text-sm">• White screen of death</div>
                  <div className="text-white/80 text-sm">• Confused users</div>
                  <div className="text-white/80 text-sm">• Lost customers</div>
                </div>
              </div>

              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <div className="text-6xl mb-6">🛡️</div>
                <h4 className="text-2xl font-bold text-green-300 mb-6">With Try/Catch</h4>
                <div className="bg-gray-800 rounded-lg p-6 text-left">
                  <div className="text-white font-mono text-lg space-y-2">
                    <div className="text-green-300">// This handles errors gracefully!</div>
                    <div><span className="text-pink-300">async function</span> <span className="text-yellow-300">getUser</span>() {'{'}</div>
                    <div>  <span className="text-blue-300">try</span> {'{'}</div>
                    <div>    <span className="text-pink-300">const</span> response = <span className="text-purple-300">await</span> <span className="text-yellow-300">fetch</span>(<span className="text-orange-300">'bad-url'</span>);</div>
                    <div>    <span className="text-pink-300">const</span> data = <span className="text-purple-300">await</span> response.<span className="text-yellow-300">json</span>();</div>
                    <div>    <span className="text-pink-300">return</span> data;</div>
                    <div>  {'}'} <span className="text-orange-300">catch</span> (error) {'{'}</div>
                    <div>    <span className="text-yellow-300">console</span>.<span className="text-blue-300">log</span>(<span className="text-orange-300">'Oops!'</span>, error);</div>
                    <div>    <span className="text-pink-300">return</span> <span className="text-red-300">null</span>; <span className="text-green-300">// Safe fallback</span></div>
                    <div>  {'}'}</div>
                    <div>{'}'}</div>
                  </div>
                </div>
                <div className="mt-4 bg-green-900/50 rounded-lg p-4">
                  <div className="text-green-200 font-bold text-sm">What happens:</div>
                  <div className="text-white/80 text-sm">• App keeps running</div>
                  <div className="text-white/80 text-sm">• Show friendly message</div>
                  <div className="text-white/80 text-sm">• Happy users</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-xl p-8 border border-yellow-400/30 mb-8">
              <h4 className="text-3xl font-bold text-yellow-300 mb-6">🎯 Try/Catch Anatomy</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center bg-blue-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-3">🎯</div>
                  <div className="text-blue-300 font-bold mb-2">TRY Block</div>
                  <div className="text-white/80 text-sm">"Attempt this risky code"</div>
                  <div className="text-white/60 text-xs mt-2">Put your fetch here</div>
                </div>
                <div className="text-center bg-orange-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-3">🚨</div>
                  <div className="text-orange-300 font-bold mb-2">CATCH Block</div>
                  <div className="text-white/80 text-sm">"If something breaks, do this"</div>
                  <div className="text-white/60 text-xs mt-2">Handle the error gracefully</div>
                </div>
                <div className="text-center bg-purple-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-3">🔄</div>
                  <div className="text-purple-300 font-bold mb-2">ALWAYS Runs</div>
                  <div className="text-white/80 text-sm">"No matter what happens"</div>
                  <div className="text-white/60 text-xs mt-2">Clean up code goes here</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl p-8 border border-indigo-400/30">
              <h4 className="text-2xl font-bold text-indigo-300 mb-4">💡 Pro Tip</h4>
              <p className="text-white/90 text-lg">
                Think of try/catch like a <strong className="text-yellow-300">safety net under a trapeze artist</strong> - 
                if they fall, the net catches them safely instead of crashing to the ground!
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-600 to-pink-700'
    },

    {
      id: 'key-takeaways-1',
      title: 'Key Takeaways - Core Concepts',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-8">🎯 Key Takeaways</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🧠</div>
            <h3 className="text-3xl font-bold mb-12">Remember these core concepts!</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border-2 border-blue-400">
                <div className="text-7xl mb-6">🌐</div>
                <h4 className="text-2xl font-bold text-blue-300 mb-4">APIs Make Apps Dynamic</h4>
                <div className="space-y-3 text-white/80 text-left">
                  <div>• Connect to real-world data</div>
                  <div>• Keep content fresh and updated</div>
                  <div>• Enable user personalization</div>
                  <div>• Power modern web experiences</div>
                </div>
              </div>

              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border-2 border-green-400">
                <div className="text-7xl mb-6">📄</div>
                <h4 className="text-2xl font-bold text-green-300 mb-4">JSON is Essential</h4>
                <div className="space-y-3 text-white/80 text-left">
                  <div>• Universal data format</div>
                  <div>• JSON.parse() to use data</div>
                  <div>• JSON.stringify() to send data</div>
                  <div>• Works with all programming languages</div>
                </div>
              </div>

              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-8 border-2 border-purple-400">
                <div className="text-7xl mb-6">⚡</div>
                <h4 className="text-2xl font-bold text-purple-300 mb-4">Fetch + Async/Await</h4>
                <div className="space-y-3 text-white/80 text-left">
                  <div>• Modern way to call APIs</div>
                  <div>• Clean, readable code</div>
                  <div>• Easy error handling with try/catch</div>
                  <div>• Industry standard approach</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-cyan-600 to-blue-700'
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

export default Class3Slides; 