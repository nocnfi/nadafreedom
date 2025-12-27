import React, { useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import { useTranslation } from 'react-i18next';
import { Shield, Lock, FileText, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';

const PrivacyPolicy = () => {
    const { t } = useTranslation();

    // Scroll ke atas saat halaman dibuka
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sections = t('privacy.sections', { returnObjects: true });

    return (
        <div className="w-full min-h-screen bg-[#F8FAFC] font-['Poppins'] flex flex-col text-slate-800">
            
            <Navbar />

            <main className="flex-grow pt-32 md:pt-48 pb-32 relative">
                
                {/* --- BACKGROUND PATTERN --- */}
                <div className="absolute inset-0 z-0 opacity-[0.4] pointer-events-none" 
                    style={{
                        backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)',
                        backgroundSize: '32px 32px'
                    }}
                ></div>

                {/* Container Konten */}
                <div className="container mx-auto px-4 max-w-4xl relative z-10">
                    
                    {/* --- HEADER SECTION --- */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-600 text-xs font-bold tracking-wider uppercase mb-6 animate-fade-in-up">
                            <Shield className="w-4 h-4" />
                            {t('privacy.badge') || "Legal Document"}
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
                            {t('privacy.title')}
                        </h1>
                        
                        <p className="text-slate-500 font-medium mb-8">
                            {t('privacy.last_updated')}
                        </p>

                        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-200 shadow-sm text-left relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-blue-600"></div>
                            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                                {t('privacy.intro')}
                            </p>
                            <Lock className="absolute -right-6 -bottom-6 w-32 h-32 text-slate-50 rotate-12" />
                        </div>
                    </div>

                    {/* --- CONTENT SECTIONS --- */}
                    <div className="space-y-6">
                        {Array.isArray(sections) && sections.map((section, index) => (
                            <div 
                                key={index} 
                                className="group bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg hover:border-blue-100 transition-all duration-300"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="hidden md:flex flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                                        <FileText className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors">
                                            {section.title}
                                        </h2>
                                        <div className="w-full h-px bg-slate-100 mb-4"></div>
                                        <p className="text-slate-500 leading-loose text-justify text-sm md:text-base">
                                            {section.content}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* --- CONTACT CTA --- */}
                    <div className="mt-20">
                        <div className="bg-[#1A1A1A] rounded-[40px] p-10 md:p-16 text-center relative overflow-hidden">
                            {/* Dekorasi Lingkaran */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl translate-x-20 -translate-y-20"></div>
                            <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500 opacity-10 rounded-full blur-2xl -translate-x-10 translate-y-10"></div>

                            <div className="relative z-10">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6 backdrop-blur-md">
                                    <Mail className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                    Masih ada pertanyaan?
                                </h3>
                                <p className="text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
                                    {t('privacy.contact_intro')}
                                </p>
                                
                                {/* UPDATE EMAIL DI SINI */}
                                <a 
                                    href="mailto:info@nfi.net.id" 
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-blue-50 transition-transform transform hover:-translate-y-1 shadow-xl hover:shadow-2xl"
                                >
                                    <span>{t('privacy.contact_btn')}</span>
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer Kecil */}
                    <div className="mt-12 text-center">
                        <p className="text-xs text-slate-400 flex items-center justify-center gap-2">
                            <CheckCircle2 className="w-3 h-3" />
                            Official Legal Page of PT Nada Freedom Indonesia
                        </p>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;