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
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .animate-spin-slow {
    animation: spin-slow 3s linear infinite;
  }
  @keyframes bounce-in {
    0% { transform: scale(0.8) rotate(-10deg); opacity: 0; }
    50% { transform: scale(1.1) rotate(5deg); opacity: 1; }
    100% { transform: scale(1) rotate(0deg); opacity: 1; }
  }
  .animate-bounce-in {
    animation: bounce-in 0.6s ease-out;
  }
  @keyframes slide-up {
    from { transform: translateY(20px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
  .animate-slide-up {
    animation: slide-up 0.4s ease-out;
  }
  @keyframes wiggle {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-3deg); }
    75% { transform: rotate(3deg); }
  }
  .animate-wiggle {
    animation: wiggle 0.5s ease-in-out;
  }
`;

// Controlled Forms Demo Component
const ControlledFormsDemo = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    country: '',
    interests: [],
    newsletter: false,
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Germany', 'France', 
    'Australia', 'Japan', 'India', 'Brazil', 'Mexico', 'Spain', 'Italy'
  ];

  const interestOptions = [
    'Technology', 'Sports', 'Music', 'Travel', 'Food', 'Art', 
    'Gaming', 'Reading', 'Movies', 'Photography'
  ];

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (formData.age < 13 || formData.age > 120) {
      newErrors.age = 'Age must be between 13 and 120';
    }

    if (!formData.country) {
      newErrors.country = 'Country is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      if (name === 'interests') {
        setFormData(prev => ({
          ...prev,
          interests: checked 
            ? [...prev.interests, value]
            : prev.interests.filter(interest => interest !== value)
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: checked
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          age: '',
          country: '',
          interests: [],
          newsletter: false,
          message: ''
        });
      }, 3000);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <div className="text-8xl mb-6 animate-bounce-in">🎉</div>
          <h3 className="text-3xl font-bold text-white mb-4">Form Submitted!</h3>
          <div className="bg-green-500/20 rounded-xl p-8 border border-green-400/30">
            <h4 className="text-xl font-bold text-green-300 mb-4">Submitted Data:</h4>
            <div className="text-left space-y-2 text-white/90">
              <p><strong>Name:</strong> {formData.name}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Age:</strong> {formData.age}</p>
              <p><strong>Country:</strong> {formData.country}</p>
              <p><strong>Interests:</strong> {formData.interests.join(', ') || 'None selected'}</p>
              <p><strong>Newsletter:</strong> {formData.newsletter ? 'Yes' : 'No'}</p>
              {formData.message && <p><strong>Message:</strong> {formData.message}</p>}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="text-8xl mb-6 animate-float">📋</div>
        <h3 className="text-3xl font-bold text-white mb-4">Controlled Forms Demo</h3>
        <p className="text-xl text-white/80">All input values controlled by React state</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form */}
        <div className="bg-white/10 backdrop-blur rounded-xl p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div>
              <label className="block text-white font-bold mb-2">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 ${
                  errors.name ? 'border-red-400 focus:ring-red-500' : 'border-white/20 focus:ring-blue-500'
                }`}
                placeholder="Your full name"
              />
              {errors.name && <div className="text-red-400 text-sm mt-1">{errors.name}</div>}
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-white font-bold mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 ${
                  errors.email ? 'border-red-400 focus:ring-red-500' : 'border-white/20 focus:ring-blue-500'
                }`}
                placeholder="your@email.com"
              />
              {errors.email && <div className="text-red-400 text-sm mt-1">{errors.email}</div>}
            </div>

            {/* Age Input */}
            <div>
              <label className="block text-white font-bold mb-2">Age *</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 ${
                  errors.age ? 'border-red-400 focus:ring-red-500' : 'border-white/20 focus:ring-blue-500'
                }`}
                placeholder="Your age"
                min="13"
                max="120"
              />
              {errors.age && <div className="text-red-400 text-sm mt-1">{errors.age}</div>}
            </div>

            {/* Country Select */}
            <div>
              <label className="block text-white font-bold mb-2">Country *</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white focus:outline-none focus:ring-2 ${
                  errors.country ? 'border-red-400 focus:ring-red-500' : 'border-white/20 focus:ring-blue-500'
                }`}
              >
                <option value="">Select your country</option>
                {countries.map(country => (
                  <option key={country} value={country} className="text-black">
                    {country}
                  </option>
                ))}
              </select>
              {errors.country && <div className="text-red-400 text-sm mt-1">{errors.country}</div>}
            </div>

            {/* Interests Checkboxes */}
            <div>
              <label className="block text-white font-bold mb-2">Interests</label>
              <div className="grid grid-cols-2 gap-2">
                {interestOptions.map(interest => (
                  <label key={interest} className="flex items-center space-x-2 text-white/90 cursor-pointer">
                    <input
                      type="checkbox"
                      name="interests"
                      value={interest}
                      checked={formData.interests.includes(interest)}
                      onChange={handleChange}
                      className="rounded focus:ring-blue-500"
                    />
                    <span className="text-sm">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Newsletter Checkbox */}
            <div>
              <label className="flex items-center space-x-2 text-white/90 cursor-pointer">
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  className="rounded focus:ring-blue-500"
                />
                <span>Subscribe to newsletter</span>
              </label>
            </div>

            {/* Message Textarea */}
            <div>
              <label className="block text-white font-bold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 resize-none ${
                  errors.message ? 'border-red-400 focus:ring-red-500' : 'border-white/20 focus:ring-blue-500'
                }`}
                placeholder="Optional message..."
                maxLength={500}
              />
              <div className="flex justify-between items-center mt-1">
                {errors.message && <div className="text-red-400 text-sm">{errors.message}</div>}
                <div className="text-white/60 text-sm ml-auto">
                  {formData.message.length}/500
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-lg font-bold transition-all transform hover:scale-105"
            >
              Submit Form
            </button>
          </form>
        </div>

        {/* State Visualization */}
        <div className="bg-teal-500/20 rounded-xl p-6 border border-teal-400/30">
          <h4 className="text-xl font-bold text-teal-300 mb-4">📊 Current State:</h4>
          <div className="space-y-2 text-sm">
            <pre className="text-white/80 whitespace-pre-wrap overflow-auto max-h-96 bg-gray-900/50 p-4 rounded">
              {JSON.stringify(formData, null, 2)}
            </pre>
          </div>
          
          <div className="mt-6 space-y-3">
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-teal-300 font-bold mb-2">🔑 Key Concepts:</div>
              <ul className="text-white/90 text-sm space-y-1">
                <li>• <code>value</code> prop controls what's shown</li>
                <li>• <code>onChange</code> updates state on every change</li>
                <li>• State is the "single source of truth"</li>
                <li>• Real-time validation and feedback</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Interactive List Rendering Demo
