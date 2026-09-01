import React from 'react';
import './ResultCard.css';

/**
 * Left Panel Component
 * Displays:
 * - Overall score with animated circular progress
 * - Rating text
 * - Percentile information
 */
const ResultCard = ({ score, maxScore, rating, percentile }) => {
  const percentage = (score / maxScore) * 100;

  return (
    <div className="result-card">
      <h2 className="result-title">Your Result</h2>
      
      {/* Animated Circular Progress */}
      <div className="score-circle">
        <svg className="progress-ring" viewBox="0 0 120 120">
          {/* Background circle */}
          <circle
            className="progress-ring-bg"
            cx="60"
            cy="60"
            r="54"
            fill="none"
            strokeWidth="8"
            stroke="rgba(255, 255, 255, 0.2)"
          />
          {/* Progress circle - animates based on score percentage */}
          <circle
            className="progress-ring-progress"
            cx="60"
            cy="60"
            r="54"
            fill="none"
            strokeWidth="8"
            stroke="white"
            strokeDasharray={`${2 * Math.PI * 54}`}
            strokeDashoffset={`${2 * Math.PI * 54 * (1 - percentage / 100)}`}
            strokeLinecap="round"
            transform="rotate(-90 60 60)"
          />
        </svg>
        {/* Score text overlay */}
        <div className="score-text">
          <div className="score-number">{score}</div>
          <div className="score-max">of {maxScore}</div>
        </div>
      </div>

      {/* Rating and Percentile Text */}
      <h3 className="rating">{rating}</h3>
      <p className="percentile-text">
        You scored higher than {percentile}% of the people who have taken these tests.
      </p>
    </div>
  );
};

export default ResultCard;
