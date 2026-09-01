import React from 'react';
import './SkillBar.css';

/**
 * Individual Skill Component
 * Used by ScoreSummary - renders one skill bar
 * Displays:
 * - Skill icon
 * - Skill name
 * - Score (current/max)
 * - Animated progress bar with skill-specific color
 */
const SkillBar = ({ skill }) => {
  const percentage = (skill.score / skill.maxScore) * 100;

  return (
    <div className="skill-bar-container">
      {/* Header: Icon, Name, Score */}
      <div className="skill-header">
        <span className="skill-icon">{skill.icon}</span>
        <span className="skill-name">{skill.name}</span>
        <span className="skill-score">{skill.score} / {skill.maxScore}</span>
      </div>
      
      {/* Progress Bar - animates to show percentage */}
      <div className="progress-bar-bg">
        <div 
          className="progress-bar-fill" 
          style={{ 
            width: `${percentage}%`,
            backgroundColor: skill.color
          }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
