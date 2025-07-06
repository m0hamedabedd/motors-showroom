import React from 'react';
import type { Language, Theme } from '../App';
import { content } from '../content';
import { useOnScreen } from '../hooks/useOnScreen';
import { PriceTagIcon } from './icons/PriceTagIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { CheckCircleIcon } from './icons/CheckCircleIcon';
import { CarIcon } from './icons/CarIcon';

interface LangProps {
  lang: Language;
  theme: Theme;
}

interface Step {
    icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
}

const ProcessStep: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: number; isVisible: boolean }> = ({ icon, title, description, delay, isVisible }) => (
    <div className={`flex flex-col items-center text-center transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} style={{transitionDelay: `${delay}ms`}}>
        <div className="bg-white dark:bg-gray-800 border-2 border-[#28A745] rounded-full p-4 z-10">
            <div className="text-[#28A745]">{icon}</div>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
        <p className="mt-1 text-gray-600 dark:text-gray-400">{description}</p>
    </div>
);


export const ProcessSection: React.FC<LangProps> = ({ lang, theme }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.2 });
    const texts = content[lang];
    const steps: Step[] = [
        { icon: <PhoneIcon className="w-7 h-7"/>, title: texts.steps[0].title, description: texts.steps[0].description },
        { icon: <CarIcon className="w-7 h-7"/>, title: texts.steps[1].title, description: texts.steps[1].description },
        { icon: <PriceTagIcon className="w-7 h-7"/>, title: texts.steps[2].title, description: texts.steps[2].description },
        { icon: <CheckCircleIcon className="w-7 h-7"/>, title: texts.steps[3].title, description: texts.steps[3].description },
    ];
    
    const subtleBgStyle = {
        backgroundImage: theme === 'light'
            ? `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`
            : `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23374151' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`
    };

    return (
        <div className="py-24 md:py-36 bg-gradient-to-br from-[#e8f5e9] via-white to-[#e3f2fd] shadow-inner" ref={ref} style={subtleBgStyle}>
            <div className={`container mx-auto px-4 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0057B8] dark:text-blue-400 mb-4 drop-shadow-md">{texts.processTitle}</h2>
                    <p className="text-gray-700 dark:text-gray-400 mt-2 text-2xl font-medium opacity-90">{texts.processSubtitle}</p>
                </div>

                {/* Mobile Stepper */}
                <div className="md:hidden space-y-12">
                    {steps.map((step, index) => (
                        <div key={index} className={`flex items-start transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`} style={{transitionDelay: `${index * 200}ms`}}>
                             <div className="flex flex-col items-center mr-4 rtl:mr-0 rtl:ml-4">
                                <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 border-2 border-[#28A745] rounded-full text-[#28A745] z-10">
                                    {React.cloneElement(step.icon, { className: "w-6 h-6" })}
                                </div>
                                {index < steps.length - 1 && <div className="w-px h-16 bg-gray-300 dark:bg-gray-700"></div>}
                            </div>
                            <div className="pt-2">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{step.title}</h3>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:block relative">
                     <div className="absolute top-7 left-0 right-0 h-0.5 bg-gray-200 dark:bg-gray-700">
                        <div className={`h-full bg-[#28A745] transition-all duration-1000 ease-out ${isVisible ? 'w-full' : 'w-0'}`}></div>
                     </div>
                     <div className="grid grid-cols-4 gap-8 text-center relative">
                        {steps.map((step, index) => (
                           <ProcessStep key={index} {...step} delay={index * 200} isVisible={isVisible} />
                        ))}
                     </div>
                </div>
            </div>
        </div>
    );
};