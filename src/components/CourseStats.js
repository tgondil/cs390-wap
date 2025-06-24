import React from 'react';
import { courseData } from '../data/courseData';

const CourseStats = () => {
  const stats = [
    {
      number: courseData.weeks.length,
      label: "Weeks of Learning",
      description: "Structured progression from basics to advanced",
      icon: "📅"
    },
    {
      number: courseData.totalClasses,
      label: "Interactive Classes",
      description: "Hands-on sessions with coding exercises",
      icon: "🎯"
    },
    {
      number: "5+",
      label: "Major Technologies",
      description: "MongoDB, Express, React, Node.js & more",
      icon: "🚀"
    },
    {
      number: "1",
      label: "Capstone Project",
      description: "Full-stack application deployed online",
      icon: "🏆"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Course at a Glance
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to become a full-stack web developer
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 text-sm">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseStats; 