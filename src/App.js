import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import './App.css';
import Form from './Form';
import Info from './Info';
import Metrics from './Metrics';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
          <LanguageSwitcher />
          <Routes>
            <Route path="/" element={<Info />} />
            <Route path="/form" element={<Form />} />
            <Route path="/metrics" element={<Metrics />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;