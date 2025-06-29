import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Class1/Hero';
import WeeklyOverview from '../components/Class1/WeeklyOverview';
import TechStackSection from '../components/Class1/TechStackSection';
import CourseStats from '../components/Class1/CourseStats';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CourseStats />
      <TechStackSection />
      <WeeklyOverview />
      
      {/* Call to Action */}
      <section className="bg-primary-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your MERN Journey?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Jump into any class session to explore the curriculum, assignments, and interactive content.
          </p>
          <Link
            to="/class/1"
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors inline-block"
          >
            Start with Class 1 →
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            CS390 Web Application Programming • 12-Week MERN Stack Course
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage; 