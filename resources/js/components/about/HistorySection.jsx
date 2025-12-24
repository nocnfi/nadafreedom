import React from 'react';
import { useTranslation } from 'react-i18next';

const HistorySection = () => {
    const { t } = useTranslation();

    const historyItems = [
        { label: t('about_page.history.list_1_label'), val: t('about_page.history.list_1_val') },
        { label: t('about_page.history.list_2_label'), val: t('about_page.history.list_2_val') },
        { label: t('about_page.history.list_3_label'), val: t('about_page.history.list_3_val') },
        { label: t('about_page.history.list_4_label'), val: t('about_page.history.list_4_val') }
    ];

    return (
        <div className="animate-fade-in-up flex flex-col lg:flex-row gap-12 items-start lg:items-center h-full">
            <div className="flex-1 w-full">
                <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-3 border-b border-gray-200 pb-2 inline-block">
                    {t('about_page.history.title')}
                </h3>
                
                <div className="text-gray-600 text-sm md:text-[15px] leading-relaxed space-y-4 text-justify mb-8">
                    <p>{t('about_page.history.p1')}</p>
                    <p>{t('about_page.history.p2')}</p>
                </div>

                <div className="space-y-4">
                    {historyItems.map((item, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm border-b border-dashed border-gray-200 pb-2 last:border-0 hover:bg-gray-50 transition-colors p-1 rounded">
                            <div className="flex items-center gap-2 min-w-[180px]">
                                <span className="w-5 h-5 bg-blue-100 text-blue-600 flex items-center justify-center text-xs rounded-full">✓</span> 
                                <span className="font-bold text-gray-800">{item.label}</span>
                            </div>
                            <span className="hidden sm:block text-gray-400">:</span>
                            <span className="text-gray-600 font-medium pl-7 sm:pl-0">{item.val}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full lg:w-5/12 flex items-center justify-center relative mt-6 lg:mt-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-50 rounded-full blur-2xl -z-10"></div>
                <img 
                    src="/images/we.svg" 
                    alt="History Illustration" 
                    className="w-full max-w-sm object-contain drop-shadow-lg hover:scale-105 transition-transform duration-500"
                />
            </div>
        </div>
    );
};

export default HistorySection;