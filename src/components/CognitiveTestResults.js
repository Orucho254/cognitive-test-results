import React from 'react';
import ResultCard from './ResultCard';
import ScoreSummary from './ScoreSummary';
import './CognitiveTestResults.css';

/**
 * Main Container Component
 * Links all components together:
 * - ResultCard (Left): Shows overall score with animated circle
 * - ScoreSummary (Right): Shows individual skills
 */
const CognitiveTestResults = ({ data }) => {
  return (
    <div className="cognitive-test-container">
      <div className="results-wrapper">
        {/* Left Panel - Overall Score */}
        <ResultCard 
          score={data.overallScore}
          maxScore={data.maxScore}
          rating={data.rating}
          percentile={data.percentile}
        />
        
        {/* Right Panel - Skills Summary */}
        <ScoreSummary skills={data.skills} />
      </div>
    </div>
  );
};

export default CognitiveTestResults;
