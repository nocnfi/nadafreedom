import React from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';

const TermsConditions = () => {
    const { t } = useTranslation();

    // Daftar section yang ingin ditampilkan
    const sections = [1, 2, 3, 4, 5, 6];

    return (
        <div className="w-full min-h-screen bg-[#F8FAFC] font-['Poppins'] flex flex-col">
            <Navbar />

            <main className="flex-grow pt-44 pb-32">
                <div className="container mx-auto px-4 max-w-5xl">
                    
                    {/* Header Card */}
                    <div className="bg-white rounded-[50px] shadow-sm border border-gray-100 p-10 md:p-20 relative overflow-hidden">
                        
                        {/* Aksen Dekorasi */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full translate-x-32 -translate-y-32 -z-10"></div>
                        
                        <div className="mb-16">
                            <span className="bg-blue-100 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">
                                Legal Document
                            </span>
                            <h1 className="text-4xl md:text-6xl font-black text-blue-900 mb-6 leading-[1.1]">
                                {t('terms.title')}
                            </h1>
                            <p className="text-gray-400 font-medium italic">
                                {t('terms.last_updated')}
                            </p>
                        </div>

                        {/* Intro Paragraph */}
                        <div className="relative mb-20">
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600 rounded-full"></div>
                            <p className="pl-8 text-gray-600 leading-relaxed text-xl font-medium">
                                {t('terms.intro')}
                            </p>
                        </div>

                        {/* Section Loop */}
                        <div className="space-y-16">
                            {sections.map((num) => (
                                <div key={num} className="group relative">
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white border-2 border-blue-100 flex items-center justify-center text-blue-600 font-bold text-lg group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shadow-sm">
                                            {num < 10 ? `0${num}` : num}
                                        </div>
                                        <div className="flex-1 pt-2">
                                            <h2 className="text-2xl font-bold text-blue-900 mb-6 group-hover:text-blue-600 transition-colors">
                                                {t(`terms.section${num}_title`)}
                                            </h2>
                                            <div className="prose prose-lg max-w-none text-gray-500 leading-8 text-justify">
                                                {t(`terms.section${num}_content`)}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Divider antar section */}
                                    <div className="mt-16 border-b border-gray-50"></div>
                                </div>
                            ))}
                        </div>

                        {/* Closing Section */}
                        <div className="mt-24 p-10 md:p-14 bg-[#0F172A] rounded-[40px] text-white relative overflow-hidden shadow-2xl">
                            {/* Glow Effect */}
                            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-600/30 blur-[100px] rounded-full"></div>
                            
                            <div className="relative z-10">
                                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                                    PT Nada Freedom Indonesia (NFI)
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-lg max-w-3xl mb-8">
                                    {t('terms.contact_text')}
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <a href="mailto:info@nfi.net.id" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all">
                                        Email Legal Team
                                    </a>
                                    <button onClick={() => window.print()} className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all border border-white/20">
                                        Download PDF
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default TermsConditions;