
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    'home': 'Home',
    'about': 'About',
    'services': 'Services',
    'gallery': 'Gallery',
    'team': 'Team',
    'faq': 'FAQ',
    'contact': 'Contact',
    
    // FAQ
    'got-questions': 'Got Questions?',
    'frequently-asked-questions': 'Frequently Asked Questions',
    'search-questions': 'Search questions...',
    'no-results': 'No matching questions found',
    
    // FAQ Questions & Answers
    'services-question': 'What services do you offer?',
    'services-answer': 'We offer a range of premium grooming services including haircuts, beard trims, hot towel shaves, hair styling, and specialized treatments for men\'s hair and scalp.',
    
    'appointment-question': 'Do I need to make an appointment?',
    'appointment-answer': 'While walk-ins are welcome, we highly recommend booking an appointment to ensure you get your preferred barber and time slot. You can book through our website or by calling us.',
    
    'haircut-time-question': 'How long does a typical haircut take?',
    'haircut-time-answer': 'A standard haircut takes approximately 30-45 minutes, while more comprehensive services like haircut and beard trim may take up to an hour.',
    
    'payment-question': 'What payment methods do you accept?',
    'payment-answer': 'We accept all major credit cards, debit cards, cash, and mobile payment options like Apple Pay and Google Pay.',
    
    'membership-question': 'Do you offer any membership or loyalty programs?',
    'membership-answer': 'Yes, we offer monthly membership packages that include discounted services and priority booking. Ask our staff about our loyalty program to earn points for each visit.'
  },
  hi: {
    // Navbar
    'home': 'होम',
    'about': 'हमारे बारे में',
    'services': 'सेवाएं',
    'gallery': 'गैलरी',
    'team': 'टीम',
    'faq': 'सामान्य प्रश्न',
    'contact': 'संपर्क',
    
    // FAQ
    'got-questions': 'सवाल हैं?',
    'frequently-asked-questions': 'अक्सर पूछे जाने वाले प्रश्न',
    'search-questions': 'प्रश्न खोजें...',
    'no-results': 'कोई मिलान प्रश्न नहीं मिला',
    
    // FAQ Questions & Answers
    'services-question': 'आप कौन सी सेवाएं प्रदान करते हैं?',
    'services-answer': 'हम पुरुषों के बालों और स्कैल्प के लिए हेयरकट, दाढ़ी ट्रिम, गर्म तौलिया शेव, हेयर स्टाइलिंग और विशेष उपचार सहित प्रीमियम ग्रूमिंग सेवाओं की एक श्रृंखला प्रदान करते हैं।',
    
    'appointment-question': 'क्या मुझे अपॉइंटमेंट लेने की जरूरत है?',
    'appointment-answer': 'वॉक-इन स्वागत है, हम आपको अपने पसंदीदा बार्बर और टाइम स्लॉट सुनिश्चित करने के लिए अपॉइंटमेंट बुक करने की अत्यधिक अनुशंसा करते हैं। आप हमारी वेबसाइट के माध्यम से या हमें कॉल करके बुक कर सकते हैं।',
    
    'haircut-time-question': 'एक आम हेयरकट में कितना समय लगता है?',
    'haircut-time-answer': 'एक मानक हेयरकट में लगभग 30-45 मिनट लगते हैं, जबकि हेयरकट और दाढ़ी ट्रिम जैसी अधिक व्यापक सेवाओं में एक घंटे तक का समय लग सकता है।',
    
    'payment-question': 'आप कौन से भुगतान के तरीके स्वीकार करते हैं?',
    'payment-answer': 'हम सभी प्रमुख क्रेडिट कार्ड, डेबिट कार्ड, नकद और Apple Pay और Google Pay जैसे मोबाइल भुगतान विकल्प स्वीकार करते हैं।',
    
    'membership-question': 'क्या आप कोई मेंबरशिप या लॉयल्टी प्रोग्राम ऑफर करते हैं?',
    'membership-answer': 'हां, हम मासिक सदस्यता पैकेज प्रदान करते हैं जिसमें छूट वाली सेवाएं और प्राथमिकता बुकिंग शामिल हैं। प्रत्येक विजिट के लिए पॉइंट अर्जित करने के लिए हमारे स्टाफ से हमारे लॉयल्टी प्रोग्राम के बारे में पूछें।'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  // Translation function
  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
