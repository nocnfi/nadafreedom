import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/Footer';
import AboutContent from '../components/about/AboutContent';

const AboutUs = () => {
    const [activeTab, setActiveTab] = useState('we');

    // 1. HEADER GALLERY
    const galleryItems = [
        { src: "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?q=80&w=600", height: "h-64 md:h-96", width: "w-[45%] md:w-48", alt: "Technology" },
        { src: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=600", height: "h-56 md:h-80", width: "w-[45%] md:w-56", alt: "Server Room" },
        { src: "https://images.unsplash.com/photo-1544197150-b99a580bbc7c?q=80&w=600", height: "h-32 md:h-48", width: "w-[45%] md:w-64", alt: "Router" },
        { src: "https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=600", height: "h-32 md:h-48", width: "w-[45%] md:w-40", alt: "Hardware" },
        { src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600", height: "h-48 md:h-72", width: "w-[45%] md:w-52", alt: "Server Rack" },
        { src: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=600", height: "h-64 md:h-96", width: "w-[45%] md:w-48", alt: "Fiber Optic" },
    ];

    // 2. NAVIGASI GANTUNG
    const values = [
        { id: 'we', title: "Who We Are", icon: "/icons/icon-we.svg" },      
        { id: 'vision', title: "Our Vision", icon: "/icons/icon-vision.svg" },   
        { id: 'mission', title: "Our Mission", icon: "/icons/icon-mission.svg" },
        { id: 'values', title: "Our Values", icon: "/icons/icon-value.svg" },    
    ];

    return (
        <div className="w-full bg-white min-h-screen font-['Poppins'] flex flex-col overflow-x-hidden relative">
            <Navbar />
            
            <main className="flex-grow relative">
                
                {/* SECTION 1: HEADER & GALLERY */}
                <div className="relative w-full pt-20 pb-0"> 
                    <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                        <img src="/images/bg-world.svg" alt="" className="w-full h-full object-cover object-bottom opacity-60"/>
                    </div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="text-center mt-10 md:mt-16">
                            <h1 className="text-5xl md:text-8xl font-extrabold text-blue-600 mb-6 tracking-tight drop-shadow-sm">
                                ABOUT <span className="text-blue-500">US</span>
                            </h1>
                            <div className="max-w-2xl mx-auto space-y-3">
                                <p className="text-blue-900 font-bold text-xl md:text-2xl">We Grow Because You Grow.</p>
                                <p className="text-gray-500 text-sm md:text-base leading-relaxed font-medium px-4">
                                    Step into the Future with the Full Connection <br className="hidden md:block"/> 
                                    and Support of Nada Freedom Indonesia.
                                </p>
                            </div>
                        </div>

                        {/* Gallery Grid */}
                        <div className="flex flex-wrap justify-center items-end gap-3 md:gap-6 mt-20 md:mt-48 w-full max-w-[1400px] mx-auto pb-10">
                            {galleryItems.map((item, index) => (
                                <div key={index} className={`relative rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl border-2 border-white bg-white transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:z-20 flex-shrink-0 cursor-pointer group ${item.height} ${item.width}`}>
                                    <img src={item.src} alt={item.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onError={(e) => e.target.style.backgroundColor = '#e0e7ff'} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <p className="absolute bottom-4 left-4 text-white font-medium text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.alt}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* SECTION 2: NAVIGATION & CONTENT */}
                <div className="w-full py-12 md:py-24 relative z-10 bg-white">
                    <div className="container mx-auto px-4 text-center">
                        <div className="mb-16 md:mb-24">
                            <h2 className="text-2xl md:text-4xl font-bold text-blue-900">how this company started,</h2>
                            <h3 className="text-xl md:text-3xl font-bold text-blue-900/80">its journey, and its milestones</h3>
                        </div>

                        <div className="relative max-w-6xl mx-auto px-4">
                            {/* Tali Jemuran */}
                            <div className="absolute top-0 left-4 right-4 md:left-0 md:right-0 border-t-[4px] border-dotted border-blue-900 z-0"></div>

                            {/* Menu Gantung */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-4 md:gap-16 relative z-10 -mt-[11px]"> 
                                {values.map((item, index) => {
                                    const randomDuration = 3 + Math.random() * 2 + 's'; 
                                    const randomDelay = Math.random() * -2 + 's'; 
                                    const isActive = activeTab === item.id;

                                    return (
                                        <div key={index} className="flex flex-col items-center group perspective-1000 cursor-pointer" onClick={() => setActiveTab(item.id)}>
                                            <div className="w-6 h-6 bg-blue-600 rounded-full border-[3px] border-white shadow-md z-20"></div>
                                            
                                            <div className="flex flex-col items-center animate-swinging" style={{ animationDuration: randomDuration, animationDelay: randomDelay }}>
                                                <div className="w-[2px] h-12 bg-gray-400"></div>
                                                <div className="w-5 h-4 bg-gray-800 rounded-sm -mt-1 shadow-sm z-20"></div>
                                                <div className="w-8 h-6 border-l-2 border-r-2 border-b-2 border-gray-400 rounded-b-lg -mt-2 mb-[-8px] z-10"></div>
                                                
                                                <div className={`relative p-3 pb-6 shadow-xl border border-gray-100 w-36 md:w-52 z-10 mt-1 rounded-sm transition-all duration-300  'bg-white hover:bg-gray-50'}`}>
                                                    <div className="w-full aspect-square bg-[#1E1E1E] rounded-sm flex items-center justify-center mb-4 overflow-hidden p-6">
                                                        <img src={item.icon} alt={item.title} className="w-full h-full object-contain filter drop-shadow-lg"/>
                                                    </div>
                                                    <div className="text-center">
                                                        <span className="font-extrabold text-blue-900 text-lg uppercase tracking-wide">{item.title}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* LOAD KONTEN SHAPE FOLDER */}
                        <AboutContent activeTab={activeTab} />

                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default AboutUs;