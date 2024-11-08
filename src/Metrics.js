import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext';
import './Metrics.css';
import ProgressBar from './components/ProgressBar';

function Metrics() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    location: '',
    audience: '',
    audienceOther: '',
    projectDates: {
      start: '',
      end: ''
    },
    budget: '',
    teamSize: '',
    experience: '',
    projectType: []
  });

  const locations = [
    { value: 'BY', label: 'Беларусь', flag: '🇧🇾' },
    { value: 'PL', label: 'Польшча', flag: '🇵🇱' },
    { value: 'LT', label: 'Літва', flag: '🇱🇹' },
    { value: 'DE', label: 'Германія', flag: '🇩🇪' }
  ];

  const audiences = [
    { value: 'BY', label: 'Беларусь', flag: '🇧🇾' },
    { value: 'PL', label: 'Польшча', flag: '🇵🇱' },
    { value: 'LT', label: 'Літва', flag: '🇱🇹' },
    { value: 'EU', label: 'ЕС', flag: '🇪🇺' },
    { value: 'OTHER', label: 'Іншае', flag: '🌍' }
  ];

  const teamSizes = [
    '1 чалавек',
    '2-5 чалавек',
    '6-10 чалавек',
    '10-15 чалавек',
    '15+ чалавек'
  ];

  const experienceYears = [
    '1 год',
    '2 гады',
    '3 гады',
    '4 гады',
    '5 гадоў'
  ];

  const projectTypes = [
    { value: 'creative', label: 'Творчы', emoji: '🎨' },
    { value: 'humanitarian', label: 'Гуманітарны', emoji: '🤝' },
    { value: 'social', label: 'Сацыяльны', emoji: '👥' },
    { value: 'educational', label: 'Адукацыйны', emoji: '📚' },
    { value: 'cultural', label: 'Культурны', emoji: '🎭' },
    { value: 'media', label: 'Медыя', emoji: '📱' },
    { value: 'rights', label: 'Правы чалавека', emoji: '⚖️' }
  ];

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Отправленные данные:', formData);
    alert('Заяўка паспяхова адпраўлена!');
    navigate('/');
  };

  return (
    <div className="metrics-wrapper">
      <ProgressBar currentStep={3} />
      <div className="metrics-container">
        <form onSubmit={handleSubmit}>
          {/* Локация */}
          <div className="form-section">
            <h3>{t.metrics.location}</h3>
            <div className="options-grid">
              {locations.map(loc => (
                <div
                  key={loc.value}
                  className={`option-block ${formData.location === loc.value ? 'selected' : ''}`}
                  onClick={() => handleChange('location', loc.value)}
                >
                  <span className="option-flag">{loc.flag}</span>
                  <span className="option-label">{loc.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Аудитория */}
          <div className="form-section">
            <h3>{t.metrics.audience}</h3>
            <div className="options-grid">
              {audiences.map(aud => (
                <div
                  key={aud.value}
                  className={`option-block ${formData.audience === aud.value ? 'selected' : ''}`}
                  onClick={() => handleChange('audience', aud.value)}
                >
                  <span className="option-flag">{aud.flag}</span>
                  <span className="option-label">{aud.label}</span>
                </div>
              ))}
            </div>
            {formData.audience === 'OTHER' && (
              <input
                type="text"
                className="other-input"
                value={formData.audienceOther}
                onChange={(e) => handleChange('audienceOther', e.target.value)}
                placeholder={t.metrics.otherPlaceholder}
              />
            )}
          </div>

          {/* Сроки проекта */}
          <div className="form-section">
            <h3>{t.metrics.projectDates}</h3>
            <div className="date-inputs">
              <div>
                <label>{t.metrics.startDate}</label>
                <input
                  type="date"
                  value={formData.projectDates.start}
                  onChange={(e) => handleChange('projectDates', {
                    ...formData.projectDates,
                    start: e.target.value
                  })}
                />
              </div>
              <div>
                <label>{t.metrics.endDate}</label>
                <input
                  type="date"
                  value={formData.projectDates.end}
                  onChange={(e) => handleChange('projectDates', {
                    ...formData.projectDates,
                    end: e.target.value
                  })}
                />
              </div>
            </div>
          </div>

          {/* Бюджет */}
          <div className="form-section">
            <h3>Запрашываемы бюджэт</h3>
            <input
              type="number"
              className="budget-input"
              value={formData.budget}
              onChange={(e) => handleChange('budget', e.target.value)}
              placeholder="Увядзіце суму ў еўра"
            />
          </div>

          {/* Размер команды */}
          <div className="form-section">
            <h3>{t.metrics.teamSize}</h3>
            <div className="options-grid">
              {teamSizes.map(size => (
                <div
                  key={size}
                  className={`option-block ${formData.teamSize === size ? 'selected' : ''}`}
                  onClick={() => handleChange('teamSize', size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Опыт работы */}
          <div className="form-section">
            <h3>{t.metrics.experience}</h3>
            <div className="options-grid">
              {experienceYears.map(year => (
                <div
                  key={year}
                  className={`option-block ${formData.experience === year ? 'selected' : ''}`}
                  onClick={() => handleChange('experience', year)}
                >
                  {year}
                </div>
              ))}
            </div>
          </div>

          {/* Тип проекта */}
          <div className="form-section">
            <h3>{t.metrics.projectType}</h3>
            <div className="options-grid">
              {projectTypes.map(type => (
                <div
                  key={type.value}
                  className={`option-block ${formData.projectType.includes(type.value) ? 'selected' : ''}`}
                  onClick={() => {
                    const newTypes = formData.projectType.includes(type.value)
                      ? formData.projectType.filter(t => t !== type.value)
                      : [...formData.projectType, type.value];
                    handleChange('projectType', newTypes);
                  }}
                >
                  <span className="option-emoji">{type.emoji}</span>
                  <span className="option-label">{type.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="form-navigation">
            <button 
              type="button" 
              onClick={() => navigate('/form')}
              className="btn-secondary"
            >
              {t.back}
            </button>
            <button type="submit" className="btn-submit">
              {t.submit}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Metrics;