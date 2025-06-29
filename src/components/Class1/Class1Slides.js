import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Custom CSS for animations
const customStyles = `
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fade-in 0.5s ease-out;
  }
`;

// Reusable CodeBlock component with copy functionality
const CodeBlock = ({ code, language = '', filename = '', className = '', showCopy = true }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="relative group">
      {filename && (
        <div className="bg-gray-800 px-4 py-2 text-sm text-gray-300 rounded-t-lg border-b border-gray-600">
          {filename}
        </div>
      )}
      <div className={`bg-gray-900 rounded-lg ${filename ? 'rounded-t-none' : ''} p-4 relative ${className}`}>
        {showCopy && (
          <button
            onClick={copyToClipboard}
            className={`absolute top-2 right-2 px-3 py-1 rounded text-xs font-medium transition-all duration-200 z-10
              ${copied 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600 opacity-0 group-hover:opacity-100'
              }`}
          >
            {copied ? '✓ Copied!' : '📋 Copy'}
          </button>
        )}
        <pre className="text-white font-mono text-sm overflow-x-auto whitespace-pre-wrap">
          {code}
        </pre>
      </div>
    </div>
  );
};

// Inline code component with copy functionality for small snippets
const InlineCode = ({ children, copyable = true }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    if (!copyable) return;
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <span className="relative inline-block group">
      <code 
        className={`bg-white/20 px-2 py-1 rounded text-sm font-mono ${copyable ? 'cursor-pointer hover:bg-white/30' : ''}`}
        onClick={copyToClipboard}
      >
        {children}
      </code>
      {copyable && (
        <span className={`absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 transition-opacity duration-200 pointer-events-none
          ${copied ? 'opacity-100' : 'group-hover:opacity-100'}`}>
          {copied ? '✓ Copied!' : 'Click to copy'}
        </span>
      )}
    </span>
  );
};

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
      await new Promise(resolve => setTimeout(resolve, 1000)); // Faster: 1s per step
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
    }, 500);
  };

  const handleLike = () => {
    const steps = [
      { layer: 'frontend', title: 'User Click', description: 'Like button clicked', data: '{ action: "like", postId: 123 }' },
      { layer: 'frontend', title: 'API Call', description: 'HTTP request sent', data: 'PATCH /api/posts/123/like' },
      { layer: 'backend', title: 'Auth Check', description: 'JWT verified', data: 'userId: 456 ✓' },
      { layer: 'database', title: 'Update DB', description: 'Increment likes', data: 'likes: 42 → 43' },
      { layer: 'frontend', title: 'UI Update', description: 'State updated', data: 'setState({ likes: 43 })' }
    ];
    simulateFlow('like', steps);
  };

  const handleComment = () => {
    if (!newComment.trim()) return;
    
    const steps = [
      { layer: 'frontend', title: 'Form Submit', description: 'Comment posted', data: `{ text: "${newComment}" }` },
      { layer: 'backend', title: 'Validation', description: 'Input validated', data: 'Length ✓, Auth ✓' },
      { layer: 'database', title: 'Save Comment', description: 'Added to DB', data: 'db.comments.insert()' },
      { layer: 'frontend', title: 'UI Update', description: 'Comment shown', data: 'comments.unshift(new)' }
    ];
    simulateFlow('comment', steps);
  };

  const handleShare = () => {
    const steps = [
      { layer: 'frontend', title: 'Share Click', description: 'Share initiated', data: '{ action: "share" }' },
      { layer: 'backend', title: 'Generate URL', description: 'Create share link', data: 'https://app.com/posts/123' },
      { layer: 'frontend', title: 'Copy Link', description: 'Copied to clipboard', data: 'navigator.clipboard.writeText()' }
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

  const allSteps = [
    { layer: 'frontend', title: 'User Click', description: 'Like button clicked' },
    { layer: 'frontend', title: 'API Call', description: 'HTTP request sent' },
    { layer: 'backend', title: 'Auth Check', description: 'JWT verified' },
    { layer: 'database', title: 'Update DB', description: 'Increment likes' },
    { layer: 'frontend', title: 'UI Update', description: 'State updated' }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Left Side: Mock Social Media Post */}
      <div className="space-y-4">
        <div className="text-center mb-4">
          <h3 className="text-lg font-bold text-white mb-1">Interactive Demo</h3>
          <p className="text-gray-300 text-sm">Click buttons to see data flow →</p>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-lg">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
              AC
            </div>
            <div>
              <div className="font-semibold text-gray-800 text-sm">Alex Chen</div>
              <div className="text-xs text-gray-500">2 hours ago</div>
            </div>
          </div>
          
          <p className="text-gray-800 mb-3 text-sm">
            Beautiful sunset at the beach today! 🌅
          </p>
          
          <div className="bg-gradient-to-r from-orange-400 to-pink-500 h-32 rounded-lg mb-3 flex items-center justify-center text-white font-bold">
            🌅 Beach Photo
          </div>
          
          <div className="flex items-center justify-between text-gray-600 border-t pt-3">
            <button 
              onClick={handleLike}
              disabled={isProcessing}
              className={`flex items-center space-x-1 px-3 py-1 rounded-lg transition-all duration-300 hover:bg-gray-100 disabled:opacity-50 text-sm ${
                isLiked ? 'text-red-500' : 'text-gray-600'
              }`}
            >
              <span>{isLiked ? '❤️' : '🤍'}</span>
              <span>{likes}</span>
            </button>
            
            <button 
              onClick={() => document.getElementById('comment-input').focus()}
              disabled={isProcessing}
              className="flex items-center space-x-1 px-3 py-1 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 text-sm"
            >
              <span>💬</span>
              <span>{comments.length}</span>
            </button>
            
            <button 
              onClick={handleShare}
              disabled={isProcessing}
              className="flex items-center space-x-1 px-3 py-1 rounded-lg hover:bg-gray-100 transition-colors disabled:opacity-50 text-sm"
            >
              <span>🔗</span>
              <span>Share</span>
            </button>
          </div>
          
          {/* Comments Section - Compact */}
          <div className="mt-3 space-y-1 max-h-16 overflow-y-auto">
            {comments.slice(0, 2).map((comment, index) => (
              <div key={index} className="flex space-x-2 text-xs">
                <span className="font-semibold text-gray-800">{comment.user}</span>
                <span className="text-gray-600">{comment.text}</span>
              </div>
            ))}
          </div>
          
          {/* Comment Input - Compact */}
          <div className="mt-3 flex space-x-2">
            <input
              id="comment-input"
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              disabled={isProcessing}
              className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:border-blue-500 disabled:opacity-50"
              onKeyPress={(e) => e.key === 'Enter' && !isProcessing && handleComment()}
            />
            <button
              onClick={handleComment}
              disabled={!newComment.trim() || isProcessing}
              className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Post
            </button>
          </div>
        </div>
      </div>

      {/* Right Side: Data Flow Visualization */}
      <div className="bg-gray-900/50 rounded-xl p-4">
        <div className="text-center mb-4">
          <h3 className="text-lg font-bold text-white mb-1">Data Flow Pipeline</h3>
          <p className="text-gray-300 text-xs">Watch the request flow through the stack</p>
        </div>

        {/* Architecture Layers - Horizontal */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className={`bg-green-500/20 border rounded-lg p-3 text-center transition-all duration-500 ${
            activeStep && currentStepIndex >= 0 && allSteps[currentStepIndex]?.layer === 'frontend'
              ? 'border-green-400 bg-green-500/30 shadow-lg shadow-green-500/20' 
              : 'border-green-500/30'
          }`}>
            <div className="text-2xl mb-1">🎨</div>
            <div className="text-white font-bold text-sm">Frontend</div>
            <div className="text-green-200 text-xs">React</div>
          </div>

          <div className={`bg-orange-500/20 border rounded-lg p-3 text-center transition-all duration-500 ${
            activeStep && currentStepIndex >= 0 && allSteps[currentStepIndex]?.layer === 'backend'
              ? 'border-orange-400 bg-orange-500/30 shadow-lg shadow-orange-500/20' 
              : 'border-orange-500/30'
          }`}>
            <div className="text-2xl mb-1">⚙️</div>
            <div className="text-white font-bold text-sm">Backend</div>
            <div className="text-orange-200 text-xs">Express</div>
          </div>

          <div className={`bg-purple-500/20 border rounded-lg p-3 text-center transition-all duration-500 ${
            activeStep && currentStepIndex >= 0 && allSteps[currentStepIndex]?.layer === 'database'
              ? 'border-purple-400 bg-purple-500/30 shadow-lg shadow-purple-500/20' 
              : 'border-purple-500/30'
          }`}>
            <div className="text-2xl mb-1">🗄️</div>
            <div className="text-white font-bold text-sm">Database</div>
            <div className="text-purple-200 text-xs">MongoDB</div>
          </div>
        </div>

        {/* Current Step Display */}
        {activeStep && currentStepIndex >= 0 && (
          <div className="mb-4">
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-2">
                <div className={`w-3 h-3 rounded-full ${getLayerColor(allSteps[currentStepIndex]?.layer)}`}></div>
                <div className="text-white text-sm font-bold">
                  Step {currentStepIndex + 1}: {allSteps[currentStepIndex]?.title}
                </div>
              </div>
              <div className="text-gray-300 text-xs mb-2">{allSteps[currentStepIndex]?.description}</div>
              
              {dataFlow && (
                <div className="bg-gray-900 rounded p-2">
                  <pre className="text-green-300 text-xs font-mono whitespace-pre-wrap">{dataFlow}</pre>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Progress Steps */}
        {activeStep && (
          <div className="mb-4">
            <div className="flex justify-center gap-1">
              {allSteps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div className={`
                    w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500
                    ${index <= currentStepIndex 
                      ? `${getLayerColor(step.layer)} text-white` 
                      : 'bg-gray-600 text-gray-400'
                    }
                  `}>
                    {index + 1}
                  </div>
                  {index < allSteps.length - 1 && (
                    <div className={`w-4 h-0.5 transition-all duration-500 ${
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
          <div className="text-center text-blue-200">
            <div className="text-sm font-semibold mb-1">👆 Try It!</div>
            <div className="text-xs">Click Like, Comment, or Share to see the pipeline</div>
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
  const [animatingFolder, setAnimatingFolder] = useState(null);
  const [creatingItem, setCreatingItem] = useState(null);

  // Trigger animations based on lastAction
  useEffect(() => {
    if (lastAction) {
      if (lastAction.type === 'mkdir') {
        setCreatingItem(lastAction.name);
        setTimeout(() => setCreatingItem(null), 1000);
      } else if (lastAction.type === 'cd') {
        setAnimatingFolder(lastAction.to);
        setTimeout(() => setAnimatingFolder(null), 800);
      } else if (lastAction.type === 'ls') {
        setAnimatingFolder('opening');
        setTimeout(() => setAnimatingFolder(null), 600);
      }
    }
  }, [lastAction]);

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

  // Folder Icon Component with animations
  const FolderIcon = ({ isOpen = false, isAnimating = false, size = "large" }) => {
    const sizeClasses = {
      small: "w-8 h-8",
      medium: "w-12 h-12", 
      large: "w-16 h-16",
      xlarge: "w-24 h-24"
    };

    return (
      <div className={`${sizeClasses[size]} relative transition-all duration-300 ${isAnimating ? 'transform scale-110' : ''}`}>
        {isOpen ? (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Open folder */}
            <defs>
              <linearGradient id="folderGradientOpen" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffd700" />
                <stop offset="100%" stopColor="#ffb347" />
              </linearGradient>
            </defs>
            <path 
              d="M10 25 L90 25 L85 75 L5 75 Z" 
              fill="url(#folderGradientOpen)" 
              stroke="#e6a000" 
              strokeWidth="2"
              className="drop-shadow-lg"
            />
            <path 
              d="M10 25 L35 25 L40 15 L60 15 L65 25 L90 25" 
              fill="none" 
              stroke="#e6a000" 
              strokeWidth="2"
            />
            {/* Folder contents indicator */}
            <circle cx="25" cy="45" r="3" fill="#4a90e2" />
            <circle cx="40" cy="50" r="3" fill="#4a90e2" />
            <circle cx="55" cy="45" r="3" fill="#4a90e2" />
          </svg>
        ) : (
          <svg viewBox="0 0 100 100" className="w-full h-full">
            {/* Closed folder */}
            <defs>
              <linearGradient id="folderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4a90e2" />
                <stop offset="100%" stopColor="#357abd" />
              </linearGradient>
            </defs>
            <path 
              d="M10 30 L90 30 L90 75 L10 75 Z" 
              fill="url(#folderGradient)" 
              stroke="#2c5282" 
              strokeWidth="2"
              className="drop-shadow-md"
            />
            <path 
              d="M10 30 L35 30 L40 20 L60 20 L65 30" 
              fill="url(#folderGradient)" 
              stroke="#2c5282" 
              strokeWidth="2"
            />
          </svg>
        )}
      </div>
    );
  };

  // File Icon Component with animations
  const FileIcon = ({ name, isCreating = false }) => {
    const isPackageJson = name === 'package.json';
    
    return (
      <div className={`w-12 h-12 relative transition-all duration-500 ${isCreating ? 'animate-bounce scale-0' : 'scale-100'}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <linearGradient id="fileGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={isPackageJson ? "#22c55e" : "#f3f4f6"} />
              <stop offset="100%" stopColor={isPackageJson ? "#16a34a" : "#e5e7eb"} />
            </linearGradient>
          </defs>
          <path 
            d="M20 10 L70 10 L80 20 L80 90 L20 90 Z" 
            fill="url(#fileGradient)" 
            stroke={isPackageJson ? "#15803d" : "#9ca3af"} 
            strokeWidth="2"
          />
          <path 
            d="M70 10 L70 20 L80 20" 
            fill="none" 
            stroke={isPackageJson ? "#15803d" : "#9ca3af"} 
            strokeWidth="2"
          />
          {isPackageJson && (
            <text x="50" y="55" textAnchor="middle" fontSize="12" fill="white" fontWeight="bold">
              npm
            </text>
          )}
        </svg>
        {isCreating && (
          <div className="absolute -top-2 -right-2">
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-ping">
              <span className="text-white text-xs">✨</span>
            </div>
          </div>
        )}
      </div>
    );
  };

  // File System Visualization Component
  const FileSystemVisualization = () => {
    const getCurrentDirectoryContents = () => {
      return fileSystem[currentDirectory]?.contents || {};
    };

    const renderActionFeedback = () => {
      if (!lastAction) return null;

      switch (lastAction.type) {
        case 'pwd':
          return (
            <div className="bg-gradient-to-r from-green-100 to-green-200 border border-green-400 rounded-lg p-4 mb-4 animate-fade-in">
              <div className="flex items-center space-x-3">
                <div className="text-3xl animate-pulse">📍</div>
                <div>
                  <div className="text-green-800 font-semibold">Current Location</div>
                  <div className="text-green-700 font-mono text-sm">{lastAction.path}</div>
                </div>
              </div>
            </div>
          );
        case 'ls':
          return (
            <div className="bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-400 rounded-lg p-4 mb-4 animate-fade-in">
              <div className="flex items-center space-x-3">
                <div className="text-3xl">🔍</div>
                <div>
                  <div className="text-blue-800 font-semibold">Directory Contents</div>
                  <div className="text-blue-700 text-sm">
                    {lastAction.items.length === 0 ? 'No items found' : `Found ${lastAction.items.length} items`}
                  </div>
                </div>
              </div>
            </div>
          );
        case 'mkdir':
          return (
            <div className="bg-gradient-to-r from-purple-100 to-purple-200 border border-purple-400 rounded-lg p-4 mb-4 animate-fade-in">
              <div className="flex items-center space-x-3">
                <div className="text-3xl animate-bounce">📁</div>
                <div>
                  <div className="text-purple-800 font-semibold">Folder Created!</div>
                  <div className="text-purple-700 font-mono text-sm">{lastAction.name}</div>
                </div>
              </div>
            </div>
          );
        case 'cd':
          return (
            <div className="bg-gradient-to-r from-indigo-100 to-indigo-200 border border-indigo-400 rounded-lg p-4 mb-4 animate-fade-in">
              <div className="flex items-center space-x-3">
                <div className="text-3xl">🚪</div>
                <div>
                  <div className="text-indigo-800 font-semibold">Entered Directory</div>
                  <div className="text-indigo-700 font-mono text-sm">{lastAction.to}</div>
                </div>
              </div>
            </div>
          );
        case 'npm-init':
          return (
            <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 border border-yellow-400 rounded-lg p-4 mb-4 animate-fade-in">
              <div className="flex items-center space-x-3">
                <div className="text-3xl animate-spin">⚙️</div>
                <div>
                  <div className="text-yellow-800 font-semibold">Project Initialized!</div>
                  <div className="text-yellow-700 text-sm">package.json created</div>
                </div>
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
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-xl p-8 border-2 border-gray-200">
        <div className="flex items-center space-x-3 mb-6">
          <div className="text-3xl">🖥️</div>
          <h3 className="text-xl font-bold text-gray-800">File System Explorer</h3>
        </div>
        
        {renderActionFeedback()}
        
        {/* Current Directory Display */}
        <div className="bg-white rounded-lg p-6 border-2 border-gray-300 mb-6 shadow-inner">
          <div className="flex items-center space-x-3 mb-4">
            <FolderIcon 
              isOpen={animatingFolder === 'opening' || contentItems.length > 0} 
              isAnimating={animatingFolder === 'opening'}
              size="large"
            />
            <div>
              <div className="text-sm text-gray-600">Current Directory</div>
              <div className="font-mono text-lg font-semibold text-gray-800">{currentDirectory}</div>
            </div>
          </div>
          
          {/* Directory Contents */}
          <div className="border-t pt-4">
            {contentItems.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4 opacity-50">📂</div>
                <p className="text-gray-500 mb-2">This directory is empty</p>
                <p className="text-sm text-gray-400">Try: <code className="bg-gray-200 px-1 rounded">mkdir my-folder</code></p>
              </div>
            ) : (
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {contentItems.map(([name, item]) => (
                  <div 
                    key={name}
                    className={`flex flex-col items-center space-y-2 p-3 rounded-lg transition-all duration-300 hover:bg-gray-50 ${
                      creatingItem === name ? 'animate-pulse bg-green-50 border-2 border-green-300' : ''
                    }`}
                  >
                    {item.type === 'directory' ? (
                      <FolderIcon 
                        isOpen={false}
                        isAnimating={creatingItem === name}
                        size="medium"
                      />
                    ) : (
                      <FileIcon 
                        name={name} 
                        isCreating={creatingItem === name}
                      />
                    )}
                    <span className={`text-xs text-center font-medium truncate w-full ${
                      creatingItem === name ? 'text-green-700 font-bold' : 'text-gray-700'
                    }`}>
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        
        {/* Command Guide */}
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <div className="flex items-center space-x-2 mb-2">
            <div className="text-xl">💡</div>
            <span className="font-semibold text-blue-800">Try these commands:</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <code className="bg-white px-2 py-1 rounded border">mkdir my-project</code>
            <code className="bg-white px-2 py-1 rounded border">cd my-project</code>
            <code className="bg-white px-2 py-1 rounded border">npm init</code>
            <code className="bg-white px-2 py-1 rounded border">ls</code>
          </div>
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

// Interactive Pie Chart Grading Component
const PieChartGrading = () => {
  const [hoveredSegment, setHoveredSegment] = useState(null);

  const gradingData = [
    { 
      id: 'homework',
      component: 'Weekly Homework', 
      percentage: 35, 
      icon: '📝', 
      color: '#10b981',
      bgColor: 'bg-green-500',
      description: '11 hands-on assignments that build your skills progressively',
      strokeDasharray: '264 754',
      strokeDashoffset: '0'
    },
    { 
      id: 'projects',
      component: 'Mini-Projects', 
      percentage: 25, 
      icon: '🛠️', 
      color: '#3b82f6',
      bgColor: 'bg-blue-500',
      description: '3 milestone projects at key learning stages',
      strokeDasharray: '188 754',
      strokeDashoffset: '-264'
    },
    { 
      id: 'capstone',
      component: 'Final Capstone', 
      percentage: 30, 
      icon: '🚀', 
      color: '#a855f7',
      bgColor: 'bg-purple-500',
      description: 'Your showcase project - build something amazing!',
      strokeDasharray: '226 754',
      strokeDashoffset: '-452'
    },
    { 
      id: 'participation',
      component: 'Participation & Labs', 
      percentage: 10, 
      icon: '🤝', 
      color: '#f97316',
      bgColor: 'bg-orange-500',
      description: 'In-class activities, peer reviews, and engagement',
      strokeDasharray: '75 754',
      strokeDashoffset: '-678'
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
      
      {/* Interactive Pie Chart */}
      <div className="relative">
        <svg width="320" height="320" viewBox="0 0 320 320" className="transform -rotate-90">
          {/* Background circle for better visual separation */}
          <circle
            cx="160"
            cy="160"
            r="140"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
          />
          
          {gradingData.map((item, index) => (
            <g key={item.id}>
              {/* Main segment */}
              <circle
                cx="160"
                cy="160"
                r="120"
                fill="none"
                stroke={item.color}
                strokeWidth={hoveredSegment === item.id ? "55" : "40"}
                strokeDasharray={item.strokeDasharray}
                strokeDashoffset={item.strokeDashoffset}
                className="transition-all duration-500 cursor-pointer"
                style={{
                  filter: hoveredSegment === item.id ? 'drop-shadow(0 0 20px rgba(255,255,255,0.6))' : 
                          hoveredSegment && hoveredSegment !== item.id ? 'opacity(0.3)' : 'none',
                  strokeLinecap: 'round'
                }}
                onMouseEnter={() => setHoveredSegment(item.id)}
                onMouseLeave={() => setHoveredSegment(null)}
              />
              
              {/* Highlight overlay on hover */}
              {hoveredSegment === item.id && (
                <circle
                  cx="160"
                  cy="160"
                  r="120"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="60"
                  strokeDasharray={item.strokeDasharray}
                  strokeDashoffset={item.strokeDashoffset}
                  className="animate-pulse"
                  style={{ strokeLinecap: 'round' }}
                />
              )}
            </g>
          ))}
        </svg>
        
        {/* Dynamic Center Label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center transition-all duration-300">
            {hoveredSegment ? (
              <div className="animate-fade-in">
                <div className="text-white text-3xl font-bold">
                  {gradingData.find(item => item.id === hoveredSegment)?.percentage}%
                </div>
                <div className="text-white text-lg">
                  {gradingData.find(item => item.id === hoveredSegment)?.component}
                </div>
                <div className="text-4xl mt-2">
                  {gradingData.find(item => item.id === hoveredSegment)?.icon}
                </div>
              </div>
            ) : (
              <div>
                <div className="text-white text-2xl font-bold">Grade</div>
                <div className="text-white text-lg">Distribution</div>
                <div className="text-white/60 text-sm mt-2">Hover to explore</div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Interactive Legend */}
      <div className="space-y-4">
        {gradingData.map((item, index) => (
          <div 
            key={item.id}
            className={`group flex items-center space-x-4 p-4 rounded-xl backdrop-blur border transition-all duration-500 cursor-pointer min-w-96 ${
              hoveredSegment === item.id 
                ? 'bg-white/30 border-white/50 scale-110 shadow-2xl shadow-white/20' 
                : hoveredSegment && hoveredSegment !== item.id
                ? 'bg-white/5 border-white/10 opacity-40'
                : 'bg-white/10 border-white/20 hover:bg-white/20 hover:scale-105'
            }`}
            onMouseEnter={() => setHoveredSegment(item.id)}
            onMouseLeave={() => setHoveredSegment(null)}
          >
            
            {/* Color indicator with glow effect */}
            <div className={`w-6 h-6 ${item.bgColor} rounded-full flex-shrink-0 transition-all duration-300 ${
              hoveredSegment === item.id ? 'scale-150 shadow-lg' : 'group-hover:scale-125'
            }`}
            style={{
              boxShadow: hoveredSegment === item.id ? `0 0 20px ${item.color}` : 'none'
            }}></div>
            
            <div className="flex items-center space-x-3 flex-1">
              {/* Animated icon */}
              <span className={`text-2xl transition-all duration-300 ${
                hoveredSegment === item.id ? 'scale-125 animate-bounce' : 'group-hover:scale-110'
              }`}>
                {item.icon}
              </span>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-lg font-semibold text-white transition-all duration-300 ${
                    hoveredSegment === item.id ? 'text-xl' : ''
                  }`}>
                    {item.component}
                  </span>
                  <span className={`font-bold text-white px-3 py-1 rounded-lg transition-all duration-300 ${
                    hoveredSegment === item.id 
                      ? 'text-2xl bg-white/40 scale-110 shadow-lg' 
                      : 'text-xl bg-white/20 group-hover:bg-white/30'
                  }`}>
                    {item.percentage}%
                  </span>
                </div>
                <p className={`text-sm transition-all duration-300 ${
                  hoveredSegment === item.id 
                    ? 'text-white font-medium' 
                    : 'text-cyan-100 group-hover:text-white'
                }`}>
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Interactive hint */}
        <div className="text-center mt-6">
          <div className={`text-sm transition-all duration-500 ${
            hoveredSegment 
              ? 'text-white/60' 
              : 'text-cyan-200 animate-pulse'
          }`}>
            {hoveredSegment 
              ? `💡 ${hoveredSegment === 'homework' ? 'Focus on consistent practice!' : 
                     hoveredSegment === 'projects' ? 'Build impressive portfolio pieces!' :
                     hoveredSegment === 'capstone' ? 'Your showcase masterpiece!' :
                     'Show up and engage - it makes a difference!'}`
              : '👆 Hover over any section to explore details'
            }
          </div>
        </div>
      </div>
    </div>
  );
};

const Class1Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Inject custom styles
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = customStyles;
    document.head.appendChild(styleSheet);
    return () => document.head.removeChild(styleSheet);
  }, []);

  // Slide content data
  const slides = [
    // 1. Welcome
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
    
    // 2. What is a Web Application?
    {
      id: 'what-is-web-app',
      title: 'What is a Web Application?',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">What is a Web Application?</h2>
          
          {/* Main Definition */}
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur rounded-xl p-8 border border-white/20 max-w-4xl mx-auto">
              <div className="text-white text-xl mb-4">
                A web application is an <strong>interactive software program</strong> that runs in your web browser and can be accessed from anywhere with an internet connection.
              </div>
              <div className="text-cyan-100 text-lg">
                Unlike traditional websites that just show information, web apps let you <strong>do things</strong>!
              </div>
            </div>
          </div>

          {/* Interactive Examples */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Social Media',
                icon: '📱',
                examples: 'Instagram, Twitter, Facebook',
                actions: ['Post photos', 'Like & comment', 'Send messages', 'Follow friends'],
                color: 'from-pink-500 to-purple-500'
              },
              {
                name: 'E-commerce',
                icon: '🛒',
                examples: 'Amazon, Shopify, eBay',
                actions: ['Browse products', 'Add to cart', 'Make payments', 'Track orders'],
                color: 'from-green-500 to-teal-500'
              },
              {
                name: 'Productivity',
                icon: '📊',
                examples: 'Google Docs, Notion, Slack',
                actions: ['Create documents', 'Collaborate live', 'Manage tasks', 'Share files'],
                color: 'from-blue-500 to-indigo-500'
              },
              {
                name: 'Entertainment',
                icon: '🎵',
                examples: 'Netflix, Spotify, YouTube',
                actions: ['Stream videos', 'Create playlists', 'Rate content', 'Download offline'],
                color: 'from-red-500 to-orange-500'
              },
              {
                name: 'Finance',
                icon: '💳',
                examples: 'Banking apps, PayPal, Venmo',
                actions: ['Transfer money', 'Pay bills', 'Check balance', 'Invest funds'],
                color: 'from-emerald-500 to-green-500'
              },
              {
                name: 'Education',
                icon: '🎓',
                examples: 'Khan Academy, Coursera, Duolingo',
                actions: ['Take courses', 'Submit assignments', 'Track progress', 'Earn certificates'],
                color: 'from-violet-500 to-purple-500'
              }
            ].map((category, index) => (
              <div key={index} 
                   className="group bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20 
                            hover:bg-white/20 hover:scale-105 hover:border-white/40 
                            transition-all duration-500 cursor-pointer relative overflow-hidden">
                
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                    <h3 className="text-lg font-bold text-white">{category.name}</h3>
                    <p className="text-sm text-gray-300 mb-3">{category.examples}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-xs font-semibold text-white mb-2">You can:</div>
                    {category.actions.map((action, actionIndex) => (
                      <div key={actionIndex} className="flex items-center space-x-2 text-xs text-gray-200">
                        <span className="text-green-400">•</span>
                        <span>{action}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Key Characteristics */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur rounded-xl p-6 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-white mb-4">🔑 Key Characteristics of Web Applications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-start space-x-3">
                  <span className="text-xl">🌐</span>
                  <div>
                    <div className="text-white font-semibold">Accessible Anywhere</div>
                    <div className="text-yellow-100 text-sm">Works on any device with a browser</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-xl">⚡</span>
                  <div>
                    <div className="text-white font-semibold">Interactive</div>
                    <div className="text-yellow-100 text-sm">Responds to user actions in real-time</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-xl">🔄</span>
                  <div>
                    <div className="text-white font-semibold">Dynamic Content</div>
                    <div className="text-yellow-100 text-sm">Content changes based on user data</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-xl">💾</span>
                  <div>
                    <div className="text-white font-semibold">Persistent Data</div>
                    <div className="text-yellow-100 text-sm">Saves and remembers user information</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Course Connection */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur rounded-xl p-6 border border-white/20 max-w-3xl mx-auto">
              <div className="text-white text-lg mb-2">🎯 In This Course</div>
              <div className="text-purple-100">
                You'll learn to build <strong>complete web applications</strong> from scratch using the 
                <strong className="text-white"> MERN stack</strong> (MongoDB, Express, React, Node.js)
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-cyan-600 to-blue-700'
    },
    
    // 3. Web Development Fundamentals - Client-Server Architecture
    {
      id: 'web-fundamentals',
      title: 'Web Development Fundamentals',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">How Web Applications Work</h2>
          
          {/* Client-Server Architecture */}
          <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Client-Server Architecture</h3>
            
            <div className="flex flex-col lg:flex-row items-center justify-center space-y-6 lg:space-y-0 lg:space-x-12">
              
              {/* Client Side */}
              <div className="text-center">
                <div className="bg-green-500/20 rounded-xl p-6 mb-4 border border-green-400/30">
                  <div className="text-5xl mb-3">💻</div>
                  <h4 className="text-xl font-bold text-white mb-2">Client (Frontend)</h4>
                  <p className="text-green-100 text-sm">Your web browser</p>
                </div>
                <div className="space-y-2 text-sm text-green-200">
                  <div>• Displays user interface</div>
                  <div>• Handles user interactions</div>
                  <div>• Sends requests to server</div>
                </div>
              </div>

              {/* Communication */}
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-blue-400 text-2xl animate-pulse">→</span>
                  <span className="text-blue-300 text-sm">HTTP Request</span>
                </div>
                <div className="text-center">
                  <div className="text-3xl">🌐</div>
                  <div className="text-white text-xs">Internet</div>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-orange-300 text-sm">HTTP Response</span>
                  <span className="text-orange-400 text-2xl animate-pulse">←</span>
                </div>
              </div>

              {/* Server Side */}
              <div className="text-center">
                <div className="bg-orange-500/20 rounded-xl p-6 mb-4 border border-orange-400/30">
                  <div className="text-5xl mb-3">🖥️</div>
                  <h4 className="text-xl font-bold text-white mb-2">Server (Backend)</h4>
                  <p className="text-orange-100 text-sm">Remote computer</p>
                </div>
                <div className="space-y-2 text-sm text-orange-200">
                  <div>• Processes requests</div>
                  <div>• Manages database</div>
                  <div>• Sends responses back</div>
                </div>
              </div>
            </div>
          </div>

          {/* Step-by-step Process */}
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur rounded-xl p-6 border border-white/20">
            <h3 className="text-xl font-bold text-white mb-4 text-center">🔄 What Happens When You Use a Web App</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { step: 1, title: 'User Action', description: 'You click a button or submit a form', icon: '👆' },
                { step: 2, title: 'Request Sent', description: 'Browser sends HTTP request to server', icon: '📤' },
                { step: 3, title: 'Server Processing', description: 'Server processes the request and data', icon: '⚙️' },
                { step: 4, title: 'Database Query', description: 'Server retrieves/updates data if needed', icon: '🗄️' },
                { step: 5, title: 'Response Sent', description: 'Server sends response back to browser', icon: '📥' },
                { step: 6, title: 'UI Update', description: 'Browser updates what you see', icon: '🔄' }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-white font-semibold text-sm mb-1">Step {item.step}: {item.title}</div>
                  <div className="text-gray-300 text-xs">{item.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Full-Stack Developer Role */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur rounded-xl p-6 border border-white/20 max-w-3xl mx-auto">
              <div className="text-white text-lg mb-2">🎯 As a Full-Stack Developer</div>
              <div className="text-purple-100">
                You'll build <strong>both sides</strong>: the client (what users see) and the server (what processes their requests)
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-700'
    },
    {
      id: 'grading',
      title: 'Assessment & Success',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">How You'll Be Evaluated</h2>
          <p className="text-xl text-cyan-100 text-center mb-8">
            Everything is designed to support your learning and growth! 🌟
          </p>
          
          <div className="max-w-5xl mx-auto">
            {/* Pie Chart Section */}
            <PieChartGrading />
          </div>
        </div>
      ),
      bgGradient: 'from-cyan-600 to-blue-700'
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
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">Frontend Development</h2>
          <p className="text-xl text-green-100 text-center mb-8">What users see and interact with</p>
          
          {/* Main Frontend Card */}
          <div className="max-w-4xl mx-auto">
            <div className="group bg-green-500/20 backdrop-blur rounded-xl p-8 border border-green-400/30 
                          hover:bg-green-500/30 hover:border-green-300/50 hover:scale-105 
                          transition-all duration-500 cursor-pointer relative overflow-hidden">
              
              <div className="text-center mb-6 relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🎨</div>
                <h3 className="text-2xl font-bold text-white group-hover:text-green-100 transition-colors mb-2">Frontend</h3>
                <p className="text-lg text-green-100 group-hover:text-green-50 transition-colors">The visual and interactive layer of web applications</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Core Responsibilities:</h4>
                  <ul className="space-y-2 text-green-100 text-sm">
                    {[
                      { icon: '✨', text: 'User Interface Design' },
                      { icon: '🎯', text: 'User Experience' },
                      { icon: '📱', text: 'Responsive Design' },
                      { icon: '⚡', text: 'Interactive Features' }
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span className="text-lg">{item.icon}</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">User Actions:</h4>
                  <ul className="space-y-2 text-green-100 text-sm">
                    {[
                      { icon: '👆', text: 'Click buttons' },
                      { icon: '📝', text: 'Fill forms' },
                      { icon: '📜', text: 'Scroll pages' },
                      { icon: '📱', text: 'Resize windows' }
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span className="text-lg">{item.icon}</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Visual analogy */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur rounded-xl p-6 border border-white/20 max-w-2xl mx-auto">
              <div className="text-white text-lg mb-2">🌟 Think of Frontend Like...</div>
              <div className="text-green-100">
                The <strong>storefront</strong> of a business - what customers see and interact with!
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-teal-700'
    },
    {
      id: 'frontend-tech',
      title: 'Frontend Technologies',
      content: (
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">Frontend Tech Stack</h2>
          <p className="text-xl text-green-100 text-center mb-8">The tools you'll master</p>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: 'HTML', icon: '🏗️', color: 'from-orange-500 to-red-500' },
                { name: 'CSS', icon: '🎨', color: 'from-blue-500 to-cyan-500' },
                { name: 'JavaScript', icon: '⚡', color: 'from-yellow-500 to-orange-500' },
                { name: 'React.js', icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
                { name: 'Tailwind CSS', icon: '🌈', color: 'from-purple-500 to-pink-500' },
                { name: 'React Router', icon: '🚦', color: 'from-green-500 to-teal-500' }
              ].map((tech, index) => (
                <div key={index} 
                     className="group bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20 
                              hover:bg-white/20 hover:scale-105 hover:border-white/40 
                              transition-all duration-500 cursor-pointer relative overflow-hidden">
                  
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                    <h3 className="text-sm font-bold text-white">{tech.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Learning timeline */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur rounded-xl p-6 border border-white/20 max-w-3xl mx-auto">
              <div className="text-white text-lg mb-4">🎯 Your Learning Journey</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-orange-300 font-semibold">Week 1</div>
                  <div className="text-white text-xs">HTML/CSS/JS</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-blue-300 font-semibold">Week 2-3</div>
                  <div className="text-white text-xs">React Basics</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-purple-300 font-semibold">Week 4</div>
                  <div className="text-white text-xs">Styling</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="text-green-300 font-semibold">Week 8+</div>
                  <div className="text-white text-xs">Full-Stack</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-emerald-600 to-green-700'
    },
    {
      id: 'backend',
      title: 'Backend Development',
      content: (
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">Backend Development</h2>
          <p className="text-xl text-orange-100 text-center mb-8">Server logic and data management</p>
          
          {/* Main Backend Card */}
          <div className="max-w-4xl mx-auto">
            <div className="group bg-orange-500/20 backdrop-blur rounded-xl p-8 border border-orange-400/30 
                          hover:bg-orange-500/30 hover:border-orange-300/50 hover:scale-105 
                          transition-all duration-500 cursor-pointer relative overflow-hidden">
              
              <div className="text-center mb-6 relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">⚙️</div>
                <h3 className="text-2xl font-bold text-white group-hover:text-orange-100 transition-colors mb-2">Backend</h3>
                <p className="text-lg text-orange-100 group-hover:text-orange-50 transition-colors">The engine that powers web applications</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Core Responsibilities:</h4>
                  <ul className="space-y-2 text-orange-100 text-sm">
                    {[
                      { icon: '🗄️', text: 'Database Operations' },
                      { icon: '🔐', text: 'Authentication' },
                      { icon: '📡', text: 'API Endpoints' },
                      { icon: '🔒', text: 'Business Logic' }
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span className="text-lg">{item.icon}</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Process Flow:</h4>
                  <ul className="space-y-2 text-orange-100 text-sm">
                    {[
                      { icon: '📥', text: 'Receive Request' },
                      { icon: '✅', text: 'Validate Data' },
                      { icon: '🗄️', text: 'Query Database' },
                      { icon: '📤', text: 'Send Response' }
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <span className="text-lg">{item.icon}</span>
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Visual analogy */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur rounded-xl p-6 border border-white/20 max-w-2xl mx-auto">
              <div className="text-white text-lg mb-2">🏭 Think of Backend Like...</div>
              <div className="text-orange-100">
                The <strong>warehouse and management</strong> - handling everything behind the scenes!
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-orange-600 to-red-700'
    },
    {
      id: 'backend-tech',
      title: 'Backend Technologies',
      content: (
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white mb-6 text-center">Backend Tech Stack</h2>
          <p className="text-xl text-orange-100 text-center mb-8">Server-side tools you'll master</p>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-emerald-500' },
                { name: 'Express.js', icon: '🚂', color: 'from-gray-600 to-gray-800' },
                { name: 'MongoDB', icon: '🗄️', color: 'from-green-600 to-green-800' },
                { name: 'Mongoose', icon: '🔗', color: 'from-red-500 to-orange-500' },
                { name: 'REST APIs', icon: '📡', color: 'from-blue-500 to-purple-500' },
                { name: 'JWT Auth', icon: '🔐', color: 'from-purple-500 to-pink-500' }
              ].map((tech, index) => (
                <div key={index} 
                     className="group bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20 
                              hover:bg-white/20 hover:scale-105 hover:border-white/40 
                              transition-all duration-500 cursor-pointer relative overflow-hidden">
                  
                  <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                    <h3 className="text-sm font-bold text-white">{tech.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Code example */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur rounded-xl p-6 border border-white/20 max-w-3xl mx-auto">
              <div className="text-white text-lg mb-4">📡 Example API Code</div>
              <CodeBlock
                code={`app.post('/api/users/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const isValid = await bcrypt.compare(req.body.password, user.password);
  
  if (isValid) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    res.json({ success: true, token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});`}
                filename="server.js"
                language="javascript"
              />
              <div className="text-orange-100 text-sm mt-3">
                This is what you'll be writing by Week 7! 🚀
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-600 to-orange-700'
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
      title: 'Interactive CLI Practice',
      content: (
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white mb-6">Practice Terminal Commands</h2>
          <p className="text-xl text-blue-100 text-center mb-6">
            Try commands in the terminal below and watch the file system change in real-time!
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Terminal Simulator */}
            <div className="lg:col-span-2">
              <TerminalSimulator />
            </div>
            
            {/* Quick Command Reference */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white text-center">Quick Reference</h3>
              <div className="bg-white/10 backdrop-blur rounded-xl p-4 space-y-3">
                <div className="text-gray-300 text-sm mb-3">File System Navigation:</div>
                <div className="space-y-2">
                  <CodeBlock code="pwd" showCopy={true} className="text-xs p-2" />
                  <CodeBlock code="ls" showCopy={true} className="text-xs p-2" />
                  <CodeBlock code="cd foldername" showCopy={true} className="text-xs p-2" />
                  <CodeBlock code="cd .." showCopy={true} className="text-xs p-2" />
                </div>
                
                <div className="text-gray-300 text-sm mb-3 mt-4">Creating & Managing:</div>
                <div className="space-y-2">
                  <CodeBlock code="mkdir newfolder" showCopy={true} className="text-xs p-2" />
                  <CodeBlock code="clear" showCopy={true} className="text-xs p-2" />
                </div>
                
                <div className="text-gray-300 text-sm mb-3 mt-4">Node.js & npm:</div>
                <div className="space-y-2">
                  <CodeBlock code="node --version" showCopy={true} className="text-xs p-2" />
                  <CodeBlock code="npm --version" showCopy={true} className="text-xs p-2" />
                  <CodeBlock code="npm init" showCopy={true} className="text-xs p-2" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-500/20 border border-yellow-400/30 rounded-xl p-6">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🎯</span>
              <span className="text-yellow-100">
                <strong>Learning Goal:</strong> Master these essential commands - you'll use them throughout the entire course!
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
              <CodeBlock
                code={`// Your first Node.js script
console.log("Hello, World!");
console.log("Welcome to CS390!");

// Show current date
const now = new Date();
console.log("Today is:", now.toDateString());`}
                filename="hello.js"
                language="javascript"
              />
              <CodeBlock
                code={`$ node hello.js
Hello, World!
Welcome to CS390!
Today is: Mon Dec 09 2024`}
                filename="Terminal"
                language="bash"
                className="bg-gray-900/70"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Let's Try It!</h3>
              <ol className="space-y-4 text-blue-100">
                <li className="flex items-start">
                  <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                  Create a new file called <InlineCode>hello.js</InlineCode>
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
                  Run <InlineCode>node hello.js</InlineCode>
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