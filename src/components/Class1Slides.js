import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Interactive Social Media Demo Component
const InteractiveSocialMediaDemo = () => {
  const [activeStep, setActiveStep] = useState(null);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [likes, setLikes] = useState(42);
  const [comments, setComments] = useState([
    { user: 'Sarah Chen', text: 'Amazing shot! 📸', time: '2m' },
    { user: 'Mike Johnson', text: 'Love the colors!', time: '5m' }
  ]);
  const [isLiked, setIsLiked] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [dataFlow, setDataFlow] = useState('');

  const simulateFlow = async (action, steps) => {
    if (isProcessing) return;
    
    setIsProcessing(true);
    setActiveStep(action);
    setCurrentStepIndex(-1);
    setDataFlow('');
    
    for (let i = 0; i < steps.length; i++) {
      setCurrentStepIndex(i);
      setDataFlow(steps[i].data || '');
      await new Promise(resolve => setTimeout(resolve, 1500)); // Slower: 1.5s per step
    }
    
    // Final update after animation
    setTimeout(() => {
      if (action === 'like') {
        setIsLiked(!isLiked);
        setLikes(prev => isLiked ? prev - 1 : prev + 1);
      } else if (action === 'comment' && newComment.trim()) {
        setComments(prev => [{
          user: 'You',
          text: newComment,
          time: 'now'
        }, ...prev]);
        setNewComment('');
      }
      
      setActiveStep(null);
      setCurrentStepIndex(-1);
      setIsProcessing(false);
      setDataFlow('');
    }, 1000);
  };

  const handleLike = () => {
    const steps = [
      { 
        step: 1, 
        layer: 'frontend', 
        title: 'User Interaction',
        description: 'User clicks like button',
        data: '{ action: "like", postId: 123 }'
      },
      { 
        step: 2, 
        layer: 'frontend', 
        title: 'API Request',
        description: 'Frontend sends HTTP request',
        data: 'PATCH /api/posts/123/like\nHeaders: { Authorization: "Bearer jwt..." }'
      },
      { 
        step: 3, 
        layer: 'backend', 
        title: 'Authentication',
        description: 'Server verifies JWT token',
        data: 'JWT decoded → userId: 456'
      },
      { 
        step: 4, 
        layer: 'backend', 
        title: 'Business Logic',
        description: 'Process like/unlike logic',
        data: 'Current likes: 42 → New likes: 43'
      },
      { 
        step: 5, 
        layer: 'database', 
        title: 'Database Update',
        description: 'Update post in MongoDB',
        data: 'db.posts.updateOne(\n  { _id: 123 },\n  { $inc: { likes: 1 } }\n)'
      },
      { 
        step: 6, 
        layer: 'backend', 
        title: 'Response',
        description: 'Send updated data back',
        data: '{ success: true, likes: 43 }'
      },
      { 
        step: 7, 
        layer: 'frontend', 
        title: 'UI Update',
        description: 'Update React component state',
        data: 'setState({ likes: 43, isLiked: true })'
      }
    ];
    
    simulateFlow('like', steps);
  };

  const handleComment = () => {
    if (!newComment.trim()) return;
    
    const steps = [
      { 
        step: 1, 
        layer: 'frontend', 
        title: 'Form Submission',
        description: 'User submits comment form',
        data: `{ text: "${newComment}", postId: 123 }`
      },
      { 
        step: 2, 
        layer: 'frontend', 
        title: 'API Request',
        description: 'POST request to server',
        data: 'POST /api/posts/123/comments\nBody: { text: "' + newComment + '" }'
      },
      { 
        step: 3, 
        layer: 'backend', 
        title: 'Validation',
        description: 'Validate user and input',
        data: 'Auth: ✓ Valid\nText: ✓ Not empty\nLength: ✓ < 500 chars'
      },
      { 
        step: 4, 
        layer: 'database', 
        title: 'Save Comment',
        description: 'Add to comments collection',
        data: 'db.comments.insertOne({\n  postId: 123,\n  userId: 456,\n  text: "' + newComment + '",\n  createdAt: new Date()\n})'
      },
      { 
        step: 5, 
        layer: 'backend', 
        title: 'Response',
        description: 'Return new comment data',
        data: '{ id: 789, user: "You", text: "' + newComment + '", time: "now" }'
      },
      { 
        step: 6, 
        layer: 'frontend', 
        title: 'UI Update',
        description: 'Add comment to display',
        data: 'comments.unshift(newComment)'
      }
    ];
    
    simulateFlow('comment', steps);
  };

  const handleShare = () => {
    const steps = [
      { 
        step: 1, 
        layer: 'frontend', 
        title: 'Share Action',
        description: 'User clicks share button',
        data: '{ action: "share", postId: 123 }'
      },
      { 
        step: 2, 
        layer: 'backend', 
        title: 'Generate Link',
        description: 'Create shareable URL',
        data: 'https://app.com/posts/123?share=true'
      },
      { 
        step: 3, 
        layer: 'database', 
        title: 'Analytics',
        description: 'Log share event',
        data: 'db.analytics.insertOne({\n  event: "share",\n  postId: 123,\n  userId: 456\n})'
      },
      { 
        step: 4, 
        layer: 'frontend', 
        title: 'Copy to Clipboard',
        description: 'Link copied successfully',
        data: 'navigator.clipboard.writeText(shareUrl)'
      }
    ];
    
    simulateFlow('share', steps);
  };

  const getLayerColor = (layer) => {
    switch (layer) {
      case 'frontend': return 'bg-green-500';
      case 'backend': return 'bg-orange-500';
      case 'database': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const steps = [
    { step: 1, layer: 'frontend', title: 'User Interaction', description: 'User clicks like button' },
    { step: 2, layer: 'frontend', title: 'API Request', description: 'Frontend sends HTTP request' },
    { step: 3, layer: 'backend', title: 'Authentication', description: 'Server verifies JWT token' },
    { step: 4, layer: 'backend', title: 'Business Logic', description: 'Process like/unlike logic' },
    { step: 5, layer: 'database', title: 'Database Update', description: 'Update post in MongoDB' },
    { step: 6, layer: 'backend', title: 'Response', description: 'Send updated data back' },
    { step: 7, layer: 'frontend', title: 'UI Update', description: 'Update React component state' }
  ];

  return (
    <div className="space-y-8">
      {/* Mock Social Media Post */}
      <div className="bg-white rounded-xl p-6 max-w-md mx-auto shadow-lg">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
            AC
          </div>
          <div>
            <div className="font-semibold text-gray-800">Alex Chen</div>
            <div className="text-sm text-gray-500">2 hours ago</div>
          </div>
        </div>
        
        <p className="text-gray-800 mb-4">
          Beautiful sunset at the beach today! 🌅 Perfect end to a perfect day.
        </p>
        
        <div className="bg-gradient-to-r from-orange-400 to-pink-500 h-48 rounded-lg mb-4 flex items-center justify-center text-white font-bold text-lg">
          🌅 Beach Sunset Photo
        </div>
        
        <div className="flex items-center justify-between text-gray-600 border-t pt-4">
          <button 
            onClick={handleLike}
            disabled={isProcessing}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-100 disabled:opacity-50 ${
              isLiked ? 'text-red-500' : 'text-gray-600'
            }`}
          >
            <span className="text-lg">{isLiked ? '❤️' : '🤍'}</span>
            <span>{likes}</span>
          </button>
          
          <button 
            onClick={() => document.getElementById('comment-input').focus()}
            disabled={isProcessing}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
          >
            <span className="text-lg">💬</span>
            <span>{comments.length}</span>
          </button>
          
          <button 
            onClick={handleShare}
            disabled={isProcessing}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50"
          >
            <span className="text-lg">🔗</span>
            <span>Share</span>
          </button>
        </div>
        
        {/* Comments Section */}
        <div className="mt-4 space-y-3 max-h-32 overflow-y-auto">
          {comments.map((comment, index) => (
            <div key={index} className="flex space-x-2 text-sm">
              <span className="font-semibold text-gray-800">{comment.user}</span>
              <span className="text-gray-600">{comment.text}</span>
              <span className="text-gray-400 text-xs">{comment.time}</span>
            </div>
          ))}
        </div>
        
        {/* Comment Input */}
        <div className="mt-4 flex space-x-2">
          <input
            id="comment-input"
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            disabled={isProcessing}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 disabled:opacity-50"
            onKeyPress={(e) => e.key === 'Enter' && !isProcessing && handleComment()}
          />
          <button
            onClick={handleComment}
            disabled={!newComment.trim() || isProcessing}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Post
          </button>
        </div>
      </div>

      {/* Flow Diagram */}
      <div className="bg-gray-900/50 rounded-xl p-8 relative overflow-hidden">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">Data Flow Visualization</h3>
          <p className="text-gray-300">Click any action above to see the complete pipeline</p>
        </div>

        {/* Architecture Layers */}
        <div className="grid grid-cols-3 gap-8 mb-8">
          {/* Frontend Layer */}
          <div className={`bg-green-500/20 border-2 rounded-xl p-6 transition-all duration-500 ${
            activeStep && ['frontend'].includes(steps[currentStepIndex]?.layer) 
              ? 'border-green-400 bg-green-500/30 shadow-lg shadow-green-500/20' 
              : 'border-green-500/30'
          }`}>
            <div className="text-center">
              <div className="text-4xl mb-3">🎨</div>
              <div className="text-white font-bold text-lg">Frontend</div>
              <div className="text-green-200 text-sm">React Application</div>
            </div>
          </div>

          {/* Backend Layer */}
          <div className={`bg-orange-500/20 border-2 rounded-xl p-6 transition-all duration-500 ${
            activeStep && ['backend'].includes(steps[currentStepIndex]?.layer) 
              ? 'border-orange-400 bg-orange-500/30 shadow-lg shadow-orange-500/20' 
              : 'border-orange-500/30'
          }`}>
            <div className="text-center">
              <div className="text-4xl mb-3">⚙️</div>
              <div className="text-white font-bold text-lg">Backend</div>
              <div className="text-orange-200 text-sm">Express.js Server</div>
            </div>
          </div>

          {/* Database Layer */}
          <div className={`bg-purple-500/20 border-2 rounded-xl p-6 transition-all duration-500 ${
            activeStep && ['database'].includes(steps[currentStepIndex]?.layer) 
              ? 'border-purple-400 bg-purple-500/30 shadow-lg shadow-purple-500/20' 
              : 'border-purple-500/30'
          }`}>
            <div className="text-center">
              <div className="text-4xl mb-3">🗄️</div>
              <div className="text-white font-bold text-lg">Database</div>
              <div className="text-purple-200 text-sm">MongoDB</div>
            </div>
          </div>
        </div>

        {/* Current Step Display */}
        {activeStep && currentStepIndex >= 0 && (
          <div className="mb-8">
            <div className="text-center mb-4">
              <div className="inline-flex items-center space-x-4 bg-gray-800 rounded-lg px-6 py-4">
                <div className={`w-4 h-4 rounded-full ${getLayerColor(steps[currentStepIndex]?.layer)}`}></div>
                <div className="text-white">
                  <div className="font-bold">Step {currentStepIndex + 1}: {steps[currentStepIndex]?.title}</div>
                  <div className="text-sm text-gray-300">{steps[currentStepIndex]?.description}</div>
                </div>
              </div>
            </div>

            {/* Data Flow */}
            {dataFlow && (
              <div className="bg-gray-800 rounded-lg p-4 mx-auto max-w-lg">
                <div className="text-gray-400 text-xs mb-2">Data:</div>
                <pre className="text-green-300 text-sm font-mono whitespace-pre-wrap">{dataFlow}</pre>
              </div>
            )}
          </div>
        )}

        {/* Flow Steps Timeline */}
        {activeStep && (
          <div className="space-y-4">
            <div className="text-center text-white font-semibold mb-4">Request Flow Timeline</div>
            <div className="flex flex-wrap justify-center gap-2">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className={`
                    w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500
                    ${index <= currentStepIndex 
                      ? `${getLayerColor(step.layer)} text-white shadow-lg` 
                      : 'bg-gray-600 text-gray-400'
                    }
                  `}>
                    {step.step}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-8 h-0.5 transition-all duration-500 ${
                      index < currentStepIndex ? 'bg-blue-400' : 'bg-gray-600'
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Instructions */}
        {!activeStep && (
          <div className="text-center text-blue-200 mt-8">
            <div className="text-lg font-semibold mb-2">👆 Try the Interactive Demo!</div>
            <div className="text-sm">Click Like ❤️, Comment 💬, or Share 🔗 to see the data flow in action</div>
          </div>
        )}
      </div>
    </div>
  );
};

const Class1Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slide content data
  const slides = [
    {
      id: 'welcome',
      title: 'Welcome to CS390',
      subtitle: 'Web Application Programming',
      content: (
        <div className="text-center space-y-8">
          <div className="text-6xl mb-8">🌐</div>
          <h1 className="text-5xl font-bold text-white mb-4">
            CS390 Web Application Programming
          </h1>
          <p className="text-2xl text-blue-100 mb-8">
            Class 1: Course Introduction & Environment Setup
          </p>
          <div className="text-lg text-blue-200">
            12 weeks • 24 classes • Full-Stack MERN Development
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-purple-700'
    },
    {
      id: 'overview',
      title: 'Course Overview',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">What We'll Build Together</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-white mb-2">Frontend Skills</h3>
              <ul className="text-blue-100 space-y-2">
                <li>• React.js for dynamic UIs</li>
                <li>• Modern JavaScript (ES6+)</li>
                <li>• Tailwind CSS for styling</li>
                <li>• Single Page Applications</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-3xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Backend Skills</h3>
              <ul className="text-blue-100 space-y-2">
                <li>• Node.js server development</li>
                <li>• Express.js web framework</li>
                <li>• MongoDB database</li>
                <li>• RESTful API design</li>
              </ul>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-blue-700'
    },
    {
      id: 'journey',
      title: 'The Learning Journey',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">From Zero to Full-Stack</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/30"></div>
            <div className="space-y-6">
              {[
                { week: '1-2', title: 'Setup & Web Fundamentals', icon: '🔧' },
                { week: '3-4', title: 'React & Modern JavaScript', icon: '⚛️' },
                { week: '5-6', title: 'Backend with Node.js', icon: '🖥️' },
                { week: '7-8', title: 'Database & Authentication', icon: '🔐' },
                { week: '9-10', title: 'Full-Stack Integration', icon: '🌐' },
                { week: '11-12', title: 'Capstone Project', icon: '🚀' }
              ].map((phase, index) => (
                <div key={index} className="relative flex items-center pl-16">
                  <div className="absolute left-6 w-4 h-4 bg-white rounded-full"></div>
                  <div className="bg-white/10 backdrop-blur rounded-lg p-4 flex-1">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{phase.icon}</span>
                      <div>
                        <div className="text-white font-semibold">Week {phase.week}</div>
                        <div className="text-blue-100">{phase.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-indigo-700'
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Frontend Development</h2>
          <p className="text-2xl text-green-100 text-center mb-12">What users see and interact with</p>
          
          {/* Main Frontend Card */}
          <div className="max-w-4xl mx-auto">
            <div className="group bg-green-500/20 backdrop-blur rounded-xl p-12 border border-green-400/30 
                          hover:bg-green-500/30 hover:border-green-300/50 hover:scale-105 
                          transition-all duration-500 cursor-pointer relative overflow-hidden">
              
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-8 left-8 w-3 h-3 bg-green-300 rounded-full animate-ping"></div>
                <div className="absolute top-16 right-12 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-12 left-20 w-2.5 h-2.5 bg-green-200 rounded-full animate-bounce"></div>
                <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-green-300 rounded-full animate-ping"></div>
                <div className="absolute bottom-1/4 right-8 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
              </div>

              <div className="text-center mb-8 relative z-10">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🎨</div>
                <h3 className="text-3xl font-bold text-white group-hover:text-green-100 transition-colors mb-4">Frontend</h3>
                <p className="text-xl text-green-100 group-hover:text-green-50 transition-colors">The visual and interactive layer of web applications</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Core Responsibilities:</h4>
                  <ul className="space-y-4 text-green-100">
                    {[
                      { icon: '✨', text: 'User Interface (UI) Design', desc: 'Buttons, forms, navigation, layouts' },
                      { icon: '🎯', text: 'User Experience (UX)', desc: 'Intuitive interactions and workflows' },
                      { icon: '📱', text: 'Responsive Design', desc: 'Works on desktop, tablet, and mobile' },
                      { icon: '⚡', text: 'Interactive Features', desc: 'Animations, real-time updates' }
                    ].map((item, index) => (
                      <li key={index} 
                          className="group-hover:translate-x-2 transition-transform duration-300 
                                   hover:text-white hover:scale-105 cursor-pointer p-2 rounded-lg hover:bg-white/10"
                          style={{ transitionDelay: `${index * 100}ms` }}>
                        <div className="flex items-start">
                          <span className="mr-3 text-2xl group-hover:animate-bounce">{item.icon}</span>
                          <div>
                            <div className="font-semibold">{item.text}</div>
                            <div className="text-sm text-green-200">{item.desc}</div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Technologies You'll Learn:</h4>
                  <div className="space-y-4">
                    {[
                      { name: 'HTML', desc: 'Structure and content markup', icon: '🏗️' },
                      { name: 'CSS', desc: 'Styling and visual design', icon: '🎨' },
                      { name: 'JavaScript', desc: 'Interactivity and logic', icon: '⚡' },
                      { name: 'React.js', desc: 'Component-based UI framework', icon: '⚛️' },
                      { name: 'Tailwind CSS', desc: 'Utility-first styling', icon: '🌈' }
                    ].map((tech, index) => (
                      <div key={index} 
                           className="bg-green-400/10 rounded-lg p-3 hover:bg-green-400/20 transition-colors cursor-pointer
                                    transform hover:scale-105 duration-300"
                           style={{ transitionDelay: `${index * 100}ms` }}>
                        <div className="flex items-center space-x-3">
                          <span className="text-xl">{tech.icon}</span>
                          <div>
                            <div className="font-semibold text-white">{tech.name}</div>
                            <div className="text-sm text-green-200">{tech.desc}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Example showcase */}
              <div className="mt-8 p-6 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 
                            transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 relative z-10">
                <h4 className="text-lg font-semibold text-white mb-3">Frontend in Action:</h4>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-green-400 text-sm mb-2">What users experience:</div>
                  <div className="text-white text-sm space-y-1">
                    <div>👆 <strong>Click</strong> a button → Instant visual feedback</div>
                    <div>📝 <strong>Fill</strong> a form → Real-time validation</div>
                    <div>📱 <strong>Resize</strong> window → Layout adapts automatically</div>
                    <div>✨ <strong>Hover</strong> elements → Smooth animations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual example */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur rounded-xl p-8 border border-white/20 max-w-3xl mx-auto">
              <div className="text-white text-xl mb-4">🌟 Think of Frontend Like...</div>
              <div className="text-green-100 text-lg">
                The <strong>storefront</strong> of a business - it's what customers see, touch, and interact with. 
                Just like how a beautiful store layout guides customers and makes shopping enjoyable!
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-teal-700'
    },
    {
      id: 'backend',
      title: 'Backend Development',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Backend Development</h2>
          <p className="text-2xl text-orange-100 text-center mb-12">Server logic and data management</p>
          
          {/* Main Backend Card */}
          <div className="max-w-4xl mx-auto">
            <div className="group bg-orange-500/20 backdrop-blur rounded-xl p-12 border border-orange-400/30 
                          hover:bg-orange-500/30 hover:border-orange-300/50 hover:scale-105 
                          transition-all duration-500 cursor-pointer relative overflow-hidden">
              
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-12 right-12 w-3 h-3 bg-orange-300 rounded-full animate-ping"></div>
                <div className="absolute top-20 left-16 w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-16 right-20 w-2.5 h-2.5 bg-orange-200 rounded-full animate-bounce"></div>
                <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 bg-orange-300 rounded-full animate-ping"></div>
                <div className="absolute bottom-1/3 left-12 w-1 h-1 bg-orange-400 rounded-full animate-pulse"></div>
              </div>

              <div className="text-center mb-8 relative z-10">
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">⚙️</div>
                <h3 className="text-3xl font-bold text-white group-hover:text-orange-100 transition-colors mb-4">Backend</h3>
                <p className="text-xl text-orange-100 group-hover:text-orange-50 transition-colors">The engine that powers web applications behind the scenes</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Core Responsibilities:</h4>
                  <ul className="space-y-4 text-orange-100">
                    {[
                      { icon: '🗄️', text: 'Database Operations', desc: 'Store, retrieve, and manage data' },
                      { icon: '🔐', text: 'Authentication', desc: 'User login, security, permissions' },
                      { icon: '📡', text: 'API Endpoints', desc: 'Routes for frontend communication' },
                      { icon: '🔒', text: 'Business Logic', desc: 'Rules, calculations, workflows' }
                    ].map((item, index) => (
                      <li key={index} 
                          className="group-hover:translate-x-2 transition-transform duration-300 
                                   hover:text-white hover:scale-105 cursor-pointer p-2 rounded-lg hover:bg-white/10"
                          style={{ transitionDelay: `${index * 100}ms` }}>
                        <div className="flex items-start">
                          <span className="mr-3 text-2xl group-hover:animate-bounce">{item.icon}</span>
                          <div>
                            <div className="font-semibold">{item.text}</div>
                            <div className="text-sm text-orange-200">{item.desc}</div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">Technologies You'll Learn:</h4>
                  <div className="space-y-4">
                    {[
                      { name: 'Node.js', desc: 'JavaScript runtime for servers', icon: '🟢' },
                      { name: 'Express.js', desc: 'Web framework for APIs', icon: '🚂' },
                      { name: 'MongoDB', desc: 'NoSQL database for data storage', icon: '🗄️' },
                      { name: 'REST APIs', desc: 'Communication protocols', icon: '📡' },
                      { name: 'JWT Auth', desc: 'Secure user authentication', icon: '🔐' }
                    ].map((tech, index) => (
                      <div key={index} 
                           className="bg-orange-400/10 rounded-lg p-3 hover:bg-orange-400/20 transition-colors cursor-pointer
                                    transform hover:scale-105 duration-300"
                           style={{ transitionDelay: `${index * 100}ms` }}>
                        <div className="flex items-center space-x-3">
                          <span className="text-xl">{tech.icon}</span>
                          <div>
                            <div className="font-semibold text-white">{tech.name}</div>
                            <div className="text-sm text-orange-200">{tech.desc}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Example showcase */}
              <div className="mt-8 p-6 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 
                            transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 relative z-10">
                <h4 className="text-lg font-semibold text-white mb-3">Backend in Action:</h4>
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <div className="text-orange-400 text-sm mb-2">What happens behind the scenes:</div>
                  <div className="text-white text-sm space-y-1">
                    <div>📥 <strong>Receive</strong> request → Validate user input</div>
                    <div>🗄️ <strong>Query</strong> database → Fetch or update data</div>
                    <div>🔒 <strong>Process</strong> logic → Apply business rules</div>
                    <div>📤 <strong>Send</strong> response → Return data to frontend</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual example */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur rounded-xl p-8 border border-white/20 max-w-3xl mx-auto">
              <div className="text-white text-xl mb-4">🏭 Think of Backend Like...</div>
              <div className="text-orange-100 text-lg">
                The <strong>warehouse and management system</strong> of a business - handling inventory, 
                processing orders, managing accounts, and keeping everything running smoothly behind the scenes!
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-orange-600 to-red-700'
    },
    {
      id: 'frontend-backend-connection',
      title: 'How They Work Together',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Frontend ↔ Backend Connection</h2>
          
          {/* Interactive workflow demonstration */}
          <div className="bg-white/10 backdrop-blur rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">The Complete Web Application Flow</h3>
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-8">
              
              {/* User */}
              <div className="text-center">
                <div className="bg-blue-500/20 rounded-full p-6 mb-3 hover:bg-blue-500/30 transition-colors cursor-pointer hover:scale-110 transform duration-300">
                  <span className="text-4xl">👤</span>
                </div>
                <div className="text-white font-semibold">User</div>
                <div className="text-blue-200 text-xs">Interacts with app</div>
              </div>

              {/* Arrow 1 */}
              <div className="hidden lg:block">
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex items-center space-x-2 animate-pulse">
                    <span className="text-green-400 text-2xl">→</span>
                  </div>
                  <span className="text-xs text-green-300">clicks/types</span>
                </div>
              </div>

              {/* Frontend */}
              <div className="text-center group cursor-pointer">
                <div className="bg-green-500/20 rounded-full p-6 mb-3 group-hover:bg-green-500/30 
                              transition-colors group-hover:scale-110 transform duration-300">
                  <span className="text-4xl">🎨</span>
                </div>
                <div className="text-white font-semibold group-hover:text-green-200 transition-colors">Frontend</div>
                <div className="text-green-200 text-xs">User interface</div>
              </div>

              {/* Arrow 2 */}
              <div className="hidden lg:block">
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex items-center space-x-2 animate-pulse">
                    <span className="text-orange-400 text-2xl">→</span>
                  </div>
                  <span className="text-xs text-orange-300">HTTP request</span>
                </div>
              </div>

              {/* Backend */}
              <div className="text-center group cursor-pointer">
                <div className="bg-orange-500/20 rounded-full p-6 mb-3 group-hover:bg-orange-500/30 
                              transition-colors group-hover:scale-110 transform duration-300">
                  <span className="text-4xl">⚙️</span>
                </div>
                <div className="text-white font-semibold group-hover:text-orange-200 transition-colors">Backend</div>
                <div className="text-orange-200 text-xs">Server logic</div>
              </div>

              {/* Arrow 3 */}
              <div className="hidden lg:block">
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex items-center space-x-2 animate-pulse">
                    <span className="text-purple-400 text-2xl">→</span>
                  </div>
                  <span className="text-xs text-purple-300">queries</span>
                </div>
              </div>

              {/* Database */}
              <div className="text-center">
                <div className="bg-purple-500/20 rounded-full p-6 mb-3 hover:bg-purple-500/30 transition-colors cursor-pointer hover:scale-110 transform duration-300">
                  <span className="text-4xl">🗄️</span>
                </div>
                <div className="text-white font-semibold">Database</div>
                <div className="text-purple-200 text-xs">Data storage</div>
              </div>
            </div>

            {/* Real-world example */}
            <div className="mt-12 text-center">
              <div className="bg-gray-800/50 rounded-lg p-6 text-left max-w-6xl mx-auto">
                <div className="text-center mb-6">
                  <div className="text-blue-400 text-lg font-semibold mb-2">Interactive Demo: Social Media Post</div>
                  <div className="text-gray-300 text-sm">Click the buttons below and watch the frontend → backend → database pipeline in action!</div>
                </div>
                
                {/* Interactive Demo */}
                <InteractiveSocialMediaDemo />
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-green-500/20 via-blue-500/20 to-orange-500/20 backdrop-blur rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
              <div className="text-white text-2xl mb-4">🎯 Your Journey in This Course</div>
              <div className="text-white/90 text-lg mb-6">
                You'll master <strong>both frontend and backend</strong> development, learning how to build complete, 
                full-stack web applications from scratch!
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-green-300 font-semibold mb-2">Weeks 1-4</div>
                  <div className="text-white">Frontend Foundations</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-orange-300 font-semibold mb-2">Weeks 5-8</div>
                  <div className="text-white">Backend Development</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-blue-300 font-semibold mb-2">Weeks 9-12</div>
                  <div className="text-white">Full-Stack Integration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 via-purple-600 to-pink-600'
    },
    {
      id: 'environment-setup',
      title: 'Development Environment',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">Setting Up Your Toolkit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Node.js',
                icon: '🟢',
                description: 'JavaScript runtime for backend development',
                version: 'v18+ recommended',
                action: 'Download from nodejs.org'
              },
              {
                name: 'VS Code',
                icon: '💙',
                description: 'Code editor with excellent JavaScript support',
                version: 'Latest version',
                action: 'Download from code.visualstudio.com'
              },
              {
                name: 'Terminal/CLI',
                icon: '⌨️',
                description: 'Command line interface for project navigation',
                version: 'Built into your OS',
                action: 'Learn basic commands'
              }
            ].map((tool, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl mb-4">{tool.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{tool.name}</h3>
                <p className="text-blue-100 text-sm mb-3">{tool.description}</p>
                <div className="text-xs text-blue-200 mb-3">{tool.version}</div>
                <div className="bg-white/20 rounded-lg p-2 text-sm text-white">
                  {tool.action}
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
      bgGradient: 'from-teal-600 to-blue-700'
    },
    {
      id: 'cli-commands',
      title: 'Essential CLI Commands',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">Command Line Basics</h2>
          <div className="bg-gray-900/50 backdrop-blur rounded-xl p-8">
            <div className="space-y-6">
              {[
                { command: 'pwd', description: 'Show current directory path' },
                { command: 'ls', description: 'List files and folders (macOS/Linux)' },
                { command: 'dir', description: 'List files and folders (Windows)' },
                { command: 'cd foldername', description: 'Change to a directory' },
                { command: 'cd ..', description: 'Go up one directory level' },
                { command: 'mkdir newfolder', description: 'Create a new directory' },
                { command: 'node --version', description: 'Check Node.js version' },
                { command: 'npm --version', description: 'Check npm version' }
              ].map((cmd, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-blue-500 text-white px-3 py-1 rounded font-mono text-sm min-w-[140px]">
                    {cmd.command}
                  </div>
                  <div className="text-gray-300">{cmd.description}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-xl p-6">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">💡</span>
              <span className="text-yellow-100">
                <strong>Pro Tip:</strong> Practice these commands now - they'll be essential throughout the course!
              </span>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-gray-700 to-blue-800'
    },
    {
      id: 'first-nodejs',
      title: 'Your First Node.js Script',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">Hello World in Node.js</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gray-900/70 rounded-xl p-6">
                <div className="text-green-400 text-sm mb-2">hello.js</div>
                <pre className="text-white font-mono text-lg">
{`// Your first Node.js script
console.log("Hello, World!");
console.log("Welcome to CS390!");

// Show current date
const now = new Date();
console.log("Today is:", now.toDateString());`}
                </pre>
              </div>
              <div className="bg-gray-900/70 rounded-xl p-6">
                <div className="text-blue-400 text-sm mb-2">Terminal</div>
                <pre className="text-green-300 font-mono">
{`$ node hello.js
Hello, World!
Welcome to CS390!
Today is: Mon Dec 09 2024`}
                </pre>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Let's Try It!</h3>
              <ol className="space-y-4 text-blue-100">
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                  Create a new file called <code className="bg-white/20 px-2 py-1 rounded">hello.js</code>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                  Copy the code from the left panel
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                  Open your terminal in the same folder
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                  Run <code className="bg-white/20 px-2 py-1 rounded">node hello.js</code>
                </li>
              </ol>
              <div className="bg-green-500/20 border border-green-400/30 rounded-xl p-4">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🎉</span>
                  <span className="text-green-100">Congratulations! You've run your first Node.js program!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-800 to-purple-700'
    },
    {
      id: 'learning-objectives',
      title: 'Today\'s Learning Objectives',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">What We Accomplished Today</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: '📋',
                title: 'Course Overview',
                description: 'Reviewed syllabus and final project expectations'
              },
              {
                icon: '🔧',
                title: 'Environment Setup',
                description: 'Installed Node.js, VS Code, and learned CLI basics'
              },
              {
                icon: '⌨️',
                title: 'CLI Navigation',
                description: 'Practiced essential terminal commands'
              },
              {
                icon: '🟢',
                title: 'First Node.js Script',
                description: 'Created and ran our first JavaScript program with Node.js'
              }
            ].map((objective, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{objective.icon}</div>
                  <h3 className="text-xl font-bold text-white">{objective.title}</h3>
                </div>
                <p className="text-blue-100 text-center">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      ),
      bgGradient: 'from-emerald-600 to-teal-700'
    },
    {
      id: 'homework',
      title: 'Homework & Next Steps',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">Your Mission</h2>
          <div className="bg-white/10 backdrop-blur rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">For Next Class:</h3>
            <div className="space-y-4 text-blue-100">
              <div className="flex items-start">
                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">1</span>
                <span>Set up your development environment at home (Node.js + VS Code)</span>
              </div>
              <div className="flex items-start">
                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">2</span>
                <span>Clone the class GitHub repository (link will be provided)</span>
              </div>
              <div className="flex items-start">
                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">3</span>
                <span>Practice CLI commands - get comfortable navigating directories</span>
              </div>
              <div className="flex items-start">
                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">4</span>
                <span>Create and run at least 3 different Node.js scripts</span>
              </div>
            </div>
          </div>
          <div className="bg-blue-500/20 border border-blue-400/30 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-white mb-4">🚀 Next Class Preview:</h4>
            <p className="text-blue-100">
              We'll dive into Git version control, create our first GitHub repository, 
              and refresh our HTML/CSS/JavaScript skills by building a simple webpage!
            </p>
          </div>
        </div>
      ),
      bgGradient: 'from-violet-600 to-purple-700'
    },
    {
      id: 'navigation',
      title: 'Course Navigation',
      content: (
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">Ready for More?</h2>
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8">
              <div className="text-5xl mb-4">🎯</div>
              <p className="text-xl text-blue-100 mb-6">
                You've completed Class 1! Ready to continue your journey?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/class/2" 
                  className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Class 2: Git & HTML/CSS/JS →
                </Link>
                <Link 
                  to="/" 
                  className="bg-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors"
                >
                  ← Course Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-purple-700'
    }
  ];

  // Handle scroll to navigate slides
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const newSlide = Math.floor(scrollPosition / windowHeight);
      
      if (newSlide >= 0 && newSlide < slides.length) {
        setCurrentSlide(newSlide);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slides.length]);

  // Smooth scroll to specific slide
  const scrollToSlide = (slideIndex) => {
    window.scrollTo({
      top: slideIndex * window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative">
      {/* Navigation dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 space-y-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index 
                ? 'bg-white shadow-lg scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`min-h-screen flex items-center justify-center p-8 bg-gradient-to-br ${slide.bgGradient}`}
        >
          <div className="max-w-6xl mx-auto w-full">
            {slide.content}
          </div>
        </div>
      ))}

      {/* Progress indicator */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-black/30 backdrop-blur rounded-full px-4 py-2">
          <span className="text-white text-sm">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>

      {/* Scroll hint for first slide */}
      {currentSlide === 0 && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 animate-bounce">
          <div className="text-white/70 text-center">
            <div className="text-2xl mb-2">↓</div>
            <div className="text-sm">Scroll to continue</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Class1Slides; 