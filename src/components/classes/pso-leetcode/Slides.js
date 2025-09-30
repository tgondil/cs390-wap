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

const PSOLeetCodeSlides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title Slide
    {
      id: 'title-slide',
      title: 'PSO: LeetCode in JavaScript',
      content: (
        <div className="text-center space-y-12">
          <style>{customStyles}</style>
          <div className="space-y-8">
            <div className="text-8xl animate-bounce-in">💻</div>
            <h1 className="text-6xl font-bold text-white mb-6">PSO</h1>
            <h2 className="text-4xl font-semibold text-blue-100 mb-4">
              LeetCode in JavaScript
            </h2>
            <div className="text-2xl text-blue-200">
              Master JavaScript Through Problem Solving
            </div>
          </div>
          
          <div className="mt-16">
            <div className="text-xl font-medium text-white/80">4 Problems • Real Interview Questions • Hands-On Practice</div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-purple-700'
    },

    // Slide 2: Overview
    {
      id: 'overview',
      title: 'What We\'ll Cover',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">Today's Journey</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-7xl mb-6 animate-float">🎯</div>
              <p className="text-xl text-white/80">
                Solve 4 carefully selected LeetCode problems to master JavaScript fundamentals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-500/20 rounded-xl p-6 border border-green-400">
                <div className="text-5xl mb-4">1️⃣</div>
                <h3 className="text-2xl font-bold text-green-300 mb-3">Two Sum</h3>
                <div className="bg-green-600/30 rounded-lg p-3">
                  <div className="text-sm text-green-100">Difficulty: Easy 🟢</div>
                </div>
              </div>

              <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400">
                <div className="text-5xl mb-4">2️⃣</div>
                <h3 className="text-2xl font-bold text-blue-300 mb-3">Valid Parentheses</h3>
                <div className="bg-blue-600/30 rounded-lg p-3">
                  <div className="text-sm text-blue-100">Difficulty: Easy 🟢</div>
                </div>
              </div>

              <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400">
                <div className="text-5xl mb-4">3️⃣</div>
                <h3 className="text-2xl font-bold text-yellow-300 mb-3">Group Anagrams</h3>
                <div className="bg-yellow-600/30 rounded-lg p-3">
                  <div className="text-sm text-yellow-100">Difficulty: Medium 🟡</div>
                </div>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-6 border border-purple-400">
                <div className="text-5xl mb-4">4️⃣</div>
                <h3 className="text-2xl font-bold text-purple-300 mb-3">Top K Frequent</h3>
                <div className="bg-purple-600/30 rounded-lg p-3">
                  <div className="text-sm text-purple-100">Difficulty: Medium 🟡</div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white/10 backdrop-blur rounded-xl p-6 border border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold mb-2">⏱️ Time: 40 minutes</div>
                <div className="text-white/80">Solve directly on LeetCode.com • Use JavaScript!</div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-blue-600'
    },

    // Slide 3: What You'll Learn
    {
      id: 'learning-goals',
      title: 'What You\'ll Learn',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-12 text-center">What You'll Learn</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-7xl mb-4 animate-float">🎯</div>
              <p className="text-xl text-white/80">
                These problems will help you build essential JavaScript skills
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400">
                <div className="text-5xl mb-4">📊</div>
                <h3 className="text-2xl font-bold text-blue-300 mb-4">Work with Collections</h3>
                <p className="text-white/90">
                  You'll learn to confidently work with <strong>arrays and objects</strong>, storing and retrieving information as you process collections of numbers or words.
                </p>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border border-green-400">
                <div className="text-5xl mb-4">🔤</div>
                <h3 className="text-2xl font-bold text-green-300 mb-4">Master String Manipulation</h3>
                <p className="text-white/90">
                  You'll learn to step through text carefully, validate input, and determine if text fits certain rules or belongs with other pieces.
                </p>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-8 border border-purple-400">
                <div className="text-5xl mb-4">🗂️</div>
                <h3 className="text-2xl font-bold text-purple-300 mb-4">Group & Count Data</h3>
                <p className="text-white/90">
                  You'll learn how to categorize data into groups and figure out what appears most frequently in your data sets.
                </p>
              </div>

              <div className="bg-orange-500/20 rounded-xl p-8 border border-orange-400">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-orange-300 mb-4">Think About Efficiency</h3>
                <p className="text-white/90">
                  You'll learn to analyze your solutions and ask: "Can we solve this with fewer checks or less work?"
                </p>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-r from-yellow-500/20 to-green-500/20 rounded-xl p-6 border border-yellow-400">
              <div className="text-center text-lg text-white/90">
                <strong className="text-yellow-300">Remember:</strong> The goal isn't just to solve the problems—it's to understand <em>how</em> and <em>why</em> your solutions work!
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-teal-600'
    },

    // Slide 4: Problem 1 - Two Sum
    {
      id: 'two-sum',
      title: 'Problem 1: Two Sum',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8 text-center">Problem 1: Two Sum</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-7xl mb-4 animate-float">🎯</div>
              <div className="inline-block bg-green-500/20 rounded-lg px-6 py-2 border border-green-400 mb-4">
                <span className="text-green-300 font-bold">LeetCode #1 • Easy 🟢</span>
              </div>
              <div>
                <a
                  href="https://leetcode.com/problems/two-sum/description/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition-all transform hover:scale-105"
                >
                  Solve on LeetCode →
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 mb-6">
              <h3 className="text-2xl font-bold text-yellow-300 mb-4">📋 Problem Statement</h3>
              <p className="text-lg text-white/90 mb-4">
                Given an array of integers <code className="bg-gray-800 px-2 py-1 rounded">nums</code> and an integer <code className="bg-gray-800 px-2 py-1 rounded">target</code>, return the <strong>indices</strong> of the two numbers that add up to the target.
              </p>
              <p className="text-white/70 text-sm">
                You may assume each input has exactly one solution, and you may not use the same element twice.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400">
                <h4 className="text-xl font-bold text-blue-300 mb-4">💡 Example</h4>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm space-y-2">
                  <div className="text-green-400">{'// Input:'}</div>
                  <div className="text-white">nums = [2, 7, 11, 15]</div>
                  <div className="text-white">target = 9</div>
                  <div className="text-green-400 mt-3">{'// Output:'}</div>
                  <div className="text-yellow-300">[0, 1]</div>
                  <div className="text-gray-400 mt-3">{'// Why? nums[0] + nums[1] = 2 + 7 = 9'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-teal-600'
    },

    // Slide 5: Problem 2 - Valid Parentheses
    {
      id: 'valid-parentheses',
      title: 'Problem 2: Valid Parentheses',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8 text-center">Problem 2: Valid Parentheses</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-7xl mb-4 animate-float">🎭</div>
              <div className="inline-block bg-blue-500/20 rounded-lg px-6 py-2 border border-blue-400 mb-4">
                <span className="text-blue-300 font-bold">LeetCode #20 • Easy 🟢</span>
              </div>
              <div>
                <a
                  href="https://leetcode.com/problems/valid-parentheses/description/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition-all transform hover:scale-105"
                >
                  Solve on LeetCode →
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 mb-6">
              <h3 className="text-2xl font-bold text-yellow-300 mb-4">📋 Problem Statement</h3>
              <p className="text-lg text-white/90 mb-4">
                Given a string containing just the characters <code className="bg-gray-800 px-2 py-1 rounded">'(', ')', '{', '}', '[', ']'</code>, determine if the input string is valid.
              </p>
              <div className="bg-blue-500/20 rounded-lg p-4">
                <div className="font-bold mb-2">Valid means:</div>
                <ul className="space-y-1 text-blue-200">
                  <li>✅ Open brackets closed by same type</li>
                  <li>✅ Open brackets closed in correct order</li>
                  <li>✅ Every close bracket has matching open bracket</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-500/20 rounded-xl p-6 border border-green-400">
                <h4 className="text-xl font-bold text-green-300 mb-4">✅ Valid Examples</h4>
                <div className="space-y-3 font-mono">
                  <div className="bg-green-600/30 rounded p-3">
                    <div className="text-green-200">"()" → true</div>
                  </div>
                  <div className="bg-green-600/30 rounded p-3">
                    <div className="text-green-200">"()[]{}" → true</div>
                  </div>
                  <div className="bg-green-600/30 rounded p-3">
                    <div className="text-green-200">"{'{[]}}'}" → true</div>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/20 rounded-xl p-6 border border-red-400">
                <h4 className="text-xl font-bold text-red-300 mb-4">❌ Invalid Examples</h4>
                <div className="space-y-3 font-mono">
                  <div className="bg-red-600/30 rounded p-3">
                    <div className="text-red-200">"(]" → false</div>
                    <div className="text-xs text-red-300 mt-1">Wrong type</div>
                  </div>
                  <div className="bg-red-600/30 rounded p-3">
                    <div className="text-red-200">"([)]" → false</div>
                    <div className="text-xs text-red-300 mt-1">Wrong order</div>
                  </div>
                  <div className="bg-red-600/30 rounded p-3">
                    <div className="text-red-200">"(((" → false</div>
                    <div className="text-xs text-red-300 mt-1">No closing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-indigo-600'
    },

    // Slide 6: Problem 3 - Group Anagrams
    {
      id: 'group-anagrams',
      title: 'Problem 3: Group Anagrams',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8 text-center">Problem 3: Group Anagrams</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-7xl mb-4 animate-float">🔤</div>
              <div className="inline-block bg-yellow-500/20 rounded-lg px-6 py-2 border border-yellow-400 mb-4">
                <span className="text-yellow-300 font-bold">LeetCode #49 • Medium 🟡</span>
              </div>
              <div>
                <a
                  href="https://leetcode.com/problems/group-anagrams/description/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition-all transform hover:scale-105"
                >
                  Solve on LeetCode →
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 mb-6">
              <h3 className="text-2xl font-bold text-yellow-300 mb-4">📋 Problem Statement</h3>
              <p className="text-lg text-white/90 mb-4">
                Given an array of strings, group the anagrams together. Return the answer in any order.
              </p>
              <div className="bg-yellow-500/20 rounded-lg p-4">
                <div className="font-bold mb-2">What's an anagram?</div>
                <div className="text-yellow-200">
                  A word formed by rearranging the letters of another word, using all original letters exactly once.
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400 mb-6">
              <h4 className="text-2xl font-bold text-blue-300 mb-6">💡 Example</h4>
              <div className="bg-gray-900 rounded-lg p-6 mb-4">
                <div className="font-mono space-y-2">
                  <div className="text-green-400">{'// Input:'}</div>
                  <div className="text-white">["eat", "tea", "tan", "ate", "nat", "bat"]</div>
                  <div className="text-green-400 mt-4">{'// Output:'}</div>
                  <div className="text-yellow-300">[</div>
                  <div className="text-yellow-300 ml-4">["eat", "tea", "ate"],</div>
                  <div className="text-yellow-300 ml-4">["tan", "nat"],</div>
                  <div className="text-yellow-300 ml-4">["bat"]</div>
                  <div className="text-yellow-300">]</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-green-500/20 rounded-lg p-3 text-center">
                  <div className="font-bold mb-1">Group 1</div>
                  <div className="text-sm text-green-200">eat, tea, ate</div>
                  <div className="text-xs text-green-300 mt-2">All have: a, e, t</div>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-3 text-center">
                  <div className="font-bold mb-1">Group 2</div>
                  <div className="text-sm text-blue-200">tan, nat</div>
                  <div className="text-xs text-blue-300 mt-2">All have: a, n, t</div>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-3 text-center">
                  <div className="font-bold mb-1">Group 3</div>
                  <div className="text-sm text-purple-200">bat</div>
                  <div className="text-xs text-purple-300 mt-2">Has: a, b, t</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-green-500/20 rounded-xl p-6 border border-green-400">
                <h4 className="text-xl font-bold text-green-300 mb-4">🔑 Key Insight</h4>
                <div className="space-y-3">
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="font-bold mb-2">Sorted strings are the same!</div>
                    <div className="text-sm space-y-1 text-green-200">
                      <div>"eat" → "aet"</div>
                      <div>"tea" → "aet"</div>
                      <div>"ate" → "aet"</div>
                    </div>
                  </div>
                  <div className="text-center text-green-200">
                    Use sorted string as the <strong>key</strong>!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-yellow-600 to-orange-600'
    },

    // Slide 7: Problem 4 - Top K Frequent
    {
      id: 'top-k-frequent',
      title: 'Problem 4: Top K Frequent Elements',
      content: (
        <div className="text-white animate-fade-in">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8 text-center">Problem 4: Top K Frequent</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <div className="text-7xl mb-4 animate-float">📊</div>
              <div className="inline-block bg-purple-500/20 rounded-lg px-6 py-2 border border-purple-400 mb-4">
                <span className="text-purple-300 font-bold">LeetCode #347 • Medium 🟡</span>
              </div>
              <div>
                <a
                  href="https://leetcode.com/problems/top-k-frequent-elements/description/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold transition-all transform hover:scale-105"
                >
                  Solve on LeetCode →
                </a>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 mb-6">
              <h3 className="text-2xl font-bold text-yellow-300 mb-4">📋 Problem Statement</h3>
              <p className="text-lg text-white/90">
                Given an integer array <code className="bg-gray-800 px-2 py-1 rounded">nums</code> and an integer <code className="bg-gray-800 px-2 py-1 rounded">k</code>, return the <code className="bg-gray-800 px-2 py-1 rounded">k</code> most frequent elements.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400">
                <h4 className="text-xl font-bold text-blue-300 mb-4">💡 Example 1</h4>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm space-y-2">
                  <div className="text-green-400">{'// Input:'}</div>
                  <div className="text-white">nums = [1, 1, 1, 2, 2, 3]</div>
                  <div className="text-white">k = 2</div>
                  <div className="text-green-400 mt-3">{'// Output:'}</div>
                  <div className="text-yellow-300">[1, 2]</div>
                  <div className="text-gray-400 mt-2">{'// 1 appears 3x, 2 appears 2x'}</div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-6 border border-green-400">
                <h4 className="text-xl font-bold text-green-300 mb-4">💡 Example 2</h4>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm space-y-2">
                  <div className="text-green-400">{'// Input:'}</div>
                  <div className="text-white">nums = [4,1,-1,2,-1,2,3]</div>
                  <div className="text-white">k = 2</div>
                  <div className="text-green-400 mt-3">{'// Output:'}</div>
                  <div className="text-yellow-300">[-1, 2]</div>
                  <div className="text-gray-400 mt-2">{'// -1 and 2 both appear 2x'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-pink-600'
    },

    // Slide 8: Time to Code!
    {
      id: 'time-to-code',
      title: 'Time to Code!',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          
          <div className="max-w-5xl mx-auto">
            <div className="text-9xl mb-12 animate-bounce-in">👨‍💻</div>
            
            <h2 className="text-6xl font-extrabold mb-8">Let's Get Started!</h2>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <div className="text-2xl mb-6">📝 Your Task</div>
              <div className="text-xl text-white/90 space-y-4">
                <p>Go to <strong className="text-green-300">LeetCode.com</strong></p>
                <p>Solve all 4 problems in <strong className="text-blue-300">JavaScript</strong></p>
                <p>Submit screenshots of your accepted solutions! ✅</p>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 via-purple-600 to-pink-600'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const slideElements = document.querySelectorAll('[data-slide-index]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      let currentSlideIndex = 0;
      slideElements.forEach((element, index) => {
        const elementTop = element.offsetTop;
        const elementBottom = elementTop + element.offsetHeight;
        
        if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
          currentSlideIndex = index;
        }
      });
      setCurrentSlide(currentSlideIndex);
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
          <div className="max-w-7xl mx-auto w-full">
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

export default PSOLeetCodeSlides; 