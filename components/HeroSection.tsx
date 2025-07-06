import React from 'react';
import type { Language, Theme } from '../App';
import { content } from '../content';
import { useOnScreen } from '../hooks/useOnScreen';

interface LangProps {
  lang: Language;
  theme: Theme;
}

export const HeroSection: React.FC<LangProps> = ({ lang, theme }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.3 });
    const texts = content[lang];
    
    const subtleBgStyle = {
        backgroundImage: theme === 'light'
            ? `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230D2C54' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            : `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    };

  return (
    <section 
        ref={ref}
        className="relative bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-center overflow-hidden py-24 md:py-32 lg:py-40" 
        style={subtleBgStyle}
    >
        <div className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight text-[#0D2C54] dark:text-gray-100">
                {texts.heroTitle}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                {texts.heroSubtitle}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                 <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-center text-white bg-[#28A745] rounded-lg hover:bg-green-600 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-800 transition-all transform hover:scale-105"
                >
                    {texts.headerCTA}
                </a>
            </div>
        </div>
    </section>
  );
};