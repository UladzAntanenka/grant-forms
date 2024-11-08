import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button 
        className={language === 'be' ? 'active' : ''} 
        onClick={() => setLanguage('be')}
      >
        🇧🇾 BY
      </button>
      <button 
        className={language === 'ru' ? 'active' : ''} 
        onClick={() => setLanguage('ru')}
      >
        🇷🇺 RU
      </button>
    </div>
  );
}

export default LanguageSwitcher; 