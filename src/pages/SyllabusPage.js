import React from 'react';

const Section = ({ title, children }) => (
  <section className="card p-6">
    <h2 className="text-2xl font-bold text-gray-900 mb-4">{title}</h2>
    <div className="prose prose-gray max-w-none">
      {children}
    </div>
  </section>
);

const SyllabusPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">CS390 Web Application Programming</h1>
          <p className="text-gray-600">Syllabus & Grading System</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Section title="Overview">
          <p>
            This course emphasizes learning by doing with a practical approach to full-stack web development.
            The grading system is designed to encourage continuous learning, experimentation, and growth throughout the journey.
          </p>
        </Section>

        <Section title="Grade Distribution">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="text-gray-700">
                  <th className="py-2 pr-4">Component</th>
                  <th className="py-2 pr-4">Percentage</th>
                  <th className="py-2 pr-4">Details</th>
                </tr>
              </thead>
              <tbody className="align-top text-gray-800">
                <tr>
                  <td className="py-2 pr-4 font-semibold">Weekly Homework</td>
                  <td className="py-2 pr-4">35%</td>
                  <td className="py-2 pr-4">11 weekly assignments (Week 12 is homework-free). Do your own work; integrity checks run on submissions.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Mini-Projects</td>
                  <td className="py-2 pr-4">25%</td>
                  <td className="py-2 pr-4">3 mini-projects focusing on integration, planning, and creativity. AI tools allowed.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Final Capstone Project</td>
                  <td className="py-2 pr-4">30%</td>
                  <td className="py-2 pr-4">Team-built full-stack MERN app presented at end of course.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Participation & Labs</td>
                  <td className="py-2 pr-4">10%</td>
                  <td className="py-2 pr-4">In-class activities, peer reviews, attendance, and engagement. Extra credit opportunities available.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="Participation & Labs (10% total)">
          <ul className="list-disc pl-5 space-y-1">
            <li><span className="font-semibold">Attendance (40%)</span>: Present and engaged during class</li>
            <li><span className="font-semibold">In-Class Activities (30%)</span>: Participation in coding exercises, pair programming</li>
            <li><span className="font-semibold">Peer Reviews (20%)</span>: Constructive feedback during code reviews and testing sessions</li>
            <li><span className="font-semibold">Class Engagement (10%)</span>: Questions, discussions, helping classmates</li>
          </ul>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Expectations</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Regular Attendance: More than 2 unexcused absences may result in course failure</li>
              <li>Active Participation: Engage in discussions, ask questions, share insights</li>
              <li>Collaborative Spirit: Help classmates, participate in peer reviews</li>
              <li>Professional Behavior: Respectful communication, constructive feedback</li>
            </ul>
          </div>
        </Section>

        <Section title="Mini-Projects (25% total)">
          <ol className="list-decimal pl-5 space-y-2">
            <li>
              <span className="font-semibold">Personal Portfolio SPA (Week 4) - 8.5%</span>
              <div>Higher standards; Context API, routing, responsive design; portfolio-ready.</div>
            </li>
            <li>
              <span className="font-semibold">Full-Stack Authentication App (Week 8) - 8.5%</span>
              <div>Integration milestone with proper authentication and clean UI.</div>
            </li>
            <li>
              <span className="font-semibold">Deployment & Production Ready App (Week 10) - 8%</span>
              <div>Live application with production-level quality and performance considerations.</div>
            </li>
          </ol>
        </Section>

        <Section title="Final Capstone Project (30% total)">
          <h3 className="text-lg font-semibold mb-2">Project Requirements</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Full-Stack MERN Application (React, Node.js, Express, MongoDB)</li>
            <li>Authentication System: User registration and login</li>
            <li>CRUD Operations</li>
            <li>Professional UI with Tailwind CSS</li>
            <li>Deployed Application (Vercel/Render)</li>
            <li>Clean, well-organized, documented code</li>
          </ul>
          <h3 className="text-lg font-semibold mt-4 mb-2">Grading Breakdown</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="text-gray-700">
                  <th className="py-2 pr-4">Component</th>
                  <th className="py-2 pr-4">Points</th>
                  <th className="py-2 pr-4">Criteria</th>
                </tr>
              </thead>
              <tbody className="align-top text-gray-800">
                <tr>
                  <td className="py-2 pr-4 font-semibold">Technical Implementation</td>
                  <td className="py-2 pr-4">40%</td>
                  <td className="py-2 pr-4">Functionality, code quality, architecture</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">User Interface & Experience</td>
                  <td className="py-2 pr-4">25%</td>
                  <td className="py-2 pr-4">Design, usability, responsiveness</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Presentation</td>
                  <td className="py-2 pr-4">20%</td>
                  <td className="py-2 pr-4">Demo quality, technical explanation, problem-solving discussion</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Innovation & Creativity</td>
                  <td className="py-2 pr-4">10%</td>
                  <td className="py-2 pr-4">Unique features, creative solutions</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-semibold">Documentation</td>
                  <td className="py-2 pr-4">5%</td>
                  <td className="py-2 pr-4">README quality, code comments, deployment instructions</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3 className="text-lg font-semibold mt-4 mb-2">Presentation Format (5–7 minutes)</h3>
          <ol className="list-decimal pl-5 space-y-1">
            <li>Problem Introduction (1 min)</li>
            <li>Live Demo (3–4 mins)</li>
            <li>Technical Discussion (1–2 mins)</li>
            <li>Q&A (1 min)</li>
          </ol>
        </Section>

        <Section title="Academic Integrity">
          <h3 className="text-lg font-semibold mb-2">Collaboration Policy</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Discuss concepts, help debug, share resources, peer reviews encouraged</li>
            <li>Not allowed: copying code without understanding, identical submissions, outsourcing work</li>
          </ul>
          <h3 className="text-lg font-semibold mt-4 mb-2">AI Usage Policy</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Allowed: learning concepts, debugging help, generating boilerplate</li>
            <li>Required: understand all submitted code, explain implementation, attribute significant AI help</li>
          </ul>
          <h3 className="text-lg font-semibold mt-4 mb-2">Plagiarism</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>First offense: Zero on assignment, required meeting</li>
            <li>Second offense: Course failure, academic probation referral</li>
          </ul>
        </Section>

        <Section title="Grading Scale">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="text-gray-700">
                  <th className="py-2 pr-4">Grade</th>
                  <th className="py-2 pr-4">Percentage Range</th>
                  <th className="py-2 pr-4">GPA Points</th>
                </tr>
              </thead>
              <tbody className="align-top text-gray-800">
                <tr><td className="py-2 pr-4 font-semibold">A+</td><td className="py-2 pr-4">97-100%</td><td className="py-2 pr-4">4.0</td></tr>
                <tr><td className="py-2 pr-4 font-semibold">A</td><td className="py-2 pr-4">93-96%</td><td className="py-2 pr-4">4.0</td></tr>
                <tr><td className="py-2 pr-4 font-semibold">A-</td><td className="py-2 pr-4">90-92%</td><td className="py-2 pr-4">3.7</td></tr>
                <tr><td className="py-2 pr-4 font-semibold">B+</td><td className="py-2 pr-4">87-89%</td><td className="py-2 pr-4">3.3</td></tr>
                <tr><td className="py-2 pr-4 font-semibold">B</td><td className="py-2 pr-4">83-86%</td><td className="py-2 pr-4">3.0</td></tr>
                <tr><td className="py-2 pr-4 font-semibold">B-</td><td className="py-2 pr-4">80-82%</td><td className="py-2 pr-4">2.7</td></tr>
                <tr><td className="py-2 pr-4 font-semibold">C+</td><td className="py-2 pr-4">77-79%</td><td className="py-2 pr-4">2.3</td></tr>
                <tr><td className="py-2 pr-4 font-semibold">C</td><td className="py-2 pr-4">73-76%</td><td className="py-2 pr-4">2.0</td></tr>
                <tr><td className="py-2 pr-4 font-semibold">C-</td><td className="py-2 pr-4">70-72%</td><td className="py-2 pr-4">1.7</td></tr>
                <tr><td className="py-2 pr-4 font-semibold">D</td><td className="py-2 pr-4">60-69%</td><td className="py-2 pr-4">1.0</td></tr>
                <tr><td className="py-2 pr-4 font-semibold">F</td><td className="py-2 pr-4">Below 60%</td><td className="py-2 pr-4">0.0</td></tr>
              </tbody>
            </table>
          </div>
        </Section>

        <Section title="Course Completion Requirements">
          <ol className="list-decimal pl-5 space-y-1">
            <li>Overall grade: 70% or higher</li>
            <li>No more than 2 unexcused absences</li>
            <li>Complete all homework through Week 8</li>
            <li>Submit and present capstone project</li>
            <li>No major academic integrity violations</li>
          </ol>
        </Section>

        <Section title="Extra Credit Opportunities (Selected)">
          <ul className="list-disc pl-5 space-y-1">
            <li>Open Source Contributions (up to +5%)</li>
            <li>Technical Blog Posts (up to +3%)</li>
            <li>Advanced Feature Implementation (up to +4%)</li>
            <li>Peer Tutoring Program (up to +3%)</li>
            <li>Lightning Talks (up to +2%)</li>
          </ul>
        </Section>

        <div className="text-sm text-gray-500">
          For complete details, see the GRADING_SYSTEM.md in the repository.
        </div>
      </div>
    </div>
  );
};

export default SyllabusPage; 