import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const FAQSection = () => {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState('General');
    const [openFaqIndex, setOpenFaqIndex] = useState(0); 

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setOpenFaqIndex(null); 
    };

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    // Sesuaikan keys kategori dengan file JSON
    const categories = ["General", "Billing", "Technical", "Support"];

    // Data FAQ (ID harus sesuai dengan key di translation.json)
    const faqData = [
        { category: "General", id: "1", icon: <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
        { category: "General", id: "2", icon: <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg> },
        { category: "General", id: "3", icon: <svg className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg> },
        { category: "Billing", id: "4", icon: <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
        { category: "Billing", id: "5", icon: <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg> },
        { category: "Billing", id: "6", icon: <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg> },
        { category: "Billing", id: "7", icon: <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> },
        { category: "Technical", id: "8", icon: <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg> },
        { category: "Technical", id: "9", icon: <svg className="w-5 h-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
        { category: "Support", id: "10", icon: <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 14l-1 1-1 1H6v-1l4-4 1-1" /></svg> },
        { category: "Support", id: "11", icon: <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg> }
    ];

    const filteredFaqs = faqData.filter(item => item.category === activeCategory);

    return (
        // PERBAIKAN: Menambahkan 'mt-24 pt-10' agar tidak nabrak dengan konten di atasnya
        <div className="max-w-4xl mx-auto mt-24 pt-10 mb-32 px-4 font-['Poppins']">
            
            {/* Header */}
            <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight custom-text-color">
                    {t('faq.title')}
                </h3>
                <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
                    {t('faq.subtitle')} 
                    <a href="mailto:info@nfi.net.id" className="text-gray-700 font-semibold underline decoration-2 decoration-blue-400 hover:text-blue-600 ml-1">
                        {t('faq.chat_link')}
                    </a>
                </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => handleCategoryChange(cat)}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border 
                        ${activeCategory === cat 
                            ? 'bg-gray-900 text-white border-gray-900 shadow-md transform scale-105' 
                            : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}
                    >
                        {t(`faq.categories.${cat}`)}
                    </button>
                ))}
            </div>

            {/* List */}
            <div className="space-y-2">
                {filteredFaqs.map((faq, index) => (
                    <div key={index} className="bg-transparent overflow-hidden">
                        <button 
                            onClick={() => toggleFaq(index)}
                            className="w-full py-6 flex items-start gap-4 text-left outline-none group border-b border-gray-100"
                        >
                            <div className="flex-shrink-0 mt-1">
                                <div className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-colors duration-300
                                    ${openFaqIndex === index ? 'bg-blue-50 border-blue-100' : 'bg-white border-gray-200'}`}>
                                    {faq.icon}
                                </div>
                            </div>

                            <div className="flex-grow pr-4">
                                <span className="font-bold text-gray-900 text-base md:text-lg block mb-1">
                                    {/* Memanggil translasi berdasarkan ID */}
                                    {t(`faq.questions.q${faq.id}`)}
                                </span>
                                
                                <div className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaqIndex === index ? 'max-h-60 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">
                                        {t(`faq.questions.a${faq.id}`)}
                                    </p>
                                </div>
                            </div>

                            <div className="flex-shrink-0 mt-1">
                                <span className={`flex items-center justify-center w-6 h-6 rounded-full border border-gray-200 text-gray-400 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180 bg-gray-100 text-gray-600' : 'bg-white'}`}>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </div>
                        </button>
                    </div>
                ))}

                {filteredFaqs.length === 0 && (
                    <div className="text-center py-10 text-gray-400">
                        {t('faq.no_data')}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FAQSection;