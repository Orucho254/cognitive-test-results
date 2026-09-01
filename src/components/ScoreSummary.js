import React from 'react';
import SkillBar from './SkillBar';
import './ScoreSummary.css';

/**
 * Right Panel Component
 * Links to SkillBar components
 * Displays:
 * - Summary title
 * - Multiple SkillBar components (one per skill)
 * - Continue button
 */
const ScoreSummary = ({ skills }) => {
  const handleContinue = () => {
    alert('Continue button clicked! Ready to proceed to the next step.');
    // Add your navigation logic here
  };

  return (
    <div className="score-summary">
      <h2 className="summary-title">Summary</h2>
      
      {/* Skills Container - Maps through skills and renders SkillBar for each */}
      <div className="skills-container">
        {skills.map((skill) => (
          <SkillBar key={skill.id} skill={skill} />
        ))}
      </div>

      {/* Continue Button */}
      <button className="continue-btn" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
};

export default ScoreSummary;
