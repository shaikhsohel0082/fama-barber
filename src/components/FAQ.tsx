
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FAQItem {
  questionKey: string;
  answerKey: string;
  keywords: string[];
}

const FAQ = () => {
  const { t, language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const faqItems: FAQItem[] = [
    {
      questionKey: "services-question",
      answerKey: "services-answer",
      keywords: ["services", "haircuts", "styling"]
    },
    {
      questionKey: "appointment-question",
      answerKey: "appointment-answer",
      keywords: ["booking", "appointment", "schedule"]
    },
    {
      questionKey: "haircut-time-question",
      answerKey: "haircut-time-answer",
      keywords: ["time", "duration", "haircuts"]
    },
    {
      questionKey: "payment-question",
      answerKey: "payment-answer",
      keywords: ["payment", "money", "pricing"]
    },
    {
      questionKey: "membership-question",
      answerKey: "membership-answer",
      keywords: ["membership", "loyalty", "discount"]
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // All unique keywords from the FAQ items
  const allKeywords = Array.from(
    new Set(faqItems.flatMap(item => item.keywords))
  ).sort();

  // Filter FAQ items based on search query and active filter
  const filteredFaqItems = faqItems.filter(item => {
    const questionText = t(item.questionKey);
    const answerText = t(item.answerKey);
    
    const matchesSearch = questionText.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          answerText.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilter = activeFilter ? item.keywords.includes(activeFilter) : true;
    
    return matchesSearch && matchesFilter;
  });

  // Toggle filter selection
  const handleFilterClick = (keyword: string) => {
    setActiveFilter(activeFilter === keyword ? null : keyword);
  };

  return (
    <section id="faq" className="faq section-padding">
      <div className="faq-container">
        <h4 className="subtitle">{t('got-questions')}</h4>
        <h2 className="section-title">{t('frequently-asked-questions')}</h2>
        
        <div className="faq-search-container">
          <div className="search-bar">
            <Search className="search-icon" />
            <input 
              type="text"
              placeholder={t('search-questions')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
          
          <div className="keyword-filters">
            {allKeywords.map((keyword, index) => (
              <button 
                key={index} 
                className={`keyword-filter ${activeFilter === keyword ? 'active' : ''}`}
                onClick={() => handleFilterClick(keyword)}
              >
                {keyword}
              </button>
            ))}
          </div>
        </div>
        
        <div className="faq-accordion">
          {filteredFaqItems.length > 0 ? (
            filteredFaqItems.map((item, index) => (
              <div 
                className={`faq-item ${activeIndex === index ? 'active' : ''}`} 
                key={index}
              >
                <div 
                  className="faq-question" 
                  onClick={() => toggleAccordion(index)}
                >
                  {t(item.questionKey)}
                  <span className="faq-icon">
                    {activeIndex === index ? '-' : '+'}
                  </span>
                </div>
                <div className={`faq-answer ${activeIndex === index ? 'open' : ''}`}>
                  <p>{t(item.answerKey)}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">{t('no-results')}</div>
          )}
        </div>
      </div>
      
      <style>
        {`
        .faq {
          background-color: var(--dark);
        }
        
        .faq-container {
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .faq-search-container {
          margin: 40px 0 30px;
        }
        
        .search-bar {
          position: relative;
          margin-bottom: 20px;
        }
        
        .search-icon {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--gold);
          width: 20px;
          height: 20px;
        }
        
        .search-input {
          width: 100%;
          padding: 15px 15px 15px 45px;
          border: 2px solid var(--gold);
          background-color: rgba(255, 255, 255, 0.05);
          color: var(--light);
          border-radius: 5px;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .search-input:focus {
          outline: none;
          box-shadow: 0 0 5px var(--gold);
        }
        
        .search-input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
        
        .keyword-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 25px;
        }
        
        .keyword-filter {
          padding: 8px 15px;
          background-color: transparent;
          border: 1px solid var(--gold);
          color: var(--gold);
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: capitalize;
          font-size: 0.9rem;
        }
        
        .keyword-filter:hover {
          background-color: rgba(212, 175, 55, 0.1);
        }
        
        .keyword-filter.active {
          background-color: var(--gold);
          color: var(--dark);
        }
        
        .faq-accordion {
          margin-top: 20px;
        }
        
        .faq-item {
          margin-bottom: 15px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .faq-question {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 0;
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--light);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .faq-question:hover {
          color: var(--gold);
        }
        
        .faq-icon {
          font-size: 1.5rem;
          color: var(--gold);
        }
        
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
          opacity: 0;
        }
        
        .faq-answer.open {
          max-height: 300px;
          opacity: 1;
          padding-bottom: 15px;
        }
        
        .faq-answer p {
          color: #aaa;
          line-height: 1.6;
        }
        
        .no-results {
          text-align: center;
          padding: 30px 0;
          color: var(--light);
          font-style: italic;
        }
        
        /* Dark/Light Theme Adjustments */
        body[data-theme='light'] .search-input {
          background-color: rgba(0, 0, 0, 0.05);
          color: var(--light);
        }
        
        body[data-theme='light'] .search-input::placeholder {
          color: rgba(0, 0, 0, 0.4);
        }
        
        body[data-theme='light'] .faq-question {
          color: var(--light);
        }
        
        body[data-theme='light'] .faq-answer p {
          color: #555;
        }
        
        @media (max-width: 768px) {
          .keyword-filters {
            flex-wrap: nowrap;
            overflow-x: auto;
            padding-bottom: 10px;
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          
          .keyword-filters::-webkit-scrollbar {
            display: none;
          }
          
          .keyword-filter {
            flex: 0 0 auto;
          }
          
          .faq-question {
            font-size: 1rem;
          }
        }
        `}
      </style>
    </section>
  );
};

export default FAQ;
