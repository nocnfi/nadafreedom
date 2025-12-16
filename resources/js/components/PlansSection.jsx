import React, { useState } from 'react';
// UBAH IMPORT: Panggil PricingGrid (Hanya Data & Card), bukan InternetSolutionsSection (Full Design)
import PricingGrid from '@/components/PricingGrid'; 

const PlansSection = () => {
    const [isToggled, setIsToggled] = useState(false);
    const [showLoop, setShowLoop] = useState(false);

    const handleToggle = () => {
        const newState = !isToggled;
        setIsToggled(newState);

        if (newState) {
            // Tunggu animasi (Wifi + Orang) selesai (sekitar 1.6 detik) baru nyalakan loop
            setTimeout(() => setShowLoop(true), 1600);
        } else {
            setShowLoop(false);
        }
    };

    return (
        <section className="w-full bg-white pt-20 pb-20 font-['Poppins'] overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-24">

                    {/* ========================================================= */}
                    {/* BAGIAN 1: VISUAL AREA (WIFI, ORANG, AWAN)                 */}
                    {/* ========================================================= */}
                    <div className="relative w-full max-w-4xl h-[350px] md:h-[450px] flex items-center justify-center">
                        
                        {/* A. AWAN MARQUEE */}
                        <div className={`absolute inset-0 w-full h-full overflow-hidden transition-opacity duration-1000 ${isToggled ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="animate-marquee-cloud h-full">
                                {[1, 2, 3, 4].map((item) => (
                                    <div key={item} className="w-1/4 h-full flex items-center justify-center">
                                        <img src="/images/cloud-plan.svg" alt={`Clouds ${item}`} className="w-[95%] h-auto object-contain opacity-60" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* B. WIFI STACK */}
                        <div className="relative w-[70%] md:w-[50%] flex items-center justify-center z-10">
                            {/* Wifi Abu */}
                            <div className="flex flex-col items-center justify-between opacity-30 filter grayscale w-full">
                                <img src="/images/wifi-images/Layer-g-4.svg" className="w-full h-auto object-contain" />
                                <img src="/images/wifi-images/Layer-g-3.svg" className="w-[74%] h-auto object-contain mt-[-1.5%]" />
                                <img src="/images/wifi-images/Layer-g-2.svg" className="w-[48%] h-auto object-contain mt-[-1.5%]" />
                                <img src="/images/wifi-images/Layer-g-1.svg" className="w-[22%] h-auto object-contain mt-[-1.5%]" />
                            </div>

                            {/* Wifi Biru */}
                            <div className="absolute inset-0 flex flex-col items-center justify-between z-10 w-full">
                                <img src="/images/wifi-images/Layer4.svg" className={`w-full h-auto object-contain transition-opacity duration-300 ${isToggled ? 'opacity-100' : 'opacity-0'} ${showLoop ? 'animate-pulse' : ''}`} style={{ transitionDelay: isToggled ? '600ms' : '0ms' }} />
                                <img src="/images/wifi-images/Layer3.svg" className={`w-[74%] h-auto object-contain mt-[-1.5%] transition-opacity duration-300 ${isToggled ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: isToggled ? '400ms' : '0ms' }} />
                                <img src="/images/wifi-images/Layer2.svg" className={`w-[48%] h-auto object-contain mt-[-1.5%] transition-opacity duration-300 ${isToggled ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: isToggled ? '200ms' : '0ms' }} />
                                <img src="/images/wifi-images/Layer1.svg" className={`w-[22%] h-auto object-contain mt-[-1.5%] transition-opacity duration-300 ${isToggled ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: isToggled ? '0ms' : '0ms' }} />
                            </div>

                            {/* Orang */}
                            <div className="absolute inset-0 z-20 w-full h-full pointer-events-none">
                                <img src="/images/person-bottom.svg" className={`absolute bottom-[-10%] left-1/2 transform -translate-x-1/2 w-[20%] h-auto object-contain transition-all duration-500 ease-out ${isToggled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: isToggled ? '800ms' : '0ms' }} />
                                <img src="/images/person-middle.svg" className={`absolute bottom-[55%] left-1/2 transform -translate-x-1/2 w-[20%] h-auto object-contain transition-all duration-500 ease-out ${isToggled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: isToggled ? '1000ms' : '0ms' }} />
                                <img src="/images/person-top.svg" className={`absolute top-[-25%] left-1/3 transform -translate-x-1/2 w-[30%] h-auto object-contain transition-all duration-500 ease-out ${isToggled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: isToggled ? '1200ms' : '0ms' }} />
                            </div>
                        </div>
                    </div>

                    {/* ========================================================= */}
                    {/* BAGIAN 2: TEXT & CONTROLS                                 */}
                    {/* ========================================================= */}
                    <div className="relative z-30 text-center w-full max-w-5xl">
                        
                        {/* Judul & Toggle */}
                        <div className="flex flex-col items-center justify-center gap-4 mb-10">
                            <h2 className="text-4xl md:text-6xl font-bold text-blue-900 flex flex-wrap items-center justify-center gap-5 tracking-tight">
                                Price packages for 
                                <div onClick={handleToggle} className={`w-20 h-10 rounded-full flex items-center px-1 cursor-pointer transition-all duration-300 ${isToggled ? 'bg-blue-600 shadow-lg shadow-blue-500/50' : 'bg-gray-300'}`}>
                                    <div className={`w-8 h-8 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${isToggled ? 'translate-x-10' : 'translate-x-0'}`}></div>
                                </div>
                            </h2>
                            <h2 className="text-4xl md:text-6xl font-bold text-blue-900 tracking-tight min-h-[1.5em]">
                                {isToggled ? (
                                    <span className="text-blue-600 drop-shadow-md transition-all duration-500">Connection Active</span>
                                ) : (
                                    <span className="text-gray-400 transition-all duration-500">all your activity needs</span>
                                )}
                            </h2>
                        </div>

                        {/* Filter Button */}
                        <div className={`transition-all duration-700 ease-out transform ${isToggled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
                            <div className="relative inline-block w-full max-w-[300px]">
                                <button className="w-full flex items-center justify-between pl-6 pr-2 py-2 border-2 border-blue-600 rounded-full bg-white transition-colors hover:bg-blue-50">
                                    <span className="text-blue-700 font-bold text-base flex items-center gap-2">
                                        Bekasi 
                                        <svg className="w-4 h-4 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                    </span>
                                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-md text-white">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* ========================================================= */}
                    {/* BAGIAN 3: DATA CARD SECTION (MUNCUL JIKA TOGGLE ON)       */}
                    {/* ========================================================= */}
                    <div className={`
                        w-full transition-all duration-1000 ease-in-out transform
                        ${isToggled ? 'opacity-100 translate-y-0 max-h-[5000px]' : 'opacity-0 translate-y-20 max-h-0 overflow-hidden'}
                    `}>
                        {/* pt-10 memberi jarak agar tidak menempel dengan tombol filter */}
                        <div className="pt-10"> 
                            {/* PANGGIL PricingGrid LANGSUNG (Berisi fetch data & tampilan kartu saja) */}
                            <PricingGrid />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PlansSection;