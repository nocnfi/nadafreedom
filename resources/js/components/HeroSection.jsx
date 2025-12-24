import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleConnect = () => {
        const section = document.getElementById('solutions-section');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const cards = [
        {
            title: t('hero.card_uptime_title'),
            desc: t('hero.card_uptime_desc'),
        },
        {
            title: t('hero.card_response_title'),
            desc: t('hero.card_response_desc'),
        },
        {
            title: t('hero.card_fiber_title'),
            desc: t('hero.card_fiber_desc'),
        }
    ];

    return (
        /* PERBAIKAN LOGIKA POSISI:
           1. Menghapus 'justify-center'. Ini PENTING. Agar konten tidak memaksa ke tengah (di belakang navbar).
           2. Menambahkan 'pt-28' (mobile) dan 'lg:pt-40' (desktop). 
              Ini memberi jarak fisik pasti (sekitar 112px - 160px) dari atas layar, 
              sehingga teks 'Kualitas Terbaik' pasti muncul DI BAWAH navbar.
           3. 'pb-20' menjaga jarak di bawah.
        */
        <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col font-poppins pt-28 lg:pt-40 pb-20">
            
            {/* --- LAYER 1: Background Mesh --- */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0">
                <img 
                    src="/images/connect.png" 
                    alt="Network Mesh" 
                    className="w-full h-full object-cover object-top opacity-30 lg:opacity-60"
                />
            </div>

            {/* --- LAYER 2: Talent --- */}
            <img 
                src="/images/talent.png" 
                alt="Professional Talent" 
                className="absolute bottom-0 right-[-10%] lg:right-0 z-10 object-contain object-bottom
                           w-[90%] md:w-1/2 lg:w-auto 
                           h-[40vh] md:h-[60vh] lg:h-[95vh] opacity-20 lg:opacity-100" 
            />

            {/* --- LAYER 3: Konten Utama --- */}
            <div className="relative z-20 container mx-auto px-6 md:px-12 lg:px-24 flex flex-col h-full">
                
                {/* Bagian Teks */}
                <div className="mb-12 lg:mb-20 max-w-2xl text-center lg:text-left">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-poppins font-semibold leading-tight md:leading-[1.15] mb-6 custom-text-color">
                        {t('hero.title_1')}<br className="hidden lg:block" />
                        {' '}{t('hero.title_2')}<br className="hidden lg:block" />
                        {' '}{t('hero.title_3')}
                    </h1>

                    <div className="flex items-center justify-center lg:justify-start space-x-2 text-xs md:text-sm font-semibold font-poppins text-gray-700 mb-8 lg:mb-10 tracking-wider uppercase">
                        <span>🔥</span>
                        <span>{t('hero.partner')}</span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 lg:gap-6">
                        <button 
                            onClick={handleConnect}
                            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white font-semibold text-sm md:text-base font-poppins shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:-translate-y-0.5 transition-all flex justify-center items-center gap-3 rounded-br-xl rounded-tl-xl rounded-tr-[2em] rounded-bl-[2em]"
                        >
                            {t('hero.btn_connect')}
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                            </span>
                        </button>
                        
                        <button 
                            onClick={() => navigate('/terms-and-conditions')}
                            className="w-full sm:w-auto text-gray-800 font-semibold text-sm md:text-base font-poppins underline decoration-2 underline-offset-8 hover:text-blue-600 transition py-2"
                        >
                            {t('hero.btn_learn')}
                        </button>
                    </div>
                </div>

                {/* Bagian Kartu */}
                {/* Menggunakan mt-auto di desktop agar kartu turun ke bawah jika layar tinggi */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 w-full lg:mt-auto">
                    {cards.map((card, index) => (
                        <div 
                            key={index} 
                            className="bg-white/60 lg:bg-white/40 backdrop-blur-md border border-white/60 rounded-[25px] lg:rounded-[30px] p-5 lg:p-8 shadow-lg lg:shadow-xl hover:bg-white/70 transition-all duration-300"
                        >
                            <h3 className="text-lg lg:text-[22px] font-semibold text-blue-900 leading-tight">
                                {card.title}
                            </h3>
                            
                            <div className="w-10 lg:w-12 h-1 bg-gradient-to-r from-[#6717cd] to-[#2871fa] rounded-full mt-2 lg:mt-3 mb-1"></div>

                            <p className="text-gray-700 lg:text-gray-800 text-xs lg:text-[15px] font-medium mt-2">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}