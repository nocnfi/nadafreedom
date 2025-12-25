import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import AboutContent from '../components/about/AboutContent';

const AboutUs = () => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState('we');

    // Fungsi Fallback Gambar
    const handleImageError = (e) => {
        e.target.src = "https://via.placeholder.com/600x400?text=Image+Not+Found";
        e.target.style.backgroundColor = "#e5e7eb"; 
    };

    // 1. DATA GAMBAR MANUAL (Sesuai folder public/images/about/)
    const galleryItems = [
        { 
            src: "/images/about/tech.jpg", 
            height: "h-64 md:h-96", 
            width: "w-[45%] md:w-48", 
            alt: t('about.gallery_labels.technology') 
        },
        { 
            src: "/images/about/server-room.jpg", 
            height: "h-56 md:h-80", 
            width: "w-[45%] md:w-56", 
            alt: t('about.gallery_labels.server_room') 
        },
        { 
            src: "/images/about/router.jpg", 
            height: "h-32 md:h-48", 
            width: "w-[45%] md:w-64", 
            alt: t('about.gallery_labels.router') 
        },
        { 
            src: "/images/about/hardware.jpg", 
            height: "h-32 md:h-48", 
            width: "w-[45%] md:w-40", 
            alt: t('about.gallery_labels.hardware') 
        },
        { 
            src: "/images/about/server-rack.jpg", 
            height: "h-48 md:h-72", 
            width: "w-[45%] md:w-52", 
            alt: t('about.gallery_labels.server_rack') 
        },
        { 
            src: "/images/about/fiber.jpg", 
            height: "h-64 md:h-96", 
            width: "w-[45%] md:w-48", 
            alt: t('about.gallery_labels.fiber_optic') 
        },
    ];

    // 2. DATA MENU JEMURAN
    const values = [
        { id: 'we', title: t('about.nav.we'), icon: "/images/we-contact.svg" },      
        { id: 'vision', title: t('about.nav.vision'), icon: "/images/vision.svg" },   
        { id: 'mission', title: t('about.nav.mission'), icon: "/images/mission.svg" },
        { id: 'values', title: t('about.nav.values'), icon: "/images/values.svg" },    
    ];

    return (
        <div className="w-full bg-white min-h-screen font-['Poppins'] overflow-x-hidden relative">
            
            {/* NAVBAR STICKY */}
            <div className="sticky top-0 w-full z-[9999] bg-white border-b border-gray-100">
                <Navbar />
            </div>
            
            <main className="relative">
                
                {/* SECTION 1: HEADER & GALLERY */}
                <div className="relative w-full pt-10 pb-0"> 
                    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                        <img 
                            src="/images/bg-world.svg" 
                            alt="" 
                            className="w-full h-full object-cover object-bottom opacity-60"
                            onError={(e) => e.target.style.display = 'none'} 
                        />
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mt-10 md:mt-16">
                            <h1 className="text-4xl md:text-8xl font-extrabold text-blue-600 mb-6 tracking-tight drop-shadow-sm">
                                {t('about.hero.title_1')} <span className="text-blue-500">{t('about.hero.title_2')}</span>
                            </h1>
                            <div className="max-w-2xl mx-auto space-y-3">
                                <p className="text-blue-900 font-bold text-xl md:text-2xl">{t('about.hero.tagline')}</p>
                                <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium px-4">
                                    {t('about.hero.description')}
                                </p>
                            </div>
                        </div>

                        {/* Gallery */}
                        <div className="flex flex-wrap justify-center items-end gap-3 md:gap-6 mt-20 md:mt-48 w-full max-w-[1400px] mx-auto pb-10">
                            {galleryItems.map((item, index) => (
                                <div key={index} className={`relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl border-2 border-white bg-white transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:z-20 flex-shrink-0 cursor-pointer group ${item.height} ${item.width}`}>
                                    <img 
                                        src={item.src} 
                                        alt={item.alt} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                        onError={handleImageError} 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="absolute bottom-4 left-4 text-white font-medium text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.alt}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* SECTION 2: NAVIGATION (JEMURAN) & CONTENT */}
                <div className="w-full py-12 md:py-24 relative z-10 bg-white">
                    <div className="container mx-auto px-4 text-center">
                        <div className="mb-16 md:mb-24">
                            <h2 className="text-2xl md:text-4xl font-bold text-blue-900">{t('about.milestones.title')}</h2>
                            <h3 className="text-xl md:text-3xl font-bold text-blue-900/80">{t('about.milestones.subtitle')}</h3>
                        </div>

                        <div className="relative max-w-6xl mx-auto px-4">
                            {/* Tali Jemuran */}
                            <div className="absolute top-0 left-4 right-4 md:left-0 md:right-0 border-t-[4px] border-dotted border-blue-900 z-0"></div>

                            {/* Menu Gantung */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 md:gap-16 relative z-10 -mt-[11px]"> 
                                {values.map((item, index) => {
                                    // Hitung durasi dan delay acak agar ayunan terlihat natural
                                    const randomDuration = 3 + Math.random() * 2 + 's'; 
                                    const randomDelay = Math.random() * -2 + 's'; 
                                    const isActive = activeTab === item.id;

                                    return (
                                        <div key={index} className="flex flex-col items-center group cursor-pointer" onClick={() => setActiveTab(item.id)}>
                                            {/* Paku Jemuran */}
                                            <div className={`w-6 h-6 rounded-full border-[3px] border-white shadow-md z-20 transition-colors ${isActive ? 'bg-blue-800' : 'bg-blue-600'}`}></div>
                                            
                                            {/* Wrapper Berayun: Menggunakan class 'animate-swinging' dari App.css */}
                                            <div 
                                                className="flex flex-col items-center animate-swinging" 
                                                style={{ animationDuration: randomDuration, animationDelay: randomDelay }}
                                            >
                                                {/* Tali Vertikal */}
                                                <div className="w-[2px] h-12 bg-gray-400"></div>
                                                
                                                {/* Penjepit */}
                                                <div className="w-5 h-4 bg-gray-800 rounded-sm -mt-1 shadow-sm z-20"></div>
                                                <div className="w-8 h-6 border-l-2 border-r-2 border-b-2 border-gray-400 rounded-b-lg -mt-2 mb-[-8px] z-10"></div>
                                                
                                                {/* Kertas/Kartu */}
                                                <div className={`relative p-3 pb-6 shadow-xl border border-gray-100 w-36 md:w-52 z-10 mt-1 rounded-sm transition-all duration-300 ${isActive ? 'bg-blue-50 border-blue-200' : 'bg-white hover:bg-gray-50'}`}>
                                                    <div className="w-full aspect-square bg-[#1E1E1E] rounded-sm flex items-center justify-center mb-4 overflow-hidden p-6">
                                                        <img 
                                                            src={item.icon} 
                                                            alt={item.title} 
                                                            className="w-full h-full object-contain filter drop-shadow-lg"
                                                            onError={(e) => {
                                                                e.target.style.display = 'none';
                                                                e.target.parentElement.innerHTML = '<span class="text-white text-2xl font-bold">?</span>';
                                                            }}
                                                        />
                                                    </div>
                                                    <span className={`font-extrabold text-lg uppercase ${isActive ? 'text-blue-600' : 'text-blue-900'}`}>{item.title}</span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* KONTEN UTAMA */}
                        <div className="mt-20">
                            <AboutContent activeTab={activeTab} />
                        </div>

                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default AboutUs;