const ListRenderingDemo = () => {
  const [taskCount, setTaskCount] = useState(3);

  const tasks = [
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build app", completed: false },
    { id: 3, title: "Deploy it", completed: false },
    { id: 4, title: "Test everything", completed: false },
    { id: 5, title: "Celebrate!", completed: true }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <div className="text-8xl mb-6 animate-float">📝</div>
        <h3 className="text-3xl font-bold text-white mb-4">Hard-Coding vs Dynamic Lists</h3>
        <p className="text-xl text-white/80">See the difference in action!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Hard-coded approach */}
        <div className="bg-red-500/20 rounded-xl p-6 border border-red-400/30">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">😰</div>
            <h4 className="text-2xl font-bold text-red-300 mb-2">Hard-Coded Way</h4>
            <p className="text-white/80">Every item written by hand</p>
          </div>
          
          <div className="bg-white/10 rounded-lg p-4 mb-4">
            <div className="space-y-2">
              <div className="bg-red-400/30 p-3 rounded border-l-4 border-red-400">
                <span className="text-white">📋 Task 1: Learn React</span>
              </div>
              <div className="bg-red-400/30 p-3 rounded border-l-4 border-red-400">
                <span className="text-white">📋 Task 2: Build app</span>
              </div>
              <div className="bg-red-400/30 p-3 rounded border-l-4 border-red-400">
                <span className="text-white">📋 Task 3: Deploy it</span>
              </div>
              <div className="text-center text-red-300 text-sm mt-4">
                What if you need 100 tasks? 😱<br/>
                Copy-paste 100 times!
              </div>
            </div>
          </div>

          <div className="space-y-2 text-red-300 text-sm">
            <div>❌ Hard-coded, not scalable</div>
            <div>❌ Lots of repetitive code</div>
            <div>❌ Can't handle dynamic data</div>
            <div>❌ Nightmare to maintain</div>
          </div>
        </div>

        {/* Dynamic approach */}
        <div className="bg-green-500/20 rounded-xl p-6 border border-green-400/30">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">🚀</div>
            <h4 className="text-2xl font-bold text-green-300 mb-2">Dynamic Way</h4>
            <p className="text-white/80">One template, any number of items</p>
          </div>
          
          <div className="bg-white/10 rounded-lg p-4 mb-4">
            <div className="mb-4">
              <label className="text-white font-bold mb-2 block">Number of tasks:</label>
              <input
                type="range"
                min="1"
                max="5"
                value={taskCount}
                onChange={(e) => setTaskCount(parseInt(e.target.value))}
                className="w-full"
              />
              <div className="text-center text-white mt-1">{taskCount} tasks</div>
            </div>
            
            <div className="space-y-2">
              {tasks.slice(0, taskCount).map((task, index) => (
                <div 
                  key={task.id} 
                  className="bg-green-400/30 p-3 rounded border-l-4 border-green-400 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-white">
                    {task.completed ? '✅' : '📋'} Task {task.id}: {task.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2 text-green-300 text-sm">
            <div>✅ Dynamic, data-driven</div>
            <div>✅ Scales to any number</div>
            <div>✅ Single template, multiple uses</div>
            <div>✅ Easy to maintain</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-xl p-8 border border-purple-400/30 text-center">
        <div className="text-4xl mb-4">🧠</div>
        <div className="text-2xl font-bold text-white mb-4">The Key Insight</div>
        <div className="text-xl text-white/90">
          One template + Array of data = Infinite possibilities!
        </div>
        <div className="text-lg text-white/70 mt-2">
          Write once, render many ✨
        </div>
      </div>
    </div>
  );
};

// Visual Array.map() Explanation
const ArrayMapVisualDemo = () => {
  const [step, setStep] = useState(0);
  
  const data = [
    { id: 1, name: "Alice", color: "bg-blue-500" },
    { id: 2, name: "Bob", color: "bg-green-500" },
    { id: 3, name: "Carol", color: "bg-purple-500" }
  ];

  const steps = [
    { title: "Start with Array", description: "We have data in an array" },
    { title: "Apply Template", description: "Array.map() applies our template to each item" },
    { title: "Generate Components", description: "Each data item becomes a React component" },
    { title: "Render to Screen", description: "React displays all components" }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <div className="text-8xl mb-6 animate-float">🔄</div>
        <h3 className="text-3xl font-bold text-white mb-4">How Array.map() Works</h3>
        <p className="text-xl text-white/80">Step-by-step visual explanation</p>
      </div>

      {/* Step Navigation */}
      <div className="flex justify-center mb-8">
        <div className="flex space-x-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setStep(index)}
              className={`w-12 h-12 rounded-full font-bold transition-all transform hover:scale-110 ${
                step === index
                  ? 'bg-purple-500 text-white shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Current Step */}
      <div className="text-center mb-8">
        <h4 className="text-2xl font-bold text-white mb-2">{steps[step].title}</h4>
        <p className="text-lg text-white/80">{steps[step].description}</p>
      </div>

      {/* Visual Demonstration */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
        {/* Step 0: Array Data */}
        <div className={`bg-white/10 rounded-xl p-6 transition-all duration-500 ${
          step >= 0 ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
        }`}>
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">📊</div>
            <h5 className="text-xl font-bold text-white">Data Array</h5>
          </div>
          <div className="space-y-3">
            {data.map((item, index) => (
              <div 
                key={item.id}
                className="bg-gray-700 p-3 rounded-lg text-white text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {item.name}
              </div>
            ))}
          </div>
        </div>

        {/* Step 1-2: Transformation */}
        <div className={`text-center transition-all duration-500 ${
          step >= 1 ? 'opacity-100 scale-100' : 'opacity-30 scale-95'
        }`}>
          <div className="text-6xl mb-4 animate-pulse">⚡</div>
          <div className="text-xl font-bold text-white mb-2">Array.map()</div>
          <div className="text-white/80">Transforms each item</div>
          {step >= 2 && (
            <div className="mt-4 p-4 bg-yellow-500/20 rounded-lg border border-yellow-400/30 animate-bounce-in">
              <div className="text-yellow-300 font-bold">Template Applied!</div>
              <div className="text-white/80 text-sm">Each item → Component</div>
            </div>
          )}
        </div>

        {/* Step 3: Result */}
        <div className={`bg-white/10 rounded-xl p-6 transition-all duration-500 ${
          step >= 3 ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
        }`}>
          <div className="text-center mb-4">
            <div className="text-4xl mb-2">🎨</div>
            <h5 className="text-xl font-bold text-white">Components</h5>
          </div>
          <div className="space-y-3">
            {data.map((item, index) => (
              <div 
                key={item.id}
                className={`${item.color} p-3 rounded-lg text-white text-center font-bold shadow-lg ${
                  step >= 3 ? 'animate-bounce-in' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                👤 {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <button
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
          className="bg-gray-600 hover:bg-gray-700 disabled:opacity-50 text-white px-6 py-3 rounded-xl font-bold transition-all"
        >
          ← Previous
        </button>
        <button
          onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
          disabled={step === steps.length - 1}
          className="bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white px-6 py-3 rounded-xl font-bold transition-all"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

// Visual Key Prop Demo
const KeyPropDemo = () => {
  const [useGoodKeys, setUseGoodKeys] = useState(true);
  const [people, setPeople] = useState([
    { id: 1, name: "Alice", color: "bg-blue-500" },
    { id: 2, name: "Bob", color: "bg-green-500" },
    { id: 3, name: "Carol", color: "bg-purple-500" }
  ]);

  const shufflePeople = () => {
    setPeople(prev => [...prev].sort(() => Math.random() - 0.5));
  };

  const addPerson = () => {
    const names = ["David", "Emma", "Frank", "Grace"];
    const colors = ["bg-red-500", "bg-yellow-500", "bg-pink-500", "bg-indigo-500"];
    const newId = Math.max(...people.map(p => p.id)) + 1;
    const newPerson = {
      id: newId,
      name: names[Math.floor(Math.random() * names.length)],
      color: colors[Math.floor(Math.random() * colors.length)]
    };
    setPeople(prev => [...prev, newPerson]);
  };

  const removePerson = () => {
    if (people.length > 1) {
      setPeople(prev => prev.slice(0, -1));
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <div className="text-8xl mb-6 animate-float">🏷️</div>
        <h3 className="text-3xl font-bold text-white mb-4">Keys Are Like Name Tags</h3>
        <p className="text-xl text-white/80">React needs to identify each list item uniquely</p>
      </div>

      {/* Conference Analogy */}
      <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-blue-400/30 mb-8">
        <div className="text-center mb-6">
          <h4 className="text-2xl font-bold text-white mb-4">🎪 The Conference Analogy</h4>
          <p className="text-lg text-white/80">
            Think of keys like name tags at a conference. Each person (component) gets a unique name tag (key) 
            so you can identify them even if they change seats (reorder) or change clothes (props).
          </p>
        </div>
      </div>

      {/* Interactive Demo */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Controls */}
        <div className="space-y-6">
          <div className="bg-white/10 rounded-xl p-6">
            <h4 className="text-xl font-bold text-white mb-4">🎮 Try It Out</h4>
            <div className="space-y-4">
              <div>
                <label className="flex items-center space-x-3 text-white cursor-pointer">
                  <input
                    type="checkbox"
                    checked={useGoodKeys}
                    onChange={(e) => setUseGoodKeys(e.target.checked)}
                    className="rounded"
                  />
                  <span>Use Good Keys (unique IDs)</span>
                </label>
                <div className="text-sm text-white/70 mt-1">
                  {useGoodKeys ? "✅ Using stable, unique IDs" : "❌ Using array indexes (bad!)"}
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={shufflePeople}
                  className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-bold transition-all"
                >
                  🔀 Shuffle
                </button>
                <button
                  onClick={addPerson}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-bold transition-all"
                >
                  ➕ Add
                </button>
                <button
                  onClick={removePerson}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-bold transition-all"
                >
                  ➖ Remove
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-6">
            <h4 className="text-xl font-bold text-white mb-4">🔑 Key Rules</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <div className="text-green-400">✅</div>
                <div className="text-white/90">
                  <strong>Unique:</strong> No two items with same key
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="text-green-400">✅</div>
                <div className="text-white/90">
                  <strong>Stable:</strong> Same item = same key always
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="text-green-400">✅</div>
                <div className="text-white/90">
                  <strong>Predictable:</strong> Don't change between renders
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visual List */}
        <div className="bg-white/10 rounded-xl p-6">
          <h4 className="text-xl font-bold text-white mb-4">
            👥 Conference Attendees 
            <span className="text-sm font-normal text-white/70">
              ({useGoodKeys ? 'Good Keys' : 'Bad Keys'})
            </span>
          </h4>
          <div className="space-y-3">
            {people.map((person, index) => (
              <div
                key={useGoodKeys ? person.id : index}
                className={`${person.color} p-4 rounded-lg text-white font-bold shadow-lg transform transition-all duration-500 hover:scale-105`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">👤</div>
                    <div>
                      <div className="text-lg">{person.name}</div>
                      <div className="text-xs opacity-75">
                        Key: {useGoodKeys ? `id-${person.id}` : `index-${index}`}
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/20 px-3 py-1 rounded-full text-xs">
                    ID: {person.id}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 text-center">
            <div className={`text-sm font-bold ${useGoodKeys ? 'text-green-300' : 'text-red-300'}`}>
              {useGoodKeys ? 
                "React can efficiently track each person! 🎉" : 
                "React gets confused when items move! 😵‍💫"
              }
            </div>
          </div>
        </div>
      </div>

      {/* Key Examples */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-green-500/20 rounded-xl p-6 border border-green-400/30">
          <h4 className="text-xl font-bold text-green-300 mb-4">✅ Good Key Examples</h4>
          <div className="space-y-3">
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-green-300 font-bold text-sm">Database IDs</div>
              <div className="text-white/80 text-xs">key={`{user.id}`}</div>
              <div className="text-white/60 text-xs">Unique, stable, perfect!</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-green-300 font-bold text-sm">Product SKUs</div>
              <div className="text-white/80 text-xs">key={`{product.sku}`}</div>
              <div className="text-white/60 text-xs">Business identifiers work great</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-green-300 font-bold text-sm">Generated UUIDs</div>
              <div className="text-white/80 text-xs">key={`{item.uuid}`}</div>
              <div className="text-white/60 text-xs">When you control the data</div>
            </div>
          </div>
        </div>

        <div className="bg-red-500/20 rounded-xl p-6 border border-red-400/30">
          <h4 className="text-xl font-bold text-red-300 mb-4">❌ Bad Key Examples</h4>
          <div className="space-y-3">
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-red-300 font-bold text-sm">Array Index</div>
              <div className="text-white/80 text-xs">key={`{index}`}</div>
              <div className="text-white/60 text-xs">Breaks when items reorder!</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-red-300 font-bold text-sm">Random Values</div>
              <div className="text-white/80 text-xs">key={`{Math.random()}`}</div>
              <div className="text-white/60 text-xs">Changes every render!</div>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <div className="text-red-300 font-bold text-sm">Non-unique Values</div>
              <div className="text-white/80 text-xs">key={`{item.category}`}</div>
              <div className="text-white/60 text-xs">Multiple items, same key!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Interactive Array Methods Demo
const ArrayMethodsDemo = () => {
  const [products] = useState([
    { id: 1, name: "iPhone", price: 999, category: "phones", inStock: true, rating: 4.5 },
    { id: 2, name: "Samsung", price: 899, category: "phones", inStock: false, rating: 4.3 },
    { id: 3, name: "iPad", price: 599, category: "tablets", inStock: true, rating: 4.7 },
    { id: 4, name: "MacBook", price: 1299, category: "laptops", inStock: true, rating: 4.8 },
    { id: 5, name: "Surface", price: 1199, category: "laptops", inStock: true, rating: 4.2 },
    { id: 6, name: "AirPods", price: 179, category: "accessories", inStock: true, rating: 4.6 }
  ]);

  const [filters, setFilters] = useState({
    inStock: true,
    category: 'all',
    sortBy: 'none'
  });

  const applyFilters = () => {
    let result = [...products];
    
    // Step 1: Filter by stock
    if (filters.inStock) {
      result = result.filter(product => product.inStock);
    }
    
    // Step 2: Filter by category
    if (filters.category !== 'all') {
      result = result.filter(product => product.category === filters.category);
    }
    
    // Step 3: Sort
    if (filters.sortBy === 'price-low') {
      result = result.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price-high') {
      result = result.sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === 'rating') {
      result = result.sort((a, b) => b.rating - a.rating);
    }
    
    return result;
  };

  const filteredProducts = applyFilters();

  const getCategoryIcon = (category) => {
    const icons = {
      phones: '📱',
      tablets: '📱',
      laptops: '💻',
      accessories: '🎧'
    };
    return icons[category] || '📦';
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <div className="text-8xl mb-6 animate-float">🛍️</div>
        <h3 className="text-3xl font-bold text-white mb-4">Array Methods in Action</h3>
        <p className="text-xl text-white/80">Filter → Sort → Map = Dynamic Lists!</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Controls */}
        <div className="bg-white/10 rounded-xl p-6">
          <h4 className="text-xl font-bold text-white mb-4">🎛️ Controls</h4>
          
          <div className="space-y-4">
            <div>
              <label className="flex items-center space-x-3 text-white cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.inStock}
                  onChange={(e) => setFilters(prev => ({ ...prev, inStock: e.target.checked }))}
                  className="rounded"
                />
                <span>Only show in stock</span>
              </label>
              <div className="text-sm text-white/70 mt-1">
                📦 Filter by availability
              </div>
            </div>

            <div>
              <label className="block text-white font-bold mb-2">Category:</label>
              <select
                value={filters.category}
                onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
              >
                <option value="all" className="text-black">All Categories</option>
                <option value="phones" className="text-black">📱 Phones</option>
                <option value="tablets" className="text-black">📱 Tablets</option>
                <option value="laptops" className="text-black">💻 Laptops</option>
                <option value="accessories" className="text-black">🎧 Accessories</option>
              </select>
              <div className="text-sm text-white/70 mt-1">
                🏷️ Filter by type
              </div>
            </div>

            <div>
              <label className="block text-white font-bold mb-2">Sort by:</label>
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters(prev => ({ ...prev, sortBy: e.target.value }))}
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white"
              >
                <option value="none" className="text-black">No sorting</option>
                <option value="price-low" className="text-black">💰 Price: Low to High</option>
                <option value="price-high" className="text-black">💰 Price: High to Low</option>
                <option value="rating" className="text-black">⭐ Rating: Best First</option>
              </select>
              <div className="text-sm text-white/70 mt-1">
                📊 Sort by criteria
              </div>
            </div>
          </div>
        </div>

        {/* Process Visualization */}
        <div className="bg-white/10 rounded-xl p-6">
          <h4 className="text-xl font-bold text-white mb-4">⚙️ Process</h4>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
              <div>
                <div className="text-blue-300 font-bold">Filter</div>
                <div className="text-white/70 text-sm">
                  {products.length} → {products.filter(p => !filters.inStock || p.inStock).length} items
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
              <div>
                <div className="text-green-300 font-bold">Filter Again</div>
                <div className="text-white/70 text-sm">
                  By category: {filters.category === 'all' ? 'All' : filters.category}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
              <div>
                <div className="text-purple-300 font-bold">Sort</div>
                <div className="text-white/70 text-sm">
                  {filters.sortBy === 'none' ? 'Original order' : filters.sortBy.replace('-', ' ')}
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
              <div>
                <div className="text-orange-300 font-bold">Map</div>
                <div className="text-white/70 text-sm">
                  Render {filteredProducts.length} components
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-400/30">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">
                {products.length} → {filteredProducts.length}
              </div>
              <div className="text-white/80 text-sm">
                Original → Final Result
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-white/10 rounded-xl p-6">
          <h4 className="text-xl font-bold text-white mb-4">
            📦 Products ({filteredProducts.length})
          </h4>
          
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 rounded-lg border border-blue-400/30 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{getCategoryIcon(product.category)}</div>
                      <div>
                        <div className="text-white font-bold">{product.name}</div>
                        <div className="text-white/70 text-sm">
                          ${product.price} • ⭐ {product.rating}
                        </div>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded text-xs font-bold ${
                      product.inStock 
                        ? 'bg-green-500/30 text-green-300' 
                        : 'bg-red-500/30 text-red-300'
                    }`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">📭</div>
                <div className="text-white/70">No products match your filters</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Method Chain Visualization */}
      <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl p-8 border border-pink-400/30">
        <h4 className="text-2xl font-bold text-white mb-6 text-center">🔗 Method Chain Visualization</h4>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">📊</div>
            <div className="text-white font-bold">All Products</div>
            <div className="text-white/70 text-sm">{products.length} items</div>
          </div>
          
          <div className="text-2xl text-pink-300">→</div>
          
          <div className="bg-blue-500/20 rounded-lg p-4 text-center border border-blue-400/30">
            <div className="text-3xl mb-2">🔍</div>
            <div className="text-blue-300 font-bold">.filter()</div>
            <div className="text-white/70 text-sm">Stock filter</div>
          </div>
          
          <div className="text-2xl text-pink-300">→</div>
          
          <div className="bg-green-500/20 rounded-lg p-4 text-center border border-green-400/30">
            <div className="text-3xl mb-2">🏷️</div>
            <div className="text-green-300 font-bold">.filter()</div>
            <div className="text-white/70 text-sm">Category filter</div>
          </div>
          
          <div className="text-2xl text-pink-300">→</div>
          
          <div className="bg-purple-500/20 rounded-lg p-4 text-center border border-purple-400/30">
            <div className="text-3xl mb-2">📊</div>
            <div className="text-purple-300 font-bold">.sort()</div>
            <div className="text-white/70 text-sm">Reorder items</div>
          </div>
          
          <div className="text-2xl text-pink-300">→</div>
          
          <div className="bg-orange-500/20 rounded-lg p-4 text-center border border-orange-400/30">
            <div className="text-3xl mb-2">🎨</div>
            <div className="text-orange-300 font-bold">.map()</div>
            <div className="text-white/70 text-sm">Render UI</div>
          </div>
          
          <div className="text-2xl text-pink-300">→</div>
          
          <div className="bg-white/10 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">✨</div>
            <div className="text-white font-bold">Final Result</div>
            <div className="text-white/70 text-sm">{filteredProducts.length} components</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Advanced List Patterns Demo - Nested Lists
const NestedListsDemo = () => {
  const [groceryData] = useState([
    {
      id: 1,
      name: "🍎 Fruits",
      items: [
        { id: 101, name: "Apple", price: 1.50, inCart: false },
        { id: 102, name: "Banana", price: 0.75, inCart: true },
        { id: 103, name: "Orange", price: 1.20, inCart: false }
      ]
    },
    {
      id: 2,
      name: "🥕 Vegetables", 
      items: [
        { id: 201, name: "Carrot", price: 0.90, inCart: true },
        { id: 202, name: "Broccoli", price: 2.30, inCart: false },
        { id: 203, name: "Spinach", price: 1.80, inCart: false }
      ]
    },
    {
      id: 3,
      name: "🥛 Dairy",
      items: [
        { id: 301, name: "Milk", price: 3.50, inCart: false },
        { id: 302, name: "Cheese", price: 4.20, inCart: true },
        { id: 303, name: "Yogurt", price: 1.99, inCart: false }
      ]
    }
  ]);

  const [expandedCategories, setExpandedCategories] = useState(new Set([1, 2, 3]));

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const getTotalInCart = () => {
    return groceryData.reduce((total, category) => 
      total + category.items.filter(item => item.inCart).length, 0
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="text-8xl mb-6 animate-float">🛒</div>
        <h3 className="text-3xl font-bold text-white mb-4">Nested Lists: Grocery Store</h3>
        <p className="text-xl text-white/80">Categories containing items - lists within lists!</p>
      </div>

      <div className="bg-white/10 rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xl font-bold text-white">🛍️ Shopping Cart</h4>
          <div className="bg-green-500/20 px-4 py-2 rounded-lg border border-green-400/30">
            <span className="text-green-300 font-bold">{getTotalInCart()} items in cart</span>
          </div>
        </div>

        <div className="space-y-4">
          {groceryData.map(category => (
            <div key={category.id} className="bg-white/5 rounded-lg border border-white/10">
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full p-4 text-left hover:bg-white/5 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{expandedCategories.has(category.id) ? '📂' : '📁'}</span>
                  <span className="text-white font-bold text-lg">{category.name}</span>
                  <span className="text-white/60 text-sm">
                    ({category.items.length} items)
                  </span>
                </div>
                <div className="text-white/60">
                  {expandedCategories.has(category.id) ? '▼' : '▶'}
                </div>
              </button>
              
              {expandedCategories.has(category.id) && (
                <div className="px-4 pb-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {category.items.map((item, index) => (
                      <div
                        key={item.id}
                        className={`p-3 rounded-lg border transition-all duration-300 animate-slide-up ${
                          item.inCart 
                            ? 'bg-green-500/20 border-green-400/30' 
                            : 'bg-white/5 border-white/20'
                        }`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-white font-bold">{item.name}</div>
                            <div className="text-white/70 text-sm">${item.price}</div>
                          </div>
                          <div className="text-2xl">
                            {item.inCart ? '✅' : '⭕'}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl p-6 border border-pink-400/30">
        <h4 className="text-lg font-bold text-white mb-4">🔑 Key Insight: Nested Keys</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-pink-300 font-bold mb-2">Category Level</div>
            <div className="text-white/80 text-sm mb-2">Each category needs unique key:</div>
            <div className="bg-gray-900/50 rounded p-2">
              <code className="text-green-300 text-xs">key={`{category.id}`}</code>
            </div>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <div className="text-purple-300 font-bold mb-2">Item Level</div>
            <div className="text-white/80 text-sm mb-2">Each item needs unique key:</div>
            <div className="bg-gray-900/50 rounded p-2">
              <code className="text-green-300 text-xs">key={`{item.id}`}</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Empty States Demo
const EmptyStatesDemo = () => {
  const [scenarios, setScenarios] = useState([
    { id: 'search', name: 'Search Results', hasItems: false, items: [] },
    { id: 'cart', name: 'Shopping Cart', hasItems: true, items: ['iPhone', 'AirPods'] },
    { id: 'notifications', name: 'Notifications', hasItems: false, items: [] },
    { id: 'messages', name: 'Messages', hasItems: true, items: ['Hello!', 'Meeting at 3pm'] }
  ]);

  const toggleScenario = (scenarioId) => {
    setScenarios(prev => prev.map(scenario => 
      scenario.id === scenarioId 
        ? { ...scenario, hasItems: !scenario.hasItems }
        : scenario
    ));
  };

  const getEmptyStateContent = (scenarioId) => {
    const content = {
      search: { icon: '🔍', message: 'No results found', action: 'Try different keywords' },
      cart: { icon: '🛒', message: 'Your cart is empty', action: 'Start shopping' },
      notifications: { icon: '🔔', message: 'No new notifications', action: 'You\'re all caught up!' },
      messages: { icon: '💬', message: 'No messages yet', action: 'Send your first message' }
    };
    return content[scenarioId];
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <div className="text-8xl mb-6 animate-float">📭</div>
        <h3 className="text-3xl font-bold text-white mb-4">Empty States: Handle Nothing Gracefully</h3>
        <p className="text-xl text-white/80">Good UX when there's no data to show</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {scenarios.map(scenario => {
          const emptyContent = getEmptyStateContent(scenario.id);
          return (
            <div key={scenario.id} className="bg-white/10 rounded-xl p-6 border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-bold text-white">{scenario.name}</h4>
                <button
                  onClick={() => toggleScenario(scenario.id)}
                  className={`px-3 py-1 rounded-lg text-sm font-bold transition-all ${
                    scenario.hasItems 
                      ? 'bg-green-500/20 text-green-300 border border-green-400/30' 
                      : 'bg-red-500/20 text-red-300 border border-red-400/30'
                  }`}
                >
                  {scenario.hasItems ? 'Has Items' : 'Empty'}
                </button>
              </div>

              <div className="bg-white/5 rounded-lg p-4 min-h-32">
                {scenario.hasItems ? (
                  <div className="space-y-2">
                    {scenario.items.map((item, index) => (
                      <div
                        key={index}
                        className="bg-blue-500/20 p-3 rounded border border-blue-400/30 animate-slide-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <span className="text-white">{item}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-6 animate-fade-in">
                    <div className="text-4xl mb-3">{emptyContent.icon}</div>
                    <div className="text-white font-bold mb-2">{emptyContent.message}</div>
                    <div className="text-white/70 text-sm">{emptyContent.action}</div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-400/30">
        <h4 className="text-lg font-bold text-white mb-4">🎨 Empty State Best Practices</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-purple-300 font-bold mb-1">Be Helpful</div>
            <div className="text-white/80 text-sm">Tell users what to do next</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🎨</div>
            <div className="text-purple-300 font-bold mb-1">Stay On-Brand</div>
            <div className="text-white/80 text-sm">Match your app's personality</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-purple-300 font-bold mb-1">Make It Fast</div>
            <div className="text-white/80 text-sm">Show immediately, don't delay</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Conditional List Items Demo
const ConditionalListDemo = () => {
  const [notifications] = useState([
    { id: 1, type: "success", message: "Profile updated successfully!", timestamp: "2m ago" },
    { id: 2, type: "warning", message: "Your password expires in 3 days", timestamp: "1h ago" },
    { id: 3, type: "error", message: "Failed to save changes", timestamp: "5m ago" },
    { id: 4, type: "info", message: "New feature available: Dark mode!", timestamp: "1d ago" },
    { id: 5, type: "success", message: "Payment processed", timestamp: "3h ago" },
    { id: 6, type: "error", message: "Connection timeout", timestamp: "10m ago" }
  ]);

  const [filterType, setFilterType] = useState('all');

  const getNotificationStyle = (type) => {
    const styles = {
      success: { bg: 'bg-green-500/20', border: 'border-green-400/30', icon: '✅', color: 'text-green-300' },
      warning: { bg: 'bg-yellow-500/20', border: 'border-yellow-400/30', icon: '⚠️', color: 'text-yellow-300' },
      error: { bg: 'bg-red-500/20', border: 'border-red-400/30', icon: '❌', color: 'text-red-300' },
      info: { bg: 'bg-blue-500/20', border: 'border-blue-400/30', icon: 'ℹ️', color: 'text-blue-300' }
    };
    return styles[type];
  };

  const filteredNotifications = filterType === 'all' 
    ? notifications 
    : notifications.filter(n => n.type === filterType);

  const getTypeCount = (type) => notifications.filter(n => n.type === type).length;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className="text-8xl mb-6 animate-float">🔔</div>
        <h3 className="text-3xl font-bold text-white mb-4">Conditional Rendering: Different Components</h3>
        <p className="text-xl text-white/80">Same data, different presentation based on type</p>
      </div>

      <div className="bg-white/10 rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-xl font-bold text-white">📢 Notification Center</h4>
          <div className="text-white/70 text-sm">
            Showing {filteredNotifications.length} of {notifications.length}
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-6">
          {['all', 'success', 'warning', 'error', 'info'].map(type => {
            const count = type === 'all' ? notifications.length : getTypeCount(type);
            const style = type === 'all' 
              ? { bg: 'bg-gray-500/20', border: 'border-gray-400/30', color: 'text-gray-300' }
              : getNotificationStyle(type);
            
            return (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-4 py-2 rounded-lg font-bold transition-all transform hover:scale-105 border ${
                  filterType === type 
                    ? `${style.bg} ${style.border} ${style.color} shadow-lg` 
                    : 'bg-white/5 border-white/20 text-white/70 hover:bg-white/10'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <span>{type === 'all' ? '📋' : getNotificationStyle(type).icon}</span>
                  <span className="capitalize">{type}</span>
                  <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">{count}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Notifications List */}
        <div className="space-y-3">
          {filteredNotifications.map((notification, index) => {
            const style = getNotificationStyle(notification.type);
            return (
              <div
                key={notification.id}
                className={`p-4 rounded-lg border transition-all duration-300 hover:scale-102 animate-slide-up ${style.bg} ${style.border}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-3">
                  <div className="text-2xl flex-shrink-0">{style.icon}</div>
                  <div className="flex-1">
                    <div className="text-white font-bold mb-1">{notification.message}</div>
                    <div className="text-white/60 text-sm">{notification.timestamp}</div>
                  </div>
                  <div className={`px-2 py-1 rounded text-xs font-bold ${style.color} bg-white/10`}>
                    {notification.type.toUpperCase()}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl p-6 border border-pink-400/30">
        <h4 className="text-lg font-bold text-white mb-4">🎭 Conditional Rendering Pattern</h4>
        <div className="text-white/90 text-center">
          <div className="text-lg mb-2">
            <span className="bg-blue-500/20 px-2 py-1 rounded">Same Data</span>
            <span className="mx-4">+</span>
            <span className="bg-green-500/20 px-2 py-1 rounded">Different Types</span>
            <span className="mx-4">=</span>
            <span className="bg-purple-500/20 px-2 py-1 rounded">Different Components</span>
          </div>
          <div className="text-white/70 text-sm mt-2">
            Each notification type gets its own styling and behavior
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Class 7 Slides Component
const Class7Slides = () => {
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
              Class 7: React Interactivity & Dynamic UI
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

    // Discuss slide
    {
      id: 'discuss-coding-stories',
      title: 'Discuss!',
      bgGradient: 'from-cyan-600 to-teal-600',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">Discuss!</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <div className="text-left space-y-6 text-xl leading-relaxed">
                <div className="text-white font-semibold">
                  What was your very first piece of code or tech project, and how did it go?
                </div>
                <div className="text-white font-semibold">
                  Have you ever pulled an all-nighter coding? What were you working on, and did it actually work by morning?
                </div>
                <div className="text-white font-semibold">
                  What kept you awake - caffeine, music, adrenaline, or sheer panic?
                </div>
                <div className="text-white font-semibold">
                  Did you end up proud of it or did it all break at 5 AM?
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Hello World Hackathon Announcement
    {
      id: 'hello-world-hackathon',
      title: 'Hello World Hackathon',
      bgGradient: 'from-orange-500 to-red-600',
      content: (
        <div className="text-center space-y-12">
          <div className="space-y-8">
            <div className="text-8xl mb-6 animate-float">🚀</div>
            <h1 className="text-6xl font-bold text-white mb-6">
              Hello World Hackathon
            </h1>
            <h2 className="text-4xl font-semibold text-orange-100 mb-4">
              This Weekend!
            </h2>
            <div className="text-2xl text-orange-200">
              The biggest hackathon in Purdue history
            </div>
          </div>
          
          <div className="bg-white/20 backdrop-blur rounded-xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <div className="text-yellow-300 font-bold text-2xl mb-4">📊 By the Numbers</div>
                <div className="space-y-3">
                  <div className="text-white text-xl">
                    <span className="font-bold text-3xl text-yellow-300">650</span> expected participants
                  </div>
                  <div className="text-white text-lg">
                    Making it the <span className="font-bold">biggest hackathon</span> in Purdue history
                  </div>
                </div>
              </div>
              <div>
                <div className="text-green-300 font-bold text-2xl mb-4">🤝 We Need You!</div>
                <div className="space-y-3">
                  <div className="text-white text-lg">
                    Looking for <span className="font-bold">mentors</span> to help participants
                  </div>
                  <div className="text-white text-lg">
                    Share your knowledge and help build amazing projects
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/20 text-center">
              <div className="text-white text-lg">
                Interested in mentoring? Talk to me after class!
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Event Handling Introduction
    {
      id: 'event-handling-intro',
      title: 'Event Handling - Making Apps Respond',
      bgGradient: 'from-blue-500 to-cyan-600',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">⚡</div>
            <h2 className="text-5xl font-bold text-white mb-4">Event Handling</h2>
            <p className="text-xl text-white/80">Making apps respond to user actions</p>
          </div>

          <div className="bg-white/10 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">🔌 The Light Switch Analogy</h3>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <div className="text-6xl mb-4 animate-pulse">🕹️</div>
                <div className="text-white font-bold">User Action</div>
                <div className="text-white/70 text-sm">Click, Type, Hover</div>
              </div>
              
              <div className="text-4xl text-cyan-300 animate-bounce">→</div>
              
              <div className="text-center">
                <div className="text-6xl mb-4 animate-pulse">⚡</div>
                <div className="text-white font-bold">Event Fires</div>
                <div className="text-white/70 text-sm">React detects it</div>
              </div>
              
              <div className="text-4xl text-cyan-300 animate-bounce">→</div>
              
              <div className="text-center">
                <div className="text-6xl mb-4 animate-pulse">🎯</div>
                <div className="text-white font-bold">Your Function</div>
                <div className="text-white/70 text-sm">Gets called</div>
              </div>
              
              <div className="text-4xl text-cyan-300 animate-bounce">→</div>
              
              <div className="text-center">
                <div className="text-6xl mb-4 animate-pulse">🎨</div>
                <div className="text-white font-bold">UI Updates</div>
                <div className="text-white/70 text-sm">User sees change</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl p-6 border border-green-400/30">
              <h3 className="text-xl font-bold text-green-300 mb-4 text-center">✅ The Right Way</h3>
              <div className="text-center">
                <div className="bg-white/10 rounded-lg p-6 mb-4">
                  <div className="text-4xl mb-3">📦</div>
                  <div className="text-white text-lg">Pass the function</div>
                  <div className="text-green-300 text-sm mt-2">onClick={`{handleClick}`}</div>
                </div>
                <div className="text-white/80 text-sm">
                  React will call it when needed
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl p-6 border border-red-400/30">
              <h3 className="text-xl font-bold text-red-300 mb-4 text-center">❌ The Wrong Way</h3>
              <div className="text-center">
                <div className="bg-white/10 rounded-lg p-6 mb-4">
                  <div className="text-4xl mb-3">💥</div>
                  <div className="text-white text-lg">Call it immediately</div>
                  <div className="text-red-300 text-sm mt-2">onClick={`{handleClick()}`}</div>
                </div>
                <div className="text-white/80 text-sm">
                  Runs right away, not when clicked!
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-8 border border-blue-400/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">🧠 Think of it Like This</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-5xl mb-4">🏠</div>
                <div className="text-white font-bold mb-2">Your Component</div>
                <div className="text-white/80 text-sm">Has buttons and inputs</div>
              </div>
              
              <div className="text-center">
                <div className="text-5xl mb-4">🔔</div>
                <div className="text-white font-bold mb-2">Events</div>
                <div className="text-white/80 text-sm">Like doorbells for your component</div>
              </div>
              
              <div className="text-center">
                <div className="text-5xl mb-4">👂</div>
                <div className="text-white font-bold mb-2">Event Handlers</div>
                <div className="text-white/80 text-sm">Listen and respond</div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30 text-center">
            <div className="text-4xl mb-4">💡</div>
            <div className="text-yellow-300 font-bold text-xl mb-3">Key Insight</div>
            <div className="text-white text-lg">
              Events let users control your app's state!
            </div>
            <div className="text-white/80 text-sm mt-2">
              Without events, your app would just sit there doing nothing
            </div>
          </div>
        </div>
      )
    },

    // Common Event Types
    {
      id: 'common-event-types',
      title: 'Common Event Types',
      bgGradient: 'from-cyan-500 to-blue-600',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">🎪</div>
            <h2 className="text-5xl font-bold text-white mb-4">Common Event Types</h2>
            <p className="text-xl text-white/80">The events you'll use every day</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="text-6xl mb-4 animate-pulse">👆</div>
              <div className="text-white font-bold text-xl mb-2">onClick</div>
              <div className="text-white/70 text-sm mb-4">User clicks something</div>
              <div className="bg-cyan-500/20 rounded-lg p-3">
                <div className="text-cyan-300 font-bold text-sm">Perfect for:</div>
                <div className="text-white/80 text-xs">Buttons • Links • Cards</div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="text-6xl mb-4 animate-bounce">⌨️</div>
              <div className="text-white font-bold text-xl mb-2">onChange</div>
              <div className="text-white/70 text-sm mb-4">Input value changes</div>
              <div className="bg-green-500/20 rounded-lg p-3">
                <div className="text-green-300 font-bold text-sm">Perfect for:</div>
                <div className="text-white/80 text-xs">Inputs • Selects • Textareas</div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="text-6xl mb-4 animate-pulse">📝</div>
              <div className="text-white font-bold text-xl mb-2">onSubmit</div>
              <div className="text-white/70 text-sm mb-4">Form submission</div>
              <div className="bg-purple-500/20 rounded-lg p-3">
                <div className="text-purple-300 font-bold text-sm">Perfect for:</div>
                <div className="text-white/80 text-xs">Forms • Login • Contact</div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="text-6xl mb-4 animate-float">🖱️</div>
              <div className="text-white font-bold text-xl mb-2">onHover</div>
              <div className="text-white/70 text-sm mb-4">Mouse enter/leave</div>
              <div className="bg-orange-500/20 rounded-lg p-3">
                <div className="text-orange-300 font-bold text-sm">Perfect for:</div>
                <div className="text-white/80 text-xs">Tooltips • Dropdowns • Menus</div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="text-6xl mb-4 animate-bounce">⚡</div>
              <div className="text-white font-bold text-xl mb-2">onKeyDown</div>
              <div className="text-white/70 text-sm mb-4">Keyboard shortcuts</div>
              <div className="bg-pink-500/20 rounded-lg p-3">
                <div className="text-pink-300 font-bold text-sm">Perfect for:</div>
                <div className="text-white/80 text-xs">Enter • Escape • Shortcuts</div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="text-6xl mb-4 animate-pulse">🎯</div>
              <div className="text-white font-bold text-xl mb-2">onFocus</div>
              <div className="text-white/70 text-sm mb-4">Input focus/blur</div>
              <div className="bg-teal-500/20 rounded-lg p-3">
                <div className="text-teal-300 font-bold text-sm">Perfect for:</div>
                <div className="text-white/80 text-xs">Validation • Help Text • UX</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl p-8 border border-blue-400/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">🎛️ Event Object - Your Toolkit</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
                <div className="text-4xl mb-4">🎯</div>
                <div className="text-white font-bold text-lg mb-2">event.target</div>
                <div className="text-white/80 text-sm mb-3">The element that was clicked/changed</div>
                <div className="bg-gray-900/50 rounded-lg p-2">
                  <code className="text-cyan-300 text-xs">e.target.value</code>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
                <div className="text-4xl mb-4">🛑</div>
                <div className="text-white font-bold text-lg mb-2">preventDefault()</div>
                <div className="text-white/80 text-sm mb-3">Stop browser's default action</div>
                <div className="bg-gray-900/50 rounded-lg p-2">
                  <code className="text-cyan-300 text-xs">e.preventDefault()</code>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6 text-center hover:bg-white/20 transition-colors">
                <div className="text-4xl mb-4">⏹️</div>
                <div className="text-white font-bold text-lg mb-2">stopPropagation()</div>
                <div className="text-white/80 text-sm mb-3">Stop event from bubbling up</div>
                <div className="bg-gray-900/50 rounded-lg p-2">
                  <code className="text-cyan-300 text-xs">e.stopPropagation()</code>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30 text-center">
            <div className="text-4xl mb-4">💡</div>
            <div className="text-yellow-300 font-bold text-xl mb-3">Remember the Pattern</div>
            <div className="text-2xl text-white font-bold">
              User Action → Event Fires → Your Function Runs → UI Updates
            </div>
          </div>
        </div>
      )
    },

    // Conditional Rendering Introduction
    {
      id: 'conditional-rendering-intro',
      title: 'Conditional Rendering - Dynamic UI',
      bgGradient: 'from-green-500 to-teal-600',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">🚦</div>
            <h2 className="text-5xl font-bold text-white mb-4">Conditional Rendering</h2>
            <p className="text-xl text-white/80">Show different UI based on state</p>
          </div>

          <div className="bg-white/10 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">🚦 The Traffic Light Concept</h3>
            <div className="flex justify-center items-center space-x-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-500 rounded-full mb-4 animate-pulse shadow-lg shadow-red-500/50"></div>
                <div className="text-white font-bold">State: "STOP"</div>
                <div className="text-white/70 text-sm">Show stop message</div>
              </div>
              
              <div className="text-4xl text-white animate-bounce">↔️</div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-500 rounded-full mb-4 animate-pulse shadow-lg shadow-yellow-500/50"></div>
                <div className="text-white font-bold">State: "CAUTION"</div>
                <div className="text-white/70 text-sm">Show warning message</div>
              </div>
              
              <div className="text-4xl text-white animate-bounce">↔️</div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full mb-4 animate-pulse shadow-lg shadow-green-500/50"></div>
                <div className="text-white font-bold">State: "GO"</div>
                <div className="text-white/70 text-sm">Show go message</div>
              </div>
            </div>
            <div className="text-center mt-6 text-white/80">
              Same component, different content based on the current state
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl p-6 border border-blue-400/30">
              <h3 className="text-xl font-bold text-blue-300 mb-4 text-center">🎭 Before Conditional Rendering</h3>
              <div className="text-center">
                <div className="bg-white/10 rounded-lg p-6 mb-4">
                  <div className="text-4xl mb-3">😐</div>
                  <div className="text-white text-lg">Static UI</div>
                  <div className="text-white/70 text-sm mt-2">Always shows the same thing</div>
                </div>
                <div className="text-white/80 text-sm">
                  Boring and not very useful!
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl p-6 border border-green-400/30">
              <h3 className="text-xl font-bold text-green-300 mb-4 text-center">✨ With Conditional Rendering</h3>
              <div className="text-center">
                <div className="bg-white/10 rounded-lg p-6 mb-4">
                  <div className="text-4xl mb-3">🎨</div>
                  <div className="text-white text-lg">Dynamic UI</div>
                  <div className="text-white/70 text-sm mt-2">Changes based on data & user actions</div>
                </div>
                <div className="text-white/80 text-sm">
                  Interactive and responsive!
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30 mb-8">
            <h3 className="text-xl font-bold text-yellow-300 mb-4">🧠 Mental Model: State-Driven UI</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl mb-2">📊</div>
                <div className="text-white font-bold mb-2">State Changes</div>
                <div className="text-white/70 text-sm">User actions, API responses, timers</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-white font-bold mb-2">React Re-renders</div>
                <div className="text-white/70 text-sm">Component function runs again</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl mb-2">🎨</div>
                <div className="text-white font-bold mb-2">UI Updates</div>
                <div className="text-white/70 text-sm">Different JSX based on new state</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl p-8 border border-green-400/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Real-World Examples</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-teal-300 font-bold text-lg mb-2">🔐 User Authentication</div>
                  <div className="text-white/80 text-sm mb-3">Show different content for logged in vs logged out users</div>
                  <div className="bg-gray-900/50 rounded-lg p-3">
                    <code className="text-white text-xs">
                      {`{user ? (
  <Dashboard user={user} />
) : (
  <LoginForm />
)}`}
                    </code>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-teal-300 font-bold text-lg mb-2">⏳ Loading States</div>
                  <div className="text-white/80 text-sm mb-3">Show spinner while data is being fetched</div>
                  <div className="bg-gray-900/50 rounded-lg p-3">
                    <code className="text-white text-xs">
                      {`{isLoading ? (
  <LoadingSpinner />
) : (
  <UserList users={users} />
)}`}
                    </code>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-teal-300 font-bold text-lg mb-2">❌ Error Handling</div>
                  <div className="text-white/80 text-sm mb-3">Display error messages when things go wrong</div>
                  <div className="bg-gray-900/50 rounded-lg p-3">
                    <code className="text-white text-xs">
                      {`{error && (
  <ErrorMessage error={error} />
)}`}
                    </code>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-green-300 font-bold text-lg mb-2">🏷️ Feature Flags</div>
                  <div className="text-white/80 text-sm mb-3">Show/hide features based on user permissions</div>
                  <div className="bg-gray-900/50 rounded-lg p-3">
                    <code className="text-white text-xs">
                      {`{user.isAdmin && (
  <AdminPanel />
)}`}
                    </code>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-green-300 font-bold text-lg mb-2">📱 Responsive Design</div>
                  <div className="text-white/80 text-sm mb-3">Different layouts for different screen sizes</div>
                  <div className="bg-gray-900/50 rounded-lg p-3">
                    <code className="text-white text-xs">
                      {`{isMobile ? (
  <MobileLayout />
) : (
  <DesktopLayout />
)}`}
                    </code>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-green-300 font-bold text-lg mb-2">📦 Empty States</div>
                  <div className="text-white/80 text-sm mb-3">Show helpful message when no data exists</div>
                  <div className="bg-gray-900/50 rounded-lg p-3">
                    <code className="text-white text-xs">
                      {`{items.length === 0 ? (
  <EmptyState />
) : (
  <ItemList items={items} />
)}`}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Conditional Rendering Techniques
    {
      id: 'conditional-rendering-techniques',
      title: 'Conditional Rendering Techniques',
      bgGradient: 'from-teal-500 to-green-600',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">🛠️</div>
            <h2 className="text-5xl font-bold text-white mb-4">Three Rendering Techniques</h2>
            <p className="text-xl text-white/80">Choose the right tool for the job</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gradient-to-b from-green-500/20 to-green-600/20 rounded-xl p-6 border border-green-400/30 hover:scale-105 transition-transform">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 animate-bounce">❓</div>
                <div className="text-green-300 font-bold text-2xl mb-2">Ternary ?:</div>
                <div className="text-white/80 text-lg">"Show A or B"</div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4 mb-4 text-center">
                <div className="text-4xl mb-2">🔄</div>
                <div className="text-white text-sm">condition ? OptionA : OptionB</div>
              </div>
              
              <div className="space-y-2 text-center">
                <div className="text-green-300 font-bold text-sm">Perfect for:</div>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="bg-green-500/30 px-2 py-1 rounded text-xs">Login/Logout</span>
                  <span className="bg-green-500/30 px-2 py-1 rounded text-xs">Themes</span>
                  <span className="bg-green-500/30 px-2 py-1 rounded text-xs">User Roles</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-yellow-500/20 to-yellow-600/20 rounded-xl p-6 border border-yellow-400/30 hover:scale-105 transition-transform">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 animate-pulse">👁️</div>
                <div className="text-yellow-300 font-bold text-2xl mb-2">Logical &&</div>
                <div className="text-white/80 text-lg">"Show or Nothing"</div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4 mb-4 text-center">
                <div className="text-4xl mb-2">✨</div>
                <div className="text-white text-sm">condition && &lt;Component /&gt;</div>
              </div>
              
              <div className="space-y-2 text-center">
                <div className="text-yellow-300 font-bold text-sm">Perfect for:</div>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="bg-yellow-500/30 px-2 py-1 rounded text-xs">Alerts</span>
                  <span className="bg-yellow-500/30 px-2 py-1 rounded text-xs">Loading</span>
                  <span className="bg-yellow-500/30 px-2 py-1 rounded text-xs">Tooltips</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-purple-500/20 to-purple-600/20 rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-transform">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 animate-float">🚪</div>
                <div className="text-purple-300 font-bold text-2xl mb-2">Early Return</div>
                <div className="text-white/80 text-lg">"Exit Early"</div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4 mb-4 text-center">
                <div className="text-4xl mb-2">⚡</div>
                <div className="text-white text-sm">if (condition) return &lt;Page /&gt;</div>
              </div>
              
              <div className="space-y-2 text-center">
                <div className="text-purple-300 font-bold text-sm">Perfect for:</div>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="bg-purple-500/30 px-2 py-1 rounded text-xs">Errors</span>
                  <span className="bg-purple-500/30 px-2 py-1 rounded text-xs">Guards</span>
                  <span className="bg-purple-500/30 px-2 py-1 rounded text-xs">Auth</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/30">
              <h3 className="text-xl font-bold text-blue-300 mb-4">⚠️ Common Pitfalls</h3>
              <div className="space-y-4">
                <div className="bg-red-500/20 rounded-lg p-4">
                  <div className="text-red-300 font-bold text-sm mb-2">❌ Falsy Values Problem</div>
                  <code className="text-white text-xs block mb-2">
                    {`{count && <div>{count} items</div>}`}
                  </code>
                  <div className="text-red-300 text-xs">Shows "0" when count is 0!</div>
                </div>
                <div className="bg-green-500/20 rounded-lg p-4">
                  <div className="text-green-300 font-bold text-sm mb-2">✅ Better Solution</div>
                  <code className="text-white text-xs block mb-2">
                    {`{count > 0 && <div>{count} items</div>}`}
                  </code>
                  <div className="text-green-300 text-xs">Explicitly check the condition</div>
                </div>
                <div className="bg-green-500/20 rounded-lg p-4">
                  <div className="text-green-300 font-bold text-sm mb-2">✅ Or Use Ternary</div>
                  <code className="text-white text-xs block mb-2">
                    {`{count ? <div>{count} items</div> : null}`}
                  </code>
                  <div className="text-green-300 text-xs">Always returns null for falsy values</div>
                </div>
              </div>
            </div>

            <div className="bg-orange-500/20 rounded-xl p-6 border border-orange-400/30">
              <h3 className="text-xl font-bold text-orange-300 mb-4">🎯 Pro Tips</h3>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-orange-300 font-bold text-sm mb-2">💡 Complex Conditions</div>
                  <div className="bg-gray-900/50 rounded-lg p-3 mb-2">
                    <code className="text-white text-xs">
                      {`const canEdit = user.isOwner || user.isAdmin;
const showEditButton = canEdit && !isLoading;

return (
  <div>
    {showEditButton && <EditButton />}
  </div>
);`}
                    </code>
                  </div>
                  <div className="text-white/70 text-xs">Extract complex logic to variables</div>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-orange-300 font-bold text-sm mb-2">🔄 Multiple Conditions</div>
                  <div className="bg-gray-900/50 rounded-lg p-3 mb-2">
                    <code className="text-white text-xs">
                      {`const renderContent = () => {
  if (isLoading) return <Loading />;
  if (error) return <Error />;
  if (data.length === 0) return <Empty />;
  return <DataList data={data} />;
};

return <div>{renderContent()}</div>;`}
                    </code>
                  </div>
                  <div className="text-white/70 text-xs">Use functions for complex rendering logic</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl p-8 border border-green-400/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Choosing the Right Technique</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-3xl mb-3">🤔</div>
                <div className="text-white font-bold mb-2">Ask Yourself:</div>
                <div className="text-white/80 text-sm">"Do I need to show one of two things?"</div>
                <div className="text-green-300 text-sm mt-2">→ Use Ternary</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-3xl mb-3">👀</div>
                <div className="text-white font-bold mb-2">Ask Yourself:</div>
                <div className="text-white/80 text-sm">"Do I need to show something or nothing?"</div>
                <div className="text-yellow-300 text-sm mt-2">→ Use Logical AND</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-3xl mb-3">🚪</div>
                <div className="text-white font-bold mb-2">Ask Yourself:</div>
                <div className="text-white/80 text-sm">"Should I exit early from this component?"</div>
                <div className="text-purple-300 text-sm mt-2">→ Use Early Return</div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // List Rendering Introduction
    {
      id: 'list-rendering-intro',
      title: 'Rendering Lists - Data-Driven UI',
      bgGradient: 'from-purple-500 to-indigo-600',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">📝</div>
            <h2 className="text-5xl font-bold text-white mb-4">Rendering Lists</h2>
            <p className="text-xl text-white/80">Display multiple pieces of similar data</p>
          </div>

          <div className="bg-white/10 rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">🏷️ The Stamp Analogy</h3>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <div className="text-6xl mb-4 animate-bounce">📮</div>
                <div className="text-white font-bold">One Template</div>
                <div className="text-white/70 text-sm">Your component design</div>
              </div>
              
              <div className="text-4xl text-purple-300 animate-pulse">×</div>
              
              <div className="text-center">
                <div className="flex space-x-2 mb-4">
                  <div className="w-8 h-8 bg-purple-400 rounded animate-pulse"></div>
                  <div className="w-8 h-8 bg-purple-500 rounded animate-pulse"></div>
                  <div className="w-8 h-8 bg-purple-600 rounded animate-pulse"></div>
                </div>
                <div className="text-white font-bold">Many Data Items</div>
                <div className="text-white/70 text-sm">Your array of data</div>
              </div>
              
              <div className="text-4xl text-purple-300 animate-bounce">=</div>
              
              <div className="text-center">
                <div className="grid grid-cols-3 gap-1 mb-4">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-purple-500 rounded animate-float"></div>
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded animate-float"></div>
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-purple-700 rounded animate-float"></div>
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-purple-500 rounded animate-float"></div>
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded animate-float"></div>
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-purple-700 rounded animate-float"></div>
                </div>
                <div className="text-white font-bold">Dynamic List</div>
                <div className="text-white/70 text-sm">Rendered components</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl p-6 border border-red-400/30">
              <h3 className="text-xl font-bold text-red-300 mb-4 text-center">😰 The Hard Way</h3>
              <div className="text-center">
                <div className="bg-white/10 rounded-lg p-6 mb-4">
                  <div className="text-4xl mb-3">📝</div>
                  <div className="text-white text-lg">Write Each One</div>
                  <div className="text-white/70 text-sm mt-2">Copy-paste for every item</div>
                </div>
                <div className="text-white/80 text-sm">
                  What if you have 100 items? 😱
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-xl p-6 border border-green-400/30">
              <h3 className="text-xl font-bold text-green-300 mb-4 text-center">🚀 The Smart Way</h3>
              <div className="text-center">
                <div className="bg-white/10 rounded-lg p-6 mb-4">
                  <div className="text-4xl mb-3">🔄</div>
                  <div className="text-white text-lg">Use Array.map()</div>
                  <div className="text-white/70 text-sm mt-2">One template, any number of items</div>
                </div>
                <div className="text-white/80 text-sm">
                  Works for 1 item or 1 million! ✨
                </div>
              </div>
            </div>
          </div>

          <ListRenderingDemo />
        </div>
      )
    },

    // Array.map() Visual Demo
    {
      id: 'array-map-visual-demo',
      title: 'How Array.map() Works',
      bgGradient: 'from-indigo-500 to-purple-600',
      content: (
        <div className="space-y-8">
          <ArrayMapVisualDemo />
        </div>
      )
    },

    // The Key Prop Explained
    {
      id: 'key-prop-explained',
      title: 'The Key Prop - React\'s Name Tags',
      bgGradient: 'from-purple-500 to-pink-600',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">🔑</div>
            <h2 className="text-5xl font-bold text-white mb-4">The Key Prop</h2>
            <p className="text-xl text-white/80">React's way to track list items</p>
          </div>

          <KeyPropDemo />

          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl p-8 border border-indigo-400/30 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Key Prop Examples & Best Practices</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-indigo-300 font-bold text-lg mb-3">✅ Good Key Examples</div>
                  <div className="space-y-3">
                    <div className="bg-gray-900/50 rounded-lg p-3">
                      <div className="text-green-300 text-xs mb-1">Database IDs</div>
                      <code className="text-white text-xs">{`key={user.id}`}</code>
                    </div>
                    <div className="bg-gray-900/50 rounded-lg p-3">
                      <div className="text-green-300 text-xs mb-1">Unique Identifiers</div>
                      <code className="text-white text-xs">{`key={product.sku}`}</code>
                    </div>
                    <div className="bg-gray-900/50 rounded-lg p-3">
                      <div className="text-green-300 text-xs mb-1">Generated IDs</div>
                      <code className="text-white text-xs">{`key={crypto.randomUUID()}`}</code>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-purple-300 font-bold text-lg mb-3">🎯 Key Requirements</div>
                  <div className="space-y-2 text-white/90 text-sm">
                    <div>• <strong>Unique:</strong> No two items should have the same key</div>
                    <div>• <strong>Stable:</strong> Same item should always have the same key</div>
                    <div>• <strong>Predictable:</strong> Key shouldn't change between renders</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-red-300 font-bold text-lg mb-3">❌ Bad Key Examples</div>
                  <div className="space-y-3">
                    <div className="bg-gray-900/50 rounded-lg p-3">
                      <div className="text-red-300 text-xs mb-1">Array Index (reordering breaks)</div>
                      <code className="text-white text-xs">{`key={index}`}</code>
                    </div>
                    <div className="bg-gray-900/50 rounded-lg p-3">
                      <div className="text-red-300 text-xs mb-1">Random Values (changes every render)</div>
                      <code className="text-white text-xs">{`key={Math.random()}`}</code>
                    </div>
                    <div className="bg-gray-900/50 rounded-lg p-3">
                      <div className="text-red-300 text-xs mb-1">Non-unique Values (duplicates)</div>
                      <code className="text-white text-xs">{`key={item.category}`}</code>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-orange-300 font-bold text-lg mb-3">🔧 What If No ID?</div>
                  <div className="bg-gray-900/50 rounded-lg p-3 mb-2">
                    <code className="text-white text-xs">
                      {`// Create a stable key from content
const items = ["apple", "banana", "cherry"];

{items.map((item, index) => (
  <div key={\`item-\${item}\`}>
    {item}
  </div>
))}`}
                    </code>
                  </div>
                  <div className="text-white/70 text-xs">Combine content with prefix for uniqueness</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
            <h3 className="text-xl font-bold text-yellow-300 mb-4">🧠 Mental Model: Keys Are Like Name Tags</h3>
            <div className="text-white/90 text-lg text-center">
              <p className="mb-4">
                Think of keys like name tags at a conference. Each person (component) gets a unique name tag (key) 
                so you can identify them even if they change seats (reorder) or change clothes (props).
              </p>
              <div className="bg-white/10 rounded-lg p-4 text-left">
                <div className="text-yellow-300 font-bold mb-2">Without good keys:</div>
                <div className="text-white/80 text-sm">React gets confused about which component is which, leading to bugs and poor performance.</div>
                <div className="text-yellow-300 font-bold mb-2 mt-4">With good keys:</div>
                <div className="text-white/80 text-sm">React efficiently updates only what changed, keeping your app fast and bug-free.</div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Array Methods for Lists
    {
      id: 'array-methods-for-lists',
      title: 'Array Methods for Dynamic Lists',
      bgGradient: 'from-purple-600 to-pink-600',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">🔧</div>
            <h2 className="text-5xl font-bold text-white mb-4">Array Methods for Dynamic Lists</h2>
            <p className="text-xl text-white/80">Transform, filter, and sort your data</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gradient-to-b from-blue-500/20 to-blue-600/20 rounded-xl p-6 border border-blue-400/30 hover:scale-105 transition-transform">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 animate-spin-slow">🔄</div>
                <div className="text-blue-300 font-bold text-3xl mb-2">.map()</div>
                <div className="text-white/80 text-lg">Transform Each Item</div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4 mb-4">
                <div className="flex justify-center items-center space-x-4">
                  <div className="text-center">
                    <div className="text-2xl mb-1">📊</div>
                    <div className="text-xs text-white/70">Data</div>
                  </div>
                  <div className="text-2xl text-blue-300">→</div>
                  <div className="text-center">
                    <div className="text-2xl mb-1">🎨</div>
                    <div className="text-xs text-white/70">JSX</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-500/30 px-3 py-1 rounded-full text-xs text-blue-300 font-bold">
                  Array → Components
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-green-500/20 to-green-600/20 rounded-xl p-6 border border-green-400/30 hover:scale-105 transition-transform">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 animate-pulse">🔍</div>
                <div className="text-green-300 font-bold text-3xl mb-2">.filter()</div>
                <div className="text-white/80 text-lg">Show Only Matches</div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4 mb-4">
                <div className="flex justify-center items-center space-x-2">
                  <div className="w-6 h-6 bg-white/30 rounded"></div>
                  <div className="w-6 h-6 bg-green-500 rounded"></div>
                  <div className="w-6 h-6 bg-white/30 rounded"></div>
                  <div className="text-xl text-green-300 mx-2">→</div>
                  <div className="w-6 h-6 bg-green-500 rounded"></div>
                </div>
                <div className="text-center text-xs text-white/70 mt-2">Keep only what matches</div>
              </div>
              
              <div className="text-center">
                <div className="bg-green-500/30 px-3 py-1 rounded-full text-xs text-green-300 font-bold">
                  All Items → Matching Items
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-b from-purple-500/20 to-purple-600/20 rounded-xl p-6 border border-purple-400/30 hover:scale-105 transition-transform">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4 animate-bounce">📊</div>
                <div className="text-purple-300 font-bold text-3xl mb-2">.sort()</div>
                <div className="text-white/80 text-lg">Change the Order</div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-4 mb-4">
                <div className="flex justify-center items-center space-x-2">
                  <div className="flex flex-col space-y-1">
                    <div className="w-4 h-4 bg-purple-300 rounded text-xs flex items-center justify-center">3</div>
                    <div className="w-4 h-4 bg-purple-400 rounded text-xs flex items-center justify-center">1</div>
                    <div className="w-4 h-4 bg-purple-500 rounded text-xs flex items-center justify-center">2</div>
                  </div>
                  <div className="text-xl text-purple-300 mx-2">→</div>
                  <div className="flex flex-col space-y-1">
                    <div className="w-4 h-4 bg-purple-400 rounded text-xs flex items-center justify-center">1</div>
                    <div className="w-4 h-4 bg-purple-500 rounded text-xs flex items-center justify-center">2</div>
                    <div className="w-4 h-4 bg-purple-300 rounded text-xs flex items-center justify-center">3</div>
                  </div>
                </div>
                <div className="text-center text-xs text-white/70 mt-2">Reorder by criteria</div>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-500/30 px-3 py-1 rounded-full text-xs text-purple-300 font-bold">
                  Random Order → Sorted Order
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl p-8 border border-pink-400/30 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">🔗 Chain Them Together!</h3>
            <div className="flex justify-center items-center space-x-4 mb-6">
              <div className="bg-white/10 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">📊</div>
                <div className="text-sm text-white">All Data</div>
              </div>
              <div className="text-2xl text-pink-300">→</div>
              <div className="bg-green-500/20 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🔍</div>
                <div className="text-sm text-green-300">.filter()</div>
              </div>
              <div className="text-2xl text-pink-300">→</div>
              <div className="bg-purple-500/20 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">📊</div>
                <div className="text-sm text-purple-300">.sort()</div>
              </div>
              <div className="text-2xl text-pink-300">→</div>
              <div className="bg-blue-500/20 rounded-lg p-4 text-center">
                <div className="text-3xl mb-2">🎨</div>
                <div className="text-sm text-blue-300">.map()</div>
              </div>
            </div>
            <div className="text-center text-white/80">
              Filter what you want → Sort how you want → Display as JSX
            </div>
          </div>

          <ArrayMethodsDemo />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/30">
              <h3 className="text-xl font-bold text-blue-300 mb-4">💡 Pro Tips</h3>
              <div className="space-y-3 text-white/90 text-sm">
                <div>• <strong>Chain order matters:</strong> filter → sort → map</div>
                <div>• <strong>Performance:</strong> Filter first to reduce items to sort</div>
                <div>• <strong>Readability:</strong> Extract complex logic to variables</div>
                <div>• <strong>Immutability:</strong> These methods don't modify the original array</div>
              </div>
            </div>

            <div className="bg-orange-500/20 rounded-xl p-6 border border-orange-400/30">
              <h3 className="text-xl font-bold text-orange-300 mb-4">⚠️ Common Mistakes</h3>
              <div className="space-y-3 text-white/90 text-sm">
                <div>• <strong>Forgetting keys:</strong> Always add key prop to mapped elements</div>
                <div>• <strong>Mutating arrays:</strong> Use [...array].sort() for state arrays</div>
                <div>• <strong>Complex logic in JSX:</strong> Extract to variables or functions</div>
                <div>• <strong>Not handling empty arrays:</strong> Show empty states</div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Nested Lists Demo
    {
      id: 'nested-lists-demo',
      title: 'Nested Lists: Lists Within Lists',
      bgGradient: 'from-pink-500 to-purple-600',
      content: (
        <div className="space-y-8">
          <NestedListsDemo />
        </div>
      )
    },

    // Empty States Demo
    {
      id: 'empty-states-demo',
      title: 'Empty States: Handle Nothing Gracefully',
      bgGradient: 'from-purple-600 to-indigo-600',
      content: (
        <div className="space-y-8">
          <EmptyStatesDemo />
        </div>
      )
    },

    // Conditional List Items Demo
    {
      id: 'conditional-list-demo',
      title: 'Conditional Rendering in Lists',
      bgGradient: 'from-indigo-600 to-blue-600',
      content: (
        <div className="space-y-8">
          <ConditionalListDemo />
        </div>
      )
    },

    // Performance Tips (Visual Summary)
    {
      id: 'list-performance-tips',
      title: 'List Performance Tips',
      bgGradient: 'from-blue-600 to-cyan-600',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">⚡</div>
            <h2 className="text-5xl font-bold text-white mb-4">Performance Tips</h2>
            <p className="text-xl text-white/80">Keep your lists fast and smooth</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white/10 rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">🐌</div>
              <h3 className="text-xl font-bold text-red-300 mb-4">&lt; 100 Items</h3>
              <div className="text-white/80 mb-4">No optimization needed</div>
              <div className="bg-green-500/20 px-3 py-2 rounded-lg border border-green-400/30">
                <span className="text-green-300 font-bold">✅ Just use .map()</span>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">🏃</div>
              <h3 className="text-xl font-bold text-yellow-300 mb-4">100-1000 Items</h3>
              <div className="text-white/80 mb-4">Use React.memo</div>
              <div className="bg-yellow-500/20 px-3 py-2 rounded-lg border border-yellow-400/30">
                <span className="text-yellow-300 font-bold">⚡ Prevent re-renders</span>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <div className="text-6xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-purple-300 mb-4">1000+ Items</h3>
              <div className="text-white/80 mb-4">Consider virtualization</div>
              <div className="bg-purple-500/20 px-3 py-2 rounded-lg border border-purple-400/30">
                <span className="text-purple-300 font-bold">🔥 Only render visible</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-blue-400/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">🧠 Key Performance Rules</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                  <div className="text-white">
                    <div className="font-bold">Stable Keys</div>
                    <div className="text-white/70 text-sm">Use unique IDs, not array indexes</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                  <div className="text-white">
                    <div className="font-bold">Measure First</div>
                    <div className="text-white/70 text-sm">Don't optimize until you have a problem</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                  <div className="text-white">
                    <div className="font-bold">Extract Logic</div>
                    <div className="text-white/70 text-sm">Keep JSX clean and readable</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">✓</div>
                  <div className="text-white">
                    <div className="font-bold">Plan Empty States</div>
                    <div className="text-white/70 text-sm">Always show something helpful</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Function Props slide
    {
      id: 'function-props-deep-dive',
      title: 'Passing Functions as Props',
      bgGradient: 'from-orange-500 to-red-600',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">🔔</div>
            <h2 className="text-5xl font-bold text-white mb-4">Passing Functions as Props</h2>
            <p className="text-xl text-white/80">Child-to-parent communication</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div className="bg-white/20 backdrop-blur rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-red-300">🎯 The Goal</h3>
                <div className="text-lg text-white/90 space-y-3">
                  <p>Until now, data has only flowed parent → child as props.</p>
                  <p><strong>But sometimes, a child needs to tell the parent "Hey, something happened!"</strong></p>
                  <p>Pass a function down from parent. Child calls it when events happen.</p>
                </div>
              </div>
              
              <div className="bg-orange-500/20 rounded-xl p-6 border border-orange-400/30">
                <h3 className="text-2xl font-bold mb-4 text-orange-300">💡 The Key Idea</h3>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-4">
                    "State lives at the top,<br />events bubble up"
                  </div>
                  <div className="text-lg text-white/80">
                    Child doesn't need to know HOW it works, just WHEN to call it
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-red-500/20 rounded-xl p-8 border border-red-400/30">
              <h3 className="text-2xl font-bold mb-6 text-red-300">🔔 The Doorbell Analogy</h3>
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">🏠</div>
                <div className="text-xl text-white/90 leading-relaxed">
                  Like a doorbell: the button (child) doesn't open the door.
                  <br /><br />
                  It just sends a signal to the parent to do it.
                  <br /><br />
                  <strong>Child presses button → Parent gets notification → Parent handles it</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-8 border border-orange-400/30 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">The Complete Data Flow Pattern</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">📤</div>
                <div className="text-blue-300 font-bold text-xl mb-2">1. Props Down</div>
                <div className="text-white/90 text-sm mb-4">
                  Parent passes functions as props
                </div>
                <div className="bg-gray-900/50 rounded-lg p-3">
                  <code className="text-white text-xs">
                    {`<TodoItem 
  todo={todo}
  onToggle={handleToggle}
  onDelete={handleDelete}
/>`}
                  </code>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <div className="text-yellow-300 font-bold text-xl mb-2">2. Event Occurs</div>
                <div className="text-white/90 text-sm mb-4">
                  User interacts with child component
                </div>
                <div className="bg-gray-900/50 rounded-lg p-3">
                  <code className="text-white text-xs">
                    {`// In TodoItem:
<button 
  onClick={() => onToggle(todo.id)}
>
  Toggle
</button>`}
                  </code>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-6 text-center">
                <div className="text-4xl mb-4">📥</div>
                <div className="text-green-300 font-bold text-xl mb-2">3. Events Up</div>
                <div className="text-white/90 text-sm mb-4">
                  Parent function executes, updates state
                </div>
                <div className="bg-gray-900/50 rounded-lg p-3">
                  <code className="text-white text-xs">
                    {`// In Parent:
const handleToggle = (id) => {
  setTodos(todos.map(todo => 
    todo.id === id 
      ? {...todo, done: !todo.done}
      : todo
  ));
};`}
                  </code>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/30">
              <h3 className="text-xl font-bold text-blue-300 mb-4">🎯 Common Function Prop Patterns</h3>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-blue-300 font-bold text-sm mb-2">Event Handlers</div>
                  <code className="text-white text-xs block mb-2">
                    {`onSubmit, onClick, onChange, onFocus`}
                  </code>
                  <div className="text-white/70 text-xs">Handle user interactions</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-blue-300 font-bold text-sm mb-2">CRUD Operations</div>
                  <code className="text-white text-xs block mb-2">
                    {`onAdd, onUpdate, onDelete, onCreate`}
                  </code>
                  <div className="text-white/70 text-xs">Modify data collections</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-blue-300 font-bold text-sm mb-2">State Changes</div>
                  <code className="text-white text-xs block mb-2">
                    {`onToggle, onSelect, onFilter, onSort`}
                  </code>
                  <div className="text-white/70 text-xs">Update component state</div>
                </div>
              </div>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-400/30">
              <h3 className="text-xl font-bold text-purple-300 mb-4">🏗️ Component Architecture</h3>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-purple-300 font-bold text-sm mb-2">Smart Components (Parents)</div>
                  <div className="text-white/70 text-xs mb-2">
                    • Manage state and business logic<br/>
                    • Pass data and functions down<br/>
                    • Handle complex operations
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-purple-300 font-bold text-sm mb-2">Dumb Components (Children)</div>
                  <div className="text-white/70 text-xs">
                    • Receive props and render UI<br/>
                    • Call functions when events occur<br/>
                    • Focus on presentation only
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl p-8 border border-red-400/30 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Advanced Function Prop Techniques</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-red-300 font-bold text-lg mb-3">📦 Passing Multiple Values</div>
                  <div className="bg-gray-900/50 rounded-lg p-3 mb-2">
                    <code className="text-white text-xs">
                      {`// Child calls with multiple arguments
onUpdate(id, newData, timestamp);

// Parent receives all arguments  
const handleUpdate = (id, data, time) => {
  // Handle the update
};`}
                    </code>
                  </div>
                  <div className="text-white/70 text-xs">Pass complex data from child to parent</div>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-red-300 font-bold text-lg mb-3">🎯 Callback with Results</div>
                  <div className="bg-gray-900/50 rounded-lg p-3 mb-2">
                    <code className="text-white text-xs">
                      {`// Parent provides callback
const handleSave = async (data, callback) => {
  try {
    await saveToAPI(data);
    callback({ success: true });
  } catch (error) {
    callback({ success: false, error });
  }
};

// Child uses callback
onSave(formData, (result) => {
  if (result.success) {
    setMessage("Saved!");
  }
});`}
                    </code>
                  </div>
                  <div className="text-white/70 text-xs">Child can react to operation results</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-orange-300 font-bold text-lg mb-3">🔄 Function Composition</div>
                  <div className="bg-gray-900/50 rounded-lg p-3 mb-2">
                    <code className="text-white text-xs">
                      {`// Parent creates composed handler
const handleSubmitWithValidation = (data) => {
  if (validateData(data)) {
    handleSubmit(data);
    logAction('submit', data.id);
  }
};

<Form onSubmit={handleSubmitWithValidation} />`}
                    </code>
                  </div>
                  <div className="text-white/70 text-xs">Combine multiple operations in one handler</div>
                </div>

                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-orange-300 font-bold text-lg mb-3">🏷️ Event Object Forwarding</div>
                  <div className="bg-gray-900/50 rounded-lg p-3 mb-2">
                    <code className="text-white text-xs">
                      {`// Child forwards native event
<button 
  onClick={(event) => {
    event.preventDefault();
    onCustomClick(event, additionalData);
  }}
>

// Parent can access native event
const handleClick = (event, data) => {
  console.log('Clicked at:', event.clientX, event.clientY);
  // Handle additional data
};`}
                    </code>
                  </div>
                  <div className="text-white/70 text-xs">Access native browser events in parent</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
            <h3 className="text-xl font-bold text-yellow-300 mb-4">🎨 Best Practices & Naming Conventions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3 text-white/90 text-sm">
                <div>• <strong>Naming:</strong> Use "on" prefix for function props: <code className="text-yellow-300">onSubmit</code>, <code className="text-yellow-300">onDelete</code></div>
                <div>• <strong>Handlers:</strong> Use "handle" prefix in parent: <code className="text-yellow-300">handleSubmit</code>, <code className="text-yellow-300">handleDelete</code></div>
                <div>• <strong>Specificity:</strong> Be specific about what the function does: <code className="text-yellow-300">onUserLogin</code> not <code className="text-yellow-300">onAction</code></div>
              </div>
              <div className="space-y-3 text-white/90 text-sm">
                <div>• <strong>Parameters:</strong> Pass only necessary data, keep functions focused</div>
                <div>• <strong>Performance:</strong> Define handlers outside render when possible</div>
                <div>• <strong>Debugging:</strong> Use descriptive names to track data flow easily</div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Controlled Forms slide
    {
      id: 'controlled-forms-deep-dive',
      title: 'Controlled Form Inputs',
      bgGradient: 'from-teal-500 to-cyan-600',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-8">
            <div className="text-8xl mb-6 animate-float">📋</div>
            <h2 className="text-5xl font-bold text-white mb-4">Controlled Form Inputs</h2>
            <p className="text-xl text-white/80">Capturing and using user input</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              <div className="bg-white/20 backdrop-blur rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-4 text-cyan-300">🎯 The Goal</h3>
                <div className="text-lg text-white/90 space-y-3">
                  <p>Inputs can hold data by themselves OR under React's control.</p>
                  <p><strong>In React, it's better to keep them controlled.</strong></p>
                  <p>Their current value always lives in state.</p>
                </div>
              </div>
              
              <div className="bg-teal-500/20 rounded-xl p-6 border border-teal-400/30">
                <h3 className="text-2xl font-bold mb-4 text-teal-300">💡 The Key Idea</h3>
                <div className="text-center">
                  <div className="text-xl font-bold text-white mb-4">
                    State → Input shows it → User changes it → State updates
                  </div>
                  <div className="text-lg text-white/80">
                    Creates a clear, predictable loop
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-cyan-500/20 rounded-xl p-8 border border-cyan-400/30">
              <h3 className="text-2xl font-bold mb-6 text-cyan-300">📝 The Whiteboard Analogy</h3>
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">📋</div>
                <div className="text-xl text-white/90 leading-relaxed">
                  Like a whiteboard where everything written is also copied into your notebook.
                  <br /><br />
                  The notebook is the state. You always trust what's in the notebook.
                  <br /><br />
                  <strong>Input shows state value → User types → Update state → Input shows new value</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-500/20 to-cyan-500/20 rounded-xl p-8 border border-teal-400/30 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Controlled vs Uncontrolled Inputs</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-red-300 font-bold text-xl mb-4">❌ Uncontrolled (Avoid)</div>
                <div className="bg-gray-900/50 rounded-lg p-4 mb-4">
                  <code className="text-white text-sm">
                    {`<input type="text" />

// Problems:
• Value managed by DOM
• Hard to access current value
• No real-time validation
• Can't clear programmatically
• Unpredictable behavior`}
                  </code>
                </div>
                <div className="text-red-300 text-sm">DOM controls the value - React doesn't know what it is!</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <div className="text-green-300 font-bold text-xl mb-4">✅ Controlled (Preferred)</div>
                <div className="bg-gray-900/50 rounded-lg p-4 mb-4">
                  <code className="text-white text-sm">
                    {`const [name, setName] = useState('');

<input 
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

// Benefits:
• React controls the value
• Always know current state
• Real-time validation
• Easy to reset/clear`}
                  </code>
                </div>
                <div className="text-green-300 text-sm">React state controls the value - single source of truth!</div>
              </div>
            </div>
            
            <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-400/30">
              <div className="text-blue-300 font-bold mb-2">🔑 Why Controlled is Better:</div>
              <div className="text-white/90 text-sm">
                Real-time validation • Easy to clear/reset • Predictable behavior • Single source of truth • Better testing
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-400/30">
              <h3 className="text-xl font-bold text-purple-300 mb-4">📝 Different Input Types</h3>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-purple-300 font-bold text-sm mb-2">Text Input</div>
                  <code className="text-white text-xs block mb-2">
                    {`<input 
  type="text"
  value={text}
  onChange={(e) => setText(e.target.value)}
/>`}
                  </code>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-purple-300 font-bold text-sm mb-2">Checkbox</div>
                  <code className="text-white text-xs block mb-2">
                    {`<input 
  type="checkbox"
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
/>`}
                  </code>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-purple-300 font-bold text-sm mb-2">Select Dropdown</div>
                  <code className="text-white text-xs block mb-2">
                    {`<select 
  value={selected}
  onChange={(e) => setSelected(e.target.value)}
>
  <option value="option1">Option 1</option>
</select>`}
                  </code>
                </div>
              </div>
            </div>

            <div className="bg-orange-500/20 rounded-xl p-6 border border-orange-400/30">
              <h3 className="text-xl font-bold text-orange-300 mb-4">🎯 Form Patterns</h3>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-orange-300 font-bold text-sm mb-2">Single State Object</div>
                  <code className="text-white text-xs block mb-2">
                    {`const [form, setForm] = useState({
  name: '', email: '', age: ''
});

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  });
};`}
                  </code>
                  <div className="text-white/70 text-xs">Manage multiple inputs with one state</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-orange-300 font-bold text-sm mb-2">Real-time Validation</div>
                  <code className="text-white text-xs block mb-2">
                    {`const [email, setEmail] = useState('');
const [error, setError] = useState('');

const handleEmailChange = (e) => {
  const value = e.target.value;
  setEmail(value);
  
  if (value && !value.includes('@')) {
    setError('Invalid email');
  } else {
    setError('');
  }
};`}
                  </code>
                  <div className="text-white/70 text-xs">Validate as user types</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500/20 to-teal-500/20 rounded-xl p-8 border border-cyan-400/30 mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Advanced Form Techniques</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4 animate-bounce">🔄</div>
                <div className="text-cyan-300 font-bold text-lg mb-3">Dynamic Fields</div>
                <div className="text-white/80 text-sm">
                  Add or remove form fields on demand
                </div>
                <div className="mt-4 flex justify-center space-x-2">
                  <div className="w-4 h-6 bg-cyan-400 rounded"></div>
                  <div className="w-4 h-6 bg-cyan-400 rounded"></div>
                  <div className="w-4 h-6 bg-cyan-400/50 rounded border-2 border-dashed border-cyan-400"></div>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4 animate-pulse">📊</div>
                <div className="text-teal-300 font-bold text-lg mb-3">State Management</div>
                <div className="text-white/80 text-sm">
                  Track data, errors, and submission status
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-green-400">Data ✓</span>
                    <span className="text-yellow-400">Errors !</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-blue-400">Dirty ✎</span>
                    <span className="text-purple-400">Submitting ⏳</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4 animate-wiggle">🎭</div>
                <div className="text-cyan-300 font-bold text-lg mb-3">Custom Components</div>
                <div className="text-white/80 text-sm">
                  Reusable inputs with built-in validation
                </div>
                <div className="mt-4">
                  <div className="w-full h-3 bg-gray-600 rounded mb-2"></div>
                  <div className="w-3/4 h-2 bg-red-400 rounded text-xs"></div>
                </div>
              </div>

              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-4xl mb-4 animate-spin-slow">⚡</div>
                <div className="text-teal-300 font-bold text-lg mb-3">Performance</div>
                <div className="text-white/80 text-sm">
                  Debounce expensive operations like API calls
                </div>
                <div className="mt-4 flex justify-center space-x-1">
                  <div className="w-2 h-8 bg-orange-400 rounded animate-pulse"></div>
                  <div className="w-2 h-6 bg-orange-400 rounded animate-pulse" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-4 bg-orange-400 rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-orange-400 rounded animate-pulse" style={{animationDelay: '0.3s'}}></div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-400/30">
              <h4 className="text-xl font-bold text-white mb-4 text-center">The Form Lifecycle</h4>
              <div className="flex items-center justify-center space-x-4 text-center">
                <div className="flex-1">
                  <div className="text-3xl mb-2">📝</div>
                  <div className="text-sm text-white font-semibold">User Types</div>
                </div>
                <div className="text-2xl text-purple-300">→</div>
                <div className="flex-1">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="text-sm text-white font-semibold">Validate</div>
                </div>
                <div className="text-2xl text-purple-300">→</div>
                <div className="flex-1">
                  <div className="text-3xl mb-2">💾</div>
                  <div className="text-sm text-white font-semibold">Update State</div>
                </div>
                <div className="text-2xl text-purple-300">→</div>
                <div className="flex-1">
                  <div className="text-3xl mb-2">🎨</div>
                  <div className="text-sm text-white font-semibold">UI Updates</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
            <h3 className="text-xl font-bold text-yellow-300 mb-4">🚀 Best Practices for Forms</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3 text-white/90 text-sm">
                <div>• <strong>Always use controlled inputs</strong> - predictable and testable</div>
                <div>• <strong>Validate on change</strong> - give immediate feedback to users</div>
                <div>• <strong>Handle edge cases</strong> - empty strings, special characters, max lengths</div>
                <div>• <strong>Provide clear error messages</strong> - tell users exactly what's wrong</div>
              </div>
              <div className="space-y-3 text-white/90 text-sm">
                <div>• <strong>Use semantic HTML</strong> - proper input types, labels, and ARIA attributes</div>
                <div>• <strong>Debounce expensive operations</strong> - API calls, complex validations</div>
                <div>• <strong>Reset forms after submission</strong> - clear state for next use</div>
                <div>• <strong>Disable submit during processing</strong> - prevent double submissions</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-4">Interactive Demo</h2>
              <p className="text-xl text-white/80">Try it yourself!</p>
            </div>
            <ControlledFormsDemo />
          </div>
        </div>
      )
    },

    // Integration slide
    {
      id: 'putting-it-all-together',
      title: 'Putting It All Together',
      bgGradient: 'from-indigo-500 to-purple-600',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <div className="text-8xl mb-6 animate-float">🎯</div>
            <h2 className="text-5xl font-bold text-white mb-4">Putting It All Together</h2>
            <p className="text-xl text-white/80">The 5 concepts working in harmony</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/30 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <div className="text-xl font-bold text-blue-300 mb-2">Event Handling</div>
              <div className="text-white/80">User actions trigger functions</div>
            </div>
            
            <div className="bg-green-500/20 rounded-xl p-6 border border-green-400/30 text-center">
              <div className="text-4xl mb-4">🚦</div>
              <div className="text-xl font-bold text-green-300 mb-2">Conditional Rendering</div>
              <div className="text-white/80">UI changes based on state</div>
            </div>
            
            <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-400/30 text-center">
              <div className="text-4xl mb-4">📝</div>
              <div className="text-xl font-bold text-purple-300 mb-2">List Rendering</div>
              <div className="text-white/80">Dynamic content from data</div>
            </div>
            
            <div className="bg-orange-500/20 rounded-xl p-6 border border-orange-400/30 text-center">
              <div className="text-4xl mb-4">🔔</div>
              <div className="text-xl font-bold text-orange-300 mb-2">Function Props</div>
              <div className="text-white/80">Child-parent communication</div>
            </div>
            
            <div className="bg-teal-500/20 rounded-xl p-6 border border-teal-400/30 text-center">
              <div className="text-4xl mb-4">📋</div>
              <div className="text-xl font-bold text-teal-300 mb-2">Controlled Forms</div>
              <div className="text-white/80">Predictable input handling</div>
            </div>
            
            <div className="bg-pink-500/20 rounded-xl p-6 border border-pink-400/30 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <div className="text-xl font-bold text-pink-300 mb-2">Interactive Apps</div>
              <div className="text-white/80">All concepts combined!</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-xl p-8 border border-indigo-400/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Real App Example: Todo List</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="text-lg font-bold text-white">Uses ALL 5 concepts:</div>
                <div className="space-y-2 text-white/90">
                  <div>• <strong>Events:</strong> Add, toggle, delete buttons</div>
                  <div>• <strong>Conditional:</strong> Show empty state vs todo list</div>
                  <div>• <strong>Lists:</strong> Map over todos array</div>
                  <div>• <strong>Functions:</strong> Child todos call parent functions</div>
                  <div>• <strong>Forms:</strong> Controlled input for new todos</div>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-indigo-300 font-bold mb-2">Architecture Pattern:</div>
                <div className="text-sm text-white/80 space-y-1">
                  <div>1. State lives in parent component</div>
                  <div>2. Pass data down as props</div>
                  <div>3. Pass functions down as props</div>
                  <div>4. Children call functions on events</div>
                  <div>5. State updates trigger re-renders</div>
                  <div>6. UI reflects new state</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Best Practices slide
    {
      id: 'best-practices',
      title: 'Best Practices & Common Pitfalls',
      bgGradient: 'from-yellow-500 to-orange-600',
      content: (
        <div className="space-y-8">
          <div className="text-center mb-12">
            <div className="text-8xl mb-6 animate-float">💡</div>
            <h2 className="text-5xl font-bold text-white mb-4">Best Practices & Common Pitfalls</h2>
            <p className="text-xl text-white/80">Learn from common mistakes</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Best Practices */}
            <div className="space-y-6">
              <div className="bg-green-500/20 rounded-xl p-6 border border-green-400/30">
                <h3 className="text-2xl font-bold text-green-300 mb-4">✅ Best Practices</h3>
                <div className="space-y-4 text-white/90">
                  <div>
                    <div className="font-bold text-green-300">Event Handler Naming:</div>
                    <div className="text-sm">Use <code>handleClick</code> for your function, <code>onClick</code> for the prop</div>
                  </div>
                  <div>
                    <div className="font-bold text-green-300">Key Props:</div>
                    <div className="text-sm">Use unique IDs, not array indexes: <code>key={`{item.id}`}</code></div>
                  </div>
                  <div>
                    <div className="font-bold text-green-300">State Location:</div>
                    <div className="text-sm">Keep state as close to where it's used as possible</div>
                  </div>
                  <div>
                    <div className="font-bold text-green-300">Function Props:</div>
                    <div className="text-sm">Name them with "on" prefix: <code>onAddItem</code>, <code>onDeleteItem</code></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Common Pitfalls */}
            <div className="space-y-6">
              <div className="bg-red-500/20 rounded-xl p-6 border border-red-400/30">
                <h3 className="text-2xl font-bold text-red-300 mb-4">❌ Common Pitfalls</h3>
                <div className="space-y-4 text-white/90">
                  <div>
                    <div className="font-bold text-red-300">Calling Functions in JSX:</div>
                    <div className="text-sm">Use <code>onClick={`{handleClick}`}</code>, not <code>onClick={`{handleClick()}`}</code></div>
                  </div>
                  <div>
                    <div className="font-bold text-red-300">Mutating State:</div>
                    <div className="text-sm">Don't modify arrays/objects directly. Use spread operator or methods like <code>filter</code></div>
                  </div>
                  <div>
                    <div className="font-bold text-red-300">Missing Keys:</div>
                    <div className="text-sm">Always provide <code>key</code> prop when rendering lists</div>
                  </div>
                  <div>
                    <div className="font-bold text-red-300">Uncontrolled Inputs:</div>
                    <div className="text-sm">Always use <code>value</code> and <code>onChange</code> together</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/30">
              <h3 className="text-xl font-bold text-blue-300 mb-4">🚀 Performance Tips</h3>
              <div className="space-y-2 text-white/90 text-sm">
                <div>• Debounce form inputs for expensive operations</div>
                <div>• Use functional state updates for complex state</div>
                <div>• Keep components small and focused</div>
                <div>• Avoid creating functions inside JSX</div>
              </div>
            </div>
            
            <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-400/30">
              <h3 className="text-xl font-bold text-purple-300 mb-4">🔍 Debugging Tips</h3>
              <div className="space-y-2 text-white/90 text-sm">
                <div>• Use React Developer Tools browser extension</div>
                <div>• Add <code>console.log</code> in event handlers</div>
                <div>• Check if functions are being called</div>
                <div>• Verify state updates in React DevTools</div>
              </div>
            </div>
          </div>
        </div>
      )
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
    }
  ];

  // Scroll handling for slide tracking
  useEffect(() => {
    const handleScroll = () => {
      const slideElements = document.querySelectorAll('[data-slide-index]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      slideElements.forEach((element, index) => {
        const elementTop = element.offsetTop;
        const elementBottom = elementTop + element.offsetHeight;

        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          setCurrentSlide(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

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

export default Class7Slides; 