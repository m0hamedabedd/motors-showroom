import React from 'react';
import type { Language, Theme } from '../App';
import { content } from '../content';
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';
import { Logo } from './Logo';


interface HeaderProps {
    lang: Language;
    toggleLang: () => void;
    theme: Theme;
    toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, toggleLang, theme, toggleTheme }) => {
  const texts = content[lang];
  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="flex items-center">
            <Logo className="h-24 w-24" />
          </a>
          <div className="flex items-center gap-1 md:gap-2">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-base font-medium text-center text-white bg-[#28A745] rounded-lg hover:bg-green-600 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 transition-colors"
            >
              {texts.headerCTA}
            </a>
            <button 
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              {theme === 'light' ? <MoonIcon className="w-5 h-5"/> : <SunIcon className="w-5 h-5"/>}
            </button>
            <button 
              onClick={toggleLang}
              className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#0057B8] dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
            >
                {texts.toggleLang}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};