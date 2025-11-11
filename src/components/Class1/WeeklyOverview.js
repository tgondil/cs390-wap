import React from 'react';
import { Link } from 'react-router-dom';
import { courseData } from '../../data/courseData';

const WeeklyOverview = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Complete Course Breakdown
          </h2>
          <p className="text-xl text-gray-600">
            {courseData.totalClasses} interactive class sessions organized into {courseData.weeks.length} comprehensive weeks
          </p>
        </div>

        <div className="space-y-8">
          {courseData.weeks.map((week) => (
            <div key={week.week} className="card p-8">
              {/* Week Header */}
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <div className="bg-primary-600 text-white rounded-lg px-3 py-1 text-sm font-semibold mr-4">
                    Week {week.week}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {week.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-lg">
                  {week.description}
                </p>
                {/* Holiday Notice */}
                {week.holiday && (
                  <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center">
                      <span className="text-yellow-600 mr-2">🎃</span>
                      <span className="text-yellow-800 font-medium text-sm">
                        {week.holiday}
                      </span>
                    </div>
                  </div>
                )}
                {/* PSO Links */}
                {week.week === 1 && (
                  <div className="mt-4">
                    <Link
                      to="/pso/css-diner"
                      className="inline-flex items-center px-4 py-2 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition-colors font-medium text-sm"
                    >
                      🎯 PSO: CSS Diner Interactive Exercise →
                    </Link>
                  </div>
                )}
                {week.week === 2 && (
                  <div className="mt-4">
                    <Link
                      to="/pso/untrusted"
                      className="inline-flex items-center px-4 py-2 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition-colors font-medium text-sm"
                    >
                      🕹️ PSO: Untrusted (JS Puzzle) →
                    </Link>
                  </div>
                )}
                {week.week === 4 && (
                  <div className="mt-4">
                    <Link
                      to="/pso/wordle"
                      className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-sm"
                    >
                      🎯 PSO: Wordle Clone (Mini Project 1) →
                    </Link>
                  </div>
                )}
                {week.week === 5 && (
                  <div className="mt-4">
                    <Link
                      to="/pso/wordle2"
                      className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium text-sm"
                    >
                      🧠 PSO: Wordle Solutions Deep Dive →
                    </Link>
                  </div>
                )}
                {week.week === 6 && (
                  <div className="mt-4">
                    <Link
                      to="/pso/leetcode"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                    >
                      💻 PSO: LeetCode in JavaScript →
                    </Link>
                  </div>
                )}
                {week.week === 7 && (
                  <div className="mt-4">
                    <Link
                      to="/pso/chat"
                      className="inline-flex items-center px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors font-medium text-sm"
                    >
                      💬 PSO: Chat API (Pair Programming) →
                    </Link>
                  </div>
                )}
                {week.week === 8 && (
                  <div className="mt-4">
                    <Link
                      to="/pso/podcast"
                      className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium text-sm"
                    >
                      🎙️ PSO: AI Podcast Generator (Mini Project 2) →
                    </Link>
                  </div>
                )}
                {week.week === 9 && (
                  <div className="mt-4">
                    <Link
                      to="/pso/podcast-depth"
                      className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium text-sm"
                    >
                      🎯 Deep Dive Workshop: Implementation Guide →
                    </Link>
                  </div>
                )}
                {week.week === 11 && (
                  <div className="mt-4">
                    <Link
                      to="/pso/login"
                      className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium text-sm"
                    >
                      🔐 PSO: Secure Login (bcrypt & MongoDB) →
                    </Link>
                  </div>
                )}
                {week.week === 12 && (
                  <div className="mt-4">
                    <Link
                      to="/pso/makeup"
                      className="inline-flex items-center px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors font-medium text-sm"
                    >
                      🎯 PSO: Makeup Opportunity (Last Chance!) →
                    </Link>
                  </div>
                )}
              </div>

              {/* Classes in this week */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {week.classes.map((classItem) => (
                  <div key={classItem.classNumber} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center mb-2">
                          <span className="bg-secondary-100 text-secondary-800 text-sm font-medium px-2 py-1 rounded mr-3">
                            Class {classItem.classNumber}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">
                          {classItem.title}
                        </h4>
                        {courseData.classDates && courseData.classDates[classItem.classNumber] && (
                          <div className="text-sm text-gray-500">
                            {courseData.classDates[classItem.classNumber]}
                          </div>
                        )}
                      </div>
                      <Link
                        to={`/class/${classItem.classNumber}`}
                        className="btn btn-primary text-sm"
                      >
                        Enter Class →
                      </Link>
                    </div>

                    {/* Learning Objectives Preview */}
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-gray-700 mb-2">Key Objectives:</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {classItem.objectives.slice(0, 2).map((objective, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-secondary-500 mr-2">•</span>
                            {objective}
                          </li>
                        ))}
                        {classItem.objectives.length > 2 && (
                          <li className="text-gray-500 italic">
                            + {classItem.objectives.length - 2} more objectives...
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Tools & Topics */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {classItem.toolsIntroduced.slice(0, 3).map((tool) => (
                        <span
                          key={tool}
                          className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                      {classItem.toolsIntroduced.length > 3 && (
                        <span className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded-full">
                          +{classItem.toolsIntroduced.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Homework Preview */}
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Homework: </span>
                      {classItem.homework.length > 60 
                        ? `${classItem.homework.substring(0, 60)}...` 
                        : classItem.homework
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Navigation */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Quick Class Navigation
          </h3>
          <div className="grid grid-cols-6 md:grid-cols-12 gap-2 max-w-4xl mx-auto">
            {Array.from({ length: courseData.totalClasses }, (_, i) => i + 1).map((classNum) => (
              <Link
                key={classNum}
                to={`/class/${classNum}`}
                className="bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 rounded-lg p-3 text-sm font-medium transition-colors duration-200"
              >
                {classNum}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyOverview; 