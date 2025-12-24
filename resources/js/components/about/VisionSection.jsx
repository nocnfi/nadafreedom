import React from 'react';
import { useTranslation } from 'react-i18next';

const VisionSection = () => {
    const { t } = useTranslation();

    return (
        <div className="animate-fade-in-up flex flex-col md:flex-row items-center justify-between gap-4 h-full relative">
            <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                <img 
                    src="/images/vision-human.svg" 
                    alt="Vision Left" 
                    className="h-48 md:h-64 object-contain drop-shadow-md hover:scale-105 transition-transform duration-500"
                />
            </div>

            <div className="w-full md:w-1/3 text-center z-10 px-4">
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 leading-tight mb-4">
                    {t('about_page.vision.title_1')} <br/>
                    <span className="text-blue-600">{t('about_page.vision.title_2')}</span>
                </h2>

                <div className="w-12 h-1 bg-blue-600 mx-auto my-4 rounded-full"></div>

                <div className="text-gray-600 text-sm md:text-base leading-relaxed">
                    <p>{t('about_page.vision.p1')}</p>
                    <p className="mt-2">{t('about_page.vision.p2')}</p>
                </div>
            </div>

            <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                <img 
                    src="/images/vision-mount.svg" 
                    alt="Vision Right" 
                    className="h-48 md:h-64 object-contain opacity-90 hover:rotate-3 transition-transform duration-500"
                />
            </div>
        </div>
    );
};

export default VisionSection;