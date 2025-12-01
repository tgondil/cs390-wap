import React, { useState } from 'react';

const GradesPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [grades, setGrades] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Google Apps Script Web App URL
  const APPS_SCRIPT_URL = process.env.REACT_APP_GRADES_API_URL || 'https://script.google.com/macros/s/AKfycbzePTL3xxjZMu5QiH3ju5z7nwpU9zfOSLHMa0Ob0_EEI8eLVaJ6Qb4tu75K0GO6brPz/exec';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setGrades(null);

    try {
      const url = `${APPS_SCRIPT_URL}?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
      
      const response = await fetch(url, {
        method: 'GET',
        redirect: 'follow'
      });

      const data = await response.json();

      if (data.success) {
        setGrades(data.grades);
      } else {
        setError(data.message || 'Invalid email or password');
      }
    } catch (err) {
      setError('Failed to fetch grades. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Categorize grades
  const categorizeGrades = (gradesData) => {
    if (!gradesData) return null;

    const psos = [];
    const miniProjects = [];
    const attendance = [];

    Object.entries(gradesData).forEach(([key, value]) => {
      if (key === 'name' || key === 'email') return;
      
      if (key.startsWith('PSO:')) {
        psos.push({ name: key.replace('PSO: ', ''), grade: value });
      } else if (key.startsWith('Mini Project')) {
        const projectNumber = key.includes('1') ? 1 : 2;
        miniProjects.push({ name: key, grade: value, number: projectNumber });
      } else if (key.match(/^\w{3}\s+\w{3}\s+\d{1,2}\s+\d{4}/)) {
        // Date format: "Mon Aug 25 2025 00:00:00 GMT-0400 (Eastern Daylight Time)"
        // Extract just the date part for display
        const dateMatch = key.match(/(\w{3}\s+\d{1,2}\s+\d{4})/);
        const displayDate = dateMatch ? dateMatch[1] : key;
        attendance.push({ date: displayDate, status: value, fullDate: key });
      }
    });

    return { psos, miniProjects, attendance };
  };

  const categorized = grades ? categorizeGrades(grades) : null;

  // Calculate PSO scores with drops
  const calculatePSOScore = () => {
    if (!categorized) return null;
    
    const psoScoresWithInfo = categorized.psos.map(p => {
      let score;
      if (!p.grade || p.grade === '-') {
        score = 0; // Treat "-" as 0
      } else if (p.grade === 1 || p.grade === '1') {
        score = 100; // Convert 1 to 100%
      } else {
        score = parseFloat(p.grade) || 0;
      }
      return { name: p.name, score };
    });
    
    // Sort by score ascending
    psoScoresWithInfo.sort((a, b) => a.score - b.score);
    
    // Drop 2 lowest
    const droppedItems = psoScoresWithInfo.slice(0, 2);
    const countedItems = psoScoresWithInfo.slice(2);
    
    const average = countedItems.length > 0 
      ? countedItems.reduce((a, b) => a + b.score, 0) / countedItems.length 
      : 0;
    
    return {
      allItems: psoScoresWithInfo,
      droppedNames: droppedItems.map(item => item.name),
      countedItems,
      average: average.toFixed(1)
    };
  };

  const psoScore = calculatePSOScore();

  // Calculate Mini Project Score
  const calculateMiniProjectScore = () => {
    const miniProjects = categorized?.miniProjects || [];
    if (miniProjects.length === 0) return { average: 0, projects: [] };
    
    const projectScores = miniProjects.map(project => {
      const maxScore = project.number === 1 ? 60 : 100;
      const grade = parseFloat(project.grade) || 0;
      const percentage = (grade / maxScore) * 100;
      return { name: project.name, grade, maxScore, percentage };
    });
    
    const average = projectScores.length > 0
      ? projectScores.reduce((sum, p) => sum + p.percentage, 0) / projectScores.length
      : 0;
    
    return { average, projects: projectScores };
  };

  // Calculate Attendance Score (drop 5 lowest)
  const calculateAttendanceScore = () => {
    const attendance = categorized?.attendance || [];
    if (attendance.length === 0) return { percentage: 100, absences: 0, droppedAbsences: 0 };
    
    const absenceCount = attendance.filter(record => {
      const status = record.status?.toString().toUpperCase();
      return status === 'A' || status === 'ABSENT' || status === '0' || status === 0;
    }).length;
    
    // Drop 5 absences
    const countedAbsences = Math.max(0, absenceCount - 5);
    const totalClasses = attendance.length;
    const attendedClasses = totalClasses - countedAbsences;
    const percentage = totalClasses > 0 ? (attendedClasses / totalClasses) * 100 : 100;
    
    return {
      percentage: percentage,
      absences: absenceCount,
      droppedAbsences: Math.min(5, absenceCount),
      countedAbsences: countedAbsences,
      totalClasses: totalClasses
    };
  };

  // Calculate Overall Grade
  const calculateOverallGrade = () => {
    const pso = parseFloat(psoScore?.average || 0);
    const miniProjects = calculateMiniProjectScore();
    const attendance = calculateAttendanceScore();
    
    // Weights: PSOs 35%, Mini Projects 25%, Capstone 30%, Attendance 10%
    // Since capstone isn't done yet, calculate relative to available components
    const psoWeight = 35;
    const miniProjectWeight = 25;
    const attendanceWeight = 10;
    // const capstoneWeight = 30; // Not available yet
    
    const totalAvailableWeight = psoWeight + miniProjectWeight + attendanceWeight;
    
    const weightedScore = 
      (pso * psoWeight) +
      (miniProjects.average * miniProjectWeight) +
      (attendance.percentage * attendanceWeight);
    
    const percentage = weightedScore / totalAvailableWeight;
    
    // Determine letter grade (97% is A+, 93% is A)
    let letterGrade = '';
    if (percentage >= 97) letterGrade = 'A+';
    else if (percentage >= 93) letterGrade = 'A';
    else if (percentage >= 90) letterGrade = 'A-';
    else if (percentage >= 87) letterGrade = 'B+';
    else if (percentage >= 83) letterGrade = 'B';
    else if (percentage >= 80) letterGrade = 'B-';
    else if (percentage >= 77) letterGrade = 'C+';
    else if (percentage >= 73) letterGrade = 'C';
    else if (percentage >= 70) letterGrade = 'C-';
    else if (percentage >= 67) letterGrade = 'D+';
    else if (percentage >= 63) letterGrade = 'D';
    else if (percentage >= 60) letterGrade = 'D-';
    else letterGrade = 'F';
    
    return {
      percentage: percentage.toFixed(1),
      letterGrade,
      components: {
        pso: pso.toFixed(1),
        miniProjects: miniProjects.average.toFixed(1),
        attendance: attendance.percentage.toFixed(1)
      }
    };
  };

  const attendanceScore = calculateAttendanceScore();
  const overallGrade = categorized ? calculateOverallGrade() : null;

  // Format attendance as calendar
  const formatAttendanceCalendar = () => {
    if (!categorized?.attendance) return [];
    
    // Group by month
    const byMonth = {};
    categorized.attendance.forEach(record => {
      const [month, day, year] = record.date.split(' ');
      const monthYear = `${month} ${year}`;
      if (!byMonth[monthYear]) byMonth[monthYear] = [];
      byMonth[monthYear].push({ day, status: record.status });
    });
    
    return Object.entries(byMonth);
  };

  const attendanceCalendar = categorized ? formatAttendanceCalendar() : [];

  return (
    <div className="h-[calc(100vh-64px)] bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-y-auto">
      <div className="max-w-7xl mx-auto p-4">
        {!grades ? (
          /* Login Card */
          <div className="min-h-[calc(100vh-96px)] flex items-center justify-center">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-3xl">📊</span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900">Grade Portal</h1>
                <p className="text-gray-600 mt-1">CS390 Web Application Programming</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
                    placeholder="Enter password"
                    required
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all disabled:opacity-50"
                >
                  {loading ? 'Loading...' : 'View Grades'}
                </button>
              </form>
            </div>
          </div>
        ) : (
          /* Grades Display - Everything on One Page */
          <div className="space-y-4 py-4">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold">{grades.name}</h2>
                  <p className="text-indigo-200">{grades.email}</p>
                </div>
                <button
                  onClick={() => {
                    setGrades(null);
                    setEmail('');
                    setPassword('');
                  }}
                  className="bg-white/20 hover:bg-white/30 text-white font-medium px-4 py-2 rounded-lg text-sm"
                >
                  Sign Out
                </button>
              </div>
            </div>

            {/* Grade Overview Cards */}
            {overallGrade && (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {/* PSO Score */}
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
                  <div className="text-5xl font-bold mb-2">{overallGrade.components.pso}%</div>
                  <div className="text-lg font-medium opacity-90">Weekly PSOs</div>
                  <div className="text-sm opacity-75 mt-1">35% of grade</div>
                </div>

                {/* Mini Projects Score */}
                <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg">
                  <div className="text-5xl font-bold mb-2">{overallGrade.components.miniProjects}%</div>
                  <div className="text-lg font-medium opacity-90">Mini-Projects</div>
                  <div className="text-sm opacity-75 mt-1">25% of grade</div>
                </div>

                {/* Attendance Score */}
                <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg">
                  <div className="text-5xl font-bold mb-2">{overallGrade.components.attendance}%</div>
                  <div className="text-lg font-medium opacity-90">Participation</div>
                  <div className="text-sm opacity-75 mt-1">10% of grade • {attendanceScore.droppedAbsences} absences dropped</div>
                </div>

                {/* Overall Grade */}
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="text-6xl font-bold mb-1">{overallGrade.letterGrade}</div>
                    <div className="text-3xl font-semibold mb-2">{overallGrade.percentage}%</div>
                    <div className="text-sm font-medium opacity-90">Current Grade</div>
                    <div className="text-xs opacity-75 mt-1">Based on completed work</div>
                  </div>
                  <div className="absolute top-0 right-0 text-9xl opacity-10 font-bold">
                    {overallGrade.letterGrade}
                  </div>
                </div>
              </div>
            )}

            {/* Extra Credit Notice */}
            {overallGrade && (
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <span className="font-semibold">Note:</span> This grade does not account for extra credit opportunities.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* PSO Assignments */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">🎯 PSO Assignments</h3>
                  {psoScore && (
                    <div className="text-right">
                      <div className="text-2xl font-bold text-indigo-600">{psoScore.average}%</div>
                      <div className="text-xs text-gray-500">2 lowest dropped</div>
                    </div>
                  )}
                </div>
                
                <div className="space-y-2">
                  {categorized?.psos.map((pso, index) => {
                    const isDropped = psoScore?.droppedNames.includes(pso.name);
                    const displayGrade = pso.grade === 1 || pso.grade === '1' ? '100%' : 
                                        (!pso.grade || pso.grade === '-') ? '0' : pso.grade;
                    
                    return (
                      <div
                        key={index}
                        className={`flex items-center justify-between p-3 rounded-lg ${
                          isDropped ? 'bg-gray-100 opacity-50' : 'bg-indigo-50'
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-gray-800">{pso.name}</span>
                          {isDropped && <span className="text-xs text-red-500 font-semibold">(dropped)</span>}
                        </div>
                        <div className={`text-lg font-bold ${isDropped ? 'text-gray-400 line-through' : 'text-indigo-600'}`}>
                          {displayGrade}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mini Projects */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🚀 Mini Projects</h3>
                <div className="space-y-3">
                  {categorized?.miniProjects.map((project, index) => {
                    const maxScore = project.number === 1 ? 60 : 100;
                    const percentage = project.grade ? ((parseFloat(project.grade) / maxScore) * 100).toFixed(1) : null;
                    
                    return (
                      <div key={index} className="bg-purple-50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-gray-800">{project.name}</span>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-purple-600">
                              {project.grade || '−'}/{maxScore}
                            </div>
                            {percentage && (
                              <div className="text-sm text-gray-600">{percentage}%</div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Attendance Calendar */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">📅 Attendance Calendar</h3>
                {attendanceScore && (
                  <div className="text-right">
                    <div className="text-sm text-gray-600">
                      {attendanceScore.absences} total absences • {attendanceScore.droppedAbsences} dropped
                    </div>
                    <div className="text-xs text-gray-500">
                      {attendanceScore.countedAbsences} counting against grade
                    </div>
                  </div>
                )}
              </div>
              
              {attendanceCalendar.length === 0 ? (
                <div className="text-center text-gray-500 py-8">No attendance records found</div>
              ) : (
                <div className="space-y-6">
                  {attendanceCalendar.map(([monthYear, days]) => (
                  <div key={monthYear}>
                    <div className="text-base font-bold text-indigo-600 mb-3">{monthYear}</div>
                    <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2">
                      {days.map((record, index) => {
                        const status = record.status?.toString().toUpperCase();
                        const isPresent = status === 'P' || status === 'PRESENT' || status === '1' || status === 1;
                        const isExcused = status === 'E' || status === 'EXCUSED';
                        const isAbsent = status === 'A' || status === 'ABSENT' || status === '0' || status === 0;
                        
                        return (
                          <div
                            key={index}
                            className={`rounded-lg flex flex-col items-center justify-center text-center p-2 border-2 ${
                              isPresent
                                ? 'bg-green-50 border-green-400'
                                : isExcused
                                ? 'bg-blue-50 border-blue-400'
                                : isAbsent
                                ? 'bg-red-50 border-red-400'
                                : 'bg-gray-50 border-gray-300'
                            }`}
                          >
                            <div className="text-xs font-medium text-gray-600 mb-1">{record.day}</div>
                            <div className={`text-xl font-bold ${
                              isPresent ? 'text-green-600' : isExcused ? 'text-blue-600' : isAbsent ? 'text-red-600' : 'text-gray-400'
                            }`}>
                              {isPresent ? 'P' : isExcused ? 'E' : isAbsent ? 'A' : '−'}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  ))}
                </div>
              )}

              {/* Legend */}
              {attendanceCalendar.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex flex-wrap gap-4 justify-center text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-green-100 border-2 border-green-400 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-green-600">P</span>
                    </div>
                    <span className="text-gray-700">Present</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-blue-100 border-2 border-blue-400 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-blue-600">E</span>
                    </div>
                    <span className="text-gray-700">Excused</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-red-100 border-2 border-red-400 rounded flex items-center justify-center">
                      <span className="text-xs font-bold text-red-600">A</span>
                    </div>
                    <span className="text-gray-700">Absent</span>
                  </div>
                </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GradesPage;
