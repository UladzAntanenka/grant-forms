import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './ProgressBar.css';

function ProgressBar({ currentStep }) {
  const { t } = useLanguage();

  const steps = [
    t.progress.info,
    t.progress.form,
    t.progress.metrics
  ];

  return (
    <div className="progress-container">
      <div className="progress-bar">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`progress-step ${index + 1 <= currentStep ? 'active' : ''}`}
          >
            <div className="step-number">{index + 1}</div>
            <div className="step-label">{step}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressBar; 