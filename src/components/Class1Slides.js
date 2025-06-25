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

// Interactive Terminal Simulator Component
const TerminalSimulator = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState(['Welcome to the CLI Terminal Simulator!', 'Type "help" to see available commands.']);
  const [currentDirectory, setCurrentDirectory] = useState('/Users/student');
  const [showHelp, setShowHelp] = useState(false);
  
  // File system state for visualization
  const [fileSystem, setFileSystem] = useState({
    '/Users/student': {
      type: 'directory',
      contents: {
        'Desktop': { type: 'directory', contents: {} },
        'Documents': { type: 'directory', contents: {} },
        'Downloads': { type: 'directory', contents: {} }
      }
    }
  });
  const [lastAction, setLastAction] = useState(null);

  const executeCommand = () => {
    if (!input.trim()) return;

    const trimmedInput = input.trim();
    const args = trimmedInput.split(' ');
    const command = args[0].toLowerCase();
    
    let newOutput = [...output, `$ ${trimmedInput}`];
    let newFileSystem = { ...fileSystem };
    let newLastAction = null;

    switch (command) {
      case 'pwd':
        newOutput.push(currentDirectory);
        newLastAction = { type: 'pwd', path: currentDirectory };
        break;
      case 'ls':
        const currentContents = fileSystem[currentDirectory]?.contents || {};
        const items = Object.keys(currentContents);
        if (items.length === 0) {
          newOutput.push('(empty directory)');
        } else {
          newOutput.push(items.join('  '));
        }
        newLastAction = { type: 'ls', items: items };
        break;
      case 'mkdir':
        if (args.length < 2) {
          newOutput.push('Error: mkdir requires a directory name');
        } else {
          const dirName = args[1];
          if (newFileSystem[currentDirectory]) {
            newFileSystem[currentDirectory].contents[dirName] = { type: 'directory', contents: {} };
            newOutput.push(`Directory '${dirName}' created`);
            newLastAction = { type: 'mkdir', name: dirName };
          }
        }
        break;
      case 'cd':
        if (args.length < 2) {
          newOutput.push('Error: cd requires a directory name');
        } else {
          const targetDir = args[1];
          if (targetDir === '..') {
            if (currentDirectory !== '/Users/student') {
              setCurrentDirectory('/Users/student');
              newOutput.push('Moved to parent directory');
              newLastAction = { type: 'cd', to: '/Users/student' };
            } else {
              newOutput.push('Already at root directory');
            }
          } else if (fileSystem[currentDirectory]?.contents[targetDir]) {
            const newPath = `${currentDirectory}/${targetDir}`;
            setCurrentDirectory(newPath);
            newOutput.push(`Changed directory to ${newPath}`);
            newLastAction = { type: 'cd', to: newPath };
          } else {
            newOutput.push(`Error: Directory '${targetDir}' not found`);
          }
        }
        break;
      case 'node':
        if (args[1] === '--version' || args[1] === '-v') {
          newOutput.push('v18.17.0');
          newLastAction = { type: 'node-version' };
        } else {
          newOutput.push('Node.js interactive mode (type .exit to quit)');
          newOutput.push('> ');
        }
        break;
      case 'npm':
        if (args[1] === '--version' || args[1] === '-v') {
          newOutput.push('9.6.7');
          newLastAction = { type: 'npm-version' };
        } else if (args[1] === 'init') {
          newOutput.push('Initializing package.json...');
          if (newFileSystem[currentDirectory]) {
            newFileSystem[currentDirectory].contents['package.json'] = { type: 'file', content: 'package.json' };
          }
          newOutput.push('package.json created successfully!');
          newLastAction = { type: 'npm-init' };
        } else {
          newOutput.push('npm help available - try "npm --version" or "npm init"');
        }
        break;
      case 'help':
        setShowHelp(true);
        newOutput.push('Available commands:');
        newOutput.push('  pwd - Show current directory');
        newOutput.push('  ls - List directory contents');
        newOutput.push('  mkdir <name> - Create directory');
        newOutput.push('  cd <name> - Change directory');
        newOutput.push('  node --version - Show Node.js version');
        newOutput.push('  npm --version - Show npm version');
        newOutput.push('  npm init - Initialize package.json');
        newOutput.push('  clear - Clear terminal');
        newLastAction = { type: 'help' };
        break;
      case 'clear':
        newOutput = ['Terminal cleared.'];
        newLastAction = { type: 'clear' };
        break;
      default:
        newOutput.push(`Command not found: ${command}`);
        newOutput.push('Type "help" to see available commands.');
        break;
    }

    setOutput(newOutput);
    setFileSystem(newFileSystem);
    setLastAction(newLastAction);
    setInput('');
    setShowHelp(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      executeCommand();
    }
  };

  // File System Visualization Component
  const FileSystemVisualization = () => {
    const renderFileSystemItem = (name, item, isHighlighted = false) => (
      <div 
        key={name} 
        className={`flex items-center space-x-2 p-2 rounded transition-all duration-300 ${
          isHighlighted ? 'bg-blue-100 border-2 border-blue-400 shadow-lg transform scale-105' : 'bg-gray-50'
        }`}
      >
        {item.type === 'directory' ? (
          <div className="text-2xl">📁</div>
        ) : (
          <div className="text-2xl">📄</div>
        )}
        <span className={`text-sm ${isHighlighted ? 'font-bold text-blue-700' : 'text-gray-700'}`}>
          {name}
        </span>
      </div>
    );

    const getCurrentDirectoryContents = () => {
      return fileSystem[currentDirectory]?.contents || {};
    };

    const renderActionFeedback = () => {
      if (!lastAction) return null;

      switch (lastAction.type) {
        case 'pwd':
          return (
            <div className="bg-green-100 border border-green-400 rounded p-3 mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">📍</span>
                <span className="text-green-700 font-medium">Current location: {lastAction.path}</span>
              </div>
            </div>
          );
        case 'ls':
          return (
            <div className="bg-blue-100 border border-blue-400 rounded p-3 mb-4">
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-2xl">👀</span>
                <span className="text-blue-700 font-medium">Listing directory contents:</span>
              </div>
              {lastAction.items.length === 0 ? (
                <p className="text-gray-600 text-sm">Directory is empty</p>
              ) : (
                <p className="text-blue-600 text-sm">{lastAction.items.length} items found</p>
              )}
            </div>
          );
        case 'mkdir':
          return (
            <div className="bg-green-100 border border-green-400 rounded p-3 mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">✨</span>
                <span className="text-green-700 font-medium">Created new directory: {lastAction.name}</span>
              </div>
            </div>
          );
        case 'cd':
          return (
            <div className="bg-purple-100 border border-purple-400 rounded p-3 mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🚀</span>
                <span className="text-purple-700 font-medium">Moved to: {lastAction.to}</span>
              </div>
            </div>
          );
        case 'node-version':
          return (
            <div className="bg-green-100 border border-green-400 rounded p-3 mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">⚡</span>
                <span className="text-green-700 font-medium">Node.js is installed and working!</span>
              </div>
            </div>
          );
        case 'npm-version':
          return (
            <div className="bg-red-100 border border-red-400 rounded p-3 mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">📦</span>
                <span className="text-red-700 font-medium">npm package manager is ready!</span>
              </div>
            </div>
          );
        case 'npm-init':
          return (
            <div className="bg-yellow-100 border border-yellow-400 rounded p-3 mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🎉</span>
                <span className="text-yellow-700 font-medium">Project initialized with package.json!</span>
              </div>
            </div>
          );
        case 'clear':
          return (
            <div className="bg-gray-100 border border-gray-400 rounded p-3 mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🧹</span>
                <span className="text-gray-700 font-medium">Terminal cleared!</span>
              </div>
            </div>
          );
        default:
          return null;
      }
    };

    const contents = getCurrentDirectoryContents();
    const contentItems = Object.entries(contents);

    return (
      <div className="bg-white rounded-lg shadow-lg p-6 border">
        <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
          <span className="text-2xl">🗂️</span>
          <span>File System Visualization</span>
        </h3>
        
        {renderActionFeedback()}
        
        <div className="border-t pt-4">
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-xl">📁</span>
            <span className="font-medium text-gray-800">{currentDirectory}</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {contentItems.length === 0 ? (
              <div className="col-span-full text-center py-8 text-gray-500">
                <div className="text-4xl mb-2">📂</div>
                <p>Empty directory</p>
                <p className="text-sm">Use 'mkdir' to create folders</p>
              </div>
            ) : (
              contentItems.map(([name, item]) => 
                renderFileSystemItem(
                  name, 
                  item, 
                  lastAction?.type === 'mkdir' && lastAction?.name === name
                )
              )
            )}
          </div>
        </div>
        
        <div className="mt-4 text-xs text-gray-500 bg-gray-50 rounded p-2">
          <strong>Pro tip:</strong> Try commands like 'mkdir my-project', 'cd my-project', 'npm init' to see the file system change in real-time!
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Terminal Interface */}
      <div className="bg-black text-green-400 p-6 rounded-lg font-mono text-sm shadow-lg">
        <div className="flex items-center mb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="ml-4 text-gray-400">Terminal Simulator</span>
        </div>
        
        <div className="space-y-1 mb-4 max-h-64 overflow-y-auto">
          {output.map((line, index) => (
            <div key={index} className={line.startsWith('$') ? 'text-white' : 'text-green-400'}>
              {line}
            </div>
          ))}
        </div>
        
        <div className="flex items-center">
          <span className="text-blue-400">{currentDirectory} $ </span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="bg-transparent border-none outline-none text-green-400 ml-2 flex-1"
            placeholder="Type a command..."
            autoFocus
          />
        </div>
        
        {showHelp && (
          <div className="mt-4 p-4 bg-gray-800 rounded">
            <h4 className="text-yellow-400 mb-2">Quick Reference:</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div><span className="text-blue-400">pwd</span> - show current path</div>
              <div><span className="text-blue-400">ls</span> - list files/folders</div>
              <div><span className="text-blue-400">mkdir name</span> - create folder</div>
              <div><span className="text-blue-400">cd name</span> - enter folder</div>
              <div><span className="text-blue-400">node -v</span> - Node.js version</div>
              <div><span className="text-blue-400">npm -v</span> - npm version</div>
            </div>
          </div>
        )}
      </div>

      {/* File System Visualization */}
      <FileSystemVisualization />
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
      id: 'web-fundamentals',
      title: 'Web Development Fundamentals',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">How the Web Actually Works</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Client-Server Diagram */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">🌐 Client-Server Architecture</h3>
              
              <div className="bg-gray-900/50 rounded-xl p-6 relative">
                {/* Client Side */}
                <div className="text-center mb-8">
                  <div className="bg-blue-500/20 border-2 border-blue-400/50 rounded-xl p-6 mb-4 hover:scale-105 transition-colors">
                    <div className="text-4xl mb-2">💻</div>
                    <div className="text-white font-bold text-lg">Client (Your Browser)</div>
                    <div className="text-blue-200 text-sm">Chrome, Firefox, Safari</div>
                  </div>
                  
                  {/* Arrow Down */}
                  <div className="flex justify-center items-center my-6">
                    <div className="flex flex-col items-center">
                      <div className="text-white text-sm mb-1">HTTP Request</div>
                      <div className="text-2xl animate-bounce">⬇️</div>
                      <div className="text-white text-sm mt-1">GET /homepage</div>
                    </div>
                  </div>
                  
                  {/* Internet Cloud */}
                  <div className="bg-gray-700/50 rounded-full p-4 mx-auto w-24 h-24 flex items-center justify-center mb-6">
                    <span className="text-3xl">☁️</span>
                  </div>
                  
                  {/* Arrow Down */}
                  <div className="flex justify-center items-center my-6">
                    <div className="flex flex-col items-center">
                      <div className="text-white text-sm mb-1">Travels across</div>
                      <div className="text-2xl animate-bounce">⬇️</div>
                      <div className="text-white text-sm mt-1">the Internet</div>
                    </div>
                  </div>
                  
                  {/* Server Side */}
                  <div className="bg-orange-500/20 border-2 border-orange-400/50 rounded-xl p-6 hover:scale-105 transition-transform">
                    <div className="text-4xl mb-2">🖥️</div>
                    <div className="text-white font-bold text-lg">Server (Remote Computer)</div>
                    <div className="text-orange-200 text-sm">Processes requests & sends responses</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Explanation */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">🔍 What Happens Step by Step</h3>
              
              <div className="space-y-4">
                {[
                  {
                    step: '1',
                    title: 'User Action',
                    description: 'You type a URL or click a link in your browser',
                    example: 'google.com',
                    icon: '👆',
                    color: 'blue'
                  },
                  {
                    step: '2',
                    title: 'DNS Lookup',
                    description: 'Browser finds the server\'s IP address',
                    example: '172.217.9.78',
                    icon: '🔍',
                    color: 'green'
                  },
                  {
                    step: '3',
                    title: 'HTTP Request',
                    description: 'Browser sends a request to the server',
                    example: 'GET /search?q=cats',
                    icon: '📤',
                    color: 'purple'
                  },
                  {
                    step: '4',
                    title: 'Server Processing',
                    description: 'Server processes the request and prepares response',
                    example: 'Database query, business logic',
                    icon: '⚙️',
                    color: 'orange'
                  },
                  {
                    step: '5',
                    title: 'HTTP Response',
                    description: 'Server sends back HTML, CSS, JS, and data',
                    example: '200 OK + webpage content',
                    icon: '📥',
                    color: 'red'
                  },
                  {
                    step: '6',
                    title: 'Browser Rendering',
                    description: 'Browser displays the webpage to you',
                    example: 'Cute cat pictures appear!',
                    icon: '🎨',
                    color: 'teal'
                  }
                ].map((item, index) => (
                  <div key={index} className={`bg-${item.color}-500/20 border border-${item.color}-400/30 rounded-lg p-4 hover:scale-105 transition-transform`}>
                    <div className="flex items-start space-x-4">
                      <div className={`bg-${item.color}-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold`}>
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-xl">{item.icon}</span>
                          <div className="text-white font-semibold">{item.title}</div>
                        </div>
                        <div className="text-gray-300 text-sm mb-1">{item.description}</div>
                        <div className="text-xs text-gray-400 italic">{item.example}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* HTTP Basics */}
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4 text-center">📡 HTTP: The Language of the Web</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-3">Common HTTP Methods</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-3">
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">GET</span>
                    <span className="text-gray-300">Retrieve data (like loading a webpage)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">POST</span>
                    <span className="text-gray-300">Send data (like submitting a form)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="bg-yellow-500 text-white px-2 py-1 rounded text-xs font-bold">PUT</span>
                    <span className="text-gray-300">Update existing data</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">DELETE</span>
                    <span className="text-gray-300">Remove data</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-300 mb-3">HTTP Status Codes</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-3">
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">200</span>
                    <span className="text-gray-300">OK - Request successful</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-xs font-bold">404</span>
                    <span className="text-gray-300">Not Found - Page doesn't exist</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">500</span>
                    <span className="text-gray-300">Server Error - Something went wrong</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="bg-orange-600 text-white px-2 py-1 rounded text-xs font-bold">401</span>
                    <span className="text-gray-300">Unauthorized - Login required</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Your Role as Full-Stack Developer */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">🎯 Your Role as a Full-Stack Developer</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">🎨</div>
                  <div className="text-white font-bold text-lg mb-2">Frontend Developer</div>
                  <div className="text-gray-300 text-sm">
                    You'll build what users see and interact with - the client side of the equation
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-3">⚙️</div>
                  <div className="text-white font-bold text-lg mb-2">Backend Developer</div>
                  <div className="text-gray-300 text-sm">
                    You'll build the server, database, and APIs that power the frontend
                  </div>
                </div>
              </div>
              <div className="mt-6 text-blue-200">
                <strong>Full-Stack = Frontend + Backend</strong> - You'll understand and build the complete picture!
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-700'
    },
    {
      id: 'nodejs-installation',
      title: 'Node.js Installation Walkthrough',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Installing Node.js Step-by-Step</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Installation Steps */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">📥 Installation Process</h3>
              
              <div className="space-y-4">
                {[
                  {
                    step: '1',
                    title: 'Visit nodejs.org',
                    description: 'Go to the official Node.js website',
                    details: 'Download the LTS (Long Term Support) version - it\'s more stable',
                    icon: '🌐'
                  },
                  {
                    step: '2',
                    title: 'Choose Your OS',
                    description: 'Select Windows, macOS, or Linux installer',
                    details: 'The website auto-detects your operating system',
                    icon: '💻'
                  },
                  {
                    step: '3',
                    title: 'Run the Installer',
                    description: 'Double-click the downloaded file',
                    details: 'Follow the installation wizard - accept default settings',
                    icon: '⚙️'
                  },
                  {
                    step: '4',
                    title: 'Verify Installation',
                    description: 'Open terminal and test Node.js',
                    details: 'Run: node --version and npm --version',
                    icon: '✅'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-green-500/20 border border-green-400/30 rounded-lg p-4 hover:scale-105 transition-transform">
                    <div className="flex items-start space-x-4">
                      <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-xl">{item.icon}</span>
                          <div className="text-white font-semibold">{item.title}</div>
                        </div>
                        <div className="text-gray-300 text-sm mb-1">{item.description}</div>
                        <div className="text-xs text-green-200 italic">{item.details}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What You Get */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">📦 What Node.js Includes</h3>
              
              <div className="space-y-4">
                <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-3xl">🟢</span>
                    <div>
                      <div className="text-white font-bold text-lg">Node.js Runtime</div>
                      <div className="text-blue-200 text-sm">JavaScript engine that runs outside the browser</div>
                    </div>
                  </div>
                  <div className="text-gray-300 text-sm">
                    Built on Chrome's V8 engine - the same one that powers Chrome browser's JavaScript execution
                  </div>
                </div>

                <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-3xl">📦</span>
                    <div>
                      <div className="text-white font-bold text-lg">npm (Node Package Manager)</div>
                      <div className="text-purple-200 text-sm">World's largest software library registry</div>
                    </div>
                  </div>
                  <div className="text-gray-300 text-sm">
                    Over 2 million packages available - from web frameworks to utility libraries
                  </div>
                </div>

                <div className="bg-orange-500/20 border border-orange-400/30 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-3xl">🛠️</span>
                    <div>
                      <div className="text-white font-bold text-lg">Development Tools</div>
                      <div className="text-orange-200 text-sm">Built-in debugging and development utilities</div>
                    </div>
                  </div>
                  <div className="text-gray-300 text-sm">
                    Command line tools, debugger, and performance monitoring
                  </div>
                </div>
              </div>

              {/* Version Check */}
              <div className="bg-gray-900/70 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-white mb-3">🔍 Verify Your Installation</h4>
                <div className="space-y-3">
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Check Node.js version:</div>
                    <div className="bg-black/50 rounded p-2 font-mono text-green-300">
                      $ node --version
                      <br />
                      v18.17.0
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm mb-1">Check npm version:</div>
                    <div className="bg-black/50 rounded p-2 font-mono text-green-300">
                      $ npm --version
                      <br />
                      9.6.7
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Troubleshooting */}
          <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">🔧 Common Installation Issues</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <div className="text-yellow-300 font-semibold mb-2">❌ "node: command not found"</div>
                <div className="text-gray-300 space-y-1">
                  <div>• Restart your terminal/command prompt</div>
                  <div>• On Windows: Add Node.js to PATH environment variable</div>
                  <div>• Try reinstalling with administrator privileges</div>
                </div>
              </div>
              <div>
                <div className="text-yellow-300 font-semibold mb-2">⚠️ Permission errors on macOS/Linux</div>
                <div className="text-gray-300 space-y-1">
                  <div>• Use nvm (Node Version Manager) instead</div>
                  <div>• Avoid using sudo with npm</div>
                  <div>• Configure npm to use a different directory</div>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">🎉 You're Ready to Code!</h3>
              <div className="text-gray-300 mb-4">
                With Node.js installed, you can now run JavaScript files outside the browser and use npm to install packages
              </div>
              <div className="text-blue-200">
                Next up: We'll create your first Node.js program and explore the command line!
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-blue-700'
    },
    {
      id: 'project-structure',
      title: 'Project Organization',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Organizing Your Code Like a Pro</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* File Structure */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">📁 Typical Project Structure</h3>
              
              <div className="bg-gray-900/70 rounded-xl p-6 font-mono text-sm">
                <div className="text-blue-400 mb-4">my-website/</div>
                <div className="pl-4 space-y-1">
                  <div className="text-green-300">├── index.html</div>
                  <div className="text-gray-400 pl-4">└── Main HTML file</div>
                  
                  <div className="text-green-300">├── css/</div>
                  <div className="text-gray-400 pl-4">│   └── styles.css</div>
                  
                  <div className="text-green-300">├── js/</div>
                  <div className="text-gray-400 pl-4">│   └── script.js</div>
                  
                  <div className="text-green-300">├── images/</div>
                  <div className="text-gray-400 pl-4">│   ├── logo.png</div>
                  <div className="text-gray-400 pl-4">│   └── hero.jpg</div>
                  
                  <div className="text-green-300">├── package.json</div>
                  <div className="text-gray-400 pl-4">└── Project configuration</div>
                  
                  <div className="text-green-300">├── README.md</div>
                  <div className="text-gray-400 pl-4">└── Project documentation</div>
                  
                  <div className="text-green-300">└── .gitignore</div>
                  <div className="text-gray-400 pl-4">└── Files to ignore in Git</div>
                </div>
              </div>

              <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">💡 Organization Tips</h4>
                <ul className="text-blue-100 text-sm space-y-1">
                  <li>• Keep related files together</li>
                  <li>• Use descriptive folder names</li>
                  <li>• Separate code, styles, and assets</li>
                  <li>• Include documentation (README.md)</li>
                </ul>
              </div>
            </div>

            {/* Git Setup */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">🔧 Setting Up Version Control</h3>
              
              <div className="space-y-4">
                <div className="bg-purple-500/20 border border-purple-400/30 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-3">📚 What is Git?</h4>
                  <div className="text-purple-100 text-sm space-y-2">
                    <div>Git tracks changes to your code over time</div>
                    <div>Like "save points" in a video game - you can go back to any previous version</div>
                    <div>Essential for collaboration and backup</div>
                  </div>
                </div>

                <div className="bg-gray-800/70 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-3">⚡ Quick Git Setup</h4>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="text-gray-400"># Navigate to your project folder</div>
                    <div className="text-green-300">cd my-website</div>
                    
                    <div className="text-gray-400 mt-3"># Initialize Git repository</div>
                    <div className="text-green-300">git init</div>
                    
                    <div className="text-gray-400 mt-3"># Add all files to staging</div>
                    <div className="text-green-300">git add .</div>
                    
                    <div className="text-gray-400 mt-3"># Make your first commit</div>
                    <div className="text-green-300">git commit -m "Initial commit"</div>
                  </div>
                </div>

                <div className="bg-orange-500/20 border border-orange-400/30 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-3">🌐 GitHub Integration</h4>
                  <div className="text-orange-100 text-sm space-y-2">
                    <div>1. Create a repository on GitHub.com</div>
                    <div>2. Connect your local project to GitHub</div>
                    <div>3. Push your code to the cloud</div>
                    <div>4. Share your work with the world!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4 text-center">🎯 Professional Development Practices</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">📝</div>
                <div className="text-white font-semibold mb-2">Clear Naming</div>
                <div className="text-gray-300 text-sm">
                  Use descriptive names for files and folders
                  <br />
                  <code className="text-green-300">userProfile.js</code> not <code className="text-red-300">file1.js</code>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🔄</div>
                <div className="text-white font-semibold mb-2">Regular Commits</div>
                <div className="text-gray-300 text-sm">
                  Save your progress frequently with Git
                  <br />
                  Small, focused commits are better
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📚</div>
                <div className="text-white font-semibold mb-2">Documentation</div>
                <div className="text-gray-300 text-sm">
                  Write README files explaining your project
                  <br />
                  Future you will thank present you!
                </div>
              </div>
            </div>
          </div>

          {/* Hands-on Exercise */}
          <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-xl p-6">
            <h3 className="text-lg font-bold text-white mb-4">🏃‍♂️ Let's Practice Together!</h3>
            <div className="text-yellow-100 space-y-2">
              <div><strong>Exercise:</strong> Create your first project structure</div>
              <div>1. Make a folder called "cs390-practice"</div>
              <div>2. Add the folders and files shown in the structure above</div>
              <div>3. Initialize Git in your project</div>
              <div>4. Make your first commit</div>
              <div>5. Create a simple HTML page with "Hello CS390!"</div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-700'
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
    },
    {
      id: 'cli-commands',
      title: 'Command Line Interface (CLI)',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Master the Command Line</h2>
          <p className="text-xl text-gray-200 text-center mb-8">
            The CLI is your gateway to professional development. Let's practice!
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left side: Interactive Terminal */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">🖥️ Interactive Terminal Practice</h3>
              <TerminalSimulator />
              
              <div className="bg-blue-500/20 border border-blue-400/30 rounded-xl p-4">
                <h4 className="text-lg font-semibold text-white mb-2">🎯 Practice Challenge</h4>
                <div className="text-blue-100 text-sm space-y-1">
                  <div>1. Check your current directory with <code className="bg-white/20 px-1 rounded">pwd</code></div>
                  <div>2. List files with <code className="bg-white/20 px-1 rounded">ls</code></div>
                  <div>3. Create a project folder: <code className="bg-white/20 px-1 rounded">mkdir cs390-project</code></div>
                  <div>4. Navigate into it: <code className="bg-white/20 px-1 rounded">cd cs390-project</code></div>
                  <div>5. Check Node.js version: <code className="bg-white/20 px-1 rounded">node --version</code></div>
                </div>
              </div>
            </div>

            {/* Right side: Command reference */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">📚 Essential Commands Reference</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-800/60 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">📁 File System Navigation</h4>
                  <div className="space-y-2 text-sm">
                    {[
                      { cmd: 'pwd', desc: 'Print Working Directory - shows where you are', example: '/Users/student' },
                      { cmd: 'ls', desc: 'List directory contents (macOS/Linux)', example: 'Documents  Desktop  hello.js' },
                      { cmd: 'dir', desc: 'List directory contents (Windows)', example: 'Documents  Desktop  hello.js' },
                      { cmd: 'cd <folder>', desc: 'Change Directory', example: 'cd Documents' },
                      { cmd: 'cd ..', desc: 'Go up one directory level', example: 'Goes to parent folder' }
                    ].map((item, index) => (
                      <div key={index} className="border-l-2 border-blue-400 pl-3">
                        <div className="text-green-300 font-mono">{item.cmd}</div>
                        <div className="text-gray-300">{item.desc}</div>
                        <div className="text-blue-200 text-xs italic">{item.example}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-800/60 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-green-300 mb-3">📂 Creating & Managing</h4>
                  <div className="space-y-2 text-sm">
                    {[
                      { cmd: 'mkdir <name>', desc: 'Create a new directory', example: 'mkdir my-website' },
                      { cmd: 'touch <file>', desc: 'Create an empty file (Unix)', example: 'touch index.html' },
                      { cmd: 'echo > <file>', desc: 'Create an empty file (Windows)', example: 'echo > index.html' }
                    ].map((item, index) => (
                      <div key={index} className="border-l-2 border-green-400 pl-3">
                        <div className="text-green-300 font-mono">{item.cmd}</div>
                        <div className="text-gray-300">{item.desc}</div>
                        <div className="text-green-200 text-xs italic">{item.example}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-800/60 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">🟢 Node.js & npm Commands</h4>
                  <div className="space-y-2 text-sm">
                    {[
                      { cmd: 'node --version', desc: 'Check Node.js installation', example: 'v18.17.0' },
                      { cmd: 'npm --version', desc: 'Check npm (Node Package Manager)', example: '9.6.7' },
                      { cmd: 'node <file>.js', desc: 'Run a JavaScript file', example: 'node hello.js' },
                      { cmd: 'npm init', desc: 'Create a new Node.js project', example: 'Creates package.json' }
                    ].map((item, index) => (
                      <div key={index} className="border-l-2 border-purple-400 pl-3">
                        <div className="text-green-300 font-mono">{item.cmd}</div>
                        <div className="text-gray-300">{item.desc}</div>
                        <div className="text-purple-200 text-xs italic">{item.example}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-xl p-4">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">💡</span>
                  <div className="text-yellow-100">
                    <strong>Pro Tips:</strong>
                    <ul className="mt-2 text-sm space-y-1">
                      <li>• Use Tab key for auto-completion</li>
                      <li>• Press ↑ arrow to see previous commands</li>
                      <li>• Type <code className="bg-white/20 px-1 rounded">clear</code> to clean the terminal</li>
                      <li>• Practice daily - CLI skills are essential!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why CLI Matters */}
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4 text-center">🎯 Why Learn the Command Line?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-white font-semibold">Speed</div>
                <div className="text-gray-300 text-sm">Navigate and create files 10x faster than using GUI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🔧</div>
                <div className="text-white font-semibold">Developer Tools</div>
                <div className="text-gray-300 text-sm">Git, npm, build tools - all use command line</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🌐</div>
                <div className="text-white font-semibold">Server Management</div>
                <div className="text-gray-300 text-sm">Deploy and manage web applications remotely</div>
              </div>
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
                icon: '🌐',
                title: 'Web Fundamentals',
                description: 'Understanding client-server architecture and HTTP'
              },
              {
                icon: '🔧',
                title: 'Environment Setup',
                description: 'Installed Node.js, VS Code, and learned CLI basics'
              },
              {
                icon: '⌨️',
                title: 'CLI Mastery',
                description: 'Practiced essential terminal commands interactively'
              },
              {
                icon: '📁',
                title: 'Project Organization',
                description: 'Best practices for structuring code and using Git'
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
                <span>Practice CLI commands using the interactive terminal we used today</span>
              </div>
              <div className="flex items-start">
                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">3</span>
                <span>Create your "cs390-practice" project with proper folder structure</span>
              </div>
              <div className="flex items-start">
                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">4</span>
                <span>Create and run at least 3 different Node.js scripts</span>
              </div>
              <div className="flex items-start">
                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">5</span>
                <span>Create a simple "About Me" webpage using HTML and CSS</span>
              </div>
            </div>
          </div>
          <div className="bg-blue-500/20 border border-blue-400/30 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-white mb-4">🚀 Next Class Preview:</h4>
            <p className="text-blue-100">
              We'll dive deeper into Git version control, create our first GitHub repository, 
              and refresh our HTML/CSS/JavaScript skills by building interactive webpages!
            </p>
          </div>
        </div>
      ),
      bgGradient: 'from-violet-600 to-purple-700'
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