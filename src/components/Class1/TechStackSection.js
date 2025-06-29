import React from 'react';
import { techStack } from '../../data/courseData';

const TechStackSection = () => {
  const categories = {
    Frontend: { color: 'bg-blue-100 text-blue-800', icon: '🎨' },
    Backend: { color: 'bg-green-100 text-green-800', icon: '⚙️' },
    Database: { color: 'bg-purple-100 text-purple-800', icon: '🗄️' },
    Auth: { color: 'bg-red-100 text-red-800', icon: '🔐' },
    Deployment: { color: 'bg-yellow-100 text-yellow-800', icon: '🚀' }
  };

  const groupedTech = techStack.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {});

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Technologies You'll Master
          </h2>
          <p className="text-xl text-gray-600">
            Learn industry-standard tools and frameworks used by professional developers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(groupedTech).map(([category, technologies]) => (
            <div key={category} className="card p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{categories[category].icon}</span>
                <h3 className="text-xl font-semibold text-gray-900">{category}</h3>
              </div>
              
              <div className="space-y-3">
                {technologies.map((tech) => (
                  <div key={tech.name} className="flex items-center justify-between">
                    <span className="font-medium text-gray-700">{tech.name}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${categories[category].color}`}>
                      Week {tech.week}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Path Timeline */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Your Learning Journey
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { phase: "Foundation", weeks: "1-2", tech: "HTML, CSS, JS, React" },
                { phase: "Frontend", weeks: "3-4", tech: "State, Routing, Context" },
                { phase: "Backend", weeks: "5-7", tech: "Node, Express, MongoDB, Auth" },
                { phase: "Full-Stack", weeks: "8-12", tech: "Integration & Deployment" }
              ].map((phase, index) => (
                <div key={phase.phase} className="text-center">
                  <div className="bg-primary-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-3">
                    {index + 1}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{phase.phase}</h4>
                  <p className="text-sm text-gray-600 mb-2">Weeks {phase.weeks}</p>
                  <p className="text-xs text-gray-500">{phase.tech}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection; 