import React from 'react';
import { courseData } from '../../data/courseData';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {courseData.title}
          </h1>
          <p className="text-2xl md:text-3xl text-primary-100 mb-8 font-light">
            {courseData.subtitle}
          </p>
          <p className="text-xl text-primary-100 mb-12 max-w-4xl mx-auto leading-relaxed">
            {courseData.description}
          </p>
          
          {/* Key Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-secondary-400 mb-2">
                {courseData.duration}
              </div>
              <div className="text-primary-100">
                Interactive Learning
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-secondary-400 mb-2">
                {courseData.totalClasses}
              </div>
              <div className="text-primary-100">
                Class Sessions
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-secondary-400 mb-2">
                MERN
              </div>
              <div className="text-primary-100">
                Full-Stack
              </div>
            </div>
          </div>
          
          {/* Tech Stack Preview */}
          <div className="mt-12">
            <p className="text-lg text-primary-200 mb-6">
              Master the complete web development stack:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'JWT Auth'].map((tech) => (
                <span
                  key={tech}
                  className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 