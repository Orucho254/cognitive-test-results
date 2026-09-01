import React, { useState } from 'react';
import CognitiveTestResults from './components/CognitiveTestResults';
import './App.css';

function App() {
  const [testData] = useState({
    overallScore: 76,
    maxScore: 100,
    rating: 'Great',
    percentile: 65,
    skills: [
      {
        id: 1,
        name: 'Reaction',
        score: 80,
        maxScore: 100,
        color: '#FF6B6B',
        icon: '⚡'
      },
      {
        id: 2,
        name: 'Memory',
        score: 92,
        maxScore: 100,
        color: '#FFA500',
        icon: '🧠'
      },
      {
        id: 3,
        name: 'Verbal',
        score: 61,
        maxScore: 100,
        color: '#20C997',
        icon: '💬'
      },
      {
        id: 4,
        name: 'Visual',
        score: 73,
        maxScore: 100,
        color: '#4C63FF',
        icon: '👁️'
      }
    ]
  });

  return (
    <div className="app">
      <CognitiveTestResults data={testData} />
    </div>
  );
}

export default App;
