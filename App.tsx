import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { ProcessSection } from './components/ProcessSection';
import { ContactSection } from './components/ContactSection';

export type Language = 'ar' | 'en';
export type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');
  
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
        if (localStorage.theme === 'dark') {
            return 'dark';
        }
    }
    return 'light';
  });

  const toggleLang = () => {
    setLang(prevLang => (prevLang === 'ar' ? 'en' : 'ar'));
  };
  
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.style.fontFamily = lang === 'ar' ? "'Tajawal', sans-serif" : "'Poppins', sans-serif";
  }, [lang]);

  useEffect(() => {
    const root = window.document.documentElement;
    const isDark = theme === 'dark';
    root.classList.toggle('dark', isDark);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col">
      <Header lang={lang} toggleLang={toggleLang} theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow">
        <HeroSection lang={lang} theme={theme} />
        <WhyChooseUsSection lang={lang} />
        <ProcessSection lang={lang} theme={theme} />
        <ContactSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
};

export default App;