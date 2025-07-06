import React from 'react';
import { WhatsAppIcon } from './icons/WhatsAppIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { FacebookIcon } from './icons/FacebookIcon';
import type { Language } from '../App';
import { content } from '../content';
import { Logo } from './Logo';

interface FooterProps {
    lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const texts = content[lang];
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between sm:flex-row gap-6">
            <div className="text-center sm:text-start">
                <a href="/" className="inline-flex items-center justify-center sm:justify-start">
                    <Logo className="h-24 w-24" />
                </a>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{texts.footerSlogan}</p>
            </div>
            <div className="flex items-center gap-4">
                <a href="https://wa.me/201099041945" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-gray-500 dark:text-gray-400 hover:text-[#28A745] dark:hover:text-green-400 transition-colors">
                    <WhatsAppIcon className="w-7 h-7" />
                </a>
                <a href="tel:+201099041945" aria-label="Phone" className="text-gray-500 dark:text-gray-400 hover:text-[#28A745] dark:hover:text-green-400 transition-colors">
                    <PhoneIcon className="w-7 h-7" />
                </a>
                <a href="https://www.facebook.com/Motors.Showroom.Egypt" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-500 dark:text-gray-400 hover:text-[#28A745] dark:hover:text-green-400 transition-colors">
                    <FacebookIcon className="w-7 h-7" />
                </a>
            </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400">
            <p>&copy; {currentYear} Motors Showroom. {texts.footerRights}</p>
        </div>
      </div>
    </footer>
  );
};