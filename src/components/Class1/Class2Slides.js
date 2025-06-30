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
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded text-sm transition-colors"
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
              <div key={index} className="bg-white/20 rounded px-3 py-2 text-sm text-white">
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
                : 'bg-white/20 text-white hover:bg-white/30'
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
    },
    {
      title: "Merge conflicts happened",
      problem: "Git can't automatically merge branches due to conflicting changes",
      solution: "Manually resolve conflicts and complete the merge",
      commands: [
        "git merge feature-branch  # Conflict occurs",
        "# Edit conflicted files, remove conflict markers",
        "git add .  # Stage resolved files",
        "git commit  # Complete the merge"
      ],
      tip: "Look for <<<<<<< ======= >>>>>>> markers in conflicted files"
    },
    {
      title: "I need to undo changes",
      problem: "You made changes but want to go back to the last commit",
      solution: "Different approaches depending on what you want to undo",
      commands: [
        "git checkout -- <file>  # Undo changes to specific file",
        "git reset --hard HEAD  # Undo all uncommitted changes",
        "git revert <commit-hash>  # Create new commit that undoes a previous commit"
      ],
      tip: "Be careful with --hard reset, it permanently deletes changes!"
    },
    {
      title: "Accidentally deleted a file",
      problem: "You deleted a file and want to recover it from Git history",
      solution: "Use Git to restore the file from a previous commit",
      commands: [
        "git checkout HEAD~1 -- <filename>  # Restore from previous commit",
        "git checkout <commit-hash> -- <filename>  # Restore from specific commit",
        "git log --follow -- <filename>  # Find commits that modified the file"
      ],
      tip: "Git tracks file history, so you can usually recover deleted files!"
    }
  ];

  return (
    <div className="bg-white/10 rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-4">Common Git Problems & Solutions</h3>
      
      {/* Scenario Selector */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-6">
        {scenarios.map((scenario, index) => (
          <button
            key={index}
            onClick={() => setSelectedScenario(index)}
            className={`p-3 rounded-lg text-left transition-colors ${
              selectedScenario === index
                ? 'bg-red-600 text-white'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            <div className="font-medium text-sm">{scenario.title}</div>
          </button>
        ))}
      </div>

      {/* Selected Scenario Details */}
      <div className="space-y-4">
        <div className="bg-red-500/20 border border-red-400/30 rounded-lg p-4">
          <h4 className="font-semibold text-red-300 mb-2">😱 Problem:</h4>
          <p className="text-white">{scenarios[selectedScenario].problem}</p>
        </div>

        <div className="bg-green-500/20 border border-green-400/30 rounded-lg p-4">
          <h4 className="font-semibold text-green-300 mb-2">✅ Solution:</h4>
          <p className="text-white mb-3">{scenarios[selectedScenario].solution}</p>
          
          <div className="space-y-2">
            {scenarios[selectedScenario].commands.map((command, index) => (
              <CodeBlock 
                key={index}
                code={command}
                showCopy={true}
              />
            ))}
          </div>
        </div>

        <div className="bg-blue-500/20 border border-blue-400/30 rounded-lg p-4">
          <h4 className="font-semibold text-blue-300 mb-2">💡 Pro Tip:</h4>
          <p className="text-white">{scenarios[selectedScenario].tip}</p>
        </div>
      </div>
    </div>
  );
};

// HTML Tag Explorer - Educational component
const HTMLTagExplorer = () => {
  const [selectedTag, setSelectedTag] = useState('div');
  const [showDescription, setShowDescription] = useState(true);

  const htmlTags = {
    structure: {
      title: 'Structure Tags',
      description: 'Tags that define the overall structure of your webpage',
      tags: {
        'html': {
          description: 'Root element that wraps all content on the page',
          example: '<html>\n  <!-- All page content goes here -->\n</html>',
          purpose: 'Tells the browser this is an HTML document',
          attributes: ['lang (language of content)']
        },
        'head': {
          description: 'Contains metadata about the document (not visible to users)',
          example: '<head>\n  <title>My Page</title>\n  <meta charset="UTF-8">\n</head>',
          purpose: 'Information for browsers and search engines',
          attributes: []
        },
        'body': {
          description: 'Contains all visible content on the webpage',
          example: '<body>\n  <h1>Welcome!</h1>\n  <p>This is visible content</p>\n</body>',
          purpose: 'Everything users see and interact with',
          attributes: ['onload', 'class', 'id']
        }
      }
    },
    semantic: {
      title: 'Semantic Tags',
      description: 'Tags that give meaning to content sections',
      tags: {
        'header': {
          description: 'Top section of page or article, usually contains navigation or title',
          example: '<header>\n  <h1>Site Title</h1>\n  <nav>Navigation here</nav>\n</header>',
          purpose: 'Clearly marks the header area for accessibility and SEO',
          attributes: ['role', 'class', 'id']
        },
        'nav': {
          description: 'Navigation links section',
          example: '<nav>\n  <a href="/">Home</a>\n  <a href="/about">About</a>\n</nav>',
          purpose: 'Helps screen readers and search engines find navigation',
          attributes: ['aria-label', 'role']
        },
        'main': {
          description: 'Primary content area of the page',
          example: '<main>\n  <article>Main content here</article>\n</main>',
          purpose: 'Identifies the main content for accessibility',
          attributes: ['role']
        },
        'section': {
          description: 'Thematic grouping of content, usually with a heading',
          example: '<section>\n  <h2>About Us</h2>\n  <p>Content about us...</p>\n</section>',
          purpose: 'Groups related content together semantically',
          attributes: ['aria-labelledby', 'aria-label']
        },
        'article': {
          description: 'Self-contained content that could stand alone',
          example: '<article>\n  <h2>Blog Post Title</h2>\n  <p>Blog content...</p>\n</article>',
          purpose: 'Perfect for blog posts, news articles, or independent content',
          attributes: []
        },
        'footer': {
          description: 'Bottom section with copyright, links, contact info',
          example: '<footer>\n  <p>&copy; 2024 My Company</p>\n</footer>',
          purpose: 'Marks footer content for structure and accessibility',
          attributes: []
        }
      }
    },
    content: {
      title: 'Content Tags',
      description: 'Tags for different types of content',
      tags: {
        'h1': {
          description: 'Main heading - most important title on the page',
          example: '<h1>Welcome to My Website</h1>',
          purpose: 'SEO and accessibility - only one H1 per page',
          attributes: []
        },
        'h2': {
          description: 'Section headings - second level importance',
          example: '<h2>About Our Services</h2>',
          purpose: 'Creates content hierarchy and structure',
          attributes: []
        },
        'p': {
          description: 'Paragraph of text content',
          example: '<p>This is a paragraph with some text content that explains something to the user.</p>',
          purpose: 'Basic text content with automatic spacing',
          attributes: []
        },
        'div': {
          description: 'Generic container for grouping elements (no semantic meaning)',
          example: '<div class="card">\n  <h3>Card Title</h3>\n  <p>Card content</p>\n</div>',
          purpose: 'Styling and layout purposes - use semantic tags when possible',
          attributes: ['class', 'id', 'style']
        },
        'span': {
          description: 'Inline container for styling part of text',
          example: '<p>This is <span class="highlight">important text</span> in a paragraph.</p>',
          purpose: 'Style specific words or phrases within text',
          attributes: ['class', 'id', 'style']
        },
        'a': {
          description: 'Links to other pages or sections',
          example: '<a href="https://google.com">Visit Google</a>\n<a href="#section1">Go to Section 1</a>',
          purpose: 'Navigation between pages or sections',
          attributes: ['href (destination)', 'target', 'rel']
        },
        'img': {
          description: 'Images (self-closing tag)',
          example: '<img src="photo.jpg" alt="Description of photo">',
          purpose: 'Display images with accessibility description',
          attributes: ['src (image file)', 'alt (description)', 'width', 'height']
        },
        'button': {
          description: 'Clickable button for user interaction',
          example: '<button onclick="doSomething()">Click Me!</button>',
          purpose: 'User actions like submitting forms or triggering events',
          attributes: ['onclick', 'type', 'disabled']
        }
      }
    }
  };

  const allTags = Object.values(htmlTags).flatMap(category => Object.keys(category.tags));
  const getCurrentTag = () => {
    for (const category of Object.values(htmlTags)) {
      if (category.tags[selectedTag]) {
        return category.tags[selectedTag];
      }
    }
    return null;
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-4">HTML Tags Explorer</h3>
        <p className="text-gray-300">Learn what each HTML tag does and when to use it</p>
      </div>

      {/* Category Selector */}
      <div className="flex flex-wrap gap-2 justify-center">
        {Object.entries(htmlTags).map(([key, category]) => (
          <div key={key} className="space-y-2">
            <h4 className="text-center text-sm font-medium text-gray-300">{category.title}</h4>
            <div className="flex flex-wrap gap-1 justify-center">
              {Object.keys(category.tags).map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 rounded text-sm font-mono transition-colors ${
                    selectedTag === tag
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  &lt;{tag}&gt;
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tag Details */}
      {getCurrentTag() && (
        <div className="bg-white/10 rounded-xl p-6 space-y-4">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="text-xl font-bold text-white mb-2">
                <span className="font-mono text-blue-300">&lt;{selectedTag}&gt;</span> Tag
              </h4>
              <p className="text-gray-300">{getCurrentTag().description}</p>
            </div>
            <button
              onClick={() => setShowDescription(!showDescription)}
              className="bg-white/20 text-white px-3 py-1 rounded text-sm hover:bg-white/30"
            >
              {showDescription ? 'Hide Details' : 'Show Details'}
            </button>
          </div>

          {showDescription && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h5 className="font-semibold text-green-300 mb-2">Purpose & Usage:</h5>
                  <p className="text-sm text-gray-200">{getCurrentTag().purpose}</p>
                </div>
                
                {getCurrentTag().attributes.length > 0 && (
                  <div>
                    <h5 className="font-semibold text-purple-300 mb-2">Common Attributes:</h5>
                    <ul className="text-sm text-gray-200 space-y-1">
                      {getCurrentTag().attributes.map((attr, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-purple-400 mr-2">•</span>
                          <code className="bg-gray-800 px-1 rounded">{attr}</code>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div>
                <h5 className="font-semibold text-yellow-300 mb-2">Example Code:</h5>
                <CodeBlock 
                  code={getCurrentTag().example}
                  language="html"
                  showCopy={true}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// CSS Concepts Explorer
const CSSConceptsExplorer = () => {
  const [selectedConcept, setSelectedConcept] = useState('selectors');
  const [liveExample, setLiveExample] = useState({
    html: '<div class="box">Hello World!</div>',
    css: '.box {\n  background-color: #3b82f6;\n  color: white;\n  padding: 20px;\n  border-radius: 8px;\n}'
  });

  const cssTopics = {
    selectors: {
      title: 'CSS Selectors',
      description: 'How to target HTML elements for styling',
      concepts: [
        {
          name: 'Element Selector',
          syntax: 'p { color: blue; }',
          explanation: 'Targets all <p> tags',
          example: 'p {\n  color: blue;\n  font-size: 16px;\n}'
        },
        {
          name: 'Class Selector',
          syntax: '.highlight { background: yellow; }',
          explanation: 'Targets elements with class="highlight"',
          example: '.highlight {\n  background-color: yellow;\n  font-weight: bold;\n}'
        },
        {
          name: 'ID Selector',
          syntax: '#header { font-size: 24px; }',
          explanation: 'Targets element with id="header" (should be unique)',
          example: '#header {\n  font-size: 24px;\n  text-align: center;\n}'
        },
        {
          name: 'Descendant Selector',
          syntax: 'nav a { text-decoration: none; }',
          explanation: 'Targets <a> tags inside <nav> elements',
          example: 'nav a {\n  text-decoration: none;\n  color: white;\n}'
        }
      ]
    },
    boxmodel: {
      title: 'Box Model',
      description: 'How CSS calculates element size and spacing',
      concepts: [
        {
          name: 'Content',
          syntax: 'width: 200px; height: 100px;',
          explanation: 'The actual content area of the element',
          example: '.box {\n  width: 200px;\n  height: 100px;\n  background: lightblue;\n}'
        },
        {
          name: 'Padding',
          syntax: 'padding: 20px;',
          explanation: 'Space between content and border (inside the element)',
          example: '.box {\n  padding: 20px;\n  background: lightgreen;\n}'
        },
        {
          name: 'Border',
          syntax: 'border: 2px solid black;',
          explanation: 'Line around the element between padding and margin',
          example: '.box {\n  border: 2px solid #333;\n  border-radius: 5px;\n}'
        },
        {
          name: 'Margin',
          syntax: 'margin: 10px;',
          explanation: 'Space outside the element, pushes other elements away',
          example: '.box {\n  margin: 20px;\n  background: lightyellow;\n}'
        }
      ]
    },
    layout: {
      title: 'Layout Properties',
      description: 'How to position and arrange elements',
      concepts: [
        {
          name: 'Display',
          syntax: 'display: flex;',
          explanation: 'Controls how element participates in layout',
          example: '.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}'
        },
        {
          name: 'Position',
          syntax: 'position: relative;',
          explanation: 'Controls positioning method (static, relative, absolute, fixed)',
          example: '.positioned {\n  position: relative;\n  top: 10px;\n  left: 20px;\n}'
        },
        {
          name: 'Flexbox',
          syntax: 'justify-content: space-between;',
          explanation: 'Modern layout system for arranging items in containers',
          example: '.flex-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}'
        },
        {
          name: 'Grid',
          syntax: 'display: grid;',
          explanation: 'Two-dimensional layout system',
          example: '.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}'
        }
      ]
    },
    styling: {
      title: 'Visual Styling',
      description: 'Properties that change how elements look',
      concepts: [
        {
          name: 'Colors',
          syntax: 'color: #3b82f6;',
          explanation: 'Text color using hex, rgb, or named colors',
          example: '.text {\n  color: #3b82f6;\n  background-color: rgba(59, 130, 246, 0.1);\n}'
        },
        {
          name: 'Typography',
          syntax: 'font-family: Arial, sans-serif;',
          explanation: 'Font properties for text styling',
          example: '.title {\n  font-family: Arial, sans-serif;\n  font-size: 24px;\n  font-weight: bold;\n}'
        },
        {
          name: 'Shadows',
          syntax: 'box-shadow: 0 4px 8px rgba(0,0,0,0.1);',
          explanation: 'Add depth with shadows',
          example: '.card {\n  box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n  text-shadow: 1px 1px 2px rgba(0,0,0,0.5);\n}'
        },
        {
          name: 'Transforms',
          syntax: 'transform: rotate(45deg);',
          explanation: 'Move, rotate, scale elements without affecting layout',
          example: '.rotated {\n  transform: rotate(45deg) scale(1.1);\n  transition: transform 0.3s ease;\n}'
        }
      ]
    }
  };

  const updateLiveExample = (concept) => {
    const examples = {
      selectors: {
        html: '<h1>Main Title</h1>\n<p class="highlight">This paragraph is highlighted</p>\n<p id="special">This paragraph has an ID</p>\n<nav>\n  <a href="#">Link 1</a>\n  <a href="#">Link 2</a>\n</nav>',
        css: 'h1 { color: #2563eb; }\n.highlight { background: yellow; padding: 10px; }\n#special { font-style: italic; border: 2px dashed #10b981; }\nnav a { text-decoration: none; margin-right: 10px; }'
      },
      boxmodel: {
        html: '<div class="box-demo">Content Area</div>',
        css: '.box-demo {\n  width: 200px;\n  height: 100px;\n  padding: 20px;\n  margin: 15px;\n  border: 3px solid #ef4444;\n  background: #dbeafe;\n  color: #1e40af;\n}'
      },
      layout: {
        html: '<div class="flex-container">\n  <div class="item">Item 1</div>\n  <div class="item">Item 2</div>\n  <div class="item">Item 3</div>\n</div>',
        css: '.flex-container {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  height: 100px;\n  background: #f3f4f6;\n}\n.item {\n  padding: 10px 20px;\n  background: #3b82f6;\n  color: white;\n  border-radius: 5px;\n}'
      },
      styling: {
        html: '<div class="styled-card">\n  <h3>Beautiful Card</h3>\n  <p>This demonstrates visual styling properties.</p>\n</div>',
        css: '.styled-card {\n  font-family: Arial, sans-serif;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 8px 16px rgba(0,0,0,0.2);\n  transform: scale(1);\n  transition: transform 0.3s ease;\n}\n.styled-card:hover {\n  transform: scale(1.05);\n}'
      }
    };
    setLiveExample(examples[selectedConcept] || examples.selectors);
  };

  useEffect(() => {
    updateLiveExample(selectedConcept);
  }, [selectedConcept]);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-4">CSS Concepts Explorer</h3>
        <p className="text-gray-300">Learn CSS step by step with interactive examples</p>
      </div>

      {/* Topic Selector */}
      <div className="flex flex-wrap gap-2 justify-center">
        {Object.entries(cssTopics).map(([key, topic]) => (
          <button
            key={key}
            onClick={() => setSelectedConcept(key)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedConcept === key
                ? 'bg-purple-600 text-white'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            {topic.title}
          </button>
        ))}
      </div>

      {/* Topic Description */}
      <div className="text-center">
        <h4 className="text-lg font-semibold text-white mb-2">
          {cssTopics[selectedConcept].title}
        </h4>
        <p className="text-gray-300 text-sm">
          {cssTopics[selectedConcept].description}
        </p>
      </div>

      {/* Concepts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cssTopics[selectedConcept].concepts.map((concept, index) => (
          <div key={index} className="bg-white/10 rounded-lg p-4 hover:bg-white/15 transition-colors">
            <h5 className="font-semibold text-yellow-300 mb-2">{concept.name}</h5>
            <p className="text-sm text-gray-300 mb-3">{concept.explanation}</p>
            <div className="space-y-2">
              <div className="text-xs text-gray-400">Example:</div>
              <CodeBlock 
                code={concept.example}
                language="css"
                showCopy={true}
                className="text-xs"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Live Example */}
      <div className="bg-white/10 rounded-xl p-6">
        <h4 className="text-lg font-bold text-white mb-4">Live Example</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Code */}
          <div className="space-y-4">
            <div>
              <h5 className="font-semibold text-blue-300 mb-2">HTML:</h5>
              <CodeBlock 
                code={liveExample.html}
                language="html"
                showCopy={true}
              />
            </div>
            <div>
              <h5 className="font-semibold text-purple-300 mb-2">CSS:</h5>
              <CodeBlock 
                code={liveExample.css}
                language="css"
                showCopy={true}
              />
            </div>
          </div>

          {/* Preview */}
          <div>
            <h5 className="font-semibold text-green-300 mb-2">Live Preview:</h5>
            <div className="bg-white rounded-lg overflow-hidden shadow-xl">
              {/* Browser mockup header */}
              <div className="bg-gray-200 px-4 py-2 flex items-center space-x-2 border-b">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600">
                  CSS {cssTopics[selectedConcept].title} Demo
                </div>
              </div>
              
              {/* Preview content */}
              <div className="p-4 min-h-[200px] bg-white">
                <div
                  dangerouslySetInnerHTML={{
                    __html: `<style>${liveExample.css}</style>${liveExample.html}`
                  }}
                />
              </div>
            </div>
            
            {/* Helpful tip */}
            <div className="mt-3 p-3 bg-blue-500/20 border border-blue-400/30 rounded-lg">
              <p className="text-blue-200 text-sm">
                💡 <strong>Tip:</strong> {
                  selectedConcept === 'selectors' ? 'Notice how different selectors target different elements!'
                  : selectedConcept === 'boxmodel' ? 'See how padding, border, and margin affect the element size and spacing!'
                  : selectedConcept === 'layout' ? 'Observe how layout properties change the positioning of elements!'
                  : 'Watch how visual properties transform the appearance!'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Interactive HTML Page Builder
const InteractivePageBuilder = () => {
  const [pageStructure, setPageStructure] = useState({
    title: 'My First Webpage',
    sections: []
  });
  const [selectedSection, setSelectedSection] = useState(null);
  const [showPreview, setShowPreview] = useState(true);

  const sectionTemplates = [
    {
      type: 'header',
      name: 'Header Section',
      icon: '🏠',
      html: '<header class="site-header">\n  <h1>{{title}}</h1>\n  <nav>\n    <a href="#home">Home</a>\n    <a href="#about">About</a>\n    <a href="#contact">Contact</a>\n  </nav>\n</header>',
      css: '.site-header {\n  background: #1f2937;\n  color: white;\n  padding: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.site-header nav a {\n  color: white;\n  text-decoration: none;\n  margin-left: 1rem;\n}\n.site-header nav a:hover {\n  color: #60a5fa;\n}'
    },
    {
      type: 'hero',
      name: 'Hero Section',
      icon: '🌟',
      html: '<section class="hero">\n  <h2>Welcome to My Website</h2>\n  <p>This is an amazing place where great things happen!</p>\n  <button class="cta-button">Get Started</button>\n</section>',
      css: '.hero {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  text-align: center;\n  padding: 4rem 2rem;\n}\n.hero h2 {\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n}\n.cta-button {\n  background: #f59e0b;\n  color: white;\n  padding: 0.75rem 2rem;\n  border: none;\n  border-radius: 0.5rem;\n  font-size: 1.1rem;\n  cursor: pointer;\n}\n.cta-button:hover {\n  background: #d97706;\n}'
    },
    {
      type: 'about',
      name: 'About Section',
      icon: '👤',
      html: '<section class="about">\n  <div class="container">\n    <h2>About Me</h2>\n    <div class="about-content">\n      <img src="https://via.placeholder.com/200x200/4F46E5/FFFFFF?text=Profile" alt="Profile picture">\n      <div class="about-text">\n        <p>I\'m a web developer passionate about creating amazing digital experiences.</p>\n        <p>I love learning new technologies and building cool projects!</p>\n      </div>\n    </div>\n  </div>\n</section>',
      css: '.about {\n  padding: 3rem 0;\n  background: #f9fafb;\n  color: #374151;\n}\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1rem;\n}\n.about h2 {\n  text-align: center;\n  color: #1f2937;\n  margin-bottom: 2rem;\n}\n.about-content {\n  display: flex;\n  gap: 2rem;\n  align-items: center;\n  margin-top: 2rem;\n}\n.about-content img {\n  border-radius: 50%;\n  width: 200px;\n  height: 200px;\n  object-fit: cover;\n  box-shadow: 0 4px 8px rgba(0,0,0,0.1);\n}\n.about-text p {\n  margin-bottom: 1rem;\n  line-height: 1.6;\n}'
    },
    {
      type: 'features',
      name: 'Features Section',
      icon: '⭐',
      html: '<section class="features">\n  <div class="container">\n    <h2>What I Offer</h2>\n    <div class="features-grid">\n      <div class="feature-card">\n        <div class="feature-icon">💻</div>\n        <h3>Web Development</h3>\n        <p>Building responsive and modern websites</p>\n      </div>\n      <div class="feature-card">\n        <div class="feature-icon">🎨</div>\n        <h3>UI/UX Design</h3>\n        <p>Creating beautiful user experiences</p>\n      </div>\n      <div class="feature-card">\n        <div class="feature-icon">⚡</div>\n        <h3>Performance</h3>\n        <p>Fast and optimized applications</p>\n      </div>\n    </div>\n  </div>\n</section>',
      css: '.features {\n  padding: 4rem 0;\n  background: white;\n}\n.features h2 {\n  text-align: center;\n  color: #1f2937;\n  margin-bottom: 3rem;\n}\n.features-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 2rem;\n}\n.feature-card {\n  text-align: center;\n  padding: 2rem;\n  border-radius: 10px;\n  box-shadow: 0 4px 6px rgba(0,0,0,0.1);\n  transition: transform 0.3s ease;\n}\n.feature-card:hover {\n  transform: translateY(-5px);\n}\n.feature-icon {\n  font-size: 3rem;\n  margin-bottom: 1rem;\n}\n.feature-card h3 {\n  color: #1f2937;\n  margin-bottom: 1rem;\n}\n.feature-card p {\n  color: #6b7280;\n  line-height: 1.6;\n}'
    },
    {
      type: 'footer',
      name: 'Footer Section',
      icon: '📄',
      html: '<footer class="site-footer">\n  <div class="footer-content">\n    <div class="footer-text">\n      <p>&copy; 2024 My Website. All rights reserved.</p>\n    </div>\n    <div class="social-links">\n      <a href="#" onclick="alert(\'GitHub profile!\')">GitHub</a>\n      <a href="#" onclick="alert(\'LinkedIn profile!\')">LinkedIn</a>\n      <a href="#" onclick="alert(\'Twitter profile!\')">Twitter</a>\n    </div>\n  </div>\n</footer>',
      css: '.site-footer {\n  background: #111827;\n  color: white;\n  padding: 2rem 0;\n}\n.footer-content {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.footer-text p {\n  margin: 0;\n}\n.social-links {\n  display: flex;\n  gap: 1rem;\n}\n.social-links a {\n  color: #9ca3af;\n  text-decoration: none;\n  padding: 0.5rem 1rem;\n  border-radius: 5px;\n  transition: all 0.3s ease;\n}\n.social-links a:hover {\n  color: white;\n  background: #374151;\n}'
    }
  ];

  const addSection = (template) => {
    const newSection = {
      id: Date.now(),
      type: template.type,
      name: template.name,
      html: template.html.replace('{{title}}', pageStructure.title),
      css: template.css
    };
    setPageStructure(prev => ({
      ...prev,
      sections: [...prev.sections, newSection]
    }));
  };

  const removeSection = (sectionId) => {
    setPageStructure(prev => ({
      ...prev,
      sections: prev.sections.filter(section => section.id !== sectionId)
    }));
  };

  const moveSection = (sectionId, direction) => {
    setPageStructure(prev => {
      const sections = [...prev.sections];
      const index = sections.findIndex(s => s.id === sectionId);
      if (index === -1) return prev;
      
      const newIndex = direction === 'up' ? index - 1 : index + 1;
      if (newIndex < 0 || newIndex >= sections.length) return prev;
      
      [sections[index], sections[newIndex]] = [sections[newIndex], sections[index]];
      return { ...prev, sections };
    });
  };

  const generateFullHTML = () => {
    const allCSS = pageStructure.sections.map(section => section.css).join('\n\n');
    const allHTML = pageStructure.sections.map(section => section.html).join('\n\n');

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageStructure.title}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }
        ${allCSS}
    </style>
</head>
<body>
    ${allHTML}
</body>
</html>`;
  };

  const generatePreviewHTML = () => {
    const allCSS = pageStructure.sections.map(section => section.css).join('\n\n');
    const allHTML = pageStructure.sections.map(section => section.html).join('\n\n');

    return `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
        }
        ${allCSS}
      </style>
      ${allHTML}
    `;
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Interactive Page Builder</h3>
        <p className="text-gray-300">Build a complete webpage and see it come to life!</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        {/* Page Title */}
        <div className="flex-1">
          <label className="block text-white font-medium mb-2">Page Title:</label>
          <input
            type="text"
            value={pageStructure.title}
            onChange={(e) => setPageStructure(prev => ({ ...prev, title: e.target.value }))}
            className="w-full p-2 rounded bg-white/20 text-white placeholder-gray-300"
            placeholder="Enter your page title"
          />
        </div>

        {/* Preview Toggle */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              showPreview 
                ? 'bg-green-600 text-white' 
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            {showPreview ? '👁️ Hide Preview' : '👁️ Show Preview'}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className={`grid gap-6 ${showPreview ? 'grid-cols-1 xl:grid-cols-2' : 'grid-cols-1'}`}>
        {/* Builder Section */}
        <div className="space-y-6">
          {/* Section Templates */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-3">Add Sections:</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {sectionTemplates.map((template, index) => (
                <button
                  key={index}
                  onClick={() => addSection(template)}
                  className="bg-white/20 hover:bg-white/30 text-white p-4 rounded-lg transition-colors text-center group"
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{template.icon}</div>
                  <div className="text-sm font-medium">{template.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Current Sections */}
          {pageStructure.sections.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Your Page Sections:</h4>
              <div className="space-y-2">
                {pageStructure.sections.map((section, index) => (
                  <div key={section.id} className="bg-white/10 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">
                        {index + 1}. {section.name}
                      </span>
                      <div className="flex items-center space-x-2">
                        {/* Move buttons */}
                        <button
                          onClick={() => moveSection(section.id, 'up')}
                          disabled={index === 0}
                          className="bg-gray-600 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-2 py-1 rounded text-sm"
                        >
                          ↑
                        </button>
                        <button
                          onClick={() => moveSection(section.id, 'down')}
                          disabled={index === pageStructure.sections.length - 1}
                          className="bg-gray-600 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-2 py-1 rounded text-sm"
                        >
                          ↓
                        </button>
                        <button
                          onClick={() => setSelectedSection(selectedSection === section.id ? null : section.id)}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                        >
                          {selectedSection === section.id ? 'Hide Code' : 'View Code'}
                        </button>
                        <button
                          onClick={() => removeSection(section.id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Section Code View */}
                    {selectedSection === section.id && (
                      <div className="mt-4 space-y-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          <div>
                            <h5 className="font-semibold text-blue-300 mb-2">HTML:</h5>
                            <CodeBlock code={section.html} language="html" showCopy={true} />
                          </div>
                          <div>
                            <h5 className="font-semibold text-purple-300 mb-2">CSS:</h5>
                            <CodeBlock code={section.css} language="css" showCopy={true} />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Generated Code */}
          {pageStructure.sections.length > 0 && (
            <div className="bg-white/10 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-4">Complete HTML File</h4>
              <CodeBlock 
                code={generateFullHTML()}
                language="html"
                showCopy={true}
                filename="index.html"
              />
              <div className="mt-4 text-center">
                <p className="text-gray-300 text-sm mb-2">
                  Copy this code and save it as "index.html" to create your webpage!
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Live Preview Section */}
        {showPreview && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-bold text-white">Live Preview</h4>
              <span className="text-sm text-gray-300">
                {pageStructure.sections.length} section{pageStructure.sections.length !== 1 ? 's' : ''}
              </span>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-xl">
              {pageStructure.sections.length > 0 ? (
                <div className="relative">
                  {/* Browser mockup header */}
                  <div className="bg-gray-200 px-4 py-2 flex items-center space-x-2 border-b">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white rounded px-3 py-1 text-sm text-gray-600">
                      {pageStructure.title} - My Website
                    </div>
                  </div>
                  
                  {/* Preview content */}
                  <div 
                    className="min-h-[400px] max-h-[600px] overflow-y-auto"
                    dangerouslySetInnerHTML={{
                      __html: generatePreviewHTML()
                    }}
                  />
                </div>
              ) : (
                <div className="p-8 text-center text-gray-500">
                  <div className="text-4xl mb-4">🏗️</div>
                  <h4 className="text-lg font-medium mb-2">No sections added yet</h4>
                  <p className="text-sm">Add sections above to see your webpage come to life!</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// JavaScript Interaction Demo
const JavaScriptDemo = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [displayText, setDisplayText] = useState('Hello, JavaScript!');
  const [isVisible, setIsVisible] = useState(true);

  const jsExamples = [
    {
      title: 'Variables & Functions',
      code: `let count = 0;

function increment() {
  count = count + 1;
  console.log(count);
}

increment(); // Output: 1`
    },
    {
      title: 'DOM Manipulation',
      code: `// Get element by ID
const button = document.getElementById('myButton');

// Add event listener
button.addEventListener('click', function() {
  alert('Button clicked!');
});

// Change text content
button.textContent = 'Click me!';`
    },
    {
      title: 'Conditional Logic',
      code: `const age = 18;

if (age >= 18) {
  console.log('You can vote!');
} else {
  console.log('Too young to vote');
}

// Ternary operator
const message = age >= 18 ? 'Adult' : 'Minor';`
    }
  ];

  return (
    <div className="space-y-6">
      {/* Interactive Elements */}
      <div className="bg-white/10 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-6 text-center">Interactive JavaScript</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Counter */}
          <div className="bg-blue-500/20 rounded-lg p-4 text-center">
            <h4 className="text-white font-semibold mb-3">Counter</h4>
            <div className="text-3xl font-bold text-white mb-4">{count}</div>
            <div className="space-y-2">
              <button
                onClick={() => setCount(count + 1)}
                className="w-full bg-green-600 hover:bg-green-700 text-white rounded py-2 transition-colors"
              >
                Increment
              </button>
              <button
                onClick={() => setCount(0)}
                className="w-full bg-red-600 hover:bg-red-700 text-white rounded py-2 transition-colors"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Text Input */}
          <div className="bg-purple-500/20 rounded-lg p-4">
            <h4 className="text-white font-semibold mb-3">Text Input</h4>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type something..."
              className="w-full p-2 rounded mb-3 bg-white/20 text-white placeholder-gray-300"
            />
            <button
              onClick={() => setDisplayText(inputValue || 'Hello, JavaScript!')}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white rounded py-2 transition-colors"
            >
              Update Text
            </button>
          </div>

          {/* Toggle Visibility */}
          <div className="bg-orange-500/20 rounded-lg p-4 text-center">
            <h4 className="text-white font-semibold mb-3">Toggle Element</h4>
            {isVisible && (
              <div className="bg-white/20 rounded p-3 mb-3 text-white animate-fade-in">
                {displayText}
              </div>
            )}
            <button
              onClick={() => setIsVisible(!isVisible)}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded py-2 transition-colors"
            >
              {isVisible ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
      </div>

      {/* Code Examples */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {jsExamples.map((example, index) => (
          <div key={index} className="space-y-3">
            <h4 className="text-lg font-semibold text-white">{example.title}</h4>
            <CodeBlock code={example.code} language="javascript" />
          </div>
        ))}
      </div>
    </div>
  );
};

const Class2Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = customStyles;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const slides = [
    // Slide 1: Welcome & Overview
    {
      id: 'welcome',
      title: 'Class 2: Git, GitHub & Web Fundamentals',
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <div className="text-6xl mb-4">🚀</div>
            <h1 className="text-5xl font-bold text-white mb-4 animate-fade-in">
              Version Control & Web Foundations
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Master Git workflows, GitHub collaboration, and refresh your HTML/CSS/JavaScript skills
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl mb-3">📚</div>
              <h3 className="font-semibold mb-2 text-white">Git Basics</h3>
              <p className="text-sm text-blue-100">Version control fundamentals</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl mb-3">🐙</div>
              <h3 className="font-semibold mb-2 text-white">GitHub</h3>
              <p className="text-sm text-blue-100">Remote repositories & collaboration</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl mb-3">🏗️</div>
              <h3 className="font-semibold mb-2 text-white">HTML/CSS</h3>
              <p className="text-sm text-blue-100">Structure & styling review</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-semibold mb-2 text-white">JavaScript</h3>
              <p className="text-sm text-blue-100">Interactivity & DOM manipulation</p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 via-purple-600 to-teal-600'
    },

    // Slide 2: Enhanced Git Fundamentals
    {
      id: 'git-fundamentals',
      title: 'Git Fundamentals',
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-5xl mb-4">📚</div>
            <h1 className="text-4xl font-bold text-white mb-4">Understanding Git</h1>
            <p className="text-xl text-gray-200 mb-6">The foundation of modern development workflows</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* What is Git */}
            <div className="bg-white/10 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4 text-blue-300">What is Git?</h2>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-white"><strong>Distributed Version Control:</strong> Every developer has full project history</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-white"><strong>Snapshots, not diffs:</strong> Git stores complete snapshots of your project</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-white"><strong>Integrity:</strong> Everything is checksummed with SHA-1 hashes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">✓</span>
                  <span className="text-white"><strong>Three States:</strong> Modified, Staged, Committed</span>
                </li>
              </ul>
            </div>

            {/* Why Use Git */}
            <div className="bg-white/10 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4 text-purple-300">Why Git Matters</h2>
              <div className="space-y-3">
                <div className="bg-red-500/20 rounded-lg p-3">
                  <h3 className="font-semibold text-red-300 mb-1 text-sm">❌ Without Version Control:</h3>
                  <ul className="text-xs text-gray-200 space-y-1">
                    <li>• Lost work from crashes/mistakes</li>
                    <li>• No collaboration possible</li>
                    <li>• Can't experiment safely</li>
                    <li>• No backup or history</li>
                  </ul>
                </div>
                <div className="bg-green-500/20 rounded-lg p-3">
                  <h3 className="font-semibold text-green-300 mb-1 text-sm">✅ With Git:</h3>
                  <ul className="text-xs text-gray-200 space-y-1">
                    <li>• Complete project history</li>
                    <li>• Safe experimentation with branches</li>
                    <li>• Seamless team collaboration</li>
                    <li>• Multiple backup locations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Git vs Others */}
            <div className="bg-white/10 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4 text-orange-300">Git vs Others</h2>
              <div className="space-y-3 text-sm">
                <div>
                  <h4 className="font-semibold text-orange-200 mb-1">Centralized (SVN, CVS):</h4>
                  <p className="text-gray-300 text-xs">Single server, limited offline work</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-200 mb-1">Distributed (Git, Mercurial):</h4>
                  <p className="text-gray-300 text-xs">Every clone is a full backup</p>
                </div>
                <div className="bg-blue-500/20 rounded p-2">
                  <p className="text-blue-200 text-xs"><strong>Git's advantage:</strong> Speed, flexibility, and powerful branching</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Interactive Git Workflow */}
          <GitWorkflowDemo />
        </div>
      ),
      bgGradient: 'from-gray-800 via-gray-900 to-black'
    },

    // Slide 3: Git Branching Deep Dive
    {
      id: 'git-branching',
      title: 'Git Branching Mastery',
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-5xl mb-4">🌳</div>
            <h1 className="text-4xl font-bold text-white mb-4">Git Branching Strategies</h1>
            <p className="text-xl text-green-100 mb-6">Master the art of parallel development</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Branching Concepts */}
            <div className="space-y-4">
              <div className="bg-white/10 rounded-xl p-6">
                <h2 className="text-xl font-bold text-white mb-4">Branching Concepts</h2>
                <div className="space-y-3">
                  <div className="bg-blue-500/20 rounded-lg p-3">
                    <h3 className="font-semibold text-blue-300 mb-1">What is a Branch?</h3>
                    <p className="text-sm text-gray-200">A lightweight movable pointer to a specific commit. Think of it as an independent line of development.</p>
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-3">
                    <h3 className="font-semibold text-green-300 mb-1">Why Branch?</h3>
                    <ul className="text-sm text-gray-200 space-y-1">
                      <li>• Isolate features/experiments</li>
                      <li>• Work on multiple features simultaneously</li>
                      <li>• Keep main branch stable</li>
                      <li>• Easy to switch contexts</li>
                    </ul>
                  </div>
                  <div className="bg-purple-500/20 rounded-lg p-3">
                    <h3 className="font-semibold text-purple-300 mb-1">Branch Naming</h3>
                    <div className="text-sm text-gray-200 space-y-1">
                      <div>• <code className="bg-gray-800 px-1 rounded">feature/user-auth</code></div>
                      <div>• <code className="bg-gray-800 px-1 rounded">bugfix/login-error</code></div>
                      <div>• <code className="bg-gray-800 px-1 rounded">hotfix/security-patch</code></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <GitBranchingDemo />
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-700 via-teal-700 to-blue-700'
    },

    // Slide 4: Git Commands & GitHub Enhanced
    {
      id: 'git-commands',
      title: 'Git Commands & GitHub',
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-5xl mb-4">🐙</div>
            <h1 className="text-4xl font-bold text-white mb-4">Git Commands & GitHub</h1>
            <p className="text-xl text-green-100 mb-6">Essential commands and remote collaboration</p>
          </div>

          <GitCommandsCheatSheet />
        </div>
      ),
      bgGradient: 'from-indigo-600 via-purple-600 to-pink-600'
    },

    // Slide 5: Git Problem Solving
    {
      id: 'git-problems',
      title: 'Git Problem Solving',
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-5xl mb-4">🚨</div>
            <h1 className="text-4xl font-bold text-white mb-4">Git Problem Solving</h1>
            <p className="text-xl text-red-100 mb-6">Common issues and how to fix them</p>
          </div>

          <GitScenariosDemo />
        </div>
      ),
      bgGradient: 'from-red-600 via-orange-600 to-yellow-600'
    },

    // Slide 6: Enhanced HTML & CSS Learning
    {
      id: 'html-css-refresher',
      title: 'HTML & CSS Deep Dive',
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="text-5xl mb-4">🏗️</div>
            <h1 className="text-4xl font-bold text-white mb-4">HTML & CSS Deep Dive</h1>
            <p className="text-xl text-orange-100 mb-6">Learn the building blocks step by step</p>
          </div>

          <div className="space-y-8">
            {/* HTML Tag Explorer */}
            <HTMLTagExplorer />
            
            {/* CSS Concepts Explorer */}
            <CSSConceptsExplorer />
            
            {/* Interactive Page Builder */}
            <InteractivePageBuilder />
          </div>
        </div>
      ),
      bgGradient: 'from-orange-600 via-red-600 to-pink-600'
    },

    // Slide 7: JavaScript Fundamentals
    {
      id: 'javascript-fundamentals',
      title: 'JavaScript Fundamentals',
      content: (
        <div className="space-y-8">
          <div className="text-center">
            <div className="text-5xl mb-4">⚡</div>
            <h1 className="text-4xl font-bold text-white mb-4">JavaScript Fundamentals</h1>
            <p className="text-xl text-yellow-100 mb-8">Adding interactivity to your web pages</p>
          </div>

          <JavaScriptDemo />
        </div>
      ),
      bgGradient: 'from-yellow-600 via-orange-600 to-red-600'
    },

    // Slide 8: Learning Objectives
    {
      id: 'learning-objectives',
      title: 'Today\'s Learning Objectives',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">What We Accomplished Today</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: '📚',
                title: 'Git Mastery',
                description: 'Learned Git fundamentals, branching, and problem-solving techniques'
              },
              {
                icon: '🐙',
                title: 'GitHub Integration',
                description: 'Pushed code to GitHub and learned collaboration workflows'
              },
              {
                icon: '🏗️',
                title: 'HTML Structure',
                description: 'Built semantic HTML pages with proper structure'
              },
              {
                icon: '⚡',
                title: 'JavaScript Interactivity',
                description: 'Added dynamic behavior with JavaScript'
              }
            ].map((objective, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{objective.icon}</div>
                  <h3 className="text-xl font-bold text-white">{objective.title}</h3>
                </div>
                <p className="text-emerald-100 text-center">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      ),
      bgGradient: 'from-emerald-600 to-teal-700'
    },

    // Slide 9: Homework & Next Steps
    {
      id: 'homework',
      title: 'Homework & Next Steps',
      content: (
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-white mb-8">Your Mission</h2>
          <div className="bg-white/10 backdrop-blur rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">For Next Class:</h3>
            <div className="space-y-4 text-purple-100">
              <div className="flex items-start">
                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">1</span>
                <span>Create an "About Me" webpage using HTML, CSS, and JavaScript</span>
              </div>
              <div className="flex items-start">
                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">2</span>
                <span>Initialize a Git repository and make meaningful commits</span>
              </div>
              <div className="flex items-start">
                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">3</span>
                <span>Push your project to a new GitHub repository</span>
              </div>
              <div className="flex items-start">
                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">4</span>
                <span>Practice branching: create a feature branch, make changes, merge back</span>
              </div>
              <div className="flex items-start">
                <span className="bg-yellow-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-4 mt-0.5">5</span>
                <span>Try fixing one of the common Git problems we covered</span>
              </div>
            </div>
          </div>
          <div className="bg-blue-500/20 border border-blue-400/30 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-white mb-4">🚀 Next Class Preview:</h4>
            <p className="text-purple-100">
              We'll dive into React fundamentals, learn about components and JSX, 
              and start building our first React application!
            </p>
          </div>
        </div>
      ),
      bgGradient: 'from-violet-600 to-purple-700'
    },

    // Slide 10: Navigation
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
                You've completed Class 2! Ready to continue your journey?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/class/3" 
                  className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Class 3: React Fundamentals →
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

export default Class2Slides; 