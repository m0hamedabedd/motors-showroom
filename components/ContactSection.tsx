import React, { useState } from 'react';
import type { Language } from '../App';
import { content } from '../content';
import { useOnScreen } from '../hooks/useOnScreen';
import { WhatsAppIcon } from './icons/WhatsAppIcon';

interface LangProps {
  lang: Language;
}

export const ContactSection: React.FC<LangProps> = ({ lang }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    const texts = content[lang];
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        car: '',
        location: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const whatsappNumber = "201099041945";
        const msg = content[lang].whatsappMessage;
        const message = `
${msg.intro}
${msg.name}: ${formData.name}
${msg.phone}: ${formData.phone}
${msg.car}: ${formData.car}
${msg.location}: ${formData.location}
        `.trim().replace(/\s\s+/g, ' ').replace(/\n/g, '%0A').replace(/ /g, '%20');

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contact" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900" ref={ref}>
            <div className={`container mx-auto px-4 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-start flex flex-col items-center lg:items-start">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0057B8] dark:text-blue-400">{texts.contactTitle}</h2>
                        <p className="mt-4 text-xl text-gray-600 dark:text-gray-400">
                            {texts.contactSubtitle}
                        </p>
                         <a
                            href="https://wa.me/201099041945"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex items-center gap-3 bg-[#28A745] text-white font-bold px-8 py-4 rounded-lg hover:bg-green-600 transition-all transform hover:scale-105"
                        >
                            <WhatsAppIcon className="h-6 w-6" />
                            {texts.contactWhatsApp}
                        </a>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-200 dark:border-gray-700 shadow-xl">
                        <form onSubmit={handleSubmit} className="space-y-5">
                             <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 text-center mb-6">{texts.formTitle}</h3>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">{texts.formName}</label>
                                <input type="text" id="name" name="name" onChange={handleChange} value={formData.name} className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 block w-full p-3.5 placeholder-gray-400 dark:placeholder-gray-500 transition-colors" placeholder={texts.formNamePlaceholder} required />
                            </div>
                             <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">{texts.formPhone}</label>
                                <input type="tel" id="phone" name="phone" onChange={handleChange} value={formData.phone} className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 block w-full p-3.5 placeholder-gray-400 dark:placeholder-gray-500 transition-colors" placeholder={texts.formPhonePlaceholder} required />
                            </div>
                             <div>
                                <label htmlFor="car" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">{texts.formCar}</label>
                                <input type="text" id="car" name="car" onChange={handleChange} value={formData.car} className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 block w-full p-3.5 placeholder-gray-400 dark:placeholder-gray-500 transition-colors" placeholder={texts.formCarPlaceholder} required />
                            </div>
                            <div>
                                <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">{texts.formLocation}</label>
                                <input type="text" id="location" name="location" onChange={handleChange} value={formData.location} className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white text-sm rounded-lg focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 block w-full p-3.5 placeholder-gray-400 dark:placeholder-gray-500 transition-colors" placeholder={texts.formLocationPlaceholder} required />
                            </div>
                            <button type="submit" className="w-full text-white bg-[#28A745] hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-base px-5 py-3.5 text-center transition-all transform hover:scale-105">{texts.formSubmit}</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};