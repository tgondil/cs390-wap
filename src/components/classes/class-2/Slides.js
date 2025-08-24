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
  @keyframes git-flow {
    0% { transform: translateX(0); opacity: 1; }
    50% { transform: translateX(100px); opacity: 0.7; }
    100% { transform: translateX(200px); opacity: 1; }
  }
  .animate-git-flow {
    animation: git-flow 2s ease-in-out infinite;
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

// Enhanced Interactive Git Workflow Demo
const GitWorkflowDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [files, setFiles] = useState(['index.html', 'style.css']);
  const [commits, setCommits] = useState([]);
  const [stagingArea, setStagingArea] = useState([]);
  const [workingChanges, setWorkingChanges] = useState(['index.html (modified)', 'app.js (new)']);
  const [currentBranch, setCurrentBranch] = useState('main');
  const [branches, setBranches] = useState(['main']);

  const steps = [
    { action: 'init', title: 'Initialize Repository', description: 'Create a new Git repository', command: 'git init' },
    { action: 'add', title: 'Stage Changes', description: 'Add files to staging area', command: 'git add .' },
    { action: 'commit', title: 'Commit Changes', description: 'Save changes to repository', command: 'git commit -m "Initial commit"' },
    { action: 'push', title: 'Push to GitHub', description: 'Upload to remote repository', command: 'git push origin main' },
    { action: 'branch', title: 'Create Branch', description: 'Create feature branch', command: 'git checkout -b feature/new-page' },
    { action: 'merge', title: 'Merge Branch', description: 'Merge feature back to main', command: 'git merge feature/new-page' }
  ];

  const executeStep = async (stepIndex) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setCurrentStep(stepIndex);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    switch (steps[stepIndex].action) {
      case 'init':
        setCommits([]);
        setStagingArea([]);
        break;
      case 'add':
        setStagingArea([...workingChanges]);
        setWorkingChanges([]);
        break;
      case 'commit':
        setCommits(prev => [...prev, {
          id: `commit-${prev.length + 1}`,
          message: prev.length === 0 ? 'Initial commit' : `Feature update ${prev.length + 1}`,
          files: [...stagingArea],
          branch: currentBranch
        }]);
        setStagingArea([]);
        break;
      case 'push':
        // Visual push animation - commits stay but show as "pushed"
        break;
      case 'branch':
        if (!branches.includes('feature/new-page')) {
          setBranches(prev => [...prev, 'feature/new-page']);
          setCurrentBranch('feature/new-page');
          setWorkingChanges(['new-page.html (new)', 'navbar.css (modified)']);
        }
        break;
      case 'merge':
        setCurrentBranch('main');
        setCommits(prev => [...prev, {
          id: `merge-${prev.length + 1}`,
          message: 'Merge feature/new-page into main',
          files: ['new-page.html', 'navbar.css'],
          branch: 'main',
          isMerge: true
        }]);
        break;
    }
    
    setIsAnimating(false);
  };

  const resetDemo = () => {
    setCurrentStep(0);
    setFiles(['index.html', 'style.css']);
    setCommits([]);
    setStagingArea([]);
    setWorkingChanges(['index.html (modified)', 'app.js (new)']);
    setCurrentBranch('main');
    setBranches(['main']);
  };

  return (
    <div className="bg-white/10 rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-white">Interactive Git Workflow</h3>
        <button
          onClick={resetDemo}
          className="bg-gray-600 hover:bg-gray-700 text:white px-4 py-2 rounded text-sm transition-colors"
        >
          Reset Demo
        </button>
      </div>
      
      {/* Current Branch Indicator */}
      <div className="mb-4 flex items-center space-x-4">
        <span className="text-white font-medium">Current Branch:</span>
        <div className="flex space-x-2">
          {branches.map(branch => (
            <span
              key={branch}
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                branch === currentBranch
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-600 text-gray-300'
              }`}
            >
              {branch}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {/* Working Directory */}
        <div className="bg-blue-500/20 rounded-lg p-4">
          <h4 className="font-semibold text-white mb-3">Working Directory</h4>
          <div className="space-y-2">
            {files.map((file, index) => (
              <div key={index} className="bg:white/20 rounded px-3 py-2 text-sm text-white">
                📄 {file}
              </div>
            ))}
            {workingChanges.map((change, index) => (
              <div key={index} className="bg-yellow-500/30 rounded px-3 py-2 text-sm text-white border border-yellow-400/50">
                ⚠️ {change}
              </div>
            ))}
          </div>
        </div>

        {/* Staging Area */}
        <div className="bg-yellow-500/20 rounded-lg p-4">
          <h4 className="font-semibold text-white mb-3">Staging Area</h4>
          <div className="space-y-2">
            {stagingArea.map((file, index) => (
              <div key={index} className="bg-white/20 rounded px-3 py-2 text-sm text-white animate-fade-in">
                📄 {file}
              </div>
            ))}
            {stagingArea.length === 0 && (
              <div className="text-gray-400 text-sm italic">No staged files</div>
            )}
          </div>
        </div>

        {/* Local Repository */}
        <div className="bg-green-500/20 rounded-lg p-4">
          <h4 className="font-semibold text-white mb-3">Local Repository</h4>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {commits.map((commit, index) => (
              <div key={commit.id} className={`bg-white/20 rounded px-3 py-2 text-sm text-white animate-fade-in ${commit.isMerge ? 'border border-purple-400' : ''}`}>
                <div className="flex items-center">
                  {commit.isMerge ? '🔀' : '🔄'} 
                  <span className="ml-2 truncate">{commit.message}</span>
                </div>
                <div className="text-xs text-gray-300 mt-1">
                  {commit.branch} • {commit.files.length} files
                </div>
              </div>
            ))}
            {commits.length === 0 && (
              <div className="text-gray-400 text-sm italic">No commits yet</div>
            )}
          </div>
        </div>

        {/* Remote Repository (GitHub) */}
        <div className="bg-purple-500/20 rounded-lg p-4">
          <h4 className="font-semibold text-white mb-3">Remote (GitHub)</h4>
          <div className="space-y-2">
            {currentStep >= 3 && commits.length > 0 && (
              <div className="bg-white/20 rounded px-3 py-2 text-sm text-white">
                <div className="flex items-center">
                  🌐 <span className="ml-2">origin/main</span>
                </div>
                <div className="text-xs text-gray-300 mt-1">
                  {commits.length} commits synced
                </div>
              </div>
            )}
            {(currentStep < 3 || commits.length === 0) && (
              <div className="text-gray-400 text-sm italic">Not connected</div>
            )}
          </div>
        </div>
      </div>

      {/* Command Display */}
      {currentStep < steps.length && (
        <div className="mb-4 bg-gray-900 rounded-lg p-3">
          <div className="text-green-400 font-mono text-sm">
            $ {steps[currentStep].command}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => executeStep(index)}
            disabled={isAnimating}
            className={`px-3 py-2 rounded-lg font-medium transition-all duration-200 text-sm ${
              currentStep === index && isAnimating
                ? 'bg-blue-600 text-white animate-pulse'
                : index <= currentStep
                ? 'bg-green-600/80 text-white'
                : 'bg-white/20 text-white hover:bg-white/30'
            } disabled:opacity-50`}
          >
            <div className="text-xs opacity-75 mb-1">{step.action.toUpperCase()}</div>
            <div className="text-xs">{step.title}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

// Git Branching Visualizer
const GitBranchingDemo = () => {
  const [selectedScenario, setSelectedScenario] = useState('feature');
  
  const scenarios = {
    feature: {
      title: 'Feature Branch Workflow',
      description: 'Create a feature branch, make changes, then merge back',
      branches: [
        { name: 'main', commits: ['Initial', 'Setup', 'Config', 'Merge feature'] },
        { name: 'feature/login', commits: ['Add login form', 'Add validation', 'Fix styling'] }
      ]
    },
    hotfix: {
      title: 'Hotfix Workflow',
      description: 'Quickly fix a critical bug in production',
      branches: [
        { name: 'main', commits: ['Initial', 'Feature A', 'Bug fix', 'Deploy'] },
        { name: 'hotfix/critical-bug', commits: ['Fix critical bug'] }
      ]
    },
    collaboration: {
      title: 'Team Collaboration',
      description: 'Multiple developers working on different features',
      branches: [
        { name: 'main', commits: ['Initial', 'Merge Alice', 'Merge Bob'] },
        { name: 'alice/header', commits: ['Add header', 'Style header'] },
        { name: 'bob/footer', commits: ['Add footer', 'Add links'] }
      ]
    }
  };

  return (
    <div className="bg-white/10 rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-4">Git Branching Strategies</h3>
      
      {/* Scenario Selector */}
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.entries(scenarios).map(([key, scenario]) => (
          <button
            key={key}
            onClick={() => setSelectedScenario(key)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedScenario === key
                ? 'bg-blue-600 text-white'
                : 'bg-white/20 text-white hover:bg:white/30'
            }`}
          >
            {scenario.title}
          </button>
        ))}
      </div>

      {/* Current Scenario */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-white mb-2">
          {scenarios[selectedScenario].title}
        </h4>
        <p className="text-gray-300 text-sm">
          {scenarios[selectedScenario].description}
        </p>
      </div>

      {/* Branch Visualization */}
      <div className="space-y-4">
        {scenarios[selectedScenario].branches.map((branch, branchIndex) => (
          <div key={branch.name} className="flex items-center space-x-4">
            <div className={`w-24 text-sm font-medium ${
              branch.name === 'main' ? 'text-green-400' : 'text-blue-400'
            }`}>
              {branch.name}
            </div>
            <div className="flex-1 flex items-center space-x-2">
              {branch.commits.map((commit, commitIndex) => (
                <div key={commitIndex} className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${
                    branch.name === 'main' ? 'bg-green-500' : 'bg-blue-500'
                  }`}></div>
                  <div className="ml-2 text-xs text-white bg-gray-800 px-2 py-1 rounded">
                    {commit}
                  </div>
                  {commitIndex < branch.commits.length - 1 && (
                    <div className="w-4 h-0.5 bg-gray-600 mx-1"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Git Commands Cheat Sheet
const GitCommandsCheatSheet = () => {
  const [selectedCategory, setSelectedCategory] = useState('basics');
  
  const commandCategories = {
    basics: {
      title: 'Basic Commands',
      commands: [
        { cmd: 'git init', desc: 'Initialize a new Git repository' },
        { cmd: 'git clone <url>', desc: 'Clone a repository from remote' },
        { cmd: 'git status', desc: 'Check the status of your working directory' },
        { cmd: 'git add <file>', desc: 'Stage specific file for commit' },
        { cmd: 'git add .', desc: 'Stage all changes for commit' },
        { cmd: 'git commit -m "message"', desc: 'Commit staged changes with message' },
        { cmd: 'git push origin main', desc: 'Push commits to remote repository' },
        { cmd: 'git pull origin main', desc: 'Pull latest changes from remote' }
      ]
    },
    branching: {
      title: 'Branching & Merging',
      commands: [
        { cmd: 'git branch', desc: 'List all branches' },
        { cmd: 'git branch <name>', desc: 'Create a new branch' },
        { cmd: 'git checkout <branch>', desc: 'Switch to a branch' },
        { cmd: 'git checkout -b <name>', desc: 'Create and switch to new branch' },
        { cmd: 'git merge <branch>', desc: 'Merge branch into current branch' },
        { cmd: 'git branch -d <name>', desc: 'Delete a branch' },
        { cmd: 'git rebase <branch>', desc: 'Rebase current branch onto another' }
      ]
    },
    advanced: {
      title: 'Advanced Commands',
      commands: [
        { cmd: 'git log --oneline', desc: 'View commit history in compact format' },
        { cmd: 'git diff', desc: 'Show changes between commits/branches' },
        { cmd: 'git reset --soft HEAD~1', desc: 'Undo last commit, keep changes staged' },
        { cmd: 'git reset --hard HEAD~1', desc: 'Undo last commit, discard changes' },
        { cmd: 'git stash', desc: 'Temporarily save changes without committing' },
        { cmd: 'git stash pop', desc: 'Apply most recent stash and remove it' },
        { cmd: 'git cherry-pick <commit>', desc: 'Apply specific commit to current branch' }
      ]
    },
    collaboration: {
      title: 'Collaboration',
      commands: [
        { cmd: 'git remote -v', desc: 'List all remote repositories' },
        { cmd: 'git remote add origin <url>', desc: 'Add remote repository' },
        { cmd: 'git fetch origin', desc: 'Download changes without merging' },
        { cmd: 'git pull --rebase', desc: 'Pull and rebase instead of merge' },
        { cmd: 'git push -u origin <branch>', desc: 'Push branch and set upstream' },
        { cmd: 'git blame <file>', desc: 'Show who changed each line in a file' },
        { cmd: 'git tag v1.0.0', desc: 'Create a tag for version' }
      ]
    }
  };

  return (
    <div className="bg-white/10 rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-4">Git Commands Reference</h3>
      
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {Object.entries(commandCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
              selectedCategory === key
                ? 'bg-blue-600 text-white'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      {/* Commands List */}
      <div className="space-y-3">
        {commandCategories[selectedCategory].commands.map((command, index) => (
          <div key={index} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <CodeBlock 
                code={command.cmd}
                showCopy={true}
                className="mb-2 md:mb-0 md:mr-4 flex-shrink-0"
              />
              <p className="text-gray-300 text-sm">{command.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Common Git Scenarios and Solutions
const GitScenariosDemo = () => {
  const [selectedScenario, setSelectedScenario] = useState(0);
  
  const scenarios = [
    {
      title: "Oops! Wrong commit message",
      problem: "You just committed but realized your commit message has a typo",
      solution: "Use git commit --amend to fix the last commit message",
      commands: [
        "git commit --amend -m 'Correct commit message'",
        "# This replaces the last commit with a new one"
      ],
      tip: "Only amend commits that haven't been pushed to remote!"
    },
    {
      title: "I committed to the wrong branch",
      problem: "You made commits on main but they should be on a feature branch",
      solution: "Create a new branch and reset main to previous state",
      commands: [
        "git branch feature/my-changes  # Create branch with current commits",
        "git checkout main",
        "git reset --hard HEAD~2  # Reset main back 2 commits",
        "git checkout feature/my-changes  # Switch to feature branch"
      ],
      tip: "Always check which branch you're on before committing!"
    }
  ];

  return (
    <div className="bg-white/10 rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-4">Common Git Scenarios</h3>
      
      <div className="flex space-x-2 mb-4">
        {scenarios.map((scenario, index) => (
          <button
            key={scenario.title}
            onClick={() => setSelectedScenario(index)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedScenario === index
                ? 'bg-blue-600 text-white'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            {scenario.title}
          </button>
        ))}
      </div>

      <div className="bg-white/5 rounded-lg p-4">
        <h4 className="text-lg font-semibold text-white mb-2">{scenarios[selectedScenario].title}</h4>
        <p className="text-gray-300 text-sm mb-2">{scenarios[selectedScenario].problem}</p>
        <div className="mb-2">
          {scenarios[selectedScenario].commands.map((cmd, idx) => (
            <CodeBlock key={idx} code={cmd} />
          ))}
        </div>
        <p className="text-blue-200 text-sm">Tip: {scenarios[selectedScenario].tip}</p>
      </div>
    </div>
  );
};

// Class 2 Slides Main Component
const Class2Slides = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [showNav, setShowNav] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') setCurrentSection((prev) => Math.min(prev + 1, 5));
      if (e.key === 'ArrowLeft') setCurrentSection((prev) => Math.max(prev - 1, 0));
      if (e.key === 'h') setShowNav((prev) => !prev);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const sections = [
    'Welcome',
    'Git & GitHub Basics',
    'Interactive Git Workflow',
    'Branching Strategies',
    'Common Scenarios',
    'Wrap Up'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-800 text-white">
      <style>{customStyles}</style>

      {/* Header */}
      <div className="sticky top-0 z-40 bg-black/40 backdrop-blur border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/" className="text-white/80 hover:text-white">← Home</Link>
            <div className="text-sm text-white/60">Use ← and → to navigate</div>
          </div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => setShowNav((prev) => !prev)}
              className="bg-white/10 hover:bg-white/20 text-white rounded px-3 py-1 text-sm"
            >
              {showNav ? 'Hide' : 'Show'} Navigation
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Section Navigation */}
        {showNav && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {sections.map((section, index) => (
                <button
                  key={section}
                  onClick={() => setCurrentSection(index)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                    currentSection === index 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Content Sections */}
        <div className="space-y-6">
          {/* 0. Welcome */}
          {currentSection === 0 && (
            <div className="bg-white/10 rounded-xl p-6 animate-fade-in">
              <h1 className="text-3xl font-bold mb-2">Class 2: Git, GitHub & HTML/CSS/JS Refresher</h1>
              <p className="text-white/80">
                In this class, we'll set up Git, create a repository, and refresh front-end fundamentals.
              </p>
            </div>
          )}

          {/* 1. Git & GitHub Basics */}
          {currentSection === 1 && (
            <div className="bg-white/10 rounded-xl p-6 animate-fade-in">
              <h2 className="text-2xl font-bold mb-4">Git & GitHub Basics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/90">
                <div>
                  <h3 className="font-semibold mb-2">Core Concepts</h3>
                  <ul className="text-sm space-y-1">
                    <li>• Version control and why it matters</li>
                    <li>• Repositories, commits, branches</li>
                    <li>• Local vs remote, GitHub basics</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Setup</h3>
                  <CodeBlock code={`git config --global user.name "Your Name"\ngit config --global user.email "you@example.com"`} />
                </div>
              </div>
            </div>
          )}

          {/* 2. Interactive Git Workflow */}
          {currentSection === 2 && (
            <div className="bg-white/10 rounded-xl p-6 animate-fade-in">
              <h2 className="text-2xl font-bold mb-4">Interactive Git Workflow</h2>
              <GitWorkflowDemo />
            </div>
          )}

          {/* 3. Branching Strategies */}
          {currentSection === 3 && (
            <div className="bg-white/10 rounded-xl p-6 animate-fade-in">
              <h2 className="text-2xl font-bold mb-4">Branching Strategies</h2>
              <GitBranchingDemo />
            </div>
          )}

          {/* 4. Common Scenarios */}
          {currentSection === 4 && (
            <div className="bg-white/10 rounded-xl p-6 animate-fade-in">
              <h2 className="text-2xl font-bold mb-4">Common Scenarios</h2>
              <GitScenariosDemo />
            </div>
          )}

          {/* 5. Wrap Up */}
          {currentSection === 5 && (
            <div className="bg-white/10 rounded-xl p-6 animate-fade-in">
              <h2 className="text-2xl font-bold mb-4">Wrap Up</h2>
              <p className="text-white/80">
                Practice the git commands and set up a simple webpage. Push it to GitHub.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Class2Slides; 