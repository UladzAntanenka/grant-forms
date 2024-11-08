import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from './context/LanguageContext';
import './Form.css';
import ProgressBar from './components/ProgressBar';

function Form() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    initiativeName: '',
    phone: '',
    email: '',
    grantType: '',
    projectDescription: '',
    budget: '',
    additionalDocs: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData(prev => ({
        ...prev,
        [name]: files[0]
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/metrics');
  };

  return (
    <div className="form-wrapper">
      <ProgressBar currentStep={2} />
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>{t.form.initiativeName}</label>
            <input
              type="text"
              name="initiativeName"
              value={formData.initiativeName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>{t.form.phone}</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>{t.form.email}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>{t.form.grantType}</label>
            <select 
              name="grantType" 
              value={formData.grantType}
              onChange={handleChange}
            >
              <option value="">{t.form.selectGrantType}</option>
              <option value="mini">{t.form.miniGrant}</option>
              <option value="midi">{t.form.midiGrant}</option>
            </select>
          </div>

          <div className="form-group">
            <label>{t.form.projectDescription}</label>
            <textarea
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              rows="10"
              placeholder={t.form.projectDescriptionPlaceholder}
            />
          </div>

          <div className="form-group">
            <label>{t.form.budget}</label>
            <input
              type="file"
              name="budget"
              onChange={handleChange}
              accept=".pdf,.doc,.docx,.xls,.xlsx"
            />
          </div>

          <div className="form-group">
            <label>{t.form.additionalDocs}</label>
            <input
              type="file"
              name="additionalDocs"
              onChange={handleChange}
              multiple
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
            />
          </div>

          <div className="form-navigation">
            <button 
              type="button" 
              onClick={() => navigate('/')}
              className="btn-secondary"
            >
              {t.back}
            </button>
            <button type="submit" className="btn-primary">
              {t.next}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form; 