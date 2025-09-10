import React, { useState, useEffect } from 'react';

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
`;

const Class5Slides = () => {
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
              Class 5: Scaling Database Systems
            </div>
          </div>
          
          <div className="mt-16">
            <div className="text-2xl font-medium text-white">
              Understanding Core Scaling Concepts
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-purple-700'
    },

    {
      id: 'discuss-hometown',
      title: 'Discuss!',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">Discuss!</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <div className="text-left space-y-6 text-xl leading-relaxed">
                <div className="text-white font-semibold">
                  Where did you grow up, and what was it like?
                </div>
                
                <div className="text-white font-semibold">
                  What's the first big memory you can recall?
                </div>
                
                <div className="text-white font-semibold">
                  What's the biggest difference between your hometown and where you live now?
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-pink-600'
    },

    {
      id: 'discuss-hobbies',
      title: 'Discuss!',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">Discuss!</h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <div className="text-left space-y-6 text-xl leading-relaxed">
                <div className="text-white font-semibold">
                  What's a hobby you've picked up recently?
                </div>
                
                <div className="text-white font-semibold">
                  What's a hobby you'd love to try but haven't?
                </div>
                
                <div className="text-white font-semibold">
                  What sport or activity would you love to be amazing at?
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-pink-600 to-red-600'
    },

    {
      id: 'sql-databases',
      title: 'SQL Databases',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">SQL Databases</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-8xl mb-8 animate-float">🗃️</div>
            
            <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border border-blue-400/30">
              <h3 className="text-3xl font-bold text-blue-300 mb-6">Relational Database Structure</h3>
              <p className="text-xl text-white/90 mb-8">
                Data organized in tables with predefined relationships
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-900/50 rounded-lg p-6">
                  <h4 className="text-2xl font-bold text-white mb-4">Core Features</h4>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📊</span>
                      <div>
                        <div className="font-bold">Tables & Rows</div>
                        <div className="text-sm text-white/80">Data stored in structured tables with columns and rows</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🔗</span>
                      <div>
                        <div className="font-bold">Relationships</div>
                        <div className="text-sm text-white/80">Foreign keys link tables together</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🏗️</span>
                      <div>
                        <div className="font-bold">Fixed Schema</div>
                        <div className="text-sm text-white/80">Structure defined before data is added</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-purple-900/50 rounded-lg p-6">
                  <h4 className="text-2xl font-bold text-white mb-4">Query Language</h4>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">💬</span>
                      <div>
                        <div className="font-bold">SQL (Structured Query Language)</div>
                        <div className="text-sm text-white/80">Standard language for database operations</div>
                      </div>
                    </div>
                    <div className="bg-gray-800 rounded p-3 mt-4">
                      <div className="font-mono text-sm text-green-300">
                        SELECT name, email<br/>
                        FROM users<br/>
                        WHERE age &gt; 21<br/>
                        ORDER BY name;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-500/20 rounded-lg p-6">
                <div className="text-4xl mb-4">✅</div>
                <h4 className="text-xl font-bold text-green-300 mb-3">Strengths</h4>
                <div className="text-sm text-white/80 space-y-2">
                  <div>• Strong data consistency</div>
                  <div>• Complex queries and joins</div>
                  <div>• Mature ecosystem</div>
                  <div>• ACID compliance</div>
                </div>
              </div>
              
              <div className="bg-orange-500/20 rounded-lg p-6">
                <div className="text-4xl mb-4">⚠️</div>
                <h4 className="text-xl font-bold text-orange-300 mb-3">Challenges</h4>
                <div className="text-sm text-white/80 space-y-2">
                  <div>• Rigid schema changes</div>
                  <div>• Vertical scaling limits</div>
                  <div>• Complex horizontal scaling</div>
                  <div>• Performance at massive scale</div>
                </div>
              </div>
              
              <div className="bg-blue-500/20 rounded-lg p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-xl font-bold text-blue-300 mb-3">Best For</h4>
                <div className="text-sm text-white/80 space-y-2">
                  <div>• Financial systems</div>
                  <div>• E-commerce platforms</div>
                  <div>• Business applications</div>
                  <div>• Complex reporting</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-700 to-indigo-700'
    },

    {
      id: 'acid-properties-intro',
      title: 'ACID Properties: Introduction',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">ACID Properties</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-8xl mb-8 animate-float">🛡️</div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold text-green-300 mb-6">Guarantees for Data Reliability</h3>
              <p className="text-xl text-white/90 mb-8">
                Four fundamental properties that ensure database transactions are processed reliably
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-500/20 backdrop-blur rounded-xl p-8 border border-red-400/30">
                <div className="text-8xl mb-6">A</div>
                <h4 className="text-3xl font-bold text-red-300 mb-6">Atomicity</h4>
                <div className="text-left space-y-4">
                  <p className="text-xl text-white/90">
                    <strong>All or Nothing:</strong> Either the entire transaction succeeds, or none of it does
                  </p>
                  <div className="bg-red-900/50 rounded-lg p-6">
                    <div className="font-bold text-white mb-3 text-lg">Example:</div>
                    <div className="text-white/80">
                      Bank transfer: Debit $100 from Account A AND Credit $100 to Account B<br/><br/>
                      If either operation fails, both are rolled back
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border border-blue-400/30">
                <div className="text-8xl mb-6">C</div>
                <h4 className="text-3xl font-bold text-blue-300 mb-6">Consistency</h4>
                <div className="text-left space-y-4">
                  <p className="text-xl text-white/90">
                    <strong>Data Integrity:</strong> Database remains in a valid state before and after transactions
                  </p>
                  <div className="bg-blue-900/50 rounded-lg p-6">
                    <div className="font-bold text-white mb-3 text-lg">Example:</div>
                    <div className="text-white/80">
                      All foreign key constraints, unique constraints, and business rules are maintained<br/><br/>
                      No orphaned records or invalid data states
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-blue-600'
    },

    {
      id: 'acid-properties-continued',
      title: 'ACID Properties: Isolation & Durability',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">ACID Properties (Continued)</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-8xl mb-8 animate-float">🔒</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-8 border border-purple-400/30">
                <div className="text-8xl mb-6">I</div>
                <h4 className="text-3xl font-bold text-purple-300 mb-6">Isolation</h4>
                <div className="text-left space-y-4">
                  <p className="text-xl text-white/90">
                    <strong>No Interference:</strong> Concurrent transactions don't affect each other
                  </p>
                  <div className="bg-purple-900/50 rounded-lg p-6">
                    <div className="font-bold text-white mb-3 text-lg">Example:</div>
                    <div className="text-white/80">
                      Two users updating the same record simultaneously<br/><br/>
                      Database ensures they don't corrupt each other's changes
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border border-green-400/30">
                <div className="text-8xl mb-6">D</div>
                <h4 className="text-3xl font-bold text-green-300 mb-6">Durability</h4>
                <div className="text-left space-y-4">
                  <p className="text-xl text-white/90">
                    <strong>Permanent Changes:</strong> Committed transactions survive system failures
                  </p>
                  <div className="bg-green-900/50 rounded-lg p-6">
                    <div className="font-bold text-white mb-3 text-lg">Example:</div>
                    <div className="text-white/80">
                      After confirming your online purchase, even if the server crashes<br/><br/>
                      Your order is safely stored and won't be lost
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold text-white mb-6">💡 Why ACID Matters</h4>
              <p className="text-xl">
                ACID properties make SQL databases <strong>reliable and predictable</strong> - perfect for mission-critical applications
              </p>
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div className="bg-blue-900/50 rounded-lg p-4">
                  <div className="font-bold text-blue-300">Perfect For:</div>
                  <div className="text-sm text-white/80 mt-2">Banking, E-commerce, Financial systems</div>
                </div>
                <div className="bg-green-900/50 rounded-lg p-4">
                  <div className="font-bold text-green-300">Key Benefit:</div>
                  <div className="text-sm text-white/80 mt-2">Zero tolerance for data corruption</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-green-600'
    },

    {
      id: 'nosql-databases',
      title: 'NoSQL Databases',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">NoSQL Databases</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-8xl mb-8 animate-float">🌐</div>
            
            <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border border-green-400/30">
              <h3 className="text-3xl font-bold text-green-300 mb-6">Flexible Data Models</h3>
              <p className="text-xl text-white/90 mb-8">
                Designed for scalability and flexibility, not rigid relationships
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-green-900/50 rounded-lg p-6">
                  <h4 className="text-2xl font-bold text-white mb-4">Core Features</h4>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🔄</span>
                      <div>
                        <div className="font-bold">Dynamic Schema</div>
                        <div className="text-sm text-white/80">Structure can evolve as needs change</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📦</span>
                      <div>
                        <div className="font-bold">Multiple Data Models</div>
                        <div className="text-sm text-white/80">Document, key-value, column, graph</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">↔️</span>
                      <div>
                        <div className="font-bold">Horizontal Scaling</div>
                        <div className="text-sm text-white/80">Built to distribute across many servers</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-900/50 rounded-lg p-6">
                  <h4 className="text-2xl font-bold text-white mb-4">Query Methods</h4>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🔌</span>
                      <div>
                        <div className="font-bold">APIs and SDKs</div>
                        <div className="text-sm text-white/80">Language-specific interfaces instead of SQL</div>
                      </div>
                    </div>
                    <div className="bg-gray-800 rounded p-3 mt-4">
                      <div className="font-mono text-sm text-green-300">
                        db.users.find(&#123;<br/>
                        &nbsp;&nbsp;age: &#123;$gt: 21&#125;,<br/>
                        &nbsp;&nbsp;status: "active"<br/>
                        &#125;).sort(&#123;name: 1&#125;)
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-blue-500/20 rounded-lg p-6">
                <div className="text-4xl mb-4">📄</div>
                <h4 className="text-lg font-bold text-blue-300 mb-3">Document</h4>
                <div className="text-sm text-white/80">
                  JSON-like documents<br/>
                  (MongoDB, CouchDB)
                </div>
              </div>
              
              <div className="bg-purple-500/20 rounded-lg p-6">
                <div className="text-4xl mb-4">🔑</div>
                <h4 className="text-lg font-bold text-purple-300 mb-3">Key-Value</h4>
                <div className="text-sm text-white/80">
                  Simple key-value pairs<br/>
                  (Redis, DynamoDB)
                </div>
              </div>
              
              <div className="bg-yellow-500/20 rounded-lg p-6">
                <div className="text-4xl mb-4">📊</div>
                <h4 className="text-lg font-bold text-yellow-300 mb-3">Column</h4>
                <div className="text-sm text-white/80">
                  Wide column families<br/>
                  (Cassandra, HBase)
                </div>
              </div>
              
              <div className="bg-red-500/20 rounded-lg p-6">
                <div className="text-4xl mb-4">🕸️</div>
                <h4 className="text-lg font-bold text-red-300 mb-3">Graph</h4>
                <div className="text-sm text-white/80">
                  Nodes and relationships<br/>
                  (Neo4j, Amazon Neptune)
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-500/20 rounded-lg p-6">
                <div className="text-4xl mb-4">✅</div>
                <h4 className="text-xl font-bold text-green-300 mb-3">Strengths</h4>
                <div className="text-sm text-white/80 space-y-2">
                  <div>• Massive horizontal scaling</div>
                  <div>• Flexible schema evolution</div>
                  <div>• High availability</div>
                  <div>• Fast development cycles</div>
                </div>
              </div>
              
              <div className="bg-orange-500/20 rounded-lg p-6">
                <div className="text-4xl mb-4">⚠️</div>
                <h4 className="text-xl font-bold text-orange-300 mb-3">Challenges</h4>
                <div className="text-sm text-white/80 space-y-2">
                  <div>• Eventual consistency</div>
                  <div>• Limited complex queries</div>
                  <div>• Less mature ecosystem</div>
                  <div>• Data modeling complexity</div>
                </div>
              </div>
              
              <div className="bg-purple-500/20 rounded-lg p-6">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-xl font-bold text-purple-300 mb-3">Best For</h4>
                <div className="text-sm text-white/80 space-y-2">
                  <div>• Social media platforms</div>
                  <div>• Real-time applications</div>
                  <div>• Content management</div>
                  <div>• IoT and big data</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-700 to-emerald-700'
    },

    {
      id: 'base-properties-intro',
      title: 'BASE Properties: Introduction',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">BASE Properties</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-8xl mb-8 animate-float">⚖️</div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold text-orange-300 mb-6">Alternative to ACID</h3>
              <p className="text-xl text-white/90 mb-8">
                NoSQL databases prioritize availability and scalability over strict consistency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border border-blue-400/30">
                <div className="text-8xl mb-6">B</div>
                <h4 className="text-3xl font-bold text-blue-300 mb-6">Basically Available</h4>
                <div className="text-left space-y-4">
                  <p className="text-xl text-white/90">
                    <strong>System Stays Up:</strong> The database remains operational even during failures
                  </p>
                  <div className="bg-blue-900/50 rounded-lg p-6">
                    <div className="font-bold text-white mb-3 text-lg">Example:</div>
                    <div className="text-white/80">
                      If some servers go down, the remaining servers continue serving requests<br/><br/>
                      Users might see degraded performance, but the system doesn't crash
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-8 border border-purple-400/30">
                <div className="text-8xl mb-6">S</div>
                <h4 className="text-3xl font-bold text-purple-300 mb-6">Soft State</h4>
                <div className="text-left space-y-4">
                  <p className="text-xl text-white/90">
                    <strong>Data Can Change:</strong> The system state may change over time without input
                  </p>
                  <div className="bg-purple-900/50 rounded-lg p-6">
                    <div className="font-bold text-white mb-3 text-lg">Example:</div>
                    <div className="text-white/80">
                      Cache entries expire automatically<br/>
                      Background processes clean up old data<br/>
                      Replicas sync and update each other
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      ),
      bgGradient: 'from-orange-600 to-red-600'
    },

    {
      id: 'base-properties-comparison',
      title: 'BASE vs ACID: The Trade-off',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">BASE vs ACID Trade-offs</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-8xl mb-8 animate-float">🔄</div>

            <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border border-green-400/30">
              <div className="text-8xl mb-6">E</div>
              <h4 className="text-3xl font-bold text-green-300 mb-6">Eventual Consistency</h4>
              <div className="text-left space-y-4">
                <p className="text-xl text-white/90">
                  <strong>Eventually Synchronized:</strong> All nodes will agree on data, given enough time
                </p>
                <div className="bg-green-900/50 rounded-lg p-6">
                  <div className="font-bold text-white mb-3 text-lg">Example:</div>
                  <div className="text-white/80">
                    You post on social media in New York<br/>
                    Users in Tokyo might see it a few seconds later<br/>
                    Eventually, all users worldwide see the same content
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold text-white mb-6">The Fundamental Trade-off</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-red-900/50 rounded-lg p-6">
                  <div className="text-4xl mb-4">🛡️</div>
                  <div className="font-bold text-red-300 mb-3 text-xl">ACID: Strong Consistency</div>
                  <div className="text-white/80 space-y-2">
                    <div>• Immediate consistency across all nodes</div>
                    <div>• May sacrifice availability during failures</div>
                    <div>• Perfect for financial transactions</div>
                    <div>• Zero tolerance for data inconsistency</div>
                  </div>
                </div>
                <div className="bg-green-900/50 rounded-lg p-6">
                  <div className="text-4xl mb-4">⚡</div>
                  <div className="font-bold text-green-300 mb-3 text-xl">BASE: High Availability</div>
                  <div className="text-white/80 space-y-2">
                    <div>• System stays online during problems</div>
                    <div>• Data consistency comes later</div>
                    <div>• Perfect for social media, content delivery</div>
                    <div>• Accepts temporary inconsistencies</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/30">
              <h4 className="text-2xl font-bold text-blue-300 mb-4">💡 Why BASE Matters for Scaling</h4>
              <p className="text-xl">
                BASE properties allow NoSQL databases to <strong>scale massively</strong> by accepting temporary inconsistencies
              </p>
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div className="bg-blue-900/50 rounded-lg p-4">
                  <div className="font-bold text-blue-300">Scaling Benefit:</div>
                  <div className="text-sm text-white/80 mt-2">Can add servers without complex coordination</div>
                </div>
                <div className="bg-purple-900/50 rounded-lg p-4">
                  <div className="font-bold text-purple-300">Performance Benefit:</div>
                  <div className="text-sm text-white/80 mt-2">No waiting for all nodes to agree</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-orange-600'
    },

    {
      id: 'scaling-need-intro',
      title: 'Why Scaling Becomes Necessary',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">Why Scaling Becomes Necessary</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-8xl mb-8 animate-float">📈</div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold text-yellow-300 mb-6">The Growth Problem</h3>
              <p className="text-2xl text-white/90 mb-8">
                As your application grows, single-server databases hit natural limits
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-red-500/20 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-red-300 mb-4">Resource Exhaustion</h4>
                    <div className="space-y-3 text-left text-sm">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">🧠</span>
                        <span><strong>CPU:</strong> Too many calculations per second</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">💾</span>
                        <span><strong>Memory:</strong> Not enough RAM to hold working data</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">💽</span>
                        <span><strong>Storage:</strong> Running out of disk space</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">🌐</span>
                        <span><strong>Network:</strong> Bandwidth limits reached</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-500/20 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-orange-300 mb-4">Performance Degradation</h4>
                    <div className="space-y-2 text-left text-sm">
                      <div>• Query response times increase</div>
                      <div>• Database locks become bottlenecks</div>
                      <div>• Backup and maintenance take too long</div>
                      <div>• System becomes unreliable under load</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-blue-500/20 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-blue-300 mb-4">The Scaling Curve</h4>
                    <div className="bg-blue-900/50 rounded-lg p-4">
                      <div className="space-y-2 text-left text-sm">
                        <div><strong>1-100 users:</strong> Single server works fine</div>
                        <div><strong>100-1K users:</strong> Need database optimization</div>
                        <div><strong>1K-10K users:</strong> Need caching and indexing</div>
                        <div><strong>10K+ users:</strong> Need distributed systems</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-500/20 rounded-lg p-6">
                    <h4 className="text-xl font-bold text-purple-300 mb-4">Reliability Concerns</h4>
                    <div className="space-y-2 text-left text-sm">
                      <div>• Single point of failure</div>
                      <div>• Hardware failures affect all users</div>
                      <div>• Maintenance requires downtime</div>
                      <div>• No disaster recovery options</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-600 to-orange-600'
    },

    {
      id: 'vertical-scaling-concept',
      title: 'Vertical Scaling: The Concept',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">Vertical Scaling</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-8xl mb-8 animate-float">⬆️</div>
            <h3 className="text-3xl font-bold mb-8 text-blue-300">Scale Up: Make Your Server More Powerful</h3>
            
            <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400/30 mb-8">
              <h4 className="text-2xl font-bold text-blue-300 mb-6">The Basic Idea</h4>
              <p className="text-xl text-white/90 mb-6">
                When your server is overwhelmed, give it more resources
              </p>
              
              <div className="bg-blue-900/50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h5 className="text-lg font-bold text-white mb-3">Small Server</h5>
                    <div className="space-y-2 text-sm">
                      <div>💾 4GB RAM</div>
                      <div>🧠 2 CPU cores</div>
                      <div>💽 100GB storage</div>
                      <div>⚡ Handles light load</div>
                    </div>
                  </div>
                  
                  <div className="text-4xl">↗️</div>
                  
                  <div className="bg-gray-600 rounded-lg p-4">
                    <h5 className="text-lg font-bold text-white mb-3">Powerful Server</h5>
                    <div className="space-y-2 text-sm">
                      <div>💾 64GB RAM</div>
                      <div>🧠 16 CPU cores</div>
                      <div>💽 2TB storage</div>
                      <div>⚡ Handles heavy load</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold text-white mb-6">What Changes?</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-green-900/50 rounded-lg p-4">
                    <h5 className="text-lg font-bold text-green-300 mb-2">More Memory</h5>
                    <div className="text-sm text-white/80">
                      • Keep more data in fast RAM<br/>
                      • Fewer slow disk reads<br/>
                      • Better query performance
                    </div>
                  </div>
                  <div className="bg-blue-900/50 rounded-lg p-4">
                    <h5 className="text-lg font-bold text-blue-300 mb-2">Faster CPU</h5>
                    <div className="text-sm text-white/80">
                      • Process queries faster<br/>
                      • Handle more concurrent users<br/>
                      • Complex calculations complete quicker
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-purple-900/50 rounded-lg p-4">
                    <h5 className="text-lg font-bold text-purple-300 mb-2">More Storage</h5>
                    <div className="text-sm text-white/80">
                      • Store larger datasets<br/>
                      • Keep more historical data<br/>
                      • Room for growth
                    </div>
                  </div>
                  <div className="bg-orange-900/50 rounded-lg p-4">
                    <h5 className="text-lg font-bold text-orange-300 mb-2">Better I/O</h5>
                    <div className="text-sm text-white/80">
                      • Faster disk reads/writes<br/>
                      • Higher network bandwidth<br/>
                      • Reduced bottlenecks
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-700 to-indigo-700'
    },

    {
      id: 'vertical-scaling-details',
      title: 'Vertical Scaling: Pros and Cons',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">Vertical Scaling: Analysis</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-8xl mb-8">⚖️</div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-500/20 rounded-lg p-8">
                <h3 className="text-3xl font-bold text-green-300 mb-6">✅ Advantages</h3>
                <div className="text-left space-y-4">
                  <div className="bg-green-900/50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">🎯</div>
                      <div>
                        <div className="font-bold">Simple Implementation</div>
                        <div className="text-sm text-white/80">No code changes required - just upgrade hardware</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-900/50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">🚀</div>
                      <div>
                        <div className="font-bold">Immediate Performance Boost</div>
                        <div className="text-sm text-white/80">More resources = better performance right away</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-900/50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">🔧</div>
                      <div>
                        <div className="font-bold">Easy Management</div>
                        <div className="text-sm text-white/80">Still just one server to monitor and maintain</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-900/50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">🔄</div>
                      <div>
                        <div className="font-bold">No Architecture Changes</div>
                        <div className="text-sm text-white/80">Application logic stays exactly the same</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/20 rounded-lg p-8">
                <h3 className="text-3xl font-bold text-red-300 mb-6">❌ Limitations</h3>
                <div className="text-left space-y-4">
                  <div className="bg-red-900/50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">💰</div>
                      <div>
                        <div className="font-bold">Exponentially Expensive</div>
                        <div className="text-sm text-white/80">High-end servers cost much more per unit of performance</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-900/50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">🚨</div>
                      <div>
                        <div className="font-bold">Single Point of Failure</div>
                        <div className="text-sm text-white/80">If this server fails, everything stops working</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-900/50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">📏</div>
                      <div>
                        <div className="font-bold">Physical Hardware Limits</div>
                        <div className="text-sm text-white/80">Eventually you hit the ceiling of what's possible</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-900/50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">⏰</div>
                      <div>
                        <div className="font-bold">Downtime for Upgrades</div>
                        <div className="text-sm text-white/80">Need to shut down to install new hardware</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <h4 className="text-2xl font-bold text-yellow-300 mb-4">💡 The Reality</h4>
              <p className="text-lg">
                Vertical scaling is often the <strong>first step</strong> in scaling, but not the <strong>final solution</strong>
              </p>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-red-600'
    },

    {
      id: 'horizontal-scaling-concept',
      title: 'Horizontal Scaling: The Concept',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">Horizontal Scaling</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-8xl mb-8 animate-float">➡️</div>
            <h3 className="text-3xl font-bold mb-8 text-green-300">Scale Out: Add More Machines</h3>
            
            <div className="bg-green-500/20 rounded-xl p-8 border border-green-400/30 mb-8">
              <h4 className="text-2xl font-bold text-green-300 mb-6">The Basic Idea</h4>
              <p className="text-xl text-white/90 mb-6">
                Instead of making one server more powerful, use multiple servers working together
              </p>
              
              <div className="bg-green-900/50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h5 className="text-lg font-bold text-white mb-3">One Overloaded Server</h5>
                    <div className="space-y-2 text-sm">
                      <div>🖥️ Single machine</div>
                      <div>📊 100% CPU usage</div>
                      <div>💾 RAM maxed out</div>
                      <div>⚠️ Performance suffers</div>
                    </div>
                  </div>
                  
                  <div className="text-4xl">→</div>
                  
                  <div className="bg-gray-600 rounded-lg p-4">
                    <h5 className="text-lg font-bold text-white mb-3">Multiple Servers</h5>
                    <div className="space-y-2 text-sm">
                      <div>🖥️ 3 machines</div>
                      <div>📊 33% CPU each</div>
                      <div>💾 Plenty of RAM</div>
                      <div>✅ Smooth performance</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold text-white mb-6">How Work Gets Distributed</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-4">📤</div>
                  <h5 className="text-lg font-bold text-blue-300 mb-3">Request Comes In</h5>
                  <p className="text-sm text-white/80">
                    User wants to load a webpage or query the database
                  </p>
                </div>
                
                <div className="bg-purple-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-4">⚖️</div>
                  <h5 className="text-lg font-bold text-purple-300 mb-3">Load Balancer Decides</h5>
                  <p className="text-sm text-white/80">
                    Chooses which server should handle this request
                  </p>
                </div>
                
                <div className="bg-green-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-4">⚡</div>
                  <h5 className="text-lg font-bold text-green-300 mb-3">Server Processes</h5>
                  <p className="text-sm text-white/80">
                    One of many servers handles the work and sends response
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-700 to-emerald-700'
    },

    {
      id: 'horizontal-scaling-details',
      title: 'Horizontal Scaling: Analysis',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">Horizontal Scaling: Deep Dive</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-8xl mb-8">🔍</div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-500/20 rounded-lg p-8">
                <h3 className="text-3xl font-bold text-green-300 mb-6">✅ Advantages</h3>
                <div className="text-left space-y-4">
                  <div className="bg-green-900/50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">♾️</div>
                      <div>
                        <div className="font-bold">Theoretically Unlimited</div>
                        <div className="text-sm text-white/80">Keep adding servers as needed</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-900/50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">🛡️</div>
                      <div>
                        <div className="font-bold">Fault Tolerance</div>
                        <div className="text-sm text-white/80">One server fails, others continue working</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-900/50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">💰</div>
                      <div>
                        <div className="font-bold">Cost Efficient</div>
                        <div className="text-sm text-white/80">Use cheaper commodity hardware</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-900/50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">📈</div>
                      <div>
                        <div className="font-bold">Linear Growth</div>
                        <div className="text-sm text-white/80">2x servers ≈ 2x capacity</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/20 rounded-lg p-8">
                <h3 className="text-3xl font-bold text-red-300 mb-6">❌ Challenges</h3>
                <div className="text-left space-y-4">
                  <div className="bg-red-900/50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">🧩</div>
                      <div>
                        <div className="font-bold">Complexity</div>
                        <div className="text-sm text-white/80">Need load balancers, monitoring, coordination</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-900/50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">🔄</div>
                      <div>
                        <div className="font-bold">Data Consistency</div>
                        <div className="text-sm text-white/80">Keeping all servers in sync is hard</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-900/50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">🌐</div>
                      <div>
                        <div className="font-bold">Network Overhead</div>
                        <div className="text-sm text-white/80">Servers must communicate over network</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-red-900/50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <div className="text-2xl">🏗️</div>
                      <div>
                        <div className="font-bold">Application Changes</div>
                        <div className="text-sm text-white/80">Code must be designed for distributed systems</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <h4 className="text-2xl font-bold text-yellow-300 mb-4">⚡ Performance Reality</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-900/50 rounded-lg p-4">
                  <div className="font-bold text-blue-300 mb-2">Vertical Scaling</div>
                  <div className="text-sm">Database query: <strong>1ms</strong> (same machine)</div>
                </div>
                <div className="bg-orange-900/50 rounded-lg p-4">
                  <div className="font-bold text-orange-300 mb-2">Horizontal Scaling</div>
                  <div className="text-sm">Database query: <strong>5-50ms</strong> (network latency)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-emerald-600 to-green-600'
    },

    {
      id: 'load-balancing-intro',
      title: 'Load Balancing: Introduction',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">Load Balancing</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-8xl mb-8 animate-float">⚖️</div>
            <h3 className="text-3xl font-bold text-blue-300 mb-8">Distributing the Traffic</h3>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold text-yellow-300 mb-6">The Traffic Distribution Problem</h4>
              <p className="text-xl text-white/90 mb-8">
                When you have multiple servers, how do you decide which server handles each incoming request?
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-red-500/20 rounded-lg p-6">
                  <h5 className="text-xl font-bold text-red-300 mb-4">Without Load Balancing</h5>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🎯</span>
                      <span>All traffic hits one server</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">😴</span>
                      <span>Other servers sit idle</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">💥</span>
                      <span>Single server overwhelmed</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">❌</span>
                      <span>No fault tolerance</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-500/20 rounded-lg p-6">
                  <h5 className="text-xl font-bold text-green-300 mb-4">With Load Balancing</h5>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">⚖️</span>
                      <span>Traffic spread evenly</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">⚡</span>
                      <span>All servers utilized</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📈</span>
                      <span>Better performance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🛡️</span>
                      <span>Fault tolerance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400/30">
              <h4 className="text-2xl font-bold text-blue-300 mb-6">What is a Load Balancer?</h4>
              <p className="text-lg text-white/90 mb-6">
                A <strong>traffic director</strong> that sits between clients and servers, intelligently routing each request to the best available server.
              </p>
              
              <div className="bg-blue-900/50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                  <div className="text-center">
                    <div className="text-3xl mb-2">👥</div>
                    <div className="font-bold text-sm">Users</div>
                  </div>
                  
                  <div className="text-2xl text-center">→</div>
                  
                  <div className="text-center">
                    <div className="text-3xl mb-2">⚖️</div>
                    <div className="font-bold text-sm">Load Balancer</div>
                    <div className="text-xs text-white/70">Routes traffic</div>
                  </div>
                  
                  <div className="text-2xl text-center">→</div>
                  
                  <div className="text-center">
                    <div className="text-3xl mb-2">🖥️🖥️🖥️</div>
                    <div className="font-bold text-sm">Servers</div>
                    <div className="text-xs text-white/70">Handle requests</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <h4 className="text-2xl font-bold text-yellow-300 mb-4">💡 Key Benefits</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="font-bold">Performance</div>
                  <div className="text-sm text-white/80">Distribute load evenly</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🛡️</div>
                  <div className="font-bold">Reliability</div>
                  <div className="text-sm text-white/80">Handle server failures</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📈</div>
                  <div className="font-bold">Scalability</div>
                  <div className="text-sm text-white/80">Add servers easily</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🔧</div>
                  <div className="font-bold">Maintenance</div>
                  <div className="text-sm text-white/80">Update servers without downtime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-cyan-700 to-blue-700'
    },

    {
      id: 'round-robin-load-balancing',
      title: 'Round Robin Load Balancing',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">Round Robin Load Balancing</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-8xl mb-8 animate-float">🔄</div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold text-blue-300 mb-6">Simple and Fair Distribution</h3>
              <p className="text-xl text-white/90 mb-8">
                Distribute requests sequentially across servers in a rotating fashion - like dealing cards in a circle.
              </p>
              
              <div className="bg-blue-900/50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-white mb-4">How It Works</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="font-bold text-blue-300 mb-3">Request Flow</div>
                    <div className="font-mono text-sm space-y-1">
                      <div>Request 1 → Server A</div>
                      <div>Request 2 → Server B</div>
                      <div>Request 3 → Server C</div>
                      <div>Request 4 → Server A</div>
                      <div>Request 5 → Server B</div>
                      <div className="text-blue-300">...cycle continues</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="font-bold text-blue-300 mb-3">Visual Representation</div>
                    <div className="grid grid-cols-3 gap-2 text-center text-sm">
                      <div className="bg-blue-600 rounded p-2">Server A<br/>33% load</div>
                      <div className="bg-blue-600 rounded p-2">Server B<br/>33% load</div>
                      <div className="bg-blue-600 rounded p-2">Server C<br/>34% load</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-500/20 rounded-lg p-8">
                <h4 className="text-2xl font-bold text-green-300 mb-6">✅ Advantages</h4>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <div className="font-bold">Simple Implementation</div>
                      <div className="text-sm text-white/80">Easy to understand and implement</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">⚖️</span>
                    <div>
                      <div className="font-bold">Fair Distribution</div>
                      <div className="text-sm text-white/80">Each server gets equal number of requests</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">⚡</span>
                    <div>
                      <div className="font-bold">Low Overhead</div>
                      <div className="text-sm text-white/80">No complex calculations needed</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🔄</span>
                    <div>
                      <div className="font-bold">Stateless</div>
                      <div className="text-sm text-white/80">No need to track server states</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/20 rounded-lg p-8">
                <h4 className="text-2xl font-bold text-red-300 mb-6">❌ Limitations</h4>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🖥️</span>
                    <div>
                      <div className="font-bold">Ignores Server Capacity</div>
                      <div className="text-sm text-white/80">Doesn't consider different server specs</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">⏱️</span>
                    <div>
                      <div className="font-bold">Ignores Request Complexity</div>
                      <div className="text-sm text-white/80">Some requests take much longer</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🔄</span>
                    <div>
                      <div className="font-bold">No Session Affinity</div>
                      <div className="text-sm text-white/80">User might hit different servers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/30">
              <h4 className="text-2xl font-bold text-blue-300 mb-4">🎯 Best Use Cases</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-900/50 rounded-lg p-4">
                  <div className="font-bold text-white mb-2">Perfect For:</div>
                  <div className="text-sm text-white/80 space-y-1">
                    <div>• Stateless web applications</div>
                    <div>• Uniform server specifications</div>
                    <div>• Simple CRUD operations</div>
                    <div>• APIs with similar response times</div>
                    <div>• Development/testing environments</div>
                  </div>
                </div>
                <div className="bg-blue-900/50 rounded-lg p-4">
                  <div className="font-bold text-white mb-2">Real-World Example:</div>
                  <div className="text-sm text-white/80 space-y-2">
                    <div className="font-bold text-blue-300">Reddit's Comment System</div>
                    <div>• All servers can handle any comment</div>
                    <div>• No user session requirements</div>
                    <div>• Simple read/write operations</div>
                    <div>• Uniform processing time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-cyan-600'
    },

    {
      id: 'least-connections-load-balancing',
      title: 'Least Connections Load Balancing',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">Least Connections Load Balancing</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-8xl mb-8 animate-float">📊</div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold text-green-300 mb-6">Smart Load-Aware Routing</h3>
              <p className="text-xl text-white/90 mb-8">
                Route new requests to the server with the fewest active connections - accounting for actual server load.
              </p>
              
              <div className="bg-green-900/50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-white mb-4">Real-Time Decision Making</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-red-800 rounded-lg p-4 text-center">
                    <div className="font-bold text-white mb-2">Server A</div>
                    <div className="text-2xl mb-2">15</div>
                    <div className="text-sm text-red-200">Active connections</div>
                    <div className="text-xs text-white/70 mt-2">❌ Busy</div>
                  </div>
                  <div className="bg-green-800 rounded-lg p-4 text-center border-2 border-green-400">
                    <div className="font-bold text-white mb-2">Server B</div>
                    <div className="text-2xl mb-2">3</div>
                    <div className="text-sm text-green-200">Active connections</div>
                    <div className="text-xs text-green-300 mt-2">✅ Route here!</div>
                  </div>
                  <div className="bg-orange-800 rounded-lg p-4 text-center">
                    <div className="font-bold text-white mb-2">Server C</div>
                    <div className="text-2xl mb-2">8</div>
                    <div className="text-sm text-orange-200">Active connections</div>
                    <div className="text-xs text-white/70 mt-2">⚠️ Moderate</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-500/20 rounded-xl p-8 border border-green-400/30">
              <h4 className="text-2xl font-bold text-green-300 mb-6">How Connection Tracking Works</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-green-900/50 rounded-lg p-4">
                  <div className="font-bold text-white mb-3">Connection Lifecycle</div>
                  <div className="text-sm space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-green-300">1.</span>
                      <span>Request arrives</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-300">2.</span>
                      <span>Check active connections per server</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-300">3.</span>
                      <span>Route to server with least connections</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-300">4.</span>
                      <span>Increment connection count</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-green-300">5.</span>
                      <span>Decrement when request completes</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-900/50 rounded-lg p-4">
                  <div className="font-bold text-white mb-3">Dynamic Adaptation</div>
                  <div className="text-sm space-y-2">
                    <div>• Constantly monitors server load</div>
                    <div>• Adapts to varying request durations</div>
                    <div>• Accounts for server processing speed</div>
                    <div>• Handles long-running connections</div>
                    <div>• Automatically rebalances load</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-500/20 rounded-lg p-8">
                <h4 className="text-2xl font-bold text-green-300 mb-6">✅ Advantages</h4>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <div className="font-bold">Load-Aware Routing</div>
                      <div className="text-sm text-white/80">Considers actual server workload</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">⚖️</span>
                    <div>
                      <div className="font-bold">Better Load Distribution</div>
                      <div className="text-sm text-white/80">Prevents server overload</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🔄</span>
                    <div>
                      <div className="font-bold">Handles Variable Requests</div>
                      <div className="text-sm text-white/80">Adapts to different processing times</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">📈</span>
                    <div>
                      <div className="font-bold">Improved Performance</div>
                      <div className="text-sm text-white/80">Better resource utilization</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-500/20 rounded-lg p-8">
                <h4 className="text-2xl font-bold text-orange-300 mb-6">⚠️ Trade-offs</h4>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🔍</span>
                    <div>
                      <div className="font-bold">More Complex</div>
                      <div className="text-sm text-white/80">Requires connection tracking</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">💾</span>
                    <div>
                      <div className="font-bold">Memory Overhead</div>
                      <div className="text-sm text-white/80">Must track connection states</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">⏱️</span>
                    <div>
                      <div className="font-bold">Slight Latency</div>
                      <div className="text-sm text-white/80">Time to check connection counts</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/30">
              <h4 className="text-2xl font-bold text-blue-300 mb-4">🎯 Best Use Cases</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-900/50 rounded-lg p-4">
                  <div className="font-bold text-white mb-2">Perfect For:</div>
                  <div className="text-sm text-white/80 space-y-1">
                    <div>• Variable request processing times</div>
                    <div>• Long-running connections</div>
                    <div>• Mixed server specifications</div>
                    <div>• Database query applications</div>
                    <div>• File upload/download services</div>
                  </div>
                </div>
                <div className="bg-blue-900/50 rounded-lg p-4">
                  <div className="font-bold text-white mb-2">Real-World Example:</div>
                  <div className="text-sm text-white/80 space-y-2">
                    <div className="font-bold text-green-300">Zoom's Video Processing</div>
                    <div>• Video calls have varying durations</div>
                    <div>• Processing complexity varies by features</div>
                    <div>• Routes based on actual server load</div>
                    <div>• Prevents any single server overload</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-emerald-600'
    },

    {
      id: 'consistent-hashing-load-balancing',
      title: 'Consistent Hashing Load Balancing',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">Consistent Hashing Load Balancing</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-8xl mb-8 animate-float">🎯</div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold text-purple-300 mb-6">Predictable User-Server Mapping</h3>
              <p className="text-xl text-white/90 mb-8">
                Use hashing to ensure the same user always hits the same server - perfect for sticky sessions and caching.
              </p>
              
              <div className="bg-purple-900/50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-white mb-4">How Consistent Hashing Works</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="font-bold text-purple-300 mb-3">Hash Function</div>
                    <div className="font-mono text-sm space-y-1">
                      <div>hash = md5(user_id)</div>
                      <div>server = hash % num_servers</div>
                      <div className="text-purple-300 mt-2">Example:</div>
                      <div>User "alice" → Server 1</div>
                      <div>User "bob" → Server 2</div>
                      <div>User "charlie" → Server 1</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="font-bold text-purple-300 mb-3">Consistency Guarantee</div>
                    <div className="text-sm space-y-2">
                      <div>• Same user always hits same server</div>
                      <div>• Session data stays consistent</div>
                      <div>• User-specific caches work perfectly</div>
                      <div>• Predictable routing behavior</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-orange-500/20 rounded-xl p-8 border border-orange-400/30">
              <h4 className="text-2xl font-bold text-orange-300 mb-6">🚨 The Resharding Problem</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-500/20 rounded-lg p-4">
                  <h5 className="text-lg font-bold text-red-300 mb-2">❌ Simple Hash Modulo</h5>
                  <div className="text-sm space-y-2">
                    <div className="font-mono">server = hash % 3</div>
                    <div className="text-red-400 font-bold">Adding 4th server:</div>
                    <div className="font-mono">server = hash % 4</div>
                    <div className="text-red-400">Problem: 75% of users get remapped!</div>
                    <div>• Sessions lost</div>
                    <div>• Cache misses everywhere</div>
                    <div>• User experience breaks</div>
                  </div>
                </div>
                <div className="bg-green-500/20 rounded-lg p-4">
                  <h5 className="text-lg font-bold text-green-300 mb-2">✅ Consistent Hashing Solution</h5>
                  <div className="text-sm space-y-2">
                    <div>Uses virtual nodes on a hash ring</div>
                    <div className="text-green-400 font-bold">Adding servers:</div>
                    <div>Only ~25% of users get remapped</div>
                    <div>• Most sessions preserved</div>
                    <div>• Minimal cache invalidation</div>
                    <div>• Graceful scaling</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-500/20 rounded-lg p-8">
                <h4 className="text-2xl font-bold text-green-300 mb-6">✅ Advantages</h4>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <div className="font-bold">Session Affinity</div>
                      <div className="text-sm text-white/80">Same user always hits same server</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">💾</span>
                    <div>
                      <div className="font-bold">Effective Caching</div>
                      <div className="text-sm text-white/80">User-specific data cached per server</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🔄</span>
                    <div>
                      <div className="font-bold">Graceful Scaling</div>
                      <div className="text-sm text-white/80">Minimal disruption when adding servers</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🎲</span>
                    <div>
                      <div className="font-bold">Good Distribution</div>
                      <div className="text-sm text-white/80">Hash function ensures even spread</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/20 rounded-lg p-8">
                <h4 className="text-2xl font-bold text-red-300 mb-6">❌ Challenges</h4>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">💥</span>
                    <div>
                      <div className="font-bold">Single Point of Failure</div>
                      <div className="text-sm text-white/80">If user's server fails, they lose session</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">⚖️</span>
                    <div>
                      <div className="font-bold">Potential Imbalance</div>
                      <div className="text-sm text-white/80">Some users more active than others</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🔧</span>
                    <div>
                      <div className="font-bold">Complex Implementation</div>
                      <div className="text-sm text-white/80">Requires hash ring management</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/30">
              <h4 className="text-2xl font-bold text-blue-300 mb-4">🎯 Best Use Cases</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-900/50 rounded-lg p-4">
                  <div className="font-bold text-white mb-2">Perfect For:</div>
                  <div className="text-sm text-white/80 space-y-1">
                    <div>• Applications with user sessions</div>
                    <div>• User-specific caching needs</div>
                    <div>• Stateful applications</div>
                    <div>• WebSocket connections</div>
                    <div>• Gaming servers</div>
                  </div>
                </div>
                <div className="bg-blue-900/50 rounded-lg p-4">
                  <div className="font-bold text-white mb-2">Real-World Example:</div>
                  <div className="text-sm text-white/80 space-y-2">
                    <div className="font-bold text-purple-300">Twitch Streaming</div>
                    <div>• Same streamer always hits same server</div>
                    <div>• Chat history cached per server</div>
                    <div>• Viewer connections stay consistent</div>
                    <div>• Stream metadata cached effectively</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-indigo-600'
    },

    {
      id: 'database-replication-intro',
      title: 'Database Replication: The Concept',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">Database Replication</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-8xl mb-8 animate-float">🗄️</div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold text-blue-300 mb-6">What is Replication?</h3>
              <p className="text-2xl text-white/90 mb-8">
                Creating and maintaining identical copies of your database on multiple servers
              </p>
              
              <div className="bg-blue-900/50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h5 className="text-lg font-bold text-white mb-3">Original Database</h5>
                    <div className="space-y-2 text-sm">
                      <div>📊 Contains all data</div>
                      <div>🔄 Handles all operations</div>
                      <div>⚠️ Single point of failure</div>
                    </div>
                  </div>
                  
                  <div className="text-4xl">→</div>
                  
                  <div className="bg-gray-600 rounded-lg p-4">
                    <h5 className="text-lg font-bold text-white mb-3">Replicated System</h5>
                    <div className="space-y-2 text-sm">
                      <div>📊 Multiple identical copies</div>
                      <div>🔄 Distributed operations</div>
                      <div>✅ Backup if one fails</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-500/20 rounded-lg p-6">
                <h4 className="text-2xl font-bold text-green-300 mb-4">Why Replicate?</h4>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🛡️</span>
                    <div>
                      <div className="font-bold">Reliability</div>
                      <div className="text-sm text-white/80">If one database fails, others continue working</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">⚡</span>
                    <div>
                      <div className="font-bold">Performance</div>
                      <div className="text-sm text-white/80">Distribute read operations across multiple servers</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🌍</span>
                    <div>
                      <div className="font-bold">Geographic Distribution</div>
                      <div className="text-sm text-white/80">Place copies closer to users worldwide</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-orange-500/20 rounded-lg p-6">
                <h4 className="text-2xl font-bold text-orange-300 mb-4">Read vs Write Pattern</h4>
                <div className="space-y-4">
                  <div className="bg-orange-900/50 rounded-lg p-4">
                    <h5 className="text-lg font-bold text-white mb-2">Typical Application</h5>
                    <div className="text-sm space-y-1">
                      <div>📖 <strong>90%</strong> Read operations</div>
                      <div>✏️ <strong>10%</strong> Write operations</div>
                    </div>
                  </div>
                  <div className="text-sm text-white/80">
                    Most apps read data much more than they write it. Replication helps by spreading reads across multiple databases.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-700 to-cyan-700'
    },

    {
      id: 'primary-replica-replication',
      title: 'Primary-Replica Replication',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">Primary-Replica Replication</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-8xl mb-8">👑</div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold text-purple-300 mb-6">The Architecture</h3>
              <p className="text-xl text-white/90 mb-8">
                One database is the "primary" (handles writes), others are "replicas" (handle reads)
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-red-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-4">👑</div>
                  <h4 className="text-xl font-bold text-red-300 mb-4">Primary Database</h4>
                  <div className="space-y-2 text-left text-sm">
                    <div>• Accepts all write operations</div>
                    <div>• Only source of new data</div>
                    <div>• Sends updates to replicas</div>
                    <div>• Can also handle reads</div>
                  </div>
                </div>
                
                <div className="text-4xl flex items-center justify-center">
                  ↓<br/>📡<br/>↓
                </div>
                
                <div className="bg-green-500/20 rounded-lg p-6">
                  <div className="text-4xl mb-4">👥</div>
                  <h4 className="text-xl font-bold text-green-300 mb-4">Replica Databases</h4>
                  <div className="space-y-2 text-left text-sm">
                    <div>• Read-only copies</div>
                    <div>• Receive updates from primary</div>
                    <div>• Handle read queries</div>
                    <div>• Can be promoted to primary</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-500/20 rounded-lg p-6">
                <h4 className="text-2xl font-bold text-blue-300 mb-4">How It Works</h4>
                <div className="space-y-3 text-left text-sm">
                  <div className="bg-blue-900/50 rounded-lg p-3">
                    <div className="font-bold">1. Write Request</div>
                    <div>All writes go to primary database</div>
                  </div>
                  <div className="bg-blue-900/50 rounded-lg p-3">
                    <div className="font-bold">2. Primary Updates</div>
                    <div>Primary processes write and updates its data</div>
                  </div>
                  <div className="bg-blue-900/50 rounded-lg p-3">
                    <div className="font-bold">3. Replication</div>
                    <div>Primary sends changes to all replica databases</div>
                  </div>
                  <div className="bg-blue-900/50 rounded-lg p-3">
                    <div className="font-bold">4. Read Distribution</div>
                    <div>Read requests can go to any database</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-500/20 rounded-lg p-6">
                <h4 className="text-2xl font-bold text-yellow-300 mb-4">Key Benefits</h4>
                <div className="space-y-3 text-left">
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">📈</span>
                    <div>
                      <div className="font-bold">Scalable Reads</div>
                      <div className="text-sm text-white/80">Add more replicas to handle more read traffic</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">🔄</span>
                    <div>
                      <div className="font-bold">Automatic Failover</div>
                      <div className="text-sm text-white/80">If primary fails, promote a replica</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">🌐</span>
                    <div>
                      <div className="font-bold">Geographic Distribution</div>
                      <div className="text-sm text-white/80">Place replicas near users for faster reads</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-blue-600'
    },

    {
      id: 'database-sharding-intro',
      title: 'Database Sharding: Introduction',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">Database Sharding</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-8xl mb-8 animate-float">🗂️</div>
            <h3 className="text-3xl font-bold mb-8 text-blue-300">Breaking the Single Database Limit</h3>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold text-yellow-300 mb-6">The Write Bottleneck Problem</h4>
              <p className="text-xl text-white/90 mb-8">
                Even with replication, you eventually hit the <strong>write bottleneck</strong>. One primary database can only handle so many concurrent writes before performance degrades.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-red-500/20 rounded-lg p-6">
                  <h5 className="text-xl font-bold text-red-300 mb-4">With Replication Only</h5>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">👑</span>
                      <span>One primary handles all writes</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📈</span>
                      <span>Reads can scale with replicas</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">⚠️</span>
                      <span>Writes still bottleneck at primary</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">💥</span>
                      <span>Primary eventually overwhelmed</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-green-500/20 rounded-lg p-6">
                  <h5 className="text-xl font-bold text-green-300 mb-4">With Sharding</h5>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🗂️</span>
                      <span>Split data across multiple databases</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">✍️</span>
                      <span>Each shard handles its own writes</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📊</span>
                      <span>Distribute write load evenly</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">♾️</span>
                      <span>Scale writes horizontally</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400/30">
              <h4 className="text-2xl font-bold text-blue-300 mb-6">What is Sharding?</h4>
              <p className="text-lg text-white/90 mb-6">
                <strong>Horizontal partitioning</strong> of data across multiple database instances, where each instance (shard) contains a subset of the total data.
              </p>
              
              <div className="bg-blue-900/50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🗄️</div>
                    <div className="font-bold">Single Database</div>
                    <div className="text-sm text-white/80">All data in one place</div>
                  </div>
                  
                  <div className="text-4xl text-center">→</div>
                  
                  <div className="text-center">
                    <div className="text-4xl mb-2">🗂️🗂️🗂️</div>
                    <div className="font-bold">Multiple Shards</div>
                    <div className="text-sm text-white/80">Data distributed across shards</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <h4 className="text-2xl font-bold text-yellow-300 mb-4">💡 Key Benefits</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="font-bold">Write Scalability</div>
                  <div className="text-sm text-white/80">Distribute write load</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📊</div>
                  <div className="font-bold">Storage Capacity</div>
                  <div className="text-sm text-white/80">No single machine limits</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🚀</div>
                  <div className="font-bold">Performance</div>
                  <div className="text-sm text-white/80">Smaller datasets per shard</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-indigo-700 to-purple-700'
    },

    {
      id: 'range-based-sharding',
      title: 'Range-Based Sharding',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">Range-Based Sharding</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-8xl mb-8 animate-float">📊</div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold text-blue-300 mb-6">Split by Data Ranges</h3>
              <p className="text-xl text-white/90 mb-8">
                Partition data based on ranges of a key value (like user IDs, dates, or alphabetical ranges)
              </p>
              
              <div className="bg-blue-900/50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-white mb-4">Example: User Database Sharding</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-800 rounded-lg p-4">
                    <div className="font-bold text-blue-300 mb-2">Shard 1</div>
                    <div className="text-sm">User IDs: 1 - 100,000</div>
                  </div>
                  <div className="bg-blue-800 rounded-lg p-4">
                    <div className="font-bold text-blue-300 mb-2">Shard 2</div>
                    <div className="text-sm">User IDs: 100,001 - 200,000</div>
                  </div>
                  <div className="bg-blue-800 rounded-lg p-4">
                    <div className="font-bold text-blue-300 mb-2">Shard 3</div>
                    <div className="text-sm">User IDs: 200,001 - 300,000</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-500/20 rounded-lg p-8">
                <h4 className="text-2xl font-bold text-green-300 mb-6">✅ Advantages</h4>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🎯</span>
                    <div>
                      <div className="font-bold">Logical Organization</div>
                      <div className="text-sm text-white/80">Data naturally grouped by meaningful ranges</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🔍</span>
                    <div>
                      <div className="font-bold">Efficient Range Queries</div>
                      <div className="text-sm text-white/80">Easy to find all users in a specific range</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🗺️</span>
                    <div>
                      <div className="font-bold">Predictable Routing</div>
                      <div className="text-sm text-white/80">Simple logic to determine which shard</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/20 rounded-lg p-8">
                <h4 className="text-2xl font-bold text-red-300 mb-6">❌ Challenges</h4>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🔥</span>
                    <div>
                      <div className="font-bold">Hotspot Risk</div>
                      <div className="text-sm text-white/80">New users might all go to the latest shard</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">⚖️</span>
                    <div>
                      <div className="font-bold">Uneven Distribution</div>
                      <div className="text-sm text-white/80">Some ranges might be much more active</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🔄</span>
                    <div>
                      <div className="font-bold">Rebalancing Difficulty</div>
                      <div className="text-sm text-white/80">Hard to move data between ranges</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/30">
              <h4 className="text-2xl font-bold text-blue-300 mb-4">🎯 Best Use Cases</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-900/50 rounded-lg p-4">
                  <div className="font-bold text-white mb-2">Perfect For:</div>
                  <div className="text-sm text-white/80 space-y-1">
                    <div>• Time-series data (logs, events)</div>
                    <div>• Sequential IDs (user accounts)</div>
                    <div>• Alphabetical data (names, locations)</div>
                    <div>• Applications needing range queries</div>
                  </div>
                </div>
                <div className="bg-blue-900/50 rounded-lg p-4">
                  <div className="font-bold text-white mb-2">Avoid When:</div>
                  <div className="text-sm text-white/80 space-y-1">
                    <div>• Data access is highly random</div>
                    <div>• Perfect load distribution needed</div>
                    <div>• Frequent cross-shard queries</div>
                    <div>• Unpredictable growth patterns</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-indigo-600'
    },

    {
      id: 'hash-based-sharding',
      title: 'Hash-Based Sharding',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">Hash-Based Sharding</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-8xl mb-8 animate-float">🎲</div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold text-green-300 mb-6">Even Distribution Through Hashing</h3>
              <p className="text-xl text-white/90 mb-8">
                Use a hash function to determine which shard stores each piece of data, ensuring even distribution
              </p>
              
              <div className="bg-green-900/50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-white mb-4">How It Works</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="font-bold text-green-300 mb-2">Step 1: Hash</div>
                    <div className="font-mono text-sm">hash = md5(user_id)</div>
                    <div className="text-xs text-white/70 mt-1">Convert ID to hash value</div>
                  </div>
                  
                  <div className="text-4xl">→</div>
                  
                  <div className="bg-gray-800 rounded-lg p-4">
                    <div className="font-bold text-green-300 mb-2">Step 2: Modulo</div>
                    <div className="font-mono text-sm">shard = hash % 4</div>
                    <div className="text-xs text-white/70 mt-1">Determine shard (0, 1, 2, or 3)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-500/20 rounded-xl p-8 border border-green-400/30">
              <h4 className="text-2xl font-bold text-green-300 mb-6">Example Distribution</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-green-800 rounded-lg p-4 text-center">
                  <div className="font-bold text-white mb-2">Shard 0</div>
                  <div className="text-sm text-green-200">25% of data</div>
                  <div className="text-xs text-white/70 mt-2">Users: Alice, David, Grace...</div>
                </div>
                <div className="bg-green-800 rounded-lg p-4 text-center">
                  <div className="font-bold text-white mb-2">Shard 1</div>
                  <div className="text-sm text-green-200">25% of data</div>
                  <div className="text-xs text-white/70 mt-2">Users: Bob, Emma, Henry...</div>
                </div>
                <div className="bg-green-800 rounded-lg p-4 text-center">
                  <div className="font-bold text-white mb-2">Shard 2</div>
                  <div className="text-sm text-green-200">25% of data</div>
                  <div className="text-xs text-white/70 mt-2">Users: Carol, Frank, Ivy...</div>
                </div>
                <div className="bg-green-800 rounded-lg p-4 text-center">
                  <div className="font-bold text-white mb-2">Shard 3</div>
                  <div className="text-sm text-green-200">25% of data</div>
                  <div className="text-xs text-white/70 mt-2">Users: Dan, George, Jack...</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-500/20 rounded-lg p-8">
                <h4 className="text-2xl font-bold text-green-300 mb-6">✅ Advantages</h4>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">⚖️</span>
                    <div>
                      <div className="font-bold">Perfect Load Distribution</div>
                      <div className="text-sm text-white/80">Hash function ensures even spread</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🚫</span>
                    <div>
                      <div className="font-bold">No Hotspots</div>
                      <div className="text-sm text-white/80">Data scattered randomly across shards</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">📈</span>
                    <div>
                      <div className="font-bold">Predictable Performance</div>
                      <div className="text-sm text-white/80">Each shard handles similar load</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-500/20 rounded-lg p-8">
                <h4 className="text-2xl font-bold text-orange-300 mb-6">⚠️ Trade-offs</h4>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🔍</span>
                    <div>
                      <div className="font-bold">Range Queries Expensive</div>
                      <div className="text-sm text-white/80">Must check all shards for ranges</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🔗</span>
                    <div>
                      <div className="font-bold">Cross-Shard Operations</div>
                      <div className="text-sm text-white/80">Joins across shards are complex</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🔄</span>
                    <div>
                      <div className="font-bold">Resharding Challenges</div>
                      <div className="text-sm text-white/80">Adding shards requires data movement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/30">
              <h4 className="text-2xl font-bold text-blue-300 mb-4">🎯 Best Use Cases</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-900/50 rounded-lg p-4">
                  <div className="font-bold text-white mb-2">Perfect For:</div>
                  <div className="text-sm text-white/80 space-y-1">
                    <div>• User profiles and accounts</div>
                    <div>• Random access patterns</div>
                    <div>• Need for even load distribution</div>
                    <div>• Simple key-based lookups</div>
                  </div>
                </div>
                <div className="bg-blue-900/50 rounded-lg p-4">
                  <div className="font-bold text-white mb-2">Avoid When:</div>
                  <div className="text-sm text-white/80 space-y-1">
                    <div>• Frequent range queries needed</div>
                    <div>• Complex analytical queries</div>
                    <div>• Data has natural groupings</div>
                    <div>• Need for data locality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-600 to-emerald-600'
    },

    {
      id: 'geographic-sharding',
      title: 'Geographic Sharding',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">Geographic Sharding</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-8xl mb-8 animate-float">🌍</div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold text-purple-300 mb-6">Partition by Location</h3>
              <p className="text-xl text-white/90 mb-8">
                Distribute data based on geographic regions to optimize for latency and regulatory compliance
              </p>
              
              <div className="bg-purple-900/50 rounded-lg p-6">
                <h4 className="text-xl font-bold text-white mb-4">Global Distribution Example</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-purple-800 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">🇺🇸</div>
                    <div className="font-bold text-purple-300 mb-2">Americas Shard</div>
                    <div className="text-sm text-white/80">US, Canada, Brazil users</div>
                  </div>
                  <div className="bg-purple-800 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">🇪🇺</div>
                    <div className="font-bold text-purple-300 mb-2">Europe Shard</div>
                    <div className="text-sm text-white/80">UK, Germany, France users</div>
                  </div>
                  <div className="bg-purple-800 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">🇯🇵</div>
                    <div className="font-bold text-purple-300 mb-2">Asia-Pacific Shard</div>
                    <div className="text-sm text-white/80">Japan, Australia, India users</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-500/20 rounded-lg p-8">
                <h4 className="text-2xl font-bold text-green-300 mb-6">✅ Advantages</h4>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">⚡</span>
                    <div>
                      <div className="font-bold">Low Latency</div>
                      <div className="text-sm text-white/80">Data stored close to users</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🏠</span>
                    <div>
                      <div className="font-bold">Data Locality</div>
                      <div className="text-sm text-white/80">Related data stays in same region</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">⚖️</span>
                    <div>
                      <div className="font-bold">Regulatory Compliance</div>
                      <div className="text-sm text-white/80">Meet data residency requirements</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🌐</span>
                    <div>
                      <div className="font-bold">Regional Resilience</div>
                      <div className="text-sm text-white/80">Region outages don't affect others</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-500/20 rounded-lg p-8">
                <h4 className="text-2xl font-bold text-red-300 mb-6">❌ Challenges</h4>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">⚖️</span>
                    <div>
                      <div className="font-bold">Uneven Load</div>
                      <div className="text-sm text-white/80">Some regions much more active</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🔗</span>
                    <div>
                      <div className="font-bold">Cross-Region Queries</div>
                      <div className="text-sm text-white/80">High latency for global operations</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🔄</span>
                    <div>
                      <div className="font-bold">Data Synchronization</div>
                      <div className="text-sm text-white/80">Complex to keep regions in sync</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">💰</span>
                    <div>
                      <div className="font-bold">Infrastructure Costs</div>
                      <div className="text-sm text-white/80">Need servers in multiple regions</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400/30">
              <h4 className="text-2xl font-bold text-blue-300 mb-6">🎯 Sharding Strategy Comparison</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-900/50 rounded-lg p-4">
                  <div className="font-bold text-blue-300 mb-2">Range-Based</div>
                  <div className="text-sm text-white/80">Best for time-series data and range queries</div>
                </div>
                <div className="bg-green-900/50 rounded-lg p-4">
                  <div className="font-bold text-green-300 mb-2">Hash-Based</div>
                  <div className="text-sm text-white/80">Best for even load distribution and random access</div>
                </div>
                <div className="bg-purple-900/50 rounded-lg p-4">
                  <div className="font-bold text-purple-300 mb-2">Geographic</div>
                  <div className="text-sm text-white/80">Best for global applications with regional users</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-purple-600 to-indigo-600'
    },



    {
      id: 'caching-introduction',
      title: 'Caching: Introduction',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">Caching for Performance</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-8xl mb-8 animate-float">⚡</div>
            <h3 className="text-3xl font-bold text-blue-300 mb-8">The 80/20 Rule of Web Performance</h3>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h4 className="text-2xl font-bold text-yellow-300 mb-6">The Performance Problem</h4>
              <p className="text-xl text-white/90 mb-8">
                Most web applications spend 80% of their time doing the <strong>same calculations over and over again</strong>.
              </p>
              
              <div className="bg-blue-500/20 rounded-xl p-6">
                <h5 className="text-xl font-bold text-blue-300 mb-4">Reddit's Data Pattern</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-4xl mb-2">👀</div>
                    <div className="font-bold text-green-300">80% of requests</div>
                    <div className="text-white/80">Viewing popular posts (read-heavy)</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <div className="text-4xl mb-2">✏️</div>
                    <div className="font-bold text-orange-300">20% of requests</div>
                    <div className="text-white/80">Creating posts, voting, commenting</div>
                  </div>
                </div>
                <div className="mt-6 text-xl font-bold text-yellow-300">
                  💡 The Insight: Cache the 80% to make everything faster
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400/30">
              <h4 className="text-2xl font-bold text-blue-300 mb-6">What is Caching?</h4>
              <p className="text-lg text-white/90 mb-6">
                <strong>Temporary storage</strong> of frequently accessed data in a fast-access location to avoid expensive computations or database queries.
              </p>
              
              <div className="bg-blue-900/50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                  <div className="text-center">
                    <div className="text-3xl mb-2">👤</div>
                    <div className="font-bold text-sm">User Request</div>
                  </div>
                  
                  <div className="text-2xl text-center">→</div>
                  
                  <div className="text-center">
                    <div className="text-3xl mb-2">⚡</div>
                    <div className="font-bold text-sm">Check Cache</div>
                    <div className="text-xs text-white/70">1ms lookup</div>
                  </div>
                  
                  <div className="text-2xl text-center">→</div>
                  
                  <div className="text-center">
                    <div className="text-3xl mb-2">🗄️</div>
                    <div className="font-bold text-sm">Database (if needed)</div>
                    <div className="text-xs text-white/70">100ms+ query</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-6 border border-yellow-400/30">
              <h4 className="text-2xl font-bold text-yellow-300 mb-4">💡 Key Benefits</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="font-bold">Speed</div>
                  <div className="text-sm text-white/80">50-100x faster responses</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">💰</div>
                  <div className="font-bold">Cost Savings</div>
                  <div className="text-sm text-white/80">Reduce database load</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">📈</div>
                  <div className="font-bold">Scalability</div>
                  <div className="text-sm text-white/80">Handle more users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">😊</div>
                  <div className="font-bold">User Experience</div>
                  <div className="text-sm text-white/80">Instant responses</div>
                </div>
              </div>
            </div>

            <div className="bg-green-500/20 rounded-xl p-6 border border-green-400/30">
              <h4 className="text-2xl font-bold text-green-300 mb-4">🎯 When to Use Caching</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-900/50 rounded-lg p-4">
                  <div className="font-bold text-white mb-2">Perfect For:</div>
                  <div className="text-sm text-white/80 space-y-1">
                    <div>• Frequently accessed data</div>
                    <div>• Expensive calculations</div>
                    <div>• Slow database queries</div>
                    <div>• API responses</div>
                    <div>• Static or semi-static content</div>
                  </div>
                </div>
                <div className="bg-green-900/50 rounded-lg p-4">
                  <div className="font-bold text-white mb-2">Avoid When:</div>
                  <div className="text-sm text-white/80 space-y-1">
                    <div>• Data changes frequently</div>
                    <div>• Real-time requirements</div>
                    <div>• Personalized content</div>
                    <div>• Security-sensitive data</div>
                    <div>• Memory is very limited</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-green-700 to-teal-700'
    },

    {
      id: 'cache-performance-comparison',
      title: 'Cache Performance Impact',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">Cache Performance Impact</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-8xl mb-8 animate-float">📊</div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold text-yellow-300 mb-6">Real-World Performance Comparison</h3>
              <p className="text-xl text-white/90 mb-8">
                Instagram feed generation: <strong>350ms without cache</strong> vs <strong>1ms with cache</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Without Cache */}
              <div className="bg-red-500/20 backdrop-blur rounded-xl p-8 border border-red-400/30">
                <h4 className="text-2xl font-bold text-red-300 mb-6">❌ Without Cache</h4>
                
                <div className="bg-red-900/50 rounded-lg p-6 mb-6">
                  <div className="font-bold text-white mb-4">Instagram Feed Generation:</div>
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between items-center">
                      <span>1. Query followers</span>
                      <span className="font-mono text-red-300">50ms</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>2. Query recent posts</span>
                      <span className="font-mono text-red-300">200ms</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>3. Query engagement data</span>
                      <span className="font-mono text-red-300">100ms</span>
                    </div>
                    <div className="border-t border-red-400 pt-2 flex justify-between items-center">
                      <span className="font-bold">Total per request:</span>
                      <span className="font-mono text-red-300 font-bold text-lg">350ms</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-bold text-red-300 mb-3">Problems:</div>
                  <div className="text-sm text-left space-y-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🐌</span>
                      <span>Every user request hits database</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">💥</span>
                      <span>Popular users cause database overload</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">⏰</span>
                      <span>Slow response times during peak hours</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">💸</span>
                      <span>High infrastructure costs</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* With Cache */}
              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border border-green-400/30">
                <h4 className="text-2xl font-bold text-green-300 mb-6">✅ With Redis Cache</h4>
                
                <div className="bg-green-900/50 rounded-lg p-6 mb-6">
                  <div className="font-bold text-white mb-4">Cached Feed Generation:</div>
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between items-center">
                      <span>1. Check Redis cache</span>
                      <span className="font-mono text-green-300">1ms</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>2. Return cached feed ✅</span>
                      <span className="font-mono text-green-300">0ms</span>
                    </div>
                    <div className="flex justify-between items-center opacity-50">
                      <span>3. (Skip database queries)</span>
                      <span className="font-mono">---</span>
                    </div>
                    <div className="border-t border-green-400 pt-2 flex justify-between items-center">
                      <span className="font-bold">Total per request:</span>
                      <span className="font-mono text-green-300 font-bold text-lg">1ms</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <div className="font-bold text-green-300 mb-3">Benefits:</div>
                  <div className="text-sm text-left space-y-2">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">⚡</span>
                      <span>70% of requests served from cache</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">🚀</span>
                      <span>350x faster response times</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">📉</span>
                      <span>Database load reduced by 70%</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">💰</span>
                      <span>Massive cost savings</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-500/20 rounded-xl p-8 border border-blue-400/30">
              <h4 className="text-2xl font-bold text-blue-300 mb-6">📈 Performance Metrics</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-900/50 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">⚡</div>
                  <div className="font-bold text-white">Response Time</div>
                  <div className="text-2xl font-mono text-blue-300 mt-2">1ms</div>
                  <div className="text-sm text-white/70">vs 350ms without cache</div>
                </div>
                <div className="bg-blue-900/50 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">📊</div>
                  <div className="font-bold text-white">Cache Hit Rate</div>
                  <div className="text-2xl font-mono text-blue-300 mt-2">70%</div>
                  <div className="text-sm text-white/70">of requests served from cache</div>
                </div>
                <div className="bg-blue-900/50 rounded-lg p-4 text-center">
                  <div className="text-3xl mb-2">💾</div>
                  <div className="font-bold text-white">DB Load Reduction</div>
                  <div className="text-2xl font-mono text-blue-300 mt-2">70%</div>
                  <div className="text-sm text-white/70">fewer database queries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-red-600 to-green-600'
    },

    {
      id: 'cache-strategies',
      title: 'Cache Strategies',
      content: (
        <div className="text-white animate-fade-in text-center">
          <h2 className="text-5xl font-extrabold mb-12">Cache Strategies</h2>
          
          <div className="max-w-6xl mx-auto space-y-8">
            <div className="text-8xl mb-8 animate-float">🎯</div>
            
            <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold text-purple-300 mb-6">How to Handle Cache Updates</h3>
              <p className="text-xl text-white/90 mb-8">
                Different strategies for keeping your cache synchronized with your database.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-500/20 backdrop-blur rounded-xl p-8 border border-blue-400/30">
                <div className="text-4xl mb-4">🔄</div>
                <h4 className="text-2xl font-bold text-blue-300 mb-6">Write-Through</h4>
                
                <div className="bg-blue-900/50 rounded-lg p-4 mb-6">
                  <div className="font-bold text-white mb-3">How It Works:</div>
                  <div className="text-sm text-left space-y-2">
                    <div>1. Update database first</div>
                    <div>2. Then update cache</div>
                    <div>3. Both stay synchronized</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-green-500/20 rounded-lg p-3">
                    <div className="font-bold text-green-300 text-sm mb-2">✅ Advantages</div>
                    <div className="text-xs space-y-1">
                      <div>• Always consistent data</div>
                      <div>• No data loss risk</div>
                      <div>• Simple to understand</div>
                    </div>
                  </div>
                  
                  <div className="bg-red-500/20 rounded-lg p-3">
                    <div className="font-bold text-red-300 text-sm mb-2">❌ Disadvantages</div>
                    <div className="text-xs space-y-1">
                      <div>• Slower write operations</div>
                      <div>• Two operations per write</div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-800/50 rounded-lg p-3 mt-4">
                  <div className="font-bold text-blue-300 text-sm mb-1">Perfect For:</div>
                  <div className="text-xs text-white/80">User profiles, account balances, critical data</div>
                </div>
              </div>

              <div className="bg-green-500/20 backdrop-blur rounded-xl p-8 border border-green-400/30">
                <div className="text-4xl mb-4">⚡</div>
                <h4 className="text-2xl font-bold text-green-300 mb-6">Write-Back</h4>
                
                <div className="bg-green-900/50 rounded-lg p-4 mb-6">
                  <div className="font-bold text-white mb-3">How It Works:</div>
                  <div className="text-sm text-left space-y-2">
                    <div>1. Update cache immediately</div>
                    <div>2. Update database later (async)</div>
                    <div>3. Cache serves as buffer</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-green-500/20 rounded-lg p-3">
                    <div className="font-bold text-green-300 text-sm mb-2">✅ Advantages</div>
                    <div className="text-xs space-y-1">
                      <div>• Super fast writes</div>
                      <div>• Better user experience</div>
                      <div>• Reduced DB load</div>
                    </div>
                  </div>
                  
                  <div className="bg-red-500/20 rounded-lg p-3">
                    <div className="font-bold text-red-300 text-sm mb-2">❌ Disadvantages</div>
                    <div className="text-xs space-y-1">
                      <div>• Risk of data loss</div>
                      <div>• Complex error handling</div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-800/50 rounded-lg p-3 mt-4">
                  <div className="font-bold text-green-300 text-sm mb-1">Perfect For:</div>
                  <div className="text-xs text-white/80">UI preferences, themes, non-critical data</div>
                </div>
              </div>

              <div className="bg-purple-500/20 backdrop-blur rounded-xl p-8 border border-purple-400/30">
                <div className="text-4xl mb-4">🔍</div>
                <h4 className="text-2xl font-bold text-purple-300 mb-6">Read-Through</h4>
                
                <div className="bg-purple-900/50 rounded-lg p-4 mb-6">
                  <div className="font-bold text-white mb-3">How It Works:</div>
                  <div className="text-sm text-left space-y-2">
                    <div>1. Check cache first</div>
                    <div>2. If miss, fetch from database</div>
                    <div>3. Store in cache for next time</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-green-500/20 rounded-lg p-3">
                    <div className="font-bold text-green-300 text-sm mb-2">✅ Advantages</div>
                    <div className="text-xs space-y-1">
                      <div>• Auto cache population</div>
                      <div>• Lazy loading</div>
                      <div>• Memory efficient</div>
                    </div>
                  </div>
                  
                  <div className="bg-orange-500/20 rounded-lg p-3">
                    <div className="font-bold text-orange-300 text-sm mb-2">⚠️ Trade-offs</div>
                    <div className="text-xs space-y-1">
                      <div>• First request is slow</div>
                      <div>• Cache miss penalty</div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-800/50 rounded-lg p-3 mt-4">
                  <div className="font-bold text-purple-300 text-sm mb-1">Perfect For:</div>
                  <div className="text-xs text-white/80">Product details, articles, reference data</div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-500/20 rounded-xl p-8 border border-yellow-400/30">
              <h4 className="text-2xl font-bold text-yellow-300 mb-6">🎯 Choosing the Right Strategy</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-yellow-900/50 rounded-lg p-4">
                  <div className="font-bold text-blue-300 mb-2">Write-Through</div>
                  <div className="text-sm text-white/80">When data consistency is critical and you can tolerate slower writes</div>
                </div>
                <div className="bg-yellow-900/50 rounded-lg p-4">
                  <div className="font-bold text-green-300 mb-2">Write-Back</div>
                  <div className="text-sm text-white/80">When write performance is critical and some data loss is acceptable</div>
                </div>
                <div className="bg-yellow-900/50 rounded-lg p-4">
                  <div className="font-bold text-purple-300 mb-2">Read-Through</div>
                  <div className="text-sm text-white/80">When you want automatic cache management and can handle occasional slow reads</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      bgGradient: 'from-blue-600 to-purple-600'
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
  
  export default Class5Slides;