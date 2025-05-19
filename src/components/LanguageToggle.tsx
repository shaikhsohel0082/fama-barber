
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="language-toggle">
      <button onClick={toggleLanguage} aria-label="Toggle language">
        <Globe className="language-icon" />
        <span>{language === 'en' ? 'EN' : 'हिं'}</span>
      </button>
      
      <style>
        {`
        .language-toggle {
          position: fixed;
          bottom: 20px;
          left: 20px;
          z-index: 999;
        }
        
        .language-toggle button {
          display: flex;
          align-items: center;
          gap: 5px;
          width: auto;
          padding: 8px 12px;
          height: 40px;
          border-radius: 20px;
          background-color: var(--dark);
          border: 2px solid var(--gold);
          color: var(--gold);
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
        
        .language-toggle button:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }
        
        .language-icon {
          width: 18px;
          height: 18px;
          color: var(--gold);
        }
        
        body[data-theme='light'] .language-toggle button {
          background-color: var(--light);
          color: var(--gold);
        }
        `}
      </style>
    </div>
  );
};

export default LanguageToggle;
