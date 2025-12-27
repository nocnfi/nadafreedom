import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
    Gift, CheckCircle, XCircle, AlertCircle, 
    ArrowRight, BadgePercent 
} from 'lucide-react';

import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import CoverageSection from '../components/CoverageSection';

const FreeInstallation = () => {
    const { t } = useTranslation();

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-gray-50 pb-20">
                
                {/* 1. HERO SECTION PROMO */}
                {/* PERBAIKAN: Mengubah 'py-20' menjadi 'pt-24 pb-48' */}
                {/* 'pb-48' memberikan ruang besar di bawah tombol agar tidak tertabrak kartu putih */}
                <div className="hero-bg relative text-white pt-24 pb-48 px-4 overflow-hidden min-h-[500px] flex items-center justify-center">
                    <div className="hero-grid"></div>
                    <div className="glow-shape glow-1"></div>
                    <div className="glow-shape glow-2"></div>

                    {/* Confetti / Dekorasi tambahan */}
                    <div className="absolute top-10 right-10 opacity-20 animate-bounce">
                        <Gift className="w-24 h-24 text-yellow-400" />
                    </div>
                    <div className="absolute bottom-10 left-10 opacity-20 animate-pulse">
                        <BadgePercent className="w-32 h-32 text-green-400" />
                    </div>

                    <div className="container mx-auto max-w-5xl relative z-10 text-center pt-10">
                        <div className="inline-block bg-[#FFC107] text-[#1A237E] font-black px-6 py-2 rounded-full transform -rotate-2 mb-6 shadow-lg border-2 border-white">
                            {t('promo.hero.badge')}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-xl">
                            {t('promo.hero.title_start')} <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                                {t('promo.hero.title_highlight')}
                            </span>
                        </h1>
                        <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                            {t('promo.hero.desc')}
                        </p>
                        
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <a 
                                href="https://wa.me/6282295555976?text=Halo%20NFI,%20saya%20mau%20klaim%20promo%20gratis%20pasang" 
                                target="_blank" 
                                rel="noreferrer"
                                className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center gap-2"
                            >
                                {t('promo.hero.cta_primary')} <ArrowRight className="w-5 h-5" />
                            </a>
                            <a 
                                href="#terms" 
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-semibold py-4 px-10 rounded-full border border-white/30 transition-colors"
                            >
                                {t('promo.hero.cta_secondary')}
                            </a>
                        </div>
                    </div>
                </div>

                {/* 2. VALUE COMPARISON (HEMAT BERAPA?) */}
                {/* -mt-20 akan menarik kartu ke atas, tapi karena pb-48 di atas, tombol tetap aman */}
                <div className="container mx-auto px-4 max-w-5xl -mt-20 relative z-20">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            
                            {/* Sisi Kiri: Biasanya (Berbayar) */}
                            <div className="p-10 bg-gray-50 text-gray-400 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gray-100 opacity-50 z-0"></div>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                        <XCircle className="w-6 h-6 text-red-400" />
                                        {t('promo.comparison.normal_title')}
                                    </h3>
                                    <ul className="space-y-4">
                                        <li className="flex justify-between items-center line-through decoration-red-400">
                                            <span>{t('promo.items.registration')}</span>
                                            <span className="font-mono">Rp 150.000</span>
                                        </li>
                                        <li className="flex justify-between items-center line-through decoration-red-400">
                                            <span>{t('promo.items.installation')}</span>
                                            <span className="font-mono">Rp 350.000</span>
                                        </li>
                                        <li className="flex justify-between items-center line-through decoration-red-400">
                                            <span>{t('promo.items.setting')}</span>
                                            <span className="font-mono">Rp 100.000</span>
                                        </li>
                                        <li className="border-t border-gray-300 pt-4 mt-4 flex justify-between items-center font-bold text-lg">
                                            <span>Total</span>
                                            <span>Rp 600.000</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Sisi Kanan: PROMO NFI (Gratis) */}
                            <div className="p-10 bg-white text-gray-800 relative">
                                <div className="absolute top-0 right-0 bg-[#FFC107] text-[#1A237E] text-xs font-bold px-3 py-1 rounded-bl-xl">
                                    BEST DEAL
                                </div>
                                <h3 className="text-xl font-bold text-[#1A237E] mb-6 flex items-center gap-2">
                                    <CheckCircle className="w-6 h-6 text-green-500" />
                                    {t('promo.comparison.promo_title')}
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex justify-between items-center text-green-600 font-medium">
                                        <span>{t('promo.items.registration')}</span>
                                        <span className="bg-green-100 px-3 py-1 rounded-full text-sm">FREE</span>
                                    </li>
                                    <li className="flex justify-between items-center text-green-600 font-medium">
                                        <span>{t('promo.items.installation')}</span>
                                        <span className="bg-green-100 px-3 py-1 rounded-full text-sm">FREE</span>
                                    </li>
                                    <li className="flex justify-between items-center text-green-600 font-medium">
                                        <span>{t('promo.items.setting')}</span>
                                        <span className="bg-green-100 px-3 py-1 rounded-full text-sm">FREE</span>
                                    </li>
                                    <li className="border-t border-gray-100 pt-4 mt-4 flex justify-between items-center">
                                        <span className="font-bold text-gray-800 text-lg">{t('promo.comparison.you_pay')}</span>
                                        <span className="text-4xl font-black text-[#1A237E]">Rp 0,-</span>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                {/* 3. SYARAT & KETENTUAN */}
                <div id="terms" className="container mx-auto px-4 max-w-4xl mt-20">
                    <div className="flex items-start gap-4 p-6 bg-blue-50 border border-blue-100 rounded-2xl">
                        <AlertCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-xl font-bold text-[#1A237E] mb-3">
                                {t('promo.terms.title')}
                            </h3>
                            <ul className="list-disc pl-5 space-y-2 text-gray-600">
                                <li>{t('promo.terms.point1')}</li>
                                <li>{t('promo.terms.point2')}</li>
                                <li>{t('promo.terms.point3')}</li>
                                <li>{t('promo.terms.point4')}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 4. COVERAGE MAP SECTION */}
                <div className="mt-20">
                     <CoverageSection />
                </div>

                {/* PERBAIKAN: Bagian 'Pastikan Lokasi Anda Tercover' (tombol bawah) SUDAHDIHAPUS di sini */}

            </div>

            <Footer />
        </>
    );
};

export default FreeInstallation;