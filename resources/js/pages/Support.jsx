import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation
import { 
    LifeBuoy, MessageCircle, Phone, Mail, 
    Zap, Router, RefreshCw, Activity
} from 'lucide-react'; 

import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import FAQSection from '../components/FAQSection'; 

const Support = () => {
    const { t } = useTranslation(); // Initialize translation hook

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gray-50 pb-20">
                
                {/* 1. HERO SECTION */}
                <div className="hero-bg relative text-white py-20 px-4 overflow-hidden min-h-[450px] flex items-center justify-center">
                    <div className="hero-grid"></div>
                    <div className="glow-shape glow-1"></div>
                    <div className="glow-shape glow-2"></div>
                    <div className="data-packet packet-1"></div>
                    <div className="data-packet packet-2"></div>

                    <div className="container mx-auto max-w-4xl relative z-10 text-center pt-16">
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-6 border border-white/20">
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            <span className="text-sm font-medium">{t('support.hero.status')}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-md">
                            {t('support.hero.title')} <span className="text-[#FFC107]">{t('support.hero.subtitle')}</span>
                        </h1>
                        <p className="text-gray-200 text-lg max-w-2xl mx-auto drop-shadow-sm">
                            {t('support.hero.desc')}
                        </p>
                    </div>
                </div>

                {/* 2. CONTACT CHANNELS */}
                <div className="container mx-auto px-4 max-w-5xl -mt-16 relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* WhatsApp */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-green-500 hover:transform hover:-translate-y-2 transition-all">
                            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                <MessageCircle className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{t('support.contact.whatsapp.title')}</h3>
                            <p className="text-gray-500 text-sm mb-6">{t('support.contact.whatsapp.desc')}</p>
                            <a href="https://wa.me/6282295555976" target="_blank" rel="noreferrer" className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-colors">{t('support.contact.whatsapp.button')}</a>
                        </div>

                        {/* Telepon */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-blue-600 hover:transform hover:-translate-y-2 transition-all">
                            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                                <Phone className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{t('support.contact.phone.title')}</h3>
                            <p className="text-gray-500 text-sm mb-6">{t('support.contact.phone.desc')}</p>
                            <a href="tel:+6282295555976" className="block w-full text-center bg-[#1A237E] hover:bg-blue-900 text-white font-bold py-3 rounded-xl transition-colors">0822-9555-5976</a>
                        </div>

                        {/* Email */}
                        <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-yellow-500 hover:transform hover:-translate-y-2 transition-all">
                            <div className="w-14 h-14 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-6">
                                <Mail className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{t('support.contact.email.title')}</h3>
                            <p className="text-gray-500 text-sm mb-6">{t('support.contact.email.desc')}</p>
                            <a href="mailto:support@nadafreedom.id" className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-3 rounded-xl transition-colors">{t('support.contact.email.button')}</a>
                        </div>
                    </div>
                </div>

                {/* 3. TROUBLESHOOTING GUIDE */}
                <div className="container mx-auto px-4 max-w-4xl mt-20">
                    <div className="flex items-center gap-3 mb-8">
                        <Zap className="w-8 h-8 text-[#FFC107] fill-current" />
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1A237E]">
                            {t('support.troubleshoot.title')} <span className="text-gray-400 font-light">| {t('support.troubleshoot.subtitle')}</span>
                        </h2>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-200">
                        <p className="text-gray-600 mb-8">
                            {t('support.troubleshoot.desc')}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-4">
                                    <Router className="w-8 h-8" />
                                </div>
                                <h4 className="font-bold text-gray-800 mb-2">{t('support.troubleshoot.step1.title')}</h4>
                                <p className="text-sm text-gray-500">{t('support.troubleshoot.step1.desc')}</p>
                            </div>

                            <div className="flex flex-col items-center text-center relative">
                                <div className="hidden md:block absolute top-8 -left-1/2 w-full h-[2px] bg-gray-100 -z-10"></div>
                                <div className="w-16 h-16 bg-yellow-50 text-yellow-500 rounded-full flex items-center justify-center mb-4 z-10 bg-white">
                                    <Activity className="w-8 h-8" />
                                </div>
                                <h4 className="font-bold text-gray-800 mb-2">{t('support.troubleshoot.step2.title')}</h4>
                                <p className="text-sm text-gray-500">{t('support.troubleshoot.step2.desc')}</p>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-4">
                                    <RefreshCw className="w-8 h-8" />
                                </div>
                                <h4 className="font-bold text-gray-800 mb-2">{t('support.troubleshoot.step3.title')}</h4>
                                <p className="text-sm text-gray-500">{t('support.troubleshoot.step3.desc')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. FAQ SECTION */}
                <FAQSection />

                {/* 5. BANNER LAPOR GANGGUAN */}
                <div className="container mx-auto px-4 max-w-4xl mt-20">
                    <div className="bg-[#1A237E] rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                        <div className="absolute right-0 top-0 w-64 h-64 bg-yellow-500 rounded-full blur-3xl opacity-10 -mr-16 -mt-16"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold text-white mb-2">{t('support.banner.title')}</h3>
                            <p className="text-blue-200">
                                {t('support.banner.desc')}
                            </p>
                        </div>
                        <a 
                            href="https://wa.me/6282295555976?text=Halo%20NFI,%20internet%20saya%20bermasalah%20dengan%20ID%20Pelanggan:..."
                            target="_blank"
                            rel="noreferrer"
                            className="relative z-10 bg-[#FFC107] hover:bg-[#FFD54F] text-[#1A237E] font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 shadow-lg whitespace-nowrap"
                        >
                            {t('support.banner.button')}
                        </a>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    );
};

export default Support;