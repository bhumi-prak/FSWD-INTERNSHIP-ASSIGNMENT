import React from 'react';

const PasswordStrength = ({ metrics }) => {
  const { level, color, score, checks } = metrics;

  const criteria = [
    { key: 'length', label: 'At least 8 characters', met: checks.length },
    { key: 'upper', label: 'One uppercase letter', met: checks.upper },
    { key: 'lower', label: 'One lowercase letter', met: checks.lower },
    { key: 'number', label: 'One number', met: checks.number },
    { key: 'special', label: 'One special character (!@#$ etc.)', met: checks.special },
  ];

  return (
    <div className="password-strength">
      <div className="strength-header">
        <span>Password Strength</span>
        <span style={{ color }}>{level}</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${(score / 5) * 100}%`,
            backgroundColor: color,
          }}
        />
      </div>

      <ul className="criteria-list">
        {criteria.map((item) => (
          <li key={item.key} className={item.met ? 'met' : 'not-met'}>
            {item.met ? '✅' : '❌'} {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordStrength;