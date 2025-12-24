import React from 'react';
import { useTranslation } from 'react-i18next';

const ValuesSection = () => {
    const { t } = useTranslation();
    
    // Mengambil array tags dari JSON
    const valuesList = t('about_page.values.tags', { returnObjects: true });

    return (
        <div className="animate-fade-in-up flex flex-col lg:flex-row items-center gap-12 h-full w-full py-6">
            <div className="w-full lg:w-1/2 px-4 relative z-30">
                <h3 className="font-bold text-gray-400 mb-3 uppercase tracking-widest text-xs">
                    PT NADA FREEDOM INDONESIA
                </h3>
                
                <div className="text-gray-600 leading-8 text-justify mb-8 text-[15px] space-y-4">
                    <p>{t('about_page.values.p1')}</p>
                    <p>{t('about_page.values.p2')}</p>
                    <p>{t('about_page.values.p3')}</p>
                </div>

                <div className="flex flex-wrap gap-3 mt-6">
                    {valuesList && valuesList.map((val, idx) => (
                        <div key={idx} className="group px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm text-sm font-semibold text-gray-500 hover:border-blue-400 hover:shadow-md transition-all flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-blue-600 transition-colors"></span>
                            <span className="group-hover:text-blue-600 transition-colors">{val}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center items-end relative mt-10 lg:mt-0 h-[380px] md:h-[480px]">
                <div className="relative w-full max-w-lg h-full flex justify-center items-end pb-2">
                    <img src="/images/globe-values.svg" alt="Globe" className="absolute z-0 opacity-90 object-contain" style={{ width: '85%', bottom: '20%', left: '50%', transform: 'translateX(-50%)' }} />
                    <img src="/images/arrow-values.svg" alt="Arrow" className="absolute z-10 animate-smooth-draw object-contain" />
                    <img src="/images/human-values.svg" alt="Hands" className="absolute z-20 object-contain" />
                </div>
            </div>
        </div>
    );
};

export default ValuesSection;