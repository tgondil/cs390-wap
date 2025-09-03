import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courseData } from '../data/courseData';
import Class1Slides from '../components/classes/class-1/Slides';
import Class2Slides from '../components/classes/class-2/Slides';
import Class3Slides from '../components/classes/class-3/Slides';

const ClassPage = () => {
  const { classNumber } = useParams();
  const classNum = parseInt(classNumber);
  
  // Special handling for Class 1 and 2 - use slide presentations
  if (classNum === 1) {
    return <Class1Slides />;
  }
  
  if (classNum === 2) {
    return <Class2Slides />;
  }
  
  if (classNum === 3) {
    return <Class3Slides />;
  }
  
  // Find the specific class data
  const findClassData = () => {
    for (const week of courseData.weeks) {
      const classItem = week.classes.find(c => c.classNumber === classNum);
      if (classItem) {
        return { week, classItem };
      }
    }
    return null;
  };

  const data = findClassData();
  
  if (!data) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Class Not Found</h1>
        <p className="text-gray-600 mb-8">
          The class you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn btn-primary">
          ← Back to Course Home
        </Link>
      </div>
    );
  }

  const { week, classItem } = data;
  
  // Navigation helpers
  const prevClass = classNum > 1 ? classNum - 1 : null;
  const nextClass = classNum < courseData.totalClasses ? classNum + 1 : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Class Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <span className="bg-primary-600 text-white px-3 py-1 rounded-lg text-sm font-semibold mr-4">
                Week {week.week}
              </span>
              <span className="bg-secondary-100 text-secondary-800 px-3 py-1 rounded-lg text-sm font-semibold">
                Class {classItem.classNumber}
              </span>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {classItem.title}
          </h1>
          {courseData.classDates && courseData.classDates[classItem.classNumber] && (
            <div className="text-gray-500">
              {courseData.classDates[classItem.classNumber]}
            </div>
          )}
          
          <p className="text-xl text-gray-600 mt-4">
            {week.description}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Learning Objectives */}
            <div className="card p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                🎯 Learning Objectives
              </h2>
              <ul className="space-y-3">
                {classItem.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-secondary-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Topics Covered */}
            <div className="card p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                📚 Topics Covered
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {classItem.topics.map((topic, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3">
                    <span className="text-gray-700">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Slides Section - Placeholder */}
            <div className="card p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                🎥 Class Slides
              </h2>
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <div className="text-4xl mb-4">📊</div>
                <p className="text-gray-600 mb-4">
                  Interactive slides will be embedded here
                </p>
                <button className="btn btn-primary">
                  Launch Slides
                </button>
              </div>
            </div>

            {/* Interactive Assignment - Placeholder */}
            <div className="card p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                💻 Interactive Assignment
              </h2>
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <div className="text-4xl mb-4">⚡</div>
                <p className="text-gray-600 mb-4">
                  Hands-on coding exercises and quizzes will appear here
                </p>
                <button className="btn btn-secondary">
                  Start Assignment
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tools Introduced */}
            <div className="card p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                🛠️ Tools Introduced
              </h3>
              <div className="space-y-2">
                {classItem.toolsIntroduced.map((tool, index) => (
                  <div key={index} className="bg-primary-50 text-primary-700 px-3 py-2 rounded-lg text-sm font-medium">
                    {tool}
                  </div>
                ))}
              </div>
            </div>

            {/* Homework */}
            <div className="card p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                📝 Homework
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {classItem.homework}
              </p>
            </div>

            {/* Class Navigation */}
            <div className="card p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                🧭 Navigation
              </h3>
              <div className="space-y-3">
                {prevClass && (
                  <Link
                    to={`/class/${prevClass}`}
                    className="block w-full btn btn-secondary text-left"
                  >
                    ← Class {prevClass}
                  </Link>
                )}
                {nextClass && (
                  <Link
                    to={`/class/${nextClass}`}
                    className="block w-full btn btn-primary text-left"
                  >
                    Class {nextClass} →
                  </Link>
                )}
                <Link
                  to="/"
                  className="block w-full btn btn-secondary text-center"
                >
                  Course Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassPage; 