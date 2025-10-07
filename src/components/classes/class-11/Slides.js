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

const Class11Slides = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Slide 1: Title Slide
    {
      id: 'title-slide',
      title: 'CS390 Web Applications Programming',
      content: (
        <div className="text-center space-y-12">
          <style>{customStyles}</style>
          <div className="space-y-8">
            <h1 className="text-6xl font-bold text-white mb-6">CS390</h1>
            <h2 className="text-4xl font-semibold text-green-100 mb-4">
              Web Applications Programming
            </h2>
            <div className="text-2xl text-green-200">
              Class 11: Advanced MongoDB & Data Modeling
            </div>
          </div>
          
          <div className="mt-16">
            <div className="text-2xl font-medium text-white">Tanay Gondil</div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-emerald-700'
    },

    // Slide 2: Data Modeling Mindset
    {
      id: 'data-modeling-mindset',
      title: 'Data Modeling Mindset',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Think Differently</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🧠</div>
            <h3 className="text-3xl font-bold mb-12 text-blue-300">Design for Access Patterns, Not Entities</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-red-500/20 rounded-xl p-8 border-2 border-red-400">
                <h4 className="text-2xl font-bold text-red-300 mb-6">❌ SQL Mindset</h4>
                <div className="space-y-4 text-left">
                  <div className="bg-red-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">1. Design Perfect Tables</div>
                    <div className="text-red-200 text-sm">Normalize everything, avoid duplication</div>
                  </div>
                  <div className="bg-red-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">2. Create Relationships</div>
                    <div className="text-red-200 text-sm">Foreign keys, junction tables</div>
                  </div>
                  <div className="bg-red-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">3. JOIN at Query Time</div>
                    <div className="text-red-200 text-sm">Assemble data when needed</div>
                  </div>
                  <div className="bg-red-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">4. Hope It's Fast</div>
                    <div className="text-red-200 text-sm">Add indexes later if slow</div>
                  </div>
                </div>
                <div className="mt-6 bg-red-600/30 rounded-lg p-4">
                  <div className="text-red-100 text-center font-bold">Storage-first thinking</div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <h4 className="text-2xl font-bold text-green-300 mb-6">✅ MongoDB Mindset</h4>
                <div className="space-y-4 text-left">
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">1. List Your Queries</div>
                    <div className="text-green-200 text-sm">What questions will you ask?</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">2. Design for Reads</div>
                    <div className="text-green-200 text-sm">Store data how you'll access it</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">3. Embed What You Need</div>
                    <div className="text-green-200 text-sm">Pre-join data in documents</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">4. Fast by Design</div>
                    <div className="text-green-200 text-sm">Performance built-in</div>
                  </div>
                </div>
                <div className="mt-6 bg-green-600/30 rounded-lg p-4">
                  <div className="text-green-100 text-center font-bold">Access-pattern-first thinking</div>
                </div>
              </div>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-8 border border-purple-400/30">
              <div className="text-2xl font-bold text-purple-300 mb-4">💡 The Key Question</div>
              <div className="text-lg text-purple-100">
                Instead of asking <strong>"What entities exist?"</strong> ask <strong>"How will I query this data?"</strong>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-purple-600'
    },

    // Slide 3: Embedding vs Referencing
    {
      id: 'embedding-vs-referencing',
      title: 'Embedding vs Referencing',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">The Core Decision</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🔗</div>
            <h3 className="text-3xl font-bold mb-12 text-yellow-300">When to Embed, When to Reference</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <h4 className="text-2xl font-bold text-green-300 mb-6">📦 Embedding (Nesting)</h4>
                <div className="bg-gray-800 rounded-lg p-6 mb-4 text-left">
                  <div className="font-mono text-sm space-y-1">
                    <div className="text-blue-300">{`{`}</div>
                    <div className="ml-2 text-white">"title": "Blog Post",</div>
                    <div className="ml-2 text-yellow-300">"comments": [</div>
                    <div className="ml-4 text-blue-300">{`{`}</div>
                    <div className="ml-6 text-white">"user": "Alice",</div>
                    <div className="ml-6 text-white">"text": "Great!"</div>
                    <div className="ml-4 text-blue-300">{`}`}</div>
                    <div className="ml-2 text-yellow-300">]</div>
                    <div className="text-blue-300">{`}`}</div>
                  </div>
                </div>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">✅</span>
                    <div>
                      <div className="font-bold">One query gets everything</div>
                      <div className="text-green-200 text-sm">No joins needed</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">✅</span>
                    <div>
                      <div className="font-bold">Atomic updates</div>
                      <div className="text-green-200 text-sm">Update parent & children together</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">⚠️</span>
                    <div>
                      <div className="font-bold">16MB document limit</div>
                      <div className="text-orange-200 text-sm">Can't embed unlimited data</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/20 rounded-xl p-8 border-2 border-blue-400">
                <h4 className="text-2xl font-bold text-blue-300 mb-6">🔗 Referencing (IDs)</h4>
                <div className="bg-gray-800 rounded-lg p-6 mb-4 text-left">
                  <div className="font-mono text-sm space-y-1">
                    <div className="text-blue-300">{`{`}</div>
                    <div className="ml-2 text-white">"title": "Blog Post",</div>
                    <div className="ml-2 text-yellow-300">"authorId": ObjectId("...")</div>
                    <div className="text-blue-300">{`}`}</div>
                    <div className="mt-4 text-gray-400">{`// Separate collection:`}</div>
                    <div className="text-blue-300">{`{`}</div>
                    <div className="ml-2 text-white">"_id": ObjectId("..."),</div>
                    <div className="ml-2 text-white">"name": "Alice"</div>
                    <div className="text-blue-300">{`}`}</div>
                  </div>
                </div>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">✅</span>
                    <div>
                      <div className="font-bold">No duplication</div>
                      <div className="text-blue-200 text-sm">Update once, reflects everywhere</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">✅</span>
                    <div>
                      <div className="font-bold">Flexible relationships</div>
                      <div className="text-blue-200 text-sm">Many-to-many is easy</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">⚠️</span>
                    <div>
                      <div className="font-bold">Requires $lookup</div>
                      <div className="text-orange-200 text-sm">Multiple queries or aggregation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-500/20 rounded-xl p-8 border border-orange-400">
              <h4 className="text-2xl font-bold text-orange-300 mb-6">🎯 Decision Framework</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-3">📦</div>
                  <div className="font-bold text-green-300 mb-2">Embed When:</div>
                  <div className="text-sm text-green-200 space-y-1">
                    <div>• One-to-few (1-100 items)</div>
                    <div>• Always accessed together</div>
                    <div>• Child has no meaning alone</div>
                    <div>• Rarely updated</div>
                  </div>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-3">🔗</div>
                  <div className="font-bold text-blue-300 mb-2">Reference When:</div>
                  <div className="text-sm text-blue-200 space-y-1">
                    <div>• One-to-many (100+ items)</div>
                    <div>• Queried separately</div>
                    <div>• Child is independent</div>
                    <div>• Frequently updated</div>
                  </div>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-3">🎨</div>
                  <div className="font-bold text-purple-300 mb-2">Hybrid When:</div>
                  <div className="text-sm text-purple-200 space-y-1">
                    <div>• Embed summary data</div>
                    <div>• Reference full data</div>
                    <div>• Best of both worlds</div>
                    <div>• Example: author name + ID</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-blue-600'
    },

    // Slide 4: One-to-Few Pattern
    {
      id: 'one-to-few-pattern',
      title: 'One-to-Few Pattern',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Embedding: One-to-Few</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">👤</div>
            <h3 className="text-3xl font-bold mb-12 text-green-300">Perfect for Small, Related Data</h3>
            
            <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400 mb-8">
              <h4 className="text-2xl font-bold text-green-300 mb-6">Example: User with Addresses</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-800 rounded-lg p-6 text-left">
                  <div className="text-lg font-bold text-green-300 mb-4">✅ Embed (Good)</div>
                  <div className="font-mono text-sm space-y-1">
                    <div className="text-blue-300">{`{`}</div>
                    <div className="ml-2 text-white">"_id": ObjectId("..."),</div>
                    <div className="ml-2 text-white">"name": "Alice Smith",</div>
                    <div className="ml-2 text-white">"email": "alice@example.com",</div>
                    <div className="ml-2 text-yellow-300">"addresses": [</div>
                    <div className="ml-4 text-blue-300">{`{`}</div>
                    <div className="ml-6 text-white">"type": "home",</div>
                    <div className="ml-6 text-white">"street": "123 Main St",</div>
                    <div className="ml-6 text-white">"city": "Boston"</div>
                    <div className="ml-4 text-blue-300">{`},`}</div>
                    <div className="ml-4 text-blue-300">{`{`}</div>
                    <div className="ml-6 text-white">"type": "work",</div>
                    <div className="ml-6 text-white">"street": "456 Office Rd",</div>
                    <div className="ml-6 text-white">"city": "Boston"</div>
                    <div className="ml-4 text-blue-300">{`}`}</div>
                    <div className="ml-2 text-yellow-300">]</div>
                    <div className="text-blue-300">{`}`}</div>
                  </div>
                </div>
                <div className="space-y-4 text-left">
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">🎯 Why Embed?</div>
                    <div className="text-green-200 text-sm space-y-2">
                      <div>• Users rarely have more than 2-3 addresses</div>
                      <div>• Always loaded together with user</div>
                      <div>• Addresses don't exist without user</div>
                      <div>• One query gets everything</div>
                    </div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">⚡ Performance</div>
                    <div className="text-green-200 text-sm">
                      Single query returns user + addresses. Fast, efficient, atomic updates.
                    </div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">📏 Rule of Thumb</div>
                    <div className="text-green-200 text-sm">
                      If it's less than ~100 items and always accessed together → Embed
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400">
              <div className="text-xl font-bold text-blue-300 mb-4">📚 More One-to-Few Examples</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-600/30 rounded-lg p-4 text-left">
                  <div className="font-bold mb-2">Blog Post → Comments</div>
                  <div className="text-blue-200 text-sm">If you limit comments to first 10, embed them</div>
                </div>
                <div className="bg-blue-600/30 rounded-lg p-4 text-left">
                  <div className="font-bold mb-2">Product → Images</div>
                  <div className="text-blue-200 text-sm">Products have 3-5 images, embed them</div>
                </div>
                <div className="bg-blue-600/30 rounded-lg p-4 text-left">
                  <div className="font-bold mb-2">Order → Line Items</div>
                  <div className="text-blue-200 text-sm">Orders have 1-20 items, embed them</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-teal-600'
    },

    // Slide 5: One-to-Many Pattern
    {
      id: 'one-to-many-pattern',
      title: 'One-to-Many Pattern',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Referencing: One-to-Many</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📚</div>
            <h3 className="text-3xl font-bold mb-12 text-blue-300">For Large, Independent Collections</h3>
            
            <div className="bg-blue-500/20 rounded-xl p-8 border-2 border-blue-400 mb-8">
              <h4 className="text-2xl font-bold text-blue-300 mb-6">Example: Blog Post with 1000+ Comments</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="bg-gray-800 rounded-lg p-6 text-left mb-4">
                    <div className="text-lg font-bold text-blue-300 mb-4">posts collection</div>
                    <div className="font-mono text-sm space-y-1">
                      <div className="text-blue-300">{`{`}</div>
                      <div className="ml-2 text-white">"_id": ObjectId("post123"),</div>
                      <div className="ml-2 text-white">"title": "MongoDB Guide",</div>
                      <div className="ml-2 text-white">"author": "Alice",</div>
                      <div className="ml-2 text-white">"body": "...",</div>
                      <div className="ml-2 text-green-300">"commentCount": 1547</div>
                      <div className="text-blue-300">{`}`}</div>
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-6 text-left">
                    <div className="text-lg font-bold text-blue-300 mb-4">comments collection</div>
                    <div className="font-mono text-sm space-y-1">
                      <div className="text-blue-300">{`{`}</div>
                      <div className="ml-2 text-white">"_id": ObjectId("..."),</div>
                      <div className="ml-2 text-yellow-300">"postId": ObjectId("post123"),</div>
                      <div className="ml-2 text-white">"user": "Bob",</div>
                      <div className="ml-2 text-white">"text": "Great post!",</div>
                      <div className="ml-2 text-white">"createdAt": ISODate("...")</div>
                      <div className="text-blue-300">{`}`}</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 text-left">
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">🔗 Why Reference?</div>
                    <div className="text-blue-200 text-sm space-y-2">
                      <div>• Thousands of comments would exceed 16MB</div>
                      <div>• Comments queried separately (pagination)</div>
                      <div>• Comments have independent lifecycle</div>
                      <div>• Can update comments without touching post</div>
                    </div>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">📊 How to Query</div>
                    <div className="text-blue-200 text-sm font-mono bg-gray-800 p-2 rounded">
                      {`// Get post\ndb.posts.findOne({ _id: postId })\n\n// Get comments separately\ndb.comments.find({ postId: postId })\n  .limit(20)`}
                    </div>
                  </div>
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <div className="font-bold text-lg mb-2">⚡ Best Practice</div>
                    <div className="text-blue-200 text-sm">
                      Store commentCount on post for quick display. Load actual comments on demand.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-500/20 rounded-xl p-8 border border-orange-400">
              <div className="text-xl font-bold text-orange-300 mb-4">⚠️ The Danger: Unbounded Arrays</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-500/20 rounded-lg p-4 text-left">
                  <div className="font-bold text-red-300 mb-2">❌ Bad: Embedding Everything</div>
                  <div className="text-red-200 text-sm space-y-2">
                    <div>• Array grows without limit</div>
                    <div>• Document exceeds 16MB</div>
                    <div>• Slow queries (load everything)</div>
                    <div>• Memory problems</div>
                  </div>
                </div>
                <div className="bg-green-500/20 rounded-lg p-4 text-left">
                  <div className="font-bold text-green-300 mb-2">✅ Good: Reference Pattern</div>
                  <div className="text-green-200 text-sm space-y-2">
                    <div>• Separate collection scales infinitely</div>
                    <div>• Load only what you need</div>
                    <div>• Pagination works properly</div>
                    <div>• Efficient updates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-indigo-600'
    },

    // Slide 6: Hybrid Pattern
    {
      id: 'hybrid-pattern',
      title: 'Hybrid Pattern',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Best of Both Worlds</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🎨</div>
            <h3 className="text-3xl font-bold mb-12 text-purple-300">Embed Summary + Reference Full Data</h3>
            
            <div className="bg-purple-500/20 rounded-xl p-8 border-2 border-purple-400 mb-8">
              <h4 className="text-2xl font-bold text-purple-300 mb-6">Example: Blog Post with Author Info</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-800 rounded-lg p-6 text-left">
                  <div className="text-lg font-bold text-purple-300 mb-4">posts collection</div>
                  <div className="font-mono text-sm space-y-1">
                    <div className="text-blue-300">{`{`}</div>
                    <div className="ml-2 text-white">"_id": ObjectId("..."),</div>
                    <div className="ml-2 text-white">"title": "MongoDB Guide",</div>
                    <div className="ml-2 text-white">"body": "...",</div>
                    <div className="ml-2 text-green-300">"author": {`{`}</div>
                    <div className="ml-4 text-yellow-300">"id": ObjectId("user456"),</div>
                    <div className="ml-4 text-white">"name": "Alice Smith",</div>
                    <div className="ml-4 text-white">"avatar": "alice.jpg"</div>
                    <div className="ml-2 text-green-300">{`}`}</div>
                    <div className="text-blue-300">{`}`}</div>
                  </div>
                  <div className="mt-4 text-green-200 text-sm">
                    ✅ Embedded summary - no extra query needed for display
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-6 text-left">
                  <div className="text-lg font-bold text-purple-300 mb-4">users collection</div>
                  <div className="font-mono text-sm space-y-1">
                    <div className="text-blue-300">{`{`}</div>
                    <div className="ml-2 text-white">"_id": ObjectId("user456"),</div>
                    <div className="ml-2 text-white">"name": "Alice Smith",</div>
                    <div className="ml-2 text-white">"email": "alice@example.com",</div>
                    <div className="ml-2 text-white">"bio": "...",</div>
                    <div className="ml-2 text-white">"followers": 1547,</div>
                    <div className="ml-2 text-white">"joinDate": "..."</div>
                    <div className="text-blue-300">{`}`}</div>
                  </div>
                  <div className="mt-4 text-blue-200 text-sm">
                    ℹ️ Full profile - only load when user clicks author
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-500/20 rounded-lg p-6 border border-green-400 text-left">
                <div className="text-2xl font-bold text-green-300 mb-4">✅ Benefits</div>
                <div className="space-y-3 text-green-200">
                  <div>• <strong>Fast initial load:</strong> Display name/avatar without JOIN</div>
                  <div>• <strong>Fresh data:</strong> If user updates profile, posts still show old snapshot</div>
                  <div>• <strong>Denormalization:</strong> Slight duplication for huge speed gain</div>
                  <div>• <strong>Flexibility:</strong> Can update snapshot with background job</div>
                </div>
              </div>
              <div className="bg-orange-500/20 rounded-lg p-6 border border-orange-400 text-left">
                <div className="text-2xl font-bold text-orange-300 mb-4">⚠️ Trade-offs</div>
                <div className="space-y-3 text-orange-200">
                  <div>• <strong>Stale data:</strong> Embedded summary can be outdated</div>
                  <div>• <strong>Update complexity:</strong> Must update in both places</div>
                  <div>• <strong>Storage cost:</strong> Some duplication of data</div>
                  <div>• <strong>Decision:</strong> Speed vs consistency</div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-8 border-2 border-yellow-400">
              <div className="text-2xl font-bold text-yellow-300 mb-4">🎯 When to Use Hybrid Pattern</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-yellow-600/30 rounded-lg p-4 text-left">
                  <div className="font-bold mb-2">Social Media Posts</div>
                  <div className="text-yellow-200 text-sm">Embed author name/avatar, reference full profile</div>
                </div>
                <div className="bg-yellow-600/30 rounded-lg p-4 text-left">
                  <div className="font-bold mb-2">E-commerce Orders</div>
                  <div className="text-yellow-200 text-sm">Embed product snapshot, reference live inventory</div>
                </div>
                <div className="bg-yellow-600/30 rounded-lg p-4 text-left">
                  <div className="font-bold mb-2">Chat Messages</div>
                  <div className="text-yellow-200 text-sm">Embed sender name, reference full user data</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-pink-600'
    },

    // Slide 7: Schema Versioning
    {
      id: 'schema-versioning',
      title: 'Schema Versioning',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Evolving Your Schema</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🔄</div>
            <h3 className="text-3xl font-bold mb-12 text-green-300">Safe Schema Evolution</h3>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 mb-8">
              <h4 className="text-2xl font-bold text-yellow-300 mb-6">The Problem</h4>
              <div className="text-lg text-gray-200 mb-4">
                Your schema will change over time. How do you handle millions of existing documents?
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-red-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-3">❌</div>
                  <div className="font-bold text-red-300">Bad: Update All at Once</div>
                  <div className="text-red-200 text-sm mt-2">Downtime, slow, risky</div>
                </div>
                <div className="bg-yellow-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-3">⚠️</div>
                  <div className="font-bold text-yellow-300">Risky: Hope for the Best</div>
                  <div className="text-yellow-200 text-sm mt-2">Crashes when old docs appear</div>
                </div>
                <div className="bg-green-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-3">✅</div>
                  <div className="font-bold text-green-300">Good: Version Field</div>
                  <div className="text-green-200 text-sm mt-2">Handle multiple versions</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400 mb-8">
              <h4 className="text-2xl font-bold text-blue-300 mb-6">📋 The Version Field Pattern</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-800 rounded-lg p-6 text-left">
                  <div className="text-lg font-bold text-blue-300 mb-4">Version 1 (Old)</div>
                  <div className="font-mono text-sm space-y-1">
                    <div className="text-blue-300">{`{`}</div>
                    <div className="ml-2 text-yellow-300">"schemaVersion": 1,</div>
                    <div className="ml-2 text-white">"fullName": "John Doe",</div>
                    <div className="ml-2 text-white">"email": "john@example.com"</div>
                    <div className="text-blue-300">{`}`}</div>
                  </div>
                  <div className="mt-4 text-blue-200 text-sm">Single name field</div>
                </div>
                <div className="bg-gray-800 rounded-lg p-6 text-left">
                  <div className="text-lg font-bold text-green-300 mb-4">Version 2 (New)</div>
                  <div className="font-mono text-sm space-y-1">
                    <div className="text-blue-300">{`{`}</div>
                    <div className="ml-2 text-yellow-300">"schemaVersion": 2,</div>
                    <div className="ml-2 text-green-300">"name": {`{`}</div>
                    <div className="ml-4 text-white">"first": "John",</div>
                    <div className="ml-4 text-white">"last": "Doe"</div>
                    <div className="ml-2 text-green-300">{`}`},</div>
                    <div className="ml-2 text-white">"email": "john@example.com"</div>
                    <div className="text-blue-300">{`}`}</div>
                  </div>
                  <div className="mt-4 text-green-200 text-sm">Split name field</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-purple-500/20 rounded-lg p-6 border border-purple-400">
                <div className="text-4xl mb-3">1️⃣</div>
                <div className="font-bold text-purple-300 mb-2">Deploy Code</div>
                <div className="text-purple-200 text-sm">Handle both versions in your app</div>
              </div>
              <div className="bg-orange-500/20 rounded-lg p-6 border border-orange-400">
                <div className="text-4xl mb-3">2️⃣</div>
                <div className="font-bold text-orange-300 mb-2">Lazy Migration</div>
                <div className="text-orange-200 text-sm">Update docs as they're accessed</div>
              </div>
              <div className="bg-green-500/20 rounded-lg p-6 border border-green-400">
                <div className="text-4xl mb-3">3️⃣</div>
                <div className="font-bold text-green-300 mb-2">Background Job</div>
                <div className="text-green-200 text-sm">Slowly migrate old documents</div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-pink-600'
    },

    // Slide 8: Indexing Strategies
    {
      id: 'indexing-strategies',
      title: 'Indexing Strategies',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Speed Up Your Queries</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">⚡</div>
            <h3 className="text-3xl font-bold mb-12 text-blue-300">Beyond the _id Index</h3>
            
            <div className="bg-red-500/20 rounded-xl p-8 border-2 border-red-400 mb-8">
              <h4 className="text-3xl font-bold text-red-300 mb-6">Without Index: Collection Scan</h4>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="text-6xl animate-float">🐌</div>
                <div className="text-left">
                  <div className="text-2xl font-bold">Checking EVERY document</div>
                  <div className="text-red-200">1,000,000 documents = 1,000,000 checks</div>
                </div>
              </div>
              <div className="bg-red-600/30 rounded-lg p-6">
                <div className="font-mono text-lg">
                  db.users.find({`{ email: "alice@example.com" }`})
                </div>
                <div className="text-red-200 mt-4">
                  Scans entire collection → Takes seconds → Users wait → Bad experience
                </div>
              </div>
            </div>

            <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400 mb-8">
              <h4 className="text-3xl font-bold text-green-300 mb-6">With Index: Direct Lookup</h4>
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="text-6xl animate-float">🚀</div>
                <div className="text-left">
                  <div className="text-2xl font-bold">Jumps to the right document</div>
                  <div className="text-green-200">1,000,000 documents = 1 lookup</div>
                </div>
              </div>
              <div className="bg-green-600/30 rounded-lg p-6">
                <div className="font-mono text-lg mb-2">
                  db.users.createIndex({`{ email: 1 }`})
                </div>
                <div className="font-mono text-lg">
                  db.users.find({`{ email: "alice@example.com" }`})
                </div>
                <div className="text-green-200 mt-4">
                  Uses index → Takes milliseconds → Instant results → Happy users
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-500/20 rounded-lg p-6 border border-blue-400">
                <div className="text-4xl mb-3">📋</div>
                <div className="font-bold text-blue-300 text-lg mb-3">Single Field</div>
                <div className="text-sm text-blue-200 space-y-2">
                  <div className="font-mono bg-gray-800 p-2 rounded">{`{ email: 1 }`}</div>
                  <div>For queries on one field</div>
                </div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-6 border border-purple-400">
                <div className="text-4xl mb-3">🔗</div>
                <div className="font-bold text-purple-300 text-lg mb-3">Compound</div>
                <div className="text-sm text-purple-200 space-y-2">
                  <div className="font-mono bg-gray-800 p-2 rounded">{`{ city: 1, age: 1 }`}</div>
                  <div>For queries on multiple fields</div>
                </div>
              </div>
              <div className="bg-orange-500/20 rounded-lg p-6 border border-orange-400">
                <div className="text-4xl mb-3">🔍</div>
                <div className="font-bold text-orange-300 text-lg mb-3">Text</div>
                <div className="text-sm text-orange-200 space-y-2">
                  <div className="font-mono bg-gray-800 p-2 rounded">{`{ title: "text" }`}</div>
                  <div>For full-text search</div>
                </div>
              </div>
              <div className="bg-green-500/20 rounded-lg p-6 border border-green-400">
                <div className="text-4xl mb-3">🌍</div>
                <div className="font-bold text-green-300 text-lg mb-3">Geospatial</div>
                <div className="text-sm text-green-200 space-y-2">
                  <div className="font-mono bg-gray-800 p-2 rounded">{`{ location: "2dsphere" }`}</div>
                  <div>For location-based queries</div>
                </div>
              </div>
              <div className="bg-yellow-500/20 rounded-lg p-6 border border-yellow-400">
                <div className="text-4xl mb-3">📊</div>
                <div className="font-bold text-yellow-300 text-lg mb-3">Multikey</div>
                <div className="text-sm text-yellow-200 space-y-2">
                  <div className="font-mono bg-gray-800 p-2 rounded">{`{ tags: 1 }`}</div>
                  <div>Indexes each array element</div>
                </div>
              </div>
              <div className="bg-pink-500/20 rounded-lg p-6 border border-pink-400">
                <div className="text-4xl mb-3">🎯</div>
                <div className="font-bold text-pink-300 text-lg mb-3">Partial</div>
                <div className="text-sm text-pink-200 space-y-2">
                  <div className="font-mono bg-gray-800 p-2 rounded text-xs">{`{ status: 1 }`}</div>
                  <div>Only index matching docs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-cyan-600'
    },

    // Slide 9: Index Trade-offs
    {
      id: 'index-tradeoffs',
      title: 'Index Trade-offs',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">The Cost of Speed</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">⚖️</div>
            <h3 className="text-3xl font-bold mb-12 text-yellow-300">Read/Write Trade-offs</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">✅</div>
                  <h4 className="text-3xl font-bold text-green-300">Benefits</h4>
                </div>
                <div className="space-y-4">
                  <div className="bg-green-600/30 rounded-lg p-6">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">🚀</span>
                      <div className="text-left">
                        <div className="font-bold text-lg">Fast Reads</div>
                        <div className="text-green-200 text-sm">O(log n) instead of O(n)</div>
                        <div className="text-green-200 text-sm">Milliseconds instead of seconds</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-6">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">📊</span>
                      <div className="text-left">
                        <div className="font-bold text-lg">Efficient Sorting</div>
                        <div className="text-green-200 text-sm">Pre-sorted data structure</div>
                        <div className="text-green-200 text-sm">No need to sort at query time</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-6">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">🔍</span>
                      <div className="text-left">
                        <div className="font-bold text-lg">Range Queries</div>
                        <div className="text-green-200 text-sm">Find age {'>'} 18 efficiently</div>
                        <div className="text-green-200 text-sm">Scan index, not collection</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-500/20 rounded-xl p-8 border-2 border-orange-400">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">⚠️</div>
                  <h4 className="text-3xl font-bold text-orange-300">Costs</h4>
                </div>
                <div className="space-y-4">
                  <div className="bg-orange-600/30 rounded-lg p-6">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">🐌</span>
                      <div className="text-left">
                        <div className="font-bold text-lg">Slower Writes</div>
                        <div className="text-orange-200 text-sm">Must update index on every write</div>
                        <div className="text-orange-200 text-sm">More indexes = slower inserts</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-600/30 rounded-lg p-6">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">💾</span>
                      <div className="text-left">
                        <div className="font-bold text-lg">Storage Overhead</div>
                        <div className="text-orange-200 text-sm">Indexes take disk space</div>
                        <div className="text-orange-200 text-sm">10-15% of collection size each</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-600/30 rounded-lg p-6">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">🧠</span>
                      <div className="text-left">
                        <div className="font-bold text-lg">RAM Usage</div>
                        <div className="text-orange-200 text-sm">Indexes must fit in RAM</div>
                        <div className="text-orange-200 text-sm">Too many = performance drops</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-500/20 rounded-xl p-8 border border-purple-400/30">
              <div className="text-2xl font-bold text-purple-300 mb-4">🎯 Best Practices</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-purple-600/20 rounded-lg p-4">
                  <div className="font-bold text-purple-300 mb-2">Index Your Queries</div>
                  <div className="text-purple-200 text-sm">Not your data model</div>
                </div>
                <div className="bg-purple-600/20 rounded-lg p-4">
                  <div className="font-bold text-purple-300 mb-2">Read-Heavy? More Indexes</div>
                  <div className="text-purple-200 text-sm">Write-Heavy? Fewer Indexes</div>
                </div>
                <div className="bg-purple-600/20 rounded-lg p-4">
                  <div className="font-bold text-purple-300 mb-2">Monitor & Optimize</div>
                  <div className="text-purple-200 text-sm">Remove unused indexes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-orange-600 to-red-600'
    },

    // Slide 10: Query Execution & Explain Plans
    {
      id: 'query-execution',
      title: 'Query Execution & Explain Plans',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Understanding Query Performance</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🔍</div>
            <h3 className="text-3xl font-bold mb-12 text-blue-300">The .explain() Method</h3>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 mb-8">
              <h4 className="text-2xl font-bold text-yellow-300 mb-6">🎯 X-Ray Vision for Queries</h4>
              <div className="bg-gray-800 rounded-lg p-6 mb-6">
                <div className="font-mono text-lg">
                  db.users.find({`{ age: { $gt: 18 } }`}).explain("executionStats")
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-green-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-3">📊</div>
                  <div className="font-bold text-green-300 mb-2">Execution Stats</div>
                  <div className="text-green-200 text-sm">Documents scanned, time taken</div>
                </div>
                <div className="bg-blue-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-3">🗺️</div>
                  <div className="font-bold text-blue-300 mb-2">Query Plan</div>
                  <div className="text-blue-200 text-sm">Which index was used?</div>
                </div>
                <div className="bg-purple-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-3">⚡</div>
                  <div className="font-bold text-purple-300 mb-2">Performance</div>
                  <div className="text-purple-200 text-sm">Identify bottlenecks</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-red-500/20 rounded-xl p-8 border-2 border-red-400">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🐌</div>
                  <h4 className="text-2xl font-bold text-red-300">COLLSCAN (Bad)</h4>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <div className="font-mono text-sm space-y-1">
                    <div className="text-red-300">"executionStages": {`{`}</div>
                    <div className="ml-2 text-yellow-300">"stage": "COLLSCAN",</div>
                    <div className="ml-2 text-white">"docsExamined": 1000000</div>
                    <div className="text-red-300">{`}`}</div>
                  </div>
                </div>
                <div className="space-y-2 text-left text-sm">
                  <div className="flex items-center space-x-2">
                    <span>❌</span>
                    <span>Scanned entire collection</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>❌</span>
                    <span>No index used</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>❌</span>
                    <span>Slow and inefficient</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🚀</div>
                  <h4 className="text-2xl font-bold text-green-300">IXSCAN (Good)</h4>
                </div>
                <div className="bg-gray-800 rounded-lg p-4 mb-4">
                  <div className="font-mono text-sm space-y-1">
                    <div className="text-green-300">"executionStages": {`{`}</div>
                    <div className="ml-2 text-yellow-300">"stage": "IXSCAN",</div>
                    <div className="ml-2 text-white">"docsExamined": 42</div>
                    <div className="text-green-300">{`}`}</div>
                  </div>
                </div>
                <div className="space-y-2 text-left text-sm">
                  <div className="flex items-center space-x-2">
                    <span>✅</span>
                    <span>Used index to find docs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>✅</span>
                    <span>Only scanned matches</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>✅</span>
                    <span>Fast and efficient</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-600 to-purple-600'
    },

    // Slide 11: Advanced Query Operators
    {
      id: 'advanced-query-operators',
      title: 'Advanced Query Operators',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Beyond Basic Queries</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🎯</div>
            <h3 className="text-3xl font-bold mb-12 text-green-300">Powerful Query Patterns</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400">
                <div className="text-4xl mb-4">🔍</div>
                <h4 className="text-xl font-bold text-blue-300 mb-4">$elemMatch</h4>
                <div className="bg-gray-800 rounded-lg p-4 mb-4 text-left">
                  <div className="font-mono text-sm space-y-1">
                    <div className="text-blue-300">{'{'}</div>
                    <div className="ml-2 text-white">"scores": {`{`}</div>
                    <div className="ml-4 text-yellow-300">"$elemMatch": {`{`}</div>
                    <div className="ml-6 text-white">"$gte": 80,</div>
                    <div className="ml-6 text-white">"$lt": 90</div>
                    <div className="ml-4 text-yellow-300">{`}`}</div>
                    <div className="ml-2 text-white">{`}`}</div>
                    <div className="text-blue-300">{'}'}</div>
                  </div>
                </div>
                <div className="text-blue-200 text-sm">
                  Matches if array has at least one element satisfying ALL conditions
                </div>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-8 border border-purple-400">
                <div className="text-4xl mb-4">📏</div>
                <h4 className="text-xl font-bold text-purple-300 mb-4">$size</h4>
                <div className="bg-gray-800 rounded-lg p-4 mb-4 text-left">
                  <div className="font-mono text-sm space-y-1">
                    <div className="text-blue-300">{'{'}</div>
                    <div className="ml-2 text-white">"tags": {`{`}</div>
                    <div className="ml-4 text-yellow-300">"$size": 3</div>
                    <div className="ml-2 text-white">{`}`}</div>
                    <div className="text-blue-300">{'}'}</div>
                  </div>
                </div>
                <div className="text-purple-200 text-sm">
                  Matches documents where array has exactly N elements
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border border-green-400">
                <div className="text-4xl mb-4">🏷️</div>
                <h4 className="text-xl font-bold text-green-300 mb-4">$type</h4>
                <div className="bg-gray-800 rounded-lg p-4 mb-4 text-left">
                  <div className="font-mono text-sm space-y-1">
                    <div className="text-blue-300">{'{'}</div>
                    <div className="ml-2 text-white">"age": {`{`}</div>
                    <div className="ml-4 text-yellow-300">"$type": "number"</div>
                    <div className="ml-2 text-white">{`}`}</div>
                    <div className="text-blue-300">{'}'}</div>
                  </div>
                </div>
                <div className="text-green-200 text-sm">
                  Matches documents where field is of specific BSON type
                </div>
              </div>

              <div className="bg-orange-500/20 rounded-xl p-8 border border-orange-400">
                <div className="text-4xl mb-4">🧮</div>
                <h4 className="text-xl font-bold text-orange-300 mb-4">$expr</h4>
                <div className="bg-gray-800 rounded-lg p-4 mb-4 text-left">
                  <div className="font-mono text-sm space-y-1">
                    <div className="text-blue-300">{'{'}</div>
                    <div className="ml-2 text-yellow-300">"$expr": {`{`}</div>
                    <div className="ml-4 text-white">"$gt": ["$spent", "$budget"]</div>
                    <div className="ml-2 text-yellow-300">{`}`}</div>
                    <div className="text-blue-300">{'}'}</div>
                  </div>
                </div>
                <div className="text-orange-200 text-sm">
                  Compare two fields in the same document
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-8 border-2 border-yellow-400">
              <div className="text-2xl font-bold text-yellow-300 mb-4">💡 Pro Tip</div>
              <div className="text-lg text-yellow-100">
                These operators unlock complex queries that would be impossible with basic $gt/$in
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-blue-600'
    },

    // Slide 12: Projection & Field Shaping
    {
      id: 'projection-field-shaping',
      title: 'Projection & Field Shaping',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Limit What You Retrieve</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">✂️</div>
            <h3 className="text-3xl font-bold mb-12 text-blue-300">Select Only What You Need</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-red-500/20 rounded-xl p-8 border-2 border-red-400">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">❌</div>
                  <h4 className="text-2xl font-bold text-red-300">Without Projection</h4>
                </div>
                <div className="bg-gray-800 rounded-lg p-6 mb-4 text-left">
                  <div className="font-mono text-sm space-y-1">
                    <div className="text-gray-400">{`// Returns EVERYTHING`}</div>
                    <div className="text-white">db.users.find({`{ city: "NYC" }`})</div>
                    <div className="mt-2 text-gray-400">{`// Result (100KB+ per doc):`}</div>
                    <div className="text-blue-300">{`{`}</div>
                    <div className="ml-2 text-white">"name": "Alice",</div>
                    <div className="ml-2 text-white">"email": "...",</div>
                    <div className="ml-2 text-white">{`"password": "...", // Exposed!`}</div>
                    <div className="ml-2 text-white">{`"purchaseHistory": [...], // Huge!`}</div>
                    <div className="ml-2 text-white">{`"socialSecurityNumber": "...", // Yikes!`}</div>
                    <div className="ml-2 text-gray-400">{`// + 50 more fields...`}</div>
                    <div className="text-blue-300">{`}`}</div>
                  </div>
                </div>
                <div className="space-y-2 text-left text-sm">
                  <div className="flex items-center space-x-2">
                    <span>⚠️</span>
                    <span>Sends massive payloads</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>⚠️</span>
                    <span>Exposes sensitive data</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>⚠️</span>
                    <span>Slow network transfer</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">✅</div>
                  <h4 className="text-2xl font-bold text-green-300">With Projection</h4>
                </div>
                <div className="bg-gray-800 rounded-lg p-6 mb-4 text-left">
                  <div className="font-mono text-sm space-y-1">
                    <div className="text-gray-400">{`// Only get what you need`}</div>
                    <div className="text-white">db.users.find(</div>
                    <div className="ml-2 text-blue-300">{`{ city: "NYC" }`},</div>
                    <div className="ml-2 text-green-300">{`{ name: 1, email: 1, _id: 0 }`}</div>
                    <div className="text-white">)</div>
                    <div className="mt-2 text-gray-400">{`// Result (1KB per doc):`}</div>
                    <div className="text-blue-300">{`{`}</div>
                    <div className="ml-2 text-white">"name": "Alice",</div>
                    <div className="ml-2 text-white">"email": "alice@example.com"</div>
                    <div className="text-blue-300">{`}`}</div>
                  </div>
                </div>
                <div className="space-y-2 text-left text-sm">
                  <div className="flex items-center space-x-2">
                    <span>✅</span>
                    <span>100x smaller payload</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>✅</span>
                    <span>Hides sensitive data</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>✅</span>
                    <span>Fast network transfer</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-500/20 rounded-lg p-6 border border-blue-400">
                <div className="text-4xl mb-3">📥</div>
                <div className="font-bold text-blue-300 mb-2">Include Fields</div>
                <div className="font-mono text-sm bg-gray-800 p-2 rounded mb-2">{`{ name: 1, age: 1 }`}</div>
                <div className="text-blue-200 text-sm">Only these fields</div>
              </div>
              <div className="bg-red-500/20 rounded-lg p-6 border border-red-400">
                <div className="text-4xl mb-3">📤</div>
                <div className="font-bold text-red-300 mb-2">Exclude Fields</div>
                <div className="font-mono text-sm bg-gray-800 p-2 rounded mb-2">{`{ password: 0, ssn: 0 }`}</div>
                <div className="text-red-200 text-sm">Everything except these</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-6 border border-purple-400">
                <div className="text-4xl mb-3">✂️</div>
                <div className="font-bold text-purple-300 mb-2">Array Slicing</div>
                <div className="font-mono text-sm bg-gray-800 p-2 rounded mb-2">{`{ comments: { $slice: 5 } }`}</div>
                <div className="text-purple-200 text-sm">First 5 array elements</div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-teal-600'
    },

    // Slide 13: Pagination at Scale
    {
      id: 'pagination-at-scale',
      title: 'Pagination at Scale',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Don't Break Pagination</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📄</div>
            <h3 className="text-3xl font-bold mb-12 text-yellow-300">Why skip() + limit() Fails</h3>
            
            <div className="bg-red-500/20 rounded-xl p-8 border-2 border-red-400 mb-8">
              <h4 className="text-3xl font-bold text-red-300 mb-6">❌ The Broken Pattern</h4>
              <div className="bg-gray-800 rounded-lg p-6 mb-6">
                <div className="font-mono text-lg">
                  db.posts.find().skip(10000).limit(20)
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-red-600/30 rounded-lg p-6">
                  <div className="text-5xl mb-3">🐌</div>
                  <div className="font-bold text-lg mb-2">Scans EVERYTHING</div>
                  <div className="text-red-200 text-sm">Must scan 10,020 docs to skip 10,000</div>
                </div>
                <div className="bg-red-600/30 rounded-lg p-6">
                  <div className="text-5xl mb-3">💥</div>
                  <div className="font-bold text-lg mb-2">Gets Slower</div>
                  <div className="text-red-200 text-sm">Page 1: fast, Page 1000: timeout</div>
                </div>
                <div className="bg-red-600/30 rounded-lg p-6">
                  <div className="text-5xl mb-3">💸</div>
                  <div className="font-bold text-lg mb-2">Wastes Resources</div>
                  <div className="text-red-200 text-sm">Database does tons of work for nothing</div>
                </div>
              </div>
            </div>

            <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400 mb-8">
              <h4 className="text-3xl font-bold text-green-300 mb-6">✅ Range-Based Pagination</h4>
              <div className="space-y-6">
                <div>
                  <div className="text-xl font-bold text-green-300 mb-4">Page 1:</div>
                  <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm">
                    db.posts.find().sort({`{ _id: -1 }`}).limit(20)
                  </div>
                  <div className="text-green-200 mt-2 text-sm">Get first 20, remember last _id</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-green-300 mb-4">Page 2:</div>
                  <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm">
                    db.posts.find({`{ _id: { $lt: lastSeenId } }`}).sort({`{ _id: -1 }`}).limit(20)
                  </div>
                  <div className="text-green-200 mt-2 text-sm">Start where you left off</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-green-300 mb-4">Page 3, 4, 5...:</div>
                  <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm">
                    db.posts.find({`{ _id: { $lt: newLastSeenId } }`}).sort({`{ _id: -1 }`}).limit(20)
                  </div>
                  <div className="text-green-200 mt-2 text-sm">Always fast - uses index!</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-500/20 rounded-lg p-6 border border-blue-400">
                <div className="text-4xl mb-3">⚡</div>
                <div className="font-bold text-blue-300 mb-2">Constant Speed</div>
                <div className="text-blue-200 text-sm">Every page is equally fast</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-6 border border-purple-400">
                <div className="text-4xl mb-3">🎯</div>
                <div className="font-bold text-purple-300 mb-2">Index-Friendly</div>
                <div className="text-purple-200 text-sm">Uses index range scan</div>
              </div>
              <div className="bg-green-500/20 rounded-lg p-6 border border-green-400">
                <div className="text-4xl mb-3">📈</div>
                <div className="font-bold text-green-300 mb-2">Scalable</div>
                <div className="text-green-200 text-sm">Works with millions of docs</div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-600 to-orange-600'
    },

    // Slide 14: Compound Indexes Deep Dive
    {
      id: 'compound-indexes',
      title: 'Compound Indexes',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Multi-Field Index Strategy</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🔗</div>
            <h3 className="text-3xl font-bold mb-12 text-purple-300">Order Matters!</h3>
            
            <div className="bg-purple-500/20 rounded-xl p-8 border-2 border-purple-400 mb-8">
              <h4 className="text-2xl font-bold text-purple-300 mb-6">Compound Index: {`{ city: 1, age: 1 }`}</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-green-500/20 rounded-lg p-6 border border-green-400">
                    <div className="text-xl font-bold text-green-300 mb-4">✅ These Queries Use Index</div>
                    <div className="space-y-3 text-left">
                      <div className="bg-gray-800 rounded p-3 font-mono text-sm">
                        <div className="text-green-400">find({`{ city: "NYC" }`})</div>
                        <div className="text-gray-400 text-xs mt-1">Uses first part of index</div>
                      </div>
                      <div className="bg-gray-800 rounded p-3 font-mono text-sm">
                        <div className="text-green-400">find({`{ city: "NYC", age: 25 }`})</div>
                        <div className="text-gray-400 text-xs mt-1">Uses entire index - PERFECT</div>
                      </div>
                      <div className="bg-gray-800 rounded p-3 font-mono text-sm">
                        <div className="text-green-400">find({`{ city: "NYC", age: { $gt: 18 } }`})</div>
                        <div className="text-gray-400 text-xs mt-1">Range query - still uses index</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-red-500/20 rounded-lg p-6 border border-red-400">
                    <div className="text-xl font-bold text-red-300 mb-4">❌ These Queries DON'T Use Index</div>
                    <div className="space-y-3 text-left">
                      <div className="bg-gray-800 rounded p-3 font-mono text-sm">
                        <div className="text-red-400">find({`{ age: 25 }`})</div>
                        <div className="text-gray-400 text-xs mt-1">Age is 2nd field - COLLSCAN!</div>
                      </div>
                      <div className="bg-gray-800 rounded p-3 font-mono text-sm">
                        <div className="text-red-400">find({`{ age: { $gt: 18 }, city: "NYC" }`})</div>
                        <div className="text-gray-400 text-xs mt-1">Order doesn't matter in query, but index order does!</div>
                      </div>
                      <div className="bg-gray-800 rounded p-3 font-mono text-sm">
                        <div className="text-red-400">find({`{ name: "Alice" }`})</div>
                        <div className="text-gray-400 text-xs mt-1">name not in index - COLLSCAN!</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-8 border-2 border-yellow-400 mb-8">
              <div className="text-2xl font-bold text-yellow-300 mb-6">🎯 The ESR Rule</div>
              <div className="text-xl mb-6">Design compound indexes in this order:</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-yellow-600/30 rounded-lg p-6">
                  <div className="text-5xl mb-3">E</div>
                  <div className="font-bold text-2xl mb-2">Equality</div>
                  <div className="text-yellow-200 text-sm">Fields with exact matches</div>
                  <div className="text-yellow-200 text-sm font-mono mt-2">city: "NYC"</div>
                </div>
                <div className="bg-yellow-600/30 rounded-lg p-6">
                  <div className="text-5xl mb-3">S</div>
                  <div className="font-bold text-2xl mb-2">Sort</div>
                  <div className="text-yellow-200 text-sm">Fields you sort by</div>
                  <div className="text-yellow-200 text-sm font-mono mt-2">sort by createdAt</div>
                </div>
                <div className="bg-yellow-600/30 rounded-lg p-6">
                  <div className="text-5xl mb-3">R</div>
                  <div className="font-bold text-2xl mb-2">Range</div>
                  <div className="text-yellow-200 text-sm">Fields with range queries</div>
                  <div className="text-yellow-200 text-sm font-mono mt-2">{`age: { $gt: 18 }`}</div>
                </div>
              </div>
              <div className="mt-6 bg-yellow-600/20 rounded-lg p-4">
                <div className="font-bold text-yellow-300 mb-2">Example: {`{ city: 1, createdAt: -1, age: 1 }`}</div>
                <div className="text-yellow-200">E (city) → S (createdAt) → R (age)</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-500/20 rounded-lg p-6 border border-blue-400 text-left">
                <div className="text-2xl font-bold text-blue-300 mb-4">💡 Pro Tips</div>
                <div className="space-y-2 text-blue-200 text-sm">
                  <div>• Put most selective fields first (narrows results fastest)</div>
                  <div>• Index direction matters for sort: {`{ a: 1, b: -1 }`} ≠ {`{ a: 1, b: 1 }`}</div>
                  <div>• Can have multiple compound indexes for different query patterns</div>
                  <div>• Use .explain() to verify index is actually used</div>
                </div>
              </div>
              <div className="bg-orange-500/20 rounded-lg p-6 border border-orange-400 text-left">
                <div className="text-2xl font-bold text-orange-300 mb-4">⚠️ Watch Out</div>
                <div className="space-y-2 text-orange-200 text-sm">
                  <div>• Too many indexes slow down writes</div>
                  <div>• Index selectivity matters (unique values perform better)</div>
                  <div>• Can't use later fields without earlier fields</div>
                  <div>• Range queries prevent using later index fields efficiently</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-indigo-600'
    },

    // Slide 15: Aggregation Pipeline
    {
      id: 'aggregation-pipeline',
      title: 'Aggregation Pipeline',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Data Transformation Pipeline</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🔄</div>
            <h3 className="text-3xl font-bold mb-12 text-purple-300">Transform Data in the Database</h3>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 mb-8">
              <h4 className="text-2xl font-bold text-yellow-300 mb-6">🏭 Assembly Line for Data</h4>
              <div className="flex items-center justify-center space-x-4 text-3xl mb-6">
                <div className="bg-blue-500/20 rounded-lg p-4">📥 Raw Data</div>
                <span>→</span>
                <div className="bg-purple-500/20 rounded-lg p-4">$match</div>
                <span>→</span>
                <div className="bg-green-500/20 rounded-lg p-4">$group</div>
                <span>→</span>
                <div className="bg-orange-500/20 rounded-lg p-4">$sort</div>
                <span>→</span>
                <div className="bg-green-500/20 rounded-lg p-4">📤 Result</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-500/20 rounded-lg p-6 border border-blue-400">
                <div className="text-4xl mb-3">🔍</div>
                <div className="font-bold text-blue-300 text-lg mb-2">$match</div>
                <div className="text-blue-200 text-sm mb-3">Filter documents (like find)</div>
                <div className="font-mono text-xs bg-gray-800 p-2 rounded">
                  {`{ $match: { age: { $gt: 18 } } }`}
                </div>
              </div>

              <div className="bg-green-500/20 rounded-lg p-6 border border-green-400">
                <div className="text-4xl mb-3">📊</div>
                <div className="font-bold text-green-300 text-lg mb-2">$group</div>
                <div className="text-green-200 text-sm mb-3">Aggregate by field</div>
                <div className="font-mono text-xs bg-gray-800 p-2 rounded">
                  {`{ $group: { _id: "$city" } }`}
                </div>
              </div>

              <div className="bg-purple-500/20 rounded-lg p-6 border border-purple-400">
                <div className="text-4xl mb-3">🔗</div>
                <div className="font-bold text-purple-300 text-lg mb-2">$lookup</div>
                <div className="text-purple-200 text-sm mb-3">JOIN collections</div>
                <div className="font-mono text-xs bg-gray-800 p-2 rounded">
                  {`{ $lookup: { from: "orders" } }`}
                </div>
              </div>

              <div className="bg-orange-500/20 rounded-lg p-6 border border-orange-400">
                <div className="text-4xl mb-3">📈</div>
                <div className="font-bold text-orange-300 text-lg mb-2">$sort</div>
                <div className="text-orange-200 text-sm mb-3">Order results</div>
                <div className="font-mono text-xs bg-gray-800 p-2 rounded">
                  {`{ $sort: { count: -1 } }`}
                </div>
              </div>

              <div className="bg-yellow-500/20 rounded-lg p-6 border border-yellow-400">
                <div className="text-4xl mb-3">🎯</div>
                <div className="font-bold text-yellow-300 text-lg mb-2">$project</div>
                <div className="text-yellow-200 text-sm mb-3">Shape output fields</div>
                <div className="font-mono text-xs bg-gray-800 p-2 rounded">
                  {`{ $project: { name: 1 } }`}
                </div>
              </div>

              <div className="bg-pink-500/20 rounded-lg p-6 border border-pink-400">
                <div className="text-4xl mb-3">🧬</div>
                <div className="font-bold text-pink-300 text-lg mb-2">$unwind</div>
                <div className="text-pink-200 text-sm mb-3">Flatten arrays</div>
                <div className="font-mono text-xs bg-gray-800 p-2 rounded">
                  {`{ $unwind: "$tags" }`}
                </div>
              </div>
            </div>

            <div className="bg-green-500/20 rounded-xl p-8 border border-green-400">
              <div className="text-2xl font-bold text-green-300 mb-4">✨ Why Use Aggregation?</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-left">
                  <div className="font-bold mb-2">🚀 Fast</div>
                  <div className="text-green-200 text-sm">Runs in the database, not your app</div>
                </div>
                <div className="text-left">
                  <div className="font-bold mb-2">💪 Powerful</div>
                  <div className="text-green-200 text-sm">Complex transformations in one query</div>
                </div>
                <div className="text-left">
                  <div className="font-bold mb-2">📊 Analytics</div>
                  <div className="text-green-200 text-sm">Reports, dashboards, insights</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-indigo-600'
    },

    // Slide 16: Aggregation Pipeline Example
    {
      id: 'aggregation-example',
      title: 'Aggregation Pipeline Example',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Real-World Pipeline</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📊</div>
            <h3 className="text-3xl font-bold mb-12 text-green-300">Find Top 5 Cities by Average Order Value</h3>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20 mb-8">
              <h4 className="text-2xl font-bold text-yellow-300 mb-6">The Pipeline</h4>
              <div className="bg-gray-800 rounded-lg p-6 text-left">
                <div className="font-mono text-sm space-y-3">
                  <div className="text-white">db.orders.aggregate([</div>
                  <div className="ml-2 text-blue-300">{`// Stage 1: Filter completed orders`}</div>
                  <div className="ml-2 text-yellow-300">{`{`}</div>
                  <div className="ml-4 text-white">{`$match: { status: "completed" }`}</div>
                  <div className="ml-2 text-yellow-300">{`},`}</div>
                  <div className="ml-2 text-blue-300 mt-3">{`// Stage 2: Group by city, calculate stats`}</div>
                  <div className="ml-2 text-yellow-300">{`{`}</div>
                  <div className="ml-4 text-white">$group: {`{`}</div>
                  <div className="ml-6 text-white">_id: "$city",</div>
                  <div className="ml-6 text-white">avgOrderValue: {`{ $avg: "$total" }`},</div>
                  <div className="ml-6 text-white">totalOrders: {`{ $sum: 1 }`}</div>
                  <div className="ml-4 text-white">{`}`}</div>
                  <div className="ml-2 text-yellow-300">{`},`}</div>
                  <div className="ml-2 text-blue-300 mt-3">{`// Stage 3: Sort by average (highest first)`}</div>
                  <div className="ml-2 text-yellow-300">{`{`}</div>
                  <div className="ml-4 text-white">{`$sort: { avgOrderValue: -1 }`}</div>
                  <div className="ml-2 text-yellow-300">{`},`}</div>
                  <div className="ml-2 text-blue-300 mt-3">{`// Stage 4: Take top 5`}</div>
                  <div className="ml-2 text-yellow-300">{`{`}</div>
                  <div className="ml-4 text-white">{`$limit: 5`}</div>
                  <div className="ml-2 text-yellow-300">{`}`}</div>
                  <div className="text-white">]);</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-blue-500/20 rounded-lg p-6">
                <div className="text-4xl mb-3">1️⃣</div>
                <div className="font-bold text-blue-300 mb-2">$match</div>
                <div className="text-blue-200 text-sm">Filter to only completed orders</div>
                <div className="text-xs text-blue-200 mt-2">1M docs → 800K docs</div>
              </div>
              <div className="bg-green-500/20 rounded-lg p-6">
                <div className="text-4xl mb-3">2️⃣</div>
                <div className="font-bold text-green-300 mb-2">$group</div>
                <div className="text-green-200 text-sm">Calculate stats per city</div>
                <div className="text-xs text-green-200 mt-2">800K docs → 50 cities</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-6">
                <div className="text-4xl mb-3">3️⃣</div>
                <div className="font-bold text-purple-300 mb-2">$sort</div>
                <div className="text-purple-200 text-sm">Order by avg value</div>
                <div className="text-xs text-purple-200 mt-2">50 cities → sorted</div>
              </div>
              <div className="bg-orange-500/20 rounded-lg p-6">
                <div className="text-4xl mb-3">4️⃣</div>
                <div className="font-bold text-orange-300 mb-2">$limit</div>
                <div className="text-orange-200 text-sm">Take top 5</div>
                <div className="text-xs text-orange-200 mt-2">50 cities → 5 cities</div>
              </div>
            </div>

            <div className="bg-green-500/20 rounded-xl p-8 border border-green-400">
              <div className="text-2xl font-bold text-green-300 mb-4">📈 Result</div>
              <div className="bg-gray-800 rounded-lg p-6 text-left">
                <div className="font-mono text-sm space-y-2">
                  <div className="text-white">[</div>
                  <div className="ml-2 text-blue-300">{`{ _id: "San Francisco", avgOrderValue: 142.50, totalOrders: 15234 },`}</div>
                  <div className="ml-2 text-blue-300">{`{ _id: "New York", avgOrderValue: 128.30, totalOrders: 45123 },`}</div>
                  <div className="ml-2 text-blue-300">{`{ _id: "Seattle", avgOrderValue: 119.75, totalOrders: 12456 },`}</div>
                  <div className="ml-2 text-blue-300">{`{ _id: "Boston", avgOrderValue: 115.20, totalOrders: 18234 },`}</div>
                  <div className="ml-2 text-blue-300">{`{ _id: "Austin", avgOrderValue: 108.90, totalOrders: 9821 }`}</div>
                  <div className="text-white">]</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-teal-600'
    },

    // Slide 17: Change Streams
    {
      id: 'change-streams',
      title: 'Change Streams',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Real-Time Data Streams</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📡</div>
            <h3 className="text-3xl font-bold mb-12 text-blue-300">Listen for Database Changes</h3>
            
            <div className="bg-blue-500/20 rounded-xl p-8 border-2 border-blue-400 mb-8">
              <h4 className="text-2xl font-bold text-blue-300 mb-6">What are Change Streams?</h4>
              <div className="text-lg text-blue-100 mb-6">
                MongoDB can notify your application when documents are inserted, updated, or deleted - in real-time!
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-left">
                <div className="font-mono text-sm space-y-1">
                  <div className="text-gray-400">{`// Watch for changes to orders collection`}</div>
                  <div className="text-yellow-300">const changeStream = db.orders.watch();</div>
                  <div className="text-white mt-2">changeStream.on('change', (change) =&gt; {`{`}</div>
                  <div className="ml-2 text-green-300">{`console.log('New order:', change);`}</div>
                  <div className="ml-2 text-green-300">{`// Send websocket notification to dashboard`}</div>
                  <div className="ml-2 text-green-300">{`// Update real-time analytics`}</div>
                  <div className="ml-2 text-green-300">{`// Trigger notification`}</div>
                  <div className="text-white">{`});`}</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-500/20 rounded-xl p-8 border border-green-400">
                <div className="text-2xl font-bold text-green-300 mb-6">✅ Use Cases</div>
                <div className="space-y-4 text-left">
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="font-bold mb-2">📊 Real-Time Dashboards</div>
                    <div className="text-green-200 text-sm">Update charts/graphs instantly when data changes</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="font-bold mb-2">🔔 Notifications</div>
                    <div className="text-green-200 text-sm">Alert users when new messages/orders arrive</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="font-bold mb-2">🔄 Cache Invalidation</div>
                    <div className="text-green-200 text-sm">Clear Redis cache when DB data updates</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="font-bold mb-2">📱 WebSocket Updates</div>
                    <div className="text-green-200 text-sm">Push live updates to connected clients</div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-8 border border-purple-400">
                <div className="text-2xl font-bold text-purple-300 mb-6">🎯 Filtering Changes</div>
                <div className="bg-gray-800 rounded-lg p-6 text-left mb-4">
                  <div className="font-mono text-sm space-y-1">
                    <div className="text-gray-400">{`// Only watch for completed orders`}</div>
                    <div className="text-white">const pipeline = [</div>
                    <div className="ml-2 text-yellow-300">{`{`}</div>
                    <div className="ml-4 text-white">$match: {`{`}</div>
                    <div className="ml-6 text-white">'fullDocument.status':</div>
                    <div className="ml-8 text-green-300">'completed'</div>
                    <div className="ml-4 text-white">{`}`}</div>
                    <div className="ml-2 text-yellow-300">{`}`}</div>
                    <div className="text-white">];</div>
                    <div className="text-white mt-2">const stream = db.orders</div>
                    <div className="ml-2 text-white">.watch(pipeline);</div>
                  </div>
                </div>
                <div className="text-purple-200 text-sm">
                  Filter changes with aggregation pipeline
                </div>
              </div>
            </div>

            <div className="bg-orange-500/20 rounded-xl p-8 border border-orange-400">
              <div className="text-2xl font-bold text-orange-300 mb-4">⚠️ Important Notes</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-left">
                  <div className="font-bold mb-2">Requires Replica Set</div>
                  <div className="text-orange-200 text-sm">Won't work on standalone MongoDB</div>
                </div>
                <div className="text-left">
                  <div className="font-bold mb-2">Resource Intensive</div>
                  <div className="text-orange-200 text-sm">Keep stream counts manageable</div>
                </div>
                <div className="text-left">
                  <div className="font-bold mb-2">Not a Message Queue</div>
                  <div className="text-orange-200 text-sm">Use for real-time updates, not task processing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-purple-600'
    },

    // Slide 18: Transactions
    {
      id: 'transactions',
      title: 'Transactions & ACID',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">All or Nothing</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">💳</div>
            <h3 className="text-3xl font-bold mb-12 text-blue-300">Multi-Document Transactions</h3>
            
            <div className="bg-red-500/20 rounded-xl p-8 border-2 border-red-400 mb-8">
              <h4 className="text-3xl font-bold text-red-300 mb-6">The Problem Without Transactions</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-red-600/30 rounded-lg p-6">
                  <div className="text-5xl mb-3">1️⃣</div>
                  <div className="font-bold text-lg mb-2">Deduct $100 from Alice</div>
                  <div className="text-red-200 text-sm">✅ Success</div>
                </div>
                <div className="bg-red-600/30 rounded-lg p-6">
                  <div className="text-5xl mb-3">2️⃣</div>
                  <div className="font-bold text-lg mb-2">Add $100 to Bob</div>
                  <div className="text-red-200 text-sm">💥 Server crashes!</div>
                </div>
                <div className="bg-red-600/30 rounded-lg p-6">
                  <div className="text-5xl mb-3">😱</div>
                  <div className="font-bold text-lg mb-2">Result</div>
                  <div className="text-red-200 text-sm">$100 disappeared!</div>
                </div>
              </div>
            </div>

            <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400 mb-8">
              <h4 className="text-3xl font-bold text-green-300 mb-6">With Transactions</h4>
              <div className="bg-gray-800 rounded-lg p-6 mb-6">
                <div className="font-mono text-sm text-left space-y-1">
                  <div className="text-yellow-300">const session = await mongoose.startSession();</div>
                  <div className="text-yellow-300">session.startTransaction();</div>
                  <div className="text-white">try {`{`}</div>
                  <div className="ml-2 text-white">{`await Account.updateOne({ name: "Alice" }, { $inc: { balance: -100 } }, { session });`}</div>
                  <div className="ml-2 text-white">{`await Account.updateOne({ name: "Bob" }, { $inc: { balance: 100 } }, { session });`}</div>
                  <div className="ml-2 text-green-300">await session.commitTransaction(); // Both succeed</div>
                  <div className="text-white">{`} catch (err) {`}</div>
                  <div className="ml-2 text-red-300">await session.abortTransaction(); // Both rollback</div>
                  <div className="text-white">{`}`}</div>
                </div>
              </div>
              <div className="text-green-200">
                Both updates succeed together, or both fail together. No partial state!
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-500/20 rounded-lg p-6 border border-blue-400">
                <div className="text-2xl font-bold text-blue-300 mb-4">✅ When to Use</div>
                <div className="space-y-2 text-left text-sm">
                  <div>💳 Financial transfers</div>
                  <div>🛒 Order + inventory updates</div>
                  <div>👤 User + profile creation</div>
                  <div>📊 Multi-doc consistency required</div>
                </div>
              </div>
              <div className="bg-orange-500/20 rounded-lg p-6 border border-orange-400">
                <div className="text-2xl font-bold text-orange-300 mb-4">⚠️ Trade-offs</div>
                <div className="space-y-2 text-left text-sm">
                  <div>🐌 Slower than regular writes</div>
                  <div>🔒 Locks documents temporarily</div>
                  <div>📈 Requires replica set</div>
                  <div>💰 Use sparingly, not everywhere</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-cyan-600'
    },

    // Slide 19: Replication & Sharding
    {
      id: 'replication-sharding',
      title: 'Scaling MongoDB',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Scaling Strategies</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">📈</div>
            <h3 className="text-3xl font-bold mb-12 text-green-300">Replication & Sharding</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-500/20 rounded-xl p-8 border-2 border-blue-400">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🔄</div>
                  <h4 className="text-3xl font-bold text-blue-300">Replication</h4>
                  <div className="text-blue-200">Vertical Scaling - Reliability</div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="bg-blue-600/30 rounded-lg p-4">
                    <div className="font-bold mb-2">👑 Primary</div>
                    <div className="text-blue-200 text-sm">Handles all writes</div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="bg-green-600/30 rounded-lg p-4 flex-1">
                      <div className="font-bold mb-2">📖 Secondary 1</div>
                      <div className="text-green-200 text-sm">Read replica</div>
                    </div>
                    <div className="bg-green-600/30 rounded-lg p-4 flex-1">
                      <div className="font-bold mb-2">📖 Secondary 2</div>
                      <div className="text-green-200 text-sm">Read replica</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-left text-sm">
                  <div>✅ High availability (failover)</div>
                  <div>✅ Read scalability</div>
                  <div>✅ Zero downtime maintenance</div>
                  <div>✅ Disaster recovery</div>
                </div>
              </div>

              <div className="bg-purple-500/20 rounded-xl p-8 border-2 border-purple-400">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🗂️</div>
                  <h4 className="text-3xl font-bold text-purple-300">Sharding</h4>
                  <div className="text-purple-200">Horizontal Scaling - Capacity</div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="bg-purple-600/30 rounded-lg p-4">
                    <div className="font-bold mb-2">🔀 Shard Key: country</div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-green-600/30 rounded-lg p-3 text-center">
                      <div className="font-bold text-sm">Shard 1</div>
                      <div className="text-xs text-green-200">US data</div>
                    </div>
                    <div className="bg-blue-600/30 rounded-lg p-3 text-center">
                      <div className="font-bold text-sm">Shard 2</div>
                      <div className="text-xs text-blue-200">EU data</div>
                    </div>
                    <div className="bg-orange-600/30 rounded-lg p-3 text-center">
                      <div className="font-bold text-sm">Shard 3</div>
                      <div className="text-xs text-orange-200">Asia data</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 text-left text-sm">
                  <div>✅ Store TBs of data</div>
                  <div>✅ Distribute load</div>
                  <div>✅ Geographic distribution</div>
                  <div>⚠️ Complex setup</div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-8 border-2 border-yellow-400">
              <div className="text-2xl font-bold text-yellow-300 mb-4">🎯 Scaling Decision</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="font-bold text-yellow-300 mb-2">Need Reliability?</div>
                  <div className="text-yellow-100">→ Use Replication (Replica Sets)</div>
                </div>
                <div>
                  <div className="font-bold text-yellow-300 mb-2">Need More Capacity?</div>
                  <div className="text-yellow-100">→ Use Sharding (Distribute Data)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-emerald-600'
    },

    // Slide 20: Performance & Security
    {
      id: 'performance-security',
      title: 'Performance & Security',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          <h2 className="text-5xl font-extrabold mb-8">Production Best Practices</h2>
          
          <div className="max-w-6xl mx-auto">
            <div className="text-8xl mb-8 animate-float">🔒</div>
            <h3 className="text-3xl font-bold mb-12 text-blue-300">Keep It Fast & Secure</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-green-500/20 rounded-xl p-8 border-2 border-green-400">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">⚡</div>
                  <h4 className="text-2xl font-bold text-green-300">Performance</h4>
                </div>
                <div className="space-y-4 text-left">
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="font-bold mb-2">🧠 Working Set in RAM</div>
                    <div className="text-green-200 text-sm">Indexes + frequently accessed data must fit in memory</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="font-bold mb-2">📊 Monitor Slow Queries</div>
                    <div className="text-green-200 text-sm">Use .explain() and database profiler</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="font-bold mb-2">🎯 Limit Document Size</div>
                    <div className="text-green-200 text-sm">Keep docs under 1MB for best performance</div>
                  </div>
                  <div className="bg-green-600/30 rounded-lg p-4">
                    <div className="font-bold mb-2">🔄 Connection Pooling</div>
                    <div className="text-green-200 text-sm">Reuse connections, don't create new ones</div>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/20 rounded-xl p-8 border-2 border-red-400">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🔐</div>
                  <h4 className="text-2xl font-bold text-red-300">Security</h4>
                </div>
                <div className="space-y-4 text-left">
                  <div className="bg-red-600/30 rounded-lg p-4">
                    <div className="font-bold mb-2">👤 Authentication</div>
                    <div className="text-red-200 text-sm">Always require username/password</div>
                  </div>
                  <div className="bg-red-600/30 rounded-lg p-4">
                    <div className="font-bold mb-2">🎭 Role-Based Access</div>
                    <div className="text-red-200 text-sm">readOnly, readWrite, dbAdmin roles</div>
                  </div>
                  <div className="bg-red-600/30 rounded-lg p-4">
                    <div className="font-bold mb-2">🔒 Encryption at Rest</div>
                    <div className="text-red-200 text-sm">Encrypt database files on disk</div>
                  </div>
                  <div className="bg-red-600/30 rounded-lg p-4">
                    <div className="font-bold mb-2">🌐 IP Whitelisting</div>
                    <div className="text-red-200 text-sm">Only allow trusted IPs to connect</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-500/20 rounded-lg p-6 border border-blue-400">
                <div className="text-4xl mb-3">📈</div>
                <div className="font-bold text-blue-300 mb-2">Monitor Metrics</div>
                <div className="text-blue-200 text-sm">CPU, RAM, disk I/O, query time</div>
              </div>
              <div className="bg-purple-500/20 rounded-lg p-6 border border-purple-400">
                <div className="text-4xl mb-3">💾</div>
                <div className="font-bold text-purple-300 mb-2">Backup Regularly</div>
                <div className="text-purple-200 text-sm">Automated daily snapshots</div>
              </div>
              <div className="bg-orange-500/20 rounded-lg p-6 border border-orange-400">
                <div className="text-4xl mb-3">🔍</div>
                <div className="font-bold text-orange-300 mb-2">Audit Logs</div>
                <div className="text-orange-200 text-sm">Track who accessed what</div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-600 to-pink-600'
    },

    // Slide 21: Thank You
    {
      id: 'thank-you',
      title: 'Thank You!',
      content: (
        <div className="text-white animate-fade-in text-center">
          <style>{customStyles}</style>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-9xl mb-12 animate-bounce-in">🎉</div>
            
            <h2 className="text-6xl font-extrabold mb-12 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              See You Next Week!
            </h2>
            
            <div className="bg-yellow-500/20 rounded-xl p-8 border-2 border-yellow-400">
              <div className="text-3xl font-bold text-yellow-300 mb-4">📧 Extra Credit Reminder</div>
              <div className="text-xl text-yellow-100">
                Have one person from your group send me an email for extra credit
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 via-blue-600 to-purple-600'
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

export default Class11Slides;

