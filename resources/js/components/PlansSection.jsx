import React, { useState, useEffect } from 'react';

const PlansSection = () => {
    const [isToggled, setIsToggled] = useState(false);
    const [showLoop, setShowLoop] = useState(false);

    const handleToggle = () => {
        const newState = !isToggled;
        setIsToggled(newState);

        if (newState) {
            setTimeout(() => setShowLoop(true), 1000);
        } else {
            setShowLoop(false);
        }
    };

    return (
        <section className="relative w-full bg-white pt-32 pb-20 font-['Poppins']">
            <div className="container mx-auto px-4 flex flex-col items-center">
                
                {/* ========================================================= */}
                {/* SECTION 1: VISUAL AREA (ILUSTRASI & WIFI) */}
                {/* ========================================================= */}
                <div className="relative w-full max-w-3xl mb-16 md:mb-24"> 
                    
                    {/* BACKGROUND ILUSTRASI ORANG */}
                    <img 
                        src="/images/plans-header-illustration.png" 
                        alt="Illustration" 
                        className="w-full h-auto object-contain mx-auto relative z-0"
                    />

                    {/* WIFI CONTAINER (Absolute di tengah Ilustrasi) */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="relative w-[55%]"> 

                            {/* --- LAYER 1: BACKGROUND ABU-ABU (WIFI MATI) --- */}
                            <div className="flex flex-col items-center justify-between opacity-30 filter grayscale">
                                <img src="/images/wifi-images/Layer-g-4.svg" className="w-full h-auto object-contain" />
                                <img src="/images/wifi-images/Layer-g-3.svg" className="w-[74%] h-auto object-contain mt-[-2%]" />
                                <img src="/images/wifi-images/Layer-g-2.svg" className="w-[48%] h-auto object-contain mt-[-2%]" />
                                <img src="/images/wifi-images/Layer-g-1.svg" className="w-[22%] h-auto object-contain mt-[-2%]" />
                            </div>

                            {/* --- LAYER 2: FOREGROUND BERWARNA (WIFI HIDUP) --- */}
                            <div className="absolute inset-0 flex flex-col items-center justify-between z-20">
                                {/* Bar 4 (Atas) */}
                                <img 
                                    src="/images/wifi-images/Layer4.svg" 
                                    className={`w-full h-auto object-contain transition-opacity duration-300 ${isToggled ? 'opacity-100' : 'opacity-0'} ${showLoop ? 'animate-pulse' : ''}`}
                                    style={{ transitionDelay: isToggled ? '600ms' : '0ms' }}
                                />
                                {/* Bar 3 */}
                                <img 
                                    src="/images/wifi-images/Layer3.svg"
                                    className={`w-[74%] h-auto object-contain mt-[-2%] transition-opacity duration-300 ${isToggled ? 'opacity-100' : 'opacity-0'}`}
                                    style={{ transitionDelay: isToggled ? '400ms' : '0ms' }}
                                />
                                {/* Bar 2 */}
                                <img 
                                    src="/images/wifi-images/Layer2.svg" 
                                    className={`w-[48%] h-auto object-contain mt-[-2%] transition-opacity duration-300 ${isToggled ? 'opacity-100' : 'opacity-0'}`}
                                    style={{ transitionDelay: isToggled ? '200ms' : '0ms' }}
                                />
                                {/* Bar 1 (Dot) */}
                                <img 
                                    src="/images/wifi-images/Layer1.svg" 
                                    className={`w-[22%] h-auto object-contain mt-[-2%] transition-opacity duration-300 ${isToggled ? 'opacity-100' : 'opacity-0'}`}
                                    style={{ transitionDelay: isToggled ? '0ms' : '0ms' }}
                                />
                            </div>

                        </div>
                    </div>
                </div>


                {/* ========================================================= */}
                {/* SECTION 2: CONTENT AREA (TEXT & CONTROLS) */}
                {/* ========================================================= */}
                <div className="relative z-20 text-center w-full max-w-4xl">
                    
                    {/* JUDUL & TOGGLE */}
                    <div className="flex flex-col items-center justify-center gap-2 mb-12">
                        
                        {/* Baris 1: Judul Statis + Toggle */}
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 flex flex-wrap items-center justify-center gap-4 tracking-tight leading-tight">
                            Price packages for 
                            
                            {/* Toggle Switch */}
                            <div 
                                onClick={handleToggle}
                                className={`
                                    w-16 h-8 rounded-full flex items-center px-1 cursor-pointer transition-all duration-300 relative top-1
                                    ${isToggled ? 'bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.6)]' : 'bg-gray-300'}
                                `}
                            >
                                <div 
                                    className={`
                                        w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out
                                        ${isToggled ? 'translate-x-8' : 'translate-x-0'}
                                    `}
                                ></div>
                            </div>
                        </h2>
                        
                        {/* Baris 2: Teks Dinamis */}
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 tracking-tight leading-tight min-h-[1.2em]">
                            {isToggled ? (
                                <span className="text-blue-600 drop-shadow-sm transition-all duration-500 ease-in-out">
                                    Connection Active
                                </span>
                            ) : (
                                <span className="text-gray-400 transition-all duration-500 ease-in-out">
                                    all your activity needs
                                </span>
                            )}
                        </h2>
                    </div>

                    {/* FILTER CITY BUTTON */}
                    <div className={`transition-all duration-700 transform ${isToggled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                        <div className="relative inline-block w-full max-w-[280px]">
                            <button className="w-full flex items-center justify-between pl-6 pr-1.5 py-1.5 border-2 border-blue-600 rounded-full bg-white transition-colors group hover:bg-blue-50">
                                <span className="text-blue-700 font-bold text-sm flex items-center gap-2">
                                    Bekasi 
                                    <svg className="w-3 h-3 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                </span>
                                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-md text-white hover:bg-blue-700 transition-colors">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </div>
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default PlansSection;