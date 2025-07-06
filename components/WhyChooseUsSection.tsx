import React from 'react';
import type { Language } from '../App';
import { content } from '../content';
import { useOnScreen } from '../hooks/useOnScreen';
import { HomeIcon } from './icons/HomeIcon';
import { AcademicCapIcon } from './icons/AcademicCapIcon';
import { LocationPinIcon } from './icons/LocationPinIcon';

interface LangProps {
  lang: Language;
}

export const WhyChooseUsSection: React.FC<LangProps> = ({ lang }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    const texts = content[lang];
    const features = [
        {
            icon: <HomeIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
            title: texts.features[0].title,
            description: texts.features[0].description,
        },
        {
            icon: <AcademicCapIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
            title: texts.features[1].title,
            description: texts.features[1].description,
        },
        {
            icon: <LocationPinIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />,
            title: texts.features[2].title,
            description: texts.features[2].description,
        },
    ];

    return (
        <section id="why-us" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900" ref={ref}>
            <div className={`container mx-auto px-4 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0057B8] dark:text-blue-400">{texts.whyChooseUsTitle}</h2>
                    <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg max-w-2xl mx-auto">{texts.whyChooseUsSubtitle}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            className="group bg-white dark:bg-gray-800 p-8 rounded-2xl text-center border border-gray-200/80 dark:border-gray-700 shadow-lg hover:shadow-blue-100/50 dark:hover:shadow-blue-900/40 transition-all duration-300 transform hover:-translate-y-2"
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="flex justify-center items-center mb-5 h-16 w-16 mx-auto bg-blue-100 dark:bg-gray-700 rounded-full transition-transform duration-300 group-hover:scale-110">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};