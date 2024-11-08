import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Info.css';

// Card компонент
const Card = ({ children, className = '', ...props }) => (
  <motion.div 
    className={`card ${className}`} 
    whileHover={{ scale: 1.02 }}
    {...props}
  >
    {children}
  </motion.div>
);

// CardHeader компонент
const CardHeader = ({ children }) => (
  <div className="card-header">
    {children}
  </div>
);

// CardTitle компонент
const CardTitle = ({ children }) => (
  <h2 className="card-title">
    {children}
  </h2>
);

// CardContent компонент
const CardContent = ({ children }) => (
  <div className="card-content">
    {children}
  </div>
);

// Accordion компоненты
const AccordionContext = React.createContext();

const Accordion = ({ children, type = "single" }) => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (value) => {
    setOpenItems(prev => {
      const newItems = new Set(prev);
      if (type === "single") {
        newItems.clear();
      }
      if (newItems.has(value)) {
        newItems.delete(value);
      } else {
        newItems.add(value);
      }
      return newItems;
    });
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className="accordion">
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({ children, value }) => {
  const { openItems, toggleItem } = React.useContext(AccordionContext);
  const isOpen = openItems.has(value);

  return (
    <div className="accordion-item">
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { isOpen, value, onToggle: () => toggleItem(value) });
        }
        return child;
      })}
    </div>
  );
};

const AccordionTrigger = ({ children, isOpen, onToggle }) => (
  <button 
    className="accordion-trigger"
    onClick={onToggle}
  >
    {children}
    <span className={`arrow ${isOpen ? 'open' : ''}`}>▼</span>
  </button>
);

const AccordionContent = ({ children, isOpen }) => (
  isOpen && <div className="accordion-content">{children}</div>
);

// Основной компонент
function Info() {
  const navigate = useNavigate();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const handleDownloadDoc1 = () => {
    // Логика скачивания первого документа
  };

  const handleDownloadDoc2 = () => {
    // Логика скачивания второго документа
  };

  return (
    <motion.div 
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.header className="header" variants={itemVariants}>
        <h1>🌟 Фонд BYSOL: Прыём заявак на грантынг 🌟</h1>
        <p>
          🚀 Падтрымка праектаў, накіраваных на вырашэнне сацыяльна-палітычных праблем у Беларусі...
        </p>
      </motion.header>

      {/* Карточка "Кто может участвовать" */}
      <Card variants={itemVariants}>
        <CardHeader>
          <CardTitle>👥 Хто можа ўдзельнічаць?</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Контент */}
        </CardContent>
      </Card>

      {/* Аккордеон */}
      <Accordion type="single">
        <AccordionItem value="what-can-be-supported">
          <AccordionTrigger>🎯 Што можа быць падтрымана?</AccordionTrigger>
          <AccordionContent>
            {/* Контент */}
          </AccordionContent>
        </AccordionItem>
        {/* Другие элементы аккордеона */}
      </Accordion>

      {/* Кнопки для скачивания */}
      <div className="download-buttons">
        <button onClick={handleDownloadDoc1} className="download-button">
          <span className="download-icon">📄</span>
          Спампаваць дакумент 1
        </button>
        <button onClick={handleDownloadDoc2} className="download-button">
          <span className="download-icon">📄</span>
          Спампаваць дакумент 2
        </button>
      </div>

      {/* Кнопка навигации */}
      <motion.div className="navigation-buttons" variants={itemVariants}>
        <button 
          onClick={() => navigate('/form')} 
          className="next-button"
        >
          🚀 Падаць заяўку
        </button>
      </motion.div>
    </motion.div>
  );
}

export default Info;