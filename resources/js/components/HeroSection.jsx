import React from 'react';
import { useTranslation } from 'react-i18next'; // 1. Import hook

export default function HeroSection() {
    const { t } = useTranslation(); // 2. Inisialisasi hook

    // 3. Pindahkan data ke dalam komponen agar bisa menggunakan fungsi t()
    const cards = [
        {
            title: t('hero.card_uptime_title'),
            desc: t('hero.card_uptime_desc'),
            hasIndicator: false
        },
        {
            title: t('hero.card_response_title'),
            desc: t('hero.card_response_desc'),
            hasIndicator: false
        },
        {
            title: t('hero.card_fiber_title'),
            desc: t('hero.card_fiber_desc'),
            hasIndicator: true 
        }
    ];

    return (
        <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col justify-center font-poppins">
            
            {/* --- LAYER 1: Background Mesh --- */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0">
                <img 
                    src="/images/connect.png" 
                    alt="Network Mesh" 
                    className="w-full h-full object-cover object-top opacity-60"
                />
            </div>

            {/* --- LAYER 2: Talent --- */}
            <img 
                src="/images/talent.png" 
                alt="Professional Talent" 
                className="absolute bottom-0 right-0 z-10 object-contain object-bottom
                           w-3/4 md:w-1/2 lg:w-auto 
                           h-[50vh] md:h-[70vh] lg:h-[95vh]" 
            />

            {/* --- LAYER 3: Konten Utama --- */}
            <div className="relative z-20 container mx-auto px-6 md:px-12 lg:px-24 h-full flex flex-col justify-center min-h-screen pb-10">
                
                {/* Bagian Teks */}
                <div className="mt-20 lg:mt-0 mb-auto lg:mb-20 pt-10 max-w-2xl">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold leading-[1.15] mb-6 custom-text-color">
                        {t('hero.title_1')}<br />
                        {t('hero.title_2')}<br />
                        {t('hero.title_3')}
                    </h1>

                    <div className="flex items-center space-x-2 text-sm font-semibold font-poppins text-gray-700 mb-10 tracking-wider uppercase">
                        <span>🔥</span>
                        <span>{t('hero.partner')}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-6">
                        <button className="px-8 py-3.5 bg-blue-600 text-white font-semibold font-poppins shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:-translate-y-0.5 transition-all flex items-center gap-3 rounded-br-xl rounded-tl-xl rounded-tr-[3em] rounded-bl-[3em]">
                            {t('hero.btn_connect')}
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                            </span>
                        </button>
                        
                        <button className="text-gray-800 font-semibold font-poppins underline decoration-2 underline-offset-8 hover:text-blue-600 transition">
                            {t('hero.btn_learn')}
                        </button>
                    </div>
                </div>

                {/* Bagian Kartu */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    {cards.map((card, index) => (
                        <div 
                            key={index} 
                            className="bg-white/40 backdrop-blur-md border border-white/60 rounded-[30px] p-6 lg:p-8 shadow-xl hover:bg-white/60 transition-all duration-300"
                        >
                            <h3 className="text-xl lg:text-[22px] font-semibold text-blue-900 leading-tight">
                                {card.title}
                            </h3>
                            
                            <div className="w-12 h-1.5 bg-gradient-to-r from-[#6717cd] to-[#2871fa] rounded-full mt-3 mb-1"></div>

                            <p className="text-gray-800 text-sm lg:text-[15px] font-medium mt-2">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